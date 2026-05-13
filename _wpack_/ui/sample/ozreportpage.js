/*amd /ui/sample/ozreportpage.xml 32212 0e7466f91bf5028439e0e768cbef4779f025196625b7c42b514c95f5da24278f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="https://newdevdebis.dongwon.com/oz90/ozhviewer/ui.dynatree.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_retrieve_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'check',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdDt1',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQryStDt',name:'출고기간From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQryEndDt',name:'출고기간To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlCd',name:'부두장치장작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.trigger1_onclick = function (e) {
  let data = {
    odiName: "op_303_05_02r",
    reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
    odiParam: {
      cvsslMgntNo: "C0604033",
      // ds_retrieve.getCellData(row, "cvsslMgntNo"
      blNo: "TGKR2009",
      // ds_retrieve.getCellData(row, "rltNo")
      stockMgntNo: "060426009" //ds_retrieve.getCellData(row, "stockMgntNo")
    },
    viewerParam: {
      "useprogressbar": true,
      // 프로그레스바 쓸지 말지
      "zoom": 90,
      // 배율 설정
      "mode": "print",
      "export.format": "pdf",
      "export.path": "",
      "export.mode": "view"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

/** 
 * eq_420_01_06b 기존함수* 
 *      
 * scwin.f_partsOrderPublish = async function() {
 
    let fixWrkPlCd = "";    // 작업장코드
    let buyNo = "";         // 구매번호
    
    if (ds_eq420.getRowCount() === 0) {
        await $c.win.alert("조회된 내용이 없습니다.");
        return;
    }
    
    let totCntA = 0; // 체크안된 내역 count
    let totCntB = 0; // 체크된 내역 count
    let printCnt = 0;
    let updateCnt = 0;

    for (let j = 0; j < ds_eq420.getRowCount(); j++) {
        if (ds_eq420.getCellData(j, "chk") === "0") {
            totCntA++;
        } else {
            totCntB++;
        }
    }
    
    if (totCntA !== 0 && totCntB === 0) {
        await $c.win.alert("선택된 내용이 없습니다.");
        return;
    }
    
    OZStartBatch();	

    for (let i = 0; i < ds_eq420.getRowCount(); i++) {
        if (ds_eq420.getCellData(i, "chk") === "1") {
            printCnt++;
            fixWrkPlCd = ds_eq420.getCellData(i, "fixWrkPlCd");
            buyNo = ds_eq420.getCellData(i, "buyNo");
            
            if(ds_eq420.getRowCount() === 0){
                await $c.win.alert("선택된 내역이 없습니다.");
                return;
            }

            const odiParam = {
                fixWrkPlCd: fixWrkPlCd,
                buyNo: buyNo
            };
            const viewerParam = {
                useprogressbar: "false",
                printcommand: "true"
            };
            
            if (printCnt === 1) {
                cfOZReport("false", "chb_previewCheck", "ps/eq/fixwrkmgnt/estmgnt/eq_420_01_06p.ozr", odiParam, viewerParam, formParam);
            } else {
                cfOZReport("false", "false", "ps/eq/fixwrkmgnt/estmgnt/eq_420_01_06p.ozr", odiParam, viewerParam, formParam);
            }

            $c.sbm.execute(sbm_update);
            updateCnt++;
        }
    }
    
    
    OZExecuteBatch();

    scwin.f_Retrieve();
    };
}
**/
scwin.trigger2_onclick = function (e) {
  var data = {
    reportName: "ps/eq/fixwrkmgnt/estmgnt/eq_420_01_06p.ozr",
    odiParam: {
      fixWrkPlCd: "104",
      // ds_eq420.getCellData(i, "fixWrkPlCd");
      buyNo: "2020010106" // ds_eq420.getCellData(i, "buyNo");
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {},
    opt
  };
  scwin.openPopup(data);
};
scwin.trigger3_onclick = async function (e) {
  ds_retrieve.setCellData(0, "check", "0");
  ds_retrieve.setCellData(2, "check", "0");
  ds_retrieve.setCellData(4, "check", "0");
  ds_retrieve.setCellData(5, "check", "0");
  ds_retrieve.setCellData(7, "check", "0");
  ds_retrieve.setCellData(8, "check", "0");
  let changedRow = ds_retrieve.getModifiedJSON();
  for (const e of changedRow) {
    const data = {
      reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
      odiParam: {
        cvsslMgntNo: e.cvsslMgntNo,
        blNo: e.rltNo,
        stockMgntNo: e.stockMgntNo
      },
      viewerParam: {
        useprogressbar: true,
        zoom: 90
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};
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
scwin.onpageload = function () {
  let test = $c.gus.gauceUtil($p, "getCodeList", "FI055");
  ds_retrieve.setJSON([{
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20060424",
    "arvHh": "0800",
    "vsslCd": "LODE",
    "vsslNm": "LODESTAR PRINCESS",
    "inStdDt1": "20060425",
    "dsmbrkFrgtCd": "GT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0604033",
    "rltNo": "TGKR2009",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "060426009",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20060425",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20061231",
    "arvHh": "0800",
    "vsslCd": "ROYL",
    "vsslNm": "ROYAL FOREST",
    "inStdDt1": "20070108",
    "dsmbrkFrgtCd": "GT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0612078",
    "rltNo": "TGKR2019",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07010800001",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070108",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20070115",
    "arvHh": "0800",
    "vsslCd": "",
    "vsslNm": "",
    "inStdDt1": "20070118",
    "dsmbrkFrgtCd": "GT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0701038",
    "rltNo": "TGKR2021",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07011900004",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070118",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20070302",
    "arvHh": "1900",
    "vsslCd": "ROYL",
    "vsslNm": "ROYAL FOREST",
    "inStdDt1": "20070305",
    "dsmbrkFrgtCd": "IT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0702089",
    "rltNo": "TGKR2009",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07030500002",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070305",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20070329",
    "arvHh": "0800",
    "vsslCd": "",
    "vsslNm": "",
    "inStdDt1": "20070329",
    "dsmbrkFrgtCd": "SD",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0703075",
    "rltNo": "TGKR2009",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07033100001",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070329",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20070329",
    "arvHh": "0800",
    "vsslCd": "",
    "vsslNm": "",
    "inStdDt1": "20070329",
    "dsmbrkFrgtCd": "GT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0703075",
    "rltNo": "TGKR2013",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07033100002",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070329",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20071011",
    "arvHh": "",
    "vsslCd": "STGD",
    "vsslNm": "SITC GUANGDONG",
    "inStdDt1": "20070426",
    "dsmbrkFrgtCd": "",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0704031",
    "rltNo": "SGE004VAN74B",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07042700005",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070426",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20071011",
    "arvHh": "",
    "vsslCd": "STGD",
    "vsslNm": "SITC GUANGDONG",
    "inStdDt1": "20070426",
    "dsmbrkFrgtCd": "",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0704031",
    "rltNo": "SGE004VAN67B",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "07042700004",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20070426",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }, {
    "stockClntNo": "116011",
    "stockClntNm": "아세아제지(주)세종공장",
    "arvDt": "20080114",
    "arvHh": "1900",
    "vsslCd": "CRIM",
    "vsslNm": "CRIMSON FOREST",
    "inStdDt1": "20080115",
    "dsmbrkFrgtCd": "GT",
    "clntMgntNo": "",
    "realMchtClntNo": "",
    "realMchtClntNm": "",
    "cvsslMgntNo": "C0801035",
    "rltNo": "TGKR2003",
    "commCd": "40000164",
    "comm": "펄프-번들",
    "stockQty": "0",
    "stockWt": "0",
    "stockCbm": "0",
    "lblock": "A",
    "lbay": "01",
    "lrow": "01",
    "ltier": "1",
    "shipwgtPos": "A-01-01-1",
    "stockMgntNo": "08011800001",
    "impExpClsCd": "I",
    "wrkPlCd": "4E02",
    "outQryStDt": "20070626",
    "outQryEndDt": "20071231",
    "inStdDt": "20080115",
    "pierYardWrkPlCd": "",
    "doYn": "N",
    "rmk": "",
    "rowStatus": "R"
  }]);
};
scwin.trigger4_onclick = function (e) {
  let data = {
    reportName: "/ac/fm/stdinfomgnt/fm_100_05_05.ozr",
    odiParam: {
      // 발행 일시도 명시적으로 전달 (OZ Viewer 기본 값 방지)
      CO_CD: "000",
      // ds_retrieve.getCellData(row, "cvsslMgntNo")
      START_DATE: "20250101",
      // ds_retrieve.getCellData(row, "rltNo")
      END_DATE: "20250131",
      //ds_retrieve.getCellData(row, "stockMgntNo")
      P_ACCT_DEPT_CD: ""

      // mode : "silent"
      // isframe : false
      // configmode : "html"
      // printcommand : false
      // showTree : true,
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      mode: "print"
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
scwin.trigger6_onclick = function (e) {
  var data = {
    reportName: "/ps/eq/fixwrkmgnt/estmgnt/eq_420_01_06p.ozr",
    odiParam: {
      fixWrkPlCd: "104",
      // ds_eq420.getCellData(i, "fixWrkPlCd");
      buyNo: "2020010106" // ds_eq420.getCellData(i, "buyNo");
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      printcommand: true,
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  var opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    //width: 1500,
    //height: 500,
    title: "오즈 리포트"
  };
  console.log('trigger6_onclick', opts, data);
  $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.triggerExe_onclick = function (e) {
  console.log('triggerExe_onclick');
  var data = {
    "odiName": "op_302_01_04p",
    "reportName": "/ds/op/op_302_01_04p.ozr",
    "odiParam": {
      ioNo: '26042400236',
      coshippingNo: 'H2604230001',
      ioClsCd: '0'
    }
  };
  /*
  var data = {
      odiName : "op_303_05_02r",
      reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
      odiParam :{
          cvsslMgntNo: "C0604033", // ds_retrieve.getCellData(row, "cvsslMgntNo"
          blNo: "TGKR2009", // ds_retrieve.getCellData(row, "rltNo")
          stockMgntNo: "060426009"  //ds_retrieve.getCellData(row, "stockMgntNo")
      }
  };
  var data = {
      odiName : "se_101_01_01",
      reportName: "/il/seaout/se_101_01_03.ozr",
      odiParam :{
          KCOMCD: 'DBEX',
          BKNO: 'LBK23050002',
          USERID: 'inswave'
      }
  };
  */
  var opts = {
    //printMode:'' // silent, view
    //type:'download', // view, download, print
    //exportMode:'',  // silent, view
    //exportConfirmsave:'true' // true, false
    //exportConfirmsave:''
  };
  $c.ext.openOzReport($p, data, opts);
};
scwin.triggerPrint_onclick = function (e) {
  var data = {
    "odiName": "op_302_01_04p",
    "reportName": "/ds/op/op_302_01_04p.ozr",
    "odiParam": {
      ioNo: '26042400236',
      coshippingNo: 'H2604230001',
      ioClsCd: ''
    }
  };
  $c.ext.printOzReport($p, data);
};
scwin.triggerDownload_onclick = function (e) {
  var data = {
    "reportName": "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    "odiParam": {
      "cCd": "000",
      "colClsd": "0",
      "postYn": "-1",
      "recverCrn": "1348108925",
      "splyYr": "2025",
      "vatDeclarAcctDeptCd": "",
      "zeroTaxClsd": ""
    }
  };
  var opts = {
    //exportFilename:'DEBIS_SAMPLE_OZ_DOWNLOAD'
  };
  $c.ext.downloadOzReport($p, data, opts);
};
scwin.triggerPrintSet_onclick = function (e) {
  var data = {
    "reportName": "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    "odiParam": {
      "cCd": "000",
      "colClsd": "0",
      "postYn": "-1",
      "recverCrn": "1348108925",
      "splyYr": "2025",
      "vatDeclarAcctDeptCd": "",
      "zeroTaxClsd": ""
    }
  };
  var opts = {
    printMode: 'view' // silent, view
  };
  $c.ext.printOzReport($p, data, opts);
};
scwin.triggerOpenExtra_onclick = function (e) {
  var data = {
    "reportName": "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    "odiParam": {
      "cCd": "000",
      "colClsd": "0",
      "postYn": "-1",
      "recverCrn": "1348108925",
      "splyYr": "2025",
      "vatDeclarAcctDeptCd": "",
      "zeroTaxClsd": ""
    }
  };
  var opts = {
    type: 'viewer',
    // viewer, print, download
    printMode: 'view',
    // silent, view
    exportMode: 'view',
    // silent, view
    exportFilename: 'DEBIS_SAMPLE_OZ_DOWNLOAD',
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf'
  };
  $c.ext.openOzReport($p, data, opts);
};
scwin.triggerOpenExtra2_onclick = function (e) {
  var data = {
    "reportName": "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    "odiName": "fi_401_01_07p",
    "odiParam": {
      "cCd": "000",
      "colClsd": "0",
      "postYn": "-1",
      "recverCrn": "1348108925",
      "splyYr": "2025",
      "vatDeclarAcctDeptCd": "",
      "zeroTaxClsd": ""
    }
  };
  var opts = {
    type: 'viewer',
    // viewer, print, download
    printMode: 'silent',
    // silent, view
    printCopies: 2,
    printSize: 'A5',
    exportFilename: 'DEBIS_SAMPLE_OZ_DOWNLOAD',
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf'
  };
  $c.ext.openOzReport($p, data, opts);
};
scwin.triggerSeq_onclick = function (e) {
  var data = [{
    reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
    odiParam: {
      cvsslMgntNo: "C0604033",
      blNo: "TGKR2009",
      stockMgntNo: "060426009"
    },
    formParam: {
      test3: "123",
      test4: "qwe"
    }
  }, {
    displayName: 'title11111',
    odiName: 'se_101_01_01',
    reportName: '/il/seaout/se_101_01_03.ozr',
    odiParam: {
      KCOMCD: 'DBEX',
      BKNO: 'LBK23050002',
      USERID: 'inswave'
    },
    formParam: {
      abcd: "qqq"
    }
  }, {
    reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
    odiParam: {
      cvsslMgntNo: "C0604033",
      blNo: "TGKR2009",
      stockMgntNo: "060426009"
    }
  }];
  var opts = {
    viewerMode: ['', 'print', 'export'],
    printMode: ''
  };
  //viewerMode:'print',
  //printCopies: 2,
  //printSize:'A5',
  //viewerMode:'export',
  //exportMode:'view',
  //exportConfirmsave:'false',
  //exportFilename:'DEBIS_SAMPLE_OZ_DOWNLOAD',
  //exportPath:'C:\\OZExport',
  //exportFormat:'pdf'
  $c.ext.openBatchOzReport($p, data, opts);
};
scwin.triggerPdf_onclick = function (e) {
  var data = {
    "odiName": "fs_202_05_21_04",
    "reportName": "/ds/fs/fs_202_05_21_04_N.ozr",
    "odiParam": {
      "bilgLodeptCd": "6A1",
      "certiNo": "B250002195",
      "type": "N"
    },
    "formParam": {
      "pgmId": "fs_202_05_09b.jsp",
      "reportTime": "2026/04/14 17:39"
    },
    "viewerParam": {
      "useprogressbar": true,
      "viewer": 100
    }
  };
  var opts = {
    viewerMode: '',
    exportMode: '',
    exportPath: "C:\\OZExport",
    exportFormat: "pdf",
    exportConfirmsave: "false",
    pdfFontembedding: 'true'
  };
  $c.ext.openOzReport($p, data, opts);
};
scwin.triggerMultiReport_onclick = function (e) {
  var data = [{
    displayName: "신청인용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }, {
    displayName: "반입신고용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }, {
    displayName: "보관용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }];
  var opts = {
    exportMode: '',
    // silent, ''
    exportConfirmsave: 'false',
    printMode: '',
    // silent, ''
    printCopies: 1,
    //printSize: 'A5',
    //exportFilename: 'DEBIS_SAMPLE_OZ_DOWNLOAD',
    //exportPath: 'C:\\OZExport',
    //exportFormat: 'pdf',
    viewerFocus_doc_index: data.length - 1,
    globalConcatpage: 'false'
    //viewerShowtree:'false'
  };
  $c.ext.openMultiOzReport($p, data, opts);
};
scwin.triggerPreviewPrint_onclick = function (e) {
  var data = {
    "reportName": "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    "odiName": "fi_401_01_07p",
    "odiParam": {
      "cCd": "000",
      "colClsd": "0",
      "postYn": "-1",
      "recverCrn": "1348108925",
      "splyYr": "2025",
      "vatDeclarAcctDeptCd": "",
      "zeroTaxClsd": ""
    }
  };
  var opts = {
    exportMode: '',
    // silent, view
    exportConfirmsave: '',
    exportFilename: '',
    exportPath: '',
    exportFormat: ''
  };
  $c.ext.downloadOzReport($p, data, opts);
};
scwin.triggerMergePrint_onclick = function (e) {
  var data = [{
    displayName: "신청인용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      declarDt: "20241218",
      declarSeq: "5"
    },
    formParam: {}
  }, {
    displayName: "반입신고용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      declarDt: "20241218",
      declarSeq: "5"
    },
    formParam: {
      test: "asdf",
      test2: "zxcv"
    }
  }, {
    displayName: "보관용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      //sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      //declarDt: "20241218",
      //declarSeq: "5"
    },
    formParam: {
      test3: "123",
      test4: "qwe"
    }
  }];
  var opts = {
    exportMode: 'silent',
    // silent, view
    exportConfirmsave: 'false',
    printMode: 'silent',
    // silent, view
    printCopies: 2,
    printSize: 'A5',
    exportFilename: 'DEBIS_SAMPLE_OZ_DOWNLOAD',
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf'
  };
  $c.ext.openMultiOzReport($p, data, opts);
};

/*
Insert_OZViewer_Param("print.alldocument", "true"); // 멀티 보고서 한번에 인쇄
 Insert_OZViewer_Param("global.concatpage", "true"); // 멀티 보고서를 하나의 보고서처럼 보여줌. 페이지 이어
 */
scwin.triggerMergeExport_onclick = function (e) {
  var data = [{
    displayName: "신청인용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      declarDt: "20241218",
      declarSeq: "5"
    },
    formParam: {}
  }, {
    displayName: "반입신고용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      declarDt: "20241218",
      declarSeq: "5"
    },
    formParam: {
      test: "asdf",
      test2: "zxcv"
    }
  }, {
    displayName: "보관용",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr",
    odiName: "sd_401_05_01",
    odiParam: {
      //sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      //declarDt: "20241218",
      //declarSeq: "5"
    },
    formParam: {
      test3: "123",
      test4: "qwe"
    }
  }];
  var opts = {
    exportMode: '',
    exportConfirmsave: 'false',
    printMode: '',
    printCopies: 1,
    printSize: '',
    exportFilename: '',
    exportPath: '',
    exportFormat: 'pdf'
    //printAlldocument:'false',
    //globalConcatpage:'false'
  };
  $c.ext.openMultiOzReport($p, data, opts);
};
}}}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',id:'trigger3',style:'margin-left:40px;width:121px;height:22px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다건 예제'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap mb8',style:'display:block'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'oz 버튼(팝업) 예제 :',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'',id:'trigger1',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인수도확인서(op_302_02_08b) 예제'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'',id:'trigger2',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부품발주서(eq_420_01_06b) 예제'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'',id:'trigger3',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다건 예제'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger6_onclick',style:'',id:'trigger6',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'넓이높이없음'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerSeq_onclick',style:'',id:'triggerSeq',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SEQ'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerMultiReport_onclick',style:'',id:'triggerMultiReport',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MULTIREPORT'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerPreviewPrint_onclick',style:'',id:'triggerPreviewPrint',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HTMLPRINT'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'title-wrap mb8',style:'display:block'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerExe_onclick',style:'',id:'triggerExe',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EXE'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerPrint_onclick',style:'',id:'triggerPrint',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PRINT'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerPrintSet_onclick',style:'',id:'triggerPrintSet',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PRINTSET'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerDownload_onclick',style:'',id:'triggerDownload',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DOWNLOAD'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerPdf_onclick',style:'',id:'triggerPdf',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PDF'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerOpenExtra_onclick',style:'',id:'triggerOpenExtra',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EXTRAPARAMS'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerOpenExtra2_onclick',style:'',id:'triggerOpenExtra2',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EXTRAPARAMS2'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerMergePrint_onclick',style:'',id:'triggerMergePrint',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MERGEPRINT'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.triggerMergeExport_onclick',style:'',id:'triggerMergeExport',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MERGEEXPORT'}]}]}]}]},{T:1,N:'xf:group',A:{id:'ozFrame',class:'ozWrap',style:'margin-top:60px;'},E:[{T:1,N:'w2:iframe',A:{src:'/ui/cm/zz/ozreportComp.xml',id:'wfm_ozReport'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group mt8'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'oz 버튼(조회) 예제:',class:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'',id:'trigger4',type:'button',class:'btn pt-blue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회 버튼'}]}]}]}]}]}]}]})