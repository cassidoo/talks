#ES6 Party

---

#Cassidy Williams
##[fit]Software Engineer & Developer Evangelist at _**Clarifai**_

---

#[fit]ES**6**

---

#ES*-whaattt*

---

#ES*-whaattt*

 - ES stands for ECMAScript
 - Current JavaScript is actually ECMAScript 5.1
 - ES6 is also nicknamed ES2015

^ ES3 was the first widespread version of ECMAScript

^ ES5 was finalized in 2009, ES5.1 in 2011

^ Late into the ES6 spec timeline, it was suggested that versioning happens annually

---

#The Challenge

---

##ES6 isn't everywhere.
###*Which sucks.*

^ As JS developers, we want to use new features

^ But at the same time, sites/apps may need to support older browsers without such support

---

#The solution is *transpiling*
###(transformation + compiling)

---

#Transpiling

 - Transform into equivalent matches that work in ES5 environments
 - This is usually done during your build process

---

#The *other* solution is *polyfilling*
###AKA shimming

---

> **"Polyfills are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible."**

 - Kyle Simpson, youdontknowjs.com

---

#JS will evolve *constantly*

---

#JS will evolve *constantly*

 - The best strategy is to keep a transpiler in your build process, and add shims as things change.
 - If you don't do this, you *will* fall behind.

^ As JS starts evolving and updating faster and faster, you'll miss out on some great innovations if you keep waiting

---

#Who's coming to party?

 - Block scoping
 - Default values
 - Destructuring
 - Literals (object + template)
 - Arrow functions `=>`

---

#Block Scoping

---

##Block Scoping isn't new.

> **"I'm still I'm still Jenny from the block... scope"**
- J-Lo

---

##Block Scoping isn't new.

```javascript
var x = 10;

(function sample() {
    var x = 20;
    console.log(x);   // 20
})();

console.log(x);       // 10
```

^ This is a classic "immediately invoked function expression."

---

##Block Scoping

In ES6, we can create declarations _**in any block**_, not just in functions.

---

##We invited `let` to help

```javascript
var x = 10;

{                     // All we need is {...} for a scope
    let x = 20;
    console.log(x);   // 20
}

console.log(x);       // 10
```

---

##You can make scopes out of anything

```javascript
let x = 2;

if (x > 1) {
    let y = x * 3;
    console.log(y);       // 6

    for (let i = x; i < y; i++) {
        let j = i + 15;
        console.log(j);
    }                     // 17 18 19 20

    let z = x + y;
    console.log(z);       // 8
}
```

^ The if statement has y and z block-scoped vars, and the loop has i and j block-scoped vars

^ Because z is defined later in the scope, it isn't able to be used until it's defined.

---

##`let` vs. `var`

```javascript
{
    console.log(x);     // undefined
    console.log(y);     // ReferenceError

    var x;
    let y;
}
```

^ They are both attached to the scope

^ `let` declarations are not initialized until they appear in the block

^ The ReferenceError here is a "Temporal Dead Zone" error, you can't access y until the `let` is hit

^ You could actually remove the `var x;` line and you'd get the same result

---

##We brought along `const` to party, too

```javascript
{
    const x = 10;
    console.log(x);     // 10

    x = 7;              // TypeError
}
```

^ `const` is a var that's read-only once initialized

^ If the value is more complex, like an array, you can change the contents (it is a reference to the array)

^ We already do this, typically, with CAPITALIZED_VARS, but this is a way to protect against unintended changes

---

##Functions are block-scoped, too!

---

##Block-scoped functions

```javascript
if (weGonnaParty) {
    function fiesta() {
        console.log('We are partying tonight!');
    }
} else {
    function fiesta() {
        console.log('We are chillin tonight.');
    }
}

fiesta();
```

^ In pre-ES6 ancient times, `fiesta()` would print "We're chillin tonight" no matter what `weGonnaParty` was

^ In ES6, `fiesta()` would return a reference error

---

#Default Values

---

##We've made lots of attempts to properly use default values.

```javascript
function blerg(x, y) {
    x = x || 20;
    y = y || 30;

    console.log(x + y);
}

blerg();            // 50
blerg(7);           // 37
blerg(null, 16);    // 46
blerg(7, 6);        // 13
```

^ This approach doesn't handle falsy values well, `blerg(0, 314);` could print `334` instead of `314`

^ There's lots of workarounds for this, but ES6 does it better

---

##ES6 Default Values

```javascript
function blerg(x = 20, y = 30) {
    console.log(x + y);
}

blerg();             // 50
blerg(0, 314);       // 314
blerg(7, 6);         // 13
blerg(5);            // 35
blerg(undefined, 5); // 25
blerg(5, null);      // 5 (because null -> 0)
```

---

##ES6 Default Values can be expressions or functions

```javascript
function party(x = 3, y = 8 * x, z = blerg(x)) {
    console.log(x, z);
}
```

^ The default values are lazily evaluated, are only used if vars are undefined or left out

^ I could do a whole talk on the scopes of these vars alone, so I won't get too in depth

---

#Destructuring

---

#Destructuring

Destructuring was invited for specifically array destructuring and object destructuring

---

##This is what we do now

```javascript
function party() {
    return [1, 2, 3];
}

function fiesta() {
    return {x : 4, y : 5, z : 6};
}

var temp1 = party(), u = temp1[0], v = temp1[1], w = temp1[2];
console.log(u, v, w); // 1 2 3

var temp2 = fiesta(), x = temp2.x, y = temp2.y, z = temp2.z;
console.log(x, y, z); // 4 5 6
```

^ This is a structured assignment

---

##This is what ES6 lets us do

```javascript
var [a, b, c] = party();
var {x : x, y : y, z : z} = fiesta();

console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 6
```

^ This looks weird at first because of the ordering of stuff on either side of the =

^ This removes the need for a temp var, and makes the lefthand side act as a "pattern"

---

##This is what ES6 lets us do

```javascript
var [a, b, c] = party();
var {x, y, z} = fiesta();

console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 6
```

^ Because the names of the variables match, you could just declare them like this

---

##This is what ES6 lets us do

```javascript
var [a, b, c] = party();
var {x : taco, y : burrito, z : enchilada} = fiesta();

console.log(a, b, c); // 1 2 3
console.log(x, y, z); // ReferenceError
console.log(taco, burrito, enchilada); // 4 5 6
```

---

##This is what ES6 lets us do

```javascript
var party1 = 'candy', party2 = 'cake';

var yolo = {x : party1, y : party2};
var {x : fiesta1, y : fiesta2} = yolo;

console.log(fiesta1, fiesta2);       // 'candy' 'cake'
```

^ There's some weird inversion that happens here

^ In the `var yolo =` line, the x and y represent the object props

^ In the next line, the x and the y also represent the object props

^ Object literals are target <-- source, and object destructuring assignments are source --> target

---

##But wait there's more

```javascript
var x = 'party', y = 'fiesta';
[y, x] = [x, y];
console.log(x, y);                // 'fiesta' 'party'
```

Whoa no temp variable!

^ You can use destructuring on more than just declarations, you can use it as an assignment operation!

---

##But wait there's more

```javascript
var {party : x, party : y} = {party : 1};

x;  // 1
y;  // 1
```

^ Repeated assignments are totally allowed!

---

Destructuring isn't just for typing less, but more for _**declarative readability**_.

^ I could also do a whole talk just on destructuring, but we must move on

---

#Literals

---

![inline](literally.gif)

^ ES6 literally adds the most extensions to the object literal ever

---

##Literals

Before:

```javascript
var z = {
        x : x,
        y : y
};
```

---

##Literals

After:

```javascript
var z = {
        x,
        y
};
```

^ We already saw some of this when we were talking about destructuring

---

##Literals

Before:

```javascript
var z = {
    x: function() {
        // lalala
    },
    y: function() {
        // lalala
    }
}
```

---

##Literals

After:

```javascript
var z = {
    x() {
      // lalala
    },
    y() {
      // lalala
    }
}
```

^ These are called concise methods

---

##Template Literals came to the party

 - Better defined as a "string literal"
 - Introduces the ` backtick as the delimiter

^ The word "template" can be misleading

---

##Template Literals

Before:

```javascript

var name = "Cassidy";
var greeting = "Hello, " + name + "!";
console.log(greeting);                // "Hello, Cassidy!"
```

---

##Template Literals

After:

```javascript
var name = "Cassidy";
var greeting = `Hello, ${name}!`;
console.log(greeting);           // "Hello, Cassidy!"
```

^ ${whatever} are parsed and evaluated inline

^ This is called interpolation (more correct than templating)

^ typeof greeting == "string", not any special "template" value

---

##Template Literals

```javascript
function capitalize(s) {
    return s.toUpperCase();
}

var you = 'audience';

var text =
`A very ${capitalize( 'big' )} hello
to you, ${capitalize( `my ${you}` )}!`;

console.log(text);
// A very BIG hello
// to you, MY AUDIENCE!
```

^ Functions, expressions, and other strings can be included

^ Line breaks are evaluated

---

#Arrow Functions

---

##Arrow functions are the guac of the party

Before:

```javascript
function guac(x,y) {
    return x + y;
}
```

After:

```javascript
var guac = (x,y) => x + y;
```

^ They consist of parameters, followed by =>, followed by the function body

---

##Arrow Functions

 - Arrow functions are always function expressions
 - They are always anonymous
 - They redefine `this`
 - They are beautiful

^ Anonymous: There is no arrow function declaration

^ `this` binding is not dynamic, but is instead lexical

---

#Arrow Functions & `this`

Before:

```javascript
var controller = {
    makeRequest: function(..){
        var self = this;

        btn.addEventListener( "click", function(){
            // ..
            self.makeRequest(..);
        }, false );
    }
};

// Source: ES6 & Beyond, Kyle Simpson
```

---

#Arrow Functions & `this`

After:

```javascript
var controller = {
    makeRequest: function(..){
        btn.addEventListener( "click", () => {
            // ..
            this.makeRequest(..);
        }, false );
    }
};

// Source: ES6 & Beyond, Kyle Simpson
```

---

##Arrow Functions

```javascript
var party = [1, 2, 3, 4, 5];
party = party.map( guac => guac * 5 );
console.log(party);                   // [5, 10, 15, 20, 25]
```

---

##This is all just syntax and organization stuff.

^ With the power given to us by the efficiency and robustness of ES6, we as developers can make some really amazing things.

---

#[fit]ES6 is just the
#*before-party.*

^ ES6 is the start of a whole new generation of JS developers who are on the cutting edge of code

---

##Additional resources

 - _**You Don't Know JS**_: youdontknowjs.com
 - _**ES6 Shims**_: github.com/paulmillr/es6-shim
 - _**ES6 Katas**_: es6katas.org
 - _**ES6 Learning**_: github.com/ericdouglas/ES6-Learning

---

##Transpilers

 - _**Babel**_: babeljs.io
 - _**Google Caja**_: code.google.com/p/google-caja
 - _**ES Transpiler**_: github.com/kaisellgren/ES-Transpiler

---

#Thank you!

###**@cassidoo**
