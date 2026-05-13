/*amd /ui/ds/op/coilwrk/op_810_01_01b.xml 76933 29673f7d8ed939c88958bf1efaf555c15c26de97c2e6b1df3fda2d0287aa0e2d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'BerthNonUsableEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveLobranCodeList'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true','ev:ondataload':'scwin.ds_lobran_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true','ev:ondataload':'scwin.ds_order_ondataload','ev:submitdone':'scwin.ds_order_submitdone'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'preFixCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preFixDtl',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'입출고 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선 관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntend',name:'입항일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stEtDt',name:'작업예정 시작일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'stEtShift',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endEtDt',name:'작업예정 종료일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'endEtShift',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOutYn',name:'입출고여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coilList',saveRemovedData:'true','ev:ondataload':'scwin.ds_coilList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coilNo',name:'코일번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thickness',name:'두께',dataType:'number'}},{T:1,N:'w2:column',A:{id:'width',name:'폭',dataType:'number'}},{T:1,N:'w2:column',A:{id:'length',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'material',name:'재질',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'총중량;(KG)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWgt',name:'순중량;(KG)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bl',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'고객사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dest',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOutYn',name:'입출고여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEndDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stEtDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endEtDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stEtDt',name:'작업예정시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endEtDt',name:'작업예정종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coilListAll',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coilNo',name:'코일번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thickness',name:'두께',dataType:'number'}},{T:1,N:'w2:column',A:{id:'width',name:'너비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'length',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'material',name:'자재',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'Receipt Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'총중량(KG)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWgt',name:'N.W(Net Weight)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bl',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'고객사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dest',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'입고오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inYn',name:'입고여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inHh',name:'입고시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outYn',name:'출고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outDt',name:'생산일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outHh',name:'출고시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locCd',name:'LOCATION 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outClsCd',name:'출고구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStvWrkIndctNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outOdrNo',name:'반출오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outStvWrkIndctNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_coliList_down',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'요청번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilNo',name:'코일번호'}},{T:1,N:'w2:column',A:{dataType:'number',id:'thickness',name:'두께'}},{T:1,N:'w2:column',A:{dataType:'number',id:'width',name:'폭'}},{T:1,N:'w2:column',A:{dataType:'number',id:'length',name:'길이'}},{T:1,N:'w2:column',A:{dataType:'text',id:'material',name:'재질'}},{T:1,N:'w2:column',A:{dataType:'text',id:'type',name:'종류'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cnt',name:'개수'}},{T:1,N:'w2:column',A:{dataType:'number',id:'grossWgt',name:'총중량;(KG)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'netWgt',name:'순중량;(KG)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bl',name:'BL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'customer',name:'고객사'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dest',name:'도착지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inOutYn',name:'입출고여부'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lobran',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.coilwrk.RetrieveCoilWrkOrderListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_order","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.coilwrk.SaveCoilWrkOrderInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_order","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ds.op.coilwrk.SaveCoilWrkOrderInfoDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_coilList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ds.op.coilwrk.RetrieveCoilWrkOrderInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_coilList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coilList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save3',action:'/ds.op.coilwrk.SaveCoilWrkOrderInfoDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_coilListAll","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save3_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// *추가 확인사항 * 
//엑셀 업로드 체크

//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
scwin.nowDt = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.nextDt = WebSquare.date.dateAdd(scwin.nowDt, "30");
scwin.curRow = "";
scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.importVssl = "F";
scwin.exportVssl = "F";
scwin.impCvsslCompleteYn = "";
scwin.expCvsslCompleteYn = "";
scwin.oldData = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // gr_coilList_down.hide();
  grd_hide.hide();
  $c.sbm.execute($p, sbm_lobran);
  const codeOptions = [{
    grpCd: "CR001",
    compID: "acb_ioClsCd, gr_order:ioClsCd"
  },
  // 셀렉트
  {
    grpCd: "OP830",
    compID: "gr_order:preFixCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.udcOnCompleted();
};

//-------------------------------------------------------------------------
// 기본값 세팅하기
//-------------------------------------------------------------------------
setTimeout(scwin.udcOnCompleted = function () {
  udc_reqDt.setInitDate(scwin.nowDt, scwin.nextDt);
}, 150);

//-------------------------------------------------------------------------
// 조회 버튼 클릭 f_Retrieve
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  // 검색조건 필수 입력 체크
  if (ed_clntNo.getValue() == "") {
    if (ica_reqStDt.getValue() == "" && ica_reqEndDt.getValue() == "") {
      $c.win.alert($p, "화주 또는 요청일자를 입력해 주시기 바랍니다.");
      return;
    }
  }
  if (ica_reqStDt.getValue() != "") {
    if (ica_reqStDt.getValue() > ica_reqEndDt.getValue()) {
      $c.win.alert($p, "요청일자를 확인해 주시기 바랍니다.");
      ed_reqStDt.focus();
      return;
    }
  }
  if (ica_stEtDt.getValue() != "") {
    if (ica_stEtDt.getValue() > ica_endEtDt.getValue()) {
      $c.win.alert($p, "작업예정일자를 확인해 주시기 바랍니다.");
      ed_stEtDt.focus();
      return;
    }
  }
  if (ica_arvIntendDt.getValue() != "") {
    if (ica_arvIntendDt.getValue() > ica_dptIntendDt.getValue()) {
      $c.win.alert($p, "입항일자를 확인해 주시기 바랍니다.");
      ed_arvIntendDt.focus();
      return;
    }
  }

  // if(! await $c.gus.cfValidate([ed_clntNo, ica_reqStDt, ica_reqEndDt ])){
  // 		// $c.win.alert("화주 또는 요청일자를 입력해 주시기 바랍니다.");
  // 		return;
  // }

  dma_search.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("ioClsCd", acb_ioClsCd.getValue());
  dma_search.set("reqStDt", ica_reqStDt.getValue());
  dma_search.set("reqEndDt", ica_reqEndDt.getValue());
  dma_search.set("stEtDt", ica_stEtDt.getValue());
  dma_search.set("endEtDt", ica_endEtDt.getValue());
  dma_search.set("arvIntendDt", ica_arvIntendDt.getValue());
  dma_search.set("dptIntendDt", ica_dptIntendDt.getValue());
  dma_search.set("lobranCd", acb_lobran.getValue());
  dma_search.set("wrkPlCd", ed_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 화주요청정보(상단그리드) 저장 버튼 / f_mainSave
//-------------------------------------------------------------------------
scwin.btn_mainSave_onClick = async function (e) {
  let curRow = ds_order.getRowPosition();
  let validArray = [{
    id: "clntNm",
    name: "화주",
    mandatory: true
  }, {
    id: "reqDt",
    name: "요청일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD",
    length: 8
  }, {
    id: "ioClsCd",
    name: "업무",
    mandatory: true
  }, {
    id: "stEtDt",
    name: "작업일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD",
    length: 8
  }, {
    id: "stEtShift",
    name: "시프트",
    mandatory: true
  }, {
    id: "endEtDt",
    name: "작업일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD",
    length: 8
  }, {
    id: "endEtShift",
    name: "시프트",
    mandatory: true
  }];
  if (ds_order.getModifiedIndex().length > 0) {
    if (!(await $c.gus.cfValidateGrid($p, gr_order, null, null, validArray, "화주요청정보"))) {
      return;
    }
    for (i = 0; i < ds_order.getTotalRow(); i++) {
      if (ds_order.getCellData(i, "stEtDt") > ds_order.getCellData(i, "endEtDt")) {
        $c.win.alert($p, "작업예정시작일자가 종료일자보다 큽니다.");
        ds_order.setRowPosition(i);
        gr_order.setFocusedCell(i, "stEtDt");
        return;
      }
      if (ds_order.getCellData(i, "stEtDt") == ds_order.getCellData(i, "endEtDt") && ds_order.getCellData(i, "stEtShift") == "N" && ds_order.getCellData(i, "endEtShift") == "D") {
        $c.win.alert($p, "작업예정시작시프트와 종료시프트를 확인해 주시기 바랍니다.");
        ds_order.setRowPosition(i);
        gr_order.setFocusedCell(i, "stEtShift");
        return;
      }
      if (ds_order.getCellData(i, "ioClsCd") == "IO" || ds_order.getCellData(i, "ioClsCd") == "I") {
        if (ds_order.getCellData(i, "cvsslMgntNo") == "" && ds_order.getCellData(i, "wrkPlCd") == "") {
          $c.win.alert($p, "본선관리번호 또는 작업장을 입력해 주시기 바랍니다.");
          ds_order.setRowPosition(i);
          gr_order.setFocusedCell(i, "cvsslMgntNo");
          return;
        }
      }
      if (ds_order.getRowStatus(i) == "D") {
        if (ds_order.getCellData(i, "inOutYn") != "0") {
          $c.win.alert($p, "입출고 실적이 있는 오더정보는 삭제할 수 없습니다.");
          return;
        }
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "요청정보")); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 코일내역(하단그리드) 저장 버튼 / f_mainSave2
//-------------------------------------------------------------------------
scwin.btn_mainSave2_onClick = async function (e) {
  let curRow = ds_order.getRowPosition();
  // if(ds_coil)

  if (ds_coilList.getModifiedIndex().length > 0) {
    // if(! await $c.gus.cfValidate([gr_coilList]) ) {
    //     return;	
    // } 

    for (i = 0; i < ds_coilList.getTotalRow(); i++) {
      if (ds_coilList.getCellData(i, "cnt") == "") {
        console.log("여깅 와야하는디");
        $c.win.alert($p, i + 1 + "번째 개수를 입력해 주시기 바랍니다.");
        ds_coilList.setRowPosition(i);
        gr_coilList.setFocusedCell(i, "cnt");
        return;
      }
      if (ds_coilList.getCellData(i, "netWgt") == 0) {
        $c.win.alert($p, i + 1 + "번째 행의 순중량은 0이 될 수 없습니다.");
        ds_coilList.setRowPosition(i);
        gr_coilList.setFocusedCell(i, "netWgt");
        return;
      }
      if (ds_order.getCellData(ds_order.getRowPosition(), "ioClsCd") == "IO" || ds_order.getCellData(ds_order.getRowPosition(), "ioClsCd") == "I") {
        if (ds_coilList.getCellData(i, "coilNo") == "") {
          $c.win.alert($p, i + 1 + "번째 코일번호를 입력해 주시기 바랍니다.");
          ds_coilList.setRowPosition(i);
          gr_coilList.setFocusedCell(i, "coilNo");
          return;
        }
      }
      if (ds_coilList.getCellData(i, "odrNo") != ds_order.getCellData(ds_order.getRowPosition(), "odrNo")) {
        $c.win.alert($p, i + 1 + "번째 요청번호를 확인해 주시기 바랍니다.");
        ds_coilList.setRowPosition(i);
        gr_coilList.setFocusedCell(i, "odrNo");
        return;
      }
      if (ds_coilList.getRowStatus(i) == "C") {
        let coilNo = ds_coilList.getCellData(i, "coilNo");
        for (j = 0; j < ds_coilList.getTotalRow(); j++) {
          if (ds_coilList.getRowStatus(j) == "R") {
            let coilNoo = ds_coilList.getCellData(j, "coilNo");
            if (coilNoo == coilNo && coilNo != "") {
              $c.win.alert($p, "동일한 코일번호가 존재합니다.");
              ds_coilList.setRowPosition(i);
              gr_coilList.setFocusedCell(i, "coilNo");
              return;
            }
          }
        }
      }
      if (ds_coilList.getRowStatus(i) == "D") {
        if (ds_coilList.getCellData(i, "inOutYn") != "0") {
          $c.win.alert($p, "입출고 실적이 있는 오더정보는 삭제할 수 없습니다.");
          return;
        }
      }
    }
    if (ds_order.getCellData(ds_order.getRowPosition(), "preFixCd") != "") {
      let preFixDtl = ds_order.getCellData(ds_order.getRowPosition(), "preFixDtl");
      if (await $c.win.confirm($p, "PREFIX 문자를 포함하여 저장하시겠습니까?(" + preFixDtl + ")")) {
        for (let i = 0; i < ds_coilList.getTotalRow(); i++) {
          if (ds_coilList.getRowStatus(i) == "C") {
            ds_coilList.setCellData(i, "coilNo", preFixDtl + ds_coilList.getCellData(i, "coilNo"));
          }
        }
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_save2.userData1 = "noError";
      await $c.sbm.execute($p, sbm_save2);
    }
  } else {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "코일내역")); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 일괄생성 클릭 f_saveAll
//-------------------------------------------------------------------------
scwin.btn_saveAll_onClick = async function (e) {
  let curRow = ds_order.getRowPosition();
  if (ds_coilList.getTotalRow() == 0) {
    $c.win.alert($p, "코일내역을 먼저 입력해주세요.");
    return;
  }
  if (ds_order.getCellData(curRow, "ioClsCd") != "IO") {
    $c.win.alert($p, "입출고구분이 입출고인 경우에만 일괄생성이 가능합니다.");
    return;
  }
  if (ds_order.getCellData(curRow, "inOutYn") == "0" || ds_order.getCellData(curRow, "inOutYn") == undefined) {
    ds_coilListAll.removeAll();
    for (i = 0; i < ds_coilList.getTotalRow(); i++) {
      ds_coilListAll.insertRow();
      ds_coilListAll.setCellData(i, "coilNo", ds_coilList.getCellData(i, "coilNo"));
      ds_coilListAll.setCellData(i, "thickness", ds_coilList.getCellData(i, "thickness"));
      ds_coilListAll.setCellData(i, "width", ds_coilList.getCellData(i, "width"));
      ds_coilListAll.setCellData(i, "length", ds_coilList.getCellData(i, "length"));
      ds_coilListAll.setCellData(i, "material", ds_coilList.getCellData(i, "material"));
      ds_coilListAll.setCellData(i, "type", ds_coilList.getCellData(i, "type"));
      ds_coilListAll.setCellData(i, "grossWgt", ds_coilList.getCellData(i, "grossWgt"));
      ds_coilListAll.setCellData(i, "netWgt", ds_coilList.getCellData(i, "netWgt"));
      ds_coilListAll.setCellData(i, "bl", ds_coilList.getCellData(i, "bl"));
      ds_coilListAll.setCellData(i, "clntNo", ds_order.setCellData(curRow, "clntNo"));
      ds_coilListAll.setCellData(i, "customer", ds_coilList.getCellData(i, "customer"));
      ds_coilListAll.setCellData(i, "dest", ds_coilList.getCellData(i, "dest"));
      ds_coilListAll.setCellData(i, "inOdrNo", ds_coilList.getCellData(i, "odrNo"));
      ds_coilListAll.setCellData(i, "cvsslMgntNo", ds_order.setCellData(curRow, "cvsslMgntNo"));
      ds_coilListAll.setCellData(i, "wrkPlCd", ds_order.setCellData(curRow, "wrkPlCd"));
      ds_coilListAll.setCellData(i, "inYn", "Y");
      ds_coilListAll.setCellData(i, "inDt", scwin.nowDt);
      ds_coilListAll.setCellData(i, "inHh", "");
      ds_coilListAll.setCellData(i, "outYn", "Y");
      ds_coilListAll.setCellData(i, "outDt", scwin.nowDt);
      ds_coilListAll.setCellData(i, "outHh", "");
      ds_coilListAll.setCellData(i, "locCd", "");
      ds_coilListAll.setCellData(i, "invNo", "");
      ds_coilListAll.setCellData(i, "outClsCd", "04");
      ds_coilListAll.setCellData(i, "inStvWrkIndctNo", "");
      ds_coilListAll.setCellData(i, "lobranCd", ds_order.setCellData(curRow, "lobranCd"));
      ds_coilListAll.setCellData(i, "outOdrNo", ds_coilList.getCellData(i, "odrNo"));
      ds_coilListAll.setCellData(i, "outStvWrkIndctNo", "");
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save3);
    }
  } else {
    $c.win.alert($p, "이미 입고 또는 출고가 생성된 오더입니다.");
    return;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 분기처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건
  var pCode = "";
  var pName = "";
  var arrParam = new Array();
  var sWinCloseTF = pClose == null ? "T" : pClose;
  var pClose = "T";
  var wrkPlGbCd = "1"; //CY,장치장창고		
  var lodeptCd = acb_lobran.getValue();
  var paramList = "," + lodeptCd + "," + wrkPlGbCd;
  switch (gubun) {
    case 1:
      // console.log("여기까지탐?");
      // 화주 코드팝업			
      pCode = "";
      pName = ds_order.getCellData(row, "clntNm"); // 화
      ds_order.setCellData(row, "clntNm", ""); // 이거 주석 해야 imageClickFunc 정상으로 돌아감
      ds_order.setCellData(row, "clntNo", ""); // 이거 주석 해야 imageClickFunc 정상으로 돌아감
      udc_grid_popUp.setSelectId("retrieveCoopList");
      udc_grid_popUp.cfCommonPopUp(scwin.udc_grid_Popup_callBackFunc1 // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는  개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는  컬럼 지정 
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의  폭
      , null // POP-UP뛰을때 우도우의 사용자 정의  높이  
      , null // 윈도우 위치 Y좌표 
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2  ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      pCode = "";
      pName = ds_order.getCellData(row, "wrkPlNm");
      ds_order.setCellData(row, "wrkPlNm", "");
      ds_order.setCellData(row, "wrkPlCd", "");
      udc_grid_popUp.setSelectId("retrieveWrkPlInfo");
      udc_grid_popUp.cfCommonPopUp(scwin.udc_grid_Popup_callBackFunc2, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null);
      break;
    case 4:
      let args = [];
      args[0] = ds_order.getCellData(gr_order.getFocusedRowIndex(), "cvsslMgntNo");

      // 팝업 옵션 설정
      let options = {
        id: "taxPop",
        type: "",
        popupName: "본선관리번호검색팝업",
        width: 1100,
        height: 650
      };

      //상세화면 호출
      let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
      if (rtn != null) {
        ds_order.setCellData(gr_order.getFocusedRowIndex(), "cvsslMgntNo", rtn[0]);
        ds_order.setCellData(gr_order.getFocusedRowIndex(), "vsslNm", rtn[2]);
        ds_order.setCellData(gr_order.getFocusedRowIndex(), "arvIntend", rtn[5]);
      }
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 화주 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_Popup_callBackFunc1 = function (rtnValues) {
  let row = gr_order.getFocusedRowIndex();

  // console.log("결과? = "+rtnValues)
  $c.gus.cfSetGridReturnValue($p, rtnValues, ds_order, row, "clntNo", "clntNm");
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 작업장 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_Popup_callBackFunc2 = function (ret) {
  let rowIndex = gr_order.getFocusedRowIndex();
  if (ret == null || ret == "") {
    ds_order.setCellData(rowIndex, "wrkPlCd", "");
    ds_order.setCellData(rowIndex, "wrkPlNm", "");
  } else {
    ds_order.setCellData(rowIndex, "wrkPlCd", ret[0]);
    ds_order.setCellData(rowIndex, "wrkPlNm", ret[1]);
  }
};

//-------------------------------------------------------------------------
// 그리드 본선관리번호 팝업
//-------------------------------------------------------------------------
scwin.cvsslMgntNo_onClick = async function () {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기

  let args = [];
  args[0] = ds_order.getCellData(gr_order.getFocusedRowIndex(), "cvsslMgntNo");

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  if (rtn != null) {
    ds_order.setCellData(gr_order.getFocusedRowIndex(), "cvsslMgntNo", rtn[0]);
    ds_order.setCellData(gr_order.getFocusedRowIndex(), "vsslNm", rtn[2]);
    ds_order.setCellData(gr_order.getFocusedRowIndex(), "arvIntend", rtn[5]);
  }

  // $c.gus.cfSetReturnValue(rtn, gr_order.cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 본선관리번호 팝업
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기

  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue();

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 본선관리번호 컴포넌트 포커스
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onfocus = function (e) {
  scwin.oldData = ed_cvsslMgntNo.getValue();
};

//-------------------------------------------------------------------------
// 본선관리번호 컴포넌트 포커스 아웃시
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    return;
  }
  if (ed_cvsslMgntNo.getValue() == scwin.oldValue) {
    return;
  }

  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기

  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue();

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 그리드 행 복사
//-------------------------------------------------------------------------
scwin.btn_rowCopy_onClick = function (e) {
  let bfRow = ds_order.getRowPosition();
  let row = ds_order.insertRow();
  ds_order.setCellData(row, "cvsslMgntNo", ds_order.getCellData(bfRow, "cvsslMgntNo"));
  ds_order.setCellData(row, "clntNo", ds_order.getCellData(bfRow, "clntNo"));
  ds_order.setCellData(row, "clntNm", ds_order.getCellData(bfRow, "clntNm"));
  ds_order.setCellData(row, "reqDt", ds_order.getCellData(bfRow, "reqDt"));
  ds_order.setCellData(row, "ioClsCd", ds_order.getCellData(bfRow, "ioClsCd"));
  ds_order.setCellData(row, "vsslNm", ds_order.getCellData(bfRow, "vsslNm"));
  ds_order.setCellData(row, "arvIntend", ds_order.getCellData(bfRow, "arvIntend"));
  ds_order.setCellData(row, "wrkPlCd", ds_order.getCellData(bfRow, "wrkPlCd"));
  ds_order.setCellData(row, "wrkPlNm", ds_order.getCellData(bfRow, "wrkPlNm"));
  ds_order.setCellData(row, "stEtDt", ds_order.getCellData(bfRow, "stEtDt"));
  ds_order.setCellData(row, "stEtShift", ds_order.getCellData(bfRow, "stEtShift"));
  ds_order.setCellData(row, "endEtDt", ds_order.getCellData(bfRow, "endEtDt"));
  ds_order.setCellData(row, "endEtShift", ds_order.getCellData(bfRow, "endEtShift"));
  ds_order.setCellData(row, "lobranCd", ds_order.getCellData(bfRow, "lobranCd"));
  gr_order.setFocusedCell(row, 0);
};

//-------------------------------------------------------------------------
// 화주 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow_grid1 = function () {
  let row = gr_order.getFocusedRowIndex();
  let insertRow = ds_order.insertRow();
  ds_order.setCellData(insertRow, "lobranCd", acb_lobran.getValue());
  ds_order.setCellData(insertRow, "reqDt", scwin.nowDt);
  ds_order.setCellData(insertRow, "stEtDt", scwin.nowDt);
  ds_order.setCellData(insertRow, "endEtDt", scwin.nowDt);
  gr_order.setFocusedCell(insertRow, 0);
};

//-------------------------------------------------------------------------
// 코일 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow2 = function () {
  if (ds_order.getTotalRow() == 0 || ds_order.getCellData(ds_order.getRowPosition(), "odrNo") == "") {
    $c.win.alert($p, "화주 요청정보 등록 후 가능합니다.");
    return false;
  }
  let row = ds_coilList.insertRow();
  ds_coilList.setCellData(row, "odrNo", ds_order.getCellData(ds_order.getRowPosition(), "odrNo"));
  gr_coilList.setFocusedCell(row, 0);
};

//-------------------------------------------------------------------------
// 점소데이터 정렬
//-------------------------------------------------------------------------
scwin.ds_lobran_ondataload = function () {
  ds_lobran.sort("code", 0);
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.displayFm = function (data) {
  return $c.gus.decode($p, data, "D", "주간", "N", "야간");
};
scwin.calendar = function (data) {
  return $c.date.formatDate($p, data, "date");
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (화주)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), ed_clntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "T", "화주,화주코드,화주명");
};
scwin.udc_clnt_onblurCode = async function (e) {
  if (ed_clntNo.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, "T", "화주,화주코드,화주명");
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    return;
  }
};
scwin.udc_clnt_onChangeName = async function (info) {
  if (ed_clntNm.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, "", ed_clntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "T", "화주,화주코드,화주명");
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
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
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  if (ed_wrkPlCd.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_wrkPlCd.setValue("");
    ed_wrkPlNm.setValue("");
    return;
  }
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  if (ed_wrkPlNm.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, "", ed_wrkPlNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_wrkPlCd.setValue("");
    ed_wrkPlNm.setValue("");
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// 오더데이터 로드완료시
//-------------------------------------------------------------------------
scwin.ds_order_ondataload = function () {
  let row = ds_order.getTotalRow();
  spa_totalRows.setValue(row);

  // 오더번호로 정렬 , asis와 동일하게 맞추기 위함
  ds_order.sort("reqDt", 0);

  // 코일내역 자동 조회
  if (ds_order.getTotalRow() > 0) {
    dma_search2.set("odrNo", ds_order.getCellData(0, "odrNo"));
  } else {
    dma_search2.set("odrNo", "");
  }
  $c.sbm.execute($p, sbm_search2);
  if (ds_order.getTotalRow() == 0) {
    $c.win.alert($p, "조회결과가 없습니다.");
  }
  gr_order.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 코일내역 조회 완료시
//-------------------------------------------------------------------------
scwin.sbm_search2_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    spa_totalRows2.setValue(ds_coilList.getTotalRow());
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 오더 저장 완료시
//-------------------------------------------------------------------------
scwin.sbm_save_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    // spa_totalRows.setValue(ds_order.getTotalRow());
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 화주 요청 정보 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.onGrid_Click = function (rowIndex, columnIndex, columnId) {
  dma_search2.set("odrNo", ds_order.getCellData(rowIndex, "odrNo"));
  $c.sbm.execute($p, sbm_search2);
  if (ds_order.getCellData(rowIndex, "inOutYn") == "0" || ds_order.getCellData(rowIndex, "inOutYn") == "") {
    gr_order.setRowReadOnly(rowIndex, false);
  } else {
    gr_order.setRowReadOnly(rowIndex, true);
  }
};

//-------------------------------------------------------------------------
// 화주 요청 정보 그리드 조회시 포커스 맞추기
//-------------------------------------------------------------------------
scwin.sbm_search_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    scwin.onGrid_Click(gr_order.getFocusedRowIndex(), 0, "odrNo");
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  acb_lobran.setValue(scwin.loUpperLobranCd);
  ed_clntNo.focus();
};
scwin.sbm_lobran_submitdone = function (e) {
  acb_lobran.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 셀 데이터 입력 전
//-------------------------------------------------------------------------
scwin.gr_order_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};
scwin.flag = false;
//-------------------------------------------------------------------------
// 셀 데이터 입력 후 
//-------------------------------------------------------------------------
scwin.gr_order_onafteredit = function (rowIndex, columnIndex, value) {
  // console.log("afteredit");
  let columnId = gr_order.getColumnID(columnIndex);
  if (scwin.oldData == value) {
    return;
  }
  if (value = "") {
    return;
  }
  columnId = gr_order.getColumnID(columnIndex);
  scwin.flag = true;
  switch (columnId) {
    case "clntNm":
      // console.log("1차 입장");
      if (ds_order.getCellData(rowIndex, columnId) != "" && ds_order.getCellData(rowIndex, columnId) != scwin.oldData) {
        // console.log("if문 통과");
        ds_order.setCellData(rowIndex, "clntNo", "");
        scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      } else if (ds_order.getCellData(rowIndex, columnId) == "") {
        ds_order.setCellData(rowIndex, "clntNo", "");
        ds_order.setCellData(rowIndex, "clntNm", "");
      }
      break;
    case "wrkPlNm":
      if (ds_order.getCellData(rowIndex, columnId) != "" && ds_order.getCellData(rowIndex, columnId) != scwin.oldData) {
        ds_order.setCellData(rowIndex, "wrkPlCd", "");
        scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      } else if (ds_order.getCellData(rowIndex, columnId) == "") {
        ds_order.setCellData(rowIndex, "wrkPlCd", "");
        ds_order.setCellData(rowIndex, "wrkPlNm", "");
      }
      break;
    case "cvsslMgntNo":
      if (ds_order.getCellData(rowIndex, columnId) != "" && ds_order.getCellData(rowIndex, columnId) != scwin.oldData) {
        scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
      } else if (ds_order.getCellData(rowIndex, columnId) == "") {
        ds_order.setCellData(rowIndex, "cvsslMgntNo", "");
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 셀 imageClickFunc
//-------------------------------------------------------------------------
scwin.grid_order_onClickFunc = function () {
  // console.log("onClick");
  if (!scwin.flag) {
    let rowIndex = gr_order.getFocusedRowIndex();
    let columnId = gr_order.getFocusedColumnID();
    switch (columnId) {
      case "clntNm":
        scwin.f_openCommPopUpGrid(1, rowIndex, "F");
        break;
      case "wrkPlNm":
        scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
        break;
      default:
        break;
    }
  } else {
    scwin.flag = false;
  }
};

//-------------------------------------------------------------------------
// 양식 다운로드 f_download
//-------------------------------------------------------------------------
scwin.btn_xls_onclick = function (e) {
  let row = ds_coliList_down.insertRow();
  ds_coliList_down.setCellData(row, "thickness", 0.00);
  ds_coliList_down.setCellData(row, "width", 0.00);
  ds_coliList_down.setCellData(row, "length", 0.00);
  ds_coliList_down.setCellData(row, "cnt", 0);
  ds_coliList_down.setCellData(row, "grossWgt", 0);
  ds_coliList_down.setCellData(row, "netWgt", 0);
  let options = {
    fileName: "코일내역_sample.xlsx",
    sheetName: "코일내역_sample",
    useFooter: "false"
    // , useStyle : "true"
  };
  let grdObj = gr_coilList_down;
  let infoArr = {};
  $c.data.down;
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 업로드
//-------------------------------------------------------------------------
scwin.excelUpload = async function () {
  // ds_coilList.removeAll();

  let options = {
    "fileName": "gridDataUpload.xlsx",
    "status": "C",
    "headerExist": 1,
    "useMaxByteLength": ",",
    "type": "1"
  };
  let result = await $c.data.uploadGridViewExcel($p, gr_coilList, options);
  // let result = await $c.data.uploadGridViewCSV(gr_coilList, options);

  // console.log("result" + result);
};

//-------------------------------------------------------------------------
// 엑셀 업로드 진행 후 
//-------------------------------------------------------------------------
scwin.gr_coilList_onfilereadend = function (value) {
  if (ds_coilList.getTotalRow() == 0) {
    $c.win.alert($p, "업로드할 데이터가 없습니다.");
    return;
  }
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrNo") == "" || ds_order.getTotalRow() === 0) {
    $c.win.alert($p, "화주요청정보를 등록해 주시기 바랍니다.");
    return;
  } else {
    for (i = 0; i < ds_coilList.getTotalRow(); i++) {
      ds_coilList.setCellData(i, "odrNo", ds_order.getCellData(ds_order.getRowPosition(), "odrNo"));
    }
  }
  spa_totalRows2.setValue(ds_coilList.getTotalRow());
  if (ds_coilList.getTotalRow() > 0) {
    $c.gus.cfEnableKeyData($p);
  } else {
    $c.gus.cfDisableKeyData($p);
  }
  // Grid의 특정 column show
};
scwin.sbm_save2_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    await $c.win.alert($p, MSG_CM_INF_001);
    spa_totalRows2.setValue(ds_coilList.getTotalRow());
    gr_coilList.setFocusedCell(0, 0);
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.ds_coilList_ondataload = function () {
  ds_coilList.sort("stvWrkIndictNo", 0);
};
scwin.gr_coilList_oncellclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "cnt":
      if (ds_coilList.getCellData(rowIndex, "coilNo") != "") {
        gr_coilList.setCellReadOnly(rowIndex, "cnt", true);
      } else {
        gr_coilList.setCellReadOnly(rowIndex, "cnt", false);
      }
      //}
      break;
    case "coilNo":
      if (ds_coilList.getRowStatus(rowIndex) == "R") {
        gr_coilList.setCellReadOnly(rowIndex, "coilNo", true);
      } else {
        gr_coilList.setCellReadOnly(rowIndex, "coilNo", false);
      }
      //}
      break;
    default:
      break;
  }
  if (ds_coilList.getCellData(rowIndex, "inOutYn") == 0 || ds_coilList.getCellData(rowIndex, "inOutYn") == undefined) {
    gr_coilList.setRowReadOnly(rowIndex, false);
  } else {
    gr_coilList.setRowReadOnly(rowIndex, true);
  }
};
scwin.gr_coilList_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_coilList.getColumnID(columnIndex);
  switch (colid) {
    case "coilNo":
      if (ds_coilList.getCellData(rowIndex, colid) != "" && ds_coilList.getCellData(rowIndex, colid) != scwin.oldData) {
        ds_coilList.setCellData(rowIndex, "cnt", "1");
      }
      break;
    case "cnt":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "cnt", 0);
      }
      break;
    case "grossWgt":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "grossWgt", 0);
      }
      break;
    case "netWgt":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "netWgt", 0);
      }
      break;
    case "thickness":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "thickness", 0.00);
      }
      break;
    case "width":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "width", 0.00);
      }
      break;
    case "length":
      if (ds_coilList.getCellData(rowIndex, colid) == "") {
        ds_coilList.setCellData(rowIndex, "length", 0.00);
      }
      break;
  }
};
scwin.sbm_save3_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onClick();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width:208px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'11'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'화주',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'8',objTypeCode:'Data',objTypeName:'Data',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName',validTitle:'화주'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_reqDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_reqStDt',edToId:'ica_reqEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_EtDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_stEtDt',edToId:'ica_endEtDt',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_IntendDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_arvIntendDt',edToId:'ica_dptIntendDt',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출고구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ioClsCd',search:'start',style:'width:110px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 100px;',objType:'Data',maxlength:'16','ev:onkeyup':'scwin.onkeyup',editType:'select',allowChar:'a-zA-Z0-9','ev:onfocus':'scwin.ed_cvsslMgntNo_onfocus','ev:onblur':'scwin.ed_cvsslMgntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'작업장',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'data',validExpCode:'작업장:yes',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName',selectID:'retrieveWrkPlInfo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'화주요청정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',grdDownOpts:'{"fileName":"화주요청정보.xlsx", "sheetName": "화주요청정보"}',gridID:'gr_order'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_order',style:'',autoFit:'allColumn',id:'gr_order',visibleRowNum:'7',class:'wq_gvw',resize:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.onGrid_Click',editModeEvent:'onclick',validExp:'clntNm:화주:yes&reqDt:요청일자:yes:date=YYYYMMDD&length=8&ioClsCd:업무:yes&stEtDt:작업일자:yes:date=YYYYMMDD&length=8&stEtShift:시프트:yes&endEtDt:작업일자:yes:date=YYYYMMDD&length=8&endEtShift:시프트:yes','ev:onbeforeedit':'scwin.gr_order_onbeforeedit','ev:onafteredit':'scwin.gr_order_onafteredit',gridName:'요청정보'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'화주',displayMode:'label',colSpan:'',rowSpan:'2',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'화주',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'요청일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'입출고<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column3',value:'본선정보',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'작업예정<br/>시작일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'시프트',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'작업예정<br/>종료일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'시프트',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'입출고여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'본선관리번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column43',value:'선박명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'입항일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left',validExp:'화주:yes',mandatory:'true',imageClickFunction:'scwin.grid_order_onClickFunc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'reqDt',displayMode:'label',validExp:'요청일자:yes:date=YYYYMMDD&length=8',mandatory:'true',dataType:'date',displayFormatter:'scwin.calendar'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'ioClsCd',displayMode:'label',validExp:'업무:yes',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'preFixCd',displayMode:'label',allOption:'',ref:'',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'cvsslMgntNo',displayMode:'label',imageClickFunction:'scwin.cvsslMgntNo_onClick'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntend',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'wrkPlNm',displayMode:'label',textAlign:'left',imageClickFunction:'scwin.grid_order_onClickFunc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'stEtDt',displayMode:'label',validExp:'작업일자:yes:date=YYYYMMDD&length=8',mandatory:'true',dataType:'date',displayFormatter:'scwin.calendar'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'stEtShift',displayMode:'label',allOption:'',chooseOption:'',validExp:'시프트:yes',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'endEtDt',displayMode:'label',validExp:'작업일자:yes:date=YYYYMMDD&length=8',mandatory:'true',dataType:'date',displayFormatter:'scwin.calendar'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'endEtShift',displayMode:'label',validExp:'시프트:yes',displayFormatter:'scwin.displayFm',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'야간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOutYn',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_rowCopy',style:'',type:'button','ev:onclick':'scwin.btn_rowCopy_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_order',rowAddFunction:'scwin.f_AddRow_grid1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_saveAll',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_saveAll_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_mainSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_mainSave_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'코일내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"코일내역.xlsx", "sheetName": "코일내역"}',gridUpYn:'Y',gridID:'gr_coilList',gridUpFn:'scwin.excelUpload',id:'udc_grid',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_coilList',id:'gr_coilList',style:'',visibleRowNum:'7',visibleRowNumFix:'true',rowStatusVisible:'true',validExp:'odrNo:요청번호:yes&cnt:개수:yes&netWgt:순중량:yes','ev:onfilereadend':'scwin.gr_coilList_onfilereadend',gridName:'코일내역','ev:oncellclick':'scwin.gr_coilList_oncellclick','ev:onafteredit':'scwin.gr_coilList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'요청번호',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'코일번호',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'두께',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'폭',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'길이',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'재질',width:'90',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'종류',width:'90',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'개수',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'총중량<br/>(KG)',width:'90',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'순중량<br/>(KG)',width:'90',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column46',value:'BL',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'고객사',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'도착지',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'입출고여부',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thickness',inputType:'text',width:'70',dataType:'float',displayFormat:'#,##0.00[floor]',maxLength:'8.2',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'width',inputType:'text',width:'70',dataType:'float',displayFormat:'#,##0.00[floor]',maxLength:'8.2',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'length',inputType:'text',width:'70',dataType:'float',displayFormat:'#,##0.00[floor]',maxLength:'8.2',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'material',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'type',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',mandatory:'true',defaultValue:'0',maxLength:'5'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWgt',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,##0',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'netWgt',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,##0',dataType:'number',mandatory:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'bl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'customer',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dest',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOutYn',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum("cnt")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum("grossWgt")'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum("netWgt")'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_coilList',btnDelYn:'N',btnCancelYn:'Y',rowAddFunction:'scwin.f_AddRow2'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_hide',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_coliList_down',id:'gr_coilList_down',style:'',validExp:'odrNo:요청번호:yes&cnt:개수:yes&netWgt:순중량:yes',visibleRowNum:'7',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column1',inputType:'text',value:'요청번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column17',inputType:'text',value:'코일번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column15',inputType:'text',value:'두께',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column13',inputType:'text',value:'폭',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column11',inputType:'text',value:'길이',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column9',inputType:'text',value:'재질',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column3',inputType:'text',value:'종류',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column5',inputType:'text',value:'개수',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column7',inputType:'text',value:'총중량<br/>(KG)',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column19',inputType:'text',value:'순중량<br/>(KG)',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column46',inputType:'text',value:'BL',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column43',inputType:'text',value:'고객사',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column40',inputType:'text',value:'도착지',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',mandatory:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{dataType:'float',defaultValue:'0.00',displayFormat:'#,###.0#[floor]',displayMode:'label',id:'thickness',inputType:'text',maxLength:'0.2',width:'70'}},{T:1,N:'w2:column',A:{dataType:'float',defaultValue:'0.00',displayFormat:'#,##0.00[floor]',displayMode:'label',id:'width',inputType:'text',maxLength:'0.2',width:'70'}},{T:1,N:'w2:column',A:{dataType:'float',defaultValue:'0.00',displayFormat:'#,##0.00[floor]',displayMode:'label',id:'length',inputType:'text',maxLength:'0.2',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'material',inputType:'text',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'type',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',displayFormat:'#,##0',displayMode:'label',id:'cnt',inputType:'text',mandatory:'true',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',displayFormat:'#,##0',displayMode:'label',id:'grossWgt',inputType:'text',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',defaultValue:'0',displayFormat:'#,##0',displayMode:'label',id:'netWgt',inputType:'text',mandatory:'true',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bl',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customer',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dest',inputType:'text',textAlign:'left',width:'100'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum("cnt")',id:'column23',inputType:'expression',textAlign:'right',width:'70',dataType:'number'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum("grossWgt")',id:'column22',inputType:'expression',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{displayFormat:'#,##0',displayMode:'label',expression:'sum("netWgt")',id:'column21',inputType:'expression',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',width:'100'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_xls',type:'button',class:'btn','ev:onclick':'scwin.btn_xls_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'양식다운로드'}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_mainSave2',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_mainSave2_onClick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display: none;',id:'udc_grid_popUp'}}]}]}]}]}]})