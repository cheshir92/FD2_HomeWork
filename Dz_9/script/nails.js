function Nails(screw = 1) {
    this.nails = 400;
    this.screws = screw;
}

Nails.prototype.breedNails = function() {
    this.evt = 'there are more of them';
    this.nails = 400 * 2;
    return this.evt;
}
export { Nails };