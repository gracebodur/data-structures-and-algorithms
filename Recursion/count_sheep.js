function countSheep(numOfSheep) {
    // count from 0 as base case
    if(numOfSheep === 0) {
        console.log('All sheep jumped over the fence')
        return
    }
console.log(`${numOfSheep}: Another sheep jumped over the fence`)
    numOfSheep -= 1
    // recursive case
    countSheep(numOfSheep)
}

countSheep(3)