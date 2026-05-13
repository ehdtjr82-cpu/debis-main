/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_13b.xml 37963 9e80e21f364e8252cfab2284f183cdbab30ee784e0301909c422bacc6e500df0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtFrom',name:'작업시작일From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtTo',name:'작업시작일To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnCd',name:'출발역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'도착역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendDtFrom',name:'발송일From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendDtTo',name:'발송일To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clearDtFrom',name:'통관일From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clearDtTo',name:'통관일To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upDown',name:'상하행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distrbt',name:'배분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shttlYn',name:'셔틀여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendYn',name:'송신여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBox',name:'컨테이너BOX',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkPlan',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_RailroadWorkPlan_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호',dataType:'text',defaultValue:'',length:'35'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'upDistrbt',name:'상행배분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'shttlUp',name:'셔틀상행',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'upSendDt',name:'상행발송일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptStnCdUp',name:'상행출발역코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptStnNmUp',name:'상행출발역',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clearDt',name:'통관일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'clearDtLmt',name:'통관반출기한',dataType:'text',defaultValue:'',length:'42'}},{T:1,N:'w2:column',A:{id:'inspYn',name:'검역여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'upSendYn',name:'상행발송여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'upFrtcarNo',name:'상행화차번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arvStnCdUp',name:'상행도착역코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'arvStnNmUp',name:'상행도착역',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'downSendDt',name:'하행발송일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptStnCdDown',name:'하행출발역코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptStnNmDown',name:'하행출발역',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'downDistrbt',name:'하행배분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'downSendYn',name:'하행발송여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'downFrtcarNo',name:'하행화차번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'shttlDown',name:'셔틀하행',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'컨테이너반납일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cntrRtrnLimit',name:'반납마감일',dataType:'text',defaultValue:'',length:'42'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'500'}},{T:1,N:'w2:column',A:{id:'licenseYn',name:'면허여부',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clearTarget',name:'검역대상',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'transDue',name:'운송기한',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'outSystem',name:'반출전산',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'chgUpArv',name:'변경상행도착',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text',defaultValue:'',length:'100'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkPlan',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadWrkPlanForNamdongCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkPlan_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ChangeUpRailStn',action:'/ds.op.wrkplan.railroadwrkplan.ChangeUpRailStnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_RailroadWorkPlan","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ChangeUpRailStn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = $c.data.getMemInfo($p, "userId");
scwin.sUserNm = $c.data.getMemInfo($p, "userNm");
scwin.dateStr1 = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.dateStr2 = $c.date.addDate($p, scwin.dateStr1, 7);
scwin.pbilgClntCd = "286700"; // 한국남동발전(주)영동에코발전본부
scwin.gv_loabranCd = "6AA"; // loginDTO.getLoUpperLobranCd()";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "SD403",
    compID: "gr_RailroadWorkPlan:upDistrbt, gr_RailroadWorkPlan:downDistrbt"
  } //그리드 : 상행배분
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 등록점소 콤보박스 SET
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2, function () {
    //배차점소
    acb_lobranCd.setValue(scwin.gv_loabranCd);
  });
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_reqDt.setValue(scwin.dateStr1);
    ed_reqDtTo.setValue(scwin.dateStr1);
    acb_bilgClntNo.setValue(scwin.pbilgClntCd);
    $c.gus.cfEnableObj($p, acb_lobranCd, false);
    $c.gus.cfEnableObj($p, acb_upDown, false);
    $c.gus.cfEnableObj($p, acb_begintrainWorkPlaceCd, false);

    // 테스트 데이터
    // ds_QueryCondition.set("wrkStDtFrom", "20180103");
    // ds_QueryCondition.set("wrkStDtTo", "20180103");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeSD403"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체

  $c.data.dataListFilter($p, dlt, "fltrCd1 == 'T'"); //$c.data.dataListFilter 함수를 이용해서 필터    
};

//-------------------------------------------------------------------------
//  조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_reqDt, ed_reqDtTo]);
  if (!ret) {
    // 신청일자
    return;
  }
  if (acb_odrBl.getValue() == "O") {
    ds_QueryCondition.set("odrNo", ed_odrBl.getValue());
    ds_QueryCondition.set("blNo", "");
  } else if (acb_odrBl.getValue() == "B") {
    ds_QueryCondition.set("odrNo", "");
    ds_QueryCondition.set("blNo", ed_odrBl.getValue());
  }
  $c.sbm.execute($p, sbm_RetrieveRailroadWorkPlan);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_reqDt.focus();
  ed_reqDt.setValue(scwin.dateStr1);
  ed_reqDtTo.setValue(scwin.dateStr1);
  acb_bilgClntNo.setValue(scwin.pbilgClntCd);
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  /* ASIS 사용되지 않는것 같음
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
   switch (disGubun) {
       case 7:            
          pWhere = null;
          pName = ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.Rowposition, "clntNm");
          rtnList = cfCommonPopUp('retrieveClntInfo',
              pCode,
              pName,
              "T",
              null,
              null,
              null,
              null,
              pWhere,
              null,
              null,
              null,
              null
          );
           if (rtnList != null && rtnList[0] != 'N/A') {
              ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.Rowposition, "clntNo", rtnList[0]); //작업장코드
              ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.Rowposition, "clntNm", rtnList[1]); //작업장명
              if (ds_RailroadWorkPlan.getCellData(ds_RailroadWorkPlan.Rowposition, "clntNm") == 'undefined') {
                  ds_RailroadWorkPlan.setCellData(ds_RailroadWorkPlan.Rowposition, "clntNm", '');
              }
          }
          break;
          
  }
  */
};

//-------------------------------------------------------------------------
// 상행철송 도착역 일괄변경 - 적재내역 등록 후 변경 SD408, OP401, OP701 수정/ 요율 - OP607(철송임), OP609(조작료)
//-------------------------------------------------------------------------
scwin.f_chageUpRail = async function () {
  var checkedCnt = 0;
  if (acb_upRailSttnCd.getValue() == "") {
    $c.win.alert($p, "변경할 역이 선택되지 않았습니다");
    acb_upRailSttnCd.focus();
    return;
  }
  for (var i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
    if (ds_RailroadWorkPlan.getCellData(i, "chk") == "T") {
      checkedCnt++;
      if (ds_RailroadWorkPlan.getCellData(i, "downSendYn") == "Y") {
        $c.win.alert($p, "하행발송이 진행된 건은 수정할 수 없습니다");
        ds_RailroadWorkPlan.setCellData(i, "chk", "F");
        ds_RailroadWorkPlan.modifyRowStatus(i, "R");
        return;
      }
      if (ds_RailroadWorkPlan.getCellData(i, "arvStnCdUp") == acb_upRailSttnCd.getValue()) {
        $c.win.alert($p, "체크한 컨테이너 " + ds_RailroadWorkPlan.getCellData(i, "cntrNo") + " 의 상행철송도착역 " + ds_RailroadWorkPlan.getCellData(i, "arvStnNmUp") + " 이(가) 수정하려는 철도역 " + acb_upRailSttnCd.getText() + " 과 같습니다. ");
        ds_RailroadWorkPlan.setCellData(i, "chk", "F");
        ds_RailroadWorkPlan.modifyRowStatus(i, "R");
        return;
      }
      ds_RailroadWorkPlan.setCellData(i, "chgUpArv", acb_upRailSttnCd.getValue());
    }
  } //for

  if (checkedCnt == 0) {
    $c.win.alert($p, "체크된 컨테이너가 없습니다");
    return;
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_ChangeUpRailStn);
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveRailroadWorkPlan_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_RailroadWorkPlan.getRowCount());
  if (ds_RailroadWorkPlan.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_SaveRailroadWorkPlan_submitdone = function (e) {
  scwin.f_qeryList();
};

//-------------------------------------------------------------------------
// 철송역 일괄수정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_ChangeUpRailStn_submitdone = function (e) {
  scwin.f_qeryList();
};

//-------------------------------------------------------------------------
// 그리드 반납마감일 customFormatter
//-------------------------------------------------------------------------
scwin.cntrRtrnLimitExp = function (data, formatData, rowIdx, colIdx) {
  let shttlDown = ds_RailroadWorkPlan.getCellData(rowIdx, "shttlDown");
  return $c.gus.decode($p, shttlDown, "Y", "", data);
};

// ASIS : ds_RailroadWorkPlan onColumnChanged(row,colid)
scwin.ds_RailroadWorkPlan_oncelldatachange = function (info) {
  if ((info.colID == "upDistrbt" || info.colID == "upSendDt" || info.colID == "clearDt" || info.colID == "inspYn" || info.colID == "upSendYn" || info.colID == "upFrtcarNo" || info.colID == "downSendDt" || info.colID == "downDistrbt" || info.colID == "downSendYn" || info.colID == "downFrtcarNo" || info.colID == "licenseYn" || info.colID == "clearTarget" || info.colID == "transDue" || info.colID == "outSystem") && ds_RailroadWorkPlan.getCellData(info.rowIndex, "chk") == "T") {
    for (var i = 0; i < ds_RailroadWorkPlan.getRowCount(); i++) {
      if (ds_RailroadWorkPlan.getCellData(i, "chk") == "T") {
        ds_RailroadWorkPlan.setCellData(i, info.colID, ds_RailroadWorkPlan.getCellData(info.rowIndex, info.colID));
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상/하행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_upDown',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_QueryCondition.upDown'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_QueryCondition.lobranCd',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'acb_odrBl',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrBl',placeholder:'',style:'width: 204px;',maxlength:'24',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_reqDt',refDataMap:'ds_QueryCondition',refEdDt:'wrkStDtTo',refStDt:'wrkStDtFrom',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_reqDt',edToId:'ed_reqDtTo',titleFrom:'출발일',titleTo:'출발일'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_begintrainWorkPlaceCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_QueryCondition.dptStnCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산진역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6R01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_endtrainWorkPlaceCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_QueryCondition.arvStnCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'옥계역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안인역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안인(소내)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R07'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_sendDt',refDataMap:'ds_QueryCondition',refEdDt:'sendDtTo',refStDt:'sendDtFrom',style:'',edFromId:'ed_sendDt',edToId:'ed_sendDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통관일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_clearDt',refDataMap:'ds_QueryCondition',refEdDt:'clearDtTo',refStDt:'clearDtFrom',style:'',edFromId:'ed_clearDt',edToId:'ed_clearDtTo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bilgClntNo',search:'start',style:'width: 386px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_QueryCondition.bilgClntNo'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'한국남동발전(주)본사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'285636'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'한국남동발전(주)영동에코발전본부'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'286700'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 208px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',ref:'data:ds_QueryCondition.cntrNo',style:'width: 85px;'}},{T:1,N:'w2:udc_schInput',A:{class:'',id:'udc_cntrBox',iptNm:'cntrBox',refDataMap:'ds_QueryCondition',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'셔틀여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w85',editType:'select',id:'acb_shttlYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_QueryCondition.shttlYn',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_qeryList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"철송내역.xlsx","sheetName":"철송내역","bodyWordwrap":"true","type":"4+8+16"}',gridID:'gr_RailroadWorkPlan'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadWorkPlan',id:'gr_RailroadWorkPlan',style:'',fixedColumn:'3',visibleRowNum:'13',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상차지',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'셔틀<br/>(상행)',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'상행<br/>출발',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'상행<br/>출발',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상행<br/>발송',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'상행<br/>도착',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'상행<br/>도착',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'하행<br/>출발',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'하행<br/>출발',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'하행<br/>발송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'셔틀<br/>(반납)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'공급사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'B/L NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'반납기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'반납<br/>마감일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'column51',value:'비고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column88',value:'면허여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column86',value:'검역대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'운송기한',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'반출전산',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column90',value:'CNTR_SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column92',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column63',value:'DO NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'상행배분',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'상행<br/>발송일',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'상행<br/>화차',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'통관일',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'통관<br/>반출기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'검역여부',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'하행배분',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'하행<br/>발송일',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'하행<br/>화차',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',falseValue:'F',valueType:'other',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlCd',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shttlUp',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptStnCdUp',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnNmUp',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upSendYn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvStnCdUp',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvStnNmUp',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptStnCdDown',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptStnNmDown',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'downSendYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shttlDown',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'supplier',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrRtrnDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrRtrnLimit',displayMode:'label',readOnly:'true',customFormatter:'scwin.cntrRtrnLimitExp'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column89',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column87',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transDue',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outSystem',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'doNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'upDistrbt',displayMode:'label',readOnly:'false',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'upSendDt',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'upFrtcarNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'clearDt',displayMode:'label',readOnly:'false',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clearDtLmt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'inspYn',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'downDistrbt',displayMode:'label',readOnly:'false',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'downSendDt',displayMode:'label',value:'',displayFormat:'yyyy/MM/dd',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'downFrtcarNo',value:'',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_upRailSttnCd',class:' w150',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'옥계역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안인역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안인(소내)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2R07'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_chgRail',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_chageUpRail'},E:[{T:1,N:'xf:label',E:[{T:3,text:'철송역 일괄수정'}]}]}]}]}]}]}]}]}]})