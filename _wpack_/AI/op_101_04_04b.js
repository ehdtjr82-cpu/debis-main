/*amd /AI/op_101_04_04b.xml 24761 4853f73b2689bb7cb0b908d97e39c8ad45da432cf47721fa57eaa7873ce82e1c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfoList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deprtPortYn',name:'출항여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'launchWrkNm',name:'출항작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vssPortCnt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslPortcnt',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'터미널항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineInfo',name:'라인정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tot',name:'total',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.UpdateVesselPortCountEachDeparturePortCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cntrInfoList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveVesselPortCountEachDeparturePortCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_vssPortCnt","key":"OUT_DS1"},{"id":"ds_cntrInfoList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_vssPortCnt","key":"OUT_DS1"},{"id":"ds_cntrInfoList","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ds.op.rscconfirm.transrscconfirm.UpdateVesselPortCancelEachDeparturePortCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cntrInfoList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'scwin.sbm_cancel_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.chkStatus = 0;
scwin.hid_vsslCd = "";
scwin.hid_vsslNm = "";
scwin.hid_lineCd = "";
scwin.hid_lineNm = "";
scwin.hid_cvsslMgntNo = "";
scwin.txt_odrNo_param = "";
scwin.txt_vsslCd_param = "";
scwin.txt_vsslNm_param = "";
scwin.txt_portcnt_param = "";
scwin.txt_lineCd_param = "";
scwin.txt_lineNm_param = "";
scwin.txt_cvsslMgntNo_param = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.txt_vsslCd_param = scwin.params["vsslCd"] || "";
    scwin.txt_vsslNm_param = scwin.params["vsslNm"] || "";
    scwin.txt_portcnt_param = scwin.params["portcnt"] || "";
    scwin.txt_lineCd_param = scwin.params["lineCd"] || "";
    scwin.txt_lineNm_param = scwin.params["lineNm"] || "";
    scwin.txt_cvsslMgntNo_param = scwin.params["cvsslMgntNo"] || "";
    scwin.txt_odrNo_param = scwin.params["odrNo"] || "";
  }
};
scwin.onUdcCompleted = function () {
  txt_odrNo.setValue(scwin.txt_odrNo_param);
  txt_vsslCd.setValue(scwin.txt_vsslCd_param);
  txt_vsslNm.setValue(scwin.txt_vsslNm_param);
  txt_portcnt.setValue(scwin.txt_portcnt_param);
  txt_lineCd.setValue(scwin.txt_lineCd_param);
  txt_lineNm.setValue(scwin.txt_lineNm_param);
  txt_cvsslMgntNo.setValue(scwin.txt_cvsslMgntNo_param);
  txt_vsslCd.setFocus();
  if (txt_odrNo.getValue() != "") {
    scwin.f_Retrieve();
  }
};
scwin.f_defaultValue = function () {
  $c.gus.cfInitObjects($p, [txt_odrNo, txt_vsslCd, txt_vsslNm, txt_portcnt, txt_lineCd, txt_lineNm, txt_cvsslMgntNo, txt_cntrNo]);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  let pWhere = "";
  pName = txt_vsslCd.getValue().trim();
  switch (disGubun) {
    case 1:
      pCode = txt_cvsslMgntNo.getValue().replace(/\s*$/, '').toUpperCase();
      udc_vssl.ilCommonPopUp(scwin.callbackCvsslMgntNo, pCode, pName, 'T', null, null, '160,160', '3,4,5,6,7,8,9,10', 'O', null, null, null, null, null, pAllSearch, "본선관리,본선관리번호, 선박코드, 수입/수출여부");
      break;
    case 2:
      pCode = txt_lineCd.getValue().replace(/\s*$/, '').toUpperCase();
      pName = txt_lineNm.getValue().replace(/\s*$/, '').toUpperCase();
      udc_line.ilCommonPopUp(scwin.callbackLineInfo, pCode, pName, 'T', null, null, null, null, null, null, null, null, null, null, pAllSearch, "LINE,LINE코드,LINE명");
      break;
    case 3:
      pCode = txt_vsslCd.getValue().replace(/\s*$/, '').toUpperCase();
      pName = txt_vsslNm.getValue().replace(/\s*$/, '').toUpperCase();
      udc_vssl.ilCommonPopUp(scwin.callbackVsslCd, pCode, pName, 'T', null, null, null, null, null, null, null, null, null, null, pAllSearch, "모선,모선코드,모선명");
      break;
    default:
      break;
  }
};
scwin.callbackCvsslMgntNo = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      txt_cvsslMgntNo.setValue(rtnList[0]);
      scwin.hid_cvsslMgntNo = rtnList[0];
      txt_vsslCd.setValue(rtnList[1]);
      txt_portcnt.setValue(rtnList[5]);
      let pName = txt_vsslCd.getValue().trim();
      if (pName.length == 0) {
        scwin.f_chkOpenCommonPopUpText(txt_vsslCd, txt_vsslNm, 3);
      }
    } else {
      txt_cvsslMgntNo.setValue(scwin.hid_cvsslMgntNo);
    }
  } else {
    txt_cvsslMgntNo.setValue("");
    txt_vsslCd.setValue("");
    scwin.hid_cvsslMgntNo = "";
    let pName = txt_vsslCd.getValue().trim();
    if (pName.length == 0) {
      scwin.f_chkOpenCommonPopUpText(txt_vsslCd, txt_vsslNm, 3);
    }
  }
};
scwin.callbackLineInfo = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      txt_lineCd.setValue(rtnList[0]);
      txt_lineNm.setValue(rtnList[1]);
      scwin.hid_lineCd = rtnList[0];
    } else {
      txt_lineCd.setValue(scwin.hid_lineCd);
      txt_lineNm.setValue(scwin.hid_lineNm);
    }
  } else {
    txt_lineCd.setValue("");
    txt_lineNm.setValue("");
    scwin.hid_lineCd = "";
    scwin.hid_lineNm = "";
  }
};
scwin.callbackVsslCd = function (rtnList) {
  if (rtnList != null) {
    txt_vsslCd.setValue(rtnList[0]);
    txt_vsslNm.setValue(rtnList[1]);
    scwin.hid_vsslCd = rtnList[0];
  } else {
    txt_vsslCd.setValue("");
    txt_vsslNm.setValue("");
    scwin.hid_vsslCd = "";
  }
};
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun) {
  let pCode = "";
  let pName = "";
  let inValue = inObj.getValue().trim();
  let codeValue = codeObj.getValue();
  if (inValue == "") {
    codeObj.setValue("");
  }
  if (inValue.length == 0) {
    return;
  }
  pName = inValue;
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};
scwin.f_reqFieldChk = async function () {
  let len_vsslCd;
  let len_portcnt;
  let len_cvsslMgntNo;
  let len_odrNo;
  len_vsslCd = txt_vsslCd.getValue().trim().length;
  len_portcnt = txt_portcnt.getValue().trim().length;
  len_cvsslMgntNo = txt_cvsslMgntNo.getValue().trim().length;
  len_odrNo = txt_odrNo.getValue().trim().length;
  if (len_cvsslMgntNo > 0) return true;
  if (len_odrNo > 0) return true;
  if (len_vsslCd > 0 && len_portcnt == 0) {
    await $c.win.alert($p, "모선코드와 항차는 함께 입력해야 합니다.");
    txt_portcnt.setFocus();
    return false;
  }
  if (len_vsslCd == 0 && len_portcnt > 0) {
    await $c.win.alert($p, "모선코드와 항차는 함께 입력해야 합니다.");
    txt_vsslCd.setFocus();
    return false;
  }
  if (len_cvsslMgntNo + len_odrNo + len_vsslCd + len_portcnt == 0) {
    await $c.win.alert($p, "①선명+항차\n\n②본선관리번호\n\n③오더번호\n\n위 3가지 중 1가지는 반드시 입력해야 합니다.");
    txt_vsslCd.setFocus();
    return false;
  }
  return true;
};
scwin.f_setCheckBox = function () {
  for (let inx = 0; inx < ds_cntrInfoList.getRowCount(); inx++) {
    if (ds_cntrInfoList.getCellData(inx, "cntrStsCd") == "E") {
      ds_cntrInfoList.setCellData(inx, "deprtPortYn", 1);
    } else {
      ds_cntrInfoList.setCellData(inx, "deprtPortYn", 0);
    }
  }
};
scwin.f_Save = async function () {
  if (ds_cntrInfoList.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [gr_cntrInfoList]);
  if (chk) {
    let confirmResult = await $c.win.confirm($p, "저장하시겠습니까?");
    if (confirmResult == true) {
      await $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_reqFieldChk())) return;
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_cntrInfoListExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_cntrInfoList, {
    fileName: "선명항차별 출항처리.xlsx",
    sheetName: "선명항차별 출항처리"
  });
};
scwin.f_Cancel = async function () {
  for (let i = 0; i < ds_cntrInfoList.getRowCount(); i++) {
    if (ds_cntrInfoList.getCellData(i, "deprtPortYn") == 1) {
      if (ds_cntrInfoList.getCellData(i, "currPosNm") != "출항") {
        await $c.win.alert($p, "컨테이너 -->" + ds_cntrInfoList.getCellData(i, "cntrNo") + "는 출항처리가 되어 있지 않아 출항처리 취소할 수 없습니다.");
        return false;
      }
    }
  }
  let chk = await $c.gus.cfValidate($p, [gr_cntrInfoList]);
  if (chk) {
    let confirmResult = await $c.win.confirm($p, "출항취소 하시겠습니까?");
    if (confirmResult == true) {
      await $c.sbm.execute($p, sbm_cancel);
    }
  }
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  totalRows.setValue(ds_cntrInfoList.getTotalRow());
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_cancel_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_cancel_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_cntrInfoList.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, "컨테이너 목록이 없습니다.");
    return;
  }
  scwin.f_setCheckBox();
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_cntrInfoList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_cntrInfoList.getRowCount() == 0) return;
  if (rowIndex == -1 && columnId == "deprtPortYn") {
    for (let inx = 0; inx < ds_cntrInfoList.getRowCount(); inx++) {
      if (ds_cntrInfoList.getCellData(inx, "cntrStsCd") == "E") {
        ds_cntrInfoList.setCellData(inx, "deprtPortYn", 1);
      } else {
        if (ds_cntrInfoList.getCellData(inx, "selYn") == 1) {
          ds_cntrInfoList.setCellData(inx, "deprtPortYn", (scwin.chkStatus + 1) % 2);
        } else {
          ds_cntrInfoList.setCellData(inx, "deprtPortYn", 0);
        }
      }
    }
    scwin.chkStatus += 1;
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_openCommonPopUp(1, '', '', 'F', 'F');
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_Cancel();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num red',id:'',label:'선명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_vssl',codeId:'txt_vsslCd',nameId:'txt_vsslNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num red',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcnt',placeholder:'',style:'width:150px;',ref:'data:oGDS_view_cond.portcnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'txt_lineCd',nameId:'txt_lineNm',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num num2 red',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_cvsslMgntNo',class:'',ref:'data:oGDS_view_cond.cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_trigger1_onclick',id:'btn_trigger1',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'txt-num num3 red',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_odrNo',placeholder:'',style:'width:150px;',ref:'data:oGDS_view_cond.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_cntrNo',placeholder:'',style:'width: 230px;',ref:'data:oGDS_view_cond.cntrNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명항차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_m_vsslPortcnt',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.vsslPortcnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선적 PORT ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_m_pierNm',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.pierNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'터미널항차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_m_tmlPortcnt',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.tmlPortcnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_m_dptDt',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.dptDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_m_lineInfo',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.lineInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_m_tot',placeholder:'',style:'width:200px;',ref:'data:ds_vssPortCnt.tot'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title row-gap-8',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 선명항차별 출항처리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_cntrInfoList',id:'gr_cntrInfoList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtPortYn',inputType:'text',value:'출항여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨테이너번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'E/F',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',value:'현위치명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',value:'입항일시',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrStsCd',inputType:'text',value:'컨테이너상태코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosCd',inputType:'text',value:'현위치코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClsYn',inputType:'text',value:'관리구분YN',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'launchWrkNm',value:'출항작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selYn',value:'선택여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtPortYn',inputType:'checkbox',width:'100',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosNm',inputType:'text',width:'160',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrStsCd',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currPosCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClsYn',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'launchWrkNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger2',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'출항취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})