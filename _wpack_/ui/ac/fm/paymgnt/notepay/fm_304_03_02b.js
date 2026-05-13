/*amd /ui/ac/fm/paymgnt/notepay/fm_304_03_02b.xml 16029 c10e15ca3392c624a5334b9d05e16686afbbde9090029c38828bb9fc21d70334 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_electricBank',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveElectricBank',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FM063',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bankcd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_304_03_02b
// 이름     : 어음만기일별현황
// 경로     : 회계/자금관리/지급관리/지급어음관리/
// 작 성 자 : 황동규
// 작 업 일 : 2026-02-13
// 사용계정 : 내부
// 비고     : 오즈 oz
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

/** 
// 입금 계정코드를 가져온다.
CodeDTOCache codeDTOCache = CodeDTOCache.getInstance();
ArrayList a = new ArrayList();
CodeDTO codeDTO[] = codeDTOCache.getCodeDTOArray("FM048");

CodeDTO eachDTO = new CodeDTO();
// a = (CodeDTOCache) codeDTOCache.getCodeDTOArray("FM010");
String tmp_01 = codeDTO[0].getCdDesc();
String tmp_02 = codeDTO[1].getCdDesc();
String tmp_03 = codeDTO[2].getCdDesc();
String tmp_04 = codeDTO[3].getCdDesc();
*/
scwin.ELECTRONICDRAFT = "02"; // 전자지급어음
scwin.onpageload = async function () {
  //f_bankcd_Retrieve(); 안씀
  //scwin.comCodeList = $c.data.getCommonCodeDataList("FM048");
  const codeOptions = [{
    grpCd: "FM048",
    compID: "lc_draft_check_cls_cd"
  } //계정
  ];
  await $c.data.setCommonCode($p, codeOptions);
  await scwin.f_retrieveElectricBank(); // 먼저 해줘야 셋 가능
  lc_draft_check_cls_cd.setValue('01');
  var sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  ed_startprtDt.setValue(sCurrDate.substring(0, 6) + "01");
  ed_endprtDt.setValue(sCurrDate);
  lc_setlCls.setValue("00");
  lc_srcCls.setValue("00");
  $c.gus.cfDisableObjects($p, [lc_srcCls]);
};

//-------------------------------------------------------------------------
// 전자결재은행 데이타셋 생성(4월14일 수취은행 조건 추가)
//-------------------------------------------------------------------------
scwin.f_retrieveElectricBank = async function () {
  var res = await $c.sbm.execute($p, sbm_retrieveElectricBank);
  if (res.responseStatusCode == '200') {
    if (res.responseJSON.resultDataSet[0].Code = '0') {
      ds_electricBank.setJSON(res.responseJSON.GAUCE);
    }
  }
  ds_electricBank.sort("cdDesc", 0); // 2026-03-22 AsIs와 정렬 차이
  ds_electricBank.reform();
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeFM048"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_commonCode.setJSON(dlt.getAllJSON());
};
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  var rtnList = null;
  var sCmdName = "";
  code = txtCode.Text;
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.value;
  }
  switch (select_code) {
    // 차입기관 PopUp 호출
    case '1':
      sCmdName = "retrieveBankInfo";
      rtnList = cfCommonPopUp(sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입기관
      break;
    // 차입번호 PopUp 호출
    case '2':
      sCmdName = "retrieveBorrLedgNoInfo";
      rtnList = cfCommonPopUp(sCmdName, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입번호

      break;
  }
  if (rtnList != null) {
    txtCode.Text = rtnList[0]; // 코드
    if (txtName != null) {
      txtName.value = rtnList[1]; // 코드명
    }
    txtCode.hidVal = rtnList[0]; // 코드
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.tagName.toUpperCase() == "INPUT") {
    if (orgObjCd.value.trim() != "") {
      f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.value = "";
      }
      orgObjCd.value = "";
      orgObjCd.hidVal = "";
    }
  } else if (orgObjCd.tagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.Text.trim() != "") {
      f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.Text = "";
      }
      orgObjCd.Text = "";
    }
  }
};
scwin.f_OzReport = function () {
  var compVal = lc_draft_check_cls_cd.getValue();
  var tempVal = '';
  switch (compVal) {
    case '01':
      tempVal = ds_commonCode.getCellData(0, 'cdDesc');
      break;
    case '02':
      tempVal = ds_commonCode.getCellData(1, 'cdDesc');
      break;
    case '03':
      tempVal = ds_commonCode.getCellData(2, 'cdDesc');
      break;
    case '04':
      tempVal = ds_commonCode.getCellData(3, 'cdDesc');
      break;
    default:
      tempVal = 'err';
  }
  let reportName;
  /** 
       var odiParam = new ODIParam("fm_304_03_01") ;
      odiParam.add("sysPath", "dbl.ac.fm.paymgnt.notepay") ;
      odiParam.add("startprtDt", em_startprtDt.text.trim()) ; 
      odiParam.add("endprtDt",   em_endprtDt.text.trim()) ;  
      odiParam.add("draftCheckClsCd",lc_draft_check_cls_cd.BindColVal) ;   //계정구분
     // odiParam.add("draftCheckClsCdNm",lc_draft_check_cls_cd.text.trim());  //계정명
      odiParam.add("bankCd",lc_bankCd.BindColVal);  //은행명
     
      if ( lc_draft_check_cls_cd.BindColVal == "01" ){var  temp_val  = <%=tmp_01%>    } 
      if ( lc_draft_check_cls_cd.BindColVal == "02" ){var  temp_val  = <%=tmp_02%>    }        
      if ( lc_draft_check_cls_cd.BindColVal == "03" ){var  temp_val  = <%=tmp_03%>    }
      if ( lc_draft_check_cls_cd.BindColVal == "04" ){var  temp_val  = <%=tmp_04%>    }
      */

  reportName = "ac/fm/paymgnt/notepay/fm_304_03_01.ozr";
  let data = {
    reportName: reportName,
    odiName: 'fm_304_03_01',
    odiParam: {
      sysPath: 'dbl.ac.fm.paymgnt.notepay',
      startprtDt: ed_startprtDt.getValue().trim(),
      endprtDt: ed_endprtDt.getValue().trim(),
      draftCheckClsCd: lc_draft_check_cls_cd.getValue(),
      //계정구분
      bankCd: lc_bankCd.getValue(),
      setlCls: lc_setlCls.getValue(),
      //정리구분
      srcCls: lc_srcCls.getValue(),
      //만기,할인구분
      acctCd: tempVal //코드에 따른  코드설명(계정코드정의된것)가져오기
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: "false",
      zoom: "100"
    },
    formParam: {}
  };
  console.log(data);
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.lc_setlCls_onchange = function (info) {
  var v = info.newValue;
  var v2 = lc_draft_check_cls_cd.getValue();
  if (v == "01" && (v2 == "03" || v2 == "04")) {
    $c.gus.cfEnableObjects($p, [lc_srcCls]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_srcCls]);
  }
};
scwin.lc_draft_check_cls_cd_onchange = function (info) {
  var v = info.newValue;
  var v2 = lc_setlCls.getValue();
  if (v2 == "01" && (v == "03" || v == "04")) {
    $c.gus.cfEnableObjects($p, [lc_srcCls]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_srcCls]);
  }
  if (v == scwin.ELECTRONICDRAFT) {
    lc_bankCd.setDisabled(false); //AsIs enable true 니까 disableds는 false
  } else {
    lc_bankCd.setSelectedIndex(0);
    lc_bankCd.setDisabled(true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'width: 150px;',submenuSize:'fixed','ev:onchange':'scwin.lc_draft_check_cls_cd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'width: 150px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'전체','ev:onblur':'scwin.lc_bankCd_onblur'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_electricBank'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cdDesc'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar3',refEdDt:'',edFromId:'ed_startprtDt',edToId:'ed_endprtDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_setlCls',class:'',direction:'auto',ref:'','ev:onchange':'scwin.lc_setlCls_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_srcCls',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'만기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})