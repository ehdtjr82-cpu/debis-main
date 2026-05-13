/*amd /ui/ds/lo/comninfomgnt/lo_100_05_01b.xml 80561 344e7710fbdcb6e2ee1f13ea565f31e43e051f4a53492ee55078d54e02fb1b77 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cnd_item'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtTrfClsCd',name:'계약요율구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvYn',name:'하역여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transYn',name:'운송여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strYn',name:'보관료 생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inatYn',name:'국제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'agentYn',name:'대리점여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distchYn',name:'유통여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemYn',name:'매출입항목여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperSelpchItemCd',name:'상위매출입항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_item',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_item_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_item_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemEngNm',name:'매출입항목영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucTrfItemNm',name:'고시요율항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsYn',name:'매입생성여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stvYn',name:'하역여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transYn',name:'운송여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'strYn',name:'보관료 생성여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'inatYn',name:'국제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'agentYn',name:'대리점여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'distchYn',name:'유통여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ctrtTrfYn',name:'계약요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cnfrTrfYn',name:'협의요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'anucTrfYn',name:'고시요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'extrTrfYn',name:'부대요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpRltYn',name:'작업단계관련여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcScYn',name:'할인할증여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ctrtTrfClsCd',name:'계약요율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anucTrfClsCd',name:'고시요율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScClssCd',name:'할인할증분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTrfYn',name:'내부요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostItemYn',name:'표준원가항목여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wageYn',name:'노임여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wageDuseYn',name:'노임일용여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wageAdptPatternCd',name:'노임적용유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctCd',name:'매출차변계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctCd',name:'매출대변계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctCd',name:'매입차변계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctCd',name:'대변계정_차량별원가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSelpchItemCd',name:'상위매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSelpchItemNm',name:'상위매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWageSelpchItemCd',name:'상위노임매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWageSelpchItemNm',name:'상위노임매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctNm',name:'매출차변계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCrAcctNm',name:'매출대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDrAcctNm',name:'매입차변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCrAcctNm',name:'매입대변계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveSellpurchaseItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cnd_item","key":"IN_DS1"},{"id":"ds_item","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_item","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveSellpurchaseItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_item","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : 
// scwin.desc : 전역변수 선언
//------------------------------------------------------------------------- 
scwin.pos_item = 0;
scwin.gubun_callback = "";
scwin.searchFlag = false;
//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.f_OnLoad = function () {
  //f_setDSHeader( ds_cnd_item, "1" );
  //f_setDSHeader( ds_item,     "2" );
  console.log("scwin.f_OnLoad~~");
  const codeOptions = [{
    grpCd: "SD130",
    compID: "acb_cnd_ctrtTrfClsCd,acb_ctrtTrfClsCd,gr_item:ctrtTrfClsCd"
  } //계약요율구분
  , {
    grpCd: "LO124",
    compID: "acb_anucTrfClsCd,gr_item:anucTrfClsCd"
  } //고시요율구분
  , {
    grpCd: "LO125",
    compID: "acb_dcScClssCd,gr_item:dcScClssCd"
  } //할인할증분류
  , {
    grpCd: "OP255",
    compID: "gr_item:wageAdptPatternCd,acb_wageAdptPatternCd"
  } //노임적용유형
  //,{ grpCd: "FS853", compID: "gr_item:wageAdptPatternCd,acb_wageAdptPatternCd"}            //노임적용유형
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_set("ONLOAD");
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// scwin.name : f_set
// scwin.desc : 화면 open시 초기 데이타 setting
//------------------------------------------------------------------------- 
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      ed_cnd_selpchItemCd.focus();
      $c.gus.cfDisableBtn($p, [btn_save]);
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_FieldClear
// scwin.desc : 조회조건 Clear
//------------------------------------------------------------------------- 
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tbl_cndArea, hid_cnd_upperSelpchItemCd]);
  //$c.gus.cfInitObjects([tbl_cndArea]);
  //hid_cnd_upperSelpchItemCd.setValue("");
};
scwin.updCheck = async function () {
  if (ds_item.getModifiedJSON().length > 0) {
    if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
      //변경사항이 반영되지 않았습니다. 계속 하시겠습니까?
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ds_item.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);

  //tr_retrieve.action = "/ds.lo.comninfomgnt.RetrieveSellpurchaseItemListCMD.do"; //개발시 정정영역
  //tr_retrieve.post();    
};

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //if( cfValidate([gr_item]) && f_validate() ){  // 화면에서 전체 조회하고 데이타의 유효성 체크를 하면서 속도가 느려짐. (필수항목체크는 하고 있음) 
  //if( scwin.f_validate() ){
  //console.log('ds_item.getModifiedJSON() ==>');
  //console.log(ds_item.getModifiedJSON());

  if (ds_item.getModifiedJSON().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["매출입항목관리"]); //@은(는) 변경된 사항이 없습니다
    return;
  } else {
    //if(await scwin.f_validate() ){
    if (ds_item.getRowStatus(ds_item.getRowPosition()) == "D") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?
        scwin.searchFlag = true;
        scwin.pos_item = ds_item.getRowPosition();
        $c.sbm.execute($p, sbm_save);

        //tr_save.action = "/ds.lo.comninfomgnt.SaveSellpurchaseItemListCMD.do";
        //tr_save.Post();
      }
    } else if ((await $c.gus.cfValidate($p, [tbl_detailArea])) && (await scwin.f_validate())) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?
        scwin.searchFlag = true;
        scwin.pos_item = ds_item.getRowPosition();
        $c.sbm.execute($p, sbm_save);

        //tr_save.action = "/ds.lo.comninfomgnt.SaveSellpurchaseItemListCMD.do";
        //tr_save.Post();
      }
    }
  }

  /*
  //if(ds_item.IsUpdated == true ){
      if(ds_item.getModifiedJSON().length > 0){
          if(await scwin.f_validate() ){
              if(await $c.win.confirm(MSG_CM_CRM_001)){ //저장하시겠습니까?
                  scwin.pos_item = ds_item.getRowPosition();
                  $c.sbm.execute(sbm_save);
                   //tr_save.action = "/ds.lo.comninfomgnt.SaveSellpurchaseItemListCMD.do";
                  //tr_save.Post();
              }
          }
  }else{
  $c.gus.cfAlertMsg(MSG_CM_ERR_001, ["매출입항목관리"]); //@은(는) 변경된 사항이 없습니다
  }
  //}
  */
};

//-------------------------------------------------------------------------
// scwin.name : f_addRow
// scwin.desc : 매출입항목 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = async function () {
  //if(ds_item.getRowCount() == 0)	scwin.f_setDSHeader(ds_item, "2");
  if (!(await scwin.f_validate())) {
    return;
  }
  ds_item.setEventPause("", true);
  var row = ds_item.insertRow();

  //ds_item.setCellData(row, "useYn",1);
  $c.gus.cfEnableObjects($p, [acb_ctrtTrfClsCd, acb_anucTrfClsCd, acb_dcScClssCd, ed_wrkStpNm]);
  $c.gus.cfGoPrevPosition($p, gr_item, row); //첫번째 row 포지션이동
  $c.gus.cfEnableObjects($p, [ed_wrkStpNm, btn_wrkStpNm]); //행추가시 활성
  ed_selpchItemNm.focus();
  ds_item.setEventPause("", true);

  //gr_item.setFocusedCell(row, "selpchItemCd", false);
};

//-------------------------------------------------------------------------
// scwin.name : f_deleteRow
// scwin.desc : 매출입항목 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  console.log("scwin.f_deleteRow");

  //ds_item.DeleteMarked();
  var row = ds_item.getRowPosition();
  scwin.pos_item = row;
  ds_item.setEventPause("", true);
  if (ds_item.getRowStatus(row) == "C") {
    ds_item.removeRow(row);
    if (row > 0) {
      gr_item.setFocusedCell(row - 1, "selpchItemNm", false);
    } else {
      gr_item.setFocusedCell(row, "selpchItemNm", false);
    }
  } else {
    ds_item.deleteRow(row);
    gr_item.setFocusedCell(row, "selpchItemNm", false);
  }
  scwin.f_set("DELETE");
  ds_item.setEventPause("", false);
};

//-------------------------------------------------------------------------
// scwin.name : f_cancelRow
// scwin.desc : 매출입항목 행취소
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
  //ds_item.Undo(ds_item.getRowPosition());
  ds_item.undoRow(scwin.pos_item);
  scwin.f_set("RETRIEVE");
};

//-------------------------------------------------------------------------
// scwin.name : f_init
// scwin.desc : 매출입항목  화면 초기화 
//-------------------------------------------------------------------------
scwin.f_init = function () {
  if (ds_item.getCellData(ds_item.getRowPosition(), "ctrtTrfYn") == 0) {
    $c.gus.cfDisableObjects($p, [acb_ctrtTrfClsCd]);
  } else {
    $c.gus.cfEnableObjects($p, [acb_ctrtTrfClsCd]);
  }
  /*	
  	if(ds_item.getCellData(ds_item.getRowPosition(),"anucTrfYn") == 0){		
          cfDisableObjects([acb_anucTrfClsCd]);		
  	}else{
  	    cfEnableObjects([acb_anucTrfClsCd]);
  	} 
  */
  if (ds_item.getCellData(ds_item.getRowPosition(), "dcScYn") == 0) {
    $c.gus.cfDisableObjects($p, [acb_dcScClssCd]);
  } else {
    $c.gus.cfEnableObjects($p, [acb_dcScClssCd]);
  }
  if (ds_item.getCellData(ds_item.getRowPosition(), "internalTrfYn") == 0) {
    $c.gus.cfDisableObjects($p, [ed_wrkStpNm, btn_wrkStpNm]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_wrkStpNm, btn_wrkStpNm]);
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUpBefore
// scwin.desc : 팝업열기 전에 체크
//-------------------------------------------------------------------------
scwin.f_openPopUpBefore = function (gubun, nmObj, cdObj, pWinCloseTF) {
  console.log("scwin.f_openPopUpBefore~~");
  //console.log("cdObj ==> "+cdObj);

  if (nmObj.getValue() == nmObj.hidVal || nmObj.getValue() == "") {
    return;
  } else {
    /*
            if(cdObj == "scwin.hid_cnd_upperSelpchItemCd"){
               scwin.hid_cnd_upperSelpchItemCd = "";
            }else if(cdObj == "scwin.hid_upperSelpchItemCd"){
                scwin.hid_upperSelpchItemCd = "";
            }else if(cdObj == "scwin.hid_wrkStpCd"){
                scwin.hid_wrkStpCd = "";
            }else if(cdObj == "scwin.hid_upperWageSelpchItemCd"){
                scwin.hid_upperWageSelpchItemCd = "";
            }else if(cdObj == "scwin.hid_sellDrAcctCd"){
                scwin.hid_sellDrAcctCd = "";
            }else if(cdObj == "scwin.hid_sellCrAcctCd"){
                scwin.hid_sellCrAcctCd = "";
            }else if(cdObj == "scwin.hid_pchsDrAcctCd"){
                scwin.hid_pchsDrAcctCd = "";
            }else if(cdObj == "scwin.hid_pchsCrAcctCd"){
                scwin.hid_pchsCrAcctCd = "";
            }
    
            
            if(nmObj.getValue() == ""){
                return;
            }
    		if(nmObj.getValue() == ""){
    			cdObj.setValue("");
    			return;
    		}else{
    			cdObj.setValue("");
    		}
        */
    cdObj.setValue("");
  }

  //console.log("cdObj1 ==> "+[cdObj]);
  //console.log("cdObj2 ==> " +"scwin."+"['"+cdObj+"']");
  //console.log("cdObj3 ==> " +"scwin."+"["+cdObj+"]");
  scwin.f_openPopUp(gubun, pWinCloseTF);
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUp
// scwin.desc : 팝업열기
// gubun : D=차변계정, C=대변계정
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var pCodeObj = "";
  var pNameObj = "";
  var rtnList = new Array();
  if (gubun == "D1") {
    //매출차변계정코드
    pSelectID = "retrieveAcctCdInfo";
    pCode = hid_sellDrAcctCd;
    pName = ed_sellDrAcctNm;
    pWhere = ",,,D";
    pTitle = "매출차변계정코드,매출차변계정명";
    pWindowTitle = "매출차변계정코드조회,매출차변계정코드,매출차변계정명";
  } else if (gubun == "C1") {
    //매출대변계정코드
    pSelectID = "retrieveAcctCdInfo";
    pCode = hid_sellCrAcctCd;
    pName = ed_sellCrAcctNm;
    pWhere = ",,,C";
    pTitle = "매출대변계정코드,매출대변계정명";
    pWindowTitle = "매출대변계정코드조회,매출대변계정코드,매출대변계정명";
  } else if (gubun == "D2") {
    //매입차변계정코드
    pSelectID = "retrieveAcctCdInfo";
    pCode = hid_pchsDrAcctCd;
    pName = ed_pchsDrAcctNm;
    pWhere = ",,,";
    pTitle = "매입차변계정코드,매입차변계정명";
    pWindowTitle = "매입차변계정코드조회,매입차변계정코드,매입차변계정명";
  } else if (gubun == "C2") {
    //매입대변계정코드
    pSelectID = "retrieveAcctCdInfo";
    pCode = hid_pchsCrAcctCd;
    pName = ed_pchsCrAcctNm;
    pWhere = ",,,";
    pTitle = "매입대변계정코드,매입대변계정명";
    pWindowTitle = "매입대변계정코드조회,매입대변계정코드,매입대변계정명";
  } else if (gubun == "W1") {
    //작업단계코드
    pSelectID = "retrieveWrkStp";
    pCode = hid_wrkStpCd;
    pName = ed_wrkStpNm;
    pWhere = null;
    pTitle = "작업단계코드,작업단계명";
    pWindowTitle = "작업단계코드조회,작업단계코드,작업단계명";
  } else if (gubun == "U1") {
    //상위매출입항목코드(조건절)
    pSelectID = "retrieveSelpchItemInfo";
    pCode = hid_cnd_upperSelpchItemCd;
    pName = ed_cnd_upperSelpchItemNm;
    pWhere = ',,,,,';
    pTitle = "항목코드,항목명";
    pWindowTitle = "상위매출입항목코드조회,항목코드,항목명";
  } else if (gubun == "U2") {
    //상위매출입항목코드
    pSelectID = "retrieveSelpchItemInfo";
    pCode = hid_upperSelpchItemCd;
    pName = ed_upperSelpchItemNm;
    pWhere = ',,,,,';
    pTitle = "항목코드,항목명";
    pWindowTitle = "상위매출입항목코드조회,항목코드,항목명";
  } else if (gubun == "U3") {
    //상위노임매출입항목코드
    pSelectID = "retrieveSelpchItemInfo";
    pCode = hid_upperWageSelpchItemCd;
    pName = ed_upperWageSelpchItemNm;
    pWhere = ',,,,,';
    pTitle = "항목코드,항목명";
    pWindowTitle = "상위노임매출입항목코드조회,항목코드,항목명";
  }

  //rtnList = cfCommonPopUp(pSelectID	            // XML상의 SELECT ID	

  scwin.gubun_callback = gubun;
  udc_comCodeGrid.setSelectId(pSelectID);
  rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, pCode.getValue() // 화면에서의 ??? Code Element의	Value
  , pName.getValue() // 화면에서의 ??? Name Element의	Value
  , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , pTitle // Title순서	
  , '150,210' // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
  , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , pWindowTitle // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  pCode.setValue("");
  pName.setValue("");

  /*		
  	if(gubun == "D1"){ //매출차변계정코드
  		$c.gus.cfSetReturnValue(rtnList, scwin.hid_sellDrAcctCd, ed_sellDrAcctNm);
  	}else if(gubun == "C1"){ //매출대변계정코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_sellCrAcctCd, ed_sellCrAcctNm);
  	}else if(gubun == "D2"){ //매입차변계정코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_pchsDrAcctCd, ed_pchsDrAcctNm);
  	}else if(gubun == "C2"){ //매입대변계정코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_pchsCrAcctCd, ed_pchsCrAcctNm);
  	}else if(gubun == "W1"){ //작업단계코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_wrkStpCd, ed_wrkStpNm);
  	}else if(gubun == "U1"){ //상위매출입항목코드(조건절)
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_cnd_upperSelpchItemCd, ed_cnd_upperSelpchItemNm);
  	}else if(gubun == "U2"){ //상위매출입항목코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_upperSelpchItemCd, ed_upperSelpchItemNm);
  	}else if(gubun == "U3"){ //상위노임매출입항목코드
  	    $c.gus.cfSetReturnValue(rtnList, scwin.hid_upperWageSelpchItemCd, ed_upperWageSelpchItemNm);	    
  	}
  */
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  console.log("scwin.udc_comCodeGridCallback~~~");
  //console.log("scwin.gubun_callback~~~"+scwin.gubun_callback);

  if (scwin.gubun_callback == "D1") {
    //매출차변계정코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_sellDrAcctCd, ed_sellDrAcctNm);
  } else if (scwin.gubun_callback == "C1") {
    //매출대변계정코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_sellCrAcctCd, ed_sellCrAcctNm);
  } else if (scwin.gubun_callback == "D2") {
    //매입차변계정코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_pchsDrAcctCd, ed_pchsDrAcctNm);
  } else if (scwin.gubun_callback == "C2") {
    //매입대변계정코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_pchsCrAcctCd, ed_pchsCrAcctNm);
  } else if (scwin.gubun_callback == "W1") {
    //작업단계코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_wrkStpCd, ed_wrkStpNm);
  } else if (scwin.gubun_callback == "U1") {
    //상위매출입항목코드(조건절)
    $c.gus.cfSetReturnValue($p, rtnList, hid_cnd_upperSelpchItemCd, ed_cnd_upperSelpchItemNm);
  } else if (scwin.gubun_callback == "U2") {
    //상위매출입항목코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_upperSelpchItemCd, ed_upperSelpchItemNm);
  } else if (scwin.gubun_callback == "U3") {
    //상위노임매출입항목코드
    $c.gus.cfSetReturnValue($p, rtnList, hid_upperWageSelpchItemCd, ed_upperWageSelpchItemNm);
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_validate
// scwin.desc : 매출입상세정보에서 사업영역과 매출입구분의 체크여부 확인
//-------------------------------------------------------------------------
scwin.f_validate = async function () {
  console.log("scwin.f_validate ~~~~" + ds_item.getRowPosition());
  //var rowStatus = ds_item.getRowStatus(scwin.pos_item);
  //if(rowStatus == "D") return true;
  //console.log("rowStatus ~~~~"+rowStatus);

  if (ds_item.getRowCount() < 1) {
    return true;
  }

  //if(ds_item.getRowStatus(ds_item.getRowPosition()) ==  "D"){
  //    return true;
  //}

  //항목코드와 상위매출입항목코드는 같으면 안된다.
  //if(!$c.gus.cfIsNull(ed_selpchItemNm.getValue()) && !$c.gus.cfIsNull(ed_upperSelpchItemNm.getValue()) && ed_selpchItemNm.getValue().trim() == ed_upperSelpchItemNm.getValue().trim()){
  if (!$c.gus.cfIsNull($p, ed_selpchItemNm.getValue()) && !$c.gus.cfIsNull($p, ed_upperSelpchItemNm.getValue()) && ed_selpchItemNm.getValue().trim() == ed_upperSelpchItemNm.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, "상위매출입항목 과 항목명이 동일합니다.");
    return false;
  }

  //사업영역
  //if(cbx_stvYn.checked == false && cbx_transYn.checked == false && cbx_strYn.checked == false && cbx_inatYn.checked == false && cbx_agentYn.checked == false && cbx_distchYn.checked == false){

  if (cbx_stvYn.getValue() == 0 && cbx_transYn.getValue() == 0 && cbx_strYn.getValue() == 0 && cbx_inatYn.getValue() == 0 && cbx_agentYn.getValue() == 0 && cbx_distchYn.getValue() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업영역"]); //@는 필수입력항목입니다.
    return false;
  }

  //매출입구분
  if (cbx_sellYn.getValue() == 0 && cbx_pchsYn.getValue() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["매출입구분"]); //@는 필수입력항목입니다.
    return false;
  }

  //계약요율여부
  if (rd_ctrtTrfYn.getValue() == 1) {
    if (acb_ctrtTrfClsCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["계약요율구분"]); //@을(를) 선택하십시오.
      acb_ctrtTrfClsCd.focus();
      return false;
    }
  }
  /*	    
      //고시요율여부
      if(rd_anucTrfYn.getValue() == 1){
          if(acb_anucTrfClsCd.getValue() == ""){
              cfAlertMsg(MSG_CM_WRN_007, ["고시요율구분"]); //@을(를) 선택하십시오.
              acb_anucTrfClsCd.focus();
              return false;
          }
      }
  */
  //할인할증여부
  if (rd_dcScYn.getValue() == 1) {
    if (acb_dcScClssCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["할인할증분류"]); //@을(를) 선택하십시오.
      acb_dcScClssCd.focus();
      return false;
    }
  }

  //내부요율여부
  if (rd_internalTrfYn.getValue() == 1) {
    if (ed_wrkStpNm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업단계코드"]); //@을(를) 선택하십시오.
      ed_wrkStpNm.focus();
      return false;
    }
  }

  /* 2006.01.19 일단 주석처리
      if(cbx_sellYn.checked == true){
          if(ed_sellDrAcctNm.getValue() == "" && ed_sellCrAcctNm.getValue() == ""){
              cfAlertMsg(MSG_CM_WRN_003, ["매출차변계정코드 또는 매출대변계정코드"]);
              ed_sellDrAcctNm.focus();
              return false;
          }else{
          }
      }else{
          if(ed_sellDrAcctNm.getValue() != "" || ed_sellCrAcctNm.getValue() != ""){
              cfAlertMsg(MSG_CM_WRN_007, ["매출입구분"]); //@을(를) 선택하십시오.
              ed_sellDrAcctNm.getValue() = "";
              ed_sellCrAcctNm.getValue() = "";
              return false;
          }
      }
      
      if(cbx_pchsYn.checked == true){
          if(ed_pchsDrAcctNm.getValue() == "" && ed_pchsCrAcctNm.getValue() == ""){
              cfAlertMsg(MSG_CM_WRN_003, ["매입차변계정코드 또는 매입대변계정코드"]);
              ed_pchsDrAcctNm.focus();
              return false;
          }else{
          }
      }else{
          if(ed_pchsDrAcctNm.getValue() != "" || ed_pchsCrAcctNm.getValue() != ""){
              cfAlertMsg(MSG_CM_WRN_007, ["매출입구분"]); //@을(를) 선택하십시오.
              ed_pchsDrAcctNm.getValue() = "";
              ed_pchsCrAcctNm.getValue() = "";
              return false;
          }
      }
      
  */
  console.log("valid end");
  return true;
};

/*
//-------------------------------------------------------------------------
// scwin.name : f_runExcel
// scwin.desc : 엑셀저장
//-------------------------------------------------------------------------
scwin.f_runExcel = function () {
    cfGridToExcel(gr_item, "매출입항목", "매출입항목.xls", 2+4+8+16);
};
*/

scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue(ds_item.getRowCount());
    scwin.searchFlag = false;
    if (ds_item.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      //ds_item.clearSort();
      ds_item.sort("selpchItemCd", 0);
      gr_item.setFocusedCell(scwin.pos_item, "selpchItemCd", false);

      //$c.gus.cfGoPrevPosition(gr_item, scwin.pos_item); //첫번째 row 포지션이동

      scwin.f_set("RETRIEVE");
    }
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await scwin.updCheck())) {
    return;
  }
  scwin.pos_item = 0;
  scwin.searchFlag = true;
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.ed_cnd_upperSelpchItemNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('U1', ed_cnd_upperSelpchItemNm, hid_cnd_upperSelpchItemCd, 'T');
};
scwin.btn_cnd_upperSelpchItemNm_onclick = function (e) {
  scwin.f_openPopUp('U1', 'F');
};
scwin.ed_upperSelpchItemNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('U2', ed_upperSelpchItemNm, hid_upperSelpchItemCd, 'T');
};
scwin.btn_upperSelpchItemNm_onclick = function (e) {
  scwin.f_openPopUp('U2', 'F');
};
scwin.ed_wrkStpNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('W1', ed_wrkStpNm, hid_wrkStpCd, 'T');
};
scwin.btn_wrkStpNm_onclick = function (e) {
  scwin.f_openPopUp('W1', 'F');
};
scwin.ed_upperWageSelpchItemNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('U3', ed_upperWageSelpchItemNm, hid_upperWageSelpchItemCd, 'T');
};
scwin.btn_upperWageSelpchItemNm_onclick = function (e) {
  scwin.f_openPopUp('U3', 'F');
};
scwin.ed_sellDrAcctNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('D1', ed_sellDrAcctNm, hid_sellDrAcctCd, 'T');
};
scwin.btn_sellDrAcctNm_onclick = function (e) {
  scwin.f_openPopUp('D1', 'F');
};
scwin.ed_sellCrAcctNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('C1', ed_sellCrAcctNm, hid_sellCrAcctCd, 'T');
};
scwin.btn_sellCrAcctNm_onclick = function (e) {
  scwin.f_openPopUp('C1', 'F');
};
scwin.ed_pchsDrAcctNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('D2', ed_pchsDrAcctNm, hid_pchsDrAcctCd, 'T');
};
scwin.btn_pchsDrAcctNm_onclick = function (e) {
  scwin.f_openPopUp('D2', 'F');
};
scwin.ed_pchsCrAcctNm_onviewchange = function (info) {
  scwin.f_openPopUpBefore('C2', ed_pchsCrAcctNm, hid_pchsCrAcctCd, 'T');
};
scwin.btn_pchsCrAcctNm_onclick = function (e) {
  scwin.f_openPopUp('C2', 'F');
};
scwin.rd_ctrtTrfYn_onviewchange = function (info) {
  if (rd_ctrtTrfYn.getValue() == 1) {
    $c.gus.cfEnableObjects($p, [acb_ctrtTrfClsCd]);
  } else {
    acb_ctrtTrfClsCd.setValue("");
    $c.gus.cfDisableObjects($p, [acb_ctrtTrfClsCd]);
  }
};
scwin.rd_anucTrfYn_onviewchange = function (info) {
  /*
  	if(rd_anucTrfYn.getValue() == 1){
          cfEnableObjects([acb_anucTrfClsCd]);
  	}else{
  	    acb_anucTrfClsCd.getValue()= "";	   
  	    cfDisableObjects([acb_anucTrfClsCd]);	
  	}
  */
};
scwin.rd_dcScYn_onviewchange = function (info) {
  if (rd_dcScYn.getValue() == 1) {
    $c.gus.cfEnableObjects($p, [acb_dcScClssCd]);
  } else {
    acb_dcScClssCd.setValue("");
    $c.gus.cfDisableObjects($p, [acb_dcScClssCd]);
  }
};
scwin.rd_internalTrfYn_onviewchange = function (info) {
  if (rd_internalTrfYn.getValue() == 1) {
    $c.gus.cfEnableObjects($p, [ed_wrkStpNm, btn_wrkStpNm]);
  } else {
    ed_wrkStpNm.setValue("");
    hid_wrkStpCd.setValue("");
    $c.gus.cfDisableObjects($p, [ed_wrkStpNm, btn_wrkStpNm]);
  }
};
scwin.ds_item_onrowpositionchange = async function (info) {
  console.log("scwin.ds_item_onrowpositionchange~~");
  console.log(info);
  var row = info.newRowIndex;
  //if(ds_item.SysStatus(row) == 2){

  if (ds_item.getRowStatus(row) == "D") {
    scwin.f_set("DELETE");
  } else {
    scwin.f_set("RETRIEVE");
    scwin.f_init();
  }
  $c.gus.cfPrepareObjectHidVal($p, ds_item, row, ["sellDrAcctCd", "sellDrAcctNm", "sellCrAcctCd", "sellCrAcctNm", "pchsDrAcctCd", "pchsDrAcctNm", "pchsCrAcctCd", "pchsCrAcctNm", "wrkStpCd", "wrkStpNm"], [hid_sellDrAcctCd, ed_sellDrAcctNm, hid_sellCrAcctCd, ed_sellCrAcctNm, hid_pchsDrAcctCd, ed_pchsDrAcctNm, hid_pchsCrAcctCd, ed_pchsCrAcctNm, hid_wrkStpCd, ed_wrkStpNm]);
};
scwin.ds_item_onbeforerowpositionchange = async function (info) {
  console.log("scwin.ds_item_onbeforerowpositionchange~~");
  var oldRow = $c.gus.cfIsNull($p, info.oldRowIndex) ? 0 : info.oldRowIndex;
  if (oldRow > 0 && !scwin.searchFlag) {
    //scwin.searchFlag
    //if(oldRow > 0 && ds_item.getModifiedJSON().length > 0){
    var valid = await scwin.f_validate();
    if (!valid) {
      ds_item.setEventPause("", true);
      $c.gus.cfGoPrevPosition($p, gr_item, oldRow);
      ds_item.setEventPause("", false);
      return false;
    }

    //if(await $c.gus.cfValidate([tbl_detailArea]) && scwin.f_validate()){
    if (await $c.gus.cfValidate($p, [tbl_detailArea])) {
      return true;
    } else {
      ds_item.setEventPause("", true);
      $c.gus.cfGoPrevPosition($p, gr_item, oldRow);
      ds_item.setEventPause("", false);
      return false;
    }
  }
  return true;
};
scwin.realSellYn = function (data, formatData, rowIdx, colIdx) {
  //{decode(sellYn, 0, (decode(pchsYn, 0, '', '매입')), (decode(pchsYn, 0, '매출', '매출,매입')))}

  var sellYn = ds_item.getCellData(rowIdx, "sellYn");
  var pchsYn = ds_item.getCellData(rowIdx, "pchsYn");
  return $c.gus.decode($p, sellYn, 0, $c.gus.decode($p, pchsYn, 0, '', '매입'), $c.gus.decode($p, pchsYn, 0, '매출', '매출,매입'));
};
scwin.realStvYn = function (data, formatData, rowIdx, colIdx) {
  var stvYn = ds_item.getCellData(rowIdx, "stvYn");
  var transYn = ds_item.getCellData(rowIdx, "transYn");
  var strYn = ds_item.getCellData(rowIdx, "strYn");
  var inatYn = ds_item.getCellData(rowIdx, "inatYn");
  var agentYn = ds_item.getCellData(rowIdx, "agentYn");
  var distchYn = ds_item.getCellData(rowIdx, "distchYn");

  //console.log('function scwin.realStvYn ~~');
  //console.log('stvYn ='+stvYn);
  //console.log('transYn ='+transYn);
  //console.log('strYn ='+strYn);
  //console.log('inatYn ='+inatYn);
  //console.log('agentYn ='+agentYn);
  //console.log('distchYn ='+distchYn);

  return $c.gus.decode($p, stvYn, 1, '하역', '') + $c.gus.decode($p, transYn, 1, '운송', '') + $c.gus.decode($p, strYn, 1, '보관', '') + $c.gus.decode($p, inatYn, 1, '국제', '') + $c.gus.decode($p, agentYn, 1, '대리점', '') + $c.gus.decode($p, distchYn, 1, '유통', '');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_selpchItemCd',placeholder:'',style:'width:80px;',ref:'data:ds_cnd_item.selpchItemCd',allowChar:'0-9',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_selpchItemNm',placeholder:'',style:'width:200px;',ref:'data:ds_cnd_item.selpchItemNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_cnd_item.sellYn',appearance:'full',style:'',id:'cbx_cnd_sellYn',renderType:'checkboxgroup',rows:'',selectedindex:'',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_cnd_item.pchsYn',appearance:'full',style:'',id:'cbx_cnd_pchsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약요율구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_ctrtTrfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_cnd_item.ctrtTrfClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_stvYn',ref:'data:ds_cnd_item.stvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_transYn',ref:'data:ds_cnd_item.transYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_strYn',ref:'data:ds_cnd_item.strYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_inatYn',ref:'data:ds_cnd_item.inatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_agentYn',ref:'data:ds_cnd_item.agentYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대리점'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cnd_distchYn',ref:'data:ds_cnd_item.distchYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_selpchItemYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_cnd_item.selpchItemYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계약요율'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고시요율'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협의요율'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'할인할증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부대요율'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업단계관련'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'표준원가항목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임일용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내부요율'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위매출입항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_upperSelpchItemNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_cnd_upperSelpchItemNm_onviewchange',ref:'data:ds_cnd_item.upperSelpchItemNm'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cnd_upperSelpchItemNm',style:'',type:'button','ev:onclick':'scwin.btn_cnd_upperSelpchItemNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매출입항목',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_item',grdDownOpts:'{"fileName":"매출입항목.xlsx","sheetName": "매출입항목","type":"2+4+8+16"}',gridDownUserAuth:'X',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_item',style:'',autoFit:'none',id:'gr_item',visibleRowNum:'15',class:'wq_gvw',rowStatusVisible:'true',readOnly:'true',dataName:'매출입항목',validFeatures:'ignoreStatus=no',validExp:'selpchItemCd:항목코드:no::key,selpchItemNm:항목명:yes:byteLength<=50'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'항목<br/>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'매출입항목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'매출입항목영문명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'매출입<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'계약요율구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'고시요율구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'할인할증분류',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'내부요율여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'작업단계코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'작업단계',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'부대요율여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column69',value:'작업단계관련여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column67',value:'표준원가항목여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'노임여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'노임일용여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'노임적용유형',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'고시요율항목명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'협의요율여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'사용여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column53',value:'매출차면계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'매출차면계정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'매출대변계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'매출대변계정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column45',value:'매입차변계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'매입차변계정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column41',value:'매입대변계정코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'매입대변계정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'상위매출입항목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'상위매출입항목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column33',value:'상위노임매출입항목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column31',value:'상위노임매출입항목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column29',value:'비고',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'selpchItemEngNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellYn',displayMode:'label',textAlign:'left',customFormatter:'scwin.realSellYn'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'ctrtTrfClsCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stvYn',displayMode:'label',textAlign:'left',customFormatter:'scwin.realStvYn'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'anucTrfClsCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'dcScClssCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'internalTrfYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'extrTrfYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wrkStpRltYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stndPcostItemYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wageYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wageDuseYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'wageAdptPatternCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'anucTrfItemNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cnfrTrfYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'useYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellDrAcctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellDrAcctNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellCrAcctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellCrAcctNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pchsDrAcctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsDrAcctNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pchsCrAcctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCrAcctNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'upperSelpchItemCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'upperSelpchItemNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'upperWageSelpchItemCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'upperWageSelpchItemNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_item',btnDelYn:'N',btnCancelYn:'Y',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_cancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_detailArea',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 30%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항목코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_selpchItemCd',placeholder:'',style:'width:150px;',ref:'data:ds_item.selpchItemCd',readOnly:'true',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위매출입항목',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_upperSelpchItemNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_upperSelpchItemNm_onviewchange',ref:'data:ds_item.upperSelpchItemNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_upperSelpchItemNm',style:'',type:'button','ev:onclick':'scwin.btn_upperSelpchItemNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항목명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_selpchItemNm',placeholder:'',style:'width:150px;',ref:'data:ds_item.selpchItemNm',objType:'data',mandatory:'true',title:'항목명'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항목영문명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_selpchItemEngNm',placeholder:'',style:'width:150px;',ref:'data:ds_item.selpchItemEngNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출입구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_item.sellYn',appearance:'full',style:'',id:'cbx_sellYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_item.pchsYn',appearance:'full',style:'',id:'cbx_pchsYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_stvYn',ref:'data:ds_item.stvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_transYn',ref:'data:ds_item.transYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_strYn',ref:'data:ds_item.strYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_inatYn',ref:'data:ds_item.inatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_agentYn',ref:'data:ds_item.agentYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대리점 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_distchYn',ref:'data:ds_item.distchYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유통 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약요율여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_ctrtTrfYn',ref:'data:ds_item.ctrtTrfYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_ctrtTrfYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약요율구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ctrtTrfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_item.ctrtTrfClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고시요율여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_anucTrfYn',ref:'data:ds_item.anucTrfYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_anucTrfYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협의요율여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cnfrTrfYn',ref:'data:ds_item.cnfrTrfYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고시요율항목명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_anucTrfItemNm',placeholder:'',style:'width:150px;',ref:'data:ds_item.anucTrfItemNm',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율화면구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_anucTrfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',ref:'',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인할증여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_dcScYn',ref:'data:ds_item.dcScYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_dcScYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인할증분류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dcScClssCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',ref:'',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부대요율여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_extrTrfYn',ref:'data:ds_item.extrTrfYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계관련여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkStpRltYn',ref:'data:ds_item.wrkStpRltYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부요율여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_internalTrfYn',ref:'data:ds_item.internalTrfYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_internalTrfYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_wrkStpNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_wrkStpNm_onviewchange',ref:'data:ds_item.wrkStpNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_wrkStpNm',style:'',type:'button','ev:onclick':'scwin.btn_wrkStpNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'표준원가항목여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_stndPcostItemYn',ref:'data:ds_item.stndPcostItemYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wageYn',ref:'data:ds_item.wageYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위노임매출입항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_upperWageSelpchItemNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_upperWageSelpchItemNm_onviewchange',ref:'data:ds_item.upperWageSelpchItemNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_upperWageSelpchItemNm',style:'',type:'button','ev:onclick':'scwin.btn_upperWageSelpchItemNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임일용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wageDuseYn',ref:'data:ds_item.wageDuseYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임적용유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wageAdptPatternCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_item.wageAdptPatternCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출차변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellDrAcctNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_sellDrAcctNm_onviewchange',ref:'data:ds_item.sellDrAcctNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_sellDrAcctNm',style:'',type:'button','ev:onclick':'scwin.btn_sellDrAcctNm_onclick',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출대변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_sellCrAcctNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_sellCrAcctNm_onviewchange',ref:'data:ds_item.sellCrAcctNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_sellCrAcctNm',style:'',type:'button','ev:onclick':'scwin.btn_sellCrAcctNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입차변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_pchsDrAcctNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_pchsDrAcctNm_onviewchange',ref:'data:ds_item.pchsDrAcctNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_pchsDrAcctNm',style:'',type:'button','ev:onclick':'scwin.btn_pchsDrAcctNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입대변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_pchsCrAcctNm',placeholder:'',style:'width: 150px;','ev:onviewchange':'scwin.ed_pchsCrAcctNm_onviewchange',ref:'data:ds_item.pchsCrAcctNm',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_pchsCrAcctNm',style:'',type:'button','ev:onclick':'scwin.btn_pchsCrAcctNm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',placeholder:'',style:'',ref:'data:ds_item.rmk',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_useYn',ref:'data:ds_item.useYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_regId',placeholder:'',style:'width:150px;',ref:'data:ds_item.regId',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_regDtm',placeholder:'',style:'width:150px;',ref:'data:ds_item.regDtm',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modId',placeholder:'',style:'width:150px;',ref:'data:ds_item.modId',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modDtm',placeholder:'',style:'width:150px;',ref:'data:ds_item.modDtm',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'hid_wrkStpCd',placeholder:'',style:'display:none;',ref:'data:ds_item.wrkStpCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_sellDrAcctCd',placeholder:'',style:'display:none;',ref:'data:ds_item.sellDrAcctCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_sellCrAcctCd',placeholder:'',style:'display:none;',ref:'data:ds_item.sellCrAcctCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_pchsDrAcctCd',placeholder:'',style:'display:none;',ref:'data:ds_item.pchsDrAcctCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_pchsCrAcctCd',placeholder:'',style:'display:none;',ref:'data:ds_item.pchsCrAcctCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_cnd_upperSelpchItemCd',placeholder:'',style:'display:none;',ref:'data:ds_cnd_item.upperSelpchItemCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_upperSelpchItemCd',placeholder:'',style:'display:none;',ref:'data:ds_item.upperSelpchItemCd'}},{T:1,N:'xf:input',A:{class:'',id:'hid_upperWageSelpchItemCd',placeholder:'',style:'display:none;',ref:'data:ds_item.upperWageSelpchItemCd'}},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})