/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_05p.xml 16580 529cb537f8dbf5348e0ad69fd69c6fc0d9e3d20b9e840b0be86f805e3553c998 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDtSt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damt',name:'차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'camt',name:'대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieveSlipDetail',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_slipDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieveSlipDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 전표상세조회
 * 메뉴경로 : 회계/EIS/경영정보/사업영역별 총괄현황
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_04_05p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-11
 * 수정이력  :
 *    - 2025-12-11      정승혜    최초작성
 *    - 2026-01-19      정승혜    기타수정
 * 메모 : 
 * 메뉴경로에 있는 사업영역별 총괄현황(co_404_01_31b) 파일에는 f_detail 함수 주석되어있음
 * 화면사용 유무를 확인함 -> 회계/관리회계/실적관리/실적분석/계정별원가집계표 페이지에서 사용됨 (co_404_01_26b)
 * 조회조건 : 년월 -   / 부서 - 00354 이천영업소
 * 팝업조건 : 당월확정 컬럼 클릭시
 * 해야할리스트 : 
 */

scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_HeaderCreate();
  scwin.params = $c.data.getParameter($p);
  scwin.closeYm = scwin.params["closeYm"];
  scwin.acctDeptCd = scwin.params["acctDeptCd"];
  scwin.acctDeptNm = scwin.params["acctDeptNm"];
  scwin.acctCd = scwin.params["acctCd"];
  scwin.acctNm = scwin.params["acctNm"];

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set

  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  let coCd = scwin.vLoginCoCd;
  $c.gus.cfDisableObjects($p, [ed_closeYm]);
  $c.gus.cfDisableObjects($p, [ed_acctDeptCd]);
  $c.gus.cfDisableObjects($p, [ed_acctCd]);
  $c.gus.cfDisableObjects($p, [ed_acctDeptNm]);
  $c.gus.cfDisableObjects($p, [ed_acctNm]);
  dma_condition.set("postDtSt", scwin.closeYm + "" + "01");
  dma_condition.set("postDtEnd", dma_condition.get("postDtSt").toDate().lastDate().format("YYYYMMDD"));
  dma_condition.set("slipAcctDeptCdSt", scwin.acctDeptCd);
  dma_condition.set("acctCd", scwin.acctCd);
  dma_condition.set("coCd", scwin.coCd);
  ed_closeYm.setValue(scwin.closeYm);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
  ed_acctNm.setValue(scwin.acctNm);
  scwin.f_Retrieve();
};
scwin.f_HeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)    
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieveSlipDetail);
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
// 엑셀다운 2+8+16 그리드에 show=false 없음
scwin.f_Export = function () {
  if (ds_slipDetail.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "전표상세내역 (" + ed_closeYm.getValue() + ed_acctDeptNm.getValue() + ")";
  let fileName = '전표상세내역_' + ed_acctDeptNm.getValue() + "_" + ed_closeYm.getValue();
  const options = {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle,
    startRowIndex: 2,
    startColumnIndex: 0
  };
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: sheetTitle,
    textAlign: "center",
    fontSize: 18
  }];
  $c.data.downloadGridViewExcel($p, gr_slipDetail, options, infoArr);
};
scwin.f_close = function () {
  $c.win.closePopup($p);
};

// 서브미션
scwin.sbm_tr_retrieveSlipDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_slipDetail.getRowCount());
  $c.gus.cfGoPrevPosition($p, gr_slipDetail, 0);
  if (ds_slipDetail.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    let sort_options = {};
    sort_options.sortIndex = "slipNo slipDt";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_slipDetail.multisort(sort_options);
  }
};
scwin.gr_slipDetail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_slipDetail.getCellData(rowIndex, columnId) == null && ds_slipDetail.getCellData(rowIndex, columnId) == "")) {
      await $c.gus.cfViewClntInfo($p, ds_slipDetail.getCellData(rowIndex, "clntNo"));
    }
  } else if (columnId == "slipNo") {
    if (rowIndex >= 0 && ds_slipDetail.getCellData(rowIndex, "slipNo") != "") {
      await $c.gus.cfShowSlipInfo($p, ds_slipDetail.getCellData(rowIndex, "slipNo"));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',style:'width:100px;',ref:'data:dma_condition.slipAcctDeptCdSt'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',style:'width:200px;'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctCd',style:'width:100px;',ref:'data:dma_condition.acctCd'}},{T:1,N:'xf:input',A:{id:'ed_acctNm',style:'width:200px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_slipDetail',gridUpYn:'N',gridDownFn:'scwin.f_Export',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_slipDetail',scrollByColumn:'false',style:'',id:'gr_slipDetail',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_slipDetail_oncellclick',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'전표번호',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'전표일자',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'회계처리',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'전표종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'차변',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column36',value:'대변',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'거래처번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column27',value:'거래처명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column30',value:'귀속부서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'slipNo',blockSelect:'false',displayMode:'label',class:'underline',style:';color:blue;',textAlign:'center'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'100',inputType:'text',id:'slipDt',blockSelect:'false',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'',style:'',id:'damt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'',style:'',id:'camt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column23',value:'0',displayMode:'label',textAlign:'right',expression:'SUM("damt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column38',value:'0',displayMode:'label',textAlign:'right',expression:'SUM("camt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Division',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})