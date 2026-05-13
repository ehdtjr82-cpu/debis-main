/*amd /ui/ac/co/stdinfomgnt/co_100_10_01b.xml 15759 1090913e8ec74c352c92c04aa5db8dae99c9506c1fdbd647570d5f5ce23ee5fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizdiv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useYn',name:'useYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdiv',saveRemovedData:'true','ev:ondataload':'scwin.ds_bizdiv_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizdivCd',name:'상위사업부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizdivNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'트리레벨',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizdivCdInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bizdiv',action:'/ac.co.stdinfomgnt.RetrieveBusinessDivisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_bizdiv","key":"IN_DS1"},{"id":"ds_bizdiv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizdiv","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.stdinfomgnt.SaveBusinessDivisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bizdiv","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업부등록(co_100_10_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-14
//-------------------------------------------------------------------------

scwin.load_row = "";
scwin.modifiedRowIndex;
scwin.onpageload = function () {};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {};

/**
 * data onload
 */
scwin.ondataload = function () {
  scwin.f_Retrieve();
};

/**
 * 조회
 */
scwin.f_Retrieve = function () {
  scwin.set_modifyYn(false);
  $c.gus.cfDisableBtn($p, [btn_Save]);
  dma_bizdiv.set("useYn", -1);
  $c.sbm.execute($p, sbm_bizdiv);
};
scwin.ds_bizdiv_ondataload = function () {
  var rowCnt = ds_bizdiv.getRowCount();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    tv_treeView.findNodeByIndex(1, true);
  }
};

/**
 * 조회 후처리
 */
scwin.sbm_bizdiv_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_bizdiv.getRowCount() == 0) {
      // 조회결과가 존재하지 않습니다.
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      $c.gus.cfDisableObjects($p, [btn_Upt, btn_Save, tv_treeView]);
      return;
    }
    let rowIdx;
    if ($c.util.isEmpty($p, scwin.load_row)) {
      rowIdx = 1;
    } else {
      // 저장 후 조회
      rowIdx = scwin.load_row;
      scwin.modifiedRowIndex = "";
      scwin.load_row = "";
    }

    // tree focus
    tv_treeView.findNodeByIndex(rowIdx, true);
  } else {
    //cfShowError 는 공통에서 보내기 때문에 그외 로직만 처리하면 됩니다.
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg); //TODO 테스트용으로 이후 삭제 예정
    ds_bizdiv.removeAll();
  }
};

/**
 * 수정가능 여부 setting
 */
scwin.set_modifyYn = function (modifyYn) {
  if (modifyYn) {
    grp_detailInfo.setDisabled(false);
    ed_bizdivNm.focus();
  } else {
    grp_detailInfo.setDisabled(true);
  }
};

/**
 * 행추가
 */
scwin.f_AddItem = function () {
  scwin.set_modifyYn(true);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
  const modiArray = ds_bizdiv.getModifiedIndex();
  if (modiArray.length) {
    $c.win.alert($p, "저장되지 않은 데이타가 있습니다").then(() => {
      tv_treeView.findNodeByIndex(modiArray[0] + 1, true);
      ed_bizdivNm.focus();
    });
  } else {
    const realIdx = tv_treeView.getSelectedIndex() - 1;
    const addIdx = ds_bizdiv.getTotalRow() == 0 ? 0 : ds_bizdiv.getRowPosition() + 1;
    const {
      bizdivCd,
      bizdivNm,
      checkLevel
    } = ds_bizdiv.getRowJSON(realIdx);
    let data = {
      checkLevel: String(Number(checkLevel) + 1),
      upperBizdivCd: bizdivCd,
      upperBizdivNm: bizdivNm,
      useYn: "1"
    };
    ds_bizdiv.setRowJSON(addIdx, data);
    scwin.modifiedRowIndex = addIdx + 1;
    tv_treeView.findNodeByIndex(addIdx + 1, true);
    ed_bizdivNm.focus();
  }
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  scwin.modifiedRowIndex = "";
  scwin.load_row = "";
  scwin.f_Retrieve();
};

/**
 * 수정
 */
scwin.f_Update = function () {
  const modiArray = ds_bizdiv.getModifiedIndex();
  if (modiArray.length) {
    $c.win.alert($p, "저장되지 않은 데이타가 있습니다").then(() => {
      tv_treeView.findNodeByIndex(modiArray[0] + 1, true);
      scwin.set_modifyYn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
    });
    return;
  } else {
    scwin.set_modifyYn(true);
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    scwin.modifiedRowIndex = tv_treeView.getSelectedNode().index;

    // focus 설정
    ed_bizdivNm.focus();
  }
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_bizdivNm]))) return;
  if (ed_bizdivCd.getValue().trim() == ed_upperBizdivCd.getValue().trim()) {
    $c.win.alert($p, "사업부코드와 상위사업부코드는 동일할수 없습니다.").then(() => {
      ed_upperBizdivCd.focus();
    });
    return;
  }
  const modiArray = ds_bizdiv.getModifiedIndex();
  if (modiArray.length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["사업부코드정보"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.load_row = tv_treeView.getSelectedIndex();
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * 저장 callback
 */
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

/**
 * 상위사업부코드 팝업 - code onviewchange
 */
scwin.udc_upperBizdivCd_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_bizdivNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_upperBizdivCdPopUp("onchange");
  }
};

/**
 * 상위사업부코드 팝업 - click
 */
scwin.udc_upperBizdivCd_onclickEvent = function (e) {
  scwin.f_upperBizdivCdPopUp("click");
};

/**
 * 상위사업부코드 팝업
 */
scwin.f_upperBizdivCdPopUp = function (type) {
  const rowIndex = tv_treeView.getSelectedIndex();
  const bizdivCd = ds_bizdiv.getCellData(rowIndex - 1, "bizdivCd");
  udc_upperBizdivCd.cfCommonPopUp(scwin.udc_upperBizdivCd_callBackFunc, ed_upperBizdivCd.getValue(), "", type == "click" ? "F" : "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , `,${bizdivCd}` // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , "410" // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , type == "click" ? "T" : "F" // 전체검색허용여부	("F")
  , "사업영역조회,사업영역코드,사업영역명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  , null);
};

/**
 * 상위사업부코드 팝업 callback
 */
scwin.udc_upperBizdivCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_upperBizdivCd.setValue(ret[0]);
    ed_upperBizdivNm.setValue(ret[1]);
  } else {
    ed_upperBizdivCd.setValue("");
    ed_upperBizdivNm.setValue("");
  }
};

/**
 * 사업영역 treeView label click
 */
scwin.tv_treeView_onlabelclick = function (value, node, index) {
  scwin.set_modifyYn(false);
  $c.gus.cfDisableBtn($p, [btn_Save]);
  if (scwin.modifiedRowIndex) {
    // 직전에 수정버튼 눌렀던 index
    if (scwin.modifiedRowIndex == index) {
      scwin.set_modifyYn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
    }
  }
};

/**
 * 사업부코드명 변경
 */
scwin.ed_bizdivNm_onkeyup = function (e) {
  const tvIdx = tv_treeView.getSelectedIndex();
  tv_treeView.setLabelByIndex(tvIdx, this.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box',style:'height: 100%;'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업영역 Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Add',label:'행추가',class:'btn ',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_AddItem'}},{T:1,N:'w2:button',A:{style:'',id:'btn_cancel',label:'취소',class:'btn ',objType:'bDelete','ev:onclick':'scwin.f_Cancel'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grd_section1',class:'tvw-wrap '},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height:100%;',id:'tv_treeView',renderType:'virtual',class:'',showTreeDepth:'8','ev:onlabelclick':'scwin.tv_treeView_onlabelclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bizdiv'},E:[{T:1,N:'w2:label',A:{ref:'bizdivNm'}},{T:1,N:'w2:value',A:{ref:'bizdivCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업영역 상세내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'grp_detailInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업부코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_bizdivCd',placeholder:'',class:'form-control w110',objType:'key',allowChar:'0-9',readOnly:'true',ref:'data:ds_bizdiv.bizdivCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업부코드명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_bizdivNm',placeholder:'',class:'form-control w300',objType:'data',mandatory:'true',maxByteLength:'50',ref:'data:ds_bizdiv.bizdivNm','ev:onkeyup':'scwin.ed_bizdivNm_onkeyup',maxlength:'50',title:'사업부코드명',editType:'focus'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위사업부코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w300',codeId:'ed_upperBizdivCd',objTypeCode:'data',allowCharCode:'0-9',nameId:'ed_upperBizdivNm',btnId:'btn_upperBizdiv',id:'udc_upperBizdivCd',popupGridHeadTitle:'사업부코드명',popupTitle:'사업부코드,사업부명',code:'upperBizdivCd',selectID:'retrieveBizdivCdInfo','ev:onclickEvent':'scwin.udc_upperBizdivCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_upperBizdivCd_onviewchangeCodeEvent',readOnlyName:'true',refDataCollection:'ds_bizdiv',name:'upperBizdivNm',maxlengthCode:'3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'','ev:oncheckboxclick':'scwin.chb_useYn_oncheckboxclick','ev:onlabelclick':'scwin.chb_useYn_onlabelclick',falseValue:'0',id:'chb_useYn',objType:'data',ref:'data:ds_bizdiv.useYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Upt',label:'수정',class:'btn',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Save',label:'저장',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]})