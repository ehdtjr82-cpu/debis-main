/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04p2.xml 8937 68adabbf6511a4eca53ad00216f5e444ab333ee64558341dfebce4c9049c31c1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_popup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_popup',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_popup","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_popup_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.onUdcCompleted = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.valueObject = $c.data.getParameter($p, 'param').split(';');
  scwin.arrRtnVal = new Array(); // Return Value
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  let toDay = $c.date.getServerDateTime($p, 'yyyyMMdd');
  ica_reqDt.setValue(toDay);
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = function () {
  sbm_popup.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveReqNo" + "&param1=" + scwin.valueObject[1] +
  //차량단축번호
  "&param2=" + ica_reqDt.getValue() +
  //상차요청일자
  "&param3=" + scwin.valueObject[0]; //수출입구분
  $c.sbm.execute($p, sbm_popup);
};

/**
 * @method 
 * @name f_rtnValue 
 * @description Grid에서 선택된 Row의 Value
 */
scwin.f_rtnValue = function (row) {
  for (i = 0; i < 10; i++) {
    scwin.arrRtnVal[i] = ds_popup.getCellData(row, "col" + (i + 1));
  }
  ;
  let str_tmp = ds_popup.getCellData(row, "col10");
  let strArr = str_tmp.advancedSplit("^", "t");
  for (i = 0; i < strArr.length; i++) {
    scwin.arrRtnVal[9 + i] = strArr[i];
  }
  ;
  $c.win.closePopup($p, scwin.arrRtnVal);
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_popup_submitdone 
 * @description 조회 TR 정상
 */
scwin.sbm_popup_submitdone = function (e) {
  let rowCnt = ds_popup.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 1) {
    scwin.f_rtnValue(0);
  }
  ;
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  ;
  ds_popup.setRowPosition(0);
  gr_popup.setFocusedCell(0, 0);
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------
/**
 * @event 
 * @name gr_popup_oncelldblclick 
 * @description 셀이 더블 클릭된 경우 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} columnId
 */
scwin.gr_popup_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};

/**
 * @event 
 * @name gr_popup_onkeydown 
 * @description 셀이 더블 클릭된 경우 발생
 */
scwin.gr_popup_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.f_rtnValue(ds_popup.getRowPosition());
  }
  ;
};

/**
 * @event 
 * @name btn_close_onclick 
 * @description 닫기버튼 클릭 시 이벤트 발생
 */
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

// TODO - 확인 필요
// for=document event=onkeydown()>
// if (event.keyCode == 13) {
//     if (gr_popup.FocusState == 0) return;
//     //alert(activeElement.id);
// }
// if (event.ctrlKey) {
//     if (event.keyCode == 88) {
//         window.clipboardData.setData("Text", eval(event.srcElement.DataID).NameValue(eval(event.srcElement.DataID).RowPosition, event.srcElement.GetColumn()));
//     }
// }
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'상차요청 및 승인 반출현황',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차요청일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_reqDt',pickerType:'dynamic',style:'',mandatory:'true',validExp:'상차요청일자:yes:length=8'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retreive',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_popup',id:'gr_popup',style:'',dataName:'상차요청 및 승인 반출현황',focusMode:'row','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick','ev:onkeydown':'scwin.gr_popup_onkeydown'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'상차요청번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'LINE',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})