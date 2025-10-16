function binarySearch(list, item, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
    let low = 0; // Lower Bound
    let high = list.length - 1; // Upper Bound

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (comparator.equal(list[mid], item)) {
            return mid;
        }
        if (comparator.lessThan(list[mid], item)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
