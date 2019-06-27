# Pure Functions and Immutiblity

A pure function derives its out solely from it's input and has no outside side effects.

```
const addOne = x => x + 1;
```

## A Few Examples of Impure Functions 

```
const COST_OF_ITEM = 13;
const totalCost = (quantity) => COST_OF_ITEM * quantity;
```

```
const createdAt = () => new Date();

const createUser = (name, age) => ({
  createdAt: createdAt(),
  name,
  age
});
```
Now the factory itself is impure because `createdAt` is impure. You can solve this 
by removing the function and passing the date itself as an argument.
