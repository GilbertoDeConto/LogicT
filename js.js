var matrix = 
[[1,1,1,1],
[0,1,1,0],
[0,1,0,1],
[0,1,9,1],
[1,1,0,1]]

function runMatrix(matrix){
    newPos = 0;
    var resultr;
    var resultc;
    

    for( var i = 0, lenR = matrix.length; i < lenR; i++ ) {
        for(var j = 0, lenC = matrix[i].length; j < lenC; j++){
            if( matrix[i][j] == 9 ) {
                resultr = i;
                resultc = j;
                break;
            }
        }
    }

    for( var i = 0; i <= resultr; i++ ) {
        var k = 0;
        if(matrix[i+1][k] == 1){
            if(matrix[i+1][k+1] == 9 || matrix[i+1][k-1] == 9){
                newPos = newPos + 2;
            }else{
                newPos = newPos + 1;
            }
        }else{
            for(k = 1; k < resultc; i++){
                if(matrix[i][k] == 1 || matrix[i][k] == 9){
                    newPos = newPos + 1
                    if(matrix[i+1][k] == 1){
                        if(matrix[i+1][k+1] == 9 || matrix[i+1][k-1] == 9){
                            newPos = newPos + 2;
                        }else{
                            newPos = newPos + 1;
                        }
                        i++;
                        break;
                    }
                }
            }
        }

    }
    console.log("Steps: "+newPos)
}
runMatrix(matrix)

