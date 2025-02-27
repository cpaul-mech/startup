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
`ssh -i ~/Documents/Chris_Documents/cpaulmechcs260webserver.pem ubuntu@44.199.41.73`
If I did it right, I should be using the free tier of aws, and if something crazy happens they might charge me a little, but it should not be a whole lot of charges.

Apparently we need to pay for a domain name!! How exciting
NS means name server records.
SOA stands for start of authority records.
It is generally recommended to not edit these records, because they are essential for the proper functioning of AWS servers.

My website can be accessed through <http://cosmic-8-ball.click> Isn`t that exciting!!!

## Caddy

Caddy was made by a member of the Church of Jesus Christ of Latter Day Saints! Interesting. It seems like such a no brainer of a product to make
I wonder why it hadn`t been created before. Also the Caddy configuration files are really interesting to look at.

I learned again how to edit files with VIm, you need to type `vi <filename>` then hit the insert key to make some changes, add or delete some stuff.
Then you need to tap escape to exit editing mode, then you type `:wq` to write to the file, then quit VIm in one command. It does make me feel like a hacker.

Also, because of the changes I made to the Caddyfile, my little website is secure now!! using <https://cosmic-8-ball.click>

## HTML

Codepen is a cool website that allows you to make cool website and save cool website. Not lose data. Mess around with ideas and stuff.
Every HTML element has attributes, two of the most common are id and class. Example:

```html
<p id="hello" class="greeting">Hello world</p>
```

### Hyperlinks

```html <a href="https://byu.edu">Go to the Y</a>``` An example of a hyperlink syntax.\

For common elements look <https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md>
The HTML structure is important because that way search engine crawlers can search through your website looking for the correct information.

html Code for simple embedded pictures:

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/270px-Wikipedia-logo-v2-en.svg.png" alt="wikipedia image, referenced." width="200"> </img>
```

the `form` element has been useful in the past, and is often still traditionally used to denote something that requires user input.
Finished up to the Checkbox deliverable checkpoint for my CS 260 homework.
Also interesting, the `canvas` HTML media element type, I wonder how to use that? It sounds interesting.
You can include audio like so:

```html
<audio controls src="testAudio.mp3"></audio>
```

additional attributes include `autoplay` and `loop`.

From the correct directory: I can run this command to connect to my webservice and rewrite some of the code. `./deployFiles.sh -k ~/Documents/Chris_Documents/cpaulmechcs260webserver.pem -h cosmic-8-ball.click -s simon`

I think that my plan will be to create the following pages.

- [x] home page which is the login page
- [x] Question and Answer page
- [x] History Page along with stats agrigation
- [x] About page

## CSS

CSS code defines rules, that are comprised of a `selector` that selects the elements to apply the rule to, and one or more `declarations` that represent the `property` to style with the given `property value`.
![CSS-rules](graphics/CSS_basic_syntax.png)

There are multiple ways to include CSS into your html, but the way we will probably use is to use the HTML `link` element to create a hyperlink reference to an external file containing the CSS rules. Such as this: ```<link rel="stylesheet" href="styles.css" />``` the link must appear in the `head` element of the document.
The pseudo selector seems particularly interesting, I wonder if this is how most websites do the hover lightening effect when they write websites.

Units Notes: `em` is defined as a "multiplier of the width of the letter m in the parent's font" it seems like`em` is a well used unit. Is that because modern websites allow you to resize the text, and therefore you would want to make the formatting dependent on the size of the font?
There are 4 major families of fonts, serif, sans-serif, fixed, and symbol.

Google offers free fonts that you can use without paying royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatcally generate the CSS for importing the font.

Here is my worked out solution to the CSS Practice assignment: <https://codepen.io/cpaul-mech/pen/qEWGZJK>

The `float` css property moves an element to the right or the left of it`s container element and allows inline elements to wrap around it.

Use the `@media` selector allows me to grab the size and orientation of the screen that is viewing the display.
For instance, with the `@media (orientation: portrait) {aside{display: none;}}` this will make the `aside` element dissapear if the web page is viewed in portrait mode rather than normal mode.

The code `html {
  height: 100%;
}` was the command I was missing to make sure that the web-page fills the screen. Might come in handy later.
Also I learned that when using `flex` elements, one needs to specify in each children's rule set the `display: flex;`, `flex-direction`, `justify-content`, and `align-items` choices.

Bootstrap: You need to add the correct link thing into the html head element. That allows you to code bootstrap elements into your websites.

## JavaScript

How to insert javascript into html?

1. **Script block**: Directly including it in the HTML within the content of a `<script>` element
1. **External code**: Using the `src` attribute of the script element to reference an external JavaScript file.
1. **Inline event attribute**: Putting JavaScript directly inline as part of an event attribute handler.

Use the web browser debugger in order to see what the variables are during execution. You can also choose to print variables and stuff to the console window so that you cna read it off. Also in the Chrome debugger.

make sure that when you run your code you're using `node.js` to run your code, like with the debugging tool through `F5` and not through the live server extension.

To configure `npm`, you must do something like this: `npm init` after navigating to the correct directory.

Here is the step by step process:

1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node_modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your application's JavaScript
1. Use the code the package provides in your JavaScript
1. Run your code with `node index.js`

Web frameworks provide common patterns, common components, they improve performance and increase device coverage.

JSX loves it's curly braces when defining variables and such, apparently curly braces mean "treat this code as javascript code."

React and `.jsx` files use components a lot of the time. They style their components as functions.

State, reactive to changes in the state of elements, or propreties. It doesn't know when the state within your react function component actually changes. so in ordr to inject itself in there and know whne those are happening they use what's called a `State hook`

"A react component is a javascript function that you can sprinkle with markup" [react.dev website](https://react.dev/learn/your-first-component)

React components Must start with a capitol letter or they will not work.

You reference normal html stuff with a lowercase letter. Declare all components at the top level of the .jsx file, you cannot nest the declarations. When a child component needs some data from a parent, then you must "pass it by props" instead of nesting definitions.

`export default function` are super important keywords in react.

> [!IMPORTANT] the `useState` hook, like in this: `const [count, updateCount] = React.useState(initialCount);`, is using destructuring to take a handle to the current state of a React component, as well as link it to a function that will be called when React realizes that this component must be updated.

## React Part 1: Routing

React router is a way to make what once was multiple pages into one page. Interestingly, even though technically the page url hasn't changed when the user clicks on a "link", the forward and backwards buttons on the browser work as intened. Basically by using React Routing, page navigation speed is massively increased.

In order to setup react router, there are three things you need to do:

1. Setup your router
1. Define your routes
1. Handle Navigation

In addition to properties, a component can have an Internal state. component state is created by calling the `React.useState` hook function. This function returns a variable that that contains the current state and a function to update that state.cd

The syntax for javascript is really weird and will probably take a while to get used to, because everything is interrelated.

the `npm run dev` command didn't work for me at all. I wonder why that is the case...? Javascript code is still really confusing, so it's gonna be greek to me for a while. The dev command is enabled through the package.json file, under the "scripts" section, using the line: `"dev": "vite",` this allows the project to run in the development environment and display on the browser, while being updated every time the user makes any changes.

I also learned that the only reason that running the `npm run build` packages up the file for easy deployment to the server. I do wonder how we're going to manage that in the next little bit.

I wonder if there is a way to modify my deployfiles.sh to ignore the examplesAndMisc directory.

Steps to convert repository to a React application:

1. Install and configure Vite
1. Reorganize the code
1. Convert to React Bootstrap
1. Enable React
1. Create app component
1. Create view components
1. Create the router
1. Convert HTML to React components
1. Replace deployment script

You can use `npm install bootstrap react-bootstrap` to import a package that will let you treat bootstrap widgets as a React component.

> [!IMPORTANT] Use this command to update the code for the web server: `./deployReact.sh -k ~/Documents/Chris_Documents/cpaulmechcs260webserver.pem -h cosmic-8-ball.click -s simon`

## React Part 2: Reactivity

Javascript functions can be run immediately if you wrap them in parenthesis. That's so intereresting. You can also try write an anonymous function that don't have a name.

Setting state with the function provided by the React useState function is Asynchronous.

The "addEventListener" function seems like it will be useful during my project. Look into that more.

Example of Javascript function:

```javascript
function testAll(inputArray, testerFunc) {
    for (i of inputArray.values()) {
        if(testerFunc(i)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
const sillyNames = ["goob", "nextName", "Muskypants"]
const result = testAll(sillyNames, (s)=>{return(s.length>3)})

console.log(result);
```

### JavaScript Objects and Classes

Javascript objects are super weird, they're basically like dictionaries. For instance, this is a javascript object, specifically the obj-literal syntax.

```javascript
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false },
  f: function () {
    return 'hello';
  },
};
```

You can create methods on an object, so that it can print it's internal stuff like a python script.

Personally, I will most likely be using javascript classes more than javascript objects. Because it is less of a shorthand and declares more what you are trying to do with your objects. In javascript classes, you can make properties of functions private by using prefixing them with a `#`.

### Timeout and interval

the function `setTimeout(() => console.log('time is up'), 2000);` is like setting a one off interrupt for later with javaScript code. The function is executed asynchronously as soon as `2000` miliseconds have passed. And if you want to setup a timerInterrupt, then this function will help you out. `setInterval(() => console.log('do something'), 1000);`. This does basically waht I think it should. You can then stop the timer interrupt by calling the `setTimeout(previouslySetIntervalObj)` function on the previously created setInterval object.

### How to JSON parse and retreive

```javascript
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

One further note about JSON, you can now use e notation to use scientific notation. There is no version number for JSON. You can always I depend on JSON. Personally, I will most likely use JSON to encode the data that I will include in my Database Layer.

### Local Storage

There are four main functions that you can use with LocalStorage, `setItem(name, item)`, `getItem(name)`, `removeItem(name)` and `clear()` I can see this as a simple way to create some localstorage of data that I can then use to display the username. You can only include data with type `string``number` or `boolean`. NOTE: open the `Application` tab of the dev tools and select `Storage > Local Storage` and then your domain name. With the dev tools you can add, view, update, and delete any local storage values.

### [Destructuring](https://github.com/webprogramming260/.github/blob/main/profile/javascript/destructuring/destructuring.md), SUPER IMPORTANT

Okay this destructuring thing is pretty crazy, but it's kinda like getting multiple outputs from a python function, only you can do it with arrays, which is wild... i'm not exactly sure what to do about that. Anyways, the interesting thing is that React uses destructuring extensively. A brief list of things you can do with Destrucuting is as follows:

- Selecting items with keys, or in order, from an object
- Then you can use them as you see fit.
- You can also specify properties that you want to pull from the source object.
- Map names to new variables when you pull them from an object.
- Default values can be provided for missing names.

### React Hooks

the `useEffect` hook allows you to represent lifecycle events.
