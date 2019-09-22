#! /usr/bin/python3

import cgi, cgitb
cgitb.enable()

print('Content-type: text/html\n\n') 

def go():
    fs = cgi.FieldStorage()
    
    name = fs.getvalue('name', 'No name')
    #just in case
    if name == '':
        name = 'No name'
    feedback = fs.getvalue('feedback', 'No feedback')
    
    straw = open('feedback.txt', 'a')
    straw.write(name + '|' + feedback + '\n')
    straw.close()
    
    print("""<html>\n\t<body>\n\t\t<h1>\n\t\t\tThanks for the feedback! You may close this tab now.\n\t\t</h1>\n\t</body>\n</html>""")
    
go()
