// ====== 留言板 ======
//
// 功能要求：
// 1. 输入名字 + 留言 → 点提交 → 新留言卡片出现在留言区
// 2. 名字或留言为空 → alert 提示
// 3. 每条留言显示：名字、时间、内容、删除按钮
// 4. 点删除按钮 → 该条留言消失
// 5. 留言区空了 → 显示「暂无留言」
//
// ====== 新知识点：获取当前时间 ======
// let now = new Date()
// now.toLocaleString()  →  "2026/5/27 15:30:45"（本地时间字符串）
//
// ====== 留言卡片 HTML 结构（你要用 JS 创建） ======
// <div class="留言卡片">
//   <div class="名字">潘康润</div>
//   <div class="时间">2026/5/27 15:30:45</div>
//   <div class="内容">今天学了留言板！</div>
//   <button class="删除按钮">✕</button>
// </div>
//
// ====== 思路提示 ======
// 步骤 1：选元素（4 个 input/button/div）
// 步骤 2：写提交函数
//   2.1 判断名字和留言是否为空
//   2.2 createElement 创建 div（留言卡片）
//   2.3 创建 名字 div、时间 div、内容 div、删除 button
//   2.4 四个子元素 appendChild 到卡片
//   2.5 卡片 appendChild 到留言区
//   2.6 隐藏空提示
//   2.7 清空输入框
// 步骤 3：绑定提交按钮 click 事件
// 步骤 4：删除功能 — 在创建删除按钮时绑定 click
//   删除后检查：留言区还有卡片吗？没了就显示空提示
//
// ====== 你的代码：======
//
let 名字输入 = document.querySelector("#名字输入")
let 留言输入 = document.querySelector("#留言输入")
let 提交按钮 = document.querySelector("#提交按钮")
let 留言区 = document.querySelector("#留言区")
let 空提示 = document.querySelector("#空提示")

function 提交(){
    if (名字输入.value ===""){
        alert("请输入名字")
    }else if(留言输入.value === ""){
        alert("写些你想说的吧!")
    }else {
    let 留言卡片 = document.createElement("div")
    let 名字 = document.createElement("div")
    let 时间 = document.createElement("div")
    let 内容 = document.createElement("div")
    let 删除按钮 = document.createElement("button")
    let now = new Date()
    时间.textContent = now.toLocaleString()
    名字.textContent = 名字输入.value
    内容.textContent = 留言输入.value
    删除按钮.textContent = "❌"
    留言卡片.classList.add("留言卡片")
    名字.classList.add("名字")
    时间.classList.add("时间")
    内容.classList.add("内容")
    删除按钮.classList.add("删除按钮")
    留言卡片.appendChild(名字)
    留言卡片.appendChild(时间)
    留言卡片.appendChild(内容)
    删除按钮.addEventListener('click',function(){
        留言卡片.remove()
        if (留言区.querySelectorAll(".留言卡片").length === 0){
            空提示.style.display = "block"
        }
    })
    留言卡片.appendChild(删除按钮)
    留言区.appendChild(留言卡片)
    空提示.style.display = "none"
    名字输入.value = ""
    留言输入.value = ""
    }
}
提交按钮.addEventListener("click",提交)