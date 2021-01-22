(function(){
"use strict";
function Bike(){
    this.speed = 0;
};
Bike.prototype.applyBrake = function(decrease){
    this.speed -= decrease;
};
Bike.prototype.speedup = function(increase){
    this.speed +=increase;
};
function MountainBike(){
    Bike.call(this);
    this.gear = 1;
};
MountainBike.prototype = Object.create(Bike.prototype);
MountainBike.prototype.constructor = MountainBike;
MountainBike.prototype.setGear = function(gear){
    this.gear = gear;
};
var start = function(){
    var bike = new Bike();
    var mountain = new MountainBike(bike);
};
let exercise = Object.create(new Bike(),{
    works:{
        value:true
    }

});
console.log(start());
console.log(exercise.works);
var b = new Bike();
b.speedup(1);
console.log(b.speed);
})();

//1
/*
var createBicyclePrototype1 = (function(){
    var speed = 0;
    function changeBy(val){
        speed +=val;
    }
    return {
        //speed: 0,
        applyBrake: function(){changeBy(-1);},
        speedup: function(){changeBy(1);},
        value: function(){return speed;}
    };
})();
//2
*/
