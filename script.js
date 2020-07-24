const sum = (a, b) => a + b;

let superCar = {
    HorsePower: 320,
    Brand: 'Honda',
    Model: 'Civic',
    year : 2018,
    a: {
        b: 2,
        t: 3,
    }
}

let superCar2 = {};

function createCopy(newObj, obj) {

    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return console.log(newObj);
}

createCopy( superCar, superCar2 );
const copy = (object) => {
    const newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            newObj[key] = element;
        }
    }
    return newObj;
};


const Island = {
    a: {
        a: 1,
        b: false,
    },
    b: {
        a: false,
        b: false,
    },
}

const deepCopy = (object) => {
    const newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if(element !== null && typeof element === 'object') {
                newObj[key] = deepCopy(element)
            } else
            newObj[key] = element;
        }
    }
    return newObj;
}

const newIsland = copy(Island);

Island.a.a = 'abc';

console.log(newIsland.a.a === Island.a.a);