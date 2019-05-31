function Claassroom() {
    this.conditioner = 1;
    this.atmosphere = 'low';
    this.temperature = 'hell';
    this.board = 1;
    this.wall = 4;
    this.panic = 'acceptable';
    this.camera = 1;
    this.people = new People();
    this.cadets = new Cadets();
    this.furniture = new Furniture();
    this.insects = new Insects();
    this.nail = new Nails();
}
const klass = new Claassroom();



function People() {
    this.teacher = 1;
}

function Cadets() {
    this.value = 13;
}

function Furniture() {
    this.table = 15;
    this.stool = 15;
    this.lamps = 'lamps blink and shine';
};

function Insects() {
    this.flies = 123;
    this.spiders = 1;
    this.beetle = 200;
}

function Nails() {
    this.nails = 400;
}


Furniture.prototype.lampsWork = function(lamps) {
    console.log(lamps);
}

Insects.prototype.mouseMakeNoice = function(noice) {
    this.mouse;
    if (noice === true) {
        mouse = 'sits quietly';
    } else {
        mouse = 'rustles';
    }
    return mouse;
};
Nails.prototype.breedNails = function() {
    this.evt = 'there are more of them';
    return this.evt;
}
People.prototype.computerWork = function() {
    this.comp = 'work buzz,buzz.';
    console.log(`computer ${this.comp}`);
}
Cadets.prototype.peopmeWork = function() {
    console.log('picking their nose');
}


klass.furniture.lampsWork(klass.furniture.lamps);
console.log(klass.insects.mouseMakeNoice(true));
console.log(klass.nail.breedNails());
klass.people.computerWork();
klass.cadets.peopmeWork();