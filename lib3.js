const ARR = []

function push(number) {
    ARR.push(number)
    arr2 = ARR.reduce((a, b) => a + b)
    document.getElementById('display').innerHTML = number
    

}

function result() {

    //SUM
    if (ARR.includes('+')) {
        arr3 = arr2.split('+').map(x => +x)
        arr4 = arr3.reduce((a, b) => a + b)
        document.getElementById('display').innerHTML = arr4
        console.log(arr4);
    }
    // MULTIPLICATION
    if (ARR.includes('*')) {
        arr3 = arr2.split('*').map(x => +x)
        arr4 = arr3.reduce((a, b) => a * b)
        document.getElementById('display').innerHTML = arr4
        console.log(arr4);
    }
    //SUBTRACTION
    if (ARR.includes('-')) {
        arr3 = arr2.split('-').map(x => +x)
        arr4 = arr3.reduce((a, b) => a - b)
        document.getElementById('display').innerHTML = arr4
        console.log(arr4);
    }
    //DIVISION
    if (ARR.includes('/')) {
        arr3 = arr2.split('/').map(x => +x)
        arr4 = arr3.reduce((a, b) => a / b)
        document.getElementById('display').innerHTML = arr4
        console.log(arr4);
    }
  
}

function cancel() {
    location.reload();
}