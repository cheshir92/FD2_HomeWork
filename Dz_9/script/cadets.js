function Cadets(saintliness) {
    this.value = 13;
    this.attend = 8; //создать новое свойство и инициировать его любым значением (при помощи this)
    this.saintliness = saintliness; //создать новое свойство и инициировать его значением, полученным через входной параметр (при помощи this)
    this.write = function() {
        console.log('people write something'); //создать новое функциональное выражение (объявить переменную и инициировать ее анонимной функцией, не используя this)
        this.Cadets.attend = 5;
    }
}
Cadets.prototype.peopmeWork = function() {
    console.log('picking their nose');
    this.attend = 15;
}
Cadets.prototype.drinkWater = function() {
    console.log('people drink water...');
}
export { Cadets };