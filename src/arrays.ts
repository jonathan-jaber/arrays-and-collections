let originalArray: number[] = [2, 4, 8];

let newArray = [...originalArray];

newArray.push(57);

console.log(originalArray);
console.log(newArray);

let marioCharacters: string[] = ["mario", "luigi", "peach", "bowser", "yoshi"];

marioCharacters.sort();

for(let n of marioCharacters){
    console.log(n);
}

console.log(marioCharacters);