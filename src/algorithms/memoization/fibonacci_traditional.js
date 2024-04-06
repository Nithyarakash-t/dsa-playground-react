/**
 * Tradiotional fibonacci sequence
 * @param n 
 * @returns 
 */
function fibonacci__traditional(n) {
    if(n <= 2) return 1;

    return fibonacci__traditional(n-1) + fibonacci__traditional(n-2);
}

console.log(fibonacci__traditional(41));