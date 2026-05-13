/*amd /ui/tn/tp/dongbusteel/tp_201_01_05b.xml 99886 d86eb4f55481376bf523934715338d03e34686b30fd731960e47c51542b43d69 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_mchtOdrKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_contractOrderWorkPathQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeqExcept',name:'계약작업경로순번제외',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNoList',name:'화주오더번호List',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrFromDt',name:'화주오더일자FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrToDt',name:'화주오더일자TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCreatCls',name:'오더생성구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsClsCd',name:'오더확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnYn',name:'당사오더확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCompleteYn',name:'당사오더완료여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongNm',name:'사업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSaleCls',name:'3자물류판매구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSendClsCd',name:'3자물류발송구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shipBizLongCd',name:'플랜트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateQueryCond',name:'일자조회조건',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_shipmentIndicationOrderList','ev:onaftercolumnfilterchange':'scwin.ds_shipmentIndicationOrderList_onaftercolumnfilterchange',saveRemovedData:'false','ev:oncelldatachange':'scwin.ds_shipmentIndicationOrderList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coshippingNoTemp',name:'합적번호임시',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'scAmtRate',name:'할인비율',dataType:'number',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'coBilgClntNo',name:'청구거래처',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'stsClsCd',name:'상태구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'tplMchtReqDt',name:'3자물류화주의뢰일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'dmndRgnCd',name:'수요가지역코드',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'dlvyPlCd',name:'납품처코드',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'dlvyPlNm',name:'납품처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'3자물류도착지주소',dataType:'text',defaultValue:'',length:'101'}},{T:1,N:'w2:column',A:{id:'tplArvAddr2',name:'3자물류도착지주소2',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'dptArvBizLongCd',name:'출발도착사업장코드',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'shipBizLongCd',name:'동부출발 작업장코드',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'shipCond',name:'출하조건',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text',defaultValue:'',length:'242'}},{T:1,N:'w2:column',A:{id:'odrRecptDt',name:'오더접수일자',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'odrRecptHh',name:'오더접수시간',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'odrCreatDt',name:'오더생성일자',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'distchPath',name:'유통경로',dataType:'text',defaultValue:'',length:'40'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'tplCommCd',name:'3자물류품명코드',dataType:'text',defaultValue:'',length:'25'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0',length:'6'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'odrDcsnDtm',name:'당사오더 확정일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'당사오더 완료일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'transWrkIndictYn',name:'배차지시여부',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'beforeOdrTransWrkIndictYn',name:'이전오더 배차지시여부',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'transRsltsYn',name:'실적발생여부',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'logSeq',name:'LOG순번',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'shipTo',name:'SHIP TO',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'dmndNm420',name:'협력업체명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'strgArea',name:'적재위치',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'strgAreaNm',name:'적재위치명',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'긴급여부',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'rsltsYn',name:'실적생성여부',dataType:'number',defaultValue:'0',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_selfClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_contractWorkPathList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_eqKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_eqNrmCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_selfClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vehclCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_reterieveMchtOdrKnd',action:'/ncall.ds.tp.dongbusteel.odrmgnt.RetrieveEdiMappingCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_reterieveMchtOdrKnd_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,[{"id":"dma_ediMappingSearch","key":"IN_DS1"},{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_ediMappingSearch',key:'IN_DS1'}},{T:1,N:'w2:target',A:{id:'ds_mchtOdrKndCd',key:'OUT_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_reterieve',action:'/ncall.ds.tp.dongbusteel.odrmgnt.RetrieveDongbusteelOrderToAllocCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_reterieve_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderSearch","key":"IN_DS1"},{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_orderSearch',key:'IN_DS1'}},{T:1,N:'w2:target',A:{id:'ds_shipmentIndicationOrderList',key:'OUT_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_reterieveCtrtWrkPathSeq',action:'/ncall.ds.tp.dongbusteel.odrmgnt.RetrieveCtrtWrkPathSeqCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_reterieveCtrtWrkPathSeq_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,[{"id":"dma_contractOrderWorkPathQueryCondition","key":"IN_DS1"},{"id":"ds_contractWorkPathList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_contractWorkPathList","key":"OUT_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_contractOrderWorkPathQueryCondition',key:'IN_DS1'}},{T:1,N:'w2:target',A:{id:'ds_contractWorkPathList',key:'OUT_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.tp.dongbusteel.odrmgnt.RegistDongbusteelOrderToAllocCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,{"action":"modified","action":"modified","id":"ds_shipmentIndicationOrderList","key":"IN_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_shipmentIndicationOrderList',key:'IN_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ncall.ds.tp.dongbusteel.odrmgnt.DeleteDongbusteelOrderCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,{"action":"modified","action":"modified","id":"ds_shipmentIndicationOrderList","key":"IN_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_shipmentIndicationOrderList',key:'IN_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_delete2',action:'/ncall.ds.tp.dongbusteel.odrmgnt.DeleteDongbusteelAllocarCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_delete2_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,{"action":"modified","action":"modified","id":"ds_shipmentIndicationOrderList","key":"IN_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_shipmentIndicationOrderList',key:'IN_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_delete3',action:'/ncall.ds.tp.dongbusteel.odrmgnt.DeleteDongbusteelOdrCancelCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_delete3_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,{"action":"modified","action":"modified","id":"ds_shipmentIndicationOrderList","key":"IN_DS1"}'},E:[{T:1,N:'w2:ref',A:{id:'ds_shipmentIndicationOrderList',key:'IN_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_selfClsCd',action:'/ncall.cm.zz.RetrieveCodeCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_selfClsCd_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,dma_selfClsCd',target:'data:json,{"id":"ds_selfClsCd","key":"GAUCE"}'},E:[{T:1,N:'w2:target',A:{id:'ds_selfClsCd',key:'OUT_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_eqKndCd',action:'/ncall.cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_eqKndCd_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,dma_vehclCond',target:'data:json,{"id":"ds_eqKndCd","key":"GAUCE"}'},E:[{T:1,N:'w2:target',A:{id:'ds_eqKndCd',key:'OUT_DS1'}}]},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/ncall.cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone','ev:submiterror':'',mediatype:'application/json',ref:'data:json,dma_vehclCond',target:'data:json,{"id":"ds_eqNrmCd","key":"GAUCE"}'},E:[{T:1,N:'w2:target',A:{id:'ds_eqNrmCd',key:'OUT_DS1'}}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/OpConstants.js',type:'text/javascript',scopeVariable:'OpConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1); // 전월
scwin.strNextDate = $c.date.addMonth($p, scwin.strCurDate, 1); // 다음월
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd");
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm");
scwin.docCd = "ODRKND_001"; // 문서코드 - 화주오더종류
scwin.wrkPlCd = "999"; // 작업장코드 
scwin.itemCd = ""; // 항목코드 
scwin.pageTitle = "오더요청현황";
scwin.globalRow = 0;

//hidden
scwin.hid_repClntNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  if (scwin.userClsCd == "04") {
    scwin.pageTitle = "고객오더현황";
  }
  if (scwin.userClsCd == "01") {
    scwin.loginClntNo = "";
    scwin.loginClntNm = "";
  }

  // 입력 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_shipmentIndicationOrderList);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // 거래처명, 플랜트 readOnly
  ed_clntNm.setReadOnly(true); // ASIS : class=input_textKorReadOnly
  ed_bizLongNm.setReadOnly(true);

  //초기화
  scwin.f_defaultValue();

  //타이틀 SET
  $c.data.setPopupTitle($p, scwin.pageTitle);

  // 테스트 데이터
  // ed_mchtOdrFromDt.setValue("20171213");
  // ed_mchtOdrToDt.setValue("20171213");
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 자가구분 컬럼
//-------------------------------------------------------------------------
scwin.f_retrieveGridLookup = function () {
  dma_selfClsCd.set("grpCd", "SD114");
  $c.sbm.execute($p, sbm_selfClsCd);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = async function () {
  scwin.f_vehclKnd();
  scwin.f_vehclNrm();

  // 조회 조건 초기화
  scwin.f_FieldClear();

  // 거래처 정보 설정
  ed_clntNo.setValue(OpConstants.ST_REPCLNTNO_STEEL); // 일단 동부 제강으로 ...

  if (!$c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), "T", "F");
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  ed_clntNo.focus();
  scwin.f_retrieveGridLookup();
  if (scwin.userClsCd != "01") {
    $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, btn_clntNo]);
  }
};

//-------------------------------------------------------------------------
// 그리드 종류 콤보박스
//-------------------------------------------------------------------------
scwin.f_vehclKnd = function () {
  dma_vehclCond.set("sysCd", "NcallDsCommonEBC");
  dma_vehclCond.set("queryId", "retriveDsCommonEqCd");
  $c.sbm.execute($p, sbm_eqKndCd);
};

//-------------------------------------------------------------------------

// 그리드 규격 콤보박스
//-------------------------------------------------------------------------
scwin.f_vehclNrm = function () {
  dma_vehclCond.set("sysCd", "NcallDsCommonEBC");
  dma_vehclCond.set("queryId", "retriveEqNrmTotalList");
  $c.sbm.execute($p, sbm_eqNrmCd);
};

//-------------------------------------------------------------------------
// 두날짜 차이 계산
//-------------------------------------------------------------------------
scwin.f_DifferBetweenDate = function (sDateStr, eDateStr) {
  if ($c.date.diffDate($p, sDateStr, eDateStr) > 2) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 거래처 선택 확인
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["거래처"]);
    ed_clntNo.focus();
    return false;
  }
  if ($c.str.trim($p, ed_mchtOdrFromDt.getValue()) === "") {
    ed_mchtOdrFromDt.setValue("");
  }
  if ($c.str.trim($p, ed_mchtOdrToDt.getValue()) === "") {
    ed_mchtOdrToDt.setValue("");
  }
  if (!scwin.f_DifferBetweenDate(ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue())) {
    await $c.win.alert($p, "화주오더(오더전송)일자 조회기간을 최대 3일까지만 조회해주세요.");
    ed_mchtOdrFromDt.focus();
    return;
  }

  // 오더기간 From - To 입력 확인
  var ret = await $c.gus.cfValidate($p, [ed_mchtOdrFromDt, ed_mchtOdrToDt]);
  if (!ret) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["화주오더일자 From", "화주오더일자 To"]);
    ed_mchtOdrFromDt.focus();
    return false;
  }

  // 오더기간이 1달 이상인경우 확인
  var diffObj = $c.gus.cfDifferBetween($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue());
  if (diffObj.year > 0 || diffObj.month > 0) {
    var confirmResult = await $c.win.confirm($p, ["화주오더기간 이 1개월이 넘습니다.조회하시겠습니까?"]);
    if (!confirmResult) {
      ed_mchtOdrFromDt.focus();
      return false;
    }
  }
  dma_orderSearch.set("clntNo", scwin.hid_repClntNo); // 거래처번호
  ds_shipmentIndicationOrderList.setJSON([]); // OUT_DS 클리어

  $c.sbm.execute($p, sbm_reterieve);
};

//-------------------------------------------------------------------------
// 확정(저장)
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var ret = await $c.gus.cfValidate($p, [gr_shipmentIndicationOrderList]);
  if (!ret) {
    return;
  }
  var flag = 0;
  var countRow = ds_shipmentIndicationOrderList.getRowCount();
  var i = 0;
  while (i < countRow) {
    if (ds_shipmentIndicationOrderList.getCellData(i, "chk") == 1) {
      if (ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo") != "") {
        await $c.win.alert($p, "오더가 이미 생성되어 있습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if (ds_shipmentIndicationOrderList.getCellData(i, "beforeOdrTransWrkIndictYn") > 0) {
        await $c.win.alert($p, "이전 오더가 이미 배차되었습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd")) === "" || $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd")) === "-") {
        await $c.win.alert($p, "출발작업장 데이터가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "bizLongCd")) === "") {
        await $c.win.alert($p, "사업장 데이터가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "dmndRgnCd")) === "") {
        await $c.win.alert($p, "도착작업장 데이터가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "ctrtNo")) === "") {
        await $c.win.alert($p, "계약 번호가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if (ds_shipmentIndicationOrderList.getCellData(i, "ctrtWrkPathSeq") === "") {
        await $c.win.alert($p, "계약 작업 경로가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "tplCommCd")) === "") {
        await $c.win.alert($p, "제품코드가 없습니다.");
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
        return;
      }

      /*20150225 jisoo, 일자체크 */
      // 출발작업일자가 도착작업일자보다 큰 경우
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "dptIntendDt")) > $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "arvIntendDt"))) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["도착예정일자", "출발예정일자"]);
        return;
      }

      // 출발작업시간이 도착작업시간보다 큰 경우
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "dptIntendDt")) == $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "arvIntendDt")) && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "dptIntendHh")) > $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "arvIntendHh"))) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["도착예정시간", "출발예정시간"]);
        return;
      }
      if (ds_shipmentIndicationOrderList.getCellData(i, "vehclShortCd") != "" || ds_shipmentIndicationOrderList.getCellData(i, "copCoClntNo") != "") {
        if (ds_shipmentIndicationOrderList.getCellData(i, "eqKndCd") === "" || ds_shipmentIndicationOrderList.getCellData(i, "eqNrmCd") === "") {
          await $c.win.alert($p, i + "행의 종류/규격 코드를 입력해주세요");
          return;
        }
      } else {
        await $c.win.alert($p, "차량이나 협력업체 중 한개는 필수입니다.");
        return;
      }
      flag += 1;
      ++i;
    } else {
      ds_shipmentIndicationOrderList.removeRow(i);
      --countRow;
    }
  }
  if (flag === 0) {
    $c.win.alert($p, "등록하실 오더데이터를 선택하십시요.");
    return;
  }
  var confirmResult = await $c.win.confirm($p, "오더 일괄 등록을 실행 하시겠습니까?");
  if (confirmResult) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  var ret = await $c.gus.cfValidate($p, [gr_shipmentIndicationOrderList]);
  if (!ret) {
    return;
  }
  var flag = 0;
  var countRow = ds_shipmentIndicationOrderList.getRowCount();
  var i = 0;
  while (i < countRow) {
    if (ds_shipmentIndicationOrderList.getCellData(i, "chk") == 1) {
      if (ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo") != "") {
        flag += 1;
        ++i;
      } else {
        await $c.win.alert($p, "동부오더로 확정한 오더만 삭제가능합니다.");
        return;
      }
    } else {
      ds_shipmentIndicationOrderList.removeRow(i);
      --countRow;
    }
  }
  if (flag === 0) {
    await $c.win.alert($p, "삭제하실 오더데이터를 선택하십시요.");
    return;
  }
  var confirmResult = await $c.win.confirm($p, "오더 및 실적 일괄 삭제를 실행 하시겠습니까?");
  if (confirmResult) {
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 계약순번 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCtrtWrkPathSeq = function (row) {
  dma_contractOrderWorkPathQueryCondition.set("odrKndCd", ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd")); // 화주오더종류
  dma_contractOrderWorkPathQueryCondition.set("repClntNo", ds_shipmentIndicationOrderList.getCellData(row, "repClntNo")); // 대표 거래처번호
  dma_contractOrderWorkPathQueryCondition.set("selfClsCd", ds_shipmentIndicationOrderList.getCellData(row, "selfClsCd"));
  dma_contractOrderWorkPathQueryCondition.set("bizLongCd", ds_shipmentIndicationOrderList.getCellData(row, "coCd")); // Shipping Point

  scwin.globalRow = row;
  $c.sbm.execute($p, sbm_reterieveCtrtWrkPathSeq);
};
scwin.f_setCtrtWrkPathSeq = function (ctrtWrkPathSeq, ctrtWrkPathNm) {
  ds_shipmentIndicationOrderList.setCellData(scwin.globalRow, "ctrtWrkPathSeq", ctrtWrkPathSeq);
  ds_shipmentIndicationOrderList.setCellData(scwin.globalRow, "ctrtWrkPathNm", ctrtWrkPathNm);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
  ed_mchtOdrFromDt.setValue(scwin.strPreDate);
  ed_mchtOdrToDt.setValue(scwin.strNextDate);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var pWhere;
  switch (disGubun) {
    case 1:
      // 거래처 팝업
      udc_clntNo.setSelectId("retrieveClntInfo2_tpro"); // XML상의 SELECT ID  
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "계약 거래처,거래처코드/명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 사업장 팝업
      var v_clntNo = ed_clntNo.getValue();
      var v_itemCd = "COMPANY"; // 사업장 조회
      var v_wrkPlCd = scwin.wrkPlCd;
      if ($c.gus.cfIsNull($p, v_clntNo)) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["거래처"]);
        ed_clntNo.focus();
        return false;
      }
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd;
      udc_bizLongCd.setSelectId("retrieveEdiMapping_tpro"); // XML상의 SELECT ID  
      udc_bizLongCd.cfCommonPopUp(scwin.udc_bizLongCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "공장,공장코드/명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      pCode = ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.rowPosition, "copCoClntNo");
      pName = ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.rowPosition, "copCoClntNo");
      udc_gr_comCode.setSelectId("retrieveCarKindClntInfo_tpro"); // XML상의 SELECT ID
      udc_gr_comCode.cfCommonPopUp(scwin.udc_gr_copCoClntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , "<%= DsConstants.PCHS_CLNT_CLS_CD_HIRECAR %>" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      //차량 조회 팝업
      pCode = $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "vehclShortCd"));
      pWhere = ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "outDt");
      udc_gr_comCode.setSelectId("retrieveUsableVehclNo_tpro"); // XML상의 SELECT ID
      udc_gr_comCode.cfCommonPopUp(scwin.udc_gr_vehclShortCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , "7,8,9,10" // 컬럼중에서 숨기는  컬럼 지정
      , pWhere // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode === true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderRequestProcess = function () {
  let row = ds_shipmentIndicationOrderList.getRowPosition();
  let strOrderRequestProcessUrl = "/ui/ds/tp/dongbusteel/odrmgnt/tp_201_01_02t.xml";
  let pgmId = "tp_201_01_02t.jsp";
  if (row > -1) {
    var v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    var v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    var v_clntNm = ds_shipmentIndicationOrderList.getCellData(row, "clntNm");
    var v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    var v_mchtOdrKndNm = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndNm");
    var v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    var v_mcomOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mcomOdrNo");
    var v_logSeq = ds_shipmentIndicationOrderList.getCellData(row, "logSeq");
    if ($c.gus.cfIsNull($p, v_repClntNo)) {
      v_repClntNo = v_clntNo;
    }
    let paramObj = {
      repClntNo: v_repClntNo,
      clntNo: v_clntNo,
      clntNm: v_clntNm,
      mchtOdrKndCd: v_mchtOdrKndCd,
      mchtOdrKndNm: v_mchtOdrKndNm,
      mchtOdrNo: v_mchtOdrNo,
      mcomOdrNo: v_mcomOdrNo,
      logSeq: v_logSeq,
      type: "retrieve"
    };
    $c.win.openMenu($p, "오더요청등록(제강)", strOrderRequestProcessUrl, pgmId, paramObj);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더요청현황"]);
    return;
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더별 작업현황  : 해당 화주오더별 작업현황 페이지로 이동 : 사용자 구분이 화주인 경우
//-------------------------------------------------------------------------
scwin.f_merchantOrderEachWorkPresentCondition = function () {
  let row = ds_shipmentIndicationOrderList.getRowPosition();
  let strOrderRequestProcessUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_01b.xml";
  let pgmId = "as_102_01_01b.jsp";
  if (row > -1) {
    var v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    var v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    var v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    var v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    if ($c.gus.cfIsNull($p, v_repClntNo)) {
      v_repClntNo = v_clntNo;
    }
    let paramObj = {
      clntNo: v_repClntNo,
      mchtOdrNo: v_mchtOdrNo,
      mchtOdrKndCd: v_mchtOdrKndCd
    };
    $c.win.openMenu($p, "화주오더별작업현황", strOrderRequestProcessUrl, pgmId, paramObj);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더요청현황"]);
    return;
  }
};

//-------------------------------------------------------------------------
// 확정, 선매 클릭 시 filter
//-------------------------------------------------------------------------
scwin.f_filter = function () {
  var filterExpr = "";
  if (cbx_MatCondCd.getValue()) {
    filterExpr = "stsClsCd == 'Y' || stsClsCd == 'N' || stsClsCd == 'Z'";
  } else if (cbx_PreCondCd.getValue()) {
    filterExpr = "stsClsCd == 'S'";
  }
  ds_shipmentIndicationOrderList.removeColumnFilterAll();
  if (filterExpr) {
    $c.data.dataListFilter($p, ds_shipmentIndicationOrderList, filterExpr);
  }
  tbx_totalRows.setValue(ds_shipmentIndicationOrderList.getRowCount());
};

//-------------------------------------------------------------------------
// 차량이나 협력업체 배정시 같이 같은 오더번호량들의 정보를 전부 통일시킨다.
//-------------------------------------------------------------------------
scwin.copyCoshipping = function (gubun, rowPosition) {
  switch (gubun) {
    case 1:
      /*협력업체*/
      //협력업체 선택 시 차량번호는 빈값으로 변경한다.
      ds_shipmentIndicationOrderList.setCellData(rowPosition, "vehclShortCd", "");
      ds_shipmentIndicationOrderList.setCellData(rowPosition, "vehclNo", "");
      for (var i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
        if (ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") === ds_shipmentIndicationOrderList.getCellData(rowrowPositionIndex, "mchtOdrNo")) {
          ds_shipmentIndicationOrderList.setCellData(i, "copCoClntNo", ds_shipmentIndicationOrderList.getCellData(rowPosition, "copCoClntNo"));
          ds_shipmentIndicationOrderList.setCellData(i, "copCoClntNm", ds_shipmentIndicationOrderList.getCellData(rowPosition, "copCoClntNm"));
          ds_shipmentIndicationOrderList.setCellData(i, "vehclNo", ds_shipmentIndicationOrderList.getCellData(rowPosition, "vehclNo"));
          ds_shipmentIndicationOrderList.setCellData(i, "vehclShortCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "vehclShortCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqKndCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqKndCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqNrmCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqNrmCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqCd"));
        }
      }
      break;
    case 2:
      /*차량*/
      //차량을 선택시 협력업체는 빈값으로 변경한다.
      ds_shipmentIndicationOrderList.setCellData(rowPosition, "copCoClntNo", "");
      ds_shipmentIndicationOrderList.setCellData(rowPosition, "copCoClntNm", "");
      for (var i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
        if (ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") === ds_shipmentIndicationOrderList.getCellData(rowPosition, "mchtOdrNo")) {
          ds_shipmentIndicationOrderList.setCellData(i, "copCoClntNo", ds_shipmentIndicationOrderList.getCellData(rowPosition, "copCoClntNo"));
          ds_shipmentIndicationOrderList.setCellData(i, "copCoClntNm", ds_shipmentIndicationOrderList.getCellData(rowPosition, "copCoClntNm"));
          ds_shipmentIndicationOrderList.setCellData(i, "vehclNo", ds_shipmentIndicationOrderList.getCellData(rowPosition, "vehclNo"));
          ds_shipmentIndicationOrderList.setCellData(i, "vehclShortCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "vehclShortCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqKndCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqKndCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqNrmCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqNrmCd"));
          ds_shipmentIndicationOrderList.setCellData(i, "eqCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqCd"));
        }
      }
      break;
    case 3:
      /*종류*/
      for (var i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
        if (ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") === ds_shipmentIndicationOrderList.getCellData(rowPosition, "mchtOdrNo")) {
          ds_shipmentIndicationOrderList.setCellData(i, "eqKndCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqKndCd"));
        }
      }
      break;
    case 4:
      for (var i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
        if (ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") === ds_shipmentIndicationOrderList.getCellData(rowPosition, "mchtOdrNo")) {
          ds_shipmentIndicationOrderList.setCellData(i, "eqNrmCd", ds_shipmentIndicationOrderList.getCellData(rowPosition, "eqNrmCd"));
        }
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 화주오더종류 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_reterieveMchtOdrKnd_submitdone = function () {
  if (ds_mchtOdrKndCd.getRowCount() > 0) {
    ds_mchtOdrKndCd.insertRow(0);
    ds_mchtOdrKndCd.setCellData(0, "osideCd", "");
    ds_mchtOdrKndCd.setCellData(0, "osideCdNm", "전체");
  }
  acb_mchtOdrKndCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_reterieve_submitdone = function () {
  let rowCnt = ds_shipmentIndicationOrderList.getRowCount();
  if (rowCnt === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
  } else {
    // ASIS 그리드 컬럼 속성에 있는 색상 설정
    let mcomOdrNo = "";
    let odrShtPrtYn = "";
    let odrDcsnYn = "";
    let odrCompleteYn = "";
    for (let row = 0; row < rowCnt; row++) {
      mcomOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mcomOdrNo");
      odrShtPrtYn = ds_shipmentIndicationOrderList.getCellData(row, "odrShtPrtYn");
      odrDcsnYn = ds_shipmentIndicationOrderList.getCellData(row, "odrDcsnYn");
      odrCompleteYn = ds_shipmentIndicationOrderList.getCellData(row, "odrCompleteYn");
      if (mcomOdrNo == "") {
        gr_shipmentIndicationOrderList.setCellStyle(row, "mchtOdrNo", "color", "red"); // 화주오더번호
      } else {
        gr_shipmentIndicationOrderList.setCellStyle(row, "mchtOdrNo", "color", "blue"); //화주오더번호
      }
      if (odrShtPrtYn == 1) {
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNo", "color", "red"); // 협력업체코드
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNm", "color", "red"); // 협력업체명
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqKndCd", "color", "red"); // 종류
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqNrmCd", "color", "red"); // 규격
        gr_shipmentIndicationOrderList.setCellStyle(row, "marvYn", "color", "red"); // 다착지
        gr_shipmentIndicationOrderList.setCellStyle(row, "minYn", "color", "red"); // MIN
        gr_shipmentIndicationOrderList.setCellStyle(row, "scAmtRate", "color", "red"); // 할인비율(%)
      } else if (odrShtPrtYn == 2) {
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNo", "color", "blue"); // 협력업체코드
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNm", "color", "blue"); // 협력업체명
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqKndCd", "color", "blue"); // 종류
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqNrmCd", "color", "blue"); // 규격
        gr_shipmentIndicationOrderList.setCellStyle(row, "marvYn", "color", "blue"); // 다착지
        gr_shipmentIndicationOrderList.setCellStyle(row, "minYn", "color", "blue"); // MIN
        gr_shipmentIndicationOrderList.setCellStyle(row, "scAmtRate", "color", "blue"); // 할인비율(%)
      } else {
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNo", "color", "black"); // 협력업체코드
        gr_shipmentIndicationOrderList.setCellStyle(row, "copCoClntNm", "color", "black"); // 협력업체명
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqKndCd", "color", "black"); // 종류
        gr_shipmentIndicationOrderList.setCellStyle(row, "eqNrmCd", "color", "black"); // 규격
        gr_shipmentIndicationOrderList.setCellStyle(row, "marvYn", "color", "black"); // 다착지
        gr_shipmentIndicationOrderList.setCellStyle(row, "minYn", "color", "black"); // MIN
        gr_shipmentIndicationOrderList.setCellStyle(row, "scAmtRate", "color", "black"); // 할인비율(%)
      }
      if (mcomOdrNo != "" && odrDcsnYn == 0) {
        gr_shipmentIndicationOrderList.setCellStyle(row, "odrDcsnYn", "color", "red"); // 당사오더 확정여부
      }
      if (mcomOdrNo != "" && odrDcsnYn == 1 && odrCompleteYn == 0) {
        gr_shipmentIndicationOrderList.setCellStyle(row, "odrCompleteYn", "color", "red"); // 당사오더 완료여부
      }
    }
  }
  tbx_totalRows.setValue(rowCnt);
};
scwin.sbm_reterieveCtrtWrkPathSeq_submitdone = function () {};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function () {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = function () {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.sbm.execute($p, sbm_delete2);
};

//-------------------------------------------------------------------------
// 삭제2 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete2_submitdone = function () {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.sbm.execute($p, sbm_delete3);
};

//-------------------------------------------------------------------------
// 삭제3 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete3_submitdone = async function () {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_selfClsCd_submitdone = function () {};
scwin.sbm_eqKndCd_submitdone = function () {};
scwin.sbm_eqNrmCd_submitdone = function () {};

//-------------------------------------------------------------------------
// ds_shipmentIndicationOrderList 필터 변경 이후 
// ASIS : ds_shipmentIndicationOrderList event=OnRowsetChanged()
//-------------------------------------------------------------------------
scwin.ds_shipmentIndicationOrderList_onaftercolumnfilterchange = function () {
  if (ds_shipmentIndicationOrderList.getRowCount() > 0) {
    ds_shipmentIndicationOrderList.setRowPosition(0);
  }
};

//-------------------------------------------------------------------------
// 그리드 더블 클릭 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnDblClick(row,colid)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId === "chk" || columnId === "selfClsCd") {
    return;
  }
  if (scwin.userClsCd === "01") {
    if (rowIndex >= 0) {
      scwin.f_orderRequestProcess();
    }
  } else if (scwin.userClsCd === "04") {
    if (rowIndex >= 0) {
      scwin.f_merchantOrderEachWorkPresentCondition();
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnClick(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 체크박스를 눌렀을때 동일 오더에 물려 있는 모든 디테일 목록들을 한번에 선택될수 있게 해준다.(당사오더번호가 없는 경우에만)
  if (columnId === "chk") {
    var count = ds_shipmentIndicationOrderList.getRowCount();
    for (var i = 0; i < count; i++) {
      if (rowIndex != i && ds_shipmentIndicationOrderList.getCellData(rowIndex, "mchtOdrNo") == ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo")) == "") {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", ds_shipmentIndicationOrderList.getCellData(rowIndex, "chk"));
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 헤더 클릭 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnClick(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_onheaderclick = function (headerId) {
  if (columnId === "chkHd") {
    for (var i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
      if ($c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo")) === "" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd")) !== "" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd")) !== "-" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "dmndRgnCd")) !== "" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "bizLongCd")) !== "" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "ctrtNo")) !== "" && ds_shipmentIndicationOrderList.getCellData(i, "ctrtWrkPathSeq") !== "" && $c.str.trim($p, ds_shipmentIndicationOrderList.getCellData(i, "tplCommCd")) !== "" && ds_shipmentIndicationOrderList.getCellData(i, "beforeOdrTransWrkIndictYn") == 0) {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 1);
      } else {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", 0);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 컬럼 이동 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnColumnPosChanged(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_onaftercolumnmove = function (info) {
  switch (info.endColumnID) {
    case "chk":
      var value = ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "mcomOdrNo");
      if (value != "") {
        ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "chk", 0);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 검색 버튼 클릭 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_ontextimageclick = function (rowIndex, columnIndex) {
  switch (columnIndex) {
    case 9:
      //차량단축번호(vehclShortCd)
      scwin.f_openCommonPopUp(6, null, "", "F", "T");
      break;
    case 10:
      //협력업체코드(copCoClntNo)
      scwin.f_openCommonPopUp(5, null, null, "F", "T");
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 검색 버튼 클릭 이벤트
// ASIS : gr_shipmentIndicationOrderList event=OnCloseUp(row,colid)
//        gr_shipmentIndicationOrderList event=OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_oneditend = function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 26:
      //자가구분(selfClsCd)
      //scwin.f_RetrieveCtrtWrkPathSeq(rowIndex); TOBE : 실행해서 ds_contractWorkPathList을 사용하는곳이 없으므로 주석처리
      break;
    case 9:
      //차량단축번호(vehclShortCd)
      scwin.f_openCommonPopUp(6, null, "", "F", "T");
      //copyCoshipping(2, ds_shipmentIndicationOrderList.RowPosition); UDC 콜백에서
      break;
    case 10:
      //협력업체코드(copCoClntNo)
      scwin.f_openCommonPopUp(5, null, null, "F", "T");
      //copyCoshipping(1, ds_shipmentIndicationOrderList.RowPosition); UDC 콜백에서
      break;
    case 12:
      //종류(eqKndCd)
      scwin.copyCoshipping(3, ds_shipmentIndicationOrderList.getRowPosition());
      break;
    case 13:
      //규격(eqNrmCd)
      scwin.copyCoshipping(4, ds_shipmentIndicationOrderList.getRowPosition());
      break;
  }
};

//-------------------------------------------------------------------------
// dataList 값 변경 이벤트(oldValue 때문에 사용)
// ASIS : gr_shipmentIndicationOrderList event=OnCloseUp(row,colid)
//        gr_shipmentIndicationOrderList event=OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.ds_shipmentIndicationOrderList_oncelldatachange = function (info) {
  if (info.newValue != "" && info.newValue != info.oldValue) {
    switch (info.colID) {
      case "selfClsCd":
        //자가구분(selfClsCd)
        //scwin.f_RetrieveCtrtWrkPathSeq(rowIndex); TOBE : 실행해서 ds_contractWorkPathList을 사용하는곳이 없으므로 주석처리
        break;
      case "vehclShortCd":
        //차량단축번호(vehclShortCd)
        scwin.f_openCommonPopUp(6, null, "", "T", "T");
        //copyCoshipping(2, ds_shipmentIndicationOrderList.RowPosition); UDC 콜백에서
        break;
      case "copCoClntNo":
        //협력업체코드(copCoClntNo)
        scwin.f_openCommonPopUp(5, null, null, "T", "T");
        //copyCoshipping(1, ds_shipmentIndicationOrderList.RowPosition); UDC 콜백에서
        break;
      case "eqKndCd":
        //종류(eqKndCd)
        scwin.copyCoshipping(3, ds_shipmentIndicationOrderList.getRowPosition());
        break;
      case "eqNrmCd":
        //규격(eqNrmCd)
        scwin.copyCoshipping(4, ds_shipmentIndicationOrderList.getRowPosition());
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 거래처 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(this, ed_clntNo, 1, false);
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    scwin.hid_repClntNo = rtnList[2];
  }
  if ($c.gus.cfIsNull($p, scwin.hid_repClntNo)) {
    scwin.hid_repClntNo = ed_clntNo.getValue();
  }

  // 거래처 선택시 화주오더종류를 조회한다.
  if (rtnList != null && rtnList[0] != "N/A") {
    // EDI MAPPING 조회 조건 초기값
    dma_ediMappingSearch.set("docCd", scwin.docCd);
    dma_ediMappingSearch.set("wrkPlCd", scwin.wrkPlCd);
    dma_ediMappingSearch.set("clntNo", scwin.hid_repClntNo);
    $c.sbm.execute($p, sbm_reterieveMchtOdrKnd);
  }
};
//-------------------------------------------------------------------------
// 거래처 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 플랜트 UDC START
//-------------------------------------------------------------------------
scwin.udc_bizLongCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bizLongCd.getValue(), ed_bizLongNm.getValue(), 'F', 'F');
};
scwin.udc_bizLongCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bizLongCd, ed_bizLongNm, 2);
};
scwin.udc_bizLongCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bizLongNm, ed_bizLongCd, 2, false);
};
scwin.udc_bizLongCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bizLongCd, ed_bizLongNm);
};
//-------------------------------------------------------------------------
// 플랜트 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 차량단축번호(vehclShortCd) 검색 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_vehclShortCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_shipmentIndicationOrderList, ds_shipmentIndicationOrderList.getRowPosition(), "vehclShortCd", "");
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "vehclShortCd", rtnList[0]);
      ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "vehclNo", rtnList[2]);
      ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqKndCd", rtnList[4]);
      ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqNrmCd", rtnList[5]);
      ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqCd", rtnList[8]);
      if (rtnList[9] == "1") {
        ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "wrkIndictYn", 1);
      } else {
        ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "wrkIndictYn", 0);
      }
    }
  } else {
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "vehclShortCd", "");
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "vehclNo", "");
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqKndCd", "");
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqNrmCd", "");
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "eqCd", "");
    ds_shipmentIndicationOrderList.setCellData(ds_shipmentIndicationOrderList.getRowPosition(), "wrkIndictYn", 0);
  }
  scwin.copyCoshipping(2, ds_shipmentIndicationOrderList.getRowPosition());
};

//-------------------------------------------------------------------------
// 그리드 협력업체코드(copCoClntNo) 검색 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_copCoClntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_shipmentIndicationOrderList, ds_shipmentIndicationOrderList.getRowPosition(), "copCoClntNo", "copCoClntNm");
  scwin.copyCoshipping(1, ds_shipmentIndicationOrderList.getRowPosition());
};

//-------------------------------------------------------------------------
// 그리드 : 당사오더 확정여부 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.odrDcsnYnExp = function (data) {
  return $c.gus.decode($p, data, 1, "확정", "미확정");
};

//-------------------------------------------------------------------------
// 그리드 : 당사오더 완료여부 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.odrCompleteYnExp = function (data) {
  return $c.gus.decode($p, data, 1, "완료", "미완료");
};

//-------------------------------------------------------------------------
// 그리드 : 이전오더 배차지시여부 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.beforeOdrTransWrkIndictYnExp = function (data) {
  return $c.gus.decode($p, data, 0, "미배차", "배차");
};

//-------------------------------------------------------------------------
// 그리드 : 오더확정 구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.stsClsCdExp = function (data) {
  return $c.gus.decode($p, data, "Y", "확정", "N", "취소", "Z", "비용미처리", "미확정");
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.f_runExcel = function () {
  const options = {
    fileName: scwin.pageTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: scwin.pageTitle //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_shipmentIndicationOrderList, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'','ev:onblur':'scwin.ed_clntNo_onblur',validTitle:'거래처',nameId:'ed_clntNm',style:'',id:'udc_clntNo',btnId:'btn_clntNo',codeId:'ed_clntNo',objTypeCode:'data',objTypeName:'data',mandatoryName:'true',UpperFlagCode:'1',mandatoryCode:'true',refDataCollection:'dma_orderSearch',name:'clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dateQueryCond',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_orderSearch.dateQueryCond',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더전송일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주오더일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'mchtOdrFromDt',refDataMap:'dma_orderSearch',style:'',id:'udc_mchtOdrDt',refEdDt:'mchtOdrToDt',edFromId:'ed_mchtOdrFromDt',edToId:'ed_mchtOdrToDt',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_arvIntendDt',style:'',objType:'data',ref:'data:dma_orderSearch.arvIntendDt'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'플랜트 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{'ev:onblur':'scwin.ed_bizLongCd_onblur',nameId:'ed_bizLongNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_bizLongCd',id:'udc_bizLongCd',codeId:'ed_bizLongCd',UpperFlagCode:'1',refDataCollection:'dma_orderSearch',code:'shipBizLongCd',name:'bizLongNm','ev:onclickEvent':'scwin.udc_bizLongCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bizLongCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bizLongCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_mchtOdrKndCd',objType:'data',ref:'data:dma_orderSearch.mchtOdrKndCd',search:'start',style:'width:200px;',submenuSize:'auto',textAlign:'left',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mchtOdrKndCd'},E:[{T:1,N:'w2:label',A:{ref:'osideCdNm'}},{T:1,N:'w2:value',A:{ref:'osideCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_mchtOdrNo',class:'',maxlength:'20',objType:'data',ref:'data:dma_orderSearch.mchtOdrNo'}},{T:1,N:'w2:udc_schInput',A:{id:'udc_mchtOdrNoList',iptNm:'mchtOdrNoList',refDataMap:'dma_orderSearch',style:'width: 100px;',iptObjType:'Data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'생성여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',editType:'select',id:'acb_odrCreatCls',objType:'data',ref:'data:dma_orderSearch.odrCreatCls',search:'start',style:'width:150px;',submenuSize:'auto',textAlign:'left',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_MatCondCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_filter'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_PreCondCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_filter'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:checkbox',A:{id:'chk_MatCondCd',label:'확정','ev:onclick':'scwin.f_filter'}},{T:1,N:'w2:checkbox',A:{id:'chk_PreCondCd',label:'선매','ev:onclick':'scwin.f_filter'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',editType:'select',id:'acb_stsClsCd',objType:'data',ref:'data:dma_orderSearch.stsClsCd',search:'start',style:'width:150px;',submenuSize:'auto',textAlign:'left',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'비용미처리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Z'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_trigger1','ev:onclick':'scwin.f_Retrieve',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더요청현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_shipmentIndicationOrderList',gridDownFn:'scwin.f_runExcel',templateYn:'N',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_shipmentIndicationOrderList',id:'gr_shipmentIndicationOrderList','ev:oncelldblclick':'scwin.gr_shipmentIndicationOrderList_oncelldblclick','ev:oncellclick':'scwin.gr_shipmentIndicationOrderList_oncellclick','ev:onaftercolumnmove':'scwin.gr_shipmentIndicationOrderList_onaftercolumnmove',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',autoFit:'none',fixedColumn:'4','ev:ontextimageclick':'scwin.gr_shipmentIndicationOrderList_ontextimageclick',rowStatusVisible:'true','ev:onheaderclick':'scwin.gr_shipmentIndicationOrderList_onheaderclick',editModeEvent:'onclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHd',inputType:'text',value:'선택',width:'70',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'화주오더번호',width:'130',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'로그</br>순번',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column110',value:'당사오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',value:'납품처명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column102',value:'유통경로',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column98',value:'중량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column94',value:'총중량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',value:'차량</br>단축번호',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column82',value:'협력업체',displayMode:'label',colSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'종류',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'규격',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'다착지',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',value:'MIN',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'할인비율<br/>(%)',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'길이',width:'70',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'청구</br>거래처',width:'100',rowSpan:'2',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'거래처',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'거래처명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'납품처</br>코드',width:'100',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column142',value:'납품처상세주소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',value:'ITEM</br>수량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column134',value:'화주오더</br>종류코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column130',value:'관리</br>순번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column126',value:'자가구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',value:'계약번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column206',value:'작업경로',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column202',value:'수요가명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column198',value:'도착작업장</br>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column178',value:'선적출발</br>ZONE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column174',value:'동부출발</br>작업장코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column170',value:'회사코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column166',value:'사업장</br>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column162',value:'출하조건',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column158',value:'특이사항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column154',value:'오더접수</br>일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column150',value:'오더접수</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column146',value:'3자물류</br>품명코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column118',value:'출발예정</br>일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column122',value:'출발예정</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column222',value:'도착예정</br>일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column218',value:'도착예정</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column210',value:'오더생성</br>시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column214',value:'당사오더</br>확정여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column286',value:'당사오더</br>확정일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column282',value:'당사오더</br>확정시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column278',value:'당사오더</br>확정일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column274',value:'당사오더</br>완료여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column270',value:'당사오더</br>완료일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column266',value:'당사오더</br>완료시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column262',value:'당사오더</br>완료일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column258',value:'배차지시여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column254',value:'이전오더</br>배차지시여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column246',value:'오더확정</br>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column242',value:'협력업체</br>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column238',value:'협력업체명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column226',value:'창고',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'이름',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'130',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'mcomOdrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dlvyPlNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'distchPath',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'wt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'grossWt',displayMode:'label',readOnly:'true',displayFormat:'#,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vehclShortCd',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'copCoClntNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'copCoClntNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'eqKndCd',displayMode:'label',chooseOption:'true',editModeEvent:'onclick',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqKndCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'eqNrmCd',displayMode:'label',chooseOption:'true',editModeEvent:'onclick',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'marvYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'minYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'scAmtRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'len',inputType:'text',width:'70',displayFormat:'#,###.0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coBilgClntNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left',colMerge:'true',upperColumn:'clntNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dlvyPlCd',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'tplArvAddr',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrKndCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'selfClsCd',displayMode:'label',chooseOption:'true',editModeEvent:'onclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selfClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtWrkPathNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dmndNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndRgnCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptArvBizLongCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'shipBizLongCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizLongCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipCond',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'unqItm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRecptDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRecptHh',displayMode:'label',displayFormat:'HH:mm',readOnly:'true',ioFormat:'HHmmss',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplCommCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'dptIntendDt',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptIntendHh',displayMode:'label',displayFormat:'##:##',maxLength:'4',mandatory:'true',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'arvIntendDt',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntendHh',displayMode:'label',displayFormat:'##:##',maxLength:'4',mandatory:'true',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreatDt',displayMode:'label',displayFormat:'####/##/## ##:##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnYn',displayMode:'label',readOnly:'true',displayFormatter:'scwin.odrDcsnYnExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDcsnDtm',displayMode:'label',displayFormat:'####/##/## ##:##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteYn',displayMode:'label',readOnly:'true',displayFormatter:'scwin.odrCompleteYn'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteDtm',displayMode:'label',displayFormat:'####/##/## ##:##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'transWrkIndictYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'beforeOdrTransWrkIndictYn',displayMode:'label',readOnly:'true',displayFormatter:'scwin.beforeOdrTransWrkIndictYnExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stsClsCd',displayMode:'label',readOnly:'true',displayFormatter:'scwin.stsClsCdExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipTo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNm420',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',id:'strgAreaNm',displayMode:'label',readOnly:'true',textAlign:'left',expression:'datalist(\'strgArea\') + \' \' + datalist(\'strgAreaNm\')'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column113',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column145',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column137',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column133',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column209',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column205',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column201',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column181',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column177',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column173',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column169',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column165',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column161',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column157',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column153',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column149',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column225',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column221',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column213',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column217',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column289',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column285',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column281',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column277',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column273',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column269',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column265',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column261',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column257',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column249',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column245',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column241',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column229',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirmOdr','ev:onclick':'scwin.f_Save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delOdr','ev:onclick':'scwin.f_delete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_gr_comCode',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})