export function calculateWinner (squares) {
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
    for (let i = 0; i < lines.length; i++) {

        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export function getSquaresWin(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [a, b, c];
        }
    }
    return [];
}

export function getWinLine (winArr) {
    const stringArr = winArr.join();
    const row1 = "row1";
    const row2 = "row2";
    const row3 = "row3";
    const column1 = 'column1';
    const column2 = 'column2';
    const column3 = 'column3';
    const diagonal09 = 'diagonal09';
    const diagonal37 = 'diagonal37';
    switch (stringArr) {
        case "0,1,2":
            return  row1;
        case "3,4,5":
            return  row2;
        case "6,7,8":
            return  row3;
        case "0,3,6":
            return  column1;
        case "1,4,7":
            return  column2;
        case "2,5,8":
            return  column3;
        case "0,4,8":
            return  diagonal09;
        case "2,4,6":
            return  diagonal37;
        default:
            break;
    }
    // return [];
}


// export const getDrawStatus = (squares) => {
//     let count = 0;
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
    
//     let len = squares.filter( s => s !== 'X' && s !== '0');
//     if (len.length === 2) {
//         count = count + 1;
//     }
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if ((squares[a] === 'X' ||  squares[b] === 'X' || squares[c] === 'X') &&
//             (squares[a] === '0' ||  squares[b] === '0' || squares[c] === '0')) {
//                 count = count + 1; 
//             }   
//     }
//     if (count === 8) {
//         return true;
//     }
//     console.log('count',count);
//     return false;
    
// }



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

