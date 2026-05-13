/*amd /ui/ps/rc/sales/cstmrmgnt/rc_120_n1_n08b.xml 20321 f9837d59147a17e68845fb95092949999a7e9ffcde86f6283ab6717b99a6108c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'smsCd',name:'SMS코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentcarSmsClssCd',name:'분류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'smsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentcarSmsClssCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranTmplCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgLen',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name11',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.rc.sales.RetrieveRentACarSMSMsgListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/ps.rc.sales.SaveRentACarSMSMsgCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // 조회전에는 아래 행추가, 삭제, 취소 버튼 작동 안해야됨
  scwin.bottomBtnDisable = "N";
  lux_rentcarSmsClssCd.setSelectedIndex(0);
  ed_smsCd.focus();
};

//-------------------------------------------------------------------------
// 조회조건 상태 설정;
//-------------------------------------------------------------------------
// scwin.f_SeachConditionCreate = function(){
//    var GAUCE_DATASET_HEADER = "smsCd:STRING,rentcarSmsClssCd:STRING";   //코드, 분류코
//    ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//  }

//-------------------------------------------------------------------------
// 조회;
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  //    ds_search.removeAll(); // ds_search.ClearData();
  ds_search.insertRow; // ds_search.addrow();
  ds_search.set("smsCd", ed_smsCd.getValue());
  ds_search.set("rentcarSmsClssCd", lux_rentcarSmsClssCd.getValue());
  //ds_search.NameValue(1, "useYn")            = 1;
  $c.sbm.execute($p, sbm_retrieve); // tr_retrieve.post();
};

//-------------------------------------------------------------------------
// 조건필드 클리어;
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_smsCd.focus();
};

//-------------------------------------------------------------------------
// 엑셀;
//-------------------------------------------------------------------------
scwin.f_Excel = async function (arg) {
  if (ds_master.getTotalRow() == 0) return;
  //    cfGridToExcel(grd_master, "SMS메시지코드관리", "SMS메시지코드.xls", 4+8+16); 
  const grdObj = grd_master; // 그리드 id
  const infoArr = [];
  const options = {
    fileName: "SMS메시지코드",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "SMS메시지코드관리",
    columnMove: true
  };
  await $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
scwin.f_Save = function () {
  if (!ds_master.getModifiedIndex().length) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  for (var i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getCellData(i, "smsCd") == "") {
      $c.win.alert($p, "SMS코드를 입력하십시오.");
      grd_master.setFocusedCell(i, "smsCd", true); // grd_master.SetColumn("smsCd"); // to-do
      return;
    }
    if (ds_master.getCellData(i, "rentcarSmsClssCd") == "") {
      $c.win.alert($p, "SMS분류코드를 입력하십시오.");
      grd_master.setFocusedCell(i, "rentcarSmsClssNm", true);
      return;
    }
    if (ds_master.getCellData(i, "msgNm") == "") {
      $c.win.alert($p, "메시지를 입력하십시오.");
      grd_master.setFocusedCell(i, "msgNm", true);
      return;
    }
  }

  //    tr_Save.post();
  $c.sbm.execute($p, sbm_Save);
};

// to-do
//-------------------------------------------------------------------------
// SMS byte 계산 ;
//-------------------------------------------------------------------------  
scwin.calc_msgLen = function (message) {
  var nbytes = 0;
  for (i = 0; i < message.length; i++) {
    var ch = message.charAt(i);
    if (escape(ch).length > 4) {
      nbytes += 2;
    } else if (ch != "\r") {
      nbytes++;
    }
  }
  return nbytes;
};
scwin.f_rowAdd = function () {
  if (scwin.bottomBtnDisable == "Y") {
    ds_master.insertRow();
    let newRow = ds_master.getTotalRow();
    ds_master.setCellData(newRow - 1, 'useYn', "1");
    grd_master.setFocusedCell(newRow - 1, "modDtm", false);
  }
};
scwin.rowDelFn = function () {
  if (scwin.bottomBtnDisable == "Y") {
    let rowSelected = ds_master.rowPosition;
    ds_master.deleteRow(rowSelected);
    if (ds_master.getRowStatusValue(rowSelected) == 4) {
      ds_master.removeRow(rowSelected);
    }
  }
};
scwin.btnCancel = function () {
  if (scwin.bottomBtnDisable == "Y") {
    ds_master.undoRow(ds_master.rowPosition);
  }
};
scwin.sbm_Save_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_retrieve();
};
scwin.sbm_retrieve_submitdone = function (e) {
  let totalRow = grd_master.getTotalRow();
  if (totalRow == 0) {
    $c.gus.cfAlertMsg($p, "[SMS메시지코드관리] " + MSG_CM_ERR_003);
  }
  totalRows.setValue(totalRow);
  scwin.bottomBtnDisable = "Y";
};

// pop up 완료후 처리
// for=grd_master event=OnExit(row,colid,olddata)
//    if (colid == "msgNm") 
//    {
//    	if (ds_master.NameValue(row, colid) != olddata) 
//    	{
//    	     ds_master.NameValue(row, "msgLen") = calc_msgLen(ds_master.NameValue(row, colid)) ;
//    	}
//    }

// SMS 코드 input 숫자 + 대문자 영어
scwin.ed_smsCd_onkeyup = function (e) {
  var comp = $p.getComponentById("ed_smsCd");
  var v = comp.getValue() || "";
  v = v.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (v.length > 2) v = v.substring(0, 2);
  if (comp.getValue() !== v) comp.setValue(v);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SMS분류코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',id:'lux_rentcarSmsClssCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.rentcarSmsClssCd',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예약'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예약취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회원가입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'온라인정비요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여견적등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'범칙금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계_관리채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류대금청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'면책금 청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량탁송 요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량탁송 완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기예약확인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기반납요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수하물발송 확인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전세버스요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류입고요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카정비마감안내'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'19'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SMS코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_smsCd',style:'width: 80px;',ref:'data:ds_search.smsCd',maxlength:'2','ev:onkeyup':'scwin.ed_smsCd_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' SMS메시지코드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'grd_master',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'grd_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',sortable:'false',readOnly:'true',fixedColumnLineDiv:'0',fixedColumnNoMove:'false',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'코드',width:'70',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'분류코드',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'전송</br>방식',width:'70',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'템플릿',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'메시지',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'Bytes',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'등록자ID',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'등록일',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'수정자ID',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'수정일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'사용여부',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'smsCd',inputType:'text',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentcarSmsClssCd',inputType:'select',width:'100',textAlign:'left',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예약'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예약취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회원가입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'온라인정비요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장기대여견적등록'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'채권관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'범칙금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계_관리채권'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FMS유류대금청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'면책금 청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량탁송 요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량탁송 완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'단기예약확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'14'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'단기반납요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수하물발송 확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'16'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전세버스요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'17'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FMS유류입고요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'18'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카정비마감안내'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'19'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgClsCd',inputType:'select',width:'70',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SMS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'알림톡'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'tranTmplCd',inputType:'text',width:'80',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgNm',inputType:'text',width:'150',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgLen',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modDtm',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'useYn',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_rowAdd',rowAddObjType:'ctrlBtn',delObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowDelFunction:'scwin.rowDelFn',gridID:'grd_master',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelUserAuth:'D',btnCancelObj:'scwin.btnCancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})