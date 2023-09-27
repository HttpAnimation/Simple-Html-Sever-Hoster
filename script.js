let isSidebarHidden = false;

function toggleSidebar() {
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = isSidebarHidden ? 'block' : 'none';
isSidebarHidden = !isSidebarHidden;
}

function handleLeftShiftKeyPress(event) {
if (event.code === 'ShiftLeft') {
if (window.location.href.includes('http://fyc.rf.gd')) {
window.location.href = 'http://fyc.rf.gd/FYCREWirte%20Code/index.html?i=1/';
} else if (window.location.pathname !== '/index.html') {
window.location.href = 'index.html';
}
}
}



function handleKeyPress(event) {
if (event.code === 'KeyF') {
toggleSidebar();
}
}

function Discord(event) {
if (event.code === 'KeyD') {
window.location.href = 'https://discord.gg/StHMMFVuGz';
}
}

function NormalShit(event) {
if (event.code === 'KeyN') {
window.location.href = 'NormalShit.html';
}
}

function Keybinds(event) {
if (event.code === 'KeyK') {
window.location.href = 'Keybinds.html';
}
}

function Consoles(event) {
if (event.code === 'KeyQ') {
window.location.href = 'Consoles.html';
}
}

function Movies(event) {
if (event.code === 'KeyM') {
window.location.href = 'Movies.html';
}
}

function PCWindows(event) {
if (event.code === 'KeyW') {
window.location.href = 'PCWindows.html';
}
}

function PCLinux(event) {
if (event.code === 'KeyL') {
window.location.href = 'PCLinux.html';
}
}

function TV(event) {
if (event.code === 'KeyT') {
window.location.href = 'TV.html';
}
}

function Code(event) {
if (event.code === 'KeyV') {
window.location.href = 'Code.html';
}
}

function Credits(event) {
if (event.code === 'KeyG') {
window.location.href = 'Credits.html';
}
}

// Torrent Generator takes you to a github link insted because the file hoster dose not work with it for some reason but github dose
function TorrentGenerator(event) {
if (event.code === 'KeyA') {
if (window.location.href.includes('fyc.rf.gd')) {
window.location.href = 'https://httpanimation.github.io/Torrent-File-Generator/';
} else {
window.location.href = 'https://httpanimation.github.io/Torrent-File-Generator/';
}
}
}

// Offsite
function Offsite(event) {
if (event.code === 'KeyO') {
window.location.href = 'Offsite.html';
}
}

// Bonzibuddy
function Bonzibuddy(event) {
if (event.code === 'KeyZ') {
window.location.href = 'http://bonzibuddy.tk/';
}
}

//The code runners
document.addEventListener('keydown', Consoles);
document.addEventListener('keydown', handleLeftShiftKeyPress);
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keydown', Discord);
document.addEventListener('keydown', NormalShit);
document.addEventListener('keydown', Keybinds);
document.addEventListener('keydown', Movies);
document.addEventListener('keydown', PCWindows);
document.addEventListener('keydown', PCLinux);
document.addEventListener('keydown', TV);
document.addEventListener('keydown', Code);
document.addEventListener('keydown', TorrentGenerator)
document.addEventListener('keydown', Offsite)
document.addEventListener('keydown', Credits)
document.addEventListener('keydown', Bonzibuddy)