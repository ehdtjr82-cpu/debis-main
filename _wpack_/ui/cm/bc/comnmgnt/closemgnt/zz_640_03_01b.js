/*amd /ui/cm/bc/comnmgnt/closemgnt/zz_640_03_01b.xml 7895 46b437343c9b78eaf7209573176f0059f1a8355e975601e09ea5c4162b8b73c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeLog',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'작업설명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_closeLog'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_closeLog',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do?coCd=&closeYm=&closeDd=00&wrkNo=&mgntNo=0',method:'post',mediatype:'application/json',ref:'data:json,dma_closeLog ',target:'data:json,{"id":"ds_closeLog","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_closeLog_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  const paramData = $p.getParameter("wframeParam");
  if ($c.gus.cfIsNull($p, paramData)) return;
  const data = JSON.stringify(paramData);
  let parsedData = JSON.parse(data);
  scwin.coCd = parsedData.coCd;
  scwin.closeYm = parsedData.closeYm;
  scwin.closeDd = parsedData.closeDd;
  scwin.wrkNo = parsedData.wrkNo;
  scwin.mgntNo = parsedData.mgntNo;
  dma_closeLog.set("coCd", scwin.coCd);
  dma_closeLog.set("closeYm", scwin.closeYm);
  dma_closeLog.set("closeDd", scwin.closeDd);
  dma_closeLog.set("wrkNo", scwin.wrkNo);
  dma_closeLog.set("mgntNo", scwin.mgntNo);
  $c.sbm.execute($p, sbm_closeLog);
};

//-------------------------------------------------------------------------
// 그리드 높이 늘리기
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (size) {
  var objGrd = "gr_closeLog";
  var objGrd = $p.getComponentById(objGrd);
  var strHeight = objGrd.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};
scwin.f_downExcelSheet = async function () {
  var vObjGrd = "gr_closeLog";
  var sheetTitle = "마감로그목록";
  if (ds_closeLog.getTotalRow() < 1) {
    $c.win.alert($p, "마감로그 목록이 없습니다.");
    return false;
  }
  var objGrd = $p.getComponentById(vObjGrd);
  cfrm = await $c.win.confirm($p, "마감로그목록을 EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    // cfGridToExcel(objGrd, sheetTitle, sheetTitle, 2 + 4 + 8 + 16);

    const grdObj = objGrd;
    const infoArr = [];
    const options = {
      fileName: sheetTitle //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    };
    $c.data.downloadGridViewExcel($p, gr_closeLog, options, infoArr);
  }
};

// for="ds_closeLog" event="OnLoadCompleted(rowcnt)"
scwin.sbm_closeLog_submitdone = function (e) {
  let rowcnt = gr_closeLog.getTotalRow();
  totalRows.setValue(rowcnt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감로그 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_downExcelSheet',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridID:'gr_closeLog'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_closeLog',id:'gr_closeLog',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',sortable:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'순번',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'시작일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'종료일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'작업자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'작업자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'오류번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'작업설명',width:'250'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeStDtm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeEndDtm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkId',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDesc',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]})