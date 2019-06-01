function Insects() {
    this.flies = 123;
    this.spiders = 1;
    this.beetle = 200;
}
Insects.prototype.mouseMakeNoice = function (noice) {
    this.mouse;
    if (noice === true) {
        this.mouse = 'sits quietly';
    }
    else {
        this.mouse = 'rustles';
    }
    return this.mouse;
};
export { Insects };