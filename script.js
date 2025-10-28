const question = "世界で最も売れているジーンズブランド次のうちどれ？";
const answers = [
    "Edwin",
    "Levi's",
    "Wrangler",
    "Lee"
];
const correctAnswer = "Levi's";


// 定数の文字列HTMLに反映させる
document.getElementById("js-question").textContent = question;

const $button = document.getElementsByTagName("button");

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];


// ボタンがクリックされたときの正誤判定
$button[0].addEventListener("click", () => {
    if (correctAnswer === $button[0].textContent) {
        window.alert("正解です！");
    } else {
        window.alert("不正解です！");
    }
});

$button[1].addEventListener("click", () => {
    if (correctAnswer === $button[1].textContent) {
        window.alert("正解です！");
    } else {
        window.alert("不正解です！");
    }
});

$button[2].addEventListener("click", () => {
    if (correctAnswer === $button[2].textContent) {
        window.alert("正解です！");
    } else {
        window.alert("不正解です！");
    }
});

$button[3].addEventListener("click", () => {
    if (correctAnswer === $button[3].textContent) {
        window.alert("正解です！");
    } else {
        window.alert("不正解です！");
    }
});