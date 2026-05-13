/*amd /ui/tn/cs/vehclmgnt/tn_104_01_01b.xml 28263 1f5900645f3a996d2fcc5c00e519cfbcd92c208fd1fb096a549de3a5ebcad797 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approve',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclCls',name:'소유구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'USER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'USER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'배차차량IDX',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnsntYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'handphoneNo',name:'휴대전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carTon',name:'차톤',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carTyp',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refundamt',name:'선급비용환급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nypay',name:'미지급금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsntDtm',name:'승인일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filenm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'소유구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ncall.tn.cs.vehclmgnt.RetrieveCopcoMcarMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.cs.vehclmgnt.UpdateCopcoMcarMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_rtn',action:'/ncall.tn.cs.vehclmgnt.UpdateCopcoMcarRtnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_rtn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, 2);
//scwin.strPreDate = $c.date.addMonth(scwin.vCurDate, -1);

scwin.userId = "";
scwin.lobranCd1 = "";
scwin.clntNo1 = "";
scwin.onpageload = function () {
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_logisticsBranch"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  var params = $c.data.getParameter($p);
  scwin.lobranCd1 = params.lobranCd;
  scwin.clntNo1 = params.clntNo;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    if (scwin.lobranCd1 != null) {
      scwin.f_preRetrieve();
    }
    ///임시        
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve);
};

//-------------------------------------------------------------------------
// 데이터가 넘어왔을시,
//-------------------------------------------------------------------------
scwin.f_preRetrieve = function () {
  lc_logisticsBranch.setValue(scwin.lobranCd1);
  ed_clntNo.setValue(scwin.clntNo1);
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //tr_Retrieve.post();
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// function name : f_CheckChk
// function desc : 체크표시된 정보가 있는가
//-------------------------------------------------------------------------
scwin.f_CheckChk = function () {
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "T") {
      return true;
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!(await scwin.f_CheckChk())) {
    $c.win.alert($p, "선택한  정보가 없습니다");
    return;
  }
  if (ds_results.getModifiedIndex().length == 0) {
    $c.win.alert($p, MSG_CM_ERR_005); //변경된 사항이 없습니다.
    return;
  }
  var fileName = "";
  var filePath = "";
  fileName = ds_results.getCellData(ds_results.getRowPosition(), "filenm");
  filePath = ds_results.getCellData(ds_results.getRowPosition(), "filepath");
  if (filePath.trim().length == 0) {
    $c.win.alert($p, "첨부파일이 없어 승인이 불가합니다.");
    return;
  }
  if (scwin.userId == "") {
    $c.win.alert($p, "로그인후 승인하시기 바랍니다");
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 반려
//-------------------------------------------------------------------------
scwin.f_Rtn = async function () {
  if (!(await scwin.f_CheckChk())) {
    $c.win.alert($p, "선택한  정보가 없습니다");
    return;
  }
  if (ds_results.getModifiedIndex().length == 0) {
    $c.win.alert($p, MSG_CM_ERR_005); //변경된 사항이 없습니다.
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //tr_rtn.Post();         
    $c.sbm.execute($p, sbm_rtn);
  }
};

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      if (pCode == '' && pName != '') {
        pCode = pName;
        pName = '';
      }
      // 거래처 팝업           
      rtnList = udc_clntNo.cfCommonPopUp(scwin.callbackClntInfo2_tpro // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "계약 거래처,거래처코드/명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //거래처코드  거래처명
      //cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm );
      break;
    /*
    case 3:
    // 협력업체(차량매입) 조회조건용
     
    rtnList = cfCommonPopUp('retrieveVehiclesNo_tpro'    // XML상의 SELECT ID  
                            ,pCode                  // 화면에서의 ??? Code Element의  Value
                            ,pName                  // 화면에서의 ??? Name Element의  Value
                            ,pClose                 // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
                            ,null                   // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
                            ,null                   // Title순서  
                            ,null                   // 보여주는 각 컬럼들의 폭    
                            ,null                   // 컬럼중에서 숨기는    컬럼 지정   
                            ,null                   // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
                            ,null                   // POP-UP뛰을때 원도우의   사용자 정의  폭
                            ,null                   // POP-UP뛰을때 우도우의   사용자 정의  높이  
                            ,null                   // 윈도우 위치 Y좌표   
                            ,null                   // 윈도우 위치 X좌표
                            ,null                   // 중복체크여부   ("F")
                            ,pAllSearch                 // 전체검색허용여부 ("F")
                            ,"차량번호,차량번호,차량단축번호"               // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
                            );
                            
                            //거래처코드  거래처명
    cfSetReturnValue(rtnList, ed_vehclNo, txt_vehclNm );
    break;
    */
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 파일 다운로드하기
//-------------------------------------------------------------------------    
scwin.f_Download = function () {
  var fileName = "";
  var filePath = "";
  fileName = ds_results.getCellData(ds_results.getRowPosition(), "filenm");
  filePath = ds_results.getCellData(ds_results.getRowPosition(), "filepath");
  if (filePath.trim().length == 0) {
    $c.win.alert($p, "첨부파일이 없습니다.");
  } else {
    if (filePath.indexOf(".") > 0) {
      // 파일 다운로드 
      fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
      $c.gus.cfDownloadFile($p, fileName, filePath);
    }
  }
};
scwin.callbackClntInfo2_tpro = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.decodeYn = function (cnsntYn) {
  //scwin.decodeYn(datalist('contractExpireYn'))
  console.log(cnsntYn);
  return $c.gus.decode($p, cnsntYn, 1, "승인", 2, "승인대기", "미승인");
};
scwin.udc_clntNo_onclickEvent = function (e) {
  if (ed_clntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  } else {
    ed_clntNm.setValue("");
  }
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    $c.sbm.execute($p, sbm_Retrieve);
  } else {
    $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_rtn_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    $c.sbm.execute($p, sbm_Retrieve);
  } else {
    $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_Retrieve_submitdone = function (e) {
  var rowCnt = ds_results.getRowCount();
  if (rowCnt < 1) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  spa_cnt.setValue(rowCnt);
};
scwin.gr_results_oncellclick = function (row, columnIndex, colid) {
  if (colid == "chk") {
    if (ds_results.getCellData(row, "chk") != "T") {
      ds_results.undoRow(row);
    } else {
      /*  if(ds_results.NameValue(row, "cnsntYn") == "1") {
              alert("승인된 건입니다");
              ds_results.NameValue(row,"chk") = ""; 
          } else {
      */
      ds_results.setCellData(row, "userId", scwin.userId);
    }
  }
};
scwin.gr_results_onheaderclick = function (headerId) {
  var i = 0;
  var chk = gr_results.getHeaderValue("chk");
  if (headerId == "chk") {
    if (chk) {
      for (i = 0; i < ds_results.getRowCount(); i++) {
        if (ds_results.getCellData(i, "cnsntYn") == "0") {
          ds_results.setCellData(i, "chk", "T");
        }
      }
    } else {
      for (i = 0; i < ds_results.getRowCount(); i++) {
        ds_results.setCellData(i, "chk", "");
      }
    }
  }
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "filenm") {
    scwin.f_Download();
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_rtn_onclick = function (e) {
  scwin.f_Rtn();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_logisticsBranch',search:'start',style:'width: 200px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',id:'udc_clntNo',btnId:'btn_clntNo',nameId:'ed_clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',selectID:'retrieveClntInfo2_tpro',refDataCollection:'dma_condition',allowCharCode:'0-9',name:'clntNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:100px;',maxlength:'4',ref:'data:dma_condition.vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_vehclCls',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',ref:'data:dma_condition.vehclCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장기용차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_approve',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',ref:'data:dma_condition.approve'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체차량관리(물류)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"협력업체차량관리(물류).xlsx","type":"4+8+16"}',gridID:'gr_results',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_results_oncellclick','ev:onheaderclick':'scwin.gr_results_onheaderclick','ev:oncelldblclick':'scwin.gr_results_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',value:'지사',width:'50',fixColumnWidth:'true',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column58',value:'지사',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'소속',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소유구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'승인여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운전자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'핸드폰번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'톤수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'차종',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'미수금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'미지급금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'승인자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'승인자소속',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'승인일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'첨부파일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',checkAlways:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ofcNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCls',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsntYn',inputType:'expression',width:'100',expression:'scwin.decodeYn(datalist(\'cnsntYn\'))',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'handphoneNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carTon',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carTyp',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'refundamt',displayMode:'label',textAlign:'right',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'nypay',displayMode:'label',textAlign:'right',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'userNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userLobranNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'cnsntDtm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'filenm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'자차일 경우 차량등록증, 장기용차일 경우 계약서 확인 후 승인',class:'info-ico'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_rtn',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_rtn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반려'}]}]}]}]}]}]}]}]}]})