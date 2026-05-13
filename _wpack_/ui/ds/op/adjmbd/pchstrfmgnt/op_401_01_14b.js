/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_14b.xml 44563 d4a0f2809d582c767e90cbd16b736064ddb840168440a4aa15bee2497319a445 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNrmCd',name:'차량규격',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coship',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_coship_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'차량규격',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'dptDstCd',name:'출발권역',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'arvDstCd',name:'도착권역',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'dptDstNm',name:'출발권역명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'arvDstNm',name:'출발권역',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'minimumVolTonCnt',name:'Minimum물량톤수',dataType:'number',defaultValue:'0',length:'15.2'}},{T:1,N:'w2:column',A:{id:'minCalVolTonCnt',name:'정산MIN물량톤수',dataType:'number',defaultValue:'0',length:'15.2'}},{T:1,N:'w2:column',A:{id:'minOdrVolRange',name:'최소오더물량범위',dataType:'number',defaultValue:'0',length:'15.3'}},{T:1,N:'w2:column',A:{id:'maxOdrVolRange',name:'최대오더물량범위',dataType:'number',defaultValue:'0',length:'15.3'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'preDptDstCd',name:'이전출발역권',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'preArvDstCd',name:'이전도착역권',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'preCommCd',name:'이전품명코드',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empty',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'상위코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqNrmCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'코드명'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_eqNrmCd',id:'ldt_eqNrmCd'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveVehiclesEachVolumeAdoptionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_coship","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coship","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCoship',action:'/ds.op.adjmbd.pchstrfmgnt.SaveVehiclesEachVolumeAdoptionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_coship","key":"IN_DS1"}',target:'data:json,{"id":"ds_coship","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCoship_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve2","key":"IN_DS1"},{"id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo1',action:'/cm.zz.RetrieveComboCMD.do?sysCd=EquipmentNonUsableEBC&queryId=retriveKindCodeListCombo',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo2',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo',target:'data:json,{"id":"ds_combo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCombo2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchEqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_eqNrmCd',target:'data:json,{"id":"ds_eqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// ASIS 청구, 정산 컬럼 : maxLenth=15.2 인데 풀로 입력하면 소수점 잘리거나 반올림됨
//       최소오더물량범위, 최대오더물량범위 : maxLenth=15.3 인데 풀로 입력하면 소수점 잘리거나 반올림됨

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.
scwin.olddata = "";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ210",
    compID: "gr_coship:vehclKndCd",
    opt: {
      "range": "1"
    }
  } //장비종류
  ];
  $c.data.setCommonCode($p, codeOptions);
  ica_wrkStDt.setValue(scwin.strCurDate);
  gr_coship.setReadOnly("column", "adptDt", true);
  gr_coship.setReadOnly("column", "clntNm", true);
  gr_coship.setReadOnly("column", "vehclKndCd", true);
  gr_coship.setReadOnly("column", "vehclNrmCd", true);
  scwin.f_comboValue();
  dma_eqNrmCd.set("grpCd", "ZZ208");
  dma_eqNrmCd.set("cd", "");
  dma_eqNrmCd.set("cdNm", "");
  $c.sbm.execute($p, sbm_searchEqNrmCd);
  scwin.f_SetGridColumnMaxLength(gr_coship);

  //테스트 데이터
  // ds_search.set("clntNo", "238975");
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
  //조회
  if (lc_ctrtNo.getValue() == "선택" || $c.util.isEmpty($p, lc_ctrtNo.getValue())) {
    $c.win.alert($p, "계약서를 선택해 주십시요.");
    return;
  }
  ds_search.set("ctrtNo", lc_ctrtNo.getValue()); //계약번호
  ds_search.set("clntNo", ed_clntNo.getValue().trim()); //거래처코드
  ds_search.set("vehclKndCd", acb_con_vehclKnd.getValue()); //차량종류코드
  ds_search.set("vehclNrmCd", acb_con_nrm.getValue()); //규격코드

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //let ret = await $c.gus.cfValidate([gr_coship]);
  let validArray = [{
    id: "adptDt",
    name: "적용일자",
    mandatory: true
  }, {
    id: "clntNm",
    name: "거래처명",
    mandatory: true
  }, {
    id: "vehclKndCd",
    name: "장비종류",
    mandatory: true
  }, {
    id: "vehclNrmCd",
    name: "장비규격",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_coship, null, null, validArray, "물량적용기준등록");
  if (ret) {
    if (lc_ctrtNo.getValue() == "" && ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
      $c.win.alert($p, "계약번호는 필수 입력 사항 입니다.");
      return;
    }
    if (lc_ctrtNo.getValue() == "선택") {
      $c.win.alert($p, "계약서를 선택해 주십시요.");
      return;
    }
    if (ds_coship.getModifiedIndex().length == 0) {
      $c.win.alert($p, "변경된 사항이 없습니다.");
    } else {
      ret = await $c.win.confirm($p, "저장하시겠습니까?");
      if (ret) {
        if (ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
          for (i = 0; i < ds_coship.getRowCount(); i++) {
            ds_coship.setCellData(i, "ctrtNo", lc_ctrtNo.getValue());

            //jisoo,20150729 조원철과장 요청 필수값 제거 및 디폴드값 입력
            if (ds_coship.getCellData(i, "dptDstCd") == "") ds_coship.setCellData(i, "dptDstCd", "ZZZ");
            if (ds_coship.getCellData(i, "arvDstCd") == "") ds_coship.setCellData(i, "arvDstCd", "ZZZ");
            if (ds_coship.getCellData(i, "commCd") == "") ds_coship.setCellData(i, "commCd", "99999999");
          }
        }
        $c.sbm.execute($p, sbm_saveCoship);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 차량종류 검색
//-------------------------------------------------------------------------
scwin.f_comboValue = function () {
  dma_combo.setEmptyValue();
  dma_combo.set("sysCd", "EquipmentNonUsableEBC");
  dma_combo.set("queryId", "retriveKindCodeListCombo");
  $c.sbm.execute($p, sbm_searchCombo1);
};

//-------------------------------------------------------------------------
// 차량종류 규격 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  dma_combo.setEmptyValue();
  dma_combo.set("sysCd", "EquipmentNonUsableEBC");
  dma_combo.set("queryId", "retrivecComboNrmCodeList");
  dma_combo.set("param1", param1);
  $c.sbm.execute($p, sbm_searchCombo2);
};

//-------------------------------------------------------------------------
// 조회조건 데이터를 초기화 한다
//-------------------------------------------------------------------------
scwin.f_initData = function () {
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  lc_ctrtNo.setSelectedIndex(-1);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  var param;
  var ctrtNoVal = "";
  var rowNum = ds_coship.getRowPosition();
  switch (disGubun) {
    case 1:
      //계약거래처

      //그리드 계약거래처 번호로 검색 한경우
      if (pCode == "clntNm") {
        udc_comCode1.setSelectId("retrieveClntList"); // XML상의 SELECT ID
        udc_comCode1.cfCommonPopUp(scwin.udc_gr_clntNm_callBackFunc // 콜백 함수
        , "" // 화면에서의 ??? Code Element의 Value
        , pName // 화면에서의 ??? Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , "150,170" // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",S" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "440" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
      } else {
        //계약거래처 명으로 검색 한 경우
        udc_comCode1.setSelectId("retrieveClntList"); // XML상의 SELECT ID
        udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc // 팝업 콜
        , pCode // 화면에서의 ??? Code Element의 Value
        , pName // 화면에서의 ??? Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , "150,170" // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",S" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "440" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
      }
      break;
    case 2:
      /* ASIS 사용안되는것 같음
      //품명조회(조회조건)
      param = "2,4,,," + ed_clntNo.getValue();
       rtnList = cfCommonPopUp('retrieveCommInfo',
          "",
          pName,
          pClose,
          '3',
          "품목／품명코드,품목／품명,구분",
          '120,170,70',
          '4,5,6,7,8,9,10',
          param,
          '440',
          '500',
          null,
          null,
          null,
          null,
          "품목／품명,품목／품명코드,품목／품명");
       $c.gus.cfSetReturnValue(rtnList, ed_commCd, txt_commNm);
      */

      break;
    case 3:
      //그리드 품명조회
      param = "2,4,,,"; //+ ed_clntNo.getValue(); //20180222 이거들어가면쿼리가이상해서 빼버림

      udc_comCode1.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_gr_commNm_callBackFunc,
      // 콜백 함수
      "", pName, pClose, '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      break;
    case 4:
      //그리드 출발권역
      ctrtNoVal = lc_ctrtNo.getValue();
      param = ",,WDE";
      if (ctrtNoVal != "") {
        param = ",," + ctrtNoVal;
      } else {
        $c.win.alert($p, "계약서번호를 선택하세요");
        return;
      }
      udc_comCode1.setSelectId("retrieveDistrictList2"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_gr_dptDstNm_callBackFunc,
      // 콜백 함수
      "", pName, pClose, null, null, null, null, param, '440', '500', null, null, null, "T", "출발지,출발지코드,출발지명");
      break;
    case 5:
      //도착권역
      ctrtNoVal = lc_ctrtNo.getValue();
      param = ",,WDE";
      if (ctrtNoVal != "") {
        param = ",," + ctrtNoVal;
      } else {
        $c.win.alert($p, "계약서번호를 선택하세요");
        return;
      }
      udc_comCode1.setSelectId("retrieveDistrictList2"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_gr_arvDstNm_callBackFunc,
      // 콜백 함수
      "", pName, pClose, '3', "도착지코드,도착지명", '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, null, "도착지,도착지코드,도착지명");
      break;
    default:
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
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 차량종류 콤보 이벤트
//-------------------------------------------------------------------------
scwin.acb_con_vehclKnd_onviewchange = function (info) {
  scwin.f_RetrieveSecond(acb_con_vehclKnd.getValue());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  //$c.data.dataListFilter(ds_eqNrmCd, "upperCd==''");
  $c.data.dataListFilter($p, ldt_eqNrmCd, "upperCd==''");
  tbx_totalRows.setValue(ds_coship.getRowCount());
};

//-------------------------------------------------------------------------
// 차량규격별 물량적용기준정보저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveCoship_submitdone = function (e) {
  $c.win.alert($p, "성공적으로 저장되었습니다.");
  if (ds_coship.getRowCount() > 0) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 차량규격별 물량적용기준정보조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve2_submitdone = function (e) {
  ds_emp2.sort("ctrtNo", 1);
  lc_ctrtNo.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 계약거래처 UDC START
//-------------------------------------------------------------------------
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue().trim(), ed_clntNm.getValue().trim(), 'F', 'T');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() == "") return;
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue().trim(), ed_clntNm.getValue().trim(), 'T', 'T');
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue().trim(), ed_clntNm.getValue().trim(), 'F', 'T');
};
scwin.udc_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
  if (ret != null) {
    ds_retrieve2.setEmptyValue();
    ds_retrieve2.set("ctrtClntNo", ret[0]); //화주코드 bilgMchtCd

    $c.sbm.execute($p, sbm_retrieve2);
  }
};
//-------------------------------------------------------------------------
// 계약거래처 UDC END
//-------------------------------------------------------------------------

scwin.sbm_searchCombo2_submitdone = function (e) {
  if (ds_combo2.getRowCount() > 0) {
    ds_combo2.insertRow(0);
    ds_combo2.setCellData(0, "name", "전체");
    acb_con_nrm.setDelimiter("");
  }
};

//-------------------------------------------------------------------------
// 그리드 행추가 
//-------------------------------------------------------------------------
scwin.insertRow = function () {
  $c.data.insertRow($p, gr_coship);
  ds_coship.setCellData(ds_coship.getRowPosition(), "adptDt", ica_wrkStDt.getValue());
};

//-------------------------------------------------------------------------
// 그리드 행삭제
//-------------------------------------------------------------------------
scwin.deleteRow = function () {
  let pos = ds_coship.getRowPosition();
  let colid = gr_coship.getFocusedColumnID();
  var focusedRows = gr_coship.getAllFocusedRowIndex();
  for (var i = focusedRows.length - 1; i >= 0; i--) {
    if (ds_coship.getRowStatus(focusedRows[i]) == "C") {
      ds_coship.removeRow(focusedRows[i]);
    } else {
      ds_coship.deleteRow(focusedRows[i]);
    }
  }
  // if (ds_coship.getRowCount() > 0 && pos <= ds_coship.getRowCount() -1) {
  //     gr_coship.setFocusedCell(pos, colid, false);
  // }
};

//-------------------------------------------------------------------------
// 그리드 행취소
//-------------------------------------------------------------------------
scwin.cancelRow = function () {
  let cnt = ds_coship.getRowCount() - 1;
  let pos = ds_coship.getRowPosition();
  let colid = gr_coship.getFocusedColumnID();
  if (ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
    ds_coship.removeRow(ds_coship.getRowPosition());
  } else {
    ds_coship.undoRow(ds_coship.getRowPosition());
  }
  if (pos == cnt) {
    // 마지막 ROW일경우는 포커스를 이전행으로 위치시킨다.
    gr_coship.setFocusedCell(cnt - 1, colid, false);
  } else if (ds_coship.getRowCount() > 0) {
    gr_coship.setFocusedCell(pos, colid, false);
  }
};

//-------------------------------------------------------------------------
// 데이터셋 onrowpositionchange(ASIS : OnRowPosChanged)
//-------------------------------------------------------------------------
scwin.ds_coship_onrowpositionchange = function (info) {
  if (ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
    gr_coship.setReadOnly("column", "clntNm", false);
    gr_coship.setReadOnly("column", "commNm", false);
    gr_coship.setReadOnly("column", "vehclKndCd", false);
    gr_coship.setReadOnly("column", "vehclNrmCd", false);
  } else {
    gr_coship.setReadOnly("column", "adptDt", true);
    gr_coship.setReadOnly("column", "clntNm", true);
    gr_coship.setReadOnly("column", "vehclKndCd", true);
    gr_coship.setReadOnly("column", "vehclNrmCd", true);
  }
};
scwin.gr_coship_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};

//-------------------------------------------------------------------------
// 그리드 편집모드 종료
// ASIS : gr_coship event=OnExit(row,colid,olddata)
//        gr_coship event=OnCloseUp(row,colid)
//------------------------------------------------------------------------
scwin.gr_coship_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_coship.getColumnID(columnIndex);
  let row = rowIndex;
  switch (colid) {
    case "clntNm":
      if (ds_coship.getCellData(row, colid) == "") {
        ds_coship.setCellData(row, "clntNo", ""); // ASIS 오류 수정
      } else {
        if (ds_coship.getCellData(row, colid) != scwin.olddata) scwin.f_openCommonPopUp(1, colid, ds_coship.getCellData(ds_coship.getRowPosition(), "clntNm"), 'F', 'T');
      }
      break;
    case "dptDstNm":
      if (ds_coship.getCellData(row, colid) == "") {
        ds_coship.setCellData(row, "dptDstCd", "");
      } else {
        if (ds_coship.getCellData(row, colid) != scwin.olddata) scwin.f_openCommonPopUp(4, colid, ds_coship.getCellData(ds_coship.getRowPosition(), "dptDstNm"), 'F', 'T');
      }
      break;
    case "arvDstNm":
      if (ds_coship.getCellData(row, colid) == "") {
        ds_coship.setCellData(row, "arvDstCd", "");
      } else {
        if (ds_coship.getCellData(row, colid) != scwin.olddata) scwin.f_openCommonPopUp(5, colid, ds_coship.getCellData(ds_coship.getRowPosition(), "arvDstNm"), 'F', 'T'); // ASIS 오류 수정
      }
      break;
    case "commNm":
      if (ds_coship.getCellData(row, colid) == "") {
        ds_coship.setCellData(row, "commCd", "");
      } else {
        if (ds_coship.getCellData(row, colid) != scwin.olddata) scwin.f_openCommonPopUp(3, colid, ds_coship.getCellData(ds_coship.getRowPosition(), "commNm"), 'F', 'T');
      }
      break;
    case "vehclKndCd":
      //ds_eqNrmCd.removeColumnFilterAll();
      //$c.data.dataListFilter(ds_eqNrmCd, "upperCd=='" + value + "'");
      ldt_eqNrmCd.setCondition("filter", "upperCd==ref('ds_coship.vehclKndCd')");
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
// ASIS : gr_coship event=OnPopup(Row,Colid,data)
//-------------------------------------------------------------------------
scwin.gr_coship_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_coship.getColumnID(columnIndex);
  let readOnlyYn = gr_coship.getReadOnly("column", columnIndex);
  if (readOnlyYn) return; // readOnly 팝업 열지 않기

  if (Colid == "clntNm") {
    scwin.f_openCommonPopUp(1, "clntNm", ds_coship.getCellData(rowIndex, "clntNm"), 'F', 'T');
  } else if (Colid == "commNm") {
    scwin.f_openCommonPopUp(3, "", ds_coship.getCellData(rowIndex, "commNm"), 'F', 'T');
  } else if (Colid == "dptDstNm") {
    scwin.f_openCommonPopUp(4, "", ds_coship.getCellData(rowIndex, "dptDstNm"), 'F', 'T');
  } else if (Colid == "arvDstNm") {
    scwin.f_openCommonPopUp(5, "", ds_coship.getCellData(rowIndex, "arvDstNm"), 'F', 'T');
  }
};

//-------------------------------------------------------------------------
// 그리드 거래처명 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_clntNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "clntNo", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "clntNm", ret[1]);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 출발권역 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_dptDstNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "dptDstCd", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "dptDstNm", ret[1]);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 도착권역 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_arvDstNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "arvDstCd", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "arvDstNm", ret[1]);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 품명 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_commNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "commCd", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "commNm", ret[1]);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntListPopup',style:'',codeId:'ed_clntNo',mandatoryCode:'true',nameId:'ed_clntNm',id:'udc_clnt',maxlengthCode:'6',refDataCollection:'ds_search',code:'clntNo',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',title:'계약서',mandatory:'true',ref:'data:ds_search.ctrtNo',appearance:'minimal',disabledClass:'w2selectbox_disabled',style:'width: 150px;',disabled:'false',id:'lc_ctrtNo',class:'',direction:'auto',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_emp2',width:'950',selectedRowColor:'',label:'ctrtNo',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_vehclKnd',search:'contain',style:'width:150px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_con_vehclKnd_onviewchange',ref:'data:ds_search.vehclKndCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',searchTarget:'value',delimiter:':'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_nrm',search:'contain',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.vehclNrmCd',allOption:'',chooseOption:'',searchTarget:'both',delimiter:':'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_initData'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"차량규격별물량적용기준.xlsx","sheetName":"차량규격별물량적용기준","type":"4+8+16"}',gridUpYn:'N',gridID:'gr_coship',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_coship',id:'gr_coship',style:'',rowStatusVisible:'true','ev:oneditend':'scwin.gr_coship_oneditend',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_coship_ontextimageclick','ev:onafteredit':'scwin.gr_coship_onafteredit','ev:onbeforeedit':'scwin.gr_coship_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계약번호',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적용일자',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처번호',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'장비종류',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'장비규격',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출발권역명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출발권역',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착권역명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'도착권역',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'품명코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'이전품명코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'이전출발역권',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'이전도착역권',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',value:'Minimum물량톤수',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'최소오더물량범위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'최대오더물량범위',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',value:'청구'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'정산',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',mandatory:'true',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKndCd',inputType:'select',width:'100',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrmCd',inputType:'select',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDstNm',inputType:'textImage',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDstCd',inputType:'text',width:'100',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDstNm',inputType:'textImage',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDstCd',inputType:'text',width:'100',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'commNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'preCommCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'preDptDstCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'preArvDstCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'minimumVolTonCnt',displayMode:'label',textAlign:'center',displayFormat:'##0.00',dataType:'float',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'minCalVolTonCnt',displayMode:'label',textAlign:'center',dataType:'float',displayFormat:'##0.00',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'minOdrVolRange',displayMode:'label',dataType:'float',displayFormat:'##0.000',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'maxOdrVolRange',displayMode:'label',dataType:'float',displayFormat:'##0.000',allowChar:'0-9.'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_coship',id:'udc_coship',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',rowDelFunction:'scwin.deleteRow',rowAddFunction:'scwin.insertRow',cancelFunction:'scwin.cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})