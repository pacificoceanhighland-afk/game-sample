window.draw = function(ctx, currentMap, playerX, playerY){
  const tileSize = 32;  // タイルの大きさ

// 描画
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1)タイルを全部描画
  for(let y=0; y < currentMap.map.length; y++){
    for(let x=0; x < currentMap.map[y].length; x++){
      const tile = currentMap.map[y][x];
      if(tile === 1) ctx.fillStyle = "#808080"; // 壁
      if(tile === 0) ctx.fillStyle = currentMap.floorColor; // マップごとの床色
      if(tile === 2 || tile === 3 || tile === 4 || tile === 5) ctx.fillStyle = "#800000"; // 出入り口を茶色で描画
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  //NPC描画
  for(let npc of npcs){
    if(currentMap === npc.map){
      ctx.fillStyle = npc.color;
      ctx.fillRect(npc.x * tileSize, npc.y * tileSize, tileSize, tileSize);
    }
  }
    
  // プレイヤー描画
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(playerX * tileSize, playerY * tileSize, tileSize, tileSize);
}
