/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_35t.xml 14117 30d792ceb9abfd3696f925ffc63bcd53ff59a0689e312971b872044a8fc5a3e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 화면 - Id: sd_402_01_35t.jsp,v 1.17 2006/03/02 13:40:49 이상유 Exp 
// 설명 - 오더요청등록 Dynamic Tab 화면
scwin.repClntNo = $c.data.getParameter($p, "repClntNo") == null ? "" : $c.data.getParameter($p, "repClntNo");
scwin.clntNo = $c.data.getParameter($p, "clntNo") == null ? "" : $c.data.getParameter($p, "clntNo");
scwin.clntNm = $c.data.getParameter($p, "clntNm") == null ? "" : $c.data.getParameter($p, "clntNm");
scwin.mchtOdrKndCd = $c.data.getParameter($p, "mchtOdrKndCd") == null ? "" : $c.data.getParameter($p, "mchtOdrKndCd");
scwin.mchtOdrKndNm = $c.data.getParameter($p, "mchtOdrKndNm") == null ? "" : $c.data.getParameter($p, "mchtOdrKndNm");
scwin.mchtOdrNo = $c.data.getParameter($p, "mchtOdrNo") == null ? "" : $c.data.getParameter($p, "mchtOdrNo");
scwin.mcomOdrNo = $c.data.getParameter($p, "mcomOdrNo") == null ? "" : $c.data.getParameter($p, "mcomOdrNo");
scwin.logSeq = $c.data.getParameter($p, "logSeq") == null ? "" : $c.data.getParameter($p, "logSeq");
scwin.type = $c.data.getParameter($p, "type") == null ? "" : $c.data.getParameter($p, "type");
scwin.menuType = $c.data.getParameter($p, "menuType") == null ? "" : $c.data.getParameter($p, "menuType");
scwin.tab1Url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_35b.xml";
scwin.tab2Url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_40b.xml";

// hidden 
scwin.hid_odrNo = "";
scwin.hid_repClntNo = "";
scwin.hid_clntNo = "";
scwin.hid_clntNm = "";
scwin.hid_mchtOdrKndCd = "";
scwin.hid_mchtOdrKndNm = "";
scwin.hid_mchtOdrNo = "";
scwin.hid_mcomOdrNo = "";
scwin.hid_logSeq = "";
scwin.hid_chkReterieve = "";
scwin.hid_frameLoad = "";
scwin.hid_orderCommodityCnt = "";
scwin.hid_odrDelYn = "";
scwin.onpageload = function () {
  scwin.repClntNo = $c.data.getParameter($p, "repClntNo") == null ? "" : $c.data.getParameter($p, "repClntNo");
  scwin.clntNo = $c.data.getParameter($p, "clntNo") == null ? "" : $c.data.getParameter($p, "clntNo");
  scwin.clntNm = $c.data.getParameter($p, "clntNm") == null ? "" : $c.data.getParameter($p, "clntNm");
  scwin.mchtOdrKndCd = $c.data.getParameter($p, "mchtOdrKndCd") == null ? "" : $c.data.getParameter($p, "mchtOdrKndCd");
  scwin.mchtOdrKndNm = $c.data.getParameter($p, "mchtOdrKndNm") == null ? "" : $c.data.getParameter($p, "mchtOdrKndNm");
  scwin.mchtOdrNo = $c.data.getParameter($p, "mchtOdrNo") == null ? "" : $c.data.getParameter($p, "mchtOdrNo");
  scwin.mcomOdrNo = $c.data.getParameter($p, "mcomOdrNo") == null ? "" : $c.data.getParameter($p, "mcomOdrNo");
  scwin.logSeq = $c.data.getParameter($p, "logSeq") == null ? "" : $c.data.getParameter($p, "logSeq");
  scwin.type = $c.data.getParameter($p, "type") == null ? "" : $c.data.getParameter($p, "type");
  scwin.hid_odrNo = scwin.mcomOdrNo;
  scwin.hid_repClntNo = scwin.repClntNo;
  scwin.hid_clntNo = scwin.clntNo;
  scwin.hid_clntNm = scwin.clntNm;
  scwin.hid_mchtOdrKndCd = scwin.mchtOdrKndCd;
  scwin.hid_mchtOdrKndNm = scwin.mchtOdrKndNm;
  scwin.hid_mchtOdrNo = scwin.mchtOdrNo;
  scwin.hid_mcomOdrNo = scwin.mcomOdrNo;
  scwin.hid_logSeq = scwin.logSeq;
  scwin.hid_chkReterieve = scwin.type;
};

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
scwin.f_selectTabMenu = async function (idx) {
  if (scwin.menuType != "ncall") return;
  if ($c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) scwin.hid_odrNo = scwin.mcomOdrNo;
  if ($c.gus.cfIsNull($p, scwin.hid_repClntNo.trim())) scwin.hid_repClntNo = scwin.repClntNo;
  if ($c.gus.cfIsNull($p, scwin.hid_clntNo.trim())) scwin.hid_clntNo = scwin.clntNo;
  if ($c.gus.cfIsNull($p, scwin.hid_clntNm.trim())) scwin.hid_clntNm = scwin.clntNm;
  if ($c.gus.cfIsNull($p, scwin.hid_mchtOdrKndCd.trim())) scwin.hid_mchtOdrKndCd = scwin.mchtOdrKndCd;
  if ($c.gus.cfIsNull($p, scwin.hid_mchtOdrKndNm.trim())) scwin.hid_mchtOdrKndNm = scwin.mchtOdrKndNm;
  if ($c.gus.cfIsNull($p, scwin.hid_mchtOdrNo.trim())) scwin.hid_mchtOdrNo = scwin.mchtOdrNo;
  if ($c.gus.cfIsNull($p, scwin.hid_mcomOdrNo.trim())) scwin.hid_mcomOdrNo = scwin.mcomOdrNo;
  if ($c.gus.cfIsNull($p, scwin.hid_logSeq.trim())) scwin.hid_logSeq = scwin.logSeq;
  if ($c.gus.cfIsNull($p, scwin.hid_chkReterieve.trim())) scwin.hid_chkReterieve = scwin.type;
  if ($c.gus.cfIsNull($p, idx)) idx = 0;
  if (idx > 1) $c.win.alert($p, "현재개발중입니다.");
  switch (idx) {
    case 0:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        // 당사 오더 번호 설정시 조회
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (tab_main.getWindow(idx).scwin.hid_chkReterieve != "retrieveIn") {
          tab_main.getWindow(idx).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tab_main.getWindow(idx).ed_mcomOdrNo.getValue().trim() && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tab_main.getWindow(idx).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
      } else if (!$c.gus.cfIsNull($p, scwin.hid_clntNo.trim()) && !$c.gus.cfIsNull($p, scwin.hid_mchtOdrKndCd.trim()) && !$c.gus.cfIsNull($p, scwin.hid_mchtOdrNo.trim())) {
        // 거래처, 화주어더종류, 화주오더번호 설정시 조회
        await scwin.f_setFrameOrderSearchQueryCondition(tab_main.getWindow(idx));
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tab_main.getWindow(idx).ed_clntNo.setValue(scwin.hid_clntNo);
          tab_main.getWindow(idx).ed_txt_clntNm.setValue(scwin.hid_clntNm);
          tab_main.getWindow(idx).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tab_main.getWindow(idx).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회 
        } else if (tab_main.getWindow(idx).scwin.hid_chkReterieve != "retrieveIn") {
          tab_main.getWindow(idx).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tab_main.getWindow(idx).ed_clntNo.setValue(scwin.hid_clntNo);
          tab_main.getWindow(idx).ed_txt_clntNm.setValue(scwin.hid_clntNm);
          tab_main.getWindow(idx).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tab_main.getWindow(idx).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tab_main.getWindow(idx).ed_mcomOdrNo.getValue().trim() && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tab_main.getWindow(idx).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tab_main.getWindow(idx).ed_clntNo.setValue(scwin.hid_clntNo);
          tab_main.getWindow(idx).ed_txt_clntNm.setValue(scwin.hid_clntNm);
          tab_main.getWindow(idx).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tab_main.getWindow(idx).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회 
        }
      }
      if (tab_main.getWindow(idx).ds_mchtOdrKndCd.getRowCount() > 0) {
        tab_main.getWindow(idx).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
      } else {
        tab_main.getWindow(idx).ds_mchtOdrKndCd.insertRow();
        tab_main.getWindow(idx).ds_mchtOdrKndCd.setCellData(0, "osideCd", scwin.hid_mchtOdrKndCd);
        tab_main.getWindow(idx).ds_mchtOdrKndCd.setCellData(0, "osideCdNm", scwin.hid_mchtOdrKndNm);
      }
      if (tab_main.getWindow(idx).ds_shipmentIndicationOrder.getRowCount() > 0) {
        tab_main.getWindow(idx).acb_logSeq.setValue(scwin.hid_logSeq);
      }
      scwin.cfViewTab(idx);

      // scwin.f_TabFrameResize( 'iFrame0', tab_main.getWindow(idx).document.body.scrollHeight );
      //tab_main.getWindow(0).ed_clntNo.focus();
      tab_main.getWindow(0).ed_mcomOdrNo.focus(); // onBlur 이벤트로 특정 컴포넌트로 변경되서 처리
      break;
    case 1:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tab_main.getWindow(idx).ed_odrNo.getValue().trim() && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
      }
      scwin.cfViewTab(idx);
      // scwin.f_TabFrameResize( 'iFrame1', tab_main.getWindow(idx).document.body.scrollHeight );
      tab_main.getWindow(1).ed_odrNo.focus();
      break;
    case 2:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (scwin.hid_odrNo.trim() != tab_main.getWindow(idx).ed_odrNo.getValue().trim() && tab_main.getWindow(idx).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tab_main.getWindow(idx).ed_odrNo.setValue(scwin.hid_odrNo);
          tab_main.getWindow(idx).scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
      }
      scwin.cfViewTab(idx);
      // f_TabFrameResize( 'iFrame2', tab_main.getWindow(idx).document.body.scrollHeight );
      tab_main.getWindow(2).ed_odrNo.focus();
      break;
  }
};
scwin.f_TabMenuUpdate = function (strUrl, strTitle) {
  if (strUrl != "" && strTitle != "") {
    cfTabMenuUpdate(strUrl, strTitle);
  }
};

//-------------------------------------------------------------------------
// 오더요청 조회 조건 설정
//-------------------------------------------------------------------------
scwin.f_setFrameOrderSearchQueryCondition = async function (t_frame) {
  t_frame.scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
  t_frame.ed_clntNo.setValue(scwin.hid_clntNo);
  t_frame.ed_txt_clntNm.setValue(scwin.hid_clntNm);
  if (!$c.gus.cfIsNull($p, scwin.hid_mchtOdrKndCd) && scwin.hid_chkReterieve == "retrieve") {
    if (t_frame.scwin.hid_chkReterieve != "retrieveIn")
      //tr_reterieveMchtOdrKnd.post();
      t_frame.ds_ediMappingSearch.set("clntNo", scwin.hid_repClntNo);
    if (await t_frame.scwin.sbm_reterieveMchtOdrKnd2()) {
      if (t_frame.ds_mchtOdrKndCd.getRowCount() > 0) {
        t_frame.acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
      } else {
        t_frame.ds_mchtOdrKndCd.insertRow();
        t_frame.ds_mchtOdrKndCd.setCellData(0, "osideCd", scwin.hid_mchtOdrKndCd);
        t_frame.ds_mchtOdrKndCd.setCellData(0, "osideCdNm", scwin.hid_mchtOdrKndNm);
      }
    }
  } else {
    t_frame.acb_mchtOdrKndCd.setValue("");
  }
  t_frame.ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
  t_frame.ed_mcomOdrNo.setValue(scwin.hid_mcomOdrNo);
};
scwin.f_TabFrameResize = function (frameId, strHeight) {
  var iFrameObj = document.all(frameId);
  tab_mxTab_page(0).style.height = strHeight + 15;
  iFrameObj.style.height = strHeight;
};
scwin.cfViewTab = function (idx) {
  tab_main.setSelectedTabIndex(idx);
};
scwin.tab_main_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'tab_main',class:'wq_tab','ev:onchange':'scwin.tab_main_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'오더요청등록'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'작업경로상세등록'}},{T:1,N:'w2:content',A:{src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_35b.xml',alwaysDraw:'false',style:'',id:'content1'}},{T:1,N:'w2:content',A:{src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_40b.xml',alwaysDraw:'false',style:'',id:'content2'}}]}]}]}]}]}]})