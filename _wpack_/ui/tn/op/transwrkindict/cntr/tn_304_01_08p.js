/*amd /ui/tn/op/transwrkindict/cntr/tn_304_01_08p.xml 13122 2a4299968cf17732d8704faf08c1f28f973b6fa23a241cc16708d44f6c265591 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name23',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.SaveChangeArvWrkPlCdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sLoUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = scwin.params.odrNo == null ? "" : scwin.params.odrNo;
  scwin.cntrSeq = scwin.params.cntrSeq == null ? "" : scwin.params.cntrSeq;
  scwin.odrWrkPathSeq = scwin.params.odrWrkPathSeq == null ? "" : scwin.params.odrWrkPathSeq;
  scwin.odrWrkStpSeq = scwin.params.odrWrkStpSeq == null ? "" : scwin.params.odrWrkStpSeq;
  scwin.wrkLobranCd = scwin.params.wrkLobranCd == null ? "" : scwin.params.wrkLobranCd;
  scwin.wrkStDt = scwin.params.wrkStDt == null ? "" : scwin.params.wrkStDt;
  scwin.dptWrkPlCd = scwin.params.dptWrkPlCd == null ? "" : scwin.params.dptWrkPlCd;
  scwin.arvWrkPlCd = scwin.params.arvWrkPlCd == null ? "" : scwin.params.arvWrkPlCd;
  scwin.arvWrkPlClsCd = scwin.params.arvWrkPlClsCd == null ? "" : scwin.params.arvWrkPlClsCd;
  scwin.dptWrkPlNm = scwin.params.dptWrkPlNm == null ? "" : scwin.params.dptWrkPlNm;
  scwin.arvWrkPlNm = scwin.params.arvWrkPlNm == null ? "" : scwin.params.arvWrkPlNm;
  scwin.odrKndCd = scwin.params.odrKndCd == null ? "" : scwin.params.odrKndCd;
  scwin.cntrSizCd = scwin.params.cntrSizCd == null ? "" : scwin.params.cntrSizCd;
  scwin.fullEmptyClsCd = scwin.params.fullEmptyClsCd == null ? "" : scwin.params.fullEmptyClsCd;
  scwin.wrkStpCd = scwin.params.wrkStpCd == null ? "" : scwin.params.wrkStpCd;
  scwin.pchsAmt = scwin.params.pchsAmt == null ? "" : scwin.params.pchsAmt;
  scwin.wrkEndDt = scwin.params.wrkEndDt == null ? "" : scwin.params.wrkEndDt;
  scwin.wrkEndHh = scwin.params.wrkEndHh == null ? "" : scwin.params.wrkEndHh;
  scwin.cntrTypCd = scwin.params.cntrTypCd == null ? "" : scwin.params.cntrTypCd;
  scwin.arrvlportDtm = scwin.params.arrvlportDtm == null ? "" : scwin.params.arrvlportDtm;
  scwin.cntrNo = scwin.params.cntrNo == null ? "" : scwin.params.cntrNo;
  scwin.transWrkIndictNo = scwin.params.transWrkIndictNo == null ? "" : scwin.params.transWrkIndictNo;
  scwin.vehclNo = scwin.params.vehclNo == null ? "" : scwin.params.vehclNo;
  ds_results.insertRow();
  ds_results.setCellData(0, "odrNo", scwin.odrNo);
  ds_results.setCellData(0, "cntrSeq", scwin.cntrSeq);
  ds_results.setCellData(0, "odrWrkPathSeq", scwin.odrWrkPathSeq);
  ds_results.setCellData(0, "odrWrkStpSeq", scwin.odrWrkStpSeq);
  ds_results.setCellData(0, "wrkLobranCd", scwin.wrkLobranCd);
  ds_results.setCellData(0, "wrkStDt", scwin.wrkStDt);
  ds_results.setCellData(0, "dptWrkPlCd", scwin.dptWrkPlCd);
  ds_results.setCellData(0, "arvWrkPlCd", scwin.arvWrkPlCd);
  ds_results.setCellData(0, "arvWrkPlClsCd", scwin.arvWrkPlClsCd);
  ds_results.setCellData(0, "dptWrkPlNm", scwin.dptWrkPlNm);
  ds_results.setCellData(0, "arvWrkPlNm", scwin.arvWrkPlNm);
  ds_results.setCellData(0, "odrKndCd", scwin.odrKndCd);
  ds_results.setCellData(0, "cntrSizCd", scwin.cntrSizCd);
  ds_results.setCellData(0, "fullEmptyClsCd", scwin.fullEmptyClsCd);
  ds_results.setCellData(0, "wrkStpCd", scwin.wrkStpCd);
  ds_results.setCellData(0, "pchsAmt", scwin.pchsAmt);
  ds_results.setCellData(0, "wrkEndDt", scwin.wrkEndDt);
  ds_results.setCellData(0, "wrkEndHh", scwin.wrkEndHh);
  ds_results.setCellData(0, "cntrTypCd", scwin.cntrTypCd);
  ds_results.setCellData(0, "arrvlportDtm", scwin.arrvlportDtm);
  ds_results.setCellData(0, "cntrNo", scwin.cntrNo);
  ds_results.setCellData(0, "transWrkIndictNo", scwin.transWrkIndictNo);
  ds_results.setCellData(0, "vehclNo", scwin.vehclNo);
  gr_results.setFocusedCell(0, 0);
  totalRows.setValue(ds_results.getRowCount());
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      pCode = ds_results.getCellData(row, "arvWrkPlNm");
      //pWhere = "<%=arvWrkPlClsCd%>";
      pWhere = "";
      udc_comCodeGrid.setSelectId('retrieveWrkPlInfo_tpro');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_comCodeGrid_callBackFunc = function (rtnList) {
  //cfSetGridReturnValue(rtnList, ds_results, row, "arvWrkPlCd", "arvWrkPlNm" );
  let rowIndex = ds_results.getRowPosition();
  ds_results.setCellData(rowIndex, "arvWrkPlCd", rtnList[0]);
  ds_results.setCellData(rowIndex, "arvWrkPlNm", rtnList[1]);
};

//-------------------------------------------------------------------------
// 저장버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_save_onclick = function (e) {
  if (ds_results.getCellData(0, "arvWrkPlNm") == "") {
    $c.win.alert($p, "도착작업장은 필수입력 항목입니다.");
    return false;
  }
  //tr_save.Post();
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    await $c.win.closePopup($p, true);
  }
};

//-------------------------------------------------------------------------
// 닫기버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_results.getColumnID(columnIndex);
  switch (colid) {
    case "arvWrkPlNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
      break;
  }
};
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_results.getColumnID(columnIndex);
  switch (colid) {
    case "arvWrkPlNm":
      if (gr_results.getCellData(rowIndex, "arvWrkPlNm") != "") {
        scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
      }
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하선지변경할 작업단계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNumFix:'true','ev:onafteredit':'scwin.gr_results_onafteredit','ev:ontextimageclick':'scwin.gr_results_ontextimageclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'ODR_NO',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SEQ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'80',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'textImage',width:'80',textAlign:'left',sortable:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'',hideName:'Y',id:'udc_comCodeGrid',nameId:'',popupID:'',style:'display: none;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})