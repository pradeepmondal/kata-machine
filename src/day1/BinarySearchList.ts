export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length-1;

    do {
        const m = Math.floor(lo + (hi-lo)+1/2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        }
        else if (v > needle) {
            hi = m - 1;
        }
        else {
            lo = m + 1;
        }
    } while(lo <= hi)

    return false;

}


