const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}


Park.prototype.addDinosaur = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  const index = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(index, 1);
}

Park.prototype.removeAllDinosaurs = function() {
  this.collectionOfDinosaurs = [];
}

Park.prototype.mostVisitors = function() {
  let currentHighest = 0;
  let currentDinosaur;
  for (const dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.guestsAttractedPerDay > currentHighest ){
      currentHighest = dinosaur.guestsAttractedPerDay;
      currentDinosaur = dinosaur;
    }
  }
  return currentDinosaur
}


Park.prototype.bySpecies = function(species) {
  let dinosaurs = [];
  for (const dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species === species ){
      dinosaurs.push(dinosaur);
    }
  }
  return dinosaurs;
}


Park.prototype.totalVisits = function() {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalAnnualVisits = function() {
  return this.totalVisits() * 365;
}

Park.prototype.totalAnnualRevenue = function() {
  return this.totalAnnualVisits() * this.ticketPrice;
}


module.exports = Park;

// const Dinosaur = function (species, diet, guestsAttractedPerDay) {
//   this.species = species;
//   this.diet = diet;
//   this.guestsAttractedPerDay = guestsAttractedPerDay;
// }
//
// module.exports = Dinosaur;
