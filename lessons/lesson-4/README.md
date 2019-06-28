# Partial Application and Currying

## Canonical Example - ES5
```
// x is stored in closure here and is available in the body of our
// returned function awaitng the y value

function add(x) {
  return function(y) {
    return x + y
  }
}

const add1 = add(1); // (y) => 1 + y
const add2 = add(2); // (y) => 2 + y

```

## And in ES6
```
const add = (x) => (y) => {
  return x + y;
};
```

or even

```
const add = x => y => x + y;
```

