/*! Built with http://stenciljs.com */
WpComponents.loadBundle("klnkegyp",["exports"],function(e){var t=window.WpComponents.h,n=function(){function e(){}return e.prototype.render=function(){var e=this;return this.images.split(",").map(function(n){return t("wp-img",{apisrc:e.apisrc,idmedia:n})})},Object.defineProperty(e,"is",{get:function(){return"wp-gallery"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apisrc:{type:String,attr:"apisrc"},images:{type:String,attr:"images"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-gap:20px;-ms-flex-align:stretch;align-items:stretch}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){this.imageSrc=null}return e.prototype.componentWillLoad=function(){var e=this;fetch(this.apisrc+"/wp-json/wp/v2/media/"+this.idmedia).then(function(e){return e.json()}).then(function(t){e.imageSrc=t.guid.rendered}).catch(function(){})},e.prototype.render=function(){return this.imageSrc?t("a",{href:this.imageSrc},t("img",{src:this.imageSrc})):t("div",{class:"lds-facebook"},t("div",null),t("div",null),t("div",null))},Object.defineProperty(e,"is",{get:function(){return"wp-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apisrc:{type:String,attr:"apisrc"},idmedia:{type:String,attr:"idmedia"},imageSrc:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:flow-root;background-color:#222;max-width:100%}img{max-width:100%}.lds-facebook,img{-ms-flex-item-align:center;align-self:center}.lds-facebook{margin-left:calc(50% - 32px);display:inline-block;position:relative;width:64px;height:64px}.lds-facebook div{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook div:first-child{left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div:nth-child(3){left:45px;-webkit-animation-delay:0;animation-delay:0}\@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}50%,to{top:19px;height:26px}}\@keyframes lds-facebook{0%{top:6px;height:51px}50%,to{top:19px;height:26px}}"},enumerable:!0,configurable:!0}),e}();e.WpGallery=n,e.WpImg=r,Object.defineProperty(e,"__esModule",{value:!0})});