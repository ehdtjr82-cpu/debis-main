/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_04_02b.xml 11688 953df5d1fac4b0f4e29f43ec23e60dcc5106baa7ef740bb007c3e717215b7444 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveSusRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.sUserId = $c.data.getMemInfo($p, "userId");
scwin.checkUser = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM076",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_wrkDt.setValue(scwin.strToDate);
  ed_amt.setValue("0");
  $c.gus.cfDisableKey($p);
  ds_saveSusRecv.insertRow(0);
  ds_saveSusRecv.setCellData(0, "wrkClsCd", "02"); // 라디오버튼의 선수금전환 기본값 선택 세팅.
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //작업구분 정보정의
  let i = 0;
  for (i = 0; i < dlt_commonCodeFM076.getRowCount(); i++) {
    if (dlt_commonCodeFM076.getCellData(i, "cdDesc") == scwin.sUserId) {
      scwin.checkUser = true;
    }
  }
  if (scwin.checkUser == true) {
    rd_wrkClsCd.addItem("02", "선수금전환", 0);
    rd_wrkClsCd.addItem("03", "잡이익처리", 1);
  } else {
    rd_wrkClsCd.addItem("03", "잡이익처리", 1);
  }
};

//-------------------------------------------------------------------------
// 거래처
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      if (orgObjCd.getValue().trim() == "") {
        orgObjNm.setValue("");
        orgObjCd.setValue("");
        orgObjCd.hidVal = "";
      }
      return false;
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code) {
  try {
    let param = "";
    let code = "";
    switch (select_code) {
      // 거래처 PopUp호출
      case '1':
        if (ed_clntNo.getReadOnly() == true) rertun;
        ed_clntNm.setValue("");
        code = ed_clntNo.getValue();
        param = ",,," + $p.parent().ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveClntList',code,'',"T",null,null,null,null,param,null,null,null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , '' // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      ed_clntNo.setValue(rtnList[0]); // 거래처코드
      ed_clntNm.setValue(rtnList[1]); // 거래처명
      ed_clntNo.hidVal = rtnList[0];
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 저장시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function (ret) {
  try {
    if (rd_wrkClsCd.getValue() == "02") {
      // 선수금처리시 필수입력 여부 Check
      let ret = await $c.gus.cfValidate($p, [rd_wrkClsCd, ed_wrkDt, ed_clntNo]);
      if (!ret) {
        return false;
      }
      if (rd_wrkClsCd.getValue() == "") {
        $c.gus.cfAlertMsg($p, "작업구분은(는) 필수 입력 항목 입니다.");
        return false;
      }
    } else {
      // 환불,잡이익 처리시 필수입력 여부 Check
      let ret = await $c.gus.cfValidate($p, [rd_wrkClsCd, ed_wrkDt]);
      if (!ret) {
        return false;
      }
      if (rd_wrkClsCd.getValue() == "") {
        $c.gus.cfAlertMsg($p, "작업구분은(는) 필수 입력 항목 입니다.");
        return false;
      }
    }
    $p.parent().scwin.f_Save();
  } catch (e) {
    console.log("f_Save :" + e);
  }
};
scwin.rd_wrkClsCd_onviewchange = function (index, value) {
  try {
    // 잡이익 및 환불처리시는 거래처번호가 필수 사항이 아님.
    if (rd_wrkClsCd.getValue() != "02") {
      $c.gus.cfEnableObj($p, ed_clntNo, false);
      $c.gus.cfEnableObj($p, btn_clntNo, false);
      ed_clntNo.setMandatory(false);
    } else {
      $c.gus.cfEnableObj($p, ed_clntNo, true);
      $c.gus.cfEnableObj($p, btn_clntNo, true);
      ed_clntNo.setMandatory(true);
    }
  } catch (e) {
    console.log("rd_wrkClsCd_onradioclick :" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_wrkClsCd_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'작업일자',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'key',editTypeName:'select',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처',btnId:'btn_clntNo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 200px;',maxlength:'13',allowChar:'0-9',dataType:'number',objType:'key',mandatory:'true',displayFormat:'#,##0'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]}]}]}]}]}]}]})