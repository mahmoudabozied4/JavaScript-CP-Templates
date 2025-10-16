function fastPower(base, exponent) {
    let b = BigInt(base);
    let exp = BigInt(exponent);
    if (exp < 0n) {
        return 1 / Number(fastPower(b, -exp));
    }
    let result = 1n;
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result *= b;
        }
        b *= b;
        exp /= 2n;
    }
    return result;
}
