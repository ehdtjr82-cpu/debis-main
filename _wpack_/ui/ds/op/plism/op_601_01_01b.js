/*amd /ui/ds/op/plism/op_601_01_01b.xml 5073 5a1415fc1f9e43773b9119f63edddaab835154680804466c94c8d5cb917195e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:publicInfo',A:{method:'scwin.f_HiddenDivAlert,scwin.f_OnLoad,scwin.f_selectTabMenu,scwin.globalVars'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  //세션정보
  const loginDTO = $c.data.getMemInfo($p);
  scwin.cntrNo = $c.data.getParameter($p, 'cntrNo') ?? '';
  scwin.v_bookingNo = '';
  scwin.v_blNo = '';
  scwin.v_cntrNo = '';
  scwin.v_idx = 0;
  scwin.userId = loginDTO.userId; //로그인아이디
  scwin.userClsCd = loginDTO.userClsCd;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면 시작시
 */
scwin.f_OnLoad = function () {
  if (scwin.userClsCd == '05' || scwin.userId == 'csssso') {
    scwin.v_idx = 1;
  }
  ;
  scwin.f_selectTabMenu(scwin.v_idx);
};

/**
 * @method 
 * @name f_selectTabMenu 
 * @description Tab Menu 선택시 처리
 */
scwin.f_selectTabMenu = function (idx) {
  const tabWinObj = tab_mxTab_page.getWindow(idx);
  let tabSetArray = [{
    obj: tabWinObj.ed_bookingNo,
    gVar: scwin.v_bookingNo
  }, {
    obj: tabWinObj.ed_blNo,
    gVar: scwin.v_blNo
  }, {
    obj: tabWinObj.ed_cntrNo,
    gVar: scwin.v_cntrNo
  }];
  for (let i = 0; i < tabSetArray.length; i++) {
    if (tabSetArray[i].obj === undefined) continue;
    tabSetArray[i].gVar = tabSetArray[i].obj.getValue();
  }
  ;
  if ($c.gus.cfIsNull($p, idx)) idx = 0;
  tabWinObj.scwin.blNo = scwin.v_blNo;
  tabWinObj.scwin.bookingNo = scwin.v_bookingNo;
  tabWinObj.scwin.cntrNo = scwin.v_cntrNo;
  tab_mxTab_page.setSelectedTabIndex(idx);
};

/**
 * @method 
 * @name f_HiddenDivAlert 
 * @description 경고 팝업
 */
scwin.f_HiddenDivAlert = function (errorTxt, lineCharge) {
  const messageStr = '<font color="black">' + '<font size="3" color = "red"><b>예상되는 오류  </b></font><br>' + '<font color="blue" size="2" ><b>' + lineCharge + '</b></font><br>' + '* 부킹개수 초과로 인해 접수되지 않은경우 --> 부킹갯수 초과!<br>' + '* 차량넘버 오류 --> 전송된 차량넘버 확인요망! ( 재 전송시 기존전송 삭제)<br>' + '* 콤바인 전송오류 --> 기존전송 삭제 후 콤바인 전송시 EMPTY 1, EMPTY 2 로 전송요망!<br>' + '* 모선항차 오류 -->기존전송 삭제 후  DPCY 월 항차 입력요망!' + '</font><br>';
  const data = {
    message: messageStr
  };
  const options = {
    popupName: $c.data.getMessage($p, MSG_CM_00046),
    width: 500,
    height: 400,
    frameModal: "top",
    type: "pageFramePopup",
    className: "messagebox"
  };
  $c.win.openPopup($p, '/cm/xml/messageBox.xml', options, data);
  // $c.win.alert(messageStr, '', { width: '400px', height: '500px' })
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name tab_mxTab_page_onchange 
 * @description 선택 된 tab이 변경된 경우에 발생한다.
 */
scwin.tab_mxTab_page_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox ',id:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',id:'tab_mxTab_page',style:'','ev:onchange':'scwin.tab_mxTab_page_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'COPARN',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs4',label:'COPINO',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content0',style:'',src:'/ui/ds/op/plism/op_601_01_02b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'',src:'/ui/ds/op/plism/op_601_01_03b.xml'}}]}]}]}]}]}]}]})