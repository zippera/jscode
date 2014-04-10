// callback
// e.g.1
var isTrue = function(v, add){
    if (v === true){
        return add(1,2);
     }
     else {
        return 0;
     }
}
var add = function (a,b){
    return a + b;
}
console.log(isTrue(true, add));

// e.g.2

