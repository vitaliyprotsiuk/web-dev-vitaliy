class mathUtils {
    // периметр прямокутника
    static rectanglePerimeter(a, b) {
        return 2*(a + b);
    };
    
    // площа прямокутника
    static rectangleArea(a, b) {
        return a * b;
    };

    // довжина кола
    static circleLength(radius) {
        return 2 * Math.PI * radius;
    };

    // площа кола
    static circleArea(radius) {
        return Math.PI * radius**2;
    };
}

console.log(mathUtils.rectanglePerimeter(5,5));
console.log(mathUtils.rectangleArea(5,5));
console.log(mathUtils.circleLength(5));
console.log(mathUtils.circleArea(10));