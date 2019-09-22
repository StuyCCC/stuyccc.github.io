var top_memes = [

    ['memes/meme0.jpg', 'Maryann Foley'],
    ['memes/meme1.png', 'Leilei Hao'],
    ['memes/meme2.jpg', 'Joan Chirinos'],
    ['memes/meme3.jpg', 'Joan Chirinos']

];

var rest_memes = [

    ['memes/meme4.jpg', 'Joan Chirinos'],
    ['memes/meme5.png', 'Victor Veytsman'],
    ['memes/meme6.jpg', 'Johnny Wong'],
    ['memes/meme7.png', 'Johnny Wong']

];


//This will load the top memes, which
function load_top() {

    console.log('LOADING TOP');
    console.log('TOP IS ' + top_memes.length + ' MEMES LONG!')

    var to_insert = "";

    for (var i = 0; i < top_memes.length; i++) {
        var meme = top_memes[i];
        to_insert += '<div class="col-sm-3">\n<figure class="figure">\n<img class="figure-img img-thubnail img-fluid" alt="A meme" src="';
        to_insert += meme[0];
        to_insert += '">\n<figcaption class="figure-caption text-center">';
        to_insert += meme[1];
        to_insert += '</figcaption>\n</figure>\n</div>\n';
    }

    console.log("INSERTING:\n" + to_insert);
    document.getElementById('top').innerHTML = to_insert;

    if (rest_memes.length == 0) {
        document.getElementById('more_memes').disabled = true;
    }

}

var more_html = "" //This is the innerHTML of the rest of the memes
var index_at = 0;

function load_more() {

    more_html += '<div class="row">\n';

    for (var i = index_at; i < index_at + 4 && i < rest_memes.length; i++) {
        var meme = rest_memes[i];
        more_html += '<div class="col-sm-3">\n<figure class="figure">\n<img class="figure-img img-thubnail img-fluid" alt="A meme" src="';
        more_html += meme[0];
        more_html += '">\n<figcaption class="figure-caption text-center">';
        more_html += meme[1];
        more_html += '</figcaption>\n</figure>\n</div>\n';
    }

    document.getElementById('rest').innerHTML = more_html;

    index_at += 4;

    if (index_at >= rest_memes.length) {
        document.getElementById('more_memes').disabled = true;
    }

}
