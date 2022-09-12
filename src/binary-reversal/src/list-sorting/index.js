function listSorting(needle, haystack) {
    let rowIndex = null;
let columnIndex = null;
let resultArrayIndex = null;
let needleIndex = null;
if (Array.isArray(haystack[0])){
    
    for (let i = 0; i < haystack.length; i++){
        if(Array.isArray(haystack[i])){
            for (let j = 0; j < haystack[i].length; j++){
                if(haystack[i].lastIndexOf(needle) !== -1){
                    rowIndex = haystack.indexOf(haystack[i]);
                    columnIndex = haystack[i].lastIndexOf(needle);
                }
            }
        }
        } 
    }
    else{
        needleIndex = haystack.lastIndexOf(needle); 
    }
    
    if ((rowIndex && columnIndex !== -1) || (rowIndex == 0)){
        resultArrayIndex = [rowIndex, columnIndex];
    }
    else if ((needleIndex && needleIndex !== -1) || (needleIndex == 0)){
        resultArrayIndex = needleIndex;
    }
    else{
        resultArrayIndex = -1;
    }
    
    return resultArrayIndex;
}


module.exports = listSorting;
