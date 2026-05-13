/*amd /AI/ez_202_01_02p.xml 5156 12197b7bd24017f5d027dcb7b71c0d5d967e33b5e4c8658408da5e77c204a037 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_AlloccarFlCopy'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'flIdxs',name:'화물번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copyCount',name:'복사수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자아이디',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultDT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'결과메시지',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_AlloccarFlCopy',action:'/bp.fbp.op.ac.AlloccarFlCopyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_AlloccarFlCopy","key":"IN_ALLOCCAR_FL_COPY"},{"id":"ds_resultDT","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultDT","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_AlloccarFlCopy_submitdone','ev:submiterror':'scwin.sbm_AlloccarFlCopy_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = "";
scwin.vCurDate = "";
scwin.onpageload = function () {
  scwin.userId = $c.ses.getUserId();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.params = $c.data.getParameter($p);
  copy_count.setFocus();
};
scwin.btn_copy_onclick = function (e) {
  scwin.f_AlloccarFlCopy();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.f_AlloccarFlCopy = async function () {
  let vUserId;
  let vFlFlag;
  let vFlIdxs;
  let vCopyCount;
  let flType = "";
  let lclRow = "";
  if (scwin.params != null) {
    flType = scwin.params["CargoType"] || "";
    lclRow = scwin.params["selectedLclRow"] || "";
  }
  vCopyCount = copy_count.getValue();
  if (vCopyCount == "") {
    await $c.win.alert($p, "복사 할 화물의 수량을 입력 하세요.");
    copy_count.setFocus();
    return;
  } else if (parseInt(vCopyCount) < 1 || parseInt(vCopyCount) > 10) {
    await $c.win.alert($p, "복사할 수량은 1개 이상 10개 이하 입니다.");
    copy_count.setValue("");
    copy_count.setFocus();
    return;
  }
  vFlIdxs = scwin.params["flIdx"] || "";
  if (lclRow == "") {
    await $c.win.alert($p, "화물정보가 선택되지 않았습니다. 화물정보를 선택하여 주시기 바랍니다.");
    $c.win.closePopup($p);
    return;
  }
  if (flType == "cargo") {
    vFlFlag = "1";
  } else {
    vFlFlag = "2";
  }
  vFlIdxs = "";
  if (scwin.params["flIdxs"] != null && scwin.params["flIdxs"] != "") {
    vFlIdxs = scwin.params["flIdxs"];
  }
  vUserId = scwin.userId;
  dma_AlloccarFlCopy.set("flIdxs", vFlIdxs);
  dma_AlloccarFlCopy.set("flFlag", vFlFlag);
  dma_AlloccarFlCopy.set("copyCount", vCopyCount);
  dma_AlloccarFlCopy.set("userId", vUserId);
  await $c.sbm.execute($p, sbm_AlloccarFlCopy);
};
scwin.sbm_AlloccarFlCopy_submitdone = async function (e) {
  if (ds_resultDT.getRowCount() > 0) {
    let outMsg = ds_resultDT.getCellData(0, "outMsg");
    if (outMsg != null && outMsg != "") {
      await $c.win.alert($p, outMsg);
    }
  }
  $c.win.closePopup($p, "REFRESH");
};
scwin.sbm_AlloccarFlCopy_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복사수(1~10)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'copy_count',style:''}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot',escape:'false',id:'',label:'선택한 화물을 복사합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]}]}]}]}]})