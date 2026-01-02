const images = [
    "imgs/1.png",
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.jpg"
];

let bgIndex = 0;
const bg = document.getElementById("background");

bg.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
    bg.style.opacity = 0;

    setTimeout(() => {
        bgIndex = (bgIndex + 1) % images.length;
        bg.style.backgroundImage = `url(${images[bgIndex]})`;
        bg.style.opacity = 1;
    }, 2000);

}, 5000);


let files = [];

function GameDetails(
    servername,
    serverurl,
    mapname,
    maxplayers,
    steamid,
    gamemode
) {
    document.getElementById("map").innerText = "map: " + mapname;
}

function SetStatusChanged(status) {
    document.getElementById("files").innerText = "> " + status;
}

function DownloadingFile(fileName) {
    files.push(fileName);
    if (files.length > 8) files.shift();

    document.getElementById("files").innerHTML =
        files.map(f => "> " + f).join("<br>");
}

function SetFilesNeeded(needed) {
    if (needed === 0) {
        document.getElementById("files").innerText = "> finishing...";
    }
}

