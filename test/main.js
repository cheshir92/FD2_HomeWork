function Cadets(saintliness) {
    this.value = 13;
    this.attend = 8; //создать новое свойство и инициировать его любым значением (при помощи this)
    this.saintliness = saintliness; //создать новое свойство и инициировать его значением, полученным через входной параметр (при помощи this)
    let a = function(){
        console.log('asdasdsds');
    }
    this.write = function() {
        console.log(a + 'people write something'); //создать новое функциональное выражение (объявить переменную и инициировать ее анонимной функцией, не используя this)
    }
}
Cadets.prototype.peopmeWork = function() {
    console.log('picking their nose');
}
Cadets.prototype.drinkWater = function() {
    console.log('people drink water...');
    this.attend = 15;
}


let cadet = new Cadets('lots of');
console.log("TCL: cadets", cadet);
cadet.drinkWater();
console.log("TCL: cadets", cadet);