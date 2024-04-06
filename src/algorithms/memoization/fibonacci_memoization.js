/**
 * 
 * @param n 
 * @param prevValues 
 * @returns 
 */
function finonacci__memoization(n, prevValues=[]) {
    if(prevValues[n] != null) return prevValues[n];

    let result;

    if(n <= 2) result = 1;
    else result = finonacci__memoization(n-1, prevValues) + finonacci__memoization(n-2, prevValues);

    prevValues[n] = result;
    return result;
}

console.log(finonacci__memoization(41));