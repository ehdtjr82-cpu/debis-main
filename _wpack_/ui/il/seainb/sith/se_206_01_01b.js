/*amd /ui/il/seainb/sith/se_206_01_01b.xml 37474 92a75ea8afd6e291ed83a19a6b7bcda41636ec2b3f3c018d6d23381c6a2eaffa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'name4',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'name5',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param11',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param12',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param13',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'param14',name:'name12',dataType:'text',defaultValue:'',encYN:'false',length:'',nullYN:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text',length:'16'}},{T:1,N:'w2:key',A:{id:'stdtFrom',name:'#N/A',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'stdtTo',name:'#N/A',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'부서코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deliveryOrderList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_deliveryOrderList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'stdt',name:'시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dodt',name:'DO 발급 일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cust',name:'거래처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'custnm',name:'거래처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'attn',name:'거래처 담당자코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'attnnm',name:'거래처 담당자명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'attntel',name:'담당자 전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'attnfax',name:'담당자 FAX번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'doprint',name:'D/O 출력일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'rmk',name:'REMARK',dataType:'text',defaultValue:'',length:'200'}},{T:1,N:'w2:column',A:{id:'docnt',name:'출력횟수',dataType:'number',defaultValue:'0',length:'2'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copyDSForEmail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seainb.sith.RetrieveDeliveryOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"}, {"id":"ds_deliveryOrderList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_deliveryOrderList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seainb.sith.SaveDeliveryOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_deliveryOrderList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_comboMhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자 ID

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);

//해운 항공 구분
scwin.params = $c.data.getParameter($p);
scwin.seaair = scwin.params.seaair;
scwin.p_kcomcd = scwin.params.kcomcd;
scwin.p_blno = scwin.params.blno;
scwin.p_mhno = scwin.params.mhno;
scwin.p_eta = scwin.params.eta;
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag

scwin.hid_kcomcd = "";
scwin.hid_blno = "";
scwin.hid_mhno = "";
scwin.hid_txt_countRow = "";
scwin.hid_seaair = "";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // f_HeaderCreate();
  scwin.f_Set("INIT");
  scwin.f_DefaultValue();
  scwin.processFlag = "INIT";
  ed_cnd_ed_stdtFrom.focus();
  $c.gus.cfEnableObjects($p, [ed_cnd_ed_deptCd, ed_cnd_txt_deptNm]);

  // test data
  //ed_cnd_ed_stdtFrom.setValue("20240912");
};

// MHNNO 가져오기
scwin.f_MhnoLoading = async function () {
  let strClntNo = (ed_cnd_ed_hhblno.getValue() ?? "").toUpperCase().trim();
  if (strClntNo.length > 0) {
    let queryID = "retriveSeaHouseMhnoListCombo";
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
      ed_cnd_ed_hhblno.setValue(strClntNo); //대문자로 치환 
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
  ed_cnd_ed_stdtFrom.setValue(scwin.strPreDate);
  ed_cnd_ed_stdtTo.setValue(scwin.strCurDate);
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      if (scwin.processFlag == "RETRIEVE") {
        $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
        $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print]);
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Update, btn_Save, btn_Delete, btn_Print]);
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
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
      //gr_deliveryOrderList.Enable = true;    
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
  $c.gus.cfEnableObjects($p, [btn_cust, btn_attn, ed_dodt]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [btn_cust, btn_attn, ed_dodt]);
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
  scwin.f_Set("INIT");
  $c.sbm.execute($p, sbm_retrieve);
};

// Department
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cnd_ed_deptCd.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    ed_cnd_txt_deptNm.setValue("");
  }
};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_deptCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
};
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_deptCd, ed_cnd_txt_deptNm);
};

// Customer
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp(1, 'F');
};
scwin.udc_custCd_onblurCodeEvent = function (e) {
  let strClntNo = (ed_cust.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_custnm.setValue("");
    scwin.f_PopUp(1, 'T');
  } else {
    ed_custnm.setValue("");
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
  let strClntNo = (ed_attn.getValue() ?? "").trim();
  if (strClntNo.length > 0) {
    ed_attnnm.setValue("");
    scwin.f_PopUp(2, 'T');
  } else {
    ed_attnnm.setValue("");
  }
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------   
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = new Array();
  switch (gubun1) {
    case "DEPT":
      udc_deptCd.setSelectId('retrieveOpDeptCdInfo');
      udc_deptCd.ilCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_cnd_ed_deptCd.getValue().trim(), ed_cnd_txt_deptNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      //if(typeof(rtnList) != "undefined"){			      	
      $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_ed_deptCd, ed_cnd_txt_deptNm);
      //}
      break;
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
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_cust.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_custnm.getValue(),
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
      let pParam = ed_cust.getValue().trim();
      if (pParam == "") {
        $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_056, ["Customer"])); // 선택된 @이(가) 없습니다.
        ed_cust.focus();
        return;
      }
      udc_anno.setSelectId('retrieveClntPicInfo'); // XML상의 SELECT ID	 
      udc_anno.ilCommonPopUp(scwin.udc_anno_callBackFunc, ed_attn.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_attnnm.getValue(),
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
  $c.gus.cfSetReturnValue($p, rtnList, ed_cust, ed_custnm);
};
scwin.udc_anno_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_attn, ed_attnnm, [ed_attntel, ed_attnfax, ed_attntel, ed_attnfax]);
};
scwin.f_FieldClear = function () {
  scwin.f_DefaultValue();
  ed_cnd_ed_hhblno.setValue("");
  ds_mhno.removeAll();
  ed_cnd_ed_deptCd.setValue("");
  ed_cnd_txt_deptNm.setValue("");
  acb_cnd_lc_mhno.setValue("");
  ds_search.set("mhno", "");
};
scwin.f_Undo = function (e) {
  ds_deliveryOrderList.undoRow(ds_deliveryOrderList.getRowPosition());
  scwin.f_Set("CANCEL");
};
scwin.f_Create = function (e) {
  scwin.f_Set("CREATE");
  ;
  ed_dodt.focus();
};
scwin.f_Update = function (e) {
  scwin.f_Set("UPDATE");
  ed_dodt.focus();
};
scwin.f_Save = async function (e) {
  let rtn = await scwin.f_ReqFieldChk();
  if (rtn == true) {
    let cfm = await $c.win.confirm($p, E_MSG_CM_CRM_001);
    if (cfm == true) {
      //한글이 섞여서 DB저장시 길이 문제 처리
      let attnnm = scwin.cutStringByByte(ed_attnnm.getValue(), 20);
      ed_attnnm.setValue(attnnm);
      $c.sbm.execute($p, sbm_save);
      scwin.processFlag = "RETRIEVE";
      scwin.f_Set("RETRIEVE");
    }
  }
};
scwin.f_Delete = async function (e) {
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    //삭제하시겠습니까?
    intRowPosition = ds_deliveryOrderList.getRowPosition();
    ds_deliveryOrderList.deleteRow(ds_deliveryOrderList.getRowPosition());
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

/**
 * @method
 * @name f_Print
 * @description 오즈 리포트를 출력하기 위해 파라미터를 셋팅하고 오즈 팝업을 띄운다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_Print = function (e) {
  const dsRowIndex = ds_deliveryOrderList.getRowPosition();
  const blno = ds_deliveryOrderList.getCellData(dsRowIndex, 'hhblno').trim();
  let reportName = "/il/seainb/se_206_01_01.ozr";
  let odiName = "se_206_01_01";
  let odiParam = {
    KCOMCD: ds_deliveryOrderList.getCellData(dsRowIndex, 'kcomcd'),
    HBLNO: ds_deliveryOrderList.getCellData(dsRowIndex, 'hhblno'),
    MHNO: ds_deliveryOrderList.getCellData(dsRowIndex, 'mhno'),
    USERID: $c.data.getMemInfo($p, "userId")
  };
  if (cbx_directSave.getValue() == "1") {
    //바로저장 체크시
    let data = {
      "odiName": odiName,
      "reportName": reportName,
      "odiParam": odiParam,
      "formParam": {},
      "viewerParam": {
        "useprogressbar": true,
        "viewer": 100
      }
    };
    let saveOptions = {
      "exportFilename": "DO-(" + blno + ")",
      "exportPath": "C:\\OZExport",
      "exportFormat": "pdf",
      "exportConfirmsave": "false"
    };
    $c.ext.downloadOzReport($p, data, saveOptions);
  } else {
    let data = {
      "odiName": odiName,
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": {
        "useprogressbar": false,
        // 프로그레스바 쓸지 말지
        "printcommand": true,
        "zoom": 100 // 배율 설정
      },
      "formParam": {}
    };
    let opts = {
      "type": 'viewer',
      // viewer, print, download
      "printMode": 'view',
      // silent, view
      "exportFilename": "DO-(" + blno + ")",
      "exportPath": 'C:\\OZExport',
      "exportFormat": 'pdf',
      "exportMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.ds_deliveryOrderList_onLoadCompleted();
  }
};
scwin.ds_deliveryOrderList_onLoadCompleted = async function () {
  let rowcnt = ds_deliveryOrderList.getRowCount();
  if (rowcnt == 0) {
    await $c.win.alert($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  } else {
    ds_deliveryOrderList.setRowPosition(0);
    gr_deliveryOrderList.setFocusedCell(0, "stdt");

    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(ds_deliveryOrderList.getRowCount());
  }
};
scwin.sbm_save_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001);
  }
};
scwin.ds_deliveryOrderList_onrowpositionchange = function (info) {
  let newRowIndex = info.newRowIndex;
  let oldRowIndex = info.oldRowIndex;
  if (newRowIndex == null) {
    return;
  }
  if (newRowIndex == oldRowIndex) {
    return;
  }
  if (oldRowIndex != null) {
    scwin.f_Undo();
  }
  let vRowPosition = ds_deliveryOrderList.getRowPosition();
  let vCountRow = scwin.hid_txt_countRow;
  let vRowStatus = ds_deliveryOrderList.getRowStatusValue(ds_deliveryOrderList.getRowPosition());
  //console.log("row = " + row + " : vRowStatus = " + vRowStatus);
  if (newRowIndex >= 0) {
    vCountRow = ds_deliveryOrderList.getRowCount();
    let vChgCount = 0;
    let vChgRow = 0;
    for (let i = 0; i < vCountRow; i++) {
      let vCurRowStatus = ds_deliveryOrderList.getRowStatusValue(i);
      if (vCurRowStatus == 1 || vCurRowStatus == 2) {
        // 갱신, 삽입
        vChgCount++;
        vChgRow = i;
      }
    }
    //console.log("vChgCount > 0 && row != vChgRow) = " + vChgCount + " : " + row + " : " + vChgRow)
    if (vChgCount > 0 && newRowIndex != vChgRow) {
      $c.win.alert($p, "프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
      ds_deliveryOrderList.setRowPosition(vChgRow);
      return;
    }
    let dodt = ds_deliveryOrderList.getCellData(ds_deliveryOrderList.getRowPosition(), "dodt");
    //console.log("vRowStatus = " + vRowStatus);
    if (vRowStatus == 0) {
      $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      if (dodt.trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Print, btn_Update, btn_Delete]);
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
scwin.ed_cnd_ed_hhblno_onblur = function (e) {
  scwin.f_MhnoLoading();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'stdtTo',refStDt:'stdtFrom',style:'',edFromId:'ed_cnd_ed_stdtFrom',edToId:'ed_cnd_ed_stdtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;text-transform:uppercase;',id:'ed_cnd_ed_hhblno',placeholder:'',class:'',ref:'data:ds_search.hhblno','data-length':'20',maxByteLength:'20','ev:onblur':'scwin.ed_cnd_ed_hhblno_onblur',imeMode:'disabled',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_cnd_lc_mhno',class:'',ref:'data:ds_search.mhno','data-length':'16',displayMode:'label',disableEdit:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'name'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',codeId:'ed_cnd_ed_deptCd',nameId:'ed_cnd_txt_deptNm',id:'udc_deptCd',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_deptCd_onviewchangeNameEvent',refDataCollection:'ds_search',code:'deptCd',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no  wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_deliveryOrderList',style:'',autoFit:'allColumn',id:'gr_deliveryOrderList',visibleRowNum:'16',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column17',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column15',value:'Customer',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'Order Date',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'stdt',name:'ETA',width:'70',textAlign:'center',displayMode:'label',inputType:'text',editFormat:'XXXX/XX/XX'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'House',width:'110',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'custnm',name:'Customer',width:'85',textAlign:'left',displayMode:'label',inputType:'text'}},{T:1,N:'w2:column',A:{id:'dodt',name:'Order Date',width:'130',textAlign:'left',displayMode:'label',inputType:'text',editFormat:'XXXX/XX/XX'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'height:100%;',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'height:100%;',id:'oDetailInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Delivery Order Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_dodt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',mandatory:'true',ref:'data:ds_deliveryOrderList.dodt','data-length':'8',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Customer',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cust',selectID:'',popupID:'',validTitle:'',nameId:'ed_custnm',style:'',id:'udc_custCd','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',objTypeName:'data',objTypeCode:'data',refDataCollection:'ds_deliveryOrderList',code:'cust',name:'custnm',mandatoryCode:'true',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_cust'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_attn',selectID:'',popupID:'',validTitle:'',nameId:'ed_attnnm',style:'',id:'udc_anno','ev:onclickEvent':'scwin.udc_anno_onclickEvent','ev:onblurCodeEvent':'scwin.udc_anno_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_deliveryOrderList',code:'attn',name:'attnnm',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthName:'20',btnId:'btn_attn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEL',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_attntel',placeholder:'',style:'width:150px;',objType:'data',maxlength:'30',ref:'data:ds_deliveryOrderList.attntel','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_attnfax',placeholder:'',style:'width:150px;',objType:'data',maxlength:'30',ref:'data:ds_deliveryOrderList.attnfax','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Remark',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'height:100%;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_rmk',style:'height:100%;',ref:'data:ds_deliveryOrderList.rmk','data-length':'200',maxByteLength:'200',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_directSave',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바로저장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Undo'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Print',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'R','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})