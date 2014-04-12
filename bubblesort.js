// bubble sort

function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

function bubbleSort(myArray){
    var len = myArray.length,
        i, j, stop;
    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (myArray[j] > myArray[j+1]){
                swap(myArray, j, j+1);
            }
        }
    }
    
    return myArray;
}

var myA = [1,4,2,8,3,9]
//console.log(bubbleSort(myA))

//mine
function bubblesort(lst){
    var l = lst.length;
    while(l>1){
        for (var i = 0;i<l;i++){
            if (lst[i] > lst[i+1]){
                var temp = lst[i+1];
                lst[i+1] = lst[i];
                lst[i] = temp;
            }
        }
        l -= 1;
    }
    return lst;
}
var myArray = [1,4,2,8,3,9]
console.log(bubblesort(myArray));
