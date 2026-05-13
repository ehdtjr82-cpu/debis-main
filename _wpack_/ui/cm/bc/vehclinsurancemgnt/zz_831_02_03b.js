/*amd /ui/cm/bc/vehclinsurancemgnt/zz_831_02_03b.xml 19926 43e4380808aa334d0c051ee0e527be2eb6ca0589dfe37fa8b860db63e324a6b2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'chkNewDataYn',name:'chkNewDataYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyStdDt',name:'reqApplyStdDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyEndDt',name:'reqApplyEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqInsuranceStdDt',name:'reqInsuranceStdDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqInsuranceEndDt',name:'reqInsuranceEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDeptCd',name:'reqDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPossessCd',name:'reqPossessCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqVehclNo',name:'reqVehclNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDrcrNo',name:'reqDrcrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_IndDistrInsuranceInfoList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntNo',name:'mgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'wrkClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'applyDt',name:'applyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'deptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'deptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'possessCd',name:'possessCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelCd',name:'cancelCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTypeCd',name:'vehclTypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxPayloadCd',name:'maxPayloadCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'releaseYear',name:'releaseYear',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'drcrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrStdDt',name:'indDistrStdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrEndDt',name:'indDistrEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWrkCd',name:'chgWrkCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pastData',name:'pastData',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currentData',name:'currentData',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileRegYn',name:'fileRegYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'apprvReqNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'apprvStsCd',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.vehclinsurancemgnt.cmd.RetrieveIndDistrInsuranceInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_IndDistrInsuranceInfoList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_IndDistrInsuranceInfoList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strCurDateFrom = scwin.strCurDate.substring(0, 6) + "01";
scwin.strCurDateTo = scwin.strCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.strCurDate);
scwin.acctDeptCd = scwin.userInfo.acctDeptCd;
scwin.acctDeptNm = scwin.userInfo.acctDeptNm;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ832",
    compID: "lc_reqPossessCd,gr_LuggageInsuranceInfoList:possessCd"
  }, {
    grpCd: "ZZ831",
    compID: "gr_LuggageInsuranceInfoList:wrkClsCd"
  }, {
    grpCd: "ZZ833",
    compID: "gr_LuggageInsuranceInfoList:vehclTypeCd"
  }, {
    grpCd: "ZZ837",
    compID: "gr_LuggageInsuranceInfoList:chgWrkCd"
  }, {
    grpCd: "ZZ843",
    compID: "gr_LuggageInsuranceInfoList:cancelCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  rd_chkNewDataYn.setValue("01");
  ica_reqApplyStdDt.setValue(scwin.strCurDateFrom);
  ica_reqApplyEndDt.setValue(scwin.strCurDateTo);
  ica_reqInsuranceStdDt.setValue(scwin.strCurDateFrom);
  ica_reqInsuranceEndDt.setValue(scwin.strCurDateTo);
};
scwin.ondataload = function () {
  const codeOptions1 = [{
    method: "getLuxeComboDataNoSort",
    param1: "VehclInsuranceMgntEBC",
    param2: "retriveLobranCodeList",
    compID: "lc_reqDeptCd"
  }];
  $c.data.setGauceUtil($p, codeOptions1);
};

// displayFormatter 처리
scwin.apprvStsCd = function (data) {
  return $c.gus.decode($p, data, "01", "대기", "02", "상신", "03", "반려", "04", "중간승인", "05", "최종승인", "06", "보류", "", "미상신");
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //시작일자 check
  if (ica_reqApplyStdDt.getValue() != '' || ica_reqApplyEndDt.getValue() != '') {
    if (!$c.gus.cfIsAfterDate($p, ica_reqApplyStdDt.getValue(), ica_reqApplyEndDt.getValue())) {
      await alert("신청일자 시작 일자가 종료일자 이전 이어야 합니다.");
      return;
    }
  }

  //보험기간 check
  if (ica_reqInsuranceStdDt.getValue() != '' || ica_reqInsuranceEndDt.getValue() != '') {
    if (!$c.gus.cfIsAfterDate($p, ica_reqInsuranceStdDt.getValue(), ica_reqInsuranceEndDt.getValue())) {
      await alert("보험기간 시작 일자가 종료일자 이전 이어야 합니다.");
      return;
    }
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
  rd_chkNewDataYn.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function () {
  let cntRow = ds_IndDistrInsuranceInfoList.getRowCount();
  if (cntRow == 0) return;
  let fileName = "산재보험내역";
  let sheetTitle = "산재보험내역";
  await $c.data.downloadGridViewExcel($p, gr_LuggageInsuranceInfoList, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_IndDistrInsuranceInfoList.getRowCount();
  spanTotal.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_chkNewDataYn',ref:'data:dma_condition.chkNewDataYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'최신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_condition',refEdDt:'reqApplyEndDt',refStDt:'reqApplyStdDt',style:'',edFromId:'ica_reqApplyStdDt',edToId:'ica_reqApplyEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input1',style:'width: 150px;',maxlength:'20',ref:'data:dma_condition.reqVehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차대번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input2',style:'width: 150px;',maxlength:'20',ref:'data:dma_condition.reqDrcrNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',displayMode:'value delim label',editType:'select',id:'lc_reqDeptCd',mandatory:'true',ref:'data:dma_condition.reqDeptCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar2',refDataMap:'dma_condition',refEdDt:'reqInsuranceEndDt',refStDt:'reqInsuranceStdDt',style:'',edFromId:'ica_reqInsuranceStdDt',edToId:'ica_reqInsuranceEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',displayMode:'value delim label',editType:'select',id:'lc_reqPossessCd',mandatory:'true',ref:'data:dma_condition.reqPossessCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'산재보험내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_LuggageInsuranceInfoList',id:'udc_LuggageInsuranceInfoList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_IndDistrInsuranceInfoList',id:'gr_LuggageInsuranceInfoList',style:'',visibleRowNum:'11',visibleRowNumFix:'true',readOnly:'true',autoFit:'none'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'기본정보',width:'1080',colSpan:'12',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'산재보험 내역',width:'220',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'변경 사항',width:'300',colSpan:'3',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'전자결재 정보',width:'170',colSpan:'2',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'해지</br>사유',width:'70',colSpan:'',rowSpan:'3'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column29',value:'보험기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'차량보험</br>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'신청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'작업</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'지사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column63',value:'차대번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'차량형식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'최대</br>적재량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'차량</br>년식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'첨부</br>파일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'지사</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'입직일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'이직/</br>적용제외일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'변경내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'변경전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'변경후',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'applyDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkClsCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deptNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'possessCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'drcrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'vehclTypeCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxPayloadCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'releaseYear',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fileRegYn',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deptCd',value:'',displayMode:'label',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrStdDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrEndDt',inputType:'text',style:'',value:'',width:'120',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgWrkCd',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pastData',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currentData',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormatter:'scwin.apprvStsCd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cancelCd',inputType:'select',style:'',value:'',width:'70',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]})