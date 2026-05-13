/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_01b.xml 20450 ea352ab9613b86056d88e38cb78c9e58c0e07cd53370913662c15b902889263d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrLedgNo',name:'차입원장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrKndCd',name:'차입종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'차입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'차입일자시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'차임일자종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rpayclscd',name:'상환구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_borrow',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrKndCd',name:'차입종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrLedgNo',name:'차입원장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'차입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'차입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'차입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'차입잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'intRt',name:'금리',dataType:'number'}},{T:1,N:'w2:column',A:{id:'intAmt',name:'이자금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'intPayMthdCd',name:'이자지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptBankbookNo',name:'입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'차입전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBorrow',action:'/ac.fm.fundemploy.borrmgnt.RetrieveBorrowingLedgerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_borrow","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_borrow","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBorrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM001",
    compID: "lc_borrKndCd,gr_paymgnt:borrKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
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
//차입기관
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_borrClntNo, ed_clntNm, '1');
};

//-------------------------------------------------------------------------
//차입기관찾기
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrClntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
//차입번호
//-------------------------------------------------------------------------
scwin.ed_borrLedgNo_onblur = function (e) {
  scwin.f_CheckPopUp(ed_borrLedgNo, null, '2');
};

//-------------------------------------------------------------------------
//차입번호찾기
//-------------------------------------------------------------------------
scwin.btn_borrLedgNo_onclick = function (e) {
  scwin.f_openPopUp('2', ed_borrLedgNo, null);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm);
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName) {
  try {
    let code = txtCode.getValue();
    let name = "";
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      // 차입기관 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp(sCmdName,code,name,"F",null,null,null,null,null,null,null,null,null); // 차입기관
        udc_borrClntNo.setSelectId('retrieveBankInfo');
        udc_borrClntNo.cfCommonPopUp(scwin.udc_borrClntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened) F->T로 고객요청변경 03.17
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      //차입번호 PopUp 호출  
      case '2':
      case '1':
        //rtnList = cfCommonPopUp(sCmdName,code,name,"F",null,null,null,null,null,null,null,null,null); // 차입번호
        udc_borrLedgNo.setSelectId('retrieveBorrLedgNoInfo');
        udc_borrLedgNo.cfCommonPopUp(scwin.udc_borrLedgNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened) F->T로 고객요청변경 03.17
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 차입기관 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      ed_borrClntNo.setValue(rtnList[0]); // 코드
      ed_clntNm.setValue(rtnList[1]); // 코드명
      ed_borrClntNo.hidVal = rtnList[0]; // 코드
    } else {
      ed_borrClntNo.setValue("");
      ed_clntNm.setValue("");
      ed_borrClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_borrClntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 차입번호 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_borrLedgNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      ed_borrLedgNo.setValue(rtnList[0]); // 코드
      ed_borrLedgNo.hidVal = rtnList[0]; // 코드
    } else {
      ed_borrLedgNo.setValue("");
      ed_clntNm.setValue("");
      ed_borrLedgNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_borrLedgNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  try {
    if (!(ed_stDt.getValue() == null || ed_stDt.getValue() == "" || ed_endDt.getValue() == null || ed_endDt.getValue() == "")) {
      if (!$c.gus.cfIsAfterDate($p, ed_stDt.getValue(), ed_endDt.getValue())) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
        return false;
        ;
      }
    }
    $c.sbm.execute($p, sbm_retrieveBorrow);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveBorrow_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (ds_borrow.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_borrow.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_paymgnt, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_retrieveBorrow_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_borrow.getRowCount() <= 0) {
    await $c.win.alert($p, "차입원장정보가 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "차입원장조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "차입원장조회" //엑셀내 시트명 지정필요시
    ,
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입기관 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_borrClntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_borrClntNo',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'ds_condition',code:'borrClntNo',mandatoryCode:'true',selectID:'retrieveBankInfo',validTitle:'차입기관','ev:onblurCodeEvent':'scwin.udc_borrClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_borrClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_borrKndCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',objType:'data',ref:'data:ds_condition.borrKndCd',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',refStDt:'stDt',refEdDt:'endDt',refDataMap:'ds_condition'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_borrLedgNo',style:'width: 150px;',maxlength:'5',allowChar:'0-9',objType:'data',ref:'data:ds_condition.borrLedgNo','ev:onblur':'scwin.ed_borrLedgNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_borrLedgNo',style:'',type:'button','ev:onclick':'scwin.btn_borrLedgNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입번호'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_paymgnt',btnPlusYn:'N',btnUser:'N',gridDownYn:'Y',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_borrow',id:'gr_paymgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'차입원장번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'차입기관',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'차입종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'차입일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'이율',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'차입원화',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'잔액',width:'70',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'borrLedgNo',inputType:'text',style:'',value:'',width:'110',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrKndCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intRt',inputType:'text',style:'',value:'',width:'70',textAlign:'center',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrRamt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_borrLedgNo',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})