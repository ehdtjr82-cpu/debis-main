/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_06_07b.xml 10064 50db4e3da66149e26586c05250234f46d0191fbf9cec51e417381b5ea5f9ff19 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_electronic'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dcsnDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지급구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cont',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cont',name:'파일내역',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_electronic","key":"IN_DS1"},{"id":"ds_cont","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cont","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = "'" + $c.data.getMemInfo($p, "coCd") + "'";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : "'" + scwin.loginCoCd + "'"; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : "'" + scwin.loginCoClsCd + "'";
; //회계_회사구분('CO035' : 0:동부 EXPRESS)	
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ed_dcsnDt.focus();
  }, {
    "delay": 50
  });
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// function name : f_Setting(
// function desc : 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  ds_electronic.set("dcsnDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_electronic.set("wrkDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    /*
    if (!scwin.f_Validation())
    return;   
    async 처리문제로 로직위치변경
    */
    let ret = await $c.gus.cfValidate($p, [ed_dcsnDt, ed_wrkDt]);
    if (!ret) {
      return false;
    }
    if (rd_payMthdCd.getValue() != "20") {
      if (!$c.gus.cfIsAfterDate($p, $c.date.addDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), 1), ed_dcsnDt.getValue().trim())) {
        let MSG_CM_ERR_061 = "%1은(는) %2이어야 합니다.";
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "지급일자", "현재일자이후 "));
        ed_dcsnDt.focus();
        return false;
      }
      if (!$c.gus.cfIsAfterDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), ed_wrkDt.getValue().trim())) {
        let MSG_CM_ERR_061 = "%1은(는) %2이어야 합니다.";
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "전송일자", "현재일자보다 이후 "));
        ed_wrkDt.focus();
        return false;
      }
    }
    if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, scwin.f_payMthdCd()))) {
      ds_cont.removeAll();
      sbm_save.action = "/ac.fm.paymgnt.paymgnt.CreateShbFileCMD.do";
      $c.sbm.execute($p, sbm_save);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_cont.getRowCount() > 0) {
      //ASIS와 동일하개ㅔ 마지막 라인 한줄 추가처리
      ds_cont.insertRow();
      let rowIndex = ds_cont.getRowCount() - 1;
      ds_cont.setCellData(rowIndex, "cont", "\n\r");
      scwin.f_createFile();
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_INF_012, scwin.f_payMthdCd()));
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    }
  } catch (e) {
    console.log("sbm_save_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 파일생성
//-------------------------------------------------------------------------
scwin.f_createFile = function () {
  /*
  TODO Excel 저장 확인 - 하단 텍스트 파일로 저장으로 변경
  let title = "SH200";
  const options = {
      fileName : title +".xlsx" ,//[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel(gr_file, options, infoArr);
  */
  // 파일제목생성
  let title = "SH200";
  const options = {
    fileName: title + ".txt",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    header: "0",
    quoteInside: true
  };
  const infoArr = [];
  $c.data.downloadGridViewCSV($p, gr_file, options, infoArr);
};

//-------------------------------------------------------------------------
// 지급구분
//-------------------------------------------------------------------------
scwin.f_payMthdCd = function () {
  let retTitle = "";
  if (rd_payMthdCd.getValue() == "20") {
    retTitle = "경비이체";
  } else if (rd_payMthdCd.getValue() == "30") {
    retTitle = "전자결제 현금";
  } else if (rd_payMthdCd.getValue() == "40") {
    retTitle = "전자결제 어음";
  }
  return retTitle;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_dcsnDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'지급일자',ref:'data:ds_electronic.dcsnDt',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_payMthdCd',ref:'data:ds_electronic.payMthdCd',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전송일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'전송일자',ref:'data:ds_electronic.wrkDt',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',columnMove:'true',dataList:'data:ds_cont',id:'gr_file',readOnly:'true',style:';display:none;'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cont',inputType:'text',style:'',value:'',width:'500'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cont',inputType:'text',text:'',textAlign:'left',value:'',width:'500'}}]}]}]}]}]}]}]}]})