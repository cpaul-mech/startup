# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

I managed to create an AWS account, though I'm not sure what any of the vernacular means.
I learned about how to host a webserver, I learned how to ssh! That's quite exciting because that means I can ssh into other applications!! I wonder if I could do it like the guys in my capstone.

Also, this is a super important command! This allows me to ssh into my server and thus edit code there in later deliverables. 
'ssh -i ~/Documents/Chris_Documents/cpaulmechcs260webserver.pem ubuntu@44.199.41.73'
If I did it right, I should be using the free tier of aws, and if something crazy happens they might charge me a little, but it should not be a whole lot of charges.

Apparently we need to pay for a domain name!! How exciting 
NS means name server records.
SOA stands for start of authority records.
It is generally recommended to not edit these records, because they are essential for the proper functioning of AWS servers.

My website can be accessed through http://cosmic-8-ball.click Isn't that exciting!!!

## Caddy
Caddy was made by a member of the Church of Jesus Christ of Latter Day Saints! Interesting. It seems like such a no brainer of a product to make
I wonder why it hadn't been created before. Also the Caddy configuration files are really interesting to look at. 

I learned again how to edit files with VIm, you need to type 'vi <filename>' then hit the insert key to make some changes, add or delete some stuff.
Then you need to tap escape to exit editing mode, then you type ':wq' to write to the file, then quit VIm in one command. It does make me feel like a hacker. 

Also, because of the changes I made to the Caddyfile, my little website is secure now!! using https://cosmic-8-ball.click 

## HTML

Codepen is a cool website that allows you to make cool website and save cool website. Not lose data. Mess around with ideas and stuff.
Every HTML element has attributes, two of the most common are id and class. Example: 
'''html
<p id="hello" class="greeting">Hello world</p>
'''

### Hyperlinks:
'''html <a href="https://byu.edu">Go to the Y</a>''' An example of a hyperlink syntax.\

For common elements look https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md 
The HTML structure is important because that way search engine crawlers can search through your website looking for the correct information.

'''html Code for simple embedded pictures: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/270px-Wikipedia-logo-v2-en.svg.png" alt="wikipedia image, referenced." width="200" </img>'''

the 'form' element has been useful in the past, and is often still traditionally used to denote something that requires user input.
Finished up to the Checkbox deliverable checkpoint for my CS 260 homework.
Also interesting, the 'canvas' HTML media element type, I wonder how to use that? It sounds interesting.
You can include audio like so: '''html <audio controls src="testAudio.mp3"></audio>''' additional attributes include 'autoplay' and 'loop'.

## CSS


## React Part 1: Routing

## React Part 2: Reactivity


