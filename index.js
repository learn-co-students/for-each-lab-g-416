function iterativeLog(array){
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    });
}

function iterate(callback){
    let array = ["red", "blue", "green"];
    array.forEach(callback);
    return array
}

function doToArray(array, callback){
    array.forEach(callback);
}