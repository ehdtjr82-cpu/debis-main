/*amd /ui/bp/fbp/op/ac/ez_200_01_01p.xml 19554 b756b85d16cab9a9403dc58131e5d78641414ba8cbefb1c502269e64030113ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_emp',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mtvehclDd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSts',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posTxt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hopeStartPos',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hopeAlhtPos',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtvehclRt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsRcvYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfidNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdofficeIdx',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ypos',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xpos',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAlloccarDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regMthd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bhofficeIdx',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'officeIdx',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtvehclRegDt',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_emp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mtvehclDd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez110Idx',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_udc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'code',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ncall.bp.fbp.op.ac.cmd.SaveCarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_emp","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_emp',action:'/ncall.bp.fbp.op.ac.cmd.RetrieveCarInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_emp","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/운송차량 
scwin.memJson = $c.data.getMemInfo($p);
scwin.userID = scwin.memJson.userId;
scwin.userName = scwin.memJson.userNm;
scwin.searchAll = true;
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.mtvehclDd = "";
  if (scwin.params["mtvehclDd"] != null && scwin.params["mtvehclDd"] != "") {
    scwin.mtvehclDd = scwin.params["mtvehclDd"].replaceAll("-", "").trim(); // 공차등록일
  }
  scwin.ez110Idx = "";
  if (scwin.params["ez110Idx"] != null && scwin.params["ez110Idx"] != "") {
    scwin.ez110Idx = scwin.params["ez110Idx"].trim();
  }
  scwin.ofcNm = "";
  if (scwin.params["ofcNm"] != null && scwin.params["ofcNm"] != "") {
    scwin.ofcNm = scwin.params["ofcNm"].trim();
  }
  scwin.vehclNo = "";
  if (scwin.params["vehclNo"] != null && scwin.params["vehclNo"] != "") {
    scwin.vehclNo = scwin.params["vehclNo"].trim();
  }
  scwin.handphoneNo = "";
  if (scwin.params["handphoneNo"] != null && scwin.params["handphoneNo"] != "") {
    scwin.handphoneNo = scwin.params["handphoneNo"].trim();
  }
  scwin.picNm = "";
  if (scwin.params["picNm"] != null && scwin.params["picNm"] != "") {
    scwin.picNm = scwin.params["picNm"].trim();
  }
  scwin.tonCdNm = "";
  if (scwin.params["tonCdNm"] != null && scwin.params["tonCdNm"] != "") {
    scwin.tonCdNm = scwin.params["tonCdNm"].trim();
  }
  scwin.typeCdNm = "";
  if (scwin.params["typeCdNm"] != null && scwin.params["typeCdNm"] != "") {
    scwin.typeCdNm = scwin.params["typeCdNm"].trim();
  }
  scwin.OpenParam = scwin.params["openflag"];
  scwin.commTxt = ["Car", "vehclNo", "30", "350", "INP2", "INP3", "INP4", "INP5", "INP6"];
  scwin.strCol = "vehclNo,차량번호,100," + "vehclCls,종류,100," + "ofcNm,소속,100," + "picNm,기사명,100," + "mpNo,휴대폰,100," + "telNo,전화번호,100," + "typeCd,차종코드,100," + "typeCdNm,차종명,100," + "tonCd,톤코드,100," + "tonCdNm,톤수,100";
  scwin.strCols = [];
  scwin.strCols = scwin.strCol.split(",");
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.nextId = "INP2";
  scwin.heightPx = "100";
  sms.setValue("1");
};
scwin.onUdcCompleted = async function () {
  $c.data.setPopupTitle($p, "운송차량");
  await scwin.retrieveCarnfo();
};
scwin.retrieveCarnfo = async function () {
  if (scwin.mtvehclDd != "" && scwin.mtvehclDd != null) {
    scwin.searchAll = false;
    dma_emp.set("mtvehclDd", scwin.mtvehclDd);
    dma_emp.set("ez110Idx", scwin.ez110Idx);
    ds_emp.removeAll();
    let e = await $c.sbm.execute($p, sbm_emp);
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_emp.setRowPosition(0);
    udc_Car.setValue(scwin.vehclNo);
    vehclNo_hidden.setValue(scwin.ez110Idx);
    INP1.setValue(scwin.mtvehclDd);
    INP2.setValue(scwin.ofcNm);
    INP3.setValue(scwin.handphoneNo);
    INP4.setValue(scwin.picNm);
    INP5.setValue(scwin.typeCdNm);
    INP6.setValue(scwin.tonCdNm);
  } else {
    scwin.newinput();
  }
};

/*신규*/
scwin.newinput = function () {
  ds_emp.removeAll();
  ds_emp.insertRow(0);
  ds_emp.setRowPosition(0);
  INP1.setValue(scwin.vCurDate);
  INP2.setValue("");
  INP3.setValue("");
  INP4.setValue("");
  INP5.setValue("");
  INP6.setValue("");
  INP7.setValue("0");
  INP8.setValue("");
  INP9.setValue("");
  INP10.setValue("");
  INP12.setValue("");
  INP13.setValue("");
  udc_Car.init("");
  udc_Car.focus();
};

/* 저장 */
scwin.savethis = async function () {
  if (ds_emp.getTotalRow() > 0) {
    if (udc_Car.getValue() == "") {
      await $c.win.alert($p, "차량번호를 조회하여 입력해 주세요");
      return;
    }
    ds_emp.setCellData(0, "mtvehclDd", INP1.getValue().replace('-', ''));
    ds_emp.setCellData(0, "vehclSts", INP7.getValue());
    ds_emp.setCellData(0, "posTxt", INP8.getValue());
    ds_emp.setCellData(0, "hopeStartPos", INP9.getValue());
    ds_emp.setCellData(0, "hopeAlhtPos", INP10.getValue());
    ds_emp.setCellData(0, "mtvehclRt", "100");
    ds_emp.setCellData(0, "rmk", INP12.getValue());
    ds_emp.setCellData(0, "rfidNo", INP13.getValue());
    ds_emp.setCellData(0, "ez110Idx", vehclNo_hidden.getValue());
    ds_emp.setCellData(0, "smsRcvYn", sms.getValue());
    ds_emp.modifyRowStatus(0, "U");
    $c.sbm.execute($p, sbm_saveEmp);
  }
};
scwin.fn_ds_empset = function () {
  ds_emp.removeAll();
  ds_emp.setRowJSON(0, {
    "mtvehclDd": INP1.getValue().replace('-', ''),
    "vehclSts": INP7.getValue(),
    "posTxt": INP8.getValue(),
    "hopeStartPos": INP9.getValue(),
    "hopeAlhtPos": INP10.getValue(),
    "mtvehclRt": "100",
    "rmk": INP12.getValue(),
    "rfidNo": INP13.getValue(),
    "ez110Idx": vehclNo_hidden.getValue(),
    "smsRcvYn": sms.getValue(),
    "vehclNo": udc_Car.getValue()
  });
  ds_emp.setRowPosition(0);
};

/* 삭제 */
scwin.deletethis = async function () {
  scwin.fn_ds_empset();
  if (await $c.win.confirm($p, "삭제하시겠습니까?")) {
    if (ds_emp.getTotalRow() == 0) {
      await $c.win.alert($p, "삭제할 데이터가 없습니다.");
    } else {
      if (INP7.getValue() != "") {
        //document.getElementById("INP7").value=2                     
        ds_emp.modifyRowStatus(0, "D");
        $c.sbm.execute($p, sbm_saveEmp);
      } else {
        await $c.win.alert($p, "대기상태인 차량정보만 삭제할 수 있습니다.");
      }
    }
  }
};
scwin.opennerreflash = function () {
  if (scwin.OpenParam == "Yes") {
    // out.print("win.reflashcar();");
  }
};
scwin.sbm_saveEmp_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 저장되었습니다");
  scwin.opennerreflash();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_common_textbox',type:'page',variableClone:'true',src:'/cm/udc/common_textbox.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ncall-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ncall nc17',id:'btn_clear',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.newinput'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc20',id:'btn_save',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.savethis'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc18',id:'btn_delete',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.deletethis'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제하기'}]}]}]},{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'항목을 입력후 \'저장하기\'버튼을 눌러주세요.',class:'txt-dot  txt-blue',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공차예정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'INP1',pickerType:'dynamic',style:'',ref:'data:ds_emp.mtvehclDd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_common_textbox',A:{columnIdList:'vehclNo,vehclCls,ofcNm,picNm,mpNo,telNo,typeCd,typeCdNm,tonCd,tonCdNm',gridHeadTitle:'차량번호,종류,소속,기사명,휴대폰,전화번호,차종코드,차종명,톤코드,톤수',id:'udc_Car',nameId:'vehclNo',selectID:'Car',style:'',compList:'INP2,INP3,INP4,INP5,INP6',refDataCollection:'dma_udc',code:'code',widthList:'90,70,120,70,100,70,70,70,70,70'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0',style:'display: none;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'vehclNo_hidden',placeholder:'',style:'',ref:'data:dma_udc.code'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'INP2',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'INP3',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'INP4',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'INP5',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'톤수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'INP6',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'INP7',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_emp.vehclSts',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'종료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'INP8',placeholder:'',style:'',ref:'data:ds_emp.posTxt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'희망상차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'INP9',placeholder:'',style:'',ref:'data:ds_emp.hopeStartPos'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'희망하차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'INP10',placeholder:'',style:'',ref:'data:ds_emp.hopeAlhtPos'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'RFID번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'INP13',placeholder:'',style:'',ref:'data:ds_emp.rfidNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SMS',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'sms',ref:'data:ds_emp.smsRcvYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고/요구사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'INP12',style:'',ref:'data:ds_emp.rmk'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})