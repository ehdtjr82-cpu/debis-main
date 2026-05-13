/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_01_01b.xml 84524 de6857675e657b35be23ed1b64b9bab6b8277d4c11d110e64af42a192ca76a91 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYm',name:'예산년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planDcsn',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctClsCd',name:'계정구분(사용안함)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'비용구분(사용안함)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_expn',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_expn_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크',dataType:'text',defaultValue:'',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'month',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'계획금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jan',name:'1월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'feb',name:'2월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mar',name:'3월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'apr',name:'4월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'may',name:'5월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jun',name:'6월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'jul',name:'7월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'aug',name:'8월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sep',name:'9월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'oct',name:'10월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'nov',name:'11월(계획금액)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dec',name:'12월(계획금액)',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_excel',repeatNode:'map',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctCd',name:'관리계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntAcctNm',name:'관리계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jan',name:'1월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'feb',name:'2월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mar',name:'3월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'apr',name:'4월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'may',name:'5월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jun',name:'6월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jul',name:'7월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'aug',name:'8월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sep',name:'9월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'oct',name:'10월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'nov',name:'11월(계획금액)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dec',name:'12월(계획금액)'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deptList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_commonCodeCO027Temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'필터1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'필터3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.profitloss.RetrieveDeptExpenseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_expn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_expn", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.profitloss.SaveDeptExpenseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_expn","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDept',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 부서별계획등록
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_01_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-10
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. login정보 확인 필요 
 *     ☞  $c.data.getMemInfo() 처리
 *    2. [해결]<%@ page import="dbl.ac.am.constants.ACConstants" %> 상수가져오는건 공통에서 글로벌 상수로 변경할 듯. 
 *    3. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    4. 엑셀 업로드 기능(gridUpYn="Y", 그리드_onfilereadend)
 *    5. ☏ $c.gus.cfJobCloseYN 공통함수 없음
  *    ☞ 2025-12-22 공통개발됨(udc_comChkRes)
 * 수정이력 :
 *    - 2025-12-10      배기원    최초작성
 */
//hidden값
scwin.txt_acctClsCd = "";
scwin.txt_costClsCd = "";
scwin.checkUser = false; //확정버튼 사용권한이 있는지 여부 확인[초기값:false]

scwin.memJson;
scwin.G_acctDeptCd;
scwin.G_acctDeptNm;
scwin.G_empNo;
scwin.G_empNm;
scwin.checkPlanSave = false; //확정후 저장버튼 클릭시는 저장 안되게함.(true:저장가능, false:저장불가)
scwin.wrkNo = ""; //작업구분코드
scwin.fromDate = ""; //작업날짜
scwin.isClose = ""; //마감체크(tobe 추가)

scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.G_acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson["acctDeptCd"]) ? "" : scwin.memJson["acctDeptCd"];
  scwin.G_acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson["acctDeptNm"]) ? "" : scwin.memJson["acctDeptNm"];
  scwin.G_empNo = $c.gus.cfIsNull($p, scwin.memJson["empNo"]) ? "" : scwin.memJson["empNo"];
  scwin.G_empNm = $c.gus.cfIsNull($p, scwin.memJson["empNm"]) ? "" : scwin.memJson["empNm"];
  const codeOptions = [{
    grpCd: "CO018",
    compID: ""
  },
  //권한코드
  //{ grpCd: "CO027", compID: "gr_expn:month" } //경비월구분
  {
    grpCd: "CO027",
    compID: ""
  } //경비월구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeCO027Temp.setJSON(dlt_commonCodeCO027.getAllJSON());
  for (let i = 0; i < dlt_commonCodeCO027Temp.getRowCount(); i++) {
    let sortSeq = dlt_commonCodeCO027Temp.getCellData(i, "sortSeq");
    dlt_commonCodeCO027Temp.setCellData(i, "sortSeq", Number(sortSeq));
  }
  dlt_commonCodeCO027Temp.reform();
  //기준월 순서정렬 잘되게 하기 위한 작업
  dlt_commonCodeCO027Temp.sort("sortSeq", 0);
  for (let i = 0; i < dlt_commonCodeCO018.getRowCount(); i++) {
    let empNo = dlt_commonCodeCO018.getCellData(i, "cd");
    if (empNo == scwin.G_empNo) {
      scwin.checkUser = true;
      break;
    }
  }
  //사용자권한에 따른 확정버튼 보이기
  if (scwin.checkUser) {
    btn_confirm.show("");
  } else {
    btn_confirm.hide();
  }
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "planYm:STRING(6)"                 // 예산년도
  //                         + ",acctDeptCd:STRING(5)"               // 부서코드
  //                         + ",mgntAcctCd:STRING(7)"               // 관리계정코드
  //                         + ",planDcsn:STRING(1)";            // 구분코드(1:계획,2:확정)
  // ds_searchExpn.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_searchExpn.AddRow();

  // var GAUCE_DATASET_HEADER =	 "acctDeptCd:STRING(5)"                   // 부서코드
  //                             +",acctDeptNm:STRING(30)";                // 부서명

  // ds_expn.SetDataHeader(GAUCE_DATASET_HEADER);

  // GAUCE_DATASET_HEADER ="mgntAcctCd:STRING(7)"               // 관리계정코드
  //                     + ",mgntAcctNm:STRING(50)"              // 관리계정명
  //                     + ",jan:DECIMAL(13)"                         // 1월
  //                     + ",feb:DECIMAL(13)"                         // 2월
  //                     + ",mar:DECIMAL(13)"                         // 3월
  //                     + ",apr:DECIMAL(13)"                         // 4월
  //                     + ",may:DECIMAL(13)"                         // 5월
  //                     + ",jun:DECIMAL(13)"                         // 6월
  //                     + ",jul:DECIMAL(13)"                         // 7월
  //                     + ",aug:DECIMAL(13)"                         // 8월
  //                     + ",sep:DECIMAL(13)"                         // 9월
  //                     + ",oct:DECIMAL(13)"                         // 10월
  //                     + ",nov:DECIMAL(13)"                         // 11월
  //                     + ",dec:DECIMAL(13)";                        // 12월

  // ds_tempexpn.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_upexpn.SetDataHeader(GAUCE_DATASET_HEADER);

  // GAUCE_DATASET_HEADER =",planYm:STRING(4)"               // 년원
  //                     + ",acctDeptCd:STRING(5)"               // 귀속부서코드
  //                     + ",acctDeptNm:STRING(50)"              // 귀속부서명
  //                     + ",mgntAcctCd:STRING(7)"               // 관리계정코드
  //                     + ",mgntAcctNm:STRING(50)"              // 관리계정명
  //                     + ",planAmt:DECIMAL(13.0)"        // 계획예산금액
  //                     + ",jan:DECIMAL(13)"                         // 1월
  //                     + ",feb:DECIMAL(13)"                         // 2월
  //                     + ",mar:DECIMAL(13)"                         // 3월
  //                     + ",apr:DECIMAL(13)"                         // 4월
  //                     + ",may:DECIMAL(13)"                         // 5월
  //                     + ",jun:DECIMAL(13)"                         // 6월
  //                     + ",jul:DECIMAL(13)"                         // 7월
  //                     + ",aug:DECIMAL(13)"                         // 8월
  //                     + ",sep:DECIMAL(13)"                         // 9월
  //                     + ",oct:DECIMAL(13)"                         // 10월 
  //                     + ",nov:DECIMAL(13)"                         // 11월
  //                     + ",dec:DECIMAL(13)"                         // 12월
  //                     + ",amt:DECIMAL(14)"                        // 합계
  //                     + ",month:STRING(4)"                        // 기준월
  //                     + ",num:STRING(1)";                        // CheckBox용

  // ds_expn.SetDataHeader(GAUCE_DATASET_HEADER);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_expn.setNoResultMessageVisible(false);
  ds_expn.reform();
  ds_expn.removeAll();
  totalRows.setValue("0");
  scwin.checkPlanSave = false;
  scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_SetSrchDefault();
  //부서코드
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  let today = $c.date.getServerDateTime($p);
  let closeYr = today.substring(0, 4);
  ica_fromDate.setValue(closeYr);
  ica_fromDate.hidVal = ica_fromDate.getValue();
  lc_planDcsn.setSelectedIndex(0);
  ed_sacctDeptCd.setValue(scwin.G_acctDeptCd);
  ed_sacctDeptNm.setValue(scwin.G_acctDeptNm);
  ed_smgntAcctCd.setValue("");
  ed_smgntAcctNm.setValue("");
  ica_fromDate.focus();
  scwin.txt_costClsCd = "04";
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->부서별 , 2:조회->관리계정, 3:Grid->계정=> tobe는 scwin.f_GridPop 호출
 * code변수는 각 항목별 검색요청 값이다.
 */
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  //asis 소스
  // var rtnList = new Array();
  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  // if (flag != "SKIP") {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // } else {
  //     cd = orgObjCd;
  //     nm = "";
  // }

  // switch (select_code) {
  //     // 조회조건용 수금부서 PopUp 호출
  //     case '1':
  //         var param_yy = ed_FromDate.getValue().trim() + "0101";

  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo9', ed_sacctDeptCd.getValue().trim(), ed_sacctDeptNm.getValue().trim(), "T", null, null, null, null, param_yy, ",,,,,,1", "450", "500", null, null); // 귀속부서

  //         if (rtnList != null) {
  //             if (rtnList[0] == "N/A") {
  //                 ed_sacctDeptCd.setValue = "";
  //                 ed_sacctDeptNm.setValue = "";
  //                 ed_sacctDeptCd.hidVal = "";
  //                 scwin.txt_costClsCd = "";
  //                 return;
  //             }

  //             ed_sacctDeptCd.setValue = rtnList[0]; //부서코드
  //             ed_sacctDeptNm.setValue = rtnList[1]; //부서명
  //             ed_sacctDeptCd.hidVal = rtnList[0]; // 히든값
  //             scwin.txt_costClsCd = "" + rtnList[9]; //비용구분코드
  //         } else {
  //             ed_sacctDeptCd.setValue = "";
  //             ed_sacctDeptNm.setValue = "";
  //             ed_sacctDeptCd.hidVal = "";
  //             //txt_adjmAcctDeptCd.value="";
  //             scwin.txt_costClsCd = "";
  //         }

  //         break;
  //     case '2':
  //         // 비용구분 : 01^원가,02^판관비,03^원가+판관비
  //         scwin.txt_costClsCd = "04";

  //         var temp = "T," + ",,,," + scwin.txt_costClsCd;
  //         rtnList = cfCommonPopUp('retrieveAcctCdInfo', ed_smgntAcctCd.getValue().trim(), ed_smgntAcctNm.getValue().trim(), "T", null, null, null, null, temp, null, null, null, null);

  //         if (rtnList != null) {

  //             if (rtnList[0] == "N/A") {
  //                 ed_smgntAcctCd.setValue = ""; //계정코드
  //                 ed_smgntAcctNm.setValue = ""; //계정명
  //                 ed_smgntAcctCd.hidVal = ""; // 히든값
  //                 scwin.txt_acctClsCd = ""; //계정구분
  //                 return;
  //             }
  //             ed_smgntAcctCd.setValue = rtnList[0]; //계정코드
  //             ed_smgntAcctNm.setValue = rtnList[1]; //계정명
  //             ed_smgntAcctCd.hidVal = rtnList[0]; // 히든값
  //             scwin.txt_acctClsCd = rtnList[2]; //계정구분
  //         } else {
  //             ed_smgntAcctCd.setValue = ""; //계정코드
  //             ed_smgntAcctNm.setValue = ""; //계정명
  //             ed_smgntAcctCd.hidVal = ""; // 히든값
  //             scwin.txt_acctClsCd = ""; //계정구분
  //         }

  //         break;
  //     case '3':
  //         scwin.txt_costClsCd = "04";

  //         var temp = "T," + ",,,," + scwin.txt_costClsCd;
  //         rtnList = cfCommonPopUp('retrieveAcctCdInfo', cd, nm, "T", null, null, null, null, temp, null, null, null, null);
  //         if (rtnList != null) {

  //             if (rtnList[0] == "N/A") {
  //                 return;
  //             }

  //             ds_expn.setCellData(ds_expn.RowPosition, "mgntAcctCd", rtnList[0]); //계정코드
  //             ds_expn.setCellData(ds_expn.RowPosition, "mgntAcctNm", rtnList[1]); //계정명
  //             ed_smgntAcctCd.hidVal = rtnList[0]; // 히든값
  //             scwin.txt_acctClsCd = rtnList[2]; //계정구분
  //         }
  //         break;
  //     default:
  //         $c.win.alert("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  //         break;
  // }

  //TODO : case 3에서 사용함, tobe는 scwin.f_GridPop 사용하므로 주석처리
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  // if ( flag != "SKIP") {
  //     if (flag == "ALL") {
  //         cd = "";
  //         nm = "";
  //     } else {
  //         cd = orgObjCd.Text;
  //         nm = orgObjNm.Text;
  //     }
  // } else {
  //     cd = orgObjCd;
  //     nm = "";
  // }

  //조회조건 9번째, 전체검색허용여부 15번째
  let param = ica_fromDate.getValue() + "0101";
  switch (select_code) {
    case '1':
      //부서별
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, ed_sacctDeptCd.getValue(), ed_sacctDeptNm.getValue(), "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '2':
      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      scwin.txt_costClsCd = "04";
      param = "T," + ",,,," + scwin.txt_costClsCd;
      //관리계정
      udc_smgntAcctCd.cfCommonPopUp(scwin.udc_smgntAcctCd_callBackFunc, ed_smgntAcctCd.getValue(), ed_smgntAcctNm.getValue(), "T", null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
  }
};

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (!$c.gus.cfIsNull($p, orgObjCd.getValue()) || flag == "NM") {
    if (!$c.gus.cfIsNull($p, orgObjNm.getValue()) || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_sacctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_sacctDeptCd.setValue(ret[0]); // 부서코드
    ed_sacctDeptNm.setValue(ret[1]); // 부서명
    ed_sacctDeptCd.hidVal = ret[0]; // 히든값
    scwin.txt_costClsCd = ret[9]; // 비용구분코드
  } else {
    ed_sacctDeptCd.setValue(""); // 부서코드
    ed_sacctDeptNm.setValue(""); // 부서명
    ed_sacctDeptCd.hidVal = ""; // 히든값
    scwin.txt_costClsCd = ""; // 비용구분코드
  }
};

/**
 * 계정코드 팝업 callBack
 */
scwin.udc_smgntAcctCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_smgntAcctCd.setValue(ret[0]); // 계정코드
    ed_smgntAcctNm.setValue(ret[1]); // 계정명
    ed_smgntAcctCd.hidVal = ret[0]; // 히든값
    scwin.txt_acctClsCd = ret[2]; // 계정구분
  } else {
    ed_smgntAcctCd.setValue(""); // 계정코드
    ed_smgntAcctNm.setValue(""); // 계정명
    ed_smgntAcctCd.hidVal = ""; // 히든값
    scwin.txt_acctClsCd = ""; // 계정구분
  }
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, close) {
  scwin.f_commCdPopupRow = row;
  let sqlId = "";
  //관리계정
  if (colId == "mgntAcctCd") {
    scwin.txt_costClsCd = "04";
    ds_expn.setCellData(row, "mgntAcctCd", "");
    ds_expn.setCellData(row, "mgntAcctNm", "");
    let param = "T," + ",,,," + scwin.txt_costClsCd;
    udc_comCode_Grid.setSelectId("retrieveAcctCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc, data, "", close, null, null, null, null, param, null, null, null, null, null, "F", null);
  }
};

/**
 * 계정코드(그리드팝업)
 */
scwin.udc_comCode_Grid_mgntAcctCd_callBackFunc = function (ret) {
  // let rowIdx = gr_expn.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ret[0]); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ret[1]); //계정명
  } else {
    ds_expn.setCellData(rowIdx, "mgntAcctCd", ""); //계정코드
    ds_expn.setCellData(rowIdx, "mgntAcctNm", ""); //계정명
  }
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, ed_sacctDeptCd, ed_sacctDeptNm]);
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().length != 4) {
    await $c.gus.cfAlertMsg($p, "예산년도은(는) 4자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_fromDate.getValue() + "0101");
  if (!ret) {
    await $c.gus.cfAlertMsg($p, "올바른 예산년도을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  scwin.setInit();
  //사용하지는 않지만 일단 로직에 있으니 추가
  dma_search.set("acctClsCd", scwin.txt_acctClsCd);
  dma_search.set("costClsCd", scwin.txt_costClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_expn.setNoResultMessageVisible(true);
  let rowCnt = ds_expn.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    //TODO : 체크박스 해제시 F로 주기 위함
    // for(let i=0; i<rowCnt; i++) {
    //     let chk = ds_expn.getCellData(i, "num");
    //     if($c.gus.cfIsNull(chk)) {
    //         ds_expn.setCellData(i, "num", "F");
    //     }
    // }
    ds_expn.reform();
    gr_expn.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  //정상조회후 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  ica_fromDate.hidVal = ica_fromDate.getValue();
  ed_sacctDeptCd.hidVal = ed_sacctDeptCd.getValue();
  //조회 조건이 계획으로 조회 했을경우 저장 가능으로 변경함.
  if (lc_planDcsn.getValue() == "1") {
    scwin.checkPlanSave = true;
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장
 */
scwin.f_Save = async function (e) {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }
  if (!scwin.checkPlanSave) {
    await $c.gus.cfAlertMsg($p, "확정으로 조회한 데이타는 계획으로 저장 하실 수 없습니다.");
    return;
  }
  if (ica_fromDate.getValue().trim() != ica_fromDate.hidVal || ed_sacctDeptCd.getValue().trim() != ed_sacctDeptCd.hidVal) {
    await $c.gus.cfAlertMsg($p, "조회 조건인 적용년도, 계정코드가 변경되어서 저장 하실 수 없습니다. 재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }

  // 필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [gr_expn]);
  if (!ret) {
    return false;
  }

  // 변경된 사항이 있는지 확인.
  if (ds_expn.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["부서별계획정보"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_expn.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 확정 버튼 클릭시 실행 되는 이벤트
 */
scwin.f_Confirm = async function () {
  let ret;
  // 마감여부 확인
  ret = await scwin.f_JobCloseYN();
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().trim() != ica_fromDate.hidVal || ed_sacctDeptCd.getValue().trim() != ed_sacctDeptCd.hidVal) {
    await $c.gus.cfAlertMsg($p, "조회 조건인 적용년도, 계정코드가 변경되어서 저장 하실 수 없습니다." + "<BR>" + "재 조회 및 엑셀파일 Import를 다시 실행하시기 바랍니다.");
    return;
  }

  // 필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [gr_expn]);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, "확정하시겠습니까?")) {
    for (var i = 0; i < ds_expn.getRowCount(); i++) {
      //ASIS 0:Nomal, 1:Insert, 3:Update
      // if (ds_expn.SysStatus(i) == 0 || ds_expn.SysStatus(i) == 1 || ds_expn.SysStatus(i) == 3) {
      if (ds_expn.getRowStatus(i) == "R" || ds_expn.getRowStatus(i) == "C" || ds_expn.getRowStatus(i) == "U") {
        // 데이터셋의 STATUS 값을 INSERT(1)로 사용한다.
        //ds_expn.UserStatus(i) = 1;
        ds_expn.modifyRowStatus(i, "C");
      }
    }
  }
};

/**
 * 1월 일괄적용 버튼 클릭시
 */
scwin.f_Apply = async function () {
  let countCheck = 0;
  // for (var i=0; i<ds_expn.getRowCount(); i++) {
  //     if (ds_expn.getCellData(i, "num") == "T") {
  //         for (var j=parseInt(ds_expn.getCellData(i, "month")) + 8; j < 20; j++) {
  //             ds_expn.ColumnString(i, j) = ds_expn.ColumnString(i, parseInt(ds_expn.getCellData(i, "month")) + 8);
  //         }
  //         scwin.f_ReSum(i); // 합계를 재계산한다.
  //         countCheck += 1;
  //     }
  // }
  for (let i = 0; i < ds_expn.getRowCount(); i++) {
    if (ds_expn.getCellData(i, "num") == "T") {
      //1월부터 12월까지 컬럼가져오기
      for (let j = 9; j <= 20; j++) {
        ds_expn.setCellData(i, ds_expn.getColumnID(j), Number(ds_expn.getCellData(i, "month")));
      }
      //합계를 재계산한다.
      scwin.f_ReSum(i);
      countCheck += 1;
    }
  }
  if (countCheck <= 0) {
    await $c.gus.cfAlertMsg($p, "일괄적용을 하고자 하는 Row를 체크 하시기 바랍니다.");
  }
};

/**
 * 행추가
 */
scwin.f_AddRow = async function () {
  // 필수 입력 사항 확인
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, ed_sacctDeptCd]);
  if (!ret) {
    return false;
  }
  let row = ds_expn.insertRow();
  // 신규입력된 Row는 수정 가능 상태로 변경
  // if (ds_expn.RowStatus(ds_expn.getRowPosition) == 1) {
  //     gr_expn.setColumnDefaultValue("mgntAcctCd", "Edit") = "any";
  // } else {
  //     gr_expn.setColumnDefaultValue("mgntAcctCd", "Edit") = "none";
  // }

  ds_expn.setCellData(row, "planYm", ica_fromDate.getValue().trim());
  ds_expn.setCellData(row, "acctDeptCd", ed_sacctDeptCd.getValue().trim());
  ds_expn.setCellData(row, "acctDeptNm", ed_sacctDeptNm.getValue().trim());
  ds_expn.setCellData(row, "month", "1");
  gr_expn.setCellReadOnly(row, "mgntAcctCd", false);
  gr_expn.setFocusedCell(row, "mgntAcctCd", true);
};

/**
 * 행삭제
 * TOBE UDC 사용
 */
scwin.f_DeleteRow = function () {
  let row = ds_expn.getRowPosition();
  if (ds_expn.getRowStatus(row) == "C") {
    ds_expn.removeRow(row);
  } else {
    ds_expn.deleteRow(row);
    for (let j = 9; j <= 20; j++) {
      ds_expn.setCellData(row, ds_expn.getColumnID(j), ds_expn.getOriginalCellData(row, ds_expn.getColumnID(j)));
    }
    gr_expn.setFocusedCell(row, 0);
  }
};

/**
 * 행취소
 * TOBE UDC 사용
 */
scwin.f_UndoRow = function () {
  $c.data.undoRow($p, ds_expn);
};

/**
 * 엑셀 파일 다운로드
 */
scwin.f_Export = async function () {
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     var exportFileName = "부서별계획등록_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue().trim();
  //     gr_expn.setColumnDefaultValue("num", "show") = false;
  //     gr_expn.setColumnDefaultValue("month", "show") = false;
  //     gr_expn.ViewSummary = "0";

  //     $c.data.downloadGridViewExcel(objGridName, "부서별계획등록", exportFileName, 8 + 16);

  //     gr_expn.setColumnDefaultValue("num", "show") = true;
  //     gr_expn.setColumnDefaultValue("month", "show") = true;
  //     gr_expn.ViewSummary = "1";
  // }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "부서별계획등록";
    let options = {
      fileName: sheetTitle + "_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue() + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#d9d9d9",
      //"#E8E8E8", //연한회색 #33CCCC
      hiddenVisible: false,
      //히든값(true : 포함, false : 미포함)
      startRowIndex: 0,
      //시작되는 행의 번호(헤더 포함)
      removeColumns: "0,1",
      //다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
      // useSubTotal:false,      //다운로드시 SubTotal을 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력), expression을 지정한 경우 avg,sum,min,max,targetColValue,숫자를 지원 함.
      // useSubTotalData:false,  //[default: 없음] 기본은 서버에서 계산된 결과를 출력하지만 useSubTotalData="true"시 브라우저에 출력된 subTotal 데이터를 출력함.
      useFooter: "false" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    };
    //그리드에 대한 내용을 추가 옵션
    // let infoArr = [
    //     //제목
    //     {
    //         rowIndex: 0               //제목을 표시할 행 index
    //         , colIndex: 0               //제목을 표시할 열 index
    //         , rowSpan: 1                //병합할 행의 수
    //         , colSpan: 9                //병합할 열의 수
    //         , text: sheetTitle          //표시할 내용(제목)
    //         , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
    //         , fontSize: "18px"          //폰트 size
    //         , fontName: "돋움체"        //폰트이름 
    //         //, drawBorder: false         //cell의 border 지정(true, false)
    //     }
    // ];
    await $c.data.downloadGridViewExcel($p, gr_expn, options, []);
  }
};

/**
 * 엑셀 파일 업로드
 */
scwin.f_excelUpload = async function () {
  let options;
  // grdUpOpts="" UDC 옵션임
  //'{"headerExist":"0", "footerExist":"1", "startRowIndex":1, "startColumnIndex":0, "status":"C"}'
  ds_excel.removeAll();
  if (udc_excel.getUpExt() == "1") {
    options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 0,
      "type": "1",
      "startRowIndex": 1
      //"delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
    };
    await $c.data.uploadGridViewCSV($p, gr_excel, options);
  } else {
    options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 0,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 1,
      "footerExist": 1
    };
    await $c.data.uploadGridViewExcel($p, gr_excel, options);
  }
};

/**
 * 엑셀 파일 업로드
 * TOBE UDC 사용으로 로직만 복사해서 사용(gr_grid_onfilereadend 이벤트)
 */
scwin.f_Import = async function () {
  //ASIS 소스
  // // 엑셀파일을 Import하기 위한 필수 조건 체크
  // let ret = await $c.gus.cfValidate([ica_fromDate, ed_sacctDeptCd, ed_sacctDeptNm]);
  // if(!ret) {
  //     return false;        
  // }

  // if (!await $c.win.confirm("파일을생성하시겠습니까?")) {
  //     return;
  // }

  // inputF.Value = "";
  // inputF.Open();

  // // Import파일의 확장자 확인
  // var inputFileName = inputF.Value;
  // var inputFileLength = inputFileName.length;
  // var fileExtendNameCheck = inputFileName.substring((inputFileLength - 3), inputFileLength);

  // if (fileExtendNameCheck.toUpperCase() != "CSV") {
  //     await $c.win.alert("파일이 CSV인 것만 Import가 가능합니다.<BR>엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
  // }

  // ds_upexpn.DataId = "";
  // ds_upexpn.DataId = "file://" + inputF.Value;

  // if (inputF.Value == "") {
  //     return;
  // }

  // ds_upexpn.removeAll();
  // ds_expn.removeAll();
  // ds_tempexpn.removeAll();

  // ds_upexpn.undoAll();

  // ds_tempexpn.ImportData(ds_upexpn.ExportData(1, ds_upexpn.getRowCount(), true));

  // var cd = "";
  // var nm = "";
  // var acctDeptCd = "";
  // for (var i=0; i<ds_tempexpn.getRowCount(); i++) {
  //     var row = ds_expn.insertRow();
  //     // 관리계정 코드가 정상적으로 입력되어 있는지 확인함.
  //     var mgntAcctCd = $c.gus.cfGetLeftPad(ds_tempexpn.getCellData(i, "mgntAcctCd"), 7);
  //     if ($c.gus.cfIsNull(ds_tempexpn.getCellData(i, "mgntAcctCd"))) {
  //         await $c.win.alert((i + 1) + "번째 행의 관리계정 코드값이 없습니다. 확인하시기 바랍니다.");
  //         return;
  //     }

  //     // 관리계정 코드가 숫자가 아닐경우 오류표시
  //     for (var j=0; j <= 4; j++) {
  //         if (!$c.gus.cfIsIn(mgntAcctCd.substring(j, j + 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
  //             await $c.win.alert((i + 1) + "번째 행의 관리계정코드가 잘못 입력 되었습니다.");
  //             return;
  //         }
  //     }

  //     ds_expn.setCellData(i, "mgntAcctCd", $c.gus.cfGetLeftPad(ds_tempexpn.getCellData(i, "mgntAcctCd"), 7));
  //     ds_expn.setCellData(i, "mgntAcctNm", ds_tempexpn.getCellData(i, "mgntAcctNm"));

  //     // 귀속부서코드 존재유무 확인 없을경우 귀속부서코드와 코드명을 공백처리함.
  //     cd = $c.gus.cfGetLeftPad(ds_tempexpn.getCellData(i, "mgntAcctCd"), 7);
  //     var rtnList = new Array();
  //     rtnList = cfCommonPopUp('retrieveMgntAcctCdInfo3', cd, '', "T", null, null, null, null, ",5,,,", "450", "500", null, "T", null, null, null, "T"); // 귀속부서

  //     var gubun;
  //     gubun = rtnList[9];

  //     if (rtnList == "N/A" || gubun != 1) {
  //         ds_expn.setCellData(i, "mgntAcctCd", "");
  //         ds_expn.setCellData(i, "mgntAcctNm", "");
  //     } else {
  //         ds_expn.setCellData(i, "mgntAcctCd", rtnList[0]);
  //         ds_expn.setCellData(i, "mgntAcctNm", rtnList[1]);
  //     }

  //     ds_expn.setCellData(i, "planYm", ica_fromDate.getValue().trim());
  //     ds_expn.setCellData(i, "month", "1");
  //     ds_expn.setCellData(i, "num", "F");
  //     ds_expn.setCellData(i, "acctDeptCd", ed_sacctDeptCd.getValue().trim());
  //     ds_expn.setCellData(i, "acctDeptNm", ed_sacctDeptNm.getValue().trim());

  //     ds_expn.setCellData(i, "jan", Number(ds_tempexpn.getCellData(i, "jan")));
  //     ds_expn.setCellData(i, "feb", Number(ds_tempexpn.getCellData(i, "feb")));
  //     ds_expn.setCellData(i, "mar", Number(ds_tempexpn.getCellData(i, "mar")));
  //     ds_expn.setCellData(i, "apr", Number(ds_tempexpn.getCellData(i, "apr")));
  //     ds_expn.setCellData(i, "may", Number(ds_tempexpn.getCellData(i, "may")));
  //     ds_expn.setCellData(i, "jun", Number(ds_tempexpn.getCellData(i, "jun")));
  //     ds_expn.setCellData(i, "jul", Number(ds_tempexpn.getCellData(i, "jul")));
  //     ds_expn.setCellData(i, "aug", Number(ds_tempexpn.getCellData(i, "aug")));
  //     ds_expn.setCellData(i, "sep", Number(ds_tempexpn.getCellData(i, "sep")));
  //     ds_expn.setCellData(i, "oct", Number(ds_tempexpn.getCellData(i, "oct")));
  //     ds_expn.setCellData(i, "nov", Number(ds_tempexpn.getCellData(i, "nov")));
  //     ds_expn.setCellData(i, "dec", Number(ds_tempexpn.getCellData(i, "dec")));

  //     // 인원수에 대한 자릿수를 체크한다.
  //     if (ds_tempexpn.getCellData(i, "jan") > 9999999999) {
  //         $c.win.alert("1월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "feb") > 9999999999) {
  //         $c.win.alert("2월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "mar") > 9999999999) {
  //         $c.win.alert("3월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "apr") > 9999999999) {
  //         $c.win.alert("4월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "may") > 9999999999) {
  //         $c.win.alert("5월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "jun") > 9999999999) {
  //         $c.win.alert("6월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "jul") > 9999999999) {
  //         $c.win.alert("7월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "aug") > 9999999999) {
  //         $c.win.alert("8월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "sep") > 9999999999) {
  //         $c.win.alert("9월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "oct") > 9999999999) {
  //         $c.win.alert("10월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "nov") > 9999999999) {
  //         $c.win.alert("11월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }
  //     if (ds_tempexpn.getCellData(i, "dec") > 9999999999) {
  //         $c.win.alert("12월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
  //         return;
  //     }

  //     // 금액에 대한 합계를 구한다.
  //     ds_expn.setCellData(i, "amt", ds_expn.getCellData(i, "jan") + ds_expn.getCellData(i, "feb") + ds_expn.getCellData(i, "mar")
  //         + ds_expn.getCellData(i, "apr") + ds_expn.getCellData(i, "may") + ds_expn.getCellData(i, "jun")
  //         + ds_expn.getCellData(i, "jul") + ds_expn.getCellData(i, "aug") + ds_expn.getCellData(i, "sep")
  //         + ds_expn.getCellData(i, "oct") + ds_expn.getCellData(i, "nov") + ds_expn.getCellData(i, "dec") );
  // }

  // // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  // ica_fromDate.hidVal   = ica_fromDate.getValue();
  // ed_sacctDeptCd.hidVal = ed_sacctDeptCd.getValue();

  // ds_tempexpn.removeAll();

  let json;
  for (let i = 0; i < ds_expn.getRowCount(); i++) {
    // 관리계정 코드가 정상적으로 입력되어 있는지 확인함.
    let mgntAcctCd = $c.gus.cfGetLeftPad($p, ds_expn.getCellData(i, "mgntAcctCd"), 7);
    if ($c.gus.cfIsNull($p, ds_expn.getCellData(i, "mgntAcctCd"))) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째 행의 관리계정 코드값이 없습니다. 확인하시기 바랍니다.");
      return;
    }

    // 관리계정 코드가 숫자가 아닐경우 오류표시
    for (let j = 0; j <= 4; j++) {
      if (!$c.gus.cfIsIn($p, mgntAcctCd.substring(j, j + 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 행의 관리계정코드가 잘못 입력 되었습니다.");
        return;
      }
    }
    ds_expn.setCellData(i, "mgntAcctCd", mgntAcctCd);
    ds_expn.setCellData(i, "mgntAcctNm", ds_expn.getCellData(i, "mgntAcctNm"));

    // 귀속부서코드 존재유무 확인 없을경우 귀속부서코드와 코드명을 공백처리함.
    ds_deptList.removeAll();
    json = {};
    json.sysCd = "CommonEBC";
    json.queryId = "retrieveMgntAcctCdInfo3";
    json.param1 = mgntAcctCd;
    let ret = await $c.sbm.execute($p, sbm_retrieveDept, json);
    ds_deptList.setJSON(ret.responseJSON.GAUCE);
    if (ds_deptList.getRowCount() == 0) {
      ds_expn.setCellData(i, "mgntAcctCd", "");
      ds_expn.setCellData(i, "mgntAcctNm", "");
    } else {
      ds_expn.setCellData(i, "mgntAcctCd", ds_deptList.getCellData(0, "col1"));
      ds_expn.setCellData(i, "mgntAcctNm", ds_deptList.getCellData(0, "col2"));
    }
    ds_expn.setCellData(i, "planYm", ica_fromDate.getValue().trim());
    ds_expn.setCellData(i, "month", "1");
    ds_expn.setCellData(i, "num", "F");
    ds_expn.setCellData(i, "acctDeptCd", ed_sacctDeptCd.getValue().trim());
    ds_expn.setCellData(i, "acctDeptNm", ed_sacctDeptNm.getValue().trim());
    ds_expn.setCellData(i, "jan", Number(ds_expn.getCellData(i, "jan")));
    ds_expn.setCellData(i, "feb", Number(ds_expn.getCellData(i, "feb")));
    ds_expn.setCellData(i, "mar", Number(ds_expn.getCellData(i, "mar")));
    ds_expn.setCellData(i, "apr", Number(ds_expn.getCellData(i, "apr")));
    ds_expn.setCellData(i, "may", Number(ds_expn.getCellData(i, "may")));
    ds_expn.setCellData(i, "jun", Number(ds_expn.getCellData(i, "jun")));
    ds_expn.setCellData(i, "jul", Number(ds_expn.getCellData(i, "jul")));
    ds_expn.setCellData(i, "aug", Number(ds_expn.getCellData(i, "aug")));
    ds_expn.setCellData(i, "sep", Number(ds_expn.getCellData(i, "sep")));
    ds_expn.setCellData(i, "oct", Number(ds_expn.getCellData(i, "oct")));
    ds_expn.setCellData(i, "nov", Number(ds_expn.getCellData(i, "nov")));
    ds_expn.setCellData(i, "dec", Number(ds_expn.getCellData(i, "dec")));

    // 인원수에 대한 자릿수를 체크한다.
    if (Number(ds_expn.getCellData(i, "jan")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "1월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "feb")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "2월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "mar")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "3월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "apr")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "4월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "may")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "5월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "jun")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "6월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "jul")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "7월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "aug")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "8월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "sep")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "9월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "oct")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "10월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "nov")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "11월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }
    if (Number(ds_expn.getCellData(i, "dec")) > 9999999999) {
      await $c.gus.cfAlertMsg($p, "12월의 입력가능 범위를 초과 하였습니다. 확인하시기 바랍니다.");
      return;
    }

    // 금액에 대한 합계를 구한다.
    ds_expn.setCellData(i, "amt", ds_expn.getCellData(i, "jan") + ds_expn.getCellData(i, "feb") + ds_expn.getCellData(i, "mar") + ds_expn.getCellData(i, "apr") + ds_expn.getCellData(i, "may") + ds_expn.getCellData(i, "jun") + ds_expn.getCellData(i, "jul") + ds_expn.getCellData(i, "aug") + ds_expn.getCellData(i, "sep") + ds_expn.getCellData(i, "oct") + ds_expn.getCellData(i, "nov") + ds_expn.getCellData(i, "dec"));
  }

  // 엑셀파일 Import가 정상종료시 조회년월,버전에 대한 Hidden값 및 저장가능여부 True로 변경
  ica_fromDate.hidVal = ica_fromDate.getValue();
  ed_sacctDeptCd.hidVal = ed_sacctDeptCd.getValue();
  ds_expn.modifyAllStatus("C");
  totalRows.setValue(ds_expn.getTotalRow());
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.wrkNo = "CO41";
  scwin.fromDate = ica_fromDate.getValue().trim() + "00";
};

/**
 * Row의 값이 변경될경우 합계를 다시 계산한다.
 */
scwin.f_ReSum = function (row) {
  // 금액에 대한 합계를 구한다.
  ds_expn.setCellData(row, "amt", Number(ds_expn.getCellData(row, "jan")) + Number(ds_expn.getCellData(row, "feb")) + Number(ds_expn.getCellData(row, "mar")) + Number(ds_expn.getCellData(row, "apr")) + Number(ds_expn.getCellData(row, "may")) + Number(ds_expn.getCellData(row, "jun")) + Number(ds_expn.getCellData(row, "jul")) + Number(ds_expn.getCellData(row, "aug")) + Number(ds_expn.getCellData(row, "sep")) + Number(ds_expn.getCellData(row, "oct")) + Number(ds_expn.getCellData(row, "nov")) + Number(ds_expn.getCellData(row, "dec")));
};

/**
 * 마감체크
 */
scwin.f_JobCloseYN = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  /**
   * @param  : pReqKind  : 마감요청구분("PRE":선행마감체크, "CUR":작업마감체크)
   *           pCloseYM  : 마감년월(YYYYMM, MM이 '00'이 들어가는 경우는 년,월 마감일경우)
   *           pCloseDD  : 마감일 | 마감주기 (Y)년마감   : 00
   *                                     (H)반기마감 : 1:전기, 2:후기
   *                                     (Q)분기마감 : 1,2,3,4
   *                                     (M)월마감   : 00
   *                                     (W)주마감   : 1,2,3,4,5
   *                                     (D)일마감   : 해당일(01~31)
   *           pWorkNo   : 작업번호
   *           pMgntNo   : 관리번호(Default : "0")
   *           pRtnKind  : DAY:마감일리턴, ARR:결과를배열로, null:마감여부 결과리턴
   *           pDualChkYN: 작업마감체크기(CUR) 선행마감까지 체크를 할것인가 여부 Y:체크함
   *           pCoCd     : 회사코드
   *
   * @return : 0     : 마감중
   *           1     : 미마감
   *           2     : 마감완료
   *           DNF   : Data Not Found
   *           null  : 파라메터 오류
   *           마감일 : 리턴구분이 "DAY" 일경우(YYYYMMDD)
   *           ArrayObj : 리턴구분이 "ARR" 일경우 (리턴코드,작업번호,작업명,CUR or PRE)
   *           리턴구분이 DAY,ARR이 아닌경우 선행마감이 안된경우 (P0:마감중,P1:미마감 리턴함)
   */
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR").then(function (arrRtn) {
    scwin.isClose = arrRtn;
    //             console.log("부모창 arrRtn : " + arrRtn);
    //             console.log("부모창 scwin.isClose[0] : " + scwin.isClose[0]);
    //             console.log("부모창 scwin.isClose[1] : " + scwin.isClose[1]);
  });

  // 선행마감 작업에 대한 검사
  if (scwin.isClose[3] == "PRE") {
    if (scwin.isClose[0] == "1") {
      await $c.gus.cfAlertMsg($p, "선행작업 " + scwin.isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (scwin.isClose[0] == "0") {
      await $c.gus.cfAlertMsg($p, "선행작업 " + scwin.isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }

  // 해당마감 작업에 대한 검사
  if (scwin.isClose[3] == "CUR") {
    if (scwin.isClose[0] == "0") {
      await $c.gus.cfAlertMsg($p, scwin.isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (scwin.isClose[0] == "2") {
      await $c.gus.cfAlertMsg($p, scwin.isClose[2] + "(이)가 마감완료가 되었습니다.");
      return false;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * 부서별계획배정 마감체크 
 * ASIS 사용안함
 */
scwin.f_JobCloseYN2 = async function () {
  scwin.f_setWrkNoFromDate();
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  /**
   * @param  : pReqKind  : 마감요청구분("PRE":선행마감체크, "CUR":작업마감체크)
   *           pCloseYM  : 마감년월(YYYYMM, MM이 '00'이 들어가는 경우는 년,월 마감일경우)
   *           pCloseDD  : 마감일 | 마감주기 (Y)년마감   : 00
   *                                     (H)반기마감 : 1:전기, 2:후기
   *                                     (Q)분기마감 : 1,2,3,4
   *                                     (M)월마감   : 00
   *                                     (W)주마감   : 1,2,3,4,5
   *                                     (D)일마감   : 해당일(01~31)
   *           pWorkNo   : 작업번호
   *           pMgntNo   : 관리번호(Default : "0")
   *           pRtnKind  : DAY:마감일리턴, ARR:결과를배열로, null:마감여부 결과리턴
   *           pDualChkYN: 작업마감체크기(CUR) 선행마감까지 체크를 할것인가 여부 Y:체크함
   *           pCoCd     : 회사코드
   *
   * @return : 0     : 마감중
   *           1     : 미마감
   *           2     : 마감완료
   *           DNF   : Data Not Found
   *           null  : 파라메터 오류
   *           마감일 : 리턴구분이 "DAY" 일경우(YYYYMMDD)
   *           ArrayObj : 리턴구분이 "ARR" 일경우 (리턴코드,작업번호,작업명,CUR or PRE)
   *           리턴구분이 DAY,ARR이 아닌경우 선행마감이 안된경우 (P0:마감중,P1:미마감 리턴함)
   */
  await udc_cfJobCloseYN.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR").then(function (arrRtn) {
    scwin.isClose = arrRtn;
  });
  if (scwin.isClose[3] == "CUR") {
    if (scwin.isClose[0] != "0" && scwin.isClose[0] != "1") {
      await $c.gus.cfAlertMsg($p, scwin.isClose[2] + "이 마감되어 부서별계획등록을 실행 할 수 없습니다.");
      return false;
    }
    return true;
  }
  return false;
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (gridNm, size) {
//     var strHeight = gridNm.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));
//     intHeight = intHeight + size;
//     if (intHeight > 0) {
//         gridNm.style.height = intHeight + "px";
//     }
// };

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 부서코드(조회) 팝업 호출
*/
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  if (ed_sacctDeptCd.hidVal != ed_sacctDeptCd.getValue()) {
    ed_sacctDeptNm.setValue("");
  }
  // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD');
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};
scwin.udc_sacctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_sacctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD')
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
  }
};
/**
 * 계정코드(조회) 팝업 호출
 */
scwin.udc_smgntAcctCd_onclickEvent = function (e) {
  if (ed_smgntAcctCd.hidVal != ed_smgntAcctCd.getValue()) {
    ed_smgntAcctNm.setValue("");
  }
  // scwin.f_CheckPopUp(ed_smgntAcctCd,ed_smgntAcctNm,'2','CD');
  scwin.f_openPopUp(ed_smgntAcctCd, ed_smgntAcctNm, '2', 'CD');
};
scwin.udc_smgntAcctCd_onviewchangeCodeEvent = function (info) {
  ed_smgntAcctNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_smgntAcctCd.getValue())) {
    // scwin.f_CheckPopUp(ed_smgntAcctCd,ed_smgntAcctNm,'2','CD')
    scwin.f_openPopUp(ed_smgntAcctCd, ed_smgntAcctNm, '2', 'CD');
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 이미지셀 클릭 이벤트
 */
scwin.gr_expn_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_expn.getColumnID(columnIndex);
  let data = ds_expn.getCellData(rowIndex, columnId);
  let ret = gr_expn.getCellReadOnly(rowIndex, columnIndex);
  if (columnId == "mgntAcctCd") {
    if (!ret && !$c.gus.cfIsNull($p, ret)) {
      scwin.f_GridPop(columnId, rowIndex, data, "F");
    }
  }
  return true;
};

/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_expn_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = ds_expn.getRowStatus(rowIndex);
  let ret = false;
  if (status == "C") {
    gr_expn.setCellReadOnly(rowIndex, "mgntAcctCd", false);
  } else if (status == "D") {
    ret = true;
  } else {
    gr_expn.setCellReadOnly(rowIndex, "mgntAcctCd", true);
  }
  //삭제인 경우는 금액 입력불가
  gr_expn.setCellReadOnly(rowIndex, "month", ret);
  for (let j = 9; j <= 20; j++) {
    gr_expn.setCellReadOnly(rowIndex, ds_expn.getColumnID(j), ret);
  }
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_expn_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_expn.getColumnID(columnIndex);
  if (columnId == "mgntAcctCd") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_GridPop(columnId, rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_expn.setCellData(rowIndex, "mgntAcctNm", "");
    }
  }
  // //1월부터 12월까지 값 빈값일때 0으로 처리
  // if(columnId == "jan"
  // || columnId == "feb"
  // || columnId == "mar"
  // || columnId == "apr"
  // || columnId == "may"
  // || columnId == "jun"
  // || columnId == "jul"
  // || columnId == "aug"
  // || columnId == "sep"
  // || columnId == "oct"
  // || columnId == "nov"
  // || columnId == "dec"
  // ) {
  //     if($c.gus.cfIsNull(value)) {
  //         ds_expn.setCellData(rowIndex, columnId, 0);
  //     }
  // }
  //합계를 재계산한다.
  scwin.f_ReSum(rowIndex);
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_expn_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_expn.getColumnID(columnIndex);
  if (columnId == "mgntAcctCd") {
    scwin.oldValue = value;
  }
};

/**
 * 하나의 셀에 대한 값이 변경된 경우 발생
 */
scwin.ds_expn_oncelldatachange = function (info) {
  //합계를 재계산한다.
  scwin.f_ReSum(info.rowIndex);
};

/**
 * 그리드에서 엑셀 업로드 끝난 뒤 발생
 */
scwin.gr_expn_onfilereadend = function (value) {
  // scwin.f_Import();
};
scwin.gr_excel_onfilereadend = function (value) {
  // ds_excel.removeRow(ds_excel.getMatchedIndex("mgntAcctNm", "합계")[0]);
  ds_expn.setJSON(ds_excel.getAllJSON(), false);
  ds_expn.modifyAllStatus("C");
  scwin.f_Import();
};

/**
 * 그리드헤더 클릭
 * TODO : 그리드 checkAlways속성을 flase하면 헤더체크박스 선택 해도 변경안되므로 현재이벤트 사용안해도 됨
 */
scwin.gr_expn_onheaderclick = function (headerId) {
  if (headerId == "chk_all") {
    // console.log("헤더 id : " + headerId);
    // let chkVal = gr_expn.getHeaderValue("chk_all");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:' cal w50',displayFormat:'yyyy',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.planYm',style:'',title:'예산년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sacctDeptCd',code:'acctDeptCd',codeId:'ed_sacctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_sacctDeptCd_onviewchangeCodeEvent',id:'udc_sacctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_sacctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'popup_sacctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo9',style:'',validExpCode:'부서',validTitle:'부서',mandatoryName:'true',validExpName:'부서',class:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_smgntAcctCd',code:'mgntAcctCd',codeId:'ed_smgntAcctCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_smgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_smgntAcctCd_onviewchangeCodeEvent',id:'udc_smgntAcctCd',mandatoryCode:'',maxlengthCode:'7',maxlengthName:'30',name:'mgntAcctNm',nameId:'ed_smgntAcctNm',objTypeCode:'data',objTypeName:'data',popupID:'popup_smgntAcctCd',refDataCollection:'dma_search',selectID:'retrieveAcctCdInfo',style:'',validExpCode:'계정',validTitle:'계정',validExpName:'계정',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_planDcsn',style:'',submenuSize:'auto',ref:'data:dma_search.planDcsn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부서별계획',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'( 단위:천원 )',style:''}},{T:1,N:'w2:udc_topGrdBtn',A:{gridID:'gr_expn',grp:'grd_section1',id:'udc_excel',gridUpYn:'Y',grdUpOpts:'',style:'',templateYn:'N',gridDownFn:'scwin.f_Export',gridUpFn:'scwin.f_excelUpload',btnUser:'N',gridDownUserAuth:'X',gridUpUserAuth:'C'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_expn',id:'gr_expn',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'5',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:ontextimageclick':'scwin.gr_expn_ontextimageclick','ev:oncellclick':'scwin.gr_expn_oncellclick','ev:onafteredit':'scwin.gr_expn_onafteredit',focusMode:'cell',enterKeyMove:'editRight',gridName:'부서별계획','ev:onbeforeedit':'scwin.gr_expn_onbeforeedit',fixedColumnNoMove:'true','ev:onheaderclick':'scwin.gr_expn_onheaderclick',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_all',inputType:'checkbox',style:'',value:' ',width:'30',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'기준월',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서코드',width:'120',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'귀속부서명',width:'120',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'관리계정코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'관리계정명',width:'180',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'1월',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'2월',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'3월',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'4월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'5월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'6월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'7월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'8월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'9월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'10월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'11월',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'12월',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',style:'',value:'',width:'30',trueValue:'T',valueType:'other',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'month',inputType:'select',style:'',value:'',width:'80',mandatory:'true',readOnly:'false',dataType:'number',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeCO027Temp'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'120',mandatory:'true',hidden:'true',hiddenCol:'ture'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',mandatory:'true',hidden:'true',hiddenCol:'ture'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCd',inputType:'textImage',style:'',value:'',width:'120',mandatory:'true',editFormat:'#######'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',style:'',value:'',width:'180',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jan',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'feb',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mar',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'may',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'jun',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'jul',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'aug',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sep',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oct',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'nov',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dec',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'false',maxLength:'10',excelCellType:'number',excelFormat:'#,##0',validator:'scwin.validatorNumber'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'amt_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("amt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'jan_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("jan")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'feb_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("feb")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'mar_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("mar")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'apr_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("apr")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'may_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("may")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'jun_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("jun")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'jul_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("jul")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'aug_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("aug")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sep_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sep")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'oct_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("oct")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'nov_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("nov")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'dec_s1',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dec")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_cancel',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnRowDelYn:'Y',gridID:'gr_expn',rowAddFunction:'scwin.f_AddRow',style:'',rowDelFunction:'scwin.f_DeleteRow',rowDelUserAuth:'D',rowAddUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'w2:udc_comChkRes',A:{style:'width:%; height:px; ;visibility:hidden;',id:'udc_cfJobCloseYN'}},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_Apply',id:'btn_apply',objType:'bSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Confirm',id:'btn_confirm',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_excel',enterKeyMove:'editRight','ev:onafteredit':'scwin.gr_expn_onafteredit','ev:onfilereadend':'scwin.gr_excel_onfilereadend','ev:ontextimageclick':'scwin.gr_expn_ontextimageclick',focusMode:'cell',gridName:'부서별계획',id:'gr_excel',readOnly:'true',rowStatusVisible:'false',style:'display:none',visibleRowNumFix:'true',visibleRowNum:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',style:'',value:'관리계정코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',style:'',value:'관리계정명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column5',inputType:'text',style:'',value:'1월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column7',inputType:'text',style:'',value:'2월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column19',inputType:'text',style:'',value:'3월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column33',inputType:'text',style:'',value:'4월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column31',inputType:'text',style:'',value:'5월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column29',inputType:'text',style:'',value:'6월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column27',inputType:'text',style:'',value:'7월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column25',inputType:'text',style:'',value:'8월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column21',inputType:'text',style:'',value:'9월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column23',inputType:'text',style:'',value:'10월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column35',inputType:'text',style:'',value:'11월',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',style:'',value:'12월',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',editFormat:'#######',id:'mgntAcctCd',inputType:'text',mandatory:'true',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctNm',inputType:'text',mandatory:'true',style:'',textAlign:'left',value:'',width:'180'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jan',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'feb',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'mar',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'apr',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'may',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jun',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'jul',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'aug',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'sep',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'oct',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'nov',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'dec',inputType:'text',maxLength:'10',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}}]}]}]}]}]}]}]}]})