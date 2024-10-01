const musicContainer = document.getElementsByClassName("playList")[0];

const tracks = [
    { trackID : "songs/Eminem - Somebody Save Me (feat. Jelly Roll) [Official Music Video].mp3", title: "Somebody Save Me - Eminem"},
    {trackID: "songs/Future, Metro Boomin - Like That (Official Audio).mp3", title: "Metro Boomin - Like That "},
    {trackID: "songs/The Emptiness Machine.mp3", title: "The Emptiness Machine - Linkkin Park"},
    {trackID: "songs/Travis Scott - MO CITY FLEXOLOGIST.mp3", title: "Travis Scott - MO City"},
    {trackID: "songs/Travis_Scott_Fein_ft.Playboi Carti .mp3", title: "Fein - Travis Scott ft. Playboi Carti"}
];

for (let i = 0; i <tracks.length; i++){
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + " . " + tracks[i].title;
    trackTag.textContent = title;
    musicContainer.append(trackTag);
}