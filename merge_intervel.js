var merge = function(intervals) {
    if (intervals.length === 0) return [];


    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [curStart, curEnd] = intervals[i];
        const last = result[result.length - 1];


        if (curStart <= last[1]) {
            last[1] = Math.max(last[1], curEnd);
        }
        else {
            result.push(intervals[i]);
        }
    }

    return result;
};

