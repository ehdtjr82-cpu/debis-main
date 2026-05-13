/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05p2.xml 8412 58fc7f5db44c39692618cf0dd4f7a0bb2e22c6a7a289f5f19a283691c6a8f3a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DetailInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'temper',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfGubun',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ContainerInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crryinoutIntendNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportDtm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'temper',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dangerCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_OP207',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'1-1'}]},{T:1,N:'name',E:[{T:4,cdata:'test1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'2-1'}]},{T:1,N:'name',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'3-1'}]},{T:1,N:'name',E:[{T:4,cdata:'test3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'4-1'}]},{T:1,N:'name',E:[{T:4,cdata:'test4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'5-1'}]},{T:1,N:'name',E:[{T:4,cdata:'test5'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveContainerInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ContainerInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장 중','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 냉동컨테이너등록
 * 화면 id : op_301_01_05p2
 */
scwin.pre_RowPosition;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  ds_DetailInfo.setJSON(scwin.params.detailInfo);
  let rowPos = scwin.params.rowPos;
  scwin.pre_RowPosition = rowPos;
  txt_temper.setValue(ds_DetailInfo.getCellData(rowPos, "temper"));
  lc_dangerCd.setValue(ds_DetailInfo.getCellData(rowPos, "dangerCd"));
  ds_ContainerInfo.set("crryinoutIntendNo", ds_DetailInfo.getCellData(rowPos, "crryinoutIntendNo"));
  ds_ContainerInfo.set("arrvlportDtm", ds_DetailInfo.getCellData(rowPos, "arrvlportDtm"));
  ds_ContainerInfo.set("cntrNo", ds_DetailInfo.getCellData(rowPos, "cntrNo"));
  ds_ContainerInfo.set("impExpClsCd", ds_DetailInfo.getCellData(rowPos, "impExpClsCd"));
  const codeOptions = [{
    grpCd: "OP207",
    compID: "lc_dangerCd"
  } // 위험물코드
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_save_onclick = function (e) {
  ds_ContainerInfo.set("temper", txt_temper.getValue());
  ds_ContainerInfo.set("dangerCd", lc_dangerCd.getValue());
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  ds_DetailInfo.setCellData(scwin.pre_RowPosition, "temper", ds_ContainerInfo.get("temper"));
  ds_DetailInfo.setCellData(scwin.pre_RowPosition, "dangerCd", ds_ContainerInfo.get("dangerCd"));
  if (ds_DetailInfo.getCellData(scwin.pre_RowPosition, "crryinoutClsCd") == "I" //반입
  && ds_DetailInfo.getCellData(scwin.pre_RowPosition, "cntrTypCd") == "RF" //RF컨테이너
  && ds_DetailInfo.getCellData(scwin.pre_RowPosition, "fullEmptyClsCd") == "F" //Full
  && ds_DetailInfo.getCellData(scwin.pre_RowPosition, "temper") != "") {
    //설정온도가 설정되어 있는경우 냉동컨테이너.
    ds_DetailInfo.setCellData(scwin.pre_RowPosition, "rfGubun", "1");
  } else {
    ds_DetailInfo.setCellData(scwin.pre_RowPosition, "rfGubun", "0");
  }

  //$c.gus.cfGoPrevPosition(ds_DetailInfo, scwin.pre_RowPosition);
  //$c.win.closePopup();
  let rt = [];
  let row = 0;
  rt.push(scwin.pre_RowPosition);
  for (let b in ds_DetailInfo.cellIdList) {
    rt.push(ds_DetailInfo.getCellData(scwin.pre_RowPosition, parseInt(b)));
  }
  $c.win.closePopup($p, rt);
};

//-------------------------------------------------------------------------
// 취소 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_cancel_onclick = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설정온도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_temper',style:'width: 70px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'위험물코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dangerCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]})