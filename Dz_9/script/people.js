function People(student = 1) {
    this.teacher = 1;
    this.students = student;
};
People.prototype.computerWork = function() {
    this.comp = 'work buzz,buzz.';
    console.log(`computer ${this.comp}`);
    this.teacher = 1 * 5;

};
export { People };