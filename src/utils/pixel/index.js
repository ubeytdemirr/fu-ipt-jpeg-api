class Pixel {
    constructor(i=0,j=0){
        this.i=i;
        this.j=j;
    }
    hasLeftNeighbor(matrice){
        return matrice[this.i][this.j+1]
    }
    hasRightNeighbor(matrice){
        return matrice[this.i][this.j-1]
    }
    hasTopNeighbor(matrice){
        return matrice[this.i-1][this.j]
    }
    hasBottomNeighbor(matrice){
        return matrice[this.i+1][this.j]
    }
}