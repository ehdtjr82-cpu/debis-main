/*amd /ui/il/airout/aoth/ar_105_01_01b.xml 17262 8d3f2f0e1deb59de237bac989061a832b44c62946f22f7d480ac0879d1462c7f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_PartnerList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mhno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_PartnerList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_mhno',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_PartnerList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_PartnerList',target:'data:json,{"id":"ds_PartnerList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ar_105_01_01b
// 이름     : Cargo Manifest
// 경로     : 물류
// 작 성 자 : 성태영
// 작 업 일 : 2026-02-02
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

//전역변수
scwin.p_kcomcd = "";
scwin.p_iogb = "";
scwin.p_blno = "";
scwin.p_mhno = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //전역번수 값 초기 바인딩 여기서 해 주면 됨.
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd");
  scwin.p_iogb = $c.data.getParameter($p, "iogb");
  scwin.p_blno = $c.data.getParameter($p, "blno");
  scwin.p_mhno = $c.data.getParameter($p, "mhno");

  //scwin.f_SetDSHeader("1");		//ds_PartnerList : DateSet 생성. (필요없음.as-is 함수 구현 안함...)
  //scwin.lc_mnfgb.index = 0;		//Manifest Type ComboBox        //필요없음.

  scwin.f_getParametrSetting();
  hd_kcomcd.visible("false"); //대표거래처코드
  hd_kcomcd.setValue("DBEX");
};

//-------------------------------------------------------------------------
// Parameter Setting
//-------------------------------------------------------------------------
scwin.f_getParametrSetting = function () {
  var kcomcd = scwin.p_kcomcd;
  var blno = scwin.p_blno;
  var mhno = scwin.p_mhno;
  var iogb = scwin.p_iogb;
  if (blno == 'null' || blno == '') {
    return false;
  }
  hd_kcomcd.setValue(kcomcd); //대표거래처코드값 셋팅
  ed_blno.setValue(blno); //Master B/L No

  if (iogb == "I") {
    cnd_lc_iogb.setValue("I");
    scwin.f_MhnoLoading();
  } else {
    scwin.f_MhnoLoading();
    if (ds_mhno.getRowCount() == 0) {
      //마스터에서 조회 시 없을 경우 (co_load) 마스터 booking에서 한번 더 검색
      scwin.f_B_MhnoLoading();
    }
  }
  lc_mhno.focus();
};

//-------------------------------------------------------------------------
// MHNNO 가져오기 마스터에 서 검색
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue().trim();
  //strClntNo.trim;

  if (strClntNo.length > 0) {
    dma_mhno.set("sysCd", "ilCommonEBC");
    dma_mhno.set("queryId", "retriveAirMasterMhnoListCombo");
    dma_mhno.set("param1", strClntNo);
    if (cnd_lc_iogb.getSelectedIndex() != 0) {
      //Export or Import Combo (0 = Export)
      dma_mhno.set("param2", "I");
    }
    $c.sbm.execute($p, sbm_mhno);
  } else {
    //lc_mhno.CBData = "";	//EMEDIT, --> 초기화 함수(데이터셋을 이용하지 않고 수기로 정의하는 방식이라 함.)
    ds_mhno.removeAll();
  }
};

//-------------------------------------------------------------------------
// MHNNO 가져오기 마스터 부킹에 서 검색
//-------------------------------------------------------------------------
scwin.f_B_MhnoLoading = function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue().trim();
  if (strClntNo.length > 0) {
    dma_mhno.set("sysCd", "ilCommonEBC");
    dma_mhno.set("queryId", "retriveAirMasterMhnoListCombo");
    dma_mhno.set("param1", strClntNo);
    dma_mhno.set("param2", "O");
    $c.sbm.execute($p, sbm_mhno);
  } else {
    //lc_mhno.CBData = "";	//EMEDIT, --> 초기화 함수(데이터셋을 이용하지 않고 수기로 정의하는 방식이라 함.)
    ds_mhno.removeAll();
  }
};

//-------------------------------------------------------------------------
// 파트너  가져오기
//-------------------------------------------------------------------------
scwin.f_PartnerLoading = function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue().trim();
  if (strClntNo.length > 0) {
    ds_PartnerList.removeAll();
    dma_PartnerList.set("sysCd", "ilCommonEBC");
    dma_PartnerList.set("queryId", "retriveAirHousePartnerListCombo");
    dma_PartnerList.set("param1", strClntNo);
    dma_PartnerList.set("param2", lc_mhno.getValue());
    dma_PartnerList.set("param3", "");
    $c.sbm.execute($p, sbm_PartnerList);
  } else {
    ds_PartnerList.removeAll(); //ds_PartnerList.ClearData();
  }
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
scwin.f_Print = function () {
  var ptn_yn = "";
  if (lc_mnfgb.getSelectedIndex() == 0) {
    //Manifest Type SelectBox
    ptn_yn = "Y";
  } else {
    ptn_yn = "N";
  }
  if (cnd_lc_iogb.getSelectedIndex() == 0) {
    //outbound
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    let data = {
      odiName: "ar_105_01_01",
      reportName: "/il/airout/ar_105_01_01.ozr",
      odiParam: {
        KCOMCD: hd_kcomcd.getValue().trim(),
        MBLNO: ed_blno.getValue().trim(),
        MHNO: lc_mhno.getValue() == null ? lc_mhno.getValue() : lc_mhno.getValue().trim(),
        PTN_YN: ptn_yn,
        PARTNER_NM: txt_pnnm.getValue()
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        zoom: 90 // 배율 설정
        //mode : "print"
      },
      formParam: {}
    };
    console.log(data);
    scwin.openPopup(data);
  } else {
    //inbound
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

    let data = {
      odiName: "ar_105_01_02",
      reportName: "/il/airout/ar_105_01_02.ozr",
      odiParam: {
        KCOMCD: hd_kcomcd.getValue().trim(),
        MBLNO: ed_blno.getValue().trim(),
        MHNO: lc_mhno.getValue() == null ? lc_mhno.getValue() : lc_mhno.getValue().trim(),
        PTN_YN: ptn_yn,
        PARTNER_NM: txt_pnnm.getValue()
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        zoom: 90 // 배율 설정
        //mode : "print"
      },
      formParam: {}
    };
    console.log(data);
    scwin.openPopup(data);
  }
};

//-------------------------------------------------------------------------
// ozReport Popup 화면
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  //$c.gus.cfInitObjects(tb_searchCondition, [lc_mnfgb,cnd_lc_iogb,ed_blno,lc_pncd,txt_pnnm]);        //이거 안됨....

  $c.gus.cfEnableObjects($p, [lc_mnfgb, lc_pncd, txt_pnnm]); //활성화
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ds_mhno.removeAll(); //consol No SelectBox Bind Map
  ds_PartnerList.removeAll(); //Partner SelectBox Bind Map

  ed_blno.focus(); //Master B/L No
};

//-------------------------------------------------------------------------
// 삭제버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// Manifest Type의 Export / Import Combo onviewchange event
//-------------------------------------------------------------------------
scwin.cnd_lc_iogb_onviewchange = function (info) {
  if (cnd_lc_iogb.getSelectedIndex() == 0) {
    //outbound
    $c.gus.cfEnableObjects($p, [lc_mnfgb, lc_pncd, txt_pnnm]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_mnfgb, lc_pncd, txt_pnnm]);
  }
};

//-------------------------------------------------------------------------
// MHNO 가져 오기 change event
//-------------------------------------------------------------------------
scwin.ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading();
  //CKCD STYYCYG 2026.02.05 요기가 언싱크로 돌아서 문제가 됨.....임시로 setTimeout 사용...
  $p.setTimeout(function () {
    if (cnd_lc_iogb.getSelectedIndex() == 0) {
      if (ds_mhno.getTotalRow() == 0) {
        scwin.f_B_MhnoLoading();
      }
    }
  }, {
    "delay": 200
  });
  // if (cnd_lc_iogb.getSelectedIndex() == 0 ) {
  //     if (ds_mhno.getTotalRow() == 0) {
  //         scwin.f_B_MhnoLoading();
  //     }
  // }
};

//-------------------------------------------------------------------------
// Partner 가져 오기 change event
//-------------------------------------------------------------------------
scwin.lc_mhno_onblur = function (e) {
  if (cnd_lc_iogb.getSelectedIndex() == 0) {
    //outbound
    scwin.f_PartnerLoading();
  }
};

//-------------------------------------------------------------------------
// Partner 가져 오기 change event
//-------------------------------------------------------------------------
scwin.lc_pncd_onblur = function (e) {
  var curData = ds_PartnerList.getDataRow(lc_pncd.getSelectedIndex());
  txt_pnnm.setValue(curData.name);
};

//-------------------------------------------------------------------------
// 오즈화면 호출
//-------------------------------------------------------------------------
scwin.btn_Print_onclick = function (e) {
  scwin.f_Print();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:';visibility:visible;'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Manifest Type ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:200px;',id:'lc_mnfgb',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Partner Manifest'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Carrier Manifest'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'cnd_lc_iogb',class:'',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.cnd_lc_iogb_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blno',style:'width:200px;','ev:onblur':'scwin.ed_blno_onblur',maxlength:'20',placeholder:'___-_________________',dataType:'text',editFormat:'XXX-XXXXXXXXXXXXXXXXX'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mhno',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onblur':'scwin.lc_mhno_onblur',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'lc_pncd',class:'',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.lc_pncd_onviewchange','ev:onblur':'scwin.lc_pncd_onblur'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_PartnerList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_pnnm',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',disabled:'',escape:'false',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]}]},{T:1,N:'xf:input',A:{id:'hd_kcomcd',style:'width:144px; height:21px; ;visibility:visible;',readOnly:'true',preventCopyPaste:'true'}}]}]}]}]})