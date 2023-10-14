/*
 * Ideal Image Slider: Bullet Navigation Extension v1.0.2
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */
!function(t){"use strict";var e=function(e,i){var s=e._attributes.bulletNav.querySelectorAll("a");s&&Array.prototype.forEach.call(s,function(e,s){t._removeClass(e,"iis-bullet-active"),e.setAttribute("aria-selected","false"),s===i&&(t._addClass(e,"iis-bullet-active"),e.setAttribute("aria-selected","true"))}.bind(this))};t.Slider.prototype.addBulletNav=function(){t._addClass(this._attributes.container,"iis-has-bullet-nav");var i=document.createElement("div");t._addClass(i,"iis-bullet-nav"),i.setAttribute("role","tablist"),Array.prototype.forEach.call(this._attributes.slides,function(e,s){var a=document.createElement("a");a.innerHTML=s+1,a.setAttribute("role","tab"),a.addEventListener("click",function(){if(t._hasClass(this._attributes.container,this.settings.classes.animating))return!1;this.stop(),this.gotoSlide(s+1)}.bind(this)),i.appendChild(a)}.bind(this)),this._attributes.bulletNav=i,this._attributes.container.appendChild(i),e(this,0);var s=this.settings.afterChange,a=function(){var t=this._attributes.slides.indexOf(this._attributes.currentSlide);return e(this,t),s()}.bind(this);this.settings.afterChange=a}}(IdealImageSlider);