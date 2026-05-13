/*amd /ui/ds/lo/edimgnt/lo_300_01_01b.xml 27253 c24c7b4f26aad706c128aa7748faeb3d86df28abe7ea14870998cfd9a2875c23 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'msn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'hsn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'blNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yardCd',name:'장치장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yardNm',name:'장치장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'기간종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutAdmitNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutAdmitPattern',name:'반출승인유형',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CarryingOutAdmissionReceivePresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'msn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'hsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reportDtm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approvalAdmitCls',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dropAdmitCls',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'name13',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmtSum',name:'name14',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nmCmpy',name:'상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packKnd',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wtUnit',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rcvCls',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.edimgnt.RetrieveCarryingOutAdmissionReceivePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_CarryingOutAdmissionReceivePresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_CarryingOutAdmissionReceivePresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

scwin.onpageload = function () {
  // 공통코드 적용
  const codeOptions = [{
    grpCd: "OP134",
    compID: "acb_lc_crryoutAdmitPattern,gr_CarryingOutAdmissionReceivePresent:crryoutAdmitPattern"
  }, {
    grpCd: "SD154",
    compID: "gr_CarryingOutAdmissionReceivePresent:approvalAdmitCls,gr_CarryingOutAdmissionReceivePresent:dropAdmitCls"
  }, {
    grpCd: "SD136",
    compID: "gr_CarryingOutAdmissionReceivePresent:rcvCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
  acb_lc_dtCls.setValue('A');
};

/**
 * udc onload
 */
scwin.onUdcCompleted = function () {
  // UDC 초기값 설정
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);

  // focus
  ed_mrn.focus();
};

/**
 * 장치장 팝업 callback
 */
scwin.udc_comCode_yard_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_yardCd, ed_yardNm);
};

/**
 * 장치장 팝업 button click
 */
scwin.udc_comCode_yard_onclickEvent = async function (e) {
  if ($c.util.isEmpty($p, dma_condition.get("yardCd"))) {
    udc_comCode_yard.cfCommonPopUp(scwin.udc_comCode_yard_callBackFunc, ed_yardCd.getValue(), ed_yardNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, "장치장,장치코드,장치명", null);
  }
};

/**
 * 장치장 팝업 code onblur
 */
scwin.udc_comCode_yard_onblurCodeEvent = function (e) {
  const yardCd = ed_yardCd.getValue();
  if (!$c.util.isEmpty($p, yardCd)) {
    udc_comCode_yard.cfCommonPopUp(scwin.udc_comCode_yard_callBackFunc, yardCd, "", "T", null, null, null, null, null, null, null, null, null, null, null, "장치장,장치코드,장치명", null);
  }
};

/**
 * 장치장 팝업 name onviewchange
 */
scwin.udc_comCode_yard_onviewchangeNameEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if (oldValue != newValue) {
    udc_comCode_yard.cfCommonPopUp(scwin.udc_comCode_yard_callBackFunc, "", newValue, "T", null, null, null, null, null, null, null, null, null, null, null, "장치장,장치코드,장치명", null);
  }
};

/**
 * [반출승인 강제등록] 팝업 호출
 */
scwin.btn_print4_onclick = function (e) {
  // json으로 넘기고 싶은데 as-is 형식 유지
  const arg = new Array();
  arg[0] = ed_mrn.getValue();
  arg[1] = ed_msn.getValue();
  arg[2] = ed_hsn.getValue();
  arg[3] = ed_blNo.getValue();
  arg[4] = acb_lc_crryoutAdmitPattern.getValue();

  // 팝업 옵션 설정
  const options = {
    id: "lo_300_01_01p",
    type: "browserPopup",
    popupName: "반출승인강제등록",
    width: 1000,
    height: 700
  };

  // 상세화면 호출
  $c.win.openPopup($p, "/ui/ds/lo/edimgnt/lo_300_01_01p.xml", options, arg);
};

/**
 * 조회조건 초기화
 */
scwin.btn_fieldClear_onclick = function (e) {
  dma_condition.setEmptyValue();
  acb_lc_dtCls.setValue('A');
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);

  // focus
  ed_mrn.focus();
};

/**
 * 조회
 */
scwin.btn_retrieve_onclick = async function (e) {
  if (ed_mrn.getValue() === "" && ed_blNo.getValue() === "" && ed_yardCd.getValue() === "" && (ed_dtFrom.getValue() === "" || ed_dtTo.getValue() === "") && ed_crryoutAdmitNo.getValue() === "" && acb_lc_crryoutAdmitPattern.getValue() === "") {
    $c.gus.cfAlertMsg($p, "MRN, BL NO, 장치장, 조회일자, 신고번호, 반출승인유형 중의 한가지 조건은 입력하셔야 합니다.");
    return;
  }
  if (ed_dtFrom.getValue() == "" || ed_dtTo.getValue() == "") {
    dma_condition.set("dtCls", "");
  }

  // keyin
  if (WebSquare.util.parseFloat(ed_dtFrom.getValue()) > WebSquare.util.parseFloat(ed_dtTo.getValue())) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.").then(r => {
      ed_dtFrom.focus();
    });
    return false;
  }

  // make uppercase
  const {
    ...rest
  } = dma_condition.getJSON();
  dma_condition.set("mrn", rest.mrn.toUpperCase());
  dma_condition.set("blNo", rest.blNo.toUpperCase());
  dma_condition.set("crryoutAdmitNo", rest.crryoutAdmitNo.toUpperCase());
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 callback
 */
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_CarryingOutAdmissionReceivePresent.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, "[반출승인 수신현황] " + MSG_CM_ERR_003);
    ds_CarryingOutAdmissionReceivePresent.removeAll();
  } else {
    gr_CarryingOutAdmissionReceivePresent.setFocusedCell(0, "crryoutAdmitNo");
    total.setValue(nCnt);
  }
};

/**
 * 수신일자 format
 */
scwin.format_rcvDt = function (val) {
  return $c.date.formatDate($p, val.slice(0, 8), "date");
};

/**
 * 통보일시 format
 */
scwin.format_reportDtm = function (val) {
  return $c.date.formatDateTime($p, val.slice(0, 12), "yyyy/MM/dd HH:mm");
};

/**
 * excel download
 */
scwin.gridToExcel = function () {
  const grdId = this.opts.gridID;
  const grdObj = $c.util.getComponent($p, grdId);
  const excelTitle = "반출승인 수신현황";
  const excelSubtitle = `MRN | ${ed_mrn.getValue()} | MSN | ${ed_msn.getValue()} | HSN | ${ed_hsn.getValue()} | ` + `BL NO | ${ed_blNo.getValue()} | 장치장 | ${ed_yardNm.getValue()} | ` + `${acb_lc_dtCls.getSelectedRow().label} | ${ed_dtFrom.getValue()} ~ ${ed_dtTo.getValue()} | ` + `신고번호 | ${ed_crryoutAdmitNo.getValue()} | 반출승인유형 | ${acb_lc_crryoutAdmitPattern.getSelectedRow().label}`;
  const excelMurgeCnt = grdObj.hiddenList.filter(val => val === false).length;
  const options = {
    fileName: `${excelTitle}.xlsx`,
    sheetName: excelTitle,
    startRowIndex: 3,
    bodyWordwrap: true,
    evenRowBackgroundColor: "#f5fff5"
  };
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: excelMurgeCnt,
    text: excelTitle,
    textAlign: "center",
    drawBorder: false,
    fontSize: "16px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: excelMurgeCnt,
    text: excelSubtitle,
    textAlign: "left",
    drawBorder: false,
    fontSize: "10px"
  }];
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 90px;text-transform: uppercase;',objType:'data',mandatory:'false',maxlength:'11',ref:'data:dma_condition.mrn',allowChar:'a-zA-Z0-9',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN-HSN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:50px;',objType:'data',maxlength:'4',allowChar:'0-9',ref:'data:dma_condition.msn',validateOnInput:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:50px;',maxlength:'4',mandatory:'false',allowChar:'0-9',ref:'data:dma_condition.hsn',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL NO ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;text-transform: uppercase;',objType:'data',mandatory:'false',maxlength:'20',ref:'data:dma_condition.blNo',allowChar:'a-zA-Z0-9',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveWrkPlInfo',style:'',codeId:'ed_yardCd',nameId:'ed_yardNm',mandatoryCode:'false',maxlengthCode:'',UpperFlagCode:'1',id:'udc_comCode_yard',popupTitle:'장치장,장치코드,장치명',popupGridHeadTitle:'작업장코드,작업장명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_comCode_yard_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_yard_onviewchangeNameEvent',code:'yardCd',refDataCollection:'dma_condition',name:'yardNm',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_comCode_yard_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_dtCls',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.dtCls',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수신일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인취하일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'통보일시'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_condition',refEdDt:'dtTo',refStDt:'dtFrom',style:'',edFromId:'ed_dtFrom',edToId:'ed_dtTo',mandatoryFrom:'false',mandatoryTo:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_crryoutAdmitNo',placeholder:'',style:'width:150px;text-transform: uppercase;',objType:'data',mandatory:'false',maxlength:'20',ref:'data:dma_condition.crryoutAdmitNo',validateOnInput:'true',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출승인유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_crryoutAdmitPattern',search:'start',style:'width: 230px;',submenuSize:'auto',ref:'data:dma_condition.crryoutAdmitPattern',visibleRowNum:'10',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',chooseOptionValue:'$blank'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출승인 수신현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridUpYn:'N',gridID:'gr_CarryingOutAdmissionReceivePresent',gridDownFn:'scwin.gridToExcel',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_CarryingOutAdmissionReceivePresent',id:'gr_CarryingOutAdmissionReceivePresent',style:'',visibleRowNum:'14',readOnly:'true',autoFit:'lastColumn',focusMode:'row',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'반출승인번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'MRN',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'MSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'HSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'BL NO',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'통보일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'보세구역',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'승인유형',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'승인여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'취하여부',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'승인일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'반출여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'관세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'과세금액합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',value:'선박명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'입항일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'대표자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'포장종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'포장개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'중량단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column43',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'수신구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'수신일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reportDtm',inputType:'calendar',width:'120',calendarValueType:'yearMonthDateTime',displayFormatter:'scwin.format_reportDtm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bondZoneNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'crryoutAdmitPattern',inputType:'select',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'approvalAdmitCls',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dropAdmitCls',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'admitDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'taxnAmtSum',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'arrvlportDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'nmCmpy',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repstNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'packKnd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'packCnt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wtUnit',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.000',dataType:'number',excelCellType:'number',excelFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'rcvCls',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'rcvDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',displayFormatter:'scwin.format_rcvDt'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right',expression:'SUM("cstmdtAmt")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column62',value:'',displayMode:'label',textAlign:'right',expression:'SUM("taxnAmtSum")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'SUM("packCnt")',displayFormat:'#,###,###,###,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'SUM("wt")',displayFormat:'#,###.000',excelFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print4',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print4_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반출승인 강제등록'}]}]}]}]}]}]}]}]}]})