// ==UserScript==
// @name         文件服务器特殊页面+ico
// @namespace    Nioko
// @version      0.1
// @description  +ico
// @author       You


// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    var rnd_int = Math.floor(Math.random() * 100000);
    //rnd_int = 10000;
    var domain = document.domain;
    link.href = domain+'/WebGuide/static/Waifu-ico/example-'+rnd_int.toString()+'.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();