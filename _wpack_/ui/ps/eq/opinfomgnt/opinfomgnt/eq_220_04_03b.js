/*amd /ui/ps/eq/opinfomgnt/opinfomgnt/eq_220_04_03b.xml 11794 95146ed0b8ae3076477c48af83b1cb876040d47f24c29ae10426d2c9178ddbdc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_work_unit_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'wrkNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'정비작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',name:'표준작업시간수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_work_unit_re","key":"IN_DS1"},{"id":"ds_work_unit","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_work_unit","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";
scwin.homeClsCd = "";
scwin.fixWrkUnitNo = "";
scwin.popCheck = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  try {
    //공통코드 적용
    const codeOptions = [{
      grpCd: "ZZ205",
      compID: "lc_homeClsCd",
      opt: {
        "range": "1,EQ"
      }
    }, {
      grpCd: "EQ005",
      compID: "lc_catCd"
    }];
    $c.data.setCommonCode($p, codeOptions);
    scwin.params = $c.data.getParameter($p);
    scwin.homeClsCd = scwin.params.homeClsCd;
    scwin.fixWrkUnitNo = scwin.params.fixWrkUnitNo;
    scwin.popCheck = scwin.params.popCheck;
  } catch (e) {
    console.log("onpageload " + e);
  }
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  try {
    //코드매핑은 ondataload에서 처리해야 한다.
  } catch (e) {
    console.log("onUdcCompleted " + e);
  }
};
//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  if (scwin.params != "undefined" && scwin.params != null) {
    if (scwin.homeClsCd != null || scwin.fixWrkUnitNo != null) {
      lc_homeClsCd.setValue(scwin.homeClsCd); //homeClsCdIndex = lux_homeClsCd.IndexOfColumn("code", homeClsCd);
      ed_fixWrkUnitNo.setValue(scwin.fixWrkUnitNo);
    } else {
      lc_homeClsCd.setSelectedIndex(0);
      ed_fixWrkUnitNo.setValue("");
    }
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  sbm_retrieve.action = "/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitListCMD.do";
  ds_work_unit.removeAll();
  ds_work_unit_re.set('useYn', 1);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (ds_work_unit.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    tbx_totalRows.setValue(ds_work_unit.getRowCount());
    $c.gus.cfGoPrevPosition($p, gr_work_pl, 0); //첫번째 포커스 이동
  } catch (e) {
    console.log("sbm_retrieve_submitdone " + e);
  }
};

//-------------------------------------------------------------------------
// 결과값 리턴
//-------------------------------------------------------------------------
scwin.f_rtnValue = function (row) {
  let rt = [ds_work_unit.getCellData(row, "fixWrkUnitNo") //arrRtnVal[0]
  , ds_work_unit.getCellData(row, "fixWrkUnitNm") //arrRtnVal[1]
  , ds_work_unit.getCellData(row, "stndWrkHhCnt") //arrRtnVal[2]
  ];
  $c.win.closePopup($p, [rt]);
};

//-------------------------------------------------------------------------
// 결과값 리턴
//-------------------------------------------------------------------------
scwin.f_rf_WinClosetnValue = function (row) {
  let rt = [0];
  $c.win.closePopup($p, [rt]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (value) {
  $c.gus.cfInitObjects($p, tb_est, null);
};

//-------------------------------------------------------------------------
// 그리드 더블클릭
//-------------------------------------------------------------------------
scwin.gr_work_pl_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.f_WinClose = function (e) {
  let val = [];
  val[0] = "";
  $c.win.closePopup($p, val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_est',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',disabled:'true',editType:'select',id:'lc_homeClsCd',search:'start',ref:'data:ds_work_unit_re.homeClsCd',searchTarget:'value',style:'width: 130px;',submenuSize:'auto',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',disabled:'false',editType:'select',id:'lc_catCd',search:'start',searchTarget:'value',style:'width: 130px;',submenuSize:'auto',visibleRowNum:'25',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_work_unit_re.catCd'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fixWrkUnitNo',placeholder:'',style:'width:130px;',maxlength:'6',allowChar:'0-9',ref:'data:ds_work_unit_re.fixWrkUnitNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_wrkNm',placeholder:'',style:'width:130px;',objType:'key',ref:'data:ds_work_unit_re.wrkNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_FieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false','ev:onclick':'scwin.f_Retrieve',id:'btn_Retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_work_unit',id:'gr_work_pl',style:'',visibleRowNum:'9',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_work_pl_oncelldblclick',resize:'true',columnMove:'true',readOnly:'true',readOnlyBackgroundColor:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업단위코드',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'단위명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'표준작업시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fixWrkUnitNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stndWrkHhCnt',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_WinClose',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})