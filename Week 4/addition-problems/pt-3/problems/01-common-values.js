/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};

    console.log(commonValues(cat, bunny)); // prints ['white']

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};

    console.log(commonValues(cat, human)); // prints [4, 'sushi']

    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {
    let value1 = Object.values(obj1);
    let value2 = Object.values(obj2);
    let arr = [];

    for (let i = 0; i < value1.length; i++) {

        for (let j = 0; j < value2.length; j++) {

            if (value1[i] === (value2[j])) {
                arr.push(value1[i])
            }
        }
    }
    return arr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
