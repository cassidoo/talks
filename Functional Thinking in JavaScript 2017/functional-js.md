# Functional Thinking in _**JavaScript**_

---

# Cassidy Williams
##[fit] **Senior Software Engineer at _L4 Digital_**

---

## What is functional programming?

---

> "The mustachioed hipster of programming paradigms"
# Smashing Magazine

---

It produces _**abstraction**_ through clever ways of combining functions.

---

There are two things you need to know to understand functional programming.

---

## Functions are
# _**Immutable**_

---

If you want to change data in an array, just return a new array with the changes, don't change the original!

---

## Functions are
# _**Stateless**_

---

Functions act as if for the first time, every time!

---

In addition, there are 3 best practices you should follow.

---

1) Your functions should accept at least 1 argument

---

2) Your functions should either return data, or another function

---

3) NO LOOPS

---

## Quick Example

---

## The OOP Way

```js
class Student {
  constructor(name, gpa) {
    this.name = name;
    this.gpa = gpa;
  }

  getGPA() {
    return this.gpa;
  }

  changeGPA(amount) {
    return this.gpa + amount;
  }
}
```

---

```js
var dan = new Student('Dylan Grant', 3.5);
```

---

```js
var students = [ new Student('Dylan Grant', 3.5),
                 new Student('Cassidy Williams', 3.9),
                 new Student('Harry Love', 2.2) ];

for(var i = 0; i < students.length; i++) {
  students[i].changeGPA(.1);
}
```

---

## The Functional Way

```js
var students = [
  ['Dylan Grant', 3.5],
  ['Cassidy Williams', 3.9],
  ['Harry Love', 2.2],
];
```

---

```js
var newStudents = students.map(function(s) {
  return [s[0], s[1] + .1];
});
```

You pass in not only the amount you want to change, but the data itself.

---

There are languages made specifically for this

 - Lisp
 - Scheme
 - Haskell
 - Scala
 - Clojure

---

## Let's go through some examples.
### *(we're about to code, get your laptops ready)*

---

Everything we write will be in the same JS file.
We will *not* be using arrow functions for these exercises, unless you want to.

---

Type out these helpers.

```js
function log(arg) {
  document.writeln(arg);
}

function identity(x) {
  return x;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
```

^ let add = (a, b) => a + b;

---

Recursion is a big deal in functional programming.

---

Write a function that takes an argument and returns a function that returns that argument.

---

Write a function that takes an argument and returns a function that returns that argument.

```js
function identityf(arg) {
  return function() {
    return arg;
  };
}
```

---

```bash
> identity(5)
5

> identityf(5)
function () {
    return arg;
  }

> identityf(5)()
5

```

---

Write a function that adds from two invocations.

```js
addf(3)(4) // this returns 7.
```

---

Write a function that adds from two invocations.

```js
function addf(x) {
	return function (y) {
		return add(x, y);
	};
}
```

---

Write a function that takes in a function and an argument, and returns a function that can take a second argument.

```js
curry(add, 9)(3) // this adds 9 and 3 together -> returns 12
```

---

Write a function that takes in a function and an argument, and returns a function that can take a second argument.

```js
function curry(fun, a) {
  return function(b) {
    return fun(a, b)
  };
}
```

---

# You just learned currying!
Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

---

Write a function that takes a binary function and makes it callable with 2 invocations.

```js
liftf(add)(2)(3) // this adds 2 and 3 -> returns 5
liftf(sub)(10)(7) // this is 10 - 7 -> returns 3

```

---

Write a function that takes a binary function and makes it callable with 2 invocations.

```js
function liftf(fun) {
  return function(a) {
    return function(b) {
      return fun(a, b);
    };
  };
}
```

---

So, using the functions we've written so far, write a function `increment` in 2 different ways.

```js
var increment = curry(add, 1);

> increment(5)
6

```

---

Using the functions we've written so far, write a function `increment` in 2 different ways.

```js
var increment1 = addf(1);
var increment2 = liftf(add)(1);
```

---

Write a function that reverses the arguments of a binary function.

```js
reverse(sub)(2, 3) // returns sub(3, 2) -> 1
```

---

Write a function that reverses the arguments of a binary function.

```js
function reverse(fun) {
  return function(a, b) {
    return fun(b, a);
  };
}
```

---

Now let's get funky, and make a function that returns an object.

---

Write a function `counter` that returns an object containing two functions that implement an up/down counter.

```bash
> var k = counter(6)
> k.next()
7
> k.next()
8
> k.prev()
7

```

---

Write a function `counter` that returns an object containing two functions that implement an up/down counter.

```js
function counter(arg) {
  return {
    next: function() { return arg += 1; },
    prev: function() { return arg -= 1; }
  };
}
```

---

Write a function that returns a generator that will return the next fibonacci number.

```bash
> var t = fibonaccif(0,1)
> t()
0
> t()
1
> t()
1
> t()
2
> t()
3
```

---

Write a function that returns a generator that will return the next fibonacci number.

```js
function fibonaccif(a, b) {
  return function() {
    var n = a;
    a = b;
    b += n;

    return n;
  };
}
```

---

#[fit] LAST ONE.

---

Write a function that adds from many invocations, until it sees an empty invocation.

```js
addgroup() 				// returns undefined
addgroup(2)() 			// returns 2
addgroup(2)(7)() 		// returns 9
addgroup(3)(4)(0)() 	// returns 7
addgroup(1)(2)(4)(8)()  // returns 15
```

---

Write a function that adds from many invocations, until it sees an empty invocation.

```js

function addgroup(a) {
  if(a === undefined) return a;
  return function g(b) {
    if(b !== undefined) {
      return addgroup(a+b);
    }
    return a;
  };
}

```

---

# Wasn't this _**FUN?**_

---

# Why did we just learn functional programming?
 - Functions can be broken down into simpler and smaller chunks that are easier to read
 - Software is more reliable due to its modularity
 - It's becoming more popular EVERY SINGLE DAY.


---

Helpful Libraries
 - fn.js
 - underscore.js
 - bacon.js

---

# The end
### Get back to work
##### Also tweet me **@cassidoo**
