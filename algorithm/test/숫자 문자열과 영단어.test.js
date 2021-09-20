const solution = require('../problem/숫자 문자열과 영단어')

test('one4seveneight의 결과는 1478이다.', () => {
    expect(solution('one4seveneight')).toBe(1478);
});

test('23four5six7의 결과는 234567이다.', () => {
    expect(solution('23four5six7')).toBe(234567);
});

test('2three45sixseven의 결과는 234567이다.', () => {
    expect(solution('2three45sixseven')).toBe(234567);
});

test('123의 결과는 123이다.', () => {
    expect(solution('123')).toBe(123);
});