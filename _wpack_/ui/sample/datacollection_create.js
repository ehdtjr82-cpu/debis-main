/*amd /ui/sample/datacollection_create.xml 7816 000239bfb00a900b7a2ffb02d3e38632957639063c3c8124f50725f8a36c6cc2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  sbx_type.setValue("L");
  ipt_id.setValue("ds_result");
};

//--------------------------------
// 변환(grid, object) onclick
//--------------------------------
scwin.btn_con_onclick = function (e) {
  let type = sbx_type.getValue();
  let id = ipt_id.getValue();
  if ($c.util.isEmpty($p, type)) {
    $c.win.alert($p, "유형을 선택해주세요.");
    rd_type.focus();
    return;
  }
  if ($c.util.isEmpty($p, id)) {
    $c.win.alert($p, "ID를 입력해주세요.");
    ipt_id.focus();
    return;
  }
  const NL = '\n';
  const T1 = '\t';
  const T2 = '\t\t';
  let asisCon = txa_asis.getValue();
  const body = scwin.makeBody(asisCon, type);
  let tobeCon = type == "M" ? `<w2:dataMap baseNode="map" id="` + id + `">${NL}${T1}<w2:keyInfo>${NL}${T2}${body}${NL}${T1}</w2:keyInfo>${NL}</w2:dataMap>` : `<w2:dataList baseNode="list" repeatNode="map" id="` + id + `" saveRemovedData="true">${NL}${T1}<w2:columnInfo>${NL}${T2}${body}${NL}${T1}</w2:columnInfo>${NL}</w2:dataList>`;

  // 복사
  navigator.clipboard.writeText(tobeCon).then(() => {
    console.log('복사 완료');
  }).catch(err => {
    console.error('복사 실패', err);
  });
  txa_tobe.setValue(tobeCon);
};

//--------------------------------
// 변환(grid, object) make body 
//--------------------------------
scwin.makeBody = function (asisCon, type) {
  const NL = '\n';
  const T1 = '\t';
  const T2 = '\t\t';
  return asisCon
  // 공백 라인 제거
  .replace(/^\s*[\r\n]/gm, "")
  // <g 라인 제거
  .replace(/^\s*<\s*\/?\s*g\b.*$/gim, "")
  // 좌측 들여쓰기 제거
  .replace(/^\s+/gm, "")
  // c나 fc만 추출
  .replace(/<\s*(c|fc)\b[^>]*>[\s\S]*?<\/\s*(c|fc)\s*>/gi, block => {
    // Col 또는 id 추출 (Col 우선)
    const colMatch = block.match(/\bCol\s*=\s*"?([a-zA-Z0-9_]+)"?/i);
    const idMatch = block.match(/\bid\s*=\s*"?([a-zA-Z0-9_]+)"?/i);
    const id = colMatch ? colMatch[1] : idMatch ? idMatch[1] : null;
    if (!id) {
      return; // id 도 Col 도 없으면 무시
    }

    // name 추출
    const nameMatch = block.match(/\bname\s*=\s*"?([^"\s]+)"?/i);

    // Col이 있으면 name은 id와 동일
    const name = colMatch ? id : nameMatch ? nameMatch[1] : id;
    return type == "M" ? `${T2}<w2:key dataType="text" id="${id}" name="${name}"></w2:key>` : `${T2}<w2:column dataType="text" id="${id}" name="${name}"></w2:column>`;
  }).trim();
};

//--------------------------------
// 변환(asis server debug) onclick
//--------------------------------
scwin.btn_con2_onclick = function (e) {
  let type = sbx_type.getValue();
  let id = ipt_id.getValue();
  if ($c.util.isEmpty($p, type)) {
    $c.win.alert($p, "유형을 선택해주세요.");
    rd_type.focus();
    return;
  }
  if ($c.util.isEmpty($p, id)) {
    $c.win.alert($p, "ID를 입력해주세요.");
    ipt_id.focus();
    return;
  }
  const NL = '\n';
  const T1 = '\t';
  const T2 = '\t\t';
  let asisCon = txa_asis.getValue();
  const body = scwin.makeBody2(asisCon, type);
  let tobeCon = type == "M" ? `<w2:dataMap baseNode="map" id="` + id + `">${NL}${T1}<w2:keyInfo>${NL}${body}${NL}${T1}</w2:keyInfo>${NL}</w2:dataMap>` : `<w2:dataList baseNode="list" repeatNode="map" id="` + id + `" saveRemovedData="true">${NL}${T1}<w2:columnInfo>${NL}${body}${NL}${T1}</w2:columnInfo>${NL}</w2:dataList>`;

  // 복사
  navigator.clipboard.writeText(tobeCon).then(() => {
    console.log('복사 완료');
  }).catch(err => {
    console.error('복사 실패', err);
  });
  txa_tobe.setValue(tobeCon);
};

//--------------------------------
// 변환(asis server debug) make body 
//--------------------------------
scwin.makeBody2 = function (asisCon, type) {
  const NL = '\n';
  const T1 = '\t';
  const T2 = '\t\t';
  return asisCon
  // 빈 줄 제거
  .replace(/^\s*[\r\n]/gm, "")
  // 한 줄씩 처리
  .split(/\r?\n/).map(line => {
    const match = line.match(/^\s*(?:long|int|double|float|String|boolean)\s+([a-zA-Z0-9_]+)\s*=\s*\[[^\]]*]/i);
    if (!match) return null;
    const id = match[1];
    return type == "M" ? `${T2}<w2:key dataType="text" id="${id}" name="${id}"></w2:key>` : `${T2}<w2:column dataType="text" id="${id}" name="${id}"></w2:column>`;
  }).filter(Boolean).join(NL);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bg-req',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'sbx_type',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataMap'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th bg-req',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'id',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ipt_id',style:'width:100px;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'AS-IS',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_asis',style:'width:1000px; height: 400px'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TO-BE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_tobe',style:'width:1000px; height: 400px'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_con',style:'',type:'button','ev:onclick':'scwin.btn_con_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'grid or object to TOBE DataSet 변환'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_con2',style:'',type:'button','ev:onclick':'scwin.btn_con2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'asis server debug to TOBE DataSet 변환'}]}]}]}]}]}]}]}]}]})