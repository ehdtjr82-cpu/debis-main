/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_18b.xml 59237 bfb6b240c0b4fe580ed6c45da017d86d4d777de931e37853cac2a300f7b70f2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:''}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:''}},{T:1,N:'w2:column',A:{id:'commNm',name:'컨테이너/품명',dataType:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Sz',dataType:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FE',dataType:''}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:''}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발시간',dataType:''}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착시간',dataType:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:''}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'하불임',dataType:''}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'화주명',dataType:''}},{T:1,N:'w2:column',A:{id:'dcPchsAmt',name:'할증',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:''}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위',dataType:''}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branch',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yard',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcht',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcg',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'comm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1From',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1To',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2From',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2To',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3From',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3To',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term4From',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cls',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accfCargoStd',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'term1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty1',name:'name9',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt1',name:'name10',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm1',name:'name11',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty2',name:'name12',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt2',name:'name24',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm2',name:'name13',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty3',name:'name14',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt3',name:'name15',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm3',name:'name16',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty4',name:'name17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt4',name:'name18',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm4',name:'name19',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQtyTotal',name:'name20',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWtTotal',name:'name21',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbmTotal',name:'name22',dataType:'number'}},{T:1,N:'w2:column',A:{id:'TOTAL',name:'name23',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrievePossessionTermEachBulkStockPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockPresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobranCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// scwin.memJson = $c.data.getMemInfo();
// console.log(scwin.memJson);
scwin.cur_unitState = "02"; // 중량 단위
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.onpageload = function () {
  // console.log( $c.num.formatNumber(toFixed(41060000, 3)));

  $c.sbm.execute($p, sbm_lobranCd);
  acb_branch.focus(); //점소 코드에 focus

  scwin.f_UnitChage(1);
  scwin.f_setDefaultData();
  acb_con_accfCargoStd.setSelectedIndex(0);
  rd_cls.setValue(1);
  scwin.f_clsCondRdoShowHide();
};
scwin.onUdcCompleted = function () {};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_setDefaultData();
  scwin.f_columnShowHide();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      udc_comCodeYard.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_comCodeYard.cfCommonPopUp(scwin.udc_comCodeYard_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
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
      , pAllSearch // 전체검색허용여부 ("F")
      , "장치장,장치장코드,장치장명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      // cfSetReturnValue(rtnList, ed_yardCd, txt_yardNm);
      break;
    case 2:
      udc_comCodeClnt.setSelectId("retrieveClntList"); // XML상의 SELECT ID
      udc_comCodeClnt.cfCommonPopUp(scwin.udc_comCodeClnt_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
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
      , pAllSearch // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      udc_comCodeKcg.setSelectId("retrieveKcgInfo"); // XML상의 SELECT ID
      udc_comCodeKcg.cfCommonPopUp(scwin.udc_comCodeKcg_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
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
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      udc_comCodeCommCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_comCodeCommCd.cfCommonPopUp(scwin.udc_comCodeCommCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
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
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      // cfSetReturnValue(rtnList, ed_commCd, txt_commNm);
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 중량단위 바꿨을 때 처리.
//-------------------------------------------------------------------------
scwin.f_UnitChage = async function (flag) {
  // // 벌크일때만....
  var total_cnt = ds_stockPresent.getRowCount();
  var change_unitState = co_acb_unitCd.getValue(); //  "01"-->"TON", "02"-->"KG"

  if (change_unitState == "01") {
    gr_stockPresent.setHeaderValue("stockWt1_header", "중량(Ton)");
    gr_stockPresent.setHeaderValue("stockWt2_header", "중량(Ton)");
    gr_stockPresent.setHeaderValue("stockWt3_header", "중량(Ton)");
    gr_stockPresent.setHeaderValue("stockWt4_header", "중량(Ton)");
    gr_stockPresent.setHeaderValue("stockWtTotal_header", "중량(Ton)");
  } else {
    gr_stockPresent.setHeaderValue("stockWt1_header", "중량(Kg)");
    gr_stockPresent.setHeaderValue("stockWt2_header", "중량(Kg)");
    gr_stockPresent.setHeaderValue("stockWt3_header", "중량(Kg)");
    gr_stockPresent.setHeaderValue("stockWt4_header", "중량(Kg)");
    gr_stockPresent.setHeaderValue("stockWtTotal_header", "중량(Kg)");
  }
  if (flag == 1) {
    0;
    if (change_unitState == "01") {
      for (var i = 0; i < total_cnt; i++) {
        ds_stockPresent.setCellData(i, "stockWt1", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt1") == null ? 0 : String(ds_stockPresent.getCellData(i, "stockWt1")), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt2", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt2") == null ? 0 : String(ds_stockPresent.getCellData(i, "stockWt2")), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt3", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt3") == null ? 0 : String(ds_stockPresent.getCellData(i, "stockWt3")), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWt4", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWt4") == null ? 0 : String(ds_stockPresent.getCellData(i, "stockWt4")), "KG", "TON"));
        ds_stockPresent.setCellData(i, "stockWtTotal", $c.gus.cfConvert2Weight($p, ds_stockPresent.getCellData(i, "stockWtTotal") == null ? 0 : String(ds_stockPresent.getCellData(i, "stockWtTotal")), "KG", "TON"));
      }
    }
    scwin.cur_unitState = change_unitState;
  } else {
    if (scwin.cur_unitState != change_unitState) {
      for (var i = 0; i < total_cnt; i++) {
        // alert(ds_stockPresent.getCellData(i, "stockWt4"));
        if (change_unitState == "01") {
          ds_stockPresent.setCellData(i, "stockWt1", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt1")), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt2", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt2")), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt3", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt3")), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWt4", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt4")), "KG", "TON"));
          ds_stockPresent.setCellData(i, "stockWtTotal", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWtTotal")), "KG", "TON"));
        } else {
          ds_stockPresent.setCellData(i, "stockWt1", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt1")), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt2", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt2")), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt3", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt3")), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWt4", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt4")), "TON", "KG"));
          ds_stockPresent.setCellData(i, "stockWtTotal", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWtTotal")), "TON", "KG"));
        }
      }
      scwin.cur_unitState = change_unitState;
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!$c.gus.cfValidate($p, tb_mainData)) return;
  scwin.f_validateDate();
};

//------------------------------------------------------
// commit 전에  날짜가 잘 들어가 있는지 검사 한다....
//------------------------------------------------------
scwin.f_validateDate = async function () {
  // 보유기간별로 날짜가 들어가 있는지 확인 하는 Flag
  var chFlag = new Array(4);
  for (i = 0; i < 4; i++) chFlag[i] = false;

  // 보유기간 1
  if (ed_term1From.getValue() != '' && ed_term1To.getValue() != '') {
    if (Number(ed_term1From.getValue()) > Number(ed_term1To.getValue())) {
      $c.win.alert($p, "보유기간 1: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term1From.focus();
      return;
    }
    chFlag[0] = true;
  }

  // 보유기간 2
  if (ed_term2From.getValue() != '' && ed_term2To.getValue() != '') {
    if (Number(ed_term2From.getValue().trim()) > Number(ed_term2To.getValue().trim())) {
      $c.win.alert($p, "보유기간 2: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term2From.focus();
      return;
    }
    chFlag[1] = true;
  }

  // 보유기간 3
  if (ed_term3From.getValue() != '' && ed_term3To.getValue() != '') {
    if (Number(ed_term3From.getValue().trim()) > Number(ed_term3To.getValue().trim())) {
      $c.win.alert($p, "보유기간 3: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term3From.focus();
      return;
    }
    chFlag[2] = true;
  }

  // 보유기간 4
  if (ed_term4From.getValue() != '') chFlag[3] = true;

  // 보유기간 1부터 4까지 선행 종료 일자와 후행 시작일자가 중복거나 보유기간이 연속되어 있지 않으면 경고 메시지...
  if (chFlag[0]) {
    if (chFlag[1]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term2From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term2From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[2]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term1To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  if (chFlag[1]) {
    if (chFlag[2]) {
      if (Number(ed_term2To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term2To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  if (chFlag[2]) {
    if (chFlag[3]) {
      if (Number(ed_term3To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term3To.getValue().trim()) != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_setDefaultData = function () {
  ed_term1From.setValue("1");
  ed_term1To.setValue("5");
  ed_term2From.setValue("6");
  ed_term2To.setValue("10");
  ed_term3From.setValue("11");
  ed_term3To.setValue("30");
  ed_term4From.setValue("30");
  acb_con_accfCargoStd.setSelectedIndex(0);
  rd_cls.setValue(1);
  scwin.f_clsCondRdoShowHide();
};

////////////////////////////////////////////////
// radio button이 바뀔 때 마다 일어 나는 Action....
////////////////////////////////////////////////
scwin.f_clsCondRdoShowHide = function () {
  if (rd_cls.getValue() == 1) acb_con_accfCargoStd.setDisabled(true);else if (rd_cls.getValue() == 2) acb_con_accfCargoStd.setDisabled(false);
};

///////////////////////////////////////////////
//  컬럼 Show/Hide....
///////////////////////////////////////////////
scwin.f_columnShowHide = function () {
  // 보유기간 1의 컬럼 상태와 컬럼 이름을 설정한다....
  var term1flg = true;
  if (ed_term1From.getValue() == '' || ed_term1To.getValue() == '') {
    term1flg = false;
  }
  gr_stockPresent.setHeaderValue("term1", ed_term1From.getValue() + " ~ " + ed_term1To.getValue() + " 일");
  gr_stockPresent.setColumnVisible("stockQty1", term1flg);
  gr_stockPresent.setColumnVisible("stockWt1", term1flg);
  gr_stockPresent.setColumnVisible("stockCbm1", term1flg);

  // 보유기간 2의 컬럼 상태와 컬럼 이름을 설정한다....
  var term2flg = true;
  if (ed_term2From.getValue() == '' || ed_term2To.getValue() == '') {
    term2flg = false;
  }
  gr_stockPresent.setHeaderValue("term2", ed_term2From.getValue() + " ~ " + ed_term2To.getValue() + " 일");
  gr_stockPresent.setColumnVisible("stockQty2", term2flg);
  gr_stockPresent.setColumnVisible("stockWt2", term2flg);
  gr_stockPresent.setColumnVisible("stockCbm2", term2flg);

  // 보유기간 3의 컬럼 상태와 컬럼 이름을 설정한다....
  var term3flg = true;
  if (ed_term3From.getValue() == '' || ed_term3To.getValue() == '') {
    term3flg = false;
  }
  gr_stockPresent.setHeaderValue("term3", ed_term3From.getValue() + " ~ " + ed_term3To.getValue() + " 일");
  gr_stockPresent.setColumnVisible("stockQty3", term3flg);
  gr_stockPresent.setColumnVisible("stockWt3", term3flg);
  gr_stockPresent.setColumnVisible("stockCbm3", term3flg);

  // 보유기간 4의 컬럼 상태와 컬럼 이름을 설정한다....
  var term4flg = true;
  if (ed_term4From.getValue() == '') {
    term4flg = false;
  }
  gr_stockPresent.setHeaderValue("term4", ed_term4From.getValue() + " 일 초과");
  gr_stockPresent.setColumnVisible("stockQty4", term4flg);
  gr_stockPresent.setColumnVisible("stockWt4", term4flg);
  gr_stockPresent.setColumnVisible("stockCbm4", term4flg);
};

//-------------------------------------------------------------------------
// 장치장 UDC START
//-------------------------------------------------------------------------
scwin.udc_comCodeYard_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_yardCd.getValue(), ed_yardNm.getValue(), 'T', 'T');
};
scwin.udc_comCodeYard_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_yardCd, ed_yardNm, 1);
};
scwin.udc_comCodeYard_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_yardNm, ed_yardCd, 1, false);
};
scwin.udc_comCodeYard_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_yardCd, ed_yardNm);
};
//-------------------------------------------------------------------------
// 장치장 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화주 UDC START ed_stockClntCd
//-------------------------------------------------------------------------
scwin.udc_comCodeClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_stockClntCd.getValue(), ed_stockClntNm.getValue(), 'T', 'T');
};
scwin.udc_comCodeClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntCd, ed_stockClntNm, 2);
};
scwin.udc_comCodeClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNm, ed_stockClntCd, 2, false);
};
scwin.udc_comCodeClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_stockClntCd, ed_stockClntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화종 UDC START
//-------------------------------------------------------------------------
scwin.udc_comCodeKcg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_kcgCd.getValue(), ed_kcgNm.getValue(), 'T', 'T');
};
scwin.udc_comCodeKcg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_kcgCd, ed_kcgNm, 3);
};
scwin.udc_comCodeKcg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_kcgNm, ed_kcgCd, 3, false);
};
scwin.udc_comCodeKcg_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_kcgCd, ed_kcgNm);
};
//-------------------------------------------------------------------------
// 화종 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명 UDC START
//-------------------------------------------------------------------------
scwin.udc_comCodeCommCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_commCd.getValue(), ed_commNm.getValue(), 'T', 'T');
};
scwin.udc_comCodeCommCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 4);
};
scwin.udc_comCodeCommCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 4, false);
};
scwin.udc_comCodeCommCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_commNm);
};
//-------------------------------------------------------------------------
// 품명 UDC END
//-------------------------------------------------------------------------

scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_stockPresent.getRowCount();
  // 데이터가 의미없는 0만 들어올 경우 삭제...
  for (let i = rowCnt - 1; i >= 0; i--) {
    if (Number(ds_stockPresent.getCellData(i, 'stockQtyTotal').trim()) == 0 && Number(ds_stockPresent.getCellData(i, 'stockWtTotal').trim()) == 0 && Number(ds_stockPresent.getCellData(i, 'stockCbmTotal').trim()) == 0) {
      ds_stockPresent.removeRow(i);
    }
  }

  // ds_stockPresent.reform();
  totalRows.setValue(ds_stockPresent.getRowCount());
  if (ds_stockPresent.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  if (co_acb_unitCd.getValue() == "02") {
    for (let i = 0; i < rowCnt; i++) {
      ds_stockPresent.setCellData(i, "stockWt1", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt1")), "TON", "KG"));
      ds_stockPresent.setCellData(i, "stockWt2", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt2")), "TON", "KG"));
      ds_stockPresent.setCellData(i, "stockWt3", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt3")), "TON", "KG"));
      ds_stockPresent.setCellData(i, "stockWt4", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWt4")), "TON", "KG"));
      ds_stockPresent.setCellData(i, "stockWtTotal", await $c.gus.cfConvert2Weight($p, String(ds_stockPresent.getCellData(i, "stockWtTotal")), "TON", "KG"));
    }
  }
  scwin.f_columnShowHide();
};
scwin.sbm_lobranCd_submitdone = function (e) {
  ds_lobranCd.sort("lobranCd", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
  acb_branch.setValue(scwin.loUpperLobranCd);
};
scwin.rd_cls_onchange = function (info) {
  scwin.f_clsCondRdoShowHide();
};
scwin.co_acb_unitCd_onchange = function (info) {
  scwin.f_UnitChage(2);
};
const toFixed = (number, digits = 1) => {
  let num = typeof number === 'number' ? String(number) : number;
  const pointPos = num.indexOf('.');
  if (pointPos === -1) return Number(num).toFixed(digits);
  const splitNumber = num.split('.');
  const rightNum = splitNumber[1].substring(0, digits);
  return `${splitNumber[0]}.${rightNum}`.padEnd(pointPos + digits + 1, '0');
};
scwin.setDisplayFormat = function (col) {
  return $c.num.formatNumber($p, toFixed(Math.round(col * 100) / 100 / 1000, 3));
};
scwin.setDisplayFormat2 = function (col) {
  return toFixed(Math.round(col * 100) / 100 / 1000, 3);
};
scwin.gr_stockPresent_onheaderclick = function (headerId) {
  // 컬럼 헤더를 클릭 했을때만
  // switch (columnId){
  // 	case 'wrkPlNm':
  // 		ds_stockPresent.SubsumExpr = '5:wrkPlNm';
  // 	break;

  // 	case 'stockClntNm':
  // 		ds_stockPresent.SubsumExpr = '5:stockClntNm';
  // 		gr_stockPresent.ColumnProp('stockClntNm','SubSumText') = " ";
  // 	break;

  // 	case 'kcgNm':
  // 		ds_stockPresent.SubsumExpr = '5:kcgNm';
  // 		gr_stockPresent.ColumnProp('kcgNm','SubSumText') = " ";
  // 	break;

  // 	case 'commNm':
  // 		ds_stockPresent.SubsumExpr = '5:commNm';
  // 		gr_stockPresent.ColumnProp('commNm','SubSumText') = " ";
  // 	break;

  // 	default:
  // 	break;
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branch',search:'start',style:'width: 230px;',submenuSize:'fixed',mandatory:'true',allOption:'',chooseOption:'',ref:'data:dma_stockQuery.branch',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_yardCd',nameId:'ed_yardNm',popupID:'',selectID:'retrieveWrkPlInfo',style:'',validTitle:'',id:'udc_comCodeYard',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'data',maxlengthCode:'6',refDataCollection:'dma_stockQuery',code:'yard','ev:onclickEvent':'scwin.udc_comCodeYard_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeYard_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeYard_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_stockClntCd',nameId:'ed_stockClntNm',popupID:'',selectID:'retrieveClntList',style:'',validTitle:'',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',objTypeName:'data',objTypeCode:'data',id:'udc_comCodeClnt',refDataCollection:'dma_stockQuery',code:'mcht','ev:onclickEvent':'scwin.udc_comCodeClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeClnt_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveKcgInfo',codeId:'ed_kcgCd',validTitle:'',nameId:'ed_kcgNm',style:'',UpperFlagCode:'1',id:'udc_comCodeKcg',objTypeName:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',refDataCollection:'dma_stockQuery',code:'kcg','ev:onclickEvent':'scwin.udc_comCodeKcg_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeKcg_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeKcg_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_commCd',nameId:'ed_commNm',popupID:'',selectID:'retrieveCommInfo',style:'',validTitle:'',id:'udc_comCodeCommCd',UpperFlagCode:'1',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',objTypeName:'data',refDataCollection:'dma_stockQuery',code:'comm','ev:onclickEvent':'scwin.udc_comCodeCommCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeCommCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeCommCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cls',ref:'data:dma_stockQuery.cls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_cls_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'체화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_accfCargoStd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_stockQuery.accfCargoStd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간1 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 40px;text-align: center;',id:'ed_term1From',class:'',objType:'data',allowChar:'0-9',ref:'data:dma_stockQuery.term1From'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'width: 40px;text-align: center;',id:'ed_term1To',class:'',allowChar:'0-9',objType:'data',ref:'data:dma_stockQuery.term1To'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term2From',style:'width: 40px;text-align: center;',objType:'data',allowChar:'0-9',ref:'data:dma_stockQuery.term2From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_term2To',style:'width: 40px;text-align: center;',objType:'data',allowChar:'0-9',ref:'data:dma_stockQuery.term2To'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간3',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term3From',style:'width: 40px;text-align: center;',allowChar:'0-9',ref:'data:dma_stockQuery.term3From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_term3To',style:'width: 40px;text-align: center;',allowChar:'0-9',ref:'data:dma_stockQuery.term3To'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간4 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_term4From',style:'width: 40px;text-align: center;',allowChar:'0-9',ref:'data:dma_stockQuery.term4From'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일 초과',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_acb_unitCd',search:'start',style:'width: 120px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.co_acb_unitCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TON'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KG'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보유기간별 벌크 재고현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"보유기간별 벌크 재고현황.xls","type":"4+8+16"}',gridID:'gr_stockPresent',gridUpYn:'N',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',focusMode:'cell',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_stockPresent_oncellclick','ev:onheaderclick':'scwin.gr_stockPresent_onheaderclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'장치장',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'화주',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'화종',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'품명',width:'160',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'term1',value:'1 ~ 5 일',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'term2',value:'6 ~ 10 일',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'term3',value:'11 ~ 30 일',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term4',inputType:'text',value:'30일 초과',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'TOTAL',inputType:'text',value:'TOTAL',width:'210',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt1_header',value:'중량(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt2_header',value:'중량(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt3_header',value:'중량(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt4_header',value:'중량(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWtTotal_header',value:'중량(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'150',colMerge:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',width:'100',colMerge:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockQty1',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'stockWt1',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number',displayFormatter:'scwin.setDisplayFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockCbm1',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockQty2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'stockWt2',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number',displayFormatter:'scwin.setDisplayFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockCbm2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockQty3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'stockWt3',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number',displayFormatter:'scwin.setDisplayFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCbm3',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty4',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt4',inputType:'',width:'100',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number',displayFormatter:'scwin.setDisplayFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCbm4',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQtyTotal',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'stockWtTotal',displayMode:'label',textAlign:'right',dataType:'bigDecimal',excelCellType:'number',displayFormatter:'scwin.setDisplayFormat',displayFormat:'#,##0.000',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'number',id:'stockCbmTotal',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelCellType:'number',excelFormat:'#,##0.000'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkPlNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column116',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column115',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column112',displayMode:'label',expression:'sum(\'stockQty1\')',textAlign:'right',displayFormat:'#,##0',excelCellType:'n',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column111',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWt1\'))',dataType:'bigDecimal',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column110',displayMode:'label',displayFormat:'#,###.##0',textAlign:'right',expression:'sum(\'stockCbm1\')',dataType:'number',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column109',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty2\')',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column108',value:'소계',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWt2\'))',dataType:'bigDecimal',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column107',displayMode:'label',displayFormat:'#,###.##0',textAlign:'right',expression:'sum(\'stockCbm2\')',dataType:'number',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column106',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty3\')',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column105',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWt3\'))',dataType:'bigDecimal',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column104',displayMode:'label',displayFormat:'#,###.##0',textAlign:'right',expression:'sum(\'stockCbm3\')',dataType:'number',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column103',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'stockQty4\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column102',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWt4\'))',dataType:'bigDecimal',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column101',displayMode:'label',displayFormat:'#,##0.000',textAlign:'right',expression:'sum(\'stockCbm4\')',dataType:'number',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column100',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum(\'stockQtyTotal\')',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column99',displayMode:'label',textAlign:'right',dataType:'bigDecimal',excelFormat:'#,##0.000',expression:'scwin.setDisplayFormat2(sum(\'stockWtTotal\'))',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column98',displayMode:'label',displayFormat:'#,###.##0',textAlign:'right',expression:'sum(\'stockCbmTotal\')',excelCellType:'number',dataType:'number',excelFormat:'#,##0.000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column89',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column85',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockQty1\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column84',value:'',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWt1\'))',excelFormat:'#,##0.000',excelCellType:'number',dataType:'bigDecimal',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column83',value:'0.000',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockCbm1\')',displayFormat:'#,###.##0',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column82',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockQty2\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column81',value:'0.000',displayMode:'label',textAlign:'right',dataType:'bigDecimal',expression:'scwin.setDisplayFormat2(sum(\'stockWt2\'))',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column80',value:'0.000',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockCbm2\')',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column79',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockQty3\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',value:'0.000',displayMode:'label',textAlign:'right',dataType:'bigDecimal',expression:'scwin.setDisplayFormat2(sum(\'stockWt3\'))',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column77',value:'0.000',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockCbm3\')',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column76',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockQty4\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column75',value:'0.000',displayMode:'label',textAlign:'right',dataType:'bigDecimal',expression:'scwin.setDisplayFormat2(sum(\'stockWt4\'))',excelFormat:'#,##0.000',excelCellType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column74',value:'0.000',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockCbm4\')',displayFormat:'#,##0.000',excelFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column73',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockQtyTotal\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column93',value:'0.000',displayMode:'label',textAlign:'right',expression:'scwin.setDisplayFormat2(sum(\'stockWtTotal\'))',dataType:'bigDecimal',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column97',value:'0.000',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'stockCbmTotal\')',displayFormat:'#,###.##0',excelCellType:'number',excelFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})