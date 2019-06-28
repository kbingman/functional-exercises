# Inheritance

Imagine we have a game that need a Dog Class:

```
Dog
  .bark()
  .poop()
```

And all things need cats, so we add a Cat Class. 
```
Cat
  .meow()
  .poop()
```
But they both need to `poop` and we can't have duplication, so we create an 
Animal super-class.

```
Animal
  .poop()
  Cat
    .meow()
  Dog 
    .bark()
```

With all this pooping, barking and meowing, we need a robot to clean up the 
dogs and cats. 

```
Robot
  .drive()
  CleaningRobot
    .clean()
  MurderRobot
    .kill()
```

But what happens when the product manager wants a MurderRobotDog?

It needs to `drive`, `bark` and `kill`.

## It's a bit of the Gorilla Banana Problem
You request a banana but get a Gorilla holding a banana.

## Composition
Composition to the rescue. Instead of describing each Object, we describe what it does.

```
dog = pooper + barker
cat = pooper + meower
cleaningRobot = driver + cleaner
murderRobot = driver + killer
murderRobotDog = driver + killer + barker
```

Shamelessly stolen from [Fun Fun Function](https://www.youtube.com/watch?v=wfMtDGfHWpA)
