/*amd /AI/ac_303_01_02b.xml 6311 f297cc606aaa4241ac9eeeff8c4dccdf44fbab902b515fb913991929ed73f2f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ramtConfirm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'잔액년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버젼',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = "";
scwin.sAcctDeptCd = "";
scwin.sAppDeptNm = "";
scwin.onpageload = function () {
  scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.sAcctDeptCd = $c.ses.getAcctDeptCd();
  scwin.sAppDeptNm = $c.ses.getAcctDeptNm();
  ed_stdYm.setValue(scwin.g_sCurrDate.substring(0, 6));
  ed_appDept.setValue(scwin.sAcctDeptCd);
  txt_appDeptNm.setValue(scwin.sAppDeptNm);
};
scwin.f_openPopUp = function (select_code, txtCodeId, txtNameId, sPopupCls) {
  let rtnList = null;
  let sCmdName = "";
  let code = $p.getComponentById(txtCodeId).getValue();
  let name = "";
  if (txtNameId != null) {
    name = $p.getComponentById(txtNameId).getValue();
  }
  switch (select_code) {
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      sCmdName = "retrieveBorrLedgNoInfo";
      rtnList = $c.gus.cfCommonPopUp($p, sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null);
      break;
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    $p.getComponentById(txtCodeId).setValue(rtnList[0]);
    if (txtNameId != null) {
      $p.getComponentById(txtNameId).setValue(rtnList[1]);
    }
  } else {
    $p.getComponentById(txtCodeId).setValue("");
    if (txtNameId != null) {
      $p.getComponentById(txtNameId).setValue("");
    }
  }
};
scwin.f_CheckPopUp = function (orgObjCdId, orgObjNmId, select_code) {
  let orgObjCd = $p.getComponentById(orgObjCdId);
  let orgObjNm = orgObjNmId != null ? $p.getComponentById(orgObjNmId) : null;
  let codeVal = orgObjCd.getValue();
  let hidVal = orgObjCd.getUserData("hidVal") || "";
  if (codeVal != hidVal) {
    if (orgObjNm != null) {
      orgObjNm.setValue("");
    }
  }
  if (codeVal.trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCdId, orgObjNmId, 'T');
  } else {
    if (orgObjNm != null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
    orgObjCd.setUserData("hidVal", "");
  }
};
scwin.f_Search = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_stdYm, udc_appDept]);
  if (!chk) return false;
  let odiParam = {};
  odiParam["CLOSE_YM"] = ed_stdYm.getValue();
  odiParam["DEPT_CD"] = ed_appDept.getValue();
  odiParam["DEPT_NM"] = txt_appDeptNm.getValue();
  let sPostYn = lc_postYn.getValue() + "";
  odiParam["POST_YN"] = sPostYn;
  let viewerParam = {};
  viewerParam["print.mode"] = "silent";
  let ozOptions = {
    reportName: "ac_303_01_02",
    ozrPath: "/il/acc/ac_303_01_02.ozr",
    odiParam: odiParam,
    viewerParam: viewerParam,
    formParam: {}
  };
  $c.gus.cfOZEmbedPreview($p, "wfm_ozReport", ozOptions);
};
scwin.ed_appDept_onblur = function (e) {
  scwin.f_CheckPopUp("ed_appDept", "txt_appDeptNm", '1');
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Search();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/cm/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_appDept',codeId:'ed_appDept',nameId:'txt_appDeptNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',pickerType:'dynamic',placeholderLocaleRef:'yearMonth',style:'',ref:'data:ds_ramtConfirm.stdYm',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_postYn',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})