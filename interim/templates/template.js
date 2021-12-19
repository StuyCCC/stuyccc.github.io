window.onload = function() {
    SideBar();
};

function SideBar() {
    document.getElementById("side").innerHTML =
   '<div id="icon">'+
       '<h1><a href="../main/index.html">'+
           '<img class="logo" src="../../templates/CCCLogo.png" alt="CCC logo" width="142px">'+
       '</a></h1>'+
   '</div>'+
   '<br>'+
   '<nav><a href="../main/about.html">about</a></nav>'+
   '<br>'+
   '<nav><a href="../main/calendar.html">calendar</a></nav>'+
   '<br>'+
   '<nav><a href="../main/lessons.html">lessons</a></nav>'+
   '<br>'+
   '<nav><a href="../main/problems.html">problems</a></nav>'+
   '<br>'+
   '<nav><a href="../main/resources.html">resources</a></nav>'+
   '<br>'+
   '<nav><a href="../main/writeups.html">writeups</a></nav>';
}
