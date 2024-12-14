let arr = [
    [null, null,null],
    [null, null,null],
    [null, null,null]
];
let count = 0
console.log("hello")
const checkWinCondition = () => {

    for (let i = 0; i < 3; i++) {
        if (arr[i][0] && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            alert(arr[i][0] + " wins!");
            return;
        }
    }
        for (let i = 0; i < 3; i++) {
        if (arr[0][i] && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
            alert(arr[0][i] + " wins!");
            return;
        }
    }
    
    if (arr[0][0] && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        alert(arr[0][0] + " wins!");
        return;
    }
    if (arr[0][2] && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        alert(arr[0][2] + " wins!");
        return;
    }
    
    
    if (count === 9) {
        alert("It's a draw!");
    }
    

}


const handleclick = (rows, cols) => {
    if (!arr[rows][cols]) {
        if(count%2  == 0) {
            arr[rows][cols] = "O";
        }
        else {
            arr[rows][cols] = "X";
        }
        count++;

        let x=document.getElementById("cell" + rows + cols)
        x.innerHTML = arr[rows][cols];
        checkWinCondition();
        console.log(arr)

    }
}


