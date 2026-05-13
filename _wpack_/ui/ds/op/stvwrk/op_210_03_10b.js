/*amd /ui/ds/op/stvwrk/op_210_03_10b.xml 72140 52c6b9373da457e3789ef03f7951717b70e85aa15bcb96d9e69f59fb8924bd79 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'입항예정일자 from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'치프포맨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_wrkList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlTskCntnCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'duplCnt',name:'중복등록',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'extdCnt',name:'연장근로',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'holiCnt',name:'휴일근로',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'holiExtdCnt',name:'휴일연장',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'holiNightCnt',name:'휴일야간',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'earlyCnt',name:'조출',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'lunCnt',name:'중식',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dailyJobSubCnt',name:'일용직대체',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_workTime',style:'',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workDt',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workSeq',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNo',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNm',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occptypeCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtlOccptypeCd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpgrdCd',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stvWrkIndictNo',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'seq',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'info',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shiftClsCd',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpCd',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workClsCd',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStDt',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStHh',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndDt',name:'name17'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndHh',name:'name18'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtlTskCntnCd',name:'name19'}},{T:1,N:'w2:column',A:{dataType:'text',id:'districtCd',name:'name20'}},{T:1,N:'w2:column',A:{dataType:'text',id:'districtNm',name:'name21'}},{T:1,N:'w2:column',A:{dataType:'text',id:'duplCnt',name:'name22'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_wkrStp',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_occptypeCd_item',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_dtlOccptypeCd_item',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ds.op.stvwrk.RetrieveStvTempWrkResultListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_tr_retrieve_submit','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'scwin.sbm_tr_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ds.op.stvwrk.SaveStvTempWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'scwin.sbm_tr_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_confirm',action:'/ds.op.stvwrk.ConfirmStvStaffWrkResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_wrkList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_confirm_submitdone','ev:submiterror':'scwin.sbm_tr_confirm_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo1',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  scwin.globalVars();
  const codeOptions = [{
    grpCd: "OP316",
    compID: "acb_lc_wrkPlClsCd"
  }, {
    grpCd: "OP160",
    compID: "acb_lc_occptypeCd"
  }, {
    grpCd: "OP161",
    compID: "acb_lc_dtlOccptypeCd"
  }, {
    grpCd: "OP268",
    compID: "gr_wrkList:occpgrdCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.f_OnLoad);
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const loginDTO = $c.data.getMemInfo($p); // 공통 세션 변수
  scwin.lobranCd = loginDTO.lobranCd ?? ""; // 물류 점소 코드

  // 서버를 기준으로 현재 날짜 반환
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

  // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkStDt = scwin.vCurDate.slice(0, 6) + "01";
  scwin.bOnPopUp = false;
  scwin.staffCallBackRow = -1;
  scwin.ed_stvWrkIndictNo = "";
};

/**
 * @method
 * @name f_OnLoad
 * @description 초기값 세팅
 */
scwin.f_OnLoad = function () {
  scwin.f_SetDefaultData();
  $c.gus.cfDisableObjects($p, [acb_lc_occptypeCd, acb_lc_dtlOccptypeCd, acb_lc_wrkPlClsCd]);
};

/**
 * @method
 * @name f_SetDefaultData
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = async function () {
  // 초기값 추가 
  await $c.sbm.execute($p, sbm_combo1);
  let dltInfo, comboData;
  dltInfo = acb_lc_occptypeCd.getDataListInfo();
  comboData = $p.getComponentById(dltInfo.id).getAllJSON();
  dlt_occptypeCd_item.setJSON(comboData, false);
  dltInfo = acb_lc_dtlOccptypeCd.getDataListInfo();
  comboData = $p.getComponentById(dltInfo.id).getAllJSON();
  dlt_dtlOccptypeCd_item.setJSON(comboData, false);
  acb_lc_wrkPlClsCd.setValue("03");
  ica_ed_wrkStDt.setValue(scwin.vwrkStDt); // 입항예정일자 from	
  acb_lc_lobranCd.setValue(scwin.lobranCd);
  acb_lc_occptypeCd.setValue("01");
  acb_lc_dtlOccptypeCd.setValue("17");
  acb_lc_lobranCd.focus();

  // test
  // acb_lc_lobranCd.setValue("4AA");
  // ica_ed_wrkStDt.setValue("20250918");
};

/**
 * @method
 * @name f_Retrieve
 * @description 본선작업계획현황조회
 */
scwin.f_Retrieve = async function () {
  dma_ds_condition.set("wrkPlClsCd", acb_lc_wrkPlClsCd.getValue());
  dma_ds_condition.set("gubun", "2");

  // 검색조건 필수 입력 체크
  const retVal = await $c.gus.cfValidate($p, [acb_lc_lobranCd, ica_ed_wrkStDt]);
  if (!retVal) return;
  $c.sbm.execute($p, sbm_tr_retrieve);
};

/**
 * @method
 * @name f_Retrieve
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  let rowCnt = ds_wrkList.getTotalRow();
  for (let i = 0; i < rowCnt; i++) {
    let staffNm = ds_wrkList.getCellData(i, "staffNm");
    if (staffNm == null || staffNm == "") {
      $c.win.alert($p, '근무자를 입력하세요');
      return;
    }
    ;
  }
  ;
  if (ds_wrkList.getModifiedIndex().length != 0) {
    let retVal = await scwin.f_checkVacationDate();
    if (!retVal) return;
    const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (!retConfirm) return;
    $c.sbm.execute($p, sbm_tr_save);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상용직 실적내역"]); // @은(는) 변경된 사항이 없습니다
  }
  ;
};

/**
 * @method
 * @name f_AddRow
 * @description 행추가
 */
scwin.f_AddRow = function (gbn) {
  let row = "";
  let setData = {};
  switch (gbn) {
    case '1':
      setData["workStDt"] = ica_ed_wrkStDt.getValue();
      setData["workStHh"] = "0800";
      setData["workEndDt"] = ica_ed_wrkStDt.getValue();
      setData["workEndHh"] = "1700";
      break;
    case '2':
      row = ds_wrkList.rowPosition ?? 0;
      rowData = ds_wrkList.getRowJSON(row);
      setData["stvWrkIndictNo"] = rowData["stvWrkIndictNo"];
      setData["wrkPlNm"] = rowData["wrkPlNm"];
      setData["shiftClsCd"] = rowData["shiftClsCd"];
      setData["workStDt"] = rowData["workStDt"];
      setData["workStHh"] = rowData["workStHh"];
      setData["workEndDt"] = rowData["workEndDt"];
      setData["workEndHh"] = rowData["workEndHh"];
      setData["workClsCd"] = rowData["workClsCd"];
      setData["earlyCnt"] = rowData["earlyCnt"];
      setData["holiCnt"] = rowData["holiCnt"];
      setData["holiExtdCnt"] = rowData["holiExtdCnt"];
      setData["holiNightCnt"] = rowData["holiNightCnt"];
      setData["lunCnt"] = rowData["lunCnt"];
      setData["dailyJobSubCnt"] = rowData["dailyJobSubCnt"];
      setData["extdCnt"] = rowData["extdCnt"];
      break;
  }
  ;

  // 그리드 마지막 위치에 추가
  let lastIdx = ds_wrkList.getTotalRow();
  let focusedCol = gr_wrkList.getFocusedColumnIndex() ?? 0;
  ds_wrkList.setRowJSON(lastIdx, setData);
  gr_wrkList.setFocusedCell(lastIdx, focusedCol);
};

/**
 * @method
 * @name f_DeleteRow
 * @description 행삭제
 */
scwin.f_DeleteRow = function (gbn) {
  let rowIndex = ds_wrkList.rowPosition;
  switch (gbn) {
    case '1':
      if (ds_wrkList.getRowStatus(rowIndex) == "C") {
        ds_wrkList.removeRow(rowIndex);
      } else {
        ds_wrkList.deleteRow(rowIndex);
        gr_wrkList.setCellReadOnly(rowIndex, "chk", true);
      }
      ;
      break;
    case '2':
      let rowCnt = ds_wrkList.getRowCount();
      for (let i = 0; i < rowCnt; i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          if (ds_wrkList.getRowStatus(i) == "C") {
            ds_wrkList.removeRow(i);
          } else {
            ds_wrkList.deleteRow(i);
            gr_wrkList.setCellReadOnly(i, "chk", true);
          }
          ;
        }
        ;
      }
      ;
      break;
  }
  ;
};

/**
 * @method
 * @name f_CancelRow
 * @description 선택취소
 */
scwin.f_CancelRow = function (gbn) {
  switch (gbn) {
    case '1':
      let rowCnt = ds_wrkList.getRowCount();
      for (let i = 0; i < rowCnt; i++) {
        if (ds_wrkList.getCellData(i, "chk") == "T") {
          ds_wrkList.setCellData(i, "chk", "F");
        }
        ;
      }
      ;
      break;
  }
  ;
};

/**
 * @method
 * @name f_gridToExcel
 * @description 엑셀다운로드
 */
scwin.f_gridToExcel = function () {
  let argGrid = gr_wrkList;
  let argTitle = "하역인원실적내역";
  const totalColCnt = argGrid.getTotalCol();
  let colCnt = 0;
  for (let i = 0; i < totalColCnt; i++) {
    if (gr_wrkList.getColumnVisible(i)) {
      colCnt++;
    }
    ;
  }
  ;
  let infoArr = [{
    text: argTitle,
    rowIndex: 0,
    colSpan: colCnt,
    textAlign: 'center',
    fontSize: '16px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff'
  }];
  const options = {
    fileName: argTitle + ".xls",
    sheetName: argTitle,
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

/**
 * @method
 * @name f_openCommonPopUp
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      let arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = acb_lc_lobranCd.getValue(); //점소코드
      arrParam[3] = acb_lc_lobranCd.getValue(); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = acb_lc_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ica_ed_wrkStDt.getValue(); //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      let v_url = "/ui//ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
      let opts = {
        id: "pupup",
        popupName: "거래처별 손익 집계-상세-",
        modal: true,
        type: "browserPopup",
        width: 630,
        height: 450,
        title: "거래처별 손익 집계-상세-"
      };
      rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        txt_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(''); //사원코드
        txt_staffNm.setValue(''); //사원명
      }
      ;
      break;
    case 2:
      pCode = "P";
      pName = scwin.vCurDate;
      pWrkIndictNo = scwin.scwin.ed_stvWrkIndictNo;
      rtnList = scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        scwin.ed_stvWrkIndictNo = rtnList[0];
      } else {
        scwin.ed_stvWrkIndictNo = "";
      }
      ;
      break;
  }
};

/**
 * @method
 * @name f_openGridCommonPopUp
 * @description 그리드 팝업
 * @param gubun
 * @param row
 * @param pClose
 */
scwin.f_openGridCommonPopUp = async function (gubun, row, pClose) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 
  let pWhere; // 조회조건
  let pCode,
    pName = "";
  let pDispCnt; // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서)
  let pTitle = null; // Title명
  let pWidth; // 보여주는 각 컬럼들의 폭
  let pHidden; // 컬럼중에서 숨기는 컬럼 지정
  let pW = 500; // 팝업 가로 크기
  let pH = 400; // 팝업 세로 크기
  let pAllSearchTF = "T"; // 전체검색허용여부
  let pWtitleSearch = "사원,사원코드,사원명"; // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")

  switch (gubun) {
    case 1:
      //정규직			
      pCode = ds_wrkList.getCellData(row, "staffNo");
      pName = "";
      pWhere = acb_lc_lobranCd.getValue() + "," + ica_ed_wrkStDt.getValue();
      pDispCnt = "9";
      pTitle = "사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종,소속";
      pWidth = "70,70,70,70,50,70,50,80,80";
      pHidden = "5,7,10";
      break;
    case 2:
      //정규직			
      pCode = "";
      pName = ds_wrkList.getCellData(row, "staffNm");
      pWhere = acb_lc_lobranCd.getValue() + ',' + ica_ed_wrkStDt.getValue();
      pDispCnt = "8";
      pTitle = "사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종";
      pWidth = "70,70,70,70,50,70,50,80";
      pHidden = "5,7,9,10";
      break;
  }
  ;
  scwin.staffCallBackRow = row;
  await udc_comCode_staff.cfCommonPopUp(scwin.udc_comCode_staff_callBackFunc // 콜백받을 함수
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , pDispCnt // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , pTitle // Title순서	
  , pWidth // 보여주는 각 컬럼들의 폭	
  , pHidden // 컬럼중에서 숨기는	컬럼 지정	
  , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , pW // POP-UP뛰을때 원도우의	사용자 정의	폭
  , pH // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pAllSearchTF // 전체검색허용여부	("F")
  , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_comCode_staff_callBackFunc = function (retData) {
  let row = scwin.staffCallBackRow;
  if (!$c.gus.cfIsNull($p, retData) && retData[0] != "N/A") {
    ds_wrkList.setCellData(row, "staffNo", retData[0]);
    ds_wrkList.setCellData(row, "staffNm", retData[1]);
    ds_wrkList.setCellData(row, "occpgrdCd", retData[2]);
    ds_wrkList.setCellData(row, "occptypeCd", retData[4]);
    ds_wrkList.setCellData(row, "dtlOccptypeCd", retData[6]);
    ds_wrkList.setCellData(row, "wrkPlClsCd", retData[8]);
  } else {
    ds_wrkList.setCellData(row, "staffNo", "");
    ds_wrkList.setCellData(row, "staffNm", "");
    ds_wrkList.setCellData(row, "occpgrdCd", "");
    ds_wrkList.setCellData(row, "occptypeCd", "");
    ds_wrkList.setCellData(row, "dtlOccptypeCd", "");
    ds_wrkList.setCellData(row, "yestWrkDt", "");
    ds_wrkList.setCellData(row, "wrkPlClsCd", "");
  }
  ;
  scwin.staffCallBackRow = -1;
};

/**
 * @method
 * @name f_openGridCommonPopUp
 * @description 로컬팝업조회
 * @param pSelectID
 * @param pCode
 * @param pName
 * @param pWinCloseTF
 * @param pDispCnt
 * @param pTitle
 * @param pWidth
 * @param pHidden
 * @param pWhere
 * @param pW
 * @param pH
 * @param pTop
 * @param pLeft
 * @param pExistTF
 * @param pAllSearchTF
 * @param pWtitleSearch
 * @param pWrkDtTF
 * @param pWrkIndictNo
 * @param pCvsslMgnt
 * @return rtnList
 */
scwin.f_CommonPopUp = function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  let sW = pW == null ? "550px; " : pW + "px; ";
  let sH = pH == null ? "460px; " : pH + "px; ";
  let rtnList = new Array();
  let iDispCnt = null;
  let sTopLeft = null;
  let sWidthHeight = null;
  let sFeatures = null;
  if (pSelectID == null || pSelectID == "") {
    $c.win.alert($p, "SELECT ID는 필수 항목 입니다.");
    return;
  }
  ;
  if (pCode.slice(0, 1) == '%' || pName.slice(0, 1) == '%') {
    $c.win.alert($p, "검색어 첫번째문자로 % 는 올 수 없습니다");
    return;
  }
  ;
  iDispCnt = pDispCnt == null ? "0" : pDispCnt;
  if (parseInt(iDispCnt) > 10) {
    $c.win.alert($p, "Display개수는(MAX=10)개 까지 가능 합니다.");
    return;
  }
  ;
  if (pTop != null) {
    sTopLeft = "dialogTop:" + pTop + "px; " + "dialogLeft:" + pLeft + "px; ";
  }
  ;
  sWidthHeight = "dialogWidth:" + sW + "dialogHeight:" + sH;
  sFeatures = sWidthHeight + " " + sTopLeft + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No";
  switch (pSelectID) {
    case 'retrieveWrkIndictNoList':
      // 작업지시번호
      rtnList = scwin.retrieveWrkIndictNoList(pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo);
      break;
    default:
      $c.win.alert($p, "XML SelectID 오류!!!");
      break;
  }
  ;
  return rtnList;
};

/**
 * @method
 * @name retrieveWrkIndictNoList
 * @description 작업지시번호팝업
 * @param pSelectID
 * @param pCode
 * @param pName
 * @param pWinCloseTF
 * @param pDispCnt
 * @param pTitle
 * @param pWidth
 * @param pHidden
 * @param pWhere
 * @param sFeatures
 * @param pExistTF
 * @param pAllSearchTF
 * @param pWtitleSearch
 * @param pWrkDtTF
 * @param pWrkIndictNo
 * @param pCvsslMgnt
 * @return rtnList
 */
scwin.retrieveWrkIndictNoList = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  let iDispCnt = pDispCnt == null ? "2" : pDispCnt;
  let bWinCloseTF = pWinCloseTF == null ? "F" : pWinCloseTF;
  let bExistTF = pExistTF == null ? "F" : pExistTF;
  let bAllSearchTF = pAllSearchTF == null ? "T" : pAllSearchTF;
  let bWrkDtTF = pWrkDtTF == null ? "F" : pWrkDtTF;
  let sTitle = null;
  let sWidth = null;
  let sHidden = null;
  let sURL = null;
  let rtnList = new Array();
  let arrParm = new Array();

  // 타이틀,조회조건Title1,조회조건Title2,XML_SELECT_ID,PopupClose유무(T/F),Display칼럼개수,중복체크여부,전체검색여부
  arrParm[0] = new Array("하역작업지시번호 검색", "작업지시구분", "작업일자", pSelectID, bWinCloseTF, iDispCnt, bExistTF, bAllSearchTF, bWrkDtTF);
  if (pWtitleSearch != null) {
    let strArr = pWtitleSearch.advancedSplit(",", "t");
    if (strArr != null) {
      arrParm[0][0] = strArr[0];
      arrParm[0][1] = strArr[1];
      arrParm[0][2] = strArr[2];
    }
  }
  arrParm[1] = new Array(pCode, pName, pWrkIndictNo, pCvsslMgntNo); //PopUP Parameter-->코드,명

  v_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_02_08p.xml";
  let options = {
    id: "pupup",
    type: "browserPopup",
    width: 1000,
    height: 500,
    popupName: "거래처별 손익 집계-상세-",
    modal: true
  };
  if (bExistTF == "T") {
    rtnList = await $c.win.openPopup($p, v_url, options, arrParm);
  } else {
    rtnList = await $c.win.openPopup($p, v_url, options, arrParm);
  }
  ;
  return rtnList;
};

/**
 * @method
 * @name retrieveWrkIndictNoList
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param inObj
 * @param pairObj
 * @param disGubun
 * @param isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
  ;
};

/**
 * @method
 * @name f_InitObjects
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

/**
 * @method
 * @name f_checkVacationDate
 * @description 작업시간 Validation
 */
scwin.f_checkVacationDate = function () {
  return new Promise(resolve => {
    let staffNo = "";
    let wrkListRowCnt = ds_wrkList.getRowCount();
    let workTimeRowCnt = 0;
    let diffDay;
    for (let i = 0; i < wrkListRowCnt; i++) {
      staffNo = ds_wrkList.getCellData(i, "staffNo");
      ds_workTime.removeAll();

      //신규 실적 입력 시
      if (ds_wrkList.getRowStatusValue(i) != 2) {
        for (let j = 0; j < wrkListRowCnt; j++) {
          //삭제하려고 하는 대상은 비교dataSet에 copy하지 않는다.
          if (ds_wrkList.getRowStatusValue(j) != 2 && ds_wrkList.getCellData(j, "staffNo") == staffNo) {
            //동일한 사번의 DataRow를 모두 복사
            scwin.f_CopyDataRow(ds_wrkList, ds_workTime, j);
          }
          ;
        }
        ;
        let wrkDt = ica_ed_wrkStDt.getValue();
        let wrkStDt, wrkStHh, wrkStMm;
        let wrkEndDt, wrkEndHh, wrkEndMm;
        let wrkStDtm, wrkEndDtm;
        workTimeRowCnt = ds_workTime.getRowCount();
        for (let k = 0; k < workTimeRowCnt; k++) {
          let m,
            n = 0;
          for (let l = 0; l < wrkListRowCnt; l++) {
            n++;
            if (ds_wrkList.getCellData(l, "staffNo") == staffNo) {
              m++;
            }
            ;
            if (m == k) break;
          }
          ;
          let rowData = ds_workTime.getRowJSON(k);
          wrkStDt = rowData["workStDt"];
          wrkStHh = rowData["workStHh"];
          wrkStMm = rowData["workStHh"].slice(2, 6);
          wrkEndDt = rowData["workEndDt"];
          wrkEndHh = rowData["workEndHh"];
          wrkEndMm = rowData["workEndHh"].slice(2, 6);
          wrkStDtm = wrkStDt + wrkStHh;
          wrkEndDtm = wrkEndDt + wrkEndHh;
          staffNm = rowData["staffNm"];
          let cntNum = n + 1;
          if (!["00", "30"].includes(wrkStMm) && wrkStMm.length != 2) {
            $c.win.alert($p, cntNum + "번째의 시간은 30분 단위로 입력 가능합니다.");
            gr_wrkList.setFocusedCell(n, "workStHh", true);
            return resolve(false);
          }
          ;
          if (wrkEndMm != "00" && wrkEndMm != "30" && wrkEndMm.length != 2) {
            $c.win.alert($p, cntNum + "번째의 시간은 30분 단위로 입력 가능합니다.");
            gr_wrkList.setFocusedCell(n, "workEndHh", true);
            return resolve(false);
          }
          ;
          if (rowData["workStHh"].slice(0, 2) > "23") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "workStHh", true);
            return resolve(false);
          }
          ;
          if (rowData["workStHh"].slice(2, 4) > "59") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "workStHh", true);
            return resolve(false);
          }
          ;
          if (rowData["workEndHh"].slice(0, 2) > "24") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "workEndHh", true);
            return resolve(false);
          }
          ;
          if (rowData["workEndHh"].slice(0, 2) == "00" && rowData["workEndHh"].slice(2, 4) == "00") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "SetColumn", true);
            return resolve(false);
          }
          ;
          if (rowData["workEndHh"].slice(0, 2) == "24" && rowData["workEndHh"].slice(2, 4) > "00") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "workEndHh", true);
            return resolve(false);
          }
          ;
          if (rowData["workEndHh"].slice(2, 4) > "59") {
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
            gr_wrkList.setFocusedCell(n, "workEndHh", true);
            return resolve(false);
          }
          ;

          //입력한 작업시작일자가 조회일자이후인가
          if (wrkDt > wrkStDt) {
            $c.win.alert($p, cntNum + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
            gr_wrkList.setFocusedCell(n, "workStDt", true);
            return resolve(false);
          }
          ;

          //입력한 작업시작일자가 하루를 초과하는가
          diffDay = $c.date.diffDate($p, wrkDt, wrkStDt);
          if (diffDay > 1) {
            $c.win.alert($p, ncntNum + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
            gr_wrkList.setFocusedCell(n, "workStDt", true);
            return resolve(false);
          }
          ;

          //작업시작일자가 작업종료일자 이후 인가
          if (wrkStDt > wrkEndDt) {
            $c.win.alert($p, cntNum + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
            gr_wrkList.setFocusedCell(n, "workStDt", true);
            return resolve(false);
          }
          ;
          if (wrkStDtm > wrkEndDtm) {
            $c.win.alert($p, cntNum + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
            gr_wrkList.setFocusedCell(n, "workStDt", true);
            return resolve(false);
          }
          ;
          diffDay = $c.date.diffDate($p, wrkDt, wrkEndDt);
          if (diffDay > 1) {
            $c.win.alert($p, cntNum + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
            gr_wrkList.setFocusedCell(n, "workEndDt", true);
            return resolve(false);
          }
          ;
          let workSt = rowData["workStDt"] + rowData["workStHh"];
          let workEnd = rowData["workEndDt"] + rowData["workEndHh"];
          workSt = workSt.trim();
          workEnd = workEnd.trim();
          let startDate = workSt.toDate("YYYYMMDDHHmmss");
          let endDate = workEnd.toDate("YYYYMMDDHHmmss");
          let totalDate = (endDate - startDate) / 1000 / 60 / 60;
          if (totalDate >= 24) {
            $c.win.alert($p, n + "번째 실적 작업일이 하루가 넘습니다.");
            return resolve(false);
          }
          ;
        }
        ;
        let q = 0;
        let rowCnt = ds_workTime.getRowCount();
        for (let p = 0; p < rowCnt; p++) {
          if (ds_workTime.getRowStatusValue(p) != 2) {
            q = q + 1;
          }
          ;
        }
        ;
        if (q <= 1) break;

        //변수명 거지같게도 만들어놨다 
        let m = 0;
        let k,
          l,
          n = 0;
        for (let i = 0; i < rowCnt; a++) {
          if (ds_workTime.getRowStatus(i) == 2) {
            for (let j = i; k < rowCnt; j++) {
              if (ds_workTime.getRowStatus(j) != 2) {
                k = j;
                break;
              }
              ;
            }
            ;
          } else {
            k = m;
          }
          ;
          if (ds_workTime.getRowStatus(k + 1) == 2) {
            for (let l = k + 1; l < rowCnt; l++) {
              if (ds_workTime.getRowStatus(l) != 2) {
                n = l;
                break;
              }
            }
          } else {
            n = k + 1;
          }
          ;
          if (ds_workTime.getRowStatus(m + 1) == 2) {
            for (let l = m + 1; l < rowCnt; l++) {
              if (ds_workTime.getRowStatus(l) != 2) {
                n = l;
                break;
              }
            }
          } else {
            n = m + 1;
          }
          ;
          sEndDt = rowData["workEndDt"] + rowData["workEndHh"];
          tStDt = rowData["workStDt"] + rowData["workStHh"];
          if (rowData["workEndHh"] == "2400") {
            sEndDt = rowData["workEndDt"].toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD") + "0000";
          }
          ;
          m = n;
          if (q == m) break;
        }
        ;
      }
      ;
    }
    ;
    return resolve(true);
  });
};

/**
 * @method 
 * @name f_WorkTimeSet
 * @description 근무시간 행추가
 * @param Row
 */
scwin.f_WorkTimeSet = function (Row) {
  if (ds_wrkList.getTotalRow() > 1) {
    let beforeRowData = ds_wrkList.getRowJSON(Row - 1);
    let rowData = ds_wrkList.getRowJSON(Row);
    if (beforeRowData["staffNo"] == rowData["staffNo"] && beforeRowData["staffNm"] == rowData["staffNm"]) {
      if (beforeRowData["workEndHh"] == "2400") {
        let data = beforeRowData["workEndDt"].toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD");
        ds_wrkList.setCellData(Row, "workStDt", data);
        ds_wrkList.setCellData(Row, "workStHh", "0000");
        ds_wrkList.setCellData(Row, "workStDt", data);
      }
      ;
    }
    ;
  } else {
    let data = ica_ed_wrkStDt.getValue();
    ds_wrkList.setCellData(Row, "workStDt", data);
    ds_wrkList.setCellData(Row, "workEndDt", data);
  }
  ;
};

/**
 * @method 
 * @name f_CopyDataRow
 * @description 데이터셋 Row 복사
 * @param sourceDataset
 * @param targetDataset
 * @param sourceRow
 */
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow) {
  // asis에서 완전히 변경됨
  if (sourceRow === null || sourceRow === "") {
    targetDataset.setJSON(sourceDataset.getAllJSON());
    return;
  }
  ;
  let addIdx = targetDataset.getRowCount();
  let addJSON = sourceDataset.getRowJSON(sourceRow);
  targetDataset.setRowJSON(addIdx, addJSON);
};

/**
 * @method 
 * @name f_GetColumnNames
 * @description 데이터셋의 모든 컬럼명을 배열로 반환
 * @param dataSet
 */
// function f_GetColumnNames(dataSet) {
// 	try {
// 		if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
// 		if (dataSet.CountColumn == 0) return null;

// 		var rtnArray = new Array(dataSet.CountColumn);

// 		for (var i=0; i < dataSet.CountColumn; i++) {
// 			rtnArray[i] = dataSet.ColumnID(i+1);
// 		}

// 		if (rtnArray.length == 0)
// 			return null
// 		else
// 			return rtnArray
// 	} catch (e) {
// 		cfAlertMsg("[f_GetColumnNames] " + e.Description);
// 	}
// }

/**
 * @method 
 * @name f_AddDataRow
 * @description 데이터셋의 행을 추가하고 RowPosition을 반환
 * @param dataSet
 */
// function f_AddDataRow(dataSet){
//   	dataSet.AddRow();
//   	return dataSet.RowPosition;
// }

/**
 * @event 
 * @name sbm_tr_retrieve_submit
 * @description 조회TR submission 요청 전 처리
 */
scwin.sbm_tr_retrieve_submit = function (e) {
  //cfHideDSWaitMsg(gr_wrkList);
  $p.showProcessMessage("조회 중입니다");
  dma_ds_condition.set("lobranCd", acb_lc_lobranCd.getValue()); // 물류점소코드
  dma_ds_condition.set("wrkStDt", ica_ed_wrkStDt.getValue()); // 작업일자 from
  dma_ds_condition.set("occptypeCd", acb_lc_occptypeCd.getValue()); // 물류점소코드
  dma_ds_condition.set("dtlOccptypeCd", acb_lc_dtlOccptypeCd.getValue()); // 물류점소코드
  dma_ds_condition.set("stvWrkIndictNo", scwin.ed_stvWrkIndictNo); // // 물류점소코드, 미존재 컴포넌트 
  dma_ds_condition.set("staffNo", ed_staffNo.getValue()); // 치프포맨
};

/**
 * @event 
 * @name sbm_tr_retrieve_submitdone
 * @description 조회TR Response Status가 정상
 */
scwin.sbm_tr_retrieve_submitdone = function (e) {
  /* OnLoadCompleted */
  $p.hideProcessMessage();
  let rowCnt = ds_wrkList.getRowCount();
  // 총 조회건수 표시
  totalRows.setValue(ds_wrkList.getRowCount(rowCnt));
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다    
  }
  ;
  gr_wrkList.setFocusedCell(0, 0);
};

/**
 * @event 
 * @name sbm_tr_retrieve_submiterror
 * @description 조회TR Response Status가 오류
 */
scwin.sbm_tr_retrieve_submiterror = function (e) {
  // cfShowError(this);
  $p.hideProcessMessage();
};

/**
 * @event 
 * @name sbm_tr_save_submitdone
 * @description 저장TR Response Status가 정상
 */
scwin.sbm_tr_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name sbm_tr_save_submiterror
 * @description 저장TR Response Status가 오류
 */
scwin.sbm_tr_save_submiterror = function (e) {
  // cfShowError(this);
};

/**
 * @event 
 * @name sbm_tr_confirm_submitdone
 * @description 저장TR Response Status가 정상
 */
scwin.sbm_tr_confirm_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name sbm_tr_confirm_submiterror
 * @description 저장TR Response Status가 오류
 */
scwin.sbm_tr_confirm_submiterror = function (e) {
  // cfShowError(this);
};

//-----------------------------------------------------------------------------
//    G A U C E   C O M P O N E N T' S   E V E N T S  
//-----------------------------------------------------------------------------
/**
 * @event 
 * @name gr_wrkList_ontextimageclick
 * @description 그리드 검색버튼 이벤트
 * @param rowIndex
 * @param columnIndex
 */
scwin.gr_wrkList_ontextimageclick = async function (rowIndex, columnIndex) {
  let colId = gr_wrkList.getColumnID(columnIndex);
  let rowData = ds_wrkList.getRowJSON(rowIndex);
  let rtnList;
  switch (colId) {
    case "staffNo":
      await scwin.f_openGridCommonPopUp(1, rowIndex, "F");
      break;
    case "staffNm":
      await scwin.f_openGridCommonPopUp(2, rowIndex, "F");
      break;
    case "stvWrkIndictNo":
      scwin.bOnPopUp = true;
      let pCode = "P";
      let pName = ica_ed_wrkStDt.getValue();
      let pWrkIndictNo = rowData["stvWrkIndictNo"].replace(/\s*$/, '');
      rowData["info"] = "";
      rowData["shiftClsCd"] = "";
      rowData["wrkStpCd"] = "";
      rowData["workStDt"] = "";
      rowData["workStHh"] = "";
      rowData["workEndDt"] = "";
      rowData["workEndHh"] = "";
      rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        ds_wrkList.setCellData(rowIndex, "stvWrkIndictNo", rtnList[0]);
        ds_wrkList.setCellData(rowIndex, "wrkPlNm", rtnList[3]);
        ds_wrkList.setCellData(rowIndex, "shiftClsCd", rtnList[5]);
        ds_wrkList.setCellData(rowIndex, "workStDt", rtnList[10]);
        ds_wrkList.setCellData(rowIndex, "workStHh", rtnList[11]);
        ds_wrkList.setCellData(rowIndex, "workEndDt", rtnList[12]);
        ds_wrkList.setCellData(rowIndex, "workEndHh", rtnList[13]);
        if (ds_wrkList.getRowCount() > 0) {
          ds_wkrStp.filter();
        }
        ;
      } else {
        ds_wrkList.setCellData(rowIndex, "stvWrkIndictNo", "");
      }
      ;
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_wrkList_oneditend
 * @description 그리드 편집 끝난 경우 발생
 * @param rowIndex
 * @param columnIndex
 * @param value
 */
scwin.gr_wrkList_oneditend = async function (rowIndex, columnIndex, value) {
  // Grid PopUp : 코드 입력후 Focus 이동시
  let colId = gr_wrkList.getColumnID(columnIndex);
  let rowData = ds_wrkList.getRowJSON(rowIndex);
  const targetColumns = ['duplCnt', 'staffNm', 'stvWrkIndictNo', 'staffNo'];
  let bgColor = rowData['duplCnt'] == '1' ? '' : '#FBCED4';
  targetColumns.forEach(column => {
    this.setCellBackgroundColor(rowIndex, column, bgColor);
  });
  switch (colId) {
    case "staffNo":
    case "staffNm":
      let setColID = "";
      if (colId == "staffNo") setColID = "staffNm";else setColID = "staffNo";
      if (!["", rowData[colId]].includes(value)) {
        ds_wrkList.setCellData(rowIndex, setColID, "");
        ds_wrkList.setCellData(rowIndex, "occpgrdCd", "");
        ds_wrkList.setCellData(rowIndex, "occptypeCd", "");
        ds_wrkList.setCellData(rowIndex, "dtlOccptypeCd", "");
        scwin.f_openGridCommonPopUp(1, rowIndex, "T");
      } else if (value == "") {
        ds_wrkList.setCellData(rowIndex, "staffNo", "");
        ds_wrkList.setCellData(rowIndex, "staffNm", "");
        ds_wrkList.setCellData(rowIndex, "occpgrdCd", "");
        ds_wrkList.setCellData(rowIndex, "occptypeCd", "");
        ds_wrkList.setCellData(rowIndex, "dtlOccptypeCd", "");
      }
      ;
      scwin.f_WorkTimeSet(rowIndex);
      break;
    case "stvWrkIndictNo":
      scwin.bOnPopUp = true;
      let pCode = "P";
      let pName = ica_ed_wrkStDt.getValue();
      let pWrkIndictNo = rowData["stvWrkIndictNo"].replace(/\s*$/, '');
      ds_wrkList.setCellData(rowIndex, "wrkPlNm", "");
      ds_wrkList.setCellData(rowIndex, "shiftClsCd", "");
      ds_wrkList.setCellData(rowIndex, "wrkStpCd", "");
      rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
      if (rtnList != null) {
        ds_wrkList.setCellData(rowIndex, "stvWrkIndictNo", rtnList[0]);
        ds_wrkList.setCellData(rowIndex, "wrkPlNm", rtnList[3]);
        ds_wrkList.setCellData(rowIndex, "shiftClsCd", rtnList[5]);
        if (ds_wrkList.getTotalRow() > 0) {
          ds_wkrStp.filter();
        }
      } else {
        ds_wrkList.setCellData(row, "stvWrkIndictNo", "");
      }
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name udc_comCode_staff_onblurCodeEvent
 * @description 근무자 공통 컴포넌트 code 포커스 잃었을 때 발생
 * @param e
 */
scwin.udc_comCode_staff_onblurCodeEvent = function (e) {
  // 인원 EMEdit Focus 이동시
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), txt_staffNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_comCode_staff_onviewchangeNameEvent
 * @description 근무자 공통 컴포넌트 name value 변경 시 발생
 * @param info
 */
scwin.udc_comCode_staff_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(this, ed_staffNo, 1, false);
};

/**
 * @event 
 * @name udc_comCode_staff_onclickEvent
 * @description 근무자 공통 컴포넌트 검색 버튼 클릭 시 발생
 * @param e
 */
scwin.udc_comCode_staff_onclickEvent = function (e) {
  let disGubun = 1;
  let pCode = ed_staffNo.getValue();
  let pName = txt_staffNm.getValue();
  let pClose = 'F';
  let pAllSearch = 'F';
  scwin.f_openCommonPopUp(disGubun, pCode, pName, pClose, pAllSearch);
};

/**
 * @event 
 * @name btn_fieldClear_onclick
 * @description 초기화 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * @event 
 * @name btn_retrieve_onclick
 * @description 조회 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_trigger1_onclick
 * @description 행복사 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_AddRow("2");
};

/**
 * @event 
 * @name rowAdd
 * @description 행추가 버튼 클릭 시 발생
 */
scwin.rowAdd = function () {
  scwin.f_AddRow('1');
};

/**
 * @event 
 * @name rowDel
 * @description 행삭제 버튼 클릭 시 발생
 */
scwin.rowDel = function () {
  scwin.f_DeleteRow('1');
};

/**
 * @event 
 * @name btn_save_onclick
 * @description 저장 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_trigger2_onclick
 * @description 선택삭제 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_DeleteRow('2');
};

/**
 * @event 
 * @name btn_trigger2_onclick
 * @description 선택취소 버튼 클릭 시 발생
 * @param e
 */
scwin.btn_trigger3_onclick = function (e) {
  scwin.f_CancelRow('1');
};

/**
 * @method 
 * @name gridFormat
 * @description 그리드 displayFormatter
 * @param data
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case "duplCnt":
      let returnVal = data == 1 ? 'N' : 'Y';

      // 행 배경색 변경
      let bgColorVal = data == 1 ? '' : '#FBCED4';
      const chgColArray = ['duplCnt', 'staffNm', 'stvWrkIndictNo', 'occpgrdCd', 'staffNo'];
      chgColArray.forEach(column => {
        gr_wrkList.setCellBackgroundColor(rowIndex, column, bgColorVal);
      });
      return returnVal;
    default:
      break;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',validExp:'점소:yes',objType:'key',sortMethod:'ascending',sortOption:'value',visibleRowNum:'15',emptyIndex:'-1',emptyItem:'true',displayMode:'value delim label',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_wrkPlClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근무일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_wrkStDt',pickerType:'dynamic',style:'',mandatory:'true',title:'근무일자'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'btn_PopUp2',style:'',codeId:'ed_staffNo',nameId:'txt_staffNm',id:'udc_comCode_staff',selectID:'retrieveStvArrangementFulltimeManList','ev:onclickEvent':'scwin.udc_comCode_staff_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_staff_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',editTypeCode:'select','ev:onviewchangeNameEvent':'scwin.udc_comCode_staff_onviewchangeNameEvent',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_occptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',emptyItem:'true',emptyIndex:'0',emptyValue:'전체',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_dtlOccptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',emptyIndex:'0',emptyItem:'true',emptyValue:'전체',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 실적내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridID:'gr_wrkList',gridDownFn:'scwin.f_gridToExcel',btnUser:'Y',gridUpYn:'N',gridUpObjType:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_wrkList_ontextimageclick','ev:oneditend':'scwin.gr_wrkList_oneditend',columnMove:'true',sortable:'true',resize:'true',gridName:'근무시간'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2',value:'Chk'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업일자',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업<br/>순번',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'중복<br/>등록',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'성명',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소속',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'직종',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'작업<br/>지시번호',width:'100',colSpan:'',rowSpan:'2',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상세직종',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'직급',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column31',value:'근무',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'연장근로',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'휴일근로',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'휴일연장',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'휴일야간',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'조출',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'중식',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'일용직대체',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'등록자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'사번',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'시작일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'시작시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'종료일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'종료시간',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'calendar',width:'100',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSeq',inputType:'text',width:'70',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'duplCnt',inputType:'text',width:'70',readOnly:'true',textAlign:'center',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'textImage',width:'70',editModeEvent:'onclick',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',width:'70',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeCd',inputType:'select',width:'70',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_occptypeCd_item'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'textImage',width:'100',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlOccptypeCd',inputType:'select',width:'100',textAlign:'center',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_dtlOccptypeCd_item'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'select',width:'70',textAlign:'center',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'',rowMouseOver:'',nodeset:'',width:'',selectedRowColor:'',label:'',visibleRowNum:'',autoFit:'',value:'',rowMouseOverColor:'',height:''}}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'workStDt',displayMode:'label',dataType:'date',textAlign:'center',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workStHh',displayMode:'label',dataType:'time',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'workEndDt',displayMode:'label',dataType:'date',textAlign:'center',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workEndHh',displayMode:'label',textAlign:'center',dataType:'time',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'extdCnt',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:'',editModeEvent:'onclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'holiCnt',displayMode:'label',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'holiExtdCnt',displayMode:'label',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'holiNightCnt',displayMode:'label',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'earlyCnt',displayMode:'label',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'lunCnt',displayMode:'label',textAlign:'center',editModeEvent:'onclick',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'dailyJobSubCnt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'staffNo',displayMode:'label',maxLength:'6',textAlign:'center',mandatory:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',EngYn:'N',gridID:'gr_wrkList',rowAddUserAuth:'C',rowDelUserAuth:'C',rowAddFunction:'scwin.rowAdd',rowDelFunction:'scwin.rowDel'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger3',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})