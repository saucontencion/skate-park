const { Skater } = require("../models/skater");

async function registro (N,E,F){
console.log(N,E,F);
 const skater = await Skater.create({N,E,F})

}
module.exports = {registro}