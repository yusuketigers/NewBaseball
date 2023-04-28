// 記録タイトルを保持する配列
let titleList = [];

// 要素の取得
const scoreButton = document.querySelector(".score-button");
const addButton = document.querySelector(".add-button");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".close-button");
const titleInput = document.querySelector("#title-input");
const createButton = document.querySelector("#create-button");

// 試合成績ボタンがクリックされたときの処理
scoreButton.addEventListener("click", () => {
    // ここに処理を記述
});

// +ボタンがクリックされたときの処理
addButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// モーダルの閉じるボタンがクリックされたときの処理
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// 作成ボタンがクリックされたときの処理
createButton.addEventListener("click", () => {
    const title = titleInput.value;
    if (title) {
        titleList.push(title);
        const titleButton = document.createElement("button");
        titleButton.classList.add("title-button");
        titleButton.textContent = title;
        addButton.parentNode.insertBefore(titleButton, addButton.nextSibling);
        modal.style.display = "none";
        titleInput.value = "";
    }
});
