/*amd /ui/ac/fi/taxbiz/vatctrl/fi_401_01_01p.xml 9565 aed077bcd1a1d7d20e9af37e4f8ce0aa53134e131e462299b2abe333dc4fa913 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_excel',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'sellVatNo',name:'세금계산서번호'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.vAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.vUserEmpNo = scwin.memJson.empNo; // 사용자사원번호
scwin.vUserId = scwin.memJson.userId; // 사용자ID

scwin.stYm = "";
scwin.endYm = "";
scwin.submitDt = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  cbx_previewCheck.setValue(1);
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext === path.substring(flen - elen, flen);
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  if (excelUdc.getUpExt() == "1") {
    let options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0
    };
    ds_excel.removeAll();
    await $c.data.uploadGridViewCSV($p, gr_excel, options);
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0
    };
    ds_excel.removeAll();
    await $c.data.uploadGridViewExcel($p, gr_excel, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  $c.gus.cfProgressWinOpen($p);
  if (ds_excel.getRowCount == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  if (scwin.f_AddRowUploaded()) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, "업로드작업이 완료되었습니다.");
  }
};

//-------------------------------------------------------------------------
// 업로드 자료 추가
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = function () {
  if (ds_excel.getRowCount() > 0) {
    ds_evid.removeAll();
    for (let i = 0; i < ds_excel.getRowCount(); i++) {
      let row = ds_evid.insertRow();
      ds_evid.setCellData(row, "sellVatNo", ds_excel.getCellData(i, "sellVatNo"));
    }
  }
  totalRows.setValue(ds_evid.getRowCount());
  return true;
};

//-------------------------------------------------------------------------
// 매출세금계산서발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let param = "";
  if (ds_evid.getRowCount() === 0) {
    await $c.win.alert($p, "발행할 세금계산서를 업로드 하세요");
    return;
  }
  for (let i = 0; i < ds_evid.getRowCount(); i++) {
    param = param + "," + ds_evid.getCellData(i, "sellVatNo");
  }
  let data = {
    odiName: "fi_401_01_09p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_09p.ozr",
    odiParam: {
      pchsSellCls: param.substring(1),
      coCd: scwin.vLoginCoCd
    },
    viewerParam: {},
    formParam: {}
  };
  await scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.gr_excel_onfilereadend = function (value) {
  scwin.f_Upload();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'group1',style:'',gridDownYn:'N',btnUser:'N',gridUpUserAuth:'C',gridID:'gr_evid',gridUpFn:'scwin.f_excelUpload',id:'excelUdc'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',style:'',visibleRowNum:'8',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'세금계산서번호',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',style:'',value:'',width:'300',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'300'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄발행'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excel',id:'gr_excel',style:';display:none;',visibleRowNum:'15',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'세금계산서번호',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',readOnly:'true',style:'',value:'',width:'300'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'300'}}]}]}]}]}]}]}]})