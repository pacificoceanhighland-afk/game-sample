window.setupInput = function(){
// キー操作
  document.addEventListener("keydown", (e) => {
    let nextX = playerX;
    let nextY = playerY;

    if(e.key === "ArrowUp") nextY--;
    if(e.key === "ArrowDown") nextY++;
    if(e.key === "ArrowLeft") nextX--;
    if(e.key === "ArrowRight") nextX++;
    
    // 範囲内かどうかをチェック
    if(nextY >= 0 && nextY < currentMap.map.length &&
       nextX >= 0 && nextX < currentMap.map[nextY].length){

      // tileを取得
      let tile = currentMap.map[nextY][nextX]; 

      // 壁でなければ移動
      if(tile !== 1){
        playerX = nextX;
        playerY = nextY;
      }

      // 王の私室 → 宮殿内部
      if(tile === 2 && currentMap === kingRoom){
        currentMap = palaceInside;
        playerX = 1; // 宮殿の入口付近
        playerY = 8;
      }

      // 宮殿内部 → 王の私室
      if(tile === 3 && currentMap === palaceInside){
        currentMap = kingRoom;
        playerX = 5; // 王の部屋の出口の横
        playerY = 1;
      }

      // 宮殿内部 → 宮殿外部
      if(tile === 4 && currentMap === palaceInside){
        currentMap = palaceOutside;
        playerX = 2; playerY = 10; // 宮殿外部の左下
      }

      // 宮殿外部 → 宮殿内部
      if(tile === 5 && currentMap === palaceOutside){
        currentMap = palaceInside;
        playerX = 10; playerY = 1; // 宮殿内部の右上
      }  
    }

      // スペースキーで会話
      if(e.key === " "){ // スペースキー
        if(activeNpc){
          dialogueIndex++;
          showDialogue();
        } else {
          // NPCの隣なら会話開始
          for(let npc of npcs){
            if(currentMap === npc.map &&
               Math.abs(playerX - npc.x) + Math.abs(playerY - npc.y) === 1){
              startDialogue(npc);
              return;
            }
          }
        }
      }
    });
};
