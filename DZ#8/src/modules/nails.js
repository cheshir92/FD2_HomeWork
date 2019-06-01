function Nails() {
    this.nails = 400;
}

Nails.prototype.breedNails = function() {
    this.evt = 'there are more of them';
    return this.evt;
}
export { Nails };