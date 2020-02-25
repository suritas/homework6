var video;

function getVid(){
	video = document.querySelector("#myVideo");
	console.log(video);
}
// PAUSE AND PLAY
function playVid() {
	// reassign vol
	changeVolume();
	video.play();
	console.log("Play Video");
}
function pauseVid() {
	video.pause();
	console.log("Pause Video");
}
// SPEED AND SKIP
function decreaseSpeed() {
	video.playbackRate *= .80;
  console.log("Speed is "+ video.playbackRate);
}
function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}
function skipAhead() {
	video.currentTime += 60;
	console.log("Current location is "+ video.currentTime);
}
// MUTE
function mute() {
// if its not muted (muted==false)
		if (video.muted == false){
			//then use == to reassign to it unmuted (true)
			video.muted = true;
			// change button text to Unmute so can mute it later
			document.getElementById("mute").innerHTML = "Unmute";
			console.log("Muted");

		}
// if it is muted...cannot have condition with else, so leave it alone)
		else{
			// then use == to reassign to muted (false)
			video.muted = false;
			// change button text to Mute so can unmute it later
			document.getElementById("mute").innerHTML = "Mute";
			console.log("Unuted");
			changeVolume();
		}
}
// VOLUME
function changeVolume() {
	var slider = document.getElementById("volumeSlider");
	var video = document.getElementById("myVideo");
	var output = document.getElementById("volume");
	newvol = slider.value/100;
	video.volume = newvol;
	output.innerHTML = slider.value;
	document.getElementById("volume").innerHTML = slider.value + "%";
	console.log("Volume is " + slider.value);
}

function gray() {
	video.classList.toggle("grayscale");
	console.log("In grayscale");
}

function color() {

	video.classList.toggle("grayscale");
	console.log("In color");
}

// DISCUSSION notes
// -------replacing content------
// document.querySelector("tobereplaced").innerHTML or document.getElementById('tobereplaced').innerHTML or document.querySelectorAll("tobrereplaced").length= "Replacement"
// -------changing style--------
// background color to blue hex
// document.body.style.backgroundColor = "#00274c"
// text to yellow
// document.body.style.color ="#ffcb05"
