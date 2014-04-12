// selection sort
function selectionSort(lst){
    var l = lst.length;
    for (var i=0;i<l;i++){
        var min = i;
        for(var j=i+1;j<l;j++){
            if (lst[min] > lst[j]){
                min = j;
            }
        }
        var temp = lst[min];
        lst[min] = lst[i];
        lst[i] = temp;
    }
    return lst;
}
var myArrary = [3,2,4,5,1];
console.log(selectionSort(myArrary));
