/*amd /ui/cm/zz/zipcodePopupNcall.xml 14474 db6a997f52f5dae0137ab3dc05e3556df3e3dc205885dd3369f9a6fec773e664 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'dongNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'roadNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_zip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sidoNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sigunguNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eupmyeondongNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'roadNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allAddr',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allAddrView',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxKt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyKt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_zip_new',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sidoNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sigunguNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eupmyeondongNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'roadNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allAddr',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allAddrView',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xxKt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyKt',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_addressOld',action:'/ncall.cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_zip", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_addressOld_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_addressNew',action:'/ncall.cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_zip_new", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_addressNew_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 우편번호 조회 팝업
 * 메뉴경로 : 우편번호 조회 팝업 
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/cm/zz/zipcodePopup.jsp
 * 작 성 자 : 박진수
 * 작 업 일 : 2025-11-04
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-11-04      박진수    최초작성
 */
scwin.onpageload = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.params = $c.data.getParameter($p);
  $c.data.setPopupTitle($p, "주소 검색");
  ed_dongNm.focus();
};

/**
 * 팝업타이틀 변경 
 */
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "주소 검색");
};

/**
 * 초기세팅(TODO:TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ds_zip.removeAll();
  ds_zip_new.removeAll();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  dma_search.setEmptyValue([]);
  dma_search.set("sysCd", "NcallCommonEBC");
  dma_search.set("queryId", "retrieveNewAddress_dong");
  ed_dongNm.focus();
};

/**
 * 조회 : 데이터를 조회한다.
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = function (e) {
  if (ed_dongNm.getValue() == "" && ed_roadNm.getValue() == "") {
    $c.win.alert($p, "동이름 또는 도로명 중 하나의 검색조건을 입력해 주세요");
    ed_dongNm.focus();
    return;
  } else {
    dma_search.set("param1", ed_dongNm.getValue());
    dma_search.set("param2", ed_roadNm.getValue());
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_addressOld);
};
scwin.sbm_addressOld_submitdone = function (e) {
  //구주소 동이름 없으면 pass
  ds_zip.sort("zip", 0);
  let rowCnt = ds_zip.getRowCount();
  totalRows1.setValue(rowCnt);
  if (rowCnt > 0) {
    ds_zip.setRowPosition(0);
  }

  // if (rowCnt == 0) ds_zip.removeAll();

  //신주소 조회
  dma_search.set("queryId", "retrieveNewAddress_road");
  $c.sbm.execute($p, sbm_addressNew);
};
scwin.sbm_addressNew_submitdone = function (e) {
  //구주소 동이름 없으면 pass
  ds_zip_new.sort("zip", 0);
  let rowCnt = ds_zip_new.getRowCount();
  totalRows2.setValue(rowCnt);
  if (rowCnt > 0) {
    ds_zip_new.setRowPosition(0);
  }
};

// 엔터키 조회
scwin.ed_dongNm_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.btn_retrieve_onclick();
  }
};
scwin.ed_roadNm_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.btn_retrieve_onclick();
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
  let objReturn = new Object();
  objReturn.stasNm = ds_zip.getCellData(row, 'sidoNm'); // 시도
  objReturn.cuntyNm = ds_zip.getCellData(row, 'sigunguNm'); // 시군구
  objReturn.dongNm = ds_zip.getCellData(row, 'eupmyeondongNm'); // 동명

  objReturn.dongNm = ds_zip.getCellData(row, 'eupmyeondongNm');
  if (ds_zip.getCellData(row, 'zip') == "") {
    objReturn.zip = "000000";
  } else {
    objReturn.zip = ds_zip.getCellData(row, 'zip'); // zip
  }
  objReturn.addr1 = ds_zip.getCellData(row, 'allAddr'); // 주소1
  objReturn.allAddr = ds_zip.getCellData(row, 'allAddr'); // 전체주소

  objReturn.xpos = ds_zip.getCellData(row, 'xxKt');
  objReturn.ypos = ds_zip.getCellData(row, 'yyKt');
  $c.win.closePopup($p, objReturn);
};
scwin.f_rtnValue_New = function (row) {
  let objReturn = new Object();
  objReturn.stasNm = ds_zip_new.getCellData(row, 'sidoNm'); // 시도
  objReturn.cuntyNm = ds_zip_new.getCellData(row, 'sigunguNm'); // 시군구
  objReturn.dongNm = ds_zip_new.getCellData(row, 'eupmyeondongNm'); // 동명

  objReturn.dongNm = ds_zip_new.getCellData(row, 'eupmyeondongNm');
  if (ds_zip_new.getCellData(row, 'zip') == "") {
    objReturn.zip = "000000";
  } else {
    objReturn.zip = ds_zip_new.getCellData(row, 'zip'); // zip
  }
  objReturn.addr1 = ds_zip_new.getCellData(row, 'allAddr'); // 주소1
  objReturn.allAddr = ds_zip_new.getCellData(row, 'allAddr'); // 전체주소

  objReturn.xpos = ds_zip_new.getCellData(row, 'xxKt');
  objReturn.ypos = ds_zip_new.getCellData(row, 'yyKt');
  $c.win.closePopup($p, objReturn);
};

/****************************************************************************************
* 그리드, 데이타리스트 이벤트 영역
*****************************************************************************************/
/**
 * 그리드 더블클릭
 */
scwin.gr_addressOld_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.gr_addressNew_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue_New(rowIndex);
};
scwin.gr_addressOld_onkeydown = function (e) {
  if (e.keyCode == 13 && ds_zip.getRowCount() > 0) {
    scwin.f_rtnValue(ds_zip.getRowPosition());
  }
};
scwin.gr_addressNew_onkeydown = function (e) {
  if (e.keyCode == 13 && ds_zip_new.getRowCount() > 0) {
    scwin.f_rtnValue_New(ds_zip_new.getRowPosition());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동이름',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_dongNm',placeholder:'',style:'','ev:onkeyup':'scwin.ed_dongNm_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도로명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_roadNm',placeholder:'',style:'','ev:onkeyup':'scwin.ed_roadNm_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'구주소',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_zip',style:'',autoFit:'allColumn',id:'gr_addressOld',class:'wq_gvw','ev:oncelldblclick':'scwin.gr_addressOld_oncelldblclick','ev:onkeydown':'scwin.gr_addressOld_onkeydown',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column1',value:'주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'우편번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'allAddr',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zip',value:'',displayMode:'label',displayFormat:'###-###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'새주소',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_zip_new',id:'gr_addressNew',style:'','ev:oncelldblclick':'scwin.gr_addressNew_oncelldblclick','ev:onkeydown':'scwin.gr_addressNew_onkeydown',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'주소',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'우편번호',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'allAddrView',inputType:'text',style:'',value:'',width:'300',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zip',inputType:'text',style:'',value:'',width:'100',displayFormat:'###-###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})