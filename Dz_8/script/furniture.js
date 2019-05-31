function Furniture() {
    this.table = 15;
    this.stool = 15;
    this.lamps = 'lamps blink and shine';
};

Furniture.prototype.lampsWork = function (lamps) {
    console.log(lamps);
}
export { Furniture };