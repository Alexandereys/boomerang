const keypress = require('keypress');

// Настроим соответствия нажатий на клавиши и действий в игре.

function runInteractiveConsole(hero) {
  const keyboard = {
    q: () => hero.moveLeft('a'),
    w: () => hero.attack('w'),
    e: () => hero.moveRight('d'),
    r: () => console.log('r'),
    t: () => console.log('t'),
    y: () => console.log('y'),
  };

  // Какая-то функция

  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}
module.exports = runInteractiveConsole;
