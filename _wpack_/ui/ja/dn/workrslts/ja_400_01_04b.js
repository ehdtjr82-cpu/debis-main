/*amd /ui/ja/dn/workrslts/ja_400_01_04b.xml 21900 54f3e3f13629dcdffcde600fd0640a0723debdc79de8bdbaad8f5f733c5cfdac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatNm',name:'부가세;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatTot',name:'누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat01',name:'1월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat02',name:'2월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat03',name:'3월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat04',name:'4월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat05',name:'5월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat06',name:'6월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat07',name:'7월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat08',name:'8월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat09',name:'9월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat10',name:'10월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat11',name:'11월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat12',name:'12월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYmFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.workrslts.RetrieveVatConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurYear = scwin.strCurDate.substring(0, 4);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  udc_fromToYearMon.setInitDate(scwin.strCurYear + "01", scwin.strCurYear + "12");
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, portCondtionPart, null);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  let dtFrom = ed_dtFrom.getValue();
  let dtTo = ed_dtTo.getValue();
  if (dtFrom == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    ed_dtFrom.focus();
    return;
  } else if (dtTo == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    ed_dtTo.focus();
    return;
  }
  if (dtFrom.substring(0, 4) != dtTo.substring(0, 4)) {
    $c.win.alert($p, "년도수가 같아야 합니다. ");
    return;
  }
  /*
  if (!$c.gus.cfValidateValue(dtFrom, "date=YYYYMM") || !$c.gus.cfValidateValue(dtTo, "date=YYYYMM")) {
      $c.gus.cfAlertMsg("날짜형식이 잘못되었습니다. 다시 입력하여주세요");
      return;
  }
  */
  if (dtFrom.length != "6" || dtTo.length != "6") {
    $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. 다시 입력하여주세요");
    return;
  }

  //dataMap setting
  dma_condition.set("adptYmFrom", ed_dtFrom.getValue());
  dma_condition.set("adptYmTo", ed_dtTo.getValue());
  dma_condition.set("vehclNoCd", ed_cond_vehclNo.getValue());
  dma_condition.set("pchsClntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------

scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부

  let rtnList; // 공통POP-UP -> 요청화면   

  switch (disGubun) {
    case 1:
      rtnList = udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, pCode, pName, pClose, '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      rtnList = udc_comCode_vehc.cfCommonPopUp(scwin.udc_comCode_vehc_callBackFunc, pCode, pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , "400" // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_comCode_clnt_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    ed_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    ed_clntNm.options.hidVal = "";
  }
};
scwin.udc_comCode_vehc_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_vehclNoCd.setValue(rtnList[0]);
    ed_cond_vehclNo.setValue(rtnList[1]);
    ed_vehclNoCd.options.hidVal = rtnList[0];
    ed_cond_vehclNo.options.hidVal = rtnList[1];
  } else {
    ed_vehclNoCd.setValue("");
    ed_cond_vehclNo.setValue("");
    ed_vehclNoCd.options.hidVal = "";
    ed_cond_vehclNo.options.hidVal = "";
  }
};

// script
//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let rowcnt = ds_out.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_out.setFocusedCell(0, 0);
    total.setValue(rowcnt);
  }
  scwin.colorChk();
};
scwin.colorChk = function () {
  var colid = ["selpchItemCd", "selpchItemNm", "vatTot", "vat01", "vat02", "vat03", "vat04", "vat05", "vat06", "vat07", "vat08", "vat09", "vat10", "vat11", "vat12"];
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "selpchItemCd") == "9999") {
      for (let item of colid) {
        gr_out.setCellBackgroundColor(i, item, "#FFDAB9");
      }

      // let styleInfo = {
      //     styleName  : "background-color",
      //     styleValue : "#FFDAB9",
      //     type       : "row",
      //     target     : "data",
      //     rowIndex   : i
      // };

      // gr_out.setStyleAll(styleInfo);
    }
  }
};

// popup
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_comCode_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_comCode_vehc_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNoCd, ed_cond_vehclNo, 3);
};
scwin.udc_comCode_vehc_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNoCd.getValue(), ed_cond_vehclNo.getValue(), 'F', 'T');
};
scwin.udc_comCode_vehc_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(2, ed_cond_vehclNo, ed_vehclNoCd, 'F', 'F');
};
scwin.f_Excel = async function () {
  let options = {
    fileName: "차량별 부가세 현황",
    // + ".xls",
    sheetName: "차량별 부가세 현황",
    useStyle: "false"
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'portCondtionPart',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToYearMon',refEdDt:'',edFromId:'ed_dtFrom',edToId:'ed_dtTo',mandatoryFrom:'true',objTypeFrom:'data',mandatoryTo:'true',titleFrom:'년월',titleTo:'년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_comCode_clnt',allowCharCode:'0-9',mandatoryCode:'false',selectID:'retrieveSubsidaryClntList','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclNoCd',nameId:'ed_cond_vehclNo',allowCharCode:'0-9',maxlengthCode:'4',mandatoryCode:'false',id:'udc_comCode_vehc',selectID:'retrieveSubsidaryVehclList','ev:onclickEvent':'scwin.udc_comCode_vehc_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehc_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_vehc_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량별 부가세 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',grdDownOpts:'{"fileName" : "차량별 부가세 현황.xlsx", "sheetName" : "차량별 부가세 현황" ,"type" : "1" }',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell',focusMove:'true',readOnly:'true',fixedColumn:'20',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속거래처',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'매니저',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'부가세<br/>구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출입항목',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'월별 부가세',width:'910',colSpan:'13',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'1월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'2월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'3월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'4월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'5월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'6월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'7월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'8월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'9월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'12월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',width:'120',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'managerNo',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'managerNm',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatNm',inputType:'text',width:'80',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatTot',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat01',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat02',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat03',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat04',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat05',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat06',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat07',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat08',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat09',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat10',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat11',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat12',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})