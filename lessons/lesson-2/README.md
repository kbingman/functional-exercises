# Higher Order Functions

Fulfills one (or more) of the two following requirements: 
* Takes a function as an argument
* Returns a new function

> Small Composable Things That Fit Together

## A simple Example

```
Array.prototype.filter

const animals = [
  { species: 'dog', name: 'James' },
  { species: 'dog', name: 'Izu' },
  { species: 'cat', name: 'Ophelia' },
  { species: 'guinea pig', name: 'Princess Pow' } 
];

const dogs = animals.filter(a => {
  return a.species === 'dog'
});
```

You can even make the callback take a function: 

```
const isDog = (animal) => {
  return animal.species === 'dog';
};

const dogs = animals.filter(isDog);
```
