/*amd /ui/il/common/xml/ilCommonKtnetRecv.xml 4255 6fdc6a24ed44cc4d274a8cd1c9ac2e94b14d2e6f7336018ba6fc9e8c6f91a179 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_execKtnetRecv',action:'/cm.zz.ExecKtnetRecv.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_execKtnetRecv_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // WebSquare.transaction.start({
  //     id : "ktnetRecvCall",
  //     action : "/cm.zz.ExecKtnetRecv.do",     // 서버 URL
  //     method : "post",
  //     submitType : "ajax",
  //     isProcessMsg : true,
  //     isAsync : true,

  //     onsuccess : function(resData){
  //         input_results.setValue("FHL/FWB 결과 수신이 완료 되었습니다. ");
  //         $w("input_results").setStyle("color", "blue");
  //     },

  //     onerror : function(resData){
  //         input_results.setValue("FHL/FWB 결과 수신에 오류가 발생 했습니다.");
  //         $w("input_results").setStyle("color", "red");
  //     }
  // });
  $c.sbm.execute($p, sbm_execKtnetRecv);
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};

// Server 작업 필요
// Process p = Runtime.getRuntime().exec("/wasnfs/fileupload/il/ktnet_recv/ktnet_recv.sh");

// BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream(), "UTF-8"));
// String line;
// while ((line = br.readLine()) != null) {
//     System.out.println(line);
// }

// controller 필요
// @RequestMapping("/execKtnetRecv.do")
// public void execKtnetRecv(HttpServletResponse res){

//     try {
//         Process p = Runtime.getRuntime()
//                 .exec("/wasnfs/fileupload/il/ktnet_recv/ktnet_recv.sh");

//         BufferedReader br =
//             new BufferedReader(new InputStreamReader(p.getInputStream(),"UTF-8"));

//         String line;
//         while((line = br.readLine()) != null){
//             System.out.println(line);
//         }

//         res.getWriter().write("OK");

//     } catch(Exception e){
//         res.setStatus(500);
//     }
// }

scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.sbm_execKtnetRecv_submitdone = function (e) {
  debugger;
  if (e.responseJSON.resultDataSet[0].Msg === "FAIL") {
    input_results.setValue("적하 목록 결과 수신 중 오류가 발생했습니다.");
    input_results.setStyle("color", "red");
  } else if (e.responseJSON.resultDataSet[0].Msg === "SUCC") {
    input_results.setValue("적하 목록 결과 수신이 완료되었습니다 ");
    input_results.setStyle("color", "blue");
  }
};
scwin.sbm_execKtnetRecv_submiterror = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'" KT NET 적하 목록 정정 신청 결과 수신 "',class:'mg30 fs18 tac'}},{T:1,N:'xf:input',A:{style:'',readOnly:'true',id:'input_results',class:'h50 tac fs18 txt-blue'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})