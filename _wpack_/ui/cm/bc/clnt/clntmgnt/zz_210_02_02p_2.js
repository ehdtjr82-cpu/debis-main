/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_2.xml 16085 223c50a96c8d70ec3d8e7da981caa5b8baa54dc3e804e741881fa388358490f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'filepath',name:'filepath',dataType:'text'}},{T:1,N:'w2:key',A:{id:'filename',name:'filename',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fileSize',name:'fileSize',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : zz_210_02_02p_2
// 이름     : 계약서 파일 등록
// 경로     : 공통/거래처/거래처관리/물류거래처관리
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-28
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 물류거래처관리 탭에서 호출 
//==================================================================================================================

//파일 업로드 위치
//scwin.systemPathKey =  DFWConstants.D.FILE_UPLOAD_SYSTEM_PATH ;
scwin.systemPathKey = "FILE_UPLOAD_SYSTEM_PATH";
//scwin.systemPathVal =  "/cm/bc/clnt/clntmgnt";
scwin.systemPathVal = "/fileUpload";

//var argObject = window.dialogArguments;
scwin.params = $c.data.getParameter($p);
scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_ctrtClsCd = "";
scwin.g_ctrtType = "";
scwin.g_ctrtFromDt = "";
scwin.g_ctrtEndDt = "";
scwin.g_rmk = "";
scwin.g_accdNo = "temp";
scwin.fileName = "";
scwin.g_dataYn = "N";
scwin.txt_filePath = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  btn_save.hide();
  if (scwin.params != null && scwin.params.contractCtrtClsCd != null) {
    scwin.fileName = scwin.params.contractFileNm;
    scwin.g_dataYn = "Y";
    scwin.g_filePath = scwin.params.contractFilePath;
    scwin.g_fileName = scwin.fileName.substring(0, scwin.fileName.indexOf("."));
    scwin.g_ctrtClsCd = scwin.params.contractCtrtClsCd;
    scwin.g_ctrtType = scwin.params.contractCtrtType;
    scwin.g_ctrtFromDt = scwin.params.contractCtrtFromDt;
    scwin.g_ctrtEndDt = scwin.params.contractCtrtEndDt;
    scwin.g_rmk = scwin.params.contractRmk;
    ed_rmk.setValue(scwin.g_rmk);
  }
  const codeOptions = [{
    grpCd: "LO113",
    compID: "lc_ctrtClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  /*
  lc_ctrtClsCd : 계약서 구분
  ctrtType : 계약서 종류
  */
  var value = scwin.g_ctrtClsCd;
  lc_ctrtClsCd.setValue(value); // complete에서 안됨
  console.log(lc_ctrtClsCd.getValue());
  ed_fileNm.setValue(scwin.g_fileName);
  ctrtType.setValue(scwin.g_ctrtType);
  ctrtFromDt.setValue(scwin.g_ctrtFromDt);
  ctrtEndDt.setValue(scwin.g_ctrtEndDt);
  ed_rmk.setValue(scwin.g_rmk);
  scwin.txt_filePath = scwin.g_filePath;
  if (lc_ctrtClsCd.getValue() == "01") {
    ed_rmk.setValue("");
    $c.gus.cfEnableObj($p, ed_rmk, false);
    $c.gus.cfEnableObj($p, ctrtType, true);
    $c.gus.cfEnableObj($p, ed_fileNm, true);
    $c.gus.cfEnableObj($p, [udc_fromToCalendar1]);
    $c.gus.cfEnableObj($p, ed_fileNm, true);
  } else if (lc_ctrtClsCd.getValue() == "03" || lc_ctrtClsCd.getValue() == "04") {
    ctrtType.setValue("");
    fileUploadGDS.set("filepath", "");
    ctrtFromDt.setValue("");
    ctrtEndDt.setValue("");
    ed_fileNm.setValue("");
    $c.gus.cfEnableObj($p, ed_rmk, true);
    $c.gus.cfEnableObj($p, ctrtType, false);
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]); // 버튼 까지 다루려면 각각이 아닌 udc에 먹여야함
    $c.gus.cfEnableObj($p, ed_fileNm, false);
    btn_save.show();
  } else if (lc_ctrtClsCd.getValue() == "02") {
    ed_fileNm.setValue(scwin.g_fileName);
    ed_rmk.setValue("");
    ctrtType.setValue("");
    ctrtFromDt.setValue("");
    ctrtEndDt.setValue("");
    $c.gus.cfEnableObj($p, ed_rmk, false);
    $c.gus.cfEnableObj($p, ctrtType, false);
    $c.gus.cfEnableObj($p, ed_fileNm, true);
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]);
  }

  //팝업 타이틀 변경 프레임 밖(옵션으로 안됨)

  $c.data.setPopupTitle($p, '계약서 파일 등록');
};
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
scwin.f_Close = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// function name : fileSubmit
// function desc : File Upload 
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  //var rtnList = new Array();	
  //var formObj = document.frm ;	

  if (lc_ctrtClsCd.getValue() == "") {
    $c.win.alert($p, "계약서 구분을 선택하세요");
    return false;
  }
  if (lc_ctrtClsCd.BindColVal == "01") {
    if (ctrtType.getValue() == "") {
      $c.win.alert($p, "계약서종류를 선택하세요");
      return false;
    }
  }
  if (ctrtType.getValue() != "") {
    if (ctrtFromDt.getValue() == "" && ctrtEndDt.getValue() == "") {
      $c.win.alert($p, "계약일자를 입력하세요");
      return false;
    }
    var fromDt = ctrtFromDt.getValue();
    var endDt = ctrtEndDt.getValue();

    //날짜가 올바로 입력되었는지 체크
    //if (!cfValidateValue(fromDt, "date=YYYYMMDD") ){
    //alert("cfValidateValue 전환에서 제외 ...isDate 로 날짜데이터 형식인지 확인");
    if (!$c.date.isDate($p, fromDt)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["계약시작일자"]); //은(는) 유효한 날자가 아님니다.
      ctrtFromDt.focus();
      return;
    }
    if (!$c.date.isDate($p, endDt)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["계약종료일자"]); //은(는) 유효한 날자가 아님니다.
      ctrtEndDt.focus();
      return;
    }
    if (fromDt > endDt) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여 주십시요..
      return;
    }
  }
  if (lc_ctrtClsCd.getValue() == "03" || lc_ctrtClsCd.getValue() == "04") {
    if (ed_rmk.getValue() == "") {
      $c.win.alert($p, "사유를 입력하세요");
      return false;
    }
  }
  if (lc_ctrtClsCd.getValue() == "01" || lc_ctrtClsCd.getValue() == "02") {
    //cfUploadFile 임시주석 1126
    //alert("여기서 업로드 하고 결과 반환 ... 인듯 아랫줄 임시주석");
    //cfUploadFile( formObj , fileUploadGDS, "uploadComplete" , true);
    let res = udc_fileUpload.startFileUpload();
  } else {
    //alert("scwin.uploadComplete");
    scwin.uploadComplete();
  }
};
scwin.btn_save_onclick = function (e) {
  //scwin.fileSubmit();
  var rtnList = new Array();
  scwin.g_rmk = ed_rmk.getValue();
  rtnList[0] = "";
  rtnList[1] = "";
  rtnList[2] = lc_ctrtClsCd.getValue();
  rtnList[3] = "";
  rtnList[4] = "";
  rtnList[5] = "";
  rtnList[6] = scwin.g_rmk;

  //alert("window.returnValue 아랫부분 고민");
  console.log(rtnList);
  //window.returnValue = rtnList;
  $c.win.closePopup($p, rtnList);
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
//-------------------------------------------------------------------------
scwin.uploadComplete = function () {
  var rtnList = new Array();
  // 업로드 후처리
  var lastIdx = -1;
  var fileList = new Array();
  console.log('scwin.uploadComplete');
  console.log(udc_fileUpload.getData().length);
  if (udc_fileUpload.getData().length > 0) {
    lastIdx = udc_fileUpload.getData().length - 1;
    fileList = udc_fileUpload.getData();
    scwin.txt_filePath = fileList[lastIdx].FILE_STORED_PATH;
  }

  //HDG scwin.g_filePath = fileUploadGDS.get("filepath");
  //if(fileUploadGDS.CountRow != 0){
  //scwin.txt_filePath = scwin.g_filePath;
  //}

  // 계약서 첨부 파일 체크
  if (lc_ctrtClsCd.getValue() == "01" || lc_ctrtClsCd.getValue() == "02") {
    if (scwin.txt_filePath == "") {
      $c.win.alert($p, "파일을 등록하세요");
      return false;
    } else if (ed_fileNm.getValue() == "") {
      $c.win.alert($p, "파일명을 입력하세요");
      return false;
    }
  }
  if (fileList.length > 0) {
    scwin.g_filePath = fileList[lastIdx].FILE_STORED_PATH + fileList[lastIdx].STORED_FILE_NM; //ToBe는 따로옴
    scwin.g_fileName = ed_fileNm.getValue();
    scwin.g_ctrtClsCd = lc_ctrtClsCd.getValue();
    scwin.g_ctrtType = ctrtType.getValue();
    scwin.g_ctrtFromDt = ctrtFromDt.getValue();
    scwin.g_ctrtEndDt = ctrtEndDt.getValue();
  }
  scwin.g_rmk = ed_rmk.getValue();
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  rtnList[2] = scwin.g_ctrtClsCd;
  rtnList[3] = scwin.g_ctrtType;
  rtnList[4] = scwin.g_ctrtFromDt;
  rtnList[5] = scwin.g_ctrtEndDt;
  rtnList[6] = scwin.g_rmk;

  //alert("window.returnValue 아랫부분 고민");
  console.log(rtnList);
  //window.returnValue = rtnList;
  $c.win.closePopup($p, rtnList);
  //window.close(rtnList);
};

/*
<script language=JavaScript for="lc_ctrtClsCd" event=onSelChange()>
*/
scwin.lc_ctrtClsCd_onchange = function (info) {
  btn_save.hide();
  if (lc_ctrtClsCd.getValue() == "01") {
    ed_rmk.setValue("");
    scwin.txt_filePath = "";
    $c.gus.cfEnableObj($p, ed_rmk, false);
    $c.gus.cfEnableObj($p, ctrtType, true);
    $c.gus.cfEnableObj($p, ed_fileNm, true);
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]);
    $c.gus.cfEnableObj($p, udc_fileUpload, true);
  } else if (lc_ctrtClsCd.getValue() == "03" || lc_ctrtClsCd.getValue() == "04") {
    ctrtType.setValue("");
    scwin.txt_filePath = "";
    ctrtFromDt.setValue("");
    ctrtEndDt.setValue("");
    ed_fileNm.setValue("");
    $c.gus.cfEnableObj($p, ed_rmk, true);
    $c.gus.cfEnableObj($p, ctrtType, false);
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]);
    $c.gus.cfEnableObj($p, ed_fileNm, false);
    $c.gus.cfEnableObj($p, udc_fileUpload, false);
    btn_save.show();
  } else if (lc_ctrtClsCd.getValue() == "02") {
    scwin.txt_filePath = "";
    ed_fileNm.setValue("");
    ed_rmk.setValue("");
    ctrtType.setValue("");
    ctrtFromDt.setValue("");
    ctrtEndDt.setValue("");
    $c.gus.cfEnableObj($p, ed_rmk, false);
    $c.gus.cfEnableObj($p, ctrtType, false);
    $c.gus.cfEnableObj($p, ed_fileNm, true);
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]);
    debugger;
    $c.gus.cfEnableObj($p, ed_fileNm, true);
    $c.gus.cfEnableObj($p, udc_fileUpload, true);
    debugger;
  }
};

//계약서 종류 선택시
scwin.ctrtType_onchange = function (info) {
  if (info.newValue == "1" || info.newValue == "0") {
    $c.gus.cfEnableObjects($p, [udc_fromToCalendar1]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'선택',ref:'','ev:onchange':'scwin.lc_ctrtClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',style:'width: 200px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약서종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'ctrtType',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.ctrtType_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'갱신대상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동연장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ctrtFromDt',edToId:'ctrtEndDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약서 파일',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fileNm',style:'width: 300px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap no-title',id:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',id:'udc_fileUpload',saveFn:'scwin.fileSubmit','ev:onFileUploadDone':'scwin.uploadComplete',subDir:'/cm/bc/clnt/clntmgnt'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})