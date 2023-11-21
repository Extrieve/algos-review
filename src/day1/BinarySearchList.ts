// Binary Search on top of my head, my recursive approach reached max rec level (probably did something wrong)
export default function bs_list(haystack: number[], needle: number): boolean {
    let mid = Math.floor(haystack.length / 2);
    let midValue = haystack[mid];

    while (true) {
        if (haystack.length === 1) {
            return haystack[0] === needle;
        }

        if (midValue === needle) {
            return true;
        } else if (needle < midValue) {
            haystack = haystack.slice(0, mid);
            mid = Math.floor(haystack.length / 2);
            midValue = haystack[mid];
        } else {
            haystack = haystack.slice(mid);
            mid = Math.floor(haystack.length / 2);
            midValue = haystack[mid];
        }
    }
}