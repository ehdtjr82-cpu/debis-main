/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_03b.xml 34114 343b42a3dae934fd9303fc8bb3991d6f0754e48f5846d944018e49bf9ceb98f3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowType',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a3',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a4',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a5',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a7',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a8',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a9',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a10',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a11',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a12',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a13',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a14',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a15',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a16',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totEscYn',name:'name22',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.rscconfirm.manpwrrscconfirm.RetrieveTermEachAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.lobranCd = memJson.lobranCd;
  scwin.lobranNm = memJson.lobranNm;
  const codeOptions = [{
    grpCd: "OP160",
    compID: "lc_occptypeCd",
    opt: {
      "range": "1,1"
    }
  }, {
    grpCd: "OP161",
    compID: "lc_dtlOccptypeCd",
    opt: {
      "range": "1,1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  ica_qryStDt.setValue(scwin.vQryStDt);
  ica_qryEndDt.setValue(scwin.vQryEndDt);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ///임시

    ///임시
    scwin.retrieveLobran();
  }, {
    "delay": 50
  });
};
scwin.retrieveLobran = function () {
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var chk = await $c.gus.cfValidate($p, [search_cond]);
  if (!chk) {
    return;
  }
  ds_results.removeAll();
  dma_search.set("lobranCd", ed_lobranCd.getValue()); //점소         
  dma_search.set("occptypeCd", lc_occptypeCd.getValue()); //직종      
  dma_search.set("dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종
  dma_search.set("qryStDt", ica_qryStDt.getValue()); //조회기간
  dma_search.set("qryEndDt", ica_qryEndDt.getValue()); //조회기간
  dma_search.set("staffNo", ed_staffNo.getValue()); //인원

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.

  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var arrParam = new Array();
  switch (disGubun) {
    case 1:
      pCode = ed_staffNo.getValue();
      pName = ed_staffNm.getValue();
      var chkCd = await $c.gus.cfValidate($p, ed_lobranCd);
      if (!chkCd) {
        return;
      }
      var chkNm = await $c.gus.cfValidate($p, ed_lobranNm);
      if (!chkNm) {
        return;
      }
      var chkDt = await $c.gus.cfValidate($p, ica_qryStDt);
      if (!chkDt) {
        return;
      }
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = ed_lobranCd.getValue(); //점소코드
      arrParam[3] = ed_lobranNm.getValue(); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = lc_occptypeCd.getValue() + "," + "D"; //직종  (정규직)
      arrParam[6] = lc_dtlOccptypeCd.getValue() + "," + "D"; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = ica_qryStDt.getValue(); //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = pClose; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      //rtnList = window.showModalDialog("/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.jsp", arrParam, "dialogHeight:450px; dialogWidth:530px; resizable=no; help:no; status:no; center=true; "); 	

      var win_url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 800;
      opts.height = 530;
      opts.popupName = '인력 검색';
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      console.log("rtnList : ", rtnList);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      //rtnList = cfCommonPopUp('retrieveOpEmpCdInfo',pCode,pName,sWinCloseTF,null,null,null,null,null,null,null,null,null); // 사원

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(""); //사원코드
        ed_staffNm.setValue(""); //사원명
      }
      break;
    case 2:
      var lobranCd = lc_lobran.getValue();
      udc_lobranCd.cfCommonPopUp(scwin.callbackOpDeptCdInfo, pCode, pName, pClose, null, null, null, null, lobranCd, null, null, null, null); //부서

      //cfSetReturnValue(rtnList, ed_lobranCd, txt_lobranNm);
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, search_cond, null);
  /*
  sCurrDate = sCurrDate.substring(0,6) + '01';
  var sEndDate = sCurrDate.toDate("YYYYMMDD").lastDate().format("YYYYMMDD");
  */

  ica_qryStDt.setValue(scwin.vQryStDt);
  ica_qryEndDt.setValue(scwin.vQryEndDt);
  lc_lobran.setValue(scwin.lobranCd);
  ed_lobranCd.setValue(scwin.lobranCd);
  ed_lobranNm.setValue(scwin.lobranNm);
  lc_lobran.focus();
};
scwin.f_headerSetting = function (startDate) {
  ds_results.removeAll();
  gr_results.setHeaderValue("hd1", startDate.toDate("YYYYMMDD").format("DD") + "일");
  gr_results.setHeaderValue("hd2", startDate.toDate("YYYYMMDD").after(0, 0, 1).format("DD") + "일");
  gr_results.setHeaderValue("hd3", startDate.toDate("YYYYMMDD").after(0, 0, 2).format("DD") + "일");
  gr_results.setHeaderValue("hd4", startDate.toDate("YYYYMMDD").after(0, 0, 3).format("DD") + "일");
  gr_results.setHeaderValue("hd5", startDate.toDate("YYYYMMDD").after(0, 0, 4).format("DD") + "일");
  gr_results.setHeaderValue("hd6", startDate.toDate("YYYYMMDD").after(0, 0, 5).format("DD") + "일");
  gr_results.setHeaderValue("hd7", startDate.toDate("YYYYMMDD").after(0, 0, 6).format("DD") + "일");
  gr_results.setHeaderValue("hd8", startDate.toDate("YYYYMMDD").after(0, 0, 7).format("DD") + "일");
  gr_results.setHeaderValue("hd9", startDate.toDate("YYYYMMDD").after(0, 0, 8).format("DD") + "일");
  gr_results.setHeaderValue("hd10", startDate.toDate("YYYYMMDD").after(0, 0, 9).format("DD") + "일");
  gr_results.setHeaderValue("hd11", startDate.toDate("YYYYMMDD").after(0, 0, 10).format("DD") + "일");
  gr_results.setHeaderValue("hd12", startDate.toDate("YYYYMMDD").after(0, 0, 11).format("DD") + "일");
  gr_results.setHeaderValue("hd13", startDate.toDate("YYYYMMDD").after(0, 0, 12).format("DD") + "일");
  gr_results.setHeaderValue("hd14", startDate.toDate("YYYYMMDD").after(0, 0, 13).format("DD") + "일");
  gr_results.setHeaderValue("hd15", startDate.toDate("YYYYMMDD").after(0, 0, 14).format("DD") + "일");
  /*
  gr_results.setHeaderValue("hd16", startDate.toDate("YYYYMMDD").after(0,0,15).format("DD") + "일");
  gr_results.setHeaderValue("hd17", startDate.toDate("YYYYMMDD").after(0,0,16).format("DD") + "일");
  gr_results.setHeaderValue("hd18", startDate.toDate("YYYYMMDD").after(0,0,17).format("DD") + "일");
  gr_results.setHeaderValue("hd19", startDate.toDate("YYYYMMDD").after(0,0,18).format("DD") + "일");
  gr_results.setHeaderValue("hd20", startDate.toDate("YYYYMMDD").after(0,0,19).format("DD") + "일");
  gr_results.setHeaderValue("hd21", startDate.toDate("YYYYMMDD").after(0,0,20).format("DD") + "일");
  gr_results.setHeaderValue("hd22", startDate.toDate("YYYYMMDD").after(0,0,21).format("DD") + "일");
  gr_results.setHeaderValue("hd23", startDate.toDate("YYYYMMDD").after(0,0,22).format("DD") + "일");
  gr_results.setHeaderValue("hd24", startDate.toDate("YYYYMMDD").after(0,0,23).format("DD") + "일");
  gr_results.setHeaderValue("hd25", startDate.toDate("YYYYMMDD").after(0,0,24).format("DD") + "일");
  gr_results.setHeaderValue("hd26", startDate.toDate("YYYYMMDD").after(0,0,25).format("DD") + "일");
  gr_results.setHeaderValue("hd27", startDate.toDate("YYYYMMDD").after(0,0,26).format("DD") + "일");
  gr_results.setHeaderValue("hd28", startDate.toDate("YYYYMMDD").after(0,0,27).format("DD") + "일");
  gr_results.setHeaderValue("hd29", startDate.toDate("YYYYMMDD").after(0,0,28).format("DD") + "일");
  gr_results.setHeaderValue("hd30", startDate.toDate("YYYYMMDD").after(0,0,29).format("DD") + "일");
  gr_results.setHeaderValue("hd31", startDate.toDate("YYYYMMDD").after(0,0,30).format("DD") + "일");
  */
};

/////////////////////////////////////////////////////////
//////////////// Callback EVENT START  //////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// Callback EVENT END    //////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// OBJECT EVENT START//////////////////////
/////////////////////////////////////////////////////////

scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_staffNo_onviewchangeCodeEvent = function (info) {
  //scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_lobranCd.getValue(), ed_lobranNm.getValue(), 'F', 'F');
};
/*
scwin.udc_lobranCd_onviewchangeCodeEvent = function (info) {
    scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 2);
};
*/
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 2);
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.ica_qryStDt_onblur = function (e) {
  if (ica_qryStDt.getValue() != "" && ica_qryStDt.getValue() != null) {
    var sStDate = ica_qryStDt.getValue();
    //var sEndDate = sStDate.toDate("YYYYMMDD").after(0,0,14).format("YYYYMMDD");
    var sEndDate = sStDate.substring(0, 6) + new Date(sStDate.substring(0, 4), sStDate.substring(4, 6), 0).getDate();
    ica_qryEndDt.setValue(sEndDate);
    scwin.f_headerSetting(sStDate);
  } else {
    ica_qryEndDt.setValue("");
  }
};
scwin.lc_lobran_onviewchange = function (info) {
  ed_lobranCd.setValue(lc_lobran.getValue());
  ed_lobranNm.setValue(ds_lobran.getCellData(lc_lobran.getSelectedIndex() - 1, "lobranNm"));
};

/////////////////////////////////////////////////////////
//////////////// OBJECT EVENT END  //////////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// Submission EVENT START  ////////////////
/////////////////////////////////////////////////////////

scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    lc_lobran.setValue(scwin.lobranCd);
    ed_lobranCd.setValue(scwin.lobranCd);
    ed_lobranNm.setValue(scwin.lobranNm);
  }
};
scwin.callbackOpDeptCdInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm);
};
/////////////////////////////////////////////////////////
//////////////// Submission EVENT END  //////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////////// DataSet EVENT START  ///////////////////
/////////////////////////////////////////////////////////

scwin.ds_results_ondataload = function () {
  var rowCnt = ds_results.getRowCount();
  spa_cnt.setValue(rowCnt / 2);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

/////////////////////////////////////////////////////////
//////////////// DataSet EVENT END  /////////////////////
/////////////////////////////////////////////////////////
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'search_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:250px;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width: 200px;',submenuSize:'auto',ref:'',textAlign:'left',displayMode:'value delim label',delimiter:'-',chooseOption:'true',chooseOptionLabel:'전체','ev:onviewchange':'scwin.lc_lobran_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',btnId:'btn_lobranCd',id:'udc_lobranCd',objType:'data',allowCharCode:'0-9,A-Z,a-z',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',UpperFlagCode:'1',validExpCode:'물류부서:yes',validExpName:'물류부서:yes',selectID:'retrieveOpDeptCdInfo',refDataCollection:'dma_search',code:'lobranCd','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_lobranCd_onviewchangeCodeEvent',validTitle:'물류부서',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'cal-input',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_qryStDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',editType:'select',rightAlign:'false',title:'근무일자',validCheck:'true','ev:onblur':'scwin.ica_qryStDt_onblur'}},{T:1,N:'w2:span',A:{id:'',label:'~',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',displayFormat:'yyyy/MM/dd',editType:'select',id:'ica_qryEndDt',objType:'data',rightAlign:'false',style:'',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_occptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'',textAlign:'left',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'code'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dtlOccptypeCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',ref:'',textAlign:'left',displayMode:'value delim label',delimiter:'-',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'code'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_staffNo',id:'udc_staffNo',allowCharCode:'A-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'data',UpperFlagCode:'1',selectID:'',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_staffNo_onviewchangeCodeEvent',code:'staffNo','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기간별근태조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',grdDownOpts:'{"fileName":"기간별근태조회.xlsx","sheetName" : "기간별근태조회", "type":"4+8+16"}',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',focusMode:'row',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'사업부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'사번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'사원명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'93',inputType:'text',style:'',id:'rowType',value:'두줄구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd1',inputType:'text',removeBorderStyle:'false',width:'150',value:'1일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd2',inputType:'text',removeBorderStyle:'false',width:'150',value:'2일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd3',inputType:'text',removeBorderStyle:'false',width:'150',value:'3일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd4',inputType:'text',removeBorderStyle:'false',width:'150',value:'4일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd5',inputType:'text',removeBorderStyle:'false',width:'150',value:'5일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd6',inputType:'text',removeBorderStyle:'false',width:'150',value:'6일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd7',inputType:'text',removeBorderStyle:'false',width:'150',value:'7일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd8',inputType:'text',removeBorderStyle:'false',width:'150',value:'8일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd9',inputType:'text',removeBorderStyle:'false',width:'150',value:'9일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd10',inputType:'text',removeBorderStyle:'false',width:'150',value:'10일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd11',inputType:'text',removeBorderStyle:'false',width:'150',value:'11일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd12',inputType:'text',removeBorderStyle:'false',width:'150',value:'12일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd13',inputType:'text',removeBorderStyle:'false',width:'150',value:'13일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd14',inputType:'text',removeBorderStyle:'false',width:'150',value:'14일',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hd15',inputType:'text',removeBorderStyle:'false',width:'150',value:'15일',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'연근',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd16',value:'16일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd17',value:'17일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd18',value:'18일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd19',value:'19일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd20',value:'20일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd21',value:'21일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd22',value:'22일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd23',value:'23일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd24',value:'24일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd25',value:'25일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd26',value:'26일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd27',value:'27일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd28',value:'28일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd29',value:'29일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd30',value:'30일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'hd31',value:'31일',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',colSpan:'',rowSpan:'',colMerge:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'staffNo',value:'',displayMode:'label',colSpan:'',rowSpan:'',colMerge:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'staffNm',value:'',displayMode:'label',colSpan:'',rowSpan:'',colMerge:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'93',inputType:'text',style:'',id:'rowType',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a1',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a2',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a3',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a4',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a5',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a6',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a7',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a8',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a9',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a10',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a11',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a12',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a13',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a14',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'a15',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'a16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totEscYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})