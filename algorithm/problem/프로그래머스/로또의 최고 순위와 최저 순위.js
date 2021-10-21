const solution = (lottos, win_nums) => {
    let same = null

    let temp = []
    let temp2 = []

    lottos.forEach((item) => {
        let find = win_nums.findIndex((item2) => item2 === item)

        if (find !== -1) {
            ++same
        } else {
            temp.push(item)
        }
    })
    temp2.push(7 - same === 7 ? 6 : 7 - same)

    if (temp.length > 0) {
        temp.forEach((item) => {
            if (item === 0) {
                ++same
            }
        });
        let result = 7 - same === 0 ? 1 : 7 - same === 7 ? 6 : 7 - same
        temp2.push(result)
    } else {
        temp2.push(1)
    }
    return temp2.reverse();
}

module.exports = solution;