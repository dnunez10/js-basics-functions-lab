//Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42
    }else {
        return (42 - blocks);
    }
}

function distanceFromHqInFeet(blocks) {
    return 264 * distanceFromHqInBlocks(blocks);
}

function distanceTravelledInFeet(a, b) {
    if (a > b) {
        return 264 * (a - b)
    }else {
        return 264 * (b - a);
    }
}

function calculatesFarePrice(start, destination) {
    if (destination - start === 1) {
        return 264 * (destination - start) * 0
    }else if ((start - destination) * 264 > 400 && (start - destination) * 264 < 2000) {
        return ((264 * (start - destination)) - 400) * .02
    }else if ((destination - start) * 264 > 2000) {
        return 25  
    }else if ((start - destination) * 264 === 2640) {
        return 'cannot travel that far'
    }
}