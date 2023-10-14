/*
 * Ideal Image Slider: Captions Extension v1.0.1
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */
!function(t){"use strict";t.Slider.prototype.addCaptions=function(){t._addClass(this._attributes.container,"iis-has-captions"),Array.prototype.forEach.call(this._attributes.slides,function(i){var e=document.createElement("div");t._addClass(e,"iis-caption");var n="";if(i.getAttribute("title")&&(n+='<div class="iis-caption-title">'+i.getAttribute("title")+"</div>"),i.getAttribute("data-caption")){var a=i.getAttribute("data-caption");if("#"==a.substring(0,1)||"."==a.substring(0,1)){var s=document.querySelector(a);s&&(n+='<div class="iis-caption-content">'+s.innerHTML+"</div>")}else n+='<div class="iis-caption-content">'+i.getAttribute("data-caption")+"</div>"}else i.innerHTML&&(n+='<div class="iis-caption-content">'+i.innerHTML+"</div>");i.innerHTML="",n&&(e.innerHTML=n,i.appendChild(e))}.bind(this))}}(IdealImageSlider);