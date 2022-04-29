# Functional Programming in _**JavaScript**_

---

# Cassidy Williams
## **@cassidoo**

---

## What is functional programming?

---

> "The mustachioed hipster of programming paradigms"

Smashing Magazine

^ Functional languages are considered the most loved on the 2021 Developer Survey from Stack Overflow
^ Popular JS libraries let you use functional concepts in your components
^ Traditionally OOP languages have added functional support
^ But what does it mean

---

It produces _**abstraction**_ through clever ways of combining functions.

^ There are three "types" of programming that you may or may not have heard of: Procedural, OOP, and functional programming.
^ In OOP, you create "objects" (hence the name), which are structures that have data and methods.
^ In functional, everything is a function. Functional programming tries to keep data and behavior separate, and OOP brings those concepts together.

---

> "Functional programming [is] a paradigm that forces us to make the complex parts of our system explicit, and that's an important guideline when writing software."

José Valim, creator of Elixir

---

There are two things you need to know to understand functional programming.

---

## Data is
# _**Immutable**_

---

If you want to change data, like an array of data, you return a new array with the changes, not the original.

---

## Functions are
# _**Stateless**_

---

Functions act as if for the first time, every time!

^ In other words, the function always gives the same return value for the same arguments.

---

# 3 Best Practices

---

## 1. Your functions should accept at least 1 argument

---

## 2. Your functions should either return data, or another function

---

## 3. Don't use loops!

---

# Quick Example

^ Let's say that you have a school and in some DB, we have the records of each of the students.
^ Let's say they all have a name, and a grade point average (GPA).

---

## The OOP Way

```js
class Student {
  constructor(name, gpa) {
    this.name = name;
    this.gpa = gap;
  }
  
  getGPA() {
    return this.gpa;
  }

  changeGPA(amount) {
    return this.gpa + amount;
  }
}
```

^ In OOP, you might write something like this

---

```js
let phil = new Student('Phil Eaglesworth', 3.95);

```

^ If you want to initialize a student, you would do this

---

```js
let students = [
	new Student('Phil Eaglesworth', 3.95),
	new Student('Cassidy Williams', 4.0),
	new Student('Joe Randy', 2.2) ];

```

^ for legal reasons, these people are not real and my GPA was definitely perfect in college

---

```js
for (let i = 0; i < students.length; i++) {
  students[i].changeGPA(.1);
}

```

^ And to change each of their GPAs, you could do a loop to increase the grades of each.

^ …or something. Then you could loop through again to print out the results, or just work with the objects as you wish.


---

## The Functional Way

```js
let students = [
  ['Phil Eaglesworth', 3.95],
  ['Cassidy Williams', 4.0],
  ['Joe Randy', 2.2],
];
```

^ to solve the same type of problem with FP, you'd do it a little differently.
^ this is how you might initialize the students
^ storing the students as plain arrays instead of objects.
^ FP prefers plain data structures/types like arrays and lists and hashes (etc.) to not complicate the data and behavior

---

```js
let newStudents = students.map(function(s) {
  return [s[0], s[1] + .1];
});
```

^ You pass in not only the amount you want to change, but the data itself.

---

```js
function changeGPAs(students) {
  return students.map(student => changeGPA(student, .1))
}

function changeGPA(student, amount) {
  return student[1] + amount
}
```

^ changeGPAs() takes in two arguments, the students array.
^ It would then call changeGPA() for each value in the students array, and return the result as a new array.
^ The job of changeGPA() is to return a copy of the student passed in with the GPA updated.
^ FP prefers tiny, modular functions that do one part of a larger job (one handles a set of students, one handles each individual student)

---

## Debugging Functional Programming

^ arguably easier than other programming paradigms because of its modularity, and lack of side effects
^ if something goes wrong in OOP, you have to think, what other parts of your program could have affected your program's state
^ with FP, you can pinpoint the exact function where something went wrong

---

## Yet another quick example!

---

```js
let count = 0;

function increment() {
  if (count !== 4) count += 1;
  else count += 2;

  return count
}
```

^ Let's say we had a counter that skipped the number 5.
^ In this program, if you want to test it, you'd have to keep track of the global state of count, and run increment() 5 times to see if it worked.
^ It returns something different every time it is called
^ so you need to use a debugger to step through (or lots of logs)

---

```js
function pureIncrement(count) {
  if (count !== 4) return count + 1;
  else return count + 2;
}
```

^ We don't need to run pureIncrement() multiple times to check this
^ You can easily unit test the function because it will always return the same thing with the same input
^ There is no variable being modified (remember, immutability)!

^ This isn't to say that you'll never use a debugger, but by having everything written into smaller chunks and free from side effects, your errors will be much faster to pinpoint, and won't be dependent on the environment they're being run in.

---

## It's a lot like math
### oh no

---

## (6 * 9) / ((4 + 2) + (4 * 3))

^ If you were doing this by hand, you could break up the problem by adding/multiplying all of the numbers, combining what is in the parenthesis, and then dividing the results.

---

```lisp
(define (mathexample)
  (/
    (* 6 9)
    (+
      (+ 2 4)
      (* 4 3)
    )
  )
)

```

^ If you did this in a functional language like Lisp, it's a lot like how you would do it by hand.
^ This is why FP is often called "pure" because fns run as if they are evaluating math fns, with no side effects.

^ When you want to reuse a class in OOP and add a feature, typically you add conditionals and parameters, and your functions get larger. Your abstract classes and interfaces get pretty robust. You have to pay careful attention to the larger application architecture, because of side effects and other factors that will affect your program (like we talked about before). In functional programming, it's the opposite, in that your functions get smaller, and much more specific to what you want. One function does one thing, and whenever you want to do that one thing, you use that one function.

^ There are exceptions in every system, of course, but this is generally what you see in various codebases out in the world!

---

There are languages made specifically for this

 - Lisp
 - Elixir
 - Haskell
 - Scala
 - Clojure

---

## J A V A S C R I P T

---

### *(we're about to code, get your laptops ready)*

---

```js
function add(a, b) {
  return a + b;
}
```

---

Write a function that adds from two invocations.

```js
addf(3)(4)
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
curry(add, 9)(3)
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

^ Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

---

Write a function that takes a binary function and makes it callable with 2 invocations.

```js
liftf(add)(2)(3)

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

# Last one!

---

Using the functions we've written so far, write a function `increment`!

```js
let increment = curry(add, 1);

> increment(5)
6

```

---

Using the functions we've written so far, write a function `increment`!

```js
let increment1 = addf(1);
let increment2 = liftf(add)(1);
```

---

# Wasn't this _**FUN?**_

---

 - Functions can be broken down into simpler and smaller chunks that are easier to read
 - Programs can be easier to debug due to its modularity
 - It is very fun

---

# Thank you!
## **@cassidoo**
