/*amd /ui/tn/op/bulktransworkmgnt/coshippinglinkreg/tn_303_01_01b.xml 80995 f9fd6c764435d632dfd797bea202b7f8fdc3081530db2c2a780f32bf084829d6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDistrictCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDistrictCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDstCd',name:'작업구간코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stWt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'endWt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSaleClsCd',name:'3자물류판매구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplOrderClsCd',name:'3자물류발주구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSelfClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkPlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_transWrkPlan_ondataload','ev:oncelldatachange':'scwin.ds_transWrkPlan_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldQty',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldGrossWt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'고객품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplRealCnvrsnQty',name:'3자물류실환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'3자물류도착지상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bigday',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pallet',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'3자물류도착지주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvTelNo',name:'3자물류도착지전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSelfClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routingSeq',name:'ROUTING순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkRoutingPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldQty',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldGrossWt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'고객품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplRealCnvrsnQty',name:'3자물류실환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'3자물류도착지상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bigday',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pallet',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'3자물류도착지주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvTelNo',name:'3자물류도착지전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSelfClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routingSeq',name:'ROUTING순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgIndex',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'timeSeq',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkRoutingPlanBefore',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldQty',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldGrossWt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'고객품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplRealCnvrsnQty',name:'3자물류실환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'3자물류도착지상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bigday',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pallet',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'3자물류도착지주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvTelNo',name:'3자물류도착지전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSelfClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routingSeq',name:'ROUTING순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgIndex',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'timeSeq',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkRoutingPlanAfter',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldQty',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oldGrossWt',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'고객품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPackCnvrsnQty',name:'3자물류포장환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplRealCnvrsnQty',name:'3자물류실환산수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'3자물류도착지상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bigday',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pallet',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'3자물류도착지주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvTelNo',name:'3자물류도착지전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSelfClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'납품처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routingSeq',name:'ROUTING순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgIndex',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'timeSeq',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkIndict',saveRemovedData:'true','ev:ondataload':'scwin.ds_transWrkIndict_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempCoshippingNo',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingSeq',name:'합적순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrReqYn',name:'고객요청여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'number'}},{T:1,N:'w2:column',A:{id:'routingSeq',name:'ROUTING순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_eqNrmCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqNrmCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.bulktransworkmgnt.coshippinglinkreg.RetrieveCoShippingTransVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_transWrkPlan","key":"OUT_DS1"},{"id":"ds_transWrkIndict","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_transWrkPlan","key":"OUT_DS1"},{"id":"ds_transWrkIndict","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.bulktransworkmgnt.coshippinglinkreg.RegistCoShippingLinkInformaionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_transWrkIndict","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/ncall.cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_eqNrmCd","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.loUpperLobranCd = "";
scwin.chk = true; //체크박스 이벤트 발생 체크하기 위한 변수
scwin.wtEventChk = false;
scwin.qtyEventChk = false;
scwin.hid_ctrtClntCd = "";
scwin.hid_ctrtClntNm = "";
scwin.hid_retrieveDmndListCd = "";
scwin.hid_retrieveDmndListNm = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  //scwin.loUpperLobranCd = memJson.loUpperLobranCd == null ? "" : memJson.loUpperLobranCd;
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_srchLobranCd"
  }, {
    method: "getLuxeComboData",
    param1: "NcallRegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "1", "2", "CMP"],
    compID: "lc_srchWrkDistrictCd1"
  }];
  $c.data.setGauceUtil($p, codeOptions2, scwin.callbackCd2);
  const listOptions = [{
    compID: "lc_srchOdrKndCd",
    method: "getCodeList",
    param1: "SD113",
    param2: [1, 3],
    param3: [DsConstants.ODR_BULK, "1"],
    outputFields: ["CD", "CD_NM", "FLTR_CD_1", "FLTR_CD_2"]
  }];
  $c.data.setDsCommonUtil($p, listOptions);

  //var params = $c.data.getParameter();

  //scwin.f_retrieveEqNrmCd();
};
scwin.callbackCd2 = function () {
  ///임시
  $p.setTimeout(function () {
    console.log(scwin.loUpperLobranCd);
    //lc_srchLobranCd.setValue("2AA");
    lc_srchLobranCd.setValue(scwin.loUpperLobranCd);
  }, {
    "delay": 50
  });

  ///임시
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_srchFromDate.setValue(scwin.vCurDate);
    ica_srchToDate.setValue(scwin.vCurDate);
    lc_srchLobranCd.setValue(scwin.loUpperLobranCd);
    ed_sum_wt.setValue(0);
    scwin.f_vehclNrm();
    ///임시        

    //lc_srchLobranCd.setValue("2AA");
    //ica_srchFromDate.setValue("20260409");
    //ica_srchToDate.setValue("20260409");

    ///임시        
  }, {
    "delay": 50
  });
};
scwin.f_vehclNrm = function () {
  const params = {
    sysCd: "NcallCommonEBC",
    queryId: "retriveNesEqNrmList",
    param1: "CT"
  };

  //데이터셋에 정보설정
  dma_eqNrmCd.setJSON(params);
  $c.sbm.execute($p, sbm_eqNrmCd);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchFromDate]))) {
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ica_srchToDate]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_srchFromDate.getValue(), ica_srchToDate.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_srchFromDate.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [tb_srchCond]))) return;

  //cfShowDSWaitMsg(gr_transWrkPlan);
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 계약처 조회 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 계약처  팝업
      rtnList = udc_srchCtrtClntCd.cfCommonPopUp(scwin.callbackClntList_tpro // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , ",5" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null);

      //cfSetReturnValue(rtnList, ed_srchCtrtClntCd, txt_ctrtClntNm);
      break;
  }
};

//-------------------------------------------------------------------------
// 합적번호에 해당하는 주문이 두개 이상일 경우만 합적연결물량에서 삭제 가능
//-------------------------------------------------------------------------
/*
function f_CheckCanDelete() 
{
	var obj = ds_transWrkIndict;
	var vCount = 0;
	var vCoShipNo = "";
	var flag = false;

	for( var i = 1; i <= obj.getRowCount(); i++ ){
		vCount = 0;
		vCoShipNo = obj.NameValue(i,"coshippingNo");
			
		for( var j = 1; j <= obj.getRowCount(); j++ ){
			if( obj.NameValue(j,"coshippingNo") == vCoShipNo ){
				vCount++;
			
				if( obj.getRowStatus(j) == 2 ){
					vCount--;
				}
			}
		}

		if( vCount == 1 ){
			cfAlertMsg(MSG_CM_ERR_041,["합적연결","2건이상만 저장이나 삭제"]);
			flag = true;
			
			gr_transWrkIndict.Focus();
			ds_transWrkIndict.getRowPosition() = i;
			break;
		}
	}
	
	return flag;
}
*/

//-------------------------------------------------------------------------
// 합적연결 물량 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  for (var j = ds_transWrkIndict.getRowCount() - 1; j >= 0; j--) {
    ds_transWrkIndict.setRowPosition(j);
    if (ds_transWrkIndict.getCellData(j, "chk") == "1" && ds_transWrkIndict.getRowStatus(j) != "V") {
      row = j;
      if (ds_transWrkIndict.getCellData(row, "cstmrReqYn") == 1) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["고객요청에 의한 합적연결물량", "삭제"]);
      } else if (ds_transWrkIndict.getCellData(row, "transWrkIndictNo") != "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["작업지시번호가 있는 물량", "삭제"]);
      } else {
        //운송물량에서 추가된 합적연결물량이면 취소된 중량값을 다시 운송물량에 설정
        if (ds_transWrkIndict.getRowStatus(row) == "C") {
          for (var i = 0; i < ds_transWrkPlan.getRowCount(); i++) {
            if (ds_transWrkPlan.getCellData(i, "odrNo") == ds_transWrkIndict.getCellData(row, "odrNo") && ds_transWrkPlan.getCellData(i, "commSeq") == ds_transWrkIndict.getCellData(row, "commSeq") && ds_transWrkPlan.getCellData(i, "odrWrkPathSeq") == ds_transWrkIndict.getCellData(row, "odrWrkPathSeq") && ds_transWrkPlan.getCellData(i, "odrWrkStpSeq") == ds_transWrkIndict.getCellData(row, "odrWrkStpSeq")) {
              scwin.qtyEventChk = true;
              ds_transWrkPlan.setCellData(i, "oldQty", parseInt(ds_transWrkPlan.getCellData(i, "oldQty")) + parseInt(ds_transWrkIndict.getCellData(row, "qty")));
              ds_transWrkPlan.setCellData(i, "qty", parseInt(ds_transWrkPlan.getCellData(i, "qty")) + parseInt(ds_transWrkIndict.getCellData(row, "qty")));
              ds_transWrkPlan.setCellData(i, "oldGrossWt", parseFloat(ds_transWrkPlan.getCellData(i, "oldGrossWt")) + parseFloat(ds_transWrkIndict.getCellData(row, "grossWt")));
              ds_transWrkPlan.setCellData(i, "grossWt", parseFloat(ds_transWrkPlan.getCellData(i, "grossWt")) + parseFloat(ds_transWrkIndict.getCellData(row, "grossWt")));
              scwin.qtyEventChk = false;
            }
          }
        }
        if (ds_transWrkIndict.getRowStatus(ds_transWrkIndict.getRowPosition()) == "C") {
          ds_transWrkIndict.removeRow(ds_transWrkIndict.getRowPosition());
        } else {
          //var row = ds_transWrkIndict.getRowPosition();
          ds_transWrkIndict.deleteRow(ds_transWrkIndict.getRowPosition());
          //ds_transWrkIndict.setRowPosition(row);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 합적연결 물량 삭제 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  ds_transWrkPlan.undoAll();
  //ds_transWrkIndict.undoAll();
  for (var i = ds_transWrkIndict.getRowCount() - 1; i >= 0; i--) {
    if (ds_transWrkIndict.getRowStatus(i) == "C") {
      ds_transWrkIndict.removeRow(i);
    } else {
      ds_transWrkIndict.undoRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 합적선택 물량 저장
//-------------------------------------------------------------------------
scwin.f_SaveCoshipping = async function () {
  if (ds_transWrkPlan.getRowCount() == 0 && ds_transWrkIndict.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, [""]);
    return;
  }
  if (ds_transWrkIndict.getModifiedIndex().length > 0) {} else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["연결물량"]);
    return;
  }

  /*  분할된 물량에 대해서도 합적번호를 부여할 수 있도록 함.	
    	//동일 합적번호가 2건이상인 경우에만 저장/삭제 가능
    	var cntCoshipping = 0 ;
    	var vCoShipNo = "";
   	for( var i = 1; i <= ds_transWrkIndict.getRowCount(); i++ ){
  		if(ds_transWrkIndict.NameValue(i,"coshippingNo") == "" && ds_transWrkIndict.getRowStatus(i) == 1){
  			cntCoshipping++;
  			continue;
  		}
  
  		vCount = 0;
  		vCoShipNo = ds_transWrkIndict.NameValue(i,"coshippingNo");
  		for( var j = 1; j <= ds_transWrkIndict.getRowCount(); j++ ){
  			
  			if( ds_transWrkIndict.NameValue(j,"coshippingNo") == vCoShipNo ){
  				vCount++;
  			
  				if( ds_transWrkIndict.getRowStatus(j) == 2 || ds_transWrkIndict.getRowStatus(j) == 4){
  					vCount--;
  				}
  			}
  		}
  
  		if( vCount == 1 ){
  			cfAlertMsg(MSG_CM_ERR_041,["합적연결","2건이상만 저장이나 삭제"]);
  			gr_transWrkIndict.Focus();
  			ds_transWrkIndict.getRowPosition() = i;
  			return ;
  		}
  	}
  	
  	if(cntCoshipping == 1){
  		cfAlertMsg(MSG_CM_ERR_041,["합적연결","2건이상만 저장이나 삭제"]);
  		return ;
  	}
  	
  */
  /*  	
  	// 수량 입력 확인
  	for( var i = 1; i <= ds_coshipping.getRowCount(); i++ ){
  		if( ds_coshipping.NameValue(i,"qty") == 0 && ds_coshipping.NameValue(i,"grossWt") == 0 && ds_coshipping.NameValue(i,"netWt") == 0 ){
  			cfAlertMsg(MSG_CM_WRN_003,[gr_coshipping.ColumnProp("qty","Name")+ " 또는" +gr_coshipping.ColumnProp("grossWt","Name")+ " 또는" +gr_coshipping.ColumnProp("netWt","Name")]);
  			ds_coshipping.getRowPosition() = i;
  			gr_coshipping.focus();
  			gr_coshipping.SetColumn("qty");
  			return;
  			break;			
  		}
  	}
  
  	//합적번호에 해당하는 주문이 두개 이상일 경우만 합적연결물량에서 삭제 가능
  	if( f_CheckCanDelete() )  return;	
  */

  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    //cfShowDSWaitMsg(gr_transWrkIndict);
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond, [ica_srchFromDate, ica_srchToDate]);
};

//-------------------------------------------------------------------------
// function name : f_MoveDown
// function desc : 운송물량 하위 이동
//-------------------------------------------------------------------------
scwin.f_MoveDown = async function () {
  if (ed_sum_wt.getValue().simpleReplace(",", "") > 28000) {
    if (!(await $c.win.confirm($p, "중량합계가 28TON을 초과하였습니다. 계속 진행하시겠습니까?"))) return;
  }
  var vCountRow = ds_transWrkPlan.getRowCount();
  if (vCountRow < 1) {
    $c.win.alert($p, "합적하실 운송물량을 먼저 조회해주십시오.");
    return false;
  } else {
    //합적연결물량에 체크된 번호가 있는지 확인
    var coshippingNo = "";
    var cntSelectRow = 0;
    for (var i = 0; i < ds_transWrkIndict.getRowCount(); i++) {
      if (ds_transWrkIndict.getCellData(i, "chk") == "1" && ds_transWrkIndict.getRowStatus(i) != "V") {
        coshippingNo = ds_transWrkIndict.getCellData(i, "coshippingNo");
        cntSelectRow++;
      }
    }
    if (cntSelectRow > 1) {
      $c.win.alert($p, "선택된 합적연결물량이 2건이상입니다.  \n 신규 또는 한가지 물량에만 추가 합적할수 있습니다.");
      return;
    }
    for (var i = vCountRow - 1; i >= 0; i--) {
      var chkYn = ds_transWrkPlan.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스 해제	
        ds_transWrkPlan.setCellData(i, "chk", "0");

        //중량이 0이면 합적시키지 않음
        if (ds_transWrkPlan.getCellData(i, "grossWt") <= 0) {
          continue;
        }

        //운송물량에서 합적연결물량으로 복사
        ds_transWrkIndict.insertRow();
        ds_transWrkIndict.setRowPosition(ds_transWrkIndict.getRowCount() - 1);
        for (var j = 0; j < ds_transWrkIndict.getTotalCol(); j++) {
          //vColid = ds_transWrkIndict.getColumnID(j);
          var vColid = ds_transWrkIndict.getColumnID(j);
          ds_transWrkIndict.setCellData(ds_transWrkIndict.getRowPosition(), vColid, ds_transWrkPlan.getCellData(i, vColid));
        }
        if (coshippingNo != "") ds_transWrkIndict.setCellData(ds_transWrkIndict.getRowPosition(), "coshippingNo", coshippingNo);

        //하나의 운송물량을 여러개의 연결물량에 합적할수 있도록 남은 중량 체크하여 다시 설정
        scwin.qtyEventChk = true;
        ds_transWrkPlan.setCellData(i, "oldQty", parseInt(ds_transWrkPlan.getCellData(i, "oldQty")) - parseInt(ds_transWrkPlan.getCellData(i, "qty")));
        ds_transWrkPlan.setCellData(i, "qty", parseInt(ds_transWrkPlan.getCellData(i, "oldQty")));
        ds_transWrkPlan.setCellData(i, "oldGrossWt", parseFloat(ds_transWrkPlan.getCellData(i, "oldGrossWt")) - parseFloat(ds_transWrkPlan.getCellData(i, "grossWt")));
        ds_transWrkPlan.setCellData(i, "grossWt", parseFloat(ds_transWrkPlan.getCellData(i, "oldGrossWt")));
        scwin.qtyEventChk = false;
      }
    }

    //gr_transWrkPlan.ColumnProp("chk", "HeadCheck") = false;
  }

  //ds_transWrkIndict.SortExpr= "+" + "coshippingNo";
  //ds_transWrkIndict.sort();

  var options = {};
  options.sortIndex = "coshippingNo";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkIndict.multisort(options);

  //ds_transWrkIndict.reform();	
};

//-------------------------------------------------------------------------
// function name : f_CreatRoutingOrder
// function desc : Routing 순서 생성
//-------------------------------------------------------------------------  
scwin.f_CreatRoutingOrder = function () {
  //데이터셋 초기화...
  ds_transWrkRoutingPlan.removeAll();
  ds_transWrkRoutingPlanBefore.removeAll();
  ds_transWrkRoutingPlanAfter.removeAll();
  scwin.f_CopyDataSetHeader();
  //scwin.f_CopyDataSetHeader(ds_transWrkPlan, ds_transWrkRoutingPlan) ;
  //scwin.f_CopyDataSetHeader(ds_transWrkPlan, ds_transWrkRoutingPlanBefore) ;
  //scwin.f_CopyDataSetHeader(ds_transWrkPlan, ds_transWrkRoutingPlanAfter) ; 

  var cntSelectRow = 0;
  var districtNm = "";
  var routingSeq = 0;
  var orgIndex = 0;
  var orgDate = "";
  var orgTime = 0;
  var orgGrossWt = 0;
  var options = {};

  // 선택된 차량규격을 KG으로 환산
  var VehcleCapa = parseFloat(lc_eqNrmCd.getText(true).simpleReplace("TON", "")) * 1000 * 1.12; /* 기존보다 12% 많이 적재가능하도록 */
  var totGrossWt = 0;

  // 선택된 기준물량의 기본정보  찾기
  for (var i = 0; i < ds_transWrkPlan.getRowCount(); i++) {
    if (ds_transWrkPlan.getCellData(i, "chk") == "T" && ds_transWrkPlan.getRowStatus(i) != "V") {
      districtNm = ds_transWrkPlan.getCellData(i, "districtNm");
      routingSeq = ds_transWrkPlan.getCellData(i, "routingSeq");
      orgDate = ds_transWrkPlan.getCellData(i, "wrkEndDt").substring(0, 8);
      orgTime = parseFloat(ds_transWrkPlan.getCellData(i, "wrkEndDt").substring(8, 10));
      orgGrossWt = ds_transWrkPlan.getCellData(i, "grossWt");
      orgIndex = i;
      cntSelectRow++;
    }
  }
  if (cntSelectRow > 1) {
    $c.win.alert($p, "선택된 합적기준물량이 1건이상입니다.\n자동합적 기준물량을 1개만 선택해 주십시요.");
    return false;
  }

  // 선택된 물량을 기준으로 이전시간과 이후시간을 나누어 합적가능 물량을 복사한다.
  for (i = 0; i < ds_transWrkPlan.getRowCount(); i++) {
    if (orgDate == ds_transWrkPlan.getCellData(i, "wrkEndDt").substring(0, 8) && /* 동일한 날짜의 오더이고 */
    districtNm == ds_transWrkPlan.getCellData(i, "districtNm") && /* 권역이 같고  */
    orgIndex != i /* 동일한 오더가 아니면  */) {
      // 기준시간으로 나누어 합적가능물량으로 복사
      if (parseFloat(ds_transWrkPlan.getCellData(i, "wrkEndDt").substring(8, 10)) <= orgTime) /* 이전시간 */
        {
          ds_transWrkRoutingPlanBefore.insertRow();
          for (j = 0; j < ds_transWrkPlan.getTotalCol(); j++) {
            var vColid = ds_transWrkPlan.getColumnID(j);
            ds_transWrkRoutingPlanBefore.setCellData(ds_transWrkRoutingPlanBefore.getRowPosition(), vColid, ds_transWrkPlan.getCellData(i, vColid));
          }
          ds_transWrkRoutingPlanBefore.setCellData(ds_transWrkRoutingPlanBefore.getRowPosition(), "orgIndex", i);
        } else /* 이후시간 */
        {
          ds_transWrkRoutingPlanAfter.insertRow();
          for (j = 0; j < ds_transWrkPlan.getTotalCol(); j++) {
            var vColid = ds_transWrkPlan.getColumnID(j);
            ds_transWrkRoutingPlanAfter.setCellData(ds_transWrkRoutingPlanAfter.getRowPosition(), vColid, ds_transWrkPlan.getCellData(i, vColid));
          }
          ds_transWrkRoutingPlanAfter.setCellData(ds_transWrkRoutingPlanAfter.getRowPosition(), "orgIndex", i);
        }
    }
  }

  // 선택된 물량을 시간순으로 배열한다. 이전 오더는 시간의 역순으로, 이후는 시간순으로
  //ds_transWrkRoutingPlanBefore.SortExpr = "-" + "wrkEndDt" ;
  //ds_transWrkRoutingPlanBefore.sort();

  options.sortIndex = "wrkEndDt";
  options.sortOrder = "-1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkRoutingPlanBefore.multisort(options);
  //ds_transWrkRoutingPlanBefore.reform();	

  //ds_transWrkRoutingPlanAfter.SortExpr = "+" + "wrkEndDt" ;
  //ds_transWrkRoutingPlanAfter.sort();
  options.sortIndex = "wrkEndDt";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkRoutingPlanAfter.multisort(options);
  //ds_transWrkRoutingPlanAfter.reform();	

  // 기존 선택된 기준물량을 먼저 합적가능물량으로 복사한다.
  ds_transWrkRoutingPlan.insertRow();
  for (var j = 0; j < ds_transWrkPlan.getTotalCol(); j++) {
    var vColid = ds_transWrkPlan.getColumnID(j);
    ds_transWrkRoutingPlan.setCellData(ds_transWrkRoutingPlan.getRowPosition(), vColid, ds_transWrkPlan.getCellData(orgIndex, vColid));
  }
  ds_transWrkRoutingPlan.setCellData(ds_transWrkRoutingPlan.getRowPosition(), "orgIndex", orgIndex);

  // 기준물량의 중량을 total 중량에 더한다..
  totGrossWt = orgGrossWt;

  // 선택된 물량을 기준으로 합적가능한 물량 선택하여 복사
  var copyIndex = 1;
  var beforeIndex = 1;
  var afterIndex = 1;
  while (1) {
    // 이전/이후 모두 복사 대상이 없으면 중단..
    if (ds_transWrkRoutingPlanBefore.getRowCount() < beforeIndex && ds_transWrkRoutingPlanAfter.getRowCount() < afterIndex) break;

    //합적가능물량으로 복사
    if (copyIndex % 2 == 1 && /* 홀수이면 이전꺼 복사 */
    ds_transWrkRoutingPlanBefore.getRowCount() >= beforeIndex) {
      // 선택된 차량규격에 맞게 물량을 선택
      totGrossWt = parseFloat(totGrossWt) + parseFloat(ds_transWrkRoutingPlanBefore.getCellData(beforeIndex, "grossWt"));
      if (totGrossWt <= VehcleCapa) {
        ds_transWrkRoutingPlan.insertRow();
        for (j = 0; j <= ds_transWrkRoutingPlanBefore.getTotalCol(); j++) {
          // 복사 시점에 앞뒤 Capa를 Check 한다...
          var vColid = ds_transWrkRoutingPlanBefore.getColumnID(j);
          ds_transWrkRoutingPlan.setCellData(ds_transWrkRoutingPlan.getRowPosition(), vColid, ds_transWrkRoutingPlanBefore.getCellData(beforeIndex, vColid));
        }
      }
      ++beforeIndex;
    } else if (copyIndex % 2 == 0 && /* 짝수이면 이후꺼 복사 */
    ds_transWrkRoutingPlanAfter.getRowCount() >= afterIndex) {
      // 선택된 차량규격에 맞게 물량을 선택
      totGrossWt = totGrossWt + ds_transWrkRoutingPlanAfter.getCellData(afterIndex, "grossWt");
      if (totGrossWt <= VehcleCapa) {
        ds_transWrkRoutingPlan.insertRow();
        for (j = 1; j < ds_transWrkRoutingPlanAfter.getTotalCol(); j++) {
          // 복사 시점에 앞뒤 Capa를 Check 한다...
          var vColid = ds_transWrkRoutingPlanAfter.getColumnID(j);
          ds_transWrkRoutingPlan.setCellData(ds_transWrkRoutingPlan.getRowPosition(), vColid, ds_transWrkRoutingPlanAfter.getCellData(afterIndex, vColid));
        }
      }
      ++afterIndex;
    }
    ++copyIndex;
  }

  // 선택된 물량을 시간순으로 배열한다.
  //ds_transWrkRoutingPlan.SortExpr = "+" + "wrkEndDt" ;
  //ds_transWrkRoutingPlan.sort();

  options.sortIndex = "wrkEndDt";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkRoutingPlan.multisort(options);
  //ds_transWrkRoutingPlan.reform();	

  /*********************************************************************************************************/
  /* Debug
  var debugStr = "최초복사";
  for( i = 1; i <= ds_transWrkRoutingPlan.getRowCount(); i++ )
  {
      debugStr = debugStr + "-----" + ds_transWrkRoutingPlan.NameValue(i, "wrkEndDt").substring(8,10) + " , " 
                  + ds_transWrkRoutingPlan.NameValue(i, "orgIndex") + " , "
                  + ds_transWrkRoutingPlan.NameValue(i, "routingSeq") + " , "
                  + ds_transWrkRoutingPlan.NameValue(i, "timeSeq") + " , "  ;                            
  }
  alert(debugStr) ;  */
  /*********************************************************************************************************/

  // 시간순으로 배열된것을 다시 정해진 시간내(현재 1시간 이내)의 물량은 동일한것으로 보고 다시 배열한다.
  var prevWrkEndDt = parseFloat(ds_transWrkRoutingPlan.getCellData(0, "wrkEndDt").substring(8, 10));
  var timeSeq = 1;
  var stdTimeDiff = 1; /* 기준시간.... */

  ds_transWrkRoutingPlan.setCellData(0, "timeSeq", timeSeq);
  for (i = 1; i < ds_transWrkRoutingPlan.getRowCount(); i++) {
    if (parseFloat(ds_transWrkRoutingPlan.getCellData(i, "wrkEndDt").substring(8, 10)) - prevWrkEndDt < stdTimeDiff) /* 시간이  기준시간 이내  */
      {
        ds_transWrkRoutingPlan.setCellData(i, "timeSeq", ds_transWrkRoutingPlan.getCellData(i - 1, "timeSeq"));
      } else {
      ds_transWrkRoutingPlan.setCellData(i, "timeSeq", ++timeSeq);
    }
    prevWrkEndDt = parseFloat(ds_transWrkRoutingPlan.getCellData(i, "wrkEndDt").substring(8, 10));
  }

  /********************************************
    -- Routing 알고리즘
    1. 시간차가 기준시간 이내이면 정해진 Routing 순번으로
    2. 시간차가 기준시간 이상이면 시간이 빠른것을 우선으로 배정
    
       => 현재 기준시간 1시간 ...
  ********************************************/

  // 시간순서와 Routing 순번으로 sorting
  //ds_transWrkRoutingPlan.SortExpr = "" ;
  //ds_transWrkRoutingPlan.SortExpr= "+" + "timeSeq" + "+" + "routingSeq" ;
  //ds_transWrkRoutingPlan.sort();

  options.sortIndex = "timeSeq routingSeq";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkRoutingPlan.multisort(options);
  //ds_transWrkRoutingPlan.reform();	

  /*********************************************************************************************************/
  /* Debug
  var debugStr = "시간순 정렬";
  for( i = 1; i <= ds_transWrkRoutingPlan.getRowCount(); i++ )
  {
      debugStr = debugStr + "-----" + ds_transWrkRoutingPlan.NameValue(i, "wrkEndDt").substring(8,10) + " , " 
                  + ds_transWrkRoutingPlan.NameValue(i, "orgIndex") + " , "
                  + ds_transWrkRoutingPlan.NameValue(i, "routingSeq") + " , "
                  + ds_transWrkRoutingPlan.NameValue(i, "timeSeq") + " , "  ;                            
  }
  alert(debugStr) ; */
  /*********************************************************************************************************/

  // 선택된 물량을 선택하고, Routing Seq를 다시 설정한다.
  for (i = 0; i < ds_transWrkRoutingPlan.getRowCount(); i++) {
    ds_transWrkPlan.setCellData(ds_transWrkRoutingPlan.getCellData(i, "orgIndex"), "chk", "T");
    ds_transWrkPlan.setCellData(ds_transWrkRoutingPlan.getCellData(i, "orgIndex"), "routingSeq", i);
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_CopyDataSetHeader
// function desc : 데이터셋 Copy
//-------------------------------------------------------------------------  
scwin.f_CopyDataSetHeader = function () {
  /*
  var DsHeader = "";
  var colId   = "";
  var colType = "";
  var colProp = "";
  var colSize = ""
   for (var i = 1; i <= oOriginDataSet.CountColumn; i++) {
      colId   = oOriginDataSet.ColumnID(i);        //column id
      colIndex= oOriginDataSet.ColumnIndex(colId);  //column id
      colSize = oOriginDataSet.ColumnSize(colIndex);//column size
       // column
      //    Type  Description
       
      //     1    String
      //     2    Integer
      //     3    Decimal
      //     4    Date
      //     5    URL
      
       //column type
      switch (oOriginDataSet.ColumnType(colIndex)){
           case 1 :
                    colType = 'STRING';
                    break;
           case 2 :
                    colType = 'INT';
                    break;
           case 3 :
                    colType = 'DECIMAL';
                    if (oOriginDataSet.ColumnDec(colIndex) > 0)
                      colSize += "." + oOriginDataSet.ColumnDec(colIndex);
                    break;
           case 4 :
                    colType = 'DATE';
                    break;
           case 5 :
                    colType = 'URL';
                    break;
           default :
                    colType = "";
                    break;
      }
       // column property
      //  0 : Normal (Key = No)
      //  1 : Constant
      //  2 : Key (Normal, Sequence)
      //  3 : Sequence (Key = No) 
      
      switch (oOriginDataSet.ColumnProp(i)) {
           case 0 :
                    colProp = "NORMAL";
                    break;
           case 1 :
                    colProp = "CONSTANT";
                    break;
           case 2 :
                    colProp = "KEYVALUE";
                    break;
           default :
                    colProp = "";
                    break;
      }
       //column id,column type,column size, column property
      DsHeader = DsHeader + colId + ":" + colType + "(" + colSize + ")" + ":" + colProp + ",";
  }
  
  ////////////////////////////////////
  // 여기에 orgIndex 컬럼 추가......
  DsHeader = DsHeader + "orgIndex:INT,";
  ////////////////////////////////////
  
  ////////////////////////////////////
  // 여기에 timeSeq 컬럼 추가......
  DsHeader = DsHeader + "timeSeq:INT,";
  ////////////////////////////////////
   DsHeader = DsHeader.substr(0, DsHeader.length - 1);
  oTargetDataSet.SetDataHeader(DsHeader);
  */

  ds_transWrkRoutingPlan.setJSON(ds_transWrkPlan.getAllJSON(), false);
  ds_transWrkRoutingPlanBefore.setJSON(ds_transWrkPlan.getAllJSON(), false);
  ds_transWrkRoutingPlanAfter.setJSON(ds_transWrkPlan.getAllJSON(), false);
};

//-------------------------------------------------------------------------
// function name : f_AutoCoshipping
// function desc : 자동합적
//-------------------------------------------------------------------------  
scwin.f_AutoCoshipping = async function () {
  // 합적가능 오더물량 선택...
  if (!scwin.f_CreatRoutingOrder()) {
    return;
  }
  var coshippingNo = ""; // 기존 합적번호 혹은 새로 부여될 합적...

  var VehcleCapa = parseFloat(lc_eqNrmCd.getText(true).simpleReplace("TON", "")) * 1000 * 1.12; /* 기존보다 12% 많이 적재가능하도록 */

  if (ed_sum_wt.getValue().simpleReplace(",", "") > VehcleCapa) {
    var errText = "중량합계가 차량규격(" + lc_eqNrmCd.getText(true) + ")을 초과하였습니다. 계속 진행하시겠습니까?";
    if (!(await $c.win.confirm($p, errText))) return;
  }
  var vCountRow = ds_transWrkPlan.getRowCount();
  if (vCountRow < 1) {
    $c.win.alert($p, "합적하실 운송물량을 먼저 조회해주십시오.");
    return false;
  } else {
    //합적연결물량에 체크된 번호가 있는지 확인
    var cntSelectRow = 0;
    for (var i = 0; i < ds_transWrkIndict.getRowCount(); i++) {
      if (ds_transWrkIndict.getCellData(i, "chk") == "T" && ds_transWrkIndict.getRowStatus(i) != "V") {
        coshippingNo = ds_transWrkIndict.getCellData(i, "coshippingNo");
        cntSelectRow++;
      }
    }
    if (cntSelectRow > 1) {
      $c.win.alert($p, "선택된 합적연결물량이 2건이상입니다.\n신규 또는 한가지 물량에만 추가 합적할수 있습니다.");
      return;
    }
    for (var i = vCountRow - 1; i >= 0; i--) {
      var chkYn = ds_transWrkPlan.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스 해제   
        ds_transWrkPlan.setCellData(i, "chk", "F");

        //중량이 0이면 합적시키지 않음
        if (ds_transWrkPlan.getCellData(i, "grossWt") <= 0) {
          continue;
        }

        //운송물량에서 합적연결물량으로 복사
        ds_transWrkIndict.insertRow();
        ds_transWrkIndict.setRowPosition(ds_transWrkIndict.getRowCount() - 1);
        for (var j = 0; j < ds_transWrkIndict.getTotalCol(); j++) {
          vColid = ds_transWrkIndict.getColumnID(j);
          ds_transWrkIndict.setCellData(ds_transWrkIndict.getRowPosition(), vColid, ds_transWrkPlan.getCellData(i, vColid));
        }
        if (coshippingNo != "") ds_transWrkIndict.setCellData(ds_transWrkIndict.getRowPosition(), "coshippingNo", coshippingNo);

        //하나의 운송물량을 여러개의 연결물량에 합적할수 있도록 남은 중량 체크하여 다시 설정
        scwin.qtyEventChk = true;
        ds_transWrkPlan.setCellData(i, "oldQty", parseFloat(ds_transWrkPlan.getCellData(i, "oldQty")) - parseFloat(ds_transWrkPlan.getCellData(i, "qty")));
        ds_transWrkPlan.setCellData(i, "qty", ds_transWrkPlan.getCellData(i, "oldQty"));
        ds_transWrkPlan.setCellData(i, "oldGrossWt", parseFloat(ds_transWrkPlan.getCellData(i, "oldGrossWt")) - parseFloat(ds_transWrkPlan.getCellData(i, "grossWt")));
        ds_transWrkPlan.setCellData(i, "grossWt", ds_transWrkPlan.getCellData(i, "oldGrossWt"));
        scwin.qtyEventChk = false;
      }
    }

    //gr_transWrkPlan.ColumnProp("chk", "HeadCheck") = false;
  }

  //ds_transWrkIndict.SortExpr= "+" + "coshippingNo" + "+" + "routingSeq";
  //ds_transWrkIndict.sort();

  var options = {};
  options.sortIndex = "coshippingNo routingSeq";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_transWrkIndict.multisort(options);
  //ds_transWrkIndict.reform();	

  //alert(ds_transWrkIndict.ExportData(1, ds_transWrkIndict.CountRow, true )) ;

  /*********************************************************************************************************/
  /* Debug
  var debugStr = "";
  for( i = 1; i <= ds_transWrkIndict.CountRow; i++ )
  {
      debugStr = debugStr + "-----" + ds_transWrkIndict.NameValue(i, "wrkEndDt").substring(8,10) + " , " 
                  + ds_transWrkIndict.NameValue(i, "routingSeq") + " , "
                  + ds_transWrkIndict.NameValue(i, "timeSeq") + " , "  ;                            
  }
  alert(debugStr) ; */
  /*********************************************************************************************************/

  var routingSeq = 1;
  for (var k = 0; k < ds_transWrkIndict.getRowCount(); k++) {
    if (coshippingNo == ds_transWrkIndict.getCellData(k, "coshippingNo")
    //&& ds_transWrkIndict.RowLevel(ds_transWrkIndict.getRowPosition()) == 0 
    ) {
      ds_transWrkIndict.setCellData(k, "routingSeq", routingSeq);
      routingSeq++;
    }
  }
};
scwin.callbackClntList_tpro = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_srchCtrtClntCd, ed_ctrtClntNm);
};
scwin.btn_stepDel_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_stepCls_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_SaveCoshipping();
};
scwin.btn_autoCoshipping_onclick = function (e) {
  scwin.f_AutoCoshipping();
};
scwin.sbm_eqNrmCd_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_eqNrmCd.setJSON(e.responseJSON.GAUCE);
  }
};
scwin.btn_down_onclick = function (e) {
  scwin.f_MoveDown();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  } else {
    $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.gr_transWrkIndict_oncellclick = function (row, columnIndex, columnId) {
  if (ds_transWrkIndict.getCellData(row, "cstmrReqYn") == 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["고객요청에 의한 합적물량", "삭제"]);
    //ds_transWrkIndict.RowMark(row) = 0;
    return;
  }
};
scwin.gr_transWrkIndict_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "routingSeq") {
    gr_transWrkIndict.setCellReadOnly(rowIndex, columnId, false);
  }
};
scwin.udc_srchCtrtClntCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_srchCtrtClntCd.getValue(), ed_ctrtClntNm.getValue(), 'F', 'F');
};
scwin.udc_srchCtrtClntCd_onblurCodeEvent = function (e) {
  if (ed_srchCtrtClntCd.getValue().trim() == "" || ed_srchCtrtClntCd.getValue() == scwin.hid_ctrtClntCd) ed_ctrtClntNm.setValue("");else scwin.f_openCommonPopUp(1, ed_srchCtrtClntCd.getValue(), ed_ctrtClntNm.getValue(), 'T', 'F');
};
scwin.gr_transWrkPlan_onheaderclick = function (colid) {
  var cr = ds_transWrkPlan.getRowCount();
  var bCheck = gr_transWrkPlan.getHeaderValue("chk");
  if (bCheck == true) {}
  ;
  if (cr > 0) {
    if (colid == "chk" && bCheck == true) {
      for (var i = 0; i < cr; i++) {
        ds_transWrkPlan.setCellData(i, "chk", "T");
      }
    } else if (colid == "chk" && bCheck == false) {
      for (var i = 0; i < cr; i++) {
        ds_transWrkPlan.setCellData(i, "chk", "0");
      }
    }
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.ds_eqNrmCd_ondataload = function () {
  var options = {};
  options.sortIndex = "code";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_eqNrmCd.multisort(options);
  ds_eqNrmCd.reform();
};
scwin.sbm_retrieve_submitdone = function (e) {
  var cnt1 = ds_transWrkIndict.getRowCount();
  var cnt2 = ds_transWrkPlan.getRowCount();
  if (cnt1 == 0 && cnt2 == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.ds_transWrkPlan_ondataload = function () {
  var cnt = ds_transWrkPlan.getRowCount();
  spa_cnt1.setValue(cnt);
};
scwin.ds_transWrkIndict_ondataload = function () {
  var cnt = ds_transWrkIndict.getRowCount() + 1;
  spa_cnt2.setValue(cnt);
};
scwin.ds_transWrkPlan_oncelldatachange = async function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}
  console.log(info);
  var row = info.rowIndex;
  var colid = info.colID;
  if (colid == 'qty' && scwin.qtyEventChk == false) {
    scwin.wtEventChk = true;
    if (parseInt(ds_transWrkPlan.getCellData(row, "qty")) > parseInt(ds_transWrkPlan.getCellData(row, "oldQty"))) {
      await $c.win.alert($p, "기존수량을 추가하여 입력하였습니다.");
      ds_transWrkPlan.setEventPause("", true);
      ds_transWrkPlan.setCellData(row, "qty", ds_transWrkPlan.getCellData(row, "oldQty"));
      ds_transWrkPlan.setEventPause("", false);
      return;
    } else {
      //if ( ds_transWrkPlan.NameValue(row, 'qty') != ds_transWrkPlan.OrgNameValue(row, 'qty') ) {
      if (ds_transWrkPlan.getOriginalCellData(row, "grossWt") > 0) {
        if (ds_transWrkPlan.getOriginalCellData(row, 'qty') == 0) {
          return;
        }
        var v_wtPerQty = parseFloat(ds_transWrkPlan.getOriginalCellData(row, 'grossWt') / ds_transWrkPlan.getOriginalCellData(row, 'qty'));
        ds_transWrkPlan.setEventPause("", true);
        ds_transWrkPlan.setCellData(row, 'grossWt', scwin.floorToFixed(ds_transWrkPlan.getCellData(row, 'qty') * v_wtPerQty, 3));
        ds_transWrkPlan.setEventPause("", false);
      }
    }
    //}
    scwin.wtEventChk = false;
  }
  if (colid == "grossWt" && scwin.wtEventChk == false) {
    if (parseFloat(ds_transWrkPlan.getCellData(row, "grossWt")) > parseFloat(ds_transWrkPlan.getCellData(row, "oldGrossWt"))) {
      $c.win.alert($p, "기존중량을 추가하여 입력하였습니다.");
      ds_transWrkPlan.setEventPause("", true);
      ds_transWrkPlan.setCellData(row, "grossWt", ds_transWrkPlan.getCellData(row, "oldGrossWt"));
      ds_transWrkPlan.setEventPause("", false);
    }
  }
  ed_sum_wt.setValue(0);
  var value = 0;
  for (var i = 0; i < ds_transWrkPlan.getRowCount(); i++) {
    if (ds_transWrkPlan.getCellData(i, "chk") == "T") {
      value = parseFloat(ed_sum_wt.getValue()) + parseFloat(ds_transWrkPlan.getCellData(i, "grossWt"));
      ed_sum_wt.setValue(value);
    }
  }
  ed_sum_wt.setValue(value);
};
scwin.floorToFixed = function (number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(number * factor) / factor;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_srchCond.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ica_srchFromDate',edToId:'ica_srchToDate',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'출발예정일 조회 시작일자',titleTo:'출발예정일 조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchWrkDistrictCd1',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.wrkDistrictCd1'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srchOdrNo',placeholder:'',style:'width:150px;',objType:'Data',maxlength:'13',allowChar:'0-9,a-z,A-Z',ref:'data:dma_srchCond.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',objTypeCode:'Data',nameId:'ed_ctrtClntNm',codeId:'ed_srchCtrtClntCd',btnId:'btn_srchCtrtClntCd',id:'udc_srchCtrtClntCd',refDataCollection:'dma_srchCond',code:'clntNo',selectID:'retrieveClntList_tpro','ev:onclickEvent':'scwin.udc_srchCtrtClntCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchCtrtClntCd_onblurCodeEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchOdrKndCd',search:'start',style:'width: 200px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_srchCond.odrKndCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"운송물량.xlsx","sheetName" : "운송물량", "type":"4+8+16"}',gridUpYn:'N',gridID:'gr_transWrkPlan'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transWrkPlan',id:'gr_transWrkPlan',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_transWrkPlan_onheaderclick',mergeCol:'odrNo',mergeCells:'bycol',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',value:'',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'요청화주',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'고객요청번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'권역',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발지',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'도착지',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출발예정일시',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'도착예정일시',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'납품처',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'Routing<br/>권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'단위',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'수량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'중량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'남은중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'길이',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column23',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'오더구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',style:'',id:'column37',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',checkAlways:'true',valueType:'other',falseValue:'0',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'160',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'160',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'180',calendarValueType:'yearMonthDateTime',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',width:'180',calendarValueType:'yearMonthDateTime',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'160',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'districtNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oldGrossWt',displayMode:'label',textAlign:'right',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'len',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량합계',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_sum_wt',placeholder:'',style:'width: 150px;',objType:'data',displayFormat:'#,##0.000',dataType:'number',readOnly:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Kg',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_down',style:'',type:'button','ev:onclick':'scwin.btn_down_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'합적연결물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용차량',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 150px;',id:'lc_eqNrmCd',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_autoCoshipping',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_autoCoshipping_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'자동합적'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_transWrkIndict',grdDownOpts:'{"fileName":"합적연결물량.xlsx","sheetName" : "합적연결물량", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transWrkIndict',id:'gr_transWrkIndict',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_transWrkIndict_oncellclick',rowStatusVisible:'true',mergeCells:'byrestriccol',mergeCol:'coshippingNo,odrNo','ev:oncelldblclick':'scwin.gr_transWrkIndict_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'합적번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수행품명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착예정일시(CT)',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Routing<br/>순번',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'합적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'출발지코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'도착지코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'고객요청여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',checkAlways:'true',valueType:'other',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coshippingNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0.000',dataType:'float',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',width:'130',calendarValueType:'yearMonthDateTime',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'routingSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingSeq',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transWrkIndictNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cstmrReqYn',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'coshippingNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'qty\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.##0',expression:'sum(\'grossWt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_stepDel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_stepDel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'합적해지'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_stepCls',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_stepCls_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})