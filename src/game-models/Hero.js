const Boomerang = require('./Boomerang');

class Hero {
  constructor(boomerang) {
    this.skin = 'ELB';
    this.position = 0;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position = -1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = 'D';
    console.log('🍻🍻Я ОСТАЛСЯ НА ПОВТОР🍻🍻');
    // console.log(this.skin);
    process.exit();
  }
}

module.exports = Hero;
