import {generateCar, generateMap, moveCar, redirectCar, redirectCarAndMove} from "./index";

test("should generate map", () => {
    const map =  generateMap(5, 2);

    expect(map).toStrictEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ])
})

test("should generate car", () => {
    const car = generateCar(0, 1, "N");

    expect(car.x).toBe(0);
    expect(car.y).toBe(1);
    expect(car.forward).toBe("N");
})

test("should car be able to redirect", ()=>{
    let car = generateCar(0, 1, 'E');

    car.forward = redirectCar(car.forward, 'L');

    expect(car.x).toBe(0);
    expect(car.y).toBe(1);
    expect(car.forward).toBe('N');

})

test("should be able to move step", ()=> {
    let car = generateCar(0, 1, 'N');
    car = moveCar(car, "MM");
    expect(car.x).toBe(0);
    expect(car.y).toBe(3);
    expect(car.forward).toBe('N');
})

test("should be able to redirect and move", ()=> {
    let car = generateCar(0, 1, 'E');
    car = redirectCarAndMove(car, 'LM');
    expect(car.x).toBe(0);
    expect(car.y).toBe(2);
    expect(car.forward).toBe('N');
})