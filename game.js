const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// プレイヤー画像の読み込み
window.playerName = "〈赤の王〉";
const playerImg = document.getElementById("playerImage");
playerImg.src = "images/player.png";
playerImg.style.display = "block";

// 初期状態
let currentMap = kingRoom;
let playerX = 1;
let playerY = 4;

setupInput();

function mainLoop(){
  draw(ctx, currentMap, playerX, playerY);
  requestAnimationFrame(mainLoop);
}

mainLoop();