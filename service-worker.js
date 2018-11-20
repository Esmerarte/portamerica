'use strict';

function timeoutPromise(ms, promise, controller) {
    return new Promise((resolve, reject) => {
        let timeoutId = setTimeout(() => {
            timeoutId = undefined;
            controller.abort();
            reject(new Error("promise timeout"));
        }, ms);
        promise.then(
            (res) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    resolve(res);
                }
            },
            (err) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    reject(err);
                }
            }
        );
    })
};
const nonuse = 24;
const FETCH_TIMEOUT = 4000;
const STATIC_CACHE = "static-cache-v8";
const DYNAMIC_CACHE = "dynamic-cache-v8";

const STATIC_CACHE_FILES = [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './assets/css/animate.min.css',
    './build/polyfills.js',
    './index.html',
    './',
    './manifest.json',
    './assets/fonts/ionicons.ttf',
    './assets/fonts/ionicons.woff?v=3.0.0-alpha.3',
    './assets/fonts/ionicons.woff2?v=3.0.0-alpha.3',
    './assets/fonts/roboto-medium.woff2',
    './assets/fonts/roboto-regular.ttf',
    './assets/fonts/roboto-regular.woff2',
    './assets/fonts/roboto-bold.ttf',
    './assets/fonts/roboto-bold.woff2',
    './assets/icon/pa-favicon.png',
    './assets/imgs/noimagebg.png',
    './assets/scripts/pjxml.js',
    './assets/icons/icon-144x144.png',
    './assets/icon/icono152x152.jpg',
    './assets/icon/icono180x180.jpg',
    './assets/icon/icono167x167.jpg',
    'https://fonts.googleapis.com/css?family=Oswald',
    'https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752HT8Gl-1PK62t.woff2'
];

const DYNAMIC_CACHE_FILES = [
    './assets/data/artistas.json',
    'https://portamerica.es/wp-json/wp/v2/posts?_embed&per_page=10&offset=0'
];

self.addEventListener('install', function(e) {
    e.waitUntil(Promise.all([
            caches.open(STATIC_CACHE).then(function(cache) {
                return cache.addAll(STATIC_CACHE_FILES);
            })
            ,
            caches.open(DYNAMIC_CACHE).then(function(cache) {
                return cache.addAll(DYNAMIC_CACHE_FILES);
            })
        ])
    );
});

self.addEventListener('activate', event => {
    self.clients.claim();
    console.log(STATIC_CACHE, DYNAMIC_CACHE, ' now activated');
});

self.addEventListener('message', (e) => {
    if (e.data.updateSw) {
        self.caches.keys().then(cacheNames => {
            for (let i = 0; i < cacheNames.length; i++) {
                if (![STATIC_CACHE, DYNAMIC_CACHE].includes(cacheNames[i])) {
                    self.caches.delete(cacheNames[i]);
                }
            }
            self.skipWaiting();
        });
    }
});

self.addEventListener('fetch', function(e) {
    if (e.request.url.startsWith('https://portamerica.es/wp-json/wp/v2/posts') ||
        e.request.url.startsWith('http://portamerica.es/wp-json/wp/v2/posts') || 
        e.request.url.endsWith('/assets/data/artistas.json')) {
        console.log(e.request.url);
        const controller = new AbortController();
        const signal = controller.signal;
        e.respondWith(
            timeoutPromise(FETCH_TIMEOUT, fetch(e.request, { signal }), controller).then(resp => {
                if (resp.ok) {
                    caches.open(DYNAMIC_CACHE).then(function(cache) {
                        return cache.put(e.request, resp.clone());
                    });
                    return resp.clone();
                } else {
                    return caches.match(e.request).then(response => {
                        if (response)
                            return response;
                        return null;
                    });
                }
            }).catch(err => {
                return caches.match(e.request).then(response => {
                    if (response)
                        return response;
                    return null;
                });
            })
        );
    } else if (e.request.url.startsWith('https://portamerica.es/wp-content/uploads/') ||
        e.request.url.startsWith('http://portamerica.es/wp-content/uploads/') || 
        e.request.url.startsWith('https://portamerica.es/app/') || 
        e.request.url.startsWith('http://portamerica.es/app/')) {

        const controller = new AbortController();
        const signal = controller.signal;
        e.respondWith(
            timeoutPromise(FETCH_TIMEOUT, fetch(e.request, { signal }), controller).then(resp => {
                if (resp) {
                    return resp.clone();
                } else {
                    return caches.match('./assets/imgs/noimagebg.png').then(function(response) {
                        if (response)
                            return response;
                        else
                            return null;
                    });
                }
            }).catch(err => {
                return caches.match('./assets/imgs/noimagebg.png').then(function(response) {
                    if (response)
                        return response;
                    else
                        return null;
                });
            })
        );
    } else if(STATIC_CACHE_FILES.map(item => (item.startsWith('./')?item.substring(2):item)).some(itemS => (itemS.length > 0 && e.request.url.endsWith(itemS)))) {
        e.respondWith(
            caches.match(e.request).then(function(response) {
                if (response) {
                    console.log('cache: ', e.request.url);
                    return response;
                } else
                    return fetch(e.request).then(res => {
                        caches.open(STATIC_CACHE).then(function(cache) {
                            return cache.put(e.request, res.clone());
                        });
                        return res.clone();
                    });
            }).catch(err => {

            })
        );
    }
	else {
		e.respondWith(fetch(e.request));
	}
});