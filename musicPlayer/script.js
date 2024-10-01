const musicContainer = document.getElementsByClassName("playList")[0];
const audioTag = document.getElementsByClassName("play")[0];
const playingTimeTag = document.getElementsByClassName("playingTime")[0];
const currentProgressTag = document.getElementById("currentProgress");
const playButtonTag = document.querySelector(".playButton");
const pauseButtonTag = document.querySelector(".pauseButton");
const previousButtonTag = document.querySelector(".previousButton");
const nextButtonTag = document.querySelector(".nextButton");


const tracks = [
    { trackID : "songs/Eminem - Somebody Save Me (feat. Jelly Roll) [Official Music Video].mp3", title: "Somebody Save Me - Eminem"},
    {trackID: "songs/Future, Metro Boomin - Like That (Official Audio).mp3", title: "Metro Boomin - Like That "},
    {trackID: "songs/The Emptiness Machine.mp3", title: "The Emptiness Machine - Linkkin Park"},
    {trackID: "songs/Travis Scott - MO CITY FLEXOLOGIST.mp3", title: "Travis Scott - MO City"},
    {trackID: "songs/Travis_Scott_Fein_ft.Playboi Carti .mp3", title: "Fein - Travis Scott ft. Playboi Carti"},
    {trackID: "songs/Eminem - Lose Yourself [HD].mp3", title: "Eminem - Lose Youreself"},
    {trackID: "songs/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3", title: "Justin Biber - Intentions"},
    {trackID: "songs/Kendrick Lamar - Not Like Us.mp3", title: "Kendirck Lamar - Not Like Us"},
    {trackID: "songs/Kendrick Lamar Euphoria (Drake Diss) (Lyrics).mp3", title: "Kendirck Lamar - Euphoria"},
    {trackID: "songs/LANY - Malibu Nights (Official Music Video).mp3", title: "Lany - Marlibu Night"}
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    trackTag.addEventListener("click", () => {
        const trackID = tracks[i].trackID;
        audioTag.src = trackID;
        audioTag.play();
        isPlaying = true;
        updatePlayAndPauseButton();
    });
    const title = (i + 1).toString() + " . " + tracks[i].title;
    trackTag.textContent = title;
    musicContainer.append(trackTag);
}

let durationText = "00:00";
let duration = 0;

audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = createMinutesAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime); 
    const currentTimeText = createMinutesAndSecondText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    playingTimeTag.textContent = currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (500/duration) * currentTime;
    currentProgressTag.style.width = currentProgressWidth.toString() + "px" ;
}

const createMinutesAndSecondText = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    return minutesText + ":" + secondsText;
};

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    isPlaying = true
    if (currentTime === 0) {
        const songIdToPlay = tracks[currentPlayingIndex].trackID;
        audioTag.src = songIdToPlay;
        audioTag.play();
        isPlaying = true;
        updatePlayAndPauseButton();
    } else {
        audioTag.play();
        updatePlayAndPauseButton();
    }

});

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPauseButton();
});

previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0) {
        return;
    }
    currentPlayingIndex -= 1;
    const songIdToPlay = tracks[currentPlayingIndex].trackID;
    audioTag.src = songIdToPlay;
    audioTag.play()
    isPlaying = true;
    updatePlayAndPauseButton();
});

nextButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length - 1) {
        return;
    }
    currentPlayingIndex += 1;
    const songIdToPlay = tracks[currentPlayingIndex].trackID;
    audioTag.src = songIdToPlay;
    audioTag.play();
    isPlaying = true;
    updatePlayAndPauseButton();
});




const updatePlayAndPauseButton = () => {
    if (isPlaying) {
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    }else {
        playButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";
    }
}