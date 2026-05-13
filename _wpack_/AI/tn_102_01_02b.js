/*amd /AI/tn_102_01_02b.xml 17908 8afaffdf0d704d3264251b2335794ab7788f0ee379f8a37ad5b78d6baf3b4ecc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'협력업체번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'회수차량여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'계약자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayCd',name:'장비구동방식코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDriveWayNm',name:'구동방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'운전자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'운전자TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrYnT',name:'보험구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondYn',name:'보세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm1',name:'선호화종1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcgNm2',name:'선호화종2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictNm',name:'작업권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'LBS여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'스마트폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgNo',name:'DTG번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'실제스마트폰여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullchrgMchtNm',name:'전담화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkPlNm',name:'화주별작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'협력업체번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'returnVehclYn',name:'회수차량여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/tn.cs.vehclmgnt.RetrieveVehiclesPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_oDTOList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oDTOList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_queryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_queryConditionDTO_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_comboCarKind',action:'/cm.zz.RetrieveComboCMD.do?sysCd=CooperationCompanyEquipmentEBC&queryId=retriveCarKindCodeListCombo',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_combo2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_combo2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_comboCarKind_submitdone','ev:submiterror':'scwin.sbm_comboCarKind_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.prevRow = 0;
scwin.txt_countRow = "0";
scwin.onpageload = async function () {
  scwin.f_comboValue2();
};
scwin.onUdcCompleted = function () {
  lc_cargoClsCd.setFocus();
};
scwin.f_retrieve = async function () {
  dma_queryConditionDTO.set("cargoClsCd", lc_cargoClsCd.getValue());
  dma_queryConditionDTO.set("clntNo", ed_clntNo.getValue());
  dma_queryConditionDTO.set("vehclNo", txt_vehclno.getValue());
  dma_queryConditionDTO.set("lobranCd", lc_lobranCd.getValue());
  dma_queryConditionDTO.set("eqKndCd", lc_eqkndcd.getValue());
  dma_queryConditionDTO.set("returnVehclYn", "0");
  await $c.sbm.execute($p, sbm_queryConditionDTO);
};
scwin.f_comboValue2 = async function () {
  await $c.sbm.execute($p, sbm_comboCarKind);
};
scwin.f_openClntnoPopUp = async function (codeObj, nameObj, pClose, pAllSearch) {
  if (pClose != 'F' && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj)) {
    return;
  }
  let paramObj = {};
  paramObj.pSelectID = 'retrieveCarKindClntInfo_tpro';
  paramObj.pCode = $c.gus.cfGetValue($p, codeObj);
  paramObj.pName = $c.gus.cfGetValue($p, nameObj);
  paramObj.pWinCloseTF = pClose;
  paramObj.pAllSearchTF = pAllSearch;
  paramObj.pWtitleSearch = "계약자조회, 계약자코드/명";
  let rtnList = $c.gus.cfCommonPopUpEx($p, paramObj);
  $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
};
scwin.f_grdHeight = function (objGrdId, size) {
  let objGrd = $p.getComponentById(objGrdId);
  if (objGrd) {
    let strHeight = objGrd.style.height;
    let intHeight = parseInt(strHeight.replace("px", ""));
    intHeight = intHeight + size;
    if (intHeight > 0) {
      objGrd.style.height = intHeight + "px";
    }
  }
};
scwin.sbm_queryConditionDTO_submitdone = async function (e) {
  let rowCnt = ds_oDTOList.getRowCount();
  scwin.txt_countRow = rowCnt;
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    lc_cargoClsCd.setFocus();
  }
  $c.gus.cfGoPrevPosition($p, ds_oDTOList, scwin.prevRow);
  spa_totalRow.setValue(rowCnt);
};
scwin.sbm_queryConditionDTO_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_comboCarKind_submitdone = function (e) {
  ds_combo2.insertRow(0);
  ds_combo2.setCellData(0, "name", "선택");
  ds_combo2.setCellData(0, "code", "");
  lc_eqkndcd.setSelectedIndex(0);
};
scwin.sbm_comboCarKind_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_openClntnoPopUp(ed_clntNo, txt_clntNm, 'T', 'T');
  return;
};
scwin.gr_commList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let lobranCd = ds_oDTOList.getCellData(rowIndex, "lobranCd");
  let vehclNoVal = ds_oDTOList.getCellData(rowIndex, "vehclNo");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_eqkndcd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_queryConditionDTO.eqKndCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclno',placeholder:'',style:'width:150px;',ref:'data:ds_queryConditionDTO.vehclNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_oDTOList',id:'gr_commList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'1700',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',value:'배정점소코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'거래처번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'계약자',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'차량종류코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',value:'차량<br/>종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',value:'규격코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDriveWayCd',inputType:'text',value:'장비구동방식코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqDriveWayNm',value:'구동<br/>방식',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'logisVehclDrvNm1',value:'운전자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisVehclDrv1MpNo',value:'운전자TEL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'posnClsNm',value:'소유<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'insrYnT',value:'보험<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondYn',value:'보세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm1',value:'선호<br/>화종1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm2',value:'선호<br/>화종2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'logisWrkDistrictCd',value:'물류작업권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisWrkDistrictNm',value:'작업권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lbsYn',value:'LBS<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaNo',value:'스마트폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgNo',value:'DTG번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realPdaYn',value:'실제<br/>스마트폰여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullchrgMchtNm',value:'전담화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellWrkPlNm',value:'화주별작업장',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDriveWayCd',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqDriveWayNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'logisVehclDrvNm1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisVehclDrv1MpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'posnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'insrYnT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prefKcgNm2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'logisWrkDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'logisWrkDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lbsYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realPdaYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullchrgMchtNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellWrkPlNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})