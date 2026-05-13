/*amd /ui/ds/fs/consignmgnt/fs_402_01_04p.xml 12649 25657d5432d3944496ce1cdbedfc51a7b8b063a7a92e0a4280a6a2bde765c5c7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehiclesInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtMm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveTrusteeVehiclesContractInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_vehiclesInformation","key":"OUT_DS1"}',target:'data:json,{"id":"ds_vehiclesInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurYyMm = $c.date.getServerDateTime($p, "yyyyMM"); // 서버를 기준으로 현재 날짜 반환

scwin.hd_eqCd = "";
scwin.clntNo = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.ctrtDtMm = scwin.params.param1;
  scwin.vehclShortCd = scwin.params.param2;
  scwin.vehclNo = scwin.params.param3;
  scwin.clntNo = scwin.params.param4;
  scwin.type = scwin.params.type;
};
scwin.onUdcCompleted = async function () {
  ed_ctrtDtMm.setValue(scwin.ctrtDtMm);
  ed_vehclShortCd.setValue(scwin.vehclShortCd);
  ed_vehclNo.setValue(scwin.vehclNo);
  if (scwin.type == "retrieve") {
    ed_vehclShortCd.setValue(scwin.vehclShortCd);
    scwin.btn_retrieve_onclick();
  } else {
    await udc_comCode_vehcl.cfCommonPopUpAsync(scwin.udc_comCode_vehcl_callBackFunc, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", "차량번호조회,차량단축코드,차량번호", null);
  }
};
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_ctrtDtMm, ed_vehclShortCd]))) {
    return;
  }
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue());
  dma_queryCondition.set("vehclNo", ed_vehclNo.getValue());
  dma_queryCondition.set("clntNo", scwin.clntNo);
  dma_queryCondition.set("eqCd", scwin.hd_eqCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  var nRow = ds_vehiclesInformation.getRowCount();
  total.setValue(nRow);
  if (nRow === 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  } else if (nRow === 1) {
    ds_vehiclesInformation.setRowPosition(0);
    var returnObj = scwin.f_getReturnObject(0);
    $c.win.closePopup($p, returnObj);
  } else {
    ds_vehiclesInformation.setRowPosition(0);
  }
};
scwin.f_getReturnObject = function (rowIdx) {
  var returnObj = {};
  returnObj.rowPosition = rowIdx;
  returnObj.ctrtDtMm = dma_queryCondition.get("ctrtDtMm");
  returnObj.crn = ds_vehiclesInformation.getCellData(rowIdx, "crn");
  returnObj.clntNo = ds_vehiclesInformation.getCellData(rowIdx, "clntNo");
  returnObj.clntNm = ds_vehiclesInformation.getCellData(rowIdx, "clntNm");
  returnObj.vehclNo = ds_vehiclesInformation.getCellData(rowIdx, "vehclNo");
  returnObj.vehclShortCd = ds_vehiclesInformation.getCellData(rowIdx, "vehclShortCd");
  returnObj.ctrtNo = ds_vehiclesInformation.getCellData(rowIdx, "ctrtNo");
  returnObj.eqCd = ds_vehiclesInformation.getCellData(rowIdx, "eqCd");
  returnObj.costItemCd = ds_vehiclesInformation.getCellData(rowIdx, "costItemCd");
  returnObj.costItemNm = ds_vehiclesInformation.getCellData(rowIdx, "costItemNm");
  return returnObj;
};
scwin.gr_vehiclesInformation_ondblclick = function (row, col) {
  var rowIdx = ds_vehiclesInformation.getRowPosition();
  var returnObj = scwin.f_getReturnObject(rowIdx);
  $c.win.closePopup($p, returnObj);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//차량팝업
scwin.udc_comCode_vehcl_onclickEvent = async function (e) {
  udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBackFunc, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "T", "차량번호조회,차량단축코드,차량번호", null);
};

//차량팝업callback
scwin.udc_comCode_vehcl_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret == "N/A") {
      ed_vehclNo.setValue("undefined");
      scwin.btn_retrieve_onclick();
      return;
    }
    ed_vehclShortCd.setValue(ret[0]);
    ed_vehclNo.setValue(ret[1]);
    scwin.hd_eqCd = ret[2];
  } else if (ret == null) {
    ed_vehclShortCd.setValue("");
    ed_vehclNo.setValue("");
    scwin.hd_eqCd = "";
  }
  scwin.btn_retrieve_onclick();
};

//차량코드 null일경우 초기화
scwin.udc_comCode_vehcl_onblurCodeEvent = function (e) {
  if (ed_vehclShortCd.getValue() === "") {
    ed_vehclNo.setValue("");
  } else {
    udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBackFunc, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "T", "차량번호조회,차량단축코드,차량번호", null);
  }
};
scwin.udc_comCode_vehcl_onviewchangeNameEvent = function (info) {
  if (ed_vehclNo.getValue() === "") {
    ed_vehclShortCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ctrtDtMm',style:'',displayFormat:'yyyy/MM',mandatory:'true',objType:'data',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',id:'udc_comCode_vehcl',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'4',selectID:'retrieveKndVehclListInfo',popupTitle:'차량번호조회,차량단축코드,차량번호','ev:onclickEvent':'scwin.udc_comCode_vehcl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehcl_onblurCodeEvent',popupGridHeadTitle:'단축번호,장비번호,컬럼3,컬럼4,컬럼5',popupGridHiddenColumn:'6,7,8,9,10','ev:onviewchangeNameEvent':'scwin.udc_comCode_vehcl_onviewchangeNameEvent',allowCharCode:'0-9',objType:'Data',validTitle:'차량번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vehiclesInformation',id:'gr_vehiclesInformation',style:'',visibleRowNumFix:'true',focusMode:'row','ev:ondblclick':'scwin.gr_vehiclesInformation_ondblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'수탁자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수탁자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계약시작일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약완료일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'비용코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'비용항목',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtStDt',inputType:'text',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'text',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costItemCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costItemNm',inputType:'text',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})