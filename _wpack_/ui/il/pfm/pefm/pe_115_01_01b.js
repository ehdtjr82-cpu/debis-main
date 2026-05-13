/*amd /ui/il/pfm/pefm/pe_115_01_01b.xml 101106 931ce08765bb445433d9d504c9a23cba6dd0d8f800a28718b20bf6cc770a3f4a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'sacd',name:'해상항공구분',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'hhio',name:'수출입구분',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'locPtnCls',name:'국내해외매입구분(국내:1 해외:2)',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'hhdisccd',name:'Discharge',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'hhlodcd',name:'Loading',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'hhsales',name:'영업사원',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'hheta',name:'ETA',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'blType',name:'B/L TYPE',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchAcct'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYmAcct',name:'회계년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selPchsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master_temp',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_temp_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',dataType:'text',defaultValue:'',length:'32'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'mhNo',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'wgt',name:'MT',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'msr',name:'용적',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unSellAmt',name:'미확정매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unPchsAmt',name:'미확정매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'costRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'cls',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',dataType:'text',defaultValue:'',length:'32'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'mhNo',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'wgt',name:'MT',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'msr',name:'용적',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unSellAmt',name:'미확정매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unPchsAmt',name:'미확정매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'profitRatio',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'costRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'cls',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inner',saveRemovedData:'true','ev:ondataload':'scwin.ds_inner_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'innerSellAmt',name:'내부매출',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'innerPchsAmt',name:'내부매입',dataType:'text',length:'20'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhNo',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',dataType:'text',defaultValue:'',length:'32'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'wgt',name:'MT',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'msr',name:'용적',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'unSellAmt',name:'미확정매출액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unSellClntNo',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'unSellClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'unPchsAmt',name:'미확정매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unPchsClntNo',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'unPchsClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'inSellAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inSellClntNo',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'inSellClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'inPchsClntNo',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'inPchsClntNm',name:'#N/A',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'costRate',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'cls',name:'name32',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctSlip',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctSlip_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctFI',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctFI_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctMGNT',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctMGNT_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정과목',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'fiAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'재무마감금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'재무조정금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'관리배부금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'mgntSumAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'distAftAmt',name:'#N/A',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'varFixedClsNm',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMaster',action:'/il.pfm.pefm.RetrieveProfitAndLossForCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"}, {"id":"ds_master_temp","key":"OUT_DS1"}, {"id":"ds_inner","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_master_temp","key":"OUT_DS1"}, {"id":"ds_inner","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/il.pfm.pefm.RetrieveProfitAndLossForCustomerDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"}, {"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcct',action:'/il.pfm.pefm.RetrieveProfitAndLossForCustomerAcctCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcct","key":"IN_DS1"}, {"id":"ds_acctSlip","key":"OUT_DS1"}, {"id":"ds_acctFI","key":"OUT_DS2"}, {"id":"ds_acctMGNT","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_acctSlip","key":"OUT_DS1"}, {"id":"ds_acctFI","key":"OUT_DS2"}, {"id":"ds_acctMGNT","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginClntNo = $c.data.getMemInfo($p, "ClntNo") == null ? "" : $c.data.getMemInfo($p, "ClntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.S_userId = $c.data.getMemInfo($p, "userId"); // 사용자 아이디 

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1).substring(0, 6) + "01";
scwin.vCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
scwin.vCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)

// <!-----------------------------------------------------------------------------
//   H I D D E N   D E F I N I T I O N
// ------------------------------------------------------------------------------>
scwin.hid_sacctDeptCd = "";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_initSetTab();
  ed_closeYm.setValue(scwin.strCurDate);
  ed_closeYmAcct.setValue(scwin.strCurDate);
  // gr_acctMGNT.TitleHeight = "35";
  tbl_closeDiff.setStyle("visibility", 'hidden');
  acb_blType.setSelectedIndex(0);

  // test data
  // ed_closeYm.setValue("201108");
  // ed_lobranCd.setValue("6AA");
  // $c.sbm.execute(sbm_retrieveDetail)

  // ed_closeYmAcct.setValue("201302");
  // ed_sacctDeptCd.setValue("00086");
  // acb_selPchsCd.setValue('PCHS')
  // $c.sbm.execute(sbm_retrieveAcct)
};

//---------------------------------------------------------
// Tab 초기화x
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  // $c.gus.cfEnableObjects([tab_center0, tab_center1]);
  tabControl.setSelectedTabIndex(0);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  tabControl.setSelectedTabIndex(idx);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
};
scwin.f_fieldClear2 = function (e) {
  $c.gus.cfInitObjects($p, tbl_searchCondAcct);
};
scwin.gr_result_exceldownload = function () {
  scwin.f_RunExcel('DETAIL');
};
scwin.gr_master_exceldownload = function () {
  scwin.f_RunExcel('MASTER');
};
scwin.gr_acctSlip_exceldownload = function () {
  scwin.f_RunExcel('ACCT_SLIP');
};
scwin.gr_acctFI_exceldownload = function () {
  scwin.f_RunExcel('ACCT_FI');
};
scwin.gr_acctMGNT_exceldownload = function () {
  scwin.f_RunExcel('ACCT_MGNT');
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel = async function (gubun) {
  let vObjGrd = undefined;
  let sheetTitle = "";
  switch (gubun) {
    case "MASTER":
      var cntRow = ds_master.getRowCount();
      if (cntRow != "0") {
        cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
        if (cfrm) {
          vObjGrd = gr_master;
          sheetTitle = "거래처별 손익 산출-회계마감기준(요약)";
        }
      } else {
        await $c.win.alert($p, "조회결과가 없습니다.");
        return;
      }
      break;
    case "DETAIL":
      var cntRow = ds_result.getRowCount();
      if (cntRow != "0") {
        cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
        if (cfrm) {
          vObjGrd = gr_result;
          sheetTitle = "거래처별 손익 산출-회계마감기준(상세)";
        }
      } else {
        await $c.win.alert($p, "조회결과가 없습니다.");
        return;
      }
      break;
    case "ACCT_SLIP":
      var cntRow = ds_acctSlip.getRowCount();
      if (cntRow != "0") {
        cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
        if (cfrm) {
          vObjGrd = gr_acctSlip;
          sheetTitle = "전표기준";
        }
      } else {
        await $c.win.alert($p, "조회결과가 없습니다.");
        return;
      }
      break;
    case "ACCT_FI":
      var cntRow = ds_acctFI.getRowCount();
      if (cntRow != "0") {
        cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
        if (cfrm) {
          vObjGrd = gr_acctFI;
          sheetTitle = "재무마감기준";
        }
      } else {
        await $c.win.alert($p, "조회결과가 없습니다.");
        return;
      }
      break;
    case "ACCT_MGNT":
      var cntRow = ds_acctMGNT.getRowCount();
      if (cntRow != "0") {
        cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
        if (cfrm) {
          vObjGrd = gr_acctMGNT;
          sheetTitle = "관리마감기준";
        }
      } else {
        await $c.win.alert($p, "조회결과가 없습니다.");
        return;
      }
      break;
  }
  if (sheetTitle == "") {
    return;
  }
  const options = {
    fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: sheetTitle //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, vObjGrd, options, infoArr);
};
//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tbl_searchCondition]);
  if (!ret) {
    return;
  }
  if (ed_closeYm.getValue() == "") {
    $c.win.alert($p, "회계년월은 필수 입력 사항입니다.");
    return;
  }
  if (ed_lobranCd.getValue() == "") {
    $c.win.alert($p, "부서는 필수 입력 사항입니다.");
    return;
  }
  if (ed_hhetd.getValue() > ed_hheta.getValue()) {
    $c.win.alert($p, "입항일자의 값은 출항일자보다 커야 합니다.");
    return;
  }
  ds_search.set("acctDeptCd", scwin.hid_sacctDeptCd);
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// 조회 - 회계
//-------------------------------------------------------------------------
scwin.f_RetrieveAcct = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tbl_searchCondAcct]);
  if (!ret) {
    return;
  }
  if (ed_closeYmAcct.getValue() == "") {
    $c.win.alert($p, "회계년월은 필수 입력 사항입니다.");
    ed_closeYmAcct.focus();
    return;
  }
  if (ed_sacctDeptCd.getValue() == "") {
    $c.win.alert($p, "귀속부서는 필수 입력 사항입니다.");
    ed_sacctDeptCd.focus();
    return;
  }
  if (acb_selPchsCd.getValue() == "") {
    $c.win.alert($p, "매출입구분은 필수 입력 사항입니다.");
    acb_selPchsCd.focus();
    return;
  }
  ds_searchAcct.set("acctDeptCd", scwin.hid_sacctDeptCd);
  $c.sbm.execute($p, sbm_retrieveAcct);
};

//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd2
// function	desc : 공통팝업 열기 전에 체크- TextBox onchange 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_grid_calculate = function () {
  let pchsAmt_sum = 0;
  let sellAmt_sum = 0;
  let unPchsAmt_sum = 0;
  let unSellAmt_sum = 0;
  let Cal = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    pchsAmt_sum += Number(ds_master.getCellData(i, "pchsAmt"));
    sellAmt_sum += Number(ds_master.getCellData(i, "sellAmt"));
    unPchsAmt_sum += Number(ds_master.getCellData(i, "unPchsAmt"));
    unSellAmt_sum += Number(ds_master.getCellData(i, "unSellAmt"));
  }
  pchsAmt_sum = pchsAmt_sum / 2;
  sellAmt_sum = sellAmt_sum / 2;
  unPchsAmt_sum = unPchsAmt_sum / 2;
  unSellAmt_sum = unSellAmt_sum / 2;
  Cal = (sellAmt_sum + unSellAmt_sum - pchsAmt_sum - unPchsAmt_sum) / (sellAmt_sum + unSellAmt_sum) * 100;
  let pre = parseInt(Cal * 100);
  let mid = pre / 100;
  let str = String(mid);
  console.log("str = " + str);
  scwin.totalProfitRatio = str;
  //gr_master.setFooterData("profitRatio_tot", str);
};
scwin.getTotalProfitRatio = function () {
  return scwin.totalProfitRatio;
};
scwin.acb_selPchsCd_onchange = function (info) {
  if (acb_selPchsCd.getValue() == "PCHS") {
    tbl_closeDiff.setStyle("visibility", 'visible');
  }
  if (acb_selPchsCd.getValue() == "SELL") {
    tbl_closeDiff.setStyle("visibility", 'hidden');
  }
};
scwin.ds_result_ondataload = function () {
  // 그리드 조회건수 초기화
  tbx_totalRows.setValue(ds_result.getRowCount());
  scwin.update_gr_result_footerTitle();
};
scwin.ds_inner_ondataload = function () {
  tbx_innerSell.setValue(ds_inner.getCellData(0, "innerSellAmt").replace(/ /g, "&nbsp;"));
  tbx_innerPchs.setValue(ds_inner.getCellData(0, "innerPchsAmt").replace(/ /g, "&nbsp;"));
};
scwin.ds_master_temp_ondataload = function () {
  let data = ds_master_temp.getAllJSON();

  //ASIS에서 화면상에서 계산하던 이익금액을 만들어 데이터로 생성한다.
  data.forEach(function (item) {
    // 이익금액 = (확정매출 + 미확정매출 - 내부매입) - (확정매입 + 미확정매입)
    //(sellAmt + unSellAmt-inPchsAmt) - (pchsAmt + unPchsAmt)

    item.profitRatio = Number(item.sellAmt) + Number(item.unSellAmt) - Number(item.inPchsAmt) - (Number(item.pchsAmt) + Number(item.unPchsAmt));
  });
  ds_master.setJSON(data);
};
scwin.ds_master_ondataload = function () {
  // 그리드 조회건수 초기화
  tbx_totalRows2.setValue(ds_master.getRowCount());
  var options = {};
  options.sortIndex = "repClntNo";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_master.multisort(options);
  ds_master.reform();
  scwin.update_gr_master_footerTitle();
  var rowcnt = ds_master.getRowCount();
  if (rowcnt < 1) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
    tbx_totalRows.setValue(0);
    tbx_totalRows2.setValue(0);
    return;
  }
  for (let i = 0; i < rowcnt; i++) {
    let profitRate = Number(ds_master.getCellData(i, 'profitRate'));
    if (profitRate > 20) {
      gr_master.setRowBackgroundColor(i, 'orange');
    }
  }
  scwin.f_grid_calculate();
};
scwin.ds_acctSlip_ondataload = function () {
  // 그리드 조회건수 초기화
  tbx_totalRows3.setValue(ds_acctSlip.getRowCount());
  var rowcnt = ds_acctSlip.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, "조회된 전표내역이 없습니다.");
    return;
  }
  var options = {};
  options.sortIndex = "rsltsClsCd slipKndNm";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_acctSlip.multisort(options);
  ds_acctSlip.reform();
};
scwin.ds_acctFI_ondataload = function () {
  // 그리드 조회건수 초기화
  tbx_totalRows4.setValue(ds_acctFI.getRowCount());
  var options = {};
  options.sortIndex = "rsltsClsCd clntNm";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_acctFI.multisort(options);
  ds_acctFI.reform();
};
scwin.ds_acctMGNT_ondataload = function () {
  var rowcnt = ds_acctMGNT.getRowCount();
  // 그리드 조회건수 초기화
  tbx_totalRows5.setValue(ds_acctMGNT.getRowCount());
  var unPchsAmt = 0;
  var fi_PchsAmt = 0;
  var mgnt_PchsAmt = 0;
  var fi_BonusAmt = 0;
  var mgnt_Bonus = 0;
  var fi_InsureAmt = 0;
  var mgnt_InsureAmt = 0;
  if (acb_selPchsCd.getValue() == "PCHS") {
    for (var i = 0; i < rowcnt; i++) {
      if (ds_acctMGNT.getCellData(i, "rsltsClsCd") == "실적연결") {
        unPchsAmt = Number(unPchsAmt) + Number(ds_acctMGNT.getCellData(i, "fiCtrlAmt"));
      }
      if (ds_acctMGNT.getCellData(i, "acctCd") == "4200000") {
        mgnt_PchsAmt = Number(mgnt_PchsAmt) + Number(ds_acctMGNT.getCellData(i, "fiCloseAmt"));
      }
      if (ds_acctMGNT.getCellData(i, "acctCd") == "4200220") {
        mgnt_Bonus = Number(mgnt_Bonus) + Number(ds_acctMGNT.getCellData(i, "fiCloseAmt"));
      }
      if (ds_acctMGNT.getCellData(i, "acctCd") == "4200619") {
        mgnt_InsureAmt = Number(mgnt_InsureAmt) + Number(ds_acctMGNT.getCellData(i, "fiCloseAmt"));
      }
    }
    for (var i = 0; i < ds_acctFI.getRowCount(); i++) {
      if (ds_acctFI.getCellData(i, "clntNm") != "" & ds_acctFI.getCellData(i, "acctNm") != "") {
        fi_PchsAmt = Number(fi_PchsAmt) + Number(ds_acctFI.getCellData(i, "amt"));
        if (ds_acctFI.getCellData(i, "acctCd") == "4200220") {
          fi_BonusAmt = Number(fi_BonusAmt) + Number(ds_acctFI.getCellData(i, "amt"));
        }
        if (ds_acctFI.getCellData(i, "acctCd") == "4200619") {
          fi_InsureAmt = Number(fi_InsureAmt) + Number(ds_acctFI.getCellData(i, "amt"));
        }
      }
    }
  }

  //매출원가
  tbx_fi_Pchs.setValue($c.gus.cfInsertComma($p, fi_PchsAmt));
  tbx_mgnt_Pchs.setValue($c.gus.cfInsertComma($p, mgnt_PchsAmt));
  tbx_gap_Pchs.setValue($c.gus.cfInsertComma($p, Number(fi_PchsAmt) - Number(mgnt_PchsAmt)));

  //제수당
  tbx_fi_Bonus.setValue($c.gus.cfInsertComma($p, fi_BonusAmt));
  tbx_mgnt_Bonus.setValue($c.gus.cfInsertComma($p, mgnt_Bonus));
  tbx_gap_Bonus.setValue($c.gus.cfInsertComma($p, Number(fi_BonusAmt) - Number(mgnt_Bonus)));

  //제수당
  tbx_fi_Insure.setValue($c.gus.cfInsertComma($p, fi_InsureAmt));
  tbx_mgnt_Insure.setValue($c.gus.cfInsertComma($p, mgnt_InsureAmt));
  tbx_gap_Insure.setValue($c.gus.cfInsertComma($p, Number(fi_InsureAmt) - Number(mgnt_InsureAmt)));
};

// 상세/요약 해상/항공
scwin.displayCls = function (data, formattedData, rowIndex, colIndex) {
  //console.log("해상/항공 " + rowIndex + " : " + ds_result.getCellData(rowIndex, "clsCd"))
  var clsCd = ds_result.getCellData(rowIndex, "clsCd");
  return $c.gus.decode($p, clsCd, "SM", "해상", "SH", "해상", "AM", "항공", "AH", "항공");
};

// 상세 해상/항공
scwin.displayClsCd = function (clsCd) {
  return $c.gus.decode($p, clsCd, "SM", "마스터 B/L", "SH", "하우스 B/L", "AM", "마스터 B/L", "AH", "하우스 B/L");
};

//
scwin.sbm_retrieveDetail_submitdone = function (e) {
  $c.sbm.execute($p, sbm_retrieveMaster);
};

// 부서
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_PopUp('LOBRAN', 'T', 'F', 'F');
};
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_lobranNm, ed_lobranCd, "LOBRAN", "T", "F", "F");
};
scwin.udc_lobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_lobranCd, ed_lobranNm, 'LOBRAN', 'T', 'F', 'F');
};
scwin.udc_lobranCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm);
  scwin.hid_sacctDeptCd = rtnList[4];
};

// 대표거래처
scwin.udc_repClntNo_onclickEvent = function (e) {
  scwin.f_PopUp('CLNT', 'T', 'F', 'F');
};
scwin.udc_repClntNo_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_repClntNm, ed_repClntNo, "CLNT", "T", "F", "F");
};
scwin.udc_repClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_repClntNo, ed_repClntNm, 'CLNT', 'T', 'F', 'F');
};
scwin.udc_repClntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_repClntNo, ed_repClntNm);
};

// Discharge
scwin.udc_hhdisccd_onclickEvent = function (e) {
  scwin.f_PopUp('DISCHARGE', 'T', 'F', 'F');
};
scwin.udc_hhdisccd_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_hhdisccd, ed_hhdiscNm, 'DISCHARGE', 'T', 'F', 'F');
};
scwin.udc_hhdisccd_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_hhdiscNm, ed_hhdisccd, "DISCHARGE", "T", "F", "F");
};
scwin.udc_hhdisccd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhdisccd, ed_hhdiscNm);
};

// Loading
scwin.udc_hhlodcd_onclickEvent = function (e) {
  scwin.f_PopUp('LOADING', 'T', 'F', 'F');
};
scwin.udc_hhlodcd_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_hhlodNm, ed_hhlodcd, "LOADING", "T", "F", "F");
};
scwin.udc_hhlodcd_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_hhlodcd, ed_hhlodNm, 'LOADING', 'T', 'F', 'F');
};
scwin.udc_hhlodcd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhlodcd, ed_hhlodNm);
};

// 영업사원
scwin.udc_hhsales_onclickEvent = function (e) {
  scwin.f_PopUp('HHSALES', 'T', 'F', 'F');
};
scwin.udc_hhsales_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_hhsalesNm, ed_hhsales, "HHSALES", "T", "F", "F");
};
scwin.udc_hhsales_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_hhsales, ed_hhsalesNm, 'HHSALES', 'T', 'F', 'F');
};
scwin.udc_hhsales_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhsales, ed_hhsalesNm);
};

// 회계부서
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  scwin.f_PopUp('LOBRAN_ACCT', 'T', 'F', 'F');
};
scwin.udc_sacctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_sacctDeptNm, ed_sacctDeptCd, "LOBRAN_ACCT", "T", "F", "F");
};
scwin.udc_sacctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd2(ed_sacctDeptCd, ed_sacctDeptNm, 'LOBRAN_ACCT', 'T', 'F', 'F');
};
scwin.udc_sacctDeptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sacctDeptCd, ed_sacctDeptNm);
  scwin.hid_sacctDeptCd = rtnList[4];
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, Code, Name) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case "LOBRAN":
      udc_lobranCd.setSelectId('retrieveOpDeptCdInfo');
      // udc_lobranCd.setSelectId('retrieveEngClntInfo')
      udc_lobranCd.ilCommonPopUp(scwin.udc_lobranCd_callBackFunc, ed_lobranCd.getValue().trim(), ed_lobranNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "CLNT":
      udc_repClntNo.setSelectId('retrieveClntInfo');
      udc_repClntNo.ilCommonPopUp(scwin.udc_repClntNo_callBackFunc, ed_repClntNo.getValue().trim(), ed_repClntNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "HHSALES":
      udc_hhsales.setSelectId('retrieveEmpInfo');
      udc_hhsales.ilCommonPopUp(scwin.udc_hhsales_callBackFunc, ed_hhsales.getValue().trim(), ed_hhsalesNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "SALESMAN,Code,Name", pNoDataCloseTF);
      break;
    case "DISCHARGE":
      udc_hhdisccd.setSelectId('retrievePortInfo');
      udc_hhdisccd.ilCommonPopUp(scwin.udc_hhdisccd_callBackFunc, ed_hhdisccd.getValue().trim(), ed_hhdiscNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "LOADING":
      udc_hhlodcd.setSelectId('retrievePortInfo');
      udc_hhlodcd.ilCommonPopUp(scwin.udc_hhlodcd_callBackFunc, ed_hhlodcd.getValue().trim(), ed_hhlodNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "LOBRAN_ACCT":
      udc_sacctDeptCd.setSelectId('retrieveAcctDeptCdInfo4');
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, ed_sacctDeptCd.getValue().trim(), ed_sacctDeptNm.getValue(), pWinCloseTF, '2', "코드, 명", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "부서,코드,명", pNoDataCloseTF);
      break;
  }
};
//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd
// function	desc : 공통팝업 열기 전에 체크- EMEDIT onKillFocus 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cdObj, nmObj);
  }
};

//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd2
// function	desc : 공통팝업 열기 전에 체크- TextBox onchange 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd2 = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    var cd = nmObj;
    var nm = cdObj;
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cd, nm);
  }
};
scwin.update_gr_result_footerTitle = function () {
  let cnt = ds_result.getRowCount();
  let str = "";
  if (cnt > 0) {
    str = ds_result.getRowJSON(0).yyyymm;
    //YYYYMM 형태로 들어왔으므로 길이가 6개가 맞다면 YYYY/MM 으로 치환한다.
    if (str.length == 6) {
      str = str.substring(0, 4) + "/" + str.substring(4, 6);
    }
  }
  gr_result.setFooterData("yyyyMm_tot", str);
};
scwin.update_gr_master_footerTitle = function () {
  let cnt = ds_master.getRowCount();
  let str = "";
  if (cnt > 0) {
    str = ds_master.getRowJSON(0).yyyymm;
    //YYYYMM 형태로 들어왔으므로 길이가 6개가 맞다면 YYYY/MM 으로 치환한다.
    if (str.length == 6) {
      str = str.substring(0, 4) + "/" + str.substring(4, 6);
    }
  }
  gr_master.setFooterData("yyyyMm_tot", str);
};

//소수점 아래로 절삭해 정수부분만 반환하는 displayFormatter
scwin.displayInteger = function (value) {
  if (value == null || value == "") {
    return value;
  }
  value = Math.floor(Number(value));
  //3자리마다 잘라서 마를 찍어서 반환한다.  ex) 1000000 -> 1,000,000
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
scwin.prtAcctNmOriVal = function (value) {
  //value 안에 있는 문자열의 앞의 모든 공백을 &nbsp; 로 바꿔서 반환한다.
  if (value == null || value == "") {
    return value;
  }
  return value.replace(/ /g, "&nbsp;");
};
scwin.prtAcctNmOriValExcel = function (value) {
  console.log('excel 에서 사용하는 값 : ' + value);
  return value;
};
scwin.grid_subtotal_leftName = function (value) {
  //value의 값 중간에 '|' 기준으로 앞 글자를 반환한다.
  if (value == null || value == "") {
    return value;
  }
  return value.indexOf("|") == -1 ? value : value.split("|")[0];
};
scwin.grid_subtotal_rightName = function (value) {
  //value의 값 중간에 '|' 기준으로 뒤 글자를 반환한다.
  if (value == null || value == "") {
    return value;
  }
  return value.indexOf("|") == -1 ? value : value.split("|")[1];
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',src:'/cm/udc/comCode.xml',type:'page'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',pickerType:'selectbox',placeholderLocaleRef:'yearMonth',style:'',ref:'data:ds_search.closeYm','data-length':'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_lobranCd',objTypeName:'data',objTypeCode:'data',code:'lobranCd',refDataCollection:'ds_search',allowCharCode:'0-9a-zA-Z','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onviewchangeNameEvent',maxlengthCode:'4',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_repClntNo',nameId:'ed_repClntNm',id:'udc_repClntNo',objTypeCode:'data',objTypeName:'data',code:'repClntNo',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_repClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_repClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_repClntNo_onviewchangeNameEvent',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해상/항공',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sacd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_search.sacd',chooseOptionLabel:'(전체)',displayMode:'value delim label','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'항공'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_hhdisccd',nameId:'ed_hhdiscNm',id:'udc_hhdisccd',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_hhdisccd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhdisccd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_hhdisccd_onblurCodeEvent',refDataCollection:'ds_search',code:'hhdisccd',maxlengthCode:'6',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_hhlodcd',nameId:'ed_hhlodNm',id:'udc_hhlodcd',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_hhlodcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhlodcd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_hhlodcd_onblurCodeEvent',refDataCollection:'ds_search',code:'hhlodcd',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영업사원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_hhsales',nameId:'ed_hhsalesNm',id:'udc_hhsales',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_hhsales_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhsales_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_hhsales_onblurCodeEvent',code:'hhsales',refDataCollection:'ds_search',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입/수출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_hhio',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_search.hhio',chooseOptionLabel:'(전체)',displayMode:'value delim label','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD/ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'hheta',refStDt:'hhetd',style:'',edFromId:'ed_hhetd',edToId:'ed_hheta'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_blType',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_search.blType',chooseOptionLabel:'ALL',displayMode:'value delim label','data-length':'255'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Container'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'파트너',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_locPtnCls',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_search.locPtnCls',chooseOptionLabel:'(전체)',displayMode:'value delim label',chooseOptionValue:'0','data-length':'6'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'파트너제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'파트너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{class:'wq_tab',id:'tabControl',style:'',alwaysDraw:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_center0',label:'상세',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_center1',label:'요약',style:''}},{T:1,N:'w2:content',A:{id:'content1',style:'height: auto;',alwaysDraw:'true'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 손익 산출-회계마감기준(상세)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_result',gridUpYn:'N',gridDownFn:'scwin.gr_result_exceldownload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'년월',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'DOC NO',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'대표거래처',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'해상/항공',width:'70',rowSpan:'2',customFormatter:'scwin.displayCls'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'BL구분',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'BL NO',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'PKG',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'WGT',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'MSR',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column40',value:'매출',displayMode:'label',colSpan:'7',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'column81',value:'매입',displayMode:'label',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'이익률',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'원가율',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'확정매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column102',value:'미확정매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column98',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',value:'내부매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'확정매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'미확정매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'calendar',colMerge:'true',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{id:'mhNo',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'코드',width:'60',textAlign:'center',displayMode:'label',inputType:'text',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'cls',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text',customFormatter:'scwin.displayCls',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'BL구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',displayFormatter:'scwin.displayClsCd'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'text',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'wgt',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text',dataType:'float',maxLength:'2',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{id:'msr',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text',dataType:'float',maxLength:'2',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'unSellAmt',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unSellClntNm',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'inPchsClntNm',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'unPchsAmt',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unPchsClntNm',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'text',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'text'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'mhNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{id:'yyyyMm_s1',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'mhNo_s1',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'repClntNo_s1',name:'코드',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'repClntNm_s1',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cls_s1',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'clsCd_s1',name:'BL구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_s1',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pkg_s1',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wgt_s1',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'msr_s1',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'sellAmt_s1',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'sellClntNm_s1',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'unSellAmt_s1',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unSellAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'unSellClntNm_s1',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'inPchsAmt_s1',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("inPchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'inPchsClntNm_s1',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'sellTot_s1',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellTot")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'pchsAmt_s1',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'pchsClntNm_s1',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'unPchsAmt_s1',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unPchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'unPchsClntNm_s1',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsTot_s1',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsTot")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitRate_s1',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("profitRate")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'costRate_s1',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("costRate")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'yyyyMm_tot',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'mhNo_tot',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',value:''}},{T:1,N:'w2:column',A:{id:'repClntNo_tot',name:'코드',width:'60',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm_tot',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'cls_tot',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'clsCd_tot',name:'BL구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'blNo_tot',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'pkg_tot',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'number'}},{T:1,N:'w2:column',A:{id:'wgt_tot',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'msr_tot',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt_tot',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("sellAmt")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'sellClntNm_tot',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'unSellAmt_tot',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("unSellAmt")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unSellClntNm_tot',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'inPchsAmt_tot',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("inPchsAmt")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'inPchsClntNm_tot',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'sellTot_tot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("sellTot")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmt_tot',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("pchsAmt")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsClntNm_tot',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'unPchsAmt_tot',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("unPchsAmt")',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unPchsClntNm_tot',name:'거래처',width:'120',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTot_tot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum("pchsTot")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'profitRate_tot',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'costRate_tot',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 손익 산출-회계마감기준(요약)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section8',style:'',gridDownFn:'scwin.gr_master_exceldownload',gridID:'gr_master',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section8',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'년월',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column15',inputType:'text',rowSpan:'',style:'',value:'대표거래처',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'DOC NO',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',style:'',value:'해상/항공',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',style:'',value:'BL구분',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column3',inputType:'text',rowSpan:'2',style:'',value:'BL NO',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column5',inputType:'text',rowSpan:'2',style:'',value:'PKG',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column7',inputType:'text',rowSpan:'2',style:'',value:'WGT',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',style:'',value:'MSR',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column40',inputType:'text',rowSpan:'',style:'',value:'매출',width:'280',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column81',inputType:'text',rowSpan:'',style:'',value:'매입',width:'210',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'이익금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column61',inputType:'text',rowSpan:'2',style:'',value:'이익률',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column57',inputType:'text',rowSpan:'2',style:'',value:'원가율',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column144',value:'',displayMode:'label',hidden:'true',rowSpan:'2',hiddenCol:'true'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'확정매출',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',style:'',value:'미확정매출',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column94',inputType:'text',style:'',value:'내부매입',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column86',inputType:'text',style:'',value:'계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'확정매입',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'text',style:'',value:'미확정매입',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'계',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'yyyymm',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',colMerge:'true',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'코드',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'mhNo',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'',colMerge:'true'}},{T:1,N:'w2:column',A:{id:'cls',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'',customFormatter:'scwin.displayCls'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'BL구분',width:'80',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pkg',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'wgt',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0.#'}},{T:1,N:'w2:column',A:{id:'msr',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0.##[floor]'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unSellAmt',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unPchsAmt',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'profitRatio',name:'이익금액',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0',displayFormatter:'scwin.displayInteger'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0',displayFormatter:'scwin.displayInteger'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'master_s1',value:'',displayMode:'label',expression:'display(\'repClntNo\')+\'|\'+display(\'repClntNm\')',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'master_s1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{id:'yyyyMm_s1',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'repClntNo_s1',name:'코드',width:'70',textAlign:'center',displayMode:'label',inputType:'expression',style:'',value:'',expression:'scwin.grid_subtotal_leftName(targetColValue())'}},{T:1,N:'w2:column',A:{id:'repClntNm_s1',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'expression',style:'',value:'',expression:'scwin.grid_subtotal_rightName(targetColValue())'}},{T:1,N:'w2:column',A:{id:'mhNo_s1',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cls_s1',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'clsCd_s1',name:'BL구분',width:'80',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_s1',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pkg_s1',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wgt_s1',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'msr_s1',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'sellAmt_s1',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'unSellAmt_s1',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unSellAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'inPchsAmt_s1',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("inPchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'sellTot_s1',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellTot")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'pchsAmt_s1',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'unPchsAmt_s1',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unPchsAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'pchsTot_s1',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsTot")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{id:'profitRatio_s1',name:'이익금액',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("profitRatio")',style:'',value:'',displayFormat:'#,###,##0'}},{T:1,N:'w2:column',A:{id:'profitRate_s1',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("profitRate")',style:'',value:'',displayFormat:'#,##0',dataType:'float',displayFormatter:'scwin.displayInteger'}},{T:1,N:'w2:column',A:{id:'costRate_s1',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("costRate")',style:'',value:'',displayFormat:'#,##0',dataType:'float',displayFormatter:'scwin.displayInteger'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column147',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'yyyyMm_tot',name:'년월',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'repClntNo_tot',name:'코드',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'repClntNm_tot',name:'명',width:'140',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'mhNo_tot',name:'DOC',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cls_tot',name:'해상/항공',width:'90',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'clsCd_tot',name:'BL구분',width:'80',textAlign:'center',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_tot',name:'BL',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pkg_tot',name:'PKG',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'wgt_tot',name:'WGT',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'msr_tot',name:'MSR',width:'70',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'sellAmt_tot',name:'확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellAmt")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unSellAmt_tot',name:'미확정매출',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unSellAmt")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'inPchsAmt_tot',name:'내부매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("inPchsAmt")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'sellTot_tot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("sellTot")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmt_tot',name:'확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsAmt")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'unPchsAmt_tot',name:'미확정매입',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("unPchsAmt")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsTot_tot',name:'계',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("pchsTot")',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'profitRatio_tot',name:'이익금액',width:'80',textAlign:'right',displayMode:'label',inputType:'expression',expression:'scwin.getTotalProfitRatio()',style:'',value:'',dataType:'number',displayFormat:'#,###,##0.##'}},{T:1,N:'w2:column',A:{id:'profitRate_tot',name:'이익률',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'costRate_tot',name:'원가율',width:'80',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column148',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부매출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_innerSell',label:'',style:'width:150px; height:23px; '}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부매입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_innerPchs',label:'',style:'width:150px; height:23px; '}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondAcct',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYmAcct',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_searchAcct.closeYmAcct',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_sacctDeptCd',id:'udc_sacctDeptCd',nameId:'ed_sacctDeptNm',code:'lobranCd',refDataCollection:'ds_searchAcct','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sacctDeptCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sacctDeptCd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selPchsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',ref:'data:ds_searchAcct.selPchsCd',displayMode:'value delim label','ev:onchange':'scwin.acb_selPchsCd_onchange',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SELL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PCHS'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear2',style:'',type:'button','ev:onclick':'scwin.f_fieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieveAcct',style:'',type:'button','ev:onclick':'scwin.f_RetrieveAcct',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표기준',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_acctSlip',gridDownFn:'scwin.gr_acctSlip_exceldownload',gridDownUserAuth:'X'},E:[{T:3,text:'>'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctSlip',style:'',autoFit:'allColumn',id:'gr_acctSlip',visibleRowNum:'4',class:'wq_gvw',readOnly:'true',mergeCol:'rsltsClsCd,slipKndNm',mergeCells:'bycol'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'실적구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',width:'120',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'slip_s1',value:'',displayMode:'label',expression:'display(\'rsltsClsCd\')+\'|\'+display(\'slipKndNm\')',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'slip_s1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd_s1',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'expression',expression:'scwin.grid_subtotal_leftName(targetColValue())',style:'',value:''}},{T:1,N:'w2:column',A:{id:'slipKndNm_s1',name:'전표종류',width:'120',textAlign:'left',displayMode:'label',inputType:'expression',expression:'scwin.grid_subtotal_rightName(targetColValue())',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm_s1',name:'계정명',width:'120',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'계'}},{T:1,N:'w2:column',A:{id:'amt_s1',name:'금액',width:'120',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM(\'amt\')',style:'',value:'',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slip_s1',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'SUM("amt")',style:'',id:'column19',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'float',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'재무마감기준',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_acctFI',gridDownFn:'scwin.gr_acctFI_exceldownload',gridDownUserAuth:'X'},E:[{T:3,text:'>'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctFI',style:'',autoFit:'allColumn',id:'gr_acctFI',visibleRowNum:'4',class:'wq_gvw',readOnly:'true',mergeCol:'rsltsClsCd,clntNm',mergeCells:'bycol'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'실적구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',width:'120',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0',dataType:'float'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'rsltsClsCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd_s1',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'expression',style:'',value:'',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{id:'clntNm_s1',name:'거래처명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm_s1',name:'계정명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'amt_s1',name:'금액',width:'120',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("amt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd_tot',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'clntNm_tot',name:'거래처명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm_tot',name:'계정명',width:'120',textAlign:'center',displayMode:'label',inputType:'text',expression:'SUM("acctNm")',style:'',value:'합계'}},{T:1,N:'w2:column',A:{id:'amt_tot',name:'금액',width:'120',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("amt")',style:'',value:'',displayFormat:'#,##0',dataType:'float'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'관리마감기준',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridUpYn:'N',gridID:'gr_acctMGNT',gridDownFn:'scwin.gr_acctMGNT_exceldownload',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctMGNT',style:'',autoFit:'allColumn',id:'gr_acctMGNT',visibleRowNum:'5',class:'wq_gvw',mergeCells:'bycol',mergeCol:'rsltsClsCd',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'실적구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'계정명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'변고정비<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'발행계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'전표금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column9',value:'재무마감금액<br/>(A)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column3',value:'재무조정금액<br/>(B)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column33',value:'관리조정금액<br/>(C)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column31',value:'관리회계금액<br/>(A+B+C)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',value:'배부금액<br/>(D)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'배부후금액<br/>(A+B+C+D)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'실적구분',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',width:'120',textAlign:'left',hidden:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'varFixedClsNm',name:'변고정비',width:'80',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'발행계정명',width:'120',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'',excelFormatter:'scwin.prtAcctNmOriValExcel',class:'ws-pre'}},{T:1,N:'w2:column',A:{id:'fiAmt',name:'전표금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'재무마감금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'재무조정금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'mgntSumAmt',name:'관리회계금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'배부금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'distAftAmt',name:'배부후금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows5',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'tbl_closeDiff',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'재무마감-관리마감 차이 분석',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width: 150px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'재무',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차액',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출원가 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fi_Pchs',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_mgnt_Pchs',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_gap_Pchs',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원)제수당-상여 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fi_Bonus',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_mgnt_Bonus',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_gap_Bonus',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원)복후비-고용보험료 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fi_Insure',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_mgnt_Insure',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_gap_Insure',label:'',style:''}}]}]}]}]}]}]}]}]}]}]})