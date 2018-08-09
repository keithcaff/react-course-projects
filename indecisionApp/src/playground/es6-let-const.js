var nameVar ='Keith';
var nameVar = 'Mike'; //valid
console.log('nameVar',nameVar);


let nameLet = 'Jen';
nameLet = 'Jenny';
console.log('nameLet',nameLet);


const nameConst = 'Bob';
// nameConst = 'Willie'; //cant assign again to a const.
console.log('nameConst',nameConst);


function getPetName() {
    var petName = 'Jake'
    return petName;
}

const petName = getPetName();
console.log(petName)


var fullName = 'Keith Caffrey';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]; 
    console.log(firstName);
}
console.log(firstName); //still have access to var outside of block definition











