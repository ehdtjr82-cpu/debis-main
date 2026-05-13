/*amd /ui/cm/zz/groupCodePopup.xml 5960 fb3776087dbce926d498297709183716a8eaf6f91822121adb78db20a9b706e9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cdGrp',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'grpCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'grpCdNm',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'grpCdNm'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'GAUCE',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'grpCdNm',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.zz.RetrieveGroupCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_cdGrp',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 상위그룹코드 검색
 * 메뉴경로 : 상위그룹코드 3Depth 팝업
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/cm/zz/groupCodePopup.jsp
 * 작 성 자 : 박진수
 * 작 업 일 : 2025-10-29
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-10-29      박진수    최초작성
 */
scwin.arrRtnVal = new Array();
scwin.onpageload = function () {
  scwin.f_Retrieve();
};

/**
 * 팝업타이틀 변경 
 */
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "상위그룹코드 검색");
};

/**
 * 초기세팅(TODO:TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  GAUCE.removeAll();
  totalRows.setValue("0");
};

/**
 * 조회 : 데이터를 조회한다.
 */
scwin.f_Retrieve = function (e) {
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = GAUCE.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    GAUCE.setRowPosition(0);
    gr_groupCode.focus();
  } else {
    $c.win.alert($p, "해당 그룹코드가 존재하지 않습니다");
  }
};

/**
 * 닫기
 */
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

/**
 * Grid에서 선택된 Row의 Value
 */
scwin.f_rtnValue = function (row) {
  scwin.arrRtnVal[0] = GAUCE.getCellData(row, "grpCd"); //그룹코드
  scwin.arrRtnVal[1] = GAUCE.getCellData(row, "grpCdNm"); //그룹코드명

  $c.win.closePopup($p, scwin.arrRtnVal);
};

/****************************************************************************************
* 그리드, 데이타리스트 이벤트 영역
*****************************************************************************************/
/**
 * 그리드 더블클릭
 */
scwin.gr_groupCode_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // if (rowIndex == 0) return;
  scwin.f_rtnValue(rowIndex);
};
scwin.gr_groupCode_onkeydown = function (e) {
  if (e.keyCode == 13 && GAUCE.getRowCount() > 0) {
    scwin.f_rtnValue(GAUCE.getRowPosition());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:GAUCE',id:'gr_groupCode',style:'','ev:oncelldblclick':'scwin.gr_groupCode_oncelldblclick','ev:onkeydown':'scwin.gr_groupCode_onkeydown',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'101',inputType:'text',style:'',id:'column3',value:'그룹코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'228',inputType:'text',style:'',id:'column4',value:'그룹코드명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'101',inputType:'text',style:'',id:'grpCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'228',inputType:'text',style:'',id:'grpCdNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})