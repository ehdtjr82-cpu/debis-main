/*amd /ui/il/aredi/imdo/ed_110_01_01b.xml 21615 8eab4df86277307146ce10d43fd243eb5e58e5d50a5781efc77ab7e4c970ab8b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromSndt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toSndt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'선명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirDo',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_AirDo_oncelldatachange','ev:ondataload':'scwin.ds_AirDo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Weight',dataType:'number'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm',name:'Shipper 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cneeNm',name:'Consignee',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'WHouse',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'Quantity',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sndTel',name:'Send Telephone',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dono',name:'도(행정구역)번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'발송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendYn',name:'송신여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvInit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendType',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.imdo.RetrieveAirDoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_AirDo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AirDo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.aredi.imdo.SaveAirDoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_AirDo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -7);
//scwin.strPreDate = $c.date.addMonth(scwin.vCurDate, -7);

scwin.selectedRow = "";
scwin.txt_countRow = "";
scwin.hid_kcomcd = "DBEX";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_DefaultValue();
    gr_AirDo.setDisabled("grid", true);
    dma_Search.set("kcomcd", scwin.hid_kcomcd);
    ///임시
    //dma_Search.set("fromSndt", "20200101");
    ///임시
  }, {
    "delay": 100
  });
};
scwin.f_DefaultValue = function () {
  cnd_ica_fromSndt.setValue(scwin.strPreDate);
  cnd_ica_toSndt.setValue(scwin.vCurDate);
};

//---------------------------------------------------------
//조회
//---------------------------------------------------------    
scwin.f_Retrieve = async function () {
  if (cnd_ica_fromSndt.getValue().trim() == '' || cnd_ica_toSndt.getValue().trim() == '') {
    $c.win.alert($p, "Arrival Date is mandatory.");
    cnd_ica_fromSndt.focus();
    return;
  }
  var chkDate = $c.gus.cfIsAfterDate($p, cnd_ica_fromSndt.getValue().trim(), cnd_ica_toSndt.getValue().trim(), false);
  if (!chkDate) {
    $c.win.alert($p, "Start date must be before End date."); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    return;
  }
  dma_Search.set("blno", cnd_ed_blno.getValue().trim());
  dma_Search.set("kcomcd", scwin.hid_kcomcd);
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
  gr_AirDo.setDisabled("grid", false);
};

//---------------------------------------------------------
//수정
//---------------------------------------------------------      
scwin.f_Update = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if (ds_AirDo.getCellData(ds_AirDo.getRowPosition(), "dono") == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["전송되지 않은 DO", "취소"]); // "@은(는) @할 수 없습니다.";
      return;
      //$c.win.alert("전송되지 않은 DO operation cannot be performed for 취소.");
    }
    var cnt = 0;
    for (var i = 0; i < ds_AirDo.getRowCount(); i++) {
      if (ds_AirDo.getCellData(i, "chk") == "T") {
        ds_AirDo.modifyRowStatus(i, "U");
        ds_AirDo.setCellData(i, "sendType", "C");
        cnt++;
      } else {
        ds_AirDo.modifyRowStatus(i, "R");
      }
    }
    if (cnt < 1) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["Check Box"]); //  "@을(를) 선택하십시오.";

      return;
    }

    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
    //scwin.f_Retrieve();
  }
};

//---------------------------------------------------------
//저장
//---------------------------------------------------------  
scwin.f_save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    var cnt = 0;
    for (var i = 0; i < ds_AirDo.getRowCount(); i++) {
      if (ds_AirDo.getCellData(i, "chk") == "T") {
        ds_AirDo.modifyRowStatus(i, "C");
        ds_AirDo.setCellData(i, "sendType", "S");
        cnt++;
      } else {
        ds_AirDo.modifyRowStatus(i, "R");
      }
    }
    if (cnt < 1) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["Check Box"]);
      return;
    }
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
    //        scwin.f_Retrieve();
  }
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  //var chk =  await $c.gus.cfValidate([gr_AirDo]);
  /*
  mblno:Master No:yes::no
  ,cneeNm:Consignee:yes::no
  ,warenm:WHouse:yes::no
  ,sndTel:Send Telephone:yes::no
  ,mftpkg:Quantity:yes::no
  ,mftwht:Weight:yes::no
  */
  let validArray = [{
    id: "mblno",
    name: "Master No",
    mandatory: true
  }, {
    id: "cneeNm",
    name: "Consignee",
    mandatory: true
  }, {
    id: "warenm",
    name: "WHouse",
    mandatory: true
  }, {
    id: "sndTel",
    name: "Send Telephone",
    mandatory: true
  }, {
    id: "mftpkg",
    name: "Quantity",
    mandatory: true
  }, {
    id: "mftwht",
    name: "Weight",
    mandatory: true
  }];
  var chk = await $c.gus.cfValidateGrid($p, gr_AirDo, null, null, validArray, "Houseinfo");
  if (!chk) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  scwin.selectedRow = row;
  switch (disGubun) {
    case "warenm":
      pCode = ds_AirDo.getCellData(row, "warecd");
      pName = ds_AirDo.getCellData(row, "warenm");
      udc_ilcomCode.setSelectId("retrieveAirBoneZoneCode");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackAirBoneZoneCode, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '4' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name,,ENG" // Title순서
      , '80,200,0,120' // 보여주는	각 컬럼들의	폭
      , "6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "WHOUSE,Code,Name,,ENG" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      /*                                    
                  if(rtnList != null){
                      
                      cfSetGridReturnValue(rtnList, ds_AirDo, Row, "warecd", "warenm");
                  }
      */
      break;
    default:
      break;
  }
};
scwin.callbackAirBoneZoneCode = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_AirDo, scwin.selectedRow, "warecd", "warenm");
  } else {
    ds_AirDo.setCellData(scwin.selectedRow, "warecd", "");
    ds_AirDo.setCellData(scwin.selectedRow, "warenm", "");
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};
scwin.f_openMenu = function () {
  var strPath = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_05b.xml";
  //$c.gus.cfTabMenuUpdate( strPath , "보세사업장 등록");
  $c.win.openMenu($p, "보세사업장 등록", strPath, "sd_401_05_05b.xml");
};
scwin.btn_move_onclick = function (e) {
  scwin.f_openMenu();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_save();
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
  //$c.win.alert("Data was saved successfully.");
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowcnt = ds_AirDo.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, "Data not found.");
  } else {
    gr_AirDo.setFocusedCell(0, 0);
  }
};
scwin.gr_AirDo_ontextimageclick = function (rowIndex, columnIndex) {
  var columnId = gr_AirDo.getColumnID(columnIndex);
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  switch (columnId) {
    case "warenm":
      scwin.f_PopUpGrid("warenm", rowIndex, "F", "T");
      break;
    default:
      break;
  }
};
scwin.ds_AirDo_oncelldatachange = function (info) {
  var columnId = info.colID;
  var rowIndex = info.rowIndex;
  switch (columnId) {
    case "warenm":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_AirDo.getCellData(rowIndex, columnId).trim() != "" && ds_AirDo.getCellData(rowIndex, columnId) != info.oldValue) {
        scwin.f_PopUpGrid("warenm", rowIndex, "T", "T");
      }
      break;
    default:
      break;
  }
};
scwin.ds_AirDo_ondataload = function () {
  spa_cnt.setValue(ds_AirDo.getRowCount());
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;',maxlength:'20',ref:'data:dma_Search.blno','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Arrival Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_Search',refEdDt:'toSndt',refStDt:'fromSndt',style:'',edFromId:'cnd_ica_fromSndt',edToId:'cnd_ica_toSndt',titleFrom:'Arrival Date',titleTo:'Arrival Date',validChkYn:'Y',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_fltno',placeholder:'',style:'width:150px;',maxlength:'6',ref:'data:dma_Search.fltno','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_AirDo',id:'gr_AirDo',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_AirDo_ontextimageclick',rowStatusVisible:'true',gridName:'Houseinfo',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'ETA',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'FLT No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'Master No',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'QTY',width:'60',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'WT',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'SHP Name',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Consignee',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'WHouse CD',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'WHouse',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'D/O No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'D/O Date',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'Send Telephone',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'Send Status',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdt',inputType:'calendar',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fltno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mblno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blno',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mftpkg',inputType:'text',width:'60',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mftwht',inputType:'text',width:'80',dataType:'float',maxLength:'10.3',textAlign:'right',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shnm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cneeNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'warecd',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'warenm',inputType:'textImage',width:'100',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dono',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sendDt',inputType:'calendar',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndTel',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'sendType',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_move',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_move_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'보세작업장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI Cancel'}]}]}]}]}]}]}]}]}]})