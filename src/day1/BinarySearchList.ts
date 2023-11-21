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

export function bs_list_recursive(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) {
        return false;
    }

    const mid = Math.floor(haystack.length / 2);
    const midValue = haystack[mid];

    if (midValue === needle) {
        return true;
    } else if (needle < midValue) {
        return bs_list(haystack.slice(0, mid), needle);
    } else {
        return bs_list(haystack.slice(mid), needle);
    }
}