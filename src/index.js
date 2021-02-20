// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2)

// // let val2 = "再宣言"；

// const val3 = "val";
// console.log(val3);

// val3 = "上書き";

// const val3 = "再宣言";

// const val4 = {
//   name: "xxx",
//   age: 24
// };
// val4.name = "www";
// val4.adrress = "shiga";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monley");
// console.log(val5);

//テンプレート文字列
// const name = "xxx";
// const age = "24";
//　name is xxx. age is 24
// const message1 = "name is " + name + ". age is " + age + ".";
// console.log(message1
//   )

//テンプレート文字列
// const message2 = `name is ${name}. age is ${age}.`;
// console.log(message2);

//アロー関数
// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }
// console.log(func1("x"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   name: "xxx",
//   age: 24
// };

// const message1 = `My name is ${myProfile.name}. Age is ${myProfile.age}`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}. Age is ${age}`;
// console.log(message2);

// const myProfile = ["xxx", 24];
// const message3 = `My name is ${myProfile[0]}. Age is ${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}. Age is ${age}`;
// console.log(message4);

//デフォルト値、引数
// const sayHello = (name = "Guest") => console.log(`Hello. ${name}!`);
// sayHello();

//スプレッド構文
//配列の展開
// const arr1 =[1,2];
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1+num2);
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5];
// const [num1, num2, ...num3] =arr2;
// console.log(num3)

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//配列の処理
//map
// const nameArr = ["tanaka", "yamada", "yoshida"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`No.${index + 1} is ${name}`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2 === 1;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "yoshida") {
//     return name;
//   } else {
//     return `Mr.${name}`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 > 0 ? "True" : "false";
// console.log(val1);

// const num = 13000;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "Input number value"
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "not over 100";
// };
// console.log(checkSum(200, 20));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("hello");
// }

// if (flag1 && flag2) {
//   console.log("hello");
// } else {
//   console.log("good bye");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
