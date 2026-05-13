/*amd /ui/il/acc/exchbudgetplan/ac_120_01_05b.xml 19735 807d466b684eb16546af34030e9ef3f9f405f6f667623a72cf45332f081ccb5c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'USER',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntBookmark',saveRemovedData:'true','ev:ondataload':'scwin.ds_clntBookmark_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'USER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgClntNo',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntBookmarkList',action:'/il.acc.exchbudgetplan.RetrieveClntBookmarkCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_clntBookmark","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_clntBookmark","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveClntBookmark',action:'/il.acc.exchbudgetplan.SaveClntBookmarkCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_clntBookmark","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveClntBookmark_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/* 테스트케이스 : 210111 */

scwin.vUserId = "";
scwin.vUserHomeClsCd = "";
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.txtCoClsCd = "";
scwin.selectedRow = "";
scwin.onpageload = function () {
  console.log(ACConstants.SUBSIDIARY_USER_HOME_CLS_CD);
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.vUserId = memJson.userId;
  scwin.vUserHomeClsCd = memJson.userHomeClsCd;
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, memJson.coCd) ? "" : memJson.coCd;
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, memJson.coClsCd) ? "" : memJson.coClsCd;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_setCompanyInfo();
    ed_userId.setValue(scwin.vUserId);
    scwin.f_openPopUp('1', 'T');
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.userHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.cfCommonPopUp(scwin.callbackDongbuGroupCompanyInfo, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  /*
  // SET	 
  if(rtnList != null ) { 
      if (rtnList[0] == "N/A") return; 
                      
      ed_coCd.text = rtnList[0];	// 코드
      txt_coNm.value = rtnList[5]; // 회사명 
      ed_coCd.hidVal = rtnList[0];  // 히든값
      txtCoClsCd.value =rtnList[1];	// 회사구분   
          
  }else{
      ed_coCd.text   = "";
      txt_coNm.value = "";
      ed_coCd.hidVal = ""; 
      txtCoClsCd.value ="";
  }
   if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템 
      isSubCompany = true;
  }else{
      isSubCompany = false;
  }
  */
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_userId_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.callbackDongbuGroupCompanyInfo = function (rtnList) {
  var isSubCompany;
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    //ed_coCd.hidVal = rtnList[0];  // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    //ed_coCd.hidVal = ""; 
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    isSubCompany = true;
  } else {
    isSubCompany = false;
  }
};
scwin.callbackAcEmpInfo = function (rtnList) {
  scwin.f_resultPopEd(ed_userId, ed_userNm, rtnList);
};
scwin.callbackEngClntInfo = function (rtnList) {
  console.log(rtnList);
  if (rtnList != "" && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_clntBookmark, scwin.selectedRow, "clntNo", "clntNm");
  }
};

//-------------------------------------------------------------------------
// 회계 거래처 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  // 		if (!cfValidate([ed_coCd]))
  // 			return false;    

  // 		var chkCocd = ed_coCd.text;

  //tr_retrieveClntBookmarkList.Post();
  $c.sbm.execute($p, sbm_retrieveClntBookmarkList);
};
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 사원
      var param = '';
      var resignYn = '';
      param = ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + resignYn;
      udc_userId.cfCommonPopUp(scwin.callbackAcEmpInfo, ed_userId.getValue().trim(), ed_userNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      //scwin.f_resultPopEd(ed_userId,ed_userNm,rtnList);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    if (rtnList[0] == "") return;
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    //strCd.hidVal = rtnList[0];  // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    //strCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
//  
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_clntBookmark.insertRow();
  gr_clntBookmark.setFocusedCell(ds_clntBookmark.getRowCount() - 1, 0);
  ds_clntBookmark.setCellData(ds_clntBookmark.getRowPosition(), 'userId', ed_userId.getValue());
  ds_clntBookmark.setCellData(ds_clntBookmark.getRowPosition(), 'userNm', ed_userNm.getValue());
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = function () {
  if (ds_clntBookmark.getRowStatus(ds_clntBookmark.getRowPosition()) == "C") {
    ds_clntBookmark.removeRow(ds_clntBookmark.getRowPosition());
  } else {
    var row = ds_clntBookmark.getRowPosition();
    ds_clntBookmark.deleteRow(ds_clntBookmark.getRowPosition());
    ds_clntBookmark.setRowPosition(row);
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  //$c.data.undoRow(ds_clntBookmark);
  //ds_clntBookmark.undoRow(ds_clntBookmark.getRowPosition());
  if (ds_clntBookmark.getRowStatus(ds_clntBookmark.getRowPosition()) == "C") {
    ds_clntBookmark.removeRow(ds_clntBookmark.getRowPosition());
  } else {
    ds_clntBookmark.undoRow(ds_clntBookmark.getRowPosition());
  }
  //ds_clntBookmark.Undo(ds_clntBookmark.RowPosition);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 

  if (ds_clntBookmark.getModifiedIndex().legnth == 0 || ds_clntBookmark.getRowCount() == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 필수항목 체크
  var chk = await $c.gus.cfValidate($p, [gr_clntBookmark]);
  if (!chk) {
    return false;
  }
  for (var i = 0; i < ds_clntBookmark.getRowCount() - 1; i++) {
    for (var j = i + 1; j <= ds_clntBookmark.getRowCount(); j++) {
      if (ds_clntBookmark.getCellData(i, "clntNo") == "" && ds_clntBookmark.getCellData(j, "clntNo") == "") {} else if (ds_clntBookmark.getCellData(i, "clntNo") == ds_clntBookmark.getCellData(j, "clntNo")) {
        //$c.win.alert(E_MSG_CM_ERR_032,Array("거래처번호("+ds_clntBookmark.NameString(j,"clntNo")+")"));  //@은(는) 중복될 수 없습니다.
        $c.win.alert($p, "거래처번호" + "(" + ds_clntBookmark.getCellData(j, "clntNo") + ")" + " already exists.");
        gr_clntBookmark.focus();
        return;
      }
    }
  }

  // 저장확인 
  var chkSave = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chkSave) {
    //tr_saveClntBookmark.Post(); 
    $c.sbm.execute($p, sbm_saveClntBookmark);

    // 			f_retrieve();
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, colid, colnmid) {
  scwin.selectedRow = row;

  // 선언부
  var rtnList;
  switch (disGubun) {
    case "Customer":
      udc_ilcomCode.ilCommonPopUp(scwin.callbackEngClntInfo, ds_clntBookmark.getCellData(row, "clntNo") //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Customer Code,Customer Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Customer Search,Customer Code,Customer Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_clntBookmark, row, "clntNo", "clntNm");
      break;
  }
};
scwin.sbm_saveClntBookmark_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  //$c.win.alert("Data was saved successfully.");
  scwin.f_retrieve();
};
scwin.udc_coCd_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_userId_onviewchangeCodeEvent = function (info) {
  scwin.f_openPopUp('1', 'T');
};
scwin.gr_clntBookmark_ontextimageclick = function (rowIndex, columnIndex) {
  var columnId = gr_clntBookmark.getColumnID(columnIndex);
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  switch (columnId) {
    case "clntNo":
      scwin.f_PopUpGrid("Customer", rowIndex, "F", "F");
      break;
    default:
      break;
  }
};
scwin.ds_clntBookmark_ondataload = function () {
  spa_cnt.setValue(ds_clntBookmark.getRowCount());
};
scwin.gr_clntBookmark_onviewchange = function (info) {
  var rowIndex = ds_clntBookmark.getRowPosition();
  var columnId = info.colId;
  switch (columnId) {
    case "clntNo":
      scwin.f_PopUpGrid("Customer", rowIndex, "F", "F");
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_coCd',btnId:'btn_coCd',id:'udc_coCd',nameId:'ed_coNm','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',selectID:'retrieveDongbuGroupCompanyInfo',code:'coCd',refDataCollection:'dma_search','ev:onviewchangeCodeEvent':'scwin.udc_coCd_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_userId',btnId:'btn_userId',id:'udc_userId',nameId:'ed_userNm','ev:onclickEvent':'scwin.udc_userId_onclickEvent',selectID:'retrieveAcEmpInfo',refDataCollection:'dma_search',code:'userId','ev:onviewchangeCodeEvent':'scwin.udc_userId_onviewchangeCodeEvent',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'retrieveEngClntInfo',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_clntBookmark',id:'gr_clntBookmark',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_clntBookmark_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20','ev:onviewchange':'scwin.gr_clntBookmark_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사용자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사용자명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'250'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'기존거래처번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'250',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgClntNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',gridID:'gr_clntBookmark',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delMarked',cancelFunction:'scwin.f_Undo',btnDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})