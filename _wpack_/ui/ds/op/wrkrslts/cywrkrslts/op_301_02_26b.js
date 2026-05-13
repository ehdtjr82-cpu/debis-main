/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_26b.xml 24126 d338005e72e4fff396c0f3cdf4ab7d7acf896f514800e3575b9268fb9102a7a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'line코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'line명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onOffDockClsCd',name:'ON OFF',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'size',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlCd',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnWrkPlNm',name:'반납지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onOffClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgRtrnWrkPlCd',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_line'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_lineNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveReturnPlaceByLineCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ds_srchCond","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveReturnPlaceByLineCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.popupCallBackObj = {}; // 팝업 callback 파라미터
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  await scwin.submitExcute(sbm_retrieve);
};

/**
 * @method 
 * @name f_Save 
 * @description 저장
 */
scwin.f_Save = async function () {
  if (ds_results.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  ;
  const validGrid = await $c.gus.cfValidate($p, [gr_results]);
  if (!validGrid) return;
  const retConfirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!retConfirm) return;
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_openPopUp 
 * @description 조회 팝업
 * @param {String} disGubun
 * @param {String} pCode
 * @param {String} pName
 * @param {String} pClose
 * @param {String} pAllSearch
 */
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 초기화
  scwin.popupCallBackObj = {};
  let udcObj;
  switch (disGubun) {
    case 3:
      udcObj = udc_line;
      scwin.popupCallBackObj.codeObj = ed_lineCd;
      scwin.popupCallBackObj.nameObj = txt_lineNm;
      break;
    default:
      break;
  }
  ;
  udcObj.cfCommonPopUp(scwin.f_openPopUpCallback, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
};

/**
 * @method 
 * @name f_openPopUpCallback 
 * @description 조회 팝업 callback
 * @param {String[]} rtnList
 */
scwin.f_openPopUpCallback = function (rtnList) {
  let codeObj = scwin.popupCallBackObj.codeObj;
  let nameObj = scwin.popupCallBackObj.nameObj;

  // 초기화
  scwin.popupCallBackObj = {};
  $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj, null);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {String} disGubun
 * @param {String} isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_ResultsExcel 
 * @description 엑셀파일로 저장
 */
scwin.f_ResultsExcel = function () {
  let sheetTitle = "LINE별기본반납지";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_results, options);
};

/**
 * @method 
 * @name f_openCommPopUpGrid 
 * @description Grid Popup : 송화주
 */
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose, value) {
  // 초기화
  scwin.popupCallBackObj = {};
  scwin.popupCallBackObj.row = row;

  // 선언부
  let pCode = "";
  let pName = "";
  let pWtitleSearch = "";
  switch (disGubun) {
    case 1:
      //거래처
      // 송화주(거래처) 팝업
      pCode = value;
      udc_line.setSelectId("retrieveLineInfo");
      pWtitleSearch = "LINE,LINE코드,LINE명";
      scwin.popupCallBackObj.code = "lineCd";
      scwin.popupCallBackObj.name = "lineNm";
      break;
    case 2:
      //거래처
      // 송화주(거래처) 팝업
      pName = value;
      udc_line.setSelectId("retrieveWrkPlInfo");
      pWtitleSearch = "작업장,작업장코드,작업장명";
      scwin.popupCallBackObj.code = "rtrnWrkPlCd";
      scwin.popupCallBackObj.name = "rtrnWrkPlNm";
      break;
  }
  ;
  udc_line.cfCommonPopUp(scwin.popUpGridCallBack, pCode // 화면에서의 ??? Code Element의  Value
  , pName // 화면에서의 ??? Name Element의  Value
  , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
  , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는  컬럼 지정
  , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의  사용자 정의 폭
  , null // POP-UP뛰을때 우도우의  사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부 ("F")
  , "F" // 전체검색허용여부 ("F")
  , pWtitleSearch // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  udc_line.setSelectId("retrieveLineInfo");
};

/**
 * @method 
 * @name popUpGridCallBack 
 * @description Grid Popup callback
 * @param {String[]} rtnList
 */
scwin.popUpGridCallBack = function (rtnList) {
  let row = scwin.popupCallBackObj.row;
  let codeStr = scwin.popupCallBackObj.code;
  let nameStr = scwin.popupCallBackObj.name;

  // 초기화
  scwin.popupCallBackObj = {};
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, codeStr, nameStr);
};

/**
 * @method 
 * @name f_copyRow 
 * @description 행 복사
 */
scwin.f_copyRow = function () {
  let row = ds_results.getRowPosition();
  if (row < 0) {
    $c.win.alert($p, "복사할 행을 지정해 주십시오.");
    return false;
  }
  ;
  let insertIdx = ds_results.insertRow();
  ds_results.setRowJSON(insertIdx, ds_results.getRowJSON(row), true);
  gr_results.setFocusedCell(insertIdx, 0);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieve:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      if (ds_results.getRowCount() == 0) {
        $c.win.alert($p, "조회된 데이터가 없습니다.");
        return;
      }
      ;
      let options = {
        sortIndex: "lineCd districtCd cntrSizCd cntrTypCd",
        sortOrder: "1 1 1 1"
      };
      ds_results.multisort(options);
      let allData = ds_results.getAllJSON();
      ds_results.setJSON(allData);
      gr_results.setFocusedCell(0, 0);
      break;
    case sbm_save:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      scwin.f_Retrieve();
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name sbm_retrieve_submit 
 * @description 조회) Submission 요청 전 선처리. return false시 submission 수행 안함.
 */
scwin.sbm_retrieve_submit = function (e) {
  let jsonData = {
    "lineCd": dma_line.get("ed_lineCd"),
    "districtCd": acb_lc_districtCd.getValue(),
    "cntrSizCd": acb_lc_cntrSizCd.getValue(),
    "cntrTypCd": acb_lc_cntrTypCd.getValue()
  };
  dma_ds_srchCond.setJSON(jsonData);
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_results_ontextimageclick 
 * @description 그리드 셀의 검색버튼 클릭 시 발생하는 이벤트(OnPopup)
 */
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex, value) {
  let colId = gr_results.getColumnID(columnIndex);
  let disGubun;
  switch (colId) {
    case "lineCd":
      disGubun = 1;
      break;
    case "rtrnWrkPlNm":
      disGubun = 2;
      break;
  }
  ;
  if (gr_results._dataList.getCellData(rowIndex, colId) == value) return;
  scwin.f_openCommPopUpGrid(disGubun, rowIndex, 'F', value);
};

/**
 * @event 
 * @name gr_results_oneditend 
 * @description 그리드 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생(OnExit)
 * @param {String} rowIndex
 * @param {String} columnIndex
 * @param {String} value
 */
scwin.gr_results_oneditend = function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  if (['lineCd', 'rtrnWrkPlNm'].includes(colID)) {
    scwin.gr_results_ontextimageclick(rowIndex, columnIndex, value);
  }
};

/**
 * @event 
 * @name udc_line_onclickEvent 
 * @description Line 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openPopUp(3, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description Line code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 3, true);
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description Line code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_line_onblurNameEvent = function (e) {
  scwin.f_openPopUp(3, dma_line.get("ed_lineCd"), dma_line.get("txt_lineNm"), 'F', 'T');
};

/**
 * @event 
 * @name btn_rtrvBtn_onclick 
 * @description 조회 버튼 클릭할 경우 발생
 */
scwin.btn_rtrvBtn_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_save_onclick 
 * @description 저장 버튼 클릭할 경우 발생
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_trigger1_onclick 
 * @description 행복사 버튼 클릭할 경우 발생
 */
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_copyRow();
};

/**
 * @method 
 * @name comboFormat 
 * @description 그리드 select 포맷
 */
scwin.comboFormat = function (data, formattedData, rowIndex, colIndex) {
  return formattedData;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_line',selectID:'retrieveLineInfo',codeId:'ed_lineCd','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',UpperFlagCode:'1',maxlengthCode:'4','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent',nameId:'txt_lineNm',btnId:'btn_line',code:'ed_lineCd',name:'txt_lineNm',refDataCollection:'dma_line','ev:onclickEvent':'scwin.udc_line_onclickEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_districtCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경인권'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KIB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산권'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUB'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cntrSizCd',search:'start',style:'width:100px;',submenuSize:'auto',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TYPE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cntrTypCd',search:'start',style:'width:100px;',submenuSize:'auto',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Special'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SOC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SO'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_rtrvBtn',style:'',type:'button','ev:onclick':'scwin.btn_rtrvBtn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'LINE별 기본반납지',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_grdTopBtn',gridID:'gr_results',gridDownFn:'f_ResultsExcel',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',sortable:'false',focusMode:'row','ev:oneditend':'scwin.gr_results_oneditend',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'LINE',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'ON/OFF',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'권역',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CODE',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'반납지',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onOffDockClsCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NONE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ON'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'OFF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산권'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경인권'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KIB'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:'',displayFormatter:'scwin.comboFormat',customFormatter:'scwin.comboFormat'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Special'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SOC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SO'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtrnWrkPlCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtrnWrkPlNm',inputType:'textImage',width:'150',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'display:none;',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'display:none;',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'display:none;',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bttomGrdBtn',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',gridID:'gr_results'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'에버라인(EVER, EMS, ITS, HTML)은 ON/OFF 항목의 \'OFF\'구분으로 신항권(공통코드:OP411) 터미널 반납지 셋팅합니다!',class:'info-ico'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})