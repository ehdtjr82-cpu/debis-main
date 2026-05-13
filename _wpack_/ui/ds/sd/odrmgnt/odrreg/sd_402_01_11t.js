/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml 8682 54590654bce972b482071c6a792a6250a3b7fe69b618165d35559bbcb87c6b79 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'test',id:'col1'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrNo = "";
scwin.odrKndCd = "";
scwin.type = "";
scwin.linkPage = "";
scwin.cvsslMgntNo = "";
scwin.blNo = "";
scwin.lineCd = "";
scwin.mcomAssgnClsCd = "";
scwin.bookingNo = "";
scwin.pickupdt = "";
scwin.pickuphh = "";

//input hidden
scwin.hid_odrNo = ""; //오더번호
scwin.hid_odrKndCd = ""; //오더종류
scwin.hid_chkReterieve = ""; //조회 여부 확인
scwin.hid_linkPage = ""; //link page 명
scwin.hid_cvsslMgntNo = ""; //본선관리번호
scwin.hid_blNo = ""; //본선관리번호
scwin.hid_lineCd = ""; //Line코드
scwin.hid_mcomAssgnClsCd = ""; //당사배정구분코드
scwin.hid_bookingNo = ""; //Booking번호
scwin.hid_pickupdt = ""; //pickup일자
scwin.hid_pickuphh = ""; //pickup시간

scwin.mapValue_odrKndCd = "";
scwin.onpageload = function () {
  scwin.odrNo = $c.data.getParameter($p, "odrNo") == null ? "" : $c.data.getParameter($p, "odrNo");
  scwin.odrKndCd = $c.data.getParameter($p, "odrKndCd") == null ? "" : $c.data.getParameter($p, "odrKndCd");
  scwin.type = $c.data.getParameter($p, "type") == null ? "" : $c.data.getParameter($p, "type");
  scwin.linkPage = $c.data.getParameter($p, "linkPage") == null ? "" : $c.data.getParameter($p, "linkPage");
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") == null ? "" : $c.data.getParameter($p, "cvsslMgntNo");
  scwin.blNo = $c.data.getParameter($p, "blNo") == null ? "" : $c.data.getParameter($p, "blNo");
  scwin.lineCd = $c.data.getParameter($p, "lineCd") == null ? "" : $c.data.getParameter($p, "lineCd");
  scwin.mcomAssgnClsCd = $c.data.getParameter($p, "mcomAssgnClsCd") == null ? "" : $c.data.getParameter($p, "mcomAssgnClsCd");
  scwin.bookingNo = $c.data.getParameter($p, "bookingNo") == null ? "" : $c.data.getParameter($p, "bookingNo");
  scwin.pickupdt = $c.data.getParameter($p, "pickupdt") == null ? "" : $c.data.getParameter($p, "pickupdt");
  scwin.pickuphh = $c.data.getParameter($p, "pickuphh") == null ? "" : $c.data.getParameter($p, "pickuphh");
  scwin.repClntNo = $c.data.getParameter($p, "repClntNo") == null ? "" : $c.data.getParameter($p, "repClntNo");
  scwin.hid_odrNo = scwin.odrNo; // 오더번호
  scwin.hid_odrKndCd = scwin.odrKndCd; // 오더종류
  scwin.hid_chkReterieve = scwin.type; // 조회 여부 확인
  scwin.hid_linkPage = scwin.linkPage; // link page 명
  scwin.hid_cvsslMgntNo = scwin.cvsslMgntNo; // 본선관리번호
  scwin.hid_blNo = scwin.blNo; // 본선관리번호
  scwin.hid_lineCd = scwin.lineCd; // Line코드
  scwin.hid_mcomAssgnClsCd = scwin.mcomAssgnClsCd; // 당사배정구분코드
  scwin.hid_bookingNo = scwin.bookingNo; // Booking번호
  scwin.hid_pickupdt = scwin.pickupdt; // pickup일자
  scwin.hid_pickuphh = scwin.pickuphh; // pickup시간

  tac_cont.setSelectedTabIndex(0);
};

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  if ($c.gus.cfIsNull($p, scwin.hid_odrNo.trim()) && tac_cont.getWindow(0).scwin.hid_chkMode != "create") scwin.hid_odrNo = scwin.odrNo;
  if ($c.gus.cfIsNull($p, scwin.hid_chkReterieve.trim()) && tac_cont.getWindow(0).scwin.hid_chkMode != "create") scwin.hid_chkReterieve = scwin.type;

  // for (var i = 0; i <tab_mxTab_page.length; i++) {
  // 	tab_mxTab_page(i).style.visibility = 'hidden';
  // }

  if ($c.gus.cfIsNull($p, idx)) idx = 0;
  switch (idx) {
    case 0:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tac_cont.getWindow(idx).ed_odrNo.getValue().trim() && tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
      } else {
        if (scwin.hid_chkReterieve.trim() == "create") {
          if (!$c.gus.cfIsNull($p, scwin.hid_odrNo)) {
            tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
            tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
          } else {
            if (!$c.gus.cfIsNull($p, scwin.hid_odrKndCd)) {
              tac_cont.getWindow(idx).scwin.f_Create();
              tac_cont.getWindow(idx).scwin.f_setLcOdrKndCd(scwin.hid_odrKndCd); // 오더종류 설정
              tac_cont.getWindow(idx).scwin.f_setInterfaceFromLinkPage();
            }
          }
        } else {
          // 초기모드는 신규 모드로 설정
          if (tac_cont.getWindow(idx).scwin.hid_chkMode != "create") tac_cont.getWindow(idx).scwin.f_Create();
        }
      }
      //await tac_cont.setSelectedTabIndex(idx);
      //tac_cont.getWindow(idx).ed_odrNo.focus();
      break;
    case 1:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          //tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tac_cont.getWindow(idx).ed_odrNo.getValue().trim() && tac_cont.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_cont.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_cont.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
      } else {
        // 초기모드는 신규 모드로 설정
        if (tac_cont.getWindow(idx).scwin.hid_chkMode != "create") tac_cont.getWindow(idx).scwin.f_defaultValue();
      }
      //await tac_cont.setSelectedTabIndex(idx);
      //tac_cont.getWindow(idx).ed_odrNo.focus();
      break;
    default:
      break;
  }
};
scwin.tac_cont_ontabclick = function (tabId, index) {
  if (index == 0) {
    scwin.f_selectTabMenu(0);
  } else {
    scwin.f_selectTabMenu(1);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{class:'wq_tab',id:'tac_cont',style:'','ev:ontabclick':'scwin.tac_cont_ontabclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'컨테이너오더',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'작업경로상세등록',style:''}},{T:1,N:'w2:content',A:{id:'content1',src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11b.xml',style:'',alwaysDraw:'false'}},{T:1,N:'w2:content',A:{id:'content2',src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_28b.xml',style:''}}]}]}]}]}]}]})