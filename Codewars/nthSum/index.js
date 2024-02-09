function SeriesSum(n){
    let sum = 0;
    let divisor = 1;

    for(i = 0; i < n; i++){
        console.log(sum + '+' + "1/" + divisor)
        sum += (1 / divisor);
        divisor += 3;
    }
    return sum.toFixed(2);
};

console.log(SeriesSum(5));