// SCRIPT.JS //


var student_lessons = [

    ['Lesson 0: What even is this club?', 'Beginners/Student/lesson0_1.html'],
    ['Lesson 1: What even is Python?', 'Beginners/Student/lesson1_1.html'],
    ['Lesson 2: What even are Strings?', 'Beginners/Student/lesson2_1.html'],
    ['Lesson 3: What even are loops?', 'Beginners/Student/lesson3_1.html'],
    ['Lesson 4: What even are lists?', 'Beginners/Student/lesson5.html'],
    ['Lesson 5: What even are Fibonacci sequences?', 'Beginners/Student/lesson6_1.html'],
    ['Lesson 6: What are regular expressions?', 'Beginners/Student/lesson7_1.html']

];

var utils = [

];

var links = [

    ['Rosalind', 'http://rosalind.info/'],
    ['SJC Problem Sets', 'https://www.sjcny.edu/long-island/academics/programs-departments/mathematics-and-computer-science/programming-competition'],
    ['CodingBat Python Practice', 'https://codingbat.com/python'],
    ['PClassic Info', 'http://bert.stuy.edu/pbrooks/pclassic'],
    ['Python Quick Reference', 'http://rgruet.free.fr/PQR27/PQR2.7.html']

];

var leadership = [

    ['Amit Prasad', 'Senior', 'President', '', ''],
    ['Arib Chowdhury', 'Senior', 'President', '', ''],
    ['Carlos Hernandez', 'Senior', 'Vice President', '', ''],
    ['Ishita Gupta', 'Senior', 'Vice President', '', '']
    
];

var forms = [



];

var showing_lessons = false;
var showing_utils = false;
var showing_links = false;
var showing_leadership = false;
var showing_forms = false;

function do_on_load() {
    if (lessons.length == 0) {
        document.getElementById('lessons_button').disabled = true;
    }
    if (utils.length == 0) {
        document.getElementById('utils_button').disabled = true;
    }
    if (links.length == 0) {
        document.getElementById('links_button').disabled = true;
    }
    if (forms.length == 0) {
        document.getElementById('forms_button').disabled = true;
    }
    if (leadership.length == 0) {
        document.getElementById('leadership_button').disabled = true;
    }
}

function pop_lessons() {
    console.log('\n\n=====  populating lessons =====\n');
    var l = ""
    if (!showing_lessons) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < student_lessons.length; i++) {
            l += "<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + student_lessons[i][1] + "\">" + student_lessons[i][0] + "</a></li>\n";
            console.log("<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + student_lessons[i][1] + "\">" + student_lessons[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_lessons = true;
    } else showing_lessons = false;
    document.getElementById("lessons").innerHTML = l;
    console.log('===== done populating lessons =====');
}

function pop_utils() {
    console.log('\n\n=====  populating utils =====\n');
    var l = ""
    if (!showing_utils) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < utils.length; i++) {
            l += "<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + utils[i][1] + "\">" + utils[i][0] + "</a></li>\n";
            console.log("<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + utils[i][1] + "\">" + utils[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_utils = true;
    } else showing_utils = false;
    document.getElementById("utils").innerHTML = l;
    console.log('===== done populating utils =====');
}

function pop_links() {
    console.log('\n\n=====  populating links =====\n');
    var l = ""
    if (!showing_links) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < links.length; i++) {
            l += "<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + links[i][1] + "\">" + links[i][0] + "</a></li>\n";
            console.log("<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + links[i][1] + "\">" + links[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_links = true;
    } else showing_links = false;
    document.getElementById("links").innerHTML = l;
    console.log('===== done populating links =====');
}

function pop_forms() {
    console.log('\n\n=====  populating forms =====\n');
    var l = ""
    if (!showing_forms) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < forms.length; i++) {
            l += "<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + forms[i][1] + "\">" + forms[i][0] + "</a></li>\n";
            console.log("<li><a class=\"btn btn-lg btn-block btn-link\" target=\"_blank\" href=\"" + forms[i][1] + "\">" + forms[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_forms = true;
    } else showing_forms = false;
    document.getElementById("forms").innerHTML = l;
    console.log('===== done populating forms =====');
}

function pop_leadership() {
    console.log('\n\n=====  populating leadership =====\n');
    var l = ""
    if (!showing_leadership) {
        l = "<div class=\"row\">\n<div class=\"col\"><center>\n";
        for (var i = 0; i < leadership.length; i += 2) {
            var p = leadership[i];
            l += "<h3>" + p[0] + '</h3>\n';
            if (p[3] != 'None') {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/" + p[3] + "\">\n"
            } else {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/blank-profile-picture-973460_1280.png\">\n"
            }
            if (p[4] != '') l += "<p><b>" + p[1] + " | " + p[2] + "</b></p>\n<p><i>\"" + p[4] + "\"</i></p>\n"
            else l += "<p><b>" + p[1] + " | " + p[2] + "</b></p>\n<p><i>\"I haven't submitted a quote yet!\"</i></p>\n"
        }
        l += "</center></div>\n<div class=\"col\"><center>";
        for (var i = 1; i < leadership.length; i += 2) {
            var p = leadership[i];
            l += "<h3>" + p[0] + '</h3>\n';
            if (p[3] != 'None') {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/" + p[3] + "\">\n"
            } else {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/blank-profile-picture-973460_1280.png\">\n"
            }
            if (p[4] != '') l += "<p><b>" + p[1] + " | " + p[2] + "</b></p>\n<p><i>\"" + p[4] + "\"</i></p>\n"
            else l += "<p><b>" + p[1] + " | " + p[2] + "</b></p>\n<p><i>\"I haven't submitted a quote yet!\"</i></p>\n"
        }
        l += "</center></div></div>\n";
        showing_leadership = true;
    } else showing_leadership = false;
    document.getElementById("leadership").innerHTML = l;
    console.log('===== done populating leadership =====');
}
