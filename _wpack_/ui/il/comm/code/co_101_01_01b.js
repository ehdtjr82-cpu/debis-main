/*amd /ui/il/comm/code/co_101_01_01b.xml 24668 f329bf6fac6eb904ac4b4cbc05c2d8a9e40bf91bce31a9722ea4abbfc736ef89 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerPic'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taseq',name:'사고일련번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tanm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'atnm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'telno',name:'전화번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'faxno',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'natno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'locno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'이메일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerPicList',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_customerPicList_oncelldatachange','ev:ondataload':'scwin.ds_customerPicList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taseq',name:'사고일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tanm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telno',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxno',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'natno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr3',name:'주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr4',name:'주소4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveCustomerPicCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_customerPic","key":"IN_DS1"},{"id":"ds_customerPicList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_customerPicList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveCustomerPicCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_customerPicList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.selectedRow = "";
scwin.userId = "";
scwin.clntNo = "";
scwin.clntNm = "";
scwin.userClsCd = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  scwin.clntNo = memJson.clntNo;
  scwin.clntNm = memJson.clntNm;
  scwin.userClsCd = memJson.userClsCd;
  scwin.f_Set("INIT");
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화,신규
      $c.gus.cfDisableBtnOnly($p, [btn_Save]);
      $c.gus.cfDisableBtnOnly($p, [udc_row]);
      ed_custcd.focus();
      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfEnableBtnOnly($p, [btn_Save]);
      $c.gus.cfEnableBtnOnly($p, [udc_row]);
      break;
  }
};

//---------------------------------------------------------
//조회
//---------------------------------------------------------    
scwin.f_Retrieve = function () {
  //임시 107591
  if (ed_custcd.getValue() != "") {
    //tr_retrieve.Post();
    $c.sbm.execute($p, sbm_retrieve);
  } else {
    $c.win.alert($p, "Customer Info is mandatory.");
    ed_custcd.focus();
  }
};

//---------------------------------------------------------
//저장
//---------------------------------------------------------  
scwin.f_Save = async function () {
  if (ds_customerPicList.getModifiedIndex().length != 0) {
    if (await scwin.f_ReqFieldChk()) {
      var chk = await $c.win.confirm($p, "Do you wish to save?");
      if (chk) {
        //저장하시겠습니까?				
        //tr_save.Post(); 
        $c.sbm.execute($p, sbm_save);
      }
    }
  } else {
    //$c.win.alert(E_MSG_CM_ERR_001, ["Customer Pic"]); //@은(는) 변경된 사항이 없습니다.
    $c.win.alert($p, "There have been no changes for Customer Pic");
  }
};

//유효성검사
scwin.f_ReqFieldChk = async function () {
  if (ed_custcd.getValue() == "") {
    //cfAlertMsg(E_MSG_CM_ERR_002, ["Customer Code"]);
    $c.win.alert($p, "Customer Code is mandatory.");
    ed_custcd.focus();
    return false;
  }
  let validArray = [{
    id: "taseq",
    name: "담당자순번",
    mandatory: true,
    key: true
  }];
  var chk = await $c.gus.cfValidateGrid($p, gr_customerPic, null, null, validArray, "CustomerPic");
  //var chk = await $c.gus.cfValidate([gr_customerPic]);
  if (!chk) {
    return false;
  }
  return true;
};

//조회조건 Clear
scwin.f_FieldClear = function () {
  ed_custcd.setValue("");
  $c.gus.cfInitObjects($p, [ed_custnm]);
};

//행추가
scwin.f_AddRow = function () {
  ds_customerPicList.insertRow();
  gr_customerPic.setFocusedCell(ds_customerPicList.getRowCount() - 1, 0);
  ds_customerPicList.setCellData(ds_customerPicList.getRowPosition(), "code", ed_custcd.getValue());
  gr_customerPic.setFocusedCell(ds_customerPicList.getRowCount() - 1, "taseq");
};

//공통팝업 열기
scwin.f_PopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var pWhere = "";
  var rtnList = new Array();
  switch (gubun1) {
    case 1:
      // Customer
      if (gubun2 == "CTINF") {
        pCode = ed_custcd.getValue().trim();
        if (pNoDataCloseTF == "T") {}
        pName = ed_custnm.getValue();
        udc_ilcomCode.setSelectId("retrieveEngClntInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.callbackEngClntInfo // XML상의 SELECT ID
        , pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , 'Customer Code,Customer Name,' // Title순서
        , '130,300' // 보여주는 각 컬럼들의 폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
        , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "Customer Search,Customer Code,Customer Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        //cfSetReturnValue(rtnList, ed_custcd, ed_custnm);
        break;
      }
    /*
    case "Nation":
        rtnList = ilCommonPopUp('retrieveCountryCodeInfo'    	// XML상의 SELECT ID	                                                   		
                                ,ds_customerPicList.getCellData(row,"nation")	 //코드
                                ,'' 	 //코드명
                                ,pWinCloseTF			// 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
                                ,'2'				// 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
                                ,"Nation Code,Nation Name,"		// Title순서
                                ,'130,300'              // 보여주는 각 컬럼들의 폭
                                ,"3,4,5,6,7,8,9,10"     // 컬럼중에서 숨기는	컬럼 지정
                                ,null                   // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                                ,'500'                  // POP-UP뛰을때 원도우의	사용자 정의	폭
                                ,'500'				// POP-UP뛰을때	우도우의	사용자 정의	높이
                                ,null				// 윈도우 위치 Y좌표
                                ,null				// 윈도우 위치 X좌표
                                ,null				// 중복체크여부	("F")
                                ,pAllSearchTF			// 전체검색허용여부	("F")
                                ,"Nation Search,Nation Code,Nation Name"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
                                ,'F'				// Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
                                );
        cfSetGridReturnValue(rtnList, ds_customerPicList, row, "nation", "",[""]);
    break;
    */
    default:
      break;
  } //End switch
};
scwin.callbackEngClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custcd, ed_custnm);
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF) {
  // 선언부
  var rtnList;
  scwin.selectedRow = row;
  switch (disGubun) {
    case "Area":
      udc_ilcomCode.setSelectId("retrieveAreaCode");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackAreaCode, ds_customerPicList.getCellData(row, "locno") //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Area Code,Area Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Area Search,Area Code,Area Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_customerPicList, row, "locno", "",[""]);
      break;
    case "Nation":
      udc_ilcomCode.setSelectId("retrieveCountryCodeInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackCountryCodeInfo // XML상의 SELECT ID	                                                   		
      , ds_customerPicList.getCellData(row, "natno") //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Nation Code,Nation Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Nation Search,Nation Code,Nation Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_customerPicList, row, "natno", "",[""]);
      break;
  }
};
scwin.callbackAreaCode = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_customerPicList, scwin.selectedRow, "locno", "", [""]);
};
scwin.callbackCountryCodeInfo = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_customerPicList, scwin.selectedRow, "natno", "", [""]);
};

//공통팝업 열기 전에 체크 - EMEDIT onKillFocus 이벤트 발생시
//param설명 : nmObj-코드명(text), cdObj-코드(emedit), gubun1, gubun2
scwin.f_BeforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();

  //if(cdObj.Modified){
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_PopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF);
  } //End if
  //}  //End if
};
scwin.f_clientMgnt = async function () {
  var userId = scwin.userId;
  //window.showModalDialog( '/il/comm/code/co_108_01_01b.jsp?staffNo='+userId , "영업사원별거래처관리", "dialogWidth:340px; dialogHeight:460px; status:No") ;

  var win_url = "/ui/il/comm/code/co_108_01_01b.xml";
  var param = {
    staffNo: userId
  };
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 340;
  opts.height = 460;
  opts.popupName = '영업사원별거래처관리';
  rtnList = await $c.win.openPopup($p, win_url, opts, param);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_clientMgnt();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.ds_customerPicList_oncelldatachange = function (info) {
  /* colID: "taseq" newValue: "13" oldValue: "" realRowIndex: 2 rowIndex: 2 */
  if (ds_customerPicList.getModifiedIndex().length > 0) {
    ds_customerPicList.setCellData(info.rowIndex, "inpid", scwin.userId);
  } else {
    ds_customerPicList.undoRow(info.rowIndex);
  }
};
scwin.ds_customerPicList_ondataload = function () {
  spa_cnt.setValue(ds_customerPicList.getRowCount());
};
scwin.ed_custcd_onblur = function (e) {};
scwin.ed_custcd_onviewchange = function (info) {
  scwin.f_BeforeOpenCommonPopUpEd(ed_custnm, ed_custcd, 1, "CTINF", "T", "F");
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_customerPicList.getRowCount() == 0) {
    $c.win.alert($p, "No data found./Could not find any relevant data.");
  }
  scwin.f_Set("RETRIEVE");
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "Data was saved successfully.");
    //$c.win.alert("Data was saved successfully.");
    scwin.f_Retrieve();
  }
};
scwin.btn_custcd_onclick = function (e) {
  scwin.f_PopUp(1, 'CTINF', 'F', 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Customer Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_custcd',placeholder:'',style:'width: 80px;',maxlength:'6',ref:'data:dma_customerPic.code','ev:onviewchange':'scwin.ed_custcd_onviewchange',allowChar:'0-9,A-Z,a-z',title:'Customer Info'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_custcd',style:'',type:'button','ev:onclick':'scwin.btn_custcd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer Name',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_custnm',placeholder:'',style:'width:300px;',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_customerPicList',id:'gr_customerPic',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'SEQ',width:'60',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'PIC',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'DEPT Name',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Tel No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Fax No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'E_mail',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'ADDR1',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'ADDR2',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'ADDR3',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'ADDR4',width:'200'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',value:'E_mail',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'taseq',inputType:'text',width:'60',mandatory:'true',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tanm',inputType:'text',width:'120',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'atnm',inputType:'text',width:'120',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telno',inputType:'text',width:'120',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'faxno',inputType:'text',width:'120',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'email',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr1',inputType:'text',width:'200',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr2',inputType:'text',width:'200',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr3',inputType:'text',width:'200',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr4',inputType:'text',width:'200',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'inpid',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_row',rowAddFunction:'scwin.f_AddRow',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_customerPic',EngYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Address Desc',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_addr1',placeholder:'',style:'',ref:'data:ds_customerPicList.addr1',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_addr2',placeholder:'',style:'',ref:'data:ds_customerPicList.addr2',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_addr3',placeholder:'',style:'',ref:'data:ds_customerPicList.addr3',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_addr4',placeholder:'',style:'',ref:'data:ds_customerPicList.addr4',maxlength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]}]}]}]}]}]})