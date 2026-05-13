/*amd /AI/op_304_01_67b.xml 24990 65ef3f8920f0a89587aae4c1b1a7c218ab3efe2a4e9e73f5b2e2eb7d4be70187 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchWrkStDt',name:'작업조회시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchWrkEndDt',name:'작업조회종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'condition',name:'조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCondition',name:'일자조건',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Present',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'공장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'판매처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salePlCoNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'크나우프오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClssNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'품번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty',name:'SM수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty1',name:'SM단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd1',name:'권역1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd2',name:'권역2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'우편명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplZip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt2',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'오더순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransYn',name:'자가운송여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveBoralTransportCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_Present","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Present","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLobranCd = "";
scwin.strlobranCd = "";
scwin.strlobranNm = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.wrkPlCd = "999";
scwin.hid_repClntNo = "";
scwin.hid_wrkPlCd = "";
scwin.onpageload = function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm();
  scwin.sLobranCd = $c.ses.getLoUpperLobranCd();
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.strlobranCd = params["strlobranCd"] == null ? "" : params["strlobranCd"];
    scwin.strlobranNm = params["strlobranNm"] == null ? "" : params["strlobranNm"];
  }
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate.substring(0, 8);
  scwin.strToDate = scwin.vCurDate;
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
};
scwin.onUdcCompleted = function () {
  udc_bilgLodept.setCode(scwin.strlobranCd);
  udc_bilgLodept.setName(scwin.strlobranNm);
  udc_srchWrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchWrkStDt])) || !(await $c.gus.cfValidate($p, [ica_srchWrkEndDt]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchWrkStDt.setFocus();
    return;
  }
  dma_Query.set("bilgLodeptCd", udc_bilgLodept.getCode());
  dma_Query.set("bizLongCd", udc_bizLong.getCode());
  dma_Query.set("srchWrkStDt", ica_srchWrkStDt.getValue());
  dma_Query.set("srchWrkEndDt", ica_srchWrkEndDt.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_Present.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  spa_totalRow.setValue(ds_Present.getTotalRow());
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_Present.getRowCount();
  let sheetTitle = "크나우프보관료조회";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.Sort = async function () {
  let objReturn = await $c.win.openPopup($p, "/ui/common/jsp/sortPopup.xml", {
    width: 430,
    height: 310,
    modal: true,
    data: {
      gridObj: gr_InIntendInformation
    }
  });
  if (objReturn != null) {
    if (objReturn.format) {
      // TODO: gr_InIntendInformation.Format = objReturn.format (GAUCE 전용 API)
    }
    if (objReturn.sortExpr) {
      ds_Present.sort(objReturn.sortExpr);
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  let pWhere;
  switch (disGubun) {
    case 1:
      udc_bilgLodept.ilCommonPopUp(scwin.callback_bilgLodept, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      let v_itemCd = "BIZ";
      let v_wrkPlCd = "999";
      pWhere = "" + "," + v_itemCd + "," + v_wrkPlCd;
      udc_bizLong.ilCommonPopUp(scwin.callback_bizLong, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "사업장,사업장코드,사업장명");
      break;
  }
};
scwin.callback_bilgLodept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm);
};
scwin.callback_bizLong = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bizLongCd, txt_bizLongNm);
};
scwin.f_ratePopup = async function () {
  let url = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_67p.xml";
  let args = {};
  args.title = "보관요율 팝업";
  await $c.win.openPopup($p, url, {
    width: 580,
    height: 550,
    modal: true,
    data: args
  });
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_mainData]);
  udc_srchWrkDt.setInitDate(scwin.strFromDate, scwin.strToDate);
  udc_bilgLodept.setFocusCode();
};
scwin.btn_FieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_ratePopup_onclick = function (e) {
  scwin.f_ratePopup();
};
scwin.udc_bilgLodept_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
};
scwin.udc_bizLong_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_bizLongCd, txt_bizLongNm, 2);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_bilgLodeptCd',validTitle:'',nameId:'txt_bilgLodeptNm',id:'udc_bilgLodept',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bizLongCd',nameId:'txt_bizLongNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_bizLong'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_srchWrkDt',refEdDt:'',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 보관료조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Present',focusMode:'row',id:'gr_InIntendInformation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'7',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'창고명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',style:'',value:'공장코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',style:'',value:'사업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNo',inputType:'text',style:'',value:'판매처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salePlCoNm',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',style:'',value:'크나우프오더번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPatternCd',inputType:'text',style:'',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClssNm',inputType:'text',style:'',value:'품목명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',style:'',value:'품번',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkQty',value:'작업수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qtyUnitCd',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty',value:'SM수량 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty1',value:'SM단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkWt',value:'작업중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unitCd',value:'중량단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd',value:'권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd1',value:'권역1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd2',value:'권역2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'osideCdNm',value:'우편명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tplZip',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellUpr',value:'매출단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'매출금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vatAmt2',value:'부가세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrDt',value:'오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ioDt',value:'입출고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfVehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellSeq',value:'오더순서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'selfTransYn',value:'자가운송여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salePlCoNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',style:'',value:'',width:'150',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPatternCd',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClssNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkQty',value:'',displayMode:'label',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qtyUnitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty',value:'',displayMode:'label',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'smQty1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkWt',value:'',displayMode:'label',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'osideCdNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tplZip',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellUpr',value:'',displayMode:'label',textAlign:'center',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'center',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vatAmt2',value:'',displayMode:'label',textAlign:'center',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrDt',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ioDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfVehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'selfTransYn',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'0.0',displayMode:'label',expression:'sum(\'wrkQty\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column84',value:'0',displayMode:'label',expression:'sum(\'smQty\')',dataType:'float',displayFormat:'#,##0.0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'0.000',displayMode:'label',expression:'sum(\'wrkWt\')',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'0.00',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'float',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt2\')',dataType:'float',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ratePopup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관요율'}]}]}]}]}]}]}]}]}]})