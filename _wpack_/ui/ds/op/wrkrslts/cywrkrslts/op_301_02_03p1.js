/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_03p1.xml 14882 8810ee09864986aa049f8b490b43f6ad9a2a555b48428eecb5a212b4be6f4312 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_popup'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'GAUCE',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_popup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회 중','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.paramTitle;
scwin.pKind1;
scwin.pKind1Grp;
scwin.pKind2;
scwin.pKind2Grp;
scwin.arrRtnVal = new Array(); // Return Value
scwin.arrOptCnd = new Array("", "", "", "", "", "", "", "", "", ""); // Where절의 추가 조건

scwin.strTitleCd = ""; // 코드 Value
scwin.strTitleNm = ""; // Name Value
scwin.strQueryId = ""; // XML SELECT ID
scwin.iDispCnt = ""; // Grid 항목개수
scwin.strOnCloseTF = ""; // Result건수 1건일경우 AutoClose 여부
scwin.strExistTF = ""; // 중복체크 여부
scwin.strAllSearchTF = ""; // 전체검색 허용 여부
scwin.nLenCD = ""; // 입력코드Length
scwin.nLenNM = ""; // 입력명Length

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  console.log("### scwin.params : " + JSON.stringify(scwin.params));

  // B/L코드 | B/L 코드 / Booking No | Booking 코드
  scwin.strTitleCd = scwin.params.arrParm[0][1]; // 코드 Value
  // scwin.strTitleNm = scwin.params.arrParm[0][2]; // Name Value
  scwin.strQueryId = scwin.params.arrParm[0][3]; // "retrieveBlNo" or "retrieveBookingNo"
  scwin.strOnCloseTF = scwin.params.arrParm[0][4]; // 결과가 1건일 경우 AutoClose 여부
  scwin.iDispCnt = scwin.params.arrParm[0][5]; // Grid 항목개수
  scwin.strExistTF = scwin.params.arrParm[0][6]; // 중복체크 여부
  scwin.strAllSearchTF = scwin.params.arrParm[0][7]; // 전체검색 허용 여부
  scwin.nLenCD = scwin.params.arrParm[0][8]; // 코드 입력 자리수 제한 길이
  scwin.nLenNM = scwin.params.arrParm[0][9]; // 명명 입력 자리수 제한 길이

  ed_kind.setValue(scwin.params.arrParm[1][0]); // B/L or BooKing No 코드 세팅
  ed_txt_kind.setValue(scwin.strTitleCd);

  // 칼럼 name,width setting
  for (var i = 0; i < scwin.params.arrParm[2].length; i++) {
    gr_popup.setHeaderValue("column" + (i + 1), scwin.params.arrParm[2][i]);
    gr_popup.setHeaderStyle("column" + (i + 1), "width", scwin.params.arrParm[3][i]);
    gr_popup.setHeaderStyle("column" + (i + 1), "text-align", scwin.params.arrParm[4][i]);
  }

  // 칼럼 hidden setting
  for (var i = 0; i < scwin.params.arrParm[5].length; i++) {
    gr_popup.setColumnVisible("col" + scwin.params.arrParm[5][i], false);
  }

  // 추가옵션 Where절
  if (scwin.params.arrParm[6] != null) {
    for (var i = 0; i < scwin.params.arrParm[6].length; i++) {
      if (i > 5) {
        break;
      }
      scwin.arrOptCnd[i] = scwin.params.arrParm[6][i];
    }
  }

  // 파라메터1 : DataSet
  // 파라메터2 : 0:다른화면에서 호출했을경우, 1:Self화면에서 요청 
  scwin.f_Retrieve(scwin.params.arrParm[7], "0");
};

//-------------------------------------------------------------------------
// 문자열 자리수 체크
//-------------------------------------------------------------------------
scwin.f_ByteLengthChk = async function (str1, str2) {
  if (scwin.strAllSearchTF == "T") {
    return true;
  }
  let len1 = $c.str.getByteLength($p, str1);
  let len2 = $c.str.getByteLength($p, str2);
  if (parseInt(scwin.nLenCD) && len1 > 0) {
    if (len1 < scwin.nLenCD) {
      await $c.win.alert($p, "검색어를 " + scwin.nLenCD + "자리 이상 입력 하세요.");
      ed_kind.focus();
      return false;
    }
  }
  if (len1 < 1 && len2 < 2) {
    await $c.win.alert($p, "검색어는\n\n숫자(문자)=> 1자\n한글=> 1자\n\n이상을 입력하세요.");
    ed_kind.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve("", "1");
};
scwin.f_Retrieve = async function (arg_ds, init_gb) {
  let lux_value1 = "";
  let lux_value2 = "";
  if (scwin.strAllSearchTF != "T") {
    if (ed_kind.getValue() == "") {
      await $c.win.alert($p, '전체검색이 허용되지 않았습니다.\n\n검색어를 입력하세요.');
      ed_kind.focus();
      return;
    }
  }
  if (!scwin.f_ByteLengthChk(ed_kind.getValue())) {
    ed_kind.focus();
    return;
  }
  if (init_gb == "0") {
    GAUCE.setJSON(arg_ds);
    totalRows.setValue(GAUCE.getRowCount());
    if (GAUCE.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      ed_kind.setValue("");
      ed_kind.focus();
      return;
    } else {
      GAUCE.setRowPosition(0);
      gr_popup.setFocusedCell(0, 0);
    }
  } else {
    ds_popup.set("sysCd", "CommonEBC");
    ds_popup.set("queryId", scwin.strQueryId);
    ds_popup.set("param1", ed_kind.getValue());
    ds_popup.set("param2", "");
    ds_popup.set("param3", scwin.arrOptCnd[0]);
    ds_popup.set("param4", scwin.arrOptCnd[1]);
    ds_popup.set("param5", scwin.arrOptCnd[2]);
    ds_popup.set("param6", scwin.arrOptCnd[3]);
    ds_popup.set("param7", scwin.arrOptCnd[4]);
    ds_popup.set("param8", scwin.arrOptCnd[5]);
    ds_popup.set("param9", lux_value1); // 검색조건의 코드,명 외의 구분코드 용으로 사용1
    ds_popup.set("param10", lux_value2); // 검색조건의 코드,명 외의 구분코드 용으로 사용2

    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  totalRows.setValue(GAUCE.getRowCount());
  if (scwin.strExistTF == "T") {
    $c.win.closePopup($p, GAUCE.getRowCount());
    return;
  } else {
    if (GAUCE.getRowCount() == 1 && scwin.strOnCloseTF == "T") {
      scwin.f_rtnValue(0);
    }
    if (GAUCE.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_kind.setValue("");
      ed_kind.focus();
      return;
    }
  }
  GAUCE.setRowPosition(0);
  gr_popup.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

//-------------------------------------------------------------------------
// Grid에서 선택된 Row의 Value
//-------------------------------------------------------------------------
scwin.gr_popup_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};

//-------------------------------------------------------------------------
// 조회조건에서 엔터키 입력 시
//-------------------------------------------------------------------------
scwin.ed_kind_onkeyup = function (e) {
  // 엔터키
  if (e.keyCode == 13) {
    scwin.f_Retrieve("", "1");
  }
};
scwin.f_rtnValue = function (row) {
  for (var i = 0; i < 10; i++) {
    scwin.arrRtnVal[i] = GAUCE.getCellData(row, "col" + (i + 1));
  }
  $c.win.closePopup($p, scwin.arrRtnVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_txt_kind',label:'B/L코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',id:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_kind',placeholder:'',style:'width: 150px;','ev:onkeyup':'scwin.ed_kind_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:GAUCE',focusMode:'row',id:'gr_popup',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',width:'200',value:'B/L 코드'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})