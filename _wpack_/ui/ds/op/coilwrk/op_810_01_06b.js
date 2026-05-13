/*amd /ui/ds/op/coilwrk/op_810_01_06b.xml 31182 1530b0eca26fc5ccda8aa391e8acc41afec7f8aad90c58fc2032e31c708618f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coilList',saveRemovedData:'true','ev:ondataload':'scwin.ds_coilList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coilNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thickness',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'width',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'length',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'material',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWgt',name:'name8',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bl',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dest',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrlPlCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inHh',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outHh',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outClsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrNo',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invTypeCd',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inStDt',name:'name3',dataType:'number'}},{T:1,N:'w2:key',A:{id:'inEndDt',name:'name4',dataType:'number'}},{T:1,N:'w2:key',A:{id:'outStDt',name:'name5',dataType:'number'}},{T:1,N:'w2:key',A:{id:'outEndDt',name:'name6',dataType:'number'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'name7',dataType:'number'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'name8',dataType:'number'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'invTypeCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true','ev:ondataload':'scwin.ds_lobran_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ds.op.coilwrk.RetrieveCoilWrkTransListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_coilList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coilList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.lobran_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.importVssl = "F";
scwin.exportVssl = "F";
scwin.impCvsslCompleteYn = "";
scwin.expCvsslCompleteYn = "";
//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_lobran);
  scwin.udcOnComplete();
  const codeOptions = [{
    grpCd: "CR002",
    compID: "acb_invTypeCd, gr_coilList:invTypeCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 기본일자 세팅
//-------------------------------------------------------------------------
scwin.udcOnComplete = function () {
  udc_outDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  acb_lobranCd.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회클릭시
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  // 검색조건 필수 입력 체크
  if (ed_clntNo.getValue() == "") {
    if (ica_outStDt.getValue() == "") {
      $c.win.alert($p, "화주 또는 출고일자를 입력해 주시기 바랍니다.");
      return;
    }
  }
  if (ica_outStDt.getValue() != "") {
    if (ica_outStDt.getValue() > ica_outEndDt.getValue()) {
      $c.win.alert($p, "출고일자를 확인해 주시기 바랍니다.");
      ica_outStDt.focus();
      return;
    }
  }
  dma_search2.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_search2.set("clntNo", ed_clntNo.getValue());
  dma_search2.set("outStDt", ica_outStDt.getValue());
  dma_search2.set("outEndDt", ica_outEndDt.getValue());
  dma_search2.set("lobranCd", acb_lobranCd.getValue());
  dma_search2.set("vehclNo", ed_vehclNo.getValue());
  dma_search2.set("invTypeCd", acb_invTypeCd.getValue());
  $c.sbm.execute($p, sbm_search2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (화주)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // XML상의 SELECT ID	
  , ed_clntNo.getValue() // 화면에서의 ??? Code Element의	Value
  , ed_clntNm.getValue() // 화면에서의 ??? Name Element의	Value
  , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_clnt_onblurCode = async function (e) {
  if (ed_clntNo.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // XML상의 SELECT ID	
    , ed_clntNo.getValue() // 화면에서의 ??? Code Element의	Value
    , "" // 화면에서의 ??? Name Element의	Value
    , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , 'F' // 전체검색허용여부	("F")
    , "화주,화주코드,화주명");
  } else {
    return;
  }
};
scwin.udc_clnt_onChangeName = async function (info) {
  if (ed_clntNm.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // XML상의 SELECT ID	
    , ed_clntNm.getValue() // 화면에서의 ??? Code Element의	Value
    , "" // 화면에서의 ??? Name Element의	Value
    , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , 'F' // 전체검색허용여부	("F")
    , "화주,화주코드,화주명");
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(화주)
//-------------------------------------------------------------------------
scwin.udc_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 점소 데이터 정렬
//-------------------------------------------------------------------------
scwin.ds_lobran_ondataload = function () {
  ds_lobran.sort("code", 0);
};

//-------------------------------------------------------------------------
// 데이터 로드시
//-------------------------------------------------------------------------
scwin.ds_coilList_ondataload = function () {
  spa_totalRows2.setValue(ds_coilList.getTotalRow());
  let rowCnt = ds_coilList.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return false;
  }
};
scwin.lobran_submitDone = function (e) {
  acb_lobranCd.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 본선관리번호 팝업 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let args = [];
  args[0] = ed_cvsslMgntNo.getValue();

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    title: "본선관리번호검색팝업",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650,
    modal: true
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 본선관리번호 kill Focus
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onBlur = async function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    return;
  }

  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let args = [];
  args[0] = ed_cvsslMgntNo.getValue();

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650,
    modal: true
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};
scwin.sbm_search2_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

// scwin.udc_outDt_onBlurFrom = function (e) {
//     let dateStr = ica_outStDt.getValue()

//     // 종료일자 체크
//     if ( ica_outStDt.getValue() > ica_outEndDt.getValue() && ica_outEndDt.getValue().length == 8 ){
//         $c.win.alert("시작일자가 종료일자 이전이여야 합니다.") 
//             ica_outStDt.setValue("");
//             ica_outStDt.focus();
//             return;
//     } else {
//         let minY = 1900;
//         let maxY = 2099;
//         let strY = dateStr.substring(0,4);

//         // 형식 체크
//     if((!$c.date.isDate(dateStr) && dateStr.length == 8) || parseInt(strY) < minY || parseInt(strY) > maxY ) {
//         $c.win.alert("날짜 형식이 올바르지 않습니다.", function() {
//             ica_outStDt.setValue("");
//             ica_outStDt.focus();
//             return;
//             });
//         }
//     };
// };

// scwin.udc_outDt_onBlurTo = function (e) {

//     let dateStr = ica_outEndDt.getValue()

//     // 종료일자 체크
//     if ( ica_outStDt.getValue() > ica_outEndDt.getValue() && ica_outEndDt.getValue().length == 8 ){
//         $c.win.alert("종료일자는 시작일자보다 이후여야 합니다.") 
//             ica_outEndDt.setValue("");
//             ica_outEndDt.focus();
//             return;
//     } else {
//         let minY = 1900;
//         let maxY = 2099;
//         let strY = dateStr.substring(0,4);

//         // 형식 체크
//     if((!$c.date.isDate(dateStr) && dateStr.length == 8) || parseInt(strY) < minY || parseInt(strY) > maxY ) {
//         $c.win.alert("날짜 형식이 올바르지 않습니다.", function() {
//             ica_outEndDt.setValue("");
//             ica_outEndDt.focus();
//             return;
//             });
//         }
//     };
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_outDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_outStDt',edToId:'ica_outEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data','ev:onBlurFrom':'scwin.udc_outDt_onBlurFrom','ev:onBlurTo':'scwin.udc_outDt_onBlurTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'8',objTypeCode:'Data',btnId:'btn_clnt','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName',selectID:'retrieveCoopList'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:150px;',maxlength:'16',allowChar:'a-zA-Z0-9',editType:'select',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;',allowChar:'a-zA-Z0-9',editType:'select',maxlength:'16',objType:'Data','ev:onkeyup':'scwin.onkeyup','ev:onblur':'scwin.ed_cvsslMgntNo_onBlur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'송장종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_invTypeCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_coilList',grdDownOpts:'{"fileName":"운송내역.xlsx", "sheetName": "운송내역"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_coilList',id:'gr_coilList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',validExp:'coilNo:코일번호:yes&clntNo:화주:yes&inDt:입고일자:yes:date=YYYYMMDD&length=8&inHh:입고시간:yes',resize:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'화주코드',width:'90',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'화주',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출고일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'코일번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'두께',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'폭',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'길이',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'총중량<br/>(KG)',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'순중량<br/>(KG)',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'입고일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'도착지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'송장종류',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'90',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilNo',inputType:'text',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thickness',inputType:'text',width:'70',textAlign:'right',readOnly:'true',maxLength:'0.2',dataType:'float',displayFormat:'#,##0.##[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'width',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'length',inputType:'text',width:'70',textAlign:'center',readOnly:'true',maxLength:'18.2',dataType:'float',displayFormat:'#,##0.00[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWgt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'netWgt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'inDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dest',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'invTypeCd',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'vehclNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'subFirst',value:'',displayMode:'label',expression:'min("outDt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',expression:'count("length")',dataType:'number',displayFormat:'#,##0.##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',expression:'sum("grossWgt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',expression:'sum("netWgt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'outDt',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',expression:'count("length")',dataType:'number',displayFormat:'#,##0.##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum("grossWgt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',expression:'sum("netWgt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'center',dataType:'number',displayFormat:'#,##0',expression:'count("length")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum("grossWgt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("netWgt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})