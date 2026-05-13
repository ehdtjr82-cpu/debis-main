/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_29b.xml 20086 c936581ab5173351c4e1a3fc03614ecd2874e0c8ad30bc9b3386b6d1409eea5d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'shpCo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'line',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tpsz',name:'TP/SZ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'infull',name:'IN-FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dve',name:'DVE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sou',name:'SOUND',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmg',name:'DAMAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rep',name:'REPO OUT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stu',name:'STU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outfull',name:'OUT-FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bok',name:'미반출 BOOKING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'off',name:'OFF HIRE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uni',name:'UNINSP',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inLineList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outLineList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveContainerInkoreaSummaryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_codeLineList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inLineList',target:'data:json,{"id":"ds_outLineList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_codeLineList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = "";
scwin.userClsCd = "";
scwin.loginClntNo = "";
scwin.loginClntNm = "";

//---------------------------------------------------
// PAGE LOAD;
//---------------------------------------------------
scwin.onpageload = function () {
  // 세션정보
  let memJson = $c.data.getMemInfo($p);
  scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") == null ? "" : $c.data.getMemInfo($p, "loUpperLobranCd"); // 점소
  scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd") == null ? "" : $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드(01:그룹사구분코드(01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객))
  scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "" : $c.data.getMemInfo($p, "clntNo"); // 거래처번호
  scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm"); // 거래처명
  console.log("### onpageload : " + JSON.stringify(memJson));
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  if (scwin.userClsCd != "01") {
    // 사용자가 협력업체 일때

    ed_shpCo.setValue(scwin.loginClntNo);
    txt_shpCoNm.setValue(scwin.loginClntNm);
    ed_shpCo.setDisabled(true);
    txt_shpCoNm.setDisabled(true);
    acb_lc_cndLineCd.focus();
    scwin.f_setLine();
  } else {
    ed_shpCo.focus();
    scwin.f_setLine();
  }
};

//-------------------------------------------------------------------------
// RETRIEVE;
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_shpCo]);
  if (!ret) {
    // 필수조건 : 선사
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_retrieve.getRowCount() == 0) {
      totalRows.setValue("0");
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      return;
    }
    totalRows.setValue(ds_retrieve.getRowCount());

    //  if(acb_wrkPlClsCd.getValue() == "G"){
    //     gr_workImplement.setColumnVisible("crryoutDt", true);
    //     gr_workImplement.setColumnVisible("outTerm", true);
    // }else{
    //     gr_workImplement.setColumnVisible("crryoutDt", false);
    //     gr_workImplement.setColumnVisible("outTerm", false);
    // }
  }
};

//-------------------------------------------------------------------------
// 라인콤보 조회 
//-------------------------------------------------------------------------
scwin.f_setLine = function () {
  dma_inLineList.set("sysCd", "LineEBC");
  dma_inLineList.set("queryId", "retrieveLineEachShpCoCdCombo");
  dma_inLineList.set("param1", scwin.loginClntNo);
  dma_inLineList.set("param2", scwin.userClsCd);
  dma_inLineList.set("param3", ed_shpCo.getValue());
  $c.sbm.execute($p, sbm_codeLineList);
};
scwin.sbm_codeLineList_submitdone = function (e) {
  acb_lc_cndLineCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// UDC 호출
//-------------------------------------------------------------------------
scwin.udc_shpCo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(ed_shpCo, ed_shpCo, txt_shpCoNm, 3);
};
scwin.udc_shpCo_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(txt_shpCoNm, ed_shpCo, 3);
};
scwin.udc_shpCo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, "", "", 'F', 'F');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
  var pCode = "";
  var pName = "";

  // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  // if(inObj.ReadOnly || !inObj.Enable || (inObj.getValue() == chkObj.value)) {
  // 	scwin.f_setLine();
  //     return;
  // }

  if (txtObj != null) {
    txtObj.value = "";
    txtObj.hidVal = "";
  }
  pCode = inObj.getValue().replace(/^\s*/, '');

  // 값이 입력이 안된 경우  팝업을 실행하지 않음.
  if (pCode == "" || pCode == null) {
    inObj.setValue("");
    chkObj.value = "";
    if (disGubun == 3) {
      scwin.f_setLine();
    }
    return;
  }
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};
scwin.udc_shpCo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_shpCo.setValue(rtnList[0]);
    txt_shpCoNm.setValue(rtnList[1]);
    scwin.f_setLine();
  } else {
    ed_shpCo.setValue("");
    txt_shpCoNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// TEXT BOX 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun) {
  var pCode = "";
  var pName = "";
  if (inObj.getValue().trim() == "") {
    codeObj.setValue("");
    if (disGubun == 3) {
      scwin.f_setLine();
    }
    return;
  }

  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음. // inObj.value.trim() == "" || 
  if (inObj.getReadOnly() || inObj.getValue() == inObj.hidVal) return;
  if (codeObj != null) {
    if (codeObj.tagName == "OBJECT") {
      codeObj.setValue("");
    } else {
      codeObj.setValue("");
      codeObj.hidVal = "";
    }
  }
  pName = inObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 3:
      // 선사 팝업
      udc_shpCo.setSelectId('retrieveClntInfo');
      udc_shpCo.cfCommonPopUp(scwin.udc_shpCo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , 'SHP' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  if (scwin.userClsCd != "01") {
    //사용자가 협력업체 일때
    ed_shpCo.setValue(scwin.loginClntNo);
    txt_shpCoNm.setValue(scwin.loginClntNm);
    acb_lc_cndLineCd.focus();
    scwin.f_setLine();
  } else {
    ed_shpCo.focus();
    scwin.f_setLine();
  }
};

//-------------------------------------------------------------------------
// OZ 리포트  발행
//-------------------------------------------------------------------------
scwin.f_ozReport = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_shpCo]);
  if (!ret) {
    // 필수조건 : 선사
    return;
  }

  // var sumChk;
  // if (cbx_summaryCheck.getSelectedIndex() != "") {
  //     sumChk = "T";
  // } else {
  //     sumChk = "F";
  // }

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("op_303_03_08r");

  // odiParam.add("shpCo", ed_shpCo.getValue());
  // odiParam.add("line", acb_lc_cndLineCd.getValue());
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.useprogressbar","false");

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/wrkrslts/stockrslts/op_303_03_08r.ozr", odiParam, viewerParam, formParam);
};
scwin.excelDown = async function (gubun) {
  var fileName = "Container in Korea List Summary";
  if (ds_retrieve.getRowCount() != 0) {
    let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (confirm) {
      await $c.data.downloadGridViewExcel($p, gr_workImplement, {
        fileName: fileName + ".xlsx",
        sheetName: fileName
      });
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_shpCo',nameId:'txt_shpCoNm',btnId:'btn_shpCo',id:'udc_shpCo',refDataCollection:'dma_condition',code:'shpCo','ev:onblurCodeEvent':'scwin.udc_shpCo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_shpCo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_shpCo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cndLineCd',search:'start',style:'width:250px;',submenuSize:'auto',ref:'data:dma_condition.line',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_outLineList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Container in KOREA List 집계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_workImplement',id:'udc_topGrd',gridDownFn:'scwin.excelDown',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_workImplement',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'지역',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'TP/SZ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'IN-FULL',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'DVE',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'SOUND',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'DAMAGE',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'REPO<br/>OUT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'STU',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'OUT-FULL',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'미반출<br/>BOOKING',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'OFF<br/>HIRE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'UNINSP',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'text',width:'120',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tpsz',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'infull',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dve',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sou',inputType:'text',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmg',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rep',inputType:'text',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stu',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outfull',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bok',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'off',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'uni',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})