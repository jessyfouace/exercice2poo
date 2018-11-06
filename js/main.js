class Warrior {
  constructor(name, attack, life, spell) {
    this.name = name;
    this.attack = attack;
    this.life = life;
    this.spell = spell;
  }
  fight(target) {
    if (target.life > 0 && this.life > 0) {
      console.log(this.name + " utilise sont attaque spéciale " + this.spell + "pts de vie perdues.");
      let calculhp = target.life - this.spell;
      target.life = calculhp;
      console.log('Il reste ' + calculhp + ' hp au ' + target.name);
      if (target.life <= 0) {
        console.log(target.name + " est mort.");
      }
      return target.life;
    }
  }
}

class Magician extends Warrior {
  constructor(name, attack, life, spell, heal, mana) {
    super(name, attack, life, spell);
    this.heal = heal;
    this.mana = mana;
  }
  getHeal(target) {
    if (this.life > 0) {
      if (this.mana > 60) {
        console.log('Le magicien se heal il gagne ' + this.heal + ' hp.');
        let healmag = this.life + this.heal;
        this.life = healmag;
        console.log('Il lui reste ' + this.life + " hp.");
        this.mana = this.mana - 60;
        return this.life + this.mana;
      } else {
        console.log(this.name + " ne peut pas se heal.");
        return this.life
      }
    }
  }
}

let user = new Warrior("Guerrier", 8, 100, 2 * 8);
let ally = new Warrior("Guerrier", 12, 100, 2 * 12);
let enemy = new Magician("Mage", 25, 75, 2 * 25, 20, 100);

console.log(user.fight(enemy));
console.log(ally.fight(enemy));
console.log(enemy.getHeal(enemy));
console.log(enemy.fight(ally));