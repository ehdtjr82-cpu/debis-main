/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_69b.xml 31879 e22a161f33675bb78b82c5d4231321a874394f7a90e88148fe4514f9873bfce8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Present',saveRemovedData:'true','ev:ondataload':'scwin.ds_Present_ondataload','ev:oncelldatachange':'scwin.ds_Present_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prdtMil',name:'제품군',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'seq',name:'NO',dataType:'number',defaultValue:'0',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'품명코드',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'clntCommNm',name:'품명',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'qtyUnit',name:'단위',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'orgQty',name:'정품수량',dataType:'number',defaultValue:'0',encYN:''}},{T:1,N:'w2:column',A:{id:'damQty',name:'파손품(반품)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'trialQty',name:'장기재고재판 판정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'disuseQty',name:'장기재고폐기 판정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totQty',name:'총계',dataType:'number',defaultValue:'0',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'warpQty',name:'휨(휨 추정)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'',defaultValue:'',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'clntQty',name:'전산수량(크나우프)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'differQty',name:'차이',dataType:'number',defaultValue:'0',encYN:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'diffCause',name:'차이원인',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드(동원)',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'기준일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBoralInventoryUploadCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_Present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.transwrkrslts.MergeBoralInventoryUploadCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_Present","key":"IN_DS1", "action":"modified"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 현재년월일을 구한다.	
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_adptDt.setValue(scwin.strFromDate);
  gr_InIntendInformation.setReadOnly("grid", false);
};
// 조회
scwin.f_Retrieve = async function () {
  if (ed_adptDt.getValue() == '' || ed_adptDt.getValue().length < 8) {
    await $c.win.alert($p, "기준일자를 정확하게 입력하여 주세요.");
    ;
    ed_adptDt.focus();
    return;
  }
  if (acb_wrkPlCd.getValue() == "") {
    await $c.win.alert($p, "작업장을 선택하여 주시기 바랍니다.");
    acb_wrkPlCd.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_AddRow = function () {
  let index = ds_Present.insertRow();
  ds_Present.setRowPosition(index);
};

//  행삭제
scwin.f_DeleteRow = function () {
  let index = ds_Present.getRowPosition();
  let status = ds_Present.getRowStatus(index);
  if (status == "C") {
    ds_Present.removeRow(index);
  } else {
    ds_Present.deleteRow(index);
  }
};

//  행전체삭제
scwin.f_AllDeleteRow = function () {
  for (let idx = ds_Present.getRowCount() - 1; idx >= 0; idx--) {
    if (ds_Present.getRowStatus(idx) == "C") {
      ds_Present.removeRow(idx);
    } else {
      ds_Present.deleteRow(idx);
    }
  }
};

// 취소
scwin.f_UndoRow = function () {
  let index = ds_Present.getRowPosition();
  let status = ds_Present.getRowStatus(index);
  if (status == "C") {
    ds_Present.removeRow(index);
  } else {
    ds_Present.undoRow(index);
  }
};

// 저장
scwin.f_Save = async function () {
  if (ds_Present.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  //let valChk = await $c.gus.cfValidate([ed_adptDt, acb_wrkPlCd], null, true);   //ASIS에는  validExp 가 없으면 처리 하지 않는 듯?
  let valChk = await $c.gus.cfValidate($p, [ed_adptDt], null, true);
  if (!valChk) {
    return false;
  }
  let valChk2 = await $c.gus.cfValidate($p, [gr_InIntendInformation], null, true);
  if (valChk2) {
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk === true) {
      let apdtDt = ed_adptDt.getValue();
      let wrkPlCd = acb_wrkPlCd.getValue();
      for (let i = 0, num = ds_Present.getRowCount(); i < num; i++) {
        ds_Present.setCellData(i, "adptDt", apdtDt);
        ds_Present.setCellData(i, "wrkPlCd", wrkPlCd);
      }
      $c.sbm.execute($p, sbm_save);
    }
  }
};

// 그리드 데이터 엑셀로 다운
scwin.f_runExcel = async function () {
  let totalCount = ds_Present.getRowCount();
  if (totalCount < 1) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!chk) {
    return;
  }
  let wrkPlCdNm = acb_wrkPlCd.getSelectedRow().label;
  let sheetName = '크나우프 재고_' + wrkPlCdNm + "_" + ed_adptDt.getValue();
  const options = {
    fileName: sheetName + ".xlsx",
    sheetName: sheetName,
    startRowIndex: 2,
    //그리드 데이터가 그려지기 시작할 행 인덱스
    useHeader: true //그리드의 헤더 사용 여부
  };
  let colSpan = 0;
  for (let i = 0, num = gr_InIntendInformation.getTotalCol(); i < num; i++) {
    if (gr_InIntendInformation.getCellInfo(i).options.hidden !== "true") {
      colSpan++;
    }
  }
  const infoArr = [
  //제목
  {
    rowIndex: 0 //제목을 표시할 행 index
    ,
    colIndex: 0 //제목을 표시할 열 index
    ,
    rowSpan: 1 //병합할 행의 수
    ,
    colSpan: colSpan //병합할 열의 수
    ,
    text: "크나우프 재고내역" //표시할 내용(제목)
    ,
    textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
    ,
    fontSize: "18px" //폰트 size
    ,
    fontName: "돋움체" //폰트이름 
    ,
    drawBorder: false //cell의 border 지정(true, false)
  }];
  $c.data.downloadGridViewExcel($p, gr_InIntendInformation, options, infoArr);
};

//조회조건 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_mainData]);
  acb_wrkPlCd.setValue("4W05"); //기흥창고로 초기화	
  ed_commCd.setValue("");
  ed_commNm.setValue("");
  ed_adptDt.setValue(scwin.strFromDate);
  ed_adptDt.focus();
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
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

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 품명 팝업			 
      udc_comCodeComm.setSelectId("retrieveCommGoodsInfo");
      udc_comCodeComm.cfCommonPopUp(scwin.udc_comCodeComm_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      return;
  }
};
scwin.udc_comCodeComm_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, ed_commNm); // 품명코드, 품명명	
};

// 엑셀 파일 업로드
scwin.f_Import = async function () {
  // 엑셀파일을 Import하기 위한 필수 조건 체크
  let chk = await $c.gus.cfValidate($p, [ed_adptDt], null, true);
  if (!chk) {
    return;
  }
  if (acb_wrkPlCd.getValue() == "") {
    await $c.win.alert($p, "작업장은 필수 입력 항목입니다.");
    return;
  }
  let wrkPlCdNm = acb_wrkPlCd.getSelectedRow().label;
  let adptDt = ed_adptDt.getValue();
  let msg = adptDt.substring(0, 4) + "년 " + adptDt.substring(4, 6) + "월 " + adptDt.substring(6, 8) + "일 " + wrkPlCdNm + " 재고 업로드 하시겠습니까?";
  let chk2 = await $c.win.confirm($p, msg);
  if (!chk2) {
    return;
  }
  ds_Present.removeAll();
  let uploadType = udc_topGrdBtn.getUpExt();
  let options = null;
  if (uploadType == "0") {
    options = {
      "status": "C",
      "headerExist": 1,
      "type": "1",
      "startRowIndex": 2,
      "footerExist": 0
    };
  } else {
    options = {
      "status": "C",
      "startRowIndex": 4,
      "type": "1"
    };
  }
  if (options != null) {
    await udc_topGrdBtn.uploadGridViewExcel(gr_InIntendInformation, options);
  }
};

// 데이터에 ',', ' ' 값이 있을경우 제거
scwin.f_DataFomatChg = function (value) {
  let temp = new String();
  temp = value;
  temp = temp.replace(/\'/gi, "");
  temp = temp.replace(/,/gi, "");
  temp = temp.replace(/ /gi, "");
  return temp;
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_Present.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalRows.setValue(ds_Present.getRowCount());

  // //정렬
  // var options = {};
  // options.sortIndex = "prdtMil clntCommCd clntCommNm";
  // options.sortOrder = "1 1 1";

  // ds_Present.multisort( options );

  // for(var i = 0; i < ds_Present.getRowCount(); i++) {
  //     if(ds_Present.getCellData(i, "differQty") != 0) {
  //         gr_InIntendInformation.setCellColor(i, "differQty", "red")
  //     }
  // }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != "0") {
    return;
  }
  await $c.win.alert($p, "성공적으로 저장되었습니다");
  $c.gus.cfEnableObjects($p, [ed_adptDt, acb_wrkPlCd]);
  scwin.f_Retrieve();
};
scwin.ds_Present_ondataload = function () {
  scwin.updateDifferQtyCellColor();
};
scwin.ds_Present_oncelldatachange = function (info) {
  if (info.colID == "differQty") {
    scwin.updateDifferQtyCellColor();
  }
};
scwin.updateDifferQtyCellColor = function () {
  //차이가 0이면 검은색, 아니면 빨간색으로 처리한다.
  for (let idx = 0, num = ds_Present.getRowCount(); idx < num; idx++) {
    let differQty = Number(ds_Present.getCellData(idx, "differQty"));
    gr_InIntendInformation.setCellColor(idx, "differQty", differQty == 0 ? "balck" : "red");
  }
};
scwin.gr_InIntendInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntCommNm") {
    if (ds_Present.getRowStatus(rowIndex) == "C") {
      //신규일때만 활성화
      gr_InIntendInformation.setReadOnly("column", "clntCommNm", false);
    } else {
      gr_InIntendInformation.setReadOnly("column", "clntCommNm", true);
    }
  }
};
scwin.gr_InIntendInformation_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = ds_Present.getColumnID(columnIndex);
  if (columnId == "clntCommNm") {
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc, ds_Present.getCellData(rowIndex, "commCd") // 화면에서의 ??? Code Element의	Value
    , "" // 화면에서의 ??? Name Element의	Value
    , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , "품목코드,품명,거래처품목코드" // Title순서	
    , '105,190,70' // 보여주는 각 컬럼들의 폭	
    , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
    , ',,,T3' //컨테이너 벌크구분을 넘김
    , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
    , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "품목/품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};
scwin.udc_comCodeGrid_callBackFunc = function (rtnList) {
  let row = ds_Present.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_Present, row, "commCd", "clntCommNm", []);
  let clntCommCd = rtnList[9] + "";
  ds_Present.setCellData(row, "clntCommCd", clntCommCd); //"11S001";
};

//엑셀파일 업로드시 호출
scwin.gr_InIntendInformation_onfilereadend = async function (value) {
  if (ds_Present.getCellData(ds_Present.getRowCount() - 1, ds_Present.getColumnID(0)) == "합계") {
    ds_Present.removeRow(ds_Present.getRowCount() - 1); //합계 행 지운다.
  }
  let adptDt = ed_adptDt.getValue();
  let wrkPlCd = acb_wrkPlCd.getValue();
  let rowCount = ds_Present.getRowCount();
  for (let i = 0; i < rowCount; i++) {
    // 품명코드(C열 3),품명(D열 4),정품수량(F 6), 파손품(G 7), 장기재고(H 8), 장기재고(I 9), 총계(J 10), 휨(K 11), 비고(L 12), 전산수량(M 13), 차이(N 14), 차이원인(O 15)
    let colNum = ds_Present.getTotalCol();
    for (let j = 0; j < colNum; j++) {
      let columnID = ds_Present.getColumnID(j);
      let data = ds_Present.getCellData(i, columnID);
      if (columnID == "clntCommCd" && data == "") {
        await $c.win.alert($p, "업로드 파일의 데이터가 잘못되었습니다.<br/>" + "[" + i + "] 번째 행의 [품명코드] 값이 없습니다.<br/>사용하신 CVS파일의 데이터를 확인 후,<br/>다시 업로드하시길 바랍니다.");
        ds_Present.removeAll();
        totalRows.setValue(ds_Present.getRowCount());
        return;
      }
      switch (columnID) {
        case "adptDt":
          ds_Present.setCellData(i, columnID, adptDt);
          break;
        case "wrkPlCd":
          ds_Present.setCellData(i, columnID, wrkPlCd);
          break;
        case "orgQty":
        case "damQty":
        case "trialQty":
        case "disuseQty":
        case "totQty":
        case "warpQty":
        case "clntQty":
        case "differQty":
          let numberData = Number(scwin.f_DataFomatChg(data));
          if (Number.isNaN(numberData) || !Number.isFinite(numberData)) numberData = 0;
          ds_Present.setCellData(i, columnID, numberData.toString());
          break;
        case "rmk":
        case "diffCause":
          ds_Present.setCellData(i, columnID, data.trim());
          break;
        default:
          ds_Present.setCellData(i, columnID, scwin.f_DataFomatChg(data)); // 항목에 공백이나 콤마 값이 있을경우 제거
          break;
      }
    }
  }
  ds_Present.modifyAllStatus("C");
  totalRows.setValue(ds_Present.getRowCount());
};
scwin.udc_comCodeComm_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 1);
};
scwin.udc_comCodeComm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_commCd.getValue(), ed_commNm.getValue(), 'F', 'F');
};
scwin.udc_comCodeComm_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 1, false);
};
scwin.acb_wrkPlCd_oneditkeyup = function (info, e) {
  let inputId = this.id + "_input";
  let input = document.getElementById(inputId);
  if (input != null) input.style.textTransform = 'uppercase';
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_adptDt',pickerType:'dynamic',style:'',objType:'data',mandatory:'true',validExp:'기준일자:yes:length=8',ref:'data:dma_Query.adptDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkPlCd',search:'start',style:'width:150px; text-transform:uppercase;',mandatory:'true',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_Query.wrkPlCd',emptyItem:'true',emptyIndex:'-1','ev:oneditkeyup':'scwin.acb_wrkPlCd_oneditkeyup'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기흥창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4W05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오류창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1W04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'광주창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5W01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명(동원)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'max-width:300px;',codeId:'ed_commCd',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8',UpperFlagCode:'1',nameId:'ed_commNm',id:'udc_comCodeComm',objTypeName:'data',selectID:'retrieveCommGoodsInfo',refDataCollection:'dma_Query',code:'commCd','ev:onclickEvent':'scwin.udc_comCodeComm_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeComm_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_comCodeComm_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 재고업로드',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpUserAuth:'C',gridDownUserAuth:'X',btnUser:'N',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'Y',templateYn:'N',gridDownFn:'scwin.f_runExcel',gridUpFn:'scwin.f_Import',gridID:'gr_InIntendInformation'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Present',id:'gr_InIntendInformation',style:'',visibleRowNum:'13',visibleRowNumFix:'true',autoFitMinWidth:'1700','ev:oncellclick':'scwin.gr_InIntendInformation_oncellclick',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_InIntendInformation_ontextimageclick',dataName:'크나우프 재고업로드',validExp:'clntCommCd:품명코드:yes:key,clntCommNm:픔명:yes:key','ev:onfilereadend':'scwin.gr_InIntendInformation_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'제품군',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'NO',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명코드',width:'150',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명',width:'200',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'단위',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'정품수량',width:'350',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'*휨<br/>(휨 추정)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column43',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column40',value:'정품수량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'품명코드<br/>(동원)',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'정품<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'파손품<br/>(반품)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'장기재고<br/>*재판 판정*',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'장기재고<br/>*폐기 판정*',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'전산수량<br/>(*크나우프)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'차이',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column50',value:'차이원인',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'prdtMil',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'50',textAlign:'center',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'120',textAlign:'center',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommNm',inputType:'textImage',width:'180',textAlign:'left',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qtyUnit',inputType:'text',width:'70',textAlign:'center',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgQty',inputType:'text',width:'100',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'damQty',inputType:'text',width:'80',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trialQty',inputType:'text',width:'100',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'disuseQty',inputType:'text',width:'100',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totQty',inputType:'text',width:'80',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'25',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'warpQty',displayMode:'label',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15',dataType:'number'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntQty',displayMode:'label',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'differQty',displayMode:'label',textAlign:'right',defaultValue:'0',displayFormat:'#,##0',allowChar:'0-9',maxLength:'25',excelFormat:'',dataType:'number'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'diffCause',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',textAlign:'center',noDisabledOnReadOnly:'true',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'orgQty\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'damQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'trialQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'disuseQty\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'totQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'warpQty\')'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'clntQty\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM(\'differQty\')'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddUserAuth:'C',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',gridID:'gr_InIntendInformation',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow',rowDelUserAuth:'D',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.f_AllDeleteRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'list-box'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'1. 타이틀을 제외한 4번째 행부터 엑셀 업로드 됩니다.',class:'',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'2. 엑셀업로드 시 콤마(,), 작은따옴표(\'), 공백, 텍스트 줄바꿈에 유의하시길 바랍니다.',class:'',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'3. 엑셀업로드 시 품명코드(동원)은 거래처품명코드에 따라 자동매핑됩니다.',class:'',escape:'false'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommGoodsInfo',codeId:'',popupTitle:'',nameId:'',style:'width:2366px; height:26px;display: none;',id:'udc_comCodeGrid'}}]}]}]}]}]})