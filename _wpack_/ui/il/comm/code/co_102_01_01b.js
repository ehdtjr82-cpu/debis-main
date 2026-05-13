/*amd /ui/il/comm/code/co_102_01_01b.xml 36531 f50d3113c0672da57c5cd4973f340db49b770c6045eb3f05dc8534b90c276948 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'통합운임코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareEngCd',name:'운임코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemEngNm',name:'운임(영문)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_freightMap','ev:onmodelchange':'scwin.ds_freightMap_onmodelchange','ev:onkeyup':'scwin.ds_freightMap_onkeyup','ev:onbeforemodelchange':'scwin.ds_freightMap_onbeforemodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'통합운임코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareEngCd',name:'운임코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fcrcBilgYn',name:'청구화폐',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemEngNm',name:'운임(영문)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fareAbbr',name:'운임(한)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blPrtnCd',name:'B/L Print Code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaAirClsCd',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'imntFareYn',name:'면제운임여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellDrAcctCd',name:'매출차변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellCrAcctCd',name:'매출대변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDrAcctCd',name:'매입차변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsCrAcctCd',name:'매입대변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellDrAcctNm',name:'매출차변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellCrAcctNm',name:'매출대변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDrAcctNm',name:'매입차변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsCrAcctNm',name:'매입대변계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnt',name:'매입대변계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_freightList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'통합Freight;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'Freight;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'Freight;(Initial)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgYn',name:'청구;화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemEngNm',name:'Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareAbbr',name:'Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blPrtnCd',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirClsCd',name:'해운항공;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imntFareYn',name:'면제운임;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctCd',name:'매출차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctNm',name:'매출차변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctCd',name:'매출대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctNm',name:'매출대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctCd',name:'매입차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctNm',name:'매입차변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctCd',name:'매입대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctNm',name:'매입대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'cnt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'통합Freight;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'Freight;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'Freight;(Initial)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgYn',name:'청구;화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemEngNm',name:'Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareAbbr',name:'Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blPrtnCd',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirClsCd',name:'해운항공;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imntFareYn',name:'면제운임;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctCd',name:'매출차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctNm',name:'매출차변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctCd',name:'매출대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctNm',name:'매출대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctCd',name:'매입차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctNm',name:'매입차변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctCd',name:'매입대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctNm',name:'매입대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'cnt',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveFreightChargeCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve", "key":"IN_DS1"}, {"id":"ds_freightList", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_freightList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveFreightChargeCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_freightList", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   

scwin.onpageload = function () {};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      cnd_ed_selpchItemCd.focus();
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};
scwin.f_validate = function () {
  if (ed_selpchItemCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["통합 Freight Code"]); //@는 필수입력항목입니다.
    ed_selpchItemCd.focus();
    return false;
  }
  return true;
};
scwin.f_openCommonPopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  switch (gubun1) {
    case 1:
      if (gubun2 == "CTINF") {
        pCode = cnd_ed_fareEngCd.getValue().trim();
        pName = cnd_txt_selpchItemEngNm.getValue();
        udc_fareEng.setSelectId("retriveFreightCodeInfo");
        udc_fareEng.ilCommonPopUp(scwin.udc_fareEng_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , "Freight Code, Freight Name," // Title순서
        , '130,300' // 보여주는 각 컬럼들의 폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
        , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "Freight Search,Freight Code,Freight Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
      }
    default:
      break;
  }
};
scwin.udc_fareEng_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_fareEngCd, cnd_txt_selpchItemEngNm);
};
scwin.f_beforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF);
  }
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------    
scwin.btn_retrieve_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_freightList.getTotalRow() > 0) {
    ds_freightList.modifyAllStatus("R");
    ed_totalRow.setValue(ds_freightList.getTotalRow());
    gr_item.setFocusedCell(0, 0);
    scwin.f_set("RETRIEVE");
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  ds_retrieve.setEmptyValue();
  cnd_txt_selpchItemEngNm.setValue("");
};
scwin.btn_pop_onclick = function (e) {
  menuId = "11111";
  src = "/ui/ds/lo/comninfomgnt/lo_100_05_01b.xml";
  menuNm = "매출입항목관리";
  paramObj = {};
  paramObj.pgmInfo = {};
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};
scwin.btn_save_onclick = async function (e) {
  if ($c.gus.cfValidate($p, [gr_item]) && scwin.f_validate()) {
    if (ds_freightList.getModifiedIndex().length != 0) {
      debugger;
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?
        // ds_save.removeAll();
        // cnt = 0 ;
        // for(var i = 0 ; i < ds_freightList.getTotalRow() ; i ++) {
        //     ds_save.setRowJSON(cnt, ds_freightList.getRowJSON(i));
        //     ds_save.modifyRowStatus(cnt, ds_freightList.getRowStatus(i));
        //     cnt ++;
        // }
        // ds_save.setJSON(ds_freightList.getModifiedJSON());
        $c.sbm.execute($p, sbm_save);
      }
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["Freight Charge Code List"]); //@은(는) 변경된 사항이 없습니다
    }
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.btn_retrieve_onclick();
};
scwin.btn_add_onclick = function (e) {
  idx = ds_freightList.insertRow();
  ds_freightList.setCellData(idx, "fcrcBilgYn", 1); // 청구화폐 원화로 초기화	
  ds_freightList.setCellData(idx, "vatYn", 1); // 부가세여부초기화
  ds_freightList.setCellData(idx, "seaAirClsCd", 'S'); // 해운항공구분초기화
  ds_freightList.setCellData(idx, "imntFareYn", 1); // 면제운임여부초기화
  ds_freightList.setCellData(idx, "useYn", 1); // 사용여부 사용으로 초기화						
  $c.gus.cfEnableObjects($p, [ed_selpchItemCd, ed_fareEngCd]);
  ed_selpchItemCd.setDisabled(false);
  gr_item.setFocusedCell(idx, 0);
  ed_selpchItemCd.focus();
};
scwin.btn_delete_onclick = function (e) {
  if (ds_freightList.getRowStatus(gr_item.getFocusedRowIndex()) == "C") {
    ds_freightList.removeRow(gr_item.getFocusedRowIndex());
    return;
  }
  ds_freightList.modifyRowStatus(gr_item.getFocusedRowIndex(), "D");
};
scwin.btn_cancel_onclick = function (e) {
  for (var i = 0; i < ds_freightList.getTotalRow(); i++) {
    if (ds_freightList.getRowStatus(i) == "C") ds_freightList.removeRow(i);
  }
  ds_freightList.undoAll();
};
scwin.gr_item_onrowindexchange = function (rowIndex, oldRow) {
  ds_freightList.getRowStatus(rowIndex) == "C" ? ed_selpchItemCd.setDisabled(false) : ed_selpchItemCd.setDisabled(true);
  ds_freightMap.setJSON(ds_freightList.getRowJSON(rowIndex));
};
scwin.ds_freightMap_onmodelchange = function (info) {
  ds_freightList.modifyRowStatus(gr_item.getFocusedRowIndex(), "U");
  ds_freightList.setRowJSON(gr_item.getFocusedRowIndex(), ds_freightMap.getJSON(), true);
};
scwin.udc_fareEng_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'CTINF', 'F', 'F', 'F');
};
scwin.udc_fareEng_onviewchangeCodeEvent = function (info) {
  scwin.f_beforeOpenCommonPopUpEd(txt_selpchItemEngNm, cnd_ed_fareEngCd, 1, "CTINF", "T", "F");
};
scwin.udc_fareEng_onviewchangeNameEvent = function (info) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통합 Freight Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_selpchItemCd',placeholder:'',style:'width:150px;',ref:'data:ds_retrieve.selpchItemCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_fareEngCd',nameId:'cnd_txt_selpchItemEngNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_fareEng',btnId:'img_custcd',refDataCollection:'ds_retrieve',code:'fareEngCd',name:'selpchItemEngNm','ev:onclickEvent':'scwin.udc_fareEng_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_fareEng_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_fareEng_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 70%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Freight Charge Code List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'Y',gridID:'gr_item',grdDownOpts:'{"fileName" : "Freight Charge Code.xlsx", "sheetName" : "Freight Charge Code"}',gridDownYn:'Y',btnPlusYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_freightList',style:'',id:'gr_item',visibleRowNum:'14',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_item_onrowindexchange',focusMode:'cell',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'통합Freight<br/>Code',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'Freight<br/>Code',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'Freight<br/>(Initial)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column13',value:'청구<br/>화폐',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column11',value:'Freight Name(영문)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'Freight (약호)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'B/L Print<br/>Code',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'부가세<br/>여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'해운항공<br/>구분',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'면제운임<br/>여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',value:'매출차변',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'매출차변계정명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'매출대변',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'매출대변계정명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'매입차변',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'매입차변계정명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'매입대변',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'매입대변계정명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column29',value:'사용여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'수정자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'수정일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column21',value:'cnt',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fareEngCd',displayMode:'label',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fareGrpCd',displayMode:'label',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'fcrcBilgYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'selpchItemEngNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fareAbbr',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blPrtnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'vatYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'seaAirClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'AIR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'imntFareYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellDrAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellDrAcctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellCrAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellCrAcctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsDrAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsDrAcctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsCrAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCrAcctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'useYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modDtm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'cnt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'display : none;',EngYn:'Y',btnCancelYn:'Y',btnDelYn:'Y',btnRowAddYn:'Y'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_add',style:'width: 80px;height: 23px;',class:'btn','ev:onclick':'scwin.btn_add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'width: 80px;height: 23px;',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'width: 80px;height: 23px;',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''}},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통합 Freight CD',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_selpchItemCd',placeholder:'',style:'width:150px;',ref:'data:ds_freightList.selpchItemCd',refSync:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fareEngCd',placeholder:'',style:'width:150px;',ref:'data:ds_freightList.fareEngCd',maxlength:'4','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight(Initial)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fareGrpCd',placeholder:'',style:'width:150px;',ref:'data:ds_freightList.fareGrpCd',maxlength:'3','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_fcrcBilgYn',ref:'data:ds_freightList.fcrcBilgYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Name(E) ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_selpchItemEngNm',placeholder:'',style:'',ref:'data:ds_freightList.selpchItemEngNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight(한글)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_fareAbbr',placeholder:'',style:'',ref:'data:ds_freightList.fareAbbr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Print Code ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blPrtnCd',placeholder:'',style:'width:150px;',ref:'data:ds_freightList.blPrtnCd','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_vatYn',ref:'data:ds_freightList.vatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해운항공구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_seaAirClsCd',ref:'data:ds_freightList.seaAirClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면제운임여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_imntFareYn',ref:'data:ds_freightList.imntFareYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출차변',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellDrAcctCd',placeholder:'',style:'width:60px;',ref:'data:ds_freightList.sellDrAcctCd','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',maxlength:'7'}},{T:1,N:'xf:input',A:{class:'',id:'txt_sellDrAcctNm',placeholder:'',style:'',ref:'data:ds_freightList.sellDrAcctNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출대변 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellCrAcctCd',placeholder:'',style:'width:60px;',ref:'data:ds_freightList.sellCrAcctCd','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',maxlength:'7'}},{T:1,N:'xf:input',A:{class:'',id:'txt_sellCrAcctNm',placeholder:'',style:'',ref:'data:ds_freightList.sellCrAcctNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입차변',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_pchsDrAcctCd',placeholder:'',style:'width:60px;',ref:'data:ds_freightList.pchsDrAcctCd','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',maxlength:'7'}},{T:1,N:'xf:input',A:{class:'',id:'txt_pchsDrAcctNm',placeholder:'',style:'',ref:'data:ds_freightList.pchsDrAcctNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입대변',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_pchsCrAcctCd',placeholder:'',style:'width:60px;',ref:'data:ds_freightList.pchsCrAcctCd','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',maxlength:'7'}},{T:1,N:'xf:input',A:{class:'',id:'txt_pchsCrAcctNm',placeholder:'',style:'',ref:'data:ds_freightList.pchsCrAcctNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_useYn',ref:'data:ds_freightList.useYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Update ID',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modId',placeholder:'',style:'width:150px;',ref:'data:ds_freightList.modId',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Update Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_modDtm',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_freightList.modDtm',disabled:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_pop',type:'button',class:'btn link','ev:onclick':'scwin.btn_pop_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출입항목관리'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]}]}]}]}]}]})