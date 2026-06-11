// ====== DOM 练习 ======
// 每题在题目下方写代码，写完后右键 HTML → Open with Live Server 查看效果

// 题目1：选中 h1，把它的文字改成 "DOM 操控成功！"

// 你的代码：
let h1 = document.querySelector("h1");  // 选中 h1 标签
h1.textContent = "DOM 操作成功！";  // 修改 h1 的文字内容


// 题目2：选中 class 为 "描述" 的 p 标签，把文字改成 "我被 JS 改了"

// 你的代码：
let p = document.querySelector(".描述");  // 选中 class 为 "描述" 的 p 标签
p.textContent = "我被JS改了";  // 修改 p 的文字内容

// 题目3：选中 class 为 "卡片内容" 的 p 标签，把文字改成 "卡片也被改了"

// 你的代码：
let a = document.querySelector(".卡片内容");  // 选中 class 为 "卡片内容" 的 p 标签
a.textContent = "卡片也被改了";  // 修改 a 的文字内容

// 题目4：选中 h1，把它的颜色改成红色 (提示：h1.style.color = "red")

// 你的代码：
let b = document.querySelector("h1");  // 选中 h1 标签
b.style.color = "red";  // 修改 h1 的颜色


// ====== 自我介绍修改器 ======

// 题目5：选中 id 为 "姓名" 的 h2，把 "张三" 换成你的真实姓名 (提示：id 用 #)

// 你的代码：
let c = document.querySelector("#姓名");  // 选中 id 为 "姓名" 的 h2 标签
c.textContent = "潘康润";  // 修改 h2 的文字内容


// 题目6：选中 class 为 "自我介绍" 的 p，把内容改成你自己的介绍

// 你的代码：
let d = document.querySelector(".自我介绍");  // 选中 class 为 "自我介绍" 的 p 标签
d.textContent = "我叫潘康润,今年19岁,来自中山,是一名全栈开发工程师。";  // 修改 p 的文字内容

// 题目7：选中 class 为 "技能" 的 p，把文字改成你会的技能 (比如 "我会：写代码、前端开发")

// 你的代码：
let e = document.querySelector('.技能');  // 选中 class 为 "技能" 的 p 标签
e.textContent = '我会写代码';


// 题目8：把姓名的颜色改成蓝色

// 你的代码：
let f = document.querySelector('#姓名');  // 选中 id 为 "姓名" 的 h2 标签
f.style.backgroundColor = 'blue';  // 修改 h2 的颜色

// ====== 事件练习 ======

// 题目9： 选中 id 为 "点我按钮" 的按钮
//        给它绑定 click 事件
//        点击后弹出 alert("按钮被点了！")
// 结构示例：let 按钮 = document.querySelector(...);
//          按钮.addEventListener("click", 某函数);

function 按钮被点击了() {
    alert("按钮被点击了");  // 点击后弹出提示框
}
let anniu = document.querySelector("#点我按钮");  // 选中 id 为 "点我按钮" 的按钮
anniu.addEventListener("click",按钮被点击了);



// 题目10：选中 id 为 "计数器" 的 p 标签
//         每次点击按钮，数字 +1
//         提示：let 次数 = 0;
//               函数里 次数 = 次数 + 1; 然后更新 p.textContent

// 你的代码：
let 标题 = document.querySelector("#标题");  // 选中 id 为 "标题" 的 h1 标签
let 次数 = 0;  // 声明一个变量来记录点击次数
let jishuqi = document.querySelector("#计数器");
function 加一() {
    次数 = 次数 + 1;  // 每次点击按钮，次数加1
    jishuqi.textContent = 次数;  // 更新 p 标签的内容为当前次数
    标题.style.color = "green";  // 同时把标题的颜色变成绿色
}
anniu.addEventListener("click",加一);  // 给按钮绑定 click 事件，点击时调用加一函数

// ====== 巩固练习 ======

// 题目11：选中 id 为 "变色按钮" 的按钮
//         点击后把 id 为 "色块" 的 div 背景色改成红色
//         提示：style.backgroundColor = "red"

// 你的代码：
let 色块 =document.querySelector("#色块");  // 选中 id 为 "色块" 的 div
let 变色按钮 = document.querySelector("#变色按钮");  // 选中 id 为 "变色按钮" 的按钮
function 变色() {
    色块.style.backgroundColor = "red";  // 点击后把色块的背景色改成红色
}
变色按钮.addEventListener("click", 变色);

// 题目12：选中 id 为 "切换按钮" 的按钮
//         点击后让 id 为 "显示文字" 的 p 隐藏/显示切换
//         提示：元素.style.display = "none"（隐藏）
//               元素.style.display = "block"（显示）
//               用 if 判断当前状态来切换

// 你的代码：
let 显示文字 = document.querySelector("#显示文字");
let 切换按钮 =document.querySelector("#切换按钮");
function 切换显示() {
    if (显示文字.style.display === "none") {
        显示文字.style.display = 'block';
    } else {
        显示文字.style.display = "none";
    }
}
切换按钮.addEventListener("click",切换显示);

// 题目13：选中 id 为 "减一按钮" 的按钮
//         每次点击，#倒数 的数字减 1
//         提示：和计数器一样套路，只是 +1 变 -1

// 你的代码：
let 数字 = 10;  // 初始化倒数数字
let 倒数 = document.querySelector("#倒数");
let 减一按钮 = document.querySelector("#减一按钮");
function 减一() {
    数字 = 数字 - 1;  // 每次点击，倒数数字减1
    倒数.textContent = 数字;  // 更新 p 标签的内容为当前倒数数字
}
减一按钮.addEventListener("click", 减一);  // 给按钮绑定 click 事件，点击时调用减一函数


// 题目14（综合）：修改 加一 函数
//         让 #计数器 +1 的同时，把 #标题 的颜色也变成绿色
//         提示：在 加一 函数里多加一行改样式


// ====== if/else 切换专项 ======

// 题目15：开关切换 — 点按钮切换 #状态文字 的内容
//         当前是 "当前状态：开" → 点一下变 "当前状态：关"
//         再点一下变回 "当前状态：开"
//         提示：if (状态文字.textContent === "当前状态：开") { ... }

// 你的代码：
let 状态文字 = document.querySelector("#状态文字");
let 开关按钮 = document.querySelector("#开关按钮");
function 切换状态() {
    if (状态文字.textContent === '当前状态：开') {
        状态文字.textContent = '当前状态：关';
    } else {
        状态文字.textContent = '当前状态：开';
    }
}
开关按钮.addEventListener('click',切换状态);

// 题目16：颜色切换 — 点按钮让 #切换色块 在两个颜色间切换
//         当前是橙 #ff9800 → 点一下变蓝 #2196f3
//         再点一下变回橙
//         提示：if (色块.style.backgroundColor === "rgb(255, 152, 0)") { ... }
//         注意！JS 读颜色会转成 rgb 格式，"#ff9800" 读出来是 "rgb(255, 152, 0)"

// 你的代码：
let 切换色块 = document.querySelector("#切换色块");
let 颜色切换按钮 = document.querySelector("#颜色切换按钮");
function 切换颜色() {
    if (切换色块.style.backgroundColor === 'rgb(255, 152, 0)') {
        切换色块.style.backgroundColor = '#2196f3';
    } else {
        切换色块.style.backgroundColor = '#ff9800';
    }
}
颜色切换按钮.addEventListener('click',切换颜色);

// ====== 输入框练习 ======

// 题目17：实时同步 — 用户在 #输入框 里打字
//         内容实时显示在 #显示区 里
//         提示：事件用 "input"，输入框.value 拿文字

// 你的代码：
let 输入框元素 = document.querySelector('#输入框');
let 显示区 = document.querySelector('#显示区');
let 字数统计元素 = document.querySelector('#字数统计');
function 同步输入() {
    显示区.textContent = 输入框元素.value;  // 实时同步输入框的内容到显示区
    字数统计元素.textContent ='字数:'+ 输入框元素.value.length;  // 实时更新字数统计
}
输入框元素.addEventListener('input', 同步输入);

// 题目18：字数统计 — 在题目17的基础上
//         打字时 #字数统计 显示 "字数：X"
//         提示：字符串.length 获取长度


// ====== 名片生成器 ======

// 题目19：选中 #生成按钮，绑 click 事件
//         点击后把 #名字输入 的内容 显示到 #名片名字 里
//         把 #技能输入 的内容 显示到 #名片技能 里
//         提示：名字输入.value → 名片名字.textContent

// 你的代码：
let 名字输入 = document.querySelector('#名字输入');
let 技能输入 = document.querySelector('#技能输入');
let 名片名字 = document.querySelector('#名片名字');
let 名片技能 = document.querySelector('#名片技能');
let 生成按钮 = document.querySelector('#生成按钮');
function 生成名片() {
    if (名字输入.value === "") {
        alert("请输入名字");
    }else if (技能输入.value ===" ") {
        alert("请输入技能");
    } else {
        名片名字.textContent = 名字输入.value;  // 把名字输入的内容显示到名片名字里
        名片技能.textContent = 技能输入.value;  // 把技能输入的内容显示到名片技能里
    }
}
生成按钮.addEventListener('click', 生成名片); 

// 题目20：修改 生成名片 函数，加上验证
//         如果 #名字输入 为空 → alert("请输入名字")
//         如果 #技能输入 为空 → alert("请输入技能")
//         两个都有内容才更新名片
//         提示：if (名字输入.value === "") { alert("请输入名字"); }

// ====== classList 练习 ======

// 题目21：选中 #高亮按钮，绑 click 事件
//         点击后给 #练习卡片 加上 .高亮 这个 class
//         提示：元素.classList.add("高亮")

// 你的代码：
let 按钮 = document.querySelector("#高亮按钮");  // 选中 #高亮按钮
let 练习卡片 = document.querySelector("#练习卡片");  // 选中 #练习卡片
function 加高亮() {
    练习卡片.classList.toggle("高亮");  // 点击后给练习卡片加上 .高亮 这个 class
}
按钮.addEventListener("click", 加高亮);  // 给按钮绑定 click 事件，点击时调用加高亮函数


// 题目22：把题21改成 toggle 切换
//         点一下加高亮，再点一下去掉，再点又加上
//         提示：元素.classList.toggle("高亮")，一行搞定，不用 if

// ====== createElement 练习 ======

// 题目23：选 #添加按钮，绑 click 事件
//         点击后用 #待办输入 的值创建一个 <p> 元素
//         塞进 #清单卡片 里
//         提示：let p = document.createElement("p");
//               p.textContent = 待办输入.value;
//               清单卡片.appendChild(p);

// 你的代码：
let 清单卡片 = document.querySelector("#清单卡片");  // 选中 #清单卡片
let 待办输入 = document.querySelector("#待办输入");  // 选中 #待办输入
let 添加按钮 = document.querySelector("#添加按钮");  // 选中 #添加按钮

function 添加待办() {
    
   if (待办输入.value === ""){
    alert("请输入待办事项");
   } else {
    let p = document.createElement("p");  // 创建一个 <p> 元素
    p.textContent = 待办输入.value;  // 设置 p 的文本内容为待办输入的值
    清单卡片.appendChild(p);
   }
}

添加按钮.addEventListener("click", 添加待办);  // 给添加按钮绑定 click 事件，点击时调用添加待办函数
// 题目24：在题23基础上，加验证
//         如果输入框为空 → alert("请输入待办事项")
//         如果不为空 → 创建 p 并塞进去

// 你的代码：
// （已合并到题23）
