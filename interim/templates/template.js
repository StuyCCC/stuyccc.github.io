window.onload = function() {
    SideBar();
};

function SideBar() {
    document.getElementById("side").innerHTML =
   '<div id="icon">'+
       '<h1><a href="../main/index">'+
           '<img class="logo" src="../../templates/CCCLogo.png" alt="CCC logo" width="142px">'+
       '</a></h1>'+
   '</div>'+
   '<br>'+
   '<nav><a href="../main/about">about</a></nav>'+
   '<br>'+
   '<nav><a href="../main/calendar">calendar</a></nav>'+
   '<br>'+
   '<nav><a href="../main/lessons">lessons</a></nav>'+
   '<br>'+
   '<nav><a href="../main/problems">problems</a></nav>'+
   '<br>'+
   '<nav><a href="../main/resources">resources</a></nav>'+
   '<br>'+
   '<nav><a href="../main/writeups">writeups</a></nav>';
}
