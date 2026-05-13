/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_04_04b.xml 29666 e05a0b8c503fc0be06d74a5a6cc37bd17005ea13f5a2281af57e34c84555391e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vssPortCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslPortcnt',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'터미널항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineInfo',name:'라인정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tot',name:'total',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfoList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deprtPortYn',name:'출항여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'launchWrkNm',name:'출항작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveVesselPortCountEachDeparturePortCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_vssPortCnt","key":"OUT_DS1"},{"id":"ds_cntrInfoList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_vssPortCnt","key":"OUT_DS1"},{"id":"ds_cntrInfoList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.UpdateVesselPortCountEachDeparturePortCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_cntrInfoList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ds.op.rscconfirm.transrscconfirm.UpdateVesselPortCancelEachDeparturePortCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_cntrInfoList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.chkStatus = 0;
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = scwin.params.odrNo == '' ? '' : scwin.params.odrNo;
  scwin.vsslCd = scwin.params.vsslCd == '' ? '' : scwin.params.vsslCd;
  scwin.vsslNm = scwin.params.vsslNm == '' ? '' : scwin.params.vsslNm;
  scwin.portcnt = scwin.params.portcnt == '' ? '' : scwin.params.portcnt;
  scwin.lineCd = scwin.params.lineCd == '' ? '' : scwin.params.lineCd;
  scwin.lineNm = scwin.params.lineNm == '' ? '' : scwin.params.lineNm;
  scwin.cvsslMgntNo = scwin.params.cvsslMgntNo == '' ? '' : scwin.params.cvsslMgntNo;
  if (ed_odrNo.getValue() != "") scwin.f_Retrieve();
};
scwin.onUdcCompleted = function () {
  ed_odrNo.setValue(scwin.odrNo);
  ed_vsslCd.setValue(scwin.vsslCd);
  ed_vsslNm.setValue(scwin.vsslNm);
  ed_portcnt.setValue(scwin.portcnt);
  ed_lineCd.setValue(scwin.lineCd);
  ed_lineNm.setValue(scwin.lineNm);
  ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  ed_vsslCd.focus();
};

//-------------------------------------------------------------------------
// function name : scwin.f_reqFieldChk
// function desc : 필수항목 check
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = function () {
  let len_vsslCd = ed_vsslCd.getValue().trim().length;
  let len_portcnt = ed_portcnt.getValue().trim().length;
  let len_cvsslMgntNo = ed_cvsslMgntNo.getValue().trim().length;
  let len_odrNo = ed_odrNo.getValue().trim().length;
  if (len_cvsslMgntNo > 0) return true;
  if (len_odrNo > 0) return true;
  if (len_vsslCd > 0 && len_portcnt == 0) {
    $c.win.alert($p, "모선코드와 항차는 함께 입력해야 합니다.");
    ed_portcnt.focus();
    return false;
  }
  if (len_vsslCd == 0 && len_portcnt > 0) {
    $c.win.alert($p, "모선코드와 항차는 함께 입력해야 합니다.");
    ed_vsslCd.focus();
    return false;
  }
  if (len_cvsslMgntNo + len_odrNo + len_vsslCd + len_portcnt == 0) {
    $c.win.alert($p, "①선명+항차\n\n②본선관리번호\n\n③오더번호\n\n위 3가지 중 1가지는 반드시 입력해야 합니다.");
    ed_vsslCd.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!scwin.f_reqFieldChk()) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

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
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  pCode = pCode.trim().toUpperCase();
  pName = pName.trim().toUpperCase();
  switch (disGubun) {
    case 1:
      // 본선관리번호
      // Select ID : retrieveCvsslMgntNo	
      ed_cvsslMgntNo.setValue("");
      ed_vsslCd.setValue("");
      udc_comCodeCvssMgnt.cfCommonPopUp(function (ret) {
        scwin.udc_comCodeCvssMgnt_callBackFunc(ret, pName);
      }, pCode // 화면에서의 ??? Code Element의    Value,
      , pName // 화면에서의 ??? Name Element의    Value,
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened) "T", //pClose
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , '160,160' // 보여주는 각 컬럼들의 폭  
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는    컬럼 지정   
      , 'O' // 수출// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F") 
      , pAllSearch // 전체검색허용여부 ("F") "T", //pAllSearch
      , "본선관리,본선관리번호, 선박코드, 수입/수출여부" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // LINE
      // Select ID : retrieveLineInfoList
      udc_comCodeLine.cfCommonPopUp(scwin.udc_comCodeLine_callBackFunc, pCode.toUpperCase(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "LINE,LINE코드,LINE명");
      break;
    case 3:
      // 모선코드(선명) 팝업 	
      // Select ID : retrieveVsslCdInfo
      udc_comCodeVssl.cfCommonPopUp(scwin.udc_comCodeVssl_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "모선,모선코드,모선명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//  eidt_Control FUNCTION : scwin.f_setCheckBox()
//-------------------------------------------------------------------------	
scwin.f_setCheckBox = function () {
  for (var inx = 0; inx < ds_cntrInfoList.CountRow; inx++) {
    if (ds_cntrInfoList.getCellData(inx, "cntrStsCd") == "E") {
      ds_cntrInfoList.setCellData(inx, "deprtPortYn", 1);
    } else {
      ds_cntrInfoList.setCellData(inx, "deprtPortYn", 0);
    }
  }
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

// 조회조건 초기화 - AS-IS: f_defaultValue()
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_odrNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_lineCd, ed_lineNm, ed_cvsslMgntNo, ed_cntrNo]);
};

// 저장 - AS-IS: f_Save()
scwin.btn_save_onclick = async function (e) {
  if (ds_cntrInfoList.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  let rtn = await $c.gus.cfValidate($p, [gr_cntrInfoList]);
  if (rtn) {
    let con = await $c.win.confirm($p, MSG_CM_CRM_001); // 저장하시겠습니까?
    if (con) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

// 출항취소 - AS-IS: f_Cancel()
scwin.btn_cancel_onclick = async function (e) {
  for (var i = 0; i < ds_cntrInfoList.getRowCount(); i++) {
    if (ds_cntrInfoList.getCellData(i, "deprtPortYn") == 1) {
      if (ds_cntrInfoList.getCellData(i, "currPosNm") != "출항") {
        $c.win.alert($p, "컨테이너 -->" + ds_cntrInfoList.getCellData(i, "cntrNo") + "는 출항처리가 되어 있지 않아 출항처리 취소할 수 없습니다.");
        return false;
      }
    }
  }
  let rtn = await $c.gus.cfValidate($p, [gr_cntrInfoList]);
  if (rtn) {
    let con = await $c.win.confirm($p, "출항취소 하시겠습니까?");
    if (con) {
      $c.sbm.execute($p, sbm_cancel);
    }
  }
};

// grid내의 checkbox의 일괄 on/off switching
//   - 가우스 gr_cntrInfoList OnClick(row, colid) 에서
//     row==0(헤더) && colid=="deprtPortYn" 클릭 시 전체 선택/해제 의도로 작성된 로직이나, 헤더 컬럼에 체크박스 UI가 없어 ASIS에서도 실제로는 동작하지 않던 기능임.
//   - TOBE 전환 시 코드는 작성하였으나 미사용
scwin.gr_cntrInfoList_onheaderclick = function (headerId) {
  if (ds_cntrInfoList.getRowCount() === 0) return;
  if (headerId === "deprtPortYn") {
    for (var i = 0; i < ds_cntrInfoList.getRowCount(); i++) {
      if (ds_cntrInfoList.getCellData(i, "cntrStsCd") === "E") {
        ds_cntrInfoList.setCellData(i, "deprtPortYn", 1);
      } else {
        if (ds_cntrInfoList.getCellData(i, "selYn") === 1) {
          ds_cntrInfoList.setCellData(i, "deprtPortYn", (scwin.chkStatus + 1) % 2);
        } else {
          ds_cntrInfoList.setCellData(i, "deprtPortYn", 0);
        }
      }
    }
    scwin.chkStatus += 1;
  }
};

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

// 선명 클릭시 팝업
scwin.udc_comCodeVssl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vsslCd.getValue(), ed_vsslNm.getValue(), "T", "F");
};

// 선명 팝업 콜백함수
scwin.udc_comCodeVssl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd, ed_vsslNm);
};

// 선명 코드 onChange
scwin.udc_comCodeVssl_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 3, true);
};

// 선명 Name onChange
scwin.udc_comCodeVssl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 3, false);
};

// ==================== LINE ====================
// Line 클릭시 팝업
scwin.udc_comCodeLine_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_lineCd.getValue(), ed_lineNm.getValue(), "T", "F");
};

// Line 팝업 콜백함수
scwin.udc_comCodeLine_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
};

// Line 코드 onChange
scwin.udc_comCodeLine_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 2, true);
};

// Line name onChange
scwin.udc_comCodeLine_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 2, false);
};

// ==================== 본선관리번호 ====================
// 본선관리번호 검색 onClick
scwin.udc_comCodeCvssMgnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_cvsslMgntNo.getValue(), ed_vsslCd.getValue(), "T", "F");
};

// 본선관리번호 팝업 콜백함수
scwin.udc_comCodeCvssMgnt_callBackFunc = function (ret, pName) {
  // ret 배열 순서 : 0:본선관리번호, 1:선박코드, 2:항구코드, 3:마감일자, 4:마감시간, 5:항차, 6:선명
  // ed_cvsslMgntNo.setValue(ret[0]); // 본선관리번호
  // ed_vsslCd.setValue(ret[1]);      // 선박코드
  // ed_vsslNm.setValue(ret[6]);      // 선명
  // ed_portcnt.setValue(ret[5]);     // 항차
  $c.gus.cfSetReturnValue($p, ret, ed_cvsslMgntNo, ed_vsslCd, [,,, ed_portcnt, ed_vsslNm]);
  if (pName.length == 0) scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 3, true);
};

// 본선관리번호 onChange
scwin.udc_comCodeCvssMgnt_onviewchangeCodeEvent = function () {
  // scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, ed_vsslCd, 1, true); // 본선관리번호 onChange시 선박코드 초기화 후 본선관리번호만 조회
  if (ed_cvsslMgntNo.getValue().trim().length == 0) {
    // 공백인 경우, 
    return;
  }
  // AS-IS에서 본선관리번호를 바꾸는 경우, 세팅된 선박코드 value도 검색 팝업창에 보냄 
  scwin.f_openCommonPopUp(1, ed_cvsslMgntNo.getValue(), ed_vsslCd.getValue(), "T", "F");
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

// 조회
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_cntrInfoList.getRowCount() == 0) {
    $c.win.alert($p, "컨테이너 목록이 없습니다.");
    return;
  }
  ds_vssPortCnt.setRowPosition(0);
  totalRows.setValue(ds_cntrInfoList.getRowCount());
  ds_cntrInfoList.sort("cntrNo", 0);
  scwin.f_setCheckBox();
};

// 저장
scwin.sbm_save_submitdone = function (e) {
  $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_001)); // 성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};

// 출항취소
scwin.sbm_cancel_submitdone = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'chassis_tb',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num red',id:'',label:'선명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_comCodeVssl',maxlengthCode:'4',selectID:'retrieveVsslCdInfo',refDataCollection:'oGDS_view_cond',code:'vsslCd','ev:onclickEvent':'scwin.udc_comCodeVssl_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeVssl_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCodeVssl_onviewchangeCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num red',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:searchbox',A:{id:'ed_portcnt',style:'width: 150px;',maxlength:'10',ref:'data:oGDS_view_cond.portcnt',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_comCodeLine',maxlengthCode:'5',selectID:'retrieveLineInfoList',refDataCollection:'oGDS_view_cond',code:'lineCd','ev:onclickEvent':'scwin.udc_comCodeLine_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeLine_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCodeLine_onviewchangeCodeEvent',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num num2 red',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodeCvssMgnt',selectID:'retrieveCvsslMgntNo',codeId:'ed_cvsslMgntNo',validTitle:'본선관리번호',hideName:'true',codeWidth:'205.01',refDataCollection:'oGDS_view_cond',code:'cvsslMgntNo','ev:onclickEvent':'scwin.udc_comCodeCvssMgnt_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCodeCvssMgnt_onviewchangeCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num num3 red',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:searchbox',A:{id:'ed_odrNo',style:'',maxlength:'13',ref:'data:oGDS_view_cond.odrNo',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:searchbox',A:{id:'ed_cntrNo',style:'',maxlength:'11',ref:'data:oGDS_view_cond.cntrNo',allowChar:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명항차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_m_vsslPortcnt',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.vsslPortcnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선적 PORT ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_m_pierNm',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.pierNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'터미널항차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_m_tmlPortcnt',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.tmlPortcnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_m_dptDt',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.dptDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',ref:'',style:'',userData2:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_m_lineInfo',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.lineInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total ',ref:'',style:'',userData2:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_m_tot',placeholder:'',style:'width:200px;',objType:'data',readOnly:'true',ref:'data:ds_vssPortCnt.tot'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title row-gap-8',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 선명항차별 출항처리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_cntrInfoList',gridUpYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"선명항차별 출항처리.xlsx","sheetName": "선명항차별 출항처리","type":"4+8+16"}',gridDownYn:'Y',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cntrInfoList',id:'gr_cntrInfoList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onheaderclick':'scwin.gr_cntrInfoList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtPortYn',inputType:'text',value:'출항여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'SIZE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'TYPE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'E/F',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'현위치명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입항일시',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'컨테이너상태코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'현위치코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'관리구분YN',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column23',value:'출항작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'선택여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtPortYn',inputType:'checkbox',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'150',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',width:'160',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',width:'100',readOnly:'true',hidden:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrStsCd',inputType:'text',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosCd',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClsYn',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'launchWrkNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selYn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'출항취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})