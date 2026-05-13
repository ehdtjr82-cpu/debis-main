/*amd /ui/ds/op/adjmbd/wageadjmproc/op_403_01_23b.xml 84648 f6424899e75e02eabc0ab75c663e311d29712de5aacc01e05485b782a522e080 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wageFoundTariff_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wagePattern',name:'노임유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wageFoundTariff',saveRemovedData:'true','ev:ondataload':'scwin.ds_wageFoundTariff_ondataload','ev:onrowpositionchange':'scwin.ds_wageFoundTariff_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_wageFoundTariff_onbeforerowpositionchange','ev:oncelldatachange':'scwin.ds_wageFoundTariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scDtlSeqNo',name:'할증상세일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlItemNm',name:'상세항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStdGoods',name:'적용기준품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStdGoodsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtTenfrAdptSt',name:'중량장척적용시작',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wtTenfrAdptEnd',name:'중량장척적용종료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkMthdCd',name:'작업방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslWharfPartyCnt',name:'본선선창반수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'seaWrkYn',name:'해상작업여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scWtAdptStd',name:'할증중량적용기준',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptTermSprtYn',name:'적용기간별도여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptTermStDt',name:'적용기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTermEndDt',name:'적용기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPl',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTonCnt',name:'적용톤수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'basisUnitCd',name:'기본단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'std',name:'기준',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wageItemDistrict',saveRemovedData:'true','ev:ondataload':'scwin.ds_wageItemDistrict_ondataload','ev:onrowpositionchange':'scwin.ds_wageItemDistrict_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_wageItemDistrict_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'goodsCdAdptYn',name:'품목코드적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pepAdptYn',name:'기력적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkMthdAdptYn',name:'작업방법적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptTermYn',name:'적용기간여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wtAdptYn',name:'중량적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wtStdYn',name:'중량기준여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlDsgYn',name:'작업장지정여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlPosAdptYn',name:'작업장위치적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptTonCntYn',name:'적용톤수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dupPattern',name:'중복유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsAdptYn',name:'수출입구분적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslStucAdptYn',name:'선박구조적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wholeWrkStpYn',name:'일괄작업단계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retroactUnsettledMgntYn',name:'소급미확정관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoReflectYn',name:'자동반영여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'uprAdptStd',name:'단가적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyAdptYn',name:'FULL/EMPTY적용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dupPattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dupPattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wageFoundTariff_retrieve',action:'/ds.op.adjmbd.wageadjmproc.RetrieveWagesFoundationTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_wageFoundTariff_con","key":"IN_DS1"},{"id":"ds_wageFoundTariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wageFoundTariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wageFoundTariff_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wageItemDistrict_retrieve',action:'/ds.op.adjmbd.wageadjmproc.RetrieveWagesItemDistrictEachCharacterCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_wageFoundTariff_con","key":"IN_DS1"},{"id":"ds_wageItemDistrict","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wageItemDistrict","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wageItemDistrict_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wageFoundTariff_save',action:'/ds.op.adjmbd.wageadjmproc.SaveWagesFoundationTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_wageFoundTariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wageFoundTariff_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dupPattern',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_dupPattern","key":"IN_DS1"}',target:'data:json,{"id":"ds_dupPattern","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
 * 화 면 명 : 노임제반요율등록
 * 메뉴경로 : 물류(D)/하역(부두,장치장)/노임제반요율등록
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ds/op/adjmbd/wageadjmproc/op_403_01_23b.jsp
 * 작 성 자 : 박원
 * 작 업 일 : 2026-03-23
  * 수정이력 :
 *    - 2026-03-23      박원      최초작성
 *    - 2026-04-20      이진우    T-5677 결함 : 상세요율 금액이나 요율은 둘중에 하나만 입력 메세지오픈
 *                                            : 금액 널 일 경우 0,적용종료일 99999999 허용
 *    - 2026-04-23      이진우    T-7308 결함처리
 *    - 2026-05-04  	주혜원    T-7712 결함처리 : 품목일괄생성(f_DtUdate)시, ds_wageFoundTariff rowStatus 조건값 수정 
 *    - 2026-05-12  	주혜원    T-7999 결함처리 : gr_wageFoundTariff onafteredit > onbeforeedit 수정
 */
/*
GauceUtil.getLuxeComboData("GoodsSurchargeWorkStepEBC", "retriveDistrictCodeList")
lc_districtCd.index   = lc_districtCd.IndexOfColumn("code", districtCd);
-> 처리안됨

$c.gus.cfEnableObjects([udc_btn]); -> enable 적용 안되서 $c.gus.cfDisableObjects([udc_btn]); -> 임시 주석 처리
*/
scwin.MSG_OP_WRN_001 = "금액이나 요율은 둘중에 하나만 입력되어야 합니다.";
scwin.pos_groupCode = 0;
scwin.districtCd = "";
scwin.saveYn = "N";
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate();
; // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  scwin.districtCd = memJson.districtCd;
  const codeOptions = [{
    grpCd: "LO102",
    compID: "gr_wageFoundTariff:basisUnitCd",
    opt: {
      "range": "2,L"
    }
  }, {
    grpCd: "OP283",
    compID: "gr_wageFoundTariff:eqClssCd"
  }, {
    grpCd: "OP241",
    compID: "gr_wageFoundTariff:wrkMthdCd"
  }, {
    grpCd: "OP277",
    compID: "gr_wageFoundTariff:fullEmptyClsCd"
  }, {
    grpCd: "OP279",
    compID: "lc_uprAdptStd"
  }, {
    grpCd: "OP255",
    compID: "lc_wagePattern"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "GoodsSurchargeWorkStepEBC",
    param2: "retriveDistrictCodeList",
    //param3: ["CMP"],
    compID: "lc_districtCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    udc_pubCd.hide();
    lc_districtCd.index = 0;
    var districtCd = scwin.districtCd;
    if (districtCd != null && districtCd != "") {
      lc_districtCd.setValue(districtCd);
    } else {
      lc_districtCd.setSelectedIndex(-1);
    }

    //scwin.f_SetDataHeader();
    scwin.f_SetDefaultData();
    scwin.f_RetrieveDupPattern();
    scwin.f_newDt(1);
  }, {
    "delay": 200
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  var districtCd = scwin.districtCd;

  //lc_districtCd.index   = lc_districtCd.IndexOfColumn("code", districtCd);
  //$c.gus.cfDisableObjects([btn_addrow, btn_deleterow, btn_save, btn_update]);

  //ljw_20260420_start, 아래살리면 버튼상태가 asis와 다름 그래서 막음
  //lc_districtCd.setValue(districtCd);
  //$c.gus.cfDisableObjects([udc_btn, btn_save, btn_update]);
  //ljw_20260420_end

  lc_dt.setValue(2);
  lc_districtCd.setSelectedIndex(-1);
  lc_districtCd.focus();
};

/*
//-------------------------------------------------------------------------
// DataSet의 Header 정보 생성
//-------------------------------------------------------------------------
scwin.f_SetDataHeader = function () {
    // 일용요율목록 조회조건 DataSet Header 초기화
    var GAUCE_DATASET_HEADER = "districtCd:STRING(3)"                 // 권역코드
                                + ",wagePattern:STRING(1)"               // 노임유형
                                + ",selpchItemCd:STRING(4)"              // 할증코드
                                + ",wageAgrmntDt:STRING(8)"              // 협약일자
                                + ",selpchItemSeq:DECIMAL(5)"              // 할증코드
                                + ",adptDt:STRING(8)";                   // 적용일자

    ds_wageFoundTariff_con.SetDataHeader(GAUCE_DATASET_HEADER);
    ds_wageFoundTariff_con.AddRow();
}
*/

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_wageFoundTariff.insertRow();
  //ds_wageFoundTariff.setRowPosition(ds_wageFoundTariff.getRowCount()-1);
  gr_wageFoundTariff.setFocusedCell(ds_wageFoundTariff.getRowCount() - 1, 0);
  ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "districtCd", ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "districtCd")); // 권역코드
  ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "selpchItemCd", ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "selpchItemCd")); // 할증코드
  ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "selpchItemSeq", ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "selpchItemSeq")); // 할증순번
  ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "adptEndDt", "99999999");
  ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "basisUnitCd", "TON"); // 단위구분

  scwin.f_changeEdiable(ds_wageFoundTariff.getRowPosition());
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (lc_districtCd.getValue() == "" || lc_districtCd.getValue() == null) {
    await $c.win.alert($p, "권역코드는 필수 입력 항목입니다.");
    lc_districtCd.focus();
    return;
  }

  //var chk = $c.gus.cfValidate([lc_districtCd,ica_wageAgrmntDt,ica_adptDt]);
  /*
  var chk = $c.gus.cfValidate([ica_wageAgrmntDt,ica_adptDt]);
  if (!chk) {
      return;
  }
  */

  dma_wageFoundTariff_con.set("districtCd", lc_districtCd.getValue());
  dma_wageFoundTariff_con.set("wagePattern", lc_wagePattern.getValue());
  dma_wageFoundTariff_con.set("selpchItemCd", ed_selpchItemCd.getValue());
  ds_wageItemDistrict.setEventPause("", true);
  ds_wageItemDistrict.removeAll();
  ds_wageItemDistrict.setEventPause("", false);
  ds_wageFoundTariff.removeAll();
  $c.sbm.execute($p, sbm_wageItemDistrict_retrieve);
};

//-------------------------------------------------------------------------
// 상세요율 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveFoundTariff = function (row) {
  dma_wageFoundTariff_con.set("districtCd", ds_wageItemDistrict.getCellData(row, "districtCd")); // 권역코드
  dma_wageFoundTariff_con.set("selpchItemCd", ds_wageItemDistrict.getCellData(row, "selpchItemCd")); // 노임항목
  dma_wageFoundTariff_con.set("selpchItemSeq", ds_wageItemDistrict.getCellData(row, "selpchItemSeq")); // 노임항목순번
  dma_wageFoundTariff_con.set("adptDt", ica_adptDt.getValue()); //적용일자
  dma_wageFoundTariff_con.set("wageAgrmntDt", ica_wageAgrmntDt.getValue()); //협약일자

  //tr_wageFoundTariff_retrieve.Action = "/ds.op.adjmbd.wageadjmproc.RetrieveWagesFoundationTariffCMD.do";
  //tr_wageFoundTariff_retrieve.Post();
  $c.sbm.execute($p, sbm_wageFoundTariff_retrieve);
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var chkGrd = await $c.gus.cfValidate($p, [gr_wageFoundTariff]);
  if (!chkGrd) return;
  if (ds_wageFoundTariff.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["노임제반요율등록"]); //변경된 정보가 없습니다.
  } else {
    var chkAlert = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chkAlert) {
      // 저장하시겠습니까?
      scwin.pos_groupCode = ds_wageItemDistrict.getRowPosition();
      if (ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "goodsCdAdptYn") == 0 || ds_wageFoundTariff.getCellData(ds_wageFoundTariff.getRowPosition(), "goodsCd") == "") {
        ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "goodsCd", "0");
      }
      if (ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "pepAdptYn") == 0 || ds_wageFoundTariff.getCellData(ds_wageFoundTariff.getRowPosition(), "eqClssCd") == "") {
        ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "eqClssCd", "0");
      }
      if (ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wrkMthdAdptYn") == 0 || ds_wageFoundTariff.getCellData(ds_wageFoundTariff.getRowPosition(), "wrkMthdCd") == "") {
        ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "wrkMthdCd", "0");
      }
      if (ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "expimpClsAdptYn") == 0) {
        ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "expimpClsCd", "0");
      }
      if (ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "fullEmptyAdptYn") == 0) {
        ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowPosition(), "fullEmptyClsCd", "0");
      }

      //tr_wageFoundTariff_save.Post();
      scwin.saveYn = "Y";
      //alert("f_Save saveYn : " + scwin.saveYn);
      $c.sbm.execute($p, sbm_wageFoundTariff_save);
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      var param1 = lc_districtCd.getValue();
      // 일용코드 팝업
      udc_selpchItemCd.cfCommonPopUp(scwin.callbackPortEachDistrictNoimList, pCode.trim(), pName, pClose, null, null, null, null, param1, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_selpchItemCd, txt_selpchItemNm);  // 노임항목코드, 노임항목명
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
// 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_Popup = function (row, disGubun) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    // 품목
    case 1:
      udc_pubCd.setSelectId("retrieveCommGoodsInfo");
      udc_pubCd.cfCommonPopUp(scwin.callbackCommGoodsInfo1 // XML상의 SELECT ID
      , ds_wageFoundTariff.getCellData(row, "goodsCd") // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "품목,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetGridReturnValue(rtnList, ds_wageFoundTariff, row, "goodsCd", "goodsNm");
      //cfSetGridReturnValue(rtnList, ds_wageFoundTariff, row, "adptStdGoods", "adptStdGoodsNm");

      break;

    // 적용품목
    case 2:
      udc_pubCd.setSelectId("retrieveCommGoodsInfo");
      udc_pubCd.cfCommonPopUp(scwin.callbackCommGoodsInfo2 // XML상의 SELECT ID
      , ds_wageFoundTariff.getCellData(row, "adptStdGoods") // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "적용품목,적용품목코드,적용품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetGridReturnValue(rtnList, ds_wageFoundTariff, row, "adptStdGoods", "adptStdGoodsNm");

      break;

    // 작업장
    case 3:
      udc_pubCd.setSelectId("retrieveWrkPlInfo");
      udc_pubCd.cfCommonPopUp(scwin.callbackWrkPlInfo // XML상의 SELECT ID
      , ds_wageFoundTariff.getCellData(row, "wrkPl") // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "작업장,작업장코드,작업장" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetGridReturnValue(rtnList, ds_wageFoundTariff, row, "wrkPl", "wrkPl");

      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 품목일괄생성
//-------------------------------------------------------------------------
scwin.f_Create = function (row) {
  var totRow = ds_wageFoundTariff.getRowCount();
  var maxDt = 0;
  var dt = 0;
  for (var i = 0; i < totRow; i++) {
    dt = ds_wageFoundTariff.getCellData(i, "adptEndDt");
    if (maxDt < dt) {
      maxDt = dt;
    }
  }
  for (var i = 0; i < totRow; i++) {
    if (maxDt == ds_wageFoundTariff.getCellData(i, "adptEndDt")) {
      // ds_wageFoundTariff.insertRow();
      $c.data.insertRow($p, gr_wageFoundTariff);
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "dtlItemNm", ds_wageFoundTariff.getCellData(i, "dtlItemNm"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "goodsCd", ds_wageFoundTariff.getCellData(i, "goodsCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "goodsNm", ds_wageFoundTariff.getCellData(i, "goodsNm"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "scRt", ds_wageFoundTariff.getCellData(i, "scRt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "scAmt", ds_wageFoundTariff.getCellData(i, "scAmt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "basisUnitCd", ds_wageFoundTariff.getCellData(i, "basisUnitCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "eqClssCd", ds_wageFoundTariff.getCellData(i, "eqClssCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "wrkMthdCd", ds_wageFoundTariff.getCellData(i, "wrkMthdCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptTermStDt", ds_wageFoundTariff.getCellData(i, "adptTermStDt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptTermEndDt", ds_wageFoundTariff.getCellData(i, "adptTermEndDt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "wtTenfrAdptSt", ds_wageFoundTariff.getCellData(i, "wtTenfrAdptSt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "wtTenfrAdptEnd", ds_wageFoundTariff.getCellData(i, "wtTenfrAdptEnd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "wrkPl", ds_wageFoundTariff.getCellData(i, "wrkPl"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptTonCnt", ds_wageFoundTariff.getCellData(i, "adptTonCnt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "expimpClsCd", ds_wageFoundTariff.getCellData(i, "expimpClsCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "cvsslWharfPartyCnt", ds_wageFoundTariff.getCellData(i, "cvsslWharfPartyCnt"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "fullEmptyClsCd", ds_wageFoundTariff.getCellData(i, "fullEmptyClsCd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "seaWrkYn", ds_wageFoundTariff.getCellData(i, "seaWrkYn"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "scWtAdptStd", ds_wageFoundTariff.getCellData(i, "scWtAdptStd"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptStdGoods", ds_wageFoundTariff.getCellData(i, "adptStdGoods"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptStdGoodsNm", ds_wageFoundTariff.getCellData(i, "adptStdGoodsNm"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "Std", ds_wageFoundTariff.getCellData(i, "Std"));
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptStDt", "");
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "adptEndDt", "99999999");
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "wageAgrmntDt", "");
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "districtCd", ds_wageFoundTariff.getCellData(i, "districtCd")); // 권역코드
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "selpchItemCd", ds_wageFoundTariff.getCellData(i, "selpchItemCd")); // 할증코드
      ds_wageFoundTariff.setCellData(ds_wageFoundTariff.getRowCount() - 1, "selpchItemSeq", ds_wageFoundTariff.getCellData(i, "selpchItemSeq")); // 할증순번
    }
  }
  //cfShowTotalRows(totalRows, ds_wageFoundTariff.CountRow);
  spa_cnt2.setValue(ds_wageFoundTariff.getRowCount());
};

//-------------------------------------------------------------------------
// 품목일괄생성
//-------------------------------------------------------------------------
scwin.f_DtUdate = function () {
  if (ed_dt.getValue() == "" || ed_dt.getValue() == null) {
    $c.win.alert($p, "일괄적용 날짜를 입력하십시요");
    ed_dt.focus();
    return;
  }

  //if(rd_dt(0).checked == true)

  if (rd_dt.getSelectedIndex() == 0) {
    for (var i = 0; i < ds_wageFoundTariff.getRowCount(); i++) {
      // 0 (Normal): 서버에서 조회된 후 아무런 변화가 없는 상태.
      // 1 (Insert): 새롭게 추가된 행 (웹스퀘어의 "C").
      // 2 (Delete): 삭제 처리된 행 (웹스퀘어의 "D").
      // 3 (Update): 기존 데이터의 값이 변경된 행 (웹스퀘어의 "U").
      // 4 (Logical): 삽입 후 삭제 (웹스퀘어의 "V")
      //if(ds_wageFoundTariff.SysStatus(i) !=1)
      if (ds_wageFoundTariff.getRowStatus(i) !== "C") {
        if (ds_wageFoundTariff.getCellData(i, "adptEndDt") == "99999999" || ds_wageFoundTariff.getRowStatus(i) == "U")
          //ds_wageFoundTariff.SysStatus(i) ==3)
          {
            ds_wageFoundTariff.setCellData(i, "adptEndDt", ed_dt.getValue());
          }
      }
    }
  } else {
    for (var i = 0; i < ds_wageFoundTariff.getRowCount(); i++) {
      //if(ds_wageFoundTariff.SysStatus(i) ==1)
      if (ds_wageFoundTariff.getRowStatus(i) === "C") {
        if (lc_dt.getValue() == 1) {
          ds_wageFoundTariff.setCellData(i, "adptStDt", ed_dt.getValue());
        } else if (lc_dt.getValue() == 3) {
          ds_wageFoundTariff.setCellData(i, "wageAgrmntDt", ed_dt.getValue());
        } else {
          $c.win.alert($p, "신단가는 적용종료일을 수정할수 없습니다."); //ds_wageFoundTariff.NameValue(i, "adptEndDt") = ed_dt.text;
          return;
        }
      }
    }
  }
  //cfShowTotalRows(totalRows, ds_wageFoundTariff.CountRow);
  spa_cnt2.setValue(ds_wageFoundTariff.getRowCount());
};

//-------------------------------------------------------------------------
// 변경 데이타 선댁
//-------------------------------------------------------------------------	
scwin.f_newDt = function (gubun) {
  if (gubun == 1) {
    lc_dt.setValue(2);
    lc_dt.setDisabled(true);
  } else {
    lc_dt.setDisabled(false);
  }
};

//-------------------------------------------------------------------------
// 중복유형 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDupPattern = function () {
  /*
      var param1  = "";
  
      ds_dupPattern.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=PortEachWagesItemManagementPatternEBC&queryId=duplicationPattern&param1="+param1;
      ds_dupPattern.Reset();
  */
  const params = {
    sysCd: "PortEachWagesItemManagementPatternEBC",
    queryId: "duplicationPattern",
    param1: ""
  };

  //데이터셋에 정보설정
  dma_dupPattern.setJSON(params);
  $c.sbm.execute($p, sbm_dupPattern);
};
scwin.f_changeEdiable = function (row) {
  if (ds_wageFoundTariff.getRowStatus(row) == "R") {
    if (ds_wageFoundTariff.getCellData(row, "adptEndDt") == '99999999') {
      gr_wageFoundTariff.setColumnReadOnly("dtlItemNm", false);
      gr_wageFoundTariff.setColumnReadOnly("goodsCd", false);
      gr_wageFoundTariff.setColumnReadOnly("wrkMthdCd", false);
      gr_wageFoundTariff.setColumnReadOnly("eqClssCd", false);
      gr_wageFoundTariff.setColumnReadOnly("expimpClsCd", false);
      gr_wageFoundTariff.setColumnReadOnly("adptTermStDt", false);
      gr_wageFoundTariff.setColumnReadOnly("adptTermEndDt", false);
      gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptSt", false);
      gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptEnd", false);
      gr_wageFoundTariff.setColumnReadOnly("scRt", false);
      gr_wageFoundTariff.setColumnReadOnly("scAmt", false);
      gr_wageFoundTariff.setColumnReadOnly("cvsslWharfPartyCnt", false);
      gr_wageFoundTariff.setColumnReadOnly("seaWrkYn", false);
      gr_wageFoundTariff.setColumnReadOnly("scWtAdptStd", false);
      gr_wageFoundTariff.setColumnReadOnly("adptStdGoods", false);
      gr_wageFoundTariff.setColumnReadOnly("adptEndDt", false);
      gr_wageFoundTariff.setColumnReadOnly("wageAgrmntDt", false);
      gr_wageFoundTariff.setColumnReadOnly("wrkPl", false);
      gr_wageFoundTariff.setColumnReadOnly("adptTonCnt", false);
      gr_wageFoundTariff.setColumnReadOnly("basisUnitCd", false);
      gr_wageFoundTariff.setColumnReadOnly("fullEmptyClsCd", false);
    } else {
      gr_wageFoundTariff.setColumnReadOnly("dtlItemNm", true);
      gr_wageFoundTariff.setColumnReadOnly("goodsCd", true);
      gr_wageFoundTariff.setColumnReadOnly("wrkMthdCd", true);
      gr_wageFoundTariff.setColumnReadOnly("eqClssCd", true);
      gr_wageFoundTariff.setColumnReadOnly("expimpClsCd", true);
      gr_wageFoundTariff.setColumnReadOnly("adptTermStDt", true);
      gr_wageFoundTariff.setColumnReadOnly("adptTermEndDt", true);
      gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptSt", true);
      gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptEnd", true);
      gr_wageFoundTariff.setColumnReadOnly("scRt", true);
      gr_wageFoundTariff.setColumnReadOnly("scAmt", true);
      gr_wageFoundTariff.setColumnReadOnly("cvsslWharfPartyCnt", true);
      gr_wageFoundTariff.setColumnReadOnly("seaWrkYn", true);
      gr_wageFoundTariff.setColumnReadOnly("scWtAdptStd", true);
      gr_wageFoundTariff.setColumnReadOnly("adptStdGoods", true);
      gr_wageFoundTariff.setColumnReadOnly("adptEndDt", true);
      gr_wageFoundTariff.setColumnReadOnly("wageAgrmntDt", true);
      gr_wageFoundTariff.setColumnReadOnly("wrkPl", true);
      gr_wageFoundTariff.setColumnReadOnly("adptTonCnt", true);
      gr_wageFoundTariff.setColumnReadOnly("basisUnitCd", true);
      gr_wageFoundTariff.setColumnReadOnly("fullEmptyClsCd", true);
    }
    gr_wageFoundTariff.setColumnReadOnly("adptStDt", true);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("adptStDt", false);
    gr_wageFoundTariff.setColumnReadOnly("scRt", false);
    gr_wageFoundTariff.setColumnReadOnly("scAmt", false);
    gr_wageFoundTariff.setColumnReadOnly("dtlItemNm", false);
    gr_wageFoundTariff.setColumnReadOnly("wageAgrmntDt", false);
    //2022-02-18  노임제반요율등록 화면 수정요청 (행추가시 단위구분 바로 콤보박스로 선택가능하도록)
    gr_wageFoundTariff.setColumnReadOnly("basisUnitCd", false);
  }
  gr_wageFoundTariff.setColumnReadOnly("scDtlSeqNo", true);
  gr_wageFoundTariff.setColumnReadOnly("goodsNm", true);
  gr_wageFoundTariff.setColumnReadOnly("adptStdGoodsNm", true);

  //권역별특성과 매칭 Validate Check

  if (chb_goodsCdAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("goodsCd", false);
    gr_wageFoundTariff.setColumnReadOnly("adptStdGoods", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("goodsCd", true);
    gr_wageFoundTariff.setColumnReadOnly("adptStdGoods", true);
  }
  if (chb_pepAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("eqClssCd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("eqClssCd", true);
  }
  if (chb_wrkMthdAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("wrkMthdCd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("wrkMthdCd", true);
  }
  if (chb_adptTermYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("adptTermStDt", false);
    gr_wageFoundTariff.setColumnReadOnly("adptTermEndDt", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("adptTermStDt", true);
    gr_wageFoundTariff.setColumnReadOnly("adptTermEndDt", true);
  }
  if (chb_wtAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptSt", false);
    gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptEnd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptSt", true);
    gr_wageFoundTariff.setColumnReadOnly("wtTenfrAdptEnd", true);
  }
  if (chb_wtStdYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("scWtAdptStd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("scWtAdptStd", true);
  }
  if (chb_wrkPlDsgYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("wrkPl", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("wrkPl", true);
  }
  if (chb_wrkPlPosAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("seaWrkYn", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("seaWrkYn", true);
  }
  if (chb_adptTonCntYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("adptTonCnt", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("adptTonCnt", true);
  }
  if (chb_expimpClsAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("expimpClsCd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("expimpClsCd", true);
  }
  if (chb_vsslStucAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("cvsslWharfPartyCnt", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("cvsslWharfPartyCnt", true);
  }
  if (chb_fullEmptyAdptYn.getValue() == 1) {
    gr_wageFoundTariff.setColumnReadOnly("fullEmptyClsCd", false);
  } else {
    gr_wageFoundTariff.setColumnReadOnly("fullEmptyClsCd", true);
  }
};
scwin.impChkboxValue = function () {
  chb_goodsCdAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "goodsCdAdptYn"));
  chb_pepAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "pepAdptYn"));
  chb_expimpClsAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "expimpClsAdptYn"));
  chb_wtAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wtAdptYn"));
  chb_wrkMthdAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wrkMthdAdptYn"));
  chb_vsslStucAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "vsslStucAdptYn"));
  chb_wrkPlPosAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wrkPlPosAdptYn"));
  chb_wholeWrkStpYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wholeWrkStpYn"));
  chb_autoReflectYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "autoReflectYn"));
  chb_adptTermYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "adptTermYn"));
  chb_wtStdYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wtStdYn"));
  chb_wrkPlDsgYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "wrkPlDsgYn"));
  chb_adptTonCntYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "adptTonCntYn"));
  chb_fullEmptyAdptYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "fullEmptyAdptYn"));
  chb_retroactUnsettledMgntYn.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "retroactUnsettledMgntYn"));
  lc_dupPattern.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "dupPattern"));
  lc_uprAdptStd.setValue(ds_wageItemDistrict.getCellData(ds_wageItemDistrict.getRowPosition(), "uprAdptStd"));
};
scwin.expChkboxValue = function () {};

/////////////////////////////////////////////////////////
//////////////// Callback EVENT START  //////////////////
/////////////////////////////////////////////////////////

scwin.callbackPortEachDistrictNoimList = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, ed_selpchItemNm); // 노임항목코드, 노임항목명
};
scwin.callbackCommGoodsInfo1 = function (rtnList) {
  var row = ds_wageFoundTariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_wageFoundTariff, row, "goodsCd", "goodsNm");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_wageFoundTariff, row, "adptStdGoods", "adptStdGoodsNm");
};
scwin.callbackCommGoodsInfo2 = function (rtnList) {
  var row = ds_wageFoundTariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_wageFoundTariff, row, "adptStdGoods", "adptStdGoodsNm");
};
scwin.callbackWrkPlInfo = function (rtnList) {
  var row = ds_wageFoundTariff.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_wageFoundTariff, row, "wrkPl", "wrkPl");
};
/////////////////////////////////////////////////////////
//////////////// Callback EVENT END    //////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// OBJECT EVENT START//////////////////////
/////////////////////////////////////////////////////////

scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.rd_dt_onviewchange = function (info) {
  var value = info.value;
  if (value == 1) {
    scwin.f_newDt(1);
  } else if (value == 2) {
    scwin.f_newDt(2);
  }
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Create(ds_wageFoundTariff.getRowPosition());
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_dt_onclick = function (e) {
  scwin.f_DtUdate();
};
scwin.gr_wageFoundTariff_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_wageFoundTariff.getColumnID(columnIndex);
  if (colid == "goodsCd") {
    scwin.f_Popup(rowIndex, 1);
  }
  if (colid == "adptStdGoods") {
    scwin.f_Popup(rowIndex, 2);
  }
  if (colid == "wrkPl") {
    scwin.f_Popup(rowIndex, 3);
  }
};
scwin.udc_selpchItemCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_selpchItemCd.getValue(), ed_selpchItemNm.getValue(), 'F', 'F');
};
scwin.udc_selpchItemCd_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemCd, ed_selpchItemNm, 1);
};
scwin.udc_selpchItemCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemNm, ed_selpchItemCd, 1, false);
};

/////////////////////////////////////////////////////////
//////////////// OBJECT EVENT END  //////////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// Submission EVENT START  ////////////////
/////////////////////////////////////////////////////////

scwin.sbm_wageItemDistrict_retrieve_submitdone = function (e) {
  //$c.gus.cfGoPrevPosition(ds_wageItemDistrict, scwin.pos_groupCode);

  var rowCnt = ds_wageItemDistrict.getRowCount();
  //alert("sbm_wageItemDistrict_retrieve_submitdone scwin.saveYn : "+scwin.saveYn);
  if (rowCnt == 0) {
    ds_wageFoundTariff.removeAll();
    spa_cnt1.setValue(0);
    $c.gus.cfDisableObjects($p, [udc_btn]);
    $c.win.alert($p, MSG_CM_ERR_003);
  } else {
    //$c.gus.cfEnableObjects([udc_btn]);
    scwin.impChkboxValue();
    spa_cnt1.setValue(rowCnt);

    //ds_wageItemDistrict.setRowPosition(0);
    if (scwin.pos_groupCode != "") {
      gr_wageItemDistrict.setFocusedCell(scwin.pos_groupCode, 0);
    } else {
      gr_wageItemDistrict.setFocusedCell(0, 1);
    }
  }
  if (scwin.saveYn == "Y") {
    scwin.saveYn = "N";
  }
};
scwin.sbm_wageFoundTariff_save_submitdone = function (e) {
  //alert("sbm_wageFoundTariff_save_submitdone b: "+ scwin.saveYn);
  scwin.f_Retrieve();
  /*
  if(scwin.saveYn == "Y") {
      scwin.saveYn = "N";
  }
  */
};
/////////////////////////////////////////////////////////
//////////////// Submission EVENT END  //////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// DataSet EVENT START  ///////////////////
/////////////////////////////////////////////////////////

scwin.ds_wageItemDistrict_ondataload = function () {
  var rowCnt = ds_wageItemDistrict.getRowCount();
  spa_cnt1.setValue(rowCnt);
};
scwin.ds_wageFoundTariff_ondataload = function () {
  var rowCnt = ds_wageFoundTariff.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfDisableObjects($p, [btn_update]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_update]);
  }
  spa_cnt2.setValue(rowCnt);
};
scwin.ds_wageItemDistrict_onrowpositionchange = async function (info) {
  var row = info.newRowIndex;
  if (ds_wageFoundTariff.getRowStatus(ds_wageFoundTariff.getRowPosition()) == "C" && scwin.saveYn == "N") {
    var chkAlert = await $c.win.confirm($p, "저장하지 않은 노임항목 상세요율을 취소하시겠습니까?");
    if (chkAlert) {
      $c.data.undoRow($p, ds_wageFoundTariff);
      if (row > -1) {
        $c.gus.cfEnableObjects($p, [btn_update]);
        scwin.f_RetrieveFoundTariff(row);
        scwin.impChkboxValue();
      } else {
        $c.gus.cfDisableObjects($p, [btn_update]);
      }
    } else {
      ds_wageItemDistrict.setEventPause("", true);
      gr_wageItemDistrict.setFocusedCell(info.oldRowIndex, 0);
      ds_wageItemDistrict.setEventPause("", false);
      return false;
    }
  } else {
    if (row > -1) {
      $c.gus.cfEnableObjects($p, [btn_update]);
      scwin.f_RetrieveFoundTariff(row);
      scwin.impChkboxValue();
    } else {
      $c.gus.cfDisableObjects($p, [btn_update]);
    }
  }
};
scwin.ds_wageFoundTariff_onrowpositionchange = function (info) {
  var row = info.newRowIndex;
  scwin.f_changeEdiable(row);
};

/////////////////////////////////////////////////////////
//////////////// DataSet EVENT END  /////////////////////
/////////////////////////////////////////////////////////

scwin.gr_wageItemDistrict_onrowindexchange = async function (rowIndex, oldRow) {
  /*
  alert(ds_wageFoundTariff.getRowPosition());
  if(ds_wageFoundTariff.getRowStatus(ds_wageFoundTariff.getRowPosition()) == "C"){
  if(await $c.win.confirm("저장하지 않은 노임항목 상세요율을 취소하시겠습니까?") == true){
          ds_wageFoundTariff.undoRow(ds_wageFoundTariff.getRowPosition());
  } else {
    		return false;
  }
  }
  */
};
scwin.ds_wageFoundTariff_onbeforerowpositionchange = function (info) {};
scwin.ds_wageItemDistrict_onbeforerowpositionchange = async function (info) {
  /*
  console.log(ds_wageFoundTariff.getRowPosition());
  if(ds_wageFoundTariff.getRowStatus(ds_wageFoundTariff.getRowPosition()) == "C"){
      
  if(await $c.win.confirm("저장하지 않은 노임항목 상세요율을 취소하시겠습니까?") == true){
          ds_wageFoundTariff.undoRow(ds_wageFoundTariff.getRowPosition());
  } else {
    		return false;
  }
  }
  */
};

//<script language="javascript"  for=gr_wageFoundTariff event=CanColumnPosChange(row,colid)>
scwin.gr_wageFoundTariff_onbeforeedit = async function (rowIndex, columnIndex, value) {
  var colid = gr_wageFoundTariff.getColumnID(columnIndex);
  console.log("colid::", colid);
  if (colid == "scRt") {
    console.log("scRt::", ds_wageFoundTariff.getCellData(rowIndex, "scRt"));
    console.log("scRt::", ds_wageFoundTariff.getCellData(rowIndex, "scAmt"));
    if (ds_wageFoundTariff.getCellData(rowIndex, "scRt") != 0.000 && ds_wageFoundTariff.getCellData(rowIndex, "scAmt") != 0) {
      await $c.win.alert($p, scwin.MSG_OP_WRN_001);
      ds_wageFoundTariff.setCellData(rowIndex, "scRt", "");
      gr_wageFoundTariff.setFocusedCell(rowIndex, "scRt", true);
      return false;
    }
  }
  if (colid == "scAmt") {
    if (ds_wageFoundTariff.getCellData(rowIndex, "scRt") != 0.000 && ds_wageFoundTariff.getCellData(rowIndex, "scAmt") != 0) {
      await $c.win.alert($p, scwin.MSG_OP_WRN_001);
      ds_wageFoundTariff.setCellData(rowIndex, "scAmt", "");
      gr_wageFoundTariff.setFocusedCell(rowIndex, "scAmt", true);
      return false;
    }
  }
};

//할증요율%, 금액이 null,"" 인 경우 0셋팅
scwin.ds_wageFoundTariff_oncelldatachange = function (info) {
  if (info.colID == "scRt") {
    if ($c.gus.cfIsNull($p, info.newValue)) {
      ds_wageFoundTariff.setCellData(info.rowIndex, info.colID, "0");
    }
  }
  if (info.colID == "scAmt") {
    if ($c.gus.cfIsNull($p, info.newValue)) {
      ds_wageFoundTariff.setCellData(info.rowIndex, info.colID, "0");
    }
  }
};

//그리드에 datatype에 따른 체크를 무시하고(예:calendar) 체크할 경우, 속성에 validator에 체크함수 호출하기 위해 생성  
scwin.fn_dateValidator = function (value, item) {
  // 1. 값 확인 (공백 처리)
  if (!value || value.trim() === "") {
    return ""; // 필수입력 체크가 따로 있다면 여기서 true 반환
  }

  // 2. '99999999' 예외 처리 (무시하고 통과)
  if (value === "99999999") {
    return value;
  }

  // 3. 날짜 유효성 체크
  if (!$c.date.isDate($p, value) && value != "") {
    alert("날짜 형식이 잘못 되었습니다.");
    return "";
  }
  return value; // 모든 검사 통과
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'권역코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'lc_districtCd',ref:'',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',mandatory:'true',validExp:'권역코드:yes',textAlign:'left',delimiter:'-',displayMode:'value delim label',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',editType:'select',id:'lc_wagePattern',ref:'',search:'start',style:'width: 120px;',submenuSize:'auto',useKeywordHighlight:'false',allowChar:'A-Z0-9',delimiter:'-',displayMode:'value delim label',textAlign:'left',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'code'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임항목',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupSelpchItemCd',style:'',codeId:'ed_selpchItemCd',nameId:'ed_selpchItemNm',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'Data',validExpCode:'노임항목:no',mandatoryName:'false',id:'udc_selpchItemCd',btnId:'btn_selpchItemCd',selectID:'retrievePortEachDistrictNoimList','ev:onviewchangeCodeEvent':'scwin.udc_selpchItemCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_selpchItemCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_selpchItemCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',editType:'select',id:'ica_adptDt',style:'',validExp:'적용일자:no:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협약일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wageAgrmntDt',style:'',displayFormat:'yyyy/MM/dd',editType:'select'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_pubCd',codeId:'ed_pubCd',id:'udc_pubCd',nameId:'ed_pubCdNm',popupID:'popupPubCd',popupTitle:'',selectID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'노임항목',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_wageItemDistrict',focusMode:'row',id:'gr_wageItemDistrict',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_wageItemDistrict_onrowindexchange',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'column6',inputType:'text',removeBorderStyle:'false',value:'권역',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'노임코드',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'노임항목',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'districtCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemCd',inputType:'text',removeBorderStyle:'false',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemSeq',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'노임항목 권역별특성',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목적용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_goodsCdAdptYn',ref:'',objType:'data',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.chb_goodsCdAdptYn_onviewchange',falseValue:'0',value:'1',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기력적용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_pepAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업방법',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wrkMthdAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_adptTermYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wtAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wtStdYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장지정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wrkPlDsgYn',objType:'data',ref:'',rows:'',selectedindex:'-1',style:'',renderType:'checkboxgroup',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wrkPlPosAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용톤수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_adptTonCntYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중복유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'lc_dupPattern',ref:'',search:'start',style:'width: 100px;',submenuSize:'auto',useKeywordHighlight:'false',mandatory:'false',allowChar:'A-Z0-9',textAlign:'left',delimiter:'-',displayMode:'value delim label',disabled:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dupPattern'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_expimpClsAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박구조',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_vsslStucAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_fullEmptyAdptYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR단가적용기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_uprAdptStd',ref:'',renderType:'',style:'width: 100px;',submenuSize:'auto',objType:'data',textAlign:'left',delimiter:'-',displayMode:'value delim label',disabled:'true',chooseOption:'true',chooseOptionLabel:'ㅤ'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄작업단계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_wholeWrkStpYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소급미확정관리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_retroactUnsettledMgntYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자동반영',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_autoReflectYn',objType:'data',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'노임항목 상세요율',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_wageFoundTariff',focusMode:'row',id:'gr_wageFoundTariff',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',dataName:'작업단계적용',validFeatures:'ignoreStatus=yes',validExp:'scAmt:할증금액:yes,dtlItemNm:상세항목명:yes,adptStDt:적용시작일:yes:date=YYYYMMDD,wageAgrmntDt:노임협약일:yes:date=YYYYMMDD',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_wageFoundTariff_oncellclick','ev:ontextimageclick':'scwin.gr_wageFoundTariff_ontextimageclick','ev:onbeforeedit':'scwin.gr_wageFoundTariff_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'상세일련번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'상세항목명',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'품목',width:'151',colSpan:'2',rowSpan:'',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'할증요율',width:'200',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'단위구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'기력',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'작업방법',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column25',value:'적용기간',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column47',value:'중량구간(kg) ',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'적용톤수',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'수출입구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'선창반수',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'화물구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'해상작업',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column53',value:'중량할증기준(Kg)',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column59',value:'적용품목',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column72',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'적용시작일',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'적용종료일',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'노임협약일',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'코드',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'품목명',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'%',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column14',value:'금액',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column31',value:'From',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'To',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'From',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'To',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column62',value:'코드',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'품목명',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'scDtlSeqNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dtlItemNm',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'goodsCd',inputType:'textImage',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'goodsNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'scRt',inputType:'text',removeBorderStyle:'false',width:'100',mandatory:'true',dataType:'float',maxLength:'3.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'scAmt',inputType:'text',removeBorderStyle:'false',width:'100',mandatory:'true',dataType:'float',maxLength:'10.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'basisUnitCd',inputType:'select',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'eqClssCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'wrkMthdCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'adptTermStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'adptTermEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wtTenfrAdptSt',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wtTenfrAdptEnd',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'wrkPl',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adptTonCnt',value:'',displayMode:'label',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'expimpClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cvsslWharfPartyCnt',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'fullEmptyClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'seaWrkYn',value:'',displayMode:'label',falseValue:'0',trueValue:'1',valueType:'other',checkAlways:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'scWtAdptStd',value:'',displayMode:'label',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'adptStdGoods',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adptStdGoodsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'std',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'adptStDt',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'adptEndDt',value:'',displayMode:'label',validator:'scwin.fn_dateValidator'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'wageAgrmntDt',value:'',displayMode:'label',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btn',gridID:'gr_wageFoundTariff',rowAddFunction:'scwin.f_AddRow',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'데이타 선택',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'2',id:'rd_dt',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onviewchange':'scwin.rd_dt_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구단가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신단가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 선택',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',allowChar:'A-Z0-9',chooseOption:'',delimiter:'-',displayMode:'value delim label',editType:'select',id:'lc_dt',ref:'',search:'start',style:'width: 150px;',submenuSize:'auto',textAlign:'left',useKeywordHighlight:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적용시작일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적용종료일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임협약일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{displayFormat:'yyyy/MM/dd',editType:'select',validExp:'적용일자:no:date=YYYYMMDD',style:'',id:'ed_dt',class:'form-control cal',calendarValueType:'yearMonthDate',validator:'scwin.fn_dateValidator',mandatory:'true',dateValidCheck:'false'}},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_dt',type:'button',class:'btn',escape:'false','ev:onclick':'scwin.btn_dt_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_update',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'품목일괄생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})