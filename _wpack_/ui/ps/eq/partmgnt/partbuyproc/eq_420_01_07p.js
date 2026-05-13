/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_07p.xml 52894 5fa9b9751a185411ea0733487384e04674763242a490ea4a467a12187ed9dd42 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'buyNo',name:'구매번호',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eq420Header'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyReqDt',name:'구매요청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyClsCd',name:'구매구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inReqDt',name:'입고요청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnCls',name:'과세구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_seq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'buyNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'구매순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'요청수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqUpr',name:'현단가',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'입고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyReqDt',name:'구매요청일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsRequestDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"dma_eq420Header","key":"OUT_DS1"},{"id":"ds_eq420","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_eq420Header","key":"OUT_DS1"},{"id":"ds_eq420","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ps.eq.partmgnt.partbuyproc.RegistPartsBuyingRequestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_eq420Header","key":"IN_DS1"},{"id":"ds_eq420","key":"IN_DS2"},{"id":"ds_seq","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_seq","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.partmgnt.partbuyproc.SavePartsBuyingRequestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_eq420Header","key":"IN_DS1"},{"id":"ds_eq420","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ps.eq.partmgnt.partbuyproc.DeletePartsRequestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_eq420Header","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.cvNNew = false; //신규
scwin.cvUpdate = false; //수정
scwin.cvNNewSelect = false; //신규등록 후,  조회. 
scwin.l_buyNo = "";

//------------------------------------------------------------------------------------------
// 버튼이벤트(초기화,조회후,신규,수정,저장) 선택에 따른. 입력항목,버튼상태 설정, Start
//------------------------------------------------------------------------------------------
scwin.f_EventInit = function () {
  //Key,Data 모두 disable(non-editable)상태
  $c.gus.cfDisableKeyData($p);

  //이미지버튼 비활성화
  btn_clnt.setDisabled(true); //거래처팝업이미지
  ica_buyReqDt.setDisabled(true); //구매요청일자 팝업이미지	
  ica_inReqDt.setDisabled(true); //입고예정일자 팝업이미지	

  //버튼항목설정
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  bCreate2.setDisabled(true);
  bDelete2.setDisabled(true);
  bCancel2.setDisabled(true);
  btn_cancel.setDisabled(true);
};
scwin.f_EventSearch = function () {
  //조회 후, 발생하는 이벤트
  //Key,Data 모두 disable(non-editable)상태
  $c.gus.cfDisableKeyData($p);

  //이미지버튼 비활성화
  btn_clnt.setDisabled(true); //거래처팝업이미지
  ica_buyReqDt.setDisabled(true); //구매요청일자 팝업이미지	
  ica_inReqDt.setDisabled(true); //입고예정일자 팝업이미지		

  //버튼항목설정
  btn_cancel.setDisabled(true);
  bCancel2.setDisabled(true);
  gr_eq420.setReadOnly(true); //detail 그리드

  //"부품구매관리"화면에서 넘어오는 파라미터 확인
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    if (!scwin.valueObject.create) {
      //수정/조회 상태
      if (scwin.valueObject.stsCd == "C") {
        //C:확정
        $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_delete]);
        bCreate2.setDisabled(true);
        bDelete2.setDisabled(true);
      } else if (scwin.valueObject.stsCd == "R") {
        //R:요청
        $c.gus.cfDisableBtn($p, [btn_save]);
        bCreate2.setDisabled(true);
        bDelete2.setDisabled(true);
      }
    }
  }
};
scwin.f_EventNew = function () {
  $c.gus.cfEnableKeyData($p); //Key, Data 형태의 입력필드를 모두 enable(editable) 상태
  $c.gus.cfEnableObj($p, ed_buyNo, false);
  $c.gus.cfEnableObj($p, acb_stsCd, false);
  $c.gus.cfEnableObj($p, acb_taxnCls, false);
  scwin.f_MandatoryObj();

  //이미지버튼 활성화
  btn_clnt.setDisabled(false); //거래처팝업이미지
  ica_buyReqDt.setDisabled(false); //구매요청일자 팝업이미지	
  ica_inReqDt.setDisabled(false); //입고예정일자 팝업이미지	

  //모든 버튼을 enable(클릭가능) 상태
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bCreate')]);
  $c.gus.cfDisableBtn($p, [btn_update, btn_delete]);
  btn_cancel.setDisabled(false);
  bCancel2.setDisabled(false);
  gr_eq420.setReadOnly(false);

  //부품구매요청등록 GRID - Row추가
  scwin.f_AddRow();

  // gr_eq420.ColumnProp("partCd", 'EDIT') = 'Upper'; //Mod 2006.02.27

  $c.gus.cfTurnCreateFlag($p, false);

  //-------------------------------------//-----Add.2006.02.13 start
  //"부품구매관리"화면에서 넘어오는 파라미터 확인	
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규 입력 상태
    if (scwin.valueObject.create) {
      acb_fixWrkPlCd.setValue(scwin.valueObject.fixWrkPlCd);
    }
  }
  $c.gus.cfEnableObj($p, acb_fixWrkPlCd, false);
  ed_clntNo.focus();
  //-------------------------------------//-----Add.2006.02.13 end
};

//Object의 Mandatory를 true 상태로 변경
scwin.f_MandatoryObj = function () {
  // acb_fixWrkPlCd.setMandatory(true);
  // ica_buyReqDt.setMandatory(true);
  // ed_clntNo.setMandatory(true);
  // acb_buyClsCd.setMandatory(true);
  // acb_inClsCd.setMandatory(true);
  // ica_inReqDt.setMandatory(true);

  ica_buyReqDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
};
scwin.f_EventUpdate = function () {
  //Key,Data 모두 disable(non-editable)상태
  $c.gus.cfDisableKeyData($p);
  scwin.f_EnableObj();
  tbx_buyCls.addClass("req");
  tbx_inReqDt.addClass("req");

  //이미지버튼 활성화/비활성화 여부
  btn_clnt.setDisabled(false); //거래처팝업이미지
  ica_buyReqDt.setDisabled(true); //구매요청일자 팝업이미지	
  ica_inReqDt.setDisabled(false); //입고예정일자 팝업이미지			

  //버튼항목설정		
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bCreate')]);
  $c.gus.cfDisableBtn($p, [btn_update, btn_delete]);
  btn_cancel.setDisabled(false);
  bCancel2.setDisabled(false);
  bDelete2.setDisabled(false);
  bCreate2.setDisabled(false);

  //gr_eq420.ColumnProp("partCd", 'EDIT') = 'Upper';
  gr_eq420.setReadOnly(false);
};

//Object를 enable 상태로 변경
scwin.f_EnableObj = function () {
  $c.gus.cfEnableObj($p, acb_buyClsCd, true);
  $c.gus.cfEnableObj($p, ica_inReqDt, true);

  // acb_buyClsCd.setMandatory(true);
  // ica_inReqDt.setMandatory(true);
};
scwin.f_EventSave = function () {
  scwin.f_EventSearch(); // 조회후의 이벤트	

  btn_cancel.setDisabled(true);
  bCancel2.setDisabled(true);
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.valueObject = $c.data.getParameter($p);
  const codeOptions = [{
    grpCd: "EQ026",
    compID: "acb_buyClsCd"
  }, {
    grpCd: "EQ017",
    compID: "acb_inClsCd",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "FI056",
    compID: "acb_taxnCls"
  }];
  await $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveWrkplEachList",
    compID: "acb_fixWrkPlCd"
  }, {
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrievePartBuyStatus",
    compID: "acb_stsCd"
  }];
  await $c.data.setGauceUtil($p, param, function () {
    if (scwin.valueObject.stsCd == "C") {
      acb_stsCd.setSelectedIndex(0);
    } else {
      acb_stsCd.setSelectedIndex(1); //상태	:요청
    }
  });
  if (!scwin.valueObject.create) {
    tbx_fixWrkPl.removeClass("req");
    tbx_buyReqDt.removeClass("req");
    tbx_clnt.removeClass("req");
    tbx_buyCls.removeClass("req");
    tbx_inReqDt.removeClass("req");
    tbx_inCls.removeClass("req");
  }
};
scwin.ondataload = function () {
  //조회조건 필수인 항목들(구매구분,입고구분,작업장) - 기본값 Setting.
  acb_buyClsCd.setSelectedIndex(2); //구매구분:Detax(Air일반)
  acb_inClsCd.setSelectedIndex(0); //입고구분:일반
  scwin.f_defaultValue();
};

/**
 * UDC값
 */
scwin.onUdcCompleted = async function () {};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  acb_fixWrkPlCd.setSelectedIndex(0);

  //"부품구매관리"화면에서 넘어오는 파라미터 확인
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규
    if (scwin.valueObject.create) {
      scwin.f_Create();
      //휴지통 버튼, 속성 지정
      btn_fieldClear.setStyle("visibility", "visible");
      btn_fieldClear.setDisabled(false); //enable
      acb_taxnCls.setValue("");
    }
    //상세
    else {
      acb_fixWrkPlCd.setValue(scwin.valueObject.fixWrkPlCd);
      ed_buyNo.setValue(scwin.valueObject.buyNo);
      acb_taxnCls.setValue(scwin.valueObject.taxnCls);
      ica_buyReqDt.setValue(scwin.valueObject.buyReqDt);
      ica_inReqDt.setValue(scwin.valueObject.inReqDt);
      scwin.f_openCommonPopUp(1, scwin.valueObject.clntNo, scwin.valueObject.clntNm, 'T', 'T');
      scwin.f_Retrieve();
      //휴지통 버튼, 속성 지정
      btn_fieldClear.setStyle("visibility", "hidden");
      $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm]);
      btn_fieldClear.setDisabled(true); //disable
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //"부품구매관리"화면에서 넘어오는 파라미터 확인
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규 입력 상태
    if (scwin.valueObject.create) {
      dma_search.set("fixWrkPlCd", dma_eq420Header.get("fixWrkPlCd"));
      dma_search.set("buyNo", scwin.l_buyNo);
    }
    //수정/조회 상태
    else {
      dma_search.set("fixWrkPlCd", scwin.valueObject.fixWrkPlCd);
      dma_search.set("buyNo", scwin.valueObject.buyNo);
    }
    await $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.cvNNew = true;
  scwin.cvUpdate = false;
  scwin.f_EventNew();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.cvNNew = false;
  scwin.cvUpdate = true;
  scwin.f_EventUpdate();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //신규일때
  if (scwin.cvNNew == true && scwin.cvUpdate == false) {
    ds_eq420.removeAll();
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    btn_cancel.setDisabled(true);
    scwin.f_Create();
  }

  //수정일때
  if (scwin.cvNNew == false && scwin.cvUpdate == true) {
    scwin.f_EventSearch();
    //scwin.f_RefreshMandSign(); //조회조건 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다.	

    btn_cancel.setDisabled(true);
    bCancel2.setDisabled(true);
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    tbx_buyCls.removeClass("req");
    tbx_inReqDt.removeClass("req");
    $c.data.undoAll($p, ds_eq420);
  }
};

//-------------------------------------------------------------------------
// 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다.
//-------------------------------------------------------------------------
scwin.f_RefreshMandSign = function () {
  ed_clntNo.setMandatory(false);
  acb_buyClsCd.setMandatory(false);
  ica_inReqDt.setMandatory(false);
};

//-------------------------------------------------------------------------
// 부가세를 계산한다.(과세구분이 간이과세(20), 면세(30)이면 부가세 Zero)
//-------------------------------------------------------------------------
scwin.f_set_VatAmt = function () {
  let taxnCls = "";
  taxnCls = dma_eq420Header.get("taxnCls");
  let countRow = ds_eq420.getRowCount();
  if (taxnCls == "20" || taxnCls == "30") {
    for (let i = 0; i < countRow; i++) {
      let reqQty = ds_eq420.getCellData(i, "reqQty");
      let reqUpr = ds_eq420.getCellData(i, "reqUpr");
      ds_eq420.setCellData(i, "inAmt", reqQty * reqUpr);
      ds_eq420.setCellData(i, "vatAmt", 0);
      ds_eq420.setCellData(i, "inQty", reqQty);
      ds_eq420.setCellData(i, "inUpr", reqUpr);
    }
  } else {
    for (let i = 0; i < countRow; i++) {
      let reqQty = ds_eq420.getCellData(i, "reqQty");
      let reqUpr = ds_eq420.getCellData(i, "reqUpr");
      ds_eq420.setCellData(i, "inAmt", reqQty * reqUpr);
      ds_eq420.setCellData(i, "vatAmt", reqQty * reqUpr * 0.1);
      ds_eq420.setCellData(i, "inQty", reqQty);
      ds_eq420.setCellData(i, "inUpr", reqUpr);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.(각 dataSet 변경검사)
  if (dma_eq420Header.getModifiedIndex().length == 0 && ds_eq420.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ['부품구매요청등록'])); //변경된 정보가 없습니다.    
    return;
  }

  // 부가세를 계산한다.(과세구분이 간이과세(20)이면 부가세 Zero)
  scwin.f_set_VatAmt();

  //신규일때
  if (scwin.cvNNew == true && scwin.cvUpdate == false) {
    //"부품구매요청등록 "그리드가 데이타(row)가 있는지 체크
    if (ds_eq420.getRowCount() < 1) {
      await $c.win.alert($p, "'부품구매요청등록'에 데이타가 존재하지 않습니다. '행추가'를 하고 '부품구매요청등록'을 입력하세요.");
      return;
    }
    let ret = await $c.gus.cfValidate($p, [tb_eq420]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [gr_eq420]);
    if (!ret2) {
      return false;
    }
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      //row갯수 만큼,, 루프돌리기
      ds_eq420.setCellData(j, "fixWrkPlCd", acb_fixWrkPlCd.getValue());
      ds_eq420.setCellData(j, "buyReqDt", ica_buyReqDt.getValue());
    }

    //Grid(gr_eq420)에   요청수량 체크    
    if (!(await scwin.f_chkReqQty())) return;
    //"입고구분:무상"일 경우
    if (acb_inClsCd.getSelectedIndex() == 1) {
      scwin.f_ReqUpr();
    }
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_create);
    }
  }

  //수정일때
  if (scwin.cvNNew == false && scwin.cvUpdate == true) {
    let ret = await $c.gus.cfValidate($p, [ed_clntNo, acb_buyClsCd, acb_inClsCd, ica_inReqDt]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [gr_eq420]);
    if (!ret2) {
      return false;
    }

    //Grid(gr_eq420)에   요청수량 체크    
    if (!(await scwin.f_chkReqQty())) return;
    //"입고구분:무상"일 경우
    if (acb_inClsCd.getSelectedIndex() == 1) {
      scwin.f_ReqUpr();
    }
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (dma_eq420Header.getRowCountRow == 0) {
    return;
  } else {
    if ((await $c.win.confirm($p, MSG_CM_CRM_004)) == true) {
      $c.sbm.execute($p, sbm_delete);
    }
  }
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_Close = async function () {
  if (scwin.f_IsUpdated()) {
    if ((await $c.win.confirm($p, "변경된 사항이 반영되지 않았습니다.\n\n닫기를 계속 수행하시겠습니까?")) == true) {
      $c.win.closePopup($p);
    }
  } else {
    $c.win.closePopup($p);
  }
};

//-------------------------------------------------------------------------
// Update 여부 체크 (변경한 데이터가 있는지 체크한다.)
//-------------------------------------------------------------------------
scwin.f_IsUpdated = function () {
  let rtn = ds_eq420.getModifiedIndex().length > 0;
  return rtn;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let chkRowStatus = "";

  //신규일때
  if (scwin.cvNNew == true && scwin.cvUpdate == false) {
    let rowIndex = ds_eq420.insertRow();
    gr_eq420.setFocusedCell(rowIndex, 3);
  }

  //수정일때
  if (scwin.cvNNew == false && scwin.cvUpdate == true) {
    ds_eq420.insertRow();

    //row갯수 만큼,, 루프돌리기
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      chkRowStatus = ds_eq420.getRowStatus(j);
      if (chkRowStatus == "C") {
        //RowStatus:1(Insert)
        ds_eq420.setCellData(j, "fixWrkPlCd", acb_fixWrkPlCd.getValue());
        ds_eq420.setCellData(j, "buyNo", ed_buyNo.getValue());
        ds_eq420.setCellData(j, "buyReqDt", ica_buyReqDt.getValue());
      }
    }
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  let rowIndex = ds_eq420.getRowPosition();
  let status = ds_eq420.getRowStatus(rowIndex);
  if (ds_eq420.getRowCount() > 0) {
    if (status == 'C') {
      ds_eq420.removeRow(rowIndex);
    } else {
      ds_eq420.deleteRow(rowIndex);
    }
  }
};

//-------------------------------------------------------------------------
// Grid(gr_eq420)에   요청수량 체크
//-------------------------------------------------------------------------
scwin.f_chkReqQty = async function () {
  let ls_reqQty = 0;
  let rowStatus = "";

  //row갯수 만큼,, 루프돌리기	
  for (j = 0; j < ds_eq420.getRowCount(); j++) {
    rowStatus = ds_eq420.getRowStatus(j);
    if (rowStatus == "C" || rowStatus == "D" || rowStatus == "U") {
      //RowStatus:1(Insert),2(Delete),3(Update)	
      ls_reqQty = ds_eq420.getCellData(j, 'reqQty');
      if (ls_reqQty == 0) {
        await $c.win.alert($p, "입력된 요청수량이 없습니다.");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// "입고구분:무상"일 경우, "현단가=0" 으로 setting...
//-------------------------------------------------------------------------
scwin.f_ReqUpr = function () {
  if (ds_eq420.getRowCount() > 0) {
    //row갯수 만큼,, 루프돌리기
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      ds_eq420.setCellData(j, "reqUpr", 0); //현단가=0
    }
  }
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditNone = function () {
  gr_eq420.setColumnReadOnly("partCd", true);
};
scwin.f_EditTrue = function () {
  // gr_eq420.ColumnProp("partCd", 'EDIT') = 'Upper';    //Mod 2006.02.27
  //gr_eq420.ColumnProp("partCd", 'EDIT') = 'true';
};
scwin.f_EditControl = function (Row, Colid) {
  /*=====  insert[1],delete[2],update[3]  =====*/
  if (Row >= 0) {
    if (ds_eq420.getRowStatus(Row) == "C") {
      scwin.f_EditTrue();
    } else {
      scwin.f_EditNone();
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처 팝업			
      await udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callback, pCode,
      // 화면에서의 ??? Code Element의	Value
      pName,
      // 화면에서의 ??? Name Element의	Value
      pClose,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      null,
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서	
      null,
      // 보여주는 각 컬럼들의 폭	
      ",3,4,5,6,7,8,9,10",
      // 컬럼중에서 숨기는	컬럼 지정	
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의	사용자 정의	폭
      null,
      // POP-UP뛰을때 우도우의	사용자 정의	높이	
      null,
      // 윈도우 위치 Y좌표	
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부	("F")
      pAllSearch,
      // 전체검색허용여부	("F")
      "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_fixClntList_callback = function (rtnList) {
  if (rtnList == null || rtnList[0] == "N/A") {
    dma_eq420Header.set("clntNo", "");
    dma_eq420Header.set("clntNm", "");
    dma_eq420Header.set("taxnCls", "");
  } else {
    dma_eq420Header.set("clntNo", rtnList[0]);
    dma_eq420Header.set("clntNm", rtnList[1]);
    dma_eq420Header.set("taxnCls", rtnList[2]);
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
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 부품 조회 Popup 처리 : "그리드"에서 입력된 코드정보로 부품을 조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (row, pClose) {
  // 선언부
  let pCode = "";
  let pName = "";
  let ls_fixWrkPlCd = dma_eq420Header.get("fixWrkPlCd");
  let ls_clntNo = dma_eq420Header.get("clntNo");

  // 부품코드 팝업			
  pCode = ds_eq420.getCellData(row, "partCd"); // 부품코드	

  await udc_partInfoUPR.cfCommonPopUp(scwin.udc_partInfoUPR_callBackFunc, pCode,
  // 화면에서의 ??? Code Element의	Value
  pName,
  // 화면에서의 ??? Name Element의	Value
  pClose,
  // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  "6",
  // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  "부품코드,부품명,단위,장비모델명,입고계정,단가,상태,소모품여부,COL9,COL10",
  // Title순서	
  null,
  // 보여주는 각 컬럼들의 폭	"100,150,60,150"
  ",7,8,9,10",
  // 컬럼중에서 숨기는	컬럼 지정	
  "" + ls_fixWrkPlCd + "," + ls_clntNo + "," + ica_inReqDt.getValue() + "",
  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  null,
  // POP-UP뛰을때 원도우의	사용자 정의	폭
  null,
  // POP-UP뛰을때 우도우의	사용자 정의	높이	
  null,
  // 윈도우 위치 Y좌표	
  null,
  // 윈도우 위치 X좌표
  null,
  // 중복체크여부	("F")
  "T",
  // 전체검색허용여부("F")
  "부품,부품코드,부품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  return false;
};
scwin.udc_partInfoUPR_callBackFunc = function (rtnList) {
  //부품코드        부품명	      단위		장비모델명	  입고계정 	 입고단가		상태		소모품여부		
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_eq420, ds_eq420.getRowPosition(), "partCd", "partNm", ["unitNm", "eqModelNm", "inAcctNm", "reqUpr"]);
  //-------------------------------------------------- detail그리드("입고구분")에 따라서,, "현단가()" setting.	
  // 팝업을 X 버튼으로 닫았을 때
  if (rtnList == null) {}
  // 팝업창 아래의 '닫기' 버튼으로 닫았을 때
  else if (rtnList[0] == "N/A") {
    // 최근에 검색된 값으로 다시 되돌림
    if (rtnList[0] == null) {} else {
      //"입고구분:무상"일 경우, 현단가(reqUpr)=0으로 Setting.
      if (acb_inClsCd.getSelectedIndex() == 1) {
        scwin.f_ReqUpr();
      }
    }
  }
  // 정상적으로 코드를 선택했을 때
  else {
    //"입고구분:무상"일 경우, 현단가(reqUpr)=0으로 Setting.
    if (acb_inClsCd.getSelectedIndex() == 1) {
      scwin.f_ReqUpr();
    }
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq420, null);
};
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    scwin.cvNNewSelect = true;
    scwin.f_EventSave();
    scwin.l_buyNo = ds_seq.getCellData(0, "buyNo");
    scwin.f_Retrieve();

    //ed_clntNo.setMandatory(false);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    scwin.f_EventSave();
    ds_eq420.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    scwin.f_EventSave();

    //삭제 후, "닫기"버튼제외하고 모든 버튼들 비활성화 시키기
    $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_delete]);
    bCreate2.setDisabled(true);
    bDelete2.setDisabled(true);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
    return;
  }
  totalRows.setValue(rowCnt);
  gr_eq420.setFocusedCell(0, 3);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    //신규 
    scwin.f_EventNew();
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      await $c.win.alert($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
      scwin.f_EventInit();
      //cfDisableBtn([bCreate,bUpdate,bSave, $c.global.bCreate2, $c.global.bDelete2]);
    } else {
      scwin.f_EventSearch();
      if (scwin.cvNNewSelect == true) {
        bCancel2.setDisabled(true);
        $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_delete]);
        bCreate2.setDisabled(true);
        bDelete2.setDisabled(true);

        //휴지통 버튼, 속성 지정
        btn_fieldClear.setStyle("visibility", "hidden");
        btn_fieldClear.setDisabled(true); //disable							
      }
      scwin.cvNNewSelect = false;
    }
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
  }
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.gr_eq420_ontextimageclick = async function (rowIndex, columnIndex) {
  let colId = gr_eq420.getColumnID(columnIndex);
  switch (colId) {
    case "partCd":
      if (ed_clntNo.getValue() == "" || ed_clntNo.getValue() == null) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[거래처]'])); //"@은(는) 필수 입력 항목입니다.";
        break;
      } else if (ica_inReqDt.getValue() == "" || ica_inReqDt.getValue() == null) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[입고예정일자]'])); //"@은(는) 필수 입력 항목입니다.";
        break;
      } else {
        scwin.f_openCommPopUpGrid(rowIndex, 'F');
        break;
      }
  }
};
scwin.gr_eq420_onviewchange = async function (info) {
  let oldValue = info.oldValue;
  let rowIndex = info.rowIndex;
  let colId = info.colId;
  if (rowIndex >= 0 && ds_eq420.getRowCount() > rowIndex) {
    switch (colId) {
      case "partCd":
        if (ed_clntNo.getValue() == "" || ed_clntNo.getValue() == null) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[거래처]']));
          ds_eq420.setCellData(rowIndex, "partCd", "");
        } else if (ica_inReqDt.getValue() == "" || ica_inReqDt.getValue() == null) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[입고예정일자]']));
          break;
        } else {
          if (ds_eq420.getCellData(rowIndex, colId) != "" && ds_eq420.getCellData(rowIndex, colId) != oldValue) {
            ds_eq420.setCellData(rowIndex, "partNm", "");
            ds_eq420.setCellData(rowIndex, "unitNm", "");
            ds_eq420.setCellData(rowIndex, "reqUpr", "");
            ds_eq420.setCellData(rowIndex, "eqModelNm", "");
            scwin.f_openCommPopUpGrid(rowIndex, 'T');
          } else if (ds_eq420.getCellData(rowIndex, colId) == "") {
            ds_eq420.setCellData(rowIndex, "partCd", "");
            ds_eq420.setCellData(rowIndex, "partNm", "");
            ds_eq420.setCellData(rowIndex, "unitNm", "");
            ds_eq420.setCellData(rowIndex, "reqUpr", "");
            ds_eq420.setCellData(rowIndex, "eqModelNm", "");
          }
        }
        break;
    }
  }
};
scwin.ds_eq420_onrowpositionchange = function (info) {
  $c.gus.cfPrepareHidVal($p, ds_eq420, info.newRow, ["partCd", "partNm", "unitNm", "reqUpr", "eqModelNm"]);
};
scwin.acb_inClsCd_onchange = function (info) {
  //"입고구분:무상"일 경우, 현단가(reqUpr)=0으로 Setting.
  if (acb_inClsCd.getSelectedIndex() == 1) {
    scwin.f_ReqUpr();
  }

  //"입고구분:일반"일 경우
  if (acb_inClsCd.getSelectedIndex() == 0) {
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      ds_eq420.setCellData(j, "partCd", "");
      ds_eq420.setCellData(j, "partNm", "");
      ds_eq420.setCellData(j, "unitNm", "");
      ds_eq420.setCellData(j, "reqUpr", "");
      ds_eq420.setCellData(j, "eqModelNm", "");
    }
  }
};
scwin.ica_inReqDt_onviewchange = async function (info) {
  if (ica_buyReqDt.getValue() != "") {
    if (ica_inReqDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "입고예정일자는 구매요청일자보다 크거나 같아야 합니다.");
      ica_inReqDt.setValue("");
      return;
    }
  }
};
scwin.ica_buyReqDt_onviewchange = async function (info) {
  if (ica_inReqDt.getValue() != "") {
    if (ica_inReqDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "구매요청일자는 입고예정일자보다 작거나 같아야 합니다.");
      ica_buyReqDt.setValue("");
      return;
    }
  }
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.gr_eq420_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = ds_eq420.getRowStatus(rowIndex);
  if (status == "C") {
    gr_eq420.setCellReadOnly(rowIndex, "partCd", false);
    gr_eq420.setCellReadOnly(rowIndex, "reqQty", false);
  }
};
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.gr_eq420_oneditend = async function (rowIndex, columnIndex, value) {
  let colId = gr_eq420.getColumnID(columnIndex);
  if (colId == "reqQty") {
    if (value == "" || value == 0) {
      ds_eq420.setCellData(rowIndex, "reqQty", 0);
      await $c.win.alert($p, "0은 입력할 수 없습니다.");
    }
  }
  gr_eq420.refreshRow(rowIndex);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.gr_eq420_oneditkeyup = function (info) {
  const input = event.target;
  switch (info.colID) {
    case "partCd":
      input.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fixWrkPl',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fixWrkPlCd',search:'start',style:'width:150px;',submenuSize:'fixed',objType:'data',mandatory:'true',ref:'data:dma_eq420Header.fixWrkPlCd',title:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구매번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_buyNo',style:'width: 100px;',objType:'data',maxlength:'10',mandatory:'false',ref:'data:dma_eq420Header.buyNo',title:'구매번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_buyReqDt',label:'구매요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_buyReqDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',validateOnInput:'true',editType:'select','ev:onviewchange':'scwin.ica_buyReqDt_onviewchange',title:'구매요청일자',ref:'data:dma_eq420Header.buyReqDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_clnt',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'거래처',nameId:'ed_clntNm',style:'',class:'',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'6',UpperFlagCode:'1',validExpCode:'거래처:yes:number&length=6',mandatoryName:'false',btnId:'btn_clnt',id:'udc_fixClntList','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent',objTypeName:'data',code:'clntNo',refDataCollection:'dma_eq420Header',name:'clntNm','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_buyCls',label:'구매구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_buyClsCd',search:'start',style:'width:150px;',submenuSize:'fixed',objType:'data',mandatory:'true',displayMode:'value delim label',title:'구매구분',ref:'data:dma_eq420Header.buyClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_inCls',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_inClsCd',search:'start',style:'width:100px;',submenuSize:'fixed',objType:'data',mandatory:'true',displayMode:'value delim label','ev:onchange':'scwin.acb_inClsCd_onchange',title:'입고구분',ref:'data:dma_eq420Header.inClsCd',sortOption:'value'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_inReqDt',label:'입고예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inReqDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',validateOnInput:'true','ev:onviewchange':'scwin.ica_inReqDt_onviewchange',title:'입고예정일자',ref:'data:dma_eq420Header.inReqDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_stsCd',search:'start',style:'width:100px;margin-right:10%;',submenuSize:'fixed',objType:'data',mandatory:'false',title:'상태',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',ref:'data:dma_eq420Header.stsCd'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'과세대상구분 ',style:';margin-right:5%;'}},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_taxnCls',mandatory:'false',objType:'data',ref:'data:dma_eq420Header.taxnCls',search:'start',style:'width:130px;',submenuSize:'fixed',title:'과세대상구분',sortOption:'value',disabled:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true',validFeatures:'ignoreStatus=no',columnMove:'true',dataDragSelectAutoScroll:'false','ev:ontextimageclick':'scwin.gr_eq420_ontextimageclick','ev:onaftercolumnmove':'scwin.gr_eq420_onaftercolumnmove','ev:oncellclick':'scwin.gr_eq420_oncellclick',columnMoveWithFooter:'true','ev:oneditend':'scwin.gr_eq420_oneditend','ev:onviewchange':'scwin.gr_eq420_onviewchange',rowStatusWidth:'20','ev:oneditkeyup':'scwin.gr_eq420_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'정비작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'구매번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'구매순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'부품코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'부품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'장비모델명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'요청수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'현단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'입고단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'입고금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'부가세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'구매요청일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fixWrkPlCd',displayMode:'label',hidden:'true',dataType:'number',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'buyNo',displayMode:'label',hidden:'true',dataType:'number',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'seq',displayMode:'label',hidden:'true',maxByteLength:'3',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'partCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'true',validateOnInput:'true',mandatory:'true',maxByteLength:'15',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'partNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqModelNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',maxByteLength:'7',mandatory:'true',defaultValue:'0',maxLength:'7'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqUpr',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'inAmt',displayMode:'label',readOnly:'true',expression:'Number(display("reqQty")) * Number(display("reqUpr"))',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inQty',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inUpr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col13',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatAmt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'buyReqDt',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column39',displayMode:'label',dataType:'number',expression:'sum("reqQty")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column38',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("reqUpr")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column37',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("inAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowDelObjType:'bDelete2',rowAddObjType:'bCreate2',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_eq420',cancelObjType:'bCancel2',btnCancelObj:'bCancel2',btnRowAddObj:'bCreate2',btnRowDelObj:'bDelete2',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',objType:'bUpdate',userAttr2:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrievePartInfoUPR',codeId:'ed_partCd',validTitle:'',nameId:'ed_partNm',style:'width:%; height:px; ;display:none;',id:'udc_partInfoUPR',btnId:'btn_part'}}]}]}]}]})