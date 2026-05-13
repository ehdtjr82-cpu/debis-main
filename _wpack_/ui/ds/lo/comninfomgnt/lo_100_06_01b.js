/*amd /ui/ds/lo/comninfomgnt/lo_100_06_01b.xml 40318 b01e1a1637f8b9f2549856b5cef24f0a5a4a7b867fe1368d28847f65f1839633 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndLine'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNm',name:'선사거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineClsCd',name:'LINE구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_line',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_line_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'LINE거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClsCd',name:'LINE구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsRtrnWrkPlCd',name:'CFS반납작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsRtrnWrkPlNm',name:'CFS반납작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldUseYn',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveLineListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndLine","key":"IN_DS1"},{"id":"ds_line","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_line","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveLineListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_line","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/본선/선박/라인관리

//scwin.memJson = null;
scwin.onpageload = function () {
  //console.log('onpageload444~~~');
  //scwin.memJson = $c.data.getMemInfo();

  //scwin.memJson.userHomeClsCd = 'DS';
  /*
  var userHomeClsCd = WebSquare.localStorage.getItem("userHomeClsCd");
  var sysCd = WebSquare.localStorage.getItem("sysCd");
  console.log('userHomeClsCd ==>'+userHomeClsCd);
  console.log('sysCd ==>'+sysCd);
  */
  //console.log(scwin.memJson);
};
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.pos_line = 0;
scwin.retrieveYn = "N";
scwin.updateYn = "N";
scwin.gubun_callback = "";

//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_set();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
  const codeOptions = [{
    grpCd: "LO137",
    compID: "acb_cnd_lineClsCd,gr_line:lineClsCd"
  } // 라인구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// scwin.name : f_FieldClear
// scwin.desc : 조회조건 Clear 
//-------------------------------------------------------------------------   
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_cndArea, null);
};

//-------------------------------------------------------------------------
// scwin.name : f_set
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_set = function () {
  //검색조건데이터셋 헤더세팅
  //scwin.f_setDSHeader("1"); 
  //ds_cndLine.AddRow();

  //$c.gus.cfStyleGrid(gr_line, "comn", "titleHeight=40")
  $c.gus.cfDisableBtn($p, [btn_save]);
  scwin.updateYn = "Y";

  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  //$c.gus.cfSetIMEModeActiveObjects([ed_cnd_clntNm]);	
};

/*
//-------------------------------------------------------------------------
// scwin.name : f_setDSHeader
// scwin.desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_setDSHeader = function ( gubun ){
	var dsHeader = "";
	
	switch( gubun ){
		case "1":
			//헤더의 정의 순서는 반드시 서버측의 정의순서와 일치하여야 한다.
		    dsHeader = "lineCd:STRING"                  
                     + ",lineNm:STRING"              
                     + ",shpCoClntNo:STRING"             
                     + ",shpCoClntNm:STRING"            
                     + ",lineClsCd:STRING"
                     ; 
			ds_cndLine.SetDataHeader(dsHeader);
			
		case "2":		
			//헤더의 정의 순서는 반드시 서버측의 정의순서와 일치하여야 한다.
		    dsHeader = "adptDt:STRING(8)"                  
                     + ",lineCd:STRING(5)"                  
                     + ",lineNm:STRING(50)"                 
                     + ",shpCoMark:STRING(4)"               
                     + ",lineClntNo:STRING(6)"              
                     + ",lineClntNm:STRING(50)"             
                     + ",shpCoClntNo:STRING(6)"             
                     + ",shpCoClntNm:STRING(50)"            
                     + ",lineClsCd:STRING(1)" 
                     + ",cfsRtrnWrkPlCd:STRING(5)" 
                     + ",cfsRtrnWrkPlNm:STRING(50)"
                     + ",useYn:INT(1)";   
			ds_line.SetDataHeader(dsHeader);
		
	}
};
*/

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //ds_cndLine.UseChangeInfo = "false";
  //if(ds_line.IsUpdated){ //수정된 내용이 있는지 체크

  ds_line.setJSON([]);
  if (ds_line.getModifiedJSON().length > 0 && scwin.updateYn == "N") {
    //수정된 내용이 있는지 체크
    if (await $c.win.confirm($p, MSG_CM_CRM_005)) {
      scwin.retrieveYn = "Y";
      $c.sbm.execute($p, sbm_retrieve);

      //tr_retrieve.Action = "/ds.lo.comninfomgnt.RetrieveLineListCMD.do";
      //tr_retrieve.Post();
    }
  } else {
    scwin.retrieveYn = "Y";
    $c.sbm.execute($p, sbm_retrieve);

    //tr_retrieve.Action = "/ds.lo.comninfomgnt.RetrieveLineListCMD.do";
    //tr_retrieve.Post();
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //if(ds_line.IsUpdated){
  console.log('f_Save~~');
  if (ds_line.getModifiedJSON().length > 0) {
    //수정된 내용이 있는지 체크
    //if(await $c.gus.cfValidateGrid(gr_line)){
    console.log('cfValidateGrid~~');
    if (!(await scwin.gridValidateChk())) return;
    if (!(await scwin.f_validate())) return;
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //저장하시겠습니까?	
      scwin.pos_line = ds_line.getRowPosition();
      $c.sbm.execute($p, sbm_save);

      //tr_save.Action = "/ds.lo.comninfomgnt.SaveLineListCMD.do";
      //tr_save.Post();
    }
    //}	
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["Line관리"]); //@은(는) 변경된 사항이 없습니다
  }
};
scwin.gridValidateChk = async function () {
  let validArry = [{
    id: "adptDt",
    name: "적용일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "lineCd",
    name: "LINE코드",
    mandatory: true
  }, {
    id: "lineNm",
    name: "LINE코드명",
    mandatory: true
  }, {
    id: "lineClsCd",
    name: "라인구분",
    mandatory: true
  }, {
    id: "shpCoMark",
    name: "선사부호",
    maxLength: 4
  }, {
    id: "lineClntNo",
    name: "라인거래처코드",
    maxLength: 6
  }, {
    id: "lineClntNm",
    name: "라인거래처명",
    byteLength: 30
  }, {
    id: "shpCoClntNo",
    name: "선사거래처코드",
    maxLength: 6
  }, {
    id: "shpCoClntNm",
    name: "선사거래처명",
    byteLength: 30
  }];
  let gridName = "라인코드";
  if (!(await $c.gus.cfValidateGrid($p, gr_line, null, null, validArry, gridName))) {
    return false;
  }

  //중복체크
  var errCnt = 0;
  for (var i = 0; i < ds_line.getRowCount(); i++) {
    for (var j = 0; j < ds_line.getRowCount(); j++) {
      if (i != j && ds_line.getCellData(i, 'lineCd') == ds_line.getCellData(j, 'lineCd') && ds_line.getCellData(i, 'shpCoMark') == ds_line.getCellData(j, 'shpCoMark')) {
        errCnt = j + 1;
        break;
      }
    }
    if (errCnt > 0) {
      await $c.win.alert($p, "라인코드의 " + errCnt + "번째 데이터에서 LINE코드, 선사부호은(는) 중복될 수 없습니다.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_addRow
// scwin.desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  //if(ds_line.getRowCount() == 0)	scwin.f_setDSHeader("2", ds_line);	

  var row = ds_line.insertRow();
  ds_line.setCellData(row, "lineClsCd", DsConstants.LINE_CLS_CD_CTRT);
  ds_line.setCellData(row, "useYn", 1);
  gr_line.setFocusedCell(row, "adptDt", true);

  //gr_line.SetColumn("adptDt");
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

/*
//-------------------------------------------------------------------------
// scwin.name : f_deleteRow
// scwin.desc : 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
	ds_line.DeleteMarked();		
};

//-------------------------------------------------------------------------
// scwin.name : f_cancelRow
// scwin.desc : 취소
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
	ds_line.Undo(ds_line.getRowPosition());
};
*/

//-------------------------------------------------------------------------
// scwin.name : f_openPopUp
// scwin.desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (gubun, pWhere, pAllSearchTF, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var rtnList = new Array();
  if (gubun == "1") {
    pCode = ed_cnd_clntNo.getValue().trim();
    pName = ed_cnd_clntNm.getValue();
    pWtitleSearch = "선사거래처, 선사코드, 선사거래처명";
    pSelectID = "retrieveClntInfo";
  } else if (gubun == "2") {
    pCode = ds_line.getCellData(ds_line.getRowPosition(), "lineClntNo"); //라인거래처코드
    pName = ds_line.getCellData(ds_line.getRowPosition(), "lineClntNm"); //라인거래처
    pWtitleSearch = "라인거래처, 라인코드, 라인거래처명";
    pSelectID = "retrieveClntInfo";
  } else if (gubun == "3") {
    pCode = ds_line.getCellData(ds_line.getRowPosition(), "shpCoClntNo"); //선사거래처코드
    pName = ds_line.getCellData(ds_line.getRowPosition(), "shpCoClntNm"); //선사거래처
    pWtitleSearch = "선사거래처, 선사코드, 선사거래처명";
    pSelectID = "retrieveClntInfo";
  } else if (gubun == "4") {
    pCode = ds_line.getCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlCd"); //CFS반납작업장코드
    pName = ds_line.getCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlNm"); //CFS반납작업장명
    pWtitleSearch = "CFS반납작업장, 작업장코드, 작업장명";
    pSelectID = "retrieveWrkPlInfo";
  }

  //rtnList = udc_cnd_clntNo.cfCommonPopUp(pSelectID,						//pSelectID
  scwin.gubun_callback = gubun;
  udc_cnd_clntNo.setSelectId(pSelectID);
  rtnList = udc_cnd_clntNo.cfCommonPopUp(scwin.udc_cnd_clntNoCallback,
  //pSelectID
  pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  "5",
  //pDispCnt
  null,
  //pTitle
  "150,170",
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  "440",
  //pW
  "500",
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	("F")
  pAllSearchTF,
  //pAllSearchTF - 전체검색허용여부	("F")
  pWtitleSearch,
  //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
  );
  /*
  	if ( rtnList != null) {
  		if(rtnList[0] != "N/A"){
  			if(gubun == "1"){
  				ed_cnd_clntNo.setValue(rtnList[0]);	//선사거래처코드
  				ed_cnd_clntNm.setValue(rtnList[1]);	//선사거래처
  				ed_cnd_clntNo.hidVal = rtnList[0];	//선사거래처코드
  				ed_cnd_clntNm.hidVal = rtnList[1];	//선사거래처
  			}else if(gubun == "2"){
  				ds_line.setCellData(ds_line.getRowPosition(),"lineClntNo",rtnList[0]);	//라인거래처코드
  				ds_line.setCellData(ds_line.getRowPosition(),"lineClntNm",rtnList[1]);	//라인거래처
  			}else if(gubun == "3"){
  				ds_line.setCellData(ds_line.getRowPosition(),"shpCoClntNo",rtnList[0]);	//선사거래처코드
  				ds_line.setCellData(ds_line.getRowPosition(),"shpCoClntNm",rtnList[1]);	//선사거래처
  			}else if(gubun == "4"){
  				ds_line.setCellData(ds_line.getRowPosition(),"cfsRtrnWrkPlCd",rtnList[0]);	//CFS반납작업장코드
  				ds_line.setCellData(ds_line.getRowPosition(),"cfsRtrnWrkPlNm",rtnList[1]);	//CFS반납작업장명
  			}
  		}
  	}else{
  		if(gubun == "1"){
  			ed_cnd_clntNo.setValue("");	//선사거래처코드
  			ed_cnd_clntNm.setValue("");	//선사거래처
  			ed_cnd_clntNo.hidVal = "";	//선사거래처코드
  			ed_cnd_clntNm.hidVal = "";	//선사거래처
  		}else if(gubun == "2"){
  			ds_line.setCellData(ds_line.getRowPosition(),"lineClntNo","");	//라인거래처코드
  			ds_line.setCellData(ds_line.getRowPosition(),"lineClntNm","");	//라인거래처
  		}else if(gubun == "3"){
  			ds_line.setCellData(ds_line.getRowPosition(),"shpCoClntNo","");	//선사거래처코드
  			ds_line.setCellData(ds_line.getRowPosition(),"shpCoClntNm","");	//선사거래처
  		}else if(gubun == "4"){
  			ds_line.setCellData(ds_line.getRowPosition(),"cfsRtrnWrkPlCd","");	//CFS반납작업장코드
  			ds_line.setCellData(ds_line.getRowPosition(),"cfsRtrnWrkPlNm","");	//CFS반납작업장명
  		}
  	}
  */
};

//-------------------------------------------------------------------------
// scwin.name : f_validate
// scwin.desc : 유효성 확인
//-------------------------------------------------------------------------
scwin.f_validate = async function () {
  console.log("scwin.f_validate~~");
  for (var i = 0; i < ds_line.getRowCount(); i++) {
    var adptDt = ds_line.getCellData(i, "adptDt");

    //if(ds_line.SysStatus(i) == 1 && adptDt != "" && !$c.gus.cfIsAfterDate(scwin.strCurDate, adptDt, false)){
    //console.log('scwin.strCurDate=>'+scwin.strCurDate+':'+adptDt);
    //console.log('scwin.strCurDate11=>'+scwin.strCurDate.substring(0,4)+':'+scwin.strCurDate.substring(4,6)+':'+scwin.strCurDate.substring(6));

    if (ds_line.getRowStatus(i) == "C" && adptDt != "" && !(await $c.gus.cfIsAfterDate($p, scwin.strCurDate, adptDt, false))) {
      //await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_025, ["라인코드",i,"적용일자",scwin.strCurDate.substring(0,4),scwin.strCurDate.substring(4,6),scwin.strCurDate.substring(6)]);
      await $c.win.alert($p, "라인코드의 " + (i + 1) + "번째 데이터에서 적용일자은(는) " + scwin.strCurDate.substring(0, 4) + '년 ' + scwin.strCurDate.substring(4, 6) + '월 ' + scwin.strCurDate.substring(6) + '일 이후이어야합니다.');
      return false;
    }

    //라인구분코드
    //계약	- 선사부호,라인거래처코드,선사거래처코드 필수
    //비계약	- 선사부호,라인거래처코드,선사거래처코드 비필수
    if (ds_line.getCellData(i, "lineClsCd") == DsConstants.LINE_CLS_CD_CTRT && (ds_line.getRowStatus(i) == "C" || ds_line.getRowStatus(i) == "U")) {
      //선사부호
      if ($c.gus.cfIsNull($p, ds_line.getCellData(i, "shpCoMark"))) {
        //await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_002, ["라인관리", i, "선사부호"]);  //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        await $c.gus.cfAlertMsg($p, "라인관리의 " + (i + 1) + "번째 데이터에서 선사부호은(는) 필수 입력 항목입니다."); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        return false;
      }

      //라인거래처코드
      if ($c.gus.cfIsNull($p, ds_line.getCellData(i, "lineClntNo"))) {
        //await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_002, ["라인관리", i, "라인거래처코드"]);  //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        await $c.gus.cfAlertMsg($p, "라인관리의 " + (i + 1) + "번째 데이터에서 라인거래처코드은(는) 필수 입력 항목입니다."); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        return false;
      }

      //선사거래처코드
      if ($c.gus.cfIsNull($p, ds_line.getCellData(i, "shpCoClntNo"))) {
        //await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_002, ["라인관리", i, "선사거래처코드"]);  //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        await $c.gus.cfAlertMsg($p, "라인관리의 " + (i + 1) + "번째 데이터에서 선사거래처코드은(는) 필수 입력 항목입니다."); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUpBefore_ds
// scwin.param : row-해당row, nmColid-코드명컬럼, cdColid-코드컬럼, olddata-이전데이터, gubun-팝업구분, pWhere-팝업sql조건
// scwin.desc : 그리드 팝업오픈하기전 작업
//-------------------------------------------------------------------------
scwin.f_openPopUpBefore_ds = function (row, colGubun, nmColid, cdColid, olddata, gubun, pWhere, pAllSearchTF, pWinCloseTF) {
  if (colGubun == "CD") {
    var cdVal = ds_line.getCellData(row, cdColid);
    if (cdVal == "") {
      ds_line.setCellData(row, nmColid, "");
    } else {
      if (cdVal != olddata) {
        ds_line.setCellData(row, nmColid, "");
        scwin.f_openPopUp(gubun, pWhere, pAllSearchTF, pWinCloseTF);
      }
    }
  } else if (colGubun == "NM") {
    var nmVal = ds_line.getCellData(row, nmColid);
    if (nmVal == "") {
      ds_line.setCellData(row, cdColid, "");
    } else {
      if (nmVal != olddata) {
        ds_line.setCellData(row, cdColid, "");
        scwin.f_openPopUp(gubun, pWhere, pAllSearchTF, pWinCloseTF);
      }
    }
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_openPopUpBefore_txt
// scwin.param : gubun, nmObj-코드명 오브젝트, cdObj-코드 오브젝트
// scwin.desc : txt상자팝업오픈하기전 작업
//-------------------------------------------------------------------------
scwin.f_openPopUpBefore_txt = function (gubun, nmObj, cdObj, pWhere, pAllSearchTF, pWinCloseTF) {
  if (nmObj.getValue() == nmObj.hidVal && cdObj.getValue() == cdObj.hidVal) {
    return;
  } else {
    if (nmObj.getValue() == "") {
      cdObj.setValue("");
      return;
    } else {
      cdObj.setValue("");
    }
  }
  scwin.f_openPopUp(gubun, pWhere, pAllSearchTF, pWinCloseTF);
};

//-------------------------------------------------------------------------
// scwin.name : f_registClnt
// scwin.desc : 거래처등록 버튼 클릭시 실행
//-------------------------------------------------------------------------
scwin.f_registClnt = function () {
  //$c.gus.cfTabMenuUpdate("/cm/bc/clnt/clntmgnt/zz_210_01_00b.jsp", "거래처관리");	

  let strUrl = "/ui//cm/bc/clnt/clntmgnt/zz_210_01_00b.xml";
  let programId = "zz_210_01_00b.jsp";
  let paramObj = {};
  $c.win.openMenu($p, "거래처관리", strUrl, programId, paramObj);
};

/*
//-------------------------------------------------------------------------
// scwin.name : f_lineExcel
// scwin.desc : 엑셀파일로 download
//-------------------------------------------------------------------------
scwin.f_lineExcel = function (){
    //sheet명, 저장파일명,     저장 다이얼로그
	$c.gus.cfGridToExcel(gr_line, "라인관리", "라인관리.xls", 2+4+8+16);
};
*/

scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      //cfShowError(tr_retrieve);
      scwin.retrieveYn = "N";
      return;
    } //onFail

    var rowcnt = ds_line.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }

    //$c.gus.cfGoPrevPosition(gr_line, scwin.pos_line);
    scwin.retrieveYn = "N";
    scwin.updateYn = "N";
    gr_line.setFocusedCell(0, "adptDt", false);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  //cfShowError(tr_retrieve);
  scwin.retrieveYn = "N";
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.updateYn = "Y";
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_registClnt_onclick = function (e) {
  scwin.f_registClnt();
};
scwin.ds_line_onrowpositionchange = function (info) {
  console.log('scwin.ds_line_onrowpositionchange~~');
  console.log(info);
  console.log("~~~~~~~" + scwin.retrieveYn);
  var row = info.newRowIndex;
  if (scwin.retrieveYn == "N") {
    //행추가인 경우만 입력 가능
    //if(ds_line.SysStatus(row) == 1){
    if (ds_line.getRowStatus(row) == "C") {
      gr_line.setReadOnly("cell", row, "adptDt", false);
      gr_line.setReadOnly("cell", row, "lineCd", false);
      //gr_line.ColumnProp("adptDt","Edit")="Numeric";
      //gr_line.ColumnProp("lineCd","Edit")="AlphaUpper";
    } else {
      gr_line.setReadOnly("cell", row, "adptDt", true);
      gr_line.setReadOnly("cell", row, "lineCd", true);
      //gr_line.ColumnProp("adptDt","Edit")="none";
      //gr_line.ColumnProp("lineCd","Edit")="none";		
    }
    $c.gus.cfEnableBtnOnly($p, [btn_save]); //OnColumnChanged(row,colid)
  }
};
scwin.gr_line_ontextimageclick = function (rowIndex, columnIndex) {
  console.log('scwin.ds_line_onrogr_line_ontextimageclickwpositionchange~~');
  var colid = gr_line.getColumnID(columnIndex);
  if (colid == "lineClntNo" || colid == "lineClntNm") {
    scwin.f_openPopUp("2", "SELL_CLNT", "F", "F");
  } else if (colid == "shpCoClntNo" || colid == "shpCoClntNm") {
    scwin.f_openPopUp("3", "SHP", "F", "F");
  } else if (colid == "cfsRtrnWrkPlCd" || colid == "cfsRtrnWrkPlNm") {
    scwin.f_openPopUp("4", ",,,4", "F", "F");
  }
  /*
  else if(colid == "adptDt"){
  cfOpenCalendar(gr_line, row, colid);
  }
  */
};
scwin.gr_line_onviewchange = function (info) {
  console.log('scwin.gr_line_onviewchange~~');
  console.log(info);
  var colid = info.colId;
  var row = info.rowIndex;
  var olddata = info.oldValue;

  //팝업관련
  if (colid == "lineClntNo") {
    scwin.f_openPopUpBefore_ds(row, "CD", "lineClntNm", "lineClntNo", olddata, "2", "SELL_CLNT", "F", "T");
  } else if (colid == "lineClntNm") {
    scwin.f_openPopUpBefore_ds(row, "NM", "lineClntNm", "lineClntNo", olddata, "2", "SELL_CLNT", "F", "T");
  } else if (colid == "shpCoClntNo") {
    scwin.f_openPopUpBefore_ds(row, "CD", "shpCoClntNm", "shpCoClntNo", olddata, "3", "SHP", "F", "T");
  } else if (colid == "shpCoClntNm") {
    scwin.f_openPopUpBefore_ds(row, "NM", "shpCoClntNm", "shpCoClntNo", olddata, "3", "SHP", "F", "T");
  } else if (colid == "cfsRtrnWrkPlCd") {
    scwin.f_openPopUpBefore_ds(row, "CD", "cfsRtrnWrkPlNm", "cfsRtrnWrkPlCd", olddata, "4", ",,,4", "F", "T");
  } else if (colid == "cfsRtrnWrkPlNm") {
    scwin.f_openPopUpBefore_ds(row, "NM", "cfsRtrnWrkPlNm", "cfsRtrnWrkPlCd", olddata, "4", ",,,4", "F", "T");
  }
};
scwin.udc_cnd_clntNo_onblurCodeEvent = function (e) {
  var clntNo = ed_cnd_clntNo.getValue().trim();
  console.log('scwin.gr_line_onviewchange~~');
  console.log('info');

  //if(this.Modified){
  if (clntNo == "") {
    ed_cnd_clntNm.setValue("");
  } else {
    scwin.f_openPopUp("1", "SHP", "F", "T");
  }
  //}
};
scwin.udc_cnd_clntNo_onblurNameEvent = function (e) {
  scwin.f_openPopUpBefore_txt('1', ed_cnd_clntNm, ed_cnd_clntNo, 'SHP', 'F', 'T');
};
scwin.udc_cnd_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'SHP', 'F', 'F');
};
scwin.udc_cnd_clntNoCallback = function (rtnList) {
  console.log('udc_cnd_clntNoCallback~~');
  console.log(rtnList[0]);
  if (rtnList[0] != "N/A") {
    if (scwin.gubun_callback == "1") {
      ed_cnd_clntNo.setValue(rtnList[0]); //선사거래처코드
      ed_cnd_clntNm.setValue(rtnList[1]); //선사거래처
      ed_cnd_clntNo.hidVal = rtnList[0]; //선사거래처코드
      ed_cnd_clntNm.hidVal = rtnList[1]; //선사거래처
    } else if (scwin.gubun_callback == "2") {
      ds_line.setCellData(ds_line.getRowPosition(), "lineClntNo", rtnList[0]); //라인거래처코드
      ds_line.setCellData(ds_line.getRowPosition(), "lineClntNm", rtnList[1]); //라인거래처
    } else if (scwin.gubun_callback == "3") {
      ds_line.setCellData(ds_line.getRowPosition(), "shpCoClntNo", rtnList[0]); //선사거래처코드
      ds_line.setCellData(ds_line.getRowPosition(), "shpCoClntNm", rtnList[1]); //선사거래처
    } else if (scwin.gubun_callback == "4") {
      ds_line.setCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlCd", rtnList[0]); //CFS반납작업장코드
      ds_line.setCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlNm", rtnList[1]); //CFS반납작업장명
    }
  } else {
    if (scwin.gubun_callback == "1") {
      ed_cnd_clntNo.setValue(""); //선사거래처코드
      ed_cnd_clntNm.setValue(""); //선사거래처
      ed_cnd_clntNo.hidVal = ""; //선사거래처코드
      ed_cnd_clntNm.hidVal = ""; //선사거래처
    } else if (scwin.gubun_callback == "2") {
      ds_line.setCellData(ds_line.getRowPosition(), "lineClntNo", ""); //라인거래처코드
      ds_line.setCellData(ds_line.getRowPosition(), "lineClntNm", ""); //라인거래처
    } else if (scwin.gubun_callback == "3") {
      ds_line.setCellData(ds_line.getRowPosition(), "shpCoClntNo", ""); //선사거래처코드
      ds_line.setCellData(ds_line.getRowPosition(), "shpCoClntNm", ""); //선사거래처
    } else if (scwin.gubun_callback == "4") {
      ds_line.setCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlCd", ""); //CFS반납작업장코드
      ds_line.setCellData(ds_line.getRowPosition(), "cfsRtrnWrkPlNm", ""); //CFS반납작업장명
    }
  }
};
scwin.gr_line_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "lineCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "shpCoMark":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "cfsRtrnWrkPlCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

/**
 * @event  onkeyup
 * @name upperFlag 
 * @description  소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lineClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_cndLine.lineClsCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_lineCd',style:'width: 80px;',ref:'data:ds_cndLine.lineCd',maxlength:'5',allowChar:'A-Za-z0-9','ev:onkeyup':'scwin.upperFlag',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_lineNm',style:'width: 100px;',ref:'data:ds_cndLine.lineNm',maxlength:'50',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_cnd_clntNo',validTitle:'선사',nameId:'ed_cnd_clntNm',style:'',id:'udc_cnd_clntNo',btnId:'btn_cnd_clntNo','ev:onblurCodeEvent':'scwin.udc_cnd_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_cnd_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_cnd_clntNo_onclickEvent',refDataCollection:'ds_cndLine',code:'shpCoClntNo',name:'shpCoClntNm',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'Data',objTypeName:'Data',maxlengthName:'50',validExpName:'선사명',validExpCode:'선사코드'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_line',gridUpYn:'N',grdDownOpts:'{"fileName" : "라인관리.xlsx","sheetName" : "라인관리","type":"2+4+8+16","hiddenVisible":"true"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_line',focusMode:'row',id:'gr_line',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_line_ontextimageclick','ev:onviewchange':'scwin.gr_line_onviewchange',rowStatusVisible:'true','ev:oneditkeyup':'scwin.gr_line_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'라인',width:'170',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'라인구분',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'선사부호',width:'100',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'사용</br>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column61',value:'라인거래처',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column55',value:'선사거래처',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column49',value:'CFS반납작업장',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'코드명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'거래처명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'거래처명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'작업장명',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',style:'',value:'',width:'70',maxLength:'5',readOnly:'true',allowChar:'A-Za-z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineNm',inputType:'text',style:'',value:'',width:'100',maxLength:'50',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'lineClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoMark',inputType:'text',style:'',value:'',width:'100',maxLength:'4',allowChar:'A-Za-z'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'useYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineClntNo',value:'',displayMode:'label',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'lineClntNm',value:'',displayMode:'label',maxLength:'30',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shpCoClntNo',value:'',displayMode:'label',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'shpCoClntNm',value:'',displayMode:'label',maxLength:'30',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cfsRtrnWrkPlCd',value:'',displayMode:'label',maxLength:'10',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cfsRtrnWrkPlNm',inputType:'textImage',style:'',value:'',width:'100',maxLength:'30',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'N',gridID:'gr_line',id:'udc_addRow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',rowAddFunction:'scwin.f_addRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_registClnt',style:'',type:'button','ev:onclick':'scwin.btn_registClnt_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처등록'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})