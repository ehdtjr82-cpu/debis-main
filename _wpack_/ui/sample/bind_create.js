/*amd /ui/sample/bind_create.xml 12187 20fb3dc57e752ca717422602bfac5123cb20eb272676c9459fd7bbdddc211a4b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList3'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList4'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'code',name:'code',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hiddenMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hdoIdx',name:'hdoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bhoIdx',name:'bhoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offIdx',name:'offIdx',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_test1',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dataList2","key":"OUT_DS1"}',target:'data:json,{"id":"dataList2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_test1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_test2',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dataList3","key":"OUT_DS1"},{"id":"dataList4","key":"OUT_DS2"}]',target:'data:json,[{"id":"dataList3","key":"OUT_DS1"},{"id":"dataList4","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_test2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/sample/bind_create.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pgmId = "ez_202_01_01b.jsp";
scwin.onpageload = function () {
  let pAdvcdGrpCd = "20200115003";
  let pSeq = "1";
  sbm_test1.action = "/ac.fm.paymgnt.paymgnt.RetreiveAdvancedPaymentAttachFileListCMD.do?advcdGrpCd=" + pAdvcdGrpCd + "&seq=" + pSeq;
  $c.sbm.execute($p, sbm_test1);
  let pClntNo = "255321";
  let pSeq2 = "2";
  sbm_test2.action = "/ac.fi.electaxinvc.RetreiveElecTaxinvcClntInfoAttachFileListCMD.do?clntNo=" + pClntNo + "&seq=" + pSeq2;
  $c.sbm.execute($p, sbm_test2);
  const codeOptions = [{
    method: "getGridComboNcall",
    param1: "OP199",
    param2: 2,
    param3: "1",
    param4: true,
    compID: "lc_test1"
  }, {
    method: "getGridComboByUpperCdNcall",
    param1: "OP199",
    param2: "J",
    param3: true,
    compID: "lc_test2"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  $c.data.cfAutoPopUpRun($p, "810", "530", "1", "retrieveExpireContractCnt", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_52b.xml", $c.data.getMemInfo($p).userId);
  //계약변경팝업_아래꺼 사용할꺼임
  $c.data.cfAutoPopUpRun($p, "810", "530", "1", "retrieveExpireContractCnt", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_53b.xml", $c.data.getMemInfo($p).userId);

  //계약만료 알림
  WebSquare.cookie.setCookie("retrieveExpireContractCnt2", "false");
  $c.data.cfAutoPopUpRun($p, "810", "530", "1", "retrieveExpireContractCnt2", "/ui/cm/bc/rentloan/zz_900_01_09b.xml", $c.data.getMemInfo($p).userId);
};

//--------------------------------
// 변환 onclick
//--------------------------------
scwin.btn_con_onclick = function (e) {
  console.log(scwin.strCurDate);
  let xmlText = txa_asis.getValue();
  const bindObjects = scwin.extractObjectBlocks(xmlText).filter(obj => /classid\s*=\s*["']?<%=\s*DGauceCLSID\.BIND\s*%>["']?/i.test(obj));
  const outputs = [];
  for (const objXml of bindObjects) {
    const datasetId = scwin.extractParamValueLoose(objXml, "DataID"); // DataID 대소문자 무시

    console.log("[scwin.btn_con_onclick] datasetId: ", datasetId);
    if (!datasetId) {
      // datasetId 없으면 변환 불가 -> 그냥 스킵(원하면 throw로 바꿔도 됨)
      continue;
    }
    const bindInfoRaw = scwin.extractParamValueLoose(objXml, "BindInfo");
    console.log("[scwin.btn_con_onclick] bindInfoRaw: ", bindInfoRaw);
    if (!bindInfoRaw) continue;
    const cTags = scwin.extractCTags(bindInfoRaw);
    console.log("[scwin.btn_con_onclick] cTags: ", cTags);
    for (const cTag of cTags) {
      const col = scwin.extractAttrFromCTag(cTag, "Col");
      const ctrl = scwin.extractAttrFromCTag(cTag, "Ctrl");
      console.log("[scwin.btn_con_onclick] col: ", col);
      console.log("[scwin.btn_con_onclick] ctrl: ", ctrl);
      if (!col || !ctrl) continue;
      outputs.push(`${ctrl}.setRef("data:${datasetId}.${col}");`);
    }
  }
  console.log("[scwin.btn_con_onclick] outputs: ", outputs);
  txa_tobe.setValue(outputs.join("\n"));

  // 복사
  navigator.clipboard.writeText(txa_tobe.getValue()).then(() => {
    console.log('복사 완료');
  }).catch(err => {
    console.error('복사 실패', err);
  });
};

//--------------------------------
// <object ...>...</object> 블록 추출 (대소문자 무시)
//--------------------------------
scwin.extractObjectBlocks = function (xmlText) {
  const re = /<object\b[\s\S]*?<\/object>/gi;
  const out = [];
  let m;
  while ((m = re.exec(xmlText)) !== null) out.push(m[0]);
  return out;
};

//--------------------------------
// <param name=DataID value=ds_srchCond> 같은 형태를 다 받아주는 파서
// - name/value 모두 따옴표 유무 허용
// - value가 따옴표로 감싸진 멀티라인도 허용 (BindInfo 케이스)
//--------------------------------
scwin.extractParamValueLoose = function (objectXml, wantedName) {
  // <param ... name=... ... value=...> 를 name/value 기준으로 직접 찾는다.
  // value가 '...' / "..." 로 감싸져 있으면 내부에 >, <, 줄바꿈이 있어도 안전하게 캡처됨.
  const re = /<param\b[\s\S]*?\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))[\s\S]*?\bvalue\s*=\s*(?:"([\s\S]*?)"|'([\s\S]*?)'|([^\s>]+))/gi;
  let m;
  while ((m = re.exec(objectXml)) !== null) {
    const name = (m[1] ?? m[2] ?? m[3] ?? "").trim();
    if (!name || name.toLowerCase() !== wantedName.toLowerCase()) continue;
    const value = (m[4] ?? m[5] ?? m[6] ?? "").trim();
    return value;
  }
  return "";
};

//--------------------------------
// <param ...> 같은 단일 태그 문자열에서 attr 추출 (따옴표/무따옴표 모두)
//--------------------------------
scwin.extractAttrLooseFromTag = function (tagXml, attrName) {
  // 1) "..." 2) '...' 3) 무따옴표(공백/ > 전까지)
  // 단, BindInfo는 value=' ... ' 처럼 멀티라인이므로 '...' / "..."를 우선으로 잡는다.
  const quotedRe = new RegExp(`\\b${attrName}\\s*=\\s*(?:"([\\s\\S]*?)"|'([\\s\\S]*?)')`, "i");
  const qm = tagXml.match(quotedRe);
  if (qm) return (qm[1] ?? qm[2] ?? "").trim();
  const bareRe = new RegExp(`\\b${attrName}\\s*=\\s*([^\\s>]+)`, "i");
  const bm = tagXml.match(bareRe);
  if (bm) return (bm[1] ?? "").trim();
  return "";
};

//--------------------------------
// BindInfo 안에서 <C ...> ... </C> 조각들을 전부 추출
// - C 태그 대소문자 무시
// - 내부에 공백/줄바꿈 있어도 OK
//--------------------------------
scwin.extractCTags = function (bindInfoText) {
  const re = /<\s*c\b[\s\S]*?<\/\s*c\s*>/gi;
  const out = [];
  let m;
  while ((m = re.exec(bindInfoText)) !== null) out.push(m[0]);
  return out;
};

//--------------------------------
// <C> 내부에서 Col=... Ctrl=... 같은 속성 뽑기
// - Col="lobranCd" / Col=lobranCd / col='lobranCd' 모두 OK
//--------------------------------
scwin.extractAttrFromCTag = function (cTagXml, attrName) {
  // C 태그는 "속성"이 아니라 텍스트 형태로 들어있는 경우가 많아서
  // 그냥 전체 문자열에서 attrName=... 패턴을 찾는다.
  const re = new RegExp(`\\b${attrName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`, "i");
  const m = cTagXml.match(re);
  return (m?.[1] ?? m?.[2] ?? m?.[3] ?? "").trim();
};
scwin.sbm_test1_submitdone = function (e) {
  console.log("[sbm_test1_submitdone] : ", e);
};
scwin.sbm_test2_submitdone = function (e) {
  console.log("[sbm_test2_submitdone] : ", e);
};

// commonCombo UDC carType일 시 callback 함수
scwin.f_vehclNrm = function (value) {
  console.log("[bind_create f_vehclNrm] value: ", value);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_commonCombo',type:'page',variableClone:'',src:'/cm/udc/commonCombo.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'ss',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'AS-IS',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_asis',style:'width:1000px; height: 400px',tabIndex:'1'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'TO-BE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{id:'txa_tobe',style:'width:1000px; height: 400px',tabIndex:'2'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_con',style:'',type:'button','ev:onclick':'scwin.btn_con_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변환'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_tst',style:'',type:'button','ev:onclick':'scwin.btn_tst_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'test'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_functionYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'','ev:onchange':'','ev:onviewchange':'',tabIndex:'3'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금액계산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_test1',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start'}},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_test2',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start'}},{T:1,N:'w2:udc_commonCombo',A:{style:'width:%; height:px; ',cond:'HOFC',code:'code',refDataCollection:'ds_search',refHiddenDataCollection:'ds_hiddenMap'}},{T:1,N:'w2:udc_commonCombo',A:{style:'width:%; height:px; ',cond:'carType',code:'',refDataCollection:'',refHiddenDataCollection:''}},{T:1,N:'w2:udc_commonCombo',A:{style:'width:%; height:px; ',cond:'fCost',code:'',refDataCollection:'',refHiddenDataCollection:'',cascadeTargetId:'uncollNypay'}},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'uncollNypay',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미지급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]})