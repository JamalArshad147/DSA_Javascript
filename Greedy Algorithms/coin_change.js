let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000, 5000];

let cash = 6638;
let ans = [];

while (cash > 0) {
    for (let index = arr.length-1; index >= 0; index--) {
        if (cash - arr[index] >= 0) {
            ans.push(arr[index]);
            cash -= arr[index];
            break;
        }
    }
}

console.log(ans);
