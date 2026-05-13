/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_38b.xml 34666 dc471c6561e7154f0abe630e8dd858686520cb1bec931bcaabe297cb3bee6b7d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Grid1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'durateDt',name:'name5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outTerm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCnt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_info',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'name11',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'splitYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'domesticCargo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_grid1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendYn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoCls',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveCustomCarryInDeclarationRegistCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_info","key":"OUT_DS1"},{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,{"id":"ds_info","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_grid1',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveBondedAreaContainerStockPresendConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_grid1',target:'data:json,{"id":"ds_Grid1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_grid1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.rowIndex = 0;
scwin.onpageload = function () {
  $c.gus.cfDisableObjects($p, [tb_retrieveData]);
};
scwin.onUdcCompleted = function () {
  ed_crryinDtTo.setValue(scwin.dateStr);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_wrkPlCd]);
  if (!ret) {
    // 작업장
    return;
  }
  $c.sbm.execute($p, sbm_grid1);
};

// scwin.f_Excel = async function(){
//     var totCnt = ds_Grid1.getRowCount();

//     if( totCnt != 0){
//         var cfrm = await $c.win.confirm("EXCEL로 다운로드 받으시겠습니까?");
//         if (cfrm){

//             const options = {
//                 fileName: "보세구역 컨테이너 재고현황.xlsx", //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
//                 sheetName: "보세구역 컨테이너 재고현황",

//             };

//         // 타이틀

//             $c.data.downloadGridViewExcel(gr_Grid1, options);
//         }
//     } else {
//         await $c.gus.cfAlertMsg(MSG_CM_WRN_002);    
//     }

// }
//-------------------------------------------------------------------------
// function name : f_openPopUp
// function param : gubn
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();

  // if (disGubun == "1"){ //차량번호
  //     //pSelectID  = "retrieveVehclNoListInfo";
  //     if (selfCar.checked) return;
  //     rtnList = cfCommonPopUp('retrieveVehiclesNo'	        // XML상의 SELECT ID	
  //                                     ,pCode					// 화면에서의 ??? Code Element의	Value
  //                                     ,pName					// 화면에서의 ??? Name Element의	Value
  //                                     ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  //                                     ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  //                                     ,null					// Title순서	
  //                                     ,null					// 보여주는 각 컬럼들의 폭	
  //                                     ,null					// 컬럼중에서 숨기는	컬럼 지정	
  //                                     ,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  //                                     ,"400"					// POP-UP뛰을때 원도우의	사용자 정의	폭
  //                                     ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
  //                                     ,null					// 윈도우 위치 Y좌표	
  //                                     ,null					// 윈도우 위치 X좌표
  //                                     ,null					// 중복체크여부	("F")
  //                                     ,pAllSearch					// 전체검색허용여부	("F")
  //                                     ,"차량번호,차량단축코드,차량번호"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  //                                     ); 
  //     cfSetReturnValue(rtnList, txt_vehclShortCd, txt_vehclNo, null);
  // } else if (disGubun == "2"){ //출도착지
  //     rtnList = cfCommonPopUp('retrieveWrkPlInfo',pCode,pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,"출도착지,작업장코드,작업장명"	); 
  //     cfSetReturnValue(rtnList, ed_dptArvWrkPlCd, txt_dptArvWrkPlNm, null);
  // } else if (disGubun == "3"){ //Line
  //     rtnList = cfCommonPopUp('retrieveLineInfo',pCode,pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null); 
  //     cfSetReturnValue(rtnList, ed_lineCd, txt_lineNm, null);
  // } else if (disGubun == "4"){ //선박코드
  //     rtnList = cfCommonPopUp('retrieveOrdVsslInfo',pCode,pName,pClose,null,null,null,null,null,null,null,null,null,null,'T',null); 
  //     cfSetReturnValue(rtnList, ed_vsslCd, txt_vsslNm, null);
  //} else 
  if (disGubun == "6") {
    //작업장코드
    rtnList = await udc_comCodeWrkPl.cfCommonPopUp(scwin.udc_comCodeEqCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
    ;
  }
};

//UDC
scwin.udc_comCodeWrkPl_onclickEvent = function (e) {
  scwin.f_openPopUp(6, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_comCodeEqCd_callBackFunc = function (ret) {
  // console.log(ret); 
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.udc_comCodeWrkPl_onblurCodeEvent = function (e) {
  if (ed_wrkPlCd.getValue() === "") {
    ed_wrkPlNm.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 6, true);
  }
};
scwin.udc_comCodeWrkPl_onviewchangeNameEvent = function (info) {
  if (ed_wrkPlNm.getValue() === "") {
    ed_wrkPlCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 6, false);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.gr_Grid1_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_search.set("wrkPlCd", ed_wrkPlCd.getValue().trim());
  dma_search.set("mrn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "mrn"));
  dma_search.set("msn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "msn"));
  dma_search.set("hsn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "hsn"));
  scwin.rowIndex = rowIndex;
  $c.sbm.execute($p, sbm_search);
};
scwin.acb_cargoCls_onchange = function (info) {
  if (acb_cargoCls.getSelectedIndex() == 2) {
    acb_sendYn.setValue(3);
    acb_sendYn.setDisabled(true);
  } else {
    acb_sendYn.setDisabled(false);
  }
};
scwin.btn_fieldClear_onclick = function () {
  $c.gus.cfInitObjects($p, tbl_cond);
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

//freeform 조회
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_search);
    return;
  }
  ed_mblNo.setValue(ds_info.getCellData(0, "mblNo"));
  ed_hblNo.setValue(ds_info.getCellData(0, "hblNo"));
  ed_splitYn.setValue(ds_info.getCellData(0, "splitYn"));
  ed_dsmbrkPlcCd.setValue(ds_info.getCellData(0, "dsmbrkPlcCd"));
  ed_dsmbrkPlcNm.setValue(ds_info.getCellData(0, "dsmbrkPlcNm"));
  ed_rcvDt.setValue(ds_info.getCellData(0, "rcvDt"));
  ed_admitCls.setValue(ds_info.getCellData(0, "crryoutAdmitPattern"));
  ed_packUnitCd.setValue(ds_info.getCellData(0, "packUnitCd"));
  ed_packUnitNm.setValue(ds_info.getCellData(0, "packUnitNm"));
  ed_odrNo.setValue(ds_info.getCellData(0, "odrNo"));
  ed_commCd.setValue(ds_info.getCellData(0, "commCd"));
  ed_commNm.setValue(ds_info.getCellData(0, "commNm"));
  ed_domesticCargo.setValue(ds_info.getCellData(0, "domesticCargo"));
  ed_packCnt.setValue(ds_info.getCellData(0, "packCnt"));
  ed_totWt.setValue(ds_info.getCellData(0, "totWt"));
  ed_totCbm.setValue(ds_info.getCellData(0, "totCbm"));
  ed_cnsgnNmCmpy.setValue(ds_info.getCellData(0, "cnsgnNmCmpy"));
  ed_ntcPlNmCmpy.setValue(ds_info.getCellData(0, "ntcPlNmCmpy"));
  ed_vsslNm.setValue(ds_info.getCellData(0, "vsslNm"));
  ed_arrvlportDt.setValue(ds_info.getCellData(0, "arrvlportDt"));
};

//메인 조회
scwin.sbm_grid1_submitdone = async function (e) {
  if (ds_Grid1.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    dma_search.set("wrkPlCd", ed_wrkPlCd.getValue().trim());
    dma_search.set("mrn", ds_Grid1.getCellData(0, "mrn"));
    dma_search.set("msn", ds_Grid1.getCellData(0, "msn"));
    dma_search.set("hsn", ds_Grid1.getCellData(0, "hsn"));
    await $c.sbm.execute($p, sbm_search);
  } else {
    totalRows.setValue(ds_Grid1.getRowCount());
    for (var i = 0; i < ds_Grid1.getRowCount(); i++) {
      var dateFormat = ds_Grid1.getCellData(i, "crryinoutDtm");
      ds_Grid1.setCellData(i, "crryinoutDtm", dateFormat.substr(0, 12));
      ds_Grid1.modifyAllStatus("R");
      if (ds_Grid1.getCellData(i, "crryoutAdmitPattern") == "60") {
        if (ds_Grid1.getCellData(i, "durateDt") >= 10) {
          gr_Grid1.setCellStyle(i, "durateDt", "color", "red");
        } else {
          gr_Grid1.setCellStyle(i, "durateDt", "color", "black");
        }
      } else {
        if (ds_Grid1.getCellData(i, "durateDt") >= 15) {
          gr_Grid1.setCellStyle(i, "durateDt", "color", "red");
        } else {
          gr_Grid1.setCellStyle(i, "durateDt", "color", "black");
        }
      }
    }
    ds_Grid1.setRowPosition(0);

    //$c.gus.cfStyleGrid(gr_Grid1, "comn");

    dma_search.set("wrkPlCd", ed_wrkPlCd.getValue().trim());
    dma_search.set("mrn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "mrn"));
    dma_search.set("msn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "msn"));
    dma_search.set("hsn", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "hsn"));
    await $c.sbm.execute($p, sbm_search);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_cond',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_comCodeWrkPl',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',mandatoryCode:'true',objTypeName:'data','ev:onclickEvent':'scwin.udc_comCodeWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeWrkPl_onviewchangeNameEvent',selectID:'retriveGateWrkPlCd',refDataCollection:'dma_grid1',code:'wrkPlCd',UpperFlagCode:'1',maxlengthCode:'5',allowCharCode:'0-9a-zA-Z',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoCls',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_grid1.cargoCls','ev:onchange':'scwin.acb_cargoCls_onchange',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T/S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sendYn',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_grid1.sendYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인(통관/보세/기타)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반입기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_grid1',refEdDt:'crryinDtTo',refStDt:'crryinDtFrom',style:'',edFromId:'ed_crryinDtFrom',edToId:'ed_crryinDtTo',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보세구역 컨테이너 재고현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpYn:'N',grdDownOpts:'{"fileName":"보세구역 컨테이너 재고현황.xls","type":"4+8+16"}',gridID:'gr_Grid1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_Grid1',style:'',autoFit:'allColumn',id:'gr_Grid1',visibleRowNum:'10',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_Grid1_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'89',inputType:'text',id:'column1',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column17',value:'M',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column15',value:'H',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'경과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'반출기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column5',value:'L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'반입일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'수하인',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'SIZE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'반입유형',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'반출유형',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'89',inputType:'text',id:'mrn',displayMode:'label',textAlign:'left',class:'cell_class',style:'color: blue;'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'msn',displayMode:'label',textAlign:'right',class:'cell_class',style:'color: blue;'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'hsn',displayMode:'label',class:'cell_class',style:'color: blue;',dataType:'number',excelCellType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'number',id:'durateDt',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outTerm',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hblNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mfCommNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutDtm',displayMode:'label',calendarValueType:'yearMonthDateTime',dataType:'text',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnsgnNmCmpy',displayMode:'label',textAlign:'left',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portCnt',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutPatternCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutAdmitPattern',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'B/L정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_retrieveData',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'MASTER B/L NO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mblNo',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.mblNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'HOUSE B/L NO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hblNo',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.hblNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'분할YN',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_splitYn',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.splitYn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하선장소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_dsmbrkPlcCd',placeholder:'',class:'',disabled:'true',readOnly:'false',ref:'data:ds_info.dsmbrkPlcCd'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_dsmbrkPlcNm',placeholder:'',class:'',readonly:'true',disabled:'true',ref:'data:ds_info.dsmbrkPlcNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'승인일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_rcvDt',pickerType:'dynamic',style:'',readonly:'true',disabled:'true',readOnly:'true',ref:'data:ds_info.rcvDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'승인구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_admitCls',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.crryoutAdmitPattern'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'포장단위',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_packUnitCd',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.packUnitCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_packUnitNm',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.packUnitNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.odrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_commCd',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.commCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_commNm',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.commNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'국내개항간 화물',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_domesticCargo',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.domesticCargo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장갯수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_packCnt',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.packCnt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totWt',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.totWt',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총CBM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totCbm',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.totCbm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수하인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnsgnNmCmpy',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.cnsgnNmCmpy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통지처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_ntcPlNmCmpy',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.ntcPlNmCmpy'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vsslNm',placeholder:'',style:'width:150px;',readonly:'true',disabled:'true',ref:'data:ds_info.vsslNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arrvlportDt',pickerType:'dynamic',style:'',readonly:'true',disabled:'true',readOnly:'true',ref:'data:ds_info.arrvlportDt'}}]}]}]}]}]}]}]}]}]}]})