// ==UserScript==
// @name         Small-games.info Torrent getter
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Get torrent from small-games.info
// @author       Rakapudl
// @match        http://small-games.info/*
// @match        http://big-games.info/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var locationDir = location.pathname.split('/')[1];


var appendLightBlock = function() {
    var gameName = $('#in-content > div.w.overhide > p:nth-child(6) > b:first-child').text();
    
    if(!gameName) {
        gameName = $("span[itemprop='itemreviewed']").text();
        var slicePos1 = gameName.search( /\[/i );
        var slicePos2 = gameName.search( /v[0-9]/i );
        
        if (slicePos1 > 0) {
            gameName = gameName.substring(0, slicePos1);
        } else if (slicePos2) {
            gameName = gameName.substring(0, slicePos2);
        }
    }
    
    var innerBlock = $('#in-content > div:nth-child(7) > noindex > div'); 
    var tparserHref = "http://tparser.org/";
    var innerElement = "<a target='_blank' rel='nofollow' class='fo-link fo-60' style='color:#90C564;' href='" + tparserHref + gameName + "'>Скачать Торрент</a><br>";

    innerBlock.prepend(innerElement);
};

if(locationDir == 'game' || location.search != ""){
    appendLightBlock();
} 
