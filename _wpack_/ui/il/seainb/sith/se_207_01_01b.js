/*amd /ui/il/seainb/sith/se_207_01_01b.xml 5847 6c372d4c7b96388e665039a6c1a3754bcc3e64b593ce9e898f84599a707ed949 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -2);
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드

scwin.hd_kcomcd = "DBEX"; // 대표거래처 코드

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  rd_cnd_rd_prtOpt1.setValue("");
  ed_cnd_ed_hhetaFrom.setValue(scwin.strPreDate);
  ed_cnd_ed_hhetaTo.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// print
//-------------------------------------------------------------------------		
scwin.f_Print = async function (e) {
  if (ed_cnd_ed_hhetaFrom.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "DO Date From")); //@는 필수입력항목입니다.				
    ed_cnd_ed_hhetaFrom.focus();
    return false;
  }
  if (ed_cnd_ed_hhetaTo.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "DO Date To")); //@는 필수입력항목입니다.			
    ed_cnd_ed_hhetaTo.focus();
    return false;
  }
  let data = {
    odiName: 'se_207_01_01',
    reportName: '/il/seainb/se_207_01_01.ozr',
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      PRT_TYPE: rd_cnd_rd_prtOpt1.getValue(),
      FROM_DATE: ed_cnd_ed_hhetaFrom.getValue(),
      TO_DATE: ed_cnd_ed_hhetaTo.getValue(),
      USERID: scwin.userId
    },
    viewerParam: {
      // OZ 뷰어에 대한 설정
      useprogressbar: false,
      zoom: 100,
      mode: 'print'
    },
    formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    }
  };
  scwin.openOzPopup(data);
};

/**
 * @method
 * @name openOzPopup
 * @description 오즈리포트 화면을 띄운다
 * @param {string} data desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.openOzPopup = async function (data) {
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Print Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cnd_rd_prtOpt1',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Issued'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Non Issued'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Period'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DO Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_cnd_ed_hhetaFrom',edToId:'ed_cnd_ed_hhetaTo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.f_Print',userAuth:'P',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]}]}]}]}]}]}]})