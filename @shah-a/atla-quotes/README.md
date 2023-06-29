# BEW2.1 Assignment 5: Node Module Challenge

![npm (scoped)](https://img.shields.io/npm/v/@shah-a/atla-quotes?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@shah-a/atla-quotes?style=for-the-badge)

## ATLA Quote Bot

### Description

A simple node module that returns random quotes from various `Avatar: The Last Airbender` scenes.

### Installation

Local installation to any node project:

```
$ npm install @shah-a/atla-quotes --save
```

### Usage

Simply require the package at the top of your `index.js` file and call the `getQuote()` method.

**Example:**

```javascript
const atla = require('@shah-a/atla-quotes');
const quote = atla.getQuote();
console.log(quote);
```

 That's it! 😃

### Quotes List

Here's a list of all the possible quotes the module can return:

#### Aang
- **"Harsh words won't solve problems, action will!"** - [Book 1, Episode 11: "The Great Divide"]
- **"The past can be a great teacher."** - [Book 3, Episode 13: "The Firebending Masters"]
- **"It's easy to do nothing, but it's hard to forgive."** - [Book 3, Episode 16: "The Southern Raiders"]

#### Katara
- **"It is the strength of your hearts that make you who you are."** - [Book 1, Episode 6: "Imprisoned"]
- **"Everybody, hold hands. We can do this. We have to."** - [Book 2, E11: "The Desert"]
- **"I will never, ever turn my back on people who need me!"** - [Book 3, Episode 3: "The Painted Lady"]

#### Sokka
- **"I'm just a guy with a boomerang. I didn't ask for all this flying and magic!"** - [Book 1, Episode 2: "The Avatar Returns"]
- **"It's a giant mushroom! Maybe it's friendly!"** - [Book 2, Episode 11: "The Desert"]
- **"I'm just a guy who likes comedy."** - [Book 3, Episode 17: "The Ember Island Players"]

#### Uncle Iroh
- **"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."** - [Book 2, Episode 9: "Bitter Work"]
- **"It is usually best to admit mistakes when they occur, and seek to restore honor."** - [Book 2, Episode 15: "The Tales of Ba Sing Se"]
- **"You can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."** - [Book 2, Episode 20: "The Crossroads of Destiny"]

#### The Cabbage Merchant
- **"No! My cabbages!"** - [Book 1, Episode 5: "The King of Omashu"]
- **"My cabbages! This place is worse than Omashu!"** - [Book 1, Episode 9: "The Waterbending Scroll"]
- **"My cabb--!... Oh, forget it!"** - [Book 2, Episode 15: "The Tales of Ba Sing Se"]
