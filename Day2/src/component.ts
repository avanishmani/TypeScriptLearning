let messages:Array<string> = ["welcome to your life","hello world", "how are you ? "];

alert(messages[Math.floor( Math.random() * messages.length - 1 )]); 
enum Power { weak, recovering, strong };        // weak = 0, recovering = 1, strong = 2;
// enum Power { weak = 1, recovering, strong }; // weak = 1, recovering = 2, strong = 3;
// enum Power { weak = 5, recovering, strong }; // weak = 5, recovering = 6, strong = 7;

let heroPower:Power = Power.recovering ; // console.log(heroPower) // 6 as per the previous line
let powerString = Power[heroPower] ; // console.log(powerString) // recovering 

console.log(powerString); 

function adder(num1:number, num2?:number):void{
    console.log(num1);
};

adder(5,6);