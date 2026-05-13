/*amd /ui/il/seainb/sith/se_204_01_01b.xml 48760 48d7d705df7e11029b86a9b1b20f64c723037ad99d17764e394cc3ffa43e337b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'name4',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'name5',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param11',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param12',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param13',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param14',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'stdtFrom',name:'#N/A',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'stdtTo',name:'#N/A',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운항공구분',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text',length:'16'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_arrivalNoticeList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_arrivalNoticeList_onrowpositionchange','ev:ondataload':'scwin.ds_arrivalNoticeList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'stdt',name:'시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운항공구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'andt',name:'ARRIVAL NOTICE DATE',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'deliverydt',name:'납품일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cncd',name:'CONSIGNEE 코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'cnnm',name:'CONSIGNEE 명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'anno',name:'CONSIGNEE ATTN NO',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'annm',name:'CONSIGNEE ATTN NAME',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'antel',name:'담당자 전화 번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'anfax',name:'담당자 FAX',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'memo',name:'비고',dataType:'text',defaultValue:'',length:'500'}},{T:1,N:'w2:column',A:{id:'docCnt',name:'문서매수',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'shipper',name:'SHIPPER',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'vessel',name:'VESSEL',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'voyage',name:'VOYAGE',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'etdPort',name:'#N/A',dataType:'text',defaultValue:'',length:'35'}},{T:1,N:'w2:column',A:{id:'etaPort',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'출항일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'item',name:'항목',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'itemUnit',name:'입고단위',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'andtNew',name:'#N/A',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'poNo',name:'ERP전표번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'pickupDt',name:'PICK_UP_일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'empTelNo',name:'사원전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'custEmail',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'emailSendDtm',name:'이메일전송일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'mawbNo',name:'#N/A',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'fltno',name:'선명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'#N/A',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'empFaxNo',name:'0',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'avdt',name:'#N/A',dataType:'text',defaultValue:'',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copyDSForEmail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seainb.sith.RetrieveArrivalNoticeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"}, {"id":"ds_arrivalNoticeList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_arrivalNoticeList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_email',action:'/il.seainb.sith.SendEmailArrivalNoticeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_copyDSForEmail","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_email_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seainb.sith.SaveArrivalNoticeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_arrivalNoticeList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_comboMhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자 ID

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -10);
scwin.strNextDate = $c.date.addDate($p, scwin.strCurDate, 20);

//메뉴데이터
scwin.param = $c.data.getParameter($p);
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag
scwin.firstLoadFlag = false; //최초 데이터 로드시인지 확인용 Flag

scwin.onpageload = function () {
  scwin.seaair = scwin.param.seaair ?? scwin.param.menuInfo.menuParam.seaair ?? "S";
  scwin.p_kcomcd = scwin.param.kcomcd ?? "DBEX";
  scwin.p_blno = scwin.param.blno ?? "";
  scwin.p_mhno = scwin.param.mhno ?? "";
  scwin.p_eta = scwin.param.eta ?? "";
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // f_HeaderCreate();
  scwin.f_Set("INIT");
  scwin.f_DefaultValue();
  scwin.processFlag = "INIT";
  ed_cnd_ed_stdtFrom.focus();
  scwin.f_getParametrSetting(); // link처리	   

  // test data
  //ed_cnd_ed_stdtFrom.setValue("20240912");
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = function () {
  let eta = scwin.p_eta;
  if (scwin.p_blno == 'null' || scwin.p_blno == '') {
    return false;
  }
  ed_cnd_ed_blno.setValue(scwin.p_blno);
  if (eta != 'null' || eta != '') {
    ed_cnd_ed_stdtFrom.setValue(eta);
    ed_cnd_ed_stdtTo.setValue(eta);
  }
  scwin.f_MhnoLoading();
  acb_cnd_lc_mhno.focus();
};

// MHNNO 가져오기
scwin.f_MhnoLoading = async function () {
  let strClntNo = (ed_cnd_ed_blno.getValue() ?? "").toUpperCase().trim();
  let queryID = "";
  if (strClntNo.length > 0) {
    if (acb_cnd_lc_seaair.getValue() == "A") {
      queryID = "retriveAirHouseMhnoListCombo";
    } else if (acb_cnd_lc_seaair.getValue() == "S") {
      queryID = "retriveSeaHouseMhnoListCombo";
    }
    const strParam = {
      sysCd: "ilCommonEBC" // 시스템코드
      ,
      queryId: queryID // 쿼리ID
      ,
      param1: strClntNo,
      param2: "",
      param3: "",
      param4: "",
      param5: "",
      param6: "",
      param7: "",
      param8: "",
      param9: "",
      param10: ""
    };
    //데이터셋에 정보설정
    dma_commonPopup.setEmptyValue();
    dma_commonPopup.setJSON(strParam);
    let ret = await $c.sbm.execute($p, sbm_comboMhno);

    // 조회 성공시
    if (ret.responseJSON.resultDataSet[0].Code == 0) {
      console.log("ret.responseJSON.resultDataSet[0].Code = " + ret.responseJSON.resultDataSet[0].Code);
      // 데이타셋 설정
      ds_mhno.setJSON(ret.responseJSON.GAUCE);
      ed_cnd_ed_blno.setValue(strClntNo); //대문자로 처리
    }
  } else {
    ds_mhno.removeAll();
    acb_cnd_lc_mhno.setValue("");
    ds_search.set("mhno", "");
  }
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  $c.gus.cfDisableObjects($p, [acb_cnd_lc_seaair]);
  acb_cnd_lc_seaair.setValue(scwin.seaair);
  ed_cnd_ed_stdtFrom.setValue(scwin.strPreDate);
  ed_cnd_ed_stdtTo.setValue(scwin.strNextDate);
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_retrieve, null);
  acb_cnd_lc_seaair.setValue(scwin.seaair);
  ds_mhno.removeAll();
  acb_cnd_lc_mhno.setValue("");
  ds_search.set("mhno", "");
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_PrintOper, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      $c.gus.cfDisableObjects($p, [tbl_email]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      if (scwin.processFlag == "RETRIEVE") {
        $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
        $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print, btn_PrintOper]);
        $c.gus.cfEnableObjects($p, [tbl_email]);
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Update, btn_Save, btn_Delete, btn_Print, btn_PrintOper]);
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        $c.gus.cfDisableObjects($p, [tbl_email]);
      }
      break;
    case "CANCEL":
      //취소
      scwin.f_Set("RETRIEVE");
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      //gr_arrivalNoticeList.Enable = true;    
      break;
    case "UPDATE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  // $c.gus.cfEnableObjects([img_cncd, img_anno, img_andt, img_deliverydt]);
  $c.gus.cfEnableObjects($p, [udc_custCd, udc_anno, ed_emailSendDtm, ed_deliverydt]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  // $c.gus.cfDisableObjects([img_cncd, img_anno, img_andt, img_deliverydt])
  $c.gus.cfDisableObjects($p, [udc_custCd, udc_anno, ed_emailSendDtm, ed_deliverydt]);
};
scwin.acb_cnd_lc_seaair_oneditkeyup = function (info, e) {
  $c.gus.cf_objFocus($p, btn_retrieve);
};

// Customer
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp(1, 'F');
};
scwin.udc_custCd_onblurCodeEvent = function (e) {
  var strClntNo = (ed_cncd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_cnnm.setValue("");
    scwin.f_PopUp(1, 'T');
  } else {
    ed_cnnm.setValue("");
  }
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp(1, 'T');
};

// PIC
scwin.udc_anno_onclickEvent = function (e) {
  scwin.f_PopUp(2, 'F', 'img');
};
scwin.udc_anno_onblurCodeEvent = function (e) {
  var strClntNo = (ed_anno.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_annm.setValue("");
    scwin.f_PopUp(2, 'T');
  } else {
    ed_annm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case 1:
      //거래처 팝업(Search Partner)
      udc_custCd.setSelectId('retrieveEngClntInfo'); // XML상의 SELECT ID
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_cncd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_cnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '5',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      'F',
      // 전체검색허용여부	("F")                                                  
      'Customer Search,Customer Code,Customer Name'); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      break;
    case 2:
      //거래처 팝업(Customer)
      pParam = ed_cncd.getValue().trim();
      if (pParam == "") {
        $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_056, ["Customer"])); // 선택된 @이(가) 없습니다.
        ed_cncd.focus();
        return;
      }
      udc_anno.setSelectId('retrieveClntPicInfo'); // XML상의 SELECT ID	 
      udc_anno.ilCommonPopUp(scwin.udc_anno_callBackFunc, ed_anno.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_annm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "PIC",
      // Title순서	                                                           
      //'80,200,120,300',             // 보여주는 각 컬럼들의 폭	                                               
      '100,350',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      pParam,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "T",
      // 전체검색허용여부	("F")                                                  
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
      break;
    default:
      break;
  }
};
scwin.udc_custCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cncd, ed_cnnm);
};
scwin.udc_anno_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_anno, ed_annm, [ed_antel, ed_anfax, ed_antel, ed_anfax]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  if (ed_cnd_ed_stdtFrom.getValue().trim() == '' || ed_cnd_ed_stdtTo.getValue().trim() == '') {
    $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["ETA"]));
    ed_cnd_ed_stdtFrom.focus();
    return;
  }
  scwin.firstLoadFlag = true;
  scwin.f_Set("INIT");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 이메일  전송
//-------------------------------------------------------------------------
scwin.f_emailSend = async function () {
  let curRow = ds_arrivalNoticeList.getRowPosition();
  let v_features = "copyHeader=yes,rowFrom=" + curRow + ",rowCnt=" + curRow;
  $c.gus.cfCopyDataSet($p, ds_arrivalNoticeList, ds_copyDSForEmail, v_features);
  if (ds_copyDSForEmail.getCellData(0, "custEmail") == "") {
    $c.win.alert($p, "받는 사람 E-Mail 주소가 없습니다. 입력해 주세요");
    ed_email.focus();
    return false;
  }
  let blno = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "blno").trim();
  let mhno = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "mhno").trim();
  let seaair = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "seaair").trim();
  let andt = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "andt").trim();
  let odiName, reportName;
  let odiParam = {
    KCOMCD: scwin.p_kcomcd,
    BLNO: blno,
    MHNO: mhno,
    SEAAIR: seaair,
    ANDT: andt,
    USERID: scwin.userId
  };
  let viewerParam = {
    useprogressbar: false,
    mode: "export"
    // viewerParam.add("export.mode", "silent");
    // viewerParam.add("export.confirmsave", "false");
    // viewerParam.add("export.filename", "AN-(" + blno + ")");
    // viewerParam.add("export.format", "pdf");
    // viewerParam.add("export.path", "C:\\OZExport");
  };
  if (seaair == "A") {
    odiName = "ar_204_01_01";
    reportName = "/il/airinb/ar_204_01_01.ozr";
  } else if (seaair == "S") {
    odiName = "se_204_01_01";
    reportName = "/il/seainb/se_204_01_01.ozr";
  }
  let data = {
    "odiName": odiName,
    "reportName": reportName,
    "odiParam": odiParam,
    "formParam": {},
    "viewerParam": {
      "useprogressbar": false,
      "viewer": 100
    }
  };
  let saveOptions = {
    exportFilename: "AN-(" + blno + ")",
    exportPath: "C:\\OZExport",
    exportFormat: "pdf",
    exportConfirmsave: "false",
    exportMode: "silent"
  };
  $c.ext.downloadOzReport($p, data, saveOptions);
  let rtn = await $c.win.confirm($p, "메일을 전송하시겠습니까?");
  if (rtn == true) {
    ds_copyDSForEmail.setCellData(0, "custEmail", ed_email.getValue());
    $c.sbm.execute($p, sbm_email);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function (e) {
  ds_arrivalNoticeList.undoRow(ds_arrivalNoticeList.getRowPosition());
  scwin.f_Set("CANCEL");
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function (e) {
  scwin.f_Set("CREATE");
  ed_andt.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function (e) {
  scwin.f_Set("UPDATE");
  ed_andt.focus();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (scwin.f_ReqFieldChk()) {
    let rtn = await $c.win.confirm($p, E_MSG_CM_CRM_001);
    if (rtn == true) {
      //한글이 섞여서 DB저장시 길이 문제 처리
      let annm = scwin.cutStringByByte(ed_annm.getValue(), 20);
      ed_annm.setValue(annm);
      $c.sbm.execute($p, sbm_save);
      scwin.processFlag = "RETRIEVE";
      scwin.f_Set("RETRIEVE");
    }
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  let rtn = await $c.win.confirm($p, E_MSG_CM_CRM_004);
  if (rtn == true) {
    //삭제하시겠습니까?
    intRowPosition = ds_arrivalNoticeList.getRowPosition();
    ds_arrivalNoticeList.deleteRow(ds_arrivalNoticeList.getRowPosition());
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * 문자열을 바이트 단위로 체크하여 자르는 함수
 * @param {string} str - 원본 문자열
 * @param {number} maxByte - 제한할 최대 바이트 수
 * @returns {string} - 잘려진 문자열
 */
scwin.cutStringByByte = function (str, maxByte) {
  let currByte = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    // 한글(유니코드 127 초과)은 2바이트, 나머지는 1바이트 가산
    // (참고: UTF-8 환경이라면 2 대신 3을 더하면 됩니다)
    currByte += charCode > 127 ? 2 : 1;

    // 제한된 바이트를 초과하면 루프 종료
    if (currByte <= maxByte) {
      result += str.charAt(i);
    } else {
      break;
    }
  }
  return result;
};

//-------------------------------------------------------------------------
// Validate check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  let ret = await $c.gus.cfValidate($p, [oDetailInfo]);
  if (ret == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 오즈화면 ds_arrivalNoticeList.RowPosition
//-------------------------------------------------------------------------
scwin.f_Print = function (gubun) {
  if (cbx_pre.getValue() == "1" && cbx_directSave.getValue() == "1") {
    $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    cbx_pre.setValue("");
    cbx_directSave.setValue("");
    return false;
  }
  let blno = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "blno").trim();
  let mhno = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "mhno").trim();
  let seaair = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "seaair").trim();
  let andt = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "andt").trim();
  let data = undefined;
  let odiParam = {
    KCOMCD: scwin.p_kcomcd,
    BLNO: blno,
    MHNO: mhno,
    SEAAIR: seaair,
    ANDT: andt,
    USERID: scwin.userId
  };
  let odiName, reportName;
  switch (seaair) {
    case "A":
      if (gubun == "OPER") {
        odiName = "ar_204_01_01";
        reportName = "/il/airinb/ar_204_01_01_OPER.ozr";
      } else {
        odiName = "ar_204_01_01";
        reportName = "/il/airinb/ar_204_01_01.ozr";
      }
      break;
    case "S":
      odiName = "se_204_01_01";
      if (gubun == "OPER") {
        reportName = "/il/seainb/se_204_01_01_OPER.ozr";
      } else if (gubun == "NEW") {
        reportName = "/il/seainb/se_204_01_01_OPER_edit.ozr";
      } else {
        reportName = "/il/seainb/se_204_01_01.ozr";
      }
      break;
  }
  let viewerParam = {};
  if (cbx_pre.getValue() == "1") {
    // 미리보기 체크시
    viewerParam.useprogressbar = true;
    viewerParam.mode = "preview";
    let data = {
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": viewerParam,
      "formParam": {
        "odiName": odiName
      }
    };
    let opts = {
      "type": "viewer",
      // viewer, print, download
      "printMode": "view",
      // silent, view
      "exportFilename": "AN-(" + blno + ")",
      "exportPath": "C:\\OZExport",
      "exportFormat": "pdf",
      "exportMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  } else if (cbx_directSave.getValue() == "1") {
    //바로저장 체크시
    viewerParam.useprogressbar = false;
    viewerParam.mode = "export";
    let data = {
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": viewerParam,
      "formParam": {
        "odiName": odiName
      }
    };
    let saveOptions = {
      "exportFilename": "AN-(" + blno + ")",
      "exportPath": "C:\\OZExport",
      "exportFormat": "pdf",
      "exportMode": "silent",
      "exportConfirmsave": "false"
    };
    $c.ext.downloadOzReport($p, data, saveOptions);
  } else {
    //바로 출력
    viewerParam.useprogressbar = true;
    let data = {
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": viewerParam,
      "formParam": {
        "odiName": odiName
      }
    };
    $c.ext.printOzReport($p, data);
  }
};
scwin.gr_arrivalNoticeList_onrowindexchange = function (rowIndex, oldRow) {};
scwin.ds_arrivalNoticeList_onrowpositionchange = async function (info) {
  if (info.newRowIndex == null) return;
  let vRowPosition = ds_arrivalNoticeList.getRowPosition();
  //var vCountRow = scwin.hid_txt_countRow
  let vRowStatus = ds_arrivalNoticeList.getRowStatusValue(ds_arrivalNoticeList.getRowPosition());
  let row = info.newRowIndex;
  if (row >= 0) {
    let vCountRow = ds_arrivalNoticeList.getRowCount();
    let vChgCount = 0;
    let vChgRow = 0;
    for (let i = 0; i < vCountRow; i++) {
      let vCurRowStatus = ds_arrivalNoticeList.getRowStatusValue(i);
      if (vCurRowStatus == 1 || vCurRowStatus == 2) {
        // 갱신, 삽입
        vChgCount++;
        vChgRow = i;
      }
    }
    if (vChgCount > 0 && row != vChgRow) {
      await $c.win.alert($p, "프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
      gr_arrivalNoticeList.setFocusedCell(vChgRow, 1);
      return;
    }
    let andt = ds_arrivalNoticeList.getCellData(ds_arrivalNoticeList.getRowPosition(), "andt");
    if (vRowStatus == 0) {
      $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_PrintOper, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      $c.gus.cfDisableObjects($p, [tbl_email]);
      if (andt.trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Print, btn_PrintOper, btn_Update, btn_Delete]);
        $c.gus.cfEnableObjects($p, [tbl_email]);
        scwin.processFlag = "RETRIEVE";
      }
    } else if (vRowStatus == 2) {
      // Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 1) {
      // Update
      scwin.f_Set("UPDATE");
    }
  } else {
    scwin.f_Set("INIT");
    scwin.processFlag = "INIT";
  }
};
scwin.ed_cnd_ed_blno_onviewchange = function (info) {};
scwin.ed_cnd_ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading();
};
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.ds_arrivalNoticeList_onLoadCompleted();
  }
};
scwin.ds_arrivalNoticeList_onLoadCompleted = function () {
  let rowcnt = ds_arrivalNoticeList.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  } else {
    ds_arrivalNoticeList.setRowPosition(0);
    gr_arrivalNoticeList.setFocusedCell(0, "stdt");

    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(ds_arrivalNoticeList.getRowCount());
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_email_submitdone = function (e) {
  $c.win.alert($p, "성공적으로 메일을 전송했습니다.");
};
scwin.ds_arrivalNoticeList_ondataload = function () {
  scwin.arrivalNoticeListFixData();
};
scwin.arrivalNoticeListFixData = function () {
  if (!scwin.firstLoadFlag) return;
  scwin.firstLoadFlag = false;

  // 날짜 데이터 오류가 있어서 일괄 수정처리하여 화면에 바인딩하게 한다. ex) 2020/01/01 -> 20200101
  let json = ds_arrivalNoticeList.getAllJSON();
  json.forEach(row => {
    if (row.stdt != null && row.stdt != "") {
      row.stdt = row.stdt.replaceAll("/", "");
    }
    if (row.andt != null && row.andt != "") {
      row.andt = row.andt.replaceAll("/", "");
    }
    if (row.etdDt != null && row.etdDt != "") {
      row.etdDt = row.etdDt.replaceAll("/", "");
    }
    if (row.etaDt != null && row.etaDt != "") {
      row.etaDt = row.etaDt.replaceAll("/", "");
    }
  });
  ds_arrivalNoticeList.setJSON(json);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'stdtTo',refStDt:'stdtFrom',style:'',edFromId:'ed_cnd_ed_stdtFrom',edToId:'ed_cnd_ed_stdtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;text-transform:uppercase;',id:'ed_cnd_ed_blno',placeholder:'',class:'',ref:'data:ds_search.blno','data-length':'20',maxByteLength:'20','ev:onblur':'scwin.ed_cnd_ed_blno_onblur',imeMode:'disabled',allowChar:'0-9a-zA-Z','ev:onchange':'scwin.ed_cnd_ed_blno_onchange','ev:onviewchange':'scwin.ed_cnd_ed_blno_onviewchange'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_cnd_lc_mhno',class:'',ref:'data:ds_search.mhno','data-length':'16',displayMode:'label',disableEdit:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'name'}}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_cnd_lc_seaair',class:'',ref:'data:ds_search.seaair','data-length':'1','ev:oneditkeyup':'scwin.acb_cnd_lc_seaair_oneditkeyup'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_arrivalNoticeList',style:'',autoFit:'allColumn',id:'gr_arrivalNoticeList',visibleRowNum:'16',class:'wq_gvw',readOnly:'true','ev:onrowindexchange':'scwin.gr_arrivalNoticeList_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column17',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column15',value:'Consol No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column5',value:'Customer',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'stdt',name:'ETA',width:'70',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'',editFormat:'XXXX/XX/XX'}},{T:1,N:'w2:column',A:{id:'blno',name:'House',width:'110',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol',width:'85',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'cnnm',name:'Customer',width:'130',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'height:100%;',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'height:100%;',id:'oDetailInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Notice Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',id:'ed_andt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',ref:'data:ds_arrivalNoticeList.andt','data-length':'12',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Customer',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cncd',selectID:'',popupID:'',validTitle:'',nameId:'ed_cnnm',style:'',id:'udc_custCd','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',objTypeName:'data',objTypeCode:'data',refDataCollection:'ds_arrivalNoticeList',code:'cncd',name:'cnnm',maxlengthCode:'6',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'PIC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_anno',selectID:'',popupID:'',validTitle:'',nameId:'ed_annm',style:'',id:'udc_anno','ev:onclickEvent':'scwin.udc_anno_onclickEvent','ev:onblurCodeEvent':'scwin.udc_anno_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_anno_onviewchangeNameEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_arrivalNoticeList',code:'anno',name:'annm',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthName:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'TEL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_antel',placeholder:'',class:'',objType:'data',maxlength:'30',ref:'data:ds_arrivalNoticeList.antel','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'FAX',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_anfax',placeholder:'',class:'',maxlength:'30',ref:'data:ds_arrivalNoticeList.anfax','data-length':'20',maxByteLength:'20',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Document Count',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_docCnt',placeholder:'',class:'',displayFormat:'##',ref:'data:ds_arrivalNoticeList.docCnt','data-length':'3',maxByteLength:'3',objType:'data',allowChar:'0-9',maxlength:'2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Delivery Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',id:'ed_deliverydt',class:'',calendarValueType:'yearMonthDate',ref:'data:ds_arrivalNoticeList.deliverydt','data-length':'8',objType:'data',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Remark',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'height:100%;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{style:'height:100%;',id:'txt_memo',class:'',ref:'data:ds_arrivalNoticeList.memo','data-length':'500',maxByteLength:'500',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'tbl_email',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Send Date',class:''}},{T:1,N:'xf:group',A:{style:';min-width:120;',id:'grp_group7',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'width:140px;',id:'ed_emailSendDtm',class:'',calendarValueType:'yearMonthDateTimeSec',objType:'data',ref:'data:ds_arrivalNoticeList.emailSendDtm','data-length':'14',readOnly:'true'}}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Email Sending',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_email',placeholder:'',class:'',ref:'data:ds_arrivalNoticeList.custEmail','data-length':'50',maxByteLength:'50'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_email',type:'button',class:'btn','ev:onclick':'scwin.f_emailSend',objType:'bCreate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Email 전송'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_directSave',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바로저장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_pre',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Undo',style:'',id:'btn_Cancel',label:'Cancel',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.f_Create',style:'',id:'btn_Create',label:'Create',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.f_Update',style:'',id:'btn_Update',label:'Update',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.f_Save',style:'',id:'btn_Save',label:'Save',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Print(\'ORIGIN\')',style:'',id:'btn_Print',label:'Print',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Print(\'OPER\')',style:'',id:'btn_PrintOper',label:'Print(OPER)',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print(OPER)'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Print(\'NEW\')',style:'',id:'btn_PrintOper1',label:'Print_2',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print_2'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'D','ev:onclick':'scwin.f_Delete',style:'',id:'btn_Delete',label:'Delete',type:'button',class:'btn ',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]}]})