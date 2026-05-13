/*amd /ui/ac/fm/stdinfomgnt/fm_100_02_01b.xml 9570 bc4489ca9ded8bec87af1209dc5c93c72ab33b1fff27dfeebfe05a340cb5d34d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bank',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBank',action:'/ac.fm.stdinfomgnt.CUDBankCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bank","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBank_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.editYn = "N"; //변경정보 처리후 재조회시 체크하기 위한 처리.
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (scwin.editYn == "N") {
    //저장처리후에는 체크하지 않기 위한 방어코드
    if (ds_bank.getModifiedIndex().length > 0) {
      if (await $c.win.confirm($p, MSG_CM_CRM_005)) {
        $c.sbm.execute($p, sbm_retrieve);
      }
    } else {
      $c.sbm.execute($p, sbm_retrieve);
    }
  } else {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_bank.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "은행코드등록"));
    return false;
  }
  let ret = await $c.gus.cfValidate($p, [gr_bankList]);
  if (ret) {
    scwin.editYn = "Y";
    let validArry = [{
      id: "bankCd",
      name: "은행코드",
      key: true
    }];
    let gridName = "은행코드등록";
    if (!(await $c.gus.cfValidateGrid($p, gr_bankList, null, null, validArry, gridName))) {
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_saveBank);
    }
  } else {
    scwin.editYn = "N";
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  $c.data.insertRow($p, $p.getComponentById("gr_bankList"));
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoAll = function () {
  $c.data.undoRow($p, ds_bank, "Y");
};

//-------------------------------------------------------------------------
// 신규 은행코드 삭제시 수행 (DB에 저장된 은행코드는 삭제 할 수 없음)
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  if (ds_bank.getRowStatus(ds_bank.getRowPosition()) != "C") {
    $c.gus.cfAlertMsg($p, "저장 되어 있는 은행코드는 삭제를 하실 수 없습니다.");
    return;
  }
  ds_bank.removeRow(ds_bank.getRowPosition()); //C일때 다른경우는 deleteRow
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  scwin.editYn = "N";
  if (e.responseJSON.GAUCE) {
    ds_bank.setJSON(e.responseJSON.GAUCE);
    if (ds_bank.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      $c.gus.cfGoPrevPosition($p, gr_bankList, 0); //첫번째 row 포지션이동
    }
  }
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_bank.getRowCount()));
};

//-------------------------------------------------------------------------
// 저장결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBank_submitdone = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bank',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'20',visibleRowNumFix:'true',id:'gr_bankList',resize:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',sortable:'true',editModeEvent:'onclick',alidFeatures:'ignoreStatus=no',rowStatusVisible:'true',gridName:'은행코드등록'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'150',value:'은행코드',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'300',value:'은행명',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'사용구분',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankCd',inputType:'text',removeBorderStyle:'false',width:'150',allowChar:'a-zA-Z0-9',mandatory:'true',minLength:'2',objType:'data',maxLength:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankNm',inputType:'text',removeBorderStyle:'false',width:'300',textAlign:'left',mandatory:'true',maxLength:'30',objType:'data'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'useYn',inputType:'select',removeBorderStyle:'false',width:'150',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:'',dataType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_addRow',label:'행추가',style:'','ev:onclick':'scwin.f_AddRow',userAuth:'C'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_delete',label:'행삭제',style:'','ev:onclick':'scwin.f_Delete',userAuth:'D'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_undoAll',label:'취소',style:'','ev:onclick':'scwin.f_UndoAll'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})