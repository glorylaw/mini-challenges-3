/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let valueConvert = value - 0; 
    let valueString;
    let binaryString1 = "";
    let count = 0;
    
    while (valueConvert !== 0){
        binaryString1 += valueConvert % 2;
        valueConvert = Math.trunc(valueConvert / 2);
        count ++;     
    }
    
    if (count < 8){
        binaryString1 += "0".repeat(8 - count);
    }
    
    valueString= binaryString1.split("");
    let binaryString2 = 0;
    for (let i = 0; i < valueString.length; i++){
        binaryString2 = (binaryString2 * 2) + Number(valueString[i]);
    }
    binaryString2 = binaryString2 + "";
    return binaryString2;
}

module.exports = binaryReversal;
