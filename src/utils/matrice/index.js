function to8x8Matrices(matrice = []) {
    const matrices = []
    let flatten = matrice.flat()
    while (flatten.length > 0) {
        const chunk64 = flatten.slice(0, 64)
        const matrice8x8 = construct8x8Matrice(chunk64)
        matrices.push(matrice8x8)
        flatten = flatten.slice(64)
    }
    return matrices;
}

function construct8x8Matrice(array) {
    let matrice = []
    for (let i = 0; i < 64; i += 8) {
        let row = array.slice(0, 8)
        matrice.push(row)
        array = array.slice(8)
    }

    return matrice;
}

module.exports = { to8x8Matrices, construct8x8Matrice }