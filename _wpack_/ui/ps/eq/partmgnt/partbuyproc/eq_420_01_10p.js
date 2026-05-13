/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_10p.xml 67422 d1a0d83abf193a158d9176cc48025ad497506ff5097cfeae2bf97acc124e94da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_eq420',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_eq420_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'구매순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctNm',name:'입고계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'요청수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'단가승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useupYn',name:'소모품',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyNo',name:'구매번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eq420Header'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyReqDt',name:'구매요청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyClsCd',name:'구매구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inReqDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnCls',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyNewRegYn',name:'구매신규등록여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inAcctNm',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_newWrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_seq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'buyNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420Header',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNewRegYn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderDocPrtYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyPicId',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyUpr',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyPicEmail',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailSendDtm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyPicTel',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyReqDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqUpr',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partOutNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtYn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyPicNm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inReqDt',name:'name31',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fixWrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fixWrkPlCd',target:'data:json,{"id":"ds_fixWrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsBuyingDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420Header","key":"OUT_DS1"},{"id":"ds_eq420","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_eq420Header","key":"OUT_DS1"},{"id":"ds_eq420","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ps.eq.partmgnt.partbuyproc.RegistPartsBuyingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_eq420Header","key":"IN_DS1"},{"id":"ds_eq420","key":"IN_DS2"},{"id":"ds_seq","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_seq","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ps.eq.partmgnt.partbuyproc.UpdatePartsBuyingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_eq420Header","key":"IN_DS1"},{"id":"ds_eq420","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ps.eq.partmgnt.partbuyproc.CancelPartsBuyingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_eq420Header","key":"IN_DS1"},{"id":"ds_eq420","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_newWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_newWrkPlCd',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_newWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.cvNNew = false; //신규
scwin.cvUpdate = false; //수정
scwin.cvNNewSelect = false; //신규등록 후,  조회. 
scwin.l_buyNo = "";
scwin.chk_lc_inClsCd = 0; //입고구분 LuxeCombo체크
scwin.isCancel = false;
scwin.isDefault = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.valueObject = $c.data.getParameter($p);
  ed_buyNewRegYn.hide();
  const codeOptions = [{
    grpCd: "EQ026",
    compID: "lc_buyClsCd"
  }, {
    grpCd: "EQ017",
    compID: "lc_inClsCd"
  }, {
    grpCd: "FI056",
    compID: "acb_taxnCls"
  }, {
    grpCd: "EQ901",
    compID: "gr_eq420:stsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrievePartBuyStatus",
    compID: "acb_stsCd"
  }];
  $c.data.setGauceUtil($p, param, function () {
    if (scwin.valueObject.stsCd == "R") {
      acb_stsCd.setSelectedIndex(2);
    } else {
      acb_stsCd.setSelectedIndex(1);
    }
  });
  if (!scwin.valueObject.create) {
    btn_fieldClear.hide();
    tbx_fixWrkPl.removeClass("req");
    tbx_buyReqDt.removeClass("req");
    tbx_fixClnt.removeClass("req");
    tbx_buyCls.removeClass("req");
    tbx_inReqDt.removeClass("req");
    tbx_inCls.removeClass("req");
    tbx_inDt.removeClass("req");
  }
  scwin.getFixWrkPlCd();
};
scwin.ondataload = function () {
  //조회조건 필수인 항목들(구매구분,입고구분,작업장) - 기본값 Setting.
  lc_buyClsCd.setSelectedIndex(2); //구매구분:Detax(Air일반)
  lc_inClsCd.setSelectedIndex(0); //입고구분:일반
  acb_taxnCls.setValue(scwin.valueObject.taxnCls);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  udc_partInfoUPR.hide();
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  //"부품구매관리"화면에서 넘어오는 파라미터 확인
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규
    if (scwin.valueObject.create) {
      lc_fixWrkPlCd.addItem(scwin.valueObject.fixWrkPlCd, scwin.valueObject.fixWrkPlNm);
      scwin.f_Create();
      //Grid속성 지정(Edit, HeadColor) 
      gr_eq420.setColumnReadOnly('inUpr', true);
      gr_eq420.setHeaderColor('partCd', "red");

      //휴지통 버튼, 속성 지정
      btn_fieldClear.setStyle("visibility", "visible");
      btn_fieldClear.setDisabled(false); //enable
    }
    //상세
    else {
      scwin.isDefault = true;
      //lc_fixWrkPlCd.setValue(scwin.valueObject.fixWrkPlCd);   //작업장코드
      lc_fixWrkPlCd.addItem(scwin.valueObject.fixWrkPlCd, scwin.valueObject.fixWrkPlNm);
      ed_buyNo.setValue(scwin.valueObject.buyNo); //구매번호
      ica_buyReqDt.setValue(scwin.valueObject.buyReqDt); //구매요청일자
      scwin.f_openCommonPopUp(1, scwin.valueObject.clntNo, scwin.valueObject.clntNm, 'T', 'T'); //거래처
      lc_buyClsCd.setValue(scwin.valueObject.buyClsCd); //구매구분
      lc_inClsCd.setValue(scwin.valueObject.inClsCd); //입고구분
      ica_inReqDt.setValue(scwin.valueObject.inReqDt); //입고예정일자
      ica_inDt.setValue(scwin.valueObject.inDt == null ? "" : scwin.valueObject.inDt); //입고일자
      scwin.f_Retrieve();

      //Grid속성 지정(Edit, HeadColor) 
      gr_eq420.setColumnReadOnly('partCd', true);
      gr_eq420.setColumnReadOnly('inQty', true);
      gr_eq420.setColumnReadOnly('vatAmt', true);
      gr_eq420.setColumnReadOnly('inUpr', true);
      gr_eq420.setHeaderColor('partCd', "black");
      gr_eq420.setHeaderColor('inUpr', "red");

      //휴지통 버튼, 속성 지정  
      btn_fieldClear.setStyle("visibility", "visible");
      btn_fieldClear.setDisabled(true); //disable
      $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm]);
    }
  }
};
scwin.getFixWrkPlCd = function () {
  dma_fixWrkPlCd.set("sysCd", "PsCommonEBC");
  dma_fixWrkPlCd.set("queryId", "retriveWrkplList");
  $c.sbm.execute($p, sbm_fixWrkPlCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 필수입력항목 체크	  
  // if( !cfValidate([lc_fixWrkPlCd, ed_dtFrom, ed_dtTo]) ) return;

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
    $c.sbm.execute($p, sbm_retrieve);
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
// 저장(상세저장(확정)/신규저장)

//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //마감처리
  let check2 = await scwin.f_JobCloseYN();
  if (check2 == '2' || check2 == '3') {
    //MSG_CM_ERR_041   =  "@은(는) @할 수 없습니다.";
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_041, ['사용일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '저장']));
    return;
  }

  //신규일때
  if (scwin.cvNNew == true && scwin.cvUpdate == false) {
    //"부품구매등록 "그리드가 데이타(row)가 있는지 체크
    if (ds_eq420.getRowCount() < 1) {
      await $c.win.alert($p, "'부품구매등록'에 데이타가 존재하지 않습니다. '행추가'를 하고 '부품구매등록'을 입력하세요.");
      return;
    }

    //변경한 데이터가 있는지 체크한다.(각 dataSet 변경검사)
    if (dma_eq420Header.getModifiedIndex().length == 0 && ds_eq420.getModifiedIndex().length == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ['부품구매등록'])); //변경된 정보가 없습니다.    
      return;
    }
    let ret = await $c.gus.cfValidate($p, [tb_eq420]); //Table ID
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [gr_eq420]);
    if (!ret2) {
      return false;
    }
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      //row갯수 만큼,, 루프돌리기
      ds_eq420.setCellData(j, "fixWrkPlCd", lc_fixWrkPlCd.getValue());
      ds_eq420.setCellData(j, "buyReqDt", ica_buyReqDt.getValue());
    }
    for (i = 0; i < ds_eq420.getRowCount(); i++) {
      //부품코드 중복입력 불가 
      for (j = i + 1; j < ds_eq420.getRowCount(); j++) {
        if (ds_eq420.getCellData(i, "partCd") == ds_eq420.getCellData(j, "partCd")) {
          await $c.win.alert($p, "부품구매등록 그리드의 " + (j + 1) + "번째 데이터에서 부품코드은(는) 중복될 수 없습니다.");
          gr_eq420.setFocusedCell(j, "partCd", true);
          return;
        }
      }
    }

    //입고수량 체크(입고수량은 "0"일 수 없다.)
    let inQty = 0;
    let rowStatus = "";
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      //row갯수 만큼,, 루프돌리기
      rowStatus = ds_eq420.getRowStatus(j);
      if (rowStatus == "C" || rowStatus == "D" || rowStatus == "U") {
        //RowStatus:1(Insert),2(Delete),3(Update)	
        inQty = ds_eq420.getCellData(j, 'inQty');
        if (inQty == 0) {
          await $c.win.alert($p, "입력된 입고수량이 없습니다.");
          return;
        }
      }
    }
    //"입고구분:무상"일 경우(입고단가="0" setting)
    if (lc_inClsCd.getSelectedIndex() == 1) {
      scwin.f_ReqUpr();
    }
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_create);
    }
  }

  //상세(수정)일때
  if (scwin.cvNNew == false && scwin.cvUpdate == true) {
    let ret3 = await $c.gus.cfValidate($p, [ica_inDt]);
    if (!ret3) {
      return false;
    }
    if (ds_eq420.getRowCount() == 0) {
      return;
    } else {
      //입고수량,입고단가  체크(입고수량,입고단가는  "0"일 수 없다.)
      let inQty = 0; //입고수량
      let inUpr = 0; //입고단가
      let rowStatus = "";
      for (j = 0; j < ds_eq420.getRowCount(); j++) {
        //row갯수 만큼,, 루프돌리기
        rowStatus = ds_eq420.getRowStatus(j);
        if (rowStatus == "C" || rowStatus == "D" || rowStatus == "U") {
          //RowStatus:1(Insert),2(Delete),3(Update)	
          inQty = ds_eq420.getCellData(j, 'inQty');
          inUpr = ds_eq420.getCellData(j, 'inUpr');
          if (inQty == 0) {
            await $c.win.alert($p, "입력된 입고수량이 없습니다.");
            return;
          }
          if (inUpr == 0) {
            await $c.win.alert($p, "입력된 입고단가가 없습니다.");
            return;
          }
        }
      }

      //"입고구분:무상"일 경우(입고단가="0" setting)
      if (lc_inClsCd.getSelectedIndex() == 1) {
        scwin.f_ReqUpr();
      }
      if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
        $c.sbm.execute($p, sbm_confirm);
      }
    }
  }
};

//-------------------------------------------------------------------------
//  마감여부 체크  
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (str) {
  if (ica_inDt.getValue() == "") {
    await $c.win.alert($p, "입고일자는 필수 입력 항목 입니다.");
    ica_inDt.focus();
  }
  let pReqKind = "CUR"; // 마감요청구분
  let pCloseYM = dma_eq420Header.get("inDt"); // 마감년월	---------------> "입고일자" 
  let pCloseDD = "00"; // 마감일
  let pWorkNo = "EQ06"; // 작업번호    
  let pMgntNo = dma_eq420Header.get("fixWrkPlCd"); // 관리번호    	--------------->  거래처
  let pRtnKind = ""; // 리턴구분
  let pDualChkYN = ""; // 작업마감+선행마감체크 구분
  let isCloseYN = ""; // 마감구분코드	

  pCloseYM = pCloseYM.substring(0, 6); // 기준일자

  isCloseYN = await udc_closeYn.cfJobCloseYN(pReqKind, pCloseYM.substring(0, 6), pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN);
  //DNF , 1 ==> 처리가능
  //2 , 3 ==> 처리 불가능

  return isCloseYN;
};

//-------------------------------------------------------------------------
// "입고구분:무상"일 경우, "현단가=0" 으로 setting...
//-------------------------------------------------------------------------
scwin.f_ReqUpr = function () {
  if (ds_eq420.getRowCount() > 0) {
    //row갯수 만큼,, 루프돌리기
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      ds_eq420.setCellData(j, "inUpr", 0); //입고단가=0
      ds_eq420.setCellData(j, "vatAmt", 0); //입고vat=0
    }
  }
};

//-------------------------------------------------------------------------
// 삭제(확정취소)
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  //마감처리
  let check = await scwin.f_JobCloseYN();
  if (check == '2' || check == '3') {
    //MSG_CM_ERR_041   =  "@은(는) @할 수 없습니다.";
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_041, ['사용일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우'], '삭제'));
    return;
  }
  scwin.f_Amount(); //그리드(gr_eq420)에서, 입고금액, 부가세금액 setting

  if (ds_eq420.getRowCount() == 0) {
    return;
  } else {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_cancel);
    }
  }
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

  //상세(확정취소)일때
  if (scwin.cvNNew == false && scwin.cvUpdate == true) {
    scwin.f_EventSearch();
    btn_cancel.setDisabled(true);
    btn_Cancel2.setDisabled(true);
    btn_update.setDisabled(false);
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    $c.data.undoAll($p, ds_eq420);
  }
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_Close = async function () {
  if (scwin.f_IsUpdated())
    //true
    {
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
  let rtn = dma_eq420Header.getModifiedIndex().length > 0 || ds_eq420.getModifiedIndex().length > 0;
  return rtn;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let chkRowStatus = "";

  //신규일때
  if (scwin.cvNNew == true && scwin.cvUpdate == false) {
    let newRow = ds_eq420.insertRow();
    ds_eq420.setCellData(newRow, "reqQty", 0);
    ds_eq420.setCellData(newRow, "inQty", 0);
    ds_eq420.setCellData(newRow, "inUpr", 0);
    ds_eq420.setCellData(newRow, "vatAmt", 0);
    gr_eq420.setFocusedCell(newRow, 3);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  if (ds_eq420.getRowCount() > 0) {
    ds_eq420.removeRow(ds_eq420.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 그리드(gr_eq420)에서, 입고금액, 부가세금액 setting
//-------------------------------------------------------------------------
scwin.f_Amount = function () {
  //row갯수 만큼,, 루프돌리기
  for (j = 0; j < ds_eq420.getRowCount(); j++) {
    //입고금액 setting (  입고금액 = 입고수량 * 입고단가  )
    ds_eq420.setCellData(j, "inAmt", ds_eq420.getCellData(j, "inQty") * ds_eq420.getCellData(j, "inUpr"));
  }
};

//------------------------------------------------------------------------------------------
// 버튼이벤트(초기화,조회후,신규,수정,저장) 선택에 따른. 입력항목,버튼상태 설정, Start
//------------------------------------------------------------------------------------------
scwin.f_EventInit = function () {
  $c.gus.cfInitObjects($p, tb_eq420); //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  lc_fixWrkPlCd.setSelectedIndex(0);
  $c.gus.cfEnableObj($p, lc_fixWrkPlCd, false);

  //Key,Data 모두 disable(non-editable)상태
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_delete, btn_save]);
  $c.gus.cfDisableBtn($p, [btn_update]); //모든 버튼 : disabled 상태	

  gr_eq420.setReadOnly(true);
};
scwin.f_EventSearch = function () {
  //조회 후, 발생하는 이벤트
  //Key,Data 모두 disable(non-sedi-table)상태
  $c.gus.cfDisableKeyData($p);
  let valueFlag = "";
  if (scwin.valueObject.create) {
    valueFlag = "create";
  } //신규	   
  else {
    valueFlag = "detail";
  } //상세

  //"부품구매관리"화면에서 넘어오는 파라미터 확인
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    if (scwin.valueObject.stsCd == "R") {
      //R:요청

      if (valueFlag == "detail") {
        //상세
        $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
        $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
        btn_Cancel2.setDisabled(true);
        btn_Create2.setDisabled(true);
        btn_Delete2.setDisabled(true);
      } else {
        //신규
        $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
        $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
      }
    } else if (scwin.valueObject.stsCd == "C") {
      //C:확정
      $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
      if (valueFlag == "detail") {
        //상세

        if (lc_inClsCd.getValue() == 3) {
          //입고구분:선입고(getValue=3)
          $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
          $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
          btn_Cancel2.setDisabled(true);
          btn_Create2.setDisabled(true);
          btn_Delete2.setDisabled(true);
        } else {
          //입고구분:일반, 무상
          $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
          $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
          btn_Cancel2.setDisabled(true);
          btn_Create2.setDisabled(true);
          btn_Delete2.setDisabled(true);
        }
      } else {
        //신규
        $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
        $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt, btn_cancel]);
      }
    }
  }
  gr_eq420.setReadOnly(false);
  $c.gus.cfEnableObj($p, lc_fixWrkPlCd, false);
};
scwin.f_EventNew = function () {
  $c.gus.cfEnableKeyData($p); //Key, Data 형태의 입력필드를 모두 enable(editable) 상태
  $c.gus.cfEnableObj($p, ed_buyNo, false); //구매번호
  $c.gus.cfEnableObj($p, acb_stsCd, false); //상태:확정
  $c.gus.cfEnableObj($p, acb_taxnCls, false); //과세구분
  scwin.f_MandatoryObj();

  //이미지버튼 활성화
  btn_clnt.setDisabled(false); //거래처팝업
  ica_buyReqDt.setDisabled(false); //구매요청일자 팝업	
  ica_inReqDt.setDisabled(false); //입고예정일자 팝업		

  //모든 버튼을 enable(클릭가능) 상태
  $c.gus.cfDisableBtn($p, [btn_update, btn_delete]);
  btn_cancel.setDisabled(false);
  btn_Cancel2.setDisabled(false);
  gr_eq420.setReadOnly(false);

  //부품구매요청등록 GRID - Row추가
  scwin.f_AddRow();
  //gr_eq420.ColumnProp("partCd", 'EDIT') = 'Upper'; // caseReplace="upper"

  $c.gus.cfTurnCreateFlag($p, false);

  //"부품구매관리"화면에서 넘어오는 파라미터 확인	
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규 입력 상태
    if (scwin.valueObject.create) {
      scwin.f_setLuxWrkpl(scwin.valueObject.fixWrkPlCd);
    }
  }
  lc_fixWrkPlCd.focus();
};

//Object의 Mandatory를  true 상태로 변경
scwin.f_MandatoryObj = function () {
  ica_buyReqDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //구매요청일자
  ica_inReqDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //입고예정일자
  ica_inDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //입고일자
};

//-------------------------------------------------------------------------
// 신규시,, 작업장 콤보 Setting
//-------------------------------------------------------------------------
scwin.f_setLuxWrkpl = function (param2) {
  dma_newWrkPlCd.set("sysCd", "PsCommonEBC");
  dma_newWrkPlCd.set("queryId", "retriveWrkplList");
  dma_newWrkPlCd.set("param2", param2);
  $c.sbm.execute($p, sbm_newWrkPl);
};
scwin.f_EventUpdate = function () {
  $c.gus.cfEnableObj($p, ica_inDt, true);

  //이미지버튼 활성화/비활성화 여부
  ica_inDt.setDisabled(false); //입고일자 팝업이미지		

  //-----버튼항목설정
  $c.gus.cfEnableObjects($p, [btn_cancel]);
  //cfDisableBtn([bUpdate, bDelete]);//버튼항목설정
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    //신규 입력 상태
    if (scwin.valueObject.create) {
      $c.gus.cfDisableBtn($p, [btn_update, btn_delete]);
    }
    //수정/조회 상태
    else {
      tbx_inDt.addClass("req");
      //상세조회시, (행추가,행삭제,취소 버튼 : disabled 상태)
      $c.gus.cfDisableBtn($p, [btn_update, btn_delete]);
      btn_Cancel2.setDisabled(true);
      btn_Create2.setDisabled(true);
      btn_Delete2.setDisabled(true);
      gr_eq420.setColumnReadOnly('inUpr', false);
      gr_eq420.setColumnReadOnly('inQty', false);
      gr_eq420.setColumnReadOnly('vatAmt', false);
    }
  }
  gr_eq420.setReadOnly(false);
};
scwin.f_EventSave = function () {
  scwin.f_EventSearch(); // 조회후의 이벤트	

  btn_cancel.setDisabled(true);
  btn_Cancel2.setDisabled(true);
  btn_Create2.setDisabled(true);
  btn_Delete2.setDisabled(true);
  //btn_save.setDisabled(true);
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditNone = function () {
  gr_eq420.setColumnReadOnly("partCd", true);
};
scwin.f_EditTrue = function (Row, Colid) {
  // gr_eq420.ColumnProp("partCd", 'EDIT') = 'Upper';

  //"입고금액=0"일 경우, 부가세는 "Edit=None"
  if (Colid == "vatAmt") {
    if (ds_eq420.getCellData(Row, "inAmt") == "0") {
      gr_eq420.setColumnReadOnly("vatAmt", true);
    } else {
      gr_eq420.setColumnReadOnly("vatAmt", false);
    }
  }
};
scwin.f_EditControl = function (Row, Colid) {
  /*=====  insert[1],delete[2],update[3]  =====*/
  if (Row > -1) {
    if (ds_eq420.getRowStatus(Row) == "C") {
      scwin.f_EditTrue(Row, Colid);
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
      await udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode,
      // 화면에서의 ??? Code Element의	Value
      pName,
      // 화면에서의 ??? Name Element의	Value
      pClose,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      null,
      // 검색 결과	컬럼의 보여주는	개수
      null,
      // Title순서	
      null,
      // 보여주는 각 컬럼들의 폭	
      ",3,4,5,6,7,8,9,10",
      // 컬럼중에서 숨기는	컬럼 지정	
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함
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
      "거래처,거래처코드,거래처명" // POP-UP Window Title
      );
      break;
  }
};
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  // SET	
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

  udc_partInfoUPR.cfCommonPopUp(scwin.udc_partInfoUPR_callBackFunc // XML상의 SELECT ID	   retrievePartInfo
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , "6" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , "부품코드,부품명,단위,장비모델명,입고계정,단가,상태,소모품여부,COL9,COL10" // Title순서	
  , null // 보여주는 각 컬럼들의 폭	"100,150,60,150"
  , ",7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
  , "" + ls_fixWrkPlCd + "," + ls_clntNo + "," + ica_inDt.getValue() + "" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "T" // 전체검색허용여부("F")
  , "부품,부품코드,부품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  return false;
};
scwin.udc_partInfoUPR_callBackFunc = function (rtnList) {
  //부품코드        부품명	      단위		장비모델명	  입고계정 	 입고단가		상태		소모품여부		
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_eq420, ds_eq420.getRowPosition(), "partCd", "partNm", ["unitNm", "eqModelNm", "inAcctNm", "inUpr", "stsCd", "useupYn"]);

  //-------------------------------------------------- detail그리드("입고구분")에 따라서,, "현단가()" setting.	
  // 팝업을 X 버튼으로 닫았을 때
  if (rtnList == null) {
    ds_eq420.setCellData(ds_eq420.getRowPosition(), "vatAmt", 0);
  }
  // 팝업창 아래의 '닫기' 버튼으로 닫았을 때
  else if (rtnList[0] == "N/A") {
    // 최근에 검색된 값으로 다시 되돌림
    if (rtnList[0] == null) {
      ds_eq420.setCellData(ds_eq420.getRowPosition(), "vatAmt", 0);
    } else {
      //"입고구분:무상"일 경우(입고단가="0" setting)
      if (lc_inClsCd.getSelectedIndex() == 1) {
        scwin.f_ReqUpr();
      }
    }
  }
  // 정상적으로 코드를 선택했을 때
  else {
    if (ds_eq420.getCellData(ds_eq420.getRowPosition(), "inQty") != 0 && rtnList[5] != 0) {
      //입고금액 setting (  입고금액= 입고수량*입고단가  )
      ds_eq420.setCellData(ds_eq420.getRowPosition(), "inAmt", ds_eq420.getCellData(ds_eq420.getRowPosition(), "inQty") * rtnList[5]);
      //부가세금액 setting (  과세대상이 간이과세(20), 면세(30)이면 0, 아니면 부가세금액 = 입고금액 * 0.1  )
      if (ds_eq420.getCellData(ds_eq420.getRowPosition(), "inAmt") != 0) {
        var taxnCls = "";
        taxnCls = dma_eq420Header.get("taxnCls");
        if (taxnCls == "20" || taxnCls == "30") {
          ds_eq420.setCellData(ds_eq420.getRowPosition(), "vatAmt", 0);
        } else {
          ds_eq420.setCellData(ds_eq420.getRowPosition(), "vatAmt", Math.round(ds_eq420.getCellData(ds_eq420.getRowPosition(), "inAmt") * 0.1));
        }
      }
    }

    //"입고구분:무상"일 경우(입고단가="0" setting)
    if (lc_inClsCd.getSelectedIndex() == 1) {
      scwin.f_ReqUpr();
    }
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq420, null);
  ica_buyReqDt.setValue(""); //구매요청일자
  ica_inReqDt.setValue(""); //입고예정일자
  ica_inDt.setValue(""); //입고일자
  acb_taxnCls.setSelectedIndex(1);
};
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    scwin.cvNNewSelect = true;
    scwin.f_EventSave();
    scwin.l_buyNo = ds_seq.getCellData(0, "buyNo");
    ds_eq420.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    ds_eq420Header.setCellData(0, "inDt", dma_eq420Header.get("inDt"));
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    scwin.isCancel = true;
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); //성공적으로 저장하였습니다
    dma_eq420Header.setJSON({
      fixWrkPlCd: "",
      buyNo: "",
      buyReqDt: "",
      clntNo: "",
      clntNm: "",
      buyClsCd: "",
      inClsCd: "",
      inReqDt: "",
      inDt: "",
      stsCd: "",
      taxnCls: "",
      buyNewRegYn: ""
    });
    scwin.cvNNew = false;
    scwin.cvUpdate = false;
    ds_eq420.reform();
    scwin.isCancel = true;
    scwin.f_Retrieve(); //-----Add.2006.02.13
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
    if (scwin.isCancel == true) {
      //삭제 후, "닫기"버튼제외하고 모든 버튼들 비활성화 시키기
      lc_buyClsCd.setValue(-1);
      lc_inClsCd.setValue(-1);
      btn_cancel.setDisabled(true);
      $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_delete]);
      btn_Cancel2.setDisabled(true);
      btn_Create2.setDisabled(true);
      btn_Delete2.setDisabled(true);
      scwin.isCancel = false;
      return false;
    }
  }
  totalRows.setValue(rowCnt);
  gr_eq420.setFocusedCell(0, 3);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    //신규 
    scwin.f_EventNew();
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (rowCnt == 0) {
      scwin.f_EventInit();
    } else {
      scwin.f_EventSearch();
      dma_eq420Header.set("fixWrkPlCd", ds_eq420Header.getCellData(0, "fixWrkPlCd"));
      if (scwin.cvNNewSelect == true) {
        $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_delete]);
        btn_Cancel2.setDisabled(true);
        btn_Create2.setDisabled(true);
        btn_Delete2.setDisabled(true);

        //휴지통 버튼, 속성 지정
        btn_fieldClear.setStyle("visibility", "hidden");
        btn_fieldClear.setDisabled(true); //disable	

        //팝업버튼 비활성화
        $c.gus.cfDisableObjects($p, [ica_buyReqDt, ica_inReqDt, ica_inDt, btn_clnt]);
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
      } else if (ica_inDt.getValue() == "" || ica_inDt.getValue() == null) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[입고일자]'])); //"@은(는) 필수 입력 항목입니다.";
        break;
      } else {
        scwin.f_openCommPopUpGrid(rowIndex, 'F');
      }
      break;
  }
};
scwin.gr_eq420_onviewchange = async function (info) {
  let rowIndex = info.rowIndex;
  let colId = info.colId;
  let olddata = info.oldValue;
  if (colId == "inQty" || colId == "inUpr") {
    //입고수량 or 입고단가
    //입고금액 setting (  입고금액= 입고수량*입고단가  )
    ds_eq420.setCellData(rowIndex, "inAmt", ds_eq420.getCellData(rowIndex, "inQty") * ds_eq420.getCellData(rowIndex, "inUpr"));
    if (ds_eq420.getCellData(rowIndex, "inAmt") != 0) {
      //입고금액
      if (ds_eq420.getCellData(rowIndex, "inAmt") != olddata) {
        let taxnCls = "";
        taxnCls = dma_eq420Header.get("taxnCls");
        if (taxnCls == "20" || taxnCls == "30") {
          ds_eq420.setCellData(rowIndex, "vatAmt", 0);
        } else {
          ds_eq420.setCellData(rowIndex, "vatAmt", Math.round(ds_eq420.getCellData(rowIndex, "inAmt") * 0.1));
        }
      }
    }
  }
  if (rowIndex > -1 && ds_eq420.getRowCount() > rowIndex) {
    switch (colId) {
      case "partCd":
        if (ed_clntNo.getValue() == "" || ed_clntNo.getValue() == null) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[거래처]']));
          ds_eq420.setCellData(rowIndex, "partCd", "");
          break;
        } else if (ica_inDt.getValue() == "" || ica_inDt.getValue() == null) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, ['[입고일자]']));
          break;
        } else {
          if (ds_eq420.getCellData(rowIndex, colId) != "" && ds_eq420.getCellData(rowIndex, colId) != olddata) {
            ds_eq420.setCellData(rowIndex, "partNm", "");
            ds_eq420.setCellData(rowIndex, "unitNm", "");
            ds_eq420.setCellData(rowIndex, "inUpr", "");
            ds_eq420.setCellData(rowIndex, "stsCd", "");
            ds_eq420.setCellData(rowIndex, "useupYn", "");
            ds_eq420.setCellData(rowIndex, "eqModelNm", "");
            scwin.f_openCommPopUpGrid(rowIndex, 'T');
          } else if (ds_eq420.getCellData(rowIndex, colId) == "") {
            ds_eq420.setCellData(rowIndex, "partCd", "");
            ds_eq420.setCellData(rowIndex, "partNm", "");
            ds_eq420.setCellData(rowIndex, "unitNm", "");
            ds_eq420.setCellData(rowIndex, "inUpr", "");
            ds_eq420.setCellData(rowIndex, "stsCd", "");
            ds_eq420.setCellData(rowIndex, "useupYn", "");
            ds_eq420.setCellData(rowIndex, "eqModelNm", "");
          }
        }
        break;
    }
  }
};
scwin.gr_eq420_onaftercolumnmove = function (info) {
  scwin.f_EditControl(info.rowIndex, info.colId);
};
scwin.ds_eq420_onrowpositionchange = function (info) {
  $c.gus.cfPrepareHidVal($p, ds_eq420, info.rowIndex, ["partCd", "partNm", "unitNm", "inUpr", "stsCd", "useupYn", "eqModelNm", "inAcctNm"]);
};
scwin.lc_inClsCd_onchange = function (info) {
  if (lc_inClsCd.getSelectedIndex() == 1) {
    scwin.f_ReqUpr();
  }
  if (scwin.chk_lc_inClsCd == 1) {
    // "Org입고구분"이 무상이었을 경우
    for (j = 0; j < ds_eq420.getRowCount(); j++) {
      ds_eq420.setCellData(j, "partCd", "");
      ds_eq420.setCellData(j, "partNm", "");
      ds_eq420.setCellData(j, "unitNm", "");
      ds_eq420.setCellData(j, "inUpr", "");
      ds_eq420.setCellData(j, "stsCd", "");
      ds_eq420.setCellData(j, "useupYn", "");
      ds_eq420.setCellData(j, "eqModelNm", "");
    }
  }
};
scwin.lc_inClsCd_onbeforeselect = function (selectedIndex, index) {
  scwin.chk_lc_inClsCd = lc_inClsCd.getSelectedIndex();
};
scwin.ica_buyReqDt_onviewchange = async function (info) {
  //구매요청일자 <= 입고예정일자
  if (ica_inReqDt.getValue() != "") {
    if (ica_inReqDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "구매요청일자는 입고예정일자보다 작거나 같아야 합니다.");
      ica_buyReqDt.setValue("");
      return;
    }
  }

  //구매요청일자 <= 입고일자
  if (ica_inDt.getValue() != "") {
    if (ica_inDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "구매요청일자는 입고일자보다 작거나 같아야 합니다.");
      ica_buyReqDt.setValue("");
      return;
    }
  }
};
scwin.ica_inReqDt_onviewchange = async function (info) {
  //입고예정일자 >= 구매요청일자
  if (ica_buyReqDt.getValue() != "") {
    if (ica_inReqDt.getValue() != "" && ica_inReqDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "입고예정일자는 구매요청일자보다 크거나 같아야 합니다.");
      ica_inReqDt.setValue("");
      return;
    }
  }
};
scwin.ica_inDt_onviewchange = async function (info) {
  //입고일자 >= 구매요청일자
  if (ica_buyReqDt.getValue() != "") {
    if (ica_inDt.getValue() != "" && ica_inDt.getValue() < ica_buyReqDt.getValue()) {
      await $c.win.alert($p, "입고일자는 구매요청일자보다 크거나 같아야 합니다.");
      ica_inDt.setValue("");
      return;
    }
  }

  //"입고일자 < 현재일자" check!!
  let yyyymmdd = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
  if (ica_inDt.getValue() > yyyymmdd) {
    await $c.win.alert($p, "입고일자는 현재일자보다 작거나 같아야 합니다.");
    ica_inDt.setValue("");
    return;
  }
};
scwin.sbm_newWrkPl_submitdone = function (e) {
  lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.gr_eq420_oneditend = async function (rowIndex, columnIndex, value) {
  let colId = gr_eq420.getColumnID(columnIndex);
  let oldValue = ds_eq420.getCellData(rowIndex, "inQty");
  if (colId == "inQty") {
    if (value == "" || value == 0) {
      await $c.win.alert($p, "입고수량은 0을 입력할 수 없습니다.");
      ds_eq420.setCellData(rowIndex, "inQty", oldValue);
    }
  }
  if (colId == "inUpr") {
    if (value == "" || value == 0) {
      await $c.win.alert($p, "입고단가는 0을 입력할 수 없습니다.");
      ds_eq420.setCellData(rowIndex, "inUpr", 0);
    }
    if (ds_eq420.getCellData(rowIndex, "inUpr") > value) {
      await $c.win.alert($p, "입고단가는 최종승인된 단가보다 작거나 같아야 합니다.");
      ds_eq420.setCellData(rowIndex, "inUpr", value);
    }
  }
  if (colId == "partCd") {
    value.toUpperCase();
  }
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_eq420',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fixWrkPl',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_eq420Header.fixWrkPlCd',title:'작업장',mandatory:'true',displayMode:'value delim label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구매번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_buyNo',style:'width: 150px;',objType:'data',mandatory:'false',maxlength:'10',ref:'data:dma_eq420Header.buyNo',title:'구매번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_buyReqDt',label:'구매요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_buyReqDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',editType:'select','ev:onviewchange':'scwin.ica_buyReqDt_onviewchange',title:'구매요청일자',ref:'data:dma_eq420Header.buyReqDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fixClnt',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixClntList',codeId:'ed_clntNo',validTitle:'거래처',nameId:'ed_clntNm',style:'',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',UpperFlagCode:'1',validExpCode:'validExp="거래처:yes:number&length=6"',objTypeName:'data',btnId:'btn_clnt',id:'udc_fixClntList','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent',refDataCollection:'dma_eq420Header',code:'clntNo',name:'clntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_stsCd',search:'start',style:'width:150px;',submenuSize:'fixed',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_eq420Header.stsCd',title:'상태',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_buyCls',label:'구매구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_buyClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',mandatory:'true',title:'구매구분',ref:'data:dma_eq420Header.buyClsCd',sortOption:'value',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_inCls',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_inClsCd_onchange','ev:onbeforeselect':'scwin.lc_inClsCd_onbeforeselect',title:'입고구분',ref:'data:dma_eq420Header.inClsCd',sortOption:'value',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_inReqDt',label:'입고예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inReqDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',editType:'select','ev:onviewchange':'scwin.ica_inReqDt_onviewchange',title:'입고예정일자',ref:'data:dma_eq420Header.inReqDt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_inDt',label:'입고일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inDt',style:'',objType:'data',mandatory:'true',editType:'select','ev:onviewchange':'scwin.ica_inDt_onviewchange',title:'입고일자',ref:'data:dma_eq420Header.inDt',validateOnInput:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'과세대상구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_taxnCls',search:'start',style:'width:150px;',submenuSize:'fixed',objType:'data',readOnly:'true',title:'과세대상구분',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:'data:dma_eq420Header.taxnCls'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_buyNewRegYn',style:'',objType:'data',readOnly:'true',ref:'data:dma_eq420Header.buyNewRegYn'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'20',visibleRowNumFix:'true',validFeatures:'ignoreStatus=no',validExp:'partCd:부품코드:yes:maxByteLength=15:key,',columnMove:'true','ev:ontextimageclick':'scwin.gr_eq420_ontextimageclick','ev:onviewchange':'scwin.gr_eq420_onviewchange','ev:onaftercolumnmove':'scwin.gr_eq420_onaftercolumnmove','ev:oneditend':'scwin.gr_eq420_oneditend',rowStatusVisible:'true',rowStatusWidth:'20',columnMoveWithFooter:'true','ev:oneditkeyup':'scwin.gr_eq420_oneditkeyup',gridName:'부품구매등록 그리드'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fixWrkPlCd',value:'정비작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'buyNo',value:'구매번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'seq',value:'구매순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'partCd',value:'부품코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'partNm',value:'부품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitNm',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqModelNm',value:'장비모델명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inAcctNm',value:'입고계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqQty',value:'요청</br>수량 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inQty',value:'입고</br>수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:';visibility:;',id:'inUpr',value:'입고</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inAmt',value:'입고</br>금액 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatAmt',value:'VAT',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stsCd',value:'단가</br>승인여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'useupYn',value:'소모품',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fixWrkPlCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'buyNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'seq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'partCd',displayMode:'label',mandatory:'true',dataType:'text',maxLength:'16',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',allowChar:'a-zA-Z0-9-',validateOnInput:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'partNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqModelNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inAcctNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqQty',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inQty',displayMode:'label',mandatory:'true',dataType:'number',displayFormat:'#,##0',maxLength:'6',allowChar:'0-9',validateOnInput:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inUpr',displayMode:'label',mandatory:'true',dataType:'number',maxByteLength:'13',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'inAmt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'Number(display("inQty")) * Number(display("inUpr"))'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatAmt',displayMode:'label',mandatory:'data',dataType:'number',displayFormat:'#,##0',maxLength:'13',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'stsCd',displayMode:'value delim label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'useupYn',displayMode:'label',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column34',displayMode:'label',dataType:'number',expression:'sum("reqQty")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',dataType:'number',expression:'sum("inQty")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',dataType:'number',expression:'sum("inUpr")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',dataType:'number',expression:'sum("inAmt")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',displayMode:'label',dataType:'number',expression:'sum("vatAmt")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddObjType:'bCreate2',rowDelObjType:'bDelete2',cancelObjType:'bCancel2',gridID:'gr_eq420',btnCancelObj:'btn_Cancel2',btnRowAddObj:'btn_Create2',btnRowDelObj:'btn_Delete2',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',bUpdate:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrievePartInfoUPR',codeId:'ed_partInfoCd',validTitle:'',nameId:'ed_partInfoNm',style:'width:%; height:px; ;visibility:hidden;',btnId:'btn_partInfo',id:'udc_partInfoUPR'}},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_closeYn'}}]}]}]}]})