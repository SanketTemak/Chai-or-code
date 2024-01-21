const Adharno = 255033633668
let Email = "Sankettemak9858@gmail.com"
var city = "PUNE"
let village = "karajgaoan"
console.table([Adharno,Email,city, village])
/* const is usefull for constat Value that are naver chages 
var are restricticted to use beacase it create a error in a code
console.table usefull print the statement in table form 
code readibility is heigh*/


"use strict";
 // alert(3+3+3)// we are using node js ,not browser

 /* 2. data types 
"use strict";  trat all js code as newer version 
*/

//data Types

/*Strings = "" or ''
 Number = 123456
 boolean = true / False 
 null = standalone value 
 undefind = not defind i.e not store or assign value 
 Symbol = find the uniqeness 
 object = */

console.log(typeof null)
console.log(typeof Email)
console.log(typeof Adharno)

// conversion of data type 
 let score = "33"
 console.log(typeof score)
 // string to number 
let covetvalue = Number(score)
console.log(covetvalue)
//string ==> NAN 
let score1 = "33abc"
let covetvalue1 = Number(score1)

console.log(covetvalue1)
//true==>1
let score2 = true
let covetvalue2 = Number(score2)

console.log(covetvalue2)
//false==>0
let score3 = false
let covetvalue3 = Number(score3)
console.log(covetvalue3)
//null==>0
let score4 = null
let covetvalue4 = Number(score4)
console.log(covetvalue4)
//undefind==>Nan
let score5 = undefined
let covetvalue5 = Number(score5)
console.log(covetvalue5)
//1==>True
let score6 = 1
let covetvalue6 = Boolean(score6)
console.log(covetvalue6)
//0=>False 
let score7 = 0
let covetvalue7 = Boolean(score7)
console.log(covetvalue7)
//Number ==> strings 

let Score8 = 12
let convert8 = String(Score8)
console.log( typeof convert8)