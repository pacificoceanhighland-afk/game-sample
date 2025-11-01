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
  standingRight: -190,
  standingSize: 1000,
  standingBottom: -520,

  nameColor: "#ffffff",
  dialogue: [
    { speaker: "npc", text: "お待ちしておりました、陛下。"},
    { speaker: "player", 
      text: "うむ。会いたかったぞ、〈白の神官女〉よ。"
    },
    { speaker: "npc", 
      text: "はい。陛下においては、ご健勝のようで？"
    },
    { speaker: "player", 
      text: "うむ。この余なのだから、当然であるぞ？"
    },
    { speaker: "npc", 
      text: "そうですか。",
      action: () => switchToStanding()
    },
    { speaker: "npc",
      text: "まぁ、何せあの『陛下』なのですから、それも当然のことと言えましょう。",
      action: () => switchToStanding() // ←ここでスチル→立ち絵に切り替え
    },
    { speaker: "player",
      text: "うむ。余のことをよく分かっておるではないか。"
    },
    { speaker: "npc",
      text: "……最近になって、御身がどういう人物なのか、分かってきましたので。"
    },
    { speaker: "player",
      text: "ほう？　それは良い傾向であるな。"
    },
    { speaker: "npc",
      text: "？　どうしてです？"
    },
    { speaker: "player",
      text: "決まっておろう？"
    },
    { speaker: "player",
      text: "ついぞこれまで、この国の王ですら気に掛けなかった女が、ようやっとその気になったと言うのだから、これを吉報と言わずして、何と例えようか。"
    },
    { speaker: "npc",
      text: "……今日の本題に入りましょう。"
    },
    { speaker: "player",
      text: "照れたか？"
    },
    { speaker: "npc",
      text: "（そんなはずがない）今日来てくださったのは、支援の件ですよね？"
    },
    { speaker: "player",
      text: "そうだ。王家から毎月、この神殿に送っている物資だな。"
    },
    { speaker: "npc",
      text: "毎度のことながら、陛下のご温情には感謝しております。"
    },
    { speaker: "player",
      text: "そうか。それは良いことであるな。"
    },
    { speaker: "npc",
      text: "はい。本当に。"
    },
    { speaker: "player",
      text: "これでようやく、この余と婚約する気になったか？"
    },
    { speaker: "npc",
      text: "……何度言わせる気ですか。そのようなこと、あり得るはずがないでしょう？",
    },
    { speaker: "player",
      text: "何故だ？",
    },
    { speaker: "npc",
      text: "確かに、陛下の毎度のご贈品にはとても感謝しております。",
    },
    { speaker: "npc",
      text: "しかし、古より交わされた王家と神殿の盟約をお忘れではないはず。",
    },
    { speaker: "player",
      text: "……やはりそれか。",
    },
    { speaker: "player",
      text: "悪いが、その答えはもう聞き飽きたぞ。",
    },
    { speaker: "npc",
      text: "飽きた、飽きないの話ではありません。そういう決まりだから、そう申しているのです。",
    },
    { speaker: "player",
      text: "決まり、か。余の嫌う言葉の一つであるな。"
    },
    { speaker: "npc",
      text: "……御身も一国の玉座に座す君主であるならば、決まりの重要性を理解されていることとは存じますが？",
    },
    { speaker: "player",
      text: "当然だ。決まりとは即ち、人を縛るためにあり、守るために敷くものであるからな。",
    },
    { speaker: "npc",
      text: "ならば……。"
    },
    { speaker: "player",
      text: "だがそれは、あくまで人の話。王たるこの余はその枠外にある存在だと自負している。"
    },
    { speaker: "npc",
      text: "王は、人ではないと？"
    },
    { speaker: "player",
      text: "然り。王とは、人の枠に収まらぬからこその器。だからこそ、人界の上に立つことの出来る者の名。"
    },
    { speaker: "player",
      text: "そしてそれは、〈白の神官女〉たるそなたも同義であるな。"
    },
    { speaker: "npc",
      text: "……そこまで理解しておられるのなら――。"
    },
    { speaker: "player",
      text: "ああ。それを承知した上で、そなたにこう告げよう。"
    },
    { speaker: "player",
      text: "――『王』たるこの余の『妻』となれ。"
    },
    { speaker: "npc",
      text: "……呆れて物が言えないとは、まさにこのことでしょうね。"
    },
    { speaker: "npc",
      text: "……。"
    },
    { speaker: "npc",
      text: "……一つ、賭けをいたしませんか？"
    },
    { speaker: "player",
      text: "賭けだと？",
    },
    { speaker: "npc",
      text: "――はい。"
    },
    { speaker: "player",
      text: "……解せぬな。俗世とは離れた身にある神殿の者たるそなたが、賭け事とは。"
    },
    { speaker: "player",
      text: "一体何が目的だ？"
    },
    { speaker: "npc",
      text: "……私とて、遊興に耽る時ぐらいはあります。"
    },
    { speaker: "player",
      text: "……そうか。"
    },
    { speaker: "player",
      text: "――ならば良い。申してみよ。その賭けの内容とやらを。"
    },
    { speaker: "npc",
      text: "……では。"
    },
    { speaker: "npc",
      text: "……この神殿がある神域の、さらに奥にある『迷宮』はご存知と思います。"
    },
    { speaker: "player",
      text: "当然だ。この赤の王国内において、それを知らぬものはいないだろう。"
    },
    { speaker: "player",
      text: "最も、そこに入れる者はいないがな。"
    },
    { speaker: "npc",
      text: "はい。『迷宮』への立ち入りは禁じられています。"
    },
    { speaker: "npc",
      text: "陛下もご存知の通り。この国において、それは古より続いてきた習わし、王家と神殿の盟約によるものです。"
    },
    { speaker: "player",
      text: "……そうだな。"
    },
    { speaker: "npc",
      text: "はい。"
    },
    { speaker: "player",
      text: "その『迷宮』が、どうしたと？"
    },
    { speaker: "npc",
      text: "実はそちらで、ある問題が起きていまして。"
    },
    { speaker: "player",
      text: "問題？",
    },
    { speaker: "npc",
      text: "そうです。"
    },
    { speaker: "npc",
      text: "先ほど陛下が申しました通りの、入れる者がいないはずの『迷宮』ですが……。"
    },
    { speaker: "npc",
      text: "最近、その不可侵の禁が破られることがありました。"
    },
    { speaker: "player",
      text: "ほう？"
    },
    { speaker: "player",
      text: "それは、興味深い話だな。"
    },
    { speaker: "npc",
      text: "……（興味深いなどではなく）。"
    },
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
