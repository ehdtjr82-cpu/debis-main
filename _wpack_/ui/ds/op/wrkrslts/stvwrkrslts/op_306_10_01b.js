/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_10_01b.xml 70705 9143f2a2625139a3fc1f1081be1ff0cad9b950a6f2bc5dc0dfaebb7c32f2090e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shippingListNo',name:'선적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'입항일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'vsslCnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선;관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coilSpec',name:'재질',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coilWidth',name:'폭',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coilLength',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량;(톤)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modexYn',name:'모덱스여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClsCd',name:'관리구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'shuttleClsCd',name:'셔틀구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지점코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stArvDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edArvDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coilSpec',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coilWidth',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coilLength',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shuttleClsCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Import',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'shippingListNo',name:'선박코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'선박코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'선박명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'화주코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'화주'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'BL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilSpec',name:'코일-재질'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilWidth',name:'코일-폭'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilLength',name:'코일-길이'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qty',name:'코일-수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wt',name:'코일-중량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modexYn',name:'모덱스여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClsCd',name:'관리구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'shuttleClsCd',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranCd',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmp',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'shippingListNo',name:'선박코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'선박코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'선박명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'화주코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'화주'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'BL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilSpec',name:'코일-재질'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilWidth',name:'코일-폭'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coilLength',name:'코일-길이'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qty',name:'코일-수량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wt',name:'코일-중량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modexYn',name:'모덱스여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClsCd',name:'관리구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'shuttleClsCd',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranCd',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Vssl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd_Param',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm_Param',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_Result',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm_Result',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Clnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo_Param',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm_Param',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo_Result',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm_Result',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveCoilLoadContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ds.op.wrkrslts.stvwrkrslts.SaveCoilLoadContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.empNo = $c.data.getMemInfo($p, "userId");
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류 상위 점소 코드
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.selectedRowIndex = 0;
scwin.beforeData = "";
scwin.oldData = "";
scwin.eventCnt = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP606",
    compID: "acb_shuttleClsCd, gr_master:shuttleClsCd"
  },
  // 셀렉트
  {
    grpCd: "OP600",
    compID: "gr_master:completeYn"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);

  // const param= [
  //     {
  //         compID: "gr_master:completeYn",
  //         method: "getCodeList",
  //         param1: "OP600",
  //         param2: false,

  //         // outputFields를 정의하면, 이게 자동으로 param4: [1, 3]으로 변환되어 서버로 전송됩니다.
  //         outputFields: ["CD", "CD_NM"]
  //     }
  // ];
  // $c.data.setDsCommonUtil(param);

  $c.gus.cfTurnCreateFlag($p, true);

  // scwin.btn_retrieve_onClick()

  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// 기본값 세팅
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  udc_ArvDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tb_searchCondition]))) {
    return;
  }
  dma_condition.set("stArvDt", ica_stArvDt.getValue());
  dma_condition.set("edArvDt", ica_edArvDt.getValue());
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("vsslCd", ed_vsslCd.getValue());
  dma_condition.set("blNo", ed_blNo.getValue());
  dma_condition.set("coilSpec", ed_coilSpec.getValue());
  dma_condition.set("ctrtNo", ed_ctrtNo.getValue());
  dma_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_condition.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_condition.set("shuttleClsCd", acb_shuttleClsCd.getValue());
  $c.sbm.execute($p, sbm_condition);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (화주)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), ed_clntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, "대표거래처,거래처코드,거래처명");
};
scwin.udc_clnt_onblurCode = async function (e) {
  if (ed_clntNo.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, "대표거래처,거래처코드,거래처명");
  } else {
    return;
  }
};
scwin.udc_clnt_onChangeName = async function (info) {
  if (ed_clntNm.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, "", ed_clntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, "대표거래처,거래처코드,거래처명");
  } else {
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
// UDC 공통 팝업 (선박)
//-------------------------------------------------------------------------
scwin.udc_Vssl_onClick = async function (e) {
  udc_Vssl.cfCommonPopUp(scwin.udc_Vssl_callBackFunc, ed_vsslCd.getValue(), ed_vsslNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_Vssl_onblurCode = async function (e) {
  if (ed_vsslCd.getValue() != "") {
    udc_Vssl.cfCommonPopUp(scwin.udc_Vssl_callBackFunc, ed_vsslCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};
scwin.udc_Vssl_onChangeName = async function (info) {
  if (ed_vsslNm.getValue() != "") {
    udc_Vssl.cfCommonPopUp(scwin.udc_Vssl_callBackFunc, "", ed_vsslNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(선박)
//-------------------------------------------------------------------------
scwin.udc_Vssl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// 본선관리번호
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  let args = [];
  args[0] = ed_cvsslMgntNo.getValue();

  // let args = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

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
  if (rtn == null || rtn == undefined || rtn == "") {
    ed_cvsslMgntNo.setValue("");
  }
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 본선관리번호 kill focus
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  if (ed_cvsslMgntNo.getValue() == "" || ed_cvsslMgntNo.getValue() == scwin.oldData) {
    return;
  }
  let args = [];
  args[0] = ed_cvsslMgntNo.getValue();

  // let args = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

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
  if (rtn == null || rtn == undefined || rtn == "") {
    ed_cvsslMgntNo.setValue("");
  }
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
  scwin.oldData = rtn[0];
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), null, null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  if (ed_wrkPlCd.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, "F");
  } else {
    return;
  }
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  if (ed_wrkPlNm.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, "", ed_wrkPlNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, "F");
  } else {
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
// 그리드 팝업셀 클릭시 기존 데이터 저장
//-------------------------------------------------------------------------
scwin.gr_master_before = function (rowIndex, columnIndex, value) {
  scwin.beforeData = value;
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 editAfter
//-------------------------------------------------------------------------
scwin.gr_master_after = async function (rowIndex, columnIndex, value) {
  columnId = gr_master.getColumnID(columnIndex);
  switch (columnId) {
    case "vsslNm":
      // 선박
      if (value == "") {
        return;
      }
      if (value == scwin.beforeData) {
        return;
      }
      scwin.f_openCommPopUpGrid(1, rowIndex, "", ds_master.getCellData(rowIndex, "vsslNm"), 'F', 'F', "onafteredit");
      break;
    case "clntNm":
      // 화주
      if (value == "") {
        return;
      }
      if (value == scwin.beforeData) {
        return;
      }
      scwin.f_openCommPopUpGrid(2, rowIndex, "", ds_master.getCellData(rowIndex, "clntNm"), 'F', 'F', "onafteredit");
      break;
    case "wrkPlNm":
      // 작업장
      if (value == "") {
        return;
      }
      if (value == scwin.beforeData) {
        return;
      }
      scwin.f_openCommPopUpGrid(3, rowIndex, "", ds_master.getCellData(rowIndex, "wrkPlNm"), 'F', 'F', "onafteredit");
      break;
    case "cvsslMgntNo":
      // 본선관리번호
      if (value == "") {
        return;
      }
      if (value == scwin.beforeData) {
        return;
      }
      scwin.f_openCommPopUpGrid(9, rowIndex, ds_master.getCellData(rowIndex, "cvsslMgntNo"), 'F', 'F', "onafteredit");
      // let args = [];
      // args[0] = ds_master.getCellData(rowIndex, "cvsslMgntNo")

      // if(ds_master.getCellData(rowIndex, "cvsslMgntNo") == "") {
      //     return;
      // }

      // // 팝업 옵션 설정
      // let options = {
      //     id: "taxPop", 
      //     type: "",
      //     popupName: "본선관리번호검색팝업",
      //     width:  1100,                   
      //     height: 650
      // };

      // //상세화면 호출
      // let rtn = await $c.win.openPopup("/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);       

      // ds_master.setCellData(rowIndex, "cvsslMgntNo", rtn[0]); 

      break;
    case "qty":
      if (ds_master.getCellData(rowIndex, "qty") == "") {
        ds_master.setCellData(rowIndex, "qty", 0);
      }
      break;
    case "wt":
      if (ds_master.getCellData(rowIndex, "wt") == "") {
        ds_master.setCellData(rowIndex, "wt", 0);
      }
      break;
    case "coilWidth":
      if (ds_master.getCellData(rowIndex, "coilWidth") == "") {
        ds_master.setCellData(rowIndex, "coilWidth", 0.00);
      }
      break;
    case "coilLength":
      if (ds_master.getCellData(rowIndex, "coilLength") == "") {
        ds_master.setCellData(rowIndex, "coilLength", 0);
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업 이미지 클릭
//-------------------------------------------------------------------------
scwin.gr_master_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = gr_master.getColumnID(columnIndex);
  var pAutoClostTF = "F";
  switch (colid) {
    case "clntNm":
      // 화주 조회 팝업
      scwin.f_openCommPopUpGrid(2, rowIndex, "", ds_master.getCellData(rowIndex, "clntNm"), 'F', 'F', "ontextimageclick");
      break;
    case "vsslNm":
      // 화종 조회 팝업
      scwin.f_openCommPopUpGrid(1, rowIndex, "", ds_master.getCellData(rowIndex, "vsslNm"), 'F', 'F', "ontextimageclick");
      break;
    case "cvsslMgntNo":
      // 본선관리번호 팝업
      scwin.f_openCommPopUpGrid(9, rowIndex, ds_master.getCellData(rowIndex, "cvsslMgntNo"), 'F', 'F', "ontextimageclick");
      break;
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(3, rowIndex, "", ds_master.getCellData(rowIndex, "wrkPlNm"), 'F', 'F', "ontextimageclick");
      break;
  }
};
scwin.grid_cvsslMgntNo = async function () {
  let rowIndex = gr_master.getFocusedRowIndex();
  let args = [];
  args[0] = ds_master.getCellData(rowIndex, "cvsslMgntNo");
  ds_master.setCellData(rowIndex, "cvsslMgntNo", "");
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
    ds_master.setCellData(rowIndex, "cvsslMgntNo", rtn[0]);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 분기처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let pWhere = "";
  let wrkPlGbCd = "1";
  let evNm = arguments[6] || "";
  if (evNm && $c.win.getEventList($p, gr_master, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  switch (disGubun) {
    case 1:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "vsslCd", "");
        ds_master.setCellData(row, "vsslNm", "");
        udc_grid_popUp.setSelectId("retrieveVsslCdInfo");
        udc_grid_popUp.cfCommonPopUp(scwin.udc_grid_Popup_callBackFunc1, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "선박,선박코드,선박명");
      }
      break;
    case 2:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "clntNo", "");
        ds_master.setCellData(row, "clntNm", "");
        udc_grid_popUp.setSelectId("retrieveCoopList");
        udc_grid_popUp.cfCommonPopUp(scwin.udc_grid_Popup_callBackFunc2, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "화주,화주코드,화주명");
      }
      break;
    case 3:
      if (scwin.eventCnt == 1) {
        ds_master.setCellData(row, "wrkPlCd", "");
        ds_master.setCellData(row, "wrkPlNm", "");
        udc_grid_popUp.setSelectId("retrieveWrkPlInfo3");
        udc_grid_popUp.cfCommonPopUp(scwin.udc_grid_Popup_callBackFunc3, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "F", "작업장,작업장코드,작업장명");
      }
      break;
    case 9:
      if (evNm == "onafteredit" && ds_master.getCellData(row, "cvsslMgntNo") == "") {
        return;
      }
      if (scwin.eventCnt == 1) {
        let args = [];
        args[0] = ds_master.getCellData(row, "cvsslMgntNo");

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
        ds_master.setCellData(row, "cvsslMgntNo", rtn[0]);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 화주 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_Popup_callBackFunc1 = function (ret) {
  let rowIndex = gr_master.getFocusedRowIndex();
  if (ret != null && ret[0] != "N/A" && ret[1] != "N/A") {
    ds_master.setCellData(rowIndex, "vsslCd", ret[0]);
    ds_master.setCellData(rowIndex, "vsslNm", ret[1]);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 화주 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_Popup_callBackFunc2 = function (ret) {
  let rowIndex = gr_master.getFocusedRowIndex();
  if (ret != null && ret[0] != "N/A" && ret[1] != "N/A") {
    ds_master.setCellData(rowIndex, "clntNo", ret[0]);
    ds_master.setCellData(rowIndex, "clntNm", ret[1]);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 화주 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_Popup_callBackFunc3 = function (ret) {
  let rowIndex = gr_master.getFocusedRowIndex();
  if (ret != null && ret[0] != "N/A" && ret[1] != "N/A") {
    ds_master.setCellData(rowIndex, "wrkPlCd", ret[0]);
    ds_master.setCellData(rowIndex, "wrkPlNm", ret[1]);
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addMaster = function () {
  let oldRow = ds_master.getRowPosition();
  if (ds_master.getTotalRow() < 1) {
    ds_master.insertRow();
    ds_master.setCellData(0, "shippingListNo", "자동생성");
    ds_master.setCellData(0, "completeYn", "0");
    ds_master.setCellData(0, "arvDt", scwin.vCurDate);
    ds_master.setCellData(0, "wrkStDt", scwin.vCurDate);
    ds_master.setCellData(0, "wrkEndDt", "");
    ds_master.setCellData(0, "vsslCnt", "");
    ds_master.setCellData(0, "vsslCd", "");
    ds_master.setCellData(0, "vsslNm", "");
    ds_master.setCellData(0, "cvsslMgntNo", "");
    ds_master.setCellData(0, "clntNo", "");
    ds_master.setCellData(0, "clntNm", "");
    ds_master.setCellData(0, "blNo", "");
    ds_master.setCellData(0, "ctrtNo", "");
    ds_master.setCellData(0, "coilSpec", "");
    ds_master.setCellData(0, "coilWidth", 0.00);
    ds_master.setCellData(0, "coilLength", 0);
    ds_master.setCellData(0, "qty", 1);
    ds_master.setCellData(0, "wt", 0);
    ds_master.setCellData(0, "wrkPlCd", "");
    ds_master.setCellData(0, "wrkPlNm", "");
    ds_master.setCellData(0, "modexYn", "");
    ds_master.setCellData(0, "mgntClsCd", "");
    ds_master.setCellData(0, "lobranCd", scwin.loUpperLobranCd);
    ds_master.setCellData(0, "shuttleClsCd", "D");
  } else {
    let row = gr_master.getFocusedRowIndex();
    let lastrow = ds_master.getTotalRow();
    ds_master.insertRow();
    ds_master.setCellData(lastrow, "shippingListNo", "자동생성");
    ds_master.setCellData(lastrow, "completeYn", ds_master.getCellData(row, "completeYn"));
    ds_master.setCellData(lastrow, "lobranCd", ds_master.getCellData(row, "lobranCd"));
    ds_master.setCellData(lastrow, "arvDt", ds_master.getCellData(row, "arvDt"));
    ds_master.setCellData(lastrow, "wrkStDt", ds_master.getCellData(row, "wrkStDt"));
    ds_master.setCellData(lastrow, "wrkEndDt", ds_master.getCellData(row, "wrkEndDt"));
    ds_master.setCellData(lastrow, "vsslCnt", ds_master.getCellData(row, "vsslCnt"));
    ds_master.setCellData(lastrow, "vsslCd", ds_master.getCellData(row, "vsslCd"));
    ds_master.setCellData(lastrow, "vsslNm", ds_master.getCellData(row, "vsslNm"));
    ds_master.setCellData(lastrow, "cvsslMgntNo", ds_master.getCellData(row, "cvsslMgntNo"));
    ds_master.setCellData(lastrow, "clntNo", ds_master.getCellData(row, "clntNo"));
    ds_master.setCellData(lastrow, "clntNm", ds_master.getCellData(row, "clntNm"));
    ds_master.setCellData(lastrow, "blNo", ds_master.getCellData(row, "blNo"));
    ds_master.setCellData(lastrow, "ctrtNo", ds_master.getCellData(row, "ctrtNo"));
    ds_master.setCellData(lastrow, "coilSpec", ds_master.getCellData(row, "coilSpec"));
    ds_master.setCellData(lastrow, "coilWidth", ds_master.getCellData(row, "coilWidth"));
    ds_master.setCellData(lastrow, "coilLength", ds_master.getCellData(row, "coilLength"));
    ds_master.setCellData(lastrow, "qty", ds_master.getCellData(row, "qty"));
    ds_master.setCellData(lastrow, "wt", ds_master.getCellData(row, "wt"));
    ds_master.setCellData(lastrow, "wrkPlCd", ds_master.getCellData(row, "wrkPlCd"));
    ds_master.setCellData(lastrow, "wrkPlNm", ds_master.getCellData(row, "wrkPlNm"));
    ds_master.setCellData(lastrow, "modexYn", ds_master.getCellData(row, "modexYn"));
    ds_master.setCellData(lastrow, "mgntClsCd", ds_master.getCellData(row, "mgntClsCd"));
    ds_master.setCellData(lastrow, "shuttleClsCd", ds_master.getCellData(row, "shuttleClsCd"));
  }
  spa_totalRows.setValue(ds_master.getTotalRow());
  gr_master.setFocusedCell(ds_master.getTotalRow() - 1, 0);
};
scwin.f_cancelMaster = function () {
  let row = gr_master.getFocusedRowIndex();
  if (ds_master.getRowStatus(row) == "C") {
    ds_master.removeRow(row);
  }
  if (ds_master.getRowStatus(row) != "C") {
    ds_master.modifyRowStatus(row, "R");
  }
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 선적리스트 그리드 데이터셋 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_master_ondataload = function () {
  spa_totalRows.setValue(ds_master.getTotalRow());
  if (ds_master.getTotalRow() > 0) {
    gr_master.setFocusedCell(0, "shippingListNo");
  } else if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_Save_onClick = async function (e) {
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (ds_master.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "코일선적리스트"));
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_master]))) return;
  for (i = 0; i < ds_master.getTotalRow(); i++) {
    let arvDt = ds_master.getCellData(i, "arvDt");
    let vsslCnt = ds_master.getCellData(i, "vsslCnt");
    let wrkStDt = ds_master.getCellData(i, "wrkStDt");
    let wrkEndDt = ds_master.getCellData(i, "wrkEndDt");
    let vsslCd = ds_master.getCellData(i, "vsslCd");
    let clntNo = ds_master.getCellData(i, "clntNo");
    let ctrtNo = ds_master.getCellData(i, "ctrtNo");
    let coilSpec = ds_master.getCellData(i, "coilSpec");
    let completeYn = ds_master.getCellData(i, "completeYn");
    let shuttleClsCd = ds_master.getCellData(i, "shuttleClsCd");
    let cvsslMgntNo = ds_master.getCellData(i, "cvsslMgntNo");

    // 저장전 필수 데이터 체크 
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, arvDt)) {
      //입항일자 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 입항일자는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "arvDt");
      return;
    }
    // 저장전 필수 데이터 체크 
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, vsslCnt)) {
      //항차 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 항차는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "vsslCnt");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, wrkStDt)) {
      //작업 시작일자 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 작업 시작일자는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "wrkStDt");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, wrkEndDt)) {
      //작업 종료일자 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 작업 종료일자는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "wrkEndDt");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, cvsslMgntNo)) {
      //본선관리번호 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 본선관리번호는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "cvsslMgntNo");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, vsslCd)) {
      //선박코드 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 선박명은 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "vsslCm");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, clntNo)) {
      //화주코드 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 화주는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "clntNm");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, ctrtNo)) {
      //계약번호 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 계약번호는 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "ctrtNo");
      return;
    }
    if (ds_master.getRowStatus(i) != "R" && $c.gus.cfIsNull($p, coilSpec)) {
      //코일재질 
      $c.win.alert($p, "선적리스트중 " + (i + 1) + "번째  데이터에서 코일재질은 입력하셔야 합니다.");
      gr_master.setFocusedCell(i, "coilSpec");
      return;
    }
  }

  // 저장 직전 확인 메시지창 
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_master);
  }
};

//-------------------------------------------------------------------------
// 저장 완료시
//-------------------------------------------------------------------------
scwin.sbm_master_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  let rowCnt = ds_master.getTotalRow();
  let options = {
    fileName: "선적리스트내역.xlsx",
    sheetName: "선적리스트내역"
  };
  let grdObj = gr_master;
  let infoArr = {};
  if (rowCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 엑셀 업로드
//-------------------------------------------------------------------------
scwin.uploadExcel = async function () {
  // ds_Clnt.removeAll();
  // ds_Import.removeAll();
  // ds_Vssl.removeAll();
  // ds_master.removeAll();
  // ds_tmp.removeAll();

  if (udc_grid_up.getUpExt() == "1") {
    // csv
    options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 0,
      "useMaxByteLength": ",",
      "type": "0",
      "startRowIndex": 1,
      "footerExist": "0",
      "hidden": 1,
      "fillHidden": 1
    };
  } else {
    // 엑셀
    options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 0,
      "useMaxByteLength": ",",
      "type": "0",
      "startRowIndex": 1,
      "footerExist": "0",
      "hidden": 1
    };
  }
  await udc_grid_up.uploadGridViewExcel(gr_master, options);
};

//-------------------------------------------------------------------------
// 엑셀 업로드 후 데이터 검사
//-------------------------------------------------------------------------
scwin.gr_master_onfilereadend = function (value) {
  spa_totalRows.setValue(ds_master.getRowCount());
  let i;
  let intRowPosition;
  let topWrkStpCd;

  // 로드한  데이터 데이터 검증 시작 ----------------------------------------------------------------
  let col2; //구분값 
  let col13; //폭
  let col14; //길이
  let col15; //수량
  let col16; //중량(톤)      	                  

  let col3 = ""; // 입항일자 
  let col4 = ""; // 항차 
  let col11 = ""; // 계약번호

  for (let i = 0; i < ds_master.getTotalRow(); i++) {
    // 1.구분값이 [준비,시작,완료] 값중에 하나인지 확인  -------------------------------------------- 		
    // asis와 반대로 label로 구분하기 위함
    // 사유는 현업에서 사용하는 엑셀 업로드 중 select 박스의 label값과 value값이 혼동되어 사용되고 있는데 웹스퀘어에서는 해당내용으로 업로드가 불가능함
    // 이에 구분 컬럼은 selectedData = false로 주고 바인딩 되도록 설정하였습니다.
    // "준비" "시작" "완료" 외에 데이터가 들어갈 경우 바인딩 오류 발생할 수 있음
    col2 = ds_master.getCellData(i, "completeYn");
    if (col2 != "준비" && col2 != "시작" && col2 != "완료") {
      $c.win.alert($p, i + 1 + "줄의 구분값 컬럼을 잘못 입력하셨습니다. <br>입력된값 => " + col2);
      ds_master.removeAll();
      return;
    }

    // 2.입항일자 컬럼에  "-", "/", "," 제거  ----------------------------------------------------
    col3 = ds_master.getCellData(i, "arvDt");

    // 날짜에 포함된 '-' 문자와 '/' 문자 제거  replace 함수가 한번에 한문자 밖에 정리가 되지 않아. 세번식 돌린다. 
    // col3 = scwin.fReplaceStr( col3, "-", "");
    // col3 = scwin.fReplaceS?tr( col3, "/", "");
    col3.replace("-", "");
    col3.replace("/", "");

    // 정비된 데이터 재 입력 
    ds_master.setCellData(i, "arvDt", col3);

    // 정리가 완료된 값이 숫자인지 확인
    if (scwin.fCheckIsNumber(col3) != true) {
      $c.win.alert($p, i + 1 + "줄의 입항일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col3);
      ds_master.removeAll();
      return;
    }

    // 입력된 날짜가 유효한 날짜인지 체크 
    if (scwin.fCheckIsDate(col3) == false) {
      $c.win.alert($p, i + 1 + "줄의 입항일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col3);
      ds_master.removeAll();
      return;
    }

    // 작업 시작일자 컬럼에  "-", "/", "," 제거  ----------------------------------------------------
    col22 = ds_master.getCellData(i, "wrkStDt");

    // 날짜에 포함된 '-' 문자와 '/' 문자 제거  replace 함수가 한번에 한문자 밖에 정리가 되지 않아. 세번식 돌린다. 
    // col22 = col22.replac, "-", "");
    // col22 = scwin.fReplaceStr( col22, "/", "");
    col22.replace("-", "");
    col22.replace("/", "");

    // 정비된 데이터 재 입력 
    ds_master.setCellData(i, "wrkStDt", col22);

    // 정리가 완료된 값이 숫자인지 확인
    if (scwin.fCheckIsNumber(col22) != true) {
      $c.win.alert($p, i + 1 + "줄의 작업 시작일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col22);
      ds_master.removeAll();
      return;
    }

    // 입력된 날짜가 유효한 날짜인지 체크 
    if (scwin.fCheckIsDate(col22) == false) {
      $c.win.alert($p, i + 1 + "줄의 작업 시작일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col22);
      ds_master.removeAll();
      return;
    }

    // 2.작업 종료일자 컬럼에  "-", "/", "," 제거  ----------------------------------------------------
    col23 = ds_master.getCellData(i, "wrkEndDt");

    // 날짜에 포함된 '-' 문자와 '/' 문자 제거  replace 함수가 한번에 한문자 밖에 정리가 되지 않아. 세번식 돌린다. 
    // col23 = fReplaceStr( col23, "-", "");
    // col23 = fReplaceStr( col23, "/", "");
    col23.replace("-", "");
    col23.replace("/", "");

    // 정비된 데이터 재 입력 
    ds_master.setCellData(i, "wrkEndDt", col23);

    // 정리가 완료된 값이 숫자인지 확인
    if (scwin.fCheckIsNumber(col23) != true) {
      $c.win.alert($p, i + 1 + "줄의 작업 종료일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col23);
      ds_master.removeAll();
      return;
    }

    // 입력된 날짜가 유효한 날짜인지 체크 
    if (scwin.fCheckIsDate(col23) == false) {
      $c.win.alert($p, i + 1 + "줄의 작업 종료일자 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col23);
      ds_master.removeAll();
      return;
    }

    // 3.계약번호 컬럼에 "-", "/", "," 제거   ----------------------------------------------------
    col11 = ds_master.getCellData(i, "ctrtNo");

    // col11 = fReplaceStr( col11, "-", "");
    // col11 = fReplaceStr( col11, "/", "");
    col11.replace("-", "");
    col11.replace("/", "");
    ds_master.setCellData(i, "ctrtNo", col11);

    // 3.추후 선박CD나 NM을 이용 검증 할때 사용할 데이터 준비  ------------------------------------ 미구현부 
    let vsslCd = ds_master.getCellData(i, "vsslCd");
    let vsslNm = ds_master.getCellData(i, "vsslNm");

    // 엑셀로 업로드된 데이터들 중 선박코드와 선박명칭을 중복제거하여 입력
    scwin.f_CheckDataIsExistNotInsert(ds_Vssl, vsslCd, ds_Vssl.getColumnIndex("vsslCd_Param"), vsslNm, ds_Vssl.getColumnIndex("vsslNm_Param"));

    // 4.화주 NO나 NM을 이용 검증 할때 사용할 데이터 준비---------------------------------------- 미구현부 
    let clntNo = ds_master.getCellData(i, "clntNo");
    let clntNm = ds_master.getCellData(i, "clntNm");

    // 엑셀로 업로드된 데이터들 중 화주코드와 화주명칭을 중복제거하여 입력 
    scwin.f_CheckDataIsExistNotInsert(ds_Clnt, clntNo, ds_Clnt.getColumnIndex("clntNo_Param"), clntNm, ds_Clnt.getColumnIndex("clntNm_Param"));

    // 4-1 화주번호를 항상 6자리이다. 
    if (clntNo.length != 6) {
      $c.win.alert($p, i + 1 + "줄의 화주번호 컬럼값을 잘못 입력하셨습니다. <br>화주번호는 항상 6자리 입력된값 => " + clntNo);
      ds_master.removeAll();
      return;
    }

    // 5.코일정보의 폭이    숫자로 입력되어 있는지 확인 -------------------------------------------------
    col13 = ds_master.getCellData(i, "coilWidth");
    if (scwin.fCheckIsNumber(col13) != true) {
      $c.win.alert($p, i + 1 + "줄의 코일폭 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col13);
      ds_master.removeAll();
      return;
    }

    // 6.코일정보의 길이가 숫자로 입력되어 있는지 확인 -------------------------------------------------
    col14 = ds_master.getCellData(i, "coilLength");
    if (scwin.fCheckIsNumber(col14) != true) {
      $c.win.alert($p, i + 1 + "줄의 코일길이 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col14);
      ds_master.removeAll();
      return;
    }

    // 7.재고정보의 수량이  숫자로 입력되어 있는지 확인 -------------------------------------------------
    col15 = ds_master.getCellData(i, ds_master.getColumnID(14));
    if (scwin.fCheckIsNumber(col15) != true) {
      $c.win.alert($p, i + 1 + "줄의 재고수량 컬럼값을 잘못 입력하셨습니다. <br>입력된값 => " + col15);
      ds_master.removeAll();
      return;
    }

    // 8.재고정보의 중량     숫자로 입력되어 잇는지 확인 -------------------------------------------------
    col16 = ds_master.getCellData(i, "qty");
    if (scwin.fCheckIsNumber(col16) != true) {
      $c.win.alert($p, i + 1 + "줄의 재고중량 컬럼을 잘못 입력하셨습니다. <br>입력된값 => " + col16);
      ds_master.removeAll();
      return;
    }

    // 9. 항차가  숫자로 입력되어 있는지 확인 -------------------------------------------------
    col4 = ds_master.getCellData(i, "vsslCnt");
    if (scwin.fCheckIsNumber(col4) != true) {
      $c.win.alert($p, i + 1 + "줄의 항차 컬럼을 잘못 입력하셨습니다. <br>입력된값 => " + col4);
      ds_master.removeAll();
      return;
    }
    // 9-1 항차는 항상 8자리이다. 
    if (col4.length != 8) {
      $c.win.alert($p, i + 1 + "줄의 항차 컬럼값을 잘못 입력하셨습니다. <br>항차는 항상 8자리 입력된값 => " + col4);
      ds_master.removeAll();
      return;
    }
    ds_master.modifyRowStatus(i, "C");
  }

  // 정비된 데이터셋 DS_MATER에 Loban_CD입력
  for (i = 0; i < ds_master.getTotalRow(); i++) {
    ds_master.setCellData(i, "lobranCd", scwin.loUpperLobranCd);
  }
};

//-------------------------------------------------------------------------
// 매개변수 데이터셋에 매개변수 변수의 값이 있는지 확인 
//-------------------------------------------------------------------------
scwin.f_CheckDataIsExistNotInsert = function (dataSet, cd, cd_Colunm_Index, Nm, nm_Colunm_Index) {
  // 데이터셋에 데이터가 없으면 신규열 추가 데이터 입력 
  if (dataSet.getTotalRow() < 1) {
    let row = dataSet.insertRow();
    dataSet.setCellData(row, dataSet.getColumnID(cd_Colunm_Index), cd);
    dataSet.setCellData(row, dataSet.getColumnID(nm_Colunm_Index), Nm);
  } else {
    // 데이터셋에 해당하는 데이터가 이미 있으면 return 없으면 신규 추가
    for (i = 0; i < dataSet.getTotalRow(); i++) {
      if (dataSet.getCellData(i, dataSet.getColumnID(nm_Colunm_Index)) == Nm) {
        return;
      }
    }
    let row = dataSet.insertRow();
    dataSet.setCellData(row, dataSet.getColumnID(cd_Colunm_Index), cd);
    dataSet.setCellData(row, dataSet.getColumnID(nm_Colunm_Index), Nm);
  }
};

//-------------------------------------------------------------------------
// 사용자 정의 replace 함수. value의 전체문자열에서 desti 값이 나오면 result 로 치환 
//-------------------------------------------------------------------------
scwin.fReplaceStr = function (value, Destination, Result) {
  if (value == "" || value == null) {
    return false;
  }
  let replaced_result = "";
  for (i = 0; i < value.length; i++) {
    if (value.substr(i, 1) == Destination) {
      replaced_result = replaced_result + Result;
    } else {
      replaced_result = replaced_result + value.substr(i, 1);
    }
  }
  return replaced_result;
};

//-------------------------------------------------------------------------
// 매개변수가 유효한 날짜인지 확인 
//-------------------------------------------------------------------------
scwin.fCheckIsDate = function (value) {
  let count = 0;
  let ch;
  let year;
  let month;
  let date;
  if (value.length != 8) {
    return false;
  }
  year = value.substr(0, 4);
  month = value.substr(4, 2);
  date = value.substr(6, 2);
  if (year < 1900 || year > 2200) {
    return false;
  }
  if (month < 0 || month > 12) {
    return false;
  }
  if (date < 0 || date > 31) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 매개변수가 숫자인지 확인하는 함수 
//-------------------------------------------------------------------------
scwin.fCheckIsNumber = function (value) {
  let count = 0;
  let ch;
  for (i = 0; i < value.length; i++) {
    ch = value.charAt(i);
    if (isNaN(ch)) {
      if (ch == ".") {
        count++;
      } else {
        return false;
      }
    }
  }
  if (count > 1) {
    return false;
  } else {
    return true;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_ArvDt',refEdDt:'',edFromId:'ica_stArvDt',edToId:'ica_edArvDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'화주',selectID:'retrieveCoopList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',id:'udc_clnt',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'8',objTypeCode:'Data',objTypeName:'Data','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vsslCd',nameId:'ed_vsslNm',popupID:'선박',selectID:'retrieveVsslCdInfo',style:'',validTitle:'',id:'udc_Vssl',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'4',objTypeCode:'Data',objTypeName:'Data',btnId:'btn_lineCd','ev:onclickEvent':'scwin.udc_Vssl_onClick','ev:onblurCodeEvent':'scwin.udc_Vssl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_Vssl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_cvsslMgntNo',style:'',editType:'select',maxlength:'16',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup','ev:onblur':'scwin.ed_cvsslMgntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'8'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',popupID:'작업장',selectID:'retrieveWrkPlInfo3',style:'',validTitle:'',id:'udc_wrkPl',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'Data',btnId:'btn_lineCd','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',style:'width: 214px;',maxlength:'20',objType:'Data',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',editType:'select'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo',style:'width:100px;',objType:'Data',maxlength:'10',displayFormat:'####-####-##','ev:onkeyup':'scwin.onkeyup',editType:'select',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재질 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_coilSpec',style:'width:100px;',objType:'Data',maxlength:'13',editType:'select','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'셔틀구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_shuttleClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'선적리스트내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridDownFn:'scwin.runExcel',gridUpYn:'Y',gridDownYn:'Y',gridUpFn:'scwin.uploadExcel',btnUser:'N',id:'udc_grid_up'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:onbeforeedit':'scwin.gr_master_before',editModeEvent:'onclick','ev:onafteredit':'scwin.gr_master_after','ev:onfilereadend':'scwin.gr_master_onfilereadend',fixedColumn:'2','ev:ontextimageclick':'scwin.gr_master_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'선적번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'입항일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'항차',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'선박코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column52',value:'선박명',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'본선</br>관리번호',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'화주코드',width:'100',colSpan:'',rowSpan:'2',class:'txt-red',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'화주',width:'150',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'BL',width:'140',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'계약번호',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'코일정보',width:'250',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column110',value:'재고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'작업장코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column118',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'모덱스여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'관리구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column86',value:'작업시작일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column78',value:'작업종료일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'셔틀구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'지점코드',displayMode:'label',colSpan:'',rowSpan:'2',hiddenCol:'true',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column42',value:'재질',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'폭',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'길이',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'중량(톤)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'shippingListNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'completeYn',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeOP600'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'arvDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'textImage',style:'',id:'vsslNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'cvsslMgntNo',value:'',displayMode:'label',imageClickFunction:'scwin.grid_cvsslMgntNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',style:'',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',displayFormat:'####-####-##',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilSpec',inputType:'text',style:'',value:'',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilWidth',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',maxLength:'18.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coilLength',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0',emptyValue:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##[floor]',maxLength:'18.2',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'wrkPlNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'excelempty',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'modexYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'MODEX'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'mgntClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]},{T:1,N:'w2:column',A:{width:'130',inputType:'calendar',style:'',id:'wrkStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'shuttleClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeOP606'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column113',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("qty")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column109',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00[floor]',expression:'sum("wt")',maxLength:'18.2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_addMaster',gridID:'gr_master',btnDelYn:'N',cancelFunction:'scwin.f_cancelMaster'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display: none;',id:'udc_grid_popUp'}}]}]}]}]}]})