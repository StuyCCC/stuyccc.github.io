############################
# LESSON MAKER FOR STUYCCC #
############################

########## The lesson maker syntax ##########
#
# First line should be lesson title
# Text without preceding formatter will be treated as plaintext in a <p> tag
# A blank line will be treated as a <br> tag
#
# Open an ordered list with "!!olist!!"
# Close an ordered list with "!!endolist!!"
#
# Open an unordered list with "!!ulist!!"
# Close an unordered list with "!!endulist!!"
#
# Add an image with "image(<url>)" --> absolute dir, not relative
#
# Add a link with "a[<link text>](<link url>)"
#
# Add your own custom html between "!!html!!" and "!!endhtml!!"
#
# start a heading with !!h<number>!!. It will be one line
#
# <, >, &, and TABs will automatically be replaced with their html equivalents
#
# For spacing, use !!breaks!!<number>, <number> being the number of breaks you want
#
# others shall be added l8r
#
#############################################

import re

def go():
    #take filename input and read it
    f = input("Input filename: ")
    straw = open(f, 'r')
    pretext = straw.read()
    straw.close()

    #start html file
    html = "<html><head><style>body {background-image: url(/StuyCCC/data/leaves/leaves.png);} table, tr, th, td {border: 1px solid black; border-collapse: collapse;}</style></head><body>"

    #replace >, <, &, and TABs
    pretext = pretext.replace('&', '&amp;')
    pretext = pretext.replace('\t', '&emsp;')
    pretext = pretext.replace('<', '&lt;')
    pretext = pretext.replace('>', '&gt;')

    #fill in html
    pretext = pretext.split('\n')

    html += '<h1>' + pretext[0] + '</h1>\n' #adds title

    in_list = False #will be true if in olist --> precedes every element with <li>
    in_html = False #will be true if user is adding custom html --> will ignore all steps and paste users html in file

    for i in pretext[1:]:
        if i[:10] == '!!breaks!!':
            num = int(i[10:])
            html += '<br>\n' * num
            continue
        if in_html:
            if i != '!!endhtml!!':
                html += i.replace('&gt;', '>').replace('&lt;', '<').replace('&emsp;', '\t').replace('&amp;', '&') + '\n'
            else:
                in_html = False
            continue
        if in_list:
            if i != '!!endulist!!' and i != '!!endolist!!':
                html += '<li>\n'
            else:
                if i == '!!endulist!!':
                    html += '</ul>\n\n'
                else:
                    html += '</ol>\n\n'
                in_list = False
                continue
        if i == '':
            html += '<br>\n'
            continue

        #check for list
        x = re.match(r'!![a-zA-Z]*!!', i)
        if x != None:
            found = x.group()

            #ordered lists
            if found.strip('!') == 'olist':
                html += '\n<ol>\n'
                in_list = True

            #unordered lists
            elif found.strip('!') == 'ulist':
                html += '\n<ul>\n'
                in_list = True

            #custom html
            elif found.strip('!') == 'html':
                in_html = True

            #anything else
            else:
                html += '<p>' + found + '</p>\n'
            continue

        #check for img url
        x = re.match(r'image\(https?://.*\)', i)
        if x != None:
            html += '<img src="' + x.group()[6:-1] + '" target="_blank">\n'
            continue

        #check for hyperlink
        x = re.match(r'a\[.*\]\(https*://.*\)', i)
        if x != None:
            full = x.group()
            inner_text = re.search(r'\[.*\]', full).group()[1:-1]
            url = re.search(r'\(https*://.*\)', full).group()[1:-1]
            html += '<p><a href="' + url + '">' + inner_text + '</a></p>\n'
            continue

        #check for heading
        x = re.search(r'!!h\d!!', i)
        if x != None and x.end() == 6:
            tier = x.group().strip('!h')
            html += '\n<h' + tier + '>' + i[6:] + '</h' + tier + '>\n\n'
            continue


        #if nothing else worked
        html += '<p>' + i + '</p>\n'

        if in_list:
            html += '</li>\n'

    html += "</body></html>"

    straw = open(f.rsplit('.', 1)[0] + '.html', 'w')
    straw.write(html)
    straw.close()

    print("Wrote to " + f.rsplit('.', 1)[0] + ".html")


go()
