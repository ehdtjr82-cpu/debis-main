/*amd /ui/ac/co/stdinfomgnt/co_100_08_01b.xml 16492 a0cc3e7e3a7b58f8ca9aa7736857bee0fde2215873c2333c4fa76fcaeefff3d3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bizDom'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useYn',name:'name1',dataType:'number',defaultValue:'-1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizDom',saveRemovedData:'true','ev:ondataload':'scwin.ds_bizDom_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'bizDomNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizDomCd',name:'upperBizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizDomNm',name:'upperBizDomNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'checkLevel',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bizDom',action:'/ac.co.stdinfomgnt.RetrieveBusinessDomainCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_bizDom","key":"IN_DS1"},{"id":"ds_bizDom","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizDom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizDom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.stdinfomgnt.SaveBusinessDomainCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bizDom","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역등록 (co_100_08_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-14
//-------------------------------------------------------------------------
scwin.load_row = "";
scwin.modifiedRowIndex;

/**
 * page onload
 */
scwin.onpageload = function () {
  // 시스템구분코드
  const codeOptions = [{
    grpCd: "ZZ001",
    compID: "lc_sysCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

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
  dma_bizDom.set("useYn", -1);
  $c.sbm.execute($p, sbm_bizDom);
};

/**
 * 조회 후처리
 */
scwin.sbm_bizDom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_bizDom.getRowCount() == 0) {
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
    ds_bizDom.removeAll();
  }
};

/**
 * 사업영역 dataList onload
 */
scwin.ds_bizDom_ondataload = function () {};

/**
 * 수정가능 여부 setting
 */
scwin.set_modifyYn = function (modifyYn) {
  if (modifyYn) {
    grp_detailInfo.setDisabled(false);

    // btn_Upt.setDisabled(true);
    // btn_Save.setDisabled(false);

    ed_bizDomNm.focus();
  } else {
    grp_detailInfo.setDisabled(true);

    // btn_Upt.setDisabled(false);
    // btn_Save.setDisabled(true);
  }
};

/**
 * 행추가
 */
scwin.f_AddItem = function (e) {
  const modiArray = ds_bizDom.getModifiedIndex();
  if (modiArray.length) {
    $c.win.alert($p, "저장되지 않은 데이타가 있습니다").then(() => {
      tv_treeView.findNodeByIndex(modiArray[0] + 1, true);
      scwin.set_modifyYn(true);
      $c.gus.cfDisableBtn($p, [btn_Upt]);
      ed_bizDomNm.focus();
    });
  } else {
    scwin.set_modifyYn(true);
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    const realIdx = tv_treeView.getSelectedIndex() - 1;
    const addIdx = ds_bizDom.getTotalRow() == 0 ? 0 : ds_bizDom.getRowPosition() + 1;
    const {
      bizDomCd,
      bizDomNm,
      checkLevel
    } = ds_bizDom.getRowJSON(realIdx);
    let data = {
      checkLevel: String(Number(checkLevel) + 1),
      upperBizDomCd: bizDomCd,
      upperBizDomNm: bizDomNm,
      useYn: "1"
    };
    ds_bizDom.setRowJSON(addIdx, data);
    scwin.modifiedRowIndex = addIdx + 1;
    tv_treeView.findNodeByIndex(addIdx + 1, true);
    ed_bizDomNm.focus();
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
scwin.btn_Upt_onclick = function (e) {
  scwin.f_Update();
};
scwin.f_Update = function () {
  const modiArray = ds_bizDom.getModifiedIndex();
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
    ed_bizDomNm.focus();
  }
};

/**
 * 저장
 */
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  // 사업영역코드명
  let validate = await $c.gus.cfValidate($p, [ed_bizDomNm]);
  if (!validate) return;

  // 시스템구분코드
  validate = await $c.gus.cfValidate($p, [lc_sysCd]);
  if (!validate) return;
  if (ed_bizDomCd.getValue().trim() == ed_upperBizDomCd.getValue().trim()) {
    validate = await $c.win.alert($p, "사업영역코드와 상위사업영역코드는 동일할수 없습니다.");
    if (!validate) {
      ed_upperBizDomCd.focus();
    }
    return;
  }

  // 저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.load_row = tv_treeView.getSelectedIndex();
    $c.sbm.execute($p, sbm_save);
  }
};

/**
 * 저장 callback
 */
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    // 조회
    scwin.f_Retrieve();
  }
};

/**
 * 상위사업영역코드 팝업
 */
scwin.f_upperBizDomPopUp = function (type) {
  const rowIndex = tv_treeView.getSelectedIndex();
  const bizDomCd = ds_bizDom.getCellData(rowIndex - 1, "bizDomCd");
  const oneResultShowYn = type == "click" ? "F" : "T";
  udc_upperBizDom.cfCommonPopUp(scwin.udc_upperBizDom_callBackFunc, ed_upperBizDomCd.getValue(), "", oneResultShowYn // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , `,${bizDomCd}` // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
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
 * 상위사업영역코드 팝업 - callback
 */
scwin.udc_upperBizDom_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_upperBizDomCd.setValue(ret[0]);
    ed_upperBizDomNm.setValue(ret[1]);
  }
};

/**
 * 상위사업영역코드 팝업 - code onviewchange
 */
scwin.udc_upperBizDom_onviewchangeCodeEvent = function (info) {
  const {
    oldValue,
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ed_bizDomNm.setValue("");
  }
  if (oldValue != newValue) {
    scwin.f_upperBizDomPopUp("onchange");
  }
};

/**
 * 상위사업영역코드 팝업 - button click
 */
scwin.udc_upperBizDom_onclickEvent = function (e) {
  scwin.f_upperBizDomPopUp("click");
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
 * 사업영역코드명 변경
 */
scwin.ed_bizDomNm_onkeyup = function (e) {
  const tvIdx = tv_treeView.getSelectedIndex();
  tv_treeView.setLabelByIndex(tvIdx, this.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box ',style:'height: 100%'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox  wfix '},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width:600px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업영역 Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Add',label:'행추가',class:'btn ',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_AddItem'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Cancel',label:'취소',class:'btn ',objType:'bDelete','ev:onclick':'scwin.f_Cancel'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_section1',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height:100%;',id:'tv_treeView',renderType:'virtual',class:'',showTreeDepth:'8','ev:onlabelclick':'scwin.tv_treeView_onlabelclick',dynamicAppend:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bizDom'},E:[{T:1,N:'w2:label',A:{ref:'bizDomNm'}},{T:1,N:'w2:value',A:{ref:'bizDomCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업영역 상세내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'grp_detailInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_bizDomCd',placeholder:'',class:'form-control w110',objType:'key',allowChar:'0-9',readOnly:'true',ref:'data:ds_bizDom.bizDomCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역코드명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_bizDomNm',placeholder:'',class:'form-control w300',objType:'data',mandatory:'true',ref:'data:ds_bizDom.bizDomNm','ev:onkeyup':'scwin.ed_bizDomNm_onkeyup',editType:'focus',title:'사업영역코드명',maxlength:'30',maxByteLength:'30'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위사업영역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBizDomCdInfo',style:'',class:'w300',codeId:'ed_upperBizDomCd',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'3',nameId:'ed_upperBizDomNm',btnId:'btn_upperBizDom',id:'udc_upperBizDom',validExpCode:'시스템구분코드:yes',selectID:'retrieveBizDomCdInfo','ev:onblurCodeEvent':'scwin.udc_upperBizDom_onblurCodeEvent','ev:onclickEvent':'scwin.udc_upperBizDom_onclickEvent',readOnlyName:'true',refDataCollection:'ds_bizDom',code:'upperBizDomCd',name:'upperBizDomNm',skipOnBlurCodeValueEmpty:'','ev:onviewchangeCodeEvent':'scwin.udc_upperBizDom_onviewchangeCodeEvent',editTypeCode:'focus'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'시스템구분코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_bizDom.sysCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',allOption:'',id:'lc_sysCd',renderType:'',class:'form-control w200',direction:'auto',objType:'data',mandatory:'true',visibleRowNum:'40',title:'시스템구분코드',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'chb_useYn',objType:'data',ref:'data:ds_bizDom.useYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right',userAuth:'C'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_Upt',label:'수정',class:'btn',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_Upt_onclick'}},{T:1,N:'w2:button',A:{style:'',id:'btn_Save',label:'저장',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.btn_Save_onclick'}}]}]}]}]}]}]})