let currentIndex = 0;

function showNextScene() {
  const scene = story[currentIndex];
  if (!scene) return;

  // ノベルテキスト表示
  const textBox = document.getElementById("text-box");
  textBox.textContent = scene.text;

  // キャラクター名表示
  const charName = document.getElementById("char-name");
  if (scene.name) {
    charName.textContent = scene.name;
  } else {
    charName.textContent = "";
  }

  // 選択肢表示エリア
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.onclick = () => {
        currentIndex = choice.next;
        showNextScene();
      };
      choicesDiv.appendChild(btn);
    });
  } else {
    // 選択肢がない場合は「次へ」ボタンを作る
    const btn = document.createElement("button");
    btn.textContent = "次へ";
    btn.onclick = () => {
      currentIndex++;
      showNextScene();
    };
    choicesDiv.appendChild(btn);
  }
}

// タイトル画面から開始
const titleScreen = document.getElementById("title-screen");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  titleScreen.style.display = "none"; // タイトル画面非表示
  showNextScene(); // ノベル開始
});
