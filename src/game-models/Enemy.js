const Boomerang = require('./Boomerang');
// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    // this.skin = skin;
    this.position = 30;
  }

  generateSkin() {
    const skins = ['YASHER'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.skin = 'RUS';
    console.log('Я ЕСТЬ ЭЛЬБРУС');
    // process.exit();
  }
}

module.exports = Enemy;
