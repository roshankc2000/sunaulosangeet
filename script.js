//initilizations
let index = 0;
let audio = new Audio('songs/1.mp3');
let pausePlay = document.getElementById('pausePlay');
let myProgressBar = document.getElementById('myProgressBar');
let gifleft = document.getElementById('gif-left');
let gifright = document.getElementById('gif-right');
let nowPlaying = document.getElementById('nowPlaying');
let songItems = Array.from(document.getElementsByClassName('gana'));


let songs = [
	{ songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "images/covers/1.jpg" },
	{ songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "images/covers/2.jpg" },
	{ songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "images/covers/3.jpg" },
	{ songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "images/covers/4.jpg" },
	{ songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "images/covers/5.jpg" },
	{ songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "images/covers/6.jpg" },
	{ songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "images/covers/7.jpg" },
	{ songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "images/covers/8.jpg" },
	{ songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "images/covers/9.jpg" },
	{ songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "images/covers/10.jpg" },
];

//selecting songs
songItems.forEach((element, i) => {
	element.getElementsByTagName("img")[0].src = songs[i].coverPath;
	element.getElementsByClassName("ganaNaam")[0].innerText = songs[i].songName;
})

//pause/play
pausePlay.addEventListener('click', () => {
	if (audio.paused || audio.currentTime <= 0) {
		audio.play();
		pausePlay.classList.remove('fa-play-circle');
		pausePlay.classList.add('fa-pause-circle');
		gifleft.style.opacity = 1;
		gifright.style.opacity = 1;
	} else {
		audio.pause();
		pausePlay.classList.remove('fa-pause-circle');
		pausePlay.classList.add('fa-play-circle');
		gifleft.style.opacity = 0;
		gifright.style.opacity = 0;
	}
})

//listen to events
audio.addEventListener('timeupdate', () => {
	// Update Seekbar
	let progress = parseInt((audio.currentTime / audio.duration) * 100);
	myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
	audio.currentTime = myProgressBar.value * audio.duration / 100;
})

Array.from(songItems).forEach((element) => {
	element.addEventListener('click', () => {
		let tempindex = element.id;
		nowPlaying.innerText = songs[tempindex - 1].songName;
		audio.src = `songs/${tempindex}.mp3`;
		index = tempindex - 1;
		audio.currentTime = 0;
		if (audio.paused || audio.currentTime <= 0) {
			audio.play();
			pausePlay.classList.remove('fa-play-circle');
			pausePlay.classList.add('fa-pause-circle');
			gifleft.style.opacity = 1;
			gifright.style.opacity = 1;
		} else {
			audio.pause();
			pausePlay.classList.remove('fa-pause-circle');
			pausePlay.classList.add('fa-play-circle');
			gifleft.style.opacity = 0;
			gifright.style.opacity = 0;
		}
	})
})
// Array.from(document.getElementsByClassName('gana')).forEach((element) => {
// 	element.addEventListener('click', () => {
// 		index = parseInt(element.id);
// 		audio.src = `songs/${index}.mp3`;
// 		nowPlaying.innerText = songs[index].songName;
// 		audio.currentTime = 0;
// 		if (audio.paused || audio.currentTime <= 0) {
// 			audio.play();
// 			pausePlay.classList.remove('fa-play-circle');
// 			pausePlay.classList.add('fa-pause-circle');
// 			gifleft.style.opacity = 1;
// 			gifright.style.opacity = 1;
// 		} else {
// 			audio.pause();
// 			pausePlay.classList.remove('fa-pause-circle');
// 			pausePlay.classList.add('fa-play-circle');
// 			gifleft.style.opacity = 0;
// 			gifright.style.opacity = 0;
// 		}
// 	})
// })

document.getElementById('next').addEventListener('click', () => {
	index = (index + 1) % 10;
	audio.src = `songs/${index + 1}.mp3`;
	nowPlaying.innerText = songs[index].songName;
	audio.currentTime = 0;
	audio.play();
	pausePlay.classList.remove('fa-play-circle');
	pausePlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
	if (index == 0) {
		index = 10;
	}
	index = (index - 1) % 10;
	audio.src = `songs/${index + 1}.mp3`;
	nowPlaying.innerText = songs[index].songName;
	audio.currentTime = 0;
	audio.play();
	pausePlay.classList.remove('fa-play-circle');
	pausePlay.classList.add('fa-pause-circle');
})