/*amd /ui/il/comm/code/co_104_01_01b.xml 21618 ec48b58303935f87990e285042fd95d02163eafa5e297bd522b7dda24f1d9f40 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'portcd',name:'공항코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirPort',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_AirPort_oncelldatachange','ev:ondataload':'scwin.ds_AirPort_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'portcd',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portnm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'areacd',name:'전역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nation',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'USER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currcd',name:'통화코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveAirPortCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_AirPort","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AirPort","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveAirPortCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_AirPort","key":"IN_DS2"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.preRowPos = 0;
scwin.txt_countRow = "";
scwin.txt_userid = "";
scwin.selectedRow = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  scwin.f_DefaultValue();
};

//-------------------------------------------------------------------------
// function name :  f_DefaultValue( gubun1, gubun2 )
// function desc : 화면 open시 초기 데이타 setting
// gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
// gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  //dma_SearchParam.AddRow();
  $c.gus.cfDisableBtn($p, [btn_save]);
  //ed_portcode.focus();
};

//-------------------------------------------------------------------------
//조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  ed_portcode.focus();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_AddRow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------																	
scwin.f_AddRow = function () {
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  ds_AirPort.insertRow();
  gr_AirPortList.setFocusedCell(ds_AirPort.getRowCount() - 1, 0);
  scwin.preRowPos = ds_AirPort.getRowPosition();
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  //ds_AirPort.DeleteMarked();
  if (ds_AirPort.getRowStatus(ds_AirPort.getRowPosition()) == "C") {
    ds_AirPort.removeRow(ds_AirPort.getRowPosition());
  } else {
    ds_AirPort.deleteRow(ds_AirPort.getRowPosition());
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  if (ds_AirPort.getRowStatus(ds_AirPort.getRowPosition()) == "C") {
    ds_AirPort.removeRow(ds_AirPort.getRowPosition());
  } else {
    ds_AirPort.undoRow(ds_AirPort.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.preRowPos = ds_AirPort.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    var chk = await $c.win.confirm($p, "Do you wish to save?");
    if (chk) {
      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.btn_addRow_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  scwin.f_DelRow();
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  scwin.f_Undo();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  var chk = await $c.gus.cfValidate($p, [gr_AirPortList]);
  if (!chk) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function	name : f_PopUp
// function	desc : popup
//-------------------------------------------------------------------------
scwin.f_PopUp = function (pPopGubun, pWinCloseTF, pAllSearchTF) {
  var rtnList = new Array();
  switch (pPopGubun) {
    case "AirPort":
      var code = ed_portcode.getValue().trim();
      ed_portcode.setValue("");
      udc_ilcomCode.setSelectId("retrieveAirPortCode");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackAirPortCode,
      // XML상의 SELECT ID	                                                   		
      code,
      // 화면에서의 ??? Code Element의	Value                                  
      '',
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '2',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Code,Name',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      "3,4,5,6,7,8,9,10",
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
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      "Departure,Code,Name"); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      //cfSetReturnValue(rtnList, ed_portcode, null);
      break;
    default:
      break;
  }
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
      udc_ilcomCode.ilCommonPopUp(scwin.callbackAreaCode, ds_AirPort.getCellData(row, "areacd") //코드
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
      //cfSetGridReturnValue(rtnList, ds_AirPort, row, "areacd", "",[""]);
      break;
    case "Nation":
      udc_ilcomCode.setSelectId("retrieveCountryCodeInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackCountryCodeInfo // XML상의 SELECT ID	                                                   		
      , ds_AirPort.getCellData(row, "nation") //코드
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
      //cfSetGridReturnValue(rtnList, ds_AirPort, row, "nation", "",[""]);
      break;
  }
};
scwin.callbackAirPortCode = function (rtnList) {
  console.log(rtnList);
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_portcode, null);
  } else {
    ed_portcode.setValue("");
  }
};
scwin.callbackAreaCode = function (rtnList) {
  console.log(rtnList);
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_AirPort, scwin.selectedRow, "areacd", "", [""]);
};
scwin.callbackCountryCodeInfo = function (rtnList) {
  console.log(rtnList);
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_AirPort, scwin.selectedRow, "nation", "", [""]);
};
scwin.btn_portcode_onclick = function (e) {
  scwin.f_PopUp('AirPort', 'F', 'T');
};
scwin.gr_AirPortList_ontextimageclick = function (rowIndex, columnIndex) {
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  var columnId = gr_AirPortList.getColumnID(columnIndex);
  switch (columnId) {
    case "areacd":
      scwin.f_PopUpGrid("Area", rowIndex, "F", "F");
      break;
    case "nation":
      scwin.f_PopUpGrid("Nation", rowIndex, "F", "F");
      break;
    default:
      break;
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_AirPort.getRowCount();
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  } else {
    //$c.win.alert(E_MSG_CM_WRN_002);
    $c.win.alert($p, "Data not found.");
  }
};
scwin.gr_AirPortList_oneditend = function (rowIndex, columnIndex, value) {
  /*
      var columnId = gr_AirPortList.getColumnID(columnIndex);
  	
      switch (columnId) {
  
          case "areacd":
              //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
              if (ds_AirPort.getCellData(rowIndex,columnId).trim() != "" && ds_AirPort.getCellData(rowIndex,columnId) != olddata){
                  scwin.f_PopUpGrid("Area", rowIndex, "T", "F");
              }
              break;
          case "nation":
              //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
              if (ds_AirPort.getCellData(rowIndex,columnId).trim() != "" && ds_AirPort.getCellData(rowIndex,columnId) != olddata){
                  scwin.f_PopUpGrid("Nation", rowIndex, "T", "F");
              }
              break;
  
          default:
              break;
      }
  */
};
scwin.ds_AirPort_oncelldatachange = function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}

  var columnId = info.colID;
  var rowIndex = info.rowIndex;
  switch (columnId) {
    case "areacd":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_AirPort.getCellData(rowIndex, columnId).trim() != "" && ds_AirPort.getCellData(rowIndex, columnId) != info.oldValue) {
        scwin.f_PopUpGrid("Area", rowIndex, "T", "F");
      }
      break;
    case "nation":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_AirPort.getCellData(rowIndex, columnId).trim() != "" && ds_AirPort.getCellData(rowIndex, columnId) != info.oldValue) {
        scwin.f_PopUpGrid("Nation", rowIndex, "T", "F");
      }
      break;
    default:
      break;
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.ds_AirPort_ondataload = function () {
  var rowcnt = ds_AirPort.getRowCount();
  $c.gus.cfGoPrevPosition($p, gr_AirPortList, scwin.preRowPos);
  if (rowcnt == 0) {
    $c.win.alert($p, "Data not found.");
  }
  spa_cnt.setValue(ds_AirPort.getRowCount());
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, E_MSG_CM_INF_001);
    scwin.f_Retrieve();
  }

  //$c.win.alert("Data was saved successfully.");
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.gr_AirPortList_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "portcd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
scwin.ed_portcode_onblur = function (e) {
  scwin.f_PopUp('AirPort', 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Port Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcode',placeholder:'',style:'width: 80px;',ref:'data:dma_SearchParam.portcd','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z',maxlength:'5','ev:onblur':'scwin.ed_portcode_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_portcode',style:'',type:'button','ev:onclick':'scwin.btn_portcode_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_AirPort',id:'gr_AirPortList',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_AirPortList_ontextimageclick','ev:oneditend':'scwin.gr_AirPortList_oneditend',sortable:'false',gridName:'AirPortCode List',rowStatusVisible:'true','ev:oneditkeyup':'scwin.gr_AirPortList_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Code',width:'80',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Port Name',width:'250',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Currency',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Area',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Nation',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Remark',width:'200',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'portcd',inputType:'text',width:'80',mandatory:'true',maxLength:'5',allowChar:'0-9.A-Z,a-z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portnm',inputType:'text',width:'250',maxLength:'30',allowChar:'0-9,A-Z,a-z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currcd',inputType:'text',width:'80',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'areacd',inputType:'textImage',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nation',inputType:'textImage',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',width:'200',maxLength:'30'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_addRow',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_addRow_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_deleteRowIntnl',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_deleteRowIntnl_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_undoMarkIntnl',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_undoMarkIntnl_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]}]}]}]}]}]})