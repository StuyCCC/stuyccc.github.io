/*
function load_images() {
    document.getElementById('img1').innerHTML = '<img src="/~jchirinos/StuyCCC/data/imgs/Shirt1.png"><br>';
    document.getElementById('img2').innerHTML = '<img src="/~jchirinos/StuyCCC/data/imgs/Shirt2.png"><br>';
}
*/

/********** SUPER USEFUL ASYNCHROUS IMG LOADING SCRIPT **********/

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var dwn_img1 = new Image();
var dwn_img2 = new Image();
var dwn_img3 = new Image();

dwn_img1.onload = function () {
    img1.src = this.src;
    console.log('loaded shirt1');
};

dwn_img2.onload = function () {
    img2.src = this.src;
    console.log('loaded shirt2');
};

dwn_img3.onload = function () {
    img3.src = this.src;
    console.log('loaded shirt3');
};

dwn_img1.src = "/~jchirinos/StuyCCC/data/imgs/Shirt1.png";
dwn_img2.src = "/~jchirinos/StuyCCC/data/imgs/Shirt2.png";
dwn_img3.src = "/~jchirinos/StuyCCC/data/imgs/Shirt3.png";


/********** END SUPER USEFUL ASYNCHROUS IMG LOADING SCRIPT **********/
