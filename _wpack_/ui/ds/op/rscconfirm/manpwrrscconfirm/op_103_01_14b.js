/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_14b.xml 27062 d184310aa9ca5e199f2e37e5d362d61cab55e99e105586efe1587e28ee675384 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchStaff'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkBox',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bftCnt',name:'조식건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bftAmt',name:'조식금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dnrCnt',name:'석식건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dnrAmt',name:'저녁식사금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sprCnt',name:'야식건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sprAmt',name:'야식금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lunCnt',name:'중식',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lunAmt',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCostCnt',name:'교통비건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'교통비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfee',name:'목욕비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcfee1',name:'기타비1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcfee2',name:'기타비2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcfee3',name:'기타비3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'overtimeCnt',name:'특근비건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'overtimeAmt',name:'특근비금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchStaff',action:'/ds.op.rscconfirm.manpwrrscconfirm.RetrieveWholeWelfareSalaryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchStaff","key":"IN_DS1"},{"id":"ds_staff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_staff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchStaff_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveWork',action:'/ds.op.rscconfirm.manpwrrscconfirm.CreateWholeWelfareSalaryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_staff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveWork_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.hid_txt_wrkDt = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  scwin.loUpperLobranNm = memJson.loUpperLobranNm;
  const codeOptions = [{
    grpCd: "OP161",
    compID: "lc_dtlOccptypeCd",
    opt: {
      "range": "1,1"
    }
  } // 처리여부
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_qryWrkDt.setValue(scwin.vCurDate);
    ica_qryWrkDt2.setValue(scwin.vCurDate);
    ed_branCd.focus();
    ed_branCd.setValue(scwin.loUpperLobranCd);
    ed_branNm.setValue(scwin.loUpperLobranNm);

    ///임시
    /*
    ed_branCd.setValue("4AA");
    ica_qryWrkDt.setValue("20250101");
    ica_qryWrkDt2.setValue("20250201");
    */
    ///임시
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var chk = await $c.gus.cfValidate($p, [searchCondition]);
  if (!chk) {
    return;
  }
  /*
  if (!cfValidate(searchCondition2)){
      return;
  }
  */
  ds_staff.removeAll();
  dma_searchStaff.set("branCd", ed_branCd.getValue()); //점소
  dma_searchStaff.set("dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종
  dma_searchStaff.set("staffNo", ed_staffNo.getValue()); //인원
  dma_searchStaff.set("wrkDt", ica_qryWrkDt.getValue()); //일자
  dma_searchStaff.set("wrkEndDt", ica_qryWrkDt2.getValue()); //일자

  $c.sbm.execute($p, sbm_searchStaff);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_staff.getRowCount() == 0) return;
  var checked = 0;
  for (var i = 0; i < ds_staff.getRowCount(); i++) {
    if (ds_staff.getCellData(i, "checkBox") == "T") {
      checked++;
    }
  }
  if (checked == 0) return;
  var chkAlert = await $c.win.confirm($p, "체크된 인원에 대하여, 복리 후생비를 일괄생성하시겠습니까?");
  if (!chkAlert) return;
  $c.sbm.execute($p, sbm_saveWork);
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //점소
      udc_branCd.cfCommonPopUp(scwin.callbackRetrieveLogisDeptInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //점소

      //점소코드  점소명

      break;
    case 2:
      var arrParam = new Array();
      var chk = $c.gus.cfValidate($p, ed_branCd);
      if (!chk) {
        return;
      }
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = ed_branCd.getValue(); //점소코드
      arrParam[3] = ed_branNm.getValue(); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = lc_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

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
    /*
    case 3:	
        var chk = $c.gus.cfValidate(ed_branCd);
        if (!chk){
            return;
        }
        
        
        var pWhere ="";
        var lobranCd="";
        var occptypeCd="";
        var dtlOccpTypeCd="";
        
        lobranCd = ed_branCd.getValue();
        pWhere = lobranCd;
        //3: lobranCd  //점소
        //4: OCCPTYPE_CD  //직종
        //5: DTL_OCCPTYPE_CD  //상세직종
        
    
        //인원
        cfCommonPopUp(
                                scwin.callbackRetrieveDtlOccptypeWrkPlanTrgt
                                ,pCode
                                ,pName
                                ,pClose
                                ,null
                                ,null
                                ,null
                                ,null
                                ,null
                                ,pWhere   //
                                ,null
                                ,null
                                ,null);
                                
                                    //사번  인원명
        cfSetReturnValue(rtnList, ed_staffNo, txt_staffNm);
        break;
    */
  }
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, searchCondition, null);
  ica_qryWrkDt.setValue(scwin.vCurDate);
};
scwin.f_reverse = function () {
  if (ds_staff.getRowCount() < 1) return;
  var checked = 0;
  for (var i = 0; i < ds_staff.getRowCount(); i++) {
    if (ds_staff.getCellData(i, "checkBox") == "T") {
      checked++;
    }
  }
  for (var j = 0; j < ds_staff.getRowCount(); j++) {
    if (checked > 0) {
      ds_staff.setCellData(j, "checkBox", "F");
    } else {
      ds_staff.setCellData(j, "checkBox", "T");
    }
  }
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_reverse_onclick = function (e) {
  scwin.f_reverse();
};
scwin.callbackRetrieveLogisDeptInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_branCd, ed_branNm);
};
/*
scwin.callbackRetrieveDtlOccptypeWrkPlanTrgt = function (rtnList) {
    $c.gus.cfSetReturnValue(rtnList, ed_staffNo, ed_staffNm);
}
*/

scwin.sbm_saveWork_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    scwin.f_Retrieve();
  }
};
scwin.sbm_searchStaff_submitdone = function (e) {
  var rowCnt = ds_staff.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  spa_cnt.setValue(rowCnt);
};
scwin.udc_branCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_branCd.getValue(), ed_branNm.getValue(), 'F', 'F');
};
scwin.udc_branCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_branCd, ed_branNm, 1);
};
scwin.udc_branCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_branNm, ed_branCd, 1, false);
};
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 2);
};
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 2, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_branCd',nameId:'ed_branNm',btnId:'btn_branCd',objTypeCode:'data',validExpCode:'소속:yes',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1',editTypeCode:'select',maxlengthCode:'4',validExpName:'소속:yes',mandatoryName:'true',id:'udc_branCd',selectID:'retrieveLogisDeptInfo',validTitle:'소속','ev:onclickEvent':'scwin.udc_branCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_branCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_branCd_onviewchangeNameEvent',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar7',refDataMap:'dma_searchStaff',refEdDt:'wrkEndDt',refStDt:'wrkDt',style:'',edFromId:'ica_qryWrkDt',edToId:'ica_qryWrkDt2',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y',titleFrom:'작업일자시작',titleTo:'작업일자종료'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtlOccptypeCd',ref:'',renderType:'',style:'width: 150px;',submenuSize:'auto',textAlign:'left',delimiter:'-',displayMode:'value delim label',chooseOptionLabel:'전체',allOption:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_staffNo',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z',editTypeCode:'select',objTypeCode:'data',id:'udc_staffNo',validTitle:'인원','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사원 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"사원.xlsx","sheetName" : "사원", "type":"4+8+16"}',gridID:'gr_staff'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_staff',style:'',id:'gr_staff',visibleRowNum:'17',class:'wq_gvw',defaultCellHeight:'24',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',displayMode:'label',rowSpan:'2',class:'',value:'선택',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column4',value:'사번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'성명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column6',value:'소속',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column7',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'200',inputType:'text',id:'column8',value:'직종',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'140',inputType:'text',id:'column9',value:'상세직종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'550',inputType:'text',id:'column10',value:'조식',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column11',value:'석식',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'370',inputType:'text',id:'column12',value:'야식',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',id:'column13',value:'중식',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',id:'column14',value:'교통비',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'목욕비',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column16',value:'기타1',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'기타2',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'기타3',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column18',value:'특근비',displayMode:'label',colSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'150',inputType:'text',id:'column129',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'200',inputType:'text',id:'column130',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column131',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column132',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column112',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column134',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column136',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column137',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column138',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column142',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'checkBox',displayMode:'label',trueValue:'T',falseValue:'F',checkAlways:'true',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'wrkDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'staffNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'staffNm',class:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lobranNm',class:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occpgrdNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'occptypeNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dtlOccptypeNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bftCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'bftAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dnrCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dnrAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sprCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sprAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lunCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lunAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trffcCostCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trffcCost',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bfee',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etcfee1',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etcfee2',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etcfee3',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'overtimeCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'overtimeAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_reverse',label:'삭제',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_reverse_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체선택'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})