/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_3.xml 9557 09251cf4a3eebdfa7d161d71c964c134e7e79a89a8fe9744974ca8e29f118dc7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'DYNAMIC_FILE',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MAX_SIZE',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DISPLAY_HEIGHT',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filepath',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',scopeVariable:'DFWConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 부모화면 zz_210_02_02b (물류거래처관리)
// 아래 거래처자료 탭 안에 자료등록 버튼
// "1G34" == scwin.lobranCd || "1G36" == scwin.lobranCd
// 243030 (1111)

scwin.g_filePath = "";
scwin.g_fileNm = "";
scwin.g_fileTypeCd = "";
scwin.g_fileRegDt = "";
scwin.g_rmk = "";
scwin.g_accdNo = "temp";
scwin.fileNm = "";
scwin.g_dataYn = "N";
scwin.vToday = $c.date.getServerDateTime($p, 'yyyyMMdd');
scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "LO117",
    compID: "lc_fileTypeCd"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    lc_fileTypeCd.addItem('', '선택', 0);

    //파일 업로드 위치
    let systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
    let systemPathVal = "/cm/bc/clnt/clntmgnt";
    const paramData = $c.data.getParameter($p);
    const fileName = paramData.fileNm;
    scwin.g_fileNm = fileName.slice(0, fileName.indexOf("."));
    scwin.g_filePath = paramData.filePath;
    scwin.g_fileTypeCd = paramData.fileTypeCd;
    scwin.g_fileRegDt = paramData.fileRegDt;
    scwin.g_rmk = paramData.rmk;
    if (paramData != null) {
      txt_fileNm.setValue(scwin.g_fileNm);
      lc_fileTypeCd.setValue(scwin.g_fileTypeCd);
      fileRegDt.setValue(scwin.g_fileRegDt);
      txt_rmk.setValue(scwin.g_rmk);
      txt_filePath.setValue(scwin.g_filePath);
    }
    ;
    if ("" == scwin.g_fileTypeCd) {
      fileRegDt.setValue(scwin.vToday);
    }
    ;
  });
};
scwin.f_Close = function (e) {
  // tobe - 부모화면 팝업 후에 맞춰 파라미터 변경 (기존: [N/A])
  $c.win.closePopup($p);
};
scwin.fileSubmit = async function (e) {
  if (lc_fileTypeCd.getValue() == "") {
    await $c.win.alert($p, "구분을 선택하세요");
    return false;
  }
  if (fileRegDt.getValue() == "") {
    await $c.win.alert($p, "등록일자를 입력하세요");
    return false;
  }
  if (add_file.getData().length == 0) {
    await $c.win.alert($p, "파일을 등록하세요");
    return false;
  } else if (txt_fileNm.getValue() == "") {
    await $c.win.alert($p, "파일명을 입력하세요");
    return false;
  }

  // scwin.uploadComplete();
  add_file.startFileUpload();
};
scwin.uploadComplete = async function () {
  debugger;
  const uploadData = add_file.getData();
  let jsonData = [];
  uploadData.forEach(rowData => {
    debugger;
    jsonData.push({
      "filepath": rowData.FILE_STORED_PATH + rowData.STORED_FILE_NM,
      "filename": txt_fileNm.getValue()
    });
  });
  fileUploadGDS.setJSON(jsonData, false);
  add_file.setGridClear();
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  if (fileUploadGDS.getTotalRow() != 0) {
    txt_filePath.setValue(scwin.g_filePath);
  }
  debugger;
  scwin.g_filePath = txt_filePath.getValue() ?? '';
  scwin.g_fileNm = txt_fileNm.getValue() ?? '';
  scwin.g_fileTypeCd = lc_fileTypeCd.getValue();
  scwin.g_fileRegDt = fileRegDt.getValue();
  scwin.g_rmk = txt_rmk.getValue();
  let rtnList = [];
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileNm;
  rtnList[2] = scwin.g_fileTypeCd;
  rtnList[3] = scwin.g_fileRegDt;
  rtnList[4] = scwin.g_rmk;
  $c.win.closePopup($p, rtnList);

  // var rtnList = new Array();

  // scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");

  // if (fileUploadGDS.getTotalRow() != 0) {
  //     txt_filePath.setValue(scwin.g_filePath);
  // }

  // if (txt_filePath.getValue() == "") {
  //     await $c.win.alert("파일을 등록하세요");
  //     return false;
  // } else if (txt_fileNm.getValue() == "") {
  //     await $c.win.alert("파일명을 입력하세요");
  //     return false;
  // }

  // // g_fileTypeCd = argObject.fileTypeCd;
  // // g_fileRegDt = argObject.fileRegDt;

  // scwin.g_filePath = txt_filePath.getValue();
  // scwin.g_fileNm = txt_fileNm.getValue();
  // scwin.g_fileTypeCd = lc_fileTypeCd.getValue();
  // scwin.g_fileRegDt = fileRegDt.getValue();
  // scwin.g_rmk = txt_rmk.getValue();

  // rtnList[0] = scwin.g_filePath;
  // rtnList[1] = scwin.g_fileNm;
  // rtnList[2] = scwin.g_fileTypeCd;
  // rtnList[3] = scwin.g_fileRegDt;
  // rtnList[4] = scwin.g_rmk;

  // $c.win.closePopup(rtnList);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table_bg',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 200px;',allOption:'false',id:'lc_fileTypeCd',class:'',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 300px;',id:'txt_rmk',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일자 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'fileRegDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'파일',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'파일명 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width: 300px;',id:'txt_fileNm',class:'',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'add_file',subDir:'/cm/bc/clnt/clntmgnt',saveButtonYn:'N',saveFn:'scwin.fileSubmit','ev:onFileUploadDone':'scwin.uploadComplete'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.fileSubmit'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:input',A:{id:'txt_filePath',style:'display: none;'}}]}]}]}]}]})