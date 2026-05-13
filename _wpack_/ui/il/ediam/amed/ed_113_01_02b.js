/*amd /ui/il/ediam/amed/ed_113_01_02b.xml 19859 9cd7f6d5ec1bf9beb406ccfc296c114c72e1bf9aff914b5431efa5ee9926e835 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docNo',name:'문서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docType',name:'문서종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docNm',name:'문서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notiDt',name:'DTM(137):통보일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notiDt2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvDt',name:'DTM(148):수신일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvDt2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'remark',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'M B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'H B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reasonCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docNm2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_FileSearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'attachFileId',name:'첨부파일ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFileSize',name:'첨부파일크기',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AmendResultList',saveRemovedData:'true','ev:ondataload':'scwin.ds_AmendResultList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docNm',name:'문서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docNm2',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docType',name:'문서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'DTM(148):수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reasonCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'M B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'H B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioGb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.ediam.amed.RetrieveAmendAcpsResultCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_AmendResultList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AmendResultList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_file',action:'/il.ediam.amed.RetrieveAmendFileReadAcpsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_FileSearchParam","key":"IN_DS1"},{"id":"ds_AmendResultList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AmendResultList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_file_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.ediam.amed.SaveAmendFileReadAcpsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_AmendResultList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -7);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);

//파일 업로드 위치
scwin.systemPathKey = "FILE_UPLOAD_SYSTEM_PATH"; //DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
scwin.systemPathVal = "/il/airout/aoth/stock";
scwin.preRowPos = 0;
scwin.statusFlag = "";
scwin.ctrtNoRowCount = 0;
scwin.hd_kcomcd = "DBEX";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  const codeOptions = [{
    grpCd: "IL009",
    compID: "gr_AmendResultList:docType"
  }, {
    grpCd: "IL062",
    compID: "lc_docType"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_DefaultValue();
  }, {
    "delay": 100
  });
};
scwin.f_DefaultValue = function () {
  ica_rcvDt.setValue(scwin.strPreDate);
  ica_rcvDt2.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// function	name : f_FieldClear
// function	desc : 조회조건	초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};

//-------------------------------------------------------------------------
// function	name : f_Save
// function	desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  //tr_save.Post();
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = function () {
  //ds_SearchParam.AddRow();
  dma_SearchParam.set("docType", lc_docType.getValue());
  dma_SearchParam.set("rcvDt", ica_rcvDt.getValue().trim());
  dma_SearchParam.set("rcvDt2", ica_rcvDt2.getValue().trim());
  dma_SearchParam.set("mblno", cnd_ed_blno.getValue().trim());

  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
// fileId:STRING,fileName:STRING,filePath:STRING,fileSize:INTEGER"
//-------------------------------------------------------------------------

scwin.f_RetrieveFiles = async function () {
  var chk = await $c.win.confirm($p, "신고 결과를 수신 하시겠습니까?");
  if (chk) {
    //?	
    var rtnList = new Array();
    /*
    var arrParm   = new Array();
    var sTopLeft  = null ;
    var sWidthHeight= null ;
    
    sWidthHeight = "dialogWidth:460px; " + "dialogHeight:280px; " 
    
    //sWidthHeight + " " + sTopLeft + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No"
    var sFeatures = sWidthHeight + " " + " " + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No"
     sURL = "/il/common/jsp/ilCommonKtnetRecvFHL.jsp";       
    rtnList = window.showModalDialog(sURL,'',sFeatures); 
    */

    var win_url = "/ui/il/common/xml/ilCommonKtnetRecvFHL.xml";
    var opts = scwin.opts || {};
    opts.modal = true;
    opts.type = "browserPopup";
    opts.id = scwin.popupID || "pupup";
    opts.width = 460;
    opts.height = 280;
    opts.popupName = 'FHL/FWB 결과 수신';
    rtnList = await $c.win.openPopup($p, win_url, opts, null);
    console.log("rtnList : ", rtnList);
  }
};
/*
scwin.f_Save = function () {
    

//		if(fileUploadGDS.CountRow==0){
//			alert("저장할 파일이 없습니다.");
//			return;
//		}else if(fileUploadGDS.CountRow>1){
//			alert("파일이 여러개 존재 합니다.\n하나만 올리시기 바랍니다.");
//			return;
//		}
//		alert(fileUploadGDS.NameValue(1,'fileSize')+"\n"
//		+fileUploadGDS.NameValue(1,'fileName')+"\n"
//		+fileUploadGDS.NameValue(1,'filePath'));
    //파일 읽기
    
    //return;
    //dma_FileSearchParam.clearData();
    //dma_FileSearchParam.AddRow();
    dma_FileSearchParam.set("attacthFileId", fileUploadGDS.getCellData(1, "fileId"));
    dma_FileSearchParam.set("attachFileNm", fileUploadGDS.getCellData(1, "fileName"));
    dma_FileSearchParam.set("attachFilePath", fileUploadGDS.getCellData(1, "filePath"));
    dma_FileSearchParam.set("attachFileSize", fileUploadGDS.getCellData(1, "fileSize"));

    //if(cfConfirmMsg("정정 결과를 수신 하시겠습니까?")){ //?	
        //tr_retrieve_file.Post();
        $c.sbm.execute(sbm_retrieve_file);
    //}
    //그리드 뿌리기
}
*/

//-------------------------------------------------------------------------
// House b/l 바로 가기 
//-------------------------------------------------------------------------
scwin.f_HouseLink = function () {
  var row = ds_AmendResultList.getRowPosition();
  if (/*row > 0 && */ds_AmendResultList.getCellData(row, "docType") == "AIRFNA") {
    if (ds_AmendResultList.getCellData(row, "ioGb") == "I") {
      var v_blno = ds_AmendResultList.getCellData(row, "hblno");
      /*
      var strPath = "/il/airinb/aibl/ar_203_01_01b.jsp?kcomcd=" + hd_kcomcd.value +
                                                          "&blno=" + v_blno;  
      */
      var strPath = "/ui/il/airinb/aibl/ar_203_01_01b.xml";
      var param = {
        kcomcd: scwin.hd_kcomcd,
        blno: v_blno
      };
      //cfTabMenuUpdate( strPath , "Import House B/L");	
      $c.win.openMenu($p, "Import House B/L", strPath, "ar_203_01_01b.xml", param);
    } else {
      var v_blno = ds_AmendResultList.getCellData(row, "hblno");
      /*
      var strPath = "/il/airout/aobl/ar_104_01_01b.jsp?kcomcd=" + hd_kcomcd.value +
                                                          "&blno=" + v_blno;  
      */
      var strPath = "/ui/il/airout/aobl/ar_104_01_01b.xml";
      var param = {
        kcomcd: scwin.hd_kcomcd,
        blno: v_blno
      };
      //cfTabMenuUpdate( strPath , "Export House B/L");	
      $c.win.openMenu($p, "Export House B/L", strPath, "ar_104_01_01b.xml", param);
    }
  }
};
scwin.sbm_retrieve_file_submitdone = function (e) {
  for (var i = 0; i < ds_AmendResultList.getRowCount(); i++) {
    //ds_AmendResultList.UserStatus(i)=1;
    ds_AmendResultList.modifyRowStatus(i, "C");
  }
  //tr_save.post();
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.f_Retrieve();
  }
};
scwin.ds_AmendResultList_ondataload = function () {
  var rowcnt = ds_AmendResultList.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, "Data not found.");
  }
  for (var i = 0; i < ds_AmendResultList.getRowCount(); i++) {
    var hblno = ds_AmendResultList.getCellData(i, "hblno");
    console.log(hblno);
    ds_AmendResultList.setCellData(i, "docNm2", $c.gus.decode($p, hblno, "", "FWB", "FHL"));
  }

  //+mblno-hblno+docNm2+docNm+rcvDt
  var options = {};
  options.sortIndex = "mblno hblno docNm2 docNm rcvDt";
  options.sortOrder = "1 -1 1 1 1";
  ds_AmendResultList.multisort(options);
  spa_cnt.setValue(rowcnt);
};
scwin.gr_gridView1_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "hblno") {
    scwin.f_HouseLink();
  }
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_recieve_onclick = function (e) {
  scwin.f_RetrieveFiles();
};
scwin.btn_return_onclick = function (e) {
  scwin.f_Save();
};
scwin.docNmExp = function (docNm) {
  var docNm2 = $c.gus.decode($p, docNm, "", "FWB", "FHL");
  return docNm2;
};
scwin.reasonCd = function (reasonCd) {
  var reasonCd2 = $c.gus.decode($p, reasonCd, "", "승인", reasonCd);
  return reasonCd2;
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문서종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_docType',search:'start',style:'width:220px;',submenuSize:'auto',ref:'data:dma_SearchParam.docType',chooseOption:'true',chooseOptionLabel:'전체',disableEdit:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;',ref:'data:dma_SearchParam.mblno','ev:onkeyup':'scwin.onkeyup',maxlength:'20',allowChar:'0-9.A-Z,a-z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통보일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_SearchParam',refEdDt:'notiDt2',refStDt:'notiDt',style:'',edFromId:'ica_rcvDt',edToId:'ica_rcvDt2'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FHL/FWB 결과내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"FHLFWB 결과조회.xlsx","sheetName" : "FHLFWB 결과조회","colMerge" : "true" , "type":"4+8+16"}',gridID:'gr_AmendResultList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_AmendResultList',id:'gr_AmendResultList',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_gridView1_oncellclick',rowNumVisible:'true',rowNumHeaderValue:'No',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Master B/L',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'House B/L',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'발신문서명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수신문서명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'문서종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'통보일시',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'승인여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상세',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docNm2',inputType:'text',width:'70',expression:'scwin.docNmExp(datalist(\'docNm\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docType',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvDt',inputType:'text',width:'70',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reasonCd',inputType:'expression',width:'70',expression:'scwin.reasonCd(datalist(\'reasonCd\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',width:'140'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_recieve',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_recieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'결과수신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_return',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_return_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'결과변환'}]}]}]}]}]}]}]}]}]})