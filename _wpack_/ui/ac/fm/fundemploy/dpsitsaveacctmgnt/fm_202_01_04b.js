/*amd /ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_04b.xml 8634 174f340ee6cce9641f99353bb783d7bd7fff6a092a824c19cb21f8a48db07a57 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strBasSdId = "/ac/fm/paymgnt/notepay/fm_304_01_03p.jsp";
scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  ed_stdDt.setValue(scwin.sCurrDate);
};

//-------------------------------------------------------------------------
// 예적금번호 찾기
//-------------------------------------------------------------------------
scwin.btn_dpsitSaveAcctNo_onclick = function (e) {
  scwin.f_openPopUp('2', ed_dpsitSaveAcctNo, null, 'F');
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = "";
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      //차입번호 PopUp 호출  
      case '2':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입번호
        udc_comCodeGrid.setSelectId('retrieveDepositSavingAccountInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_dpsitSaveAcctNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 예적금번호 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_dpsitSaveAcctNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_dpsitSaveAcctNo.setValue(rtnList[0]); // 코드
      ed_borrLedgNo.hidVal = rtnList[0]; // 코드
    } else {
      ed_dpsitSaveAcctNo.setValue("");
      ed_dpsitSaveAcctNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_dpsitSaveAcctNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_stdDt, ed_dpsitSaveAcctNo]);
    if (!ret) {
      return false;
    }
    if (ed_dpsitSaveAcctNo.getValue().length < 5) {
      $c.win.alert($p, "예적금번호은(는) 5자리수만큼 입력하십시오.");
      return false;
    }
    let data = {
      odiName: "fm_202_01_01",
      reportName: "/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_01.ozr",
      odiParam: {
        P_DPSIT_SAVE_ACCT_NO: ed_dpsitSaveAcctNo.getValue(),
        STD_DATE: ed_stdDt.getValue()
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        mode: "silent"
      },
      formParam: {}
    };
    wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_stdDt',title:'기준일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예적금번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_dpsitSaveAcctNo',style:'width: 150px;',minlength:'5',maxlength:'5',allowChar:'0-9',mandatory:'true',title:'예적금번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_dpsitSaveAcctNo',style:'',type:'button','ev:onclick':'scwin.btn_dpsitSaveAcctNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예적금번호'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})