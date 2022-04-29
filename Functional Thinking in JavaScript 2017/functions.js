
function log(arg) {
  document.writeln(arg);
}

// log(identity(3));
function identity(x) {
  return x;
}

// add
function add(a, b) {
  return a + b;
}

// subtract
function sub(a, b) {
  return a - b;
}

// multiply
function mul(a, b) {
  return a * b;
}

// function that takes an argument and returns a function that returns that argument
function identityf(arg) {
  return function() {
    return arg;
  };
}

// function that adds from two invocations addf(3)(4) // 7
function addf(a) {
  return function(b) {
    return a + b;
  };
}

// function that takes a binary function and makes it callable with 2 invocations
function liftf(fun) {
  return function(a) {
    return function(b) {
      return fun(a, b);
    };
  };
}

// function that takes a function and an argument, and returns a function that can take a second argument
function curry(fun, a) {
  return function(b) {
    return fun(a, b)
  };
}

// three different versions of increment with pre-defined functions
var inc1 = addf(1);
var inc2 = liftf(add)(1);
var inc3 = curry(add, 1);

// function that takes a binary function and returns an unary function that passes its argument to the binary function twice
function twice(fun) {
  return function(arg) {
    return fun(arg, arg);
  };
}

// function that reverses the arguments of a binary function
function reverse(fun) {
  return function(a, b) {
    return fun(b, a);
  };
}

// function that takes two unary functions and returns a unary function that calls them both
function composeu(fun1, fun2) {
  return function(arg) {
    return fun2(fun1(arg));
  };
}

// function that takes 2 binary functions and returns a function that calls them both
function composeb(fun1, fun2) {
  return function(a, b, c) {
    return fun2(fun1(a, b), c);
  };
}

// function that allows a binary function to be called only once
function once(fun) {
  var flag = false;
  return function(a, b) {
    if(!flag) {
      flag = true;
      return fun(a, b);
    }
    return undefined;
  };
}

// function that produces a generator that will produce values in a range
function fromTo(a, b) {
  return function() {
    var n = a;
    if(n < b) {
      a += 1;
      return n;
    }
    return undefined;
  };
}

// function that takes an array and an optional generator and produces a generator that will produce the elements of the array
function element(arr, gen) {
  if(gen === undefined)
    {
      gen = fromTo(0, arr.length);
    }
    return function() {
      var i = gen();
      if(i !== undefined) {
        return arr[i];
      }
    };
  }

  // function that takes a generator and an array and produces a function that will collect the results in the array
  function collect(gen, arr) {
    return function() {
      var i = gen();
      if(i !== undefined) {
        arr.push(i);
      }
      return i;
    };
  }

  // function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate
  function filter(gen, pre) {
    return function r() {
      var i = gen();
      if(pre(i) || i === undefined) {
        return i;
      }
      return r;
    };
  }

  // function that takes 2 generators and produces a generator that combines the sequences
  function concat(gen1, gen2) {
    return function() {
      var i = gen1();
      if(i === undefined) {
        i = gen2();
      }
      return i;
    };
  }

  // function that returns an object containing two functions that implement an up/down counter, hiding the counter
  function counter(arg) {
    return {
      next: function() { return arg += 1; },
      prev: function() { return arg -= 1; }
    };
  }

  // revocable function that takes a unary function and returns an object containing an invoke function that can invoke
  // the unary function and a revoke function that disables the invoke function
  // say that 10 times fast
  function revocable(fun) {
    return {
      invoke: function(a) {
        if(fun !== undefined) {
          return fun(a);
        }
      },
      revoke: function() { run = undefined; }
    };
  }

  // function that makes a function that generates unique symbols
  function gensymf(arg) {
    var n = 0;
    return function() {
      n += 1;
      return arg + n;
    };
  }

  // function that takes an unary function and a seed and returns a gensymf
  function gensymff(fun, arg) {
    return function(i) {
      var n = arg;
      return function() {
        n = fun(n);
        return i + n;
      };
    };
  }

  // function that returns a generator that will return the next fibonacci number
  function fibonaccif(a, b) {
    return function() {
      var n = a;
      a = b;
      b += n;

      return n;
    };
  }

  // object we'll use later
  function m(value, source) {
    return {
      value: value,
      source: typeof source === 'string'
      ? source
      : String(value)
    };
  }

  // function that takes two m objects and returns an m object
  function addm(m1, m2) {
    return m(add(m1.value, m2.value), "(" + m1.source + "+" + m2.source + ")");
  }

  // function that takes a binary function and a string and returns a function that acts on m objects
  function liftm(fun, arg) {
    return function(m1, m2) {
      return m(fun(m1.value, m2.value), "(" + m1.source + arg + m2.source + ")");
    }
  }

  // modify liftm so that the functions it produces can accept arguments that are either numbers or m objects
  function liftm_mod(fun, arg) {
    return function(m1, m2) {
      if(typeof m1 === 'number') {
        m1 = m(m1);
      }
      if(typeof m2 === 'number') {
        m2 = m(m2);
      }
      return m(fun(m1.value, m2.value), "(" + m1.source + arg + m2.source + ")");
    };
  }

  // function that evaulates simple array expressions
  function exp(arr) {
    if(!Array.isArray(arr)) {
      return arr;
    }
    return arr[0](arr[1], arr[2]);
  }

  // modify exp to evaluate nested array expressions
  function exp_mod(arr) {
    return Array.isArray(arr) ? value[0](exp(value[1]), exp(value[2])) : value;
  }

  // write a function addg that adds from many invocations, until it sees an empty invocation
  /*
  addg() 				// undefined
  addg(2)() 			// 2
  addg(2)(7)() 		// 9
  addg(3)(4)(0)() 	// 7
  addg(1)(2)(4)(8)()  // 15
  */

function addg(a) {
  if(a === undefined) return a;
    return function g(b) {
      if(b !== undefined) {
        return addg(a+b);
      }
      return a;
    };
  }

// function that takes a binary function and applies it to many invocations
function liftg(fun) {
  if(fun === undefined) return fun;
    return function f(a) {
      if(a === undefined) return a;
        return function g(b) {
          if(b !== undefined) {
            return f(fun(a, b));
          }
          return a;
        }
      };
    }

// function that builds an array from many invocations
function arrayg(a) {
  arr = new Array();
  function g(b) {
    if(b === undefined) {
      return arr;
    }
    arr.push(b);
    return g;
  }
  return g(a);
}

// function that takes an unary function, and returns a function that takes a callback and an argument
function continuize(fun) {
  return function(callback, arg) {
    return callback(fun(arg));
  };
}

// function that's a vector... for magic purposes
function vector() {
  var array = [];

  return {
    get: function get(i) {
      return array[i];
    },
    store: function store(i, v) {
      array[i] = v;
    },
    append: function append(v) {
      array.push(v);
    }
  };
}

// function that makes a publish/subscribe object and reliably
// delivers all publications to all subscribers in the correct order
function pubsub() {
  var subscribers = [];
  return Object.freeze({
    subscribe: function(subscriber) {
      subscribers.push(subscriber);
    },
    publish: function(publication) {
      subscribers.forEach(function(s) {
        setTimeout(function(s) {
          s(publication);
        }, 0);
      });
    }
  });
}
