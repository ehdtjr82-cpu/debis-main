/*amd /ui/tn/tp/dongbusteel/tp_201_01_02t.xml 13298 649b5d21a5253d221515f9f7d5c94b169116197c16e9ebab9b8e711694c2e3ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";

//scwin.hid_frameLoad = ""; 사용되지 않음

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

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["repClntNo"])) {
    scwin.hid_repClntNo = scwin.params["repClntNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["clntNo"])) {
    scwin.hid_clntNo = scwin.params["clntNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["clntNm"])) {
    scwin.hid_clntNm = scwin.params["clntNm"];
  }
  if (!$c.util.isEmpty($p, scwin.params["mchtOdrKndCd"])) {
    scwin.hid_mchtOdrKndCd = scwin.params["mchtOdrKndCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["mchtOdrKndNm"])) {
    scwin.hid_mchtOdrKndNm = scwin.params["mchtOdrKndNm"];
  }
  if (!$c.util.isEmpty($p, scwin.params["mchtOdrNo"])) {
    scwin.hid_mchtOdrNo = scwin.params["mchtOdrNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["mcomOdrNo"])) {
    scwin.hid_mcomOdrNo = scwin.params["mcomOdrNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["logSeq"])) {
    scwin.hid_logSeq = scwin.params["logSeq"];
  }
  if (!$c.util.isEmpty($p, scwin.params["type"])) {
    scwin.hid_chkReterieve = scwin.params["type"];
  }
  if (!$c.util.isEmpty($p, scwin.params["mcomOdrNo"])) {
    scwin.hid_odrNo = scwin.params["mcomOdrNo"];
  }
};

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  // TOBE : 값이 날라간경우 파라미터에서 받기 위함 같은데 필요없을듯
  // if ($c.gus.cfIsNull(scwin.hid_odrNo.trim())) scwin.hid_odrNo = scwin.mcomOdrNo;
  // if ($c.gus.cfIsNull(scwin.hid_repClntNo.trim())) scwin.hid_repClntNo = scwin.repClntNo;
  // if ($c.gus.cfIsNull(scwin.hid_clntNo.trim())) scwin.hid_clntNo = scwin.clntNo;
  // if ($c.gus.cfIsNull(scwin.hid_clntNm.trim())) scwin.hid_clntNm = scwin.clntNm;
  // if ($c.gus.cfIsNull(scwin.hid_mchtOdrKndCd.trim())) scwin.hid_mchtOdrKndCd = scwin.mchtOdrKndCd;
  // if ($c.gus.cfIsNull(scwin.hid_mchtOdrKndNm.trim())) scwin.hid_mchtOdrKndNm = scwin.mchtOdrKndNm;
  // if ($c.gus.cfIsNull(scwin.hid_mchtOdrNo.trim())) scwin.hid_mchtOdrNo = scwin.mchtOdrNo;
  // if ($c.gus.cfIsNull(scwin.hid_mcomOdrNo.trim())) scwin.hid_mcomOdrNo = scwin.mcomOdrNo;
  // if ($c.gus.cfIsNull(scwin.hid_logSeq.trim())) scwin.hid_logSeq = scwin.logSeq;
  // if ($c.gus.cfIsNull(scwin.hid_chkReterieve.trim())) scwin.hid_chkReterieve = scwin.type;

  // for (i = 0; i < tac_mxTabtab__page.length; i++) {
  //     tac_mxTabtab__page(i).style.visibility = 'hidden';
  // }    

  if ($c.gus.cfIsNull($p, idx)) idx = 0;
  switch (idx) {
    case 0:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        // 당사 오더 번호 설정시 조회
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_tabControl1.getWindow(0).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(0).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 오더 번호 존재시 조회
        } else if (tac_tabControl1.getWindow(0).scwin.hid_chkReterieve != "retrieveIn") {
          tac_tabControl1.getWindow(0).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 오더 번호 존재시 조회                
        } else if (scwin.hid_odrNo.trim() != tac_tabControl1.getWindow(0).ed_mcomOdrNo.getValue().trim() && tac_tabControl1.getWindow(0).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_tabControl1.getWindow(0).ed_mcomOdrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 오더 번호 존재시 조회  
        }
      } else if (!$c.gus.cfIsNull($p, scwin.hid_clntNo.trim()) && !$c.gus.cfIsNull($p, scwin.hid_mchtOdrKndCd.trim()) && !$c.gus.cfIsNull($p, scwin.hid_mchtOdrNo.trim())) {
        // 거래처, 화주오더종류, 화주오더번호 설정시 조회
        scwin.f_setFrameOrderSearchQueryCondition(tac_tabControl1.getWindow(0));
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_tabControl1.getWindow(0).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(0).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tac_tabControl1.getWindow(0).ed_clntNo.setValue(scwin.hid_clntNo);
          tac_tabControl1.getWindow(0).ed_clntNm.setValue(scwin.hid_clntNm);
          tac_tabControl1.getWindow(0).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tac_tabControl1.getWindow(0).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회
        } else if (tac_tabControl1.getWindow(0).scwin.hid_chkReterieve != "retrieveIn") {
          tac_tabControl1.getWindow(0).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tac_tabControl1.getWindow(0).ed_clntNo.setValue(scwin.hid_clntNo);
          tac_tabControl1.getWindow(0).ed_clntNm.setValue(scwin.hid_clntNm);
          tac_tabControl1.getWindow(0).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tac_tabControl1.getWindow(0).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회
        } else if (scwin.hid_odrNo.trim() != tac_tabControl1.getWindow(0).ed_mcomOdrNo.getValue().trim() && tac_tabControl1.getWindow(0).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_tabControl1.getWindow(0).scwin.hid_ctrtRepClntNo = scwin.hid_repClntNo;
          tac_tabControl1.getWindow(0).ed_clntNo.setValue(scwin.hid_clntNo);
          tac_tabControl1.getWindow(0).ed_clntNm.setValue(scwin.hid_clntNm);
          tac_tabControl1.getWindow(0).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
          tac_tabControl1.getWindow(0).ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
          tac_tabControl1.getWindow(0).scwin.f_Retrieve(); // 거래처번호, 화주오더종류, 화주오더번호 존재시 조회
        }
      }
      if (tac_tabControl1.getWindow(0).ds_mchtOdrKndCd.getRowCount() > 0) {
        tac_tabControl1.getWindow(0).acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
      } else {
        tac_tabControl1.getWindow(0).ds_mchtOdrKndCd.insertRow();
        tac_tabControl1.getWindow(0).ds_mchtOdrKndCd.setCellData(0, "osideCd", scwin.hid_mchtOdrKndCd);
        tac_tabControl1.getWindow(0).ds_mchtOdrKndCd.setCellData(0, "osideCdNm", scwin.hid_mchtOdrKndNm);
      }
      if (tac_tabControl1.getWindow(0).ds_shipmentIndicationOrder.getRowCount() > 0) {
        tac_tabControl1.getWindow(0).lc_logSeq.setValue(scwin.hid_logSeq);
      }

      //cfViewTab(idx);

      //tac_tabControl1.getWindow(0).ed_clntNo.focus();
      break;
    case 1:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_tabControl1.getWindow(1).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(1).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(1).scwin.f_Retrieve(); // 오더 번호 존재시 조회        
        } else if (tac_tabControl1.getWindow(1).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(1).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(1).scwin.f_Retrieve(); // 오더 번호 존재시 조회
        } else if (scwin.hid_odrNo.trim() != tac_tabControl1.getWindow(1).ed_odrNo.getValue().trim() && tac_tabControl1.getWindow(1).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_tabControl1.getWindow(1).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(1).scwin.f_Retrieve(); // 오더 번호 존재시 조회
        }
      }
      //cfViewTab(idx);

      tac_tabControl1.getWindow(1).ed_odrNo.focus();
      break;
    case 2:
      if (!$c.gus.cfIsNull($p, scwin.hid_odrNo.trim())) {
        if (scwin.hid_chkReterieve.trim() == "retrieve" && tac_tabControl1.getWindow(2).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(2).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(2).scwin.f_Retrieve(); // 오더 번호 존재시 조회
        } else if (tac_tabControl1.getWindow(2).scwin.hid_chkReterieve.trim() != "retrieveIn") {
          tac_tabControl1.getWindow(2).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(2).scwin.f_Retrieve(); // 오더 번호 존재시 조회
        } else if (scwin.hid_odrNo.trim() != tac_tabControl1.getWindow(2).ed_odrNo.getValue().trim() && tac_tabControl1.getWindow(2).scwin.hid_chkReterieve.trim() == "retrieveIn") {
          tac_tabControl1.getWindow(2).ed_odrNo.setValue(scwin.hid_odrNo);
          tac_tabControl1.getWindow(2).scwin.f_Retrieve(); // 오더 번호 존재시 조회   
        }
      }
      //cfViewTab(idx);

      //tac_tabControl1.getWindow(2).ed_odrNo.focus();
      break;
  }
};

//-------------------------------------------------------------------------
// 탭화면 오픈
//-------------------------------------------------------------------------
scwin.f_TabMenuUpdate = function (strUrl, strPgmId, strTitle, paramObj) {
  if (strUrl != "" && strTitle != "") {
    $c.win.openMenu($p, strTitle, strUrl, strPgmId, paramObj);
  }
};

//-------------------------------------------------------------------------
// 오더요청 조회 조건 설정
//-------------------------------------------------------------------------
scwin.f_setFrameOrderSearchQueryCondition = function (t_frame) {
  t_frame.hid_ctrtRepClntNo = scwin.hid_repClntNo;
  t_frame.ed_clntNo.setValue(scwin.hid_clntNo);
  t_frame.ed_clntNm.setValue(scwin.hid_clntNm);
  t_frame.ed_clntNm.hidVal = scwin.hid_clntNm;
  if (!$c.gus.cfIsNull($p, scwin.hid_mchtOdrKndCd) && scwin.hid_chkReterieve == "retrieve") {
    if (t_frame.scwin.hid_chkReterieve != "retrieveIn") {
      $c.sbm.execute($p, t_frame.sbm_reterieveMchtOdrKnd);
    }
    if (t_frame.ds_mchtOdrKndCd.getRowCount() > 0) {
      t_frame.acb_mchtOdrKndCd.setValue(scwin.hid_mchtOdrKndCd);
    } else {
      let newRow = t_frame.ds_mchtOdrKndCd.insertRow();
      t_frame.ds_mchtOdrKndCd.setRowPosition(newRow);
      t_frame.ds_mchtOdrKndCd.setCellData(0, "osideCd", scwin.hid_mchtOdrKndCd);
      t_frame.ds_mchtOdrKndCd.setCellData(0, "osideCdNm", scwin.hid_mchtOdrKndNm);
    }
  } else {
    t_frame.acb_mchtOdrKndCd.setSelectedIndex(0);
  }
  t_frame.ed_mchtOdrNo.setValue(scwin.hid_mchtOdrNo);
  t_frame.ed_mcomOdrNo.setValue(scwin.hid_mcomOdrNo);
};

//-------------------------------------------------------------------------
// 선택된 TAB 변경 이벤트
//-------------------------------------------------------------------------
scwin.tac_tabControl1_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:'','ev:onchange':'scwin.tac_tabControl1_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'오더요청 등록',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'작업경로 상세등록',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'해송작업경로 상세등록',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'',src:'/ui/tn/tp/dongbusteel/tp_201_01_02b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/tn/tp/dongbusteel/tp_201_01_03b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'',src:'/ui/tn/tp/dongbusteel/tp_201_01_04b.xml'}}]}]}]}]}]}]})