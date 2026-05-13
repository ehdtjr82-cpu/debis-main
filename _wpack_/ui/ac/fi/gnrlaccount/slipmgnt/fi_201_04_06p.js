/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_06p.xml 21751 7857fb0c7c6d79c22206a368b964dba8542590c91a57bbd95cd3e22ecd5cce2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damtSum',name:'차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'camtSum',name:'대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dfcrcSum',name:'차변(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfcrcSum',name:'대변(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'확정번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tax',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveJournalizeMultipleSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_slipcontents","key":"OUT_DS2"},{"id":"ds_tax","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_slipcontents","key":"OUT_DS2"},{"id":"ds_tax","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 전표내역조회
 * 메뉴경로 : 회계/재무회계/일반회계/전표관리/경비전표입력
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_04_06p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-11
 * 수정이력  :
 *    - 2025-12-11      정승혜    최초작성
 *    - 2026-01-15      정승혜    기타수정
 * 메모 :
 * 부모페이지 fi_201_01_01b 전표복사 -> 발행(저장)시 팝업
 * - 전표번호 1000005884  복사 후 
 *   작성일자 : 2025.07.01 , 계산서일자 : 2025.07.01 변경 후 전표발생 시 전표발행 가능
 * 부모페이지 fi_403_01_01p_02 -> 발행(f_Save)시 팝업
 * 조회조건 : 
 * 해야할 리스트 :
 */
//scwin.valueObject = "";
scwin.params = "";
scwin.slipNo = "";

//-------------------------------------------------------------------------
// 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //scwin.valueObject = $c.data.getParameter();
  scwin.params = $c.data.getParameter($p);
  scwin.slipNo = scwin.params["slipNo"];
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  $c.gus.cfDisableKeyData($p);
  scwin.f_Header();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  /* if(typeof(scwin.valueObject) != "undefined" && scwin.valueObject != null)
  {
  	let slipNo = scwin.valueObject[slipNo];
  if( slipNo != null && slipNo != ""  )
  {
           dma_search.set("slipNo", slipNo );
  }
  } */

  let slipNo = scwin.slipNo;
  if (slipNo != null && slipNo != "") {
    dma_search.set("slipNo", slipNo);
  }
  if (dma_search.get("slipNo") == "") {
    $c.win.alert($p, "전표번호가 없습니다.");
    return;
  }
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 증빙내역
//-------------------------------------------------------------------------
scwin.f_Evidence = async function (row) {
  if (ds_slipcontents.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "Row"));
  } else {
    //증빙내역 호출 
    let data = {
      slipNo: ds_slipcontents.getCellData(row, "slipNo"),
      postYn: "1"
    };
    let opt = {
      id: "smpPop",
      popupName: "증빙내역조회",
      modal: true,
      type: "browserPopup",
      title: "Win pop",
      width: "825",
      height: "600"
    };
    $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_04p.xml", opt, data);
  }
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = function (row) {
  let data = {
    slipNo: ds_slipcontents.getCellData(row, "slipNo"),
    slipSeq: ds_slipcontents.getCellData(row, "slipSeq"),
    postYn: ds_slipcontents.getCellData(row, "postYn"),
    modPsblYn: ds_slipcontents.getCellData(row, "modPsblYn"),
    delYn: ds_slipcontents.getCellData(row, "delYn")
  };
  let opt = {
    id: "smpPop",
    popupName: "전표상세내역조회",
    modal: true,
    type: "browserPopup",
    title: "Win pop",
    width: "825",
    height: "400"
  };

  //상세화면 호출
  $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.xml", opt, data);
};

//-------------------------------------------------------------------------
//  회계전표발행 
//-------------------------------------------------------------------------
// 전표인쇄 버튼
scwin.f_OzReport = function () {
  let slipNoTemp = ds_slipcontents.getCellData(ds_slipcontents.rowPosition, "slipNo");
  slipNoTemp = toString(slipNoTemp);

  // KYU_TEST : 오타 아님. AsIs 에도 fi_201_04_02p 로 되어있음.
  let data = {
    odiName: "fi_201_04_02p",
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      slipNo: "TO_CHAR(" + ds_slipcontents.getCellData(ds_slipcontents.rowPosition, "slipNo") + ")"
    },
    viewerParam: {
      viewer: 100,
      zoom: 100,
      useprogressbar: false,
      //PROGRESSBAR 안보이게....

      // 2026-04-03 : 파일명 : 전표번호  - 04_02p 와 동일하게 변경함
      "export.format": "pdf",
      "export.path": "",
      "export.mode": "view",
      "export.filename": scwin.slipNo
    },
    formParam: {
      //
    }
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
//  매출 세금계산서 발행 : Type :1 
//------------------------------------------------------------------------- 
scwin.f_OzReport1 = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
// 엑셀다운 4+8+16
scwin.f_GridToExcel = function () {
  if (ds_slipcontents.getRowCount() == 0) {
    $c.win.alert($p, "전표내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "전표내역.xlsx",
    sheetName: "전표내역",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_slipcontents, options);
};

//-------------------------------------------------------------------------
//그리드 높이 늘리기
//-------------------------------------------------------------------------
scwin.f_grdHeight = function () {};

// 닫기 버튼
scwin.f_close = function () {
  $c.win.closePopup($p);
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_slipcontents.getRowCount());
    $c.gus.cfGoPrevPosition($p, gr_slipcontents, 0);
    ds_slipcontents.setRowPosition(0);
    ed_slipDt.setValue(ds_slip.getCellData(0, "slipDt"));
    ed_drawAcctDeptNm.setValue(ds_slip.getCellData(0, "drawAcctDeptNm"));
    ed_drawEmpNm.setValue(ds_slip.getCellData(0, "drawEmpNm"));
    ed_slipKndNm.setValue(ds_slip.getCellData(0, "slipKndNm"));
    let rowCnt = ds_slip.getRowCount();
    if (rowCnt > 0) {
      if (ds_slip.getCellData(rowCnt, "delYn") == "1") {
        $c.win.alert($p, "삭제된 전표입니다");
        $c.win.closePopup($p);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

// 증빙내역 버튼
scwin.pu_evid_onclick = function (e) {
  scwin.f_Evidence(ds_slipcontents.getRowPosition());
};

// 상세조회 버튼
scwin.pu_evid2_onclick = function (e) {
  scwin.f_Detail(ds_slipcontents.getRowPosition());
};
scwin.gr_slipcontents_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_Detail(rowIndex);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',style:'',ref:'data:ds_slip.slipDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_drawAcctDeptNm',style:'width: 150px;',ref:'data:ds_slip.drawAcctDeptNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_drawEmpNm',style:'width: 150px;',ref:'data:ds_slip.drawEmpNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipKndNm',style:'width: 150px;',ref:'data:ds_slip.slipKndNm',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'}},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_slipcontents',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_slipcontents',fixedColumn:'5',id:'gr_slipcontents',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_slipcontents_oncellclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{inputType:'text',style:'',id:'column63',displayMode:'label',colSpan:'',rowSpan:'2',value:' ',width:'35'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column30',inputType:'text',rowSpan:'2',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column27',inputType:'text',rowSpan:'2',style:'',value:'계정과목',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column24',inputType:'text',rowSpan:'2',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column18',inputType:'text',rowSpan:'',style:'',value:'금액',width:'340',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column47',inputType:'text',rowSpan:'2',style:'',value:'적요',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column39',inputType:'text',rowSpan:'2',style:'',value:'확정번호',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column59',inputType:'text',style:'',value:'차변',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column60',inputType:'text',style:'',value:'대변',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column61',inputType:'text',style:'',value:'차변(외)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column62',inputType:'text',style:'',value:'대변(외)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'35',inputType:'text',style:'',id:'slipSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'damtSum',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'camtSum',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dfcrcSum',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cfcrcSum',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postNo',inputType:'text',style:'',value:'',width:'100'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'slipNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'35',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',expression:'SUM("damtSum")',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',expression:'SUM("camtSum")',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',expression:'SUM("dfcrcSum")',displayFormat:'#,##0.00',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'SUM("cfcrcSum")',displayFormat:'#,##0.00',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'expression',style:'',value:'',width:'70',expression:'SUM("damtSum")',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',style:'',value:'',width:'70',expression:'SUM("camtSum")',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("dfcrcSum")',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'expression',style:'',value:'',width:'100',expression:'SUM("cfcrcSum")',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_evid',style:'',type:'button','ev:onclick':'scwin.pu_evid_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙내역'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_evid2',style:'',type:'button','ev:onclick':'scwin.pu_evid2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표인쇄'}]}]}]}]}]}]}]})