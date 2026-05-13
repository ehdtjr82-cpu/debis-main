/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_03p.xml 16425 72fafa8a77e53c54a1846656a8545e4795aa67505919c3af9adec04faed28da1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리비항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계좌코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recvProcYn',name:'채권처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_slipcopy","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipcopy","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_03_03p
// 이름     : 전표복사(분개내역)
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     : 전표번호에서 나오는 내역을 부모에게 전달
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            회계/재무회계/일반회계/전표관리/대체전표입력(fi_201_03_01b)에서 호출
//            회계/재무회계/일반회계/전표관리/대체전표입력(업로드)(fi_201_03_02b)에서 호출
//            국제물류/Accounting//Invoice/Payment Invoice대납금 전표생성(ac_106_01_04b)에서 호출
//==================================================================================================================
scwin.ds_parent = ""; // 부모전달값

scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 회사종류코드
scwin.txtCoCd = ""; // 회사코드(hidden)
scwin.txtCoClsCd = ""; // 회사종류코드(hidden) 

scwin.txt_slipKndCd = ""; // 전표종류코드
scwin.txt_delYn = ""; // 삭제여부

scwin.onpageload = function () {
  console.log("====== onpageload ==================");
  /*
      ds_parent = window.dialogArguments;
  
    	if(typeof(ds_parent) != "undefined" && ds_parent != null){
          vCoCd = ds_parent.pCoCd; //회사코드 
          vCoClsCd = ds_parent.pCoClsCd;
      }
  */
  //  KYU_TEST
  scwin.vCoCd = $c.data.getParameter($p, "pCoCd") == null ? "" : $c.data.getParameter($p, "pCoCd");
  scwin.vCoClsCd = $c.data.getParameter($p, "pCoClsCd") == null ? "" : $c.data.getParameter($p, "pCoClsCd");
  ed_slipNo.focus();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    ed_slipNo.focus();
  }, {
    "delay": 50
  });
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  //ds_search.UseChangeInfo = false;  // submission의 DataCollection에서 Action의 all을 선택 한다. 기본값은 all
  // txt_slipKndCd.value="A05";
  // txt_delYn.value="0"; 
  // txtCoCd.value =vCoCd;
  // txtCoClsCd.value = vCoClsCd;

  scwin.txt_slipKndCd = "A05"; // 대체전표
  scwin.txt_delYn = "0";
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  ds_search.set("slipNo", ed_slipNo.getValue());
  ds_search.set("slipKndCd", scwin.txt_slipKndCd);
  ds_search.set("delYn", scwin.txt_delYn);
  ds_search.set("coCd", scwin.txtCoCd);
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log(" *** ds_search : " + JSON.stringify(dcJSON));

  //tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipCMD.do";
  //tr_search.post();

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  /*
  <script language=JavaScript for=ds_slipcopy event=OnLoadCompleted(rowCnt)>
      if( rowCnt == 0 ){
  		alert("조회된 데이터가 없습니다.");
  	}else{
  		var arrRtnVal = new Array();
  		arrRtnVal.slipcopy = ds_slipcopy.ExportData(1,ds_slipcopy.CountRow,true);
      	arrRtnVal.copyKind = lc_copyKind.BindColVal;
      	
      	dataSetDebug(ds_slipcopy, false);
      	
      	window.returnValue = arrRtnVal ;
      	window.close();                 
  	}
  */
  var rowCnt = ds_slipcopy.getTotalRow();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    var dc = ds_slipcopy.getAllArray();
    console.log(" ======================= ds_slipcopy : " + JSON.stringify(dc));
    var arrRtnVal = new Array();
    // arrRtnVal.slipcopy = ds_slipcopy.ExportData(1,ds_slipcopy.CountRow,true);
    // arrRtnVal.copyKind = lc_copyKind.BindColVal;

    //		arrRtnVal.slipcopy = ds_slipcopy.ExportData(1,ds_slipcopy.CountRow,true);
    // `getAllArray()`는 컬럼 정보와 실제 데이터를 1차원 배열에 담아 반환
    // `getAllJSON()`은 각 행을 JSON 객체로 변환한 후 1차원 배열에 담아 반환
    console.log("  --- arrRtnVal.getAllJSON [" + JSON.stringify(ds_slipcopy.getAllJSON()) + "]");

    // JSON 값으로 보냄
    arrRtnVal.slipcopy = ds_slipcopy.getAllJSON();
    //arrRtnVal[0] = ds_slipcopy.getAllJSON();
    // 복사종류
    arrRtnVal.copyKind = lc_copyKind.getValue();
    //arrRtnVal[1] = lc_copyKind.getValue();

    // scwin.dataSetDebug(ds_slipcopy, false);

    //console.log("  --- arrRtnVal[0] ["+  JSON.stringify(arrRtnVal[0]) +"]");
    //console.log("  --- arrRtnVal[1]] ["+ arrRtnVal[1] +"]");

    console.log("  --- arrRtnVal.slipcopy [" + JSON.stringify(arrRtnVal.slipcopy) + "]");
    console.log("  --- arrRtnVal.copyKind [" + arrRtnVal.copyKind + "]");

    // KYU_TEST
    // await $c.win.alert("리턴 이전 !!!");

    //window.returnValue = arrRtnVal ;
    //window.close();

    let rt = [arrRtnVal.slipcopy, arrRtnVal.copyKind];
    //$c.win.closePopup([arrRtnVal]);
    $c.win.closePopup($p, rt);
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 복사
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("====== f_Save (복사 버튼 클릭)==================");

  // 필수 입력사항 체크
  //if (!cfCheckMandatory())
  //   return;
  // 10자리 셋팅
  //ed_slipNo.text = cfGetLeftPad(ed_slipNo.text.trim(),10);
  // 2025-10-21 : 공백 제거 및 10글자는 allowChar, maxLength 속성으로 해결

  // if (!cfValidate(ed_slipNo)) return false;
  // if (!$c.gus.cfValidate(ed_slipNo) ) return false;

  let rtn1 = await $c.gus.cfValidate($p, ed_slipNo);
  if (!rtn1) return false;

  // 전표번호:yes:length=10"
  if (ed_slipNo.getValue() == "") {
    console.log("111");
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "전표번호"));
    return;
  }

  //if(confirm("복사하시겠습니까?")==true){
  let rtn2 = await $c.win.confirm($p, "복사하시겠습니까?");
  if (rtn2) {
    // 조회
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_button_default_onclick = function (e) {
  // window.returnValue=null; window.close()
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function (dataSet, isDebug) {
  console.log("=== dataSetDebug");

  // if (isDebug == true) {
  //     var obj = dataSet;
  //     var str = "[[[["+ obj.id+"]]]]]\n";
  //     for (var dsRow = 1; dsRow <= obj.CountRow; dsRow++ ){
  //         for ( var dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){
  //             str += "["+obj.ColumnId(dsCol)+"] "+obj.NameValue(dsRow, obj.ColumnId(dsCol))+", "
  //         }
  //         str += "\n\n";
  //     }
  //     alert( str );
  // }

  var rowCnt = ds_slipcopy.getTotalRow();
  var totlCol = ds_slipcopy.getTotalCol();
  if (isDebug == true) {
    var obj = dataSet;
    var str = "[[[[" + ds_slipcopy.getID() + "]]]]]\n";
    for (var dsRow = 1; dsRow <= rowCnt; dsRow++) {
      for (var dsCol = 1; dsCol <= totlCol; dsCol++) {
        str += "[" + ds_slipcopy.getColumnID(dsCol) + "] " + obj.getCellData(dsRow, ds_slipcopy.getCellData(dsCol, ds_slipcopy.getColumnID(dsCol))) + ", ";
      }
      str += "\n\n";
    }
    console.log(" str [" + str + "]");
    $c.win.alert($p, str);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_slipNo',placeholder:'',style:'',mandatory:'true',maxlength:'10',allowChar:'0-9',ref:'data:ds_search.slipNo',validExp:'전표번호:yes:length=10',title:'전표번호',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복사형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_copyKind',style:'',submenuSize:'auto',objType:'data',ref:'',title:'복사형태'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'+복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'-복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'역분개'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_button_default',label:'닫기',style:'','ev:onclick':'scwin.btn_button_default_onclick'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_button_save',label:'복사',style:'',objType:'bSave',userAuth:'R','ev:onclick':'scwin.f_Save'}}]}]}]}]}]})