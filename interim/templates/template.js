window.onload = function() {
    SideBar();
};

function SideBar() {
    document.getElementById("side").innerHTML =
   '<div class="balls"><div id="icon">'+
       '<h1><a href="../main/index.html">'+
           '<img class="logo" src="../../templates/circleCCCcow.png" alt="CCC logo" width="147px">'+
       '</a></h1>'+
   '</div>'+
   '<br>'+
   '<nav><a href="../main/about.html">About</a></nav>'+
   '<br>'+
   //'<nav><a href="../main/calendar.html">Calendar</a></nav>'+
   //'<br>'+
   '<nav><a href="../main/lessons.html">Lessons</a></nav>'+
   '<br>'+
   '<nav><a href="../main/problems.html">Problems</a></nav>'+
   '<br>'+
   '<nav><a href="../main/resources.html">Resources</a></nav>'+
   '<br>'+
   '<nav><a href="../main/writeups.html">Writeups</a></nav>'+
   '<br><br>'+
   '<h3><legend> Archives </legend></h3><br>'+
   '<nav><a href="../main/lessons_archive.html">Lessons Archive</a></nav>'+
   '<br>'+
   '<nav><a href="../main/problems_archive.html">Problems Archive</a></nav></div>';
}
