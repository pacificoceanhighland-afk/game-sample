// ======================================================
// ① 既存のアイテム一覧（今まで通りの配列形式）
// ======================================================
window.items = [
  // 回復アイテム
  {
    id: 1,
    name: "ポーション",
    description: "HPを50回復する。",
    type: "heal",
    healAmount: 50
  },
  {
    id: 2,
    name: "エーテル",
    description: "MPを30回復する。",
    type: "mp",
    healAmount: 30
  },
  {
    id: 3,
    name: "エリクサー",
    description: "HPとMPを全回復する。",
    type: "full"
  },

  // 武器
  {
    id: 10,
    name: "ブロンズソード",
    description: "攻撃力 +5",
    type: "weapon",
    attack: 5
  },
  {
    id: 11,
    name: "シルバーソード",
    description: "攻撃力 +10",
    type: "weapon",
    attack: 10
  },

  // 防具
  {
    id: 20,
    name: "レザーメイル",
    description: "防御力 +4",
    type: "armor",
    defense: 4
  },
  {
    id: 21,
    name: "アイアンメイル",
    description: "防御力 +8",
    type: "armor",
    defense: 8
  }
];

// ======================================================
// ② カテゴリ別アイテム（武器・防具・回復）
// ======================================================
window.itemCategories = {
  weapon: [
    { id: 10, name: "ブロンズソード", attack: 5 },
    { id: 11, name: "シルバーソード", attack: 10 }
  ],
  armor: [
    { id: 20, name: "レザーメイル", defense: 4 },
    { id: 21, name: "アイアンメイル", defense: 8 }
  ],
  heal: [
    { id: 1, name: "ポーション", healAmount: 50 },
    { id: 2, name: "エーテル", healAmount: 30 },
    { id: 3, name: "エリクサー", healAmount: 9999 }
  ]
};

// ======================================================
// ③ 初期インベントリ（所持品）
// ======================================================
window.inventory = [
  { id: 1, quantity: 2 },
  { id: 10, quantity: 1 },
  { id: 20, quantity: 1 }
];
