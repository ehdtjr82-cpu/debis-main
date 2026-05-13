/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_04_02b.xml 78255 64eb635d6971b6c71fefb092225e8d16b810cfeda35096fd378a3927b7460ff5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntceNo',name:'고지번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveFaultRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'assgnBran',name:'배정점소명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'assgnBranNm',name:'배정점소명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regBran',name:'등록점소',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록점소명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비작업장명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntceNo',name:'고지번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'recptDt',name:'접수일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'outbrDt',name:'입금일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltRateKnd',name:'과태료종류',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltRateAmt',name:'과태료금액',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jrsdGoffice',name:'관할관청',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inspStDt',name:'검사시작일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inspEndDt',name:'검사종료일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hataiStDt',name:'해태시작일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hataiEndDt',name:'해태종료일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hataiTerm',name:'해태기간',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수예정일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'retrvSlipNo',name:'회수전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'retrvAmt',name:'회수금액',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rcptBankAcnt',name:'입금계좌',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'retrvYn',name:'회수여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'gridRetrvYn',name:'회수여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntDt',name:'납부일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDept',name:'귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'szDt',name:'압류일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'szRecptNo',name:'압류접수번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'szTmnDt',name:'압류해지일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'szTmnRecptNo',name:'압류해지접수번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'szRecptYn',name:'압류여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntceFullNo',name:'고지번호FULLNUMBER',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntSlipDt',name:'납부전표일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntPrd',name:'납부기한',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drvPmntVouch',name:'기사납부영수증번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntYn',name:'기사납부여부',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntAmt',name:'납부금액',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vltPlc',name:'위반장소',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltRateNm',name:'과태료명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltRatePath',name:'과태료경로',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltRateSize',name:'과태료사이즈',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntNm',name:'납부명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntPath',name:'납부경로',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pmntSize',name:'납부사이즈',dataType:'Integer',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAcnt',name:'계좌번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveFaultRateInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_retrieveFaultRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveFaultRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.transwrkrslts.SaveFaultRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_retrieveFaultRate","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";
scwin.vehclNo = "";
scwin.vehclNm = "";
scwin.type = "";
scwin.vQryStDt = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vMonth = $c.date.getServerDateTime($p, "yyyyMM");
scwin.vQryEndDt = scwin.vMonth + $c.date.getLastDateOfMonth($p, scwin.vMonth); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자

//hidden
scwin.txt_eqCd = "";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["vehclNo"])) {
    scwin.vehclNo = scwin.params["vehclNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["vehclNm"])) {
    scwin.vehclNm = scwin.params["vehclNm"];
  }
  if (!$c.util.isEmpty($p, scwin.params["type"])) {
    scwin.type = scwin.params["type"];
  }
  const codeOptions = [{
    grpCd: "OP183",
    compID: "acb_fltRateKnd,gr_retrieveFaultRate:fltRateKnd"
  } // 과태료종류
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //테스트 데이터
  //dma_search.set("vehclNo", "부산99사5050");
  //ed_con_VehclNm.setValue("5050");
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  if (scwin.type == "retrieve") {
    ed_con_VehclNo.setValue(scwin.vehclNo);
    ed_con_VehclNm.setValue(scwin.vehclNm);
    scwin.f_Retrieve();
  } else {
    ed_con_VehclNo.setValue("");
    ed_con_VehclNm.setValue("");
    ed_con_VehclNo.focus();
  }
  $c.gus.cfDisableObjects($p, [tbl_contents1, tbl_contents2, tbl_contents3, tbl_contents4]); //con_main, table1, table2, table3
  $c.gus.cfDisableBtnOnly($p, [btn_Add, btn_Update, btn_Save, btn_Delete]);
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = async function (intGubun) {
  if (ds_retrieveFaultRate.getRowCount() == 0) {
    $c.win.alert($p, "차량번호를 먼저 검색하십시요.");
  } else if (ds_retrieveFaultRate.getRowCount() > 0) {
    if (ds_retrieveFaultRate.getModifiedIndex().length == 0) {
      scwin.f_AddRow2(ds_retrieveFaultRate.getRowPosition());
    } else if (ds_retrieveFaultRate.getModifiedIndex().length != 0) {
      let ret = await $c.win.confirm($p, "변경사항이 있습니다. 저장하시겠습니까?");
      if (ret) {
        $c.sbm.execute($p, sbm_save);
        scwin.f_AddRow2(ds_retrieveFaultRate.getRowPosition());
      } else {
        ds_retrieveFaultRate.undoRow(ds_retrieveFaultRate.getRowPosition());
        scwin.f_AddRow2(ds_retrieveFaultRate.getRowPosition());
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Addrow2
// function desc : 선택된 row의 기본정보를 바탕으로 새로운 고지서를 추가한다.
//-------------------------------------------------------------------------
scwin.f_AddRow2 = function (row) {
  var newRow = ds_retrieveFaultRate.insertRow();
  ds_retrieveFaultRate.setRowPosition(newRow);
  ds_retrieveFaultRate.setCellData(newRow, "eqCd", ds_retrieveFaultRate.getCellData(row, "eqCd"));
  ds_retrieveFaultRate.setCellData(newRow, "vehclNo", ds_retrieveFaultRate.getCellData(row, "vehclNo"));
  ds_retrieveFaultRate.setCellData(newRow, "vehclShortCd", ds_retrieveFaultRate.getCellData(row, "vehclShortCd"));
  ds_retrieveFaultRate.setCellData(newRow, "assgnBran", ds_retrieveFaultRate.getCellData(row, "assgnBran"));
  ds_retrieveFaultRate.setCellData(newRow, "assgnBranNm", ds_retrieveFaultRate.getCellData(row, "assgnBranNm"));
  ds_retrieveFaultRate.setCellData(newRow, "regBran", ds_retrieveFaultRate.getCellData(row, "regBran"));
  ds_retrieveFaultRate.setCellData(newRow, "regBranNm", ds_retrieveFaultRate.getCellData(row, "regBranNm"));
  ds_retrieveFaultRate.setCellData(newRow, "clntNo", ds_retrieveFaultRate.getCellData(row, "clntNo"));
  ds_retrieveFaultRate.setCellData(newRow, "clntNm", ds_retrieveFaultRate.getCellData(row, "clntNm"));
  ds_retrieveFaultRate.setCellData(newRow, "eqModelNm", ds_retrieveFaultRate.getCellData(row, "eqModelNm"));
  ds_retrieveFaultRate.setCellData(newRow, "fixWrkPlCd", ds_retrieveFaultRate.getCellData(row, "fixWrkPlCd"));
  ds_retrieveFaultRate.setCellData(newRow, "fixWrkPlNm", ds_retrieveFaultRate.getCellData(row, "fixWrkPlNm"));
  ds_retrieveFaultRate.setCellData(newRow, "retrvYn", 1);
  ds_retrieveFaultRate.setCellData(newRow, "ntceNo", ""); //고지번호

  //debugger;
  ds_retrieveFaultRate.setCellData(newRow, "recptDt", ""); //접수일자

  ica_outbrDt.setValue("");
  ds_retrieveFaultRate.setCellData(newRow, "outbrDt", ""); //발생일자

  ds_retrieveFaultRate.setCellData(newRow, "fltRateKnd", "");
  ds_retrieveFaultRate.setCellData(newRow, "fltRateAmt", "0"); //과태료금액
  ds_retrieveFaultRate.setCellData(newRow, "jrsdGoffice", "");
  ds_retrieveFaultRate.setCellData(newRow, "retrvDt", "");
  ds_retrieveFaultRate.setCellData(newRow, "retrvSlipNo", "");
  ds_retrieveFaultRate.setCellData(newRow, "retrvAmt", "0"); //회수금액
  ds_retrieveFaultRate.setCellData(newRow, "rcptBankAcnt", "");
  ds_retrieveFaultRate.setCellData(newRow, "pmntDt", "");
  ds_retrieveFaultRate.setCellData(newRow, "acctDept", "");
  ds_retrieveFaultRate.setCellData(newRow, "acctDeptNm", "");
  ds_retrieveFaultRate.setCellData(newRow, "slipNo", "");
  ds_retrieveFaultRate.setCellData(newRow, "szDt", "");
  ds_retrieveFaultRate.setCellData(newRow, "szRecptNo", "");
  ds_retrieveFaultRate.setCellData(newRow, "szTmnDt", "");
  ds_retrieveFaultRate.setCellData(newRow, "szTmnRecptNo", "");
  ds_retrieveFaultRate.setCellData(newRow, "szRecptYn", "");
  ds_retrieveFaultRate.setCellData(newRow, "ntceFullNo", "");
  ds_retrieveFaultRate.setCellData(newRow, "bankNm", "");
  ds_retrieveFaultRate.setCellData(newRow, "rcptAcnt", "");
  ds_retrieveFaultRate.setCellData(newRow, "pmntAmt", "0"); //납부금액

  scwin.rowFlag = "ADD";
  $c.gus.cfEnableObjects($p, [tbl_contents1, tbl_contents2, tbl_contents3, tbl_contents4]);
  scwin.f_basicInfoDisable();
  $c.gus.cfDisableBtnOnly($p, [btn_Add, btn_Update]);
  ica_recptDt.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Modify = function () {
  for (var i = 0; i < ds_retrieveFaultRate.getRowCount(); i++) {
    if (ds_retrieveFaultRate.getCellData(i, "retrvYn") == "") {
      rd_retrvYn.setValue("1");
    } else {
      rd_retrvYn.setValue(ds_retrieveFaultRate.getCellData(i, "retrvYn"));
    }
  }
  scwin.rowFlag = "MODIFY";
  $c.gus.cfEnableObjects($p, [tbl_contents1, tbl_contents2, tbl_contents3, tbl_contents4]);
  $c.gus.cfDisableBtnOnly($p, [btn_Add, btn_Update]);
  scwin.f_basicInfoDisable();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    // validate 실패
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_retrieveFaultRate.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  scwin.f_initValidExp(); //초기 필수필드 설정
  scwin.f_checkValidExp(); //필수필드 변경    

  let ret = await $c.gus.cfValidate($p, [tbl_contents1]); //필수필드확인  
  if (!ret) {
    // validate 실패
    return;
  }
  if (!scwin.f_checkDate()) return; //일자 확인
  if (!scwin.f_checkAmount()) return; //금액0원 확인하기
  if (!scwin.f_checkNtceFullNo()) return; //고지번호 길이 확인하기

  ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret) {
    scwin.f_saveDetail(); //고지번호를 활용한 약식고지번호, 과태료고지서, 납부증빙 저장

    await $c.sbm.execute($p, sbm_save);
    $c.gus.cfDisableObjects($p, [tbl_contents1, tbl_contents2, tbl_contents3, tbl_contents4]);
    $c.gus.cfEnableBtnOnly($p, [btn_Add, btn_Update, btn_view1, btn_view2]);
  } else {
    ds_retrieveFaultRate.undoRow(ds_retrieveFaultRate.getRowPosition());
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 상세저장  고지번호를 활용한  약식고지번호, 과태료고지서, 납부증빙 저장
//-------------------------------------------------------------------------
scwin.f_saveDetail = function () {
  var temp1 = ed_fltRateNm.getValue();
  var temp2 = ed_pmntNm.getValue();
  if (cbx_pmntYn.checked) {
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntYn", 1);
  } else {
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntYn", 0);
  }

  //1,3,4
  if (acb_fltRateKnd.getValue() == "01" || acb_fltRateKnd.getValue() == "03" || acb_fltRateKnd.getValue() == "04") {
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "ntceNo", ed_ntceFullNo.getValue().substring(12, 18));
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm", ed_ntceFullNo.getValue().substring(12, 18)); //과태료고지서의 이름이 겹치지 않게 고지번호로 저장

    if (ica_pmntSlipDt.getValue().trim() != "")
      //전표일자가 있는 경우 납부증빙저장
      ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm", ed_ntceFullNo.getValue().substring(12, 18)); //납부증빙의 이름이 겹치지 않게 고지번호로 저장

    //2,5,6,7
  } else if (acb_fltRateKnd.getValue() == "02" || acb_fltRateKnd.getValue() == "05" || acb_fltRateKnd.getValue() == "06" || acb_fltRateKnd.getValue() == "07") {
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "ntceNo", ed_ntceFullNo.getValue().substring(23, 31));
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm", ed_ntceFullNo.getValue().substring(23, 31)); //과태료고지서의 이름이 겹치지 않게 고지번호로 저장

    if (ica_pmntSlipDt.getValue().trim() != "")
      //전표일자가 있는 경우 납부증빙저장
      ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm", ed_ntceFullNo.getValue().substring(23, 31)); //납부증빙의 이름이 겹치지 않게 고지번호로 저장

    //8,9
  } else if (acb_fltRateKnd.getValue() == "08" || acb_fltRateKnd.getValue() == "09") {
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "ntceNo", ed_ntceFullNo.getValue().substring(1, 8));
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm", ed_ntceFullNo.getValue().substring(1, 8)); //과태료고지서의 이름이 겹치지 않게 고지번호로 저장

    if (ica_pmntSlipDt.getValue().trim() != "")
      //전표일자가 있는 경우 납부증빙저장
      ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm", ed_ntceFullNo.getValue().substring(1, 8)); //납부증빙의 이름이 겹치지 않게 고지번호로 저장
  }
  ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm", temp1);
  if (ica_pmntSlipDt.getValue().trim() != "")
    //전표일자가 있는 경우 납부증빙저장
    ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm", temp2);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  scwin.rowFlag = "DELETE";
  let ret = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (ret) {
    ds_retrieveFaultRate.deleteRow(ds_retrieveFaultRate.getRowPosition());
    $c.sbm.execute($p, sbm_save);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 변경불가 기본정보 Disable
//-------------------------------------------------------------------------
scwin.f_basicInfoDisable = function () {
  $c.gus.cfDisableObjects($p, [ed_vehclCd, ed_vehclNm, ed_eqModelNm, ed_regBranCd, ed_regBranNm, ed_assgnBranCd, ed_assgnBranNm, ed_fixWrkPlCd, ed_fixWrkPlNm]);
  //차량번호 차량번호 차량구분 등록점소 등록점소 배정점소 배정점소 정비공장
  $c.gus.cfDisableObjects($p, [ed_hataiTerm, ica_retrvDt, ed_retrvAmt, ed_rcptBankAcnt, ed_retrvSlipNo, ed_fltRateNm, ed_pmntNm]);
  //위반일수 상계일자 회수금액 입금계좌 상계전표번호 과태료고지서 납부증빙
};

//-------------------------------------------------------------------------
// 변경가능 기본정보 Enable
//-------------------------------------------------------------------------
scwin.f_basicInfoEnable = function () {
  $c.gus.cfEnableObjects($p, [ed_vehclCd, ed_vehclNm, ed_eqModelNm, ed_regBranCd, ed_regBranNm, ed_assgnBranCd, ed_assgnBranNm, ed_fixWrkPlCd, ed_fixWrkPlNm]);
  //차량번호 차량이름 차량구분 등록점소 등록점소 배정점소 배정점소 정비공장
  $c.gus.cfEnableObjects($p, [ed_clntCd, ed_clntNm]);
  //발생업체
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 팝업
      udc_con_VehclNo.cfCommonPopUp(scwin.udc_con_vehclNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호조회,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 귀속부서 팝업
      udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "귀속부서조회,귀속부서코드,귀속부서명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 거래처
      udc_clntCd.cfCommonPopUp(scwin.udc_clntCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_VehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_con_VehclNo.getValue(), ed_con_VehclNm.getValue(), 'T', 'T');
};
scwin.udc_con_VehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_VehclNo, ed_con_VehclNm, 1);
};
scwin.udc_con_VehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_VehclNm, ed_con_VehclNo, 1, false);
};
scwin.udc_con_vehclNo_callBackFunc = function (ret) {
  if (ret != null) {
    ed_con_VehclNo.setValue(ret[0]);
    ed_con_VehclNm.setValue(ret[1]);
  } else if (ret == null) {
    ed_con_VehclNo.setValue("");
    ed_con_VehclNm.setValue("");
  }
};
//-------------------------------------------------------------------------
// 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 귀속부서 UDC START
//-------------------------------------------------------------------------
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDept.getValue(), ed_acctDeptNm.getValue(), 'T', 'T');
};
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDept, ed_acctDeptNm, 2);
};
scwin.udc_acctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDept, 2, false);
};
scwin.udc_acctDept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_acctDept, ed_acctDeptNm);
};
//-------------------------------------------------------------------------
// 귀속부서 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 발생업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_clntCd.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntCd, ed_clntNm, 3);
};
scwin.udc_clntCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntCd, 3, false);
};
scwin.udc_clntCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntCd, ed_clntNm);
};
//-------------------------------------------------------------------------
// 발생업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회 조건 초기화 f_FieldClear()
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_con_VehclNo.setValue("");
  ed_con_VehclNm.setValue("");
  ed_con_ntceNo.setValue("");
};

//-------------------------------------------------------------------------
// 과태료 경비전표조회  팝업
//-------------------------------------------------------------------------
scwin.f_faultRateSlipPop = async function (arg) {
  let win_url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_04_02p.xml";
  let data = {
    slipDtFrom: scwin.vQryStDt,
    slipDtTo: scwin.vQryEndDt,
    callbackFn: scwin.slipNo_callBackFunc
  };
  let opts = {
    id: "smpPop",
    popupName: "과태료 경비전표 조회 팝업",
    modal: true,
    type: "browserPopup",
    width: 800,
    height: 450,
    title: "과태료 경비전표 조회 팝업"
  };
  let result = await $c.win.openPopup($p, win_url, opts, data);
  // console.log("result[0] = " + JSON.stringify(result[0]));
  // console.log("resultresult = " ,result);
  //ds_retrieveFaultRate.setJSON(rt[0], true);

  // if (result.rowPosition > 0) {
  //     ed_slipNo.setValue(result.slipNo);
  //     ica_pmntSlipDt.setValue(result.slipDt);
  //     ed_acctDept.setValue(result.acctDeptCd);
  //     ed_acctDeptNm.setValue(result.drawAcctDeptNm);
  // } else {
  //     ed_slipNo.setValue("");
  //     ica_pmntDt.setValue("");
  //     ed_acctDept.setValue("");
  //     ed_acctDeptNm.setValue("");
  // }
};

// scwin.modal = function (filename, mesAry, width, height) {
//     var top = (screen.height - height) / 2;
//     var position = "dialogTop:" + top + "px;dialogWidth:" + width + "px; dialogHeight:" + height + "px; center:yes; resizable:no; help:no; status:no";
//     var data = window.showModalDialog(filename, mesAry, position);
//     return data;
// }

//-------------------------------------------------------------------------
// 체크박스 이벤트
//-------------------------------------------------------------------------
scwin.f_toClntChk = function () {
  if (cbx_to.getValue()) {
    $c.gus.cfEnableObj($p, ica_retrvDt, true);
    $c.gus.cfEnableObj($p, ed_retrvAmt, true);
    $c.gus.cfEnableObj($p, ed_retrvSlipNo, true);
    $c.gus.cfEnableObj($p, ed_rcptBankAcnt, true);
  } else {
    $c.gus.cfEnableObj($p, ica_retrvDt, false);
    $c.gus.cfEnableObj($p, ed_retrvAmt, false);
    $c.gus.cfEnableObj($p, ed_retrvSlipNo, false);
    $c.gus.cfEnableObj($p, ed_rcptBankAcnt, false);
  }
};

//-------------------------------------------------------------------------
// 기사납부 체크박스 이벤트
//------------------------------------------------------------------------- 
scwin.f_pmntClntChk = function () {
  if (cbx_pmntYn.getValue()) {
    $c.gus.cfEnableObj($p, ica_retrvDt, false);
    $c.gus.cfEnableObj($p, ed_retrvAmt, false);
    $c.gus.cfEnableObj($p, ed_drvPmntVouch, false);
  } else {
    $c.gus.cfEnableObj($p, ica_retrvDt, true);
    $c.gus.cfEnableObj($p, ed_retrvAmt, true);
    $c.gus.cfEnableObj($p, ed_drvPmntVouch, true);
    ed_drvPmntVouch.setValue("");
  }
};

//-------------------------------------------------------------------------
// 영수증 번호 클릭시  이벤트
//-------------------------------------------------------------------------
scwin.f_pmntClntChk2 = function () {
  if (ed_drvPmntVouch.getValue() == "영수증 번호를 입력하세요") {
    ed_drvPmntVouch.setValue("");
  }
};

//-------------------------------------------------------------------------
// 기간 확인 f_checkDate
//-------------------------------------------------------------------------
scwin.f_checkDate = function () {
  if (!$c.gus.cfIsAfterDate($p, ed_inspStDt.getValue(), ed_inspEndDt.getValue())) {
    $c.win.alert($p, "검사기간종료일을 검사기간시작일보다 이전으로 선택[입력]하여 주십시오");
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_hataiStDt.getValue(), ed_hataiEndDt.getValue())) {
    $c.win.alert($p, "해태기간종료일을 해태기간시작일보다 이전으로 선택[입력]하여 주십시오.");
    return false;
  }
  if (ica_recptDt.getValue() != "" && ica_retrvDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ica_recptDt.getValue(), ica_retrvDt.getValue(), false)) {
      $c.win.alert($p, "회수일자를 접수일자 이전으로 선택[입력]하여 주십시오.");
      ica_retrvDt.setValue("");
      return false;
    }
  }
  if (ica_retrvDt.getValue() != "" && ica_pmntDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ica_pmntDt.getValue(), ica_retrvDt.getValue(), false)) {
      $c.win.alert($p, "납부일자를 회수일자 이전으로 선택[입력]하여 주십시오.");
      ica_pmntDt.setValue("");
      return false;
    }
  }
  if (ica_szDt.getValue() != "" && ica_recptDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ica_szDt.text, ica_recptDt.text, false)) {
      $c.win.alert($p, "압류일자를 접수일자 이전으로 선택[입력]하여 주십시오.");
      ica_szTmnDt.setValue("");
      return false;
    }
  }
  if (ica_szTmnDt.getValue() != "" && ica_szDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ica_szTmnDt.text, ica_szDt.text, false)) {
      $c.win.alert($p, "압류해지일자를 압류일자 이전으로 선택[입력]하여 주십시오.");
      ica_szTmnDt.setValue("");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 금액체크하기 f_checkAmount()
//-------------------------------------------------------------------------
scwin.f_checkAmount = function () {
  if (ed_fltRateAmt.getValue() == '0') {
    $c.win.alert($p, "과태료금액은 0원일 수 없습니다.");
    return false;
  }
  if (ed_pmntAmt.getMandatory() == true && ed_pmntAmt.getValue() == '0') {
    $c.win.alert($p, "납부금액은 0원일 수 없습니다.");
    return false;
  }
  return true;
};
scwin.f_checkNtceFullNo = function () {
  if (acb_fltRateKnd.getValue() == "01" || acb_fltRateKnd.getValue() == "03" || acb_fltRateKnd.getValue() == "04") {
    var length = ed_ntceFullNo.getValue().length;
    if (length != 19) {
      $c.win.alert($p, "고지번호를 정확히 입력해 주세요.");
      return false;
    }
  } else if (acb_fltRateKnd.getValue() == "02" || acb_fltRateKnd.getValue() == "05" || acb_fltRateKnd.getValue() == "06" || acb_fltRateKnd.getValue() == "07") {
    var length = ed_ntceFullNo.getValue().length;
    if (length != 32) {
      $c.win.alert($p, "고지번호를 정확히 입력해 주세요.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 첨부파일 업로드 팝업 호출(과태료고지서, 납부증빙)
//-------------------------------------------------------------------------
scwin.f_uploadFile = async function (gubun) {
  let win_url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_04_01p.xml";
  let opts = {
    id: "smpPop",
    popupName: "과태료파일등록",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 350,
    title: "과태료파일등록"
  };
  let sFilePath = "";
  let sFleName = "";
  let sFleSize = "";
  if (gubun == 1) {
    //과태료고지서
    sFilePath = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "fltRatePath"), sFileName = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm"), sFileSize = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateSize");
  } else if (gubun == 2) {
    //납부증빙
    sFilePath = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "pmntPath");
    sFileName = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm");
    sFileSize = ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "pmntSize");
  }
  let paramObj = {
    filePath: sFilePath,
    fileName: sFileName,
    fileSize: sFileSize
  };
  let resultList = await $c.win.openPopup($p, win_url, opts, paramObj);
  if (resultList != null) {
    if (!$c.util.isEmpty($p, resultList[0])) {
      if (gubun == 1) {
        //과태료고지서
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRatePath", resultList[0]);
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateNm", resultList[1]);
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "fltRateSize", resultList[2]);
        ed_fltRateNm.setValue(resultList[1]);
      } else if (gubun == 2) {
        //납부증빙
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntPath", resultList[0]);
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntNm", resultList[1]);
        ds_retrieveFaultRate.setCellData(ds_retrieveFaultRate.getRowPosition(), "pmntSize", resultList[2]);
        ed_pmntNm.setValue(resultList[1]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 첨부파일 다운로드(과태료고지서, 납부증빙)
//-------------------------------------------------------------------------
scwin.f_ViewIMG = function (gubun) {
  var row = ds_retrieveFaultRate.getRowPosition();
  var filename, filepath;
  if (gubun == 1) {
    //과태료고지서
    filename = ds_retrieveFaultRate.getCellData(row, "fltRateNm");
    filepath = ds_retrieveFaultRate.getCellData(row, "fltRatePath");
  } else if (gubun == 2) {
    //납부증빙
    filename = ds_retrieveFaultRate.getCellData(row, "pmntNm");
    filepath = ds_retrieveFaultRate.getCellData(row, "pmntPath");
  }
  if (filepath.trim() == "") {
    $c.win.alert($p, "파일이 등록되어 있지 않습니다.");
  } else {
    if (filepath.indexOf(".") > 0) {
      filename += filepath.substring(filepath.indexOf("."), filepath.indexOf(".") + 4);
      $c.gus.cfDownloadFile($p, filename, filepath);
    }
  }
};

//-------------------------------------------------------------------------
// 초기필수값설정 f_initValidExp
//------------------------------------------------------------------------- 
scwin.f_initValidExp = function () {
  //발생 초기화    
  udc_inspDt.setMandatoryFrom(false);
  udc_inspDt.setMandatoryTo(false);
  //ed_inspStDt.setMandatory(false); 
  //ed_inspEndDt.setMandatory(false); 

  udc_hataiDt.setMandatoryFrom(false);
  udc_hataiDt.setMandatoryTo(false);
  //ed_hataiStDt.setMandatory(false); 
  //ed_hataiEndDt.setMandatory(false); 
  ed_vltPlc.setMandatory(false);

  //납부 초기화
  ica_pmntSlipDt.setMandatory(false);
  ica_pmntDt.setMandatory(false);
  ed_pmntAmt.setMandatory(false);
  ed_pmntNm.setMandatory(false);
};

//-------------------------------------------------------------------------
// 변경필수값설정 f_checkValidExp
//------------------------------------------------------------------------- 
scwin.f_checkValidExp = function () {
  //과태료종류에 따른 필수 값 변경

  //01속도위반 02주차위반 03신호위반 04검문불응
  // 선택별 필수필드 추가하기 1. 위반장소
  if (acb_fltRateKnd.getValue() == '01' || acb_fltRateKnd.getValue() == '02' || acb_fltRateKnd.getValue() == '03' || acb_fltRateKnd.getValue() == '04') {
    ed_vltPlc.setMandatory(true);
    $c.gus.cfEnableObjects($p, ed_vltPlc);
  } else {
    ed_vltPlc.setMandatory(false);
    $c.gus.cfDisableObjects($p, ed_vltPlc);
  }

  //05정기검사지연 06정기검검지연 07종합검사지연
  // 선택별 필수필드 추가하기 2.검사기간, 해태기간
  if (acb_fltRateKnd.getValue() == '05' || acb_fltRateKnd.getValue() == '06' || acb_fltRateKnd.getValue() == '07') {
    udc_inspDt.setMandatoryFrom(true);
    udc_inspDt.setMandatoryTo(true);
    udc_hataiDt.setMandatoryFrom(true);
    udc_hataiDt.setMandatoryTo(true);
  } else {
    udc_inspDt.setMandatoryFrom(false);
    udc_inspDt.setMandatoryTo(false);
    udc_hataiDt.setMandatoryFrom(false);
    udc_hataiDt.setMandatoryTo(false);
  }

  //납부데이터에 따른 필수 값 변경

  // 1 전표일자 ica_pmntSlipDt
  if (ica_pmntSlipDt.getValue().trim() != "") {
    ed_pmntAmt.setMandatory(true);
    ed_pmntNm.setMandatory(true);
  }
  // 2 납부일자 ica_pmntDt
  if (ica_pmntDt.getValue().trim() != "") {
    ed_pmntAmt.setMandatory(true);
    ed_pmntNm.setMandatory(true);
  }
  // 3 납부금액 ed_pmntAmt
  if (ed_pmntAmt.getValue().trim() != "" && ed_pmntAmt.getValue().trim() != "0") {
    ed_pmntNm.setMandatory(true);
  }
  // 4 납부증빙 txt_pmntNm
  if (ed_pmntNm.getValue().trim() != "") {
    ed_pmntAmt.setMandatory(true);
    ed_pmntNm.setMandatory(true);
  }
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 과태료종류 콤보박스 값변경 이벤트
//------------------------------------------------------------------------- 
scwin.acb_fltRateKnd_onviewchange = function (info) {
  if (acb_fltRateKnd.getValue() == "01" || acb_fltRateKnd.getValue() == "03" || acb_fltRateKnd.getValue() == "04") {
    //0137-1205-7-019-084263-2
    //ed_ntceFullNo.setDisplayFormat("####-####-#-###-######-#");
    //ed_ntceFullNo.setMaxLength(19);

    ed_ntceFullNo.setEditFormat("####-####-#-###-######-#");
    gr_retrieveFaultRate.setCellDisplayFormat(ds_retrieveFaultRate.getRowPosition(), "ntceFullNo", "####-####-#-###-######-#");
  } else if (acb_fltRateKnd.getValue() == "02" || acb_fltRateKnd.getValue() == "05" || acb_fltRateKnd.getValue() == "06" || acb_fltRateKnd.getValue() == "07") {
    //33100930000-2015-41-288131-00329200-3
    //ed_ntceFullNo.setDisplayFormat("###########-####-##-######-########-#");
    //ed_ntceFullNo.setMaxLength(32);

    ed_ntceFullNo.setEditFormat("###########-####-##-######-########-#");
    gr_retrieveFaultRate.setCellDisplayFormat(ds_retrieveFaultRate.getRowPosition(), "ntceFullNo", "###########-####-##-######-########-#");
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_retrieveFaultRate.getRowCount()));
  if (ds_retrieveFaultRate.getRowCount() > 0) {
    ed_ntceFullNo.setEditFormat("###########-####-##-######-########-#"); // 포맷길이가 작으면 데이터도 잘림
    gr_retrieveFaultRate.setFocusedCell(0, 0, false); //edit : true

    for (var i = 0; i < ds_retrieveFaultRate.getRowCount(); i++) {
      // 01속도위반 03시호위반 04검문불응
      // 02주차위반 05정기검사지연 06정기검검지연 07종합검사지연
      if (ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "01" || ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "03" || ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "04") {
        gr_retrieveFaultRate.setCellDisplayFormat(i, "ntceFullNo", "####-####-#-###-######-#");
      } else if (ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "02" || ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "05" || ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "06" || ds_retrieveFaultRate.getCellData(i, "fltRateKnd") == "07") {
        gr_retrieveFaultRate.setCellDisplayFormat(i, "ntceFullNo", "###########-####-##-######-########-#");
      }
    }
    scwin.acb_fltRateKnd_onviewchange();
  }
  $c.gus.cfDisableObjects($p, [tbl_contents1, tbl_contents2, tbl_contents3, tbl_contents4]); //con_main, table1, table2, table3    

  if (scwin.type == "retrieve") {
    //최초 파라미터 조회시만 실행안되게 한다.(페이지로드에서 이미 disable 시킴)
    scwin.type = "";
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Add, btn_Update, btn_Save, btn_Delete, btn_view1, btn_view2]);
  }
};
scwin.sbm_save_submitdone = function (e) {
  scwin.rowFlag = ""; // 초기화
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.gr_retrieveFaultRate_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.rowFlag == "MODIFY") {
    if (ds_retrieveFaultRate.getCellData(ds_retrieveFaultRate.getRowPosition(), "retrvYn") == "") {
      rd_retrvYn.setValue("1");
    } else {
      rd_retrvYn.setValue(ds_retrieveFaultRate.getCellData(rowIndex, "retrvYn"));
    }
  }
};
scwin.btn_attach1_onclick = function (e) {
  scwin.f_uploadFile(1);
};
scwin.btn_attach2_onclick = function (e) {
  scwin.f_uploadFile(2);
};
scwin.btn_view1_onclick = function (e) {
  scwin.f_ViewIMG(1);
};
scwin.btn_view2_onclick = function (e) {
  scwin.f_ViewIMG(2);
};
scwin.outbrDtExp = function (data) {
  return $c.gus.decode($p, data, "0", "N", "1", "Y", "");
};
scwin.slipNo_callBackFunc = function (ret) {
  console.log("retretret = ", ret);
  if (ret != null) {
    if (ret[0] == "N/A") return;
    ed_slipNo.setValue(ret.slipNo);
    ica_pmntSlipDt.setValue(ret.slipDt);
    ed_acctDept.setValue(ret.acctDeptCd);
    ed_acctDeptNm.setValue(ret.drawAcctDeptNm);
  } else {
    ed_slipNo.setValue("");
    ica_pmntDt.setValue("");
    ed_acctDept.setValue("");
    ed_acctDeptNm.setValue("");
  }
};
scwin.img_PopUp_onclick = function (e) {
  /* var data = {
        callbackFn : scwin.slipNo_callBackFunc
  };
  var opts = {
        id     : "pupup"
      , popupName : "과태표 경비전표 조회 팝업"
      , modal  : true
      , type   : "browserPopup"  //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      , title  : "과태표 경비전표 조회 팝업"
      , width  : 800
      , height : 450
  };
  $c.win.openPopup("/AI/op_304_04_02p.xml", opts, data); */
  scwin.f_faultRateSlipPop();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_VehclNo',btnId:'btn_con_VehclNo',nameId:'ed_con_VehclNm',refDataCollection:'dma_search',name:'vehclNo',validTitle:'차량번호',mandatoryName:'true',validExpName:'차량번호:yes',validExpCode:'차량번호:yes',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'Data',id:'udc_con_VehclNo',selectID:'retrieveKndVehclListInfo','ev:onclickEvent':'scwin.udc_con_VehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_VehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_VehclNo_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고지번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_con_ntceNo',style:'width: 150px;',maxlength:'8',allowChar:'0-9',editType:'focus',ref:'data:dataMap1.ntceNo',objType:'Data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 550px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'과태료',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"과태료List.xlsx","sheetName":"과태료List","type":"2+4+8+16"}',gridUpYn:'N',gridID:'gr_retrieveFaultRate'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_retrieveFaultRate',style:'',autoFit:'allColumn',id:'gr_retrieveFaultRate',class:'wq_gvw',visibleRowNum:'22',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_retrieveFaultRate_oncellclick',readOnly:'true',setCellInputTypeCustom:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'종류',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'발생일',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'고지번호',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'회수<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'압류<br/>여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'fltRateKnd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outbrDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'200',inputType:'custom',id:'ntceFullNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'gridRetrvYn',displayMode:'label',displayFormatter:'scwin.outbrDtExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'szRecptYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'발생 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_contents1',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclCd',placeholder:'',style:'width:85px;',maxlength:'7',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',readOnly:'true',editType:'focus',ref:'data:ds_retrieveFaultRate.vehclShortCd',objType:'Data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNm',placeholder:'',style:'width:150px;',ref:'data:ds_retrieveFaultRate.vehclNo',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_eqModelNm',style:'width: 238px;',maxlength:'20',objType:'Data',editType:'focus',ref:'data:ds_retrieveFaultRate.eqModelNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등록점소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_regBranCd',placeholder:'',style:'width:85px;',maxlength:'6',readOnly:'true','ev:onkeyup':'scwin.onkeyup',editType:'focus',ref:'data:ds_retrieveFaultRate.regBran',objType:'Data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_regBranNm',placeholder:'',style:'width:150px;',objType:'Data',ref:'data:ds_retrieveFaultRate.regBranNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'배정점소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_assgnBranCd',placeholder:'',style:'width: 85px;',readOnly:'true','ev:onkeyup':'scwin.onkeyup',editType:'focus',maxlength:'6',ref:'data:ds_retrieveFaultRate.assgnBran',objType:'Data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_assgnBranNm',placeholder:'',style:'width: 150px;',objType:'Data',ref:'data:ds_retrieveFaultRate.assgnBranNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정비공장',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col7',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fixWrkPlCd',placeholder:'',style:'width:85px;',maxlength:'6','ev:onkeyup':'scwin.onkeyup',readOnly:'true',editType:'focus',ref:'data:ds_retrieveFaultRate.fixWrkPlCd',objType:'Data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_fixWrkPlNm',placeholder:'',style:'width:150px;',ref:'data:ds_retrieveFaultRate.fixWrkPlNm',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'발생업체',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntInfoPopup',style:'width: 238px;',class:'',codeId:'ed_clntCd',nameId:'ed_clntNm',id:'udc_clntCd',code:'clntNo',name:'clntNm',refDataCollection:'ds_retrieveFaultRate',maxlengthCode:'6',objTypeCode:'Data',objTypeName:'Data','ev:onclickEvent':'scwin.udc_clntCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntCd_onviewchangeNameEvent',btnId:'btn_clntCd',selectID:'retrieveClntInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'접수일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_recptDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.recptDt',mandatory:'true',title:'접수일자',editPlaceholderChar:'_',useEditFormat:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'발생일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_outbrDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.outbrDt',mandatory:'false',title:'발생일자',useEditFormat:'true',editPlaceholderChar:'_'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'과태료종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fltRateKnd',search:'contain',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:ds_retrieveFaultRate.fltRateKnd',searchTarget:'both',mandatory:'true',title:'과태료종류','ev:onviewchange':'scwin.acb_fltRateKnd_onviewchange'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'고지번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ntceFullNo',style:'width: 230px;',editType:'focus',ref:'data:ds_retrieveFaultRate.ntceFullNo',objType:'Data',title:'고지번호',editFormat:'####-####-#-###-######-#',editPlaceholderChar:'_',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'과태료금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fltRateAmt',style:'width: 150px;',maxlength:'13',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.fltRateAmt',displayFormat:'###,###,###',objType:'Data',mandatory:'true',title:'과태료금액',dataType:'text'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관할관청',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_jrsdGoffice',style:'width: 150px;',editType:'focus',maxlength:'20',ref:'data:ds_retrieveFaultRate.jrsdGoffice',mandatory:'true',objType:'Data',title:'관할관청'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'검사기간',class:'req blue'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_inspDt',refDataMap:'ds_retrieveFaultRate',refEdDt:'inspEndDt',refStDt:'inspStDt',style:'',edFromId:'ed_inspStDt',edToId:'ed_inspEndDt',mandatoryFrom:'false',mandatoryTo:'false',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'납부기한',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_pmntPrd',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.pmntPrd',mandatory:'true',title:'납부기한'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'해태기간',class:'req blue'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_hataiDt',refDataMap:'ds_retrieveFaultRate',refEdDt:'hataiEndDt',refStDt:'hataiStDt',style:'',edFromId:'ed_hataiStDt',edToId:'ed_hataiEndDt',mandatoryFrom:'false',mandatoryTo:'false',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'위반일수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_hataiTerm',placeholder:'',class:'',maxlength:'13',editType:'focus',ref:'data:ds_retrieveFaultRate.hataiTerm',allowChar:'0-9',objType:'Data'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'위반장소',class:'req blue'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vltPlc',style:'width: 150px;',maxlength:'50',editType:'focus',ref:'data:ds_retrieveFaultRate.vltPlc',objType:'Data',title:'위반장소'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'과태료고지서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_fltRateNm',class:' ',ref:'data:ds_retrieveFaultRate.fltRateNm',mandatory:'true',title:'과태료고지서',objType:'Data'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_attach1',type:'button',class:'btn file-up','ev:onclick':'scwin.btn_attach1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 업로드'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_view1',type:'button',class:'btn file-down','ev:onclick':'scwin.btn_view1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 다운로드'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_rmk',style:'',maxlength:'50',objType:'Data',editType:'focus',ref:'data:ds_retrieveFaultRate.rmk'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회수가능여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_retrvYn',ref:'data:ds_retrieveFaultRate.retrvYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회수가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회수불가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'은행명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bankNm',style:'width: 150px;',editType:'focus',ref:'data:ds_retrieveFaultRate.bankNm',objType:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계좌번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rcptAcnt',style:'width: 230px;',editType:'focus',ref:'data:ds_retrieveFaultRate.rcptAcnt',objType:'Data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'납부',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_contents2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_pmntSlipDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.pmntSlipDt',title:'전표일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'retrieveAcctDeptCdInfoPopup',style:'width: 230px;',id:'udc_acctDept',codeId:'ed_acctDept',nameId:'ed_acctDeptNm',maxlengthCode:'8',code:'acctDept',name:'acctDeptNm',refDataCollection:'ds_retrieveFaultRate',objTypeCode:'Data',objTypeName:'Data','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDept_onviewchangeNameEvent',selectID:'retrieveAcctDeptCdInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width: 100px;',allowChar:'0-9',editType:'focus',ref:'data:ds_retrieveFaultRate.slipNo',objType:'Data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp',style:'',type:'button','ev:onclick':'scwin.img_PopUp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req blue',id:'',label:'납부일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_pmntDt',class:'',calendarValueType:'yearMonthDate',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.pmntDt'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_pmntYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'','ev:onchange':'scwin.f_pmntClntChk'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기사납부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req blue',id:'',label:'납부금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pmntAmt',style:'width: 150px;',maxlength:'13',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.pmntAmt',displayFormat:'#,###',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영수증번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_drvPmntVouch',style:'width: 230px;',maxlength:'50','ev:onclick':'scwin.f_pmntClntChk2',editType:'focus',ref:'data:ds_retrieveFaultRate.drvPmntVouch',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req blue',id:'',label:'납부증빙',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_pmntNm',style:'',ref:'data:ds_retrieveFaultRate.pmntNm',objType:'Data'}},{T:1,N:'xf:trigger',A:{class:'btn file-up',id:'btn_attach2',style:'',type:'button','ev:onclick':'scwin.btn_attach2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 업로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn file-down',id:'btn_view2',style:'',type:'button','ev:onclick':'scwin.btn_view2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'회수',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_contents3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_retrvDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.retrvDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회수금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_retrvAmt',style:'width:150px;',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.retrvAmt',displayFormat:'#,###',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_retrvSlipNo',style:'width:150px;',editType:'focus',allowChar:'0-9',maxlength:'10',ref:'data:ds_retrieveFaultRate.retrvSlipNo',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입금계좌',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_rcptBankAcnt',class:'',editType:'focus',maxlength:'17',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.rcptBankAcnt',objType:'Data'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_to',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'','ev:onchange':'scwin.f_toClntChk'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'압류 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_contents4',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'압류등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_szDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.szDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'압류접수번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_szRecptNo',style:'width:150px;',editType:'focus',maxlength:'8',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.szRecptNo',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_szTmnDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_retrieveFaultRate.szTmnDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지접수번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_szTmnRecptNo',style:'width:150px;',editType:'focus',maxlength:'8',allowChar:'0-9',ref:'data:ds_retrieveFaultRate.szTmnRecptNo',objType:'Data'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Add',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_AddRow'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Modify'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})