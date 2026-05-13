/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_13b.xml 25867 6a98fba6403f580124178bb832c3a07fb9703a222eae9580eba9bcab84eeb94d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_saveInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lblock',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctier',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lrow',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key8',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyRsLodSearchDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.UpdateCyRsTransBlockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_saveInfo","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_transit',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_transit","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_transit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수

scwin.loginID;
scwin.reqWrkDt;
scwin.eqCd;
scwin.wrkPlCd;
scwin.lobranCd;
scwin.fullEmptyClsCd;
scwin.selfClsCd;
scwin.memJson;
scwin.g_selected_input_box = "ed_cntrNo";
scwin.pgrId;
scwin.condWrkDt;
scwin.onpageload = async function () {
  scwin.initSetVal();
  ed_cntrNo.setReadOnly(true);
  if (scwin.wrkPlCd == "" || scwin.eqCd == "" || scwin.lobranCd == "") {
    let loginData = scwin.getCYLoginData();
    if (loginData != null) {
      scwin.wrkPlCd = loginData.wrkPlCd ?? "";
      scwin.lobranCd = loginData.lobranCd ?? "";
      scwin.eqCd = loginData.eqCd ?? "";
    }
  }
  if (scwin.lobranCd == "" || scwin.eqCd == "" || scwin.wrkPlCd == "") {
    let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_01b.xml";
    let programId = scwin.pgrId;
    let params = {
      pgrId: scwin.pgrId
    };
    let loginMenuNm = "CY자동화로그인";
    $c.win.openMenu($p, loginMenuNm, strUrl, programId, params, {
      openAction: "exist",
      mdiTitle: loginMenuNm
    });
  }
  ;
  hid_wrkPlCd.setValue(scwin.wrkPlCd);
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "CyRsAutomationEBC",
    param2: "retrieveBlockList",
    param3: [""],
    //고정?
    compID: "acb_pre_cblock" //바인딩 할 컴포넌트 id
  }];
  await $c.data.setGauceUtil($p, codeOptions, scwin.commonCodeCallBack01);
};
scwin.getCYLoginData = function () {
  var raw = localStorage.getItem("CY_LOGIN_INFO");
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(escape(atob(raw))));
  } catch (e) {
    return null;
  }
};
scwin.commonCodeCallBack01 = function () {
  let datasetObj = $p.getComponentById(acb_pre_cblock.getDataListInfo().id);
  datasetObj.setColumnFilter({
    type: 'regExp',
    colIndex: 'code',
    key: /^[^0-9]$/,
    condition: 'and'
  });
};
scwin.initSetVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.reqWrkDt = $c.data.getParameter($p, "reqWrkDt") == null ? "" : $c.data.getParameter($p, "reqWrkDt");
  scwin.eqCd = $c.data.getParameter($p, "eqCd") == null ? "" : $c.data.getParameter($p, "eqCd");
  scwin.wrkPlCd = $c.data.getParameter($p, "wrkPlCd") == null ? "" : $c.data.getParameter($p, "wrkPlCd");
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.fullEmptyClsCd = $c.data.getParameter($p, "fullEmptyClsCd") == null ? "" : $c.data.getParameter($p, "fullEmptyClsCd");
  scwin.selfClsCd = $c.data.getParameter($p, "selfClsCd") == null ? "" : $c.data.getParameter($p, "selfClsCd");
  scwin.pgrId = $c.data.getParameter($p, "pgrId") == null ? "tn_304_03_13b" : $c.data.getParameter($p, "pgrId");
  scwin.condWrkDt = $c.data.getParameter($p, "condWrkDt") == null ? "" : $c.data.getParameter($p, "condWrkDt");
};
scwin.f_retrieve = async function () {
  dma_condition.set("cntrNo", ed_cntrNo.getValue);
  dma_condition.set("currPosCd", scwin.wrkPlCd);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_completeWrk = async function () {
  if (acb_cblock.getValue() == "") {
    await $c.gus.cfAlertMsg($p, '확정블록 코드를 입력하세요.');
    return false;
  }
  if (ed_cntrNo.getValue().length != 11) {
    $c.gus.cfAlertMsg($p, '유효한 컨테이너번호를 입력하십시오');
    return;
  }
  dma_saveInfo.set("cntrNo", ed_cntrNo.getValue());
  dma_saveInfo.set("currPosCd", scwin.wrkPlCd);
  dma_saveInfo.set("lineCd", ed_lineCd.getValue());
  dma_saveInfo.set("lblock", acb_cblock.getValue());
  dma_saveInfo.set("ctier", acb_ctier.getValue());
  dma_saveInfo.set("lrow", acb_lrow.getValue());
  dma_saveInfo.set("fullEmptyClsCd", ed_fullEmptyClsCd.getValue());
  await $c.sbm.execute($p, sbm_save);
  //tr_save.Post();
};
scwin.sbm_save_submitDone = async function () {
  await $c.win.alert($p, "완료되었습니다");
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_13b.xml";
  let programId = scwin.pgrId;
  params = {
    pgrId: scwin.pgrId,
    condWrkDt: scwin.condWrkDt
  };
  $c.win.openMenu($p, "CY상하차이적등록", strUrl, programId, params, {
    openAction: "exist"
  });

  //location.reload();
};
scwin.btn_complete_onclick = function (e) {
  scwin.f_completeWrk();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_back();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_DelClick();
};
scwin.btn_R_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_cntrNo.getValue(), '', 'F', 'F');
};
scwin.f_back = function () {
  var lblock = '';
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_02b.xml";
  let programId = scwin.pgrId;
  let paramObj = {
    wrkPlCd: scwin.wrkPlCd || "",
    eqCd: scwin.eqCd || "",
    lobranCd: scwin.lobranCd || "",
    reqWrkDt: scwin.reqWrkDt || "",
    fullEmptyClsCd: scwin.fullEmptyClsCd || "",
    selfClsCd: scwin.selfClsCd || "",
    pgrId: scwin.pgrId,
    condWrkDt: scwin.condWrkDt
  };
  $c.win.openMenu($p, "CY상하차정보조회", strUrl, programId, paramObj, {
    openAction: "exist"
  });
};

// scwin.f_twinkleBtn = function(code,time){
//         if(time=="" || time==null) time = 100;
//         scwin.f_Btn1(code);
//         setTimeout("f_Btn2('"+code+"')", time);
//     }

// scwin.f_Btn1 = function(code){
//     var clickImg =  "images/btn_"+code+"_over.gif";
//     $p.getComponentById("btn_"+ code).src = "images/btn_"+code+"_over.gif";
// }

// scwin.f_Btn2(code){
//     var clickImg =  "images/btn_"+code+".gif";
//    $p.getComponentById("btn_"+ code).src  = "images/btn_"+code+".gif";
// }

scwin.f_Click = function (code) {
  //f_twinkleBtn(code,80);

  if (scwin.g_selected_input_box == 'ed_cntrNo') {
    if (ed_cntrNo.getValue().length == 11) {
      //사번은 6자리
      return;
    }
    ;
    var value = ed_cntrNo.getValue();
    value = value + '' + code;
    ed_cntrNo.setValue(value);
  }
  ;
};
scwin.f_Check = function (code) {
  if (code == 'ed_cntrNo') {
    scwin.g_selected_input_box = 'ed_cntrNo';
  }
};
scwin.f_DelClick = function () {
  if (scwin.g_selected_input_box == 'ed_cntrNo') {
    var value = ed_cntrNo.getValue();
    if (value.length != 0) {
      value = value.substring(0, value.length - 1);
    }
    ;
    ed_cntrNo.setValue(value);
  }
  ;
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면  

  switch (disGubun) {
    case 1:
      //작업장팝업    
      if (ed_cntrNo.getValue() >= 4) {
        // 컨테이너코드 4자리
        pAllSearch = "T";
        pCode = ed_cntrNo.getValue();

        //alert(pCode.length);
        if (pCode.length == 11) {
          pCode = pCode.substr(pCode.length - 4, 4); //substr(pCode,(pCode.length)-4,4)
        } else if (pCode.length != 4) {
          $c.gus.cfAlertMsg($p, "컨테이너번호는 4자리로 입력하세요");
          ed_cntrNo.focus;
          return;
        }
        pName = "";
        pWhere = scwin.wrkPlCd;
        udc_comPop.setSelectId("retrieveCntrNoList");
        //alert(pCode+" " + pName+" " + pWhere);
        rtnList = await udc_comPop.cfCommonPopUp(scwin.retrieveCntrNoListCb // XML상의 SELECT ID  
        , pCode // 화면에서의 ??? Code Element의  Value
        , pName // 화면에서의 ??? Name Element의  Value
        , 'T' // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
        , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서  
        , null // 보여주는 각 컬럼들의 폭    
        , "9,10" // 컬럼중에서 숨기는    컬럼 지정   
        , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의   사용자 정의  폭
        , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
        , null // 윈도우 위치 Y좌표   
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부   ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , "컨테이너" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , "T");
        //alert("3");
      } else {
        $c.gus.cfAlertMsg($p, '컨테이너번호는 4자리로 입력하세요');
        ed_cntrNo.focus;
      }
      break;
  }
  ;
};
scwin.retrieveCntrNoListCb = async function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_cntrNo.setValue(rtnList[0]);
    ed_lineCd.setValue(rtnList[1]);
    ed_cntrSizCd.setValue(rtnList[2]);
    ed_cntrTypCd.setValue(rtnList[3]);
    ed_fullEmptyClsCd.setValue(rtnList[4]);
    ed_lblock.setValue(rtnList[5]);
    ed_ltier.setValue(rtnList[6]);
    ed_lrow.setValue(rtnList[7]);
  } else {
    await $c.gus.cfAlertMsg($p, '조회결과가 존재하지않습니다. 배차담당자에게 문의하세요');
  }
};
scwin.udc_comPop_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_cntrNo, '', 'F', 'F');
};

//-------------------------------------------------------------------------
// Validation 체크
//-------------------------------------------------------------------------
scwin.f_ValidateCblocck = async function () {
  if (await $c.gus.cfIsNull($p, acb_cblock.getValue())) {
    await $c.gus.cfAlertMsg($p, '확정블록 코드를 입력하세요.');
    return false;
  }
  return true;
};
scwin.f_RetrieveTransit = async function (val) {
  // if(!acb_pre_cblock.getValue()){     //확정구역 '선택'을 선택 시

  //         return;        
  // };

  sbm_transit.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CyRsAutomationEBC&queryId=retrieveBlockList1&param1=" + scwin.wrkPlCd + "&param2=" + val;
  await $c.sbm.execute($p, sbm_transit);
};
scwin.acb_pre_cblock_onchange = function (info) {
  scwin.f_RetrieveTransit(acb_pre_cblock.getValue());
};
scwin.sbm_transit_submitdone = function () {
  if (acb_pre_cblock.getValue() == "") {
    acb_cblock.setSelectedIndex(0);
  } else {
    acb_cblock.setSelectedIndex(1);
  }
};
scwin.btn_onclick = function (e) {
  scwin.g_selected_input_box = "ed_cntrNo";
  code = this.getValue();
  //scwin.f_twinkleBtn(code,80);

  if (scwin.g_selected_input_box == "ed_cntrNo") {
    if (ed_cntrNo.getValue().length == 11) {
      //사번은 6자리
      return;
    }
    var value = ed_cntrNo.getValue();
    value = value + "" + code;
    ed_cntrNo.setValue(value);
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents pda',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'pda-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_textbox2',label:'이적등록',style:'',tagname:'h3','ev:onclick':'scwin.tbx_textbox2_onclick'}}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:';background-color:#FFFFFF;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'SIZE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrSizCd',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'FULL<br/>EMPTY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fullEmptyClsCd',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrTypCd',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이전 구역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lblock',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이전 단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ltier',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'열',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lrow',placeholder:'',style:';background-color:#FFFFFF;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-red',escape:'false',id:'',label:'확정구역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'acb_pre_cblock',renderType:'native',class:'sbx_pda','ev:onchange':'scwin.acb_pre_cblock_onchange',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'acb_cblock',renderType:'native',class:'sbx_pda',allOption:'',chooseOption:'true',ref:'',displayMode:'label',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_transit'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'name'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'열',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'sbx_pda',editType:'select',id:'acb_lrow',renderType:'native',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'선택',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'sbx_pda',editType:'select',id:'acb_ctier',renderType:'native',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: max-content;'},E:[{T:1,N:'xf:group',A:{class:'keypad',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'',id:'btn_1',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_2',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_3',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_4',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_5',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_6',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_7',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'7'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_8',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'8'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_9',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_R',style:'',type:'button','ev:onclick':'scwin.btn_R_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'R'}]}]},{T:1,N:'xf:trigger',A:{class:'last',id:'btn_0',style:'',type:'button','ev:onclick':'scwin.btn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:trigger',A:{class:'keypad-del',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:input',A:{id:'hid_wrkPlCd',style:'width:144px; height:21px;  display:none;'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px;  display:none;',id:'udc_comPop','ev:onclickEvent':'scwin.udc_comPop_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right tac',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_complete',style:'',type:'button','ev:onclick':'scwin.btn_complete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]}]}]})