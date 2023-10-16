document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const profileTable = document.getElementById("profileTable").querySelector("tbody");
    const insertZenkeshiButton = document.getElementById("zenkeshiButton");
    const insertExampleButton = document.getElementById("exampleButton");
    const initialValue = `部活,テニス部\n身長,169cm\n体重,57kg→58kg（23.5）\n血液型,O型\n誕生日,12月9日\n星座,射手座`;
    const zenkeshi = '';
    const exampleText ='所属,\n部活,\n委員会,\n身長,\n体重,\n血液型,\n誕生日,\n星座,\n足のサイズ,\n視力,\n利き腕,\nプレイスタイル,\n得意技,\n家族構成,\n趣味,\n得意科目,\n苦手科目,\n好きな食べ物,\n好きな色,\n好きな本,\n好きな音楽,\n好きな映画,\n座右の銘,\n出身小学校,\nよく訪れる学校内スポット,\nお小遣い使用例,\n好みのタイプ,\n行きたいデートスポット,\n今一番ほしいもの,\n日課,\n苦手なもの（こと）,\nテニス以外の特技,\n行きたい旅行先,\n大切な人へのプレゼント,\n';
    const defaultRows = 8;

    editor.rows = defaultRows;
    editor.value = initialValue;
    updateTable(initialValue);
    adjustTextareaHeight();

    //ボタン
    insertZenkeshiButton.addEventListener("click", function() {
        editor.value = zenkeshi;
        updateTable(editor.value);
        adjustTextareaHeight();

    });
    insertExampleButton.addEventListener("click", function() {
        editor.value = exampleText;
        updateTable(editor.value);
        adjustTextareaHeight();
    });

    // テキストボックスの内容が変更されたとき
    editor.addEventListener("input", function () {
        updateTable(editor.value);
        adjustTextareaHeight();
    });
    function updateTable(textValue) {
        const lines = textValue.split("\n");
        let newHtml = "";
        lines.forEach(line => {
            const [title, content] = line.split(",");
            if (title && content) {
                newHtml += `<tr><th>${title.trim()}</th><td>${content.trim()}</td></tr>`;
            }
        });
        profileTable.innerHTML = newHtml;
    }
    // 高さ
    function adjustTextareaHeight() {
        const lines = editor.value.split("\n").length;
        editor.rows = Math.max(defaultRows, lines + 1); // 入力行数 + 2 または defaultRows、より大きい方
    }
});

//↑↓ボタン
document.addEventListener("DOMContentLoaded", function() {
    const switchButton = document.getElementById("switchButton");
    let isSection1First = true; // section1が最初に表示されているかどうか
    
    switchButton.addEventListener("click", function() {
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");
      if (isSection1First) {
        section1.parentNode.insertBefore(section2, section1);
      } else {
        section2.parentNode.insertBefore(section1, section2);
      }
      isSection1First = !isSection1First;
    });
});