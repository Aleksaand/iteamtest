export const getDrawStatusLastTwo = (squares) => {
    let count = 0;
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    let len = squares.filter( s => s !== 'X' && s !== '0');
    if (len.length === 2) {
        count = count + 1;
    }
    // if (len.length === 1) {
    //     count = count + 2;
    // }
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if ((squares[a] === 'X' ||  squares[b] === 'X' || squares[c] === 'X') &&
            (squares[a] === '0' ||  squares[b] === '0' || squares[c] === '0')) {
                count = count + 1; 
            }   
    }
    if (count === 8 ) {
        return true;
    }
    // if (count === 10) {
    //     return true;
    // }
    console.log('count2',count);
    return false;
    
}

export const getDrawStatusLastOne = (squares) => {
    let count = 0;
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    let len = squares.filter( s => s !== 'X' && s !== '0');

    if (len.length === 1) {
        count = count + 1;
    }
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if ((squares[a] === 'X' ||  squares[b] === 'X' || squares[c] === 'X') &&
            (squares[a] === '0' ||  squares[b] === '0' || squares[c] === '0')) {
                count = count + 1; 
            }   
    }
    if (count === 8 ) {
        return true;
    }
    // if (count === 10) {
    //     return true;
    // }
    console.log('count1',count);
    return false;
}

// if ((squares[0] === 'X' ||  squares[1] === 'X' || squares[2] === 'X') &&
// (squares[0] === '0' ||  squares[1] === '0' || squares[2] === '0') &&
// (squares[3] === 'X' ||  squares[4] === 'X' || squares[5] === 'X') &&
// (squares[3] === '0' ||  squares[4] === '0' || squares[5] === '0') &&
// (squares[6] === 'X' ||  squares[7] === 'X' || squares[8] === 'X') &&
// (squares[6] === '0' ||  squares[7] === '0' || squares[8] === '0') &&
// (squares[0] === 'X' ||  squares[3] === 'X' || squares[6] === 'X') &&
// (squares[0] === '0' ||  squares[3] === '0' || squares[6] === '0') &&
// (squares[1] === 'X' ||  squares[4] === 'X' || squares[7] === 'X') &&
// (squares[1] === '0' ||  squares[4] === '0' || squares[7] === '0') &&
// (squares[2] === 'X' ||  squares[5] === 'X' || squares[8] === 'X') &&
// (squares[2] === '0' ||  squares[5] === '0' || squares[8] === '0') &&
// (squares[0] === 'X' ||  squares[4] === 'X' || squares[8] === 'X') &&
// (squares[0] === '0' ||  squares[4] === '0' || squares[8] === '0') &&
// (squares[2] === 'X' ||  squares[4] === 'X' || squares[6] === 'X') &&
// (squares[2] === '0' ||  squares[4] === '0' || squares[6] === '0') ||
// (len.length === 2)) {
//     return true;
// }

// return false;

// возвращает список индексов пустых клеток доски
// export function emptyIndices(board) {
//     let len = board.filter( s => s != 'X' && s != '0');
//     if (len.length === 2) 
//     return  
//   }

