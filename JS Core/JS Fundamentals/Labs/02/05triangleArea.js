function triangleArea(a, b, c) {
    p = (a + b + c) / 2;
    console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
}