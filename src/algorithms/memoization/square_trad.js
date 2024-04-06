export default function square_trad (n) {
    let result = 0;

    for(let i=0; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            result += 1;
        }
    }

    return result;
}

square_trad(91);