// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload = function() {
    
    var movie = document.querySelector("#video");
    var videoo = '<figure> <video width = "' + video.width + '" height = "' + video.height + '" ';

        if (video.controls == true) {

            videoo += ' controls>';
        }

        else {

            videoo += '>';
        }

    for(var i = 0; i<video.source.length; i++) {    

        videoo += '<source src = "' + video.source[i].src + '" type = "' + video.source[i].type + '">';
    }

    videoo += '</video> </figure>';

    movie.innerHTML = videoo;

};