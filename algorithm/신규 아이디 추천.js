const solution = (new_id) => {
    const reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    let filterID = new_id.toLowerCase() // 1단계
        .replace(reg, '') // 2단계
        .replace(/[\.]{2,}/g, '.') // 3단계

    // 4단계
    let sliceID = null
    if (filterID.charAt(0) === '.') {
        sliceID = filterID.slice(1)
    } else if (filterID.charAt(filterID.length - 1) === '.') {
        sliceID = filterID.slice(0, filterID.length - 1)
    } else {
        sliceID = filterID
    }

    // 5단계
    if (!sliceID.length) {
        sliceID = 'a'
    }

    // 6단계
    if (sliceID.length >= 16) {
        sliceID = sliceID.slice(0, 15)
    }

    if (sliceID.charAt(sliceID.length - 1) === '.') {
        sliceID = sliceID.slice(0, sliceID.length - 1)
    }

    // 7단계
    if (sliceID.length < 3) {
        if (sliceID.length <= 1) {
            sliceID = sliceID.padEnd(3, sliceID)
        } else {
            sliceID = sliceID.padEnd(3, sliceID.split('')[sliceID.length - 1])
        }
    }
    return sliceID
}