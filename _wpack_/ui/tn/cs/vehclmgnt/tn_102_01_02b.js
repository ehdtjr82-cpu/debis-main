/*amd /ui/tn/cs/vehclmgnt/tn_102_01_02b.xml 20361 f5fa8933ef1b9dec0d7bc3429c06765754d939513f298f1bb3a2b99379e4cffc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'협력업체번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'회수차량여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'계약자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'장비구동방식코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayNm',name:'구동방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'운전자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'운전자TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrYnT',name:'보험구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondYn',name:'보세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm1',name:'선호화종1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm2',name:'선호화종2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictNm',name:'작업권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'LBS여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'스마트폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgNo',name:'DTG번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'실제스마트폰여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtNm',name:'전담화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlNm',name:'화주별작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ncall.tn.cs.vehclmgnt.RetrieveVehiclesPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_oDTOList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oDTOList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_queryConditionDTO_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_combo2',action:'/cm.zz.RetrieveComboCMD.do?sysCd=CooperationCompanyEquipmentEBC&queryId=retriveCarKindCodeListCombo',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,[{"id":"ds_combo2","action":"all", "key": "GAUCE"}]','ev:submitdone':'scwin.sbm_combo2_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.prevRow = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  let param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, param, function () {
    lc_lobranCd.addItem("전체", "", null, 0);
    lc_lobranCd.setSelectedIndex(0);
  });
  let options = [{
    grpCd: "OP190",
    compID: "lc_cargoClsCd"
  }];
  $c.data.setCommonCode($p, options, function () {
    scwin.f_comboValue2();
  });
};
scwin.onUdcCompleted = function () {
  $c.data.setPopupTitle($p, "전담차량등록현황");
  txt_clntNm.setDisabled(true);
  lc_cargoClsCd.focus();
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  dma_queryConditionDTO.set("returnVehclYn", "0");
  $c.sbm.execute($p, sbm_queryConditionDTO);
};

//-------------------------------------------------------------------------
// function name : f_comboValue
// function desc : 차량종류 검색
//-------------------------------------------------------------------------
scwin.f_comboValue2 = async function () {
  $c.sbm.execute($p, sbm_combo2);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : 협력업체Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openClntnoPopUp = async function (codeObj, nameObj, pClose, pAllSearch) {
  if (pClose != "F" && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj)) {
    return;
  }
  udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue() // 화면에서의 ??? Code Element의	Value
  , txt_clntNm.getValue() // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pAllSearch // 전체검색허용여부	("F")
  , "계약자조회, 계약자코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_clnt_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
};
scwin.sbm_queryConditionDTO_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_oDTOList.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    lc_cargoClsCd.focus();
  }
  totalRows.setValue(rowCnt);
};
scwin.sbm_combo2_submitdone = function (e) {
  lc_cargoClsCd.addItem("선택", "", null, 0);
  ds_combo2.insertRow(0);
  ds_combo2.setCellData(0, "name", "선택");
  ds_combo2.setCellData(0, "code", "");
  lc_cargoClsCd.setSelectedIndex(0);
  lc_eqkndcd.setSelectedIndex(0);
};
scwin.gr_commList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let rowJson = ds_oDTOList.getRowJSON(rowIndex);
  let lobranCd = rowJson.lobranCd;
  let vehclNoVal = rowJson.vehclNo;
  let vehclNoLen = vehclNoVal.length;
  let vehclNo = vehclNoVal.substring(vehclNoLen - 4, vehclNoLen);
  if (rowIndex >= 0) {
    let param = {
      lobranCd: lobranCd,
      vehclNo: vehclNo
    };
    $c.win.openMenu($p, "직영차량등록", "/ui/tn/cs/vehclmgnt/tn_101_02_01b.xml", "tn_101_02_01b.xml", param);
  }
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openClntnoPopUp(ed_clntNo, txt_clntNm, "T", "T");
  return;
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openClntnoPopUp(ed_clntNo, txt_clntNm, "F", "T");
};
scwin.f_excel = function () {
  let options = {
    fileName: "직영차량등록현황" + ".xlsx",
    sheetName: "직영차량등록현황"
  };
  $c.data.downloadGridViewExcel($p, gr_commList, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',visibleRowNum:'25',sortOption:'value',ref:'data:dma_queryConditionDTO.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_queryConditionDTO.cargoClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_eqkndcd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_queryConditionDTO.eqKndCd',visibleRowNum:'11',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',style:'',objTypeName:'data',maxlengthCode:'6',objTypeCode:'data',refDataCollection:'dma_queryConditionDTO',code:'clntNo','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',selectID:'retrieveCarKindClntInfo_tpro'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclno',placeholder:'',style:'width:150px;',ref:'data:dma_queryConditionDTO.vehclNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_top',gridID:'gr_commList',gridDownFn:'scwin.f_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_oDTOList',id:'gr_commList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'1700',readOnly:'true',columnMove:'true','ev:oncelldblclick':'scwin.gr_commList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',value:'배정점소코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'거래처번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'계약자',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'차량종류코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',value:'차량<br/>종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',value:'규격코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDriveWayCd',inputType:'text',value:'장비구동방식코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqDriveWayNm',value:'구동<br/>방식',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'logisVehclDrvNm1',value:'운전자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisVehclDrv1MpNo',value:'운전자TEL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'posnClsNm',value:'소유<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'insrYnT',value:'보험<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondYn',value:'보세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm1',value:'선호<br/>화종1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm2',value:'선호<br/>화종2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'logisWrkDistrictCd',value:'물류작업권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisWrkDistrictNm',value:'작업권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lbsYn',value:'LBS<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaNo',value:'스마트폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgNo',value:'DTG번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realPdaYn',value:'실제<br/>스마트폰여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullchrgMchtNm',value:'전담화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellWrkPlNm',value:'화주별작업장',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDriveWayCd',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqDriveWayNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'logisVehclDrvNm1',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisVehclDrv1MpNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'posnClsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'insrYnT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm1',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm2',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'logisWrkDistrictCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisWrkDistrictNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',id:'lbsYn',displayMode:'label',allOption:'',chooseOption:'',ref:'',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'autoComplete',id:'realPdaYn',displayMode:'label',allOption:'',chooseOption:'',ref:'',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullchrgMchtNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellWrkPlNm',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})