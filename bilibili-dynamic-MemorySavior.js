var num = 100;
for(var i=0; i<num; i++){
    var c = document.querySelector('#app > div > div.home-page.f-clear > div.home-container > div > div.center-panel.f-left > div.card-list > div > div.content');
	c.removeChild(c.childNodes[2]);
}
