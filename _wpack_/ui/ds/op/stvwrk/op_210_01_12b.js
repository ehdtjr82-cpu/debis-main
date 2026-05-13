/*amd /ui/ds/op/stvwrk/op_210_01_12b.xml 32702 855bb1b5b182a31246b3dcf6929e25a983eb55673d4eb9ec7fc15411239d831f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'workDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCost',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'targetCol',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'targetCol2',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_staff_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveDailyStaffWrkInputListByVsslCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_staff',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_staff_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_12b 
// 이름     : 일용직투입현황(본선/작업장)
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-03-31
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vwrkStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)

  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();
    $c.gus.cfDisableObjects($p, [ed_staffNo, ed_staffNm]);

    // $p.setTimeout(function() {
    //     ica_wrkStDt.setValue("20161004");
    //     ica_wrkEndDt.setValue("20161006");
    //     lc_lobranCd.setValue("4AA");
    // }, {"delay":100});
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStDt.setValue(scwin.vwrkStDt);
  ica_wrkEndDt.setValue(scwin.vwrkEndDt);
  lc_lobranCd.setValue(scwin.lobranCd);
  lc_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ica_wrkStDt, ica_wrkEndDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_gridToExcel = function (argGrid) {
  // cfGridToExcel(grid, "일용직투입현황", "일용직투입현황.xls", 4+8+16);
  const infoArr = [];
  const options = {
    fileName: "일용직투입현황" + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "일용직투입현황",
    type: "1",
    // startRowIndex: 2,
    // removeColumns: "0,21",
    // hiddenVisible : true,
    useSubTotal: "true",
    useSubTotalData: "true"
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var pWhere = lc_lobranCd.getValue();
      udc_staff.setSelectId('retrieveStvArrangementDailyManList');
      udc_staff.cfCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          ed_staffNo.setValue(rtnList[0]); //사원코드
          ed_staffNm.setValue(rtnList[1]); //사원명
        } else {
          ed_staffNo.setValue(''); //사원코드
          ed_staffNm.setValue(''); //사원명
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서	
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
    case 1:
      var wrkPlGbCd = "1"; //CY,장치장창고
      var lodeptCd = scwin.lobranCd;
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPl.setSelectId('retrieveWrkPlInfo');
      udc_wrkPl.cfCommonPopUp(function (rtnList) {
        //작업장코드  작업장명
        $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); // 작업장
      break;
  }
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "searchCvsslMgntNoPop",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "본선관리번호검색팝업"
  };
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  // var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");

  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
    //rtnValues[0];  본선관리번호
    //rtnValues[1];  선박코드
    //rtnValues[2];  선박명
    //rtnValues[3];  마감일자
    //rtnValues[4];  마감시간
    //rtnValues[5];  도착(입항)일자
    //rtnValues[6];  도착(입항)시간
    //rtnValues[7];  출발(출항)일자
    //rtnValues[8];  출발(출항)시간
    //rtnValues[9];  선사항차
    //rtnValues[10]; 항로
    //rtnValues[11]; 항구코드
    //rtnValues[12]; 부두코드
    //rtnValues[13]; 부두코드명
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
//  인원  조회
//-------------------------------------------------------------------------  
/*
function scwin.f_RetrieveStaffInfo(param1) {
	ds_staff.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=StvWrkEBC&queryId=retrieveStaffInfoCombo&param1=" + param1;	
	ds_staff.Reset();
	
	if (ds_staff.CountRow == 0){	
		alert("해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
		ed_refNo.Text = "";
		return false;
	} else {
		ed_staffNo.text = ds_staff.Namevalue(1,"code");
		ed_staffNm.value = ds_staff.Namevalue(1,"name");
	
	}
	
}
*/

scwin.f_RetrieveStaffInfo1 = async function (param1, param2) {
  // ds_staff.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=StvWrkEBC&queryId=retrieveStaffInfoCombo1&param1=" + param1 +"&param2=" +param2;	

  ds_staff_search.set("sysCd", "StvWrkEBC");
  ds_staff_search.set("queryId", "retrieveStaffInfoCombo1");
  ds_staff_search.set("param1", param1);
  ds_staff_search.set("param2", param2);
  var rs = await $c.sbm.execute($p, sbm_staff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_staff.setJSON(rs.responseJSON.GAUCE);
    if (ds_staff.getRowCount() == 0) {
      await $c.win.alert($p, "해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
      ed_refNo.setValue("");
      return false;
    } else {
      ed_staffNo.setValue(ds_staff.getCellData(0, "code"));
      ed_staffNm.setValue(ds_staff.getCellData(0, "name"));
    }
  }
  ;
};
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};
scwin.udc_wrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 4, false);
};
scwin.udc_wrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPl_onblurCodeEvent = function (e) {};
scwin.ed_refNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_staffNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_staffNm_onchange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList);
};
scwin.zero_remove_formmat = function (data, formattData, rowIdx, colIdx) {
  if (data == 0) {
    return "";
  }
  return formattData;
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    // 총 조회건수 표시
    var rowCnt = ds_wrkList.getRowCount();
    txt_totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    }
    var options = {};
    options.sortIndex = "vsslNm commNm";
    options.sortOrder = "1 1";
    ds_wrkList.multisort(options);
  }
};
scwin.ed_refNo_onblur = function (e) {
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
  if (ed_refNo.getValue() != "") {
    scwin.f_RetrieveStaffInfo1(ed_refNo.getValue(), ica_wrkStDt.getValue());
  }
};
scwin.targetCol = function (position, value) {
  var valArr = value.split("||");
  return valArr[position];
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_condition.lobranCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'wrkStDt',refDataMap:'ds_condition',style:'',id:'udc_wrkDt',refEdDt:'wrkEndDt',edFromId:'ica_wrkStDt',edToId:'ica_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'시작일자',titleTo:'종료일자',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_condition.wrkPlClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천항동'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천연안'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_cvsslMgntNo',class:'',ref:'data:ds_condition.cvsslMgntNo',title:'본선관리번호',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'8','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cvsslMgntNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_wrkPlCd',validTitle:'',nameId:'ed_wrkPlNm',style:'',btnId:'btn_PopUp',id:'udc_wrkPl',refDataCollection:'ds_condition',code:'wrkPlCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'5','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCodeEvent',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_refNo',class:'',allowChar:'a-zA-Z0-9',maxlength:'6',title:'관리번호','ev:onkeyup':'scwin.ed_refNo_onkeyup',objType:'data','ev:onblur':'scwin.ed_refNo_onblur'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_staffNo',class:'',ref:'data:ds_condition.staffNo',allowChar:'a-zA-Z0-9',maxlength:'6',objType:'data'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_staffNm',class:'','ev:onchange':'scwin.ed_staffNm_onchange'}}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',codeId:'',nameId:'',popupID:'',selectID:'',style:'display: none;',validTitle:'',id:'udc_staff'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'투입현황(본선/작업장)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.excelDown',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_wrkList',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_wrkList',focusMode:'row',id:'gr_wrkList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'투입현황',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'지역',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'착수일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'시프트',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column333',value:'targetCol',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column339',value:'targetCol2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'본선/작업장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'화종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'NO',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'금액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'작업지시번호',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftNm',inputType:'text',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'targetCol',value:'',displayMode:'label',hidden:'true',expression:'display(\'vsslNm\')+\'||\'+display(\'commNm\')',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'targetCol2',value:'',displayMode:'label',hiddenCol:'true',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'120',colMerge:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'70',colMerge:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'refNo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalCost',inputType:'text',width:'70',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',hidden:'true',textAlign:'right',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'targetCol',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column130',inputType:'text',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column138',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column136',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column335',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column341',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column134',inputType:'expression',value:'',width:'120',textAlign:'left',expression:'scwin.targetCol(0,targetColValue())'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column132',inputType:'expression',value:'',width:'70',textAlign:'left',expression:'scwin.targetCol(1,targetColValue())'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column128',inputType:'expression',value:'',width:'70',expression:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'expression',value:'',width:'70',expression:'count(\'staffNm\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'expression',value:'',width:'70',displayFormat:'#,###',dataType:'number',textAlign:'right',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column124',inputType:'text',value:'',width:'120'}}]},{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column224',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column225',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column226',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column336',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column342',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column227',inputType:'expression',width:'120',textAlign:'left',expression:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column228',inputType:'text',width:'70',textAlign:'left',value:'계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column229',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column230',inputType:'expression',width:'70',expression:'count("staffNm")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column231',inputType:'expression',width:'70',displayFormat:'#,###',dataType:'number',textAlign:'right',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column232',inputType:'text',width:'120'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'targetCol2',style:'',id:'subTotal3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column301',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column302',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column303',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column304',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column343',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column305',inputType:'text',width:'120',textAlign:'left',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column306',inputType:'text',width:'70',textAlign:'left',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column307',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column308',inputType:'expression',width:'70',expression:'count("staffNm")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column309',inputType:'expression',width:'70',displayFormat:'#,###',dataType:'number',textAlign:'right',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column310',inputType:'text',width:'120'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column338',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column344',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column42',value:'0',displayMode:'label',expression:'count("staffNm")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column41',value:'0',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})