const solution = require('../problem/키패드 누르기')

test('[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] / right의 결과는 "LRLLLRLLRRL" 이다.', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe("LRLLLRLLRRL");
});

test('[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] / "left"의 결과는 "LRLLRRLLLRR" 이다.', () => {
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toBe("LRLLRRLLLRR");
});

test('[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] / right의 결과는 "LLRLLRLLRL" 이다.', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).toBe("LLRLLRLLRL");
});

test('[4, 3, 2, 8] / right의 결과는 "LRRR" 이다.', () => {
    expect(solution([4, 3, 2, 8], 'right')).toBe("LRRR");
});

test('[6, 4, 2, 8] / left의 결과는 "RLLL" 이다.', () => {
    expect(solution([6, 4, 2, 8], 'left')).toBe("RLLL");
});