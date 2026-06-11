// ====== ① 变量 let ======
let name = "潘康润";        // let 声明变量，装字符串
console.log(name);           // 打印 name 的值到控制台
let price = 100;             // 声明价格变量，数字类型
console.log(price);
let count = 5;               // 声明数量变量
console.log(count);
let total = price * count;   // 变量做乘法运算
console.log(total);
let product = "鞋子";        // 产品名，字符串
console.log(product);
let msg = product + "的总价是：" + total;  // 字符串拼接（用 + 号）
console.log(msg);

// ====== ② 常量 const（不能改） ======
const discount = 0.9;        // const 声明常量，不可重新赋值
let finalPrice = total * discount;  // 总价 × 折扣 = 折后价
console.log(finalPrice);

// ====== ③ if 条件判断 ======
let score = 85;
if (score >= 90) {           // 如果 >= 90
    console.log("优秀");
} else if (score >= 60) {    // 否则如果 >= 60
    console.log("及格");
} else {                     // 否则（< 60）
    console.log("不及格");
}

// ====== ④ 数组 ======
let people = ["张三", "李四", "王五", "赵六", "孙七"];  // 数组，下标从 0 开始
console.log(people[0]);      // 取第 1 个：张三
console.log(people[2]);      // 取第 3 个：王五
console.log(people.length);  // 数组长度：5
console.log(people.length - 1);  // 最后一个元素下标 = 长度 - 1
people[1] = "小明";          // 修改第 2 个元素
console.log(people);

// ====== ⑤ 对象 ======
let student = {
    name: "潘康润",          // 属性：键: 值
    age: 19,
    chengji: 100,
    city: "中山"
};
console.log(student.name);   // 点语法取属性
console.log(student.chengji);
student.chengji = 99;        // 修改属性值
console.log(student.chengji);
student.hobby = "全栈";      // 新增属性（直接赋值）
console.log(student);

// ====== ⑥ for 循环 ======
for (let i = 0; i < people.length; i++) {  // i 从 0 开始，每次 +1，直到数组末尾
    console.log(people[i]);  // 逐个打印数组元素
}

let nums = [10, 20, 30, 40, 50];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

let sum = 0;                 // 累加前先声明 sum = 0
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];     // 每次循环把当前元素加进 sum
}
console.log(sum);            // 输出累加结果：150

// ====== ⑦ 函数 ======
function sayHello() {        // 定义函数（不干活，等命令）
    console.log("你好");
}
sayHello();                  // 调用函数（下命令）

function printAll(people) {  // 带参数的函数，接收一个数组
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }
}
printAll(people);            // 传入 people 数组

function getSum(nums) {      // 参数叫 nums
    let sum = 0;             // 局部变量 sum
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}
getSum(nums);               // 传入 nums 数组，打印 150
