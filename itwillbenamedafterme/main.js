$(document).ready(function () {
    animateDiv('#audio');
});

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 20000, function () {
        animateDiv(myclass);
    });

};

function play() {
    var audio = document.getElementById("myaudio");
    audio.currentTime = Math.floor(Math.random() * 90);
    audio.play();
    console.log(audio.currentTime);
    setTimeout(function () {
        audio.pause();
    }, 13000);
}