function displaySongInfo() {
const x =document.getElementById("myDiv");
if(x.style.display === none) {
    x.style.display = "block";
} else x.style.display = "none";
}
module.exports = {
    displaySongInfo: displaySongInfo,
};