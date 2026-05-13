/*amd /ui/il/seaout/sobl/se_107_01_01p.xml 15152 94270c714b08cd257fe92dc4a0bb41fd1cdb93f554052bd7347f034220ecbf8d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrmIsoCd',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'carrierBkNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_send',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrmIsoCd',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobl.RetrieveSeaExportContainerListByCarrierBkNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = ""; // 물류상위점소코드

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  //let params = $c.data.getParameter();
  var params = $p.getAllParameter().paramData.data;
  console.log(params);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  var carrierBkNo = "";
  if (params != null) {
    carrierBkNo = params[0];
  }
  dma_condition.set("carrierBkNo", carrierBkNo);
  if (/*carrierBkNo != "" && */carrierBkNo != null) {
    scwin.f_Retrieve();
  }
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    $c.data.setPopupTitle($p, "Container List Popup");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Container List 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let rtn = await $c.gus.cfValidate($p, [ed_carrierBkNo]);
  if (!rtn) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 창 닫기 
//-------------------------------------------------------------------------

scwin.f_close = function () {
  scwin.closePopup();
};

//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
scwin.f_FieldClear = function () {
  dma_condition.set("carrierBkNo", "");
};

//-------------------------------------------------------------------------
// 선택한 Container List 메인 화면에 적용
//-------------------------------------------------------------------------

scwin.f_adapt = function () {
  var j = 0;
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, 'chk') == "1") {
      j = j + 1;
    }
  }
  if (j == 0) {
    alert("적용할 컨테이너를 선택해 주세요.");
    return false;
  }

  /*
  for(var i=0; i<= ds_master.getRowCount(); i++){			
      if(ds_master.getValue(i, "chk") == "1") {					
          //scwin.f_CopyDataRow(ds_master, ds_send, i);  
      }		
  }
  */

  ds_send.removeAll();
  ds_send.setJSON(ds_master.getMatchedJSON("chk", "1"));
  var rtnValues = new Array();
  for (var t = 0; t < ds_send.getRowCount(); t++) {
    rtnValues[t] = new Array();
    rtnValues[t][0] = ds_send.getCellData(t, "odrNo");
    rtnValues[t][1] = ds_send.getCellData(t, "bookingNo");
    rtnValues[t][2] = ds_send.getCellData(t, "lineCd");
    rtnValues[t][3] = ds_send.getCellData(t, "cntrNo");
    rtnValues[t][4] = ds_send.getCellData(t, "cntrSizCd");
    rtnValues[t][5] = ds_send.getCellData(t, "cntrTypCd");
    rtnValues[t][6] = ds_send.getCellData(t, "sealNo");
    rtnValues[t][7] = ds_send.getCellData(t, "cntrNrmIsoCd");
  }

  //console.log(rtnValues);
  $c.win.closePopup($p, rtnValues);
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
/*
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded){

	try {
	
		if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
		if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";

		if (sourceColumns == null) sourceColumns = f_GetColumnNames(sourceDataset);
		if (targetColumns == null) targetColumns = sourceColumns;
		if (sourceRow == null) sourceRow = sourceDataset.RowPosition;
		if (targetRow == null) targetRow = f_AddDataRow(targetDataset);

		for (var i=0; i < sourceColumns.length; i++) {
			if (cfIsNull(sourceColumns[i]) || cfIsNull(targetColumns[i])) continue;
				targetDataset.NameString(targetRow,targetColumns[i]) = sourceDataset.NameString(sourceRow,sourceColumns[i]);
			if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
		}
           
		return targetRow;
		
	} catch (e) {
		cfAlertMsg("[f_CopyDataRow]" + e);
	}
}

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
function f_GetColumnNames(dataSet) {
	try {
		if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
		if (dataSet.CountColumn == 0) return null;

		var rtnArray = new Array(dataSet.CountColumn);

		for (var i=0; i < dataSet.CountColumn; i++) {
			rtnArray[i] = dataSet.ColumnID(i+1);
		}

		if (rtnArray.length == 0)
			return null
		else
			return rtnArray
	} catch (e) {
		cfAlertMsg("[f_GetColumnNames] " + e.Description);
	}
}

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
function f_AddDataRow(dataSet){

  	dataSet.AddRow();
  	return dataSet.RowPosition;
  	
}
*/

scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_master.getRowCount();
  spa_cnt.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, E_MSG_CM_ERR_003);
  } else {
    gr_master.setFocusedCell(0, 0);
  }
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieveButton_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_adapt();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.excelDown = async function () {
  const options = {
    fileName: "Booking별 컨테이너 내역.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "Booking별 컨테이너 내역",
    startRowIndex: 0,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [];
  var chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Carrier Booking No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w200',id:'ed_carrierBkNo',placeholder:'',style:'',objType:'data',mandatory:'true',ref:'data:dma_condition.carrierBkNo',displayFormat:'####################',maxlength:'20',title:'Carrier Booking No','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieveButton',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieveButton_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Booking별 컨테이너 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_master',id:'udc_topGrd',gridDownUserAuth:'X',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column13',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'ODR NO',width:'200'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column15',value:'BOOKING NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column19',value:'CNTR NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'CNTR SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column23',value:'CNTR TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'SEAL NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column27',value:'ISO CD',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true',checkAlways:'true',falseValue:'$blank',trueValue:'1',valueType:'other'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'bookingNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cntrNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cntrSizCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sealNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cntrNrmIsoCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button',userAuth:'R',objType:'ctrlBtn','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]}]}]}]}]}]})