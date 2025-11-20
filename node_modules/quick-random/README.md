# quick-random


[![NPM](https://nodei.co/npm/quick-random.png)](https://nodei.co/npm/quick-random/)

![NPM](https://img.shields.io/npm/l/quick-random)
[![npm version](https://badge.fury.io/js/quick-random.svg)](https://badge.fury.io/js/quick-random)
[![install size](https://packagephobia.com/badge?p=quick-random)](https://packagephobia.com/result?p=quick-random)

## What is it?

Quick random is a JavaScript/Typescript library that includes multiple functions for generating random numbers, letters, strings, objects and more. I've made this function to be as easy to use as possible, and I hope you enjoy it!

## Why though?

As we all know, random in JavaScript kinda sucks (sorry, Math.random()). I've wanted an easier way to generate random data (mostly for my own projects).

## Installation

npm:

```bash
npm i quick-random
```

yarn:

```bash
yarn add quick-random
```

pnpm:

```bash
pnpm add quick-random
```

## How do I use it?

It's pretty simple. Just import the function you want to use, and then call it.

```js
import random from "quick-random"; //TS
import { random } from "quick-random"; //JS ESM
const { random } = require("quick-random"); //JS CommonJS
```

 Here's a list of all available functions:

### Random number

```js
import random from "quick-random";
random.number(1, 10);
```

### Random string

```js
import random from "quick-random";
random.string(10);
```

you can also specify the specific characters you want to use:

```js
import random from "quick-random";
random.string(10, "abc");
```

### Random object

This method takes an object as a parameter, and returns a new object with random values (It even supports nested objects!). For example:

```js
import random from "quick-random";
const object = {
    name: random.string(10),
    age: random.number(1, 100),
    isCool: random.boolean()
    moreInfo: {}
}

const randomObject = random.object(object);
```

It's important to note that at the moment, this method doesn't support symbols as a type.

### Random character

```js
import random from "quick-random";
random.char();
```

### Random boolean

```js
import random from "quick-random";
random.boolean();
```

### Random date

```js
import random from "quick-random";
random.date();
random.date(new Date("2021-01-01"), new Date("2021-12-31"));

// It also accepts strings!
random.date("2021-01-01", "2021-12-31");
```

### Random symbol

```js
import random from "quick-random";
random.symbol();
```

### Random bigints

```js
import random from "quick-random";
random.bigint();
random.bigint(100n, 1000n);
```

### Random array item

In this function, you can specify the type of array you want to generate. For example, if I wanted to generate a random item from an array of strings, I would do this:

```js
import random from "quick-random";
random.array(10 "string");
```

The current optional types are: number, string, and boolean (I'm planning on adding more in the future).

### Element from array

```js
import random from "quick-random";
const element = random.elementFromArray(array);
```

### Key from object

```js
import random from "quick-random";
random.keyFromObject(object);
```

### Value from object

```js
import random from "quick-random";
random.valueFromObject(object);
```

# How can I contribute?
Feel free to open a pull request or an issue! I'm always open to suggestions and improvements.

# Hope you enjoy!