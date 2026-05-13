/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_16b.xml 11064 b2373311981ed262eace56ad6a951fe03d19cd79c521e91eba58658d6ff2243b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_odrInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'cntrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'arrvlportDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'arvWrkPlNm'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/ds.sd.odrmgnt.odrreg.RetrieveOrderContainerNumberListCMD.do',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrInfo","key":"OUT_DS1"}','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/ds.sd.odrmgnt.odrreg.UpdateOrderContainerNumberListCMD.do',ref:'data:json,[{"action":"modified","id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_cntrInfo","key":"IN_DS2"}]','ev:submitdone':'scwin.sbm_save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 화면 - Id: sd_402_01_16b.jsp,v 1.2 2007/02/13 00:22:44 박동실 Exp 
// 설명 - 컨테이너번호수정
scwin.saveYn = "N"; //팝업으로 띄워졌을때 parent에 보내는 값
scwin.retrieveYn = "N"; //조회여부

scwin.onpageload = function () {
  ds_odrInfo.insertRow();
  ds_odrInfo.setRowPosition(0);
  scwin.f_FieldClear();

  //이 화면이 팝업인 경우 파라미터 받기 
  var isWframePopup = $p.isPopup();
  if (isWframePopup) {
    scwin.args = $p.getAllParameter().paramData.data;
    ed_odrNo.setValue(scwin.args[0].trim());

    // 사이즈 조정
    gr_cntrInfo.setGridHeight(180);
    if (ed_odrNo.getValue() != "") {
      btn_close.show();
      $c.gus.cfDisableObjects($p, [ed_odrNo]);
      scwin.f_Retrieve();
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if ($c.gus.cfIsNull($p, ed_odrNo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["오더정보"]); //@은(는) 필수 입력 항목입니다.
    return;
  }
  if ($c.gus.cfValidate($p, [tbl_odrCntrArea])) {
    ds_odrInfo.setCellData(0, "odrNo", ed_odrNo.getValue()); //오더번호    
    ds_odrInfo.setCellData(0, "cntrNo", ed_cntrNo.getValue().toUpperCase()); //컨테이너번호

    scwin.retrieveYn = "Y";
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//조회 조건 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_odrCntrArea);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = async function (e) {
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001); //저장하시겠습니까? 

  if (ret) {
    if (ds_cntrInfo.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다. 
    } else {
      if ($c.gus.cfValidate($p, [gr_cntrInfo])) {
        $c.sbm.execute($p, sbm_save);
      }
    }
  }
};

//행취소
scwin.f_UndoRow = function () {
  if (ds_cntrInfo.getRowCount() > 0) {
    ds_cntrInfo.undoRow(ds_cntrInfo.getRowPosition());
  }
};

//행삭제
scwin.f_deleteRow = function () {
  if (ds_cntrInfo.getRowCount() > 0) {
    const rowPosition = ds_cntrInfo.getRowPosition();
    ds_cntrInfo.deleteRow(rowPosition);
    ds_cntrInfo.setRowPosition(rowPosition);
    gr_cntrInfo.setFocusedCell(rowPosition, 0);
  }
};
scwin.btn_close_onclick = function (e) {
  var arrRtnVal = new Array();
  arrRtnVal[0] = "N/A";
  arrRtnVal[1] = scwin.saveYn;
  $c.win.closePopup($p, arrRtnVal);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_cntrInfo.getRowCount());
  }
  scwin.retrieveYn = "N";
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.saveYn = "Y";
    scwin.f_Retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_odrCntrArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',ref:'data:ds_odrInfo.odrNo',mandatory:'true',objType:'Data',maxlength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;text-transform: uppercase;',ref:'data:ds_odrInfo.cntrNo',objType:'data',maxlength:'11',allowChar:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cntrInfo',id:'gr_cntrInfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'입항일시',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Size',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Type',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'F/E',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'도착작업장',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDtm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'130',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_cntrInfo',cancelFunction:'scwin.f_UndoRow',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'Y',EngYn:'N',rowDelFunction:'scwin.f_deleteRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_undoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',label:'닫기',style:'display:none;',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]}]}]}]}]}]}]}]})