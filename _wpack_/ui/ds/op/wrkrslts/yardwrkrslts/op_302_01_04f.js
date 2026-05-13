/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_04f.xml 81630 f44bed066a4012bbbb0a7387e62631a5228ddf3ecfa3efbc1b2eb7dfa0213c10 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_EmptvehclInIntend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'청구거래처',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'I/O/D',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'inIntendDt',name:'예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'inIntendHh',name:'예정시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'inIntendVehcl',name:'예정차량',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'ioVehclCd',name:'입출고차량코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'inIntendQty',name:'예정물량_수량',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'inIntendWt',name:'예정물량_중량',dataType:'number',defaultValue:'0',length:'11'}},{T:1,N:'w2:column',A:{id:'inIntendCbm',name:'예정물량_CBM',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'실적물량_수량',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적물량_중량',dataType:'number',defaultValue:'0',length:'11'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적물량_CBM',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업 지시번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'shipIndictNo',name:'출하지시번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'inIntendNo',name:'입고예정번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'doConfirm',name:'DO확인',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'출발도착작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적 관련번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'작업지시여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'규격',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량 단위',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'tplSaleClsCd',name:'3자물류판매구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'tplPrdtKndCd',name:'3자물류제품종류',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'tplBuyRfslCd',name:'3자물류구매거부코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplStatecentCd',name:'3자물류도센터코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplProcFctyCd',name:'3자물류처리공장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'화주오더번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'예정물량_Box',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'D/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd2',name:'수량 단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conNo',name:'관련번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inoutInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'idCheck',name:'ID체크',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioHh',name:'입출고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'출발도착작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'reqClntCd',name:'요청거래처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'ioChassisCd',name:'입출고샤시코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioVehclCd',name:'입출고차량코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclWt',name:'차량중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'shipIndictNo',name:'출하지시번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ioIntendNo',name:'입출고예정번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'cvsslWholeIoYn',name:'본선일괄입출고여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'lduldIndictDocPrtYn',name:'상하차지시서발행여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'invoicePrtYn',name:'송장발행여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'stockMgntYn',name:'재고관리여부',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'tplSaleClsCd',name:'3자물류판매구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'tplPrdtKndCd',name:'3자물류제품종류',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'tplBuyRfslCd',name:'3자물류구매거부코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplStatecentCd',name:'3자물류도센터코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplProcFctyCd',name:'3자물류처리공장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'고객오더번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'tplIoClsCd',name:'3자물류입출고구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'selfTransCoNm',name:'자가운송업체명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioSelfClsCd',name:'입고자가구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'입고오더번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'inOdrCommSeq',name:'입고오더품명순번',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'blck',name:'BLOCK',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'blckQty',name:'BLOCK수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'intendQty',name:'예정수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'intendWt',name:'예정중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'gateNo',name:'GATE번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'gateDtl',name:'게이트',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'emgcYn',name:'긴급여부',dataType:'text',defaultValue:'',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입고번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condGate'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateNo',name:'GATE번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_gate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_gateDtl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_zoneStock',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blck',name:'BLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'납품 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outWt',name:'출고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outCbm',name:'출고CBM',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveEmptvehclInIntendContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_inoutInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_inoutInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_printPickigSleet',action:'/ds.op.wrkrslts.yardwrkrslts.PrintOnIndicationDocumentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_inoutInformation","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkrslts.yardwrkrslts.DeleteEmptvehclInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_inoutInformation","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.RegistEmptvehclInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_inoutInformation","key":"IN_DS1"},{"action":"modified","id":"ds_save","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_save","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.wrkrslts.yardwrkrslts.UpdateInoutBasisCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_inoutInformation","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGate',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveWrkPlGateListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condGate","key":"IN_DS1"},{"id":"ds_gate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_gate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGateDtl',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveWrkPlGateDtlListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condGate","key":"IN_DS1"},{"id":"ds_gateDtl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_gateDtl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
 * 화 면 명 : 입고등록(상차대기등록 탭)
 * 메뉴경로 : 물류>작업실적>입출고/반출입(당사)>입고등록
 * ASIS경로 : /ds/op/wrkrslts/yardwrkrslts/op_302_01_04f.xml
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-02-04
 * 참고사항 : 1. ASIS : 출고예정 물량정보, 품명정보 정보 그리드의 규격 데이터는 PC로 넘어오는데 콤보박스 데이터와 맞지 않아도 가우스는 PC로 표시해줌
 *              TOBE : 웹스퀘어는 공백으로 표시해주기 때문에 inputType=text로 수정(2026.02.04 송소희 책임과 협의) 
 * 
 */

scwin.strBulkOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
scwin.clickTimer = null; // 클릭 타이머 변수

//hidden
scwin.hid_vehclNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // TOBE : 규격 데이터는 PC로 넘어오는데 콤보박스 데이터와 맞지 않아서 웹스퀘어는 공백으로 표시해주기 때문에 inputType=text로 수정
  // const codeOptions2 = [
  //     { // 출고예정 물량정보 그리드 : 규격 컬럼
  //         method: "getGridCombo",
  //         param1: "InoutEBC",
  //         param2: "retrieveSysCdTest_HanNongSection",
  //         param3: ["UNIT_001"],
  //         param4: false,
  //         compID: "gr_EmptvehclInIntend:qtyUnitCd"
  //     },
  //     { // 품명정보 정보 그리드 : 규격
  //         method: "getGridCombo",
  //         param1: "InoutEBC",
  //         param2: "retrieveSysCdTest_HanNongSection",
  //         param3: ["UNIT_001"],
  //         param4: false,
  //         compID: "gr_inoutInformation:qtyUnitCd"
  //     }
  // ];
  // $c.data.setGauceUtil(codeOptions2);

  $c.gus.cfDisableBtn($p, [ed_eqKndCd, btn_save, btn_delete, btn_zoneIndict, btn_pickingSlip]);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_vehclNm.setReadOnly(true);
    ed_copCoClntNm.setReadOnly(true);
    ica_ioDt.setReadOnly(true);
    ed_ioHh.setReadOnly(true);
    ed_vehclWt.setReadOnly(true);
    ed_drvNm.setReadOnly(true);
    ed_drvTelNo.setReadOnly(true);
    $c.gus.cfDisableObjects($p, [btn_srchMchtCd1, btn_srchMchtCd2, ed_vehclNo, ed_copCoClntNo]);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_detail = function () {
  $c.sbm.execute($p, sbm_detail);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 3:
      // 수요가 팝업
      udc_vehclNo.setSelectId("retrieveVehclList"); // XML상의 SELECT ID
      udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 800 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 협력업체 팝업
      udc_copCoClntNo.setSelectId("retrieveClntList"); // XML상의 SELECT ID
      udc_copCoClntNo.cfCommonPopUp(scwin.udc_copCoClntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      // 자가인경우 장비 팝업
      var trnsWrkIndictNo = ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "transWrkIndictNo");
      udc_vehclNo.setSelectId("retrieveVehclListNotJAGA"); // XML상의 SELECT ID
      udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , trnsWrkIndictNo // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 800 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.f_popupForJAGA = function () {
  var selfClsCd = ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "selfClsCd");
  if (selfClsCd.substring(0, 1) == "J") {
    //alert("자가차량인 경우는 차량정보를 직접입력하셔야 합니다.");
    //f_openCommonPopUp(3, em_vehclNo.getValue(), ed_vehclNm.value,'F','T');
  } else {
    scwin.f_openCommonPopUp(7, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'T', 'T');
  }
};
scwin.f_popupForJAGAForButton = function () {
  var selfClsCd = ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "selfClsCd");
  if (selfClsCd.substring(0, 1) == "J") {
    scwin.f_openCommonPopUp(3, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(7, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회시 EDIT 세팅
//-------------------------------------------------------------------------
scwin.f_editSet = function () {
  ed_vehclNo.setValue(ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "vehclShortCd"));
  ed_vehclNm.setValue(ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendVehcl"));
  ed_copCoClntNo.setValue(ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "copCoClntNo"));
  ed_copCoClntNm.setValue(ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "copCoClntNm"));
  ed_vehclWt.setValue(ds_inoutInformation.getCellData(ds_inoutInformation.getRowPosition(), "vehclWt"));
  scwin.hid_vehclNo = ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "ioVehclCd");
  ed_drvNm.setValue(ds_inoutInformation.getCellData(ds_inoutInformation.getRowPosition(), "drvNm"));
  ed_drvTelNo.setValue(ds_inoutInformation.getCellData(ds_inoutInformation.getRowPosition(), "drvTelNo"));
  if ($p.parent().rd_inQryCond.getValue() == 0) {
    ica_ioDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //현재일자
    ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
    gr_inoutInformation.setReadOnly("column", "blck", false);
  } else {
    ica_ioDt.setValue(ds_inoutInformation.getCellData(ds_inoutInformation.getRowPosition(), "ioDt"));
    ed_ioHh.setValue(ds_inoutInformation.getCellData(ds_inoutInformation.getRowPosition(), "ioHh"));
    gr_inoutInformation.setReadOnly("column", "blck", true);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if ($p.parent().ds_WrkPlInformation.getCellData(0, "stockMgntYn") == 1) {
    for (var i = 0; i < ds_inoutInformation.getRowCount(); i++) {
      if (ds_inoutInformation.getCellData(i, "intendQty") == 0) {
        $c.win.alert($p, "Zone이 할당되지 않은 품명이 존재합니다");
        return;
      }
    }
  }
  for (var i = 0; i < ds_inoutInformation.getRowCount(); i++) {
    ds_inoutInformation.setCellData(i, "ioVehclCd", scwin.hid_vehclNo);
    ds_inoutInformation.setCellData(i, "vehclNo", ed_vehclNm.getValue());
    ds_inoutInformation.setCellData(i, "copCoClntNo", ed_copCoClntNo.getValue());
    ds_inoutInformation.setCellData(i, "copCoClntNm", ed_copCoClntNm.getValue());
    ds_inoutInformation.setCellData(i, "eqKndCd", scwin.hid_eqKndCd);
    ds_inoutInformation.setCellData(i, "ioDt", ica_ioDt.getValue());
    ds_inoutInformation.setCellData(i, "ioHh", ed_ioHh.getValue());
    ds_inoutInformation.setCellData(i, "vehclWt", ed_vehclWt.getValue());
    ds_inoutInformation.setCellData(i, "drvNm", ed_drvNm.getValue());
    ds_inoutInformation.setCellData(i, "drvTelNo", ed_drvTelNo.getValue());

    // TOBE: 긴급, 상차지, 게이트 input 삭제하여 주석처리
    // ds_inoutInformation.setCellData(i, "gateNo", acb_gateNo.getValue());
    // ds_inoutInformation.setCellData(i, "gateDtl", acb_gateDtl.getValue());

    // if (cbx_emergency.getValue() == 1) {
    //     ds_inoutInformation.setCellData(i, "emgcYn", "1");
    // } else {
    //     ds_inoutInformation.setCellData(i, "emgcYn", "0");
    // }
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    if ($p.parent().rd_inQryCond.getValue() == 0) {
      $c.sbm.execute($p, sbm_save);
    } else {
      $c.sbm.execute($p, sbm_update);
    }
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let ret = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (ret) {
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.f_genInOutInformation = function (zoneStock, commSeq) {
  for (var i = 0; i < ds_inoutInformation.getRowCount(); i++) {
    if (ds_inoutInformation.getCellData(i, "odrNo") == zoneStock.getCellData(0, "odrNo") && ds_inoutInformation.getCellData(i, "commCd") == zoneStock.getCellData(0, "commCd") && ds_inoutInformation.getCellData(i, "commSeq") == commSeq && ds_inoutInformation.getRowStatus(i) != "C") {
      ds_inoutInformation.setCellData(i, "blck", zoneStock.getCellData(0, "blck"));
      ds_inoutInformation.setCellData(i, "blckQty", zoneStock.getCellData(0, "stockQty"));
      ds_inoutInformation.setCellData(i, "intendQty", zoneStock.getCellData(0, "outQty"));
      ds_inoutInformation.setCellData(i, "intendWt", zoneStock.getCellData(0, "outWt"));
      ds_inoutInformation.setCellData(i, "stockMgntNo", zoneStock.getCellData(0, "stockMgntNo"));

      //for(var j = 1 ; j < zoneStock.CountRow ; j++){
      for (var j = 0; j < zoneStock.getRowCount() - 1; j++) {
        //-1까지 도는지 테스트 해봐야함
        if (ds_inoutInformation.getRowCount() == i) {
          ds_inoutInformation.insertRow();
        } else {
          ds_inoutInformation.insertRow(i + j);
        }
        for (var k = 0; k < ds_inoutInformation.getTotalCol(); k++) {
          //ds_inoutInformation.ColumnValue(i + j, k) = ds_inoutInformation.ColumnValue(i, k);
          ds_inoutInformation.setCellData(i + j, k, ds_inoutInformation.getCellData(i, k));
        }
        ds_inoutInformation.setCellData(i + j, "blck", zoneStock.setCellData(j + 1, "blck"));
        ds_inoutInformation.setCellData(i + j, "blckQty", zoneStock.setCellData(j + 1, "stockQty"));
        ds_inoutInformation.setCellData(i + j, "intendQty", zoneStock.setCellData(j + 1, "outQty"));
        ds_inoutInformation.setCellData(i + j, "intendWt", zoneStock.setCellData(j + 1, "outWt"));
        ds_inoutInformation.setCellData(i + j, "stockMgntNo", zoneStock.setCellData(j + 1, "stockMgntNo"));
      }
    }
  }
};

//-------------------------------------------------------------------------
// Zone자동지정(버튼)
//-------------------------------------------------------------------------
scwin.f_znoeIndict = async function () {
  for (var i = 0; i < ds_inoutInformation.getRowCount(); i++) {
    if (ds_inoutInformation.getRowStatus(i) != "C") {
      ds_zoneStock.setJSON([]);
      var valueObject = new Object();

      //valueObject.prov = ds_zoneStock;
      valueObject.odrNo = ds_inoutInformation.getCellData(i, "odrNo");
      valueObject.commCd = ds_inoutInformation.getCellData(i, "commCd");
      valueObject.commSeq = ds_inoutInformation.getCellData(i, "commSeq");
      valueObject.wrkPlCd = $p.parent().ed_wrkPlCd.getValue();
      valueObject.wrkPlNm = $p.parent().ed_wrkPlNm.getValue();
      valueObject.odrQty = ds_inoutInformation.getCellData(i, "qty");
      valueObject.odrWt = ds_inoutInformation.getCellData(i, "wt");
      valueObject.repClntNo = ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "repClntNo");
      valueObject.type = "A";

      //201705 기존에 선택된 재고관리번호별 수량 체크를위해 intendQty intendWt stockMgntNo
      var array = new Array();
      var count = 0;
      if (i != 0) {
        for (var j = i; j > 1; j--) {
          // commcd가 같을때 이전에 값 넣어주기
          if (ds_inoutInformation.getCellData(j - 1, "commCd") == ds_inoutInformation.getCellData(i, "commCd")) {
            array[count] = new Array(3); // intendQty intendWt stockMgntNo
            array[count][0] = ds_inoutInformation.getCellData(j - 1, "intendQty");
            array[count][1] = ds_inoutInformation.getCellData(j - 1, "intendWt");
            array[count][2] = ds_inoutInformation.getCellData(j - 1, "stockMgntNo");
            count++;
          }
        }
      }
      valueObject.array = array;
      let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_05p.xml";
      let opts = {
        id: "op_302_01_05p",
        popupName: "Zone별 재고 현황",
        modal: true,
        type: "browserPopup",
        width: 1400,
        height: 750,
        title: "Zone별 재고 현황"
      };
      var returnValue = await $c.win.openPopup($p, win_url, opts, valueObject);
      ds_zoneStock.setJSON(returnValue);
      ds_zoneStock.modifyAllStatus("C");
      console.log("ds_zoneStock2=" + ds_zoneStock.getAllJSON());
      var commSeq = ds_inoutInformation.getCellData(i, "commSeq");
      if (ds_zoneStock != null) {
        for (var j = 0; j < ds_zoneStock.getRowCount(); j++) {
          if (ds_zoneStock.getCellData(j, "outQty") == 0) {
            ds_zoneStock.removeRow(j);
            j--;
          }
        }
        for (var j = 0; j < ds_inoutInformation.getRowCount(); j++) {
          if (ds_inoutInformation.getCellData(j, "odrNo") == ds_zoneStock.getCellData(0, "odrNo") && ds_inoutInformation.getCellData(j, "commCd") == ds_zoneStock.getCellData(0, "commCd") && ds_inoutInformation.getCellData(j, "commSeq") == commSeq && ds_inoutInformation.getRowStatus(j) == "C") {
            ds_inoutInformation.removeRow(j);
            j--;
          }
        }
        if (ds_zoneStock.getRowCount() > 0) {
          scwin.f_genInOutInformation(ds_zoneStock, commSeq);
        }
      }
    }
  }
};
scwin.f_OzReport = function () {
  let strOdiName = "";
  let strReportName = "";
  let strMode = "";
  let arrOdiParam = new Array();
  if ((ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo") == null || ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo") == "") && (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo") == null || ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo") == "")) {
    $c.win.alert($p, "선택한 건에 대하여 발행정보가 존재하지 않습니다.");
    return;
  }
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    strMode = "both";
  } else if (cbx_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    strMode = "print";
  } else if (cbx_previewCheck.getValue() == "1") {
    // 미리보기만 체크된 경우
    strMode = "preview";
  } else {
    strMode = "download";
  }
  if (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "repClntNo") == "000001") {
    //cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_02p.ozr", odiParam);
    strOdiName = "op_302_01_02p";
    strReportName = "/ds/op/op_302_01_02p.ozr";
    arrOdiParam = {
      IO_NO: ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo"),
      COSHIPPING_NO: ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo")
    };
    scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
    $c.sbm.execute($p, sbm_printPickigSleet);
  } else if (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "repClntNo") == "000008") {
    //cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_02p_02.ozr", odiParam);
    strOdiName = "op_302_01_02p_02";
    strReportName = "/ds/op/op_302_01_02p_02.ozr";
    arrOdiParam = {
      IO_NO: ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo"),
      COSHIPPING_NO: ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo"),
      IO_WRK_PL_CD: $p.parent().ed_wrkPlCd.getValue()
    };
    scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
  } else {
    $c.win.alert($p, "상차지시서는 당사가 사용가능한 기능이 아닙니다.");
  }
};
scwin.f_OzReport_sum = function () {
  if (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "repClntNo") != "000010") {
    $c.win.alert($p, "상차집계표는 당사가 사용가능한 기능이 아닙니다.");
    return;
  }
  if ((ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo") == null || ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo") == "") && (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo") == null || ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo") == "")) {
    $c.win.alert($p, "선택한 건에 대하여 발행정보가 존재하지 않습니다.");
    return;
  }
  let strMode = "";
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    strMode = "preview";
  } else if (cbx_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    strMode = "print";
  } else if (cbx_previewCheck.getValue() == "1") {
    // 미리보기만 체크된 경우
    strMode = "preview";
  } else {
    strMode = "download";
  }

  //cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_02p_01.ozr", odiParam);

  let strOdiName = "op_302_01_02p_01";
  let strReportName = "/ds/op/op_302_01_02p_01.ozr";
  let arrOdiParam = {
    IO_NO: ds_EmptvehclInIntend.getCellData(rowIndex, columnInfo)(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo"),
    COSHIPPING_NO: ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "coshippingNo"),
    ioClsCd: "E"
  };
  scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
};
scwin.setOzReport = function (strOdiName, strReportName, arrOdiParam, strMode) {
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: '',
    exportMode: 'view'
  };
  var data = {
    odiName: strOdiName,
    reportName: strReportName,
    odiParam: arrOdiParam,
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: strMode
    },
    formParam: {}
  };
  if (strMode == "both") {
    $c.ext.openOzReport($p, data, opts);
  } else if (strMode == "preview") {
    opts.printMode = 'silent';
    $c.ext.openOzReport($p, data, opts);
  } else if (strMode == "print") {
    $c.ext.printOzReport($p, data, opts);
  } else if (strMode == "download") {
    opts.type = "";
    opts.printMode = "";
    opts.exportFormat = "";
    opts.exportMode = "";
    $c.ext.printOzReport($p, data, opts);
  }
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
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
//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = function () {
  var row = ds_EmptvehclInIntend.getRowPosition();
  var programId = "sd_402_01_02t.jsp";
  if (row > -1) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    var v_odrNo = ds_EmptvehclInIntend.getCellData(row, "odrNo");
    let paramObj = {
      odrNo: v_odrNo,
      type: "retrieve"
    }; // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)        

    $c.win.openMenu($p, "벌크오더", scwin.strBulkOrderUrl, programId, paramObj);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더현황"));
    return;
  }
};

//-------------------------------------------------------------------------
//거래처에 따라 품명정보를 다르게 보여줌	
//-------------------------------------------------------------------------
scwin.f_changeTable = function (flag) {
  if (flag == 1) {
    gr_inoutInformation.setColumnVisible("coCd", true);
    gr_inoutInformation.setColumnVisible("tplSaleClsCd", true);
    gr_inoutInformation.setColumnVisible("bizLongCd", true);
    gr_inoutInformation.setColumnVisible("unitCd", true);
    gr_inoutInformation.setColumnVisible("tplPrdtKndCd", true);
    gr_inoutInformation.setColumnVisible("tplOrderClsCd", true);
  } else if (flag == 2) {
    gr_inoutInformation.setColumnVisible("coCd", false);
    gr_inoutInformation.setColumnVisible("tplSaleClsCd", false);
    gr_inoutInformation.setColumnVisible("bizLongCd", false);
    gr_inoutInformation.setColumnVisible("unitCd", false);
    gr_inoutInformation.setColumnVisible("tplPrdtKndCd", false);
    gr_inoutInformation.setColumnVisible("tplOrderClsCd", false);
  }
};

//-------------------------------------------------------------------------
// 상세조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_detail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows2.setValue(ds_inoutInformation.getRowCount());
  scwin.ds_inoutInformation_OnLoadCompleted();
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (cbx_autoPrint.getValue() == 1) {
    ds_EmptvehclInIntend.setCellData(ds_EmptvehclInIntend.getRowPosition(), "inIntendNo", ds_save.getCellData(0, "ioNo"));
    scwin.f_OzReport();
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);

  // TOBE : 저장 성공 후 품명정보 하단 정보들 초기화
  $c.gus.cfInitObjects($p, tbl_vehcl);
  $p.parent().scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 수정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_update_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_003);
  $p.parent().scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  $p.parent().scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 출고예정 물량정보 그리드 : I/O/D 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.impExpClsCdExp = function (data) {
  return $c.gus.decode($p, data, "I", "수입", "O", "수출", "D", "내수");
};

//-------------------------------------------------------------------------
// 출고예정 물량정보 그리드 : 예정물량Box 컬럼 customFormatter
//-------------------------------------------------------------------------
scwin.tplPackCnvrsnQtyExp = function (data, formatData, rowIdx, colIdx) {
  let tplPackCnvrsnQty = "";
  let inIntendQty = ds_EmptvehclInIntend.getCellData(rowIdx, "inIntendQty");
  if (parseInt(inIntendQty) == 0 || parseInt(data) == 0) {
    tplPackCnvrsnQty = "";
  } else {
    tplPackCnvrsnQty = parseInt(inIntendQty) / parseInt(data);
  }
  return tplPackCnvrsnQty;
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : 회사구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.coCdExp = function (data) {
  return $c.gus.decode($p, data, "P", "화학", "Q", "정밀");
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : 판매구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.tplSaleClsCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "농협", "2", "시판", "3", "농반", "4", "시반");
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : 공장구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.bizLongCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "인천공장", "2", "구미공장", "3", "전주공장");
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : 제품구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.tplPrdtKndCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "제품", "7", "비축", "8", "상품");
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : 발주구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.tplOrderClsCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "이월비축", "2", "당년공급");
};

//-------------------------------------------------------------------------
// 품명정보 그리드 : Box 컬럼 customFormatter
//-------------------------------------------------------------------------
scwin.tplPackCnvrsnQtyExp2 = function (data, formatData, rowIdx, colIdx) {
  let qty = ds_inoutInformation.getCellData(rowIdx, "qty");
  let tplPackCnvrsnQty = "";
  if (parseInt(qty) == 0 || parseInt(data) == 0) {
    tplPackCnvrsnQty = "";
  } else {
    tplPackCnvrsnQty = parseInt(qty) / parseInt(data);
  }
  return tplPackCnvrsnQty;
};

//-------------------------------------------------------------------------
// ASIS : ds_inoutInformation OnLoadCompleted
// sbm_detail 서브미션의 OUT_DS1
//-------------------------------------------------------------------------
scwin.ds_inoutInformation_OnLoadCompleted = function () {
  if (ds_inoutInformation.getRowCount() > 0) {
    //ds_inoutInformation.setRowPosition(0);
    gr_inoutInformation.setFocusedCell(0, 0, false); //edit : true
  }
  scwin.f_editSet();

  //거래처에 따라 품명정보를 다르게 보여줌
  if (ds_EmptvehclInIntend.getCellData(ds_EmptvehclInIntend.getRowPosition(), "repClntNo") == "000010") {
    scwin.f_changeTable(1);
  } else {
    scwin.f_changeTable(2);
  }
  ds_condGate.set("wrkPlCd", ds_inoutInformation.getCellData(0, "ioWrkPlCd"));
  $c.sbm.execute($p, sbm_retrieveGate);
};

//-------------------------------------------------------------------------
// ASIS : gr_EmptvehclInIntend OnClick
// 출고예정 물량정보 그리드 클릭
//-------------------------------------------------------------------------
scwin.gr_EmptvehclInIntend_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_condition.setCellData(0, "transWrkIndictNo", ds_EmptvehclInIntend.getCellData(rowIndex, "transWrkIndictNo"));
  ds_condition.setCellData(0, "odrNo", ds_EmptvehclInIntend.getCellData(rowIndex, "odrNo"));
  ds_condition.setCellData(0, "commSeq", ds_EmptvehclInIntend.getCellData(rowIndex, "commSeq"));
  ds_condition.setCellData(0, "wrkPathSeq", ds_EmptvehclInIntend.getCellData(rowIndex, "wrkPathSeq"));
  ds_condition.setCellData(0, "wrkStpSeq", ds_EmptvehclInIntend.getCellData(rowIndex, "wrkStpSeq"));
  ds_condition.setCellData(0, "coshippingNo", ds_EmptvehclInIntend.getCellData(rowIndex, "coshippingNo"));
  ds_condition.setCellData(0, "inNo", ds_EmptvehclInIntend.getCellData(rowIndex, "inIntendNo"));
  ds_condition.setCellData(0, "eqCd", ds_EmptvehclInIntend.getCellData(rowIndex, "inIntendVehcl"));

  //scwin.f_detail();

  if ($p.parent().rd_inQryCond.getValue() == "0") {
    $c.gus.cfEnableObjects($p, [btn_save, btn_zoneIndict, btn_pickingSlip]);
    if ($p.parent().ds_WrkPlInformation.getCellData(0, "stockMgntYn") == "0") {
      $c.gus.cfDisableObjects($p, [btn_zoneIndict, btn_pickingSlip]);
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_delete]);
  }
  ed_vehclNm.setReadOnly(false);
  ed_copCoClntNm.setReadOnly(false);
  ica_ioDt.setReadOnly(false);
  ed_ioHh.setReadOnly(false);
  ed_vehclWt.setReadOnly(false);
  ed_drvNm.setReadOnly(false);
  ed_drvTelNo.setReadOnly(false);
  $c.gus.cfEnableObjects($p, [btn_srchMchtCd1, btn_srchMchtCd2, ed_vehclNo, ed_copCoClntNo]);

  // TOBE : 서브미션 순서에 따라 버튼 비활성 처리가 제대로 동작하지 않아서 위치 변경
  // scwin.f_detail();  // oncelldblclick 이벤트 발화 안됨 > 딜레이 걸어서 처리

  // f_detail()을 즉시 호출하지 않고 딜레이 걸기
  clearTimeout(scwin.clickTimer);
  scwin.clickTimer = setTimeout(function () {
    scwin.f_detail();
  }, 300);
};

//-------------------------------------------------------------------------
// ASIS : gr_EmptvehclInIntend OnDblClick
// 출고예정 물량정보 그리드 더블 클릭
//-------------------------------------------------------------------------
scwin.gr_EmptvehclInIntend_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 더블클릭 시 클릭 이벤트의 타이머 취소 {f_detail() submission 취소}
  clearTimeout(scwin.clickTimer);
  if (columnId == "odrNo") {
    // 오더세부사항 조회 
    scwin.f_orderDetail();
  }
};

//-------------------------------------------------------------------------
// 품명정보 그리드 -입력 경고
//-------------------------------------------------------------------------
scwin.gr_inoutInformation_onkeydown = function (e) {
  if (e.keyCode == 189 || e.keyCode == 109) {
    $c.win.alert($p, "- 값을 입력할 수 없습니다.");
  }
};

//-------------------------------------------------------------------------
// 상차지 콤보박스 change
//  - TOBE: 긴급, 상차지, 게이트 input 삭제하여 주석처리
//-------------------------------------------------------------------------
// scwin.acb_gateNo_onchange = function (info) {
//     ds_condGate.set("gateNo", acb_gateNo.getValue());
//     $c.sbm.execute(sbm_retrieveGateDtl);
// };

//-------------------------------------------------------------------------
// 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_popupForJAGAForButton();
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_popupForJAGA();
};
scwin.udc_vehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_popupForJAGA();
};
scwin.udc_vehclNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vehclNo, ed_vehclNm);
};
//-------------------------------------------------------------------------
// 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 협력업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_copCoClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), 'T', 'T');
};
scwin.udc_copCoClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, ed_copCoClntNm, 5);
};
scwin.udc_copCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNm, ed_copCoClntNo, 5, false);
};
scwin.udc_copCoClntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_copCoClntNo, ed_copCoClntNm);
};
//-------------------------------------------------------------------------
// 협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 엑셀다운로드(그리드 X 태그는 타이틀로 표시되게 함)
//-------------------------------------------------------------------------
scwin.f_gridToExcel = function () {
  const options = {
    fileName: "출고예정물량정보.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "출고예정물량정보",
    startRowIndex: 1,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 13,
    text: "출고예정 물량정보",
    textAlign: "center",
    drawBorder: false,
    fontSize: "9px",
    fontWeight: "bold"
  }];
  $c.data.downloadGridViewExcel($p, gr_EmptvehclInIntend, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'출고예정 물량정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',gridDownYn:'Y',gridID:'gr_EmptvehclInIntend',gridDownFn:'scwin.f_gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_EmptvehclInIntend',style:'',id:'gr_EmptvehclInIntend',class:'wq_gvw',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_EmptvehclInIntend_oncellclick','ev:oncelldblclick':'scwin.gr_EmptvehclInIntend_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column1',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'화주<br/>오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'품명코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'규격',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'사업장',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'청구거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'I/O/D',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'예정일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'예정시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'예정차량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'D/O',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'수량<br/>단위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'중량<br/>단위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column25',value:'예정물량',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column39',value:'실적물량',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'작업<br/>지시번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'관련번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'합적<br/>관련번호',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'odrNo',displayMode:'label',textAlign:'left',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntOdrNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'comm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qtyUnitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'repClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bizLongNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'reqClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',displayMode:'label',textAlign:'left',displayFormatter:'scwin.impExpClsCdExp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'inIntendDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'inIntendHh',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inIntendVehcl',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'occpgrdNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'qtyUnitCd2',displayMode:'label',expression:'display(\'qtyUnitCd\')',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inIntendQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPackCnvrsnQty',displayMode:'label',textAlign:'right',customFormatter:'scwin.tplPackCnvrsnQtyExp',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'inIntendWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inIntendCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transWrkIndictNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'conNo',displayMode:'label',textAlign:'left',expression:'datalist(\'blNo\')+datalist(\'bookingNo\')+datalist(\'shipIndictNo\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingNo',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'품명정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_inoutInformation',style:'',id:'gr_inoutInformation',class:'wq_gvw',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:onkeydown':'scwin.gr_inoutInformation_onkeydown'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column1',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column13',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'구매거부구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'도센터구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'처리공장구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'회사<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'판매<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'공장<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'포장<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'제품<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'발주<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'송장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'수량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'중량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label',value:'수량'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column53',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column49',value:'입고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'ZONE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'장치수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'출고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'출고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'재고관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'false',textAlign:'left',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'comm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'qtyUnitCd2',displayMode:'label',expression:'display(\'qtyUnitCd\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqClntCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'reqClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplBuyRfslCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplStatecentCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplProcFctyCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coCd',displayMode:'label',displayFormatter:'scwin.coCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplSaleClsCd',displayMode:'label',displayFormatter:'scwin.tplSaleClsCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bizLongCd',displayMode:'label',displayFormatter:'scwin.bizLongCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'unitCd2',displayMode:'label',expression:'display(\'unitCd\')',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPrdtKndCd',displayMode:'label',displayFormatter:'scwin.tplPrdtKndCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplOrderClsCd',displayMode:'label',displayFormatter:'scwin.tplOrderClsCdExp'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'invoiceNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qtyUnitCd',displayMode:'label',readOnly:'false',textAlign:'left',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPackCnvrsnQty',displayMode:'label',customFormatter:'scwin.tplPackCnvrsnQtyExp2',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'ioNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blck',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blckQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'intendQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'intendWt',displayMode:'label',textAlign:'right',hidden:'true',displayFormat:'#,##0.0000',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockMgntNo',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_vehcl',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vehclNo',readOnlyCode:'true',nameId:'ed_vehclNm',btnId:'btn_srchMchtCd1',id:'udc_vehclNo',objTypeName:'Data','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'협력업체명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_copCoClntNo',nameId:'ed_copCoClntNm',btnId:'btn_srchMchtCd2',id:'udc_copCoClntNo',objTypeName:'Data',allowCharCode:'0-9',maxlengthCode:'6',readOnlyCode:'true','ev:onclickEvent':'scwin.udc_copCoClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_copCoClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_copCoClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기사명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w110',id:'ed_drvNm',placeholder:'',style:'',objType:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기사전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_drvTelNo',placeholder:'',style:'',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입고일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'group3',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarDisplayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd','ev:onclick':'scwin.f_openCalendar',id:'ica_ioDt',style:'',objType:'Data'}},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'w50 tac',dataType:'time',id:'ed_ioHh',style:'',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공차중량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w110  tar',id:'ed_vehclWt',placeholder:'',style:'',objType:'Data',maxlength:'3',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w110',id:'ed_eqKndCd',placeholder:'',style:'',objType:'Data',readOnly:'true',allowChar:'0-9',maxlength:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left vat'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_pickingSlip',type:'button',class:'btn ',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상차지시서(목록)'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_zoneIndict',type:'button',class:'btn ',userAuth:'C','ev:onclick':'scwin.f_znoeIndict'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Zone자동지정'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner tal flex-row',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_autoPrint',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장후바로출력'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{userAuth:'P','ev:onclick':'scwin.f_OzReport',style:'',id:'btn_pickingSleet',type:'button',class:'btn  white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상차지시서'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'P','ev:onclick':'scwin.f_OzReport_sum',style:'',id:'btn_pickingSum',type:'button',class:'btn  white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상차집계표'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_delete',type:'button',class:'btn',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]})