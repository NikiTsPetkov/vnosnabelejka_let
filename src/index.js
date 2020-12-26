import "./styles.css";
let button = document.querySelector(".no-print");

button.addEventListener("click", myFunction);
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let name = "ОМВ България ООД";
let iban = "BG09RZBB91551060202732";
let bank = "Райфайзен Банк";
let currency = "BGN";
/* let dealer = "Кирил Абаджиев";
let stationNumber = "1074"; */
let today = new Date();
function date() {
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (today.getDay()) {
    //Sunday is 0!
    return dd + "." + mm + "." + yyyy + " г.";
  } else {
    return Number(dd + 1) + "." + mm + "." + yyyy + " г.";
  }
}
function drawCanvasOnX(x1, x2, y) {
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}
function drawCanvasOnY(x, y1, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();
}
function canvasText(str, offset) {
  for (let i = 0; i < str.length; i += 1) {
    ctx.fillText(str[i], 2 + 16 * i, offset);
  }
}
function getCanvasMonth() {
  if (today.getDate() !== 1) {
    if (today.getMonth() + 1 < 10) {
      return "0" + (today.getMonth() + 1);
    } else {
      return today.getMonth() + 1;
    }
  } else {
    if (today.getMonth() < 10) {
      return "0" + today.getMonth();
    } else {
      return today.getMonth();
    }
  }
}
function getCanvasDay() {
  if (today.getDate() - 1 < 10) {
    return "0" + (today.getDate() - 1);
  } else {
    return today.getDate() - 1;
  }
}
function myFunction() {
  let total = document.getElementById("total").value;
  let pattern = /(^\d+(,|.)\d{2})$/g;
  let isTrue = pattern.test(total);
  let arr = [];
  let word;
  ctx.font = "12px Arial";
  let count = 0;
  arr = total.split(/[,.]/);
  if (isTrue && arr[0][0] !== "0") {
    //arr = total.split(/[,.]/);
    for (let i = 0; i < arr[0].length; i++) {
      switch (arr[0][i]) {
        case "0":
          word = "нула";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "1":
          word = "едно";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "2":
          word = "две";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "3":
          word = "три";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "4":
          word = "четири";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "5":
          word = "пет";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "6":
          word = "шест";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "7":
          word = "седем";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "8":
          word = "осем";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        case "9":
          word = "девет";
          for (let j = 0; j < word.length; j += 1, count += 1) {
            ctx.fillText(word[j], 2 + 16 * count, 238);
          }
          count++;
          break;
        default:
          alert("error");
      }
    }
    ctx.fillText("лв", 2 + 16 * count, 238);
    count = count + 2;
    ctx.fillText("и", 2 + 16 * count, 238);
    count = count + 2;
    ctx.fillText(arr[1] || "00", 2 + 16 * count, 238);
    count = count + 2;
    ctx.fillText("ст", 2 + 16 * count, 238);
  } else {
    alert("Въведете число във формат ХХХХХ.ХХ и без водеща нула");
  }
}
drawCanvasOnX(10, 130, 25);
ctx.font = "11px Arial";
ctx.fillText("До Райфайзен Банк", 10, 23);
drawCanvasOnX(420, 570, 25);
ctx.fillText("София", 421, 23);
ctx.fillText(date(), 500, 23);
drawCanvasOnX(10, 130, 50);
ctx.fillText("Клон", 10, 48);
drawCanvasOnX(10, 130, 80);
ctx.fillText("Адрес", 10, 78);
drawCanvasOnX(0, 640, 90);
drawCanvasOnX(420, 570, 60);

for (let i = 1; i <= 8; i += 1) {
  drawCanvasOnX(0, 640, 90 + i * 30);
}

for (let j = 0; j <= 6; j += 1) {
  for (let i = 1; i <= 40; i += 1) {
    if ((i > iban.length && j === 1) || (j === 3 && i >= 17)) {
      break;
    }
    if ((j === 3 && i <= 14) || (j === 6 && (i === 5 || i === 7 || i === 9))) {
      continue;
    }
    drawCanvasOnY(i * 16, 105 + j * 30, 120 + j * 30);
  }
}
ctx.font = "14px Arial";
canvasText(name, 118);
canvasText(iban, 148);
canvasText(bank, 178);
//canvasText(dealer,268);
//canvasText(stationNumber,298);
drawCanvasOnY(96, 180, 210);
drawCanvasOnY(224, 180, 210);
drawCanvasOnY(272, 180, 210);
drawCanvasOnY(320, 300, 330);
ctx.fillText(today.getFullYear().toString().substr(2, 2), 72, 298);
ctx.fillText(getCanvasMonth(), 104, 298);
ctx.fillText(getCanvasDay(), 136, 298);
for (let i = 0; i < currency.length; i += 1) {
  ctx.fillText(currency[i], 226 + 16 * i, 208);
}
ctx.fillText("ВНОСНА", 17, 192);
ctx.fillText("БЕЛЕЖКА", 13, 206);
ctx.fillText("Внесохме в брой", 100, 200);
ctx.font = "8px Arial"; //change font to 8 px
ctx.fillText("място и дата на подаване", 455, 33);
ctx.fillText("подпис на вносителя", 455, 68);
ctx.font = "9px Arial"; //change font to 9 px
ctx.fillText("В полза на - име", 3, 98);
ctx.fillText("IBAN на получателя", 3, 128);
ctx.fillText("При банка - банка, клон", 3, 158);
ctx.fillText("Вид валута", 225, 188);
ctx.fillText("Сума", 280, 188);
ctx.fillText("С думи", 3, 218);
ctx.fillText("Вносител - име", 3, 248);
ctx.fillText("Основание за внасяне", 3, 278);
ctx.fillText("Счетоводител", 3, 308);
ctx.fillText("Касиер", 322, 308);
