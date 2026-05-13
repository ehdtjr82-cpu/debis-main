/*amd /ui/sample/grid_create.xml 8798 cfb43ca90a019ade0c1910f903fabb048abb32a3bb9538db2bdb716627743514 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//--------------------------------
// 변환 onclick
//--------------------------------
scwin.btn_con_onclick = function (e) {
  let asisVal = txa_asis.getValue();
  if ($c.util.isEmpty($p, asisVal)) {
    $c.win.alert($p, "AS-IS Grid 칼럼을 넣어 주세요.");
    return;
  }
  let tobeVal = scwin.convertAsisGridToTobe(asisVal);
  txa_tobe.setValue(tobeVal);

  // 복사
  navigator.clipboard.writeText(txa_tobe.getValue()).then(() => {
    console.log('복사 완료');
  }).catch(err => {
    console.error('복사 실패', err);
  });
};

//--------------------------------
// 작성 된 AS-IS Grid 칼럼 읽어서 TO-BE Grid Body부로 전환
//--------------------------------
scwin.convertAsisGridToTobe = function (text) {
  const cleaned = scwin.stripGroupBlocks(text);
  const colBlocks = scwin.extractColumnBlocks(cleaned);
  const lines = [];
  for (const colBlock of colBlocks) {
    const tag = colBlock;
    const attrs = scwin.parseAttributes(tag);
    const outAttrs = scwin.convertColumn(attrs);
    if (!outAttrs) continue;
    let line = scwin.toW2Column(outAttrs);
    lines.push(line);
  }
  return lines.join("\n");
};

//--------------------------------
// 그리드 header 셀별합용 <g ...>...</g> and <G ...>...</G> 제거
//--------------------------------
scwin.stripGroupBlocks = function (xml) {
  // Remove <g ...>...</g> and <G ...>...</G> (non-greedy across lines)
  return xml.replace(/<\s*g\b[^>]*>/gi, "").replace(/<\/\s*g\s*>/gi, "");
};

//--------------------------------
// AS-IS 그리드 속성명 Parsing
//--------------------------------
scwin.parseAttributes = function (tagText) {
  // Parse attributes robustly: key="v" | key='v' | key=v
  // Works regardless of attribute case; keys are normalized to lowercase.
  const attrs = {};
  const attrRe = /([A-Za-z_][\w:-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>\/]+))/g;
  let m;
  while ((m = attrRe.exec(tagText)) !== null) {
    const key = String(m[1] || "").toLowerCase();
    const val = (m[2] ?? m[3] ?? m[4] ?? "").trim();
    attrs[key] = val;
  }
  return attrs;
};

//--------------------------------
// dec가 0보다 클 경우(0은 checkbox에서도 사용하여 애매함)
//--------------------------------
scwin.buildFloatFormat = function (decStr) {
  const dec = Number(decStr);
  if (!Number.isFinite(dec) || dec <= 0) return null;
  const hashes = "#".repeat(dec);
  return {
    dataType: "float",
    displayFormat: `#,###.${hashes}`,
    allowChar: ".0-9",
    maxLength: `.${dec}`
  };
};

//--------------------------------
// AS-IS -> TO-BE column convert
//--------------------------------
scwin.convertColumn = function (attrs) {
  const id = attrs["id"];
  if (!id) return null;
  const out = {};
  out.displayMode = "label";
  out.id = id;

  // edit=none -> readOnly="true"
  const edit = (attrs["edit"] || "").toLowerCase();
  if (edit === "none") out.readOnly = "true";

  // show=false -> hidden="true"
  const show = (attrs["show"] || "").toLowerCase();
  if (show === "false") out.hidden = "true";

  // align -> textAlign
  const align = (attrs["align"] || "").toLowerCase();
  if (align === "left" || align === "right") out.textAlign = align;

  // sort=true -> sortable="true"
  const sort = (attrs["sort"] || "").toLowerCase();
  if (sort === "true") out.sortable = "true";

  // EditStyle -> inputType
  let inputType = "text"; // default
  const editStyle = (attrs["editstyle"] || "").toLowerCase();
  if (editStyle === "popup" || editStyle === "popupfix") {
    inputType = "textImage";
    // user rule: scwin.grid+${칼럼ID}+Popup
    out.imageClickFunction = `scwin.grid${id}Popup`;
  } else if (editStyle === "checkbox") {
    inputType = "checkbox";
  } else if (editStyle === "lookup" || editStyle === "combo") {
    inputType = "select";
  }
  out.inputType = inputType;

  // dec != 0 -> float formatting
  if (attrs["dec"] && String(attrs["dec"]).trim() !== "0") {
    const ff = scwin.buildFloatFormat(attrs["dec"]);
    if (ff) {
      out.dataType = ff.dataType;
      out.displayFormat = ff.displayFormat;
      out.allowChar = ff.allowChar;
      out.maxLength = ff.maxLength;
    }
  }

  // mask -> displayFormat
  const mask = attrs["mask"];
  if (mask) {
    const m = mask.trim().toUpperCase();
    if (m === "XXXX/XX/XX") {
      out.dataType = "date";
      out.displayFormat = "yyyy/MM/dd";
    } else if (m === "XXXX/MM") {
      out.dataType = "date";
      out.displayFormat = "yyyy/MM";
    } else if (m === "XX:XX") {
      out.dataType = "time";
      // displayFormat not needed for time
      if (out.displayFormat) delete out.displayFormat;
    }
  }
  return out;
};

//--------------------------------
// w2:column 생성
//--------------------------------
scwin.toW2Column = function (outAttrs) {
  // stable order for readability
  const order = ["displayMode", "id", "inputType", "width", "readOnly", "hidden", "textAlign", "sortable", "dataType", "displayFormat", "allowChar", "maxLength", "imageClickFunction"];
  const parts = [];
  for (const k of order) {
    if (outAttrs[k] !== undefined && outAttrs[k] !== "") {
      parts.push(`${k}="${outAttrs[k]}"`);
    }
  }

  // include any unexpected attrs
  for (const [k, v] of Object.entries(outAttrs)) {
    if (order.includes(k)) continue;
    if (v === undefined || v === "") continue;
    parts.push(`${k}="${v}"`);
  }
  return `<w2:column ${parts.join(" ")}></w2:column>`;
};

//--------------------------------
// <c> / <fc> 찾기
//--------------------------------
scwin.extractColumnBlocks = function (cleaned) {
  const blocks = [];

  // <g>를 먼저 찾아서 그 안의 c/fc를 도출
  const gRe = /<\s*g\s*>([\s\S]*?)<\/\s*g\s*>/gi;
  let gm;
  while ((gm = gRe.exec(cleaned)) !== null) {
    const gInner = gm[1] ?? "";
    blocks.push(...scwin.extractCFcBlocks(gInner));
  }

  // g 밖(전체)에서 c/fc도 뽑는다
  blocks.push(...scwin.extractCFcBlocks(cleaned));

  // 중복 제거 (id 기준)
  const seen = new Set();
  const uniq = [];
  for (const b of blocks) {
    const id = scwin.extractIdFromColumnBlock(b);
    if (!id) {
      continue;
    }
    if (seen.has(id.toLowerCase())) {
      continue;
    }
    seen.add(id.toLowerCase());
    uniq.push(b);
  }
  return uniq;
};
scwin.extractCFcBlocks = function (text) {
  const out = [];
  const colRe = /<\s*(c|fc)\s*>([\s\S]*?)<\/\s*\1\s*>/gi;
  let m;
  while ((m = colRe.exec(text)) !== null) {
    out.push(m[0]);
  }
  return out;
};
scwin.extractIdFromColumnBlock = function (colBlock) {
  // <c> id=wrkStDt ... </c> 형태에서 id 추출
  const re = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i;
  const m = colBlock.match(re);
  return (m?.[1] ?? m?.[2] ?? m?.[3] ?? "").trim();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'AS-IS',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_asis',style:'width:1000px; height: 400px'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TO-BE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_tobe',style:'width:1000px; height: 400px'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_con',style:'',type:'button','ev:onclick':'scwin.btn_con_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변환'}]}]}]}]}]}]}]}]}]})