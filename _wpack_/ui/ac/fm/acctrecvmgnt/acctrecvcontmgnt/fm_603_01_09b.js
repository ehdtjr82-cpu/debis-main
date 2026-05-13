/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_09b.xml 19986 d4f4a10ac1cc795054ddb778efba61fe6971f23689ce20d70d8408bc59336e8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'ds_CalendarData',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'colTitle',name:'colTitle',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colStart',name:'colStart',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colEnd',name:'colEnd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colId',name:'colId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'collMoneyIntendDt',name:'해당일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Calendar',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyIntendDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'busiNm',name:'name1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_CalendarDt',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyIntendDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyCntSht',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntTelNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'name1'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveCollectionOfMoneyCalendarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_Calendar","key":"OUT_DS1"},{"id":"ds_CalendarDt","key":"OUT_DS2"}]',target:'data:json,{"id":"ds_Calendar","key":"OUT_DS1"},{"id":"ds_CalendarDt","key":"OUT_DS2"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_09b
// 이름     : 담당자별월간수금Calendar
// 경로     : 회계/자금관리/수금관리/수금계획/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-20
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.stdDt = "";
scwin.bilgAcctDeptCd = "";
scwin.collMoneyPicId = "";
scwin.bilgAcctDeptNm = "";
scwin.collMoneyPicNm = "";
scwin.dtArray = [];
scwin.clntArray = [];
scwin.onpageload = function () {
  layerPopup.hide();
  ed_stdDt.setValue(scwin.dateStr);
  shc_moneySchedule.gotoCalendar(scwin.dateStr);
  scwin.stdDt = scwin.dateStr;

  //년월일 선택버튼 숨김
  shc_moneySchedule.setHeaderBtn({
    "headerRightBtn": false
  });
};
scwin.toYYYYMM = function (dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return year + month;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stdDt, ed_collMoneyPicId]))) {
    return;
  }
  dma_search.set("collMoneyIntendDt", scwin.stdDt.substring(0, 6)); // 해당 년월 임시로
  dma_search.set("bilgAcctDeptCd", ed_srchAcctDeptCd.getValue()); //부서
  dma_search.set("collMoneyPicId", ed_collMoneyPicId.getValue()); //담당자
  dma_search.set("closeYm", ed_stdDt.getValue()); //마감 년월

  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_CalendarDt.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  scwin.dtArray = [];
  scwin.clntArray = [];
  ds_CalendarData.removeAll();
  var txtDesc = "상세사항";
  let cnt = 0;
  let sDiv = "<div class=''>";
  sDiv = sDiv + "<table border=0 cellpadding=2 cellspacing=1 bgcolor=#717171 >";
  sDiv = sDiv + "<tr><td class=text_left valign=middle height=20 bgcolor=#F3F0D2>";
  sDiv = sDiv + "&nbsp;<b>" + txtDesc + "</b>&nbsp;</td></tr>";
  sDiv = sDiv + "<tr valign='top'class='table_bg' ><td align=left >";
  sDiv = sDiv + "<table width='100%' border=0 cellpadding=0 cellspacing=1 bgcolor=#717171>";
  sDiv = sDiv + "<tr>";
  sDiv = sDiv + "<td  class='schedule_table_header_center' >거래처</td>";
  sDiv = sDiv + "<td  class='schedule_table_header_center'>수금수단</td>";
  sDiv = sDiv + "<td  class='schedule_table_header_center'>금액</td>";
  sDiv = sDiv + "<td  class='schedule_table_header_center'>전화번호</td>";
  sDiv = sDiv + "<td  class='schedule_table_header_center'>적요</td>";
  sDiv = sDiv + "</tr>";
  ds_CalendarDt.sort("collMoneyIntendDt", 0);
  let cDt = "";
  for (let i = 0; i < ds_CalendarDt.getRowCount(); i++) {
    let dt = ds_CalendarDt.getCellData(i, "collMoneyIntendDt");
    if (i == 0) {
      cDt = dt;
      scwin.dtArray.push(dt);
    } else {
      if (cDt != dt) {
        cDt = dt;
        scwin.dtArray.push(dt);
      }
    }
  }
  for (a = 0; a < scwin.dtArray.length; a++) {
    let filterOptions = {
      type: "row",
      colIndex: "collMoneyIntendDt",
      key: scwin.dtArray[a],
      condition: "and"
    };
    ds_CalendarDt.setColumnFilter(filterOptions);
    ds_Calendar.setColumnFilter(filterOptions);
    ds_CalendarData.insertRow(a);
    ds_CalendarData.setCellData(a, "colStart", scwin.dtArray[a]);
    ds_CalendarData.setCellData(a, "colEnd", scwin.dtArray[a]);
    ds_CalendarData.setCellData(a, "colId", "seq" + a);
    let temp = sDiv;
    let title = "";
    for (b = 0; b < ds_CalendarDt.getRowCount(); b++) {
      //title += ds_CalendarDt.getCellData(b, "clntNm")+":"+ds_CalendarDt.getCellData(b, "amt") + "원&nbsp;\n";
      const amt = ds_CalendarDt.getCellData(b, "amt").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      temp = temp + "<tr>";
      temp = temp + "<td bgcolor='#FFFFFF' style='font-size:8pt;line-height:16px'>" + ds_CalendarDt.getCellData(b, "clntNm") + "</td>";
      temp = temp + "<td bgcolor='#FFFFFF' style='font-size:8pt;line-height:16px' width=50 align='center'>" + ds_CalendarDt.getCellData(b, "collMoneyCntSht") + "</td>";
      temp = temp + "<td bgcolor='#FFFFFF' style='font-size:8pt;line-height:16px' width=80 align='right'>" + amt + "원&nbsp;" + "</td>";
      temp = temp + "<td bgcolor='#FFFFFF' style='font-size:8pt;line-height:16px' width=110 align='center'>" + ds_CalendarDt.getCellData(b, "clntTelNo") + "</td>";
      temp = temp + "<td bgcolor='#FFFFFF' style='font-size:8pt;line-height:16px' align='left'>" + ds_CalendarDt.getCellData(b, "summary") + "</td>";
      temp = temp + "</tr>";
    }
    for (b = 0; b < ds_Calendar.getRowCount(); b++) {
      const amt = ds_Calendar.getCellData(b, "amt").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      title += ds_Calendar.getCellData(b, "busiNm") + ":" + amt + "원</br>";
    }
    temp = temp + "<p class='title' style='display:none'>" + title + "</p>";
    ds_CalendarData.setCellData(a, "colTitle", temp);
    scwin.clntArray.push(title);
    ds_CalendarDt.clearFilter();
    ds_Calendar.clearFilter();
  }
  for (j = 0; j < ds_CalendarData.getRowCount(); j++) {
    let div = "</table></td></tr></table></div>";
    ds_CalendarData.setCellData(j, "colTitle", ds_CalendarData.getCellData(j, "colTitle") + div);
  }
  //ds_CalendarDtCopy.setJSON(ds_CalendarDt.getAllJSON());
  ds_CalendarData.reform();
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp();
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};
scwin.udc_collMoneyPicId_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_collMoneyPicId.setValue(rtnList[0]); // 코드
    ed_collMoneyPicNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_collMoneyPicId.setValue("");
    ed_collMoneyPicNm.setValue("");
  }
};
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    // 부서조회    
    case '1':
      udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc // 콜백 함수
      , ed_srchAcctDeptCd.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_srchAcctDeptNm.getValue() // 화면에서의 ??? Name Element의 Value
      , check // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    // 담당자 조회    
    case '2':
      udc_collMoneyPicId.cfCommonPopUp(scwin.udc_collMoneyPicId_callBackFunc // 콜백 함수
      , ed_collMoneyPicId.getValue() // 화면에서의 ??? Code Element의 Value
      , ed_collMoneyPicNm.getValue() // 화면에서의 ??? Name Element의 Value
      , check // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

// 귀속부서
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};

// 담당자
scwin.udc_collMoneyPicId_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'T');
};
scwin.udc_collMoneyPicId_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('2', 'T');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.shc_moneySchedule_onclick = function (dateInfo) {
  let title = dateInfo.title;
  let start = WebSquare.date.getFormattedDate(dateInfo.start, "yyyyMMdd");
  ds_CalendarDt.clearFilter();
  let filterOptions = {
    type: "row",
    colIndex: "collMoneyIntendDt",
    key: start,
    condition: "and"
  };
  ds_CalendarDt.setColumnFilter(filterOptions);
  if (title == undefined) {
    layerPopup.hide();
  } else {
    layerPopup.show();
  }
};
scwin.eventTitle = function (data) {
  // data.title 안에 HTML이 들어있음
  let html = data.title;
  const temp = document.createElement("div");
  temp.innerHTML = html;
  const array = temp.querySelector("p.title").innerHTML;
  return array;
};
scwin.shc_moneySchedule_onheaderbtnclick = function (buttonInfo) {
  scwin.stdDt = buttonInfo.date;
};

//마감일자 변경시 수정예정일자 동일하게 자동 변경
scwin.ed_stdDt_onchange = function () {
  shc_moneySchedule.gotoCalendar(ed_stdDt.getValue());
  scwin.stdDt = ed_stdDt.getValue();
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    		.fc-h-event .fc-event-main{display: block; height: auto;}\n    		'},{T:4,cdata:'.popup_layer {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    /* 팝업 크기 */\n    width: 600px;\n    height: 300px;\n    z-index: 1000;\n}'}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdDt',style:'',displayFormat:'yyyy/MM',mandatory:'true',title:'기준일자','ev:onchange':'scwin.ed_stdDt_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bilgAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'',mandatoryCode:'true',validTitle:'귀속부서','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_collMoneyPicId',nameId:'ed_collMoneyPicNm',onloadCallbackFunc:'',popupID:'retrieveAcEmpInfoPopup',popupTitle:'사원조회,사원코드,사원명',selectID:'retrieveAcEmpInfo',style:'',popupGridHeadTitle:'사원코드,사원명',id:'udc_collMoneyPicId','ev:onclickEvent':'scwin.udc_collMoneyPicId_onclickEvent',objTypeName:'key',code:'code',name:'name',mandatoryCode:'true',validTitle:'담당자','ev:onblurCodeEvent':'scwin.udc_collMoneyPicId_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:scheduleCalendar',A:{endColumn:'colEnd',weekends:'true',dayMaxEvents:'false',editable:'true',selectable:'',headerRightBtn:'true',includeScheduleEnd:'true',version:'6.1.11',ioFormat:'yyyyMMdd',titleColumn:'colTitle',startColumn:'colStart',dataList:'data:ds_CalendarData',style:'',id:'shc_moneySchedule',lang:'',headerLeftBtn:'true',headerToolbarStart:'prevYear, prev, next, nextYear, today',class:'h-full mt16',idColumn:'colId',headerTitle:'true','ev:onclick':'scwin.shc_moneySchedule_onclick',tooltipDisplay:'false',escape:'false',eventTitleFormatter:'scwin.eventTitle','ev:onheaderbtnclick':'scwin.shc_moneySchedule_onheaderbtnclick'}},{T:1,N:'w2:floatingLayer',A:{title:'상세사항',id:'layerPopup',style:'display:none',class:'popup_layer'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',defaultCellHeight:'20',id:'gr_grid',style:'width:580px;height:260px;',dataList:'data:ds_CalendarDt',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column1',value:'수금수단',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column1',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column1',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column1',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'collMoneyCntSht',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'clntTelNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]}]}]}]}]}]}]})