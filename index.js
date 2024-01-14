// code your solution here
function superbowlWin(record) {                                     //takes in an array (doesn't have to be exact)
   let winningYear = record.find((record) => record.result === 'W') //returns a boolean
                                                                    //use the boolean value to write an if stmt
    if(winningYear) {
        return winningYear.year
    } else {
        return undefined
    }
}