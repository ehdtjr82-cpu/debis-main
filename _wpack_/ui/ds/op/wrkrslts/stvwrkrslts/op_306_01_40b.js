/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_40b.xml 82088 1ac4f0a2dc596f3d1f3bf1b7f05223668af4cb088faec8dee03b5b000f092b72 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_main1',saveRemovedData:'true','ev:ondataload':'scwin.ds_main1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'출항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impKcg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expKcg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkPlCd',name:'상위작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslCompleteYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslCompleteDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslCompleteTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslCompleteDtTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCvsslCompleteYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCvsslCompleteDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCvsslCompleteTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCvsslCompleteDtTm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierDt',name:'접안일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierHh',name:'접안시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offpierDt',name:'이안일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offpierHh',name:'이안시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeTradRgnYn',name:'자유무역지역여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_volRslts',saveRemovedData:'true','ev:ondataload':'scwin.ds_volRslts_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'계획수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planWt',name:'계획중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'계획CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltsIndictNo',name:'물량지시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'물량순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'작업CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpCd1',name:'작업단계코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd2',name:'작업단계코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd3',name:'작업단계코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd4',name:'작업단계코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shiftingRslts',saveRemovedData:'true','ev:ondataload':'scwin.ds_shiftingRslts_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'계획수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'planWt',name:'계획중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'계획CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsIndictNo',name:'물량지시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volSeq',name:'물량순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'작업CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpCd1',name:'작업단계코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd2',name:'작업단계코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd3',name:'작업단계코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd4',name:'작업단계코드4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wkrStp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkStp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveCvsslStvVolRsltsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_main1","key":"OUT_DS1"},{"id":"ds_volRslts","key":"OUT_DS2"},{"id":"ds_shiftingRslts","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_main1","key":"OUT_DS1"},{"id":"ds_volRslts","key":"OUT_DS2"},{"id":"ds_shiftingRslts","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stvwrkrslts.SaveCvsslStvVolRsltsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_main1","key":"IN_DS1"},{"action":"modified","id":"ds_volRslts","key":"IN_DS2"},{"action":"modified","id":"ds_shiftingRslts","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStp',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_wrkStp","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkStp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.nowDt = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.nowDt.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.nowDt.substring(0, 6) + new Date(scwin.nowDt.substring(0, 4), scwin.nowDt.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.nextDt = WebSquare.date.dateAdd(scwin.nowDt, 1);
//scwin.strPreDate = $c.date.addMonth(scwin.vCurDate, -1);

scwin.txt_hlobranCd = "";
scwin.txt_hlobranNm = "";
scwin.cvsslMgntNo = "";
scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.pcvsslMgntNo = "";
scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.importVssl = "F";
scwin.exportVssl = "F";
scwin.impCvsslCompleteYn = "";
scwin.expCvsslCompleteYn = "";
scwin.currow1 = "";
scwin.currow2 = "";
scwin.olddata = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP117",
    compID: "gr_volRslts:shiftClsCd, gr_shiftingRslts:shiftClsCd"
  }, {
    grpCd: "SD060",
    compID: "gr_volRslts:impExpClsCd, gr_shiftingRslts:impExpClsCd"
  }
  //{ grpCd : "SD060", compID : "gr_conversionUnitDTOList:basisUnit", opt : {"range" : "2,L"}},
  ];
  $c.data.setCommonCode($p, codeOptions);
  var params = $c.data.getParameter($p);
  scwin.cvsslMgntNo = params.cvsslMgntNo == null ? "" : params.cvsslMgntNo;
  scwin.pcvsslMgntNo = scwin.cvsslMgntNo;
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd == null ? "" : memJson.loUpperLobranCd;
  scwin.lobranCd = memJson.lobranCd;
  scwin.lobranNm = memJson.lobranNm;
  vsslNm.setValue("");
  lineNm.setValue("");
  shpCoNm.setValue("");
  wrkPlNm.setValue("");
  arrvlportDtm.setValue("");
  deprtportDtm.setValue("");
  dchrDropRgn.setValue("");
  impPortcnt.setValue("");
  impRepKcg.setValue("");
  expPortcnt.setValue("");
  expRepKcg.setValue("");
  impCvsslCompleteYn.setValue("");
  impCvsslCompleteDtm.setValue("");
  expCvsslCompleteYn.setValue("");
  expCvsslCompleteDtm.setValue("");
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    udc_comCode.hide();
    scwin.f_retrieveWkrStp();
    if (scwin.pcvsslMgntNo != "") {
      ed_cvsslMgntNo.setValue(scwin.pcvsslMgntNo); // 본선관리번호		
      scwin.f_Retrieve();
    } else {
      scwin.f_DivHoldEachWorkPlanList(); // 본선작업계획상세조회 테이블 생성	 
      ed_cvsslMgntNo.focus(); // on_load focus
    }
    ///임시        
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  var chk = await $c.gus.cfValidate($p, [ed_cvsslMgntNo]);
  if (!chk) {
    return;
  }

  //tr_search.post();	// submit(); 과 동일
  $c.sbm.execute($p, sbm_search);
  /*
      scwin.f_DivHoldEachWorkPlanList();
      scwin.f_GridIOCheck3();
        scwin.chk_input = "F";
  */
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_mainSave = async function () {
  var rowPosition = ds_volRslts.getRowPosition();
  if (ds_volRslts.getModifiedIndex().length > 0 || ds_shiftingRslts.getModifiedIndex().length > 0) {
    if (ds_volRslts.getModifiedIndex().length > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_volRslts]))) return;
      var wrkDt = ds_volRslts.getCellData(rowPosition, "wrkDt");
      var stHh = ds_volRslts.getCellData(rowPosition, "wrkStHh");
      var endHh = ds_volRslts.getCellData(rowPosition, "wrkEndHh");
      var shift = ds_volRslts.getCellData(rowPosition, "shiftClsCd");
      if (stHh.length != 4) {
        console.log("111111");
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_volRslts.setFocusedCell(rowPosition, "wrkStHh");
        /*
        gr_volRslts.SetColumn("wrkStHh");
        gr_volRslts.focus();
        */
        return false;
      }
      if (endHh.length != 4) {
        console.log("222222");
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["시간형식"]);
        gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
        /*
              gr_volRslts.SetColumn("wrkEndHh");
        gr_volRslts.focus();
        */
        return false;
      }
      if (stHh.substr(0, 2) > "23") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkStHh");
        /*
        gr_volRslts.SetColumn("wrkStHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (stHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkStHh");
        /*
        gr_volRslts.SetColumn("wrkStHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (endHh.substr(0, 2) > "24") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업시간"]); // "@은(는) 시가 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
        /*
        gr_volRslts.SetColumn("wrkEndHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (endHh.substr(0, 2) == "00" && endHh.substr(2, 2) == "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
        /*
        gr_volRslts.SetColumn("wrkEndHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (endHh.substr(0, 2) == "24" && endHh.substr(2, 2) > "00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
        /*
        gr_volRslts.SetColumn("wrkEndHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (endHh.substr(2, 2) > "59") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업시간"]); // "@은(는) 분이 잘못되었습니다."
        gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
        /*
        gr_volRslts.SetColumn("wrkEndHh");
        gr_volRslts.focus();
        */
        return;
      }
      if (shift == "M") {
        if (stHh > endHh && endHh > '0700') {
          $c.win.alert($p, "야간/심야의 작업종료시간은 07시 이전이어야 합니다.");
          gr_volRslts.setFocusedCell(rowPosition, "wrkEndHh");
          /*
          gr_volRslts.SetColumn("wrkEndHh");
          gr_volRslts.focus();
          */
          return;
        }
      } else {
        if (!(await $c.gus.cfIsAfterDate($p, stHh, endHh))) {
          $c.win.alert($p, MSG_CM_ERR_058); // 시작시간이 종료시간 이전이어야 합니다.
          gr_volRslts.setFocusedCell(rowPosition, "wrkStHh");
          /*
              gr_volRslts.SetColumn("wrkStHh");
          gr_volRslts.focus();
          */
          return;
        }
      }
    }
    if (ds_shiftingRslts.getModifiedIndex().length > 0) {
      if (!(await $c.gus.cfValidate($p, [gr_shiftingRslts]))) return;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //tr_save.post();
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["물량실적"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  /*
  var args = new Array();
  args[0] = em_cvsslMgntNo.Text; //본선관리번호
  args[1] = ""; //수출입구분코드
    var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");
   if (rtnValues != null) {
      em_cvsslMgntNo.Text = rtnValues[0]; 
  }
  */

  var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 1100;
  opts.height = 600;
  opts.popupName = '본선관리번호검색팝업';
  /*
  var param = {
      cvsslMgntNo : ed_cvsslMgntNo.getValue()
  }
  */

  var param = new Array();
  param[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  param[1] = ""; //수출입구분코드

  rtnList = await $c.win.openPopup($p, win_url, opts, param);
  console.log("rtnList : ", rtnList);
  if (rtnList != null) {
    ed_cvsslMgntNo.setValue(rtnList[0]);
  }
};

//-------------------------------------------------------------------------
// 본선작업계획상세조회 테이블 생성
//------------------------------------------------------------------------- 
scwin.f_DivHoldEachWorkPlanList = function () {
  // 1.본선기본정보조회
  var vsslNm = ""; //선박명
  var lineNm = ""; //LINE명
  var shpCoNm = ""; //선사명
  var impPortcnt = ""; //수입항차
  var expPortcnt = ""; //수출항차
  var impRepKcg = ""; //수입대표화종
  var expRepKcg = ""; //수출대표화종
  var wrkPlNm = ""; //작업장명
  var arrvlportDtm = ""; //입항일시
  var deprtportDtm = ""; //출항일시
  var dchrDropRgn = ""; //양적하지		
  var dailyPlanYn = ""; //일일계획여부

  var impCvsslCompleteDtm = ""; //일일계획여부		
  var expCvsslCompleteDtm = ""; //일일계획여부

  if (ds_main1.getRowCount() > 0) {
    vsslNm = ds_main1.getCellData(ds_main1.getRowPosition(), "vsslNm");
    lineNm = ds_main1.getCellData(ds_main1.getRowPosition(), "lineNm");
    shpCoNm = ds_main1.getCellData(ds_main1.getRowPosition(), "shpCoNm");
    wrkPlNm = ds_main1.getCellData(ds_main1.getRowPosition(), "wrkPlNm");

    //arrvlportDtm = cfGetFormatStr(ds_main1.NameValue(ds_main1.getRowPosition(), "arrvlportDtm"), "####/##/## ##:##");
    //deprtportDtm = cfGetFormatStr(ds_main1.NameValue(ds_main1.getRowPosition(), "deprtportDtm"), "####/##/## ##:##");							
    dchrDropRgn = ds_main1.getCellData(ds_main1.getRowPosition(), "dchrDropRgn");
    //dailyPlanYn = ds_main1.NameValue(ds_main1.getRowPosition(), "dailyPlanYn");			

    impPortcnt = ds_main1.getCellData(ds_main1.getRowPosition(), "impPortcnt");
    impRepKcg = ds_main1.getCellData(ds_main1.getRowPosition(), "impKcg");
    expPortcnt = ds_main1.getCellData(ds_main1.getRowPosition(), "expPortcnt");
    expRepKcg = ds_main1.getCellData(ds_main1.getRowPosition(), "expKcg");
    scwin.impCvsslCompleteYn = ds_main1.getCellData(ds_main1.getRowPosition(), "impCvsslCompleteYn");
    scwin.expCvsslCompleteYn = ds_main1.getCellData(ds_main1.getRowPosition(), "expCvsslCompleteYn");
    console.log("impPortcnt : " + impPortcnt);
    console.log("expPortcnt : " + expPortcnt);
    console.log("scwin.impCvsslCompleteYn : " + scwin.impCvsslCompleteYn);
    console.log("scwin.impCvsslCompleteYn : " + scwin.impCvsslCompleteYn);
    console.log("scwin.expCvsslCompleteYn : " + scwin.expCvsslCompleteYn);

    /*
    if(ds_main1.getCellData(ds_main1.getRowPosition(), "impCvsslCompleteDt") != "" 
        && ds_main1.getCellData(ds_main1.getRowPosition(), "impCvsslCompleteTm") !="" )
    {
        impCvsslCompleteDtm = cfGetFormatStr( ds_main1.NameValue(ds_main1.getRowPosition(), "impCvsslCompleteDt"), "####/##/##")
                + " " +ds_main1.NameValue(ds_main1.getRowPosition(), "impCvsslCompleteTm");	
    } else {
    
        impCvsslCompleteDtm = "";
    }		
        
    expCvsslCompleteYn = ds_main1.NameValue(ds_main1.getRowPosition(), "expCvsslCompleteYn");	
    
    if(ds_main1.NameValue(ds_main1.getRowPosition(), "expCvsslCompleteDt") != ""
        && ds_main1.NameValue(ds_main1.getRowPosition(), "expCvsslCompleteTm")!= "")
    {
        expCvsslCompleteDtm = cfGetFormatStr( ds_main1.NameValue(ds_main1.getRowPosition(), "expCvsslCompleteDt"), "####/##/##")
                + ds_main1.NameValue(ds_main1.getRowPosition(), "expCvsslCompleteTm");
    } else {
        expCvsslCompleteDtm = "";
    }				
    */
  }
  if (ds_main1.getCellData(ds_main1.getRowPosition(), "impPortcnt") != "" && ds_main1.getCellData(ds_main1.getRowPosition(), "expPortcnt") != "") {
    // 수출입			    	
    console.log("Case 1");
    scwin.importVssl = "T";
    scwin.exportVssl = "T";
    if (scwin.impCvsslCompleteYn == "완료" && scwin.expCvsslCompleteYn == "완료") {
      $c.gus.cfDisableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    } else {
      $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    }
  } else if (ds_main1.getCellData(ds_main1.getRowPosition(), "impPortcnt") == "" && ds_main1.getCellData(ds_main1.getRowPosition(), "expPortcnt") != "") {
    //수출
    console.log("Case 2");
    scwin.importVssl = "F";
    scwin.exportVssl = "T";
    if (scwin.expCvsslCompleteYn == "완료") {
      $c.gus.cfDisableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    } else {
      $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    }
  } else if (ds_main1.getCellData(ds_main1.getRowPosition(), "impPortcnt") != "" && ds_main1.getCellData(ds_main1.getRowPosition(), "expPortcnt") == "") {
    // 수입
    console.log("Case 3");
    scwin.importVssl = "T";
    scwin.exportVssl = "F";
    if (scwin.impCvsslCompleteYn == "완료") {
      $c.gus.cfDisableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    } else {
      $c.gus.cfEnableObjects($p, [button_no1, button_no2, button_no3, button_no4, button_no5, button_no6, button_main1]);
    }
  }
};

//-------------------------------------------------------------------------
// 코드를 이름으로 전환(수입,수출)
//-------------------------------------------------------------------------  
scwin.f_GridIOCheck3 = function () {
  for (var idx = 0; idx < ds_main1.getRowCount(); idx++) {
    if (ds_main1.getCellData(idx, "impExpClsCd") == "I") {
      ds_main1.setCellData(idx, 'impExpClsCd', "수입");
    } else if (ds_main1.getCellData(idx, "impExpClsCd") == "O") {
      ds_main1.setCellData(idx, 'impExpClsCd', "수출");
    }
  }
};
scwin.f_AddRow1 = function () {
  var row = ds_volRslts.getRowPosition();
  if (ds_volRslts.getRowCount() == 0) {
    $c.win.alert($p, "작업지시 등록 후 물량 실적을 등록할 수 있습니다.");
    return false;
  } else {
    ds_volRslts.insertRow();
    gr_volRslts.setFocusedCell(ds_volRslts.getRowCount() - 1, 0);
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"stvWrkIndictNo") = ds_volRslts.Namevalue(row,"stvWrkIndictNo");
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"wrkDt") = ds_volRslts.NameValue(row,"wrkDt");
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"shiftClsCd") = ds_volRslts.NameValue(row,"shiftClsCd");
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"wrkStHh") = ds_volRslts.NameValue(row,"wrkStHh");
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"wrkEndHh") = ds_volRslts.NameValue(row,"wrkEndHh"); 			
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"holdNo") = ds_volRslts.NameValue(row,"holdNo"); 			
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"impExpClsCd") = ds_volRslts.NameValue(row,"impExpClsCd"); 			
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"commCd") = ds_volRslts.NameValue(row,"commCd"); 			
    //ds_volRslts.NameValue(ds_volRslts.getRowPosition(),"commNm") = ds_volRslts.NameValue(row,"commNm"); 			
  }
};
scwin.f_AddRow2 = function () {
  if (ds_volRslts.getRowCount() == 0 || ds_volRslts.getCellData(ds_volRslts.getRowPosition(), "wrkIndictNo") == "") {
    $c.win.alert($p, "물량 계획 입력은 작업지시 등록 후 가능합니다.");
    return false;
  }
  ds_shiftingRslts.insertRow();
  gr_shiftingRslts.setFocusedCell(ds_shiftingRslts.getRowCount() - 1, 0);
  ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "wrkIndictNo", ds_volRslts.getCellData(ds_volRslts.getRowPosition(), "wrkIndictNo"));
  ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "holdNo", ds_shiftingRslts.getRowPosition() + 1);
  if (scwin.lobranCd.substring(0, 2) == "6A") {
    if (scwin.importVssl == "T") {
      ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "impExpClsCd", "I");
    } else {
      if (scwin.exportVssl == "T") {
        ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "impExpClsCd", "O");
      }
    }
    ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "commCd", "30000000");
    ds_shiftingRslts.setCellData(ds_shiftingRslts.getRowPosition(), "commNm", "일반화물");
  }
};
scwin.f_deleteRow1 = function () {
  if (ds_volRslts.getRowStatus(ds_volRslts.getRowPosition()) == "C") {
    ds_volRslts.removeRow(ds_volRslts.getRowPosition());
  } else {
    var row = ds_volRslts.getRowPosition();
    ds_volRslts.deleteRow(ds_volRslts.getRowPosition());
    ds_volRslts.setRowPosition(row);
  }
};
scwin.f_deleteRow2 = function () {
  if (ds_shiftingRslts.getRowStatus(ds_shiftingRslts.getRowPosition()) == "C") {
    ds_shiftingRslts.removeRow(ds_shiftingRslts.getRowPosition());
  } else {
    var row = ds_shiftingRslts.getRowPosition();
    ds_shiftingRslts.deleteRow(ds_shiftingRslts.getRowPosition());
    ds_shiftingRslts.setRowPosition(row);
  }
};
scwin.f_cancelRow1 = function () {
  if (ds_volRslts.getRowStatus(ds_volRslts.getRowPosition()) == "C") {
    ds_volRslts.removeRow(ds_volRslts.getRowPosition());
  } else {
    ds_volRslts.undoRow(ds_volRslts.getRowPosition());
  }
};
scwin.f_cancelRow2 = function () {
  if (ds_shiftingRslts.getRowStatus(ds_shiftingRslts.getRowPosition()) == "C") {
    ds_shiftingRslts.removeRow(ds_shiftingRslts.getRowPosition());
  } else {
    ds_shiftingRslts.undoRow(ds_shiftingRslts.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------  

scwin.f_openCommPopUpGrid = function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  if (gubun == 1) {
    // 품명 코드팝업			
    pCode = "";
    pName = ds_volRslts.getCellData(row, "commNm"); // 품명
  } else if (gubun == 2) {
    pCode = ds_volRslts.getCellData(row, "commCd");
    pName = ""; // 품명
  }
  scwin.currow1 = row;
  udc_comCode.setSelectId("retrieveCommInfo");
  rtnList = udc_comCode.cfCommonPopUpAsync(scwin.callbackCommInfo1 // XML상의 SELECT ID	
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , '품목/품명코드,품목/품명,구분' // Title순서	
  , '105,190,70' // 보여주는 각 컬럼들의 폭	
  , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
  , ",,,A4" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );

  // 품명코드       품명
  //$c.gus.cfSetGridReturnValue(rtnList, ds_volRslts, row, "commCd", "commNm");

  //if (rtnList != null && rtnList[0]!= "N/A" && rtnList[6] != "") {//컨테이너이면
  //ds_volRslts.NameValue(row, "wrkUnitCd") = "Q";
  //} else {
  //ds_volRslts.NameValue(row, "wrkUnitCd") = "";
  //}

  return false;
};
scwin.callbackCommInfo1 = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_volRslts, scwin.currow1, "commCd", "commNm");
};
scwin.f_openCommPopUpGrid2 = function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  if (gubun == 1) {
    // 품명 코드팝업			
    pCode = "";
    pName = ds_shiftingRslts.getCellData(row, "commNm"); // 품명
  } else if (gubun == 2) {
    pCode = ds_shiftingRslts.getCellData(row, "commCd");
    pName = ""; // 품명
  }
  scwin.currow2 = row;
  udc_comCode.setSelectId("retrieveCommInfo");
  rtnList = udc_comCode.cfCommonPopUpAsync(scwin.callbackCommInfo2 // XML상의 SELECT ID	
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , '품목/품명코드,품목/품명,구분' // Title순서	
  , '105,190,70' // 보여주는 각 컬럼들의 폭	
  , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
  , ",,,A4" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );

  // 품명코드       품명
  //cfSetGridReturnValue(rtnList, ds_shiftingRslts, row, "commCd", "commNm");

  //if (rtnList != null && rtnList[0]!= "N/A" && rtnList[6] != "") {//컨테이너이면
  //ds_volRslts.NameValue(row, "wrkUnitCd") = "Q";
  //} else {
  //ds_volRslts.NameValue(row, "wrkUnitCd") = "";
  //}

  return false;
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
/*
function f_CopyDataRow(sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded){

    try {
	
        if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
        if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";

        if (sourceColumns == null) sourceColumns = f_GetColumnNames(sourceDataset);
        if (targetColumns == null) targetColumns = sourceColumns;
        if (sourceRow == null) sourceRow = sourceDataset.RowPosition;
        if (targetRow == null) targetRow = f_AddDataRow(targetDataset);

        for (var i=0; i < sourceColumns.length; i++) {
            if (cfIsNull(sourceColumns[i]) || cfIsNull(targetColumns[i])) continue;
                targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
            if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
        }
           
        return targetRow;
    	
    } catch (e) {
        cfAlertMsg("[f_CopyDataRow]" + e);
    }
}
*/

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
/*
function f_GetColumnNames(dataSet) {
    try {
        if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
        if (dataSet.CountColumn == 0) return null;

        var rtnArray = new Array(dataSet.CountColumn);

        for (var i=0; i < dataSet.CountColumn; i++) {
            rtnArray[i] = dataSet.ColumnID(i+1);
        }

        if (rtnArray.length == 0)
            return null
        else
            return rtnArray
    } catch (e) {
        cfAlertMsg("[f_GetColumnNames] " + e.Description);
    }
}
*/

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
/*
function f_AddDataRow(dataSet){

        dataSet.AddRow();
        return dataSet.RowPosition;
  	
}
*/

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  ed_cvsslMgntNo.focus();
};
scwin.callbackCommInfo2 = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_shiftingRslts, scwin.currow2, "commCd", "commNm");
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.button_main1_onclick = function (e) {
  scwin.f_mainSave();
};
scwin.ds_main1_ondataload = function () {
  for (var i = 0; i < ds_main1.getRowCount(); i++) {
    var impCvsslCompleteDtTm = ds_main1.getCellData(i, "impCvsslCompleteDt") + ds_main1.getCellData(i, "impCvsslCompleteTm");
    var expCvsslCompleteDtTm = ds_main1.getCellData(i, "expCvsslCompleteDt") + ds_main1.getCellData(i, "expCvsslCompleteTm");
    ds_main1.setCellData(i, "impCvsslCompleteDtTm", impCvsslCompleteDtTm);
    ds_main1.setCellData(i, "expCvsslCompleteDtTm", expCvsslCompleteDtTm);
  }
  ds_main1.setRowPosition(0);
};
scwin.f_retrieveWkrStp = function () {
  const params = {
    sysCd: "WrkStpEBC",
    queryId: "retreiveWrkStpL4"
    //param1  : "" ,
  };

  //데이터셋에 정보설정
  dma_wrkStp.setJSON(params);
  $c.sbm.execute($p, sbm_wrkStp);
};
scwin.sbm_wrkStp_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_wkrStp.setJSON(e.responseJSON.GAUCE);
    var cnt = ds_wkrStp.getRowCount();
    if (cnt == 0) {
      return;
    } else {
      ds_wkrStp.insertRow(0);
      ds_wkrStp.setCellData(0, "wrkStpCd", "");
      ds_wkrStp.setCellData(0, "wrkStpNm", "");
      ds_wkrStp.setCellData(0, "upperWrkStpCd", "");
    }
  }
};
scwin.sbm_search_submitdone = function (e) {
  if (ds_main1.getRowCount() == 0) {
    $c.win.alert($p, "미등록된 본선관리번호 입니다. 확인후 다시 입력해주세요");
    scwin.f_DivHoldEachWorkPlanList();
    ed_cvsslMgntNo.setValue("");
    ed_cvsslMgntNo.focus();
  } else {
    scwin.f_DivHoldEachWorkPlanList();
  }

  //scwin.f_DivHoldEachWorkPlanList();
  scwin.f_GridIOCheck3();
  scwin.chk_input = "F";
};
scwin.ds_volRslts_ondataload = function () {
  var options = {};
  options.sortIndex = "stvWrkIndictNo";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_volRslts.multisort(options);
  ds_volRslts.reform();
  spa_cnt1.setValue(ds_volRslts.getRowCount());
};
scwin.ds_shiftingRslts_ondataload = function () {
  var options = {};
  options.sortIndex = "stvWrkIndictNo";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_shiftingRslts.multisort(options);
  ds_shiftingRslts.reform();
  spa_cnt2.setValue(ds_shiftingRslts.getRowCount());
};
scwin.gr_volRslts_oneditend = function (row, columnIndex, value) {
  //차량종류변경시 규격 필터링

  var colid = gr_volRslts.getColumnID(columnIndex);
  console.log(colid);
  if (colid == "shiftClsCd") {
    if (value == "D") {
      ds_volRslts.setCellData(row, "wrkStHh", "0800");
      ds_volRslts.setCellData(row, "wrkEndHh", "1700");
    } else if (value == "N") {
      ds_volRslts.setCellData(row, "wrkStHh", "1900");
      ds_volRslts.setCellData(row, "wrkEndHh", "2200");
    } else if (value == "M") {
      ds_volRslts.setCellData(row, "wrkStHh", "2200");
      ds_volRslts.setCellData(row, "wrkEndHh", "0700");
    }
  } else if (colid == "commNm") {
    scwin.olddata = ds_volRslts.getCellData(row, colid);
  }
  /*
  if(colid == "impExpClsCd"){    
      if(value== "I"){    	
          if(scwin.importVssl=="F" && scwin.exportVssl=="T"){
              $c.win.alert("수출 본선이므로 수입물량실적은 입력할 수 없습니다.");
              ds_volRslts.setCellData(row,"impExpClsCd", "O");
          }   	
      }
  	
      if(value== "O"){    	
          if(scwin.exportVssl=="F" && scwin.importVssl=="T"){
              $c.win.alert("수입 본선이므로 수출물량실적은 입력할 수 없습니다.");
              ds_volRslts.setCellData(row,"impExpClsCd", "I");
          }   	
      }
  }
  */
};
scwin.gr_volRslts_onafteredit = function (row, columnIndex, value) {
  var colid = gr_volRslts.getColumnID(columnIndex);
  if (colid == "impExpClsCd") {
    if (value == "I") {
      if (scwin.importVssl == "F" && scwin.exportVssl == "T") {
        $c.win.alert($p, "수출 본선이므로 수입물량실적은 입력할 수 없습니다.");
        ds_volRslts.setCellData(row, "impExpClsCd", "O");
      }
    }
    if (value == "O") {
      if (scwin.exportVssl == "F" && scwin.importVssl == "T") {
        $c.win.alert($p, "수입 본선이므로 수출물량실적은 입력할 수 없습니다.");
        ds_volRslts.setCellData(row, "impExpClsCd", "I");
      }
    }
  } else if (colid == "wrkQty" || colid == "wrkWt" || colid == "wrkCbm") {
    // tobe추가 : 빈값입력시 자동 0셋팅
    if (value == "") scwin.emtpyZero(row, colid, this.getDataListInfo());

    //for=gr_volRslts event=OnExit(row,colid,olddata)
  } else if (colid == "commNm") {
    if (ds_volRslts.getCellData(row, colid) != "" && ds_volRslts.getCellData(row, colid) != scwin.olddata) {
      ds_volRslts.setCellData(row, "commCd", "");
      scwin.f_openCommPopUpGrid(1, row, 'T');
    } else if (ds_volRslts.getCellData(row, colid) == "") {
      ds_volRslts.setCellData(row, "commCd", "");
      ds_volRslts.setCellData(row, "commNm", "");
    }
  }
};
scwin.gr_shiftingRslts_oneditend = function (row, columnIndex, value) {
  //차량종류변경시 규격 필터링
  var colid = gr_shiftingRslts.getColumnID(columnIndex);
  if (colid == "shiftClsCd") {
    if (value == "D") {
      ds_shiftingRslts.setCellData(row, "wrkStHh", "0800");
      ds_shiftingRslts.setCellData(row, "wrkEndHh", "1700");
    } else if (value == "N") {
      ds_shiftingRslts.setCellData(row, "wrkStHh", "1900");
      ds_shiftingRslts.setCellData(row, "wrkEndHh", "2200");
    } else if (value == "M") {
      ds_shiftingRslts.setCellData(row, "wrkStHh", "2200");
      ds_shiftingRslts.setCellData(row, "wrkEndHh", "0700");
    }
  } else if (colid == "commNm") {
    scwin.olddata = ds_shiftingRslts.getCellData(row, colid);
  }
  /*
  if(colid == "impExpClsCd"){    
      if(value== "I"){    	
          if(scwin.importVssl=="F" && scwin.exportVssl=="T"){
              $c.win.alert("수출 본선이므로 수입물량실적은 입력할 수 없습니다.");
              ds_shiftingRslts.setCellData(row,"impExpClsCd", "O");
          }   	
      }
  	
      if(value== "O"){    	
          if(scwin.exportVssl=="F" && scwin.importVssl=="T"){
              $c.win.alert("수입 본선이므로 수출물량실적은 입력할 수 없습니다.");
              ds_shiftingRslts.setCellData(row,"impExpClsCd", "I");
          }   	
      }
  }
  */
};
scwin.gr_shiftingRslts_onafteredit = function (row, columnIndex, value) {
  var colid = gr_shiftingRslts.getColumnID(columnIndex);
  if (colid == "impExpClsCd") {
    if (value == "I") {
      if (scwin.importVssl == "F" && scwin.exportVssl == "T") {
        $c.win.alert($p, "수출 본선이므로 수입물량실적은 입력할 수 없습니다.");
        ds_shiftingRslts.setCellData(row, "impExpClsCd", "O");
      }
    }
    if (value == "O") {
      if (scwin.exportVssl == "F" && scwin.importVssl == "T") {
        $c.win.alert($p, "수입 본선이므로 수출물량실적은 입력할 수 없습니다.");
        ds_shiftingRslts.setCellData(row, "impExpClsCd", "I");
      }
    }
  } else if (colid == "wrkQty" || colid == "wrkWt" || colid == "wrkCbm") {
    // tobe추가 : 빈값입력시 자동 0셋팅
    if (value == "") scwin.emtpyZero(row, colid, this.getDataListInfo());

    //for=gr_shiftingRslts event=OnExit(row,colid,olddata)
  } else if (colid == "commNm") {
    if (ds_shiftingRslts.getCellData(row, colid) != "" && ds_shiftingRslts.getCellData(row, colid) != scwin.olddata) {
      ds_shiftingRslts.setCellData(row, "commCd", "");
      scwin.f_openCommPopUpGrid2(1, row, 'T');
    } else if (ds_shiftingRslts.getCellData(row, colid) == "") {
      ds_shiftingRslts.setCellData(row, "commCd", "");
      ds_shiftingRslts.setCellData(row, "commNm", "");
    }
  }
};
scwin.gr_volRslts_onrowindexchange = function (row, oldRow) {
  if (ds_volRslts.getCellData(row, "impExpClsCd") == "I") {
    if (scwin.impCvsslCompleteYn == "완료") {
      //gr_volRslts.Editable = false;	
      gr_volRslts.setReadOnly("grid", true);
    } else {
      //gr_volRslts.Editable = true;		
      gr_volRslts.setReadOnly("grid", false);
    }
  } else if (ds_volRslts.getCellData(row, "impExpClsCd") == "O") {
    if (scwin.expCvsslCompleteYn == "완료") {
      //gr_volRslts.Editable = false;		
      gr_volRslts.setReadOnly("grid", true);
    } else {
      //gr_volRslts.Editable = true;		
      gr_volRslts.setReadOnly("grid", false);
    }
  } else {
    //gr_volRslts.Editable = true;
    gr_volRslts.setReadOnly("grid", false);
  }
};
scwin.gr_shiftingRslts_onrowindexchange = function (row, oldRow) {
  if (ds_shiftingRslts.getCellData(row, "impExpClsCd") == "I") {
    if (scwin.impCvsslCompleteYn == "완료") {
      //gr_shiftingRslts.Editable = false;
      gr_shiftingRslts.setReadOnly("grid", true);
    } else {
      //gr_shiftingRslts.Editable = true;
      gr_shiftingRslts.setReadOnly("grid", false);
    }
  } else if (ds_shiftingRslts.getCellData(row, "impExpClsCd") == "O") {
    if (scwin.expCvsslCompleteYn == "완료") {
      //gr_shiftingRslts.Editable = false;
      gr_shiftingRslts.setReadOnly("grid", true);
    } else {
      //gr_shiftingRslts.Editable = true;
      gr_shiftingRslts.setReadOnly("grid", false);
    }
  } else {
    //gr_shiftingRslts.Editable = true;
    gr_shiftingRslts.setReadOnly("grid", false);
  }
};

/*
각 그리드 OnClick(row,Colid),OnColumnPosChanged(row,colid) 로직 생략(중복이슈)
*/

scwin.gr_volRslts_ontextimageclick = function (row, columnIndex) {
  var colid = gr_volRslts.getColumnID(columnIndex);
  switch (colid) {
    /*
    case "wrkDt":
        cfOpenCalendar(gr_volRslts, row, colid);
        break;
    */
    case "commNm":
      scwin.f_openCommPopUpGrid(1, row, 'F');
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(2, row, 'F');
      break;
  }
};
scwin.gr_shiftingRslts_ontextimageclick = function (row, columnIndex) {
  var colid = gr_shiftingRslts.getColumnID(columnIndex);
  switch (colid) {
    /*
    case "wrkDt":
        cfOpenCalendar(gr_shiftingRslts, row, colid);
        break;
    */
    case "commNm":
      scwin.f_openCommPopUpGrid2(1, row, 'F');
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid2(2, row, 'F');
      break;
  }
};

// aftereidt으로 이동(팝업창에서 조회된 값 더블클릭후, 셀에 값 변경시, 팝업창 두번뜨는 이슈로 변경)
// scwin.ds_volRslts_oncelldatachange = function (info) {
//     // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}

//     var colid = info.colID;
//     var row = info.rowIndex;
//     var olddata = info.oldValue;

//     switch (colid) {
// 		case "commNm":
// 			if (ds_volRslts.getCellData(row,colid) != "" && ds_volRslts.getCellData(row,colid) != olddata){
// 				ds_volRslts.setCellData(row,"commCd",  "");
// 				scwin.f_openCommPopUpGrid(1,row, 'T');
// 			} else if(ds_volRslts.getCellData(row,colid) == "") {
// 				ds_volRslts.setCellData(row,"commCd",  "");
// 				ds_volRslts.setCellData(row,"commNm",  "");
// 			}
// 			break;
//     }
// };

// aftereidt으로 이동(팝업창에서 조회된 값 더블클릭후, 셀에 값 변경시, 팝업창 두번뜨는 이슈로 변경)
// scwin.ds_shiftingRslts_oncelldatachange = function (info) {
// 	// {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}

// 	var colid = info.colID;
// 	var row = info.rowIndex;
// 	var olddata = info.oldValue;

// 	switch (colid) {
// 		case "commNm":
// 			if (ds_shiftingRslts.getCellData(row, colid) != "" && ds_shiftingRslts.getCellData(row, colid) != olddata) {
// 				ds_shiftingRslts.setCellData(row, "commCd", "");
// 				scwin.f_openCommPopUpGrid2(1, row, 'T');
// 			} else if (ds_shiftingRslts.getCellData(row, colid) == "") {
// 				ds_shiftingRslts.setCellData(row, "commCd", "");
// 				ds_shiftingRslts.setCellData(row, "commNm", "");
// 			}
// 			break;
// 	}
// };

scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 빈값일시, 자동 0 셋팅
//-------------------------------------------------------------------------
scwin.emtpyZero = function (rowIndex, columnId, datalistInfo) {
  var datalist = $p.getComponentById(datalistInfo.id);
  datalist.setCellData(rowIndex, columnId, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_cvsslMgntNo',style:'',maxlength:'8',mandatory:'true',objType:'Data',validExp:'본선관리번호:yes',ref:'data:dma_search.cvsslMgntNo',title:'본선관리번호',allowChar:'0-9,A-Z,a-z',validateOnInput:'true','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_comCode',codeId:'ed_comCode','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_pchsDeptCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDeptCd_onviewchangeNameEvent',id:'udc_comCode',nameId:'ed_comCodeNm',popupID:'',selectID:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'본선정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.vsslNm',style:'',userData2:'',id:'vsslNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.lineNm',style:'',userData2:'',id:'lineNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.shpCoNm',style:'',userData2:'',id:'shpCoNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업장',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.wrkPlNm',style:'',userData2:'',id:'wrkPlNm',label:'데이타',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항(예정)일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.arrvlportDtm',style:'',userData2:'',id:'arrvlportDtm',label:'데이타',class:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출항(예정)일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.deprtportDtm',style:'',userData2:'',id:'deprtportDtm',label:'데이타',class:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'양적하지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.dchrDropRgn',style:'',userData2:'',id:'dchrDropRgn',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일일계획여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.impPortcnt',style:'',userData2:'',id:'impPortcnt',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입대표화종',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.impKcg',style:'',userData2:'',id:'impRepKcg',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.expPortcnt',style:'',userData2:'',id:'expPortcnt',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출대표화종',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.expKcg',style:'',userData2:'',id:'expRepKcg',label:'데이타',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입본선완료여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.impCvsslCompleteYn',style:'',userData2:'',id:'impCvsslCompleteYn',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수입본선완료일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.impCvsslCompleteDtTm',style:'',userData2:'',id:'impCvsslCompleteDtm',label:'데이타',class:'',displayFormat:'####/##/## #####'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출본선완료여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.expCvsslCompleteYn',style:'',userData2:'',id:'expCvsslCompleteYn',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출본선완료일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:ds_main1.expCvsslCompleteDtTm',style:'',userData2:'',id:'expCvsslCompleteDtm',label:'데이타',class:'',displayFormat:'####/##/## #####'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'물량실적',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_volRslts',gridUpYn:'N',grdDownOpts:'{"fileName":"물량실적.xlsx","sheetName" : "물량실적","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_volRslts',style:'',autoFit:'none',id:'gr_volRslts',visibleRowNum:'6',class:'wq_gvw','ev:oneditend':'scwin.gr_volRslts_oneditend','ev:onrowindexchange':'scwin.gr_volRslts_onrowindexchange','ev:ontextimageclick':'scwin.gr_volRslts_ontextimageclick',rowStatusVisible:'true',gridName:'물량실적','ev:onafteredit':'scwin.gr_volRslts_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'실적',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'작업일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'Shift',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'시작',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'종료',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'HOLD',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'수출입<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'품목/<br/>품명코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column19',value:'품목/품명',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column70',value:'작업계획물량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column61',value:'실적물량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'물량지시',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'물량순번',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'작업<br/>단계1',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'작업<br/>단계2',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'작업<br/>단계3',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'작업<br/>단계4',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'수량',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'중량(톤)',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'CBM',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'중량(톤)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'CBM',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'completeProcYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'stvWrkIndictNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkDt',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'shiftClsCd',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',displayFormat:'##:##',allowChar:'0-9',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',displayFormat:'##:##',allowChar:'0-9',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'holdNo',value:'',displayMode:'label',maxLength:'2',displayFormat:'##',allowChar:'0-9',dataType:'number',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'impExpClsCd',value:'',displayMode:'label',validExp:'수출입구분:yes',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'textImage',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left',viewType:'default',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'true',allowChar:'0-9',validateOnInput:'true',displayFormat:'#,##0',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planWt',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000',allowChar:'0-9,.',validateOnInput:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planCbm',value:'',displayMode:'label',textAlign:'right',maxLength:'15.3',dataType:'float',displayFormat:'#,##0.000',readOnly:'true',validateOnInput:'true',allowChar:'0-9,.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',allowChar:'0-9',validateOnInput:'true',displayFormat:'#,##0',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkWt',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'15.3',validateOnInput:'true',displayFormat:'#,##0.000',allowChar:'0-9,.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkCbm',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000',allowChar:'0-9,.',validateOnInput:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsIndictNo',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'volSeq',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd1',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd2',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd3',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd4',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'planQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'0.000',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.3',displayFormat:'#,###.##0',expression:'sum(\'planWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'0.000',displayMode:'label',textAlign:'right',maxLength:'.3',dataType:'float',displayFormat:'#,###.##0',expression:'sum(\'planCbm\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'wrkQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'0.000',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.3',displayFormat:'#,###.##0',expression:'sum(\'wrkWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column57',value:'0.000',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.3',displayFormat:'#,###.##0',expression:'sum(\'wrkCbm\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_cnt1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',gridID:'gr_volRslts',rowAddFunction:'scwin.f_AddRow1',rowDelFunction:'scwin.f_deleteRow1',cancelFunction:'scwin.f_cancelRow1',rowAddUserAuth:'C',rowDelUserAuth:'U',btnRowAddObj:'button_no1',btnRowDelObj:'button_no2',btnCancelObj:'button_no3'}}]}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'ed_rmk',class:'',ref:'data:ds_volRslts.rmk'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Shifting실적물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_shiftingRslts',grdDownOpts:'{"fileName":"shifting실적물량조회.xlsx","sheetName" : "shifting실적물량조회","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_shiftingRslts',id:'gr_shiftingRslts',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oneditend':'scwin.gr_shiftingRslts_oneditend','ev:onrowindexchange':'scwin.gr_shiftingRslts_onrowindexchange','ev:ontextimageclick':'scwin.gr_shiftingRslts_ontextimageclick',rowStatusVisible:'true',gridName:'작업지시','ev:onafteredit':'scwin.gr_shiftingRslts_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'실적',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'작업일자',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',style:'',value:'Shift',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',style:'',value:'시작',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',style:'',value:'종료',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column3',inputType:'text',rowSpan:'2',style:'',value:'HOLD',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column5',inputType:'text',rowSpan:'2',style:'',value:'수출입<br/>구분',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column7',inputType:'text',rowSpan:'2',style:'',value:'품목/품명',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',style:'',value:'품목/<br/>품명코드',width:'180',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column61',inputType:'text',rowSpan:'',style:'',value:'실적물량',width:'210',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',hidden:'true',id:'column52',inputType:'text',rowSpan:'2',style:'',value:'물량지시',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',hidden:'true',id:'column49',inputType:'text',rowSpan:'2',style:'',value:'물량순번',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column46',inputType:'text',rowSpan:'2',style:'',value:'작업<br/>단계',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'수량',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'중량(톤)',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'CBM',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'completeProcYn',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'calendar',style:'',value:'',width:'80',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',style:'',value:'',width:'80',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'',width:'80',allowChar:'0-9',displayFormat:'##:##',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'80',allowChar:'0-9',displayFormat:'##:##',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',style:'',value:'',width:'90',allowChar:'0-9',displayFormat:'##',validateOnInput:'true',dataType:'number',mandatory:'true',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',style:'',value:'',width:'90',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',style:'',value:'',width:'120',viewType:'default',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',textAlign:'left',value:'',width:'180',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkQty',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',allowChar:'0-9',validateOnInput:'true',displayFormat:'#,##0',maxLength:'15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkWt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000',allowChar:'0-9,.',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkCbm',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000',allowChar:'0-9,.',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsIndictNo',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'volSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd1',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFTING1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0007'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFTING2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0008'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'합계',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'expression',style:'',textAlign:'right',value:'0',width:'100',dataType:'number',expression:'sum(\'wrkQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'expression',style:'',textAlign:'right',value:'0.000',width:'100',dataType:'float',expression:'sum(\'wrkWt\')',displayFormat:'#,##0.000',maxLength:'.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'expression',style:'',textAlign:'right',value:'0.000',width:'100',dataType:'float',maxLength:'.3',expression:'sum(\'wrkCbm\')',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',gridID:'gr_shiftingRslts',rowAddFunction:'scwin.f_AddRow2',rowDelFunction:'scwin.f_deleteRow2',cancelFunction:'scwin.f_cancelRow2',rowAddUserAuth:'C',rowDelUserAuth:'U',btnRowAddObj:'button_no4',btnRowDelObj:'button_no5',btnCancelObj:'button_no6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left-inner',id:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'button_main1',label:'저장',style:'',userAuth:'U','ev:onclick':'scwin.button_main1_onclick'}}]}]}]}]}]}]}]})