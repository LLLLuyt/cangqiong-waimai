// ====== 标签添加器 ======
//
// 功能要求：
// 1. 输入标签名 → 点添加 → 新 <span> 出现在卡片里
// 2. 输入为空 → alert
// 3. 删最后一个标签
// 4. 顶部计数 "共 X 个标签"
//
// ====== 和待办清单的区别 ======
// - 创建 <span> 而不是 <p>
// - 新元素加 class "标签" 让它变蓝底白字
//   写法：元素.classList.add("标签")
//
// ====== 你的代码： ======

let 标签卡片 =document.querySelector("#标签卡片")
let 计数显示 = document.querySelector("#计数显示")
let 标签输入 = document.querySelector("#标签输入")
let 添加按钮 = document.querySelector("#添加按钮")
let 删除按钮 = document.querySelector("#删除最后按钮")
let 标签数 = 0;

function 更新标签() {
    if (标签输入.value === "") {
        alert("请输入标签名")
    } else {
        let 新标签 = document.createElement("span")
        新标签.textContent = 标签输入.value
        新标签.classList.add("标签")
        标签卡片.appendChild(新标签)
        标签数++
        计数显示.textContent = "共 " + 标签数 + " 个标签"
    }
}
添加按钮.addEventListener("click", 更新标签)

function 删除标签() {
    if (标签数 > 0) {
        let 所有标签 = document.querySelectorAll("span")
        let 最后标签 = 所有标签[所有标签.length - 1]
        最后标签.remove()
        标签数--
        计数显示.textContent = "共 " + 标签数 + " 个标签"
    }
}
删除按钮.addEventListener("click", 删除标签)