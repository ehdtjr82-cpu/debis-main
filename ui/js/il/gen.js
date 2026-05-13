var gen = gen || {};
gen.checkInputs = function () {

    const components = $w.getComponentBySelector("*"); // 화면 전체 컴포넌트
    let rows = [];

    components.forEach(comp => {
        if (!comp) return;

        let id = comp.id || "";
        let type = comp.classname || comp.getClassName?.() || "";
        let validExp = comp.validExp || comp.getAttr?.("validExp") || "";

        // ------------ 1. 일반 입력 컴포넌트 처리 ------------ //
        if (["w2:textbox", "w2:textarea", "w2:selectbox", "w2:inputCalendar"]
            .includes(type)) {

            if (validExp) {
                const exp = validExp.split(":")[0] ?? "";
                rows.push({
                    compId: id,
                    dispName: exp,
                    columnId: ""
                });
            } else {
                rows.push({
                    compId: id,
                    dispName: "",
                    columnId: ""
                });
            }
        }

        // ------------ 2. RadioGroup ------------ //
        else if (type === "w2:radiogroup") {
            const exp = validExp?.split(":")[0] ?? "";
            rows.push({
                compId: id,
                dispName: exp,
                columnId: ""
            });
        }

        // ------------ 3. UDC 내부 컴포넌트 포함 ------------ //
        else if (type === "w2:udc") {
            const inner = comp.getAllChildren?.() || [];
            inner.forEach(innerComp => {
                if (innerComp.validExp) {
                    rows.push({
                        compId: innerComp.id,
                        dispName: innerComp.validExp.split(":")[0],
                        columnId: ""
                    });
                }
            });
        }

        // ------------ 4. Grid 처리 ------------ //
        else if (type === "w2:grid") {
            const colInfos = comp.getColumnInfo();

            colInfos.forEach(col => {
                rows.push({
                    compId: id,
                    dispName: col.headerText,
                    columnId: col.id
                });
            });
        }
    });

    // ----------------------------------------------------
    // 결과 테이블 HTML 구성
    // ----------------------------------------------------
    let html = `
        <html>
        <head>
            <title>CheckInputs Result</title>
            <style>
                table { border-collapse: collapse; width: 100%; font-size: 13px; }
                th, td { border: 1px solid #aaa; padding: 6px; }
                th { background: #eee; }
            </style>
        </head>
        <body>
            <h2>Input Component Validation List</h2>
            <table>
                <tr>
                    <th>Component ID</th>
                    <th>Display Name(validExp)</th>
                    <th>Column ID (Grid)</th>
                </tr>
    `;

    rows.forEach(r => {
        html += `
            <tr>
                <td>${r.compId}</td>
                <td>${r.dispName}</td>
                <td>${r.columnId}</td>
            </tr>
        `;
    });

    html += `
            </table>
        </body>
        </html>
    `;

    // 새 창 열기
    let newwin = window.open("", "_blank", "width=900,height=700,scrollbars=yes,resizable=yes");
    newwin.document.write(html);
    newwin.document.close();
    newwin.focus();
};
