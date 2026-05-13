/*amd /ui/bp/fbp/op/ac/ez_202_01_02p.xml 6453 2a6a1584c031502fd8d990219de81f3463b3bdb4af7bd8ce18eacf9becad6bcb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_AlloccarFlCopy'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'flIdxs',name:'화물번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copyCount',name:'복사수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자아이디',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultDT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'결과메시지',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_AlloccarFlCopy',action:'/ncall.bp.fbp.op.ac.AlloccarFlCopyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_AlloccarFlCopy","key":"IN_ALLOCCAR_FL_COPY"},{"id":"ds_resultDT","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultDT","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_AlloccarFlCopy_submitdone','ev:submiterror':'scwin.sbm_AlloccarFlCopy_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.parentScope;
scwin.tmKey;
scwin.onpageload = function () {};

//---------------------------------------------------------------------------------
// 화물 복사
//---------------------------------------------------------------------------------
scwin.f_AlloccarFlCopy = async function () {
  var paramData = $c.data.getParameter($p); // 메뉴정보
  var pFrame = paramData['pFrame'];
  scwin.parentScope = opener[pFrame].scope;
  var ds_fl = scwin.parentScope['ds_fl'];
  var ds_flc = scwin.parentScope['ds_flc'];
  var flType = paramData["CargoType"]; // 화물종류(벌크,컨테이너)
  var lclRow = paramData["selectedLclRow"]; // 선택된 화물정보 

  var vCopyCount = Number(copy_count.getValue());
  if (vCopyCount == "") {
    await $c.win.alert($p, '복사 할 화물의 수량을 입력 하세요.');
    copy_count.focus();
    return;
  } else if (vCopyCount < 1 || vCopyCount > 10) {
    await $c.win.alert($p, '복사할 수량은 1개 이상 10개 이하 입니다.');
    copy_count.setValue("");
    copy_count.focus();
    return;
  }
  var vFlFlag = flType == 'cargo' ? "1" : "2"; // 화물구분 1:벌크 , 2:컨테이너
  var temp = [];
  var dmCoshippingNo = vFlFlag == "1" ? ds_fl.getCellData(lclRow, "dmCoshippingNo") : ds_flc.getCellData(lclRow, "dmCoshippingNo");
  var sub_dmCoshippingNo;

  // 화물이 선택되었는지 체크
  if (lclRow === "") {
    await $c.win.alert($p, '화물정보가 선택되지 않았습니다. 화물정보를 선택하여 주시기 바랍니다.');
    $c.win.closePopup($p);
    return;
  }
  if (vFlFlag == '1') {
    if (dmCoshippingNo.trim() == "") {
      temp.push(ds_fl.getCellData(lclRow, "idx"));
    } else {
      for (var i = 0; i < ds_fl.getRowCount(); i++) {
        sub_dmCoshippingNo = ds_fl.getCellData(i, "dmCoshippingNo").replace(/-/g, '');
        if (dmCoshippingNo == sub_dmCoshippingNo) {
          temp.push(ds_fl.getCellData(i, "idx"));
        }
      }
    }
  } else {
    temp.push(ds_flc.getCellData(lclRow, "idx"));
  }
  vFlIdxs = temp.join(',');
  dma_AlloccarFlCopy.setArray([]);
  dma_AlloccarFlCopy.set("flIdxs", vFlIdxs);
  dma_AlloccarFlCopy.set("flFlag", vFlFlag);
  dma_AlloccarFlCopy.set("copyCount", vCopyCount);
  dma_AlloccarFlCopy.set("userId", scwin.userId);
  $c.sbm.execute($p, sbm_AlloccarFlCopy);
};
scwin.close = function (e) {
  $c.win.closePopup($p);
};

//-----------------------------------------------------------------------------------
// TRAN EVENT
//-----------------------------------------------------------------------------------
scwin.sbm_AlloccarFlCopy_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    scwin.parentScope.scwin.reflashdata();
    if (ds_resultDT.getCellData(0, "outMsg") != "") {
      await $c.win.alert($p, ds_resultDT.getCellData(0, "outMsg"));
    }
    scwin.close();
  } else {
    setTimeout(function () {
      scwin.tmKey = setInterval(function () {
        var popList = $p.getAllPopupList();
        if (popList.length == 0) {
          clearInterval(scwin.tmKey);
          scwin.close();
        }
      }, 100);
    }, 500);
  }
};
scwin.sbm_AlloccarFlCopy_submiterror = function (e) {
  scwin.close();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복사수(1~10)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'copy_count',style:'',allowChar:'0-9'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot',escape:'false',id:'',label:'선택한 화물을 복사합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button','ev:onclick':'scwin.f_AlloccarFlCopy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]}]}]}]}]})