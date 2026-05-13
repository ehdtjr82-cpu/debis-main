/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_05p.xml 13252 cdeff9bac9ad0f94df9c68e4709b11b66220af4e6265ecb6e6546f4f0941734e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgBookingNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'Booking번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차;요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBookingNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkFlg',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expNrmYn1',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expNrmYn',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveBookingInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieve","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.op.wrkrslts.cywrkrslts.SaveBookingInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_retrieve","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'scwin.sbm_regist_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkrslts.cywrkrslts.DeleteExportOnRequestAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//scwin.valueObject = (window.dialogArguments).split(";");
//scwin.valueObject = $c.data.getParameter();

//물류/작업실적/입출고/반출입(자가)/수출 상차요청 승인
//1. 자가운송사 : 223491, 상하차요청번호 : 201212210500, [bookingNo : SNKO010121200252]
//2. 자가운송사 : 104028, 상하차요청번호 : 201301250376, [bookingNo : SNKO010130105548]
//3. 자가운송사 : 106726, 상하차요청번호 : 201301280423, [bookingNo : ]

scwin.arrRtnVal = new Array(); // Return Value

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {};
scwin.onpageload = function () {
  var param = $c.gus.cfIsNull($p, $p.getAllParameter().paramData.param) ? $p.getAllParameter().paramData : $p.getAllParameter().paramData.param;
  scwin.valueObject = [];
  if (!$c.gus.cfIsNull($p, param)) {
    scwin.valueObject = param.split(';');
  }
  console.log('params~~');
  console.log(scwin.valueObject);

  //공통코드 적용
  const codeOptions = [{
    grpCd: "OP179",
    compID: "gr_retrieve:admitClsCd"
  } //acb_bilgOdrKndCd   일반청구오더종류
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.fn_setCommonCodeCallback);
};
scwin.fn_setCommonCodeCallback = function () {
  ds_condition.set("lineCd", scwin.valueObject[0]);
  ds_condition.set("bookingNo", scwin.valueObject[1]);
  ds_condition.set("selfTransClntNo", scwin.valueObject[2]);
  ds_condition.set("onReqNo", scwin.valueObject[3]);
  ds_condition.set("orgBookingNo", scwin.valueObject[4]);
  ds_condition.set("impExpClsCd", "O");
  /*
      ds_condition.set("lineCd","");
  	ds_condition.set("bookingNo","SNKO010121103530");
  	ds_condition.set("selfTransClntNo","106726");
  	ds_condition.set("onReqNo","");
  	ds_condition.set("orgBookingNo","SNKO010121103530");
  	ds_condition.set("impExpClsCd","O");
  */
  scwin.f_Retrieve();
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retreive);
  //tr_retreive.Post();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var n_crryinoutCls = $c.gus.cfIsNull($p, ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'crryinoutCls')) ? 0 : parseInt(ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'crryinoutCls'));
  if (n_crryinoutCls > 0) {
    await $c.win.alert($p, '이미 상차/반입 내역이 존재하여 변경할 수 없습니다.\n상차/반입 내역을 반출입 수정 정보 프로그램에서\n취소한 후 변경하십시오.');
    return;
  } else {
    //$c.win.confirm("하위에 새로운 조직을 추가하시겠습니까?", "scwin.insertConfirmCallBack");
    if (await $c.win.confirm($p, '수출 승인 및 반출입 예정 등록 내역이 있을경우\n저장시 수출 승인 및 반출입 예정정보가 삭제됩니다.\n저장하시겠습까?')) {
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'bookingNo') != ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'orgBookingNo')) {
        $c.sbm.execute($p, sbm_delete);
      }
    } else {
      return;
    }
  }
  /*  as-is 에서 confirm('수출 승인 및 반출입 예정 등록 내역이 있을경우\n저장시 수출 승인 및 반출입 예정정보가 삭제됩니다.\n저장하시겠습까?') 
      수행후 '아니요' 선택해도 삭제 로직이 타서 위에 조건에 포함함.
  	if(ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'bookingNo') != ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'orgBookingNo')) {
          //$c.sbm.execute(sbm_delete);
  		//tr_delete.Post();
  	}
  */
  //console.log("delete~~");
  //console.log("getRowPosition~~"+ds_retrieve.getRowPosition());

  ds_retrieve.setCellData(ds_retrieve.getRowPosition(), "chkFlg", 'T');
  var chkCount = 0;
  for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
    if (ds_retrieve.getCellData(i, "chk") == 1) {
      chkCount++;
    }
  }
  if (chkCount == 0) {
    await $c.win.alert($p, "저장할 데이터를 선택해 주세요.");
    return false;
  }
  if (chkCount > 1) {
    await $c.win.alert($p, "하나의  데이터만을 선택해 주세요.");
    return false;
  }
  console.log("save~~");
  $c.sbm.execute($p, sbm_regist);
  //tr_regist.Post();
};
scwin.f_Close = function () {
  $c.win.closePopup($p);
  //window.close();
};
scwin.sbm_retreive_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_retrieve.getRowCount();
  tbx_totalRows.setValue(rowcnt);

  //cfHideDSWaitMsg(ds_retrieve);
  //cfShowTotalRows(totalRows, rowcnt);

  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, "Booking 번호 및 수출일반 오더 연계 내역을 확인하십시오!.\n" + MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  var n_expNrmYn1 = $c.gus.cfIsNull($p, ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'expNrmYn1')) ? 0 : parseInt(ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'expNrmYn1'));
  var n_expNrmYn = $c.gus.cfIsNull($p, ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'expNrmYn')) ? 0 : parseInt(ds_retrieve.getCellData(ds_retrieve.getRowPosition(), 'expNrmYn'));
  if (n_expNrmYn1 > 0 && n_expNrmYn > 0) {
    $c.win.alert($p, '오더 컨테이너 지정 내역을 확인하십시오.\n자가반출 수출일반오더는 컨테이너 지정/미지정 분리 등록 해야 합니다.');
    $c.gus.cfDisableObjects($p, [btn_Save]);
  }
  ds_retrieve.setRowPosition(0);
  gr_retrieve.focus();
};
scwin.sbm_retreive_submiterror = function (e) {};
scwin.sbm_regist_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Close();
};
scwin.sbm_regist_submiterror = function (e) {};
scwin.sbm_delete_submitdone = function (e) {};
scwin.sbm_delete_submiterror = function (e) {};
scwin.btn_close_onclick = function (e) {
  //scwin.f_Retrieve();
  scwin.f_Close();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Booking 정보 조회 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_retrieve',id:'gr_retrieve',style:'',fixedColumn:'1',autoFit:'allColumn',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'70',fixColumnWidth:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Booking번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Line',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상차<br/>요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'구분',width:'70',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bookingNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqNo',inputType:'text',width:'100',class:'txt-blue underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitClsCd',inputType:'select',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})