// Chromeの場合
// 【Ctrl+Shift+I】で検証モード（デベロッパーツール）を開く。
// Consoleタブで、以下のコードを貼り付ける。

const exams = document.getElementsByClassName('exam-all');

let results = []

for (const exam of exams) {
  const th = exam.querySelector('th').innerText.replace(/\n/g,'　');
  let tds = exam.querySelectorAll('td');

  let tdOptions = []
  tds.forEach(td => {
    const tdText = td.innerText;
    if(tds[tds.length - 1] !== td ) {
      const tdOption = td.className == 'CR' ? '★ ' + tdText : tdText;
      tdOptions.push(tdOption);
    } else {
      const desc = tdText;
      tdOptions.push("\n");
      tdOptions.push(desc);
    }
  })
  results.push(th);
  results.push("\n");
  results = results.concat(tdOptions);
  results.push("\n");
}

console.log(results.join("\n"))
