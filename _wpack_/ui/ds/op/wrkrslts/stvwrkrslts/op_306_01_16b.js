/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_16b.xml 25310 71eda21340b30ecd3949dc4cf845c3085da87d6bc3c36659896294ced92debdd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslCompleteYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alngvsslStockOutCompleteYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslCompleteSts',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allQty',name:'전체수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allWt',name:'전체중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'completeQty',name:'완료수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'completeWt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'alngvsslStockQty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'alngvsslStockWt',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveStevedoringWorkUnCompletionPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.loUpperLobranCd = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  //scwin.loUpperLobranNm = memJson.loUpperLobranNm;

  const codeOptions = [{
    grpCd: "SD060",
    compID: "lc_expClsCd,gr_results:expimpClsCd"
  }, {
    grpCd: "OP234",
    compID: "lc_cvsslCompleteYn,lc_alngvsslStockOutCompleteYn,gr_results:cvsslCompleteSts"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callbackCommonCode);
};
scwin.callbackCommonCode = function () {
  lc_cvsslCompleteYn.setValue("A");
  lc_alngvsslStockOutCompleteYn.setValue("A");
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ///임시

    ///임시
    ica_qryStDt.setValue(scwin.vQryStDt);
    ica_qryEndDt.setValue(scwin.vCurDate);
    $c.sbm.execute($p, sbm_lobran);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var chk = await $c.gus.cfValidate($p, [search_cond]);
  if (!chk) {
    return;
  }
  var chkDate = await $c.gus.cfIsAfterDate($p, ica_qryStDt.getValue(), ica_qryEndDt.getValue(), true);
  if (!chkDate) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ica_qryEndDt.focus();
    return;
  }
  ds_results.removeAll();
  dma_search.set("lobranCd", lc_lobran.getValue()); //점소       
  dma_search.set("qryStDt", ica_qryStDt.getValue()); //조회기간
  dma_search.set("qryEndDt", ica_qryEndDt.getValue()); //조회기간
  dma_search.set("expimpClsCd", lc_expClsCd.getValue()); //수출입구분코드      
  dma_search.set("cvsslCompleteYn", lc_cvsslCompleteYn.getValue()); //본선완료여부
  dma_search.set("alngvsslStockOutCompleteYn", lc_alngvsslStockOutCompleteYn.getValue()); //선측재고출고완료여부
  dma_search.set("cvsslMgntNo", ed_cvsslMgntNo.getValue()); //본선관리번호

  //dma_search.UseChangeInfo = false;
  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  /*
  var args = new Array();
  args[0] = ed_cvsslMgntNo.text; //본선관리번호
  args[1] = ""; //수출입구분코드
  var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");
  if (rtnValues != null) {
  ed_cvsslMgntNo.text = rtnValues[0]; //본선관리번호
  //rtnValues[0];  본선관리번호
  //rtnValues[1];  선박코드
  //rtnValues[2];  선박명
  //rtnValues[3];  마감일자
  //rtnValues[4];  마감시간
  //rtnValues[5];  도착(입항)일자
  //rtnValues[6];  도착(입항)시간
  //rtnValues[7];  출발(출항)일자
  //rtnValues[8];  출발(출항)시간
  //rtnValues[9];  선사항차
  //rtnValues[10]; 항로
  //rtnValues[11]; 항구코드
  //rtnValues[12]; 부두코드
  //rtnValues[13]; 부두코드명
  }
  */

  var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 900;
  opts.height = 400;
  opts.popupName = '본선관리번호검색팝업';
  /*
  var param = {
      cvsslMgntNo : ed_cvsslMgntNo.getValue()
  }
  */

  var param = new Array();
  param[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  param[1] = ""; //수출입구분코드

  ed_cvsslMgntNo.setValue("");
  rtnList = await $c.win.openPopup($p, win_url, opts, param);
  console.log("rtnList : ", rtnList);
  ed_cvsslMgntNo.setValue(rtnList[0]);
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    var cnt = ds_lobran.getRowCount();
    if (cnt == 0) {
      $c.win.alert($p, "점소 자료 조회에 실패하였습니다");
      return;
    } else {
      lc_lobran.setValue(scwin.loUpperLobranCd);
    }
  }
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_cnt.setValue(ds_results.getRowCount());
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, search_cond);
  ica_qryStDt.setValue(scwin.vQryStDt);
  ica_qryEndDt.setValue(scwin.vCurDate);
  lc_lobran.setValue(scwin.loUpperLobranCd);
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.excelDown = function () {
  var vDay = "점소 | " + $c.win.getComboLabel($p, lc_lobran) + " | " + "입항일자 | " + ica_qryStDt.getValue() + " ~ " + ica_qryEndDt.getValue() + " | " + "수출입구분 | " + $c.win.getComboLabel($p, lc_expClsCd) + " | " + "본선작업완료여부 | " + $c.win.getComboLabel($p, lc_cvsslCompleteYn) + " | " + "선측재고출고완료여부 | " + $c.win.getComboLabel($p, lc_alngvsslStockOutCompleteYn) + " | " + "본선관리번호 | " + ed_cvsslMgntNo.getValue();
  console.log(vDay);
  const options = {
    fileName: "본선하역작업 미완료현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "본선하역작업 미완료현황",
    startRowIndex: 3,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: "본선하역작업 미완료현황",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 14,
    text: vDay,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'search_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width: 180px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar2',refDataMap:'',refEdDt:'',refStDt:'',style:'width: 100%;height: 26px;',edFromId:'ica_qryStDt',objTypeFrom:'data',mandatoryFrom:'true',objTypeBtn:'data',objTypeTo:'data',edToId:'ica_qryEndDt',mandatoryTo:'true',titleFrom:'입항일자',titleTo:'입항일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expClsCd',search:'start',style:'width: 110px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선작업완료여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cvsslCompleteYn',search:'start',style:'width:180px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선측재고출고완료여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_alngvsslStockOutCompleteYn',search:'start',style:'width:180px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_search.alngvsslStockOutCompleteYn'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num','ev:onviewchange':'scwin.ed_input1_onviewchange',id:'ed_cvsslMgntNo',style:'',objType:'data',maxlength:'8',allowChar:'0-9.A-Z,a-z','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',title:'Search',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',focusMode:'row',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'본선',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'입항일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'출항일자',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'선석',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'장치장',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'수출입구분',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column133',value:'본선완료현황',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column137',value:'품목',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전체물량',width:'300',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'270',inputType:'text',id:'column25',value:'작업완료물량',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column31',value:'선측재고',displayMode:'label',colSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column122',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column121',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column120',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column119',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column118',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column117',value:'중량(톤)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'arrvlportDt',inputType:'calendar',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtportDt',inputType:'calendar',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'berthNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expimpClsCd',inputType:'select',width:'120'}},{T:1,N:'w2:column',A:{width:'150',inputType:'select',id:'cvsslCompleteSts',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'allQty',inputType:'text',width:'90',maxLength:'.0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'allWt',displayMode:'label',maxLength:'.3',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'completeQty',displayMode:'label',maxLength:'.0',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'completeWt',displayMode:'label',maxLength:'0.3',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'alngvsslStockQty',displayMode:'label',maxLength:'.0',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'alngvsslStockWt',displayMode:'label',maxLength:'.3',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'cvsslNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column154',displayMode:'label',expression:'targetColLabel()',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column153',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column151',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column150',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column149',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column148',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column147',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column146',displayMode:'label',dataType:'number',expression:'sum(\'allQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column145',displayMode:'label',dataType:'float',expression:'sum(\'allWt\')',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column144',displayMode:'label',dataType:'number',expression:'sum(\'completeQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column143',displayMode:'label',expression:'sum(\'completeWt\')',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column142',displayMode:'label',dataType:'number',expression:'sum(\'alngvsslStockQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column141',displayMode:'label',expression:'sum(\'alngvsslStockWt\')',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column112',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column110',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column109',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column107',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column136',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column106',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'allQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column105',displayMode:'label',textAlign:'right',dataType:'float',expression:'sum(\'allWt\')',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column104',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'completeQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column103',displayMode:'label',textAlign:'right',dataType:'float',expression:'sum(\'completeWt\')',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column102',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'alngvsslStockQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column101',displayMode:'label',textAlign:'right',dataType:'float',expression:'sum(\'alngvsslStockWt\')',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})