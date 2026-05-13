/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_04r.xml 8127 4a4192ae4661eb02ed9c6f16ea4cd9c3f13f01eb15691df8fe8dfb6a67421662 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화면 로딩
 */
scwin.onpageload = async function () {
  scwin.strCurrDate = $c.date.getServerDateTime($p); // 서버를 기준으로 현재 날짜 반환

  // 세션정보
  scwin.gv_loabranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  var jsonParams = $c.data.getParameter($p);
  scwin.gv_odrNo = jsonParams.odrNo; //파라메터로 받은 원본오더

  scwin.listOdrNo = scwin.gv_odrNo.split(","); //배열로 변환한 오더
  scwin.txtValue = scwin.gv_odrNo.replace(/,/g, "\n"); //textarea에 표시하기 위한 오더
  scwin.evalRegVal = '/' + scwin.listOdrNo[0] + '/g';
  ed_orderNo.setValue(scwin.listOdrNo[0]);
  const codeOptions = [{
    grpCd: "OP481",
    compID: "acb_lc_sortCd"
  } // 발행순서
  ];
  await $c.data.setCommonCode($p, codeOptions, function () {
    //작업구분
    acb_lc_sortCd.setValue("5");
  });
  if (scwin.listOdrNo.length == 1) {
    tr_addOdr.setStyle("display", "none"); //hide();
  } else {
    tr_addOdr.setStyle("display", "table-row"); //show();
    txt_ta_odrList.setValue(scwin.txtValue.replace(scwin.listOdrNo[0] + "\n", ""));
  }
  cb_printCheck.checkAll(true);
  cb_previewCheck.checkAll(true);
};

/**
 * 보고서발행
 */
scwin.btn_print_onclick = async function (e) {
  //validation check
  let ret = await $c.gus.cfValidate($p, [tb_srchCond]);
  if (!ret) {
    return;
  }
  let lenListOdrNo = scwin.listOdrNo.length;
  if (lenListOdrNo == 1) {
    //개별print(viewer 띄운다)

    let data = {
      odiName: "op_202_02_04r",
      reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_04r.ozr",
      odiParam: {
        odrNo: ed_orderNo.getValue(),
        sortCd: acb_lc_sortCd.getValue()
      },
      viewerParam: {
        useprogressbar: true // 프로그레스바 쓸지 말지
        ,

        zoom: 100 // 배율 설정
      },
      formParam: {}
    };
    let opts = {
      type: 'viewer',
      printMode: 'view',
      exportFilename: '',
      exportMode: 'view'
    };
    if (cb_printCheck.getValue() == "1" && cb_previewCheck.getValue() == "1") {
      // 인쇄옵션, 미리보기 둘다 체크된 경우
      data.viewerParam.mode = "preview";
      $c.ext.openOzReport($p, data, opts);
    } else if (cb_printCheck.getValue() == "1") {
      // 인쇄옵션만 체크된 경우
      $c.ext.printOzReport($p, data, opts);
    } else if (cb_previewCheck.getValue() == "1") {
      // 미리보기만 체크된 경우
      opts.printMode = 'silent';
      $c.ext.openOzReport($p, data, opts);
    } else {
      opts.type = "";
      opts.printMode = "";
      opts.exportFormat = "";
      opts.exportMode = "";
      $c.ext.printOzReport($p, data, opts);
    }
  } else {
    //일괄print (viewer안띄운다)

    //OZStartBatch(); 
    var printCnt = 0;
    var firstOdrNo = "";
    var chkOdrNo = "";
    var v_odrNo = "";
    for (var i = 0; i < lenListOdrNo; i++) {
      v_odrNo = scwin.listOdrNo[i];
      if (printCnt == 0) firstOdrNo = v_odrNo;
      if (chkOdrNo == v_odrNo) continue;
      if (chkOdrNo !== v_odrNo) chkOdrNo = v_odrNo;

      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      const data = {
        odiName: "op_202_02_04r",
        reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_04r.ozr",
        odiParam: {
          odrNo: v_odrNo,
          sortCd: acb_lc_sortCd.getValue()
        },
        viewerParam: {
          useprogressbar: false
        },
        formParam: {}
      };
      $c.ext.printOzReport($p, data, {});
      printCnt++;
    }

    //OZExecuteBatch();
    if (printCnt == 1) $c.win.alert($p, firstOdrNo + "의 오더Sheet를 프린터로 전송했습니다.");
    if (printCnt > 1) $c.win.alert($p, firstOdrNo + "외에 " + (printCnt - 1) + "건의 오더Sheet를 프린터로 전송했습니다.");
  }
};

/**
 * Windows Close
 */
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'셔틀운송작업물량차량조회 팝업2',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ORDER NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_orderNo',placeholder:'',style:'text-transform: uppercase;',mandatory:'true',title:'ORDER NO',allowChar:'a-zA-Z0-9',maxlength:'13',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행순서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' w250',editType:'select',id:'acb_lc_sortCd',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'tr_addOdr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그외 오더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{id:'txt_ta_odrList',style:'width:300px; height:100px; '}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'col-gap-14',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'',escape:'false',id:'btn_print',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})