let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 30;
let sco = 0;
let flag = true;
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア : " + "　| 終了";
    que.textContent = "時間切れ!";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = [
  "泳げる",
  "最悪の世代",
  "ゴムゴムの実",
  "元七武海",
  "長男",
  "メリー号",
  "エースの父",
  "覇王色持ち",
  "東の海出身",
  "42歳",
];
let seikai = new Array(max);
seikai = ["×", "〇", "×", "〇", "×", "〇", "〇", "〇", "×", "×"];
maru.addEventListener("click", () => {
  answer("〇");
});
batsu.addEventListener("click", () => {
  answer("×");
});
let answer = (str) => {
  if (flag) {
    if (seikai[num] == str) {
      que.textContent = "問題" + (num + 1) + " 正解";
      sco++;
      res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + " 不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num];
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の解答終了!";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解! おめでとう!";
        logo.src = "img/clear.png";
      } else {
        que.textContent = "敗北者";
        logo.src = "img/end.png";
      }
    }
  }
};
