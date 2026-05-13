/*amd /ui/ds/op/chainportalgrouporder/op_900_10_01p.xml 15836 8cd0837dd6ce6b69210563085a2e55f270b3910a6b6513a4814736e3a344ee75 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisType',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckCode',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverMobileNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverName',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'false','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisType',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckCode',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'truckNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverMobileNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverName',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ncall.ds.op.chainportalgrouporder.RetrieveGroupOrderVehicleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.chainportalgrouporder.SaveGroupOrderVehicleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.valueObject = $c.data.getParameter($p);
scwin.pre_truckNo;
scwin.row;
scwin.onpageload = function () {
  ds_search.insertRow();
  $c.sbm.execute($p, sbm_search);
};
scwin.f_Retrieve = async function () {
  ds_search.setCellData(0, "truckNo", ed_truckNo.getValue());
  await $c.sbm.execute($p, sbm_search);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.f_lineAdd = function () {
  var idx = ds_result.insertRow(ds_result.getRowCount());
  ds_result.setRowPosition(idx);
  totalRows1.setValue(ds_result.getRowCount());
};
scwin.f_lineDelete = function () {
  var idx = ds_result.getRowPosition();
  if (ds_result.getRowStatus(idx) == 'C') {
    ds_result.removeRow(idx);
    if (idx == ds_result.getRowCount()) {
      idx--;
    }
  } else {
    ds_result.deleteRow(idx);
  }
  ds_result.setRowPosition(idx);
  totalRows1.setValue(ds_result.getRowCount());
};
scwin.f_wageCancle = function () {
  var idx = ds_result.getRowPosition();
  var status = ds_result.getRowStatus(idx);
  if (status == 'C') {
    ds_result.removeRow(idx);
    if (idx == ds_result.getRowCount()) {
      idx--;
    }
    ds_result.setRowPosition(idx);
  } else {
    ds_result.undoRow(idx);
  }
  totalRows1.setValue(ds_result.getRowCount());
};
scwin.f_Save = async function () {
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  if (disGubun == "1") {
    //차량번호
    //pSelectID  = "retrieveVehclNoListInfo";
    if (selfCar.checked) return;
    udc_codeCom.setSelectId('retrieveVehiclesNo');
    rtnList = udc_codeCom.cfCommonPopUp(function (rtnList) {
      $c.gus.cfSetReturnValue($p, rtnList, txt_vehclShortCd, txt_truckNo, null);
    } // XML상의 SELECT ID	
    , pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , "400" // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , pAllSearch // 전체검색허용여부	("F")
    , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};
scwin.vehclNoOpen = async function () {
  var row = ds_Grid1.getRowPosition();
  if ($c.gus.cfIsNull($p, ds_Grid1.getCellData(row, "transWrkIndictNo"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["조회한 DATA"]);
    return;
  }
  var url = '/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.xml';
  var xwidth = 670;
  var yheight = 220;
  var options = {
    popupName: 'copy',
    width: xwidth,
    height: yheight,
    left: (window.screen.width - xwidth) / 2,
    top: (window.screen.height - window.yheight) / 2
  };
  var data = {
    transRsltsSeq: ds_result.getCellData(row, "transWrkRsltsSeq"),
    eqCd: ds_result.getCellData(row, "eqCd"),
    truckNo: ds_result.getCellData(row, "truckNo"),
    odrNo: ds_result.getCellData(row, "odrNo"),
    cntrSeq: ds_result.getCellData(row, "cntrSeq"),
    wrkPathSeq: ds_result.getCellData(row, "wrkPathSeq"),
    wrkStpSeq: ds_result.getCellData(row, "wrkStpSeq"),
    cntrNo: ds_result.getCellData(row, "cntrNo"),
    wrkStpNm: "",
    cntrBulkDiv: "C"
  };
  await $c.win.openPopup($p, url, options, data);
};
scwin.f_vehclSearch = async function (row, bCloseFlag) {
  bCloseFlag = bCloseFlag ? bCloseFlag : 'T';
  var v_vehclShortCd = ds_result.getCellData(row, "truckNo");
  if (v_vehclShortCd.length >= 4) {
    v_vehclShortCd = v_vehclShortCd.substring(v_vehclShortCd.length - 4, v_vehclShortCd.length);
  }
  var nowDate = new Date().format("YYYYMMDD").toString();
  var pURL = '/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05p3.xml';
  var opts = {
    popupName: '가용차량조회',
    width: 1130,
    height: 690,
    modal: true
  };
  var data = [["", "", "", "C", nowDate, v_vehclShortCd, "", "", "GATEINOUT", "TR"], ["", bCloseFlag]];
  var rtnList = await $c.win.openPopup($p, pURL, opts, data);
  if (rtnList == null || rtnList[0] == "N/A") {
    ds_result.setCellData(row, "truckNo", "");
    ds_result.setCellData(row, "vehclShortNo", "");
    return;
  }
  var firstList = [];
  for (var i = 0; i < rtnList.length; i++) {
    firstList = rtnList[0];

    //컨테이너는 트렉터만 배차 가능
    if (firstList[12] != "TR") {
      await $c.win.alert($p, "컨테이너는 트렉터만 배차 가능합니다. \n\n트렉터 차량을 선택하세요.");
      ds_result.setCellData(row, "truckNo", "");
      ds_result.setCellData(row, "vehclShortNo", "");
      return;
    }
    var mpNo = firstList[17];
    ds_result.setCellData(row, "driverMobileNo", mpNo);
    ds_result.setCellData(row, "eqCd", firstList[0]);
    ds_result.setCellData(row, "truckNo", firstList[1]);
    ds_result.setCellData(row, "vehclShortNo", firstList[2]);
    ds_result.setCellData(row, "bondTransStDt", firstList[3]);
    ds_result.setCellData(row, "bondTransEndDt", firstList[4]);
    ds_result.setCellData(row, "drvEmpNo", firstList[5]);
    ds_result.setCellData(row, "driverName", firstList[6]);
    ds_result.setCellData(row, "trsNo", firstList[8]);
    ds_result.setCellData(row, "vehclIdCardNo", firstList[9]);
    ds_result.setCellData(row, "chassisEqCd", firstList[10]);
    ds_result.setCellData(row, "chassisNo", firstList[11]);
    ds_result.setCellData(row, "vehclKndCd", firstList[12]);
    ds_result.setCellData(row, "vehclNrmCd", firstList[13]);
    ds_result.setCellData(row, "selfSpotClsCd", firstList[14]);
    ds_result.setCellData(row, "copCoClntNo", firstList[15]);
    //hid_posnClsCd.value =  firstList[16];                     // 미사용
  }
  return false;
};

//-----------------------------------------------------------------------------------
// TRAN EVENT
//-----------------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == '-1') return;
  await $c.win.alert($p, "저장되었습니다.");
  scwin.f_Retrieve();
};

//-----------------------------------------------------------------------------------
// DATA COLLECTION EVENT
//-----------------------------------------------------------------------------------
scwin.ds_result_ondataload = function () {
  gr_result.setFocusedCell(0, 0);
  totalRows1.setValue(ds_result.getRowCount());
};

//-----------------------------------------------------------------------------------
// COMPONENT EVENT
//-----------------------------------------------------------------------------------
scwin.gr_result_onviewchange = function (info) {
  var row = info.rowIndex;
  var colId = info.colId;
  if (colId == 'truckNo') {
    if (ds_result.getCellData(row, 'truckNo') == "") return true;
    scwin.f_vehclSearch(row, true, 'T');
  }
};
scwin.gr_result_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var colId = gr_result.getColumnID(columnIndex);
  if (colId == 'truckNo') {
    scwin.f_vehclSearch(row, true, 'T');
  }
};
scwin.upperCase = function (e) {
  var obj = window[e.target.id];
  if (obj.setValue) {
    var oldVal = obj._oldValue;
    obj.setValue(obj.getValue().toUpperCase());
    obj._oldValue = oldVal;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_truckNo',placeholder:'',style:'',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.f_lineAdd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_lineDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_wageCancle'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'','ev:onviewchange':'scwin.gr_result_onviewchange','ev:ontextimageclick':'scwin.gr_result_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',style:'',value:'항목명',width:'50'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'샤시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'차량ID',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'기사이름',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'연락처',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'차량코드',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'truckNo',inputType:'textImage',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'driverName',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'driverMobileNo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})