#! /usr/bin/python3

import cgi, cgitb
cgitb.enable()

print('Content-type: text/html\n\n') 

def go():
    straw = open('feedback.txt', 'r')
    text = straw.read()
    straw.close()
    
    print('<html><head><style>table, th, tr, td {border: 1px solid black; border-collapse: collapse;}</style></head><body><table>')
    print('<tr><th>Name</th><th>Feedback</th></tr>\n\n')
    
    f_list = [i.split('|', 1) for i in text.split('\n')]
    for f in f_list:
        if f == ['']:
            continue
        print('<tr><td>' + f[0] + '</td><td>' + f[1] + '</td></tr>\n')
    
    print('\n\n</table></body></html>')

go()
