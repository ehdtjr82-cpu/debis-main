/*amd /ui/to/in/comn/tmlopcomn/in_202_02_02b.xml 42922 6d71c324580b51e5e9d368f80a77100996deb7e5c62d404671864583380f47a8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCond',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tempBarcdYn',name:'임시바코드여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclYn',name:'차량보유여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admitckCont',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_admitckCont_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdYn',name:'임시바코드여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tmlAdmitckCd',name:'터미널출입증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdVehclNo',name:'임시바코드차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndCd',name:'터미널장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlEqKndNm',name:'터미널장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqClntNo',name:'중기거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdDrvNm',name:'임시바코드기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBarcdTelNo',name:'임시바코드전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'차량보유여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'컨테이너벌크구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDelYn',name:'장비삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_comcodeList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.comn.tmlopcomn.RetrieveTmlAdmitckPrtContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_admitckCont","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_admitckCont","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/to.in.comn.tmlopcomn.CreateTmlAdmitckPrtContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_admitckCont","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
장비분류 ZZ202 getCodeList("ZZ202", 2, "DS") 필터링 공통기능 구현 후 추가해야함
ozreport 출력 로직 주석처리해놓음

pName = ds_admitckCont.getCellData( row , "eqCd" );
-> pCode = ds_admitckCont.getCellData( row , "eqCd" );
로 바꿈. 
*/
scwin.empNo = "";
scwin.currow = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.empNo = memJson.userId;
  const codeOptions = [{
    grpCd: "ZZ202",
    compID: "lc_eqClssCd",
    opt: {
      "range": "2,DS"
    }
  },
  // 장비분류
  {
    grpCd: "ZZ210",
    compID: "gr_admitckCont:tmlEqKndCd"
  },
  // 장비종류
  {
    grpCd: "ZZ208",
    compID: "gr_admitckCont:eqNrmCd"
  },
  // 규격
  {
    grpCd: "OP247",
    compID: "gr_admitckCont:cntrBulkClsCd"
  } // 컨테이너벌크구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    udc_comCd.hide();
  }, {
    "delay": 50
  });
};
scwin.f_Retrieve = async function () {
  if (lc_qryCond.getSelectedIndex() == -1) {
    lc_qryCond.setValue("");
  }
  var chk = await $c.gus.cfValidate($p, tb_searchCondition);
  if (!chk) {
    return;
  }
  dma_condition.set("tempBarcdYn", lc_tempBarcdYn.getValue());
  dma_condition.set("eqClssCd", lc_eqClssCd.getValue());
  dma_condition.set("qryCond", lc_qryCond.getValue());
  dma_condition.set("qryCntn", ed_qryCntn.getValue());
  dma_condition.set("delYn", lc_delYn.getValue());
  dma_condition.set("vehclYn", lc_vehclYn.getValue());
  $c.sbm.execute($p, sbm_condition);
};
scwin.f_Save = async function () {
  var row = ds_admitckCont.getRowPosition();
  if (ds_admitckCont.getModifiedIndex().length > 0 && ds_admitckCont.getCellData(row, "eqModelCd") == "" && ds_admitckCont.getCellData(row, "tempBarcdVehclNo") == "") {
    $c.win.alert($p, "장비 모델번호와 차량 번호는 필수 입니다.");
    return;
  }
  if (ds_admitckCont.getModifiedIndex().length > 0 && ds_admitckCont.getCellData(row, "cntrBulkClsCd") == "") {
    $c.win.alert($p, "컨테이너벌크 구분을 선택해주세요.");
    return;
  }
  if (ds_admitckCont.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["터미널출입증등록"]); //변경된 정보가 없습니다.
    return;
  } else {
    var chkAlert = await $c.win.confirm($p, "저장하시겠습니까?");
    if (chkAlert == true) {
      $c.sbm.execute($p, sbm_save);
    }
  }
  //scwin.f_Retrieve();
};
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose, pClickTF) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //장비코드
      /*        
                  var newData = ds_admitckCont.getCellData(row, 'eqCd');
                  var oldData = $c.gus.f_GetGridHidden(ds_admitckCont, ds_admitckCont.getRowPosition(), 'eqCd');
      
                  if (pClickTF == "T") {
                      var chk = await $c.gus.f_CanGridPopup(ds_admitckCont, 'eqCd', newData, oldData, ["eqCd","tempBarcdVehclNo","","eqModelCd","eqModelNm","vechlYn","","eqNrmCd","assgnLobranNm","cargoClsCd"])
                      if (!chk) {
                          return false;
                      } 
                  }
      */
      pName = ds_admitckCont.getCellData(row, "eqCd");
      scwin.currow = row;
      udc_comCd.setSelectId("retrieveEqCdListInfo2");
      rtnList = udc_comCd.cfCommonPopUp(scwin.callbackEqCdListInfo2 // XML상의 SELECT ID
      , pName // 화면에서의 ??? Name Element의  Value
      , pCode // 화면에서의 ??? Code Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    /*
    case 2:
      //차량번호
      pCode = ds_admitckCont.NameValue( row , "tempBarcdVehclNo" );
       rtnList = cfCommonPopUp( 'retrieveVehclNoListInfo'         // XML상의 SELECT ID
                              , pName                     // 화면에서의 ??? Name Element의  Value
                              , pCode                     // 화면에서의 ??? Code Element의  Value
                              , pClose                    // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
                              , null                       // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
                              , null     		  // Title순서
                              , null                 // 보여주는 각 컬럼들의 폭
                              , null         // 컬럼중에서 숨기는  컬럼 지정
                              , null                     // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
                              , null                     // POP-UP뛰을때 원도우의  사용자 정의 폭
                              , null                     // POP-UP뛰을때 우도우의  사용자 정의 높이
                              , null                      // 윈도우 위치 Y좌표
                              , null                      // 윈도우 위치 X좌표
                              , null                      // 중복체크여부 ("F")
                              , 'F'                       // 전체검색허용여부 ("F")
                              , null  // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
                             );
           	if(rtnList != null){			
    if(rtnList[0] != "N/A"){
    ds_admitckCont.NameValue( row , "tempBarcdVehclNo" ) = rtnList[0]; 
    			}
    }
      break;
    */
    case 3:
      //중기협력업체
      pCode = ds_admitckCont.getCellData(row, "clntNm");
      scwin.currow = row;
      udc_comCd.setSelectId("retrieveHeavyMachineryClntInfo");
      rtnList = udc_comCd.cfCommonPopUp(scwin.callbackHeavyMachineryClntInfo // XML상의 SELECT ID
      , pName // 화면에서의 ??? Name Element의  Value
      , pCode // 화면에서의 ??? Code Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      /*
                      if(rtnList != null){			
      					if(rtnList[0] != "N/A"){
      						ds_admitckCont.setCellData( row , "hveqClntNo" , rtnList[0]);
      						ds_admitckCont.setCellData( row , "clntNm" , rtnList[1]); 
      						}
      				}
      */
      break;
    case 4:
      //장비모델
      pName = ds_admitckCont.getCellData(row, "eqModelCd");
      scwin.currow = row;
      udc_comCd.setSelectId("retrieveEqModelListInfo2");
      rtnList = udc_comCd.cfCommonPopUp(scwin.callbackEqModelListInfo2 // XML상의 SELECT ID
      , pName // 화면에서의 ??? Name Element의  Value
      , pCode // 화면에서의 ??? Code Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      /*
      if(rtnList != null){			
      if(rtnList[0] != "N/A"){
      ds_admitckCont.setCellData( row , "eqModelCd" , rtnList[0]);
      ds_admitckCont.setCellData( row , "eqModelNm" , rtnList[1]);
      }
      }
      */
      break;
    default:
      break;
  }
};
scwin.callbackEqCdListInfo2 = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.f_SetGridReturnValue($p, rtnList, ds_admitckCont, scwin.currow, ["eqCd", "tempBarcdVehclNo", "", "eqModelCd", "eqModelNm", "vechlYn", "", "eqNrmCd", "assgnLobranNm", "cargoClsCd"]);
  } else {
    ds_admitckCont.setCellData(scwin.currow, "eqCd", "");
    ds_admitckCont.setCellData(scwin.currow, "tempBarcdVehclNo", "");
    ds_admitckCont.setCellData(scwin.currow, "eqModelCd", "");
    ds_admitckCont.setCellData(scwin.currow, "eqModelNm", "");
    ds_admitckCont.setCellData(scwin.currow, "vechlYn", "");
    ds_admitckCont.setCellData(scwin.currow, "eqNrmCd", "");
    ds_admitckCont.setCellData(scwin.currow, "assgnLobranNm", "");
    ds_admitckCont.setCellData(scwin.currow, "cargoClsCd", "");
  }
};
scwin.callbackHeavyMachineryClntInfo = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_admitckCont.setCellData(scwin.currow, "hveqClntNo", rtnList[0]);
    ds_admitckCont.setCellData(scwin.currow, "clntNm", rtnList[1]);
  } else {
    ds_admitckCont.setCellData(scwin.currow, "hveqClntNo", "");
    ds_admitckCont.setCellData(scwin.currow, "clntNm", "");
  }
};
scwin.callbackEqModelListInfo2 = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_admitckCont.setCellData(scwin.currow, "eqModelCd", rtnList[0]);
    ds_admitckCont.setCellData(scwin.currow, "eqModelNm", rtnList[1]);
  } else {
    ds_admitckCont.setCellData(scwin.currow, "eqModelCd", "");
    ds_admitckCont.setCellData(scwin.currow, "eqModelNm", "");
  }
};
scwin.f_ozReport = async function () {
  for (var a = 0; a < ds_admitckCont.getRowCount(); a++) {
    if (ds_admitckCont.getCellData(a, "chk") == "T") {
      /*
      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      var odiParam = new ODIParam("in_202_02_03");
      odiParam.add("tmlAdmitckCd", ds_admitckCont.getCellData(a,"tmlAdmitckCd"));
               // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
      var formParam = new FormParam();
      //formParam.add("form1","budgetYm");
              
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
      var viewerParam = new ViewerParam();
                          
      viewerParam.add("viewer.useprogressbar","false");
      $c.gus.cfOZPreview( "/to/in/comn/tmlopcomn/in_202_02_03.ozr",  odiParam , viewerParam , formParam ) ;
      */

      var data = {
        odiName: "in_202_02_03",
        reportName: "/to/in/comn/tmlopcomn/in_202_02_03.ozr",
        odiParam: {
          tmlAdmitckCd: ds_admitckCont.getCellData(a, "tmlAdmitckCd")
        },
        viewerParam: {
          useprogressbar: false,
          // 프로그레스바 쓸지 말지
          zoom: 90 // 배율 설정
          //mode: ozMode
        },
        formParam: {
          form1: "budgetYm"
        }
      };
      await scwin.openPopup(data);
    }
  }
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
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
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_report_onclick = function (e) {
  scwin.f_ozReport();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.addGridRow = function () {
  var idx = ds_admitckCont.getRowCount();
  ds_admitckCont.insertRow(idx);
  //gr_admitckCont.setFocusedCell(idx-1, 0);
  ds_admitckCont.setRowPosition(idx);
  ds_admitckCont.setCellData(idx, "tempBarcdYn", 0);
  ds_admitckCont.setCellData(idx, "delYn", 0);
  ds_admitckCont.setCellData(idx, "useYn", 1);
  ds_admitckCont.setCellData(idx, "vehclYn", 1);
};
scwin.deleteGridRow = function () {
  if (ds_admitckCont.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다.");
    return;
  }
  var idx = ds_admitckCont.getRowPosition();
  var status = ds_admitckCont.getRowStatus(idx);

  /*
      if(status == "R" || status == "U") {
          ds_admitckCont.modifyRowStatus(idx, "D");
      } else if (status == "C") {
          ds_admitckCont.removeRow(idx);        
      }
  */
  if (ds_admitckCont.getRowStatus(ds_admitckCont.getRowPosition()) == "C") {
    ds_admitckCont.setEventPause("", true);
    ds_admitckCont.removeRow(ds_admitckCont.getRowPosition());
    gr_admitckCont.setFocusedCell(ds_admitckCont.getRowCount() - 1, 0);
    ds_admitckCont.setEventPause("", false);
  } else {
    var row = ds_admitckCont.getRowPosition();
    ds_admitckCont.deleteRow(ds_admitckCont.getRowPosition());
    ds_admitckCont.setRowPosition(row);
  }
};
scwin.cancleRow = function () {
  if (ds_admitckCont.getRowStatus(ds_admitckCont.getRowPosition()) == "C") {
    ds_admitckCont.setEventPause("", true);
    ds_admitckCont.removeRow(ds_admitckCont.getRowPosition());
    ds_admitckCont.setEventPause("", false);
  } else {
    ds_admitckCont.undoRow(ds_admitckCont.getRowPosition());
  }
};
scwin.sbm_condition_submitdone = function (e) {
  var rowCnt = ds_admitckCont.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
  } else {
    ds_admitckCont.getRowPosition(0);
  }
  spa_cnt.setValue(rowCnt);
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.ds_admitckCont_onbeforerowpositionchange = function (info) {
  var oldRowIndex = info.oldRowIndex;
  var newRowIndex = info.newRowIndex;
  console.log("oldRowIndex : " + oldRowIndex + ",  newRowIndex  : " + newRowIndex);
  if (oldRowIndex != null && newRowIndex != null && oldRowIndex <= ds_admitckCont.getRowCount() - 1) {
    console.log(ds_admitckCont.getCellData(oldRowIndex, "tempBarcdVehclNo"));
    //console.log(ds_admitckCont.getCellData(oldRowIndex,"cntrBulkClsCd"));
    if (ds_admitckCont.getCellData(oldRowIndex, "tempBarcdVehclNo") == "") {
      $c.win.alert($p, "차량번호는  필수 입니다");
      if (ds_admitckCont.getRowStatus(newRowIndex) == "C" && newRowIndex == ds_admitckCont.getRowCount() - 1) {
        ds_admitckCont.removeRow(newRowIndex);
        ds_admitckCont.setRowPosition(0);
      } else {
        ds_admitckCont.setRowPosition(oldRowIndex);
      }
      //ds_admitckCont.removeRow(newRowIndex);
      return false;
    }
    if (ds_admitckCont.getCellData(oldRowIndex, "cntrBulkClsCd") == "") {
      $c.win.alert($p, "컨테이너벌크 구분을 선택해주세요.");
      return false;
    }
  }
};
scwin.gr_admitckCont_onviewchange = function (info) {
  console.log(info);
  var pClickTF = "T";
  var row = info.rowIndex;
  var columnId = info.colId;
  if (columnId == "eqCd") {
    //scwin.f_openCommonPopUp(2,ds_List.getCellData(row,columnId),'','','T');
    console.log(columnId);
    scwin.f_openCommPopUpGrid(1, row, 'T', pClickTF);
  } else if (columnId == "clntNm") {
    //scwin.f_openCommonPopUp(3,ds_List.getCellData(row,'clntNo'),ds_List.getCellData(row,columnId),'','T');
    scwin.f_openCommPopUpGrid(3, row, 'T', pClickTF);
  } else if (columnId == "eqModelCd") {
    scwin.f_openCommPopUpGrid(4, row, 'T', pClickTF);
  }
};
scwin.gr_admitckCont_ontextimageclick = function (rowIndex, columnIndex) {
  var pClickTF = "F";
  console.log("rowIndex  : " + rowIndex + "    columnIndex  : " + columnIndex);
  var row = rowIndex;
  if (columnIndex != "eqCd") var columnId = gr_admitckCont.getColumnID(columnIndex);
  if (columnId == "eqCd") {
    if (columnIndex != "eqCd") {
      scwin.f_openCommPopUpGrid(1, row, 'T', pClickTF);
    }
  } else if (columnId == "clntNm") {
    scwin.f_openCommPopUpGrid(3, row, 'T', pClickTF);
  } else if (columnId == "eqModelCd") {
    scwin.f_openCommPopUpGrid(4, row, 'T', pClickTF);
  }

  //return true;
};
scwin.excelDown = async function () {
  const options = {
    fileName: "출입증등록현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "출입증등록현황",
    startRowIndex: 0,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [];

  //var chk = await $c.win.confirm("EXCEL로 다운로드 받으시겠습니까?");

  if (ds_admitckCont.getRowCount() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
  } else {
    $c.data.downloadGridViewExcel($p, gr_admitckCont, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임시출입증여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'lc_tempBarcdYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_condition.tempBarcdYn',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'임시'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비분류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'lc_eqClssCd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:dma_condition.eqClssCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',style:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_qryCond',search:'start',style:'width: 130px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.qryCond'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'단축코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비(차량)번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'모델명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_qryCntn',style:'',ref:'data:dma_condition.qryCntn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'lc_delYn',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'data:dma_condition.delYn',chooseOption:'true',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'lc_vehclYn',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'data:dma_condition.vehclYn',chooseOption:'true',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_lobranCd',codeId:'ed_comCd','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onviewchangeNameEvent',id:'udc_comCd',nameId:'ed_comNm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'터미널출입증등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_admitckCont',grdDownOpts:'{"fileName":"출입증등록현황.xlsx","sheetName" : "출입증등록현황", "type":"4+8+16"}',gridUpYn:'N',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_admitckCont',id:'gr_admitckCont',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:onviewchange':'scwin.gr_admitckCont_onviewchange',autoFit:'allColumn',autoFitMinWidth:'1700',fixedColumnNoMove:'true',fixedColumn:'3','ev:ontextimageclick':'scwin.gr_admitckCont_ontextimageclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출입증코드',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'임시출입증<br/>여부',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'장비명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'장비모델코드',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'장비모델이름',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'차량번호',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'차량여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'장비분류',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'배정점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'배정점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column45',value:'기사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'컨테이너벌크<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'장비사용<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'등록일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',checkAlways:'true',falseValue:'$blank',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlAdmitckCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'임시'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'textImage',width:'100',imageClickFunction:'scwin.gr_admitckCont_ontextimageclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNm',inputType:'text',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelCd',inputType:'textImage',width:'120',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tempBarcdVehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqClssCd',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'tmlEqKndCd',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tmlEqKndNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'assgnLobranCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'assgnLobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cargoClsCd',displayMode:'label',hidden:'true',allOption:'',chooseOption:'',ref:'',hiddenCol:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hveqClntNo',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left',viewType:'default'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'tempBarcdDrvNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tempBarcdTelNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'cntrBulkClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'eqDelYn',value:'',displayMode:'label',hidden:'true',allOption:'',chooseOption:'',ref:'',hiddenCol:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'useYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'delYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_admitckCont',id:'udc_bottomGrdBtn',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',addFunction:'scwin.addGridRow',rowDelFunction:'scwin.deleteGridRow',rowAddFunction:'scwin.addGridRow',cancelFunction:'scwin.cancleRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_report',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_report_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'터미널출입증 발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})