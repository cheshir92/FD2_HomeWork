function People() {
    this.teacher = 1;
};
People.prototype.computerWork = function () {
    this.comp = 'work buzz,buzz.';
    console.log(`computer ${this.comp}`);
};
export { People };