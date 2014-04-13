// insertion sort
function insertion_sort(lst){
    l = lst.length;
    var temp,i,j;
    for(i=0;i<l-1;i++){
        for(j=i+1;j>0;j--){
            if (lst[j] >= lst[j-1])
                break;
            else{
                temp = lst[j-1];
                lst[j-1] = lst[j];
                lst[j] = temp;
            }
        }
    }
    return lst;
}

var myArray = [3, 2, 4, 5, 1];
console.log(insertion_sort(myArray));
