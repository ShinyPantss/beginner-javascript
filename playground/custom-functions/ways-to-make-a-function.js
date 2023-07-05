// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
//   }
//   function doctorize(firstName) {
//     return `Dr. ${firstName}`;
//   }
// inchToCm(3);
// const inchToCm = (inches) => inches * 2.54;

// function add(a, b = 5) {
//   const total = a + b;
//   return total;
// }

// const add2 = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// };

// const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });


(function(age ){
    console.log('Running Anon Function');
    return `You are cool and your age is ${age};`;
}(10))

// Methods!!!
const wes = {
    name: 'wes bos',
    // Method!
    sayHi: function() {
        console.log(`hey ${this.name}`);
        return 'Hey Wes';
        },

 
    //Short hand Method
    yellHi(){
        console.log(`hey ${this.name}`);
    },
    //Arrow
    wisperHi: () => {
        console.log(`hey ${this.name}`);
    }
}    
    


//Callback Funtions
//click callback

const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Clicking!!');
}

button.addEventListener('click', () => console.log('Nice Job!'));

button.addEventListener('click', function(){
    console.log('Are you sure you want to click this?');
});


//Timer Callback
setTimeout(wes.yellHi, 1000);

setTimeout(function(){
    console.loge ('DONE! Time to eat!');
},1000)

setTimeout(() => {
    console.log('DONE! Time to eat!');},1000);