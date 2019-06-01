import { People } from './people.js';
import { Cadets } from './cadets.js';
import { Furniture } from './furniture.js';
import { Insects } from './insects.js';
import { Nails } from './nails.js';

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

klass.furniture.lampsWork(klass.furniture.lamps);
console.log(klass.insects.mouseMakeNoice(true));
console.log(klass.nail.breedNails());
klass.people.computerWork();
klass.cadets.peopmeWork();