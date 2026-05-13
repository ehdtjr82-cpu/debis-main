/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_23b.xml 74403 917a7876b5cae1c8f3cbeddd2ad01749cccd314a6aed0bee28c854fcc44d2717 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'comcvsslMgntNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselBasisInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_carryingVesselBasisInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impRepKcg',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expRepKcg',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'출항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvChrgCls',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'본선포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'육상포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvStDt',name:'하역시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslWrkCompleteYn',name:'본선작업완료여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierOpClntNo',name:'부두운영거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stvCnt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCls',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCls',name:'name34',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselCommodityEachInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'오더수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrQty',name:'협정수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrWt',name:'협정중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselHeavyEquipInputInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_carryingVesselHeavyEquipInputInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hveqKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planSumStpCnt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planInStpCnt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planOutStpCnt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planSumCopCnt',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'planEqCdCntOw',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planEqCdCntOt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltSumStpCnt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltInStpCnt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltOutStpCnt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltSumCopCnt',name:'name13',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltEqCdCntOw',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltEqCdCntOt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inCntrGrosProd',name:'name16',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inCntrNetProd',name:'name17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inBulkGrosProd',name:'name18',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inBulkNetProd',name:'name19',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outCntrGrosProd',name:'name20',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outCntrNetProd',name:'name21',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outBulkGrosProd',name:'name22',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outBulkNetProd',name:'name23',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselStaffInputInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inputPartyCnt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslManCntP',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'algnManCntP',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslManCntR',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'algnManCntR',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputPartyCntR',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselProfitAndLossInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_carryingVesselProfitAndLossInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prflosItemCd',name:'손익항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prflosItemNm',name:'손익항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'계획금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stndAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realAmt',name:'실금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cpRealAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrQty',name:'협정수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrWt',name:'협정중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbGbn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smAgrQty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrQty1',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'agrWt1',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbGbn1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smAgrQty1',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tAmt1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tAmt2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SD113',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'incRatio',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselProfitAndLossInfoDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtA101',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA102',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA103',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA104',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA105',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA106',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtA107',name:'',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveCarryingVesselWorkResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_carryingVesselCommodityEachInfo","key":"OUT_DS2"},{"id":"ds_carryingVesselHeavyEquipInputInfo","key":"OUT_DS3"},{"id":"ds_carryingVesselStaffInputInfo","key":"OUT_DS4"},{"id":"ds_carryingVesselProfitAndLossInfo","key":"OUT_DS5"},{"id":"ds_carryingVesselProfitAndLossInfoDetail","key":"OUT_DS6"}]',target:'data:json,[{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_carryingVesselCommodityEachInfo","key":"OUT_DS2"},{"id":"ds_carryingVesselHeavyEquipInputInfo","key":"OUT_DS3"},{"id":"ds_carryingVesselStaffInputInfo","key":"OUT_DS4"},{"id":"ds_carryingVesselProfitAndLossInfo","key":"OUT_DS5"},{"id":"ds_carryingVesselProfitAndLossInfoDetail","key":"OUT_DS6"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.carryingVesselManagementNumber = "";
scwin.selectTabMenu = 0;
scwin.onpageload = function () {
  // D0604009

  const codeOptions = [{
    grpCd: "OP195",
    compID: "gr_carryingVesselCommodityEachResultsInfo:impExpClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  var params = $c.data.getParameter($p);
  scwin.carryingVesselManagementNumber = params.carryingVesselManagementNumber == null ? "" : params.carryingVesselManagementNumber; // 본선관리번호
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ed_cvsslMgntNo.setValue(scwin.carryingVesselManagementNumber);
    ed_cvsslMgntNo.focus();
    if (ed_cvsslMgntNo.getValue() != "") {
      scwin.f_Retrieve();
    }
    ///임시        
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//------------------------------------------------------------------------- 
scwin.f_Retrieve = async function () {
  if (scwin.selectTabMenu == 1 && ed_plcvsslMgntNo.getValue() != "") {
    ed_cvsslMgntNo.setValue(ed_plcvsslMgntNo.getValue());
  }
  // 필수항목 체크 

  if (scwin.selectTabMenu == 0) {
    var chk1 = await $c.gus.cfValidate($p, [ed_cvsslMgntNo]);
    if (!chk1) {
      return;
    }
  }

  // 필수항목 체크 
  if (scwin.selectTabMenu == 1) {
    var chk2 = await $c.gus.cfValidate($p, [ed_plcvsslMgntNo]);
    if (!chk2) {
      return;
    }
  }
  if (scwin.selectTabMenu == 0) {
    ed_plcvsslMgntNo.setValue(ed_cvsslMgntNo.getValue());
  }

  //tr_Retrieve.Post();
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  if (scwin.selectTabMenu == 0) {
    $c.gus.cfInitObjects($p, search_cond, null);
  } else {
    $c.gus.cfInitObjects($p, search_cond1, null);
  }
};

//-------------------------------------------------------------------------
//  본선하역작업 테이블 생성
//------------------------------------------------------------------------- 
/*
function f_innerHTML() {
    var impCls ="";
	var expCls="";
	var row = ds_carryingVesselBasisInfo.RowPosition;
	
	if(ds_carryingVesselBasisInfo.CountRow > 0){
		div_vsslNm.innerHTML       = ds_carryingVesselBasisInfo.NameValue(row, "vsslNm"); //선박명
		div_lineNm.innerHTML       = ds_carryingVesselBasisInfo.NameValue(row, "lineNm"); //LINE명
		div_shpCoNm.innerHTML      = ds_carryingVesselBasisInfo.NameValue(row, "shpCoNm"); //선사명
		div_impPortcnt.innerHTML = ds_carryingVesselBasisInfo.NameValue(row, "impPortcnt");		
		div_expPortcnt.innerHTML = ds_carryingVesselBasisInfo.NameValue(row, "expPortcnt");
		div_impRepKcg.innerHTMLds_= ds_carryingVesselBasisInfo.NameValue(row,"impRepKcg");
		div_expRepKcg.innerHTML = ds_carryingVesselBasisInfo.NameValue(row,"expRepKcg");
		if(ds_carryingVesselBasisInfo.NameValue(row, "impPortcnt") ==""){
			impCls="";
		}else{
			impCls="수입";
		}
		
		if(ds_carryingVesselBasisInfo.NameValue(row, "expPortcnt")==""){
			expCls="";
		}else{
			expCls="수출";
		}
		div_impCls.innerHTML     = impCls; //수출입구분명
		div_expCls.innerHTML     = expCls; //수출입구분명
		div_wrkPlNm.innerHTML      = ds_carryingVesselBasisInfo.NameValue(row, "wrkPlNm"); //작업장명
		div_dchrDropRgn.innerHTML      = ds_carryingVesselBasisInfo.NameValue(row, "dchrDropRgn"); //양적하지
		if (ds_carryingVesselBasisInfo.NameValue(row, "arrvlportDtm") == "") {
			div_arrvlportDtm.innerHTML = ds_carryingVesselBasisInfo.NameValue(row, "arrvlportDtm");
		} else {
			div_arrvlportDtm.innerHTML = cfGetFormatStr(ds_carryingVesselBasisInfo.NameValue(row, "arrvlportDtm"), "####/##/## ##:##"); //입항일시
		}
		if (ds_carryingVesselBasisInfo.NameValue(row, "deprtportDtm") == "") {
			div_arrvlportDtm.innerHTML = ds_carryingVesselBasisInfo.NameValue(row, "deprtportDtm");
		} else {
			div_deprtportDtm.innerHTML = cfGetFormatStr(ds_carryingVesselBasisInfo.NameValue(row, "deprtportDtm"), "####/##/## ##:##"); //출항일시
		}
	}	
}  
*/

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (gubun) {
  var args = new Array();
  /*
  if(gubun==1){
  	args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  }else if(gubun==2){
  	args[0] = ed_plcvsslMgntNo.getValue(); //본선관리번호
  }else{
  	args[0] = ed_comcvsslMgntNo.getValue(); //비교대상 본선관리번호  
  }
  
  args[1] = ""; //수출입구분코드
  */

  //var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");

  var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 1100;
  opts.height = 600;
  opts.popupName = '본선관리번호검색팝업';
  /*
  var param = {
      cvsslMgntNo : ed_cvsslMgntNo.getValue()
  }
  */

  var param = new Array();
  if (gubun == 1) {
    param[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  } else if (gubun == 2) {
    param[0] = ed_plcvsslMgntNo.getValue(); //본선관리번호
  } else {
    param[0] = ed_comcvsslMgntNo.getValue(); //비교대상 본선관리번호  
  }
  param[1] = ""; //수출입구분코드

  rtnValues = await $c.win.openPopup($p, win_url, opts, param);
  console.log("rtnValues : ", rtnValues);
  var headerText = "";
  if (rtnValues != null) {
    if (gubun == 1) {
      ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
      if (rtnValues[5] != "" && rtnValues[5] != "undefined" && rtnValues[5] != null) {
        headerText = "본선: " + rtnValues[2] + "  입항일시: " + $c.gus.cfGetFormatStr($p, rtnValues[5], "####/##/##");
        gr_carryingVesselProfitAndLossResultsInfo.setHeaderValue("B", headerText);
      }
    } else if (gubun == 2) {
      ed_plcvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
      if (rtnValues[5] != "" && rtnValues[5] != "undefined" && rtnValues[5] != null) {
        //gr_carryingVesselProfitAndLossResultsInfo.ColumnProp('B','Name') = "본선: "+rtnValues[2] + "  입항일시: " + cfGetFormatStr(rtnValues[5], "####/##/##") ;
        headerText = "본선: " + rtnValues[2] + "  입항일시: " + $c.gus.cfGetFormatStr($p, rtnValues[5], "####/##/##");
        gr_carryingVesselProfitAndLossResultsInfo.setHeaderValue("B", headerText);
      }
    } else {
      ed_comcvsslMgntNo.setValue(rtnValues[0]); //비교대상 본선관리번호  
      if (rtnValues[5] != "" && rtnValues[5] != "undefined" && rtnValues[5] != null) {
        //gr_carryingVesselProfitAndLossResultsInfo.ColumnProp('A','Name') = "본선: "+rtnValues[2] + "  입항일시: " + cfGetFormatStr(rtnValues[5], "####/##/##") ;
        headerText = "본선: " + rtnValues[2] + "  입항일시: " + $c.gus.cfGetFormatStr($p, rtnValues[5], "####/##/##");
        gr_carryingVesselProfitAndLossResultsInfo.setHeaderValue("A", headerText);
      }
    }
    //rtnValues[0];  본선관리번호
    //rtnValues[1];  선박코드
    //rtnValues[2];  선박명
    //rtnValues[3];  마감일자
    //rtnValues[4];  마감시간
    //rtnValues[5];  도착(입항)일자
    //rtnValues[6];  도착(입항)시간
    //rtnValues[7];  출발(출항)일자
    //rtnValues[8];  출발(출항)시간
    //rtnValues[9];  선사항차
    //rtnValues[10]; 항로
    //rtnValues[11]; 항구코드
    //rtnValues[12]; 부두코드
    //rtnValues[13]; 부두코드명
  }
};

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
/*
function f_scwin.selectTabMenu(idx){
	switch (idx) {
		case 0:
			document.all.tab_Results.style.display = "";
			document.all.tab_ProLoss.style.display = "none";
			scwin.selectTabMenu =0;
			break;
		case 1:
			document.all.tab_Results.style.display = "none";
			document.all.tab_ProLoss.style.display = "";
			scwin.selectTabMenu =1;
			break;
	}

	f_ViewTab(idx);
}
*/

//-------------------------------------------------------------------------
// Tab Display 처리
//-------------------------------------------------------------------------
/*
function f_ViewTab(idx){
	for (i=0; i<2; i++) {
		if (idx == i) {
			img_tab_left(i).src = "/common/images/tap_on_left.gif";
			td_tab_center(i).bgColor = "#C5D6EA";
			img_tab_right(i).src = "/common/images/tap_on_right.gif";
		} else {
			img_tab_left(i).src = "/common/images/tap_off_left.gif";
			td_tab_center(i).bgColor = "#E2EBF2";
			img_tab_right(i).src = "/common/images/tap_off_right.gif";
		}
	}
}
*/

scwin.f_OzReport01 = async function () {
  var chk = await $c.gus.cfValidate($p, [ed_cvsslMgntNo]);
  if (!chk) {
    return;
  }
  /*
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var odiParam = new ODIParam("op_306_01_23b");  
  odiParam.add("cvsslMgntNo",  ed_cvsslMgntNo.text );
  odiParam.add("comcvsslMgntNo", ed_comcvsslMgntNo.text );  
  
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var formParam = new FormParam();
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar","false"); 
    cfOZPreview( "ds/op/wrkrslts/stvwrkrslts/op_306_01_23b.ozr",  odiParam , viewerParam , formParam ) ;	
    */

  var data = {
    odiName: "op_306_01_23b",
    reportName: "/ds/op/wrkrslts/stvwrkrslts/op_306_01_23b.ozr",
    odiParam: {
      cvsslMgntNo: ed_cvsslMgntNo.getValue(),
      comcvsslMgntNo: ed_comcvsslMgntNo.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
      //mode: ozMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
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
scwin.btn_init1_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_search2_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_cvsslMgntNo1_onclick = function (e) {
  scwin.f_openPopUp(1);
};
scwin.btn_cvsslMgntNo2_onclick = function (e) {
  scwin.f_openPopUp(2);
};
scwin.btn_cvsslMgntNo3_onclick = function (e) {
  scwin.f_openPopUp(3);
};
scwin.ed_plcvsslMgntNo_onblur = function (e) {
  scwin.f_openPopUp(2);
};
scwin.ed_comcvsslMgntNo_onblur = function (e) {
  scwin.f_openPopUp(3);
};
scwin.btn_ozprint_onclick = function (e) {
  scwin.f_OzReport01();
};
scwin.ds_carryingVesselHeavyEquipInputInfo_ondataload = function () {
  var options = {};
  options.sortIndex = "eqClssCd hveqKndNm";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_carryingVesselHeavyEquipInputInfo.multisort(options);
  ds_carryingVesselHeavyEquipInputInfo.reform();
};
scwin.sbm_Retrieve_submitdone = function (e) {
  for (var i = 0; i < ds_carryingVesselBasisInfo.getRowCount(); i++) {
    if (ds_carryingVesselBasisInfo.getCellData(i, "impPortcnt") == "") {
      ds_carryingVesselBasisInfo.setCellData(i, "impCls", "");
    } else {
      ds_carryingVesselBasisInfo.setCellData(i, "impCls", "수입");
    }
    if (ds_carryingVesselBasisInfo.getCellData(i, "expPortcnt") == "") {
      ds_carryingVesselBasisInfo.setCellData(i, "expCls", "");
    } else {
      ds_carryingVesselBasisInfo.setCellData(i, "expCls", "수출");
    }
  }
  /*
      for(var i=0; i < ds_carryingVesselProfitAndLossInfo.getRowCount(); i++) {
          ds_carryingVesselProfitAndLossInfo.setCellData(i, "SD113", $c.gus.decode(ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd"),"D001", "", "E001","", parseFloat(realAmt-cpRealAmt)));
      }
  */
  spa_cnt1.setValue(ds_carryingVesselCommodityEachInfo.getRowCount());
  spa_cnt2.setValue(ds_carryingVesselHeavyEquipInputInfo.getRowCount());
  spa_cnt3.setValue(ds_carryingVesselStaffInputInfo.getRowCount());
  spa_cnt4.setValue(ds_carryingVesselProfitAndLossInfo.getRowCount());
};
scwin.tab_control_onchange = function (tabId, index, userTabId) {
  switch (index) {
    case 0:
      scwin.selectTabMenu = 0;
      break;
    case 1:
      scwin.selectTabMenu = 1;
      break;
  }
};
scwin.ds_carryingVesselProfitAndLossInfo_ondataload = function () {
  var plansum = 0;
  var stndsum = 0;
  var realsum = 0;
  var co_realsum = 0;
  var planrate = 0;
  var stndrate = 0;
  var realrate = 0;
  var co_realrate = 0;
  var planprofit = 0;
  var stndprofit = 0;
  var realprofit = 0;
  var co_realprofit = 0;
  var sellamta1 = 0;
  var sellamta2 = 0;
  var sellamta3 = 0;
  var sellamta4 = 0;
  var sellamtb1 = 0;
  var sellamtb2 = 0;
  var sellamtb3 = 0;
  var sellamtb4 = 0;
  var sellamta5 = 0;
  var sellamta6 = 0;
  var sellamta7 = 0;
  var sellamta8 = 0;
  var sellamtb5 = 0;
  var sellamtb6 = 0;
  var sellamtb7 = 0;
  var sellamtb8 = 0;
  var sellamtb9 = 0;
  var sellamtb10 = 0;
  var sellamtb11 = 0;
  var sellamtb12 = 0;
  var rowCnt = ds_carryingVesselProfitAndLossInfo.getRowCount();
  if (rowCnt == 0 && scwin.selectTabMenu == 1) {
    $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  //cfShowTotalRows(totalRows3,rowCnt);

  for (var i = 0; i < rowCnt; i++) {
    if (ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd").substr(0, 1) == "A") {
      sellamta1 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "planAmt"));
      sellamta2 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "stndAmt"));
      sellamta3 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "realAmt"));
      sellamta4 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "cpRealAmt"));
    }
    if (ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd").substr(0, 1) == "B") {
      sellamtb1 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "planAmt"));
      sellamtb2 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "stndAmt"));
      sellamtb3 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "realAmt"));
      sellamtb4 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "cpRealAmt"));
    }
  }
  console.log("sellamta3 : " + sellamta3);
  console.log("sellamtb3 : " + sellamtb3);
  for (var i = 0; i < rowCnt; i++) {
    if (ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd").substr(0, 1) == "A") {
      if (!(ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B104" || ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B105")) {
        sellamta5 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "planAmt"));
        sellamta6 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "stndAmt"));
        sellamta7 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "realAmt"));
        sellamta8 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "cpRealAmt"));
      }
    }
    if (ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd").substr(0, 1) == "B") {
      if (!(ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B104" || ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B105")) {
        sellamtb5 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "planAmt"));
        sellamtb6 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "stndAmt"));
        sellamtb7 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "realAmt"));
        sellamtb8 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "cpRealAmt"));
      }
    }
    if (ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd").substr(0, 1) == "B") {
      if (!(ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B104" || ds_carryingVesselProfitAndLossInfo.getCellData(i, "prflosItemCd") == "B105")) {
        sellamtb9 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "planAmt"));
        sellamtb10 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "stndAmt"));
        sellamtb11 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "realAmt"));
        sellamtb12 += parseFloat(ds_carryingVesselProfitAndLossInfo.getCellData(i, "cpRealAmt"));
      }
    }
  }
  var row1 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "C001")[0];
  var row2 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "D001")[0];
  var row3 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "A100")[0];
  var row4 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "B001")[0];
  var row5 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "C002")[0];
  var row6 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "D002")[0];
  var row7 = ds_carryingVesselProfitAndLossInfo.getMatchedIndex("prflosItemCd", "B002")[0];
  console.log("row1 : " + row1 + "  row2 : " + row2 + "   row3 : " + row3 + "   row4 : " + row4 + "   row5 : " + row5 + "   row6 : " + row6 + "   row7 : " + row7);
  if (sellamta1 > 0) {
    ds_carryingVesselProfitAndLossInfo.setCellData(row1, "planAmt", parseFloat(sellamtb1 / sellamta1 * 100).toFixed(2));
    ds_carryingVesselProfitAndLossInfo.setCellData(row5, "planAmt", parseFloat(sellamtb5 / sellamta1 * 100).toFixed(2));
  }
  if (sellamta2 > 0) {
    ds_carryingVesselProfitAndLossInfo.setCellData(row1, "stndAmt", parseFloat(sellamtb2 / sellamta2 * 100).toFixed(2));
    ds_carryingVesselProfitAndLossInfo.setCellData(row5, "stndAmt", parseFloat(sellamtb6 / sellamta2 * 100).toFixed(2));
  }
  if (sellamta3 > 0) {
    ds_carryingVesselProfitAndLossInfo.setCellData(row1, "realAmt", parseFloat(sellamtb3 / sellamta3 * 100).toFixed(2));
    ds_carryingVesselProfitAndLossInfo.setCellData(row5, "realAmt", parseFloat(sellamtb7 / sellamta3 * 100).toFixed(2));
  }
  if (sellamta4 > 0) {
    ds_carryingVesselProfitAndLossInfo.setCellData(row1, "cpRealAmt", parseFloat(sellamtb4 / sellamta4 * 100).toFixed(2));
    ds_carryingVesselProfitAndLossInfo.setCellData(row5, "cpRealAmt", parseFloat(sellamtb8 / sellamta4 * 100).toFixed(2));
  }
  ds_carryingVesselProfitAndLossInfo.setCellData(row2, "planAmt", parseFloat(sellamta1 - sellamtb1));
  ds_carryingVesselProfitAndLossInfo.setCellData(row2, "stndAmt", parseFloat(sellamta2 - sellamtb2));
  ds_carryingVesselProfitAndLossInfo.setCellData(row2, "realAmt", parseFloat(sellamta3 - sellamtb3));
  ds_carryingVesselProfitAndLossInfo.setCellData(row2, "cpRealAmt", parseFloat(sellamta4 - sellamtb4));
  ds_carryingVesselProfitAndLossInfo.setCellData(row3, "planAmt", sellamta1);
  ds_carryingVesselProfitAndLossInfo.setCellData(row3, "stndAmt", sellamta2);
  ds_carryingVesselProfitAndLossInfo.setCellData(row3, "realAmt", sellamta3);
  ds_carryingVesselProfitAndLossInfo.setCellData(row3, "cpRealAmt", sellamta4);
  ds_carryingVesselProfitAndLossInfo.setCellData(row4, "planAmt", sellamtb1);
  ds_carryingVesselProfitAndLossInfo.setCellData(row4, "stndAmt", sellamtb2);
  ds_carryingVesselProfitAndLossInfo.setCellData(row4, "realAmt", sellamtb3);
  ds_carryingVesselProfitAndLossInfo.setCellData(row4, "cpRealAmt", sellamtb4);
  ds_carryingVesselProfitAndLossInfo.setCellData(row6, "planAmt", parseFloat(sellamta5 - sellamtb5));
  ds_carryingVesselProfitAndLossInfo.setCellData(row6, "stndAmt", parseFloat(sellamta6 - sellamtb6));
  ds_carryingVesselProfitAndLossInfo.setCellData(row6, "realAmt", parseFloat(sellamta7 - sellamtb7));
  ds_carryingVesselProfitAndLossInfo.setCellData(row6, "cpRealAmt", parseFloat(sellamta8 - sellamtb8));
  ds_carryingVesselProfitAndLossInfo.setCellData(row7, "planAmt", sellamtb9);
  ds_carryingVesselProfitAndLossInfo.setCellData(row7, "stndAmt", sellamtb10);
  ds_carryingVesselProfitAndLossInfo.setCellData(row7, "realAmt", sellamtb11);
  ds_carryingVesselProfitAndLossInfo.setCellData(row7, "cpRealAmt", sellamtb12);

  //ds_carryingVesselProfitAndLossInfo.ResetStatus();
  ds_carryingVesselProfitAndLossInfo.reform();
};
scwin.rsltSumStpCnt = function (rslt, plan) {
  //if((rsltSumStpCnt-planSumStpCnt)>0 , rsltSumStpCnt&"(+"&(rsltSumStpCnt-planSumStpCnt)&")" , rsltSumStpCnt&"("&(rsltSumStpCnt-planSumStpCnt)&")")
  /*
  if(parseFloat(rsltSumStpCnt-planSumStpCnt) > 0) {
      return rsltSumStpCnt + "(+" + parseFloat(rsltSumStpCnt-planSumStpCnt) + ")";
  } else {
      return rsltSumStpCnt + "(" + parseFloat(rsltSumStpCnt-planSumStpCnt) + ")";
  }
  */
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "(+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "(" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltSumStpCnt2 = function (rslt, plan) {
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "명 (+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "명 (" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltSumStpCnt3 = function (rslt, plan) {
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "반 (+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "반 (" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltInStpCnt = function (rslt, plan) {
  //if((rsltInStpCnt-planInStpCnt)>0
  /*
  if(parseFloat(rsltInStpCnt-planInStpCnt) > 0) {
      return rsltInStpCnt + "(+" + parseFloat(rsltInStpCnt-planInStpCnt) + ")";
  } else {
      return rsltInStpCnt + "(" + parseFloat(rsltInStpCnt-planInStpCnt) + ")";
  }
  */
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "(+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "(" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltOutStpCnt = function (rslt, plan) {
  //if((rsltOutStpCnt-planOutStpCnt)>0
  /*
  if(parseFloat(rsltOutStpCnt-planOutStpCnt) > 0) {
      return rsltOutStpCnt + "(+" + parseFloat(rsltOutStpCnt-planOutStpCnt) + ")";
  } else {
      return rsltOutStpCnt + "(" + parseFloat(rsltOutStpCnt-planOutStpCnt) + ")";
  }
  */
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "(+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "(" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltEqCdCntOw = function (rslt, plan) {
  //if((rsltEqCdCntOw-planEqCdCntOw)>0
  /*
  if(parseFloat(rsltEqCdCntOw-planEqCdCntOw) > 0) {
      return rsltEqCdCntOw + "(+" + parseFloat(rsltEqCdCntOw-planEqCdCntOw) + ")";
  } else {
      return rsltEqCdCntOw + "(" + parseFloat(rsltEqCdCntOw-planEqCdCntOw) + ")";
  }
  */
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "(+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "(" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltEqCdCntOt = function (rslt, plan) {
  //if((rsltEqCdCntOt-planEqCdCntOt)>0
  /*
  if(parseFloat(rsltEqCdCntOt-planEqCdCntOt) > 0) {
      return rsltEqCdCntOt + "(+" + parseFloat(rsltEqCdCntOt-planEqCdCntOt) + ")";
  } else {
      return rsltEqCdCntOt + "(" + parseFloat(rsltEqCdCntOt-planEqCdCntOt) + ")";
  }
  */
  if (parseFloat(rslt - plan) > 0) {
    return rslt + "(+" + parseFloat(rslt - plan) + ")";
  } else {
    return rslt + "(" + parseFloat(rslt - plan) + ")";
  }
};
scwin.rsltTAmt1 = function (cbGbn, realAmt, agrWt, agrQty, smAgrQty) {
  var rtn = "";
  if (cbGbn == "B") {
    rtn = parseInt(realAmt / agrWt);
  } else if (cbGbn == "C") {
    rtn = parseInt(realAmt / agrQty);
  } else if (cbGbn == "S") {
    rtn = parseInt(realAmt / smAgrQty);
  }
  return rtn;
};
scwin.rsltTAmt2 = function (cbGbn1, cpRealAmt, agrWt1, agrQty1, smAgrQty1) {
  var rtn = "";
  if (cbGbn1 == "B") {
    rtn = parseInt(cpRealAmt / agrWt1);
  } else if (cbGbn1 == "C") {
    rtn = parseInt(cpRealAmt / agrQty1);
  } else if (cbGbn1 == "S") {
    rtn = parseInt(cpRealAmt / smAgrQty1);
  }
  return rtn;
};
scwin.ds_carryingVesselBasisInfo_ondataload = function () {
  ds_carryingVesselBasisInfo.setRowPosition(0);
};
scwin.expSD113 = function (prflosItemCd, realAmt, cpRealAmt) {
  return $c.gus.decode($p, prflosItemCd, "D001", "", "E001", "", parseFloat(realAmt - cpRealAmt));
};
scwin.expIncRatio = function (prflosItemCd, realAmt, cpRealAmt) {
  return $c.gus.decode($p, cpRealAmt, 0, 0, $c.gus.decode($p, prflosItemCd, "C001", "", "D001", "", "E001", "", parseFloat((realAmt - cpRealAmt) / cpRealAmt) * 100));
};
scwin.excelDown1 = function () {
  const options = {
    fileName: "본선품명별실적.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "본선품명별실적",
    startRowIndex: 0,
    startColumnIndex: 0,
    textAlign: "right"
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    textAlign: "right",
    drawBorder: false,
    fontSize: "18px"
  }];
  $c.data.downloadGridViewExcel($p, gr_carryingVesselCommodityEachResultsInfo, options, infoArr);
};
scwin.excelDown2 = function () {
  const options = {
    fileName: "본선중기투입실적.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "본선중기투입실적",
    startRowIndex: 0,
    startColumnIndex: 0,
    textAlign: "right"
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    textAlign: "right",
    drawBorder: false,
    fontSize: "18px"
  }];
  $c.data.downloadGridViewExcel($p, gr_carryingVesselHeavyEquipInputResultsInfo, options, infoArr);
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',id:'tab_control',style:'','ev:onchange':'scwin.tab_control_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_Results',label:'본선운영실적',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_ProLoss',label:'본선손익',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',class:'tab-cont'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'search_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_cvsslMgntNo',style:'',maxlength:'8',allowChar:'0-9,A-Z,a-z',objType:'data',validExp:'본선관리번호:yes',mandatory:'true',title:'본선관리번호',ref:'data:dma_condition.cvsslMgntNo','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo1',style:'',title:'Search',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init1',style:'',type:'button','ev:onclick':'scwin.btn_init1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.vsslNm',style:'',userData2:'',id:'div_vsslNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.lineNm',style:'',userData2:'',id:'div_lineNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.shpCoNm',style:'',userData2:'',id:'div_shpCoNm',label:'데이타',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.impPortcnt',style:'',userData2:'',id:'div_impPortcnt',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.impRepKcg',style:'',userData2:'',id:'div_impRepKcg',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.impCls',style:'',userData2:'',id:'div_impCls',label:'데이타',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.expPortcnt',style:'',userData2:'',id:'div_expPortcnt',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.expRepKcg',style:'',userData2:'',id:'div_expRepKcg',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.expCls',style:'',userData2:'',id:'div_expCls',label:'데이타',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.wrkPlNm',style:'',userData2:'',id:'div_wrkPlNm',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.arrvlportDtm',style:'',userData2:'',id:'div_arrvlportDtm',label:'데이타',class:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.deprtportDtm',style:'',userData2:'',id:'div_deprtportDtm',label:'데이타',class:'',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양적하지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:ds_carryingVesselBasisInfo.dchrDropRgn',style:'',userData2:'',id:'div_dchrDropRgn',label:'데이타',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선품명별실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"본선품명별실적.xlsx","sheetName" : "본선품명별실적", "type":"4+8+16"}',gridID:'gr_carryingVesselCommodityEachResultsInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_carryingVesselCommodityEachInfo',focusMode:'row',id:'gr_carryingVesselCommodityEachResultsInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'화종',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'품명',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column21',inputType:'text',rowSpan:'2',style:'',value:'수출입구분',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column19',inputType:'text',rowSpan:'',style:'',value:'오더물량',width:'250',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column15',inputType:'text',rowSpan:'',style:'',value:'하역협정물량',width:'300',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column25',inputType:'text',rowSpan:'',style:'',value:'선측재고량',width:'270',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'150',inputType:'text',style:'',id:'column133',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column134',value:'중량(톤)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'text',style:'',value:'수량',width:'90',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column121',inputType:'text',style:'',value:'중량(톤)',width:'90',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'수량',width:'90',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column119',inputType:'text',style:'',value:'중량(톤)',width:'90',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'kcgNm',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrQty',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWt',inputType:'text',style:'',value:'',width:'100',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'agrQty',inputType:'text',style:'',value:'',width:'90',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'agrWt',inputType:'text',style:'',value:'',width:'90',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',style:'',value:'',width:'150',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선중기투입실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"본선중기투입실적.xlsx","sheetName" : "본선중기투입실적", "type":"4+8+16"}',gridID:'gr_carryingVesselHeavyEquipInputResultsInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_carryingVesselHeavyEquipInputInfo',focusMode:'row',id:'gr_carryingVesselHeavyEquipInputResultsInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'lastColumn',readOnly:'true',mergeCells:'bycol',mergeCol:'eqClssCd,inCntrGrosProd,inCntrNetProd,inBulkGrosProd,inBulkNetProd,outCntrGrosProd,outCntrNetProd,outBulkGrosProd,outBulkNetProd'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',rowSpan:'3',value:'중기종류',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column17',inputType:'text',rowSpan:'',style:'',value:'작업계획',width:'460',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column15',inputType:'text',rowSpan:'',style:'',value:'작업실적',width:'660',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column179',value:'eqClssCd',displayMode:'label',colSpan:'',rowSpan:'3',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'760',inputType:'text',style:'',id:'column184',value:'생산성',displayMode:'label',colSpan:'8',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column151',value:'총계획대수',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'220',inputType:'text',style:'',id:'column150',value:'작업단계별',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column158',value:'자/타사 구분별',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'text',style:'',value:'총투입대수',width:'90',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'140',inputType:'text',style:'',id:'column172',value:'작업단계별',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'자/타사 구분별',width:'180',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column185',value:'CNTR(선내)',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',style:'',value:'BULK(선내)',width:'160',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column115',inputType:'text',style:'',value:'CNTR(선측)',width:'250',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column113',inputType:'text',style:'',value:'BULK(선측)',width:'220',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column144',value:'선내',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column159',value:'선측',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column154',value:'자사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column164',value:'타사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column169',value:'선내',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column142',value:'선측',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column141',value:'자사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column140',value:'타사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column186',value:'Gross',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column183',value:'Net',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column138',value:'Gross',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column137',value:'Net',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column136',value:'Gross',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column135',value:'Net',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column134',value:'Gross',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'Net',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqKndNm',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planSumStpCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planInStpCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planOutStpCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planEqCdCntOw',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planEqCdCntOt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltSumStpCnt',inputType:'expression',style:'',value:'',width:'90',expression:'scwin.rsltSumStpCnt(datalist(\'rsltSumStpCnt\'), datalist(\'planSumStpCnt\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'rsltInStpCnt',value:'',displayMode:'label',expression:'scwin.rsltInStpCnt(datalist(\'rsltInStpCnt\'), datalist(\'planInStpCnt\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltOutStpCnt',inputType:'expression',style:'',value:'',width:'90',expression:'scwin.rsltOutStpCnt(datalist(\'rsltOutStpCnt\'), datalist(\'planOutStpCnt\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltEqCdCntOw',inputType:'expression',style:'',value:'',width:'90',expression:'scwin.rsltEqCdCntOw(datalist(\'rsltEqCdCntOw\'), datalist(\'planEqCdCntOw\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltEqCdCntOt',inputType:'expression',style:'',value:'',width:'90',expression:'scwin.rsltEqCdCntOt(datalist(\'rsltEqCdCntOt\'), datalist(\'planEqCdCntOt\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqClssCd',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inCntrGrosProd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inCntrNetProd',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inBulkGrosProd',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inBulkNetProd',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outCntrGrosProd',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outCntrNetProd',inputType:'text',style:'',textAlign:'right',value:'',width:'80',dataType:'number',displayFormat:'#,###[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outBulkGrosProd',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outBulkNetProd',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선인원투입실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',grdDownOpts:'{"fileName":"본선인원투입실적.xlsx","sheetName" : "본선인원투입실적", "type":"4+8+16"}',gridID:'gr_carryingVesselStaffInputResultsInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_carryingVesselStaffInputInfo',focusMode:'row',id:'gr_carryingVesselStaffInputResultsInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'3',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',rowSpan:'',value:'작업계획',width:'420',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column19',inputType:'text',rowSpan:'',style:'',value:'작업실적',width:'400',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column132',value:'본선포맨',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column133',value:'육상포맨',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column134',value:'항운노조',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column135',value:'본선포맨',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column136',value:'육상포맨',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column137',value:'항운노조',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'algnManCntP',inputType:'expression',removeBorderStyle:'false',width:'120',expression:'datalist(\'algnManCntP\') + "명"',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslManCntP',inputType:'expression',removeBorderStyle:'false',width:'150',expression:'datalist(\'cvsslManCntP\') + "명"',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputPartyCnt',inputType:'expression',style:'',value:'',width:'150',expression:'datalist(\'inputPartyCnt\') + "반"',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslManCntR',inputType:'expression',style:'',value:'',width:'150',expression:'scwin.rsltSumStpCnt2(datalist(\'cvsslManCntR\'), datalist(\'inputPartyCnt\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputPartyCntR',inputType:'expression',style:'',value:'',width:'100',expression:'scwin.rsltSumStpCnt3(datalist(\'inputPartyCntR\'), datalist(\'algnManCntP\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'algnManCntR',inputType:'expression',style:'',value:'',width:'150',expression:'scwin.rsltSumStpCnt2(datalist(\'algnManCntR\'), datalist(\'cvsslManCntP\'))',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',class:'tab-cont'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'search_cond1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_plcvsslMgntNo',style:'',objType:'data',validExp:'본선관리번호:yes',mandatory:'true',maxlength:'8','ev:onblur':'scwin.ed_plcvsslMgntNo_onblur',title:'본선관리번호',ref:'data:dma_condition.cvsslMgntNo',allowChar:'0-9,A-Z,a-z','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo2',style:'',title:'Search',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비교대상 본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_comcvsslMgntNo',style:'',maxlength:'8',objType:'data','ev:onblur':'scwin.ed_comcvsslMgntNo_onblur',ref:'data:dma_condition.comcvsslMgntNo',allowChar:'0-9,A-Z,a-z','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo3',style:'',title:'Search',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search2',style:'',type:'button','ev:onclick':'scwin.btn_search2_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'본선손익실적',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridID:'gr_carryingVesselProfitAndLossResultsInfo',grdDownOpts:'{"fileName":"본선손익실적.xlsx","sheetName" : "본선손익실적", "type":"4+8+16"}',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_carryingVesselProfitAndLossInfo',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_carryingVesselProfitAndLossResultsInfo',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'3',colSpan:'',removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'항목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'4',width:'460',inputType:'text',style:'',id:'column17',value:'조회본선',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'660',inputType:'text',style:'',id:'column15',value:'비교대상 본선',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'3',colSpan:'',width:'150',inputType:'text',style:'',id:'column31',value:'차액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column178',value:'증감 비율(%)',displayMode:'label',colSpan:'',rowSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{rowSpan:'',hidden:'false',colSpan:'4',width:'360',inputType:'text',style:'',id:'B',value:'',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',hidden:'false',colSpan:'2',width:'320',inputType:'text',style:'',id:'A',value:'',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column144',value:'계획',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column159',value:'표준원가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column154',value:'톤당원가<br/>(TEU당원가)',displayMode:'label',escape:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column164',value:'실원가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column169',value:'톤당원가<br/>(TEU당원가)',displayMode:'label',escape:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column142',value:'실원가',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'prflosItemNm',blockSelect:'false',displayMode:'label',class:'ws-pre',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'planAmt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###',maxLength:'.2',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'stndAmt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###',maxLength:'.2',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'tAmt1',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'scwin.rsltTAmt1(datalist(\'cbGbn\'), datalist(\'realAmt\'), datalist(\'agrWt\'), datalist(\'agrQty\'), datalist(\'smAgrQty\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'realAmt',value:'',displayMode:'label',maxLength:'.2',dataType:'float',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'tAmt2',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'scwin.rsltTAmt2(datalist(\'cbGbn1\'), datalist(\'cpRealAmt\'), datalist(\'agrWt1\'), datalist(\'agrQty1\'), datalist(\'smAgrQty1\'))',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cpRealAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'SD113',value:'',displayMode:'label',expression:'scwin.expSD113(datalist(\'prflosItemCd\'),datalist(\'realAmt\'),datalist(\'cpRealAmt\'))',displayFormat:'#,###',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'incRatio',value:'',displayMode:'label',displayFormat:'#,###.#[floor]',maxLength:'.1',dataType:'float',expression:'scwin.expIncRatio(datalist(\'prflosItemCd\'),datalist(\'realAmt\'),datalist(\'cpRealAmt\'))',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt4',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_ozprint',label:'본선작업실적조회',style:'','ev:onclick':'scwin.btn_ozprint_onclick',userAuth:'P'}}]}]}]}]}]}]}]}]}]}]}]}]})