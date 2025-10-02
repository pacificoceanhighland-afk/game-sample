window.activeNpc = null;
window.dialogueIndex = 0;

// 会話開始
window.startDialogue = function(npc){
  activeNpc = npc;
  dialogueIndex = 0;
  showDialogue();
}

// メッセージを表示する関数
window.showDialogue = function(){
  if(!activeNpc) return;
  if(dialogueIndex >= activeNpc.dialogue.length){
    // 終わったら閉じる
    hideMessage();
    activeNpc = null;
    return;
  }

  const line = activeNpc.dialogue[dialogueIndex];

  // 一旦非表示
  document.getElementById("npcMessageBox").style.display = "none";
  document.getElementById("playerMessageBox").style.display = "none";
  document.getElementById("npcImage").style.display = "none";

  if(line.speaker === "npc"){
    // NPCのセリフ
    const npcNameBox = document.getElementById("npcNameBox");
    const npcMessageText = document.getElementById("npcMessageText");
    const npcImage = document.getElementById("npcImage");

    npcNameBox.textContent = activeNpc.name;
    npcNameBox.style.color = activeNpc.color;
    npcMessageText.textContent = line.text;
      
    document.getElementById("npcMessageBox").style.display = "block";

    npcImage.src = activeNpc.image;
    npcImage.style.display = "block";

    // サイズや位置調整も activeNpc から取る
    if(activeNpc.imageSize){
      npcImage.style.maxHeight = activeNpc.imageSize + "px";
    }
    if(activeNpc.imageLeft !== undefined){
      npcImage.style.left = activeNpc.imageLeft + "px";
      npcImage.style.right = "auto";
    } else if(activeNpc.imageRight !== undefined){
      npcImage.style.right = activeNpc.imageRight + "px";
      npcImage.style.left = "auto";
    }
    npcImage.style.bottom = (activeNpc.imageBottom || 20) + "px";
      
  } else {
    // プレイヤーのセリフ
    const playerNameBox = document.getElementById("playerNameBox");
    const playerMessageText = document.getElementById("playerMessageText");

    playerNameBox.textContent = window.playerName;
    playerNameBox.style.color = "#ff5555";
    playerMessageText.textContent = line.text;

    document.getElementById("playerMessageBox").style.display = "block";
  }
};

window.nextDialogue = function(){
  if(activeNpc){
    dialogueIndex++;
    showDialogue();
  }
};

// メッセージを消す関数
window.hideMessage = function(){
  document.getElementById("npcMessageBox").style.display = "none";
  document.getElementById("playerMessageBox").style.display = "none";
  document.getElementById("npcImage").style.display = "none";
}
