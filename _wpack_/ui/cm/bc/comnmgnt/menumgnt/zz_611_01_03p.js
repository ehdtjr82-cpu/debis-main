/*amd /ui/cm/bc/comnmgnt/menumgnt/zz_611_01_03p.xml 5553 0dd332a745201204b2be5e2f0e268a585b6d654e90fcc3c6efecc094e6c5f3ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_menuGrp',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'menuGrpNm',name:'메뉴그룹명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  console.log("===========scwin.onpageload==========");
  scwin.menuGrpNm = $c.data.getParameter($p, "menuGrpNm") == null ? "" : $c.data.getParameter($p, "menuGrpNm");

  // console.log("▶ evidac ["+scwin.menuGrpNm+"]");
  // console.log("▶ evidac ["+scwin.menuGrpNm.length+"]");
  // console.log("▶ evidac ["+JSON.stringify(scwin.menuGrpNm)+"]");

  for (var i = 0; i < scwin.menuGrpNm.length; i++) {
    var vmJson = JSON.stringify(scwin.menuGrpNm[i]);
    var vmenuGrpNm = JSON.parse(vmJson).code;
    ds_menuGrp.insertJSON(i, [{
      menuGrpNm: vmenuGrpNm
    }]);
  }
  spanTotal.setValue(ds_menuGrp.getRowCount());
  ds_menuGrp.modifyAllStatus("R");
};
scwin.btn_confrim_onclick = function (e) {
  scwin.f_ReturnResult();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

// scwin.f_OnLoad() {
// 	var headerStr = "menuGrpNm:STRING(30)";
// 	ds_menuGrp.SetDataHeader(headerStr);

// 	gr_menuGrp.IndWidth = 0;

// 	var oArg = window.dialogArguments;
// 	var menuGrps = oArg.split(",");
// 	for (var i = 0; i < menuGrps.length; i++) {
// 		ds_menuGrp.AddRow();
// 		ds_menuGrp.NameValue(ds_menuGrp.RowPosition, "menuGrpNm") = menuGrps[i].split(":")[0];
// 	}
// 	// ds_menuGrp.ResetStatus();
//     ds_menuGrp.modifyAllStatus("R")

// }; 

scwin.f_Cancel = function () {
  let rowIndex = ds_menuGrp.getRowPosition();
  if (ds_menuGrp.getRowStatus(rowIndex) != "R") {
    if (ds_menuGrp.getRowStatus(rowIndex) == "D") {
      ds_menuGrp.modifyRowStatus(rowIndex, "R");
    } else {
      $c.data.undoRow($p, ds_menuGrp, "Y");
    }
  }
};
scwin.f_Del = function () {
  let rowIndex = ds_menuGrp.getRowPosition();
  ds_menuGrp.removeRow(rowIndex);
  // if (ds_menuGrp.getRowStatus(rowIndex) == "C") {
  //     ds_menuGrp.removeRow(rowIndex);
  // } else {
  //     ds_menuGrp.deleteRow(rowIndex);
  // }
};
scwin.f_ReturnResult = function () {
  var arrRtnVal = new Array();
  arrRtnVal.evidac = ds_menuGrp.getAllArray();
  let rtnVal = [arrRtnVal.evidac];
  $c.win.closePopup($p, rtnVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' MY그룹관리 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_menuGrp',focusMode:'row',id:'gr_menuGrpNm',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'메뉴그룹명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'menuGrpNm',value:'',displayMode:'label',dataType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_menuGrpNm',id:'udc_menuGrpNm',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_Cancel',rowDelFunction:'scwin.f_Del'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confrim',style:'',type:'button','ev:onclick':'scwin.btn_confrim_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})