/*amd /ui/cm/bc/sealmgnt/zz_914_01_01b.xml 24817 6d654dc8437014722f3daa3fa2d4e8f81ed159b1156c6ff415fcca498d421339 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sealOwner',name:'소유회사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealOwnerNm',name:'소유회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKind',name:'sealKind',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKindNm',name:'인장종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealStDt',name:'적용시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealEndDt',name:'적용종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalYn',name:'finalYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImg',name:'이미지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prgmId',name:'프로그램',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prgmNm',name:'적용프로그램',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'인장등록여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sealStDt',name:'적용시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealEndDt',name:'적용종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SrchInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sealOwner',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealKind',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prgmNm',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SrchInfo2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sealOwner',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealKind',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.sealmgnt.RetrieveRegistedSealListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SrchInfo","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve2',action:'/cm.bc.sealmgnt.RetrieveSealHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SrchInfo2","key":"IN_DS1"},{"id":"ds_out2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인장현황
 * 메뉴경로 : 공통/총무업무/인장관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/sealmgnt/zz_914_01_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-06
 * 수정이력  :
 *    - 2025-11-06      정승혜    최초작성
 *    - 2026-03-18      정승혜    기타수정
 * 메모 : 
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// Dataset DEBUG                                                                                                                                                                                                                                                                                                          
//-------------------------------------------------------------------------   
scwin.dataSetDebug = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : Onload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ945",
    compID: "lc_sealKind"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_setDtheader_results();
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  lc_sealKind.setValue(0);
  ed_sealOwner.setValue("240046");
  ed_txt_sealOwner.setValue("동원로엑스(주)");
};

//-------------------------------------------------------------------------
// function name : f_setDtheader_results
// function desc : 조회조건 header Setting
//-------------------------------------------------------------------------
scwin.f_setDtheader_results = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// 그리드 : 행추가                                                                                                                                                                                                                                                                                                        
//-------------------------------------------------------------------------    
scwin.f_AddRow = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------
// function name : f_Close
// function desc : UnLoad
//-------------------------------------------------------------------------
scwin.f_Close = function () {};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회 필드 Clear(휴지통)
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// function name : f_chkOpenCommonPopUp
// function desc : 거래처 정보조회  chkField
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function () {
  //udc
};

//-------------------------------------------------------------------------
// function name : f_vendorCoNoPopUp
// function desc : 벤더사정보  조회 팝업
//-------------------------------------------------------------------------
scwin.udc_clntInfo_onclickEvent = function (e) {
  scwin.f_vendorCoNoPopUp(1, ed_sealOwner.getValue(), ed_txt_sealOwner.getValue(), 'F', 'T');
};
scwin.udc_clntInfo_onblurCodeEvent = function (e) {
  if (ed_sealOwner.getValue() != "") {
    ed_txt_sealOwner;
    scwin.f_vendorCoNoPopUp(1, ed_sealOwner.getValue(), ed_txt_sealOwner.getValue(), 'T', 'T');
  } else {
    ed_txt_sealOwner.setValue("");
  }
};
scwin.f_vendorCoNoPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  switch (disGubun) {
    case 1:
      //거래처
      let condition = "";
      udc_clntInfo.cfCommonPopUp(scwin.udc_clntInfo_callBackFunc, pCode, pName, pClose, null, "거래처코드,거래처 명", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    default:
      break;
  }
};
scwin.useYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "N");
};
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  gr_SrchInfo.setFocusedCell(0, "sealOwner", false);
  if (ds_out.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_003, "조회결과"));
  } else {
    var cnt = 0;
    var sealOwner = "";
    var sealKind = "";
    for (var i = 0; i < ds_out.getRowCount(); i++) {
      if (ds_out.getCellData(i, "sealOwner") != sealOwner || ds_out.getCellData(i, "sealKind") != sealKind) {
        cnt++;
        sealOwner = ds_out.getCellData(i, "sealOwner");
        sealKind = ds_out.getCellData(i, "sealKind");
      }
    }
    totalRows.setValue(cnt);
  }
};
scwin.sbm_tr_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_out2.getRowCount());
  gr_SrchInfo2.setFocusedCell(0, "sealStDt", false);
};
scwin.udc_clntInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_sealOwner.setValue(rtnList[0]);
    ed_txt_sealOwner.setValue(rtnList[1]);
  }
};
scwin.gr_SrchInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "sealImg") {
    if (ds_out.getCellData(rowIndex, "cnt") == "0") {
      $c.win.alert($p, "등록된 인장이 없습니다");
      return;
    } else {
      //적용종료된 인장의 이미지는 누구도 볼 수 없도록(금필환팀장 요청)
      if (ds_out.getCellData(ds_out.getRowPosition(), "sealEndDt") < scwin.strCurDate) {
        $c.win.alert($p, "적용 종료된 인장은 미리보기 할 수 없습니다. IT팀에 요청하세요.");
        return;
      }
      let data = {
        argPath: "",
        dialSize: "",
        sealOwner: ds_out.getCellData(rowIndex, "sealOwner"),
        sealOwnerNm: ds_out.getCellData(rowIndex, "sealOwnerNm"),
        sealKind: ds_out.getCellData(rowIndex, "sealKind"),
        sealKindNm: ds_out.getCellData(rowIndex, "sealKindNm"),
        sealStDt: ds_out.getCellData(rowIndex, "sealStDt")
      };
      let opt = {};
      opt.width = "350";
      opt.height = "400";
      opt.modal = true;
      opt.title = "title";
      opt.id = "popup";
      opt.popupName = "인장이미지보기";
      $c.win.openPopup($p, "/ui/cm/bc/sealmgnt/zz_914_01_00p.xml", opt, data);
    }
  }
};
scwin.gr_SrchInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  dma_SrchInfo2.set("sealOwner", ds_out.getCellData(rowIndex, "sealOwner"));
  dma_SrchInfo2.set("sealKind", ds_out.getCellData(rowIndex, "sealKind"));
  $c.sbm.execute($p, sbm_tr_retrieve2);
};

// 엑셀다운 1+8+16
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "인장사용현황.xlsx",
    sheetName: "인장사용현황",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_SrchInfo, options);
};
scwin.cfGridToExcel2 = function () {
  const options = {
    fileName: "인장사용현황.xlsx",
    sheetName: "인장사용현황",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_SrchInfo2, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유회사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sealOwner',nameId:'ed_txt_sealOwner',popupID:'',popupTitle:'',selectID:'retrieveClntInfo',style:'',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9',refDataCollection:'dma_SrchInfo',code:'sealOwner',id:'udc_clntInfo','ev:onclickEvent':'scwin.udc_clntInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인장종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sealKind',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_SrchInfo.sealKind',visibleRowNum:'15',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w80',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_comUseYn',style:'',submenuSize:'auto',ref:'data:dma_SrchInfo.useYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용화면명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_prgmNm',style:'',objType:'data',ref:'data:dma_SrchInfo.prgmNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인장사용현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_SrchInfo',gridDownFn:'scwin.cfGridToExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_SrchInfo',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_SrchInfo_oncellclick',readOnly:'true','ev:oncelldblclick':'scwin.gr_SrchInfo_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'소유회사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'소유회사명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'sealKind',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'인장종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'적용시작',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'적용종료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'finalYn',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'사용',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'등록일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'이미지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'프로그램',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'적용프로그램',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'인장등록여부',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sealOwner',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'sealOwnerNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealOwnerNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealKind',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealKindNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',upperColumn:'sealOwnerNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealStDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealEndDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'finalYn',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:'',value:'',width:'70',displayFormatter:'scwin.useYnDisplayFm',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealImg',inputType:'text',style:';color:;',value:'',width:'100',class:'underline',colMerge:'true',upperColumn:'sealKindNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prgmId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prgmNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'',width:'150',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인장 History ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_SrchInfo2',gridDownFn:'scwin.cfGridToExcel2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out2',id:'gr_SrchInfo2',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용시작',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'적용종료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'등록일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'비고',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sealStDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealEndDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})