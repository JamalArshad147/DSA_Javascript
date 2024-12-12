let arr = [7,5,4,2];

let sum = 0;
while(arr.length > 1) {
    arr.sort((a,b) => a - b);
    let temp = arr.shift() + arr.shift();
    arr.push(temp);
    sum += temp;
}

console.log(sum);
