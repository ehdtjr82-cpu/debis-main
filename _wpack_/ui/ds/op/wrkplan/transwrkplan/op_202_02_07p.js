/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_07p.xml 12764 a633f297824325c1aa612616c714590f65f80e0cd62587bd80d723b5e51c0da1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'중장거리배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picConfirmYn',name:'배차담당자 확인',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndNm',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BK_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'야드위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picConfirmYn',name:'배차담당자 확인',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ret',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveShuttleTransStockVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ret_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var jsonParams = $c.data.getParameter($p);
  var arrParams = $p.getAllParameter().paramData;
  console.log("### JSON params : " + JSON.stringify(jsonParams));
  console.log("### ARRAY param : " + JSON.stringify(arrParams));
  dma_search.set("cargoClsCd", arrParams.args[0]);
  dma_search.set("lobranCd", arrParams.args[1]);
  dma_search.set("odrKndCd", arrParams.args[2]);
  dma_search.set("odrNo", arrParams.args[3]);
  dma_search.set("vsslCd", arrParams.args[4]);
  dma_search.set("portcnt", arrParams.args[5]);
  dma_search.set("dptDistrictCd", arrParams.args[6]);
  dma_search.set("arvDistrictCd", arrParams.args[7]);
  dma_search.set("dptWrkPlCd", arrParams.args[8]);
  dma_search.set("arvWrkPlCd", arrParams.args[9]);
  dma_search.set("wrkStDt", arrParams.args[10]);
  dma_search.set("wrkEndDt", arrParams.args[11]);
  dma_search.set("wrkDtClsCd", arrParams.args[12]);
  dma_search.set("alloccarPicId", arrParams.args[13]);
  dma_search.set("lineCd", arrParams.args[14]);
  dma_search.set("dptNowWrkPlCd", arrParams.args[15]);
  dma_search.set("picConfirmYn", arrParams.args[16]);
  $c.sbm.execute($p, sbm_ret);
};

/**
 * 조회 후처리
 */
scwin.sbm_ret_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_master.getRowCount() == 0) {
      totalRows.setValue(ds_master.getRowCount());
      $c.gus.cfAlertMsg($p, "[셔틀잔여물량조회] " + MSG_CM_ERR_003);
      //$c.gus.cfAlertMsg("셔틀운송 컨테이너정보가 없습니다.");
      return;
    } else {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "odrKndNm", i + 1);
        const picConfirmYn = ds_master.getCellData(i, "picConfirmYn");
        if (picConfirmYn == 1) {
          grd_master.setCellBackgroundColor(i, "odrNo", "yellow");
        } else if (picConfirmYn == 0) {
          grd_master.setCellBackgroundColor(i, "odrNo", "#fff");
        }
      }
      ds_master.reform();
      totalRows.setValue(ds_master.getRowCount());
    }
  }
};

/**
 * excel download
 */
scwin.gridToExcel = function () {
  const grdId = this.opts.gridID;
  const grdObj = $c.util.getComponent($p, grdId);
  const excelTitle = "셔틀운송재고물량컨테이너정보";
  const options = {
    fileName: `${excelTitle}.xlsx`,
    sheetName: excelTitle,
    bodyWordwrap: true
  };
  grd_master.setColumnVisible("odrKndNm", true);
  grd_master.setColumnVisible("sealNo", true);
  grd_master.setColumnVisible("weight", true);
  $c.data.downloadGridViewExcel($p, grdObj, options);
  grd_master.setColumnVisible("odrKndNm", false);
  grd_master.setColumnVisible("sealNo", false);
  grd_master.setColumnVisible("weight", false);
};

/**
 * Windows Close
 */
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'grd_master',gridUpYn:'N',gridDownFn:'scwin.gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'grd_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',readOnly:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column25',value:'SEQ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'CNTR NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column17',value:'SEAL NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'WEIGHT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'현재위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'BK_NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'야드위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'온도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'위험물',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column41',value:'특이사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'오더번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'odrKndNm',value:'',displayMode:'label',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cntrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fullEmptyClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sealNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'weight',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',dataType:'number',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'currPosNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bookingNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'yardLoc',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'temper',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dangerCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',class:'',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'cursor: pointer;',id:'odrNo',value:'',displayMode:'label',readOnly:'true',class:'underline col-type2',colMerge:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})