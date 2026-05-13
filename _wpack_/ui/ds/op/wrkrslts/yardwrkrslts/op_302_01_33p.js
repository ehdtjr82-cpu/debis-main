/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_33p.xml 24123 3440690513c8606573c80bf57671663f2da16f00f2e253af23f5c6772fedec47 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioCls',name:'입출고구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtFrom',name:'오더일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtTo',name:'오더일자To',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_storageOrder',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stockMcht',name:'재고화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveStorageOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_storageOrder","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_storageOrder","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.ioCls = ""; //입출고구분
scwin.wrkPlCd = ""; //작업장코드
scwin.wrkPlNm = ""; //작업장명
scwin.clntCd = ""; //거래처코드
scwin.clntNm = ""; //거래처명
scwin.expimpClsCd = ""; //수출입구분코드
scwin.commCd = ""; //품명코드
scwin.commNm = ""; //품명명
scwin.blNo = ""; //BL번호
scwin.odrDtFrom = ""; //오더일자From
scwin.odrDtTo = ""; //오더일자To

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var args = $p.getAllParameter().paramData.data;
  console.log("args=" + args);
  scwin.ioCls = args[0]; //입출고구분
  scwin.wrkPlCd = args[1]; //작업장코드    
  scwin.wrkPlNm = args[2]; //작업장명
  scwin.clntCd = args[3]; //거래처코드
  scwin.clntNm = args[4]; //거래처명
  scwin.expimpClsCd = args[5]; //수출입구분코드
  scwin.commCd = args[6]; //품명코드
  scwin.commNm = args[7]; //품명명
  scwin.blNo = args[8]; //BL번호
  scwin.odrDtFrom = args[9]; //오더일자From
  scwin.odrDtTo = args[10]; //오더일자To    
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ds_condition.set("ioCls", scwin.ioCls);
    ed_wrkPlCd.setValue(scwin.wrkPlCd);
    ed_wrkPlNm.setValue(scwin.wrkPlNm);
    ed_clntCd.setValue(scwin.clntCd);
    ed_clntNm.setValue(scwin.clntNm);
    lc_expimpClsCd.setValue(scwin.expimpClsCd);
    ed_odrDtFrom.setValue(scwin.odrDtFrom);
    ed_odrDtTo.setValue(scwin.odrDtTo);
    ed_blNo.setValue(scwin.blNo);
    ed_commCd.setValue(scwin.commCd);
    ed_commNm.setValue(scwin.commNm);

    //테스트데이터
    // ed_wrkPlCd.setValue("6W3");
    // ed_wrkPlNm.setValue("울산3부두야적장창고");
    // ed_clntCd.setValue("102644");
    // ed_clntNm.setValue("보령축협배합사료공장");        

    scwin.f_gridFormatChange(scwin.ioCls);
    scwin.f_Retrieve();
    //gr_storageOrder.focus();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 그리드 타이틀 및 헤더명 변경
//-------------------------------------------------------------------------
scwin.f_gridFormatChange = function (argGubun) {
  if (argGubun == "I") {
    // 입고
    tbx_subTitle.setValue("오더정보");
    gr_storageOrder.setHeaderValue("ordHd", "오더정보");
  } else if (argGubun == "O") {
    // 출고
    tbx_subTitle.setValue("재고정보");
    gr_storageOrder.setHeaderValue("ordHd", "재고정보");
  } else {
    $c.gus.cfAlertMsg($p, "입출고구분을 선택하십시오.");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_wrkPlCd, ed_clntCd, lc_expimpClsCd]); // 필수조건 : 작업장, 재고화주, 수출입구분
  if (!ret) {
    return;
  }
  if (ed_odrDtFrom.getValue() > ed_odrDtTo.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_odrDtTo.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 작업장            
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,6,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 화주 팝업
      udc_clntCd.setSelectId("retrieveClntInfo"); // XML상의 SELECT ID
      udc_clntCd.cfCommonPopUp(scwin.udc_clntCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , 'MCHT' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "F" // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 품명팝업            
      udc_commCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '3' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목/품명코드,품목/품명,구분' // Title순서
      , '105,190,70' // 보여주는 각 컬럼들의 폭
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는 컬럼 지정
      , ",,,A4" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "F" // 전체검색허용여부 ("F")
      , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'F');
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  ed_wrkPlCd.setValue(scwin.wrkPlCd);
  ed_wrkPlNm.setValue(scwin.wrkPlNm);
  ed_clntCd.setValue(scwin.clntCd);
  ed_clntNm.setValue(scwin.clntNm);
  lc_expimpClsCd.setValue(scwin.expimpClsCd);
  ed_odrDtFrom.setValue(scwin.odrDtFrom);
  ed_odrDtTo.setValue(scwin.odrDtTo);
  ed_blNo.setValue(scwin.blNo);
  ed_commCd.setValue(scwin.commCd);
  ed_commNm.setValue(scwin.commNm);
  ed_wrkPlCd.focus();
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  tbx_totalRows.setValue(ds_storageOrder.getRowCount());
  if (ds_storageOrder.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    gr_storageOrder.setFocusedCell(0, "stockMcht", false); //edit : true
  }
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.gr_storageOrder_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var rtnValues = new Array();
  rtnValues[0] = ds_storageOrder.getCellData(rowIndex, "odrNo"); //오더번호
  rtnValues[1] = ds_storageOrder.getCellData(rowIndex, "commSeq"); //오더품명순번
  rtnValues[2] = ds_storageOrder.getCellData(rowIndex, "odrWrkPathSeq"); //오더작업경로순번
  rtnValues[3] = ds_storageOrder.getCellData(rowIndex, "odrWrkStpSeq"); //오더작업단계순번

  $c.win.closePopup($p, rtnValues);
};

//-------------------------------------------------------------------------
// 작업장 UDC START
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'T', 'F');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};
scwin.udc_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};
//-------------------------------------------------------------------------
// 작업장 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화주 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntCd_onclickEvent = function (e) {
  scwin.f_openPopUp(2, ed_clntCd.getValue(), ed_clntNm.getValue(), 'T', 'F');
};
scwin.udc_clntCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntCd, ed_clntNm, 2);
};
scwin.udc_clntCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntCd, 2, false);
};
scwin.udc_clntCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntCd, ed_clntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명 UDC START
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openPopUp(3, ed_commCd.getValue(), ed_commNm.getValue(), 'T', 'F');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 3);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 3, false);
};
scwin.udc_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_commNm);
};
//-------------------------------------------------------------------------
// 품명 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',style:'',id:'udc_wrkPlCd',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',btnId:'btn_wrkPlCd',mandatoryCode:'true',validTitle:'작업장','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',refDataCollection:'ds_condition',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntCd',nameId:'ed_clntNm',popupID:'',selectID:'',style:'',maxlengthCode:'6',allowCharCode:'0-9',btnId:'btn_clntCd',id:'udc_clntCd',mandatoryCode:'true',validTitle:'화주','ev:onclickEvent':'scwin.udc_clntCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntCd_onviewchangeNameEvent',refDataCollection:'ds_condition',code:'clntCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보관오더생성기간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'odrDtFrom',refDataMap:'ds_condition',style:'',id:'udc_odrDt',refEdDt:'odrDtTo',edFromId:'ed_odrDtFrom',edToId:'ed_odrDtTo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_expimpClsCd',style:'',submenuSize:'auto',ref:'data:ds_condition.expimpClsCd',chooseOptionLabel:'$blank',displayMode:'value delim label',title:'수출입구분',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L NO',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_blNo',style:'',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_condition.blNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_commCd',nameId:'ed_commNm',popupID:'',selectID:'',style:'',UpperFlagCode:'1',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',id:'udc_commCd','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',code:'commCd',refDataCollection:'ds_condition'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_subTitle',label:'재고정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_storageOrder',id:'gr_storageOrder',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_storageOrder_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'재고화주',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'BL번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'품명코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'ordHd',value:'오더정보',displayMode:'label',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockMcht',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'comm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',displayFormat:'#,###,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',displayFormat:'#,###,###.##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})