/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_04_01b.xml 19927 0efb0446482cd4d3b14a50c76bc0674582c76e0a55b857841bb57981a524afa2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_adjmContCancel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'정리구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'발생금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtClose',name:'정리금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수금선수금발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iwrkDt',name:'변경된작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addSusRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_adjmContCancel',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_adjmContCancel","key":"IN_DS1"},{"action":"modified","id":"ds_addSusRecv","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_adjmContCancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //ASIS 히든,showfalse 그리드 필드정보
  /*
  그리드 hidden true로
  gr_adjmContCancel.setColumnVisible("acctDeptCd", false);
  gr_adjmContCancel.setColumnVisible("clntNo", false);
   gr_adjmContCancel.setColumnVisible("susRecvInitamtOutbrNo", false);
  gr_adjmContCancel.setColumnVisible("crcCd", false);
  gr_adjmContCancel.setColumnVisible("exchRt", false);
  gr_adjmContCancel.setColumnVisible("amtFcrc", false);
  gr_adjmContCancel.setColumnVisible("delYn", false);
  gr_adjmContCancel.setColumnVisible("iwrkDt", false);
  gr_adjmContCancel.setColumnVisible("coCd", false);
  gr_adjmContCancel.setColumnVisible("coClsCd", false);*/
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM040",
    compID: "gr_adjmContCancel:wrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  ed_wrkDt.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
//그리드 순번 데이터포맷처리
//-------------------------------------------------------------------------
scwin.susRecvInitamtSeqNo = function (data) {
  return $c.gus.decode($p, data, "0", "", data);
};

//-------------------------------------------------------------------------
//그리드 셀 클릭
//-------------------------------------------------------------------------
scwin.gr_adjmContCancel_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 전표 POPUP
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_adjmContCancel.getCellData(rowIndex, "slipNo"));
  }
};

//-------------------------------------------------------------------------
// 선수금처리 취소 저장시
//------------------------------------------------------------------------
scwin.f_Cancel = async function (rowIndex, oldRow) {
  try {
    let checkRow = 0;
    let checkCount = 0;
    let cancelCount = 0;
    let cancelRowPosition = 0;

    // 처리취소시 필수 조건 Check
    let ret = await $c.gus.cfValidate($p, [ed_wrkDt]);
    if (!ret) {
      return false;
    }

    // 처리취소 Row의 선택 위치 확인
    for (i = 0; i < ds_adjmContCancel.getRowCount(); i++) {
      if (ds_adjmContCancel.getCellData(i, "num") == "T") {
        if (ds_adjmContCancel.getCellData(i, "wrkClsCd") == ACConstants.SUSPINIT_INITAMT_CREATE_PROCESS) {
          $c.gus.cfAlertMsg($p, "상태가 발생인 것은 취소 할수 없습니다. 선택사항을 확인 하시기 바랍니다.");
          return false;
        }
        if (ds_adjmContCancel.getCellData(i, "wrkClsCd") == ACConstants.SUSPINIT_BILLRECEIVABL) {
          $c.gus.cfAlertMsg($p, "상태가 수금인 것은 취소 할수 없습니다. 선택사항을 확인 하시기 바랍니다.");
          return false;
        }
        checkRow = 1;
      }
      // 수금 발생 목록을 제외한 상태의 갯수를 확인
      if (ds_adjmContCancel.getCellData(i, "wrkClsCd") != ACConstants.SUSPINIT_INITAMT_CREATE_PROCESS || ds_adjmContCancel.getCellData(i, "wrkClsCd") != ACConstants.SUSPINIT_BILLRECEIVABL) {
        cancelCount = i;
      }
    }
    for (i = 0; i < ds_adjmContCancel.getRowCount(); i++) {
      if (ds_adjmContCancel.getCellData(i, "num") == "T") {
        checkCount++;
        cancelRowPosition = i;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    } else if (checkCount > 1) {
      $c.gus.cfAlertMsg($p, "선택사항은 최근 발생항목 한개만 선택 하셔야 합니다.");
    }

    // 마지막 상태만 취소처리가 가능함.
    if (cancelCount != cancelRowPosition) {
      $c.gus.cfAlertMsg($p, "처리취소는 마지막 부터 가능합니다.");
      return false;
    }
    if (await $c.win.confirm($p, "승인 하시겠습니까?")) {
      for (i = 0; i < ds_adjmContCancel.getRowCount(); i++) {
        if (ds_adjmContCancel.getCellData(i, "num") == "T") {
          ds_adjmContCancel.setCellData(i, "iwrkDt", ed_wrkDt.getValue());
          ds_adjmContCancel.setCellData(i, "acctCd", ACConstants.ACCTCD_INITAMT);
        }
      }

      // 선수금처리 취소
      if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_INITAMT_PROCESS) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelInitiativeAmountProcessCMD.do";
        // 환불처리 취소
      } else if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_REFUND_PROCESS) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelReturnProcessCMD.do";
        // 잡이익 처리 취소
      } else if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_PROFIT_PROCESS) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelEtcgainsProcessCMD.do";
        // 선수금역분개 처리 취소
      } else if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_INITAMT_CANCEL) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelInitiativeAmountReverseCMD.do";
        // 환불처리 역분개 처리 취소
      } else if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_REFUND_CANCEL) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelReturnReverseCMD.do";
        // 잡이익 역분개 처리 취소
      } else if (ds_adjmContCancel.getCellData(ds_adjmContCancel.getRowCount() - 1, "wrkClsCd") == ACConstants.SUSPINIT_PROFIT_CANCEL) {
        sbm_adjmContCancel.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelEtcgainsReverseCMD.do";
      } else {
        $c.gus.cfAlertMsg($p, "취소 처리 할수 없는 상태입니다.<br/>선수금 정산내역이 생성된 메뉴에서 취소처리 하시기 바랍니다");
        return false;
      }
      $c.sbm.execute($p, sbm_adjmContCancel);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 선수금처리 취소 저장시 콜백
//-------------------------------------------------------------------------
scwin.sbm_adjmContCancel_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $p.parent().scwin.f_Retrieve();
    $p.parent().tabControl1.getWindow(1).ed_amt.setValue(0);
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_adjmContCancel',id:'gr_adjmContCancel',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true',sortable:'false','ev:oncellclick':'scwin.gr_adjmContCancel_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'선택',width:'70',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'순번',width:'70',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'정리구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'전표번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'귀속부서명',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'거래처명',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'발생금액(원)',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'정리금액(원)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'지급번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'susRecvInitamtOutbrNo',value:'가수금선수금발생번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crcCd',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'exchRt',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'금액_외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'delYn',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'iwrkDt',value:'변경된작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coClsCd',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtSeq',inputType:'text',style:'',value:'',width:'70',textAlign:'center',displayFormatter:'scwin.susRecvInitamtSeqNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkClsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'',width:'70',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'70',textAlign:'center',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtClose',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'susRecvInitamtOutbrNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'iwrkDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',style:'',value:'',width:'120',inputType:'expression',expression:'sum(\'amt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',style:'',id:'column42',value:'',displayMode:'label',inputType:'expression',expression:'sum(\'amtClose\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업일자',style:'',tagname:'span'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',ref:'data:ds_addSusRecv.wrkDt',title:'작업일자'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'trigger18',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리취소'}]}]}]}]}]}]}]})