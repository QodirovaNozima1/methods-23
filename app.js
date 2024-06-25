alert("JS")


//1. array ichida sonlar beriladi.Shu arrayni faqat musbat sonlarini array qilib qaytaring
function number(array) {
    let result = [];
    for (let i = 0, len = array.length; len > i; i++) {
            if (array[i] > 0) {
                result.push(array[i])
                // console.log(son);
            }
        }
        return result
    }
// console.log(number([-2,6,8,2,9,-3,-4]));


//2.string kiradi teskari qilib qaytaring
function str(word){
    return word.split("").reverse().join(``)
}
// console.log(str("salom"));
// console.log(str("aziz"));
// console.log(str("aziza"));


3.//number kiradi teskari qilib qaytaring 
function num(son){
    return son.split("").reverse().join("")
}
// console.log(num("654321"));


//4.array ichida Boolean bo'ladi.faqat false larni array qilib qaytaring
function boolean(array) {
    let result = [];
    for (let i = 0, len = array.length; len > i; i++) {
      if (array[i] === false) {
        result.push(array[i]);
      }
    }
    return result;
  }
//   console.log(boolean([true,true,false]));


//5. arrayni ichidagi faqat juft sonlarni yig'indisini qaytaring
function yegindi(array) {
    let son = 0;
    for (let index = 0, len = array.length;len > index; index++) {
       if (array[index] % 2 === 0) {
        son += array[index];
       }
    }
    return son
}
// console.log(yegindi([1,2,3,4,5,6]));

//6. array ichida sonlar berildi. Har bir sonni darajasni array qilib qaytaring
function daraja(array ) {
        return array.map(array => array ** 2)
}
// console.log(daraja([3,4,5,6,7,8]));

//7.n sonigacha bo'lgan sonlarni array qilib qaytaring 
function number(son){
    let sum = []
    for(let i = 1; i <= son; i++){
         sum.push(i)
        }
        return sum
    }
// console.log(number(3));

//8. a dan b sonigacha juft sonlarni array qilib qaytaring
//ishlay olmadim

//9.ismni bosh harfini katta qilib qayrating
function letter(str) {
    return str.charAt(0).toUpperCase()+ str.slice(1)
}
// console.log(letter("latofat"));

//10. berilgan stringni n marta ko'paytirib string qilib qaytaring
function repeat( str, n) {
    return str.repeat(n)
}
// console.log(repeat(` "Js" `, 6));

//11. arrayni teskarisini qaytaring
function reverseSrting (son){
    return son.reverse()
}
// console.log(reverseSrting([1,2,3,4,5,6,7]));

//12. arrayni asceding sort qilib qaytaring
function asceding(array) {
    array.sort((a,b)=>a-b);
    return array
}

// console.log(asceding([2,6,3,7,2,15]));




