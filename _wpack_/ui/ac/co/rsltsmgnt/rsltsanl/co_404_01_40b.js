/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_40b.xml 29226 f42b490ad11ff961c037c77640d5f3eb23b13ac2610e5a6b9c09fca0531332e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'stdYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sacctDeptCd',name:'sacctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sbizDomCd',name:'sbizDomCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmAmt',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmCumAmt',name:'당월누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyMmAmt',name:'전년동월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyMmCumAmt',name:'전년동월누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyCumAmt',name:'전년누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacctDeptCd',name:'조회귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sbizDomCd',name:'조회사업영역',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveInternalSelpchUnsettledCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_search","key":"IN_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strFromDate = scwin.sDate.substring(0, 6);
  scwin.closeYm1;
  scwin.closeYm2;
  scwin.preCloseYm1;
  scwin.preCloseYm2;
  scwin.unit;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_stdYm.setValue(scwin.strFromDate);
  $p.setTimeout(function () {
    // ica_stdYm.setValue("201001");
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 공통코드테이블 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      break;
    case 2:
      // 등록지
      udc_sacctDeptCd.setSelectId('retrieveCommCdInfo');
      udc_sacctDeptCd.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_sacctDeptCd, ed_sacctDeptNm);
      } // XML상의 SELECT ID / 작업장 조회
      , pCode // 화면에서의 Code Element의 Value
      , pName // 화면에서의 Name Element의 Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , 'CO037' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      , null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 수금부서 PopUp 호출(물류 귀속부서만 POPUP에 포함)
    case '1':
      udc_sbizDom.setSelectId('retrieveAcctDeptCdInfo');
      udc_sbizDom.cfCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0] == "N/A") return;
          ds_search.set("acctDeptLvl", rtnList[6]);
        } else {
          ds_search.set("acctDeptLvl", 0);
        }
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, cd, nm, "T", null, null, null, null, null, "450", "500", null, null); // 귀속부서
      break;

    // 조회조건용 사업영역
    case '2':
      udc_sbizDom.setSelectId('retrieveBizDomCdInfo');
      udc_sbizDom.cfCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0] == "N/A") return;
          ds_search.set("acctDeptLvl", rtnList[6]);
        } else {
          ds_search.set("acctDeptLvl", 0);
        }
        scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, cd, nm, "T", null, null, null, null, "1,,,,,", "450", "500", null, null); // 사업영역
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
    ds_search.set("acctDeptLvl", rtnList[6]);
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    ds_search.set("acctDeptLvl", 0);
  }
};

//-------------------------------------------------------------------------
// 조회(내부매출입-미확정현황)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfIsNull($p, ica_stdYm.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["매출년월"]);
    ica_stdYm.focus();
    return;
  }

  //dataSetDebug(ds_search, true)
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_master");
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const infoArr = [];
    const options = {
      fileName: ica_stdYm.getValue() + "내부매출입-미확정현황.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: ica_stdYm.getValue() + "내부매출입-미확정현황",
      type: "1"
      // startRowIndex: 2,
      // removeColumns: "0,21",
      // hiddenVisible : true,
      // useSubTotal :"true", 
      // useSubTotalData  : "true",
      // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
      // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
    };
    $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
    // cfGridToExcel(objGridName, ica_stdYm.text + "내부매출입-미확정현황",ica_stdYm.text + "내부매출입-미확정현황.xls",8+16);
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = async function (inObj) {
  var inValue = $c.gus.cfGetValue($p, inObj);
  var hidValue = inObj.options.hidVal;
  if (await $c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (var i = 0; i < scwin.f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, scwin.f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sacctDeptCd.getValue(), ed_sacctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_sacctDeptCd_onblurCodeEvent = async function (e) {
  // if (await scwin.f_IsPopUp(ed_sacctDeptCd, ed_sacctDeptNm) == false) return;
  var inValue = $c.gus.cfGetValue($p, ed_sacctDeptCd);
  var hidValue = ed_sacctDeptCd.options.hidVal;
  if (await $c.gus.cfIsNull($p, inValue)) {
    ed_sacctDeptCd.options.hidVal = "";
    ed_sacctDeptCd.setValue("");
    ed_sacctDeptNm.setValue("");
    // for (var i = 0 ; i < scwin.f_IsPopUp.arguments.length; i++) {
    // 	$c.gus.cfSetValue(scwin.f_IsPopUp.arguments[i], "");
    // }
    return;
  }
  if (inValue == hidValue) return;
  scwin.f_openCommonPopUp(2, ed_sacctDeptCd.getValue(), ed_sacctDeptNm.getValue(), 'T', 'F');
};
scwin.udc_sacctDeptCd_onblurNameEvent = function (e) {};
scwin.udc_sbizDom_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sbizDomCd, ed_sbizDomNm, '2', 'ALL');
};
scwin.udc_sbizDom_onblurCodeEvent = async function (e) {
  // if (await scwin.f_IsPopUp(ed_sbizDomCd, ed_sbizDomNm) == false) return;
  var inValue = $c.gus.cfGetValue($p, ed_sbizDomCd);
  var hidValue = ed_sbizDomCd.options.hidVal;
  if (await $c.gus.cfIsNull($p, inValue)) {
    ed_sbizDomCd.options.hidVal = "";
    // for (var i = 0 ; i < scwin.f_IsPopUp.arguments.length; i++) {
    // 	$c.gus.cfSetValue(scwin.f_IsPopUp.arguments[i], "");
    // }
    ed_sbizDomCd.setValue("");
    ed_sbizDomNm.setValue("");
    return;
  }
  if (inValue == hidValue) return;
  scwin.f_openPopUp(ed_sbizDomCd, ed_sbizDomNm, '2', '');
};
scwin.udc_sbizDom_onblurNameEvent = function (e) {};
scwin.btn_Clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_stdYm, ed_sacctDeptCd, ed_sacctDeptNm]);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submitdone = async function (e) {
  var rowCnt = ds_master.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.wq_gvw .gridSubtotalDefault .subtotalBGColor1{background:#d1b2ff!important}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_stdYm',ref:'data:ds_search.stdYm',style:'',displayFormat:'yyyy/MM',title:'회계연월',mandatory:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',popupID:'',selectID:'',style:'',validTitle:'부서',id:'udc_sacctDeptCd',btnId:'btn_dept',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',maxlengthName:'20',objTypeName:'data',refDataCollection:'ds_search',code:'sacctDeptCd','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sacctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'w300',codeId:'ed_sbizDomCd',maxlengthCode:'3',nameId:'ed_sbizDomNm',objTypeCode:'data',popupID:'',selectID:'',style:'',validTitle:'사업영역',id:'udc_sbizDom',btnId:'btn_sbizDom',skipOnBlurCodeValueEmpty:'N',objTypeName:'data',maxlengthName:'20',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_sbizDom_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sbizDom_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sbizDom_onblurNameEvent',refDataCollection:'ds_search',code:'sbizDomCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',groupbyMaxCount:'4',groupbyFilterBox:'true',filterShowAlways:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'부서',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'관리계정코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'사업영역',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'사업영역명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column67',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'당월누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column61',value:'전년동월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'전년동월누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'전년누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'기준년월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'조회귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'조회사업영역',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bizDomNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'thisMmAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisMmCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'befYyMmAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'befYyMmCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'befYyCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stdYm',value:'',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sacctDeptCd',value:'',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sbizDomCd',value:'',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'mgntAcctNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sub_acctDeptCd',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub_acctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub_mgntAcctCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub_mgntAcctNm',inputType:'text',style:'',value:'소계',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub_bizDomCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub_bizDomNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'sub_thisMmAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub_thisMmCumAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'sub_befYyMmAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub_befYyMmCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub_befYyCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sub_stdYm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub_sacctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub_sbizDomCd',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptNm',style:'',subtotalClass:'gridSubtotalDefault bg_sub_total',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sub2_acctDeptCd',inputType:'text',style:'',value:'합계',width:'70',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub2_acctDeptNm',inputType:'text',style:'',value:'부서계',width:'100',textAlign:'left',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub2_mgntAcctCd',inputType:'text',style:'',value:'',width:'120',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub2_mgntAcctNm',inputType:'text',style:'',value:'',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sub2_bizDomCd',inputType:'text',style:'',value:'',width:'100',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub2_bizDomNm',value:'',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'sub2_thisMmAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmAmt\')',dataType:'number',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub2_thisMmCumAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmCumAmt\')',dataType:'number',class:''}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'sub2_befYyMmAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmAmt\')',dataType:'number',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub2_befYyMmCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmCumAmt\')',dataType:'number',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'sub2_befYyCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyCumAmt\')',dataType:'number',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sub2_stdYm',value:'',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub2_sacctDeptCd',value:'',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sub2_sbizDomCd',value:'',displayMode:'label',class:''}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'footer_acctDeptCd',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'footer_acctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'footer_mgntAcctCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'footer_mgntAcctNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'footer_bizDomCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'footer_bizDomNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'footer_thisMmAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'footer_thisMmCumAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'thisMmCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'footer_befYyMmAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'footer_befYyMmCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyMmCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'footer_befYyCumAmt',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right',expression:'sum(\'befYyCumAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'footer_stdYm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'footer_sacctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'footer_sbizDomCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})