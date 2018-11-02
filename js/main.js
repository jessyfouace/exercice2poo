// function homme (prenom, nom, pays, age, payement) {
//   this.prenom = "Jessy";
//   this.nom = "Fouace";
//   this.pays = "France";
//   this.age = 19;
//   this.payement = ["visa", "mastercard"];
//   this.getName = function() {
//     alert(this.prenom);
//     alert(this.nom);
//     var calculage = 2018 - this.age;
//     alert("Vous êtes née en: " + calculage);
//   };
//   getName();
// }
// homme();


function homme(prenom, nom, habitations, ages, payements) {
  var name = prompt("Quel est votre prénom ?");
  this.prenom = name;
  var surname = prompt("Quel est votre nom ?");
  this.nom = surname;
  var lives = prompt("Dans quel pays résidez vous ?");
  var upperlives = lives;
  upperlives.toUpperCase();
  this.habitations = ["FRANCE", "ANGLETERRE"];
  var agess = prompt("Quel âge avez vous ?");
  this.ages = agess;
  var payement = prompt("Choisisez un moyen de payement (visa, mastercard)");
  this.payements = ["visa", "mastercard"];
  this.getName = function() {
    var calculage = 2018 - this.ages;
    for (i = 0; i < this.habitations.length; i++) {
      if (upperlives == this.habitations[i]) {
        break;
      } else {
        continue;
      }
    }
    for (e = 0; e < this.payements.length; e++) {
      if (payement == this.payements[e]) {
        break;
      } else {
        continue;
      }
    }

    if (this.habitations[i] == undefined || this.payements[e] == undefined || this.prenom == "" || this.nom == "" || calculage > 2000) {
      alert("Il s'emblerait qu'une ou plusieurs de vos informations ne soit pas correctes.")
    }else{
      alert("Vous vous appelez: " + this.prenom + " " + this.nom + ". Vous êtes née en: " + calculage + ". Vous habitez en: " + this.habitations[i] + ". Et votre moyen de payement est: " + this.payements[e]);
    }
  };
  getName();
}
homme();
