/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_51b.xml 13133 1e144cbc35bb4b8a2933a76b2d4a7f1fa223f113b4be0e74f24c9cef54b08bdc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SelectInventory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrLineNo',name:'Order Line No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pPonum',name:'포스코주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ebelp',name:'ERP PO 행번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'productNo',name:'제품번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pSpec',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pThick',name:'두께',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pMenge',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'names',name:'고객사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark1',name:'비고1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark2',name:'비고2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zconfirm',name:'Y : Confirmed , N : Not Confirmed',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'recvDtFrom',name:'수신일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recvDtTo',name:'수신일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrLineNo',name:'Order Line No',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrievePoscoSelectInventoryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_SelectInventory","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SelectInventory","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrLineNoList = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    var dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
    ed_recvDtFrom.setValue(dateStr.substring(0, 6) + '01');
    ed_recvDtTo.setValue(dateStr);
    //$c.gus.cfDisableObjects([btn_send, btn_cancel]); 사용되지 않음

    //테스트 데이터
    // ds_Query.set("recvDtFrom", "20240801");
    // ds_Query.set("recvDtTo", "20240831");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //필수입력항목 체크
  if (!($c.gus.cfIsNull($p, ed_recvDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_recvDtTo.getValue())) && ($c.gus.cfIsNull($p, ed_recvDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_recvDtTo.getValue()))) {
    $c.gus.cfAlertMsg($p, "수신일자를 입력하십시오.");
    ed_recvDtFrom.focus();
    return;
  }
  if (!$c.gus.cfValidate($p, ed_recvDtFrom) || !$c.gus.cfValidate($p, ed_recvDtTo)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_recvDtFrom.getValue(), ed_recvDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_recvDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_SelectInventory.getRowCount();
  var sheetTitle = "포스코 PR선별재고";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_SelectInventory, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_srchCond);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_SelectInventory.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  tbx_totalRows.setValue(ds_SelectInventory.getRowCount()); // 소계 부분을 뺀 실제 데이터 갯수를 Count...
  //$c.gus.cfEnableObjects([btn_send, btn_cancel]); 사용되지 않음
};

//-------------------------------------------------------------------------
// 그리드 oncelldblclick
//-------------------------------------------------------------------------
scwin.gr_SelectInventory_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrLineNo" && ds_SelectInventory.getCellData(rowIndex, "odrLineNo") != "") {
    var odrLineNo = ds_SelectInventory.getCellData(rowIndex, "odrLineNo");
    var strUrl = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_50b.xml";
    var programId = "op_302_02_50b.jsp";
    var paramObj = {
      odrLineNo: odrLineNo
    };

    //$c.win.openMenu("입고등록", strUrl, programId, paramObj);
    // odrLineNo 번호마다 각각 다른 탭화면 오픈
    $c.win.openMenu($p, "입고등록", strUrl, programId, paramObj, {
      menuCode: odrLineNo
    });
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_recvDt',refDataMap:'ds_Query',refEdDt:'recvDtTo',refStDt:'recvDtFrom',style:'',edFromId:'ed_recvDtFrom',edToId:'ed_recvDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order Line NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_schInput',A:{style:'width:150px;',id:'udc_odrLineNoList',refDataMap:'ds_Query',iptNm:'odrLineNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' PR재고선별요청 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_SelectInventory',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SelectInventory',id:'gr_SelectInventory',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_SelectInventory_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'OrderLineNO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'제품번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'강종',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'두께',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'중량(TON)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'고객사',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'비고1',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'비고2',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'확정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'반려사유',width:'100'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'포스코주문번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'포스코주문번호행번',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrLineNo',inputType:'text',width:'120',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'productNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pSpec',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pThick',inputType:'text',width:'80',textAlign:'right',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pMenge',inputType:'text',width:'100',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'names',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark1',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark2',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zconfirm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pPonum',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'ebelp',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})