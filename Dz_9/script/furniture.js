function Furniture(mouse = 1) {
    this.table = 15;
    this.stool = 15;
    this.lamps = 'lamps blink and shine';
    this.mouse = mouse;
};

Furniture.prototype.lampsWork = function(lamps) {
    console.log(lamps);
    this.table = 7;
}
export { Furniture };