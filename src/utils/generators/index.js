function matrice(size = [8, 8]) {
    const matrice = []
    const [i, j] = size
    for (let x = 0; x < i; x++) {
        const row = []
        for (let y = 0; y < j; y++) {
            const col = randomNumber()
            row.push(col)
        }
        matrice.push(row)
    }
    return matrice;
}

function array(size = 64) {
    const array = []
    for (let i = 0; i < size; i++) {
        const val = randomNumber()
        array.push(val)
    }

    return array;
}


function randomNumber(end = 256) {
    return Math.ceil(Math.random() * end)
}



module.exports = { matrice, randomNumber, array }