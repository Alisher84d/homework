let A = [1,2,3,4,5,6]
let B = A.filter(function(item){
    return item % 2 ==0
})
console.log(B);
let C = [1,2,3,4]
let D = C.map(function(index){
    return index * 2
})
console.log(D);
let E = [5,10,15]
let F = 0
let G = E.map(function(array){
    return F += array
})
console.log(G);
let H = ['apple','kiwi','banana','pear']
let I = H.filter(function(S){
    return S.length > 4
})

let ns = [1, 2, 3, 4, 5];
function at(ar) {
  return ar.join(","); 
}

console.log(at(ns));

console.log(I);
let J = [1,2,3,4];
let K = [5,6,7,8];
let L = J.concat(K);
console.log(L);
let raqam = [10,-5,20,-15,30]
let manfiy = raqam.filter(function(X){
    return X < 0;
})
console.log(manfiy);

let M = [3,5,7]
let N = M.map(function(O){
    return O + 1;
})
console.log(N);
let P = [5,10,15,20]
function R(T){
return T.includes(10);


}
console.log(R(P));


function rTx(tx) {
  return tx.split("").filter(function(ch) 
    {return ch !== "e";}).join("");
}

let ex = "JavaScript Metodlari";
console.log(rTx(ex));