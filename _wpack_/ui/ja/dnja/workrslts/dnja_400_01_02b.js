/*amd /ui/ja/dnja/workrslts/dnja_400_01_02b.xml 21968 254d8ab34d8d591e2464f34bb307f979e27b7219b4697ce5e5e2e54dfe4fad3c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoSelpchItemNm',name:'지급항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoPchsAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductSelpchItemNm',name:'공제항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductPchsAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'실지급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.workrslts.RetrieveSalPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩 시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_ed_dtFrom.setValue(scwin.strQryStDt);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_portCondtionPart, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  if (ica_ed_dtFrom.getValue() == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    ica_ed_dtFrom.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_out.getRowCount());
    if (ds_out.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return false;
    }
    // else {
    // Grid row & 중간 소계 부분 합계 표기
    // var rowCount = ds_out.getRowCount();
    // var distinctSet = new Set();

    // for (var i = 0; i < rowCount; i++) {
    //     distinctSet.add(ds_out.getCellData(i, "pchsClntNo"));
    // }

    // var distinctCount = distinctSet.size;
    // var totalCount = rowCount + distinctCount;
    // totalRows.setValue(totalCount);
    // }
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처
      udc_clntNo.setSelectId('retrieveSubsidaryClntListJa');
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
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
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      udc_vehclNoCd.setSelectId('retrieveSubsidaryVehclList');
      udc_vehclNoCd.cfCommonPopUp(scwin.udc_vehclNoCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , "022" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , "400" // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() == '') return;
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), 'T', 'T');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_clntNo.setValue(rtnList[0]); //코드
    txt_clntNm.setValue(rtnList[1]); //명
  }
};
scwin.udc_vehclNoCd_onblurCodeEvent = function (e) {
  if (ed_vehclNoCd.getValue() == '') return;
  scwin.f_openCommonPopUp(3, ed_vehclNoCd.getValue(), txt_cond_vehclNo.getValue(), 'T', 'T');
};
scwin.udc_vehclNoCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNoCd.getValue(), txt_cond_vehclNo.getValue(), 'F', 'T');
};
scwin.udc_vehclNoCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_vehclNoCd.setValue(rtnList[0]); //코드
    txt_cond_vehclNo.setValue(rtnList[1]); //명
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  //{"fileName" : "차량별 급여명세 현황.xlsx", "useSubTotal" : "true" }
  let totCnt = ds_out.getRowCount();
  let sheetTitle = "차량별 급여명세 현황";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xls.xlsx",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_out, options);
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_dtFrom',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'년월',ref:'data:dma_condition.adptYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'txt_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',refDataCollection:'dma_condition',code:'pchsClntNo',UpperFlagCode:'0',maxlengthCode:'6',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclNoCd',nameId:'txt_cond_vehclNo',btnId:'btn_vehclNoCd',id:'udc_vehclNoCd',refDataCollection:'dma_condition',maxlengthCode:'4',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_vehclNoCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vehclNoCd_onclickEvent',name:'vehclNoCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량별 급여명세 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_out',gridUpYn:'N',gridDownYn:'Y',grdDownOpts:'{"fileName" : "차량별 급여명세 현황.xls.xlsx", "sheetName": "차량별 급여명세 현황", "useSubTotal" : "true", "useSubTotalData" : "true"}',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',style:'',fixedColumnNoMove:'true',fixedColumn:'17'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'소속거래처',width:'140',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매니저',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'지급내역',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'공제내역',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'실지급액',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column31',value:'계좌정보',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'지급항목',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'비고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'공제항목',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'비고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'은행명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'계좌번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'예금주',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'',width:'70',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoSelpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoPchsAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoRmk',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductSelpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductPchsAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductRmk',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',textAlign:'left',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bankAcntNo',value:'',displayMode:'label',textAlign:'left',upperColumn:'columnMerge',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dpstrNm',value:'',displayMode:'label',textAlign:'left',upperColumn:'columnMerge',colMerge:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'pchsClntNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column68',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',dataType:'number',expression:'sum(\'deductNoPchsAmt\')',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',expression:'sum(\'deductPchsAmt\')',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'deductNoPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'deductPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})