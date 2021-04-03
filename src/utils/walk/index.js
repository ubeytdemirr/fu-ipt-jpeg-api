
const matrice = [

    [10, 11, 10, 16, 24, 40, 51, 61],
    [12, 12, 14, 19, 26, 58, 60, 55],
    [14, 13, 16, 24, 40, 57, 69, 56],
    [14, 17, 22, 29, 51, 87, 80, 62],
    [18, 22, 37, 56, 68, 109, 103, 77],
    [24, 35, 55, 64, 81, 104, 113, 92],
    [49, 64, 78, 87, 103, 121, 120, 101],
    [72, 92, 95, 98, 112, 100, 103, 99],
]



function goRight(i, j, matrice) {
    return { current: matrice[i][j + 1] || false, i, j: j + 1 }
}
function goBottom(i, j, matrice) {
    return { current: matrice[i + 1] ? matrice[i + 1][j] : false, i: i + 1, j }
}

function goBottomLeft(i, j, matrice) {
    const readed = []
    let nextAdjacent = true
    while (nextAdjacent) {
        if (matrice[i + 1] && matrice[i + 1][j - 1]) {
            i++; j--;
            nextAdjacent = matrice[i][j]
            readed.push(nextAdjacent)
        }
        else {
            nextAdjacent = false
        }
    }
    return { current: readed.length > 0 || false, i, j, readed }
}

function goTopRight(i, j, matrice) {
    const readed = []
    let nextAdjacent = true
    while (nextAdjacent) {
        if (matrice[i - 1] && matrice[i - 1][j + 1]) {
            i--; j++;
            nextAdjacent = matrice[i][j]
            readed.push(nextAdjacent)

        }
        else {
            nextAdjacent = false
        }
    }
    return { current: readed.length > 0 || false, i, j, readed }
}

function zigZag(matrice) {
    let i = 0;
    let j = 0;
    let readed = [matrice[0][0]]
    let currentCell = true
    while (currentCell) {
        // go right

        const right = goRight(i, j, matrice);

        currentCell = right.current; i = right.i; j = right.j;

        if (right.current) readed.push(right.current)

        // go bottom left

        const bottomLeft = goBottomLeft(i, j, matrice)

        currentCell = bottomLeft.current; i = bottomLeft.i; j = bottomLeft.j;

        if (bottomLeft.readed.length > 0) readed = [...readed, ...bottomLeft.readed]

        // go bottom 
        const bottom = goBottom(i, j, matrice);

        currentCell = bottom.current; i = bottom.i; j = bottom.j;

        if (bottom.current) readed.push(bottom.current)

        // go top right

        const topRight = goTopRight(i, j, matrice)

        currentCell = topRight.current; i = topRight.i; j = topRight.j;

        if (topRight.readed.length > 0) readed = [...readed, ...topRight.readed]



    }

    return readed;
}


module.exports = { zigZag }