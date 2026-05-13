/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_04b.xml 19715 99cf7065728726bf0234089ebfa547dac4a26a51c1f1d664b3bd71eea44c3013 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.ctrtNo = $c.data.getParameter($p, "ctrtNo");
  scwin.clntNo = $c.data.getParameter($p, "clntNo");
  scwin.clntNm = $c.data.getParameter($p, "clntNm");
  scwin.bizDivCntrYn = $c.data.getParameter($p, "bizDivCntrYn");
  scwin.bizDivBulkYn = $c.data.getParameter($p, "bizDivBulkYn");
  scwin.bizDomTransYn = $c.data.getParameter($p, "bizDomTransYn");
  scwin.bizDomStvYn = $c.data.getParameter($p, "bizDomStvYn");
  scwin.bizDomStrYn = $c.data.getParameter($p, "bizDomStrYn");
  scwin.bizDomInatYn = $c.data.getParameter($p, "bizDomInatYn");
  scwin.bizDomTplYn = $c.data.getParameter($p, "bizDomTplYn");
  scwin.impYn = $c.data.getParameter($p, "impYn");
  scwin.expYn = $c.data.getParameter($p, "expYn");
  scwin.domesticYn = $c.data.getParameter($p, "domesticYn");
  scwin.sellClntClsNm = $c.data.getParameter($p, "sellClntClsNm");
  scwin.ctrtDistrictCd = $c.data.getParameter($p, "ctrtDistrictCd");
  scwin.intOpenedTab = 0;
  //scwin.arrTabMenu = new Array("하역","하역-장비사용료","하역-추가요율", "운송", "보관", "보관-추가요율", "내부요율");
  //scwin.MSG_SD_CRM_002 = "@에 변경된 사항이 있습니다. 저장하시겠습니까? \n확인을 누르시면 변경된 사항이 저장이되고, \n취소를 누르실 경우 모든 변경된 사항이 처음 조회된 상태가 됩니다.";
  scwin.PAGE_MOVE_CONFIRM = true;
  scwin.TAB_MOVE_CONFIRM = true;
  scwin.f_defaultValue();
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [tab_control]);
  if (cbx_bizDomStvYn.getValue() == "1") {
    tab_control.setSelectedTabIndex(0);
    $p.setTimeout(function () {
      $c.gus.cfDisableKey($p);
    }, 0);
    tab_control.getWindow(0).scwin.strCtrtNo = scwin.ctrtNo;
    return;
  }
  if (cbx_bizDomTransYn.getValue() == true) {
    tab_control.setSelectedTabIndex(3);
    $p.setTimeout(function () {
      $c.gus.cfDisableKey($p);
    }, 0);
    tab_control.getWindow(3).scwin.strCtrtNo = scwin.ctrtNo;
    return;
  }
  if (cbx_bizDomStrYn.getValue() == true) {
    tab_control.setSelectedTabIndex(4);
    $p.setTimeout(function () {
      $c.gus.cfDisableKey($p);
    }, 0);
    tab_control.getWindow(4).scwin.strCtrtNo = scwin.ctrtNo;
    return;
  }
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_ctrtNo.setValue(scwin.ctrtNo.substring(0, 9) + "-" + scwin.ctrtNo.substring(9, 11));
  ed_clntNo.setValue(scwin.clntNo);
  ed_clntNm.setValue(scwin.clntNm);
  cbx_bizDivCntrYn.setValue(scwin.bizDivCntrYn);
  cbx_bizDivBulkYn.setValue(scwin.bizDivBulkYn);
  cbx_bizDomStvYn.setValue(scwin.bizDomStvYn);
  cbx_bizDomTransYn.setValue(scwin.bizDomTransYn);
  cbx_bizDomStrYn.setValue(scwin.bizDomStrYn);
  cbx_bizDomInatYn.setValue(scwin.bizDomInatYn);
  cbx_bizDomTplYn.setValue(scwin.bizDomTplYn);
  cbx_impYn.setValue(scwin.impYn);
  cbx_expYn.setValue(scwin.expYn);
  cbx_domesticYn.setValue(scwin.domesticYn);
  ed_sellClntClsNm.setValue(scwin.sellClntClsNm);
  //hid_ctrtDistrictCd.value = "<%=ctrtDistrictCd%>"

  $c.gus.cfDisableObjects($p, [btn_rate]);
};

//-------------------------------------------------------------------------
// Tab Menu 이동시 변경된 데이타 처리 여부
//-------------------------------------------------------------------------
scwin.tab_control_onbeforeselect = function (selectedIndex, index) {
  scwin.tabIdxInfo = {
    newIdx: index,
    oldIdx: selectedIndex
  };
  if ($c.data.isModified($p, tab_control.getWindow(selectedIndex).ds_tariff)) {
    scwin.tab_control_onchange();
    return false;
  }
};
scwin.tab_control_onchange = async function (tabId, index, userTabId) {
  let oldWin = tab_control.getWindow(scwin.tabIdxInfo.oldIdx);
  if (!oldWin || !oldWin.ds_tariff || oldWin.ds_tariff.getRowCount() == 0) return;
  if (oldWin.ds_tariff.getModifiedJSON().length > 0) {
    let isCompleteChk = await scwin.f_isCompletedChk();
    if (!isCompleteChk) {
      tab_control.setSelectedTabIndex(scwin.tabIdxInfo.oldIdx);
      tab_control.getWindow().ds_tariff.undoAll();
      return true;
    }
    var label = tab_control.getTabInfo()[scwin.tabIdxInfo.oldIdx].label;
    let conf = await $c.win.confirm($p, label + "에 변경된 사항이 있습니다. 저장하시겠습니까? \n예를 누르시면 변경된 사항이 저장이되고, \n아니오를 누르실 경우 모든 변경된 사항이 처음 조회된 상태가 됩니다.");
    if (conf) {
      console.log("저장");
      //tab_control.setSelectedTabIndex(scwin.tabIdxInfo.oldIdx);
      const r = await oldWin.scwin.f_Save("cfm");
      if (r) {
        tab_control.setSelectedTabIndex(scwin.tabIdxInfo.newIdx);
      }
      return !r;
    } else {
      console.log("취소");
      let rows = oldWin.ds_tariff.getModifiedIndex();
      for (var i = 0; i < rows.length; i++) {
        if (oldWin.ds_tariff.getRowStatus(rows[i]) == "C") {
          oldWin.ds_tariff.removeRow(rows[i]);
        } else {
          oldWin.ds_tariff.undoRow(rows[i]);
        }
      }
      tab_control.setSelectedTabIndex(scwin.tabIdxInfo.newIdx);
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 완료된 계약이면 변경전 상태로 복구
//-------------------------------------------------------------------------
scwin.f_isCompletedChk = async function (tabIndex) {
  if (wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") == "02") {
    tab_control.getWindow(tabIndex).ds_tariff.undoAll();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_winOpen = async function (strIndex) {
  var strPath = "";
  var programNm = "";
  let programId = $c.data.getParameter($p, "menuInfo").refreshPid || "";
  let paramObj = {
    ctrtNo: ed_ctrtNo.getValue().replace("-", ""),
    bizDivCntrYn: cbx_bizDivCntrYn.getValue(),
    bizDivBulkYn: cbx_bizDivBulkYn.getValue(),
    bizDomTransYn: cbx_bizDomTransYn.getValue(),
    bizDomStvYn: cbx_bizDomStvYn.getValue(),
    bizDomStrYn: cbx_bizDomStrYn.getValue(),
    bizDomInatYn: cbx_bizDomInatYn.getValue(),
    bizDomTplYn: cbx_bizDomTplYn.getValue(),
    impYn: cbx_impYn.getValue(),
    expYn: cbx_expYn.getValue(),
    domesticYn: cbx_domesticYn.getValue(),
    sellClntClsNm: ed_sellClntClsNm.getValue(),
    clntNo: ed_clntNo.getValue(),
    clntNm: ed_clntNm.getValue(),
    ctrtDistrictCd: scwin.ctrtDistrictCd
  };
  let option = {
    openAction: "new",
    menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
  };
  switch (strIndex) {
    case 1:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
      programId = "sd_202_01_02b.jsp";
      programNm = "신규계약등록";
      paramObj = {
        ctrtNo: ed_ctrtNo.getValue().replace("-", "")
      };
      option.mdiTitle = "계약기본정보";
      break;
    case 2:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03b.xml";
      programId = "sd_202_01_03b.jsp";
      programNm = "계약작업경로관리";
      option.mdiTitle = "계약작업경로";
      break;
    case 3:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_04b.xml";
      programId = "sd_202_01_04b.jsp";
      programNm = "기본계약요율";
      option.mdiTitle = "기본계약요율";
      break;
    case 4:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_11b.xml";
      programId = "sd_202_01_11b.jsp";
      programNm = "할인/할증 요율관리";
      option.mdiTitle = "할인/할증요율";
      break;
    case 5:
      alert("준비중입니다.");
      break;
    case 6:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_13b.xml";
      programId = "sd_202_01_13b.jsp";
      programNm = "계약서이미지등록";
      option.mdiTitle = "계약서이미지";
      break;
    case 8:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01b.xml";
      programId = "sd_202_01_01b.jsp";
      programNm = "계약관리";
      $c.win.openMenu($p, programNm, strPath, programId, null, {
        openAction: "select"
      });
      return;
    default:
      break;
  }
  scwin.tabIdxInfo.newIdx = strIndex;
  scwin.tabIdxInfo.oldIdx = tab_control.getSelectedTabIndex();
  let chkVal = await scwin.tab_control_onchange("", strIndex);
  if (!chkVal) {
    $p.top().scwin.closeFlag = true;
    let curMdiIdx = $p.top().tac_layout.getSelectedTabIndex();
    option.addTabIndex = curMdiIdx;
    $p.top().tac_layout.deleteTab(curMdiIdx);
    $p.setTimeout(function () {
      $p.top().scwin.closeFlag = false;
    }, {
      delay: 200
    });
    $c.win.openMenu($p, programNm, strPath, programId, paramObj, option);
  }
};
scwin.f_recordCopy = function (objDataSet) {
  $c.gus.cfCopyRecord($p, objDataSet);
};

//계약기본정보 버튼
scwin.btn_base_onclick = function (e) {
  scwin.f_winOpen(1);
};

//작업경로 버튼
scwin.btn_path_onclick = function (e) {
  scwin.f_winOpen(2);
};

//계약요율 버튼
scwin.btn_rate_onclick = function (e) {
  scwin.f_winOpen(3);
};

//할인/할증 버튼
scwin.btn_disc_onclick = function (e) {
  scwin.f_winOpen(4);
};

//계약서이미지 버튼
scwin.btn_img_onclick = function (e) {
  scwin.f_winOpen(6);
};
scwin.btn_list_onclick = function (e) {
  scwin.f_winOpen(8);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_ctrtNo',placeholder:'',style:'',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_clntNo',placeholder:'',style:'',objType:'key'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_clntNm',placeholder:'',style:'',objType:'key'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_sellClntClsNm',placeholder:'',style:'',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDomStvYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDomTransYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDomStrYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDomInatYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDomTplYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약부문',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDivCntrYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bizDivBulkYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_impYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_expYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_domesticYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tab_control',style:'','ev:onchange':'scwin.tab_control_onchange','ev:onbeforeselect':'scwin.tab_control_onbeforeselect'},E:[{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_0',label:'하역',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_1',label:'하역-장비사용료',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_2',label:'하역-추가요율',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_3',label:'운송',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_4',label:'보관',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_5',label:'보관-추가요율',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tab_center_6',label:'내부요율',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content0',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_05b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content1',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_06b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content2',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_07b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_08b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content4',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_09b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content5',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_10b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content6',src:'/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_19b.xml'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin-top: 10px'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_base',style:'',type:'button','ev:onclick':'scwin.btn_base_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_path',style:'',title:'',type:'button','ev:onclick':'scwin.btn_path_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_rate',style:'',title:'',type:'button','ev:onclick':'scwin.btn_rate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_disc',style:'',title:'',type:'button','ev:onclick':'scwin.btn_disc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인/할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_img',style:'',title:'',type:'button','ev:onclick':'scwin.btn_img_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서이미지'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',label:'목록',style:'',type:'button','ev:onclick':'scwin.btn_list_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'목록'}]}]}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'width:0px; height:0px; ',id:'wfm_ctrtComplete',src:'/ui/ds/sd/salesactiv/ctrtmgnt/ctrtCompleteYn.xml'}}]}]}]})