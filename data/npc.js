// NPCの位置とセリフ
window.npcs = window.npcs || [];

// 兵士
window.npcs.push({
  x: 5, y: 4,
  map: palaceInside,
  name: "兵士",
  color: "#daa520",
  image: "images/npc1.png",
  imageRight: -250,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#daa520",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下！"},
    { speaker: "player", text: "うむ。今朝もご苦労であるな。"},
    { speaker: "npc", text: "ありがとうございます。"},
    { speaker: "npc", text: "陛下。"},
    { speaker: "player", text: "どうした？"},
    { speaker: "npc", text: "アレキサンドリア様が、「陛下がお目覚めになられたら、私のところに来るよう伝えてください」とのことです。"},
    { speaker: "player", text: "そうなのか？"},
    { speaker: "npc", text: "はい。"},
    { speaker: "player", text: "ふむ。では、あやつは今どこにおる？"},
    { speaker: "npc", text: "宮殿の外で待っていると、仰っていました。"},
    { speaker: "player", text: "分かった。すぐに向かおう。"},
    { speaker: "npc", text: "お気を付けて。"}
  ]
});

// アレキサンドリア
window.npcs.push({
  x: 11, y: 2,
  map: palaceOutside,
  name: "アレキサンドリア",
  color: "#00bfff",
  image: "images/npc2.png",
  imageRight: -120,
  imageSize: 1000,
  imageBottom: -500,
  nameColor: "#00bfff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。お待ちしておりました。"},
    { speaker: "player", text: "うむ。"},
    { speaker: "player", text: "宮殿内の兵士から、そなたのもとへと来るよう言われたのだ。"},
    { speaker: "npc", text: "はい。"},
    { speaker: "player", text: "して、こんな朝から余に何の用なのだ？"},
    { speaker: "npc", text: "……まさか、お忘れなのですか？"},
    { speaker: "player", text: "何が？"},
    { speaker: "npc", text: "本当に、お忘れなのですね……。"},
    { speaker: "player", text: "だから、その中身を今聞いておるのではないか！"},
    { speaker: "npc", text: "はぁ……。"},
    { speaker: "npc", text: "……。"},
    { speaker: "npc", text: "今日は神殿に参る日と、以前に仰っていたではありませんか？"},
    { speaker: "player", text: "……何？"},
    { speaker: "npc", text: "ですから、今日は神殿への物資を持って行く日だと、申しているのです。"},
    { speaker: "player", text: "……。"},
    { speaker: "player", text: "…………。"},
    { speaker: "player", text: "そうであった！"},
    { speaker: "npc", text: "やっと思い出されましたか。"},
    { speaker: "player", text: "ああ、こうしてはおれん！　今すぐに向かうぞ！"},
    { speaker: "npc", text: "……本当、陛下は陛下ですね。"},
    { speaker: "npc", text: "貴方様が幼い頃より仕えてきた身分ゆえ、今さらのことではありますが……。"},
    { speaker: "npc", text: "既に神殿への連絡は済ませてありますので、後は御身が向かうだけとなっております。"},
    { speaker: "player", text: "流石、余の臣下であるな！　主君のことを分かっておる！"},
    { speaker: "npc", text: "……急ぎ向かってくださいませ。"},
    { speaker: "player", text: "うむ、余の愛するあやつが待っておるのだ。早く行かねばな！"},
    { 
      speaker: "npc", 
      text: "はい。私もお供しますので。",
      action: () => addPartyMember({
        name: "アレキサンドリア",
        hp: 100,
        maxHp: 100,
        attack: 18,
        defense: 12,
        level: 1,
        weapon: null,
        image: "images/alexandria.png"
      })
    }
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 9, y: 6,
  map: sacredArea1,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"},
    { speaker: "player", text: "うむ。〈白の神官女〉は中におるか？"},
    { speaker: "npc", text: "はい。神官女様は中でお待ちです。"},
    { speaker: "player", text: "分かった。すぐに向かおう。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 7, y: 9,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 3, y: 9,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 7, y: 7,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 3, y: 7,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 7, y: 5,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈神殿従女〉
window.npcs.push({
  x: 3, y: 5,
  map: templeInside,
  name: "〈神殿従女〉",
  color: "#f0f8ff",
  image: "images/npc3.png",
  imageRight: 0,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#f0f8ff",
  dialogue: [
    { speaker: "npc", text: "おはようございます、陛下。"}
  ]
});

// 〈白の神官女〉
window.npcs.push({
  x: 5, y: 3,
  map: templeInside,
  name: "〈白の神官女〉",
  color: "#ffffff",

  // --- スチル用設定 ---
  image: "images/still1.png",
  imageRight: 90,
  imageSize: 700,
  imageBottom: -10,

  // --- 立ち絵用設定（新しく追加） ---
  standingImage: "images/npc4.png",
  standingRight: -100,
  standingSize: 1000,
  standingBottom: -500,

  nameColor: "#ffffff",
  dialogue: [
    { speaker: "npc", text: "お待ちしておりました、陛下。"},
    { speaker: "player", 
      text: "うむ。会いたかったぞ、〈白の神官女〉よ。"
    },
    { speaker: "npc", 
      text: "はい。陛下においては、ご健勝のようで？",
      action: () => switchToStanding() // ←ここでスチル→立ち絵に切り替え
    },
    { speaker: "player", 
      text: "うむ。この余なのだから、当然であるぞ？",
      action: () => switchToStanding()
    },
    { speaker: "npc", 
      text: "そうですか。",
      action: () => switchToStanding()
    }
  ]
});

// 兵士
window.npcs.push({
  x: 9, y: 1,
  map: sacredArea2,
  name: "兵士",
  color: "#daa520",
  image: "images/npc1.png",
  imageRight: -250,
  imageSize: 1000,
  imageBottom: -320,
  nameColor: "#daa520",
  dialogue: [
    { speaker: "npc", text: "陛下、この先は迷宮となっております。"},
    { speaker: "player", text: "うむ。腕が鳴るな。"},
    { speaker: "npc", text: "そうでしょうか？　では、ご武運を！"}
  ]
});

// 商人
window.npcs.push({
  x: 4, y: 3,
  map: itemShop,
  name: "商人",
  color: "#00ff7f",
  image: "images/npc_shop.png",
  imageRight: -50,
  imageSize: 500,
  imageBottom: -50,
  nameColor: "#00ff7f",
  dialogue: [
    {
      speaker: "npc",
      text: "いらっしゃい！何をお求めですか？",
      choices: [
        { text: "買う", next: "shop_open" },
        { text: "やめる", next: "shop_cancel" }
      ]
    },
    {
      next: "shop_cancel",
      speaker: "npc",
      text: "またのご利用をお待ちしております！"
    }
  ]
});