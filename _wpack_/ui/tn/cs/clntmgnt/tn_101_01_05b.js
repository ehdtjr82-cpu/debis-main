/*amd /ui/tn/cs/clntmgnt/tn_101_01_05b.xml 20402 6d07c2ba6ceb921bd2cb84bf6abf19c0e920a520da9d66ec05f78ac2147d656e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래;처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntClsNm',name:'거래처;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자;(주민)번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'직원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersPstNm',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'유선전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'무선전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'FAX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'E-mail',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'사업장주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchsCls',name:'매입;매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDelYn',name:'사용;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'거래처;직원부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNo',name:'담당자;사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbrId',name:'회원ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regStDt',name:'등록기간 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regEndDt',name:'등록기간종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mbrId',name:'회원ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDelYn',name:'거래처삭제여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.clntmgnt.RetrieveClntRegPrsCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//------------------------------------------------------------------
//1. 조회, 입력/저장, 수정, 삭제, CLEAR Operation 명칭 통일
//   -. F1:조회 : f_retrieve()
//   -. F2:입력/저장 : f()
//   -. F3:수정 : f_Update()
//   -. F4:삭제 : f_Delete()
//   -. F5:CLEAR : f_Clear()
//-------------------------------------------------------------------

//-------------------------------------------------------------------------
// 추후 수정 사항
// tn_101_01_06 화면 미개발로 인한 추후 연결 (현재 pub폴더로 오픈)
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.txt_customerLupCond = "";
scwin.txt_countRow = "";
scwin.currentClntNo = "";
scwin.nowDt = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.prevDate = WebSquare.date.dateAdd(scwin.nowDt, -7);
scwin.prevRow = 0;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.udcOnComplete();
};
scwin.udcOnComplete = function () {
  udc_regDt.setInitDate(scwin.prevDate, scwin.nowDt);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_regStDt, ica_regEndDt]))) {
    return false;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_regStDt.getValue(), ica_regEndDt.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ica_regStDt.focus();
    return;
  }
  dma_search.set("clntNm", "");
  dma_search.set("clntNo", "");
  dma_search.set("crn", "");
  switch (lc_customerLupCond.getValue()) {
    case "0":
      //거래처명
      dma_search.set("clntNm", ed_qryCond.getValue());
      break;
    case "1":
      //거래처번호
      dma_search.set("clntNo", ed_qryCond.getValue());
      break;
    case "2":
      //사업자번호
      dma_search.set("crn", ed_qryCond.getValue());
      break;
  }
  dma_search.set("regStDt", ica_regStDt.getValue());
  dma_search.set("regEndDt", ica_regEndDt.getValue());
  if (cbx_clntDelYn.getValue() == "1") {
    //집계표 체크박스 
    dma_search.set("clntDelYn", "1");
  } else {
    dma_search.set("clntDelYn", "0");
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 상세 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Detail_onclick = function (e) {
  scwin.f_openClntPopup("retrieve");
};

//-------------------------------------------------------------------------
// 신규 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_clear_onclick = function (e) {
  scwin.f_openClntPopup("new");
};

//-------------------------------------------------------------------------
// 복사 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_copy_onclick = function (e) {
  scwin.f_openClntPopup("copy");
};

//-------------------------------------------------------------------------
// 수정 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_update_onclick = function (e) {
  scwin.f_openClntPopup("update");
};

//-------------------------------------------------------------------------
// 거래처등록 PopUp
//-------------------------------------------------------------------------
scwin.f_openClntPopup = async function (str) {
  const checkTrue = ["copy", "retrieve", "update"].includes(str);
  if (checkTrue && ds_master.getRowPosition() == null) {
    $c.win.alert($p, "선택된 거래처가 없습니다.");
    return;
  }
  if (str == "copy") {
    if (ds_master.getCellData(ds_master.getRowPosition(), "clntNo") > "999900") {
      $c.win.alert($p, "해당거래처는 복사를 할 수 없습니다.");
      return;
    }
  }

  // 팝업으로 보낼 파라미터
  let paramObj = {};
  if (checkTrue) {
    paramObj.clntNo = ds_master.getCellData(ds_master.getRowPosition(), "clntNo");
    // return;
  }
  paramObj.mode = str;
  paramObj.mbrId = ds_master.getCellData(ds_master.getRowPosition(), "mbrId");
  console.log(paramObj);
  // 팝업 옵션 설정
  options = {
    id: "taxPop",
    type: "browserPopup",
    popupName: "거래처등록",
    width: 1080,
    height: 700
  };
  let rtnList = await $c.win.openPopup($p, "/ui/tn/cs/clntmgnt/tn_101_01_06b.xml", options, paramObj);
  if (rtnList == null || rtnList.clntNo == null) {
    return;
  }
  scwin.currentClntNo = rtnList.clntNo;
  scwin.btn_retrieve_onclick();
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (scwin.currentClntNo == null) {
      ds_master.setRowPosition(0);
    } else {
      let row = ds_master.getMatchedIndex("clntNo", scwin.currentClntNo);
      ds_master.setRowPosition(row);
    }
  }
  spa_totalRows.setValue(rowCnt);
  for (i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getCellData(i, "clntBusiClsCd") == "1") {
      gr_master.setColumnDisplayFormat("crn", "###-##-#####");
    } else if (ds_master.getCellData(i, "clntBusiClsCd") == "2") {
      gr_master.setColumnDisplayFormat("crn", "###-##-#####");
    } else {
      gr_master.setColumnDisplayFormat("crn", "######-#######");
    }
  }
  gr_master.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 그리드 더블 클릭시
//-------------------------------------------------------------------------
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.f_openClntPopup("retrieve");
  }
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_regDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_regStDt',edToId:'ica_regEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'Data',objTypeFrom:'Data',titleFrom:'등록기간 시작일자',titleTo:'등록기간 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_customerLupCond',style:'width:120px;',submenuSize:'auto',ref:'','ev:onviewchange':'scwin.lc_customerLupCond_onViewChange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자등록번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_qryCond',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미사용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_clntDelYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',grdDownOpts:'{"fileName":"거래처등록현황.xlsx", "sheetName": "거래처등록현황"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',cellStatusVisible:'true','ev:onaftercolumnmove':'scwin.gr_master_onaftercolumnmove',columnMove:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',focusMode:'cell',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처<br/>번호',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처<br/>구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'사업자<br/>(주민)번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거래처직원',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'사업장주소',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'매입<br/>매출',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'사용<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'거래처<br/>직원부서',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'담당자<br/>사번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'담당자명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'회원ID',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column49',value:'직원명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'직위',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'유선전화',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'무선전화',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'FAX',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'E-mail',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersPstNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntTelNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMpNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntFaxNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntEmail',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'addr',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchsCls',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'clntDelYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntDeptNm',displayMode:'label',textAlign:'left',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomPicEmpNo',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'empNm',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mbrId',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Detail',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_clear',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]}]}]}]}]}]}]}]})