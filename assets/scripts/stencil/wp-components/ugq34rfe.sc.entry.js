/*! Built with http://stenciljs.com */
const{h:t}=window.WpComponents;class e{constructor(){this.imageSrc=null}componentWillLoad(){fetch(this.apisrc+"/wp-json/wp/v2/media/"+this.idmedia).then(t=>t.json()).then(t=>{this.imageSrc=t.guid.rendered}).catch(()=>{})}render(){return this.imageSrc?t("img",{src:this.imageSrc}):t("div",{class:"lds-facebook"},t("div",null),t("div",null),t("div",null))}static get is(){return"wp-img"}static get encapsulation(){return"shadow"}static get properties(){return{apisrc:{type:String,attr:"apisrc"},idmedia:{type:String,attr:"idmedia"},imageSrc:{state:!0}}}static get style(){return".sc-wp-img-h{background-color:#2f4f4f}.lds-facebook.sc-wp-img, .sc-wp-img-h{display:inline-block}.lds-facebook.sc-wp-img{position:relative;width:64px;height:64px}.lds-facebook.sc-wp-img   div.sc-wp-img{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook.sc-wp-img   div.sc-wp-img:first-child{left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook.sc-wp-img   div.sc-wp-img:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook.sc-wp-img   div.sc-wp-img:nth-child(3){left:45px;-webkit-animation-delay:0;animation-delay:0}\@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}50%,to{top:19px;height:26px}}\@keyframes lds-facebook{0%{top:6px;height:51px}50%,to{top:19px;height:26px}}"}}export{e as WpImg};