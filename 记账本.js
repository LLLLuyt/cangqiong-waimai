// ====== 记账本 ======
//
// 功能要求：
// 1. 输入项目名 + 金额 → 点记一笔 → 新账单卡片出现在账单区
// 2. 项目名或金额为空 → alert 提示
// 3. 每条记录显示：项目名、时间、金额（¥符号自己加）、删除按钮
// 4. 点删除按钮 → 该条记录消失
// 5. 账单区空了 → 显示「暂无记录」
//
// ====== 账单卡片 HTML 结构（你要用 JS 创建） ======
// <div class="账单卡片">
//   <div class="项目名">午饭</div>
//   <div class="时间">2026/5/28 12:30:00</div>
//   <div class="金额">¥25</div>
//   <button class="删除按钮">✕</button>
// </div>
//
// ====== 你的代码：======
//
let 项目输入 = document.querySelector('#项目输入');
let 金额输入 = document.querySelector("#金额输入");
let 提交按钮 = document.querySelector("#提交按钮");
let 账单区 = document.querySelector("#账单区");
let 空提示 = document.querySelector("#空提示");

function 记一笔账() {
    if (项目输入.value === "") {
        alert("请输入项目名")
        return;
    }
    if (金额输入.value === "") {
        alert("请输入金额")
        return;
    } 

    let 账单卡片 = document.createElement("div");
    let 项目名 = document.createElement("div");
    let 时间 = document.createElement("div");
    let 金额 = document.createElement("div");
    let 删除按钮 = document.createElement("button");
    let now = new Date();

    账单卡片.classList.add("账单卡片");
    项目名.classList.add("项目名");
    时间.classList.add("时间");
    金额.classList.add("金额");
    删除按钮.classList.add("删除按钮");
    删除按钮.textContent = "✕";
    删除按钮.addEventListener("click",function() {
        账单卡片.remove();
        if (账单区.querySelectorAll(".账单卡片").length === 0)
        空提示.style.display = "block"
    })

    项目名.textContent = 项目输入.value;
    金额.textContent = "¥" + 金额输入.value;
    时间.textContent = now.toLocaleString()
    账单卡片.appendChild(项目名);
    账单卡片.appendChild(金额);
    账单卡片.appendChild(时间);
    账单卡片.appendChild(删除按钮);
    账单区.appendChild(账单卡片);

    空提示.style.display = "none"
    金额输入.value = ""
    项目输入.value = ""
}

提交按钮.addEventListener("click",记一笔账)