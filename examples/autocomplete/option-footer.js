'use strict';

const colors = require('ansi-colors-browserify');
const { AutoComplete } = require('enquirer');

const prompt = new AutoComplete({
  name: 'flavor',
  message: 'Pick your favorite flavor',
  limit: 10,
  footer() {
    return colors.dim('(Scroll up and down to reveal more choices)');
  },
  choices: [
    'Almond',
    'Apple',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Chocolate',
    'Cinnamon',
    'Coconut',
    'Cranberry',
    'Grape',
    'Nougat',
    'Orange',
    'Pear',
    'Pineapple',
    'Raspberry',
    'Strawberry',
    'Vanilla',
    'Watermelon',
    'Wintergreen'
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
