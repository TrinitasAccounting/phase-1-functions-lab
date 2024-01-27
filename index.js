// Code your solution in this file!

function distanceFromHqInBlocks(start) {
    return Math.abs((42 - start));
}


function distanceFromHqInFeet(start) {
    let dist = Math.abs(42 - start);
    let distFeet = dist * 264;
    return distFeet;
}

const distanceTravelledInFeet = (start, end) => {
    return (Math.abs(start - end) * 264);
}

const calculatesFarePrice = (start, end) => {
    let feetTravelled = distanceTravelledInFeet(start, end);
    if (feetTravelled > 2500) {
        return 'cannot travel that far';
    }
    else if (feetTravelled <= 400) {
        return 0
    }
    else if (feetTravelled <= 2000) {
        let total = 0;
        total = (feetTravelled - 400) * 0.02;
        return total;
    }
    else {
        return 25;
    }
};