/*amd /ui/sample/submission_create.xml 10181 82374d1a540caeabc3cbeca7c9cb73dde0f7845a4bab8cb8da13a3323bb32a72 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//--------------------------------
// 변환 onclick
//--------------------------------
scwin.btn_con_onclick = function (e) {
  let xmlText = txa_asis.getValue();
  let type = sbx_type.getValue();
  const objects = scwin.extractObjectBlocks(xmlText);
  const submissions = objects.map(objXml => {
    const trId = scwin.extractAttr(objXml, "object", "id");
    if (!trId || !/^tr_/i.test(trId)) return null; // tr_ 아닌 건 스킵

    const sbmId = trId.replace(/^tr_/i, "sbm_");

    // Action 
    let action = scwin.extractParamValue(objXml, "Action"); // optional
    action = scwin.applyNtisActionRule(action, type);

    // KeyValue 파싱해서 ref/target 생성
    const keyValue = scwin.extractParamValue(objXml, "KeyValue");
    const {
      inPairs,
      outPairs
    } = scwin.parseMappingsFromKeyValue(keyValue);
    const refPairs = [...inPairs, ...outPairs];
    const refAttr = scwin.buildDataJsonAttr("ref", refPairs); // I + O
    const targetAttr = scwin.buildDataJsonAttr("target", outPairs); // O only

    const attrs = [`id="${scwin.escapeXml(sbmId)}"`, ...(action ? [`action="${scwin.escapeXml(action)}"`] : []), `method="post"`, `mediatype="application/json"`, ...(refAttr ? [refAttr] : []), ...(targetAttr ? [targetAttr] : []), `encoding="UTF-8"`, `mode="asynchronous"`, `ev:submitdone="scwin.${scwin.escapeXml(sbmId)}_submitdone"`];
    return `<xf:submission ${attrs.join(" ")}>\n</xf:submission>`;
  });
  txa_tobe.setValue(submissions.filter(Boolean).join("\n\n"));

  // 복사
  navigator.clipboard.writeText(txa_tobe.getValue()).then(() => {
    console.log('복사 완료');
  }).catch(err => {
    console.error('복사 실패', err);
  });
};

//--------------------------------
// KeyValue 예:
//  - Servlet(I:IN_DS1=ds_search,O:OUT_DS1=ds_onOffSituation)
//  - JSP(I:IN_DS1=ds_srchCond,IN_DS2=ds_xxx,O:OUT_DS1=ds_transList,OUT_DS2=ds_yyy)
// 반환:
//  - inPairs:  [{ id:"ds_search", key:"IN_DS1" }, ...]
//  - outPairs: [{ id:"ds_onOffSituation", key:"OUT_DS1" }, ...]
//--------------------------------
scwin.parseMappingsFromKeyValue = function (keyValue) {
  const kv = (keyValue ?? "").trim();
  if (!kv) return {
    inPairs: [],
    outPairs: []
  };

  // 괄호 안만 추출 (없으면 전체를 대상으로 시도)
  const inside = scwin.extractInsideParentheses(kv) || kv;

  // I: ... O: ... 를 순서/유무 상관없이 찾기
  const inSegment = scwin.extractAllSections(inside, "I");
  const outSegment = scwin.extractAllSections(inside, "O");
  return {
    inPairs: scwin.parsePairs(inSegment),
    outPairs: scwin.parsePairs(outSegment)
  };
};

/**
 * 
 * 
 */
//--------------------------------
// I: / O: 가 여러 번 등장해도 전부 이어붙여서 반환
// 예) "...,O:OUT_DS1=..., O:OUT_DS2=..." → "OUT_DS1=..., OUT_DS2=..."
//--------------------------------
scwin.extractAllSections = function (inside, sectionName) {
  const re = new RegExp(`${sectionName}\\s*:\\s*([\\s\\S]*?)(?=(?:,\\s*[IO]\\s*:)|$)`, "gi");
  const parts = [];
  let m;
  while ((m = re.exec(inside)) !== null) {
    const seg = (m[1] ?? "").trim();
    if (seg) parts.push(seg);
  }
  return parts.join(","); // 이어붙여서 parsePairs가 그대로 처리하게 함
};
scwin.extractInsideParentheses = function (s) {
  const start = s.indexOf("(");
  const end = s.lastIndexOf(")");
  if (start >= 0 && end > start) return s.slice(start + 1, end);
  return "";
};

//--------------------------------
// sectionName: "I" or "O"
// inside 예: "I:IN_DS1=ds_a,IN_DS2=ds_b,O:OUT_DS1=ds_c"
// → "IN_DS1=ds_a,IN_DS2=ds_b" / "OUT_DS1=ds_c"
//--------------------------------
scwin.extractSection = function (inside, sectionName) {
  const up = inside; // 대소문자 무시할 거라 regex i 사용
  const re = new RegExp(`${sectionName}\\s*:\\s*([\\s\\S]*?)(?=(?:,\\s*[IO]\\s*:)|$)`, "i");
  const m = up.match(re);
  return (m?.[1] ?? "").trim();
};

//--------------------------------
// "IN_DS1=ds_a, IN_DS2=ds_b" → [{id:"ds_a", key:"IN_DS1"}, ...]
//--------------------------------
scwin.parsePairs = function (segment) {
  if (!segment) return [];
  return segment.split(",").map(t => t.trim()).filter(Boolean).map(token => {
    const eq = token.indexOf("=");
    if (eq < 0) return null;
    const key = token.slice(0, eq).trim();
    const id = token.slice(eq + 1).trim();
    if (!key || !id) return null;
    return {
      id,
      key
    };
  }).filter(Boolean);
};

//--------------------------------
// 항목 0개면 null (속성 생성 안 함)
// 1개면:  ref='data:json,{"id":"...","key":"..."}'
// 여러개면: ref='data:json,[{"id":"...","key":"..."},...]'
//--------------------------------
scwin.buildDataJsonAttr = function (attrName, pairs) {
  if (!pairs || pairs.length === 0) return null;
  const payload = pairs.length === 1 ? pairs[0] : pairs;

  // JSON 문자열은 큰따옴표 포함 → XML 속성은 작은따옴표로 감싸서 escaping 최소화
  const json = JSON.stringify(payload);

  // 혹시 id/key에 작은따옴표가 들어오면 XML 깨질 수 있으니 최소한으로 치환
  const safe = json.replace(/'/g, "&apos;");
  return `${attrName}='data:json,${safe}'`;
};

//--------------------------------
// NTIS action 규칙
//  - type === "NTIS"일 때:
//  - action이 /tn. 으로 시작하면 /ncall.tn. 으로 치환
//  - action이 비어있으면 NTIS 기본 action 채움
//--------------------------------
scwin.applyNtisActionRule = function (action, type) {
  const isNtis = type === "N";
  const a = (action ?? "").trim();
  if (!isNtis) return a;
  if (!a) {
    return "";
  }

  // 그럴리 없지만, 이미 ncall이면 유지
  if (/^\/ncall\./i.test(a)) return a;

  // "/" 로 시작하면 "/ncall." 로 치환
  if (/^\//.test(a)) return a.replace(/^\//, "/ncall.");
  return a;
};

//--------------------------------
// <object ...> ... </object> 블록들을 통째로 추출 
//--------------------------------
scwin.extractObjectBlocks = function (xmlText) {
  const re = /<object\b[\s\S]*?<\/object>/gi;
  const out = [];
  let m;
  while ((m = re.exec(xmlText)) !== null) out.push(m[0]);
  return out;
};

//--------------------------------
// 특정 태그의 특정 attribute 값 추출 (첫 번째 매치)
//--------------------------------
scwin.extractAttr = function (xmlBlock, tagName, attrName) {
  const re = new RegExp(`<${tagName}\\b[^>]*\\b${attrName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const m = xmlBlock.match(re);
  if (!m) return "";
  return (m[1] ?? m[2] ?? m[3] ?? "").trim();
};

//--------------------------------
// <param name="X" value="Y">에서 Y 추출 (name 대소문자 무시)
//--------------------------------
scwin.extractParamValue = function (xmlBlock, paramName) {
  const re = new RegExp(`<param\\b[^>]*\\bname\\s*=\\s*("([^"]*)"|'([^']*)')[^>]*\\bvalue\\s*=\\s*("([^"]*)"|'([^']*)')[^>]*>`, "gi");
  let m;
  while ((m = re.exec(xmlBlock)) !== null) {
    const name = (m[2] ?? m[3] ?? "").trim();
    const value = (m[5] ?? m[6] ?? "").trim();
    if (name.toLowerCase() === paramName.toLowerCase()) return value;
  }
  return "";
};

//--------------------------------
// XML 안전 처리(속성에 넣을 때 최소한의 escaping)
//--------------------------------
scwin.escapeXml = function (s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'debis/ntis',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'sbx_type',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'debis'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ntis'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'AS-IS',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_asis',style:'width:1000px; height: 400px'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TO-BE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_tobe',style:'width:1000px; height: 400px'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_con',style:'',type:'button','ev:onclick':'scwin.btn_con_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변환'}]}]}]}]}]}]}]}]}]})