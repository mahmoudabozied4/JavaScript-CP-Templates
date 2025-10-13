/**
 * Calculates the Least Common Multiple (LCM) of two numbers using an iterative approach.
 * @param {number | bigint} num1 The first number.
 * @param {number | bigint} num2 The second number.
 * @returns {bigint} The LCM of num1 and num2.
 */
function lcm(num1, num2) {
    let a = BigInt(num1);
    let b = BigInt(num2);
    if (a > b) {
        const old_a = a;
        while (a % b !== 0n) {
            a += old_a;
        }
        return a;
    } else {
        const old_b = b;
        while (b % a !== 0n) {
            b += old_b;
        }
        return b;
    }
}