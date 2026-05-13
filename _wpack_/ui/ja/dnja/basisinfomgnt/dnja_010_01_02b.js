/*amd /ui/ja/dnja/basisinfomgnt/dnja_010_01_02b.xml 28004 c5ac7d029233be31e2c7a93da66a300037859536a33344110344bc09c074fd59 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizTypCd',name:'업종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizTypCd',name:'업종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ton',name:'톤',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsLongAmt',name:'장축금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsSuperLongAmt',name:'초장축금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retrieveYn',name:'조회여부',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_eqNrmCd_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'EBC명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_eqNrmCd_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.basisinfomgnt.RetrieveContractTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.basisinfomgnt.SaveContractTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//자회사물류>공통>소속별계약요율관리
//조회조건 : 소속거래처 : 292366,291844 2건조회 (아무거나 조회후 하면 새로 등록 가능),292366

//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------  
scwin.retrieveYn = "notYet";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "JA010",
    compID: "acb_bizTypCd,gr_results:bizTypCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_eqCodeList("ds_eqNrmCd", "JA060", "");
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// function name : f_eqCodeList
// function desc : 장비코드 
//-------------------------------------------------------------------------  
scwin.f_eqCodeList = function (pCodeDataSet, pGrpCd, pUpperCd) {
  try {
    //장비코드 Luxe Combo
    let vUpperCode = pUpperCd.trim();
    const params = {
      sysCd: "EquipmentEBC",
      queryId: "retrieveEqCode",
      param1: pGrpCd,
      param2: vUpperCode
    };
    ds_eqNrmCd_condition.setJSON(params);
    $c.sbm.execute($p, sbm_eqNrmCd);
  } catch (e) {
    console.log("f_eqCodeList : " + e);
  }
};

//-------------------------------------------------------------------------
// 장비코드 콜백
//-------------------------------------------------------------------------
scwin.sbm_eqNrmCd_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_eqNrmCd.setJSON(e.responseJSON.GAUCE);
    }
  } catch (e) {
    console.log("sbm_eqNrmCd_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 행추가가
//-------------------------------------------------------------------------
scwin.f_addrow = async function () {
  try {
    if (scwin.retrieveYn == "notYet") {
      $c.win.alert($p, "조회를 해주십시오.");
      return false;
    }
    let row = $c.data.insertRow($p, $p.getComponentById("gr_results"));
    ds_results.setCellData(row, "sellAmt", 0);
    ds_results.setCellData(row, "pchsLongAmt", 0);
    ds_results.setCellData(row, "pchsSuperLongAmt", 0);
    ds_results.setRowPosition(row);
    $c.gus.cfGoPrevPosition($p, gr_results, row); //포커스이동
  } catch (e) {
    console.log("f_addrow : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleterow = async function () {
  try {
    if (ds_results.getRowCount() > 0) {
      //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
      if (ds_results.getRowStatus(ds_results.getRowPosition()) == "C") {
        ds_results.removeRow(ds_results.getRowPosition());
      } else {
        ds_results.deleteRow(ds_results.getRowPosition());
        $c.gus.cfGoPrevPosition($p, gr_results, ds_results.getRowPosition());
      }
    }
  } catch (e) {
    console.log("f_deleterow : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_undo = function () {
  if (ds_results.getRowStatus(ds_results.getRowPosition()) == "C") {
    ds_results.removeRow(ds_results.getRowPosition());
  } else {
    $c.data.undoRow($p, ds_results, "Y");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (ed_cnd_clntNo.getValue() == "") {
      await $c.win.alert($p, "소속거래처는 필수 입력항목 입니다.");
      ed_cnd_clntNo.focus();
      return false;
      ;
    }
    ds_results.setJSON([]);
    $c.sbm.execute($p, sbm_retrieve);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  scwin.retrieveYn = "yes";
  tbx_totalRows.setValue(ds_results.getRowCount());
  $c.gus.cfGoPrevPosition($p, gr_results, 0); //포커스이동
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    var options = {};
    options.sortIndex = "clntNo clntNm bizTypCd adptDt";
    options.sortOrder = "1 1 1 1";
    ds_results.multisort(options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.cfGridToExcel = function () {
  var options = {
    fileName: "계약요율.xlsx",
    sheetName: "계약요율"
  };
  $c.data.downloadGridViewExcel($p, gr_results, options);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    let count = 1;
    for (let i = 0; i < ds_results.getRowCount(); i++) {
      count = 1 + i;
      if (ds_results.getRowStatus(i) == "C" || ds_results.getRowStatus(i) == "D" || ds_results.getRowStatus(i) == "U") {
        if (ds_results.getCellData(i, "clntNo") == "" || ds_results.getCellData(i, "bizTypCd") == "" || ds_results.getCellData(i, "adptDt") == "" || ds_results.getCellData(i, "ton") == "") {
          $c.win.alert($p, count + "번재 행의 필수항목이 빠져있습니다.");
          return false;
        }
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};
//   
//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  //console.log('scwin.sbm_save_submitdone~');
  //console.log(e);

  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_ChkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  try {
    // 선언부
    switch (disGubun) {
      case 1:
        //거래처
        let condition = "";
        if (chb_repClntYn.getValue() == "1") {
          condition = "RP";
        }
        udc_clntNo.setSelectId('retrieveSubsidaryClntListJa');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 팝업 콜백
        , pCode // 화면에서의 ??? Code Element의    Value
        , pName // 화면에서의 ??? Name Element의    Value
        , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
        , '5' // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서    
        , '150,170' // 보여주는 각 컬럼들의 폭  
        , null // 컬럼중에서 숨기는    컬럼 지정   
        , condition // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의    사용자 정의 폭
        , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
        , null // 윈도우 위치 Y좌표    
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
      case 2:
        //그리드거래처
        udc_comCodeGrid.setSelectId('retrieveSubsidaryClntListJa');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_clntNo_callBackFunc // 팝업 콜백
        , pCode // 화면에서의 ??? Code Element의    Value
        , pName // 화면에서의 ??? Name Element의    Value
        , 'T' // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
        , '5' // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서    
        , '150,170' // 보여주는 각 컬럼들의 폭  
        , null // 컬럼중에서 숨기는    컬럼 지정   
        , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의    사용자 정의 폭
        , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
        , null // 윈도우 위치 Y좌표    
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , 'F' // 전체검색허용여부 ("F")
        , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_OpenCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 소속거래처 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_cnd_clntNo, ed_txt_cnd_clntNm);
};

//-------------------------------------------------------------------------
// 그리드거래처 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_results, ds_results.getRowPosition(), "clntNo", "clntNm");
};

//-------------------------------------------------------------------------
// 그리드거래처 선택
//-------------------------------------------------------------------------
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_results.getColumnID(columnIndex);
  if (colid == "clntNo") {
    if (ds_results.getCellData(rowIndex, "retrieveYn") != "1") {
      let clntNo = ds_results.getCellData(rowIndex, "clntNo");
      scwin.f_OpenCommonPopUp(2, clntNo, "", 'F', 'F', rowIndex);
    }
  }
};

//-------------------------------------------------------------------------
// ASIS  gr_acctRecv event=OnExit
//-------------------------------------------------------------------------
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_results.getColumnID(columnIndex);
    if (colid == "clntNo") {
      let clntNo = ds_results.getCellData(rowIndex, "clntNo");
      if (clntNo == "") {
        ds_results.setCellData(rowIndex, "clntNo", "");
        return false;
      }
      if (ds_results.getCellData(rowIndex, "retrieveYn") != "1") {
        if (gr_results.getReadOnly("cell", rowIndex, "clntNo") != true) {
          scwin.f_OpenCommonPopUp(2, clntNo, "", 'F', 'F', rowIndex);
        }
      }
    }
  } catch (e) {
    console.log("gr_results_onafteredit : " + e);
  }
};

//-------------------------------------------------------------------------
// 소속거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  try {
    if (ed_cnd_clntNo.getValue().trim().length != 0) {
      scwin.f_ChkOpenCommonPopUp(ed_cnd_clntNo, ed_txt_cnd_clntNm, 1);
      ;
    } else {
      ed_cnd_clntNo.setValue("");
      ed_txt_cnd_clntNm.setValue("");
    }
  } catch (e) {
    console.log("udc_clntNo_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------
// 소속거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(ed_txt_cnd_clntNm, ed_cnd_clntNo, 1, false);
};

//-------------------------------------------------------------------------
// 소속거래찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(1, ed_cnd_clntNo.getValue(), ed_txt_cnd_clntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 그리드셀클릭 (ASIS 컬럼 prop처리)
//-------------------------------------------------------------------------
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_results.getCellData(rowIndex, "retrieveYn") == "1") {
    gr_results.setReadOnly("cell", rowIndex, "clntNo", true); //readOnly
    gr_results.setReadOnly("cell", rowIndex, "clntNm", true); //readOnly
    gr_results.setReadOnly("cell", rowIndex, "bizTypCd", true); //readOnly
    gr_results.setReadOnly("cell", rowIndex, "adptDt", true); //readOnly
    gr_results.setReadOnly("cell", rowIndex, "ton", true); //readOnly
  } else {
    gr_results.setReadOnly("cell", rowIndex, "clntNo", false);
    gr_results.setReadOnly("cell", rowIndex, "clntNm", false);
    gr_results.setReadOnly("cell", rowIndex, "bizTypCd", false);
    gr_results.setReadOnly("cell", rowIndex, "adptDt", false);
    gr_results.setReadOnly("cell", rowIndex, "ton", false);
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  try {
    ed_cnd_clntNo.setValue("");
    ed_txt_cnd_clntNm.setValue("");
    acb_bizTypCd.setSelectedIndex(0);
    //acb_bizTypCd.setValue("null");
    ica_adptDt.setValue("");
    ds_results.setJSON([]);
  } catch (e) {
    console.log("f_FieldClear : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_cnd_clntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_txt_cnd_clntNm',id:'udc_clntNo',mandatoryName:'false',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_condition',code:'clntNo',selectID:'retrieveSubsidaryClntListJa','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',mandatoryCode:'true'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_repClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처 여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bizTypCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_condition.bizTypCd',tooltipLocaleRef:'data:ds_condition.bizTypCd',visibleRowNum:'20',allOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_adptDt',title:'적용일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_condition.adptDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고핌'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약요율목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_results',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'18',visibleRowNumFix:'true',resize:'true','ev:ontextimageclick':'scwin.gr_results_ontextimageclick','ev:onafteredit':'scwin.gr_results_onafteredit','ev:oncellclick':'scwin.gr_results_oncellclick',rowStatusVisible:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처코드',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'소속거래처명',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'업종',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'적용일자',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'톤',width:'80',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'장축금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'초장축금액',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'bizTypCd',inputType:'select',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ton',inputType:'select',width:'80',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',maxLength:'13',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsLongAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',maxLength:'13',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSuperLongAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',maxLength:'13',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowDelYn:'Y',btnRowDelObj:'data',btnCancelObj:'data',btnRowAddYn:'Y',btnRowAddObj:'Y',rowAddObjType:'data',rowAddFunction:'f_addrow',rowAddUserAuth:'C',rowDelFunction:'f_deleterow',rowDelObjType:'D',cancelFunction:'f_undo',gridID:'gr_results',id:'udc_gridAddDel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})