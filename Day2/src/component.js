var messages = ["welcome to your life", "hello world", "how are you ? "];
alert(messages[Math.floor(Math.random() * messages.length - 1)]);
var Power;
(function (Power) {
    Power[Power["weak"] = 0] = "weak";
    Power[Power["recovering"] = 1] = "recovering";
    Power[Power["strong"] = 2] = "strong";
})(Power || (Power = {}));
; // weak = 0, recovering = 1, strong = 2;
// enum Power { weak = 1, recovering, strong }; // weak = 1, recovering = 2, strong = 3;
// enum Power { weak = 5, recovering, strong }; // weak = 5, recovering = 6, strong = 7;
var heroPower = Power.recovering; // console.log(heroPower) // 6 as per the previous line
var powerString = Power[heroPower]; // console.log(powerString) // recovering 
console.log(powerString);
function adder(num1, num2) {
    console.log(num1);
}
;
adder(5, 6);
