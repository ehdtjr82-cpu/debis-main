/*amd /ui/il/airout/aobl/ar_103_01_05b.xml 23682 94563cabfe80a33f195092bcbd8d1b688a64ee4647a016728ce3fb2239e78759 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_printCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaAirCls',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'issueYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_printResult',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueYn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_mhno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_codeList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBlPrintAdmission',action:'/il.airout.aobl.RetrieveAirBlPrintAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_printCondition", "key":"IN_DS1"}, {"id":"ds_printResult", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_printResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveBlPrintAdmission_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_mhno',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.mhno_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------    
scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd");
scwin.p_blno = $c.data.getParameter($p, "blno");
scwin.p_mhno = $c.data.getParameter($p, "mhno");
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.userClsCd = "";
// scwin.airexgbim = $c.data.getMemInfo(""); // 미사용

scwin.onpageload = function () {
  hd_kcomcd.setValue("DBEX");
  lc_blgb.setSelectedIndex(0);
  lc_regb.setSelectedIndex(0);
  scwin.f_getParametrSetting();
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  let memJson = $c.data.getMemInfo($p);
  const resData = $c.gus.dsCommonUtil($p, 'getCompanyInfoDTO', memJson.lobranCd || " ")[0].value.split('\n');
  const commDTO = resData.reduce((acc, curr) => {
    const match = curr.match(/^\s*\w+\s+(\w+)\s+=\s+\[(.*)\]/);
    if (match) {
      const key = match[1];
      let value = match[2];
      if (value == 'null') value = null;
      acc[key] = value;
    }
    ;
    return acc;
  }, {});
  scwin.p_clntNo = commDTO.clntNo;
  scwin.p_clntNm = commDTO.name1;
  scwin.userClsCd = memJson.userClsCd;
  ed_custcd.setValue(scwin.p_clntNo || "NULL");
  txt_custnm.setValue(scwin.p_clntNm || "null");
};

//---------------------------------------------------------
// 사용자 이벤트
//---------------------------------------------------------    
scwin.f_getParametrSetting = function () {
  if (scwin.p_blno == "") return false;
  hd_kcomcd.setValue(scwin.p_kcomcd);
  ed_mblno.setValue(scwin.p_blno);
  scwin.f_MhnoLoading();
};
scwin.f_MhnoLoading = function () {
  var strClntNo = "";
  strClntNo = ed_mblno.getValue().trim();
  if (strClntNo.length > 0) {
    ds_mhno.set("sysCd", "ilCommonEBC");
    ds_mhno.set("queryId", "retriveAirMasterMhnoListCombo");
    ds_mhno.set("param1", strClntNo);
    ds_mhno.set("param2", hd_iogb.getValue());
    $c.sbm.execute($p, sbm_mhno);
  } else {
    lc_mhno.removeAll();
  }
};
scwin.f_FieldClear = function () {
  // cfInitObjects([tb_searchCondition]);
  ed_mblno.setValue("");
  lc_mhno.removeAll();
  lc_blgb.setSelectedIndex(0);
  lc_regb.setSelectedIndex(0);
  chb_as.setValue("N");
  chb_agreed.setValue("N");
  ed_custcd.setValue(scwin.p_clntNo || "NULL");
  txt_custnm.setValue(scwin.p_clntNm || "null");
  ed_mblno.focus();
};
scwin.f_print = async function () {
  if (scwin.userClsCd != "01") {
    ds_printCondition.set("kcomcd", hd_kcomcd.getValue());
    ds_printCondition.set("blno", ed_mblno.getValue());
    ds_printCondition.set("mhno", lc_mhno.getValue());
    ds_printCondition.set("seaAirCls", "A");
    ds_printCondition.set("mblHblCls", "M");
    $c.sbm.execute($p, sbm_RetrieveBlPrintAdmission);
    if (ds_printResult.getTotalRow() == 0 || ds_printResult.getCellData(0, "issueYn") == 0) {
      await $c.win.alert($p, "해당 B/L은 발행 승인이 되지 않은 B/L입니다. \n" + "Export Master B/L 화면에서 발행 승인 후 Print가 가능합니다.");
      return;
    } else {
      var as = chb_as.getValue();
      var as_agreed = chb_agreed.getValue();
      var blType = "1";
      // if (chb_agreed.checked == true) {
      //     as_agreed = "Y";
      // } else {
      //     as_agreed = "N";
      // }
      // if (chb_as.checked == true) {
      //     as = "Y";
      // } else {
      //     as = "N";
      // }

      if (lc_regb.getSelectedIndex() == 0) {
        blType = "1";
      } else if (lc_regb.getSelectedIndex() == 1) {
        blType = "2";
      } else if (lc_regb.getSelectedIndex() == 2) {
        blType = "3";
      } else {
        blType = "4";
      }
      if (lc_blgb.getSelectedIndex() == 0) {
        //Neutral b/l
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        var data = {
          odiName: "ar_103_01_05",
          reportName: "/il/airout/ar_103_01_06.ozr",
          odiParam: {
            KCOMCD: hd_kcomcd.getValue(),
            BLNO: ed_mblno.getValue(),
            MHNO: lc_mhno.getValue(),
            COMP_NM: txt_custnm.getValue(),
            AS_AGREED: as_agreed,
            AS: as,
            OTH_PRT_YN: blType
          },
          viewerParam: {
            useprogressbar: true,
            // 프로그레스바 쓸지 말지
            zoom: 100,
            // 배율 설정
            mode: "preview"
          },
          formParam: {}
        };
        scwin.openOzPopup(data);
      } else {
        //Check b/l
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        var data = {
          odiName: "ar_103_01_05",
          reportName: "/il/airout/ar_103_01_05.ozr",
          odiParam: {
            KCOMCD: hd_kcomcd.getValue(),
            BLNO: ed_mblno.getValue(),
            MHNO: lc_mhno.getValue(),
            COMP_NM: txt_custnm.getValue(),
            AS_AGREED: as_agreed,
            AS: as,
            OTH_PRT_YN: blType
          },
          viewerParam: {
            useprogressbar: true,
            // 프로그레스바 쓸지 말지
            zoom: 100,
            // 배율 설정
            mode: "preview"
          },
          formParam: {}
        };
        scwin.openOzPopup(data);
      }
    }
  } else if (scwin.userClsCd == "01") {
    var as = chb_as.getValue();
    var as_agreed = chb_agreed.getValue();
    var blType = "1";
    if (lc_regb.getSelectedIndex() == 0) {
      blType = "1";
    } else if (lc_regb.getSelectedIndex() == 1) {
      blType = "2";
    } else if (lc_regb.getSelectedIndex() == 2) {
      blType = "3";
    } else {
      blType = "4";
    }
    if (lc_blgb.getSelectedIndex() == 0) {
      //Neutral b/l
      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      var data = {
        odiName: "ar_103_01_05",
        reportName: "/il/airout/ar_103_01_06.ozr",
        odiParam: {
          KCOMCD: hd_kcomcd.getValue(),
          BLNO: ed_mblno.getValue(),
          MHNO: lc_mhno.getValue(),
          COMP_NM: txt_custnm.getValue(),
          AS_AGREED: as_agreed,
          AS: as,
          OTH_PRT_YN: blType
        },
        viewerParam: {
          useprogressbar: false
        }
      };
      scwin.openOzPopup(data);
    } else {
      //Check b/l
      var data = {
        odiName: "ar_103_01_05",
        reportName: "/il/airout/ar_103_01_05.ozr",
        odiParam: {
          KCOMCD: hd_kcomcd.getValue(),
          BLNO: ed_mblno.getValue(),
          MHNO: lc_mhno.getValue(),
          COMP_NM: txt_custnm.getValue(),
          AS_AGREED: as_agreed,
          AS: as,
          OTH_PRT_YN: blType
        },
        viewerParam: {
          useprogressbar: false,
          mode: "preview"
          // viewerParam.add("print.mode", "print");
          // viewerParam.add("export.filename", ed_mblno.getValue());
          // viewerParam.add("export.format", "pdf");
          // viewerParam.add("export.path", "C:\\OZExport");
        }
      };
      scwin.openOzPopup(data);
    }
  }
};
scwin.f_print2 = async function () {
  if (scwin.userClsCd != "01") {
    ds_printCondition.set("kcomcd", hd_kcomcd.getValue());
    ds_printCondition.set("blno", ed_mblno.getValue());
    ds_printCondition.set("mhno", lc_mhno.getValue());
    ds_printCondition.set("seaAirCls", "A");
    ds_printCondition.set("mblHblCls", "M");
    $c.sbm.execute($p, sbm_RetrieveBlPrintAdmission);
    if (ds_printResult.getTotalRow() == 0 || ds_printResult.getCellData(0, "issueYn") == 0) {
      await $c.win.alert($p, "해당 B/L은 발행 승인이 되지 않은 B/L입니다. \n" + "Export Master B/L 화면에서 발행 승인 후 Print가 가능합니다.");
      return;
    } else {
      var as = chb_as.getValue();
      var as_agreed = chb_agreed.getValue();
      var blType = "1";
      // if (chb_agreed.checked == true) {
      //     as_agreed = "Y";
      // } else {
      //     as_agreed = "N";
      // }

      // if (chb_as.checked == true) {
      //     as = "Y";
      // } else {
      //     as = "N";
      // }

      if (lc_regb.getSelectedIndex() == 0) {
        blType = "1";
      } else if (lc_regb.getSelectedIndex() == 1) {
        blType = "2";
      } else if (lc_regb.getSelectedIndex() == 2) {
        blType = "3";
      } else {
        blType = "4";
      }
      if (lc_blgb.getSelectedIndex() == 0) {
        //Neutral b/l
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        var data = {
          odiName: "ar_103_01_05",
          reportName: "/il/airout/ar_103_01_06.ozr",
          odiParam: {
            KCOMCD: hd_kcomcd.getValue(),
            BLNO: ed_mblno.getValue(),
            MHNO: lc_mhno.getValue(),
            COMP_NM: txt_custnm.getValue(),
            AS_AGREED: as_agreed,
            AS: as,
            OTH_PRT_YN: blType
          },
          viewerParam: {
            useprogressbar: false
          }
        };
        scwin.openOzPopup(data);
      } else {
        //Check b/l

        var data = {
          odiName: "ar_103_01_05",
          reportName: "/il/airout/ar_103_01_05_01.ozr",
          odiParam: {
            KCOMCD: hd_kcomcd.getValue(),
            BLNO: ed_mblno.getValue(),
            MHNO: lc_mhno.getValue(),
            COMP_NM: txt_custnm.getValue(),
            AS_AGREED: as_agreed,
            AS: as,
            OTH_PRT_YN: blType
          },
          viewerParam: {
            useprogressbar: false,
            mode: "preview"
            // viewerParam.add("print.mode", "print");
            // viewerParam.add("export.filename", ed_mblno.getValue());
            // viewerParam.add("export.format", "pdf");
            // viewerParam.add("export.path", "C:\\OZExport");
          }
        };
        scwin.openOzPopup(data);
      }
    }
  } else if (scwin.userClsCd == "01") {
    var as = chb_as.getValue();
    var as_agreed = chb_agreed.getValue();
    var blType = "1";
    // if (chb_agreed.checked == true) {
    //     as_agreed = "Y";
    // } else {
    //     as_agreed = "N";
    // }

    // if (chb_as.checked == true) {
    //     as = "Y";
    // } else {
    //     as = "N";
    // }

    if (lc_regb.getSelectedIndex() == 0) {
      blType = "1";
    } else if (lc_regb.getSelectedIndex() == 1) {
      blType = "2";
    } else if (lc_regb.getSelectedIndex() == 2) {
      blType = "3";
    } else {
      blType = "4";
    }
    if (lc_blgb.getSelectedIndex() == 0) {
      //Neutral b/l

      var data = {
        odiName: "ar_103_01_05",
        reportName: "/il/airout/ar_103_01_06.ozr",
        odiParam: {
          KCOMCD: hd_kcomcd.getValue(),
          BLNO: ed_mblno.getValue(),
          MHNO: lc_mhno.getValue(),
          COMP_NM: txt_custnm.getValue(),
          AS_AGREED: as_agreed,
          AS: as,
          OTH_PRT_YN: blType
        },
        viewerParam: {
          useprogressbar: false,
          mode: "preview"
          // viewerParam.add("print.mode", "print");
          // viewerParam.add("export.filename", ed_mblno.getValue());
          // viewerParam.add("export.format", "pdf");
          // viewerParam.add("export.path", "C:\\OZExport");
        }
      };
      scwin.openOzPopup(data);
    } else {
      //Check b/l
      var data = {
        odiName: "ar_103_01_05",
        reportName: "/il/airout/ar_103_01_05_01.ozr",
        odiParam: {
          KCOMCD: hd_kcomcd.getValue(),
          BLNO: ed_mblno.getValue(),
          MHNO: lc_mhno.getValue(),
          COMP_NM: txt_custnm.getValue(),
          AS_AGREED: as_agreed,
          AS: as,
          OTH_PRT_YN: blType
        },
        viewerParam: {
          useprogressbar: false,
          mode: "preview"
          // viewerParam.add("print.mode", "print");
          // viewerParam.add("export.filename", ed_mblno.getValue());
          // viewerParam.add("export.format", "pdf");
          // viewerParam.add("export.path", "C:\\OZExport");
        }
      };
      scwin.openOzPopup(data);
    }
  }
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Consolidator":
      udc_cust.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID	
      udc_cust.ilCommonPopUp(scwin.udc_cust_callBackFunc,
      // 콜백 함수                     
      ed_custcd.getValue().trim(), txt_custnm.getValue(), pWinCloseTF, '2', 'Consolidator', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
  }
};
scwin.udc_cust_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custcd, txt_custnm);
};
scwin.openOzPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 800,
    height: 900,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------    
scwin.udc_cust_onclickEvent = function (e) {
  scwin.f_PopUp('Consolidator', 'F', 'F', 'F');
};
scwin.udc_cust_onblurCodeEvent = function (e) {
  var strClntNo = ed_custcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_custnm.setValue("");
    scwin.f_PopUp("Consolidator", "T", "F", "F");
  } else {
    txt_custnm.setValue("");
  }
};
scwin.ed_mblno_onblur = function (e) {
  scwin.f_MhnoLoading();
};
scwin.mhno_submitdone = function (e) {
  ds_codeList.setJSON(e.responseJSON.GAUCE);
};
scwin.ed_mblno_onkeyup = function (e) {
  let replaceValue = e.target.value.replace("-", "");
  this.setValue(replaceValue.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger12',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger11',style:'',type:'button','ev:onclick':'scwin.f_print'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger10',style:'',type:'button','ev:onclick':'scwin.f_print2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print(New)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_blgb',style:'',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Neutral'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Check B/L'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Print Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regb',style:'',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Other charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air Freight charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',style:'',maxlength:'21',displayFormat:'###-#################','ev:onblur':'scwin.ed_mblno_onblur',editFormat:'XXX-XXXXXXXXXXXXXXXXX','ev:onkeyup':'scwin.ed_mblno_onkeyup'}},{T:1,N:'xf:input',A:{id:'hd_iogb',style:'display:none;width: 144px;height: 21px;',initValue:'O'}},{T:1,N:'xf:input',A:{id:'hd_kcomcd',style:'display:none;width: 144px;height: 21px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mhno',style:'',submenuSize:'fixed',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_codeList'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_as',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'margin-left: 10px;',falseValue:'N'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS PRINT '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_agreed',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'margin-left : 10px;',falseValue:'N'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS AGREED'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th vat'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consolidator',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_custcd',nameId:'txt_custnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_cust','ev:onclickEvent':'scwin.udc_cust_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cust_onblurCodeEvent',btnId:'img_cust',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]}]}]}]}]}]}]}]}]})