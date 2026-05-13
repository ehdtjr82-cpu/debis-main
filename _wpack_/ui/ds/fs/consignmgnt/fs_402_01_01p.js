/*amd /ui/ds/fs/consignmgnt/fs_402_01_01p.xml 14301 64fe5d565c6c36ef118f1a295442cc6a28965da256fb2b06a097f657d7f6720b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ntceFullNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltRateKnd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBranNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recptDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltRateAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntceNo',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveNtceNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vehclNo;
scwin.vehclNm;
scwin.params;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  // 공통코드 - 과태료종류
  const codeOptions = [{
    grpCd: "OP183",
    compID: "gr_out:fltRateKnd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  console.log(codeOptions);
  gr_out.setReadOnly("grid", true);
};
scwin.onUdcCompleted = function () {
  scwin.vehclNo = scwin.params.param1; // 단축번호
  scwin.vehclNm = scwin.params.param2; // 차량번호

  ed_VehclNo.setValue(scwin.vehclNo);
  ed_VehclNm.setValue(scwin.vehclNm);
  scwin.f_Retrieve();
};

//닫기
scwin.btn_close_onclick = function (e) {
  let row = gr_out.getFocusedRowIndex();
  let returnData = {
    ntceNo: ds_out.getCellData(row, "ntceNo"),
    rowIndex: row
  };
  $c.win.closePopup($p, returnData);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  ed_VehclNo.setValue("");
  ed_VehclNm.setValue("");
};

//차량번호 팝업
scwin.udc_comCode_vehc_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_VehclNo.getValue(), ed_VehclNm.getValue(), 'T', 'T');
};

// 
scwin.udc_comCode_vehc_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopup(ed_VehclNo, ed_VehclNm, 1);
};
scwin.udc_comCode_vehc_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopup(ed_VehclNm, ed_VehclNo, 1, false);
};
scwin.f_Retrieve = async function () {
  const chkValidate = await $c.gus.cfValidate($p, [ed_VehclNo, ed_VehclNm]);
  if (!chkValidate) {
    return false;
  } else {
    dma_search.set("vehclNo", ed_VehclNm.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.btn_retrieve_onclick = e => scwin.f_Retrieve();

// 조회 callback 
scwin.sbm_retrieve_submitdone = function () {
  const nRow = ds_out.getRowCount();
  if (ds_out.getRowCount() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }

  // 그리드 객체 가져오기 - 첫째 행 선택 (인덱스 0)
  // 조회 후 첫 번째 행을 선택하기 위해서 가져오는 것 같음
  gr_out.setFocusedCell(0, 0);
  setTimeout(function () {
    txttotal.setValue(nRow);
  }, 0);
};

// 더블 클릭 시 팝업 닫기
scwin.gr_out_oncelldblclick = function (e) {
  let row = gr_out.getFocusedRowIndex();
  let returnData = {
    ntceNo: ds_out.getCellData(row, "ntceNo"),
    rowIndex: row
  };
  $c.win.closePopup($p, returnData);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGUbun, pCode, pName, pClose, pAllSearch) {
  switch (disGUbun) {
    case 1:
      udc_comCode_vehc.setSelectId("retrieveKndVehclListInfo");
      await udc_comCode_vehc.cfCommonPopUp(scwin.udc_comCode_vehc_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호조회,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopup = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_comCode_vehc_callBackFunc = function (rtnList) {
  if (Array.isArray(rtnList) && rtnList.length >= 2) {
    ed_VehclNo.setValue(rtnList[0]);
    ed_VehclNm.setValue(rtnList[1]);
  } else {
    ed_VehclNo.setValue("");
    ed_VehclNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 과태료종류에 따른 고지번호 포맷 설정 (AS-IS에서 조건에 따른 분기 적용이 안되는것으로 보임. AS-IS는 일괄 적용)
//-------------------------------------------------------------------------
scwin.f_applyMask = function (data, formattedData, rowIndex, colIndex) {
  if (!data) return data;
  var fltRateKnd = ds_out.getCellData(rowIndex, "fltRateKnd");
  // 확인 결과 AS-IS 버그. 
  // var mask= "XXXX-XXXX-X-XXX-XXXXXX-X";

  if (fltRateKnd == "01" || fltRateKnd == "03" || fltRateKnd == "04") {
    mask = "XXXX-XXXX-X-XXX-XXXXXX-X";
  } else if (fltRateKnd == "02") {
    mask = "XXX-XX-X-XXX-XXXXXX-XXXX-X-X-XXXXXX-X";
  } else if (fltRateKnd == "05" || fltRateKnd == "06" || fltRateKnd == "07") {
    mask = "XXXXXXXXXXX-XXXX-XXX-XXXXXX-XXXXXX-X";
  } else {
    mask = "XXXX-XXXX-X-XXX-XXXXXX-X";
  }
  var raw = String(data).replace(/[^a-zA-Z0-9]/g, "");
  var result = "";
  var vi = 0;
  for (var i = 0; i < mask.length; i++) {
    if (mask[i] === "X") {
      if (vi < raw.length) result += raw[vi++];
    } else {
      result += mask[i];
    }
  }
  return result;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_VehclNo',style:'',codeId:'ed_VehclNo',id:'udc_comCode_vehc',nameId:'ed_VehclNm',selectID:'retrieveKndVehclListInfo','ev:onclickEvent':'scwin.udc_comCode_vehc_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehc_onblurCodeEvent',popupTitle:'차량번호조회,차량단축코드,차량번호',popupGridHeadTitle:'단축번호,장비번호,컬럼3,컬럼4,컬럼5',code:'vehclNo',mandatoryCode:'true',validTitle:'차량번호','ev:onblurNameEvent':'scwin.udc_comCode_vehc_onblurNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:' btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:'padding-bottom: 17px;'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNumFix:'false',focusMode:'cell','ev:oncelldblclick':'scwin.gr_out_oncelldblclick','ev:oncellclick':'scwin.gr_out_oncellclick',columnMove:'false',overflowX:'auto'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'고지번호<br/>FULL NUMBER',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'과태료종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'발생일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'접수일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'발생업체',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'과태료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'고지번호',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ntceFullNo',inputType:'text',style:'',value:'',width:'300',textAlign:'left',customFormatter:'scwin.f_applyMask'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltRateKnd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnBranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltRateAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ntceNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txttotal',label:'0',style:'',tagname:'span',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})