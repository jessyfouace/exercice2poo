let character = {
  objectCharacter: function (name, attack, life, spell, heal, mana) {
    this.name = name;
    this.attack = attack;
    this.life = life;
    this.spell = spell;
    this.heal = heal;
    this.mana = mana;
    this.fight = function (target) {
      if (target.life > 0 && sorcier.life > 0 && enemy.life > 0 && player.life > 0) {
        console.log(name + " utilise sont attaque spéciale " + spell + "pts de vie perdues.");
        let calculhp = target.life - spell;
        target.life = calculhp;
        console.log('Il reste ' + calculhp + ' hp. Au ' + target.name);
        sorcier.mana + 10;
        if (target.life <= 0) {
          console.log(target.name + " est mort.");
        }
        return target.life + sorcier.mana;
      }
    }
    this.heal = function () {
      if (sorcier.life > 0) {
        if (sorcier.mana > 60) {
          console.log('Le magicien se heal il gagne ' + heal + ' hp.');
          let healmag = sorcier.life + heal;
          sorcier.life = healmag;
          console.log('Il lui reste ' + sorcier.life + " hp.");
          sorcier.mana - 60;
          return sorcier.life + sorcier.mana;
        } else {
          console.log("Le magicien ne peut pas se heal.");
          sorcier.mana + 10;
          return sorcier.mana;
        }
      }
    }
  },
}

let enemy = Object.create(character);
enemy.objectCharacter("Guerrier allier", 8, 100, 2 * 8, 0, 0);

let player = Object.create(character);
player.objectCharacter("Guerrier", 12, 100, 2 * 12, 0, 0);

let sorcier = Object.create(character);
sorcier.objectCharacter("Mage", 25, 75, 2 * 25, 20, 100);

console.log(enemy.fight(sorcier));
console.log(player.fight(sorcier));
console.log(sorcier.heal());
console.log(sorcier.fight(player));