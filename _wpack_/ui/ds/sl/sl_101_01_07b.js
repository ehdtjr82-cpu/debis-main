/*amd /ui/ds/sl/sl_101_01_07b.xml 34370 648a2f322d1f563214d6024db4e7e8ec446c54aaae9c0abf6574b5066320d0f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'scalClntNo',name:'계근대화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scalCommCd',name:'계근대품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockYn',name:'재고여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsYn',name:'실적여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockStdDt',name:'재고기준일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toClntNm',name:'양도화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'현재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preStockWt',name:'전일재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdDtStockWt',name:'기준일재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStdAdptDt',name:'작업완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateAdptDt',name:'보관료기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'입출고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scalCommCd',name:'계근대품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'데비스품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scalClntNo',name:'계근대화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'데비스화주코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sl.RetrieveScaleWorkResultCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':'','ev:submit':'scwin.submitPre'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
* @event 
* @name onpageload 
* @description 화면 초기화
*/
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.PcvsslMgntNo = $c.data.getParameter($p, 'cvsslMgntNo') ?? ''; // 본선관리번호
  scwin.nowDt = $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description onLoad 시
 */
scwin.f_OnLoad = function () {
  $c.gus.cfDisableObjects($p, [ed_clntNo, txt_clntNm, ed_commCd, txt_commNm]);
  ica_wrkStDt.setValue(scwin.nowDt.slice(0, 6) + '01');
  ica_wrkEndDt.setValue(scwin.nowDt);
  ed_stockStdDt.setValue(scwin.nowDt);
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 조회 버튼 클릭
 */
scwin.f_Retrieve = function () {
  scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name f_openPopUp 
 * @description 본선관리번호검색 팝업창 띄우기
 */
scwin.f_openPopUp = async function () {
  const data = [ed_cvsslMgntNo.getValue(),
  //본선관리번호
  '' //수출입구분코드
  ];
  const options = {
    popupName: '본선관리번호검색팝업',
    width: '1100px',
    height: '400px'
  };
  const url = '/ui/ds/sl/sl_101_01_01p.xml';
  const rtnValues = await $c.win.openPopup($p, url, options, data);
  if (rtnValues == null) return;
  ed_cvsslMgntNo.setValue(rtnValues[0]);
  hd_vsslCd.setValue(rtnValues[1]);
  txt_vsslNm.setValue(rtnValues[2]);
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 휴지통
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description Pop up 
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let pWhere; // 조회조건
  let v_clntNo, v_itemCd, v_wrkPlCd, v_docCd;
  switch (disGubun) {
    case 1:
      // 화주Like조회
      v_clntNo = '525083';
      v_itemCd = 'SCAL_CLNT'; // 사업장 조회
      v_wrkPlCd = '6E03';
      v_docCd = 'SCL_H01';
      pWhere = v_clntNo + ',' + v_itemCd + ',' + v_wrkPlCd + ',' + v_docCd;
      commonPopup.setSelectId('retrieveEdiMapping');
      commonPopup.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ed_scalClntNo.setValue(rtnList[0]);
          txt_clntNm.setValue(rtnList[1]);
          ed_clntNo.setValue(rtnList[2]);
        } else {
          ed_scalClntNo.setValue('');
          txt_clntNm.setValue('');
          ed_clntNo.setValue('');
        }
      }, pCode, pName, pClose, null, '계근대;화주코드,화주명,데비스;화주코드', '80,150,100', '4,5,6,7,8,9,10', pWhere, null, null, null, null, null, pAllSearch, '화주,화주코드,화주명');
      break;
    case 2:
      // 화주단건조회
      v_clntNo = '525083';
      v_itemCd = 'SCAL_CLNT'; // 사업장 조회
      v_wrkPlCd = '6E03';
      v_docCd = 'SCL_H01';
      pWhere = v_clntNo + ',' + v_itemCd + ',' + v_wrkPlCd + ',' + v_docCd;
      commonPopup.setSelectId('retrieveEdiMapping2016');
      commonPopup.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ed_scalClntNo.setValue(rtnList[0]);
          txt_clntNm.setValue(rtnList[1]);
          ed_clntNo.setValue(rtnList[2]);
        } else {
          ed_scalClntNo.setValue('');
          txt_clntNm.setValue('');
          ed_clntNo.setValue('');
        }
      }, pCode, pName, pClose, null, '계근대;화주코드,화주명,데비스;화주코드', '80,150,100', '4,5,6,7,8,9,10', pWhere, null, null, null, null, null, pAllSearch, '화주,화주코드,화주명');
      break;
    case 3:
      // 품목like조회
      v_clntNo = '525083';
      v_itemCd = 'SCAL_COMM'; // 사업장 조회
      v_wrkPlCd = '6E03';
      v_docCd = 'SCL_H01';
      pWhere = v_clntNo + ',' + v_itemCd + ',' + v_wrkPlCd + ',' + v_docCd;
      commonPopup.setSelectId('retrieveEdiMapping');
      commonPopup.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ed_scalCommCd.setValue(rtnList[0]);
          txt_commNm.setValue(rtnList[1]);
          ed_commCd.setValue(rtnList[2]);
        } else {
          ed_scalCommCd.setValue('');
          txt_commNm.setValue('');
          ed_commCd.setValue('');
        }
      }, pCode, pName, pClose, null, '계근대;품명코드,품명,데비스;품명코드', '80,150,100', '4,5,6,7,8,9,10', pWhere, null, null, null, null, null, pAllSearch, '품목,품명코드,품명');
      break;
    case 4:
      // 품목단건 조회
      v_clntNo = '525083';
      v_itemCd = 'SCAL_COMM'; // 사업장 조회
      v_wrkPlCd = '6E03';
      v_docCd = 'SCL_H01';
      pWhere = v_clntNo + ',' + v_itemCd + ',' + v_wrkPlCd + ',' + v_docCd;
      commonPopup.setSelectId('retrieveEdiMapping2016');
      commonPopup.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ed_scalCommCd.setValue(rtnList[0]);
          txt_commNm.setValue(rtnList[1]);
          ed_commCd.setValue(rtnList[2]);
        } else {
          ed_scalCommCd.setValue('');
          txt_commNm.setValue('');
          ed_commCd.setValue('');
        }
      }, pCode, pName, pClose, null, '계근대;품명코드,품명,데비스;품명코드', '80,150,100', '4,5,6,7,8,9,10', pWhere, null, null, null, null, null, pAllSearch, '품목,품명코드,품명');
      break;
  }
  ;
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 getValue() Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_toExcel1 
 * @description List 엑셀파일로 저장
 */
scwin.f_toExcel1 = function () {
  const excelName = '재고기준별 재고조회';
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_result, options);
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name moveRowPosition 
 * @description 포지션 이동 시 동작 제어
 */
scwin.moveRowPosition = function (rowIndex, targetGrid) {
  // 첫번째 visible 되어있는 컬럼 확인
  const totalCol = targetGrid.getTotalCol();
  let firstVisibleColIdx = 0;
  for (let i = 0; i < totalCol; i++) {
    if (targetGrid.getColumnVisible(i)) {
      firstVisibleColIdx = i;
      break;
    }
    ;
  }
  ;

  // 기존 포커스 된 컬럼 확인
  const focusedColIdx = targetGrid.getFocusedColumnIndex() ?? -1;
  const newColIdx = focusedColIdx < 0 ? firstVisibleColIdx : focusedColIdx;
  const newRowIdx = rowIndex < 0 ? 0 : rowIndex;

  // 실제 포커스
  targetGrid.setFocusedCell(newRowIdx, newColIdx);
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_search:
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_search:
      ds_result.multisort({
        sortIndex: 'wrkDt clntClsCd commNm clntNm',
        sortOrder: '1 -1 1 1'
      });
      ds_result.setJSON(ds_result.getAllJSON(), false);
      gr_result.setFocusedCell(0, 'toClntNm');
      scwin.ds_result_OnLoadCompleted();
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_result_OnLoadCompleted 
 * @description 
 */
scwin.ds_result_OnLoadCompleted = async function () {
  const rowCnt = ds_result.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, '조회된 데이터가 없습니다.');
    return;
  }
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name ed_scalClntNo_onblur 
 * @description
 * @asis for=ed_scalClntNo event=OnKillFocus()
 */
scwin.ed_scalClntNo_onblur = function (e) {
  if (ed_scalClntNo.getValue() == '') {
    ed_scalClntNo.setValue('');
    txt_clntNm.setValue('');
    ed_clntNo.setValue('');
    return;
  }
  ;
  scwin.f_chkOpenCommonPopUp(ed_scalClntNo, txt_clntNm, 2);
};

/**
 * @event 
 * @name ed_scalCommCd_onblur 
 * @description
 * @asis for=ed_scalCommCd event=OnKillFocus()
 */
scwin.ed_scalCommCd_onblur = function (e) {
  if (ed_scalCommCd.getValue() == '') {
    ed_scalCommCd.setValue('');
    txt_commNm.setValue('');
    ed_commCd.setValue('');
    return;
  }
  ;
  scwin.f_chkOpenCommonPopUp(ed_scalCommCd, txt_commNm, 4);
};

/**
 * @event 
 * @name udc_clnt_onblurCodeEvent 
 * @description 화주) code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_clnt_onblurCodeEvent = function (e) {};

/**
 * @event 
 * @name udc_clnt_onclickEvent 
 * @description 화주) 검색 버튼 클릭 시 발생
 */
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_scalClntNo.getValue(), txt_clntNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_clnt_onviewchangeNameEvent 
 * @description 화주) name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_scalClntNo, 1, false);
};

/**
 * @event 
 * @name udc_comm_onblurCodeEvent 
 * @description 품명) code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_comm_onblurCodeEvent = function (e) {};

/**
 * @event 
 * @name udc_comm_onclickEvent 
 * @description 품명) 검색 버튼 클릭 시 발생
 */
scwin.udc_comm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_scalCommCd.getValue(), txt_commNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_comm_onviewchangeNameEvent 
 * @description 품명) name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_comm_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_commNm, ed_scalCommCd, 3, false);
};

/**
 * @event 
 * @name udc_cvsslMgnt_onclickEvent 
 * @description 본선명) 검색 버튼 클릭 시 발생
 * @asis for=ed_cvsslMgntNo event=OnKillFocus()
 */
scwin.udc_cvsslMgnt_onblurCodeEvent = function (e) {
  if (ed_cvsslMgntNo.getValue() == '') {
    ed_cvsslMgntNo.setValue('');
    txt_vsslNm.setValue('');
    hd_vsslCd.setValue('');
    return;
  }
  ;
  scwin.f_openPopUp();
};

/**
 * @event 
 * @name udc_cvsslMgnt_onclickEvent 
 * @description 본선명) 검색 버튼 클릭 시 발생
 */
scwin.udc_cvsslMgnt_onclickEvent = function (e) {
  scwin.f_openPopUp();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name gridFormat
 * @description 그리드 customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case "stockWt":
      const numData = $c.num.parseFloat($p, data, 0);
      if (numData == "") return 0;
      if (numData < 0) {
        this.setCellBackgroundColor(rowIndex, colID, 'pink');
      }
      ;
      return formattedData;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'재고생성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_condition',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ica_wrkStDt',edToId:'ica_wrkEndDt',objTypeTo:'data',objTypeFrom:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'재고생성일자',titleTo:'재고생성일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_scalClntNo',placeholder:'',class:'',maxlength:'4',objType:'data','ev:onkeyup':'scwin.upperFlag',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_scalClntNo_onblur'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',style:'',hideName:'Y',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',objTypeName:'data',mandatoryCode:'false',mandatoryName:'false',readOnlyName:'true',refDataCollection:'dma_condition',code:'clntNo'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_scalCommCd',placeholder:'',style:'width:50px;',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',maxlength:'4','ev:onblur':'scwin.ed_scalCommCd_onblur'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_commNm',hideName:'Y',popupID:'',style:'',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_comm_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comm_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comm_onviewchangeNameEvent',objTypeName:'data',mandatoryName:'false',mandatoryCode:'false',readOnlyName:'true',readOnlyCode:'true',refDataCollection:'dma_condition',code:'commCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_cvsslMgnt',codeId:'ed_cvsslMgntNo',nameId:'txt_vsslNm',hideName:'Y',popupID:'',style:'',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',mandatoryCode:'true',validTitle:'본선관리번호',mandatoryName:'false',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_cvsslMgnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cvsslMgnt_onblurCodeEvent',refDataCollection:'dma_condition',code:'cvsslMgntNo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'재고여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_stockYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_condition.stockYn',mandatory:'true',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현재고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_rsltsYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_condition.rsltsYn',mandatory:'true',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'무실적제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'무실적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고기준일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_stockStdDt',pickerType:'dynamic',style:'',ref:'data:dma_condition.stockStdDt',objType:'data',title:'재고기준일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'재고기준별 재고조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_toExcel1',gridDownUserAuth:'X',gridID:'gr_result'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false',fixedColumn:'1',fixedColumnNoMove:'true',autoFitMinWidth:'1900'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',hidden:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsCd',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toClntNm',inputType:'text',value:'양도화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',value:'현재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preStockWt',inputType:'text',value:'전일재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDtStockWt',inputType:'text',value:'기준일재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntendDt',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stockMgntNo',value:'재고관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockStdAdptDt',value:'작업<br/>완료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strRateAdptDt',value:'보관료<br/>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlNm',value:'창고명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blBkNo',value:'입출고순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',value:'본선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalCommCd',value:'계근대<br/>품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',value:'데비스<br/>품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalClntNo',value:'계근대<br/>화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'데비스<br/>화주코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsCd',inputType:'select',width:'70',colMerge:'true',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'농협/축협'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사협'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개별'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toClntNm',inputType:'text',width:'150',textAlign:'left',colMerge:'true',readOnly:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preStockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDtStockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntendDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stockMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockStdAdptDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strRateAdptDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blBkNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalCommCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalClntNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'preStockWt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'stdDtStockWt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'hd_vsslCd',ref:'data:dma_condition.vsslCd'}},{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'commonPopup'}}]}]}]}]}]})