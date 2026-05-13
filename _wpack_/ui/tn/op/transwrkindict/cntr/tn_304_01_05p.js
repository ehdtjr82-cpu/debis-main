/*amd /ui/tn/op/transwrkindict/cntr/tn_304_01_05p.xml 15410 b897fa55a78bdc6960d5f3822ccb14a8598108fcfd86659be4d468273dc2ad80 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclShortNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spotYn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclShortNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regLobranCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClntNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisLnkEqCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisVehclNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisShortCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbsYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisRglintInspExpireDt',name:'name24',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveUsableVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/컨테이너 운송지시/가용차량조회

scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  var vehclShortNo = $c.gus.cfIsNull($p, scwin.params["vehclShortNo"]) ? "" : scwin.params["vehclShortNo"];
  var whereAreYouFrom = $c.gus.cfIsNull($p, scwin.params["whereAreYouFrom"]) ? "" : scwin.params["whereAreYouFrom"];
  em_vehclShortNo.setValue(vehclShortNo);
  lc_spotClsCd.setValue("N");
  if (whereAreYouFrom == "T") {
    $c.gus.cfEnableObjects($p, [lc_spotClsCd]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_spotClsCd]);
  }
  scwin.f_Retrieve();
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "가용차량조회");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_condition.set("vehclShortNo", em_vehclShortNo.getValue());
  dma_condition.set("vehclNo", em_vehclNo.getValue());
  dma_condition.set("spotYn", lc_spotClsCd.getValue());
  if (dma_condition.get("vehclShortNo") == "" && dma_condition.get("vehclNo") == "") {
    await $c.win.alert($p, "차량번호를 입력해 주십시오");
    return false;
  }

  // tr_Retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------
// 그리드 높이 늘리고 줄이기
//-------------------------------
scwin.f_grdHeiht = function (gridNm, size) {
  var strHeight = gridNm.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_results.getTotalRow();
  var fileName = "가용차량조회";
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      await $c.data.downloadGridViewExcel($p, gr_results, {
        fileName: fileName + ".xlsx",
        sheetName: fileName
      });
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve);
};

//-------------------------------------------------------------------------
// 차량선택후 로직    
//-------------------------------------------------------------------------
scwin.f_ChoiceAndClose = function () {
  if (ds_results.getRowCount() == 1) {
    gr_results.setFocusedCell(0, 0);
  }
  var row = ds_results.getRowPosition();
  var arrRtnVal = new Array();
  arrRtnVal[0] = ds_results.getCellData(row, "vehclShortNo");
  arrRtnVal[1] = ds_results.getCellData(row, "vehclNo");
  arrRtnVal[2] = ds_results.getCellData(row, "eqKndCd");
  arrRtnVal[3] = ds_results.getCellData(row, "eqKndNm");
  arrRtnVal[4] = ds_results.getCellData(row, "eqCd");
  arrRtnVal[5] = ds_results.getCellData(row, "assgnLobranCd");
  arrRtnVal[6] = ds_results.getCellData(row, "regLobranCd");
  arrRtnVal[7] = ds_results.getCellData(row, "vehclClntNo");
  arrRtnVal[8] = ds_results.getCellData(row, "vehclClntNm");
  arrRtnVal[9] = ds_results.getCellData(row, "eqNrmCd");
  arrRtnVal[10] = ds_results.getCellData(row, "eqNrmNm");
  arrRtnVal[11] = ds_results.getCellData(row, "logisLnkEqCd");
  arrRtnVal[12] = ds_results.getCellData(row, "chassisEqCd");
  arrRtnVal[13] = ds_results.getCellData(row, "chassisVehclNo");
  arrRtnVal[14] = ds_results.getCellData(row, "chassisShortCd");
  arrRtnVal[15] = ds_results.getCellData(row, "chassisKndNm");
  arrRtnVal[16] = ds_results.getCellData(row, "chassisKndCd");
  arrRtnVal[17] = ds_results.getCellData(row, "mpNo");
  arrRtnVal[18] = ds_results.getCellData(row, "drvNm");
  arrRtnVal[19] = ds_results.getCellData(row, "lbsYn");
  arrRtnVal[20] = ds_results.getCellData(row, "cdmaNo");
  arrRtnVal[21] = ds_results.getCellData(row, "posnClsCd");
  arrRtnVal[22] = ds_results.getCellData(row, "rglintInspExpireDt");
  arrRtnVal[23] = ds_results.getCellData(row, "chassisRglintInspExpireDt");

  // window.returnValue = arrRtnVal;
  // window.close();
  $c.win.closePopup($p, arrRtnVal);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_results.getTotalRow();
  ds_results.sort("vehclNo", 0);
  if (rowCnt < 1) {
    totalRows.setValue("0");
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  if (rowCnt == 1) {
    scwin.f_ChoiceAndClose();
  }
  totalRows.setValue(rowCnt);
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_ChoiceAndClose();
};
scwin.gr_results_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.f_ChoiceAndClose();
  }
};
scwin.btn_close_onclick = function (e) {
  // 닫기 버튼 클릭 시 빈값 return (26.02.25)
  var arrRtnVal = new Array(24).fill("");
  $c.win.closePopup($p, arrRtnVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Spot여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_spotClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량단축코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'em_vehclShortNo',placeholder:'',style:'width:100px;',maxlength:'4',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량넘버',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_vehclNo',placeholder:'',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'가용차량정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_results',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick','ev:onkeydown':'scwin.gr_results_onkeydown'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'협력업체',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'등록<br/>점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'핸드폰',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'차량정기검사<br/>만료일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'기존연결<br/>샤시번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'샤시종류',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label',value:'샤시정기검사<br/>만료일'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rglintInspExpireDt',inputType:'text',width:'120',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisVehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisKndNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'chassisRglintInspExpireDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})