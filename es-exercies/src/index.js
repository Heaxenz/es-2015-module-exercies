import Fruits from "./foods";
import {remove, choice} from "./helpers"

let fruit = choice(Fruits);

console.log(`I'd like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log("Delicious! May I have another?")
let fruitLeft = remove(Fruits,fruit);
console.log(`I'm sorry, we're all out. We have ${fruitLeft.length} fruits left.`)
