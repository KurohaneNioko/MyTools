// ==UserScript==
// @name         北航课程中心-屏蔽提交以外的按钮防止忘交
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://course.buaa.edu.cn/
// @match        *://course.e.buaa.edu.cn/*
// @include      http://course.buaa.edu.cn/*
// @include      https://course.buaa.edu.cn/*
// @include      http://course.e.buaa.edu.cn/*
// @include      https://course.e.buaa.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var inputs = document.getElementsByTagName("input");
    for(let index=0;index<inputs.length;index++){
        if(inputs[index].id == "preview"){
            inputs[index].type="hidden";
        }
        if(inputs[index].id == "save"){
            inputs[index].type="hidden";
        }
        if(inputs[index].id == "cancel"){
            inputs[index].type="hidden";
        }
    }
        //document.getElementById("preview").type="hidden";
        //document.getElementById("save").type="hidden";
        //document.getElementById("cancel").type="hidden";
})();