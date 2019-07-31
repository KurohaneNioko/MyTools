/* ATTENTION:
   Make sure you can play the bandori chart at 
   https://bestdori.com/tool/simulator/12/expert/On-Your-New-Journey	.
   For chrome users, maybe you should visit chrome://flags/
   and Enable "WebGL Draft Extensions".
   
   Usage:
   Press F12 and switch to the "Console" tag, then paste this script to record the chart.
*/
(function() {
	
let allChunks = [];
let mycanvas = document.querySelector("#app > div:nth-child(4) > div.column.bg-background > div > div:nth-child(6) > canvas");
let format='video/webm;codecs=vp9';
const stream = mycanvas.captureStream(60);
// specify canvas to be recorded

var musicNo = document.URL.toString().split("//")[1].split("/")[3];
musicNo = musicNo.length == 2 ? "0"+musicNo : musicNo;
var musicURL = "https://bestdori.com/assets/jp/sound/bgm"+musicNo+"_rip/bgm"+musicNo+".mp3";
const audio = new Audio(musicURL);
const ctx = new AudioContext();
const stream_dest = ctx.createMediaStreamDestination();
const source = ctx.createMediaElementSource(audio);
source.connect(stream_dest);
stream.addTrack(stream_dest.stream.getAudioTracks()[0]);
// load music track from url

// set recorder
const recorder = new MediaRecorder(stream, {
    mimeType: format,
    audioBitsPerSecond : 320000,
	videoBitsPerSecond : 12000000
});
recorder.ondataavailable = function(e) {
    allChunks.push(e.data);
}

// use playbutton for 
let playbutton = document.querySelector("#app > div:nth-child(4) > div.column.bg-background > div > div:nth-child(6) > div > div.buttons.has-addons.max-width-30.m-lr-auto > a:nth-child(1) > span > i");
function click4rec(e){
	console.log(musicNo, document.querySelector("#app > div:nth-child(4) > div.column.bg-background > div > div:nth-child(3) > div:nth-child(3) > div.field-body > div > div > a > div > div.column.has-text-left.fg-text > div.is-size-5-tablet.is-size-6-mobile").textContent.trim());
	audio.play();
	recorder.start(1);
}
playbutton.onclick = click4rec;
playbutton.click();
playbutton.removeEventListener("onclick", click4rec);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function wait4stop(){
	console.log("Start!");
	await sleep(1000);
	console.log('fas fa-pause' == playbutton.classList);
	while('fas fa-pause' == playbutton.classList){
		await sleep(100);
	}
	console.log("stop!");
	recorder.stop();
	console.log("allChunks.length = "+allChunks.length);
	if(allChunks.length > 0){
		const link = document.createElement('a');
		link.style.display = 'none';
		const fullBlob = new Blob(allChunks);
		const downloadUrl = window.URL.createObjectURL(fullBlob);
		link.href = downloadUrl;
		link.download = musicNo+'-';	
		link.download += document.querySelector("#app > div:nth-child(4) > div.column.bg-background > div > div:nth-child(3) > div:nth-child(3) > div.field-body > div > div > a > div > div.column.has-text-left.fg-text > div.is-size-5-tablet.is-size-6-mobile").textContent.trim();
		// No-music name
		link.download += '-'+document.title.split('[')[1].split(']')[0].toLowerCase();
		// No-MusicName-expert.webm
		link.download += ".webm";
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	console.log("over");
}
wait4stop();

})();
