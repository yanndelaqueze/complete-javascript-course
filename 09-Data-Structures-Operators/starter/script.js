'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Data for Football betting app
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals('Lewandowski', 'Hummels');
// printGoals(...game.scored);

// team1 < team2 && console.log('team 1 will win');
// team1 > team2 && console.log('team 2 will win');

// Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, scorer] of game.scored.entries())
  console.log(`Goal ${index + 1} : ${scorer}`);

// Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

let sum = 0;
const odds = Object.values(game.odds);
console.log(odds);
for (const x of odds) {
  console.log(x);
  sum += x;
}
console.log(sum);
console.log(sum / odds.length);

// Print the 3 odds to the console, but in a nice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} : ${odd}`);
}

//Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// console.log(scorers);

// Challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [(72, '🔁 Substitution')],
  [(76, '⚽ GOAL')],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1 Create an array 'events'ofthedifferentgameeventsthathappened(no duplicates)

const events = [];
for (const event of gameEvents) {
  if (!events.includes(event[1])) {
    events.push(event[1]);
  }
}
console.log(events);

const events2 = [...new Set(gameEvents.values())];
console.log(events2);

// 2 Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3 Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened on average every ${90 / gameEvents.size} minutes`
);

//4 Loop over 'gameEvents' and log each element to the console ,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL

for (const [key, event] of gameEvents) {
  if (key < 45) {
    // console.log(`[FIRST HALF] ${key} : ${event}`);
  } else {
    // console.log(`[SECOND HALF] ${key} : ${event}`);
  }
}

// Challenge 4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

const camelCase = function (text) {
  const array = text.split('\n');
};
