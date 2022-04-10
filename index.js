// passing in the array here
function superbowlWin(record){
 const records = record.find(recordIterator => recordIterator.result === 'W')
    if(records){
        return records.year
    } else {
        return undefined
    }
    // need to make an if else statement
 }

// superbowlWin(record); // passing in array 