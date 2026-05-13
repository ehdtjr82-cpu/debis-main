/*amd /ui/ds/lo/comninfomgnt/lo_100_04_01b.xml 41106 e67d35a7b1f0ac23250560c1a12b06cb67b0934e37ed6ee56ae4f21a05f52dca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_logisticsBranchTree',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_logisticsBranchList',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_logisticsBranchList_onbeforerowpositionchange','ev:oncelldatachange':'scwin.ds_logisticsBranchList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNoCreatStdCd',name:'오더번호생성기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptYn',name:'매출부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDeptYn',name:'청구부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_countlogisticsBranch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNoCreatStdCd',name:'오더번호생성기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptYn',name:'매출부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDeptYn',name:'청구부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'upperLobranCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizDomCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizDomCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'json'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveLogisticsBranchListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_logisticsBranchList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLogisticsBranchTree',action:'/ds.lo.comninfomgnt.RetrieveLogisticsBranchTreeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_logisticsBranchTree","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveLogisticsBranchTree_submitdone','ev:submiterror':'scwin.sbm_retrieveLogisticsBranchTree_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLogisticsBranchList',action:'/ds.lo.comninfomgnt.RetrieveLogisticsBranchListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchMap","key":"GAUCE"}',target:'data:json,{"id":"ds_logisticsBranchList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveLogisticsBranchList_submitdone','ev:submiterror':'scwin.sbm_retrieveLogisticsBranchList_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_countLogisticsBranchList',action:'/ds.lo.comninfomgnt.RetrieveLogisticsBranchListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchMap","key":"GAUCE"}',target:'data:json,{"id":"ds_countlogisticsBranch","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_countLogisticsBranchList_submitdone','ev:submiterror':'scwin.sbm_countLogisticsBranchList_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizDomCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_bizDomCd',target:'data:json,{"id":"ds_bizDomCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizDomCd_submitdone','ev:submiterror':'scwin.sbm_bizDomCd_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.coMap = new $c.gus.coMap(); //팝업 hidden값 
scwin.preRow = 0;
scwin.retrieveYn = "N"; //TreeView의 데이터셋 조회여부
scwin.EXPEND_FG = 0;
scwin.hid_tvIndex = 1;
scwin.DDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.selDiv = "";
scwin.grdPopFlag = true;

//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {};
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_set();
  scwin.f_retrieveLogisticsBranchTree();
};

//-------------------------------------------------------------------------
// scwin.name : f_set
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_set = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "LO120",
    compID: "gr_logisticsBranchList:lobranClsCd"
  } //lobranClsCd
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_getBizDomCd();
  $c.gus.cfDisableKeyData($p);
};
scwin.f_getBizDomCd = function () {
  //미완성

  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "BusinessDomainEBC",
    param2: "retrieveBusinessDomainComboDTO",
    param3: ["100"],
    compID: "gr_logisticsBranchList:bizDomCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.f_getBizDomCdCallback); //<%= GauceUtil.getGridCombo("BusinessDomainEBC","retrieveBusinessDomainComboDTO", new String[]{"100"}, true) %>,242:[242]택배"
  //$c.data.setGauceUtil(codeOptions); 

  //dlt_gauceUtil_gr_logisticsBranchList
  /*
  const params = {
      sysCd: "BusinessDomainEBC",
      queryId: "retrieveBusinessDomainComboDTO",
      param1: "100",
      param2: "",
      param3: "",
      param4: ""
      };
   dma_bizDomCd.setJSON(params);
  //$c.sbm.execute($p, sbm_bizDomCd);
  $c.sbm.execute(sbm_bizDomCd);
  */
};
scwin.f_getBizDomCdCallback = function () {
  var rowCnt = ds_bizDomCd.getRowCount();
  var row = ds_bizDomCd.insertRow();
  ds_bizDomCd.setCellData(row, "code", "242");
  ds_bizDomCd.setCellData(row, "name", "택배");
  ds_bizDomCd.reform();
  //gr_logisticsBranchList.reform(); 리폼 안됨.
  //gr_logisticsBranchList:bizDomCd.reform();
};

//-------------------------------------------------------------------------
// scwin.name : f_setDSHeader
// scwin.desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
/*
scwin.f_setDSHeader = function(){
    var dsHeader = "";
    
    dsHeader = "lobranCd:STRING(4)"                
             + ",lobranNm:STRING(50)"               
             + ",lobranClsCd:STRING(2)"             
             + ",upperLobranCd:STRING(4)"           
             + ",acctDeptCd:STRING(5)"              
             + ",acctDeptNm:STRING(50)"             
             + ",bizDomCd:STRING(3)"                
             + ",odrNoCreatStdCd:STRING(1)"         
             + ",fixWrkPlCd:STRING(3)"              
             + ",fixWrkPlNm:STRING(30)"   
             + ",sellDeptYn:INT(1)"                  // 매출부서여부
             + ",bilgDeptYn:INT(1)"                  // 청구부서여부
             + ",useYn:INT(1)";
    ds_logisticsBranchList.SetDataHeader(dsHeader); 
}
*/

//-------------------------------------------------------------------------
// scwin.name : f_retrieveLogisticsBranchTree
// scwin.desc : 화면 좌측 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.f_retrieveLogisticsBranchTree = function () {
  //scwin.retrieveYn = "Y";

  //tree data
  $c.sbm.execute($p, sbm_retrieveLogisticsBranchTree);

  //ds_logisticsBranchTree.DataId = "/ds.lo.comninfomgnt.RetrieveLogisticsBranchTreeCMD.do";
  //ds_logisticsBranchTree.Reset();
};

//-------------------------------------------------------------------------
// scwin.name : f_retrieveLogisticsBranchList
// scwin.desc : 물류점소 리스트 조회
//-------------------------------------------------------------------------
scwin.f_retrieveLogisticsBranchList = function (upperLobranCd) {
  //console.log("scwin.f_retrieveLogisticsBranchList.param :: "+upperLobranCd);
  ds_searchMap.set("upperLobranCd", upperLobranCd);
  $c.sbm.execute($p, sbm_retrieveLogisticsBranchList);

  //ds_logisticsBranchList.DataId = "/ds.lo.comninfomgnt.RetrieveLogisticsBranchListCMD.do?upperLobranCd=" + upperLobranCd;
  //ds_logisticsBranchList.Reset();
};

//-------------------------------------------------------------------------
// scwin.name : f_retrieveLogisticsBranchList
// scwin.desc : 물류점소 리스트 조회
//-------------------------------------------------------------------------
scwin.f_countLogisticsBranchList = function (curLobranCd) {
  console.log('scwin.f_countLogisticsBranchList~~' + curLobranCd);
  ds_countlogisticsBranch.setJSON([]);
  curLobranCd = $c.gus.cfIsNull($p, curLobranCd) ? "N/A" : curLobranCd;
  ds_searchMap.set("upperLobranCd", curLobranCd);
  $c.sbm.execute($p, sbm_countLogisticsBranchList);

  //ds_countlogisticsBranch.DataId = "/ds.lo.comninfomgnt.RetrieveLogisticsBranchListCMD.do?upperLobranCd=" + curLobranCd;
  //ds_countlogisticsBranch.Reset();
};

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //if(cfConfirmMsg(MSG_CM_CRM_001)){ //저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //저장하시겠습니까?
    //hid_tvIndex.value = tv_logisticsBranchTree.Index;
    scwin.hid_tvIndex = tv_logisticsBranchTree.getSelectedIndex();
    scwin.hid_tvValue = tv_logisticsBranchTree.getSelectedValue();

    //console.log(scwin.hid_tvIndex);

    var validArry;
    var gridName = "물류점소관리";

    //if(ds_logisticsBranchList.IsUpdated){
    if (ds_logisticsBranchList.getModifiedJSON().length != 0) {
      //validation체크
      for (i = 0; i < ds_logisticsBranchList.getRowCount(); i++) {
        if (ds_logisticsBranchList.getCellData(i, "lobranClsCd") == "J" && ds_logisticsBranchList.getRowStatus(i) === "C") {
          let oValidExp = {
            dataName: "물류점소",
            validFeatures: "ignoreStatus=no",
            validExp: `lobranCd:점소코드:yes:length=4:key,
                    lobranNm:점소명:yes:byteLength<=50,
                    lobranClsCd:물류점소구분:yes:length=1,
                    acctDeptNm:귀속부서:yes:byteLength<=50,
                    bizDomCd:사업영역코드:yes:length=3,
                    fixWrkPlNm:정비작업장:no:byteLength<=30`
          };
          $c.gus.setValidExp($p, gr_logisticsBranchList, oValidExp);
          if (!(await $c.gus.cfValidate($p, [gr_logisticsBranchList], null, true))) return false;
        } else {
          let oValidExp = {
            dataName: "물류점소",
            validFeatures: "ignoreStatus=no",
            validExp: `lobranCd:점소코드:yes:minLength=3&maxLength=4:key,
                    lobranNm:점소명:yes:byteLength<=50,
                    lobranClsCd:물류점소구분:yes:length=1,
                    acctDeptNm:귀속부서:yes:byteLength<=50,
                    bizDomCd:사업영역코드:yes:length=3,
                    fixWrkPlNm:정비작업장:no:byteLength<=30`
          };
          $c.gus.setValidExp($p, gr_logisticsBranchList, oValidExp);
          if (!(await $c.gus.cfValidate($p, [gr_logisticsBranchList], null, true))) return false;
        }
      }

      //저장
      $c.sbm.execute($p, sbm_save);
      //$p.executeSubmission(sbm_save);

      //tr_save.action = "/ds.lo.comninfomgnt.SaveLogisticsBranchListCMD.do";
      //tr_save.Post();
    } else {
      //$c.win.alert(MSG_CM_ERR_001, ["물류점소관리"]); //@은(는) 변경된 사항이 없습니다
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["물류점소관리"]); //@은(는) 변경된 사항이 없습니다
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_addRow
// scwin.desc : Row 추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  //if(ds_logisticsBranchList.getRowCount() == 0)    f_setDSHeader();
  //ds_logisticsBranchList.AddRow();
  //tv_logisticsBranchTree.findNodeByValue(value, selected)
  //console.log("tv_logisticsBranchTree.getSelectedValue() ==> "+tv_logisticsBranchTree.getSelectedValue());

  var idx = ds_logisticsBranchList.getRowCount();
  ds_logisticsBranchList.insertRow(idx);
  ds_logisticsBranchList.setCellData(idx, "upperLobranCd", tv_logisticsBranchTree.getSelectedValue(), "lobranCd");
  ds_logisticsBranchList.setCellData(idx, "useYn", 1);
  gr_logisticsBranchList.setCellReadOnly(idx, "lobranCd", false);
  gr_logisticsBranchList.setFocusedCell(idx, "lobranCd", false);
};

//-------------------------------------------------------------------------
// scwin.name : f_deleteRow
// scwin.desc : Row 삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  //하위레벨이 있는 경우 삭제 불가
  var lobranCd = ds_logisticsBranchList.getCellData(ds_logisticsBranchList.getRowPosition(), "lobranCd");
  scwin.f_countLogisticsBranchList(lobranCd); //함수 실행 후 callback 에서 처리
  /*
      if(ds_countlogisticsBranch.getRowCount() > 0){
          $c.win.alert(MSG_CM_ERR_041, ["물류점소코드","하위 레벨이 존재하여 삭제"]); //@은(는) @할 수 없습니다
      }else{
          var rowIndex = ds_logisticsBranchList.getRowPosition();
          if(ds_logisticsBranchList.getRowStatus(rowIndex) == "C"){
              ds_logisticsBranchList.removeRow(rowIndex);
          }else{
              ds_logisticsBranchList.deleteRow(rowIndex);
          }
      }
  */
};

//-------------------------------------------------------------------------
// scwin.name : f_cancelRow
// scwin.desc : 현재 Row의 변경값 Undo
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
  $c.data.undoRow($p, ds_logisticsBranchList);
  //ds_logisticsBranchList.Undo(ds_logisticsBranchList.getRowPosition());    
};

//-------------------------------------------------------------------------
// scwin.name : f_grdHeiht
// scwin.desc : Tree Height 조정에 따른 그리드 Height 조정
//-------------------------------------------------------------------------
/*
scwin.f_grdHeiht = function(objGrd, size) {
    var objGrd = eval(objGrd);
    var strHeight = objGrd.style.height ;
    var intHeight = parseInt(strHeight.replace("px",""));
    intHeight = intHeight + size;
    if (intHeight > 0 ) {
        objGrd.style.height = intHeight + "px";
    }
}
*/
//-------------------------------------------------------------------------
// 물류점소관리 엑셀파일로 저장
//-------------------------------------------------------------------------
/*
scwin.f_logistBrExcel = function() {
    //sheet명, 저장파일명,     저장 다이얼로그
    cfGridToExcel(gr_logisticsBranchList, "물류점소관리", "물류점소관리.xls", 4+8+16);
}
*/

//-------------------------------------------------------------------------
// scwin.name : f_openPopUp
// scwin.param : gubn - dept:귀속부서, work:정비작업장
// scwin.desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  var pSelectID = "";
  var pCode = "";
  var pName = "";
  var pWhere = "";
  //var ddyear  = <%=DDate.getDate().substring(0,8)%>;
  var ddyear = scwin.DDate;
  //alert(ddyear)

  if (gubun == "dept") {
    pSelectID = "retrieveAcctDeptCdInfo";
    pCode = ds_logisticsBranchList.getCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptCd");
    pName = ds_logisticsBranchList.getCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptNm");
    pWhere = ddyear + ",,,";
  } else if (gubun == "work") {
    pSelectID = "retrieveWorkPlaceInfo";
    pCode = ds_logisticsBranchList.getCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlCd");
    pName = ds_logisticsBranchList.getCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlNm");
  }
  if (pName == "") {
    pCode = "";
  }
  scwin.selDiv = gubun;
  udc_comCodeGrid.setSelectId(pSelectID);
  //rtnList = udc_comCodeGrid.cfCommonPopUp(pSelectID,                      //pSelectID
  rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback,
  //pSelectID
  pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  "5",
  //pDispCnt
  null,
  //pTitle
  "150,170",
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  "440",
  //pW
  "500",
  //pH
  null,
  //pTop
  null); //pLeft
  /*
  if ( rtnList != null) {
      if(rtnList[0] == "N/A"){
          if(gubun == "dept"){
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"acctDeptCd",scwin.coMap.getValue("acctDeptCd"));   
          }else if(gubun == "work"){
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"fixWrkPlCd",scwin.coMap.getValue("fixWrkPlCd"));
          }
      }else{
          if(gubun == "dept"){
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"acctDeptCd",rtnList[0]); 
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"acctDeptNm",rtnList[1]);
              scwin.coMap.put("acctDeptCd", rtnList[0]);    
          }else if(gubun == "work"){
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"fixWrkPlCd",rtnList[0]); 
              ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"fixWrkPlNm",rtnList[1]); 
              scwin.coMap.put("fixWrkPlCd", rtnList[0]);    
          }
      }
  }else{
      if(gubun == "dept"){
          ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"acctDeptCd","");
          ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"acctDeptNm","");
      }else if(gubun == "work"){
          ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"fixWrkPlCd","");
          ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(),"fixWrkPlNm",""); 
      }
  }
  */
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  //console.log("callback ds_logisticsBranchList.getRowPosition() => "+ds_logisticsBranchList.getRowPosition());
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      if (scwin.selDiv == "dept") {
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptCd", scwin.coMap.getValue("acctDeptCd"));
      } else if (scwin.selDiv == "work") {
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlCd", scwin.coMap.getValue("fixWrkPlCd"));
      }
    } else {
      if (scwin.selDiv == "dept") {
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptCd", rtnList[0]);
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptNm", rtnList[1]);
        scwin.coMap.put("acctDeptCd", rtnList[0]);
      } else if (scwin.selDiv == "work") {
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlCd", rtnList[0]);
        ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlNm", rtnList[1]);
        scwin.coMap.put("fixWrkPlCd", rtnList[0]);
      }
    }
  } else {
    if (gubun == "dept") {
      ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptCd", "");
      ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "acctDeptNm", "");
    } else if (gubun == "work") {
      ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlCd", "");
      ds_logisticsBranchList.setCellData(ds_logisticsBranchList.getRowPosition(), "fixWrkPlNm", "");
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUpBefore
// scwin.param : row-해당row, nmColid-코드명컬럼, cdColid-코드컬럼, olddata-이전데이터, gubun-팝업구분, pWhere-팝업sql조건
// scwin.desc : 팝업오픈하기전 작업
//-------------------------------------------------------------------------
scwin.f_openPopUpBefore = function (row, nmColid, cdColid, olddata, gubun, pWinCloseTF) {
  var nmVal = ds_logisticsBranchList.getCellData(row, nmColid);
  if (nmVal == "") {
    ds_logisticsBranchList.setCellData(row, cdColid, "");
  } else {
    if (nmVal != olddata) {
      ds_logisticsBranchList.setCellData(row, cdColid, "");
      scwin.f_openPopUp(gubun, pWinCloseTF);
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Expend
// scwin.param : 
// scwin.desc : 트리의 LEVLE확장/축소
//-------------------------------------------------------------------------
scwin.f_Expend = function () {
  if (scwin.EXPEND_FG == 1) {
    //tv_logisticsBranchTree.ExpandLevel = "0";
    //tv_logisticsBranchTree.ExpandLevel = "1";

    scwin.EXPEND_FG = 0;
    btn_expend.setValue("확장");
    tv_logisticsBranchTree.spanAll(false);

    //ds_logisticsBranchTree.reform();
    tv_logisticsBranchTree.findNodeByIndex(2, true);
  } else {
    //tv_logisticsBranchTree.ExpandLevel = "3";

    scwin.EXPEND_FG = 1;
    btn_expend.setValue("접기");
    tv_logisticsBranchTree.spanAll(true);
  }
};

//-------------------------------------------------------------------------
// function desc : 화면 좌측 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.sbm_retrieveLogisticsBranchTree_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_logisticsBranchTree.getRowCount();
  if (rowcnt < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_logisticsBranchTree.insertRow(0);
    ds_logisticsBranchTree.setCellData(0, "lobranCd", "");
    ds_logisticsBranchTree.setCellData(0, "lobranNm", "물류점소");
    ds_logisticsBranchTree.setCellData(0, "lvl", 1);
    //ds_logisticsBranchTree.sort("lobranCd",0);

    ds_logisticsBranchTree.reform();
    let idx = parseInt(scwin.hid_tvIndex);
    setTimeout(function () {
      if (scwin.hid_tvValue) {
        tv_logisticsBranchTree.expandNode(scwin.hid_tvIndex);
        tv_logisticsBranchTree.findNodeByValue(scwin.hid_tvValue, true);
      } else {
        tv_logisticsBranchTree.findNodeByIndex(idx, true);
      }
    }, 10);
  }
};
scwin.sbm_retrieveLogisticsBranchTree_submiterror = function (e) {};

//-------------------------------------------------------------------------
// function desc : 물류점소 리스트 조회
//-------------------------------------------------------------------------
scwin.sbm_retrieveLogisticsBranchList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_logisticsBranchList.getRowCount();
  if (rowcnt < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_logisticsBranchList.sort("lobranCd", 0);
  }
  tbx_totalRows.setValue(rowcnt);
  gr_logisticsBranchList.setFocusedCell(0, "lobranCd", false);
};
scwin.sbm_retrieveLogisticsBranchList_submiterror = function (e) {};
scwin.sbm_countLogisticsBranchList_submitdone = function (e) {
  //console.log("scwin.sbm_countLogisticsBranchList_submitdone");
  //행삭제 시 실
  if (ds_countlogisticsBranch.getRowCount() > 0) {
    //$c.win.alert(MSG_CM_ERR_041, ["물류점소코드","하위 레벨이 존재하여 삭제"]); //@은(는) @할 수 없습니다
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["물류점소코드", "하위 레벨이 존재하여 삭제"]); //@은(는) @할 수 없습니다
  } else {
    var rowIndex = ds_logisticsBranchList.getRowPosition();
    if (ds_logisticsBranchList.getRowStatus(rowIndex) == "C") {
      ds_logisticsBranchList.removeRow(rowIndex);
    } else {
      ds_logisticsBranchList.deleteRow(rowIndex);
    }

    // 삭제 후 포커스 복구 로직
    var totalRow = ds_logisticsBranchList.getTotalRow();
    if (totalRow > 0) {
      // 삭제한 위치가 마지막 행이면 하나 위로, 아니면 현재 위치 유지(밑에 행이 올라옴)
      var newIdx = rowIndex >= totalRow ? totalRow - 1 : rowIndex;
      gr_logisticsBranchList.setFocusedCell(newIdx, 0);
    }
  }
};
scwin.sbm_countLogisticsBranchList_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];
  if (!result) return;
  if (result.Msg === "SUCC") {
    // 데이터리스트 정리 (뒤에서부터 루프 실행)
    for (var i = ds_logisticsBranchList.getTotalRow() - 1; i >= 0; i--) {
      var status = ds_logisticsBranchList.getRowStatus(i);
      if (status === "D") {
        // 삭제('D') 상태인 행은 메모리에서 즉시 제거
        ds_logisticsBranchList.removeRow(i);
      } else if (status === "U" || status === "C") {
        // 수정('U') 또는 추가('C') 상태인 행은 정상('R') 상태로 변경
        ds_logisticsBranchList.modifyRowStatus(i, "R");
      }
    }
    // 저장 후 초기상태로 인식
    ds_logisticsBranchList.reform();
    tbx_totalRows.setValue(ds_logisticsBranchList.getTotalRow());
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장했습니다
    scwin.f_retrieveLogisticsBranchTree();
  }
};
scwin.sbm_save_submiterror = function (e) {};

/*
scwin.tv_logisticsBranchTree_onclick = function () {
console.log("scwin.tv_logisticsBranchTree_onclick");
console.log("eee"+v);
//console.log("sds_logisticsBranchTree.getRowPosition()"+ds_logisticsBranchTree.getRowPosition());
//console.log("scwin.retrieveYn="+scwin.retrieveYn);

    var row = ds_logisticsBranchTree.getRowPosition();
    if(ds_logisticsBranchList.getModifiedJSON().length > 0 ){
        if(! await $c.win.confirm(MSG_CM_CRM_005)){
            return;
        }
    }

    if(scwin.retrieveYn == "N"){
        var lobranCd = ds_logisticsBranchTree.getCellData(row,"lobranCd");
        //var lobranCd = newNode.value;
        
        if(lobranCd == ""){
            tbx_sub_title.setValue("물류점소");
            //sub_title.innerText = "물류점소";   
        }else{
            tbx_sub_title.setValue(ds_logisticsBranchTree.getCellData(row,"lobranNm"));
            //sub_title.innerText = ds_logisticsBranchTree.getCellData(row,"lobranNm"); 
        }
        
        scwin.f_retrieveLogisticsBranchList(lobranCd);
    }
};
*/

scwin.tv_logisticsBranchTree_onviewchange = async function (info) {
  console.log("scwin.tv_logisticsBranchTree_onviewchange");
  var oldVal = "";
  var newVal = "";
  if (undefined != info) {
    //console.log(info);
    oldVal = info.oldNode.value;
    newVal = info.newNode.value;
    newLab = info.newNode.label;

    //console.log("oldNode="+info.oldNode.value);
    //console.log("newNode="+info.newNode.value);

    if (ds_logisticsBranchList.getModifiedJSON().length > 0) {
      if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
        if (oldVal != "") {
          tv_logisticsBranchTree.findNodeByValue(oldVal, true);
        } else {
          tv_logisticsBranchTree.findNodeByIndex(1, true);
        }
        return;
      }
    }
  } else {
    //console.log("[info is undefined]!!!");
  }
  var lobranCd = newVal;
  if (lobranCd == "") {
    tbx_sub_title.setValue("물류점소");
  } else {
    tbx_sub_title.setValue(newLab);
  }
  scwin.f_retrieveLogisticsBranchList(lobranCd);
};
scwin.gr_logisticsBranchList_onrowindexchange = function (rowIndex, oldRow) {
  //console.log("ds_rowpos => "+rowIndex);

  //var rowIndex = gr_logisticsBranchList.getFocusedRowIndex();
  var status = ds_logisticsBranchList.getRowStatus(rowIndex);
  if (status == "C") {
    gr_logisticsBranchList.setReadOnly("cell", rowIndex, "lobranCd", false);
  } else {
    gr_logisticsBranchList.setReadOnly("cell", rowIndex, "lobranCd", true);
  }
};
scwin.sbm_bizDomCd_submitdone = function (e) {
  //console.log("sbm_bizDomCd END :: ");
  //console.log(e.responseJSON.GAUCE);
  //console.log(e.responseJSON);
};
scwin.sbm_bizDomCd_submiterror = function (e) {};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_logisticsBranchList_ontextimageclick = function (rowIndex, columnIndex) {
  //var rowPos = ds_logisticsBranchList.getRowPosition();
  var colId = gr_logisticsBranchList.getColumnID(columnIndex);
  //console.log(columnIndex);
  if (colId == "acctDeptNm") {
    scwin.f_openPopUp("dept", "F");
  } else if (colId == "fixWrkPlNm") {
    scwin.f_openPopUp("work", "F");
  }
};
scwin.ds_logisticsBranchList_oncelldatachange = function (info) {
  console.log("scwin.ds_logisticsBranchList_oncelldatachange~~");
  //console.log(info);

  if (info.oldValue != info.newValue) {
    var row = ds_logisticsBranchList.getRowPosition();
    if (info.colID == "acctDeptNm") {
      scwin.f_openPopUpBefore(row, "acctDeptNm", "acctDeptCd", info.oldValue, "dept", "T");
      //scwin.f_openPopUp("dept", "F");
      scwin.grdPopFlag = false;
    } else if (info.colID == "fixWrkPlNm") {
      scwin.f_openPopUpBefore(row, "fixWrkPlNm", "fixWrkPlCd", info.oldValue, "work", "T");
      //scwin.f_openPopUp("work", "F");
      scwin.grdPopFlag = false;
    } else {
      scwin.grdPopFlag = true;
    }
  } else {
    scwin.grdPopFlag = true;
  }
};
scwin.ds_logisticsBranchList_onbeforerowpositionchange = function (info) {
  //info.newRowIndex
  //info.oldRowIndex

  //console.log("scwin.ds_logisticsBranchList_onbeforerowpositionchange~~");
  //console.log(info);
  //console.log('scwin.grdPopFlag ==>'+scwin.grdPopFlag);

  return scwin.grdPopFlag;
};
scwin.btn_expend_onclick = function (e) {
  scwin.f_Expend();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'grd_sectionAll',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물류점소 Tree',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_expend',style:'',type:'button','ev:onclick':'scwin.btn_expend_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확장'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height: 100%',id:'tv_logisticsBranchTree',renderType:'virtual',showTreeDepth:'1',class:'','ev:onviewchange':'scwin.tv_logisticsBranchTree_onviewchange'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_logisticsBranchTree'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:'upperLobranCd'}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'tbx_sub_title',label:'물류점소',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_logisticsBranchList',grdDownOpts:'{"fileName":"물류점소관리.xlsx","sheetName": "물류점소관리","type":"4+8+16"}',id:'udc_topGroup'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_logisticsBranchList',style:'',autoFit:'allColumn',id:'gr_logisticsBranchList',class:'wq_gvw',visibleRowNum:'18',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_logisticsBranchList_onrowindexchange',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_logisticsBranchList_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'점소코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'점소명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'상위<br/>점소코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'물류<br/>점소구분',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column9',value:'귀속부서',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column3',value:'사업<br/>영역코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'오더생성<br/>기준코드',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'정비작업장',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'매출부서<br/>여부',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'청구부서<br/>여부',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'사용<br/>여부',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranCd',displayMode:'label',maxLength:'4',allowChar:'A-Z0-9',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left',maxByteLength:'50',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'upperLobranCd',displayMode:'label',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'lobranClsCd',displayMode:'value delim label',maxLength:'1',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'acctDeptNm',displayMode:'label',textAlign:'left',maxByteLength:'50',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'bizDomCd',displayMode:'value delim label',maxLength:'3',textAlign:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bizDomCd'},E:[{T:1,N:'w2:label',A:{ref:'data:ds_bizDomCd.NAME'}},{T:1,N:'w2:value',A:{ref:'data:ds_bizDomCd.code'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNoCreatStdCd',displayMode:'label',textAlign:'left',maxLength:'1',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'fixWrkPlNm',displayMode:'label',textAlign:'left',value:'',maxByteLength:'30'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'sellDeptYn',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'bilgDeptYn',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'useYn',displayMode:'label',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',id:'udc_addRow',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'retrieveClntInfo',style:'display:none;'}}]}]}]})