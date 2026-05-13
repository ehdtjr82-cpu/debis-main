/*amd /ui/tn/os/odrrslts/odrrslts/tn_404_01_03b.xml 24692 2e7c52679189597c8e66fc30ed00e92655a4f960d8a01d90a51cbebf306cc376 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'openAllYn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oDTOCntrList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bajungClntNm',name:'배정업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restrictClntNm',name:'공개업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'입찰업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'예가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'입찰가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oDTOBulkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bajungClntNm',name:'배정업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restrictClntNm',name:'공개업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'입찰업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'예가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'입찰가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO1',action:'/ncall.tn.os.odrrslts.odrrslts.RetrieveCntrOpenResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryConditionDTO","key":"IN_DS1"},{"id":"ds_oDTOCntrList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oDTOCntrList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryConditionDTO1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO2',action:'/ncall.tn.os.odrrslts.odrrslts.RetrieveBulkOpenResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryConditionDTO","key":"IN_DS1"},{"id":"ds_oDTOBulkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oDTOBulkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryConditionDTO2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/공개화물오더/결과조회
// "▶조회조건
//   일자 : 2008/09/01 ~ 2008/09/30"  >> 3건		

scwin.wrkYm = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.prevRow = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_wrkLobranCd"
  }];
  $c.data.setGauceUtil($p, param);
};
scwin.onUdcCompleted = function () {
  ed_wrkStDt.setValue(scwin.wrkYm);
  ed_wrkEndDt.setValue(scwin.wrkYm);
  lc_wrkLobranCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  if (!$c.gus.cfValidate($p, tbl_search)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_wrkStDt.getValue(), ed_wrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_wrkStDt.focus();
    return;
  }
  if (mxTab.getSelectedTabID() == "tabs1") {
    $c.sbm.execute($p, sbm_queryConditionDTO1);
  } else if (mxTab.getSelectedTabID() == "tabs2") {
    $c.sbm.execute($p, sbm_queryConditionDTO2);
  }
};

// <!-- 컨테이너 조회성공 -->
scwin.sbm_queryConditionDTO1_submitdone = async function (e) {
  var rowCnt = ds_oDTOCntrList.getTotalRow();

  // fHideDSWaitMsg(gr_cntrList);
  // txt_countRow.value = rowCnt;

  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  $c.gus.cfGoPrevPosition($p, gr_cntrList, scwin.prevRow);

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  totalRows1.setValue(rowCnt);
};

// <!-- 벌크 조회성공 -->
scwin.sbm_queryConditionDTO2_submitdone = async function (e) {
  var rowCnt = ds_oDTOBulkList.getTotalRow();

  // cfHideDSWaitMsg(gr_bulkList);
  // txt_countRow.value = rowCnt;

  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  $c.gus.cfGoPrevPosition($p, gr_bulkList, scwin.prevRow);

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  totalRows2.setValue(rowCnt);
};

// 컨테이너 그리드 더블클릭
scwin.gr_cntrList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var menuNm = "";
  var url = "";
  var menuCode = "";
  var param = {};
  if (rowIndex >= 0) {
    if (columnId == "odrNo") {
      if (ds_oDTOCntrList.getCellData(rowIndex, "odrNo").length > 11) {
        // var v_url = "/tn/op/transwrkindict/cntr/tn_304_01_01b.jsp" 
        //     + "?odrNo=" + ds_oDTOCntrList.NameValue(row,"odrNo")
        //     + "&lobranCd=" + ds_oDTOCntrList.NameValue(row,"wrkLobranCd")
        //     + "&wrkStDt=" + ds_oDTOCntrList.NameValue(row,"wrkStDt")
        //     + "&wrkEndDt=" + <%=wrkYm%>
        //     ;
        // cfTabMenuUpdate( v_url , "컨테이너중장거리운송지시") ;

        menuNm = "컨테이너중장거리운송지시";
        url = "/ui/tn/op/transwrkindict/cntr/tn_304_01_01b.xml";
        menuCode = "tn_304_01_01b";
        param = {
          odrNo: ds_oDTOCntrList.getCellData(rowIndex, "odrNo"),
          lobranCd: ds_oDTOCntrList.getCellData(rowIndex, "wrkLobranCd"),
          wrkStDt: ds_oDTOCntrList.getCellData(rowIndex, "wrkStDt"),
          wrkEndDt: scwin.wrkYm
        };
      } else {
        // 공개화물오더
        // var v_url = "/tn/sd/openodrmgnt/tn_250_01_01b.jsp" 
        //     + "?odrNo=" + ds_oDTOCntrList.NameValue(row,"odrNo");
        // cfTabMenuUpdate( v_url , "공개화물오더등록") ;

        menuNm = "공개화물오더등록";
        url = "/ui/tn/sd/openodrmgnt/tn_250_01_01b.xml";
        menuCode = "tn_250_01_01b";
        param = {
          odrNo: ds_oDTOCntrList.getCellData(rowIndex, "odrNo")
        };
      }
      $c.win.openMenu($p, menuNm, url, menuCode, param);
    }
  }
};

// 벌크 그리드 더블클릭
scwin.gr_bulkList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var menuNm = "";
  var url = "";
  var menuCode = "";
  var param = {};
  if (rowIndex >= 0) {
    if (columnId == "odrNo") {
      if (ds_oDTOBulkList.getCellData(rowIndex, "odrNo").length > 11) {
        // var v_url = "/tn/op/bulktransworkmgnt/bulktransworkindication/tn_304_02_01b.jsp" 
        //     + "?odrNo=" + ds_oDTOBulkList.NameValue(row,"odrNo")
        //     + "&lobranCd=" + ds_oDTOBulkList.NameValue(row,"wrkLobranCd")
        //     + "&wrkStDt=" + ds_oDTOBulkList.NameValue(row,"wrkStDt")
        //     + "&wrkEndDt=" + <%=wrkYm%>
        //     ;
        // cfTabMenuUpdate( v_url , "벌크운송지시") ;

        menuNm = "벌크운송지시";
        url = "/ui/tn/op/bulktransworkmgnt/bulktransworkindication/tn_304_02_01b.xml";
        menuCode = "tn_304_02_01b";
        param = {
          odrNo: ds_oDTOBulkList.getCellData(rowIndex, "odrNo"),
          lobranCd: ds_oDTOBulkList.getCellData(rowIndex, "wrkLobranCd"),
          wrkStDt: ds_oDTOBulkList.getCellData(rowIndex, "wrkStDt"),
          wrkEndDt: scwin.wrkYm
        };
      } else {
        // 공개화물오더
        // var v_url = "/tn/sd/openodrmgnt/tn_250_01_01b.jsp" 
        //     + "?odrNo=" + ds_oDTOBulkList.NameValue(row,"odrNo");
        // cfTabMenuUpdate( v_url , "공개화물오더등록") ;

        menuNm = "공개화물오더등록";
        url = "/ui/tn/sd/openodrmgnt/tn_250_01_01b.xml";
        menuCode = "tn_250_01_01b";
        param = {
          odrNo: ds_oDTOBulkList.getCellData(rowIndex, "odrNo")
        };
      }
      $c.win.openMenu($p, menuNm, url, menuCode, param);
    }
  }
};

// 그리드 엑셀다운로드
// asis기준 컨테이너/벌크 탭 상관없이 컨테이너 그리드 다운로드됨 (25-12-29)
scwin.cfGridToExcel = async function (e) {
  var fileName = "화물공개현황";
  await $c.data.downloadGridViewExcel($p, gr_cntrList, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_openAllYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_queryConditionDTO.openAllYn',displayMode:'label',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지정공개'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체공개'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공개지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_queryConditionDTO.wrkLobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'ds_queryConditionDTO',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',ref:'data:ds_queryConditionDTO.odrNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'화물공개현황',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'mxTab',style:'',selectedIndex:'0'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'컨테이너',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'벌크',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_cntrList',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_oDTOCntrList',id:'gr_cntrList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_cntrList_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출발작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'E/F',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'거래처코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'배정업체',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'공개업체',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'입찰업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'예가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'입찰가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'배차점소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'출발예정일',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bajungClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'restrictClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payReal',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.cfGridToExcel',gridID:'gr_cntrList',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_oDTOBulkList',id:'gr_bulkList',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_bulkList_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출발작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'품명코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'거래처번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'배정업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'공개업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'입찰업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'예가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'입찰가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'배차점소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'출발예정일',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bajungClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'restrictClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payReal',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})