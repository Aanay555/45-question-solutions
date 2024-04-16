#! /usr/bin/env node
//Q45-Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInformation(manufacturer, modelName, ...features) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
        features: features
    };
    console.log(car);
}
carInformation("Toyota", "Corolla", "Red", "Automatic", 'Autopilot features');
carInformation("Suzuki", "Cultus", "golden", "Automatic", 'Reliability');
carInformation("BMW 5", "BMW", " Bluestone Metallic", "Automatic", 'Adaptive suspension');
export {};
