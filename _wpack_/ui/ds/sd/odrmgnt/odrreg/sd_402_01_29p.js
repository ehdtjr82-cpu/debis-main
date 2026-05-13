/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml 40063 20172305d4495630aa6cbc9b0c2268bffbee6ee85f63e0571abc0231d662a4f0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsYn',name:'TS여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrYn',name:'오더;존재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정;구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정;구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO;/BT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btProcYn',name:'BT;처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioProcYn',name:'FIO;처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선;관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'하선장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'Line;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'하선장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transPrd',name:'보세운송만료일자(운송기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsYn',name:'T/S;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입;/수출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'입항시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBillOfLadingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_blInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_blInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  gr_blInfo.setColumnDisableEdit("odrYn", false);
  const args = $p.getAllParameter().paramData.data;
  scwin.blNo = $c.gus.cfIsNull($p, args[0]) ? "" : args[0].trim();
  scwin.cvsslMgntNo = $c.gus.cfIsNull($p, args[1]) ? "" : args[1].trim();
  scwin.assgnClsCd = $c.gus.cfIsNull($p, args[2]) ? "" : args[2].trim();
  scwin.impExpClsCd = $c.gus.cfIsNull($p, args[3]) ? "" : args[3].trim();
  scwin.bulkYn = $c.gus.cfIsNull($p, args[4]) ? 0 : args[4];
  scwin.lineCd = $c.gus.cfIsNull($p, args[5]) ? "" : args[5].trim();
  scwin.tsYn = $c.gus.cfIsNull($p, args[6]) ? 0 : args[6];
  scwin.mulitSelYn = $c.gus.cfIsNull($p, args[7]) ? "F" : args[7].trim();
  scwin.fullEmptyClsCd = $c.gus.cfIsNull($p, args[8]) ? "E" : args[8].trim();
  scwin.fioBtClsCd = $c.gus.cfIsNull($p, args[9]) ? "" : args[9].trim();
  scwin.grFormat = "";

  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD104",
    compID: "gr_blInfo:assgnClsCd"
  }, {
    grpCd: "SD144",
    compID: "lc_assgnClsCd,gr_blInfo:mcomAssgnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);
};
scwin.callBackSetCommonCode = function () {
  lc_assgnClsCd.addItem("", "전체", 0);
  lc_assgnClsCd.setSelectedIndex(0);
  if (scwin.bulkYn == 0) {
    th_cntrNo.show("");
    td_cntrNo.show("");
    gr_blInfo.setColumnVisible("cnsgnNmCmpy", true);
    gr_blInfo.setColumnVisible("commNm", true);
    gr_blInfo.setColumnVisible("mcomDsmbrkPlcNm", true);
    gr_blInfo.setColumnVisible("mcomLineCd", true);
    gr_blInfo.setColumnVisible("tsYn", true);
    gr_blInfo.setColumnVisible("blTypCd", true);
    gr_blInfo.setColumnVisible("lclYn", true);

    //품명, 본선관리번호 자리 변경
    gr_blInfo.setColumnOrder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
  } else if (scwin.bulkYn == 1) {
    th_cntrNo.hide();
    td_cntrNo.hide();
    gr_blInfo.setColumnVisible("assgnWhouseNm", true);
    gr_blInfo.setColumnVisible("ntcPlNmCmpy", true);
    gr_blInfo.setColumnVisible("cnsgnNmCmpy", true);
    gr_blInfo.setColumnVisible("fioBtClsCd", true);
    gr_blInfo.setColumnVisible("btProcYn", true);
    gr_blInfo.setColumnVisible("fioProcYn", true);
    gr_blInfo.setColumnVisible("commNm", true);
    gr_blInfo.setColumnVisible("mcomDsmbrkPlcNm", true);
    gr_blInfo.setColumnVisible("fioBtClsCd", true);
    gr_blInfo.setColumnVisible("mcomLineCd", true);
    gr_blInfo.setColumnVisible("tsYn", true);
    gr_blInfo.setColumnVisible("impExpClsCd", true);
  }
  if (scwin.mulitSelYn == "T") {
    // 다중선택 모드인 경우
    gr_blInfo.setDataDragSelect(true);
    gr_blInfo.setUseShiftKey(true);
    btn_select.show("");
  } else {
    // 단일선택 모드인 경우
    gr_blInfo.setDataDragSelect(false);
    btn_select.hide();
  }
  if (scwin.tsYn == DsConstants.YN_YES) {
    chb_tsYn.setValue("1"); // TS 여부
  }
  if (scwin.blNo != "" || scwin.cvsslMgntNo != "") {
    ed_blNo.setValue(scwin.blNo);
    ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
    lc_assgnClsCd.setValue(scwin.assgnClsCd);
    ed_lineCd.setValue(scwin.lineCd);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_cntrNo, ed_blNo, ed_mrn, ed_cvsslMgntNo]);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let cntrNo = ed_cntrNo.getValue().trim();
  let blNo = ed_blNo.getValue().trim();
  let mrn = ed_mrn.getValue().trim();
  let cvsslMgntNo = ed_cvsslMgntNo.getValue().trim();

  //검색조건을 하나라도 입력해야만 조회 가능
  if (scwin.bulkYn == 0) {
    //컨테이너인 경우
    if (cntrNo == "" && blNo == "" && mrn == "" && cvsslMgntNo == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["검색조건 중 하나"]); //@을(를) 입력하십시오
      return;
    }
  } else if (scwin.bulkYn == 1) {
    //벌크인 경우
    if (blNo == "" && mrn == "" && cvsslMgntNo == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["검색조건 중 하나"]); //@을(를) 입력하십시오
      return;
    }
  }

  /*let chk = await $c.gus.cfValidate([tbl_cndArea]);
  if(chk){	
      필수 입력값 없는데 적용됨    
  }*/
  dma_search.set("bulkYn", scwin.bulkYn);
  $c.sbm.execute($p, sbm_retrieve);
};

//공통팝업 열기
scwin.f_openCommonPopUp = async function (gubun) {
  var rtnList = new Array();
  if (gubun == 1) {
    //본선관리번호 조회 
    var arrParam = new Array(2);
    arrParam[0] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
    arrParam[1] = scwin.impExpClsCd; //수출입구분코드

    let opts = {
      id: "op_204_01_07p",
      popupName: "본선관리번호검색팝업",
      modal: true,
      type: "browserPopup",
      title: "본선관리번호검색팝업",
      width: 1100,
      height: 650
    };
    let rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, arrParam);

    //본선관리번호 리턴값에서 필요한 값 세팅
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        ed_cvsslMgntNo.setValue(rtnList[0]);
        //ed_cvsslMgntNo.hidVal	= rtnList[0];
      }
    } else {
      ed_cvsslMgntNo.setValue("");
      //ed_cvsslMgntNo.hidVal	= "";
    }
  }
};

// Windows Close
scwin.f_WinClose = function () {
  var arrRtnVal = new Array();
  if (scwin.mulitSelYn == "F") {
    arrRtnVal[0] = "N/A";
  } else {
    var arrRtnValList = new Array();
    arrRtnValList[0] = "N/A";
    arrRtnVal[0] = arrRtnValList;
  }
  $c.win.closePopup($p, arrRtnVal);
};

// 다중 B/L 선택
scwin.f_RtnValueMultiRow = async function () {
  var arrRtnVal = new Array();
  var j = 0;
  if (ds_blInfo.getTotalRow() > 0 && scwin.mulitSelYn == "T") {
    let chkVal = await scwin.f_ChkRtnList();
    if (chkVal) {
      let chkJson = gr_blInfo.getCheckedJSON("odrYn");
      for (var i = 0; i < chkJson.length; i++) {
        var arrRtnValList = new Array();
        arrRtnValList[0] = chkJson[i].mrn; //mrn
        arrRtnValList[1] = chkJson[i].msn; //msn
        arrRtnValList[2] = chkJson[i].hsn; //hsn
        arrRtnValList[3] = chkJson[i].hblNo; //bl번호
        arrRtnValList[4] = chkJson[i].mcomLineCd; //당사Line코드
        arrRtnValList[5] = chkJson[i].mcomAssgnClsCd; //당사배정구분코드
        arrRtnValList[6] = chkJson[i].cvsslMgntNo; //본선관리번호
        arrRtnValList[7] = chkJson[i].shpCoPortcnt; //선사항차	
        arrRtnValList[8] = chkJson[i].vsslCd; //선박코드
        arrRtnValList[9] = chkJson[i].vsslNm; //선박명
        arrRtnValList[10] = chkJson[i].portCd; //항구코드
        arrRtnValList[11] = chkJson[i].transPrd; //보세운송만료일자(운송기한)
        arrRtnValList[12] = chkJson[i].mcomDsmbrkPlcCd; //하선장소코드
        arrRtnValList[13] = chkJson[i].mcomDsmbrkPlcNm; //하선장소명
        arrRtnValList[14] = chkJson[i].arvDt; //입항일자
        arrRtnValList[15] = chkJson[i].arvHh; //입항시간
        arrRtnValList[16] = chkJson[i].pierCd; //부두코드
        arrRtnValList[17] = chkJson[i].pierNm; //부두코드명
        arrRtnValList[18] = chkJson[i].assgnWhouseCd; //배정코드
        arrRtnValList[19] = chkJson[i].assgnWhouseNm; //배정코드명

        arrRtnVal[j++] = arrRtnValList;
      }
      $c.win.closePopup($p, arrRtnVal);
    }
  }
};

//리턴값 넘기기
scwin.f_RtnValue = function (row) {
  if (row >= 0) {
    if (scwin.bulkYn == 1) {
      // 벌크인 경우
      // FIO / BT 여부를 확인하여 설정되지 않은 B/L은 선택하지 못함.
      if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioBtClsCd"))) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        $c.gus.f_cfAlertMsg($p, "FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }

      // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      if (!$c.gus.cfIsNull($p, scwin.fioBtClsCd)) {
        if (scwin.fioBtClsCd == DsConstants.FIO) {
          // FIO/BT 처리구분이 FIO 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioProcYn"))) {
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "fioProcYn") == DsConstants.YN_NO) {
            //FIO 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == DsConstants.BT) {
          // FIO/BT 처리구분이 BT 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "btProcYn"))) {
            $c.gus.f_cfAlertMsg($p, "BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "btProcYn") == DsConstants.YN_NO) {
            //BT 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == DsConstants.FB) {
          // FIO/BT 처리구분이 FB 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioProcYn")) && cfIsNull(ds_blInfo.getCellData(row, "btProcYn"))) {
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "fioProcYn") == DsConstants.YN_NO && ds_blInfo.getCellData(row, "btProcYn") == DsConstants.YN_NO) {
            // FIO 처리여부/BT 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        }
      }

      // 선택된 목록의 수입수출구분코드가 다른경우 오류
      if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "impExpClsCd"))) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        $c.gus.f_cfAlertMsg($p, "수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }
    } else if (scwin.bulkYn == 0) {
      // 컨테이너인 경우
      // LCL 여부가 1인 경우 HSN 이 0이 아닌 BL은 선택할수 없음.
      if (ds_blInfo.getCellData(row, "lclYn") == 1 && ds_blInfo.getCellData(row, "hsn") != 0) {
        $c.gus.f_cfAlertMsg($p, "LCL 여부가 1인 경우 HSN이 0이 아닌 BL은 선택할 수 없습니다.");
        return false;
      }
    }
    if (scwin.fullEmptyClsCd == "F") {
      // 컨테이너가 Full 인 경우만 선택 가능
      if (ds_blInfo.getCellData(row, "blTypCd") == "E") {
        // BL_TYPE_CD 가 E인경우 선택 하지 못함. 
        $c.gus.f_cfAlertMsg($p, "EMPTY 인 B/L은 선택할 수 없습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }
    }
    var arrRtnVal = new Array();
    arrRtnVal[0] = ds_blInfo.getCellData(row, "mrn"); //mrn
    arrRtnVal[3] = ds_blInfo.getCellData(row, "hblNo"); //bl번호
    arrRtnVal[4] = ds_blInfo.getCellData(row, "mcomLineCd"); //당사Line코드
    arrRtnVal[5] = ds_blInfo.getCellData(row, "mcomAssgnClsCd"); //당사배정구분코드  
    arrRtnVal[1] = ds_blInfo.getCellData(row, "msn"); //msn
    arrRtnVal[6] = ds_blInfo.getCellData(row, "cvsslMgntNo"); //본선관리번호
    arrRtnVal[7] = ds_blInfo.getCellData(row, "shpCoPortcnt"); //선사항차	
    arrRtnVal[2] = ds_blInfo.getCellData(row, "hsn"); //hsn
    arrRtnVal[8] = ds_blInfo.getCellData(row, "vsslCd"); //선박코드
    arrRtnVal[9] = ds_blInfo.getCellData(row, "vsslNm"); //선박명
    arrRtnVal[10] = ds_blInfo.getCellData(row, "portCd"); //항구코드
    arrRtnVal[11] = ds_blInfo.getCellData(row, "transPrd"); //보세운송만료일자(운송기한)
    arrRtnVal[12] = ds_blInfo.getCellData(row, "mcomDsmbrkPlcCd"); //하선장소코드
    arrRtnVal[13] = ds_blInfo.getCellData(row, "mcomDsmbrkPlcNm"); //하선장소명
    arrRtnVal[14] = ds_blInfo.getCellData(row, "arvDt"); //입항일자
    arrRtnVal[15] = ds_blInfo.getCellData(row, "arvHh"); //입항시간
    arrRtnVal[16] = ds_blInfo.getCellData(row, "pierCd"); //부두코드
    arrRtnVal[17] = ds_blInfo.getCellData(row, "pierNm"); //부두코드명
    arrRtnVal[18] = ds_blInfo.getCellData(row, "assgnWhouseCd"); //배정코드
    arrRtnVal[19] = ds_blInfo.getCellData(row, "assgnWhouseNm"); //배정코드명

    $c.win.closePopup($p, arrRtnVal);
  }
};

// 선택된 B/L 유효성 확인
scwin.f_ChkRtnList = async function () {
  if (scwin.bulkYn == 1) {
    // 벌크인 경우
    let v_cvsslMgntNo = ""; // 본선관리번호
    let v_lineCd = ""; // LINE CD
    let chkJson = gr_blInfo.getCheckedJSON("odrYn");

    // 선택된 목록의 본선관리번호가 다른경우 오류
    for (var i = 0; i < chkJson.getTotalRow(); i++) {
      if ($c.gus.cfIsNull($p, v_cvsslMgntNo)) {
        v_cvsslMgntNo = chkJson[i].cvsslMgntNo;
      } else {
        if (v_cvsslMgntNo != chkJson[i].cvsslMgntNo) {
          $c.gus.f_cfAlertMsg($p, "본선관리번호가 22서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.");
          return false;
        }
      }
    }

    // 선택된 목록의 LINE 코드가 다른 경우 오류
    for (var i = 0; i < chkJson.getTotalRow(); i++) {
      if ($c.gus.cfIsNull($p, v_lineCd)) {
        v_lineCd = chkJson[i].lineCd;
      } else {
        if (lineCd != chkJson[i].lineCd) {
          $c.gus.f_cfAlertMsg($p, "LINE 코드가 서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.");
          return false;
        }
      }
    }

    // FIO / BT 여부를 확인하여 설정되지 않은 B/L은 선택하지 못함.
    for (var i = 0; i < chkJson.getTotalRow(); i++) {
      if ($c.gus.cfIsNull($p, chkJson[i].fioBtClsCd)) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        $c.gus.f_cfAlertMsg($p, "FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }

      // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      if (!$c.gus.cfIsNull($p, scwin.fioBtClsCd)) {
        if (scwin.fioBtClsCd == DsConstants.FIO) {
          // FIO/BT 처리구분이 FIO 인 경우
          if ($c.gus.cfIsNull($p, chkJson[i].fioProcYn)) {
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (chkJson[i].fioProcYn == DsConstants.YN_NO) {
            //FIO 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == DsConstants.BT) {
          // FIO/BT 처리구분이 BT 인 경우
          if ($c.gus.cfIsNull($p, chkJson[i].btProcYn)) {
            $c.gus.f_cfAlertMsg($p, "BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (chkJson[i].btProcYn == DsConstants.YN_NO) {
            //BT 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == DsConstants.FB) {
          // FIO/BT 처리구분이 FB 인 경우
          if ($c.gus.cfIsNull($p, chkJson[i].fioProcYn) && $c.gus.cfIsNull($p, chkJson[i].btProcYn)) {
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (chkJson[i].fioProcYn == DsConstants.YN_NO && chkJson[i].btProcYn == DsConstants.YN_NO) {
            // FIO 처리여부/BT 처리여부가 0인 경우
            $c.gus.f_cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        }
      }
    }

    // 선택된 목록의 수입수출구분코드가 다른경우 오류
    for (var l = 0; l < chkJson.getTotalRow(); l++) {
      //if(ds_blInfo.RowMark(l) == 1){
      // 선택된 목록의 수입수출구분코드가 다른경우 오류
      if ($c.gus.cfIsNull($p, chkJson[l].impExpClsCd)) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        $c.gus.f_cfAlertMsg($p, "수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }
      //}			
    }
  }
  return true;
};

//f_customFormatter
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colId = gr_blInfo.getColumnID(colIndex);
  if (colId == "blTypCd") {
    data = ds_blInfo.getCellData(rowIndex, "assgnClsCd") == "N" ? "T/S" : "";
  } else if (colId == "blTypCd") {
    data = ds_blInfo.getCellData(rowIndex, "blTypCd") == "E" ? "E" : "F";
  }
  return data;
};
/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 성공
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_blInfo.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else if (rowCnt == 1) {
    if (scwin.mulitSelYn == "F") {
      scwin.f_RtnValue(0);
    } else {
      scwin.f_RtnValueMultiRow();
    }
  }
  if (ed_cntrNo.getValue().trim() != "") {
    gr_blInfo.setColumnVisible("cntrNo", true);
  } else {
    gr_blInfo.setColumnVisible("cntrNo", false);
  }
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//본선관리번호 찾기 버튼
scwin.img_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(1);
};

//mrn 소문자 > 대문자 
scwin.ed_mrn_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_mrn);
};

//그리드 더블 클릭
scwin.gr_blInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (scwin.mulitSelYn == "F") {
      scwin.f_RtnValue(rowIndex);
    } else {
      scwin.f_RtnValueMultiRow();
    }
  }
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  let cvsslMgntNo = ed_cvsslMgntNo.getValue().trim();
  if (ed_cvsslMgntNo.originalValue != cvsslMgntNo) {
    if (cvsslMgntNo != "") {
      scwin.f_openCommonPopUp(1);
    }
  }
};
scwin.ed_cvsslMgntNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cvsslMgntNo);
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_blNo);
};
scwin.ed_cntrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cntrNo);
};
scwin.ed_lineCd_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_lineCd);
};
scwin.gr_blInfo0_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (scwin.mulitSelYn == "F") {
      scwin.f_RtnValue(rowIndex);
    } else {
      scwin.f_RtnValueMultiRow();
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 100px;',allowChar:'a-zA-Z0-9',maxlength:'8',ref:'data:dma_search.cvsslMgntNo','ev:onblur':'scwin.ed_cvsslMgntNo_onblur','ev:oneditkeyup':'scwin.ed_cvsslMgntNo_oneditkeyup',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.img_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxlength:'11',ref:'data:dma_search.mrn','ev:oneditkeyup':'scwin.ed_mrn_oneditkeyup',objType:'data',validExp:'MRN:no'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxlength:'20',ref:'data:dma_search.blNo',objType:'data',validExp:'BL번호:no','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',id:'th_cntrNo'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',id:'td_cntrNo'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxlength:'11',ref:'data:dma_search.cntrNo',objType:'data',validExp:'컨테이너번호:no:length=11','ev:oneditkeyup':'scwin.ed_cntrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_assgnClsCd',style:'width:150px;',ref:'data:dma_search.assgnClsCd',direction:'auto',objType:'data',submenuSize:'auto',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',placeholder:'',style:'width: 50px;',maxlength:'5',allowChar:'a-zA-Z0-9',ref:'data:dma_search.lineCd','ev:oneditkeyup':'scwin.ed_lineCd_oneditkeyup',objType:'data',validExp:'MRN:no'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_tsYn',ref:'data:dma_search.tsYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_blInfo',id:'gr_blInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'6',columnMove:'true','ev:oncelldblclick':'scwin.gr_blInfo0_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더<br/>존재여부'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'컨테이너번호',hidden:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'MRN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'70',value:'MSN'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'HSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'BL번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'당사배정<br/>구분코드',width:'100',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'배점<br/>구분코드',width:'100',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'배정창고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'통지처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'수하인',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'FIO<br/>BT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'BT<br/>처리여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'FIO<br/>처리여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'품명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'하선장소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'본선<br/>관리번호',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'Line<br/>코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'하선장소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'선사항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'항구코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'보세운송만료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'T/S<br/>여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'F/E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'LCL<br/>여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'수입<br/>수출',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrYn',inputType:'checkbox',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'center',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'value',id:'mcomAssgnClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'assgnClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'assgnWhouseNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ntcPlNmCmpy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnNmCmpy',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fioBtClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'btProcYn',value:'',displayMode:'label',trueValue:'1',valueType:'binary'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'fioProcYn',value:'',displayMode:'label',trueValue:'1',valueType:'binary'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mcomDsmbrkPlcNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cvsslMgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mcomLineCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mcomDsmbrkPlcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shpCoPortcnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transPrd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tsYn',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter '}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'blTypCd',value:'',displayMode:'label',textAlign:'left',customFormatter:'scwin.f_customFormatter '}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lclYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impExpClsCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_select',style:'',type:'button','ev:onclick':'scwin.f_RtnValueMultiRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]}]}]}]}]}]}]})