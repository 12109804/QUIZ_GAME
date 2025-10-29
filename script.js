// クイズの問題文、選択肢、正解を定数として定義
const quiz = [
    {   
        question: "世界で最も売れているジーンズブランド次のうちどれ？",
        answers: [
            "Edwin",
            "Levi's",
            "Wrangler",
            "Lee"
        ],
        correctAnswer: "Levi's"
    },
    {
        question: "次のうち、最も高い山はどれ？",
        answers: [
            "富士山",
            "エベレスト",
            "キリマンジャロ",
            "マッターホルン"
        ],
        correctAnswer: "エベレスト"
    },
    {
        question: "次のうち、最も長い川はどれ？",
        answers: [
            "ナイル川",
            "アマゾン川",
            "長江",
            "ミシシッピ川"
        ],
        correctAnswer: "ナイル川"          
    },
    {
        question: "次のうち、最も大きい惑星はどれ？",
        answers: [
            "地球",
            "木星",
            "土星",
            "火星"
        ],
        correctAnswer: "木星"   
    },
    {
        question: "次のうち、最も人口の多い国はどれ？",
        answers: [
            "インド",
            "アメリカ合衆国",
            "インドネシア",
            "中国"
        ],
        correctAnswer: "中国"   
    },
    {
        question: "次のうち、最も深い海溝はどれ？",
        answers: [
            "マリアナ海溝",
            "トンガ海溝",
            "ペルー・チリ海溝",
            "ジャワ海溝"
        ],
        correctAnswer: "マリアナ海溝"
    },
    {
        question: "次のうち、最も古い宗教はどれ？",
        answers: [
            "キリスト教",
            "イスラム教",
            "ヒンドゥー教",
            "仏教"
        ],
        correctAnswer: "ヒンドゥー教"
    },
    {
        question: "次のうち、最も面積の大きい国はどれ？",
        answers: [
            "カナダ",
            "中国",
            "アメリカ合衆国",
            "ロシア"
        ],
        correctAnswer: "ロシア"
    },
    {
        question: "次のうち、最も広い湖はどれ？",
        answers: [
            "カスピ海",
            "スペリオル湖",
            "ビクトリア湖",
            "ヒューロン湖"
        ],
        correctAnswer: "カスピ海"          
    },
    {
        question: "次のうち、最も高い建造物はどれ？",
        answers: [
            "エッフェル塔",
            "ブルジュ・ハリファ",
            "東京スカイツリー",
            "上海タワー"
        ],
        correctAnswer: "ブルジュ・ハリファ"   
    }
];



// 現在のクイズのインデックス、問題文、選択肢、正解を定義、クイズの長さを取得、スコアの初期化
const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;
const question = quiz[quizIndex].question;
const answers = quiz[quizIndex].answers;
const correctAnswer = quiz[quizIndex].correctAnswer;


// ボタン要素を取得
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < $button.length) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};


// クイズの初期設定を実行
setupQuiz();


// 問題出題時のサウンド再生関数
let audioQuestion = new Audio('sounds/Quiz-question.mp3');


// 正誤判定時のサウンド再生関数
let audioCorrect = new Audio('sounds/Quiz-correct.mp3');
let audioWrong = new Audio('sounds/Quiz-wrong.mp3');


// 結果表示時のサウンド再生関数
let audioResult = new Audio('sounds/Quiz-result.mp3');  


// ボタンがクリックされたときの正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correctAnswer === e.target.textContent) {
        audioCorrect.play(); // 正解音
        window.alert("正解です！");
        score++;
    } else {
        audioWrong.play(); // 不正解音
        window.alert("不正解です！");
    }
    quizIndex++;

    if (quizIndex < quizlength) {
    // 問題数がまだあれば次の問題を出題
        setupQuiz();
        audioQuestion.play();
    } else {
        audioResult.play(); // 結果音
    // 効果音終了後に結果表示
        audioResult.addEventListener("ended", () => {
            window.alert("クイズ終了！あなたの正解数は" + score + "/" + quizlength + "です！");
        });
    }

};


// ボタン要素にクリックイベントを追加
let handlerindex = 0;
while (handlerindex < $button.length) {
    $button[handlerindex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerindex++;
};