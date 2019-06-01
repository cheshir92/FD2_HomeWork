function Insects(spider = 1) {
    this.flies = 123;
    this.spiders = spider;
    this.beetle = 200;

}
Insects.prototype.mouseMakeNoice = function(noice) {
    this.mouse;
    if (noice === true) {
        this.mouse = 'sits quietly';
        this.flies = 12;
    } else {
        this.mouse = 'rustles';
    }
    return this.mouse;
};
export { Insects };