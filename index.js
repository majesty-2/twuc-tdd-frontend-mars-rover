const generateMap =  (width, height) => {
    return new Array(height).fill(0).map(() => new Array(width).fill(0))
}

const generateCar = (x, y, forward) => {
    const car = {x, y, forward};
    return car;
}


const forwardMap = new Map();
forwardMap.set("N", ["W", "E"]);
forwardMap.set("S", ["E", "W"]);
forwardMap.set("W", ["S", "N"]);
forwardMap.set("E", ["N", "S"]);
const redirectCar = (forward, ways) => {
    for (let i = 0; i < ways.length; i++) {
        if(ways[i] == "L") {
            forward = forwardMap.get(forward)[0];
        } else if(ways[i] == "R") {
            forward = forwardMap.get(forward)[1]
        }
    }
    return forward;
}

const moveCar = (car, steps) => {
    let {x, y, forward} = car;
    for(let i = 0; i < steps.length; i ++) {
        if (forward == "N" || forward == "S") {
            y ++;
        } else if(forward == "W" || forward == "E") {
            x ++;
        }
    }
    car={x, y, forward}
    return car;
}

const redirectCarAndMove = (car, waysAndSteps) => {
    for (let i = 0; i < waysAndSteps.length; i++) {
        if (waysAndSteps[i] == "L" || waysAndSteps[i] == "R") {
            car.forward = redirectCar(car.forward, waysAndSteps[i])
        } else if(waysAndSteps[i] == "M") {
            car = moveCar(car, waysAndSteps[i])
        }
    }
    return car;
}

module.exports = {
    generateMap,
    generateCar,
    redirectCar,
    moveCar,
    redirectCarAndMove
}