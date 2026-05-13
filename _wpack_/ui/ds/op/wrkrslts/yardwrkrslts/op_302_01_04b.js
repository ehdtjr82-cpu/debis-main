/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_04b.xml 214630 0ea8f36dd0a5cf3b13149ecf4d875640b44f8166faa5b26fbbd15e28c5707d60 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'outQryCond',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outNo',name:'출고관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDt',name:'출고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'PO번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtTo',name:'출고일자To',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'I/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendDt',name:'예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendHh',name:'예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'예정차량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioVehclCd',name:'입출고차량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'예정물량_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'예정물량_중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'예정물량_CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'실적물량_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적물량_중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적물량_CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipIndictNo',name:'출하지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doYn',name:'D/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntYn',name:'재고관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendNo',name:'입출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingRltNo',name:'합적관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioWrkPlNm',name:'입출고작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'출발도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlNm',name:'출발도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emptOutNo',name:'EMPTY반출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'작업지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coShippingType',name:'선사타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletAdptYn',name:'팔레트적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minimumAdptYn',name:'Minimum적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량 단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSaleClsCd',name:'3자물류판매구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPrdtKndCd',name:'3자물류제품종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplBuyRfslCd',name:'3자물류구매거부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplStatecentCd',name:'3자물류도센터코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplProcFctyCd',name:'3자물류처리공장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplQtyUnitCd',name:'3자물류수량단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'예정물량_BOX',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlCd',name:'부두장치장작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'납품처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkGps',name:'GPS선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd2',name:'수량 단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'고객관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_commInfo_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_commInfo_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioHh',name:'입출고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'출발도착작업장코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioVehclCd',name:'입출고차량코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'vehclWt',name:'차량중량',dataType:'number',defaultValue:'0',length:'11'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'shipIndictNo',name:'출하지시번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ioIntendNo',name:'입출고예정번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'coshippingRltNo',name:'합적관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntYn',name:'재고관리여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출물류부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'emptOutNo',name:'EMPTY반출번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'mobileIndictYn',name:'모바일지시여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coShippingType',name:'선사타입',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'paletAdptYn',name:'팔레트적용여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'minimumAdptYn',name:'Minimum적용여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'tplSaleClsCd',name:'3자물류판매구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplPrdtKndCd',name:'3자물류제품종류',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplBuyRfslCd',name:'3자물류구매거부코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplStatecentCd',name:'3자물류도센터코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplProcFctyCd',name:'3자물류처리공장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'고객오더번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'number',defaultValue:'0',length:'6'}},{T:1,N:'w2:column',A:{id:'tplQtyUnitCd',name:'3자물류수량단위코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'tplIoClsCd',name:'3자물류입출고구분코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'boxQty',name:'BOX 수량',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'strOdrNo',name:'보관오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'strCommSeq',name:'보관품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'strWrkPathSeq',name:'보관작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'strWrkStpSeq',name:'보관작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlCd',name:'부두장치장작업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'nonCtrlRsn',name:'미관제사유',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'chkGps',name:'GPS선택',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'hidDrvTelNo',name:'운전자전화번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'driveUrl',name:'driveUrl',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'입고오더번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'inOdrCommSeq',name:'입고품명순번',dataType:'text',defaultValue:'',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockMgnt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_stockMgnt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'ioPosSeq',name:'입출고위치순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'상태',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'LOT번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'재고수량_수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'재고수량_중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'재고수량_CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'blck',name:'BLOCK',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bay',name:'BAY',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rw',name:'ROW',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'tier',name:'TIER',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'화주',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'관련번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'prodDt',name:'생산일',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량_수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'outWt',name:'출고수량_중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'outCbm',name:'출고수량_CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'Zone',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'재고수량_재고Box',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty2',name:'출고수량_재고Box',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_palletInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'paletSeq',name:'팔레트순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'paletKndCd',name:'팔레트종류코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'paletQty',name:'팔레트수량',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',defaultValue:'0',length:'3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_returnOZvar',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_paletCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paletCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_updateSndClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntOdrNo',name:'고객오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pdaRegId',name:'PDA등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchOutInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo String 11',name:'ioNo',dataType:'입출고번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'11'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd String 5',name:'ioWrkPlCd',dataType:'입출고작업장코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'5'}},{T:1,N:'w2:column',A:{id:'ioClsCd String 1',name:'ioClsCd',dataType:'입출고구분코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'1'}},{T:1,N:'w2:column',A:{id:'ioDt String 8',name:'ioDt',dataType:'입출고일',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'8'}},{T:1,N:'w2:column',A:{id:'ioHh String 4',name:'ioHh',dataType:'입출고시간',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'4'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd String 5',name:'dptArvWrkPlCd',dataType:'출발도착작업장코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'5'}},{T:1,N:'w2:column',A:{id:'commCd String 8',name:'commCd',dataType:'품명코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'8'}},{T:1,N:'w2:column',A:{id:'ioVehclCd String 6',name:'ioVehclCd',dataType:'입출고차량코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'6'}},{T:1,N:'w2:column',A:{id:'vehclNo String 12',name:'vehclNo',dataType:'차량번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'12'}},{T:1,N:'w2:column',A:{id:'vehclWt Decimal 11',name:'vehclWt',dataType:'차량중량',defaultValue:'Integer',encYN:'',ignoreStatus:'',importFormatter:'11'}},{T:1,N:'w2:column',A:{id:'clntMgntNo String 20',name:'clntMgntNo',dataType:'거래처관리번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'20'}},{T:1,N:'w2:column',A:{id:'impExpClsCd String 1',name:'impExpClsCd',dataType:'수입수출구분코드',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'1'}},{T:1,N:'w2:column',A:{id:'copCoClntNo String 6',name:'copCoClntNo',dataType:'협력업체거래처번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'6'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo String 8',name:'cvsslMgntNo',dataType:'본선관리번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'8'}},{T:1,N:'w2:column',A:{id:'blNo String 20',name:'blNo',dataType:'B/L번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'20'}},{T:1,N:'w2:column',A:{id:'bookingNo String 20',name:'bookingNo',dataType:'BOOKING번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'20'}},{T:1,N:'w2:column',A:{id:'shipIndictNo String 20',name:'shipIndictNo',dataType:'출하지시번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'20'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo String 12',name:'transWrkIndictNo',dataType:'운송작업지시번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'12'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq Integer 4',name:'transRsltsSeq',dataType:'운송실적순번',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'4'}},{T:1,N:'w2:column',A:{id:'odrNo String 13',name:'odrNo',dataType:'오더번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'13'}},{T:1,N:'w2:column',A:{id:'commSeq Integer 3',name:'commSeq',dataType:'품명순번',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'3'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq Integer 3',name:'wrkPathSeq',dataType:'작업경로순번',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq Integer 3',name:'wrkStpSeq',dataType:'작업단계순번',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'3'}},{T:1,N:'w2:column',A:{id:'ioIntendNo String 11',name:'ioIntendNo',dataType:'입출고예정번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'11'}},{T:1,N:'w2:column',A:{id:'invoiceNo String 20',name:'invoiceNo',dataType:'송장번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'20'}},{T:1,N:'w2:column',A:{id:'stockMgntYn Decimal 1',name:'stockMgntYn',dataType:'재고관리여부',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'1'}},{T:1,N:'w2:column',A:{id:'commNm String 255',name:'commNm',dataType:'품명',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNo String 255',name:'bilgClntNo',dataType:'청구거래처번호',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'255'}},{T:1,N:'w2:column',A:{id:'bilgClntNm String 255',name:'bilgClntNm',dataType:'청구거래처명',defaultValue:'text',encYN:'',ignoreStatus:'',importFormatter:'255'}},{T:1,N:'w2:column',A:{id:'qty Decimal 15',name:'qty',dataType:'수량',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'15'}},{T:1,N:'w2:column',A:{id:'wt Decimal 18',name:'wt',dataType:'중량',defaultValue:'number',encYN:'0',ignoreStatus:'',importFormatter:'18'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveOutInfo',action:'/ds.op.wrkrslts.yardwrkrslts.RegistOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_commInfo","key":"IN_DS1"},{"id":"ds_palletInfo","key":"IN_DS2"},{"id":"ds_stockMgnt","key":"IN_DS3"},{"id":"ds_returnOZvar","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_returnOZvar","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOutInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOutIntendInfo',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveOutIntendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOutIntendInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOutInfo',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchOutInfo","key":"IN_DS1"},{"id":"ds_commInfo","key":"OUT_DS1"},{"id":"ds_stockMgnt","key":"OUT_DS2"},{"id":"ds_palletInfo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_commInfo","key":"OUT_DS1"},{"id":"ds_stockMgnt","key":"OUT_DS2"},{"id":"ds_palletInfo","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOutInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveStockInfo',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveOutIntendStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_commInfo","key":"IN_DS1"},{"id":"ds_stockMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveStockInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOutInfo',action:'/ds.op.wrkrslts.yardwrkrslts.DeleteOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_commInfo","key":"IN_DS1"},{"id":"ds_stockMgnt","key":"IN_DS2"},{"id":"ds_palletInfo","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteOutInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateOutInfo',action:'/ds.op.wrkrslts.yardwrkrslts.UpdateOutBasisCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_commInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateOutInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_printGDN',action:'/ds.op.wrkrslts.yardwrkrslts.PrintInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_commInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_printGDN_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateSndClsCd',action:'/ds.op.wrkrslts.yardwrkrslts.UpdateSndClsCdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_updateSndClsCd","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateSndClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_paletCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_paletCd',target:'data:json,{"id":"ds_paletCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/OpConstants.js',type:'text/javascript',scopeVariable:'OpConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
 * 화 면 명 : 출고등록
 * 메뉴경로 : 물류>작업실적>입출고/반출입(당사)>출고등록
 * ASIS경로 : /ds/op/wrkrslts/yardwrkrslts/op_302_01_04b.jsp
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-02-04
 * 참고사항 : 1. ASIS : 출고 예정정보, 품명정보, 재고정보 그리드의 규격 데이터는 PC로 넘어오는데 콤보박스 데이터와 맞지 않아도 가우스는 PC로 표시해줌
 *              TOBE : 웹스퀘어는 공백으로 표시해주기 때문에 inputType=text로 수정(2026.02.04 송소희 책임과 협의) 
 * 
 */
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.bufferWt = 0.5;
scwin.hid_outQryCond = "";
scwin.hid_ioNo = "";
scwin.hid_stockMgntYn = "";
scwin.hid_wrkPlCd = "";
scwin.hid_wrkPlCdNm = "";
scwin.hid_commCd = "";
scwin.hid_commNm = "";
scwin.hid_eqCd = "";
scwin.hid_eqNm = "";
scwin.hid_arvWrkPlCd = "";
scwin.hid_arvWrkPlNm = "";
scwin.hid_bilgClntNo = "";
scwin.hid_bilgClntNm = "";
scwin.hid_vehclShortCd = "";
scwin.hid_vehclNo = "";
scwin.hid_copCoClntNo = "";
scwin.hid_copCoClntNm = "";
scwin.hid_ioVehclCd = "";
//scwin.hid_drvTelNo = ""; 사용되지 않음
//scwin.ed_bilgClntNo = ""; 사용되지 않음
//scwin.txt_bilgClntNm = ""; 사용되지 않음
//scwin.ed_outNo = ""; 사용되지 않음

scwin.hid_useFilter = "";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP214",
    compID: "gr_stockMgnt:commStsCd"
  } //재고정보 그리드 : 상태
  ];
  $c.data.setCommonCode($p, codeOptions);

  // TOBE : 규격 데이터는 PC로 넘어오는데 콤보박스 데이터와 맞지 않아서 웹스퀘어는 공백으로 표시해주기 때문에 inputType=text로 수정
  // const codeOptions2 = [
  //     { // 출고 예정정보 그리드 : 규격
  //         method: "getGridCombo",
  //         param1: "InoutEBC",
  //         param2: "retrieveSysCdTest_HanNongSection",
  //         param3: ["UNIT_001"],
  //         param4: false,
  //         compID: "gr_outInfo:qtyUnitCd"
  //     },
  //     { // 품명정보 그리드 : 규격
  //         method: "getGridCombo",
  //         param1: "InoutEBC",
  //         param2: "retrieveSysCdTest_HanNongSection",
  //         param3: ["UNIT_001"],
  //         param4: false,
  //         compID: "gr_commInfo:qtyUnitCd"
  //     },
  //     { // 재고정보 정보 그리드 : 규격
  //         method: "getGridCombo",
  //         param1: "InoutEBC",
  //         param2: "retrieveSysCdTest_HanNongSection",
  //         param3: ["UNIT_001"],
  //         param4: false,
  //         compID: "gr_stockMgnt:qtyUnitCd"
  //     }
  // ];
  // $c.data.setGauceUtil(codeOptions2);

  dma_paletCd.set("grpCd", "OP223");
  $c.sbm.execute($p, sbm_paletCd);

  // 일단 필터를 사용 하도록 셋팅
  scwin.hid_useFilter = "1";

  //20170517 버튼활성화
  if (scwin.userId == "herekjs" || scwin.userId == "origin" || scwin.userId == "minstar9" || scwin.userId == "snowmoon") {
    btn_updateSndClsCd.show("");
  } else {
    btn_updateSndClsCd.hide();
  }
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    scwin.f_SetInitCondVal();
    cbx_alngvsslStockYn.setDisabled(true);
    $c.gus.cfInitObjects($p, tbl_vehclInfo, [ica_ioDt, ed_ioHh]);
    ed_vehclNo.setReadOnly(true);
    ed_copCoClntNm.setReadOnly(true);
    ed_drvNm.setReadOnly(true);
    ed_drvTelNo.setReadOnly(true);
    ed_vehclWt.setReadOnly(true);
    //cbx_alngvsslStockYn.readOnly=true; //TOBE : disabled 해놓았기에 readOnly 할필요 없고 readOnly 속성은 없음
    ed_drvNm.setReadOnly(true);
    $c.gus.cfDisableObjects($p, [btn_srchMchtMidCd1, btn_srchMchtMidCd2, ed_vehclShortCd, ed_copCoClntNo]);
    if (scwin.userId == "kh1472")
      //7W01 건화물류
      {
        ed_wrkPlCd.setValue("7W01");
        ed_wrkPlCdNm.setValue("보랄대구창고");
        $c.gus.cfDisableObjects($p, [ed_wrkPlCd, ed_wrkPlCdNm]);
      }

    //테스트 데이터
    //ed_outDt.setValue("20250101");
    //ed_outDtTo.setValue("20251231");
    //ed_wrkPlCd.setValue("4W05")
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 검색조건 초기화 & 초기값 세팅
//-------------------------------------------------------------------------
scwin.f_SetInitCondVal = function () {
  ds_srchCond.setEmptyValue();
  scwin.f_changeFormatStockMgnt(1);
  scwin.f_Reset(tbl_srchCond);
  rd_outQryCond.setSelectedIndex(0);
  scwin.hid_outQryCond = rd_outQryCond.getValue();
  scwin.f_controlComp(0);
  ed_outDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_outDtTo.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_ioDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
};

//-------------------------------------------------------------------------
// 조회구분에 따라 컴포넌트 설정 변경
//-------------------------------------------------------------------------
scwin.f_controlComp = function (dsRow) {
  if (dsRow > -1) {
    if (ds_outInfo.getCellData(dsRow, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) scwin.f_changeFormatStockMgnt(parseInt(ds_outInfo.getCellData(dsRow, "stockMgntYn")) * 3);else scwin.f_changeFormatStockMgnt(parseInt(ds_outInfo.getCellData(dsRow, "stockMgntYn")));
  }
  if (rd_outQryCond.getValue() == "1") {
    //cfDisableObjects([ed_outNo,btn_delete]);
    $c.gus.cfDisableObjects($p, [btn_delete]);
    $c.gus.cfEnableObjects($p, [btn_palletAddRow, btn_palletDelete, btn_palletCancel]);
    tbx_outInfoNm.setValue("출고 예정정보");
    gr_outInfo.setHeaderValue("ioIntendDtHd", "예정<br/>일자");
    gr_outInfo.setHeaderValue("ioIntendHhHd", "예정<br/>시간");
    //gr_outInfo.setHeaderValue("vehclShortCd", "예정<br/>차량"); 그리드에 없는 컬럼

    if (parseInt(ds_outInfo.getCellData(dsRow, "stockMgntYn")) == 0) {
      grp_buttonArea.show("");
    } else {
      grp_buttonArea.hide();
    }
    gr_stockMgnt.setReadOnly("grid", false);
    gr_commInfo.setReadOnly("grid", false);
    gr_palletInfo.setReadOnly("grid", false);
    $c.gus.cfEnableObjects($p, [btn_save]);
  } else if (rd_outQryCond.getValue() == "2") {
    //enable에서 ed_outNo 제외함
    $c.gus.cfDisableObjects($p, [btn_palletAddRow, btn_palletDelete, btn_palletCancel, btn_delete]);
    tbx_outInfoNm.setValue("출고 정보");
    gr_outInfo.setHeaderValue("ioIntendDtHd", "출고<br/>일자");
    gr_outInfo.setHeaderValue("ioIntendHhHd", "출고<br/>시간");
    //gr_outInfo.setHeaderValue("vehclShortCd", "출고<br/>차량"); 그리드에 없는 컬럼

    grp_buttonArea.hide();
    gr_stockMgnt.setReadOnly("grid", true);
    gr_commInfo.setReadOnly("grid", true);
    gr_palletInfo.setReadOnly("grid", true);
    $c.gus.cfDisableObjects($p, [btn_save]);
  }
  ed_vehclShortCd.setValue("");
  scwin.hid_vehclShortCd = "";
  ed_vehclNo.setValue("");
  scwin.hid_vehclNo = "";
  ed_copCoClntNo.setValue("");
  scwin.hid_copCoClntNo = "";
  ed_copCoClntNm.setValue("");
  scwin.hid_copCoClntNm = "";
  tbx_cartype.setValue("");
  scwin.hid_ioVehclCd = "";
  scwin.hid_drvTelNo = "";
  ica_ioDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
  ed_vehclWt.setValue("");
  cbx_alngvsslStockYn.setValue("");
};

// 재고정보 포멧 변경
scwin.f_changeFormatStockMgnt = function (div) {
  if (div == 1) {
    gr_stockMgnt.setColumnVisible("shipwgtPos", true);
    gr_stockMgnt.setColumnVisible("commStsCd", true);
    gr_stockMgnt.setColumnVisible("commStsNm", true);
    gr_stockMgnt.setColumnVisible("rsltsQty", true); //재고수량-수량
    gr_stockMgnt.setColumnVisible("tplPackCnvrsnQty", true); //재고수량-재고BOX
    gr_stockMgnt.setColumnVisible("rsltsWt", true);
    gr_stockMgnt.setColumnVisible("rsltsCbm", true);
    gr_stockMgnt.setColumnVisible("rsltsQty", true);
    gr_stockMgnt.setColumnVisible("rsltsWt", true);
    gr_stockMgnt.setColumnVisible("rsltsCbm", true);
    gr_stockMgnt.setReadOnly("column", "commStsCd", true);
  } else if (div == 0) {
    gr_stockMgnt.setColumnVisible("shipwgtPos", false);
    gr_stockMgnt.setColumnVisible("commStsCd", false);
    gr_stockMgnt.setColumnVisible("commStsNm", false);
    gr_stockMgnt.setColumnVisible("rsltsQty", false); //재고수량-수량
    gr_stockMgnt.setColumnVisible("tplPackCnvrsnQty", false); //재고수량-재고BOX
    gr_stockMgnt.setColumnVisible("rsltsWt", false);
    gr_stockMgnt.setColumnVisible("rsltsCbm", false);
    gr_stockMgnt.setColumnVisible("qtyUnitCd", true);
    gr_stockMgnt.setColumnVisible("rltNo", true);
    gr_stockMgnt.setColumnVisible("tplPackCnvrsnQty2", true);
  } else if (div == 3) {
    gr_stockMgnt.setColumnVisible("shipwgtPos", true);
    gr_stockMgnt.setColumnVisible("commStsCd", true);
    gr_stockMgnt.setColumnVisible("commStsNm", true);
    gr_stockMgnt.setColumnVisible("rsltsQty", false); //재고수량-수량
    gr_stockMgnt.setColumnVisible("tplPackCnvrsnQty", false); //재고수량-재고BOX
    gr_stockMgnt.setColumnVisible("rsltsWt", false);
    gr_stockMgnt.setColumnVisible("rsltsCbm", false);
    gr_stockMgnt.setColumnDefaultValue("qtyUnitCd", false);
    gr_stockMgnt.setColumnDefaultValue("rltNo", false);
    gr_stockMgnt.setColumnDefaultValue("tplPackCnvrsnQty2", false);
    gr_stockMgnt.setReadOnly("column", "commStsCd", true);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_Reset = function (obj) {
  if (obj != null) {
    /*
    for (i = 0; i < obj.all.length; i++) {
        if (obj.all.item(i).tagName == "INPUT") {
            if (obj.all.item(i).type.toUpperCase() != "BUTTON")
                obj.all.item(i).getValue() = "";
        } else if (obj.all.item(i).tagName == "OBJECT") {
            obj.all.item(i).getValue() = "";
        } else if (obj.all.item(i).tagName == "SPAN") {
            obj.all.item(i).innerText = "";
        }
    }
    */
    $c.gus.cfInitObjects($p, tbl_srchCond, null);
  } else {
    ds_outInfo.setJSON([]);
    ds_commInfo.setJSON([]);
    ds_palletInfo.setJSON([]);
    ds_stockMgnt.setJSON([]);
    ed_vehclShortCd.setValue("");
    scwin.hid_vehclShortCd = "";
    ed_vehclNo.setValue("");
    scwin.hid_vehclNo = "";
    ed_copCoClntNo.setValue("");
    scwin.hid_copCoClntNo = "";
    ed_copCoClntNm.setValue("");
    scwin.hid_copCoClntNm = "";
    tbx_cartype.setValue("");
    scwin.hid_ioVehclCd = "";
    scwin.hid_drvTelNo = "";
    ica_ioDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
    ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
    ed_vehclWt.setValue("");
    cbx_alngvsslStockYn.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필터 사용 하도록 셋팅
  scwin.hid_useFilter = "1";
  let ret = await $c.gus.cfValidate($p, [tbl_srchCond]);
  if (!ret) return;
  if (!$c.gus.cfIsAfterDate($p, ed_outDt.getValue(), ed_outDtTo.getValue())) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_039)); // 시작일자가 종료일자 이전이어야 합니다.
    ed_outDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieveOutIntendInfo);
  ed_vehclNo.setReadOnly(true);
  ed_copCoClntNm.setReadOnly(true);
  ed_drvNm.setReadOnly(true);
  ed_drvTelNo.setReadOnly(true);
  ed_vehclWt.setReadOnly(true);
  //cbx_alngvsslStockYn.readOnly=true;

  $c.gus.cfDisableObjects($p, [btn_srchMchtMidCd1, btn_srchMchtMidCd2, ed_vehclShortCd, ed_copCoClntNo]);
};

//-------------------------------------------------------------------------
// 송장발행
//-------------------------------------------------------------------------
scwin.f_PrintInvoice = async function () {
  await $c.win.alert($p, "송장발행은 처리 예정입니다. 현재 미확정 상태");
};

//-------------------------------------------------------------------------
// 반출승인내역 조회
//-------------------------------------------------------------------------
scwin.f_RetCarryoutAdmit = async function () {
  await $c.win.alert($p, "반출승인내역은 처리 예정입니다. 현재 미확정 상태");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    if (rd_outQryCond.getValue() == "1") {
      scwin.f_SaveOutIntendInfo();
    } else if (rd_outQryCond.getValue() == "2") {
      scwin.f_UpdateOutInfo();
    }
  } //if
};

//-------------------------------------------------------------------------
// 반출신고
//-------------------------------------------------------------------------
scwin.f_outbound = async function () {
  if (ds_commInfo.getRowCount() < 1) {
    await $c.win.alert($p, "조회먼저 하세요!");
    return;
  }
  let row = ds_commInfo.getRowPosition();
  let win_url = "";
  let data = "";
  if (ds_commInfo.getCellData(row, "pierYardWrkPlCd") == null || ds_commInfo.getCellData(row, "pierYardWrkPlCd").trim() == '') {
    win_url = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_17b.xml";
    data = {
      odrNo: ds_commInfo.getCellData(row, "odrNo"),
      mrn: ds_commInfo.getCellData(row, "mrn"),
      msn: ds_commInfo.getCellData(row, "msn"),
      hsn: ds_commInfo.getCellData(row, "hsn"),
      blNo: ds_commInfo.getCellData(row, "blNo"),
      wrkPlCd: ds_srchCond.get("wrkPlCd"),
      wrkPlNm: ed_wrkPlCdNm.getValue(),
      cntrBulk: "B",
      openFlag: 1
    };
  } else {
    win_url = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_17b.xml";
    data = {
      odrNo: ds_commInfo.getCellData(row, "odrNo"),
      mrn: ds_commInfo.getCellData(row, "mrn"),
      msn: ds_commInfo.getCellData(row, "msn"),
      hsn: ds_commInfo.getCellData(row, "hsn"),
      blNo: ds_commInfo.getCellData(row, "blNo"),
      wrkPlCd: ds_commInfo.getCellData(row, "wrkPlCd"),
      wrkPlNm: "",
      cntrBulk: "B",
      openFlag: 1
    };
  }
  let opts = {
    id: "POPUPWIN",
    popupName: "세관 반출 신고 등록",
    modal: false,
    type: "browserPopup",
    width: 1100,
    height: 650,
    title: "세관 반출 신고 등록"
  };
  $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
//하선지 반입신고
//------------------------------------------------------------------------- 
scwin.f_outbound2 = async function () {
  if (ds_commInfo.getRowCount() < 1) {
    await $c.win.alert($p, "조회먼저 하세요!");
    return;
  }
  var row = ds_commInfo.getRowPosition();
  var win_url = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.xml";
  let data = {
    odrNo: ds_commInfo.getCellData(row, "odrNo"),
    mrn: ds_commInfo.getCellData(row, "mrn"),
    msn: ds_commInfo.getCellData(row, "msn"),
    hsn: ds_commInfo.getCellData(row, "hsn"),
    blNo: ds_commInfo.getCellData(row, "blNo"),
    wrkPlCd: ds_commInfo.getCellData(row, "pierYardWrkPlCd"),
    wrkPlNm: "",
    cntrBulk: "B",
    //컨테이너/벌크여부
    openFlag: 1
  };
  let opts = {
    id: "POPUPWIN",
    popupName: "세관 반입 신고 등록",
    modal: false,
    type: "browserPopup",
    width: 1100,
    height: 650,
    title: "세관 반입 신고 등록"
  };
  $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 출고 예정 정보 저장
//-------------------------------------------------------------------------
scwin.f_SaveOutIntendInfo = async function () {
  let ret = "";
  let ret2 = "";

  //010-0000-0000로 보낼 경우 문자 스팸처리가 될 수 있어 필수 값으로 변경 20190603 sh1004dd
  for (var i = 0; i < ds_outInfo.getRowCount(); i++) {
    if (ed_drvTelNo.getValue() == "") {
      await $c.win.alert($p, "차량기사의 정확한 연락처를 입력해주세요.");
      return;
    } else {
      ds_commInfo.setCellData(i, "drvTelNo", ed_drvTelNo.getValue());
      //차량번호 암호화 20200924 정소희
      ds_commInfo.setCellData(i, "hidDrvTelNo", $c.gus.Encrypt($p, ed_drvTelNo.getValue(), "passwd", 128));

      /* var driveUrl = "http://172.20.16.32:8082/mobile/main/home2.html?vehclCdmaNo=" +ds_commInfo.getCellData(i,"hidDrvTelNo")
      +"&wrkIndictNo=" + ds_commInfo.getCellData(i,"transWrkIndictNo"); */
      var driveUrl = "http://mobilentis.dongwon.com/mobile/main/home2.html?vehclCdmaNo" + ds_commInfo.getCellData(i, "hidDrvTelNo") + "&wrkIndictNo = " + ds_commInfo.getCellData(i, "transWrkIndictNo");
      ds_commInfo.setCellData(i, "driveUrl", driveUrl);
    }
  }
  for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
    if (ds_commInfo.getCellData(i, "chkGps") == 'N' && ed_nonCtrlRsn.getValue() == '' && (ed_wrkPlCd.getValue() == '3M01' || ed_wrkPlCd.getValue() == '5M01')) {
      await $c.win.alert($p, "미관제사유를 입력하세요");
      return;
    }
  }
  if (ds_stockMgnt.getRowCount() == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "재고정보"));
    return;
  }

  // 필터 사용 X
  scwin.hid_useFilter = "0";
  // ds_stockMgnt.UseFilter = true;
  // ds_stockMgnt.filter();
  // ds_stockMgnt.UseFilter = false;
  scwin.ds_stockMgnt_OnFilter();

  // 화주가 신대양일 경우 Roll No. 입력여부 확인
  if (ds_commInfo.getCellData(0, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG && ds_commInfo.getCellData(0, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_DAEYANG && ds_commInfo.getCellData(0, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_SIWHA && ds_commInfo.getCellData(0, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_BANWOL
  //&& ds_commInfo.getCellData(0, "ioWrkPlCd")!="4W147" &&
  //ds_commInfo.getCellData(0, "ioWrkPlCd")!="4W148"
  )
    // 안산 공장일 경우 롤번호 입력 안함
    {
      for (var row = 0; row < ds_stockMgnt.getRowCount(); row++) {
        if (ds_stockMgnt.getCellData(row, "clntMgntNo") == "") {
          // 필터 사용 O
          scwin.hid_useFilter = "1";
          // ds_stockMgnt.UseFilter = true;
          // ds_stockMgnt.filter();
          // ds_stockMgnt.UseFilter = false;
          scwin.ds_stockMgnt_OnFilter();
          await $c.win.alert($p, "Roll 번호를 입력해 주십시요");
          return;
        }
      }
    }
  for (var row = 0; row < ds_stockMgnt.getRowCount(); row++) {
    if (ds_stockMgnt.getCellData(row, "clntMgntNo") == "") {
      // 필터 사용 O
      scwin.hid_useFilter = "1";
      // ds_stockMgnt.UseFilter = true;
      // ds_stockMgnt.filter();
      // ds_stockMgnt.UseFilter = false;
      scwin.ds_stockMgnt_OnFilter();
      await $c.win.alert($p, row + 1 + "번째 열 Lot 번호를 입력하세요");
      return;
    }
  }
  if (scwin.hid_stockMgntYn == 0) {
    // 재고관리 안하는 경우의 수량검사
    for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
      if (ds_stockMgnt.getCellData(i, "outQty") == 0 || ds_stockMgnt.getCellData(i, "outWt") == 0) {
        // 필터 사용 O
        scwin.hid_useFilter = "1";
        // ds_stockMgnt.UseFilter = true;
        // ds_stockMgnt.filter();
        // ds_stockMgnt.UseFilter = false;
        scwin.ds_stockMgnt_OnFilter();
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
        //gr_stockMgnt.focus();
        //gr_stockMgnt.SetColumn("outQty");
        gr_stockMgnt.setFocusedCell(i, "outQty", false);
        return;
      }
    }
    if (scwin.f_checkNotStockInfo()) {
      // 필터 사용 O
      scwin.hid_useFilter = "1";
      // ds_stockMgnt.UseFilter = true;
      // ds_stockMgnt.filter();
      // ds_stockMgnt.UseFilter = false;
      scwin.ds_stockMgnt_OnFilter();
      return;
    }
  } else if (scwin.hid_stockMgntYn == 1) {
    // 재고관리 하는 경우의 수량검사

    if (ds_commInfo.getModifiedIndex().length == 0) {
      // 필터 사용 O
      scwin.hid_useFilter = "1";
      // ds_stockMgnt.UseFilter = true;
      // ds_stockMgnt.filter();
      // ds_stockMgnt.UseFilter = false;
      scwin.ds_stockMgnt_OnFilter();
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "출고수량"));
      //ds_stockMgnt.setRowPosition(0);
      //gr_stockMgnt.focus();
      //gr_stockMgnt.SetColumn("outQty");
      gr_stockMgnt.setFocusedCell(i, "outQty", false);
      return;
    }
    let chk = await scwin.f_checkStockInfo();
    if (chk) {
      // 필터 사용 O
      scwin.hid_useFilter = "1";
      // ds_stockMgnt.UseFilter = true;
      // ds_stockMgnt.filter();
      // ds_stockMgnt.UseFilter = false;
      scwin.ds_stockMgnt_OnFilter();
      return;
    }
  }
  if ($c.gus.cfIsNull($p, ed_vehclNo.getValue())) {
    // 필터 사용 O
    scwin.hid_useFilter = "1";
    // ds_stockMgnt.UseFilter = true;
    // ds_stockMgnt.filter();
    // ds_stockMgnt.UseFilter = false;
    scwin.ds_stockMgnt_OnFilter();
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "차량번호"));
    ed_vehclNo.focus();
    return;
  }
  ret = await $c.gus.cfValidate($p, ica_ioDt);
  ret2 = await $c.gus.cfValidate($p, ed_ioHh);
  if (!ret || !ret2) {
    // 필터 사용 O
    scwin.hid_useFilter = "1";
    // ds_stockMgnt.UseFilter = true;
    // ds_stockMgnt.filter();
    // ds_stockMgnt.UseFilter = false;
    scwin.ds_stockMgnt_OnFilter();
    return;
  }
  ret = await $c.gus.cfValidate($p, [gr_palletInfo]);
  if (!ret) {
    // 필터 사용 O
    scwin.hid_useFilter = "1";
    // ds_stockMgnt.UseFilter = true;
    // ds_stockMgnt.filter();
    // ds_stockMgnt.UseFilter = false;
    scwin.ds_stockMgnt_OnFilter();
    return;
  }
  var strOdrNoCnt = 0;
  for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
    ds_commInfo.setCellData(i, "vehclShortCd", ed_vehclShortCd.getValue());
    ds_commInfo.setCellData(i, "vehclNo", ed_vehclNo.getValue());
    ds_commInfo.setCellData(i, "ioDt", ica_ioDt.getValue());
    ds_commInfo.setCellData(i, "ioHh", ed_ioHh.getValue());
    if (ed_vehclWt.getValue() == "") {
      ed_vehclWt.setValue(0);
    }
    ds_commInfo.setCellData(i, "vehclWt", parseFloat(ed_vehclWt.getValue()));
    ds_commInfo.setCellData(i, "ioVehclCd", scwin.hid_ioVehclCd);
    ds_commInfo.setCellData(i, "copCoClntNo", ed_copCoClntNo.getValue());
    //미관제사유입력
    ds_commInfo.setCellData(i, "nonCtrlRsn", ed_nonCtrlRsn.getValue());

    // 보관오더 체크...
    if (ds_commInfo.getCellData(i, "strOdrNo") == "") {
      strOdrNoCnt++;
    }
  }
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != DsConstants.REP_CLNT_NO_LAFARGE && ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_SINDAEYANG && ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_HANNONG) {
    if (strOdrNoCnt > 0) {
      let ret = await $c.win.confirm($p, "보관오더를 선택하지 않았습니다. 그래도 진행하시겠습니까?");
      if (!ret) {
        return;
      }
    }
  }
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_HANNONG) {
      if (parseFloat(ds_stockMgnt.getCellData(i, "outQty")) < 0 || parseFloat(ds_stockMgnt.getCellData(i, "outWt")) < 0 || parseFloat(ds_stockMgnt.getCellData(i, "outCbm")) < 0) {
        // 필터 사용 O
        scwin.hid_useFilter = "1";
        // ds_stockMgnt.UseFilter = true;
        // ds_stockMgnt.filter();
        // ds_stockMgnt.UseFilter = false;
        scwin.ds_stockMgnt_OnFilter();
        await $c.win.alert($p, "수량,중량,CBM의 값에 -를 입력할 수 없습니다.");
        gr_stockMgnt.focus();
        return;
      }
    }
  }

  //출고수량 중량 체크 (테스트 중)

  if (rd_outQryCond.getValue() == "1") {
    if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "impExpClsCd") == "D") {
      for (var j = 0; j < ds_commInfo.getRowCount(); j++) {
        ds_commInfo.setRowPosition(j);
        var remainQty = 0;
        var remainWt = 0;
        remainQty = ds_commInfo.getCellData(j, "qty");
        remainWt = ds_commInfo.getCellData(j, "wt");
        for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
          if (ds_commInfo.getCellData(j, "commCd") == ds_stockMgnt.getCellData(i, "commCd") && ds_commInfo.getCellData(j, "transWrkIndictNo") == ds_stockMgnt.getCellData(i, "transWrkIndictNo") && ds_commInfo.getCellData(j, "odrNo") == ds_stockMgnt.getCellData(i, "odrNo") && parseInt(ds_commInfo.getCellData(j, "commSeq")) == parseInt(ds_stockMgnt.getCellData(i, "commSeq")) && parseInt(ds_commInfo.getCellData(j, "wrkPathSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkPathSeq")) && parseInt(ds_commInfo.getCellData(j, "wrkStpSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkStpSeq"))) {
            remainQty = remainQty - ds_stockMgnt.getCellData(i, "outQty");
            remainWt = remainWt - ds_stockMgnt.getCellData(i, "outWt");
            if (Math.round(remainWt) == 0) {
              ds_stockMgnt.setCellData(i, "outWt", ds_stockMgnt.getCellData(i, "outWt") + remainWt);
              remainWt = 0;
            }
          } //if
        } //for
        if (ds_commInfo.getCellData(j, "repClntNo") == DsConstants.REP_CLNT_NO_LAFARGE) {
          if (remainQty > 0 || remainQty < 0 || Math.abs(remainWt) >= scwin.bufferWt) {
            // 필터 사용 O
            scwin.hid_useFilter = "1";
            // ds_stockMgnt.UseFilter = true;
            // ds_stockMgnt.filter();
            // ds_stockMgnt.UseFilter = false;
            scwin.ds_stockMgnt_OnFilter();
            await $c.win.alert($p, "내수의 경우 배차 수량, 중량를 모두 출고처리해야 합니다(수량,중량: " + remainQty + "," + remainWt + ")");
            return;
          } //if
        } //if
      } //for
    } //if
  } //if

  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    // 필터 사용 X
    scwin.hid_useFilter = "0";
    // ds_stockMgnt.UseFilter = true;
    // ds_stockMgnt.filter();
    // ds_stockMgnt.UseFilter = false;
    scwin.ds_stockMgnt_OnFilter();
    var totalWt = 0;
    for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) totalWt += ds_stockMgnt.getCellData(i, "outWt");
    if (confirm("총 출고 중량이 " + totalWt + "kg 입니다. 저장하시겠습니까?") == false) {
      // 필터 사용 O
      scwin.hid_useFilter = "1";
      // ds_stockMgnt.UseFilter = true;
      // ds_stockMgnt.filter();
      // ds_stockMgnt.UseFilter = false;
      scwin.ds_stockMgnt_OnFilter();
      return;
    }
  }

  // ds_stockMgnt RowStatus C(삽입)로 세팅
  // - ASIS(가우스)에서는 신규 행이 자동으로 INSERT 타입으로 전송됐으나 WebSquare5에서는 조회해온 행이 R(초기상태)로 유지되어 서버의 DGauceConverter.toGauceListDTO가 INSERT로 인식하지 못함
  // - C(삽입) 상태로 변경해야 서버에서 TB_OP443(입출고위치) INSERT 처리됨
  // - 1129줄~ ds_commInfo.setRowPosition(j) 호출 시 onrowpositionchange 이벤트로 filter가 켜질 수 있으므로 전체 행 처리 전 filter 해제
  scwin.hid_useFilter = "0";
  scwin.ds_stockMgnt_OnFilter();
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    ds_stockMgnt.modifyRowStatus(i, "C");
  }

  // 이전 저장 응답 데이터 초기화 (OUT_DS1이 다음 요청에 섞이지 않도록)
  ds_returnOZvar.setJSON([]);
  $c.sbm.execute($p, sbm_saveOutInfo);
};

//-------------------------------------------------------------------------
// 출고 정보 수정
//-------------------------------------------------------------------------
scwin.f_UpdateOutInfo = function () {
  if (ds_commInfo.getRowCount() == 0) return;
  for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
    ds_commInfo.setCellData(i, "vehclShortCd", ed_vehclShortCd.getValue());
    ds_commInfo.setCellData(i, "vehclNo", ed_vehclNo.getValue());
    ds_commInfo.setCellData(i, "ioDt", ica_ioDt.getValue());
    ds_commInfo.setCellData(i, "ioHh", ed_ioHh.getValue());
    ds_commInfo.setCellData(i, "vehclWt", parseFloat(ed_vehclWt.getValue()));
    ds_commInfo.setCellData(i, "ioVehclCd", scwin.hid_ioVehclCd);
    ds_commInfo.setCellData(i, "copCoClntNo", ed_copCoClntNo.getValue());
    ds_commInfo.setCellData(i, "drvNm", ed_drvNm.getValue());
    ds_commInfo.setCellData(i, "drvTelNo", ed_drvTelNo.getValue());
  }
  if (ds_commInfo.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["품명 정보"]);
    return;
  }
  $c.sbm.execute($p, sbm_updateOutInfo);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let ret = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (ret) {
    // ds_commInfo, ds_stockMgnt RowStatus D(삭제)로 세팅
    for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
      ds_commInfo.modifyRowStatus(i, "D");
    }
    for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
      ds_stockMgnt.modifyRowStatus(i, "D");
    }
    $c.sbm.execute($p, sbm_deleteOutInfo);
  }
  $c.gus.cfInitObjects($p, tbl_vehclInfo);
};

//-------------------------------------------------------------------------
// 201609 OP451전송구분코드를 변경하는 로직추가
//-------------------------------------------------------------------------
scwin.f_UpdateSndClsCd = async function () {
  if (scwin.userId != "herekjs" //김지수대리
  && scwin.userId != "origin" //서근원대리
  && scwin.userId != "minstar9" //민경미대리
  && scwin.userId != "snowmoon" //전영훈차장
  ) {
    return;
  }
  let ret = await $c.win.confirm($p, "전송값을 변경하시겠습니까?");
  if (ret) {
    ds_updateSndClsCd.setEmptyValue();
    ds_updateSndClsCd.set("clntOdrNo", ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "clntOdrNo"));
    ds_updateSndClsCd.set("odrNo", ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "odrNo"));
    ds_updateSndClsCd.set("pdaRegId", scwin.userId);
    if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "clntOdrNo") == "" || ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "clntOdrNo") == null) {
      await $c.win.alert($p, "출고예정정보를 선택하세요");
      return;
    }
    $c.sbm.execute($p, sbm_updateSndClsCd);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 setReadOnly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
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
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 ds_outInfo
  var trnsWrkIndictNo = "";
  if (ds_outInfo.getRowCount() > 0) {
    ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "transWrkIndictNo");
  }
  switch (disGubun) {
    case 3:
      // 자가인 경우 장비 팝업
      udc_vehclShortCd.setSelectId("retrieveVehclList"); // XML상의 SELECT ID
      udc_vehclShortCd.cfCommonPopUp(scwin.udc_vehclShortCd_callBackFunc // 콜백 함수
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
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 1:
      // 자가인 경우 장비 팝업
      udc_eqCd.setSelectId("retrieveVehclList"); // XML상의 SELECT ID
      udc_eqCd.cfCommonPopUp(scwin.udc_eqCd_callBackFunc // 콜백 함수
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
      /* ASIS 사용되지 않는것 같음
      // 거래처 팝업
      rtnList = cfCommonPopUp('retrieveClntList' // XML상의 SELECT ID
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
          , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
       //수요가코드 수요가명
      $c.gus.cfSetReturnValue(rtnList, em_copCoClntNo, ed_copCoClntNm);
      */
      break;
    case 7:
      // 자가인경우 장비 팝업
      udc_vehclShortCd.setSelectId("retrieveVehclList"); // XML상의 SELECT ID
      udc_vehclShortCd.cfCommonPopUp(scwin.udc_vehclShortCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , trnsWrkIndictNo // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 작업장 코드..
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc // 콜백 함수
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
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //수요가코드 수요가명
      $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlCdNm);
      break;
    case 4:
      // 품명 팝업            
      udc_commCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc // XML상의 SELECT ID
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
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 도착지 팝업
      udc_arvWrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_arvWrkPlCd.cfCommonPopUp(scwin.udc_arvWrkPlCd_callBackFunc // 콜백 함수
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
      , "도착지,도착지코드,도착지명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 8:
      // 협력업체 팝업
      udc_copCoClntNo.setSelectId("retrieveCoopList"); // XML상의 SELECT ID
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
      , "F" // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      /* ASIS 사용되지 않는것 같음
      // 자가인경우 장비 팝업
      rtnList = cfCommonPopUp('retrieveVehclList' // XML상의 SELECT ID
          , pCode // 화면에서의 ??? Code Element의 Value
          , pName // 화면에서의 ??? Name Element의 Value
          , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
          , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
          , null // Title순서
          , null // 보여주는 각 컬럼들의 폭
          , null // 컬럼중에서 숨기는 컬럼 지정
          , trnsWrkIndictNo // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
          , null // POP-UP뛰을때 원도우의 사용자 정의 폭
          , null // POP-UP뛰을때 우도우의 사용자 정의 높이
          , null // 윈도우 위치 Y좌표
          , null // 윈도우 위치 X좌표
          , null // 중복체크여부 ("F")
          , pAllSearch // 전체검색허용여부 ("F")
          , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      $c.gus.cfSetReturnValue(rtnList, ed_vehclShortNo, txt_vehclNm);
      */
      break;
  } //switch
}; //function

scwin.f_popupForJAGA = function () {
  var selfClsCd = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "selfClsCd");
  if (selfClsCd.substring(0, 1) == "J") {
    //alert("자가차량인 경우는 차량정보를 직접입력하셔야 합니다.");
    //f_openCommonPopUp(3, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(),'T','T');
  } else {
    scwin.f_openCommonPopUp(7, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), 'T', 'T');
  }
};
scwin.f_popupForJAGAForButton = function () {
  var selfClsCd = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "selfClsCd");
  if (selfClsCd.substring(0, 1) == "J") {
    scwin.f_openCommonPopUp(3, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(7, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), 'T', 'T');
  }
};
scwin.f_openCommPopUpGrid = async function (row, pClose) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  var pCode = "";
  var pName = "";
  var commCd = "";
  var coCd = "";
  var wrkPlCd = ""; //op323 , INTERNAL_CD

  // LotNo팝업
  pCode = ds_stockMgnt.getCellData(row, "clntMgntNo"); // LotNo팝업
  pName = ds_stockMgnt.getCellData(row, "commCd");
  var coCd = "";
  var pTitle = "";

  // SELECT XML ID
  var selectId = "";
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    switch (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioWrkPlCd")) {
      case DsConstants.WRK_PL_SINDAEYANG_SIWHA:
        coCd = "S";
        break;
      case DsConstants.WRK_PL_SINDAEYANG_BANWOL:
        coCd = "H";
        break;
      case DsConstants.WRK_PL_SINDAEYANG_DAEYANG:
        coCd = "D";
        break;
      default:
        await $c.win.alert($p, "IT 전략팀에 문의 하세요.");
        coCd = "";
        break;
    }
    pTitle = "Roll No팝업,RollNo,품명코드";
    //selectId = "retrieveLotNo2"; // 일단 재고 관리 안하는 팝업사용
    selectId = "retrieveLotNo";
  } else {
    coCd = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "bizLongCd");
    pTitle = "Lot No팝업,LotNo,품명코드";
    temp = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "commNm").substring(0, 2);
    //당진공장이면서 방화제품이 아닌 경우 LOTNO 조회 기능 추가
    if (coCd == "4635") {
      if (temp == "방화") {
        selectId = "retrieveLotNo";
      } else {
        selectId = "retrieveLotNo3";
      }
    } else {
      selectId = "retrieveLotNo";
    }
  }
  udc_clntMgntNo.setSelectId(selectId); // XML상의 SELECT ID
  udc_clntMgntNo.cfCommonPopUp(scwin.udc_clntMgntNo_callBackFunc // 콜백 함수
  , pCode // 화면에서의 ??? Code Element의 Value
  , pName // 화면에서의 ??? Name Element의 Value
  , "T" // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , coCd // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 우도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부 ("F")
  , "T" // 전체검색허용여부 ("F")
  , pTitle // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.cfSetGridReturnValue_1 = function (rtnList, dataSet, row, codeCol, nameCol, colArr) {
  // 팝업을 X 버튼으로 닫았을 때
  if (rtnList == null) {
    dataSet.setCellData(row, codeCol, ""); //코드
    dataSet.setCellData(row, nameCol, ""); //코드명
  }
  // 팝업창 아래의 '닫기' 버튼으로 닫았을 때
  else if (rtnList[0] == "N/A") {
    dataSet.setCellData(row, codeCol, "");
    dataSet.setCellData(row, nameCol, "");
  }
  // 정상적으로 코드를 선택했을 때
  else {
    dataSet.setCellData(row, codeCol, rtnList[0]); //코드
    dataSet.setCellData(row, nameCol, rtnList[1]); //코드명

    // AS-IS 에서 실질적으로 사용되지 않는 코드 주석처리
    // 검색된 값을 데이타셋의 숨은 속성으로 저장
    // dataSet.setAttribute(codeCol, rtnList[0]);
    // dataSet.setAttribute(nameCol, rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// 날짜 조회시 현재시간도 세팅
//-------------------------------------------------------------------------
scwin.f_openCalendar = function () {
  ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
};

//-------------------------------------------------------------------------
// PALLET 정보 추가
//-------------------------------------------------------------------------
scwin.f_paletAddRow = async function () {
  if (ds_outInfo.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (ds_commInfo.getRowCount() == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "출고 정보"));
    gr_outInfo.focus();
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_palletInfo]);
  if (!ret) {
    return;
  }
  var newRow = ds_palletInfo.insertRow();
  ds_palletInfo.setRowPosition(newRow);
  var vPaletSeq = 1;
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "coshippingNo") == "") {
    vPaletSeq = scwin.getColumnMax(ds_palletInfo, "paletSeq") + 1;
  } else {
    for (var row = 0; row < ds_palletInfo.getRowCount(); row++) {
      if (ds_commInfo.getCellData(ds_commInfo.getRowCount(), "ioNo") == ds_palletInfo.getCellData(row, "ioNo")) {
        if (vPaletSeq <= ds_palletInfo.getCellData(row, "paletSeq")) {
          vPaletSeq = ds_palletInfo.getCellData(row, "paletSeq") + 1;
        }
      }
    }
  }
  ds_palletInfo.setCellData(ds_palletInfo.getRowPosition(), "ioNo", ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioNo"));
  ds_palletInfo.setCellData(ds_palletInfo.getRowPosition(), "paletSeq", vPaletSeq);
  gr_palletInfo.setFocusedCell(newRow, "paletKndCd", false);
};

//-------------------------------------------------------------------------
// 품명정보 dataset 에  출고정보 추가시  합적여부에 따른 구분
//-------------------------------------------------------------------------
scwin.f_AddCommInfo = function (vRow) {
  var vIoNo = 1;
  if (ds_outInfo.getCellData(vRow, "coshippingNo") == "") {
    var newRow = ds_commInfo.insertRow();
    ds_commInfo.setRowPosition(newRow);
    ds_commInfo.setCellData(ds_commInfo.getRowPosition(), "ioNo", vIoNo);
    scwin.f_CommInfoAddData(vRow);
  } else {
    for (var i = 0; i < ds_outInfo.getRowCount(); i++) {
      if (ds_outInfo.getCellData(i, "coshippingNo") == ds_outInfo.getCellData(vRow, "coshippingNo")) {
        var newRow = ds_commInfo.insertRow();
        ds_commInfo.setRowPosition(newRow);
        if (ds_outInfo.getCellData(vRow, "ioNo") == "") {
          ds_commInfo.setCellData(ds_commInfo.getRowPosition(), "ioNo", vIoNo);
          vIoNo++;
        }
        scwin.f_CommInfoAddData(i);
      }
    }
  }
  tbx_totalRows2.setValue(ds_commInfo.getRowCount());
};

//-------------------------------------------------------------------------
// 품명정보 dataset 에  출고상세정보 추가 
//-------------------------------------------------------------------------
scwin.f_CommInfoAddData = function (vRow) {
  var colNm = "";
  for (var col = 0; col < ds_commInfo.getTotalCol(); col++) {
    colNm = ds_commInfo.getColumnID(col);
    if (colNm == "rltNo") {
      if (ds_outInfo.getCellData(vRow, "impExpClsCd") == "I") {
        ds_commInfo.setCellData(ds_commInfo.getRowPosition(), "rltNo", ds_outInfo.getCellData(vRow, "blNo"));
      } else if (ds_outInfo.getCellData(vRow, "impExpClsCd") == "O") {
        ds_commInfo.setCellData(ds_commInfo.getRowPosition(), "rltNo", ds_outInfo.getCellData(vRow, "bookingNo"));
      } else if (ds_outInfo.getCellData(vRow, "impExpClsCd") == "D") {
        if (ds_outInfo.getCellData(vRow, "vehclNo") != "자가99자9999") {
          ds_commInfo.setCellData(ds_commInfo.getRowPosition(), "rltNo", ds_outInfo.getCellData(vRow, "clntMgntNo"));
        }
      }
    } else if (colNm != "ioNo") {
      //TOBE : ds_commInfo에 있는 컬럼만 복사(안써주면 number컬럼이 0으로 표시되야하는데 ''로 들어감)
      if (ds_outInfo.getColumnIndex(colNm) > -1) {
        ds_commInfo.setCellData(ds_commInfo.getRowPosition(), colNm, ds_outInfo.getCellData(vRow, colNm));
      }
    }
  }
};

//-------------------------------------------------------------------------
// 재고관리 안하는 경우의 수량 입력값 검사 (2005.11.28  옥민성)
//-------------------------------------------------------------------------
scwin.f_checkNotStockInfo = function () {
  var vCommInfoRow = 0;
  var vStockMgntRow = 0;
  var returnVal = new Array();
  var vFlag = false;
  if (ds_commInfo.getRowCount() == 1) {
    returnVal = scwin.f_checkNotStockInfoNotCoshipping();
    if (returnVal[0]) {
      ds_stockMgnt.setRowPosition(returnVal[2]);
      //gr_stockMgnt.focus();
      //gr_stockMgnt.SetColumn(returnVal[1]);
      gr_stockMgnt.setFocusedCell(i, "outQty", false);
      return true;
    }
  } else if (ds_commInfo.getRowCount() > 1) {
    // 합적번호가 있는 경우

    vCommInfoRow = ds_commInfo.getRowPosition();
    vStockMgntRow = ds_stockMgnt.getRowPosition();

    // 현재 로우에 대한 검사를 우선적으로 함
    returnVal = scwin.f_checkNotStockInfoForCoshipping(vCommInfoRow);
    if (returnVal[0]) {
      //ds_stockMgnt.setRowPosition = returnVal[2];
      //gr_stockMgnt.focus();
      //gr_StockMgnt.SetColumn(returnVal[1]);
      gr_stockMgnt.setFocusedCell(returnVal[2], returnVal[1], false);
      return true;
    }
    for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
      if (i == vCommInfoRow) continue;

      //ds_commInfo.setRowPosition = i;

      returnVal = scwin.f_checkNotStockInfoForCoshipping(i);
      if (returnVal[0]) {
        //ds_stockMgnt.setRowPosition = returnVal[2];
        //gr_stockMgnt.focus();
        //gr_stockMgnt.SetColumn(returnVal[1]);
        gr_stockMgnt.setFocusedCell(returnVal[2], returnVal[1], false);
        vFlag = true;
        break;
      }
    } // end for ds_commInfo

    if (!vFlag) {
      ds_commInfo.setRowPosition(vCommInfoRow);
      ds_stockMgnt.setRowPosition(vStockMgntRow);
    }
  } // end if

  return vFlag;
};

//-------------------------------------------------------------------------
// 재고관리 안 하는 경우의 수량 입력 값 검사 (합적이 아닌 경우)
//-------------------------------------------------------------------------
scwin.f_checkNotStockInfoNotCoshipping = async function () {
  var vCurRow = 0;
  var vFlag = false;
  var vCurColumn = "";
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    if (ds_stockMgnt.getCellData(i, "outQty") == 0 && ds_stockMgnt.getCellData(i, "outWt") == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
      vCurColumn = "outQty";
      vFlag = true;
      break;
    }
  } // end for ds_stockMgnt

  if (vFlag) {
    //ds_stockMgnt.setRowPosition = vCurRow;
    ds_stockMgnt.setCellData(vCurRow, vCurColumn, 0);
    //gr_stockMgnt.focus();
    //gr_stockMgnt.SetColumn(vCurColumn);
    gr_stockMgnt.setFocusedCell(vCurRow, vCurColumn, false);
  }
  var arrList = new Array();
  arrList[0] = vFlag;
  arrList[1] = vCurColumn;
  arrList[2] = vCurRow;
  return arrList;
};

//-------------------------------------------------------------------------
// 재고관리 안 하는 경우의 수량 입력 값 검사 (합적인 경우)
//-------------------------------------------------------------------------
scwin.f_checkNotStockInfoForCoshipping = async function (vCommInfoRow) {
  var vCurRow = 0;
  var vFlag = false;
  var vCurColumn = "";
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  ds_commInfo.setRowPosition(vCommInfoRow);
  for (var j = 0; j < ds_stockMgnt.getRowCount(); j++) {
    if (ds_commInfo.getCellData(vCommInfoRow, "ioNo") == ds_stockMgnt.getCellData(j, "ioNo")) {
      vTotalOutQty += parseInt(ds_stockMgnt.getCellData(j, "outQty"));
      vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(j, "outWt"));
    }
  } // end for ds_stockMgnt

  if (!vFlag && vTotalOutQty == 0 && vTotalOutWt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
    vCurColumn = "outQty";
    vCurRow = 0;
    vFlag = true;
  }
  if (vFlag) {
    ds_stockMgnt.setCellData(vCurRow, vCurColumn, 0);
    //ds_stockMgnt.setRowPosition = vCurRow;
    //gr_stockMgnt.focus();
    //gr_stockMgnt.SetColumn(vCurColumn);
    gr_stockMgnt.setFocusedCell(vCurRow, vCurColumn, false);
  }
  var arrList = new Array();
  arrList[0] = vFlag;
  arrList[1] = vCurColumn;
  arrList[2] = vCurRow;
  return arrList;
};

//-------------------------------------------------------------------------
// 재고관리 하는 경우의 수량 입력 값 검사 (2005.11.28  옥민성)
//-------------------------------------------------------------------------
scwin.f_checkStockInfo = async function () {
  var vCommInfoRow = 0;
  var vStockMgntRow = 0;
  var returnVal = new Array();
  var vFlag = false;
  if (ds_commInfo.getRowCount() == 1) {
    returnVal = await scwin.f_checkStockInfoNotCoshipping();
    if (returnVal[0]) {
      // ds_stockMgnt.setRowPosition = returnVal[2];
      // gr_stockMgnt.focus();
      // gr_stockMgnt.SetColumn(returnVal[1]);
      gr_stockMgnt.setFocusedCell(returnVal[2], returnVal[1], false);
      return true;
    }
  } else if (ds_commInfo.getRowCount() > 1) {
    // 합적번호가 있는 경우

    vCommInfoRow = ds_commInfo.getRowPosition();
    vStockMgntRow = ds_stockMgnt.getRowPosition();

    // 현재 로우에 대한 검사를 우선적으로 함
    returnVal = await scwin.f_checkStockInfoForCoshipping(vCommInfoRow);
    if (returnVal[0]) {
      // ds_stockMgnt.setRowPosition = returnVal[2];
      // gr_stockMgnt.focus();
      // gr_stockMgnt.SetColumn(returnVal[1]);
      gr_stockMgnt.setFocusedCell(returnVal[2], returnVal[1], false);
      return true;
    }
    for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
      if (i == vCommInfoRow) continue;

      //ds_commInfo.setRowPosition = i;

      returnVal = await scwin.f_checkStockInfoForCoshipping(i);
      if (returnVal[0]) {
        // ds_stockMgnt.setRowPosition = returnVal[2];
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn(returnVal[1]);
        gr_stockMgnt.setFocusedCell(returnVal[2], returnVal[1], false);
        vFlag = true;
        break;
      }
    } // end for ds_commInfo

    if (!vFlag) {
      ds_commInfo.setRowPosition(vCommInfoRow);
      ds_stockMgnt.setRowPosition(vStockMgntRow);
    }
  } // end if

  return vFlag;
};

//-------------------------------------------------------------------------
// 재고관리 하는 경우의 수량 입력 값 검사 (합적이 아닌 경우)
//-------------------------------------------------------------------------
scwin.f_checkStockInfoNotCoshipping = async function () {
  var vStockQty = 0;
  var vStockWt = 0;
  var vStockCbm = 0;
  var vOutQty = 0;
  var vOutWt = 0;
  var vOutCbm = 0;
  var vCurRow = 0;
  var vFlag = false;
  var vCurColumn = "";
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    vStockQty = parseInt(ds_stockMgnt.getCellData(i, "rsltsQty"));
    vStockWt = parseFloat(ds_stockMgnt.getCellData(i, "rsltsWt"));
    vStockCbm = parseFloat(ds_stockMgnt.getCellData(i, "rsltsCbm"));
    vOutQty = parseInt(ds_stockMgnt.getCellData(i, "outQty"));
    vOutWt = parseFloat(ds_stockMgnt.getCellData(i, "outWt"));
    vOutCbm = parseFloat(ds_stockMgnt.getCellData(i, "outCbm"));
    vCurRow = i;
    vTotalOutQty += parseInt(ds_stockMgnt.getCellData(i, "outQty"));
    vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(i, "outWt"));
    vTotalOutCbm += parseFloat(ds_stockMgnt.getCellData(i, "outCbm"));
  } // end for ds_stockMgnt

  if (!vFlag && vTotalOutQty == 0 && vTotalOutWt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
    vCurColumn = "outQty";
    vCurRow = 0;
    vFlag = true;
  }
  var arrList = new Array();
  arrList[0] = vFlag;
  arrList[1] = vCurColumn;
  arrList[2] = vCurRow;
  return arrList;
};

//-------------------------------------------------------------------------
// 재고관리 하는 경우의 수량 입력 값 검사 (합적인 경우)
//-------------------------------------------------------------------------
scwin.f_checkStockInfoForCoshipping = async function (vCommInfoRow) {
  var vStockQty = 0;
  var vStockWt = 0;
  var vStockCbm = 0;
  var vOutQty = 0;
  var vOutWt = 0;
  var vOutCbm = 0;
  var vCurRow = 0;
  var vFlag = false;
  var vCurColumn = "";
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  ds_commInfo.setRowPosition(vCommInfoRow);
  for (var j = 0; j < ds_stockMgnt.getRowCount(); j++) {
    if (ds_commInfo.getCellData(vCommInfoRow, "ioNo") == ds_stockMgnt.getCellData(j, "ioNo")) {
      vTotalOutQty += parseInt(ds_stockMgnt.getCellData(j, "outQty"));
      vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(j, "outWt"));
      vTotalOutCbm += parseFloat(ds_stockMgnt.getCellData(j, "outCbm"));
    }
    vStockQty = parseInt(ds_stockMgnt.getCellData(j, "rsltsQty"));
    vStockWt = parseFloat(ds_stockMgnt.getCellData(j, "rsltsWt"));
    vStockCbm = parseFloat(ds_stockMgnt.getCellData(j, "rsltsCbm"));
    vOutQty = parseInt(ds_stockMgnt.getCellData(j, "outQty"));
    vOutWt = parseFloat(ds_stockMgnt.getCellData(j, "outWt"));
    vOutCbm = parseFloat(ds_stockMgnt.getCellData(j, "outCbm"));
    vCurRow = j;
  } // end for ds_stockMgnt

  if (!vFlag && vTotalOutQty == 0 && vTotalOutWt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
    vCurColumn = "outQty";
    vCurRow = 0;
    vFlag = true;
  }
  if (vFlag) {
    ds_stockMgnt.setCellData(vCurRow, vCurColumn, 0);
    //ds_stockMgnt.setRowPosition = vCurRow;
    // gr_stockMgnt.focus();
    // gr_stockMgnt.SetColumn(vCurColumn);
    gr_stockMgnt.setFocusedCell(vCurRow, vCurColumn, false);
  }
  var arrList = new Array();
  arrList[0] = vFlag;
  arrList[1] = vCurColumn;
  arrList[2] = vCurRow;
  return arrList;
};

//-------------------------------------------------------------------------
// 재고정보 추가 가능 검사 (사용 않함)
//-------------------------------------------------------------------------
scwin.f_CheckStockInfoAddEnable = async function (vRow) {
  var chkFlag = true;
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    if (ds_stockMgnt.getCellData(vRow, "transWrkIndictNo") == ds_stockMgnt.getCellData(i, "transWrkIndictNo") && ds_stockMgnt.getCellData(vRow, "odrNo") == ds_stockMgnt.getCellData(i, "odrNo") && parseInt(ds_stockMgnt.getCellData(vRow, "commSeq")) == parseInt(ds_stockMgnt.getCellData(i, "commSeq")) && parseInt(ds_stockMgnt.getCellData(vRow, "wrkPathSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkPathSeq")) && parseInt(ds_stockMgnt.getCellData(vRow, "wrkStpSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkStpSeq"))) {
      vTotalOutQty += parseInt(ds_stockMgnt.getCellData(i, "outQty"));
      vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(i, "outWt"));
      vTotalOutCbm += parseFloat(ds_stockMgnt.getCellData(i, "outCbm"));
    }
  }
  for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
    if (ds_stockMgnt.getCellData(vRow, "transWrkIndictNo") == ds_commInfo.getCellData(i, "transWrkIndictNo") && ds_stockMgnt.getCellData(vRow, "odrNo") == ds_commInfo.getCellData(i, "odrNo") && parseInt(ds_stockMgnt.getCellData(vRow, "commSeq")) == parseInt(ds_commInfo.getCellData(i, "commSeq")) && parseInt(ds_stockMgnt.getCellData(vRow, "wrkPathSeq")) == parseInt(ds_commInfo.getCellData(i, "wrkPathSeq")) && parseInt(ds_stockMgnt.getCellData(vRow, "wrkStpSeq")) == parseInt(ds_commInfo.getCellData(i, "wrkStpSeq"))) {
      if (parseInt(ds_commInfo.getCellData(i, "qty")) < vTotalOutQty) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_048, "출고수량", "출고예정수량"));
        ds_stockMgnt.setCellData(vRow, "outQty", 0);
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outQty");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outQty", false);
        chkFlag = false;
        break;
      }
      if (parseInt(ds_commInfo.getCellData(i, "qty")) != 0 && parseInt(ds_stockMgnt.getCellData(vRow, "outQty")) == 0) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "출고수량", "0"));
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outQty");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outQty", false);
        chkFlag = false;
        break;
      }
      if (parseFloat(ds_commInfo.getCellData(i, "wt")) < vTotalOutWt) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_048, "출고중량", "출고예정중량"));
        ds_stockMgnt.setCellData(vRow, "outWt", 0);
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outWt");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outWt", false);
        chkFlag = false;
        break;
      }
      if (parseFloat(ds_commInfo.getCellData(i, "wt")) != 0 && parseFloat(ds_stockMgnt.getCellData(vRow, "outWt")) == 0) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "출고중량", "0"));
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outWt");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outWt", false);
        chkFlag = false;
        break;
      }
      if (parseFloat(ds_commInfo.getCellData(i, "cbm")) < vTotalOutCbm) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_048, "출고 CBM", "출고예정 CBM"));
        ds_stockMgnt.setCellData(vRow, "outCbm", 0);
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outCbm");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outCbm", false);
        chkFlag = false;
        break;
      }
      if (parseFloat(ds_commInfo.getCellData(i, "cbm")) != 0 && parseFloat(ds_stockMgnt.getCellData(vRow, "outCbm")) == 0) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "출고 CBM", "0"));
        // gr_stockMgnt.focus();
        // gr_stockMgnt.SetColumn("outCbm");
        // ds_stockMgnt.setRowPosition = vRow;
        gr_stockMgnt.setFocusedCell(vRow, "outCbm", false);
        chkFlag = false;
        break;
      }
    }
  }
  return chkFlag;
};

//-------------------------------------------------------------------------
// 재고정보 추가 (재고관리 안하는 품목)
//-------------------------------------------------------------------------
scwin.f_stockAddRow = async function () {
  if (ds_commInfo.getRowCount() == 0) return; //ASIS : if( ds_commInfo.RowPosition == 0 ) return;

  if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "wrkPatternCd") == "UB") {
    if (ds_stockMgnt.getRowCount() > 1) {
      await $c.win.alert($p, "UB 오더는 하나의 LOT번호로 처리하셔야 합니다.");
      return;
    }
  }
  if (ds_stockMgnt.getRowCount() > 0) {
    var vRow = ds_stockMgnt.getRowPosition();
    var vOutQty = parseInt(ds_stockMgnt.getCellData(vRow, "outQty"));
    var vOutWt = parseFloat(ds_stockMgnt.getCellData(vRow, "outWt"));
    var vOutCbm = parseFloat(ds_stockMgnt.getCellData(vRow, "outCbm"));
    if (vOutQty == 0 && vOutWt == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
      //gr_stockMgnt.focus();
      //gr_stockMgnt.SetColumn("outQty");
      gr_stockMgnt.setFocusedCell(vRow, "outQty", false);
      return;
    }
  }
  var vIoPosSeq = 1;
  var newRow = ds_stockMgnt.insertRow();
  ds_stockMgnt.setRowPosition(newRow);
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "coshippingNo") == "") {
    vIoPosSeq = scwin.getColumnMax(ds_stockMgnt, "ioPosSeq") + 1;
  } else {
    for (var row = 0; row < ds_stockMgnt.getRowCount(); row++) {
      if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioNo") == ds_stockMgnt.getCellData(row, "ioNo")) {
        if (vIoPosSeq <= ds_stockMgnt.getCellData(row, "ioPosSeq")) {
          vIoPosSeq = ds_stockMgnt.getCellData(row, "ioPosSeq") + 1;
        }
      }
    }
  }
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "transWrkIndictNo") == ds_stockMgnt.getCellData(i, "transWrkIndictNo") && ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "odrNo") == ds_stockMgnt.getCellData(i, "odrNo") && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "commSeq")) == parseInt(ds_stockMgnt.getCellData(i, "commSeq")) && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wrkPathSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkPathSeq")) && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wrkStpSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkStpSeq"))) {
      vTotalOutQty += parseInt(ds_stockMgnt.getCellData(i, "outQty"));
      vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(i, "outWt"));
      vTotalOutCbm += parseFloat(ds_stockMgnt.getCellData(i, "outCbm"));
    }
  }
  var vColId = "";
  var vTmpVal = 0;
  var vTmpWt = 0;
  var vTmpCbm = 0;
  for (var col = 0; col < ds_stockMgnt.getTotalCol(); col++) {
    vColId = ds_stockMgnt.getColumnID(col);
    //console.log("vColId="  + vColId + "   getColumnIndex=" + ds_commInfo.getColumnIndex(vColId))
    if (vColId == "ioPosSeq") {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vIoPosSeq);
    } else if (ds_commInfo.getColumnIndex(vColId) > -1) {
      //TOBE : ds_commInfo에 있는 컬럼만 복사(안써주면 number컬럼이 0으로 표시되야하는데 ''로 들어감)
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, ds_commInfo.getCellData(ds_commInfo.getRowPosition(), vColId));
    }
    vTmpQty = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "qty") - vTotalOutQty;
    vTmpWt = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wt") - vTotalOutWt;
    vTmpCbm = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "cbm") - vTotalOutCbm;
    if (vColId == "outQty" && vTmpQty > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpQty);
    }
    if (vColId == "outWt" && vTmpWt > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpWt);
    }
    if (vColId == "outCbm" && vTmpCbm > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpCbm);
    }
  }

  // gr_stockMgnt.focus();
  // gr_stockMgnt.SetColumn("outQty");

  gr_stockMgnt.setFocusedCell(ds_stockMgnt.getRowPosition(), "outQty", false);
};

//-------------------------------------------------------------------------
// 재고정보 추가 (재고관리 안하는 품목) ==> 신대양 제지 전용 
//-------------------------------------------------------------------------
scwin.f_stockAddRow2 = async function () {
  if (ds_commInfo.getRowCount() == 0) return; //ASIS : if( ds_commInfo.RowPosition == 0 ) return;

  if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "wrkPatternCd") == "UB") {
    if (ds_stockMgnt.getRowCount() > 1) {
      await $c.win.alert($p, "UB 오더는 하나의 LOT번호로 처리하셔야 합니다.");
      return;
    }
  }
  if (ds_stockMgnt.getRowCount() > 0) {
    var vRow = ds_stockMgnt.getRowPosition();
    var vOutQty = parseInt(ds_stockMgnt.getCellData(vRow, "outQty"));
    var vOutWt = parseFloat(ds_stockMgnt.getCellData(vRow, "outWt"));
    var vOutCbm = parseFloat(ds_stockMgnt.getCellData(vRow, "outCbm"));
    if (vOutQty == 0 && vOutWt == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "출고수량 또는 출고중량"));
      //gr_stockMgnt.focus();
      //gr_stockMgnt.SetColumn("outQty");
      gr_stockMgnt.setFocusedCell(vRow, "outQty", false);
      return;
    }
  }
  var vIoPosSeq = 1;
  var newRow = ds_stockMgnt.insertRow();
  ds_stockMgnt.setRowPosition(newRow);
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "coshippingNo") == "") {
    vIoPosSeq = scwin.getColumnMax(ds_stockMgnt, "ioPosSeq") + 1;
  } else {
    for (var row = 10; row < ds_stockMgnt.getRowCount(); row++) {
      if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioNo") == ds_stockMgnt.getCellData(row, "ioNo")) {
        if (vIoPosSeq <= ds_stockMgnt.getCellData(row, "ioPosSeq")) {
          vIoPosSeq = ds_stockMgnt.getCellData(row, "ioPosSeq") + 1;
        }
      }
    }
  }
  var vTotalOutQty = 0;
  var vTotalOutWt = 0;
  var vTotalOutCbm = 0;
  for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
    if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "transWrkIndictNo") == ds_stockMgnt.getCellData(i, "transWrkIndictNo") && ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "odrNo") == ds_stockMgnt.getCellData(i, "odrNo") && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "commSeq")) == parseInt(ds_stockMgnt.getCellData(i, "commSeq")) && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wrkPathSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkPathSeq")) && parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wrkStpSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkStpSeq"))) {
      vTotalOutQty += parseInt(ds_stockMgnt.getCellData(i, "outQty"));
      vTotalOutWt += parseFloat(ds_stockMgnt.getCellData(i, "outWt"));
      vTotalOutCbm += parseFloat(ds_stockMgnt.getCellData(i, "outCbm"));
    }
  }
  var vColId = "";
  var vTmpVal = 0;
  var vTmpWt = 0;
  var vTmpCbm = 0;
  for (var col = 0; col < ds_stockMgnt.getTotalCol(); col++) {
    vColId = ds_stockMgnt.getColumnID(col);
    if (vColId == "ioPosSeq") {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vIoPosSeq);
    } else {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, ds_commInfo.getCellData(ds_commInfo.getRowPosition(), vColId));
    }
    /*
    vTmpQty = ds_commInfo.getCellData(ds_commInfo.getRowPosition(),"qty") - vTotalOutQty;
    vTmpWt = ds_commInfo.getCellData(ds_commInfo.getRowPosition(),"wt") - vTotalOutWt;
    vTmpCbm = ds_commInfo.getCellData(ds_commInfo.getRowPosition(),"cbm") - vTotalOutCbm;
    */
    vTmpQty = 1;
    vTmpWt = parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wt")) / parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "qty"));
    vTmpCbm = parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "cbm")) / parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "qty"));
    if (vColId == "outQty" && vTmpQty > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpQty);
    }
    if (vColId == "outWt" && vTmpWt > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpWt);
    }
    if (vColId == "outCbm" && vTmpCbm > 0) {
      ds_stockMgnt.setCellData(ds_stockMgnt.getRowPosition(), vColId, vTmpCbm);
    }
  }
  // gr_stockMgnt.focus();
  // gr_stockMgnt.SetColumn("outQty");

  gr_stockMgnt.setFocusedCell(ds_stockMgnt.getRowPosition(), "outQty", false);
};

//-------------------------------------------------------------------------
// 재고정보 변경 취소
//-------------------------------------------------------------------------
scwin.f_stockUndo = function () {
  ds_stockMgnt.undoAll();
};

//-------------------------------------------------------------------------
// 저장 후 호출(저장후 바로출력 체크 된경우에만)
//-------------------------------------------------------------------------
scwin.f_OzReport2 = async function () {
  let strOdiName = "";
  let strReportName = "";
  let strMode = "";
  let arrOdiParam = new Array();
  if ((ds_returnOZvar.getCellData(0, "ioNo") == null || ds_returnOZvar.getCellData(0, "ioNo") == "") && (ds_returnOZvar.getCellData(0, "coshippingNo") == null || ds_returnOZvar.getCellData(0, "coshippingNo") == "")) {
    await $c.win.alert($p, "선택한 건에 대하여 발행정보가 존재하지 않습니다.");
    return;
  }
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
  if (ds_returnOZvar.getCellData(0, "repClntNo") == OpConstants.ST_REPCLNTNO_HANNONG) {
    if (ds_returnOZvar.getCellData(0, "tplSaleClsCd") == "2" || ds_returnOZvar.getCellData(0, "tplSaleClsCd") == "4") {
      //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_01.ozr", odiParam);

      strOdiName = "op_302_01_04p_01";
      strReportName = "/ds/op/op_302_01_04p_01.ozr";
      arrOdiParam = {
        ioNo: ds_returnOZvar.getCellData(0, "ioNo"),
        coshippingNo: ds_returnOZvar.getCellData(0, "coshippingNo"),
        ioClsCd: "O"
      };
      scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
    } else {
      //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_02.ozr", odiParam);            

      strOdiName = "op_302_01_04p_02";
      strReportName = "/ds/op/op_302_01_04p_02.ozr";
      arrOdiParam = {
        ioNo: ds_returnOZvar.getCellData(0, "ioNo"),
        coshippingNo: ds_returnOZvar.getCellData(0, "coshippingNo"),
        ioClsCd: "O"
      };
      scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
    }
  } else if (ds_returnOZvar.getCellData(0, "repClntNo") == DsConstants.REP_CLNT_NO_LAFARGE) {
    //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p.ozr", odiParam);

    strOdiName = "op_302_01_04p";
    strReportName = "/ds/op/op_302_01_04p.ozr";
    arrOdiParam = {
      ioNo: ds_returnOZvar.getCellData(0, "ioNo"),
      coshippingNo: ds_returnOZvar.getCellData(0, "coshippingNo"),
      ioClsCd: "O"
    };
    scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);

    //ds_commInfo.UseChangeInfo = "false"; 
    $c.sbm.execute($p, sbm_printGDN);
  } else if (ds_returnOZvar.getCellData(0, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    //신대양 제지 관련
    strOdiName = "op_302_01_04p_03";
    arrOdiParam = {
      ioWrkPlCd: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioWrkPlCd"),
      ioNo: ds_returnOZvar.getCellData(0, "ioNo"),
      coshippingNo: ds_returnOZvar.getCellData(0, "coshippingNo")
    };
    switch (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioWrkPlCd")) {
      case DsConstants.WRK_PL_SINDAEYANG_SIWHA:
        //$c.gus.cfOZReport("cbx_printCheck", "", "/ds/op/op_302_01_04p_03_pr1.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03_pr1.ozr";
        strMode = "print";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      case DsConstants.WRK_PL_SINDAEYANG_BANWOL:
        //$c.gus.cfOZReport("cbx_printCheck", "", "/ds/op/op_302_01_04p_03_pr2.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03_pr2.ozr";
        strMode = "print";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      case DsConstants.WRK_PL_SINDAEYANG_DAEYANG:
        //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_03.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03.ozr";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      default:
        await $c.win.alert($p, "IT 전략팀에 문의 하세요.");
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 송장발행, 내화구조 품질확인서 발행 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (guBun) {
  let strOdiName = "";
  let strReportName = "";
  let arrOdiParam = new Array();
  let strMode = "";
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
  if ((ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo") == null || ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo") == "") && (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo") == null || ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo") == "")) {
    await $c.win.alert($p, "선택한 건에 대하여 발행정보가 존재하지 않습니다.");
    return;
  }
  if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_HANNONG)
    //9
    {
      if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "tplSaleClsCd") == "2" || ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "tplSaleClsCd") == "4") {
        //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_01.ozr", odiParam);

        strOdiName = "op_302_01_04p_01";
        strReportName = "/ds/op/op_302_01_04p_01.ozr";
        arrOdiParam = {
          ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
          coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo"),
          ioClsCd: "O"
        };
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
      } else {
        //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_02.ozr", odiParam);

        strOdiName = "op_302_01_04p_02";
        strReportName = "/ds/op/op_302_01_04p_02.ozr";
        arrOdiParam = {
          ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
          coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo"),
          ioClsCd: "O"
        };
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
      }
    } else if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    //8 신대양 제지 관련
    strOdiName = "op_302_01_04p_03";
    arrOdiParam = {
      ioWrkPlCd: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioWrkPlCd"),
      ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
      coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo")
    };
    switch (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioWrkPlCd")) {
      case DsConstants.WRK_PL_SINDAEYANG_SIWHA:
        //$c.gus.cfOZReport("cbx_printCheck", "", "/ds/op/op_302_01_04p_03_pr1.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03_pr1.ozr";
        strMode = "print";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      case DsConstants.WRK_PL_SINDAEYANG_BANWOL:
        //$c.gus.cfOZReport("cbx_printCheck", "", "/ds/op/op_302_01_04p_03_pr2.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03_pr2.ozr";
        strMode = "print";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      case DsConstants.WRK_PL_SINDAEYANG_DAEYANG:
        //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p_03.ozr", odiParam);
        strReportName = "/ds/op/op_302_01_04p_03.ozr";
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        break;
      default:
        await $c.win.alert($p, "IT 전략팀에 문의 하세요.");
        break;
    }
  } else {
    if (guBun == 1) {
      if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "repClntNo") == "000001") {
        //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_04p.ozr", odiParam);

        //ds_commInfo.UseChangeInfo = "false";        

        strOdiName = "op_302_01_04p";
        strReportName = "/ds/op/op_302_01_04p.ozr";
        arrOdiParam = {
          ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
          coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo"),
          ioClsCd: "O"
        };
        scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
        $c.sbm.execute($p, sbm_printGDN);
      } else
        //보랄이아닐경우 20150615,jisoo
        {
          //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_06p.ozr", odiParam);

          strOdiName = "op_302_01_06p";
          strReportName = "/ds/op/op_302_01_06p.ozr";
          arrOdiParam = {
            ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
            coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo"),
            ioClsCd: "O"
          };
          scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);

          //ds_commInfo.UseChangeInfo = "false";  
          $c.sbm.execute($p, sbm_printGDN);
        }
    } else if (guBun == 2) {
      //$c.gus.cfOZReport("cbx_printCheck", "cbx_previewCheck", "/ds/op/op_302_01_05p.ozr", odiParam);

      strOdiName = "op_302_01_05p";
      strReportName = "/ds/op/op_302_01_05p.ozr";
      arrOdiParam = {
        ioNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "ioNo"),
        coshippingNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "coshippingNo"),
        ioClsCd: "O"
      };
      scwin.setOzReport(strOdiName, strReportName, arrOdiParam, strMode);
    } else {
      await $c.win.alert($p, "전산담당자에게 연락하세요..!!");
    }
  }
};
scwin.setOzReport = function (strOdiName, strReportName, arrOdiParam, strMode) {
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: "",
    exportFormat: 'pdf',
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
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = async function () {
  var strBulkOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
  var programId = "sd_402_01_02t.jsp";
  var row = ds_outInfo.getRowPosition();
  if (row > -1) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    var v_odrNo = ds_outInfo.getCellData(row, "odrNo");
    let paramObj = {
      odrNo: v_odrNo,
      type: "retrieve"
    };

    // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
    $c.win.openMenu($p, "벌크오더", strBulkOrderUrl, programId, paramObj);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더현황"));
    return;
  }
};

//-------------------------------------------------------------------------
// gr_commInfo Format 설정
//-------------------------------------------------------------------------
scwin.f_changeTable = function (flag) {
  if (flag == 1) {
    gr_commInfo.setColumnVisible("coCd", true);
    gr_commInfo.setColumnVisible("tplSaleClsCd", true);
    gr_commInfo.setColumnVisible("bizLongCd", true);
    gr_commInfo.setColumnVisible("unitCd2", true);
    gr_commInfo.setColumnVisible("tplPrdtKndCd", true);
    gr_commInfo.setColumnVisible("tplOrderClsCd", true);

    //Pallet정보 영역 숨기기
    grp_pallet.setStyle("display", "none"); //ASIS : opt_palletGrid, opt_palletBtn, opt_palletTitle
  } else if (flag == 2) {
    gr_commInfo.setColumnVisible("coCd", false);
    gr_commInfo.setColumnVisible("tplSaleClsCd", false);
    gr_commInfo.setColumnVisible("bizLongCd", false);
    gr_commInfo.setColumnVisible("unitCd2", false);
    gr_commInfo.setColumnVisible("tplPrdtKndCd", false);
    gr_commInfo.setColumnVisible("tplOrderClsCd", false);

    //Pallet정보 영역 보이기
    grp_pallet.setStyle("display", ""); //ASIS : opt_palletGrid, opt_palletBtn, opt_palletTitle
  }
};

//-------------------------------------------------------------------------
// 보관오더조회
//-------------------------------------------------------------------------
scwin.f_StorageOrder = async function (row) {
  var row = ds_commInfo.getRowPosition();
  var args = new Array();
  args[0] = "O"; //입출고구분
  args[1] = ed_wrkPlCd.getValue(); //작업장코드 - 장치장(출발지)
  args[2] = ed_wrkPlCdNm.getValue(); //작업장명 - 장치장(출발지)
  args[3] = ds_commInfo.getCellData(row, "bilgClntNo"); //거래처코드 - 화주코드(청구화주코드)
  args[4] = ds_commInfo.getCellData(row, "bilgClntNm"); //거래처명 - 화주코드(청구화주코드)
  args[5] = ds_commInfo.getCellData(row, "impExpClsCd"); //수출입구분코드
  args[6] = ds_commInfo.getCellData(row, "commCd"); //품명코드
  args[7] = ds_commInfo.getCellData(row, "commNm"); //품명명
  args[8] = ds_commInfo.getCellData(row, "rltNo"); //BL번호
  args[9] = ""; //오더일자From
  args[10] = ""; //오더일자To

  let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_33p.xml";
  let opts = {
    id: "op_302_01_33p",
    popupName: "보관오더조회",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 650,
    title: "보관오더조회"
  };
  let rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  if (rtnValues != null && rtnValues[0] != "N/A") {
    ds_commInfo.setCellData(row, "strOdrNo", rtnValues[0]); //보관오더
    ds_commInfo.setCellData(row, "strCommSeq", rtnValues[1]); //보관오더품명순번
    ds_commInfo.setCellData(row, "strWrkPathSeq", rtnValues[2]); //보관오더작업경로순번
    ds_commInfo.setCellData(row, "strWrkStpSeq", rtnValues[3]); //보관오더작업단계순번

    for (var i = row; i < ds_commInfo.getRowCount(); i++) {
      if (ds_commInfo.getCellData(i, "strOdrNo") == "") {
        ds_commInfo.setCellData(i, "strOdrNo", rtnValues[0]); //보관오더
        ds_commInfo.setCellData(i, "strCommSeq", rtnValues[1]); //보관오더품명순번
        ds_commInfo.setCellData(i, "strWrkPathSeq", rtnValues[2]); //보관오더작업경로순번
        ds_commInfo.setCellData(i, "strWrkStpSeq", rtnValues[3]); //보관오더작업단계순번
      }
    }
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveOutInfo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  if (cbx_autoPrint.getValue() == "1") {
    scwin.f_OzReport2();
  }
  ds_commInfo.setJSON([]);
  ds_stockMgnt.setJSON([]);
  ds_palletInfo.setJSON([]);
  ica_ioDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_ioHh.setValue($c.date.getServerDateTime($p, "HHmm"));
  ed_vehclWt.setValue("");
  ed_vehclShortCd.setValue("");
  scwin.hid_vehclShortCd = "";
  ed_vehclNo.setValue("");
  scwin.hid_vehclNo = "";
  ed_copCoClntNo.setValue("");
  scwin.hid_copCoClntNo = "";
  ed_copCoClntNm.setValue("");
  scwin.hid_copCoClntNm = "";
  tbx_cartype.setValue("");
  scwin.hid_ioVehclCd = "";
  ed_drvNm.setValue("");
  ed_drvTelNo.setValue("");
  scwin.hid_drvTelNo = "";
  cbx_alngvsslStockYn.setValue("");
  ;
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 출고 예정 정보 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveOutIntendInfo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCount = ds_outInfo.getRowCount();
  if (rowCount == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002));
    return;
  }
  tbx_totalRows1.setValue(rowCount);
};

//-------------------------------------------------------------------------
// 출고 상세 정보 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveOutInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.ds_commInfo_OnLoadCompleted();
  scwin.ds_stockMgnt_OnLoadCompleted();
};

//-------------------------------------------------------------------------
// 출고예정 재고조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveStockInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_commInfo.reform(); // ASIS에서는 IN_DS에 선언되면 트랜잭션 후 R처리됨
  scwin.ds_stockMgnt_OnLoadCompleted();
};

//-------------------------------------------------------------------------
// 출고 정보 삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_deleteOutInfo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_004));
  $c.gus.cfDisableObjects($p, [btn_delete]);

  // 초기화
  ds_commInfo.setJSON([]);
  ds_stockMgnt.setJSON([]);
  ds_palletInfo.setJSON([]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 출고 정보 수정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_updateOutInfo_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_003);
  scwin.f_Retrieve();
};
scwin.sbm_printGDN_submitdone = function (e) {};
scwin.sbm_updateSndClsCd_submitdone = async function (e) {
  await $c.win.alert($p, "전송값이 변경되었습니다.");
};

//-------------------------------------------------------------------------
// 출고 예정정보 그리드 : BOX customFormatter
//-------------------------------------------------------------------------
scwin.tplPackCnvrsnQtyExp = function (data, formatData, rowIdx, colIdx) {
  let qty = ds_outInfo.getCellData(rowIdx, "qty");
  return $c.gus.decode($p, qty / data);
};

//-------------------------------------------------------------------------
// 출고 예정정보 그리드 : 고객관리번호 customFormatter
//-------------------------------------------------------------------------
scwin.rltNoExp = function (data, formatData, rowIdx, colIdx) {
  let impExpClsCd = ds_outInfo.getCellData(rowIdx, "impExpClsCd");
  let blNo = ds_outInfo.getCellData(rowIdx, "blNo");
  let bookingNo = ds_outInfo.getCellData(rowIdx, "bookingNo");
  let shipIndictNo = ds_outInfo.getCellData(rowIdx, "shipIndictNo");
  return $c.gus.decode($p, impExpClsCd, "I", blNo, "O", bookingNo, "D", shipIndictNo);
};
scwin.coCdExp = function (data) {
  return $c.gus.decode($p, data, "P", "화학", "Q", "정밀");
};
scwin.tplSaleClsCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "농협", "2", "시판", "3", "농반", "4", "시반");
};
scwin.bizLongCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "인천공장", "2", "구미공장", "3", "전주공장");
};
scwin.tplPrdtKndCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "제품", "7", "비축", "8", "상품");
};
scwin.tplOrderClsCdExp = function (data) {
  return $c.gus.decode($p, data, "1", "이월비축", "2", "당년공급");
};

//-------------------------------------------------------------------------
// Pallet 정보 그리드 : Box customFormatter
//-------------------------------------------------------------------------
scwin.boxQtyExp = function (data, formatData, rowIdx, colIdx) {
  let qty = ds_commInfo.getCellData(rowIdx, "qty");
  let tplPackCnvrsnQty = ds_commInfo.getCellData(rowIdx, "tplPackCnvrsnQty");
  let boxQty = parseInt(qty) / parseInt(tplPackCnvrsnQty);
  return $c.gus.decode($p, boxQty);
};

//-------------------------------------------------------------------------
// 재고정보 그리드 : Zone customFormatter
//-------------------------------------------------------------------------
scwin.shipwgtPosExp = function (data, formatData, rowIdx, colIdx) {
  let blck = ds_stockMgnt.getCellData(rowIdx, "blck");
  return $c.gus.decode($p, blck);
};

//-------------------------------------------------------------------------
// 재고정보 그리드 : 재고Box customFormatter
//-------------------------------------------------------------------------
scwin.tplPackCnvrsnQtyExp = function (data, formatData, rowIdx, colIdx) {
  let rsltsQty = ds_stockMgnt.getCellData(rowIdx, "rsltsQty");
  let tplPackCnvrsnQty = ds_stockMgnt.getCellData(rowIdx, "tplPackCnvrsnQty");
  let tplPackCnvrsnQtyCa = parseInt(rsltsQty) / parseInt(tplPackCnvrsnQty);
  return $c.gus.decode($p, tplPackCnvrsnQtyCa);
};

//-------------------------------------------------------------------------
// 재고정보 그리드 : 출고Box customFormatter
//-------------------------------------------------------------------------
scwin.tplPackCnvrsnQtyExp = function (data, formatData, rowIdx, colIdx) {
  let outQty = ds_stockMgnt.getCellData(rowIdx, "outQty");
  let tplPackCnvrsnQty = ds_stockMgnt.getCellData(rowIdx, "tplPackCnvrsnQty");
  let tplPackCnvrsnQty2 = parseInt(outQty) / parseInt(tplPackCnvrsnQty);
  return $c.gus.decode($p, tplPackCnvrsnQty2);
};
scwin.btn_invoicePrint_onclick = function (e) {
  scwin.f_OzReport(1);
};
scwin.btn_qualityConfirm_onclick = function (e) {
  scwin.f_OzReport(2);
};
scwin.ds_stockMgnt_OnLoadCompleted = function () {
  if (ds_stockMgnt.getRowCount() > 0) {
    if (rd_outQryCond.getValue() == "1") {
      // 출고예정정보를 출고 등록하기전 화면상에서 임시로 출고번호 부여
      for (var i = 0; i < ds_stockMgnt.getRowCount(); i++) {
        for (var j = 0; j < ds_commInfo.getRowCount(); j++) {
          if (ds_commInfo.getCellData(j, "transWrkIndictNo") == ds_stockMgnt.getCellData(i, "transWrkIndictNo") && ds_commInfo.getCellData(j, "odrNo") == ds_stockMgnt.getCellData(i, "odrNo") && parseInt(ds_commInfo.getCellData(j, "commSeq")) == parseInt(ds_stockMgnt.getCellData(i, "commSeq")) && parseInt(ds_commInfo.getCellData(j, "wrkPathSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkPathSeq")) && parseInt(ds_commInfo.getCellData(j, "wrkStpSeq")) == parseInt(ds_stockMgnt.getCellData(i, "wrkStpSeq"))) {
            ds_stockMgnt.setCellData(i, "ioNo", ds_commInfo.getCellData(j, "ioNo"));
            ds_stockMgnt.setCellData(i, "ioPosSeq", i);
            break;
          }
        }
      }
    } else if (rd_outQryCond.getValue() == "2") {
      $c.gus.cfEnableObjects($p, [btn_delete]);
    }

    // 필터 사용 하도록 셋팅
    scwin.hid_useFilter = "1";
    // ds_stockMgnt.UseFilter = true;
    // ds_stockMgnt.filter();
    // ds_stockMgnt.UseFilter = false;
    scwin.ds_stockMgnt_OnFilter();
  }
};

// 품목정보의 로우 변경시 상세 출고정보 필터링
scwin.ds_commInfo_onrowpositionchange = function (info) {
  scwin.hid_useFilter = "1";
  // ds_stockMgnt.UseFilter = true;
  // ds_stockMgnt.filter();
  // ds_stockMgnt.UseFilter = false;

  scwin.ds_stockMgnt_OnFilter();
  scwin.ds_palletInfo_OnFilter();
};
scwin.ds_stockMgnt_OnFilter = function () {
  ds_stockMgnt.removeColumnFilterAll();
  if (scwin.hid_useFilter != "0") {
    let rowPos = ds_commInfo.getRowPosition();
    if (rowPos == null || rowPos < 0) rowPos = 0;
    let ioNo = ds_commInfo.getCellData(rowPos, "ioNo");
    $c.data.dataListFilter($p, ds_stockMgnt, "ioNo=='" + ioNo + "'");
  }
  tbx_totalRows4.setValue(ds_stockMgnt.getRowCount());
};
scwin.ds_palletInfo_OnFilter = function () {
  ds_palletInfo.removeColumnFilterAll();
  let ioNo = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioNo");
  $c.data.dataListFilter($p, ds_palletInfo, "ioNo=='" + ioNo + "'");
  tbx_totalRows3.setValue(ds_palletInfo.getRowCount());
};

// 출고 정보 조회시 차량 / 협력업체 정보 세팅
scwin.ds_commInfo_OnLoadCompleted = function () {
  let rowcnt = ds_commInfo.getRowCount();
  if (rowcnt > 0) {
    if (rd_outQryCond.getValue() == "2") {
      ed_vehclShortCd.setValue(ds_commInfo.getCellData(0, "vehclShortCd"));
      scwin.hid_vehclShortCd = ds_commInfo.getCellData(0, "vehclShortCd");
      ed_vehclNo.setValue(ds_commInfo.getCellData(0, "vehclNo"));
      scwin.hid_vehclNo = ds_commInfo.getCellData(0, "vehclNo");
      ed_copCoClntNo.setValue(ds_commInfo.getCellData(0, "copCoClntNo"));
      scwin.hid_copCoClntNo = ds_commInfo.getCellData(0, "copCoClntNo");
      ed_copCoClntNm.setValue(ds_commInfo.getCellData(0, "copCoClntNm"));
      scwin.hid_copCoClntNm = ds_commInfo.getCellData(0, "copCoClntNm");
      ica_ioDt.setValue(ds_commInfo.getCellData(0, "ioDt"));
      ed_ioHh.setValue(ds_commInfo.getCellData(0, "ioHh"));
      ed_vehclWt.setValue(parseFloat(ds_commInfo.getCellData(0, "vehclWt")));
      tbx_cartype.setValue(ds_commInfo.getCellData(0, "eqKndNm") + "/" + ds_commInfo.getCellData(0, "eqNrmNm"));
      scwin.hid_ioVehclCd = ds_commInfo.getCellData(0, "ioVehclCd");
    }
  }
};
scwin.getColumnMax = function (dataSetObj, colId) {
  var maxCol = -1;
  for (var row = 0; row < dataSetObj.getRowCount(); row++) {
    if (maxCol < dataSetObj.getCellData(row, colId)) {
      maxCol = dataSetObj.getCellData(row, colId);
    }
  }
  return maxCol;
};

// 현재 선택된 품명에 대한 pallet 정보를 추가하고 pallet의 종류 또는 수량을 입력하지 않으면 품명 선택을 변경하지 못함
scwin.ds_commInfo_onbeforerowpositionchange = async function (info) {
  for (var i = 0; i < ds_palletInfo.getRowCount(); i++) {
    if (ds_palletInfo.getCellData(i, "paletKndCd") == "") {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "Pallet 정보의 종류"));
      ds_commInfo.setRowPosition(info.oldRowIndex);
      //ds_palletInfo.setRowPosition(i);
      //gr_palletInfo.Focus();
      //gr_palletInfo.SetColumn("paletKndCd");
      gr_palletInfo.setFocusedCell(i, "paletKndCd", false);
      return false;
    }
    if (parseInt(ds_palletInfo.getCellData(i, "paletQty")) == 0) {
      //$c.win.alert(MSG_CM_ERR_013, ["Pallet 정보의 수량,1"]);
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "Pallet 정보의 수량", 1));
      ds_commInfo.setRowPosition(info.oldRowIndex);
      // ds_palletInfo.RowPositon = i;
      // gr_palletInfo.Focus();
      // gr_palletInfo.SetColumn("paletQty");
      gr_palletInfo.setFocusedCell(i, "paletQty", false);
      return false;
    }
  }
};
scwin.rd_outQryCond_onviewchange = async function (info) {
  if (ds_stockMgnt.getModifiedIndex().length != 0) {
    let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (ret) {
      scwin.f_Reset();
      scwin.hid_outQryCond = rd_outQryCond.getValue();
    } else {
      rd_outQryCond.setValue(scwin.hid_outQryCond);
      return;
    }
  } else {
    scwin.f_Reset();
    scwin.hid_outQryCond = rd_outQryCond.getValue();
  }
  scwin.f_controlComp(0);
};

//-------------------------------------------------------------------------
// 출고 예정정보 그리드 더블클릭 이벤트
//-------------------------------------------------------------------------
scwin.gr_outInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_controlComp(rowIndex);
  ds_commInfo.setJSON([]);
  ds_stockMgnt.setJSON([]);
  ds_palletInfo.setJSON([]);

  //출고등록일때
  if (rd_outQryCond.getValue() == "1") {
    scwin.f_AddCommInfo(rowIndex);
    if (ds_outInfo.getCellData(rowIndex, "stockMgntYn") == 0) {
      //재고 관리 안함
      if (ds_commInfo.getRowCount() > 1) {
        for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
          ds_commInfo.setRowPosition(i);
          if (ds_outInfo.getCellData(rowIndex, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG && ds_commInfo.getCellData(i, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_DAEYANG && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_SIWHA && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_BANWOL
          //&& ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W147" &&
          //ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W148"
          )
            // 안산 공장일 경우 롤번호 입력 안함
            {
              for (var j = 0; j < parseInt(ds_commInfo.getCellData(i, "qty")); j++) {
                scwin.f_stockAddRow2();
              }
            } else {
            scwin.f_stockAddRow();
          }
        }
        ds_commInfo.setRowPosition(0);
      } else {
        ds_commInfo.setRowPosition(0);
        if (ds_outInfo.getCellData(rowIndex, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG && ds_commInfo.getCellData(i, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_DAEYANG && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_SIWHA && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_BANWOL
        //&& ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W147" &&
        //ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W148"
        )
          // 안산 공장일 경우...적용 안함..
          {
            for (var j = 0; j < parseInt(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "qty")); j++) {
              scwin.f_stockAddRow2();
            }
          } else {
          scwin.f_stockAddRow();
        }
      }
    } else {
      if (ds_outInfo.getCellData(rowIndex, "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG && ds_commInfo.getCellData(i, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_DAEYANG && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_SIWHA && ds_commInfo.getCellData(1, "ioWrkPlCd") != DsConstants.WRK_PL_SINDAEYANG_BANWOL
      //&& ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W147" &&
      //ds_commInfo.NameValue(1, "ioWrkPlCd")!="4W148"
      )
        // 안산 공장일 경우 롤번호 입력 안함
        {
          for (var i = 0; i < ds_commInfo.getRowCount(); i++) {
            ds_commInfo.setRowPosition(i);
            for (var j = 0; j < parseInt(ds_commInfo.getCellData(i, "qty")); j++) {
              scwin.f_stockAddRow2();
            }
          }
        } else {
        if (ds_commInfo.getRowCount() > 0) {
          scwin.hid_ioNo = ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioNo");
          $c.sbm.execute($p, sbm_retrieveStockInfo);
        }
      }
    }
    scwin.hid_stockMgntYn = ds_outInfo.getCellData(rowIndex, "stockMgntYn");
  } else if (rd_outQryCond.getValue() == "2") {
    ds_srchOutInfo.removeAll();
    $c.gus.cfCopyDataSetHeader($p, ds_outInfo, ds_srchOutInfo);
    ds_srchOutInfo.setRowJSON(0, ds_outInfo.getRowJSON(rowIndex)); // 데이터셋 복사    

    $c.sbm.execute($p, sbm_retrieveOutInfo);
  }
  if (ds_outInfo.getRowCount() > 0) {
    if (rd_outQryCond.getValue() == "1") {
      ed_vehclShortCd.setValue(ds_outInfo.getCellData(rowIndex, "vehclShortCd"));
      scwin.hid_vehclShortCd = ds_outInfo.getCellData(rowIndex, "vehclShortCd");
      ed_vehclNo.setValue(ds_outInfo.getCellData(rowIndex, "vehclNo"));
      scwin.hid_vehclNo = ds_outInfo.getCellData(rowIndex, "vehclNo");
      ed_copCoClntNo.setValue(ds_outInfo.getCellData(rowIndex, "copCoClntNo"));
      scwin.hid_copCoClntNo = ds_outInfo.getCellData(rowIndex, "copCoClntNo");
      ed_copCoClntNm.setValue(ds_outInfo.getCellData(rowIndex, "copCoClntNm"));
      scwin.hid_copCoClntNm = ds_outInfo.getCellData(rowIndex, "copCoClntNm");
      ed_drvNm.setValue(ds_outInfo.getCellData(rowIndex, "drvNm"));
      ed_drvTelNo.setValue(ds_outInfo.getCellData(rowIndex, "drvTelNo"));
      tbx_cartype.setValue(ds_outInfo.getCellData(rowIndex, "eqKndNm") + "/" + ds_outInfo.getCellData(rowIndex, "eqNrmNm"));
      scwin.hid_ioVehclCd = ds_outInfo.getCellData(rowIndex, "ioVehclCd");
    } else if (rd_outQryCond.getValue() == "2") {
      ed_drvNm.setValue(ds_outInfo.getCellData(rowIndex, "drvNm"));
      ed_drvTelNo.setValue(ds_outInfo.getCellData(rowIndex, "drvTelNo"));
    }
  }

  //오더번호 더블클릭시 "벌크오더"연결
  if (columnId == "odrNo") {
    // 오더세부사항 조회
    scwin.f_orderDetail();
  }
  ed_vehclNo.setReadOnly(false);
  ed_copCoClntNm.setReadOnly(false);
  ed_drvNm.setReadOnly(false);
  ed_drvTelNo.setReadOnly(false);
  ed_vehclWt.setReadOnly(false);
  //cbx_alngvsslStockYn.readOnly=false;
  ed_drvNm.setReadOnly(false);
  $c.gus.cfEnableObjects($p, [btn_srchMchtMidCd1, btn_srchMchtMidCd2, ed_vehclShortCd, ed_copCoClntNo]);
  ed_nonCtrlRsn.setValue("");
  acb_sellMainMainPattern1.setSelectedIndex(0);

  //거래처에 따라 품명정보를 다르게 보여줌
  if (ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_HANNONG) {
    scwin.f_changeTable(1);
  } else {
    scwin.f_changeTable(2);
  }
  tbx_totalRows2.setValue(ds_commInfo.getRowCount());
  tbx_totalRows3.setValue(ds_palletInfo.getRowCount());
  tbx_totalRows4.setValue(ds_stockMgnt.getRowCount());
};

// 출고등록시 재고관리하는 품명, 수량 입력시 중량,cbm 계산
// ASIS CanColumnPosChange, OnExit 이벤트
scwin.gr_stockMgnt_onafteredit = async function (rowIndex, columnIndex, value) {
  //15:outQty
  if (columnIndex == 15 && parseInt(ds_stockMgnt.getCellData(rowIndex, "outQty")) != 0) {
    if (parseFloat(ds_stockMgnt.getCellData(rowIndex, "outWt")) == 0) {
      let outWt = Math.round(parseInt(ds_stockMgnt.getCellData(rowIndex, "outQty")) * (parseFloat(ds_stockMgnt.getCellData(rowIndex, "rsltsWt")) / parseInt(ds_stockMgnt.getCellData(rowIndex, "rsltsQty"))) * 1000) / 1000;
      ds_stockMgnt.setCellData(rowIndex, "outWt", outWt);
    }
    if (parseFloat(ds_stockMgnt.getCellData(rowIndex, "outCbm")) == 0) {
      if (parseFloat(ds_stockMgnt.getCellData(rowIndex, "rsltsCbm")) != 0 && parseInt(ds_stockMgnt.getCellData(rowIndex, "rsltsQty")) != 0) {
        let outCbm = Math.round(parseInt(ds_stockMgnt.getCellData(rowIndex, "outQty")) * (parseFloat(ds_stockMgnt.getCellData(rowIndex, "rsltsCbm")) / parseInt(ds_stockMgnt.getCellData(rowIndex, "rsltsQty"))) * 1000) / 1000;
        ds_stockMgnt.setCellData(rowIndex, "outCbm", outCbm);
      }
    }
  }
  if (rowIndex > -1 && ds_stockMgnt.getRowCount() > rowIndex) {
    switch (columnIndex) {
      case 8:
        //clntMgntNo
        if (ds_stockMgnt.getCellData(rowIndex, "clntMgntNo") != "" && ds_stockMgnt.getCellData(rowIndex, "clntMgntNo") != value) {
          //scwin.f_openCommPopUpGrid(Row, 'T');
        } else if (ds_stockMgnt.getCellData(rowIndex, "clntMgntNo") == "") {
          ds_stockMgnt.setCellData(rowIndex, "clntMgntNo", "");
        }
        break;
      case 15:
        // outQty

        var sumOutQty = 0;
        var sumOutWt = 0;
        var sumCbm = 0;
        var cnt_ds_stockMgnt = ds_stockMgnt.getRowCount();
        var tempWt = parseFloat(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "wt")) + 0.001 - 0.001;
        var tempQty = parseFloat(ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "qty"));
        var lastTempQty = tempQty;
        var lastTempWt = tempWt;
        var basicWt = tempWt / tempQty; //수량 1 당 중량

        //출고할 물량들의 수량,중량 총합
        for (var j = 0; j < ds_stockMgnt.getRowCount(); j++) {
          sumOutQty = parseFloat(sumOutQty) + parseFloat(ds_stockMgnt.getCellData(j, "outQty"));
          sumOutWt = parseFloat(sumOutWt) + parseFloat(ds_stockMgnt.getCellData(j, "outWt"));
          sumCbm = parseFloat(sumCbm) + parseFloat(ds_stockMgnt.getCellData(j, "outCbm"));
        }

        //입력수량이 품명수량보다 많을때
        if (sumOutQty > tempQty || Math.round(sumOutWt) > Math.round(tempWt) || sumCbm > ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "cbm")) {
          await $c.win.alert($p, "분할 수량,중량,CBM 이 품명정보의 총 수량,중량,CBM 을 초과합니다. ");
          return;
        } else {
          ds_stockMgnt.setCellData(rowIndex, "outWt", parseFloat(ds_stockMgnt.getCellData(rowIndex, "outQty")) * parseFloat(basicWt));
        }

        //입력수량이 품명수량보다 적을때
        if (sumOutQty < tempQty || Math.round(sumOutWt) < Math.round(tempWt) || sumCbm < ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "cbm")) {
          await $c.win.alert($p, "분할 수량,중량,CBM 이 품명정보의 총 수량,중량,CBM 에 미달합니다. ");
          return;
        } else {
          ds_stockMgnt.setCellData(rowIndex, "outWt", parseFloat(ds_stockMgnt.getCellData(rowIndex, "outQty")) * parseFloat(basicWt));
        }
        for (var k = 0; k < ds_stockMgnt.getRowCount() - 1; k++) {
          lastTempQty = lastTempQty - parseFloat(ds_stockMgnt.getCellData(k, "outQty"));
          lastTempWt = lastTempWt - parseFloat(ds_stockMgnt.getCellData(k, "outWt"));
        }
        ds_stockMgnt.setCellData(ds_stockMgnt.getRowCount(), "outWt", lastTempWt);
        ds_stockMgnt.setCellData(ds_stockMgnt.getRowCount(), "outQty", lastTempQty);
        var sumStockMgntQty = 0;
        var sumStockMgntWt = 0;
        for (var a = 0; a < ds_stockMgnt.getRowCount(); a++) {
          sumStockMgntQty = parseFloat(sumStockMgntQty) + parseFloat(ds_stockMgnt.getCellData(a, "outQty"));
          sumStockMgntWt = parseFloat(sumStockMgntWt) + parseFloat(ds_stockMgnt.getCellData(a, "outWt"));
        }
        if (sumStockMgntQty == tempQty && Math.abs(sumStockMgntWt - tempWt) < scwin.bufferWt) {
          await $c.win.alert($p, "수량,중량이 일치합니다. 총수량=>" + sumStockMgntQty + "/총중량=>" + sumStockMgntWt);
        } else if (sumStockMgntQty != tempQty || Math.abs(sumStockMgntWt - tempWt) >= scwin.bufferWt) {
          await $c.win.alert($p, "수량,중량이 일치하지 않습니다. 총수량=>" + sumStockMgntQty + "/총중량=>" + sumStockMgntWt);
          //gr_stockMgnt.focus();
          gr_stockMgnt.setFocusedCell(rowIndex, "outQty", false);
        }
        break;
    }
  }
};

// -입력 경고
scwin.gr_outInfo_onkeydown = async function (e) {
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_HANNONG) {
    if (e.keyCode == 189 || e.keyCode == 109) {
      await $c.win.alert($p, "- 값을 입력할 수 없습니다.");
    }
  }
};
scwin.gr_commInfo_onkeydown = async function (e) {
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_HANNONG) {
    if (e.keyCode == 189 || e.keyCode == 109) {
      await $c.win.alert($p, "- 값을 입력할 수 없습니다.");
    }
  }
};
scwin.gr_stockMgnt_onkeydown = async function (e) {
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") != OpConstants.ST_REPCLNTNO_HANNONG) {
    if (e.keyCode == 189 || e.keyCode == 109) {
      await $c.win.alert($p, "- 값을 입력할 수 없습니다.");
    }
  }
};
scwin.ds_stockMgnt_onrowpositionchange = function (info) {
  $c.gus.cfPrepareHidVal($p, ds_stockMgnt, info.oldRowIndex, ["clntMgntNo"]);
};
scwin.acb_sellMainMainPattern1_onviewchange = function (info) {
  if (acb_sellMainMainPattern1.getText() == '기타' || acb_sellMainMainPattern1.getText() == '선택') {
    ed_nonCtrlRsn.setValue("");
  } else {
    ed_nonCtrlRsn.setValue(acb_sellMainMainPattern1.getText());
  }
};

//-------------------------------------------------------------------------
// 작업장코드 UDC START
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_wrkPlCd.getValue(), ed_wrkPlCdNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlCdNm, 2);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCdNm, ed_wrkPlCd, 2, false);
};
scwin.udc_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlCdNm);
};
//-------------------------------------------------------------------------
// 작업장코드 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 작업예정장비 UDC START
//-------------------------------------------------------------------------
scwin.udc_eqCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_eqNm.getValue(), 'T', 'T');
};
scwin.udc_eqCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_eqCd, ed_eqNm, 1);
};
scwin.udc_eqCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_eqNm, ed_eqCd, 1, false);
};
scwin.udc_eqCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_eqCd, ed_eqNm);
};
//-------------------------------------------------------------------------
// 작업예정장비 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 도착지 UDC START
//-------------------------------------------------------------------------
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 6);
};
scwin.udc_arvWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 6, false);
};
scwin.udc_arvWrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvWrkPlCd, ed_arvWrkPlNm);
};
//-------------------------------------------------------------------------
// 도착지 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명 UDC START
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_commCd.getValue(), ed_commNm.getValue(), 'T', 'T');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 4);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 4, false);
};
scwin.udc_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_commNm);
};
//-------------------------------------------------------------------------
// 품명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_vehclShortCd_onclickEvent = function (e) {
  scwin.f_popupForJAGAForButton();
};
scwin.udc_vehclShortCd_onblurCodeEvent = function (e) {
  scwin.f_popupForJAGA();
};
scwin.udc_vehclShortCd_onviewchangeNameEvent = function (info) {
  scwin.f_popupForJAGA();
};
scwin.udc_vehclShortCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vehclShortCd, ed_vehclNo);
};
//-------------------------------------------------------------------------
// 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 협력업체명 UDC START
//-------------------------------------------------------------------------
scwin.udc_copCoClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), 'T', 'T');
};
scwin.udc_copCoClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, ed_copCoClntNm, 8);
};
scwin.udc_copCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_copCoClntNm, ed_copCoClntNo, 8, false);
};
scwin.udc_copCoClntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_copCoClntNo, ed_copCoClntNm);
};
//-------------------------------------------------------------------------
// 협력업체명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명정보 그리드 보관오더(strOdrNo) Popup 클릭
//-------------------------------------------------------------------------
scwin.gr_commInfo_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 16) {
    //보관오더(strOdrNo)
    scwin.f_StorageOrder(rowIndex);
  }
};
//-------------------------------------------------------------------------
// 재고정보 그리드 LOT번호(clntMgntNo) Popup 클릭
//-------------------------------------------------------------------------
scwin.gr_stockMgnt_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 8) {
    //LOT번호(clntMgntNo)
    scwin.f_openCommPopUpGrid(rowIndex, 'F');
  }
};

//-------------------------------------------------------------------------
// LOT번호 그리드 공통코드 콜백
//-------------------------------------------------------------------------
scwin.udc_clntMgntNo_callBackFunc = async function (rtnList) {
  var row = gr_stockMgnt.getFocusedRowIndex();
  var pName = ds_stockMgnt.getCellData(row, "commCd");
  if (rtnList != null && rtnList[3] == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    if (pName != rtnList[1]) {
      await $c.win.alert($p, "롤번호의 품명이 일치하지 않습니다.<br>다시 한번 확인해 주십시요.");
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_stockMgnt, row, "clntMgntNo");
      ds_stockMgnt.setCellData(row, "clntMgntNo", "");
      return;
    }

    // 수량이 0인지 체크한다.
    if (parseInt(rtnList[5]) == 0) {
      await $c.win.alert($p, "입력하신 롤번호에 해당하는 품목의 수량이 0입니다.<br>다시 한번 확인해 주십시요.");
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_stockMgnt, row, "clntMgntNo");
      ds_stockMgnt.setCellData(row, "clntMgntNo", "");
      return;
    }
    ds_stockMgnt.setCellData(row, "outWt", parseFloat(rtnList[2]) * parseFloat(parseInt(ds_stockMgnt.getCellData(row, "outQty"))));
    ds_stockMgnt.setCellData(row, "blck", rtnList[6]); // BLOCK

    var temp = rtnList[7].split("-");
    ds_stockMgnt.setCellData(row, "rw", temp[0]); // ROW
    ds_stockMgnt.setCellData(row, "bay", temp[1]); // BAY
    ds_stockMgnt.setCellData(row, "tier", temp[2]); // tier
    ds_stockMgnt.setCellData(row, "prodDt", rtnList[9]); // 생산일자
    ds_stockMgnt.setCellData(row, "stockMgntNo", rtnList[4]); // 재고관리번호
    ds_stockMgnt.setCellData(row, "commStsCd", "N1"); // 상태..
    ds_stockMgnt.setCellData(row, "wrkPlCd", ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "ioWrkPlCd")); // 작업장 코드 셋팅 ..
  }
  scwin.cfSetGridReturnValue_1(rtnList, ds_stockMgnt, row, "clntMgntNo");

  // 화주가 신대양일 경우 중복 Roll No. 입력여부 확인
  if (ds_commInfo.getCellData(ds_commInfo.getRowPosition(), "repClntNo") == OpConstants.ST_REPCLNTNO_SINDAEYANG) {
    for (var j = 0; j < ds_stockMgnt.getRowCount(); j++) {
      if (ds_stockMgnt.getCellData(j, "clntMgntNo") != "" && j != row && ds_stockMgnt.getCellData(j, "clntMgntNo") == ds_stockMgnt.getCellData(row, "clntMgntNo")) {
        await $c.win.alert($p, "중복된 Roll 번호입니다. 다시 입력해 주십시요.");
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_stockMgnt, row, "clntMgntNo");
        ds_stockMgnt.setCellData(row, "clntMgntNo", "");
        ds_stockMgnt.setCellData(row, "outWt", ds_stockMgnt.getOriginalCellData(row, "outWt"));
        ds_stockMgnt.setCellData(row, "blck", ""); // BLOCK
        ds_stockMgnt.setCellData(row, "rw", ""); // ROW
        ds_stockMgnt.setCellData(row, "bay", ""); // BAY
        ds_stockMgnt.setCellData(row, "tier", ""); // tier
        ds_stockMgnt.setCellData(row, "prodDt", ""); // 생산일자
        ds_stockMgnt.setCellData(row, "stockMgntNo", ""); // 재고관리번호
        ds_stockMgnt.setCellData(row, "commStsCd", ""); // 상태..
        ds_stockMgnt.setCellData(row, "wrkPlCd", ""); // 작업장 코드 ..

        return;
      }
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',id:'rd_outQryCond',ref:'data:ds_srchCond.outQryCond',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',cols:'1',class:'rdo-grp',title:'조회구분',mandatory:'true','ev:onviewchange':'scwin.rd_outQryCond_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출고등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출고삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlCdNm',btnId:'btn_wrkPlCd',id:'udc_wrkPlCd',selectID:'',mandatoryCode:'true',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',refDataCollection:'ds_srchCond',code:'wrkPlCd','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',validTitle:'작업장코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'outDt',style:'',id:'udc_outDt',refEdDt:'outDtTo',refDataMap:'ds_srchCond',edFromId:'ed_outDt',edToId:'ed_outDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{id:'',class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부오더',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:' w110',id:'ed_odrNo',maxlength:'13',placeholder:'',ref:'data:ds_srchCond.odrNo',style:'','ev:onkeyup':'scwin.onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업예정장비',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_eqCd',codeId:'ed_eqCd','ev:onblurCodeEvent':'scwin.udc_eqCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_eqCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_eqCd_onviewchangeNameEvent',id:'udc_eqCd',maxlengthCode:'7',nameId:'ed_eqNm',popupID:'',refDataCollection:'ds_srchCond',style:'',name:'eqCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_arvWrkPlCd',code:'arvWrkPlCd',codeId:'ed_arvWrkPlCd','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPlCd_onviewchangeNameEvent',id:'udc_arvWrkPlCd',maxlengthCode:'6',nameId:'ed_arvWrkPlNm',popupID:'',refDataCollection:'ds_srchCond',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',btnId:'btn_commCd',code:'commCd',codeId:'ed_commCd','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',id:'udc_commCd',maxlengthCode:'8',nameId:'ed_commNm',popupID:'',refDataCollection:'ds_srchCond',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:' w110',id:'ed_clntMgntNo',maxlength:'13',placeholder:'',ref:'data:ds_srchCond.clntMgntNo',style:'','ev:onkeyup':'scwin.onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_SetInitCondVal'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_outInfoNm',label:'출고 예정정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_outInfo',id:'udc_topGrdBtn1',gridUpYn:'N',grdDownOpts:'{"fileName":"출고 정보.xlsx","sheetName":"출고 정보","type":"4+8+16"}',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:ds_outInfo',scrollByColumn:'false',style:'',id:'gr_outInfo',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_outInfo_oncelldblclick','ev:onkeydown':'scwin.gr_outInfo_onkeydown',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',value:'오더번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'화주오더번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'품명코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'190',inputType:'text',id:'column9',value:'품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'30',inputType:'text',id:'column8',value:'규격',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'청구거래처<br/>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'150',inputType:'text',id:'column7',value:'청구거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'30',inputType:'text',id:'column6',value:'I/O',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'ioIntendDtHd',value:'예정일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'50',inputType:'text',id:'ioIntendHhHd',value:'예정시간',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'차량단축코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column3',value:'예정차량',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'90',inputType:'text',id:'column32',value:'납품처',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'30',inputType:'text',id:'column23',value:'D/O',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'30',inputType:'text',id:'column26',value:'수량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'30',inputType:'text',id:'column29',value:'중량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'4',width:'280',inputType:'text',id:'column56',value:'예정물량',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'column44',value:'실적물량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'column41',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'column59',value:'고객관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'품명순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'작업경로순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'작업단계순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column62',value:'합적번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'재고관리여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',value:'BL No',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',value:'Booking No',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'거래처관리번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipIndictNo',value:'출하지시번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',value:'수입수출구분코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column94',value:'미니멈여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'다착지여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'길이',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',value:'min여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column106',value:'요율적용여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dmndNm',value:'거래처',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',value:'Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'odrNo',blockSelect:'false',displayMode:'label',class:'underline',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntOdrNo',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'commCd',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'190',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'text',id:'qtyUnitCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'bilgClntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'text',id:'ioClsCd',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ioIntendDt',blockSelect:'false',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',id:'ioIntendHh',blockSelect:'false',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ioVehclCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'vehclNo',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'tplArvNmCmpy',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'doYn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'30',inputType:'expression',id:'qtyUnitCd2',displayMode:'label',textAlign:'left',expression:'datalist(\'qtyUnitCd\')'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'unitCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPackCnvrsnQty',displayMode:'label',customFormatter:'scwin.tplPackCnvrsnQtyExp',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transWrkIndictNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rltNo',displayMode:'label',textAlign:'left',customFormatter:'scwin.rltNoExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPathSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockMgntYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bookingNo',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntMgntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipIndictNo',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column102',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dmndNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_vehclInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',btnId:'btn_srchMchtMidCd1',id:'udc_vehclShortCd',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_vehclShortCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclShortCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclShortCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',nameId:'ed_copCoClntNm',codeId:'ed_copCoClntNo',btnId:'btn_srchMchtMidCd2',id:'udc_copCoClntNo','ev:onclickEvent':'scwin.udc_copCoClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_copCoClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_copCoClntNo_onviewchangeNameEvent',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_drvNm',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_drvTelNo',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group4',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ioDt',style:'','ev:onclick':'scwin.f_openCalendar',displayFormat:'yyyy/MM/dd',calendarDisplayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_ioHh',style:'',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계근 중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85 tar',id:'ed_vehclWt',placeholder:'',style:'',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_cartype',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선측여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_alngvsslStockYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선측 재고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품명정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"품명정보.xlsx","sheetName":"품명정보","type":"4+8+16"}',gridID:'gr_commInfo',gridUpYn:'N',templateYn:'N',id:'udc_topGrdBtn2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_commInfo',id:'gr_commInfo',visibleRowNum:'3',class:'wq_gvw',defaultCellHeight:'24',readOnly:'true',fixedColumn:'3',rowStatusVisible:'true','ev:onkeydown':'scwin.gr_commInfo_onkeydown','ev:ontextimageclick':'scwin.gr_commInfo_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',id:'column3',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column5',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'청구거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'구매거부구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplStatecentCd',value:'도센터구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'처리공장구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'회사구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'판매구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'공장구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column38',value:'포장<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'제품구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',value:'발주구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'LOT번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strOdrNo',class:'txt-blue',value:'보관오더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',class:'txt-blue',value:'송장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column65',value:'수량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column62',value:'중량<br/>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',value:'Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'관련번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column95',value:'품명순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column98',value:'작업경로순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column92',value:'작업단계순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'합적번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'입출고번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',textAlign:'left',checkboxLabel:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'qtyUnitCd',class:'tar',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNm',class:'tar',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplBuyRfslCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tplProcFctyCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',class:'tar',displayMode:'label',textAlign:'left',customFormatter:'scwin.coCdExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplSaleClsCd',class:'tar',displayMode:'label',textAlign:'left',displayFormatter:'scwin.tplSaleClsCdExp',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizLongCd',displayMode:'label',textAlign:'left',displayFormatter:'scwin.bizLongCdExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'unitCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplPrdtKndCd',displayMode:'label',textAlign:'left',displayFormatter:'scwin.tplPrdtKndCdExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplOrderClsCd',displayMode:'label',textAlign:'left',displayFormatter:'scwin.tplOrderClsCdExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntMgntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'strOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'invoiceNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'30',inputType:'expression',id:'qtyUnitCd2',displayMode:'label',textAlign:'left',readOnly:'true',expression:'datalist(\'qtyUnitCd\')'}},{T:1,N:'w2:column',A:{width:'30',inputType:'expression',id:'unitCd2',displayMode:'label',textAlign:'left',readOnly:'true',expression:'datalist(\'unitCd\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'boxQty',displayMode:'label',textAlign:'center',customFormatter:'scwin.boxQtyExp',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rltNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPathSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coshippingNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ioNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column61',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'qty\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column58',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'boxQty\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column55',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',expression:'sum(\'wt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column46',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'cbm\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'grp_pallet',style:'width: 500px'},E:[{T:1,N:'xf:group',A:{class:'title-wrap ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Pallet정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_palletInfo',id:'gr_palletInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'입출고번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'팔래트 순번',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'txt-blue',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'종류',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'txt-blue',displayMode:'label',id:'column3',inputType:'text',removeBorderStyle:'false',value:'수량',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ioNo',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'paletSeq',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'paletKndCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true',minLength:'1',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_paletCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'paletQty',inputType:'text',width:'70',textAlign:'right',minNumber:'1'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_paletAddRow',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',id:'udc_palletRow',btnCancelObj:'btn_palletCancel',btnRowAddObj:'btn_palletAddRow',btnRowDelObj:'btn_palletDelete',btnCancelYn:'Y',gridID:'gr_palletInfo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'재고정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',grdDownOpts:'{"fileName":"재고정보.xlsx","sheetName":"재고정보","type":"4+8+16"}',gridID:'gr_stockMgnt',templateYn:'N',gridUpYn:'N',id:'udc_topGrdBtn3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',dataList:'data:ds_stockMgnt',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_stockMgnt',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true','ev:onafteredit':'scwin.gr_stockMgnt_onafteredit',rowStatusVisible:'true','ev:onkeydown':'scwin.gr_stockMgnt_onkeydown','ev:ontextimageclick':'scwin.gr_stockMgnt_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'80',inputType:'text',id:'column12',value:'상태',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'화주코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'화주',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'품명코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'190',inputType:'text',id:'column9',value:'품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'30',inputType:'text',id:'column8',value:'규격',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column7',value:'관련번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'100',inputType:'text',id:'column6',class:'txt-blue',value:'LOT번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'생산일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'80',inputType:'text',id:'column5',value:'Zone',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'4',removeBorderStyle:'false',width:'280',inputType:'text',id:'column4',value:'재고수량',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'4',width:'280',inputType:'text',id:'column32',value:'출고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'품명순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'작업경로순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'작업단계순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'입출고번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'입출고위치순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'재고관리번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column14',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'재고Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',class:'txt-blue',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'출고Box',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',class:'txt-blue',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',class:'txt-blue',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'select',id:'commStsCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'bilgClntNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'commCd',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'190',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'text',id:'qtyUnitCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'rltNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'textImage',id:'clntMgntNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prodDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'shipwgtPos',blockSelect:'false',displayMode:'label',textAlign:'left',customFormatter:'scwin.shipwgtPosExp',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'rsltsQty',blockSelect:'false',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'tplPackCnvrsnQty',blockSelect:'false',displayMode:'label',textAlign:'center',readOnly:'true',customFormatter:'scwin.tplPackCnvrsnQtyExp',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplPackCnvrsnQty2',displayMode:'label',textAlign:'right',readOnly:'true',allowChar:'0-9',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outWt',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outCbm',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPathSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ioNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ioPosSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockMgntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_buttonArea',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',rowAddFunction:'scwin.f_stockAddRow',btnCancelYn:'Y',gridID:'gr_stockMgnt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left tal flex-row',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-4'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_autoPrint',selectedindex:'0',renderType:'checkboxgroup',rows:'',cols:'',class:'chk-grp'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장후 바로출력'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_invoicePrint',style:'',type:'','ev:onclick':'scwin.btn_invoicePrint_onclick',objType:'bUpdate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'송장발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_qualityConfirm',style:'',type:'button','ev:onclick':'scwin.btn_qualityConfirm_onclick',objType:'bUpdate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'내화구조 품질확인서 발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_outbound',style:'',type:'button','ev:onclick':'scwin.f_outbound2',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'하선지반입신고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_signout',style:'',type:'button',objType:'bUpdate',userAuth:'P','ev:onclick':'scwin.f_outbound'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반출신고'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner '},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'미관제사유',class:'req txt-blue'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sellMainMainPattern1',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'선택',mandatory:'false',title:'미관제사유',objType:'data','ev:onviewchange':'scwin.acb_sellMainMainPattern1_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DTG차량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'구형폰'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'휴대폰문제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'설치오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지연보고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상보고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]}]}]},{T:1,N:'xf:input',A:{class:' w200',id:'ed_nonCtrlRsn',placeholder:'',style:'',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_updateSndClsCd',style:'',type:'button',objType:'bSave',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송값변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_clntMgntNo',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})