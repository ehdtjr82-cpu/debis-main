/*amd /ui/ac/fi/taxbiz/vatdeclar/fi_403_02_03b.xml 55329 4d1a73d3556c7c95cdc702082e8ae75a08415bae25b95624f2261938241af796 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarCrn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_VatData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'작업년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'분기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'신고자사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizNm',name:'신고사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCorRegNo',name:'신고자법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNm',name:'신고자성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSiteZip',name:'신고자소재지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizAddr',name:'신고자사업장주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarTelNum',name:'신고자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizcond',name:'신고자업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBiztype',name:'신고자종목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnTerm',name:'거래기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'거래사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBusiNmCmpy',name:'거래사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'매수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeCd',name:'세무서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_VatDeclare',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flag',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarDataSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroFormat',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainWholesale',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainSleeve',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'num',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag1',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag2',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag3',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minusPlus',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSeq',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMinusPlus',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSpplyAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSeq1',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt1',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMinusPlus1',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSpplyAmt1',name:'name29',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Org_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'작업년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'분기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'신고자사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizNm',name:'신고사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCorRegNo',name:'신고자법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNm',name:'신고자성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSiteZip',name:'신고자소재지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizAddr',name:'신고자사업장주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarTelNum',name:'신고자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBizcond',name:'신고자업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarBiztype',name:'신고자종목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnTerm',name:'거래기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'거래사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBusiNmCmpy',name:'거래사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'매수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxOfficeCd',name:'세무서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Tmp_FillUse',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'declarYr',name:'작업년도'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatQuartYyClsCd',name:'분기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarCrn',name:'신고자사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:'증빙구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsSellClsCd',name:'매출입구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyDt',name:'공급일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarBizNm',name:'신고사업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarCorRegNo',name:'신고자법인번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarNm',name:'신고자성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarSiteZip',name:'신고자소재지우편번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarBizAddr',name:'신고자사업장주소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarTelNum',name:'신고자전화번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarBizcond',name:'신고자업태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarBiztype',name:'신고자종목'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnTerm',name:'거래기간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnCrn',name:'거래사업자번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'busiClsCd',name:'사업자구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnBusiNmCmpy',name:'거래사업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizcondNm',name:'업태명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'biztypeNm',name:'종목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cnt',name:'매수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'공급금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxOfficeCd',name:'세무서코드'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.taxbiz.vatdeclar.RetrieveOtherCorporationTaxDeclarationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_VatData","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_VatData","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatdeclar.SaveOtherCorporationTaxDeclarationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_VatData","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vatDeclare',action:'/ac.fi.taxbiz.vatdeclar.CreateOtherCorporationTaxDeclarationFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_VatDeclare","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_VatDeclare","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_vatDeclare_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyClsCd, gr_VatData:vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  }, {
    grpCd: "FS510",
    compID: "gr_VatData:pchsSellClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_Header();
  //cfDisableBtn([bCreate,bDelete]); 	 tobe변경 :  bCreate,bDelete 미존재
  ed_declarYr.focus();
};
scwin.f_Header = function () {
  var dateYr = $c.date.getServerDateTime($p, "yyyy");
  ed_declarYr.setValue(dateYr);
  lc_vatQuartYyClsCd.setSelectedIndex(0);
  lc_evidClsCd.setSelectedIndex(0);
  newInsert_flag.setValue("false"); //tobe추가 : 초기값 설정
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //ds_search.UserStatus(1) = "1"; //임의로 dataset status를 insert 로 수정 한다.

  if (await $c.gus.cfValidate($p, [tb_retrieve])) {
    dma_search.set("declarYr", ed_declarYr.getValue());
    dma_search.set("vatQuartYyClsCd", lc_vatQuartYyClsCd.getValue());
    dma_search.set("declarCrn", ed_declarCrn.getValue());
    dma_search.set("evidClsCd", lc_evidClsCd.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
  $c.gus.cfEnableAllBtn($p);
  scwin.f_propertyChangeTrue();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_VatData.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, [""]); //alert("조회된 데이터가 없습니다.");
    }
    totalRows.setValue(rowCnt);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_VatData.getModifiedIndex().length <= 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    //var row = ds_VatData.getRowPosition(); //tobe변경 : 사용하는 곳 미존재2010
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 생성
//-------------------------------------------------------------------------
scwin.f_CreateFile = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_declarYr, lc_vatQuartYyClsCd]))) return false;
  ds_VatDeclare.removeAll();
  scwin.f_DateSetting();
  $c.sbm.execute($p, sbm_vatDeclare);
};
scwin.sbm_vatDeclare_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_VatDeclare.getRowCount();
    var grdObj = "";
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      // 파일제목생성
      //K1231212.345
      var title = "";
      if (lc_evidClsCd.getValue() == '10') {
        title = "K" + ed_declarCrn.getValue().substring(0, 7) + "." + ed_declarCrn.getValue().substring(7);
        grdObj = gr_vat;
      } else {
        title = "H" + ds_VatDeclare.getRowJSON(0).seq.substring(0, 7) + "." + ds_VatDeclare.getRowJSON(0).seq.substring(7);
        grdObj = gr_vat1;
      }
      const options = {
        fileName: title + ".txt",
        //[default : excel.csv] options.fileName 값이 없을 경우 default값 세팅
        type: "1",
        header: "0",
        delim: "\u200B"
      };
      await $c.data.downloadGridViewCSV($p, grdObj, options);

      //조회
      scwin.f_Retrieve();
    }
  }
};

//-------------------------------------------------------------------------
// 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  var imsi_date = "";
  if (lc_evidClsCd.getValue() == '10') {
    if (lc_vatQuartYyClsCd.getValue() == "1") {
      imsi_date = "0101";
    } else if (lc_vatQuartYyClsCd.getValue() == "2") {
      imsi_date = "0401";
    } else if (lc_vatQuartYyClsCd.getValue() == "3") {
      imsi_date = "0701";
    } else if (lc_vatQuartYyClsCd.getValue() == "4") {
      imsi_date = "1001";
    }
    imsi_date = ed_declarYr.getValue().trim() + imsi_date;
    ed_stYm.setValue(imsi_date);
    imsi_date = $c.date.addMonth($p, imsi_date, 3);
    imsi_date = $c.date.addDate($p, imsi_date, -1);
    ed_endYm.setValue(imsi_date);
  } else {
    ed_stYm.setValue(ed_declarYr.getValue().trim() + "0101");
    ed_endYm.setValue(ed_declarYr.getValue().trim() + "1231");
    imsi_date = $c.date.addMonth($p, ed_stYm.getValue(), 12);
    imsi_date = imsi_date.substring(0, 6) + "25";
    ed_submitDt.setValue(imsi_date);
  }
};

//-------------------------------------------------------------------------
// 그리드추가 
//-------------------------------------------------------------------------
// scwin.f_AddRow = function() {
//     //ds_VatData.ReadOnly= false;
//     f_propertyChangeFalse()
//     var row = ds_VatData.RowPosition;
//     ds_VatData.AddRow();
// };

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_declarYr.focus();
};
scwin.f_propertyChangeFalse = function () {
  gr_VatData.setColumnReadOnly("declarCrn", false);
};
scwin.f_propertyChangeTrue = function () {
  gr_VatData.setColumnReadOnly("declarCrn", true);
};

//-------------------------------------------------------------------------
// function name : f_upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_upload = async function (e) {
  //asis => ds_Org_FillUse 값 0 나옴
  //tobe 변경 : 고객사 요청에 따라 csv 강제 변환하도록 구현된 소스는 삭제. 
  // var i;
  // var intRowPosition;
  // var topWrkStpCd ;
  // inputF.Value = "";
  // cfAlertMsg("파일이 CSV인 것만 Upload가 가능합니다.");

  // inputF.Open();
  // var path = inputF.value;

  // if (f_CheckFileExt("CSV",path) == false) {
  // 	cfAlertMsg("파일이 CSV인 것만 Upload가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
  // 	return;
  // }

  // ds_Org_FillUse.DataId="";
  // ds_Org_FillUse.DataId="file://" + inputF.Value;

  // if (inputF.Value == "") {
  // 	return;
  // }

  // ds_Org_FillUse.ClearData();
  // ds_VatData.ClearData();
  // ds_Org_FillUse.Reset();
  // ds_Tmp_FillUse.ImportData(ds_Org_FillUse.ExportData(1, ds_Org_FillUse.CountRow, true));
  // for(i=1 ;i <= ds_Tmp_FillUse.CountRow; i++) {                           
  //  f_AddRow();

  //  ds_VatData.Namevalue(i,"declarYr") 		  = ds_Tmp_FillUse.Namevalue(i,"declarYr");	
  //  ds_VatData.Namevalue(i,"vatQuartYyClsCd") = ds_Tmp_FillUse.Namevalue(i,"vatQuartYyClsCd");	
  //  ds_VatData.Namevalue(i,"declarCrn")       = ds_Tmp_FillUse.Namevalue(i,"declarCrn").simpleReplace("-","");
  // 	ds_VatData.Namevalue(i,"evidClsCd")       = ds_Tmp_FillUse.Namevalue(i,"evidClsCd");
  // 	ds_VatData.Namevalue(i,"pchsSellClsCd")   = ds_Tmp_FillUse.Namevalue(i,"pchsSellClsCd");
  // 	ds_VatData.Namevalue(i,"spplyDt") 		  = ds_Tmp_FillUse.Namevalue(i,"spplyDt");				
  // 	ds_VatData.Namevalue(i,"declarBizNm") 	  = ds_Tmp_FillUse.Namevalue(i,"declarBizNm");
  // 	ds_VatData.Namevalue(i,"declarCorRegNo")  = ds_Tmp_FillUse.Namevalue(i,"declarCorRegNo");
  // 	ds_VatData.Namevalue(i,"declarNm") 		  = ds_Tmp_FillUse.Namevalue(i,"declarNm");
  // 	ds_VatData.Namevalue(i,"declarSiteZip")   = ds_Tmp_FillUse.Namevalue(i,"declarSiteZip");
  // 	ds_VatData.Namevalue(i,"declarBizAddr")   = ds_Tmp_FillUse.Namevalue(i,"declarBizAddr");
  // 	ds_VatData.Namevalue(i,"declarTelNum")    = ds_Tmp_FillUse.Namevalue(i,"declarTelNum");	
  // 	ds_VatData.Namevalue(i,"declarBizcond")   = ds_Tmp_FillUse.Namevalue(i,"declarBizcond");	
  // 	ds_VatData.Namevalue(i,"declarBiztype")   = ds_Tmp_FillUse.Namevalue(i,"declarBiztype");
  // 	ds_VatData.Namevalue(i,"txnTerm") 		  = ds_Tmp_FillUse.Namevalue(i,"txnTerm");		
  // 	ds_VatData.Namevalue(i,"txnCrn")          = ds_Tmp_FillUse.Namevalue(i,"txnCrn");
  // 	ds_VatData.Namevalue(i,"busiClsCd") 	  = ds_Tmp_FillUse.Namevalue(i,"busiClsCd");		
  // 	ds_VatData.Namevalue(i,"txnBusiNmCmpy")   = ds_Tmp_FillUse.Namevalue(i,"txnBusiNmCmpy");
  // 	ds_VatData.Namevalue(i,"bizcondNm") 	  = ds_Tmp_FillUse.Namevalue(i,"bizcondNm");	
  // 	ds_VatData.Namevalue(i,"biztypeNm") 	  = ds_Tmp_FillUse.Namevalue(i,"biztypeNm");	
  // 	ds_VatData.Namevalue(i,"cnt")             = ds_Tmp_FillUse.Namevalue(i,"cnt");
  // 	ds_VatData.Namevalue(i,"spplyAmt") 		  = ds_Tmp_FillUse.Namevalue(i,"spplyAmt");		
  // 	ds_VatData.Namevalue(i,"vatAmt")          = ds_Tmp_FillUse.Namevalue(i,"vatAmt");
  // 	ds_VatData.Namevalue(i,"taxOfficeCd") 	  = ds_Tmp_FillUse.Namevalue(i,"taxOfficeCd");	
  // }

  // ds_Tmp_FillUse.ClearData();

  ds_VatData.removeAll();
  ds_Org_FillUse.removeAll();
  ds_Tmp_FillUse.removeAll();
  if (lc_ext.getValue() == "1") {
    // xlsx, csv 선택값
    await $c.gus.cfAlertMsg($p, "파일이 CSV인 것만 Upload가 가능합니다.");
    let options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 1,
      "type": "1"
      // "startRowIndex": 0,
      //"delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
    };
    await $c.data.uploadGridViewCSV($p, grExcel, options); // CSV를 선택하였을 경우
  } else {
    await $c.gus.cfAlertMsg($p, "파일이 XLSX인 것만 Upload가 가능합니다.");
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 1,
      "hidden": 1
    };
    await $c.data.uploadGridViewExcel($p, grExcel, options); // XLSX를 선택하였을 경우
  }
};

//-------------------------------------------------------------------------
// 파일 명 체크하는 로직(CSV)  2006.07.04 by 송규엽
//-------------------------------------------------------------------------
// function f_CheckFileExt(ext, path){
// 	ext = ext.toUpperCase();
// 	path = path.toUpperCase();
// 	elen = ext.length;
// 	flen = path.length;
// 	return (ext == path.substring((flen-elen), flen));
// }

scwin.f_Excel = function () {
  var options = {
    fileName: `${ed_declarYr.getValue()}년 ${lc_vatQuartYyClsCd.getValue()}타법인부가세자료.xlsx`,
    sheetName: `${ed_declarYr.getValue()}년 ${lc_vatQuartYyClsCd.getValue()}타법인부가세자료`,
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: "타법인부가세자료",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_VatData, options, infoArr);
};
scwin.gr_VatData_oncellclick = function (rowIndex, columnIndex, columnId) {
  var check = ds_VatData.getRowStatus(rowIndex);
  if (check == 1) {
    scwin.f_propertyChangeFalse();
  } else {
    scwin.f_propertyChangeTrue();
    //gr_VatData.ColumnProp('trafficCardRamt','Edit')="Numeric";
  }
};

// <script language=JavaScript for=gr_VatData event=onKeyPress(keycode)>
//   var Row = ds_VatData.RowPosition;  
//   if( keycode == "37" || keycode == "38" || keycode == "39" || keycode == "40" ) {
//     var SysStatus = ds_VatData.SysStatus(ds_VatData.RowPosition);

//     if( SysStatus == 1 ) {
//       	//ds_VatData.ReadOnly= false;
//       	f_propertyChangeFalse();
//     } else {
//       	//ds_VatData.ReadOnly= true;
//       	f_propertyChangeTrue()
//     }
//   }   

scwin.grExcel_onfilereadend = async function (value) {
  debugger;
  // asis => csv 업로드시 ds_Org_FillUse.CountRow 0만 나옴. 테스트 불가,,,,
  return;
  /* if (lc_ext.getValue() == "1") { // xlsx, csv 선택값
      return;
  } else {
      ds_Tmp_FillUse.setJSON(ds_Org_FillUse.getAllJSON())
      for (i = 0; i < ds_Tmp_FillUse.getRowCount(); i++) {
          await scwin.f_AddRow();
           ds_VatData.setRowJSON(i, ds_Tmp_FillUse.getRowJSON(i))
           // ds_VatData.Namevalue(i, "declarYr") = ds_Tmp_FillUse.Namevalue(i, "declarYr");
          // ds_VatData.Namevalue(i, "vatQuartYyClsCd") = ds_Tmp_FillUse.Namevalue(i, "vatQuartYyClsCd");
          // ds_VatData.Namevalue(i, "declarCrn") = ds_Tmp_FillUse.Namevalue(i, "declarCrn").simpleReplace("-", "");
          // ds_VatData.Namevalue(i, "evidClsCd") = ds_Tmp_FillUse.Namevalue(i, "evidClsCd");
          // ds_VatData.Namevalue(i, "pchsSellClsCd") = ds_Tmp_FillUse.Namevalue(i, "pchsSellClsCd");
          // ds_VatData.Namevalue(i, "spplyDt") = ds_Tmp_FillUse.Namevalue(i, "spplyDt");
          // ds_VatData.Namevalue(i, "declarBizNm") = ds_Tmp_FillUse.Namevalue(i, "declarBizNm");
          // ds_VatData.Namevalue(i, "declarCorRegNo") = ds_Tmp_FillUse.Namevalue(i, "declarCorRegNo");
          // ds_VatData.Namevalue(i, "declarNm") = ds_Tmp_FillUse.Namevalue(i, "declarNm");
          // ds_VatData.Namevalue(i, "declarSiteZip") = ds_Tmp_FillUse.Namevalue(i, "declarSiteZip");
          // ds_VatData.Namevalue(i, "declarBizAddr") = ds_Tmp_FillUse.Namevalue(i, "declarBizAddr");
          // ds_VatData.Namevalue(i, "declarTelNum") = ds_Tmp_FillUse.Namevalue(i, "declarTelNum");
          // ds_VatData.Namevalue(i, "declarBizcond") = ds_Tmp_FillUse.Namevalue(i, "declarBizcond");
          // ds_VatData.Namevalue(i, "declarBiztype") = ds_Tmp_FillUse.Namevalue(i, "declarBiztype");
          // ds_VatData.Namevalue(i, "txnTerm") = ds_Tmp_FillUse.Namevalue(i, "txnTerm");
          // ds_VatData.Namevalue(i, "txnCrn") = ds_Tmp_FillUse.Namevalue(i, "txnCrn");
          // ds_VatData.Namevalue(i, "busiClsCd") = ds_Tmp_FillUse.Namevalue(i, "busiClsCd");
          // ds_VatData.Namevalue(i, "txnBusiNmCmpy") = ds_Tmp_FillUse.Namevalue(i, "txnBusiNmCmpy");
          // ds_VatData.Namevalue(i, "bizcondNm") = ds_Tmp_FillUse.Namevalue(i, "bizcondNm");
          // ds_VatData.Namevalue(i, "biztypeNm") = ds_Tmp_FillUse.Namevalue(i, "biztypeNm");
          // ds_VatData.Namevalue(i, "cnt") = ds_Tmp_FillUse.Namevalue(i, "cnt");
          // ds_VatData.Namevalue(i, "spplyAmt") = ds_Tmp_FillUse.Namevalue(i, "spplyAmt");
          // ds_VatData.Namevalue(i, "vatAmt") = ds_Tmp_FillUse.Namevalue(i, "vatAmt");
          // ds_VatData.Namevalue(i, "taxOfficeCd") = ds_Tmp_FillUse.Namevalue(i, "taxOfficeCd");
      }
       ds_Tmp_FillUse.removeAll();
  } */
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_declarYr',class:'',title:'기간',mandatory:'true',dataType:'date',displayFormat:'yyyy'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_vatQuartYyClsCd',class:'',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_declarCrn',style:'width: 150px;',mandatory:'true',displayFormat:'###-##-#####',editFormat:'###-##-#####',maxlength:'16'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'증빙구분은 자료 생성시에만 사용됩니다.',style:''}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridID:'gr_VatData',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_VatData',focusMode:'row',id:'gr_VatData',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_VatData_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'작업년도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'신고자사업자등록번호',width:'200',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'증빙구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'매출입구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'공급일자',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'신고사업장명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'신고자법인번호',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'신고자성명',width:'120'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column73',value:'신고자소재지우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column70',value:'신고자사업장주소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column67',value:'신고자전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'신고자업태',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'신고자종목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'거래기간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'거래사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'사업자구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column52',value:'거래사업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'업태명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'종목명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'매수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column85',value:'부가세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'세무서코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'select',style:'',value:'',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarCrn',inputType:'text',style:'',value:'',width:'200',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarBizNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarCorRegNo',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'declarSiteZip',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'declarBizAddr',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'declarTelNum',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'declarBizcond',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'declarBiztype',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnTerm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'txnCrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'busiClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'txnBusiNmCmpy',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizcondNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'biztypeNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'taxOfficeCd',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'SUM("cnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'SUM("spplyAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',expression:'SUM("vatAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'lc_ext',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_xls',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_upload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel등록'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_btPost',style:'',type:'button','ev:onclick':'scwin.f_CreateFile'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_VatDeclare',defaultCellHeight:'20',id:'gr_vat',style:''},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'flag',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarCrn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatDeclarDataSeq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnCrn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizcondNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'biztypeNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zeroFormat',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainWholesale',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainSleeve',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxOfficeCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_VatDeclare',style:'',id:'gr_vat1',defaultCellHeight:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'flag3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxOfficeCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'declarCrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'txnCrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bizcondNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'biztypeNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'zeroFormat',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'minusPlus',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumMinusPlus',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSpplyAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSeq1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumCnt1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumMinusPlus1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumSpplyAmt1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Org_FillUse','ev:oncellclick':'scwin.gr_VatData_oncellclick',focusMode:'row',id:'grExcel',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onfilereadend':'scwin.grExcel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'작업년도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'증빙구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'매출입구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'신고사업장명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'신고자성명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'거래사업자번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'거래사업장명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'매수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',style:'',value:'부가세금액',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',mandatory:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'select',mandatory:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'evidClsCd',inputType:'select',ref:'',style:'',value:'',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarBizNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnCrn',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnBusiNmCmpy',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'spplyAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'vatAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'120'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'SUM("cnt")',id:'column81',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'SUM("spplyAmt")',id:'column93',inputType:'expression',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'SUM("vatAmt")',id:'column87',inputType:'expression',style:'',textAlign:'right',value:'',width:'120'}}]}]}]},{T:1,N:'xf:input',A:{id:'newInsert_flag',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'ed_stYm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'ed_endYm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'ed_submitDt',style:'width:144px; height:21px; '}}]}]}]}]}]}]})