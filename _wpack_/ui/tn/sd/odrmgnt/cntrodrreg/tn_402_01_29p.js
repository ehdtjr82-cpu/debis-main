/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_402_01_29p.xml 44133 57398e4e4a91d72e99b42c894a7b08b1369da4584634ff5509063c464230458f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrYn',name:'오더존재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'하선장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'msn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'hsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'Line코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'하선장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transPrd',name:'보세운송만료일자(운송기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsYn',name:'T/S여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정 구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndBlInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'bl번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsYn',name:'TS여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBillOfLadingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndBlInfo","key":"IN_DS1"},{"id":"ds_blInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_blInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// inswave1 / inswave1
// 수입일반 오더 (C2) -> BL 버튼

// MRN : 25EASKG020I

scwin.onpageload = function () {
  // op_303_03_08b
  // const codeOptions = [
  //     { grpCd: "LO121", compID: "acb_wrkPlClsCd" }  // 작업장
  //     ,{ grpCd: "OP524", compID: "acb_term,gr_workImplement:term" }  // term
  //     ,{ grpCd: "SD113", compID: "acb_cnd_odrKndCd", opt :{"range" : "1,C"} }   
  //오더종류 ^전체,<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>
  //     ,{ grpCd: "SD114", compID: "acb_selfClsCd", opt :{"range" : "1,C"} }     
  //자가/CH ^전체,<%= DsCommonUtil.getCodeList("SD114", 1, DsConstants.ODR_CNTR, new int[]{DsCommonUtil.CD, DsCommonUtil.CD_NM}) %>,<%= DsCommonUtil.getCodeList("SD114", 1, DsConstants.ODR_ALL, new int[]{DsCommonUtil.CD, DsCommonUtil.CD_NM}) %>
  //     //DsConstants.ODR_CNTR = "C";
  // ]
  // $c.data.setCommonCode(codeOptions);

  // ^전체,<%= DsCommonUtil.getCodeList("SD144", new int[]{DsCommonUtil.CD, DsCommonUtil.CD_NM}) %>
  // mcomAssgnClsCd

  const codeOptions = [{
    grpCd: "SD144",
    compID: "lc_assgnClsCd"
  }, {
    grpCd: "SD104",
    compID: "gr_blInfo:assgnClsCd"
  },
  // 당사배정 구분코드  select
  {
    grpCd: "SD144",
    compID: "gr_blInfo:mcomAssgnClsCd"
  } // 또는 실제 맞는 그룹코드 확인
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.paramData = $c.data.getParameter($p).data;
  scwin.blNo = "";
  scwin.cvsslMgntNo = "";
  scwin.assgnClsCd = "";
  scwin.impExpClsCd = "";
  scwin.bulkYn = 0;
  scwin.lineCd = "";
  scwin.tsYn = 0;
  scwin.mulitSelYn = "F";
  scwin.fullEmptyClsCd = "E";
  scwin.fioBtClsCd = "";
  scwin.grFormat = "";
  scwin.hid_bulkYn = "";
  if (!$c.gus.cfIsNull($p, scwin.paramData)) {
    scwin.blNo = $c.gus.cfIsNull($p, scwin.paramData[0]) ? "" : scwin.paramData[0].trim();
    scwin.cvsslMgntNo = $c.gus.cfIsNull($p, scwin.paramData[1]) ? "" : scwin.paramData[1].trim();
    scwin.assgnClsCd = $c.gus.cfIsNull($p, scwin.paramData[2]) ? "" : scwin.paramData[2].trim();
    scwin.impExpClsCd = $c.gus.cfIsNull($p, scwin.paramData[3]) ? "" : scwin.paramData[3].trim();
    scwin.bulkYn = $c.gus.cfIsNull($p, scwin.paramData[4]) ? 0 : scwin.paramData[4];
    scwin.lineCd = $c.gus.cfIsNull($p, scwin.paramData[5]) ? "" : scwin.paramData[5].trim();
    scwin.tsYn = $c.gus.cfIsNull($p, scwin.paramData[6]) ? 0 : scwin.paramData[6];
    scwin.mulitSelYn = $c.gus.cfIsNull($p, scwin.paramData[7]) ? "F" : scwin.paramData[7].trim();
    scwin.fullEmptyClsCd = $c.gus.cfIsNull($p, scwin.paramData[8]) ? "E" : scwin.paramData[8].trim();
    scwin.fioBtClsCd = $c.gus.cfIsNull($p, scwin.paramData[9]) ? "" : scwin.paramData[9].trim();
    scwin.grFormat = "";
  }
  if (scwin.bulkYn == 0) {
    // 컨테이너인 경우.
    // to-do

    // 숨기는 컬럼
    // gr_blInfo.setColumnVisible("cntrNo", false)
    gr_blInfo.setColumnVisible("assgnWhouseNm", false); // 배정창고
    gr_blInfo.setColumnVisible("ntcPlNmCmpy", false); // 통지처처
    gr_blInfo.setColumnVisible("fioBtClsCd", false); // FIO / BT
    gr_blInfo.setColumnVisible("btProcYn", false); //  BT 처리여부
    gr_blInfo.setColumnVisible("fioProcYn", false); // FIO 처리여부

    gr_blInfo.setColumnVisible("commCd", false); // 품명코드
    gr_blInfo.setColumnVisible("mcomDsmbrkPlcCd", false); // 하선장소코드
    gr_blInfo.setColumnVisible("shpCoPortcnt", false); // 선사항차
    gr_blInfo.setColumnVisible("vsslCd", false); // 선박코드
    gr_blInfo.setColumnVisible("portCd", false); // 항구코드

    gr_blInfo.setColumnVisible("transPrd", false); // 보세운송만료일자(운송기한)
    gr_blInfo.setColumnVisible("vsslNm", false); // 선박명
    gr_blInfo.setColumnVisible("impExpClsCd", false); // 수입/수출
  } else if (scwin.bulkYn == 1) {// 벌크인 경우
    // to-do
  }
  if (scwin.mulitSelYn == "T") {
    // 다중선택 모드인 경우
    // gr_blInfo.MultiRowSelect = "true";
    gr_blInfo.setDataDragDrop(false);
    gr_blInfo.setDataDragSelect(true);
    gr_blInfo.setUseShiftKey(true);
    // cf_ShowObject([btnSelect]); // to-do
    btnSelect.show();
  } else {
    // 단일선택 모드인 경우
    // gr_blInfo.MultiRowSelect = "false";
    gr_blInfo.setDataDragDrop(true);
    gr_blInfo.setDataDragSelect(false);
    gr_blInfo.setUseShiftKey(false);
    // cf_HideObject([btnSelect]); // to-do
    btnSelect.hide();
  }

  // f_SetDSHeader(ds_cndBlInfo, "1");		//검색조건 데이터셋 헤더 생성 // to-do

  scwin.hid_bulkYn = scwin.bulkYn;
  if (scwin.tsYn == "1") {
    chb_tsYn.setValue(1); // TS 여부
  }
  if (scwin.blNo != "" || scwin.cvsslMgntNo != "") {
    ed_blNo.setValue(scwin.blNo);
    ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
    lc_assgnClsCd.setValue(lc_assgnClsCd.getValue());
    ed_lineCd.setValue(scwin.lineCd);
    scwin.f_Retrieve();
  }
};

//조회 
scwin.f_Retrieve = async function () {
  var cntrNo = ed_cntrNo.getValue().trim();
  var blNo = ed_blNo.getValue().trim();
  var mrn = ed_mrn.getValue().trim();
  var cvsslMgntNo = ed_cvsslMgntNo.getValue().trim();

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
  if ($c.gus.cfValidate($p, [tbl_cndArea])) {
    //alert("ds_cndBlInfo : "+ds_cndBlInfo.Text);
    // tr_retrieve.Action = "/ds.sd.odrmgnt.odrprewrk.RetrieveBillOfLadingCMD.do";
    await $c.sbm.execute($p, sbm_retrieve); // tr_retrieve.Post();
  }
};

//그리드 헤더 세팅
scwin.f_SetGridHeader = function () {
  //컨테이너번호가 있는 경우
  if (ed_cntrNo.getValue().trim() != "") {
    gr_blInfo.setColumnVisible("cntrNo", true);
  } else {
    gr_blInfo.setColumnVisible("cntrNo", false);
  }
};

//리턴값 넘기기
scwin.f_RtnValue = async function (row) {
  if (row >= 0) {
    if (scwin.bulkYn == 1) {
      // 벌크인 경우
      // FIO / BT 여부를 확인하여 설정되지 않은 B/L은 선택하지 못함.
      if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioBtClsCd"))) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        // FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
        $c.gus.cfAlertMsg($p, "FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }

      // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      if (!$c.gus.cfIsNull($p, scwin.fioBtClsCd)) {
        if (scwin.fioBtClsCd == "FO") {
          // FIO/BT 처리구분이 FIO 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioProcYn"))) {
            // FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "fioProcYn") == "0") {
            //FIO 처리여부가 0인 경우
            // FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == "BT") {
          // FIO/BT 처리구분이 BT 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "btProcYn"))) {
            // BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "btProcYn") == "0") {
            //BT 처리여부가 0인 경우
            // BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        } else if (scwin.fioBtClsCd == "FB") {
          // FIO/BT 처리구분이 FB 인 경우
          if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "fioProcYn")) && $c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "btProcYn"))) {
            // FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          } else if (ds_blInfo.getCellData(row, "fioProcYn") == "0" && ds_blInfo.getCellData(row, "btProcYn") == "0") {
            // FIO 처리여부/BT 처리여부가 0인 경우
            // BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        }
      }

      // 선택된 목록의 수입수출구분코드가 다른경우 오류
      if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(row, "impExpClsCd"))) {
        //FIO_BT구분코드 가 존재하지 않는 경우
        // 수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
        $c.gus.cfAlertMsg($p, "수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }
    } else if (scwin.bulkYn == 0) {
      // 컨테이너인 경우

      // LCL 여부가 1인 경우 HSN 이 0이 아닌 BL은 선택할수 없음.
      if (ds_blInfo.getCellData(row, "lclYn") == 1 && ds_blInfo.getCellData(row, "hsn") != 0) {
        $c.gus.cfAlertMsg($p, "LCL 여부가 1인 경우 HSN이 0이 아닌 BL은 선택할 수 없습니다.");
        return false;
      }
    }
    if (scwin.fullEmptyClsCd == "F") {
      // 컨테이너가 Full 인 경우만 선택 가능
      if (ds_blInfo.getCellData(row, "blTypCd") == "E") {
        // BL_TYPE_CD 가 E인경우 선택 하지 못함. 
        $c.gus.cfAlertMsg($p, "EMPTY 인 B/L은 선택할 수 없습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
        return false;
      }
    }
    var arrRtnVal = new Array();
    arrRtnVal[0] = ds_blInfo.getCellData(row, "mrn"); //mrn
    arrRtnVal[1] = ds_blInfo.getCellData(row, "msn"); //msn
    arrRtnVal[2] = ds_blInfo.getCellData(row, "hsn"); //hsn
    arrRtnVal[3] = ds_blInfo.getCellData(row, "hblNo"); //bl번호
    arrRtnVal[4] = ds_blInfo.getCellData(row, "mcomLineCd"); //당사Line코드
    arrRtnVal[5] = ds_blInfo.getCellData(row, "mcomAssgnClsCd"); //당사배정구분코드  
    arrRtnVal[6] = ds_blInfo.getCellData(row, "cvsslMgntNo"); //본선관리번호
    arrRtnVal[7] = ds_blInfo.getCellData(row, "shpCoPortcnt"); //선사항차	
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

    window.returnValue = arrRtnVal;
    $c.win.closePopup($p, arrRtnVal);
  }
};

//초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_cntrNo, ed_blNo, ed_mrn, ed_cvsslMgntNo, ed_lineCd]);
};
scwin.img_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(1);
};

//공통팝업 열기
scwin.f_openCommonPopUp = async function (gubun) {
  var rtnList = new Array();
  if (gubun == 1) {
    //본선관리번호 조회 
    var arrParam = new Array(2);
    arrParam[0] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
    arrParam[1] = scwin.impExpClsCd; //수출입구분코드

    // rtnList = window.showModalDialog(
    //     '/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업', 
    //     arrParam, 
    //     "dialogWidth:900px; dialogHeight:400px; status:No");

    let v_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
    let opts = {
      id: "pupup",
      popupName: "본선관리번호검색팝업",
      modal: true,
      type: "browserPopup",
      width: 1200,
      height: 620,
      title: "본선관리번호검색팝업"
    };
    rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);

    //본선관리번호 리턴값에서 필요한 값 세팅
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        ed_cvsslMgntNo.setValue(rtnList[0]);
        // ed_cvsslMgntNo.setValue(rtnList[0]);
      }
    } else {
      ed_cvsslMgntNo.setValue("");
      // ed_cvsslMgntNo.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  var arrRtnVal = new Array();
  if (scwin.mulitSelYn == "F") {
    arrRtnVal[0] = "N/A";
  } else {
    var arrRtnValList = new Array();
    arrRtnValList[0] = "N/A";
    arrRtnVal[0] = arrRtnValList;
  }
  //alert(arrRtnVal.toString());
  window.returnValue = arrRtnVal;
  $c.win.closePopup($p, arrRtnVal);
};

//-------------------------------------------------------------------------
// 다중 B/L 선택
//-------------------------------------------------------------------------
scwin.f_RtnValueMultiRow = async function () {
  var arrRtnVal = new Array();
  var j = 0;
  if (ds_blInfo.getTotalRow() > 0 && scwin.mulitSelYn == "T") {
    let chkVal = await scwin.f_ChkRtnList();
    if (chkVal) {
      for (var i = 0; i < ds_blInfo.getTotalRow(); i++) {
        if (ds_blInfo.RowMark(i) == 1) {
          var arrRtnValList = new Array();
          arrRtnValList[0] = ds_blInfo.getCellData(i, "mrn"); //mrn
          arrRtnValList[1] = ds_blInfo.getCellData(i, "msn"); //msn
          arrRtnValList[2] = ds_blInfo.getCellData(i, "hsn"); //hsn
          arrRtnValList[3] = ds_blInfo.getCellData(i, "hblNo"); //bl번호
          arrRtnValList[4] = ds_blInfo.getCellData(i, "mcomLineCd"); //당사Line코드
          arrRtnValList[5] = ds_blInfo.getCellData(i, "mcomAssgnClsCd"); //당사배정구분코드
          arrRtnValList[6] = ds_blInfo.getCellData(i, "cvsslMgntNo"); //본선관리번호
          arrRtnValList[7] = ds_blInfo.getCellData(i, "shpCoPortcnt"); //선사항차	
          arrRtnValList[8] = ds_blInfo.getCellData(i, "vsslCd"); //선박코드
          arrRtnValList[9] = ds_blInfo.getCellData(i, "vsslNm"); //선박명
          arrRtnValList[10] = ds_blInfo.getCellData(i, "portCd"); //항구코드
          arrRtnValList[11] = ds_blInfo.getCellData(i, "transPrd"); //보세운송만료일자(운송기한)
          arrRtnValList[12] = ds_blInfo.getCellData(i, "mcomDsmbrkPlcCd"); //하선장소코드
          arrRtnValList[13] = ds_blInfo.getCellData(i, "mcomDsmbrkPlcNm"); //하선장소명
          arrRtnValList[14] = ds_blInfo.getCellData(i, "arvDt"); //입항일자
          arrRtnValList[15] = ds_blInfo.getCellData(i, "arvHh"); //입항시간
          arrRtnValList[16] = ds_blInfo.getCellData(i, "pierCd"); //부두코드
          arrRtnValList[17] = ds_blInfo.getCellData(i, "pierNm"); //부두코드명
          arrRtnValList[18] = ds_blInfo.getCellData(i, "assgnWhouseCd"); //배정코드
          arrRtnValList[19] = ds_blInfo.getCellData(i, "assgnWhouseNm"); //배정코드명

          arrRtnVal[j++] = arrRtnValList;
        }
      }
      window.returnValue = arrRtnVal;
      $c.win.closePopup($p, arrRtnVal);
    }
  }
};

//-------------------------------------------------------------------------
// 선택된 B/L 유효성 확인
//-------------------------------------------------------------------------
scwin.f_ChkRtnList = async function () {
  if (scwin.bulkYn == 1) {
    // 벌크인 경우
    var v_cvsslMgntNo = ""; // 본선관리번호
    var v_lineCd = ""; // LINE CD

    // 선택된 목록의 본선관리번호가 다른경우 오류				
    for (var i = 0; i < ds_blInfo.getTotalRow(); i++) {
      if (ds_blInfo.RowMark(i) == 1) {
        if ($c.gus.cfIsNull($p, v_cvsslMgntNo)) {
          v_cvsslMgntNo = ds_blInfo.getCellData(i, "cvsslMgntNo");
        } else {
          if (v_cvsslMgntNo != ds_blInfo.getCellData(i, "cvsslMgntNo")) {
            // 본선관리번호가 서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "본선관리번호가 서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        }
      }
    }

    // 선택된 목록의 LINE 코드가 다른 경우 오류
    for (var j = 0; j < ds_blInfo.getTotalRow(); j++) {
      if (ds_blInfo.RowMark(j) == 1) {
        if ($c.gus.cfIsNull($p, v_lineCd)) {
          v_lineCd = ds_blInfo.getCellData(j, "lineCd");
        } else {
          if (v_lineCd != ds_blInfo.getCellData(j, "lineCd")) {
            // LINE 코드가 서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.
            $c.gus.cfAlertMsg($p, "LINE 코드가 서로 다릅니다. \n 목록 정보를 확인하시기 바랍니다.");
            return false;
          }
        }
      }
    }

    // 선택된 목록의 FIO / BT 여부를 확인하여 설정되지 않은경우 오류
    for (var k = 0; k < ds_blInfo.getTotalRow(); k++) {
      if (ds_blInfo.RowMark(k) == 1) {
        // FIO / BT 여부를 확인하여 설정되지 않은 B/L은 선택하지 못함.
        if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(k, "fioBtClsCd"))) {
          //FIO_BT구분코드 가 존재하지 않는 경우
          // FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
          $c.gus.cfAlertMsg($p, "FIO / BT구분코드 가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
          return false;
        }

        // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
        if (!$c.gus.cfIsNull($p, fioBtClsCd)) {
          if (fioBtClsCd == "FO") {
            // FIO/BT 처리구분이 FIO 인 경우
            if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(k, "fioProcYn"))) {
              // FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "FIO 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            } else if (ds_blInfo.getCellData(k, "fioProcYn") == "0") {
              //FIO 처리여부가 0인 경우
              // FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "FIO 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            }
          } else if (fioBtClsCd == "BT") {
            // FIO/BT 처리구분이 BT 인 경우
            if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(k, "btProcYn"))) {
              // BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            } else if (ds_blInfo.getCellData(k, "btProcYn") == "0") {
              //BT 처리여부가 0인 경우
              // BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            }
          } else if (fioBtClsCd == "FB") {
            // FIO/BT 처리구분이 FB 인 경우
            if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(k, "fioProcYn")) && $c.gus.cfIsNull($p, ds_blInfo.getCellData(k, "btProcYn"))) {
              // FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 입력되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            } else if (ds_blInfo.getCellData(k, "fioProcYn") == "0" && ds_blInfo.getCellData(k, "btProcYn") == "0") {
              // FIO 처리여부/BT 처리여부가 0인 경우
              // BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
              $c.gus.cfAlertMsg($p, "FIO 처리여부/BT 처리여부가 선택되지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
              return false;
            }
          }
        }
      }
    }

    // 선택된 목록의 수입수출구분코드가 다른경우 오류
    for (var l = 0; l < ds_blInfo.getTotalRow(); l++) {
      if (ds_blInfo.RowMark(l) == 1) {
        // 선택된 목록의 수입수출구분코드가 다른경우 오류
        if ($c.gus.cfIsNull($p, ds_blInfo.getCellData(l, "impExpClsCd"))) {
          //FIO_BT구분코드 가 존재하지 않는 경우
          // 수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.
          $c.gus.cfAlertMsg($p, "수입수출구분코드 가 일치하지 않았습니다. \n 적하목록 정보를 확인하시기 바랍니다.");
          return false;
        }
      }
    }
  }
  return true;
};

// for=tr_retrieve event=OnSuccess()
scwin.sbm_retrieve_submitdone = async function (e, arrRtnVal) {
  debugger;
  let rowData = ds_blInfo.getRowJSON(0);
  var rowCnt = ds_blInfo.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else if (rowCnt == 1) {
    // rowCnt == 1 ????
    if (scwin.mulitSelYn == "F") {
      let rtn = await scwin.f_RtnValue(0);
      if (rtn) {
        // window.close();
        $c.win.closePopup($p, arrRtnVal);
      }
    } else {
      let rtn = await scwin.f_RtnValueMultiRow();
      if (rtn) {
        $c.win.closePopup($p);
      }
    }
  }

  //그리드헤더세팅
  scwin.f_SetGridHeader();
};

// for=gr_blInfo event=OnDblClick(row,colid)
scwin.gr_blInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (scwin.mulitSelYn == "F") {
      scwin.f_RtnValue(rowIndex);
    } else {
      scwin.f_RtnValueMultiRow();
    }
  }
};

// EMEDIT EVENT : 본선관리번호에서 OnKillFocus이벤트 발생시
// for=ed_cvsslMgntNo event=OnKillFocus()
scwin.ed_cvsslMgntNo_onblur = function (e) {
  let value = ed_cvsslMgntNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_cvsslMgntNo.setValue(value);
  var cvsslMgntNo = this.getValue().trim();
  // if(this.Modified){			
  if (cvsslMgntNo != "") {
    scwin.f_openCommonPopUp(1);
  }
  // }
};
scwin.tsYnFormatter = function (value) {
  const v = (value || "").trim();
  return v === "Y" ? "T/S" : "";
};
scwin.feFormatter = function (value) {
  const v = (value || "").trim();
  return v === "E" ? "E" : "F";
};
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  let value = ed_cvsslMgntNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_cvsslMgntNo.setValue(value);
};
scwin.ed_mrn_onkeyup = function (e) {
  let value = ed_mrn.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_mrn.setValue(value);
};
scwin.ed_mrn_onblur = function (e) {
  let value = ed_mrn.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_mrn.setValue(value);
};
scwin.ed_blNo_onkeyup = function (e) {
  let value = ed_blNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_blNo.setValue(value);
};
scwin.ed_blNo_onblur = function (e) {
  let value = ed_blNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_blNo.setValue(value);
};
scwin.ed_cntrNo_onkeyup = function (e) {
  let value = ed_cntrNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_cntrNo.setValue(value);
};
scwin.ed_cntrNo_onblur = function (e) {
  let value = ed_cntrNo.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_cntrNo.setValue(value);
};
scwin.ed_lineCd_onkeyup = function (e) {
  let value = ed_lineCd.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_lineCd.setValue(value);
};
scwin.ed_lineCd_onblur = function (e) {
  let value = ed_lineCd.getValue();
  value = value.toUpperCase(); // 소문자 -> 대문자
  value = value.replace(/[^A-Z0-9]/g, ""); // 영문 대문자, 숫자만 허용
  ed_lineCd.setValue(value);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;','ev:onblur':'scwin.ed_cvsslMgntNo_onblur',ref:'data:ds_cndBlInfo.cvsslMgntNo','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup',maxlength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.img_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',style:'width:150px;',validExp:'MRN:no',maxlength:'11',ref:'data:ds_cndBlInfo.mrn','ev:onkeyup':'scwin.ed_mrn_onkeyup','ev:onblur':'scwin.ed_mrn_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',style:'width:150px;',validExp:'BL번호:no',maxlength:'20',ref:'data:ds_cndBlInfo.blNo','ev:onkeyup':'scwin.ed_blNo_onkeyup','ev:onblur':'scwin.ed_blNo_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',style:'width:150px;',validExp:'컨테이너번호:no:length=11',ref:'data:ds_cndBlInfo.cntrNo','ev:onkeyup':'scwin.ed_cntrNo_onkeyup',maxlength:'11','ev:onblur':'scwin.ed_cntrNo_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_assgnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'20',ref:'data:ds_cndBlInfo.assgnClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',style:'width: 70px;',validExp:'MRN:no',ref:'data:ds_cndBlInfo.lineCd','ev:onkeyup':'scwin.ed_lineCd_onkeyup',maxlength:'5','ev:onblur':'scwin.ed_lineCd_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S 여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsYn',ref:'data:ds_cndBlInfo.tsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_blInfo',style:'','ev:oncelldblclick':'scwin.gr_blInfo_oncelldblclick',id:'gr_blInfo',class:'wq_gvw',fixedColumn:'6',readOnly:'true',scrollByColumn:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'오더<br/>존재여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column9',value:'BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'당사배정<br/>구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'배정<br/>구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column100',value:'배정창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column101',value:'통지처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'수하인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',value:'FIO<br/>/BT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'BT<br/>처리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column104',value:'FIO<br/>처리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'본선<br/>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column33',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column31',value:'하선장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'Line<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'하선장소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'선사항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'선박코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'항구코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column37',value:'보세운송만료일자(운송기한)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'선박명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'T/S<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'LCL<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column109',value:'수입<br/>/수출',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'odrYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'msn',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'hsn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'hblNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'mcomAssgnClsCd',displayMode:'value',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'assgnClsCd',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'assgnWhouseNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'ntcPlNmCmpy',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'cnsgnNmCmpy',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'fioBtClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'checkbox',id:'btProcYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'checkbox',id:'fioProcYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'mcomDsmbrkPlcNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mcomLineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomDsmbrkPlcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shpCoPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'transPrd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tsYn',displayMode:'label',displayFormatter:'scwin.tsYnFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blTypCd',displayMode:'label',displayFormatter:'scwin.feFormatter',dataType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSelect',style:'',type:'button','ev:onclick':'scwin.f_RtnValueMultiRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnClose',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:input',A:{id:'hid_bulkYn',style:'display: none;'}}]}]}]}]}]})