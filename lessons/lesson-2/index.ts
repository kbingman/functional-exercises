# Inheritance

```
Dog
  .bark()
  .poop()
```

```
Cat
  .meow()
  .poop()
```

```
Animal
  .poop()
  Cat
    .meow()
  Dog 
    .bark()
```

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

```
dog = pooper + barker
cat = pooper + meower
cleaningRobot = driver + cleaner
murderRobot = driver + killer
murderRobotDog = driver + killer + barker
```


