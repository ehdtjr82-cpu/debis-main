/*amd /ui/bp/fbp/op/ac/ez_202_01_05p.xml 11824 3df0a510680ee44997bc5d9c32e59dc650100db643b02b462ada99c31dba802c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_AlloccarFlDivision'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'flIdx',name:'화물번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flDtlIdx',name:'화물상세',dataType:'text'}},{T:1,N:'w2:key',A:{id:'divQty',name:'분할 할 중량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'divWt',name:'분할 할 수량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_result',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'outMsg',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_AlloccarFlDivision',action:'/ncall.bp.fbp.op.ac.AlloccarFlDivisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_AlloccarFlDivision","key":"IN_ALLOCCAR_FL_DIVISION"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_AlloccarFlDivision_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// <조회조건>
// 배차관리 화면(ez_208_01_02b)에서 상단의 화물(합적번호가 없는 것) 선택 후 [화물분할] 버튼을 클릭하면 해당 화면이 오픈
// asis기준 그리드 3번째 선택 시 오픈가능

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.userID = scwin.memJson.userId; //사용자ID
scwin.userName = scwin.memJson.userNm; //사용자명

scwin.onpageload = async function () {
  await scwin.onLoadSetting();
};
scwin.onLoadSetting = async function () {
  // scwin.params = $c.data.getParameter();
  scwin.params = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow();
  var flType = scwin.params.scwin.CargoType; // 화물종류(벌크,컨테이너)
  var lclRow = scwin.params.scwin.selectedLclRow; // 선택된 화물정보

  // 화물이 선택되었는지 체크
  if (lclRow < 0 || lclRow == null || lclRow == undefined) {
    await $c.win.alert($p, '화물정보가 선택되지 않았습니다. 화물정보를 선택하여 주시기 바랍니다.');
    $c.win.closePopup($p);
    return;
  }

  // 벌크화물만 분할한다.		
  if (flType != 'cargo') {
    await $c.win.alert($p, "컨테이너 화물은 분할할 수 없습니다.");
    $c.win.closePopup($p);
    return;
  }
  ;
  if (scwin.params.ds_fl.getCellData(lclRow, "dmCoshippingNo") != "") {
    await $c.win.alert($p, "합적 번호가 있는 화물은 분할할 수 없습니다.");
    $c.win.closePopup($p);
    return;
  }
  txt_goods.setValue(scwin.params.ds_fl.getCellData(lclRow, "goods"));
  txt_onPos.setValue(scwin.params.ds_fl.getCellData(lclRow, "onPos"));
  txt_offPos.setValue(scwin.params.ds_fl.getCellData(lclRow, "offPos"));
  txt_onDt.setValue(scwin.params.ds_fl.getCellData(lclRow, "onDt"));
  txt_offDt.setValue(scwin.params.ds_fl.getCellData(lclRow, "offDt"));
  txt_wt.setValue(scwin.params.ds_fl.getCellData(lclRow, "wt"));
  txt_qty.setValue(scwin.params.ds_fl.getCellData(lclRow, "qty"));
  txt_divWt.setValue("0");
  txt_divQty.setValue("0");
  if (txt_wt.getValue() == "0" && txt_qty.getValue() != "0") {
    txt_divQty.focus();
  } else if (txt_wt.getValue() != "0" && txt_qty.getValue() == "0") {
    txt_divWt.focus();
  }
};
scwin.chingeDivMode = async function (Flag) {
  if (Flag == "wt") {
    txt_divQty.setValue("0");
    txt_divWt.setValue("");
    if (txt_wt.getValue() == "0" && txt_qty.getValue() != "0") {
      await $c.win.alert($p, "중량으로 분할할 수 없습니다.");
      txt_divQty.focus();
    }
  } else {
    txt_divWt.setValue("0");
    txt_divQty.setValue("");
    if (txt_qty.getValue() == "0" && txt_wt.getValue() != "0") {
      await $c.win.alert($p, "수량으로 분할할 수 없습니다.");
      txt_divWt.focus();
    }
  }
};
scwin.flDivExpectation = function () {
  var wt = txt_wt.getValue();
  var qty = txt_qty.getValue();
  var divWt = txt_divWt.getValue();
  var divQty = txt_divQty.getValue();
  if (divWt != 0 && divWt != '') {
    txt_carcnt.setValue(Math.ceil(wt / divWt));
  } else if (divQty != 0 && divQty != '') {
    txt_carcnt.setValue(Math.ceil(qty / divQty));
  } else {
    txt_carcnt.setValue("0");
  }
};
scwin.f_AlloccarFlDivision = async function () {
  var lclRow = scwin.params.scwin.selectedLclRow;
  var vFlIdxs = scwin.params.ds_fl.getCellData(lclRow, "idx");

  // 선택된 화물 idx
  // 선택된 화물 번호
  //	vLclRow = document.getElementById("selectedLclRow").value;

  if (txt_divWt.getValue() == 0 && txt_divQty.getValue() == 0) {
    await $c.win.alert($p, "분할할 수량이나 중량을 입력하세요");
    return;
  }
  vFlIdxs = vFlIdxs.split("-");
  ds_AlloccarFlDivision.set("flIdx", vFlIdxs[0]);
  ds_AlloccarFlDivision.set("flDtlIdx", vFlIdxs[1]);
  ds_AlloccarFlDivision.set("divQty", txt_divQty.getValue());
  ds_AlloccarFlDivision.set("divWt", txt_divWt.getValue());
  $c.sbm.execute($p, sbm_AlloccarFlDivision);
};
scwin.sbm_AlloccarFlDivision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_result.setJSON(e.responseJSON.OUT_DS1);
  if (ds_result.getCellData(0, "outMsg") != "") {
    await $c.win.alert($p, ds_result.getCellData(0, "outMsg"));
  }
  $c.win.closePopup($p);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.txt_divWt_onfocus = function (e) {
  scwin.chingeDivMode('wt');
};
scwin.txt_divQty_onfocus = function (e) {
  scwin.chingeDivMode('qty');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:91px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_goods',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_onPos',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_offPos',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_onDt',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_offDt',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량(kg)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_wt',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량(EA)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_qty',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'분할중량(kg)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_divWt',style:'',dataType:'number','ev:onfocus':'scwin.txt_divWt_onfocus','ev:onkeyup':'scwin.flDivExpectation','ev:onmouseup':'scwin.flDivExpectation'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'분할수량(EA)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_divQty',style:'',dataType:'number','ev:onfocus':'scwin.txt_divQty_onfocus','ev:onkeyup':'scwin.flDivExpectation','ev:onmouseup':'scwin.flDivExpectation'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소요차량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_carcnt',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_AlloccarFlDivision'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})