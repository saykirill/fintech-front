// You will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
//
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
//
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays.
// If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
//
// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
//
// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
//
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function,
// we don't know what is after and before and therefore, we don't know if it is a peak or not).
//
// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak,
// please only return the position and value of the beginning of the plateau.
// For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]}
//
// Have fun!

function pickPeaks(arr){
    let pos = [],
        peaks = [],
        plat = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1] < arr[i]) {
            if(arr[i+1] === arr[i]) {
                plat.push(i);
            } else if(arr[i+1] < arr[i]) {
                pos.push(i);
                peaks.push(arr[i]);
            }
        } else if(plat.length > 0) {
            if(arr[i+1] < arr[i]) {
                pos.push(plat[0]);
                peaks.push(arr[plat[0]]);
                plat = [];
            } else {
                plat = [];
            }
        }
    }

    return {
        pos,
        peaks,
    };
}


// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine;
// there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles!
// The resulting two Sheldons go to the end of the queue.
// Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
//
// For example, Penny drinks the third can of cola and the queue will look like this:
//
// -----------------------------------------------------------------
//
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
//
// -----------------------------------------------------------------
//
// Write a program that will return the name of the person who will drink the n-th cola.
//
// Note that in the very beginning the queue looks like that:
//
// -----------------------------------------------------------------
//
//     Sheldon, Leonard, Penny, Rajesh, Howard
//
// -----------------------------------------------------------------
//
//
// ##Input
//
// The input data consist of an array which contains at least 1 name, and single integer n.
//
// (1 ≤ n ≤ 1000000000).
//
// -------------------------
// ##Output
//
// Examples Return the single line — the name of the person who drinks the n-th can of cola.
// The cans are numbered starting from 1.
// Please note that you should spell the names like this:
// "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes).
// In that order precisely the friends are in the queue initially.
//
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"

function whoIsNext(names, r){
    let len = 0,
        i = 0,
        j = 0,
        jMax = names.length - 1;
    while(len < r) {
        len = len + Math.pow(2, i);
        if(r < len) {
            break;
        } else if(j < jMax) {
            j++;
        } else {
            j = 0;
            i++;
        }
    }

    return names[j];
}

module.exports = {
    pickPeaks,
    whoIsNext
};
