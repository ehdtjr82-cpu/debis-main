/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_71t.xml 11017 8e6955b989faad5ba6d7d308d761926398603cda5ce98e58b958163175a5bae9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
  tac_mxTab.activateTab(0);
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  /**
   * 설명 : 다른 화면에서 link되어 오는 경우
   *  1.오더등록현황 조회 화면(sd_402_01_01b.jsp)
   *      1.1.param : 오더번호, type
   *  2. 컨테이너 배정목록 현황 및 조정 화면(sd401_03_01b.jsp)
   *      2.1.param : 오더종류, 라인코드, 본선관리번호, BL번호, 당사배정구분코드, 오더번호, 링크페이지 종류, scwin.type 
   *  3. EDI오더요청현황조회 화면(sd401_01_21b.jsp) 및 EDI오더요청상세 화면(sd401_01_22b.jsp)
   *      3.1.param : 오더종류, 라인코드, booking번호, 오더번호, pickup일자, pickup시간, 링크페이지 종류, scwin.type 
   */

  const paramData = $c.data.getParameter($p);
  scwin.odrNo = paramData["odrNo"] ?? ""; //오더번호
  scwin.odrKndCd = paramData["odrKndCd"] ?? ""; //오더종류
  scwin.type = paramData["type"] ?? ""; //type
  scwin.linkPage = paramData["linkPage"] ?? ""; //링크페이지 종류

  scwin.cvsslMgntNo = paramData["cvsslMgntNo"] ?? ""; //본선관리번호
  scwin.blNo = paramData["blNo"] ?? ""; //BL번호
  scwin.lineCd = paramData["lineCd"] ?? ""; //Line코드
  scwin.mcomAssgnClsCd = paramData["mcomAssgnClsCd"] ?? ""; //당사배정구분코드
  scwin.bookingNo = paramData["bookingNo"] ?? ""; //Booking번호

  scwin.pickupdt = paramData["pickupdt"] ?? ""; //pickup일자
  scwin.pickuphh = paramData["pickuphh"] ?? ""; //pickup시간

  scwin.onLoad = "";
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.onLoad = "T";
  hid_odrNo.setValue(scwin.odrNo);
  hid_odrKndCd.setValue(scwin.odrKndCd);
  hid_chkReterieve.setValue(scwin.type);
  hid_linkPage.setValue(scwin.linkPage);
  hid_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  hid_blNo.setValue(scwin.blNo);
  hid_lineCd.setValue(scwin.lineCd);
  hid_mcomAssgnClsCd.setValue(scwin.mcomAssgnClsCd);
  hid_bookingNo.setValue(scwin.bookingNo);
  hid_pickupdt.setValue(scwin.pickupdt);
  hid_pickuphh.setValue(scwin.pickuphh);
};

/**
 * @method 
 * @name f_selectTabMenu 
 * @description Tab Menu 선택시 처리
 */
scwin.f_selectTabMenu = function (idx) {
  const tabCnt = tac_mxTab.getTabCount();
  let frames = [];
  for (let i = 0; i < tabCnt; i++) {
    frames.push(tac_mxTab.getWindow(i));
  }
  ;
  if ($c.gus.cfIsNull($p, hid_odrNo.getValue().trim()) && frames[0].hid_chkMode.getValue() != "create") {
    hid_odrNo.setValue(scwin.odrNo);
  }
  ;
  if ($c.gus.cfIsNull($p, hid_chkReterieve.getValue().trim()) && frames[0].hid_chkMode.getValue() != "create") {
    hid_chkReterieve.setValue(scwin.type);
  }
  ;

  // for (i = 0; i < tabCnt; i++) {
  //     tac_mxTab.hideTab(i);
  // };

  if ($c.gus.cfIsNull($p, idx)) idx = 0;
  const odrNoVal = hid_odrNo.getValue();
  const chkReterieveVal = hid_chkReterieve.getValue();
  switch (idx) {
    case 0:
      if (!$c.gus.cfIsNull($p, odrNoVal.trim())) {
        if (chkReterieveVal.trim() == "retrieve" && frames[idx].hid_chkReterieve.getValue().trim() != "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.focusObj = frames[0].ed_odrNo;
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (frames[idx].hid_chkReterieve.getValue() != "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.focusObj = frames[0].ed_odrNo;
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (odrNoVal.trim() != frames[idx].ed_odrNo.getValue().trim() && frames[idx].hid_chkReterieve.getValue().trim() == "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.focusObj = frames[0].ed_odrNo;
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
        ;
      } else {
        if (chkReterieveVal.trim() == "create") {
          if (!$c.gus.cfIsNull($p, odrNoVal)) {
            frames[idx].ed_odrNo.setValue(odrNoVal);
            frames[idx].scwin.focusObj = frames[0].ed_odrNo;
            frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
          } else {
            if (!$c.gus.cfIsNull($p, hid_odrKndCd.getValue())) {
              frames[idx].f_Create('F');
              if (hid_odrKndCd.getValue() != null) {
                frames[idx].scwin.f_setLcOdrKndCd(hid_odrKndCd.getValue()); // 오더종류 설정
              }
              frames[idx].scwin.f_setInterfaceFromLinkPage();
            }
            ;
          }
          ;
        } else {
          // 초기모드는 신규 모드로 설정
          if (frames[idx].hid_chkMode.getValue() != "create") {
            frames[idx].scwin.f_Create('F');
          }
        }
        ;
      }
      ;
      tac_mxTab.setSelectedTabIndex(idx);
      frames[0].ed_odrNo.focus();
      break;
    case 1:
      if (!$c.gus.cfIsNull($p, odrNoVal.trim())) {
        if (chkReterieveVal.trim() == "retrieve" && frames[idx].hid_chkReterieve.getValue().trim() != "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (frames[idx].hid_chkReterieve.getValue().trim() != "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (odrNoVal.trim() != frames[idx].ed_odrNo.getValue().trim() && frames[idx].hid_chkReterieve.getValue().trim() == "retrieveIn") {
          frames[idx].ed_odrNo.setValue(odrNoVal);
          frames[idx].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
        ;
      } else {
        // 초기모드는 신규 모드로 설정
        if (frames[0].hid_chkMode.getValue() == "create") {
          frames[idx].scwin.f_defaultValue();
        }
        ;
      }
      ;
      tac_mxTab.setSelectedTabIndex(idx);
      frames[1].ed_odrNo.focus();
      break;
    default:
      if (!$c.gus.cfIsNull($p, odrNoVal.trim())) {
        if (chkReterieveVal.trim() == "retrieve" && frames[0].hid_chkReterieve.getValue().trim() != "retrieveIn") {
          frames[0].ed_odrNo.setValue(odrNoVal);
          frames[0].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (frames[0].hid_chkReterieve.getValue().trim() != "retrieveIn") {
          frames[0].ed_odrNo.setValue(odrNoVal);
          frames[0].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        } else if (odrNoVal.trim() != frames[0].ed_odrNo.getValue().trim() && frames[0].hid_chkReterieve.getValue().trim() == "retrieveIn") {
          frames[0].ed_odrNo.setValue(odrNoVal);
          frames[0].scwin.f_Retrieve(); // 오더 번호 존재시 조회 
        }
        ;
      } else {
        // 초기모드는 신규 모드로 설정
        if (frames[0].hid_chkMode.getValue() != "create") {
          frames[0].scwin.f_Create('F');
        }
        ;
      }
      ;
      tac_mxTab.setSelectedTabIndex(idx);
      frames[0].ed_odrNo.focus();
      break;
  }
  ;
  tac_mxTab.show(idx);
  if (tac_mxTab.isLoaded(0)) {
    tac_mxTab.enableTab(0);
    tac_mxTab.enableTab(1);
  }
  ;
  if (tac_mxTab.isLoaded(1) || tac_mxTab.getSelectedTabIndex() == 1) {
    tac_mxTab.enableTab(1);
  } else {
    tac_mxTab.disableTab(1);
  }
  ;
};

// function f_TabMenuUpdate(strUrl, strTitle) {
//     if (strUrl != "" && strTitle != "")
//         cfTabMenuUpdate(strUrl, strTitle);
// }

// function f_TabFrameResize(frameId, strHeight) {
//     let iFrameObj = document.all(frameId);
//     tab_mxTab_page(0).style.height = strHeight + 15;
//     iFrameObj.style.height = strHeight;
// }

/**
 * @event 
 * @name tac_center_onchange 
 * @description 선택 된 tab이 변경된 경우에 발생한다.
 */
scwin.tac_mxTab_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',style:'',id:'tac_mxTab',class:'wq_tab','ev:onchange':'scwin.tac_mxTab_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'td_tab_center0',label:'컨테이너오더'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'td_tab_center1',label:'작업경로 상세등록'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'iFrame0',frameMode:'wframe',src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_71b.xml'}},{T:1,N:'w2:content',A:{style:'',id:'iFrame1',src:'/ui/ds/sd/odrmgnt/odrreg/sd_402_01_72b.xml',alwaysDraw:'false',frameMode:'wframe'}}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'hid_odrNo'}},{T:1,N:'xf:input',A:{id:'hid_odrKndCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_chkReterieve',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_linkPage',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_cvsslMgntNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_blNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_lineCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_mcomAssgnClsCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_bookingNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_pickupdt',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_pickuphh',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'input11',style:'width:144px; height:21px; '}}]}]}]}]})