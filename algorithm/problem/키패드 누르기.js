// 거리가 같음을 증명해야함.
// 서로간의 거리가 1과 3인 경우 서로 거리 1만큼으로 같다.

// 조건 1동률 계산 (주 손으로 치환)
// 1 / 3 = 0 % 3 = 1
// 3 / 3 = 1 % 3 = 1

// 5 - 1 = 4 / 3 = 1          4 % 3 = 1     = 2
// 5 - 3 = 2 / 3 = 0          2 % 3 = 2     = 2

// 8 - 1 = 7 / 3 = 2          1               = 3
// 8 - 3 = 5 / 3 = 1          2               = 3

// 조건에 의한 계산 방식
// 8 - 7 = 1 / 3 = 0    +    1 % 1 = 1          = 1
// 8 - 5 = 3 / 3 = 1    +    3 % 3 = 0          = 1

// 조건 2와 3 => 이 외 차이 값은 작으면 L 크면 R
// 11 - 8 = 3 / 3 = 1    +   3 % 3 = 0  = 1
// 11 - 6 = 5 / 3 = 1    +   5 % 3 = 5  = 6

function JuHand(hand) {
    switch (hand) {
        case 'left':
            return 'L'
        case 'right':
            return 'R'
    }
}

function solution(numbers, hand) {
    let answer = []
    let currentPosition = { L: 10, R: 12 }
    let myHand = JuHand(hand)
    let distanceL = null
    let distanceR = null

    numbers.forEach((item) => {
        if (item === 1 || item === 4 || item === 7) {
            currentPosition.L = item
            return answer.push('L')
        } else if (item === 3 || item === 6 || item === 9) {
            currentPosition.R = item
            return answer.push('R')
        } else if (item === 2 || item === 5 || item === 8 || item === 0) {
            if (item === 0) {
                item = 11
            }

            distanceL = Math.abs(item - currentPosition.L)
            distanceR = Math.abs(item - currentPosition.R)

            distanceL = Math.floor(distanceL / 3) + Math.floor(distanceL % 3);
            distanceR = Math.floor(distanceR / 3) + Math.floor(distanceR % 3);

            if (distanceL === distanceR) {
                currentPosition[myHand] = item
                return answer.push(myHand)
            } else if (distanceL < distanceR) {
                currentPosition.L = item
                return answer.push('L')
            } else {
                currentPosition.R = item
                return answer.push('R')
            }
        }
    })
    return answer.join('');
}