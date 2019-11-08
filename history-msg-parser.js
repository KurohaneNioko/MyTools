// PC微信打开公众号历史消息，按住end键直到全部加载完成，右键保存网页源码，可以删掉无用的js/css相关代码
// 改后缀为html后chrome打开并F12粘贴下文，保存console的log

let msg_list = document.querySelectorAll('#js_history_list > div');
msg_list.forEach(function(element) {
	let one_day_msg = element.querySelectorAll('div');
	console.log('Date:'+one_day_msg[0].innerText);
	one_day_msg = one_day_msg[1].querySelectorAll('div');
	for(var i=0; i<one_day_msg.length; i++){
		if(one_day_msg[i].querySelector('div > h4') == null)
			continue;
		console.log(one_day_msg[i].getAttribute('hrefs')+' '+one_day_msg[i].querySelector('div > h4').innerText);
	}
});