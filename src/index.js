// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    const cash = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };
    if (currency <= 0) {
        return {};
    } 
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } 
    for (let i in cash) {
        obj[i] = Math.floor(currency / cash[i]);
        currency = currency - obj[i] * cash[i];
        if (obj[i] == 0) {
        delete obj[i];
        }
    }

    return obj;

    // Return an object containing the minimum number of coins needed to make change
}
