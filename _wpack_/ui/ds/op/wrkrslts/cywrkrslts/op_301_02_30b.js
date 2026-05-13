/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_30b.xml 15965 cc60e34466795804d27f502d98175a6043f5b18d6b2e4003f38e22ec1fa0095f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtClntCd',name:'화주',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onReqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'자가운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDd',name:'상차예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'line',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BL/Booking',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'동부오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colBlBookingNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colOdrNo',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveOnRequestHwajuCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_onReqInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_onReqInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 세션정보
  let memJson = $c.data.getMemInfo($p);

  // 사용자구분코드(01:그룹사구분코드(01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객))
  scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd");
  scwin.clntNo = $c.data.getMemInfo($p, "clntNo");
  scwin.clntNm = $c.data.getMemInfo($p, "clntNm");

  // 서버를 기준으로 현재 날짜 반환
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

  // 서버를 기준으로 현재 날짜 반환
  const nowDate = new Date();
  const yyyy = nowDate.getFullYear();
  const mm = String(nowDate.getMonth() + 1).padStart(2, '0');
  const dd = String(nowDate.getDate()).padStart(2, '0');
  const lastDate = new Date(yyyy, mm + 1, 0);
  const last = lastDate.getDate();
  scwin.vQryStDt = yyyy + mm + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = yyyy + mm + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
  // scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01";
  // scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth(scwin.vCurDate.substring(0, 6));

  scwin.params = $c.data.getParameter($p);
  console.log("### onpageload : " + JSON.stringify(scwin.params));
  scwin.selfTransClntNo = scwin.params.selfTransClntNo;
  scwin.onReqNo = scwin.params.onReqNo;
  scwin.selfTransClntNm = scwin.params.selfTransClntNm;
  scwin.lineCd = scwin.params.lineCd;
  scwin.reqClntNo = scwin.params.reqClntNo;

  // 공통 코드 매핑
  const codeOptions = [{
    grpCd: "SD060",
    compID: "gr_onReqInfo:impExpClsCd"
  } // 그리드
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  // udc_fromToCalendar UDC 에 있는 setInitDate 호출
  udc_srchDate.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  ed_mchtClntCd.setValue(scwin.reqClntNo);
  scwin.udc_mchtClnt_openPopup('T');
  await scwin.btn_retrieve_onclick();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFromDate.getValue())) {
    ed_srchFromDate.setValue(scwin.vQryStDt); // 실적일자시작
  }
  if ($c.gus.cfIsNull($p, ed_srchToDate.getValue())) {
    ed_srchToDate.setValue(scwin.vQryEndDt); // 실적일자종료
  }
  if (scwin.reqClntNo != "") {
    ed_mchtClntCd.setValue(scwin.reqClntNo);
  }
  if (scwin.reqClntNo != "") {
    dma_srchCond.set("mchtClntCd", scwin.reqClntNo);
  } else {
    dma_srchCond.set("mchtClntCd", ed_mchtClntCd.getValue());
  }

  // 위 setValue() 로직과 calendar 자체 유효성 체크로 아래 로직은 필요 없을 듯함.
  let ret1 = await $c.gus.cfValidate($p, ed_srchFromDate.getValue());
  let ret2 = await $c.gus.cfValidate($p, ed_srchToDate.getValue());
  if (ret1 || ret2) {
    return;
  }
  let ret3 = await $c.gus.cfIsAfterDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue());
  if (!ret3) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchFromDate.focus();
    return;
  }
  let ret4 = await $c.gus.cfValidate($p, [tb_srchCond]);
  if (!ret4) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_onReqInfo.getRowCount() == 0) {
      totalRows.setValue("0");
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      return;
    } else {
      totalRows.setValue(ds_onReqInfo.getRowCount());
      for (var i = 0; i < ds_onReqInfo.getRowCount(); i++) {
        if (ds_onReqInfo.getCellData(i, "impExpClsCd") == "I") {
          ds_onReqInfo.setCellData(i, "impExpClsCd", "수입");
          ds_onReqInfo.setCellData(i, "colBlBookingNo", ds_onReqInfo.getCellData(i, "blNo"));
          ds_onReqInfo.setCellData(i, "colOdrNo", ds_onReqInfo.getCellData(i, "blNo"));
        } else if (ds_onReqInfo.getCellData(i, "impExpClsCd") == "O") {
          ds_onReqInfo.setCellData(i, "impExpClsCd", "수출");
          ds_onReqInfo.setCellData(i, "colBlBookingNo", ds_onReqInfo.getCellData(i, "bookingNo"));
          ds_onReqInfo.setCellData(i, "colOdrNo", ds_onReqInfo.getCellData(i, "bookingNo"));
        } else {
          ds_onReqInfo.setCellData(i, "impExpClsCd", "반납");
          ds_onReqInfo.setCellData(i, "colBlBookingNo", "");
          ds_onReqInfo.setCellData(i, "colOdrNo", "");
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 화주 코드 조회 팝업
//-------------------------------------------------------------------------
scwin.udc_mchtClnt_onblurCodeEvent = function (e) {
  scwin.udc_mchtClnt_openPopup('T');
};
scwinudc_mchtClntr_onviewchangeNameEvent = function (info) {
  scwin.udc_mchtClnt_openPopup('T');
};
scwin.udc_mchtClnt_onclickEvent = function (e) {
  scwin.udc_mchtClnt_openPopup('F');
};
scwin.udc_mchtClnt_openPopup = function (pClose) {
  let pCode = ed_mchtClntCd.getValue();
  let pName = txt_mchtClntCm.getValue();
  let pWhere = ",LOGISCLNT2";
  // udc_mchtClnt.setSelectId('retrieveClntList');
  udc_mchtClnt.cfCommonPopUp(scwin.udc_mchtClnt_callBackFunc, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null);
};
scwin.udc_mchtClnt_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    // for (var i = 0; i < obj.length; i++) {
    //     if( $p.getComponentById(obj[i]).tagName == "INPUT" ){
    // 		$p.getComponentById(obj[i]).setValue(rtnList[i%2]);
    // 	}else if( $p.getComponentById(obj[i]).tagName == "SPAN" ){
    // 		$p.getComponentById(obj[i]).innerText = rtnList[i%2];
    // 	}else if( $p.getComponentById(obj[i]).tagName == "OBJECT" ){
    // 		 $p.getComponentById(obj[i]).setValue(rtnList[i%2]);
    // 	}
    // }
    ed_mchtClntCd.setValue(rtnList[0]);
    txt_mchtClntCm.setValue(rtnList[1]);
  } else {
    // for (var i = 0; i < obj.length; i++) {
    //     if( $p.getComponentById(obj[i]).tagName == "INPUT" ){
    // 		$p.getComponentById(obj[i]).setValue(rtnList[i%2]);
    // 	}else if( $p.getComponentById(obj[i]).tagName == "SPAN" ){
    // 		$p.getComponentById(obj[i]).innerText = rtnList[i%2];
    // 	}else if( $p.getComponentById(obj[i]).tagName == "OBJECT" ){
    // 		 $p.getComponentById(obj[i]).setValue(rtnList[i%2]);
    // 	}
    // }
    ed_mchtClntCd.setValue("");
    txt_mchtClntCm.setValue("");
  }
};
scwin.f_gridColumnData = function (impExpClsCd, blNo, bookingNo) {
  return $c.gus.decode($p, impExpClsCd, "I", blNo, "O", bookingNo, "");
};
scwin.excelDown = async function (gubun) {
  var fileName = "상차요청승인현황(협력업체)";
  await $c.data.downloadGridViewExcel($p, gr_onReqInfo, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_mchtClntCd',nameId:'txt_mchtClntCm',id:'udc_mchtClnt',btnId:'btn_mchtClnt',selectID:'retrieveClntList',refDataCollection:'dma_srchCond',code:'mchtClntCd','ev:onblurCodeEvent':'scwin.udc_mchtClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mchtClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_mchtClnt_onclickEvent',popupTitle:'거래처팝업,거래처코드,거래처명',popupGridHeadTitle:'거래처코드,거래처명,,,사업자번호,,거래처직원,주소,요율연결여부',popupGridHiddenColumn:'3,4,6,10',validTitle:'화주',mandatoryCode:'true',maxlengthCode:'6',mandatoryName:'false',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchDate',refDataMap:'dma_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입 상차 요청 승인 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_onReqInfo',gridUpYn:'N',gridDownFn:'scwin.excelDown',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_onReqInfo',id:'gr_onReqInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'자가운송사코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'자가운송사명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'상차요청번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상차요청일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상차예정일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Line',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'BL/Booking',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'동부오더',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNm',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqDt',inputType:'text',width:'100',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onIntendDd',inputType:'text',width:'100',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'line',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'colBlBookingNo',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'colOdrNo',inputType:'text',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})