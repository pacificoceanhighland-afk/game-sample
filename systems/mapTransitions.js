// mapTransitions.js
window.mapTransitions = [
  // 王の私室 ⇄ 宮殿内部
  { from: kingRoom, tile: 2, to: palaceInside, spawnX: 1, spawnY: 8 },
  { from: palaceInside, tile: 3, to: kingRoom, spawnX: 5, spawnY: 1 },
  
  // 宮殿内部 ⇄ 宮殿外部
  { from: palaceInside, tile: 4, to: palaceOutside, spawnX: 2, spawnY: 10 },
  { from: palaceOutside, tile:5, to: palaceInside, spawnX: 10, spawnY: 1 },

  // 宮殿外部 ⇄ 城下町①
  { from: palaceOutside, tile: 6, to: castleTown1, spawnX: 0, spawnY: 5 },
  { from: castleTown1, tile: 7, to: palaceOutside, spawnX: 15, spawnY: 5 },

  // 城下町① ⇄ 城下町②
  { from: castleTown1, tile: 8, to: castleTown2, spawnX: 0, spawnY: 5 },
  { from: castleTown2, tile: 9, to: castleTown1, spawnX: 15, spawnY: 5 },

  // 城下町① ⇄ 城下町③
  { from: castleTown1, tile: 10, to: castleTown3, spawnX: 5, spawnY: 0 },
  { from: castleTown3, tile: 11, to: castleTown1, spawnX: 5, spawnY: 10 },

  // 城下町① ⇄ 神域①
  { from: castleTown1, tile: 12, to: sacredArea1, spawnX: 5, spawnY: 10 },
  { from: sacredArea1, tile: 13, to: castleTown1, spawnX: 5, spawnY: 0 },
];