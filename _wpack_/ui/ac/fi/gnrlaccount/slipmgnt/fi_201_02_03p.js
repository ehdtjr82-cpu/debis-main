/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_03p.xml 9247 33fc805e15e7a8455e381e5018bc4134506fb704f16b967f2fcb37165bf1ec39 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procAmt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'setlSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_procAmt","key":"OUT_DS1"}',target:'data:json,{"id":"ds_procAmt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 기정리금액조회
 * 메뉴경로 : 회계/재무회계/일반회계/전표관리/가지급금입금
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_02_03p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-14
 * 수정이력  :
 *    - 2025-10-14      정승혜    최초작성
 *    - 2025-11-25      정승혜    준수사항 적용
 *    - 2025-12-29      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 * cfShowSlipInfo -> fi_201_04_02p
 * 부모페이지 fi_201_02_02b
 * 조회조건 - 완료여부:전체, 신청자:없음, 신청전표회계처리:전체, 정리예정일:20110101~20111231 조회후 
 * '기정리금액(회계처리)' 또는 '기정리외화금액(회계처리)' 클릭시 팝업생성됨
 * USD,전체 00387 전체 20160501~20161201 -> 기정리금액(외화) 소수점 데이터
 * 
 */

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.slipNo = scwin.params["slipNo"];
  scwin.f_Retrieve();
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "기정리금액조회");
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  let condition = "?";
  condition += "slipNo=" + scwin.slipNo;
  sbm_retrieve.action = "/ac.fi.gnrlaccount.slipmgnt.RetrieveSuspensePayableSettlementAmountCMD.do" + condition;
  $c.sbm.execute($p, sbm_retrieve);
};

// 전표번호 팝업(클릭시)
scwin.f_Retrieve2 = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "setlSlipNo") {
    let slipNo = ds_procAmt.getCellData(rowIndex, "setlSlipNo");
    if (slipNo != "") {
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

// 닫기버튼
scwin.f_winClose = function (e) {
  $c.win.closePopup($p);
};

// 서브미션
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_procAmt.setJSON(e.responseJSON.GAUCE);
  totalRows.setValue(ds_procAmt.getRowCount());
  if (ds_procAmt.getRowCount() > 0) {
    let sort_options = {};
    sort_options.sortIndex = "slipDt slipNo";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_procAmt.multisort(sort_options);
    gr_procAmt.focus();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_procAmt',focusMode:'row',id:'gr_procAmt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:oncellclick':'scwin.f_Retrieve2',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'작성일자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'작성부서',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'작성자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',value:'정리일자',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'정리금액',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',value:'정리금액(외화)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{class:'tac underline',blockSelect:'false',displayMode:'label',id:'setlSlipNo',inputType:'text',removeBorderStyle:'false',width:'70',style:'color:blue;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipDt',inputType:'text',removeBorderStyle:'false',width:'70',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipAcctDeptNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'drawEmpNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'setlDt',inputType:'text',removeBorderStyle:'false',width:'70',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'setlAmt',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'setlAmtFcrc',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'setlAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column13',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'setlAmtFcrc\')',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'',label:'닫기',style:'','ev:onclick':'scwin.f_winClose'}}]}]}]}]}]})