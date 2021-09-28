function Animal(move, name) {
    this.move = move;
    this.name = name;
}
Animal.prototype.run = function () {
    console.log(`I can run ${this.move}`);
}
Animal.prototype.species = function () {
    console.log(`I am ${this.name}`);
}
function Predator(move, name, dangerous) {
    Animal.call(this, move, name)
    this.dangerous = dangerous
}
Predator.prototype = Object.create(Animal.prototype)
Predator.prototype.constructor = Predator

Predator.prototype.behavior = function () {
    console.log(`I am ${this.dangerous}`);
}
function Wolf(move, name, dangerous, place) {
    Predator.call(this, move, name, dangerous);
    this.place = place
}
Wolf.prototype = Object.create(Predator.prototype)
Wolf.prototype.constructor = Wolf
Wolf.prototype.live = function () {
    console.log(`I live in ${this.place}`);
}
let wolf = new Wolf('fast', 'wolf', 'aggressive', 'forest')
wolf.species()
wolf.run()
wolf.behavior()
wolf.live()
function Lion(move, name, dangerous, group) {
    Predator.call(this, move, name, dangerous);
    this.group = group
}
Lion.prototype = Object.create(Predator.prototype)
Lion.prototype.constructor = Lion

Lion.prototype.family = function () {
    console.log(`I have a big ${this.group}`);
}
let lion = new Lion('fast', 'lion', 'dangerous', 'family')
lion.species()
lion.run()
lion.behavior()
lion.family()
function Herbivorous(move, name, eat) {
    Animal.call(this, move, name);
    this.eat = eat;
}
Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.prototype.constructor = Herbivorous;
Herbivorous.prototype.food = function () {
    console.log(`I eat only ${this.eat} foods`);
}
function Giraffe(move, name, eat, height) {
    Herbivorous.call(this, move, name, eat);
    this.height = height
}
Giraffe.prototype = Object.create(Herbivorous.prototype)
Giraffe.prototype.constructor = Giraffe
Giraffe.prototype.growth = function () {
    console.log(`I am ${this.height}`);
}
let giraffe = new Giraffe('fast', 'Giraffe', 'plant', 'tall')
giraffe.species()
giraffe.run()
giraffe.food()
giraffe.growth()
function Koala(move, name, eat, activity) {
    Herbivorous.call(this, move, name, eat);
    this.activity = activity
}
Koala.prototype = Object.create(Herbivorous.prototype)
Koala.prototype.constructor = Koala
Koala.prototype.sleep = function () {
    console.log(`I like ${this.activity}`);
}
let koala = new Koala('slovly', 'Koala', 'plant', 'sleep')
koala.species()
koala.run()
koala.food()
koala.sleep()