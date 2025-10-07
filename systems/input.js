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

      // 汎用マップ遷移チェック
      for (let t of mapTransitions) {
        if (currentMap === t.from && tile === t.tile) {
          currentMap = t.to;
          playerX = t.spawnX;
          playerY = t.spawnY;
          break;
      }
    }
  }

  // --- フィールド間の移動処理 ---
  function checkFieldTransition() {
    const field = fields[currentField];

      if(playerX < 0 && field.west) {
        currentField = field.west;
        currentMap = Object.values(fields[currentField].maps)[0]; // 最初のマップを取得
         playerX = currentMap.map[0].length - 1;
      }

      if(playerX >= currentMap.map[0].length && field.east) {
        currentField = field.east;
        currentMap = Object.values(fields[currentField].maps)[0];
        playerX = 0;
      }

      if(playerY < 0 && field.north) {
        currentField = field.north;
        currentMap = Object.values(fields[currentField].maps)[0];
        playerY = currentMap.map.length - 1;
      }

      if(playerY >= currentMap.map.length && field.south) {
        currentField = field.south;
        currentMap = Object.values(fields[currentField].maps)[0];
        playerY = 0;
      }
    }

     // 移動が完了したらフィールド遷移をチェック
     checkFieldTransition();

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
