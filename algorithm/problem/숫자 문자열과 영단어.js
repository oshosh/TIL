function replaceStringToNumber(str) {
    const regArr = [
        { key: /zero/gi, value: '0' },
        { key: /one/gi, value: '1' },
        { key: /two/gi, value: '2' },
        { key: /three/gi, value: '3' },
        { key: /four/gi, value: '4' },
        { key: /five/gi, value: '5' },
        { key: /six/gi, value: '6' },
        { key: /seven/gi, value: '7' },
        { key: /eight/gi, value: '8' },
        { key: /nine/gi, value: '9' },
    ]

    regArr.forEach((item) => {
        str = str.replace(item.key, item.value)
    });
    return str
}

function solution(s) {
    const answer = s;
    const result = replaceStringToNumber(answer)
    return Number(result)
}

module.exports = solution;