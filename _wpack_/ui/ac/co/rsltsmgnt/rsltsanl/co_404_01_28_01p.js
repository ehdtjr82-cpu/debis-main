/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_01p.xml 26990 21d12b77e86c7e035b8f993ad22113af8188d86f8b4f14611191b16c888d7ce7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCdNmSt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctNm',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:ondataload':'scwin.ds_detail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'전기실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfyyThisUnAmt',name:'전기미확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'당월실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisUnRsltsAmt',name:'당월미확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'증감',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisUnDiffer',name:'미확정증감',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumDiffer',name:'계',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역별계획대비실적상세2 (co_404_01_28_01p) - 전기대비증감 - 당월
// 작성자 : 송정희
// 최초작성일자 : 2026-11-26
//-------------------------------------------------------------------------

scwin.isSubCompany = false;
scwin.p_closeYm = "";
scwin.p_acctDeptCd = "";
scwin.p_acctDeptNm = "";
scwin.p_mgntAcctCd = "";
scwin.p_mgntAcctNm = "";
scwin.p_coCd = "";
scwin.p_coNm = "";
scwin.p_bizDomCd = "";
scwin.p_bizDomNm = "";
scwin.ret_detail_1 = false;
scwin.data = {};
scwin.opts = {};
scwin.url = {};
scwin.onpageload = function () {
  //		f_HeaderCreate();
  //		var closeYm = "<%=closeYm%>";
  //		var acctDeptCd = "<%=acctDeptCd%>";
  //		var acctCd = "<%=acctCd%>";
  //		var bizDomCd = "<%=bizDomCd%>";		
  //		f_setCompanyInfo();

  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYm = scwin.params.closeYm;
  scwin.p_acctDeptCd = scwin.params.acctDeptCd;
  scwin.p_acctDeptNm = scwin.params.acctDeptNm;
  scwin.p_mgntAcctCd = scwin.params.acctCd;
  scwin.p_mgntAcctNm = scwin.params.acctNm;
  let text = String(scwin.p_mgntAcctNm || "");
  const regex = /^[\s\dIVXLCDMivxlcdm.\u2160-\u217F)-]+(?=[가-힣(])/;
  scwin.p_mgntAcctNm = text.replace(regex, '');
  scwin.p_coCd = scwin.params.coCd;
  scwin.p_coNm = scwin.params.coNm;
  scwin.p_bizDomCd = scwin.params.bizDomCd;
  scwin.p_bizDomNm = scwin.params.bizDomNm;
  dma_search.set("closeYm", scwin.p_closeYm);
  dma_search.set("coCd", scwin.p_coCd);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("mgntAcctCd", scwin.p_mgntAcctCd);
  ed_closeYm.setValue(scwin.p_closeYm);
  ed_coCd.setValue(scwin.p_coCd);
  ed_coNm.setValue(scwin.p_coNm);
  $c.gus.cfDisableObjects($p, [ed_closeYm, ed_coCd, ed_coNm, udc_acctCd, udc_deptCd]);
  console.log("scwin.p_mgntAcctCd : " + scwin.p_mgntAcctCd);
  scwin.f_Retrieve();
};
scwin.ondataload = function () {
  scwin.f_openPopUp('1', 'T');
  scwin.f_openPopUp('2', 'T');
};
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 계정조회
      var temp = ",,";
      udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, scwin.p_mgntAcctCd, "", check, null, null, null, null, temp, null, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      // 부서
      var temp = ",,";
      udc_deptCd.cfCommonPopUp(scwin.udc_deptCd_callBackFunc, scwin.p_acctDeptCd, "", check, null, null, null, null, temp, null, null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.udc_acctCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc (계정 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  dma_search.set("mgntAcctCd", rtnList[0]);
  dma_search.set("mgntAcctNm", rtnList[1]);
};
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_deptCd_callBackFunc (부서 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  dma_search.set("acctDeptCd", rtnList[0]);
  dma_search.set("acctDeptNm", rtnList[1]);
};
//scwin.onUdcCompleted = function() {
//console.log("onUdcCompleted");        

//    ed_coCd.setValue("000");
//    ed_coNm.setValue("동원로엑스(주)");
//	ed_acctDeptCd.setValue('00000');
//	ed_acctDeptNm.setValue('전사');

//};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정  --> 팝업으로 readOnly
//-------------------------------------------------------------------------
//scwin.f_setCompanyInfo = function () {   
// 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
//    if( vUserHomeClsCd != '<%=ACConstants.SUBSIDIARY_USER_HOME_CLS_CD%>')  {  
//        vLoginCoCd = '<%=ACConstants.CO_CD_DONGBU%>';
//        vLoginCoClsCd =  '<%=ACConstants.CO_CLS_CD_DONGBU%>' ;
//    }

//    ed_coCd.setValue(vLoginCoCd);
//    scwin.f_PopUpCompanyInfo('T'); 

//    $c.gus.cfDisableObjects([ed_coCd,ed_coNm]);           
//}	

//-------------------------------------------------------------------------
// 회사 입력 팝업 --> 팝업으로 readOnly
//-------------------------------------------------------------------------
//scwin.f_PopUpCompanyInfo = async function(pWinCloseTF) {
//console.log("f_PopUpCompanyInfo"); 
////   scwin.param = "04";
//    scwin.check = pWinCloseTF;
//    udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc,ed_coCd.getValue(),ed_coNm.getValue(),scwin.check,null,null,null,null,scwin.param,null,null,null,null,null,null,null,null); 
//    udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc,ed_coCd.getValue(),ed_coNm.getValue(),scwin.check,null,null,null,null,null,null,null,null,null,null,null,null,null);     
//}
//-------------------------------------------------------------------------
// 회사 입력 팝업  callBackFunc --> 팝업으로 readOnly
//-------------------------------------------------------------------------
//scwin.udc_coCd_callBackFunc = function(ret) {
//    $c.gus.cfSetReturnValue(ret, ed_coCd, ed_coNm, [ed_input11, ed_input12, ed_input13, ed_input14]);
//    console.log(ret);
//    if (ret[0] != "N/A" && !$c.gus.cfIsNull(ret)) {
//        ed_coCd.setValue(ret[0]);  // 코드
//        ed_coNm.setValue(ret[5]);  // 회사명
//    } else {
//        ed_coCd.setValue("");  // 코드
//        ed_coNm.setValue("");  // 회사명
//    }
// 자회사 회계 시스템(?-txtCoClsCd : As-Is HiddenField였음 )
//    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
//    if (scwin.vLoginCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {        
//        scwin.isSubCompany = true;
//    } else {
//        scwin.isSubCompany = false;
//    }    
//};

//scwin.udc_coCd_onblurCodeEvent = function (e) {
//    if (ed_coCd.getValue().trim() == "") {
//        ed_coNm.setValue("");
//    }
//};

//scwin.udc_coCd_onblurNameEvent = function (e) {
//    scwin.f_PopUpCompanyInfo();
//};

//scwin.udc_coCd_onclickEvent = function (e) {
//    scwin.f_PopUpCompanyInfo();
//};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_detail);
};
scwin.ds_detail_ondataload = function () {
  let rowCnt = ds_detail.getTotalRow();
  totalRows.setValue(rowCnt);
  //scwin.tStndPcostYn = 0;
  //try { if (scwin.tStndPcostYn = chk_distYn.getSelectedIndex()) {scwin.tStndPcostYn=1;} else {scwin.tStndPcostYn=0;} } catch(e) { scwin.tStndPcostYn = 0; }
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (scwin.p_mgntAcctCd == "4101010") {
    gr_detail.setColumnVisible("bfyyThisUnAmt", true);
    gr_detail.setColumnVisible("thisUnRsltsAmt", true);
    gr_detail.setColumnVisible("thisUnDiffer", true);
    gr_detail.setColumnVisible("sumDiffer", true);
    gr_detail.setHeaderValue("h_thisDiffer", "매출증감");
  } else {
    gr_detail.setColumnVisible("bfyyThisUnAmt", false);
    gr_detail.setColumnVisible("thisUnRsltsAmt", false);
    gr_detail.setColumnVisible("thisUnDiffer", false);
    gr_detail.setColumnVisible("sumDiffer", false);
    gr_detail.setHeaderValue("h_thisDiffer", "증감");
  }
  ed_acctDeptNm.setValue(ds_detail.getCellData(0, "acctDeptCdNm"));
};

//-------------------------------------------------------------------------
//사업자별 누계팝업
//-------------------------------------------------------------------------
scwin.f_Detail = async function () {
  scwin.data = {
    closeYm: scwin.p_closeYm,
    acctDeptCd: scwin.p_acctDeptCd,
    acctDeptNm: dma_search.get("acctDeptNm"),
    mgntAcctCd: scwin.p_mgntAcctCd,
    mgntAcctNm: dma_search.get("mgntAcctNm"),
    bizDomCd: scwin.p_bizDomCd,
    bizDomNm: scwin.p_bizDomNm,
    coCd: scwin.p_coCd,
    coNm: scwin.p_coNm
  };
  scwin.opts = {
    id: "pop404012804p",
    title: "법인별 전기대비증감",
    popupName: "법인별 전기대비증감",
    modal: true,
    center: "yes",
    type: "browserPopup",
    width: "1200px",
    height: "730px",
    scroll: "no",
    resizable: "no",
    status: "yes"
  };
  scwin.url = "/ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_04p.xml";
  scwin.ret_detail_1 = await $c.win.openPopup($p, scwin.url, scwin.opts, scwin.data);
  console.log("ret_detail_1 - " + scwin.ret_detail_1);
};
scwin.btn_detail_onclick = function (e) {
  scwin.f_Detail();
};
scwin.btn_close_onclick = async function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_detail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_detail.getTotalCol(); i++) {
    if (gr_detail.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  /* 
      let str = $c.gus.cfGetFormatStr(ed_closeYm.getValue(), "####-##");
      let str_1 = $c.gus.cfGetFormatStr(ed_closeYm.getValue(), "######");    
      let str1 = ed_acctDeptCd.getValue(); 
      let str1_1 = ed_acctDeptCd.getText("true"); 
      let str2 = ed_mgntAcctCd.getValue(); 
      let str2_1 = ed_mgntAcctCd.getText("true"); 
      
      let startRowIndex = 0;
      let infoArr = [{
          rowIndex : 0,             
          colIndex : 0,            
          colSpan : gridColCount,   
          rowSpan : 1,
          text : "법인별 전기대비증감상세 당월",
          textAlign : "center",    
          fontSize : 12,
          drawBorder : false,       
          color : "black",          
          backgroundColor : "#ffffff" 
      },{
          rowIndex : 2,             
          colIndex : 0,           
          colSpan : gridColCount,  
          rowSpan : 1,
          text : "년월 ["+ str +"]",
          textAlign : "left",    
          fontSize : 10,
          drawBorder : false,       
          color : "black",       
          backgroundColor : "#ffffff" 
      },{
          rowIndex : 3,            
          colIndex : 0,            
          colSpan : gridColCount,   
          rowSpan : 1,
          text : "소속 ["+ str1 + " : " + str1_1 +"], 계정 ["+ str2 + " : " + str2_1 + "] " ,
          textAlign : "left",     
          fontSize : 10,
          drawBorder : false,        
          color : "black",         
          backgroundColor : "#ffffff" 
      }]
   */
  const options = {
    fileName: "전기대비증감",
    //sheetName: "년월" + str + "_소속" + str1+ "_계정" + str2 ,
    sheetName: "전기대비증감"
  };
  await $c.data.downloadGridViewExcel($p, gr_detail, options);
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  let sqlId = "";
  //관리계정
  if (colId == "mgntAcctCd") {
    scwin.txt_costClsCd = "04";
    ds_expn.setCellData(row, "mgntAcctCd", "");
    ds_expn.setCellData(row, "mgntAcctNm", "");
    let param = "T," + ",,,," + scwin.txt_costClsCd;
    udc_comCode_Grid.setSelectId("retrieveAcctCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 계정코드(그리드팝업)
 */
scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc = function (ret) {
  // let rowIdx = gr_expn.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ret[0]); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ret[1]); //계정명
  } else {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ""); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ""); //계정명
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_coCd',initValue:'텍스트',style:'width: 60px;'}},{T:1,N:'xf:input',A:{id:'ed_coNm',initValue:'텍스트',style:'width: 120px;'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCdSt',code:'acctDeptCd',codeId:'ed_acctDeptCdSt','ev:onblurCodeEvent':'scwin.ed_acctDeptCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.ed_acctDeptCdSt_onclickEvent',id:'udc_deptCd',maxlengthCode:'5',maxlengthName:'50',nameId:'ed_acctDeptNmSt',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfoPopup',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'부서From',name:'acctDeptNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'width: 80px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctCdSt',code:'mgntAcctCd',codeId:'ed_acctCdSt','ev:onblurCodeEvent':'scwin.udc_acctCdSt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctCdSt_onclickEvent',id:'udc_acctCd',maxlengthCode:'7',maxlengthName:'50',nameId:'ed_acctNmSt',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctCdInfopopup',refDataCollection:'dma_search',selectID:'retrieveAcctCdInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'계정From',name:'mgntAcctNm'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전기대비증감 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_detail',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'row',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column77',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'법인번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'전기실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'전기미확정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'당월실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'당월미확정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column89',value:'증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'미확정증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column86',value:'계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntAcctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntAcctCdNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCdNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'corRegNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bfyyThisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bfyyThisUnAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisRsltsAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisUnRsltsAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'thisDiffer',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisUnDiffer',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumDiffer',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sum(\'bfyyThisAmt\')',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'bfyyThisAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'bfyyThisUnAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'thisRsltsAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'thisUnRsltsAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sum(\'thisDiffer\')',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'thisDiffer\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'thisUnDiffer\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'sumDiffer\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_detail',style:'',type:'button','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자별집계'}]}]}]}]}]}]}]})