// ==UserScript==
// @name         文件服务器美化
// @namespace    Nioko
// @version      0.1
// @description  下载服务器美化调整：全文件名显示 修改时间缩短 大小按照K/M/G显示
// @author       You

// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.0/jquery.slim.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function getLen(str){
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g,"01").length;
    }
    var node = $("a[href='../']").next();
    var maxlen = 3;
    while(node.length > 0){
        node.text(decodeURIComponent(node.attr("href")));
        if(node.text().length > maxlen){
            maxlen = getLen(node.text());
        }
        node = node.next();
    }
    $("pre").contents().filter(
        function() {
            return this.nodeType === 3;
        }
    ).wrap('<div style="display: inline" />');

    var divs = $('div');
    node = $("a");
    //alert(node.length);
    for (var i=1; i<divs.length; i++){
        var size = $.trim($.trim($(divs[i]).text()).slice(20));
        var sz = "";
        if(size!=='-'){
            var num = parseInt(size);
            sz = size;
            if(num>=1024 && num < 1024*1024){
                sz = (num / 1024.0).toFixed(2).toString()+" K";
            }else if(num>= 1024*1024){
                sz = (num / 1024.0 / 1024.0).toFixed(2).toString()+" M";
            }
        }
        sz = $.trim($.trim($(divs[i]).text()).slice(0, 20))+sz.padStart(12);
        $(divs[i]).text(sz.padStart(30+6+(maxlen - getLen($(node[i]).text()))));
        $(divs[i]).append('<br>');
        ;
    }



    // 保存当前页面为m3u播放列表
    $(divs[0]).prepend('                                                               <button id="playlist" on-click="javascript;" style="top: 75px; left: 400px;">播放列表</button>');
    $("#playlist").unwrap();
    function fake_click(obj) {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent(
            "click", true, false, window, 0, 0, 0, 0, 0
            , false, false, false, false, 0, null
        );
        obj.dispatchEvent(ev);
    }

    function export_raw(name, data) {
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([data]);
        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        fake_click(save_link);
    }
    
    //console.log();
    $('#playlist').click(function() {
        var urls=$("a");
        var test = "";
        for(i=1; i<urls.length; i++){
            if(!$(urls[i]).attr("href").endsWith('/')){
                test+=window.location.href+$(urls[i]).attr("href")+'\n';
            }
        }
        var splited = window.location.href.split('/');
        export_raw(decodeURIComponent(splited[splited.length - 2])+'.m3u', test);
    });

})();