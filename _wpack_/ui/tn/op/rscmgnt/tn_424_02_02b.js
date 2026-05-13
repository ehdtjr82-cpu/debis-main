/*amd /ui/tn/op/rscmgnt/tn_424_02_02b.xml 52430 72632917b527d924ea1c6691d73968f21da631b45a9c664f5cce90acc09379e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez110Idx',name:'협력차코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_out_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'직영차코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'협력차코드',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'vehclInfoTb',name:'차량기본정보마스터테이블',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'carTypReg',name:'차종(등록증)',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'carTonReg',name:'차톤(등록증)',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'remodelCarTon',name:'개조후차규격',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'carProdDt',name:'차량제작일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'carPrdyr',name:'연식',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'firstRegDt',name:'최초등록일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'singyuDt',name:'신규등록일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'chulcherGubun',name:'출처구분',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'lastOwner',name:'최종소유자(등록증)',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'garage',name:'차고지',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'mileage',name:'주행거리',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'examExpDt',name:'검사유효기간',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'attachReg',name:'압류등록',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'attachClear',name:'압류해제',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'attachDesc',name:'압류내용',dataType:'text',defaultValue:'',length:'2000'}},{T:1,N:'w2:column',A:{id:'attachRegion',name:'압류지역 : 우편번호 창 확인',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'attachStateYn',name:'저당상황 1:저당, 0:비저당',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'attachMortgagee',name:'저당권자',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'carOwner',name:'자동차소유자',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'debtor',name:'채무자',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'attachAmt',name:'저당설정금액',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'attachDt',name:'저당설정일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'paintYn',name:'도색_여부: 1: 도색, 0: 도색안함',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'remodelYn',name:'개조유무',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'sagoDesc',name:'기사사고내역',dataType:'text',defaultValue:'',length:'2000'}},{T:1,N:'w2:column',A:{id:'strikeYn',name:'화물연대가입여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'filepathFront',name:'첨부파일 앞',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'filepathTail',name:'첨부파일 뒤',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'filepathLeft',name:'첨부파일 왼쪽',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'filepathRight',name:'첨부파일 오른쪽',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'filenmFront',name:'첨부파일명 앞',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'filenmTail',name:'첨부파일명 뒤',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'filenmLeft',name:'첨부파일명 좌',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'filenmRight',name:'첨부파일명 우',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'remodelDt',name:'개조일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'화주거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'col6',name:'col6',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'col7',name:'col7',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'col8',name:'col8',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'col9',name:'col9',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'PDA여부',dataType:'text',defaultValue:'',length:'40'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text',defaultValue:'',length:'4000'}},{T:1,N:'w2:column',A:{id:'ez110Idxx',name:'협력차코드',dataType:'text',defaultValue:'',length:'40'}},{T:1,N:'w2:column',A:{id:'tbInfo',name:'TB정보',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'posnTypCd',name:'소유구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'sosok',name:'소속',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'carTonDongbu',name:'규격동부',dataType:'text',defaultValue:'',length:'601'}},{T:1,N:'w2:column',A:{id:'age',name:'나이',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'ageChk',name:'나이체크',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'최대적재량',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'eqTotWt',name:'장비총중량',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'filepathCerti',name:'파일경로거래명세서',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'filenmCerti',name:'파일명거래명세서',dataType:'text',defaultValue:'',length:'50'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vehclAddInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez110Idx',name:'협력차코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclAddInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'col6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'col7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'col8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'col9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'PDA여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'배차차량IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbInfo',name:'TB정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carTonDongbu',name:'규격동부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.rscmgnt.RetrieveLafargeVehiclesEachInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.rscmgnt.SaveLafargeVehiclesEachInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ncall.tn.op.rscmgnt.UpdateLafargeVehiclesEachInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveVehclAddInfo',action:'/ncall.tn.op.rscmgnt.RetrieveLafargeVehiclesAddInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_vehclAddInfo',target:'data:json,{"id":"ds_vehclAddInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveVehclAddInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// [상세보기] 버튼 : tn_424_02_03p 화면 삭제되어 버튼도 삭제

scwin.curDt = $c.date.getServerDateTime($p, "yyyyMM"); //현재일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_adptYm.setValue(scwin.curDt);

  // 공통코드 콤보박스 SET
  const codeOptions = [{
    grpCd: "OP587",
    compID: "lc_branchCd,gr_out:assgnLobranCd"
  },
  //소속지사
  {
    grpCd: "OP588",
    compID: "gr_out:posnTypCd"
  },
  //소유형태
  {
    grpCd: "OP515",
    compID: "gr_out:strikeYn"
  } //화물연대
  ];
  $c.data.setCommonCode($p, codeOptions);

  //입력 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_out);

  //테스트 데이터
  //ica_adptYm.setValue("201607");
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_Retrieve.set("lobranCd", lc_branchCd.getValue());
  dma_Retrieve.set("vehclNo", ed_vehclNm.getValue());
  dma_Retrieve.set("adptYm", ica_adptYm.getValue());
  dma_Retrieve.set("eqCd", "");
  dma_Retrieve.set("ez110Idx", -2);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 3:
      // 차량번호 팝업        
      udc_vehclNo.setSelectId("retrieveLafargeVehicleInfo"); // XML상의 SELECT ID
      udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량,차량코드,차량명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 차량정보            
      udc_comCode1.setSelectId("retrieveLafargeVehicleInfo"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_comCode1_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량,차량코드,차량명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//--------------------------------------------------------------------------------------
// 차량정보 추가 조회 : 소유구분, 소속지점, 월 리스료(누계), 보험료(누계), 정비비(누계), 월매출
//--------------------------------------------------------------------------------------
scwin.f_retrieveVehclAddInfo = function (eqCd, ez110Idx) {
  dma_vehclAddInfo.set("eqCd", eqCd);
  dma_vehclAddInfo.set("ez110Idx", ez110Idx);
  $c.sbm.execute($p, sbm_retrieveVehclAddInfo);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_searchCondition, null);
};

//-------------------------------------------------------------------------
// 그리드 행추가
//-------------------------------------------------------------------------    
scwin.f_addRow = function () {
  let newRow = ds_out.insertRow();
  ds_out.setRowPosition(newRow);
  // 조회조건 값으로 설정 - 배차점소/ 계약 거래처/사고시간 설정
  ds_out.setCellData(ds_out.getRowPosition(), "alloccarBran", lc_branchCd.getValue());
  ds_out.setCellData(ds_out.getRowPosition(), "alloccarBranNm", lc_branchCd.getText());
  ds_out.setCellData(ds_out.getRowPosition(), "delYn", 0); // 삭제여부
  ds_out.setCellData(ds_out.getRowPosition(), "mchtClntNo", "000001"); // 화주명 일단 고정(크나우프)

  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  tbx_totalRows.setValue(ds_out.getRowCount());
};

//-------------------------------------------------------------------------
// 행삭제 
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  if (ds_out.getRowStatus(ds_out.getRowPosition()) == "C") {
    ds_out.removeRow(ds_out.getRowPosition());
  } else {
    ds_out.deleteRow(ds_out.getRowPosition());
  }
  tbx_totalRows.setValue(ds_out.getRowCount());
  $c.gus.cfEnableObjects($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 저장 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  ds_out.setCellData(ds_out.getRowPosition(), "mchtClntNo", "000001"); // 화주명 일단 고정(크나우프)

  let ret = "";
  let cfrm = await $c.win.confirm($p, MSG_CM_CRM_001); //저장하시겠습니까?
  if (cfrm) {
    if (ds_out.getModifiedIndex().length != 0) {
      //validation체크
      let validArray = [{
        id: "eqCd",
        name: "직영차코드",
        mandatory: true,
        key: true
      }, {
        id: "ez110Idx",
        name: "협력차코드",
        mandatory: true,
        key: true
      }];
      ret = await $c.gus.cfValidateGrid($p, gr_out, null, null, validArray, "크나우프차량별현황");
      if (!ret) return;

      //저장
      $c.sbm.execute($p, sbm_save);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["크나우프차량별현황"]); //@은(는) 변경된 사항이 없습니다
    }
  }
};

//-------------------------------------------------------------------------
// 상세보기
//-------------------------------------------------------------------------
scwin.f_Detail = function () {
  if (ds_out.getRowCount() == 0) {
    $c.win.alert($p, "먼저 크나우프차량현황을 조회하세요");
    return;
  }
  if (ds_out.getRowPosition <= -1) {
    $c.win.alert($p, "먼저 상세보기할 차량을 선택하세요.");
    return;
  }
  var eqCd = "";
  var ez110Idx = "";
  eqCd = ds_out.getCellData(ds_out.getRowPosition(), 'eqCd');
  ez110Idx = ds_out.getCellData(ds_out.getRowPosition(), 'ez110Idx');
  let win_url = "/ui//tn/op/rscmgnt/tn_424_02_03p.xml";
  let opts = {
    id: "tn_424_02_03p",
    popupName: "라파즈차량별현황 상세",
    modal: true,
    type: "browserPopup",
    width: 1100,
    height: 650,
    title: "라파즈차량별현황 상세"
  };
  let paramObj = {
    eqCd: eqCd,
    ez110Idx: ez110Idx
  };
  $c.win.openPopup($p, win_url, opts, paramObj);
};

//-------------------------------------------------------------------------
// 이월
//-------------------------------------------------------------------------
scwin.f_UpdateYm = async function () {
  if (!scwin.f_CheckChk()) {
    $c.gus.cfAlertMsg($p, "선택한 정보가 없습니다");
    return;
  }
  if (ds_out.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_005); //변경된 사항이 없습니다.
    return;
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_update);
  }
};

//-------------------------------------------------------------------------
// 그리드 체크표시된 정보가 있는가 확인
//-------------------------------------------------------------------------
scwin.f_CheckChk = function () {
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "T") {
      return true;
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_out.getRowCount();
  let sheetTitle = "크나우프차량별현황";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_out, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
//  파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function (row, clsCd) {
  var argObject = new Object();
  let sFilePath = "";
  let sFileName = "";
  if (clsCd == "C") {
    sFilePath = ds_out.getCellData(row, "fileNmCerti");
    sFileName = ds_out.getCellData(row, "filepathCerti");
  }
  let win_url = "/ui/bp/fbp/bi/vi/ez_104_01_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "첨부파일 등록",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 350,
    title: "첨부파일 등록"
  };
  let paramObj = {
    filePath: sFilePath,
    fileName: sFileName
  };
  let resultList = await $c.win.openPopup($p, win_url, opts, null);
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      if (clsCd == "C") {
        ds_out.setCellData(row, "filepathCerti", resultList[0]);
        ds_out.setCellData(row, "filenmCerti", resultList[1]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 파일 다운로드하기
//-------------------------------------------------------------------------    
scwin.f_Download = function () {
  let clsCd = "";
  let row = ds_out.getRowPosition();
  let colId = gr_out.getFocusedColumnID();
  if (colId == "filenmCerti") {
    clsCd = "C";
  }
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  }
  if (clsCd == "") {
    $c.win.alert($p, "다운로드할 항목을 선택하세요");
    return;
  }
  let fileName = "";
  let filePath = "";
  if (clsCd == "C") {
    fileName = ds_out.getCellData(row, "filenmCerti");
    filePath = ds_out.getCellData(row, "filepathCerti");
  }
  if (filePath.trim().length == 0) {
    $c.win.alert($p, "선택하신 " + row + "행 해당 항목에 파일이 등록되어 있지 않습니다.");
  } else {
    if (filePath.indexOf(".") > 0) {
      // 파일 다운로드
      fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
      $c.gus.cfDownloadFile($p, fileName, filePath);
    }
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 이월 submitdone
//-------------------------------------------------------------------------
scwin.sbm_update_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve()();
};

//-------------------------------------------------------------------------
// 차량정보추가조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveVehclAddInfo_submitdone = function (e) {
  if (ds_vehclAddInfo.getRowCount() > 0) {
    ds_out.setCellData(ds_out.getRowPosition(), 'eqCd', ds_vehclAddInfo.getCellData(0, "col3"));
    ds_out.setCellData(ds_out.getRowPosition(), 'ez110Idx', ds_vehclAddInfo.getCellData(0, "ez110Idx"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col1', ds_vehclAddInfo.getCellData(0, "col1"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col2', ds_vehclAddInfo.getCellData(0, "col2"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col4', ds_vehclAddInfo.getCellData(0, "col4"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col5', ds_vehclAddInfo.getCellData(0, "col5"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col6', ds_vehclAddInfo.getCellData(0, "col6"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col7', ds_vehclAddInfo.getCellData(0, "col7"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col8', ds_vehclAddInfo.getCellData(0, "col8"));
    ds_out.setCellData(ds_out.getRowPosition(), 'col9', ds_vehclAddInfo.getCellData(0, "col9"));
    ds_out.setCellData(ds_out.getRowPosition(), 'pdaYn', ds_vehclAddInfo.getCellData(0, "pdaYn"));
    ds_out.setCellData(ds_out.getRowPosition(), 'posnClsCd', ds_vehclAddInfo.getCellData(0, "posnClsCd"));
    ds_out.setCellData(ds_out.getRowPosition(), 'posnClsNm', ds_vehclAddInfo.getCellData(0, "posnClsNm"));
    ds_out.setCellData(ds_out.getRowPosition(), 'tbInfo', ds_vehclAddInfo.getCellData(0, "tbInfo"));
    ds_out.setCellData(ds_out.getRowPosition(), 'carTonDongbu', ds_vehclAddInfo.getCellData(0, "carTonDongbu"));
  }
};

//-------------------------------------------------------------------------
// 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclNm, 3);
};
scwin.udc_vehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNm, ed_vehclNo, 3, false);
};
scwin.udc_vehclNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, ret, ed_vehclNo, ed_vehclNm);

  //차량번호 차량번호명
  //[0] : 차량단축번호
  //[1] : 차량번호
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehclNo.setValue(rtnList[7]);
    ed_vehclNm.setValue(rtnList[0]);
  } else {
    ed_vehclNo.setValue("");
    ed_vehclNm.setValue("");
  }
};
//-------------------------------------------------------------------------
// 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 검색 버튼 클릭
// ASIS : gr_out OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 2) {
    //차량번호(vehclNo)
    if (gr_out.getCellReadOnly(rowIndex, "vehclNo") == false) {
      scwin.f_openCommonPopUp(5, ds_out.getCellData(rowIndex, 'vehclNo'), '', 'F', 'F', rowIndex);
    }
  } else if (columnIndex == 11) {
    //화물등록증(filenmCerti)
    let data = ds_out.getCellData(rowIndex, "filenmCerti");
    scwin.f_fileSet(rowIndex, "C");
  }
};

//-------------------------------------------------------------------------
// 그리드 차량번호 검색 버튼 콜백
//-------------------------------------------------------------------------
scwin.udc_comCode1_callBackFunc = function (rtnList) {
  //차량번호 차량번호명
  //[0] : 차량단축번호
  //[1] : 차량번호
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_out.setCellData(ds_out.getRowPosition(), 'vehclNo', rtnList[0]);
    ds_out.setCellData(ds_out.getRowPosition(), 'vehclShortCd', rtnList[1]);
    var eqCd = rtnList[1];
    var ez110Idx = rtnList[9];

    // 차량 부가정보 조회
    scwin.f_retrieveVehclAddInfo(eqCd, ez110Idx);
  } else {
    ds_out.setCellData(ds_out.getRowPosition(), 'vehclNo', "");
  }
};

//-------------------------------------------------------------------------
// 크나우프차량별현황 dataList Row 위치 변경 이벤트
// ASIS : ds_out event=OnRowPosChanged(row)
//-------------------------------------------------------------------------
scwin.ds_out_onrowpositionchange = function (info) {
  if (ds_out.getRowStatus(info.newRowIndex) == "C") {
    // Insert
    gr_out.setCellReadOnly(info.newRowIndex, "vehclNo", false);
  } else {
    gr_out.setCellReadOnly(info.newRowIndex, "vehclNo", true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'col5',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_branchCd',objType:'data',ref:'',style:'width:150px;',submenuSize:'auto',sortOption:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_adptYm',pickerType:'dynamic',style:'',title:'적용년월',mandatory:'true',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vehclNo',nameId:'ed_vehclNm',id:'udc_vehclNo',btnId:'btn_vehclNo','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclNo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'크나우프차량별현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',gridID:'gr_out',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"크나우프차량별현황.xlsx","sheetName":"크나우프차량별현황"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'16',visibleRowNumFix:'true',fixedColumn:'4',readOnly:'false','ev:ontextimageclick':'scwin.gr_out_ontextimageclick',rowStatusVisible:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'소속지사',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용월',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'직영차<br>코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'협력차<br>코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'차종<br>(동부) ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'규격<br>(동부) ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'차량총중량<br>(KG)',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'최대적재량<br>(KG)',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'차종<br>(등록증)',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'화물등록증',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'연식',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'나이',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'10년이상여부',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column115',value:'차량제작일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'최초등록일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column111',value:'신규등록일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'출처구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'소유형태',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column103',value:'소속',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'최종소유자<br>(등록증)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'기사이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column118',value:'스마트폰<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column93',value:'차고지',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'도색<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'주행거리<br>(Km)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'검사유효기간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'압류등록<br/>(건)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'압류해제<br/>(건)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'압류내용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column142',value:'압류지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'저당상황',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column138',value:'저당권자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column136',value:'자동차소유자 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'채무자 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column132',value:'차규격<br/>개조후',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column130',value:'저당설정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'저당설정일 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'개조<br>여부  ',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'개조일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column144',value:'기사사고내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'화물연대<br>가입여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'사진<br/>(앞)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column148',value:'사진<br/>(뒤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column152',value:'사진<br/>(좌)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column150',value:'사진<br/>(우)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'화주업체거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column156',value:'파일경로',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column158',value:'첨부파일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column160',value:'차량기본정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column162',value:'관리<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'기타',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'chk',displayMode:'label',readOnly:'false',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'select',textAlign:'left',width:'100',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',width:'100',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptYm',inputType:'calendar',textAlign:'center',width:'100',calendarValueType:'yearMonth',readOnly:'false',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez110Idx',inputType:'text',width:'100',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col7',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqTotWt',inputType:'text',width:'100',textAlign:'center',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'maxShipwgtVol',inputType:'text',textAlign:'center',width:'100',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carTonReg',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'filenmCerti',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carPrdyr',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'age',inputType:'text',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ageChk',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'carProdDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'firstRegDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'singyuDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chulcherGubun',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'posnTypCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sosok',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lastOwner',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col9',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'pdaYn',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장착'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미장착'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'garage',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'paintYn',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'도색'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'도색안함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'도색대상아님'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mileage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'examExpDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'attachReg',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'attachClear',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachDesc',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachRegion',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachStateYn',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachMortgagee',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'carOwner',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debtor',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'remodelCarTon',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachAmt',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'attachDt',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'remodelYn',displayMode:'label',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'축개조'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타개조'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개조안함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'remodelDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sagoDesc',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'strikeYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filenmFront',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filenmTail',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filenmLeft',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filenmRight',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mchtClntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filePath',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fileName',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclInfoTb',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',rowAddFunction:'scwin.f_addRow',gridID:'gr_out',rowDelFunction:'scwin.f_delRow',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_fwrd',style:'',type:'button','ev:onclick':'scwin.f_UpdateYm',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이월'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_downImg',style:'',type:'button','ev:onclick':'scwin.f_Download',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이미지다운'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})