/*amd /ui/il/airout/aobl/ar_103_01_01b.xml 158366 4e63d785a952020bdd389f3556e3b8c92b6b813f61d775bd60484662272cbe94 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_MasterBillSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:key',A:{id:'blno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:key',A:{id:'srno',dataType:'string',name:'srno'}},{T:1,N:'w2:key',A:{id:'iogb',dataType:'string',name:'Bound Type'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_MasterBillInfo','ev:ondataload':'scwin.ds_MasterBillInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'srno',dataType:'string',name:'srno'}},{T:1,N:'w2:column',A:{id:'iogb',dataType:'string',name:'Bound Type'}},{T:1,N:'w2:column',A:{id:'msn',dataType:'string',name:'MSN No'}},{T:1,N:'w2:column',A:{id:'mblgb',dataType:'string',name:'M B/L Type'}},{T:1,N:'w2:column',A:{id:'bltype',dataType:'string',name:'Bill Type'}},{T:1,N:'w2:column',A:{id:'shipgb',dataType:'string',name:'Shipping Type'}},{T:1,N:'w2:column',A:{id:'voidgb',dataType:'string',name:'Void  Type'}},{T:1,N:'w2:column',A:{id:'exdt',dataType:'string',name:'환율일'}},{T:1,N:'w2:column',A:{id:'rate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exrate',dataType:'string',name:'Usd 환율'}},{T:1,N:'w2:column',A:{id:'stdt',dataType:'string',name:'수출:출발일, 수입:도착일'}},{T:1,N:'w2:column',A:{id:'ontm',dataType:'string',name:'출발시간'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'출발일'}},{T:1,N:'w2:column',A:{id:'ondt2',dataType:'string',name:'T/S 출발일'}},{T:1,N:'w2:column',A:{id:'avdt',dataType:'string',name:'도착일'}},{T:1,N:'w2:column',A:{id:'avtm',dataType:'string',name:'도착 시간'}},{T:1,N:'w2:column',A:{id:'dvno',dataType:'string',name:'B/L Delivery 담당자 코드'}},{T:1,N:'w2:column',A:{id:'dvdt',dataType:'string',name:'B/L Delivery 일자'}},{T:1,N:'w2:column',A:{id:'dvnm',dataType:'string',name:'B/L Delivery 담당자명'}},{T:1,N:'w2:column',A:{id:'isdt',dataType:'string',name:'B/L 발행일'}},{T:1,N:'w2:column',A:{id:'cgtp',dataType:'string',name:'Cargo Type'}},{T:1,N:'w2:column',A:{id:'shcd',dataType:'string',name:'Shipper Code'}},{T:1,N:'w2:column',A:{id:'shnm1',dataType:'string',name:'Shipper Name'}},{T:1,N:'w2:column',A:{id:'shnm2',dataType:'string',name:'Shipper Address'}},{T:1,N:'w2:column',A:{id:'shnm3',dataType:'string',name:'Shipper Address'}},{T:1,N:'w2:column',A:{id:'shnm4',dataType:'string',name:'Shipper Address'}},{T:1,N:'w2:column',A:{id:'shnm5',dataType:'string',name:'Shipper Address'}},{T:1,N:'w2:column',A:{id:'cncd',dataType:'string',name:'Consignee Code'}},{T:1,N:'w2:column',A:{id:'cnnm1',dataType:'string',name:'Consignee Name'}},{T:1,N:'w2:column',A:{id:'cnnm2',dataType:'string',name:'Consignee Address'}},{T:1,N:'w2:column',A:{id:'cnnm3',dataType:'string',name:'Consignee Address'}},{T:1,N:'w2:column',A:{id:'cnnm4',dataType:'string',name:'Consignee Address'}},{T:1,N:'w2:column',A:{id:'cnnm5',dataType:'string',name:'Consignee Address'}},{T:1,N:'w2:column',A:{id:'nttg',dataType:'string',name:'Notify 출력여부'}},{T:1,N:'w2:column',A:{id:'ntcd',dataType:'string',name:'Notify Code'}},{T:1,N:'w2:column',A:{id:'ntnm1',dataType:'string',name:'Notify Name'}},{T:1,N:'w2:column',A:{id:'ntnm2',dataType:'string',name:'Notify Address'}},{T:1,N:'w2:column',A:{id:'ntnm3',dataType:'string',name:'Notify Address'}},{T:1,N:'w2:column',A:{id:'ntnm4',dataType:'string',name:'Notify Address'}},{T:1,N:'w2:column',A:{id:'ntnm5',dataType:'string',name:'Notify Address'}},{T:1,N:'w2:column',A:{id:'cacd',dataType:'string',name:'항공사코드'}},{T:1,N:'w2:column',A:{id:'canm',dataType:'string',name:'항공사명'}},{T:1,N:'w2:column',A:{id:'lecd',dataType:'string',name:'Rent 거래처 코드'}},{T:1,N:'w2:column',A:{id:'lenm',dataType:'string',name:'Rent 거래처명'}},{T:1,N:'w2:column',A:{id:'cocd',dataType:'string',name:'Consolidator Code'}},{T:1,N:'w2:column',A:{id:'conm',dataType:'string',name:'Consolidator Name'}},{T:1,N:'w2:column',A:{id:'dpcd',dataType:'string',name:'Departure Code'}},{T:1,N:'w2:column',A:{id:'dpnm',dataType:'string',name:'Departure Name'}},{T:1,N:'w2:column',A:{id:'fltno',dataType:'string',name:'Flight No'}},{T:1,N:'w2:column',A:{id:'fltno2',dataType:'string',name:'T/S Flight No'}},{T:1,N:'w2:column',A:{id:'dscd1',dataType:'string',name:'첫번째 도착지'}},{T:1,N:'w2:column',A:{id:'ptcd1',dataType:'string',name:'첫번째 항공사'}},{T:1,N:'w2:column',A:{id:'dscd2',dataType:'string',name:'두번째 도착지'}},{T:1,N:'w2:column',A:{id:'ptcd2',dataType:'string',name:'두번째 항공사'}},{T:1,N:'w2:column',A:{id:'dscd3',dataType:'string',name:'세번째 도착지'}},{T:1,N:'w2:column',A:{id:'ptcd3',dataType:'string',name:'세번째 항공사'}},{T:1,N:'w2:column',A:{id:'dsnm1',dataType:'string',name:'최종목적지 1'}},{T:1,N:'w2:column',A:{id:'dsnm2',dataType:'string',name:'최종목적지 2'}},{T:1,N:'w2:column',A:{id:'acif1',dataType:'string',name:'Account Information 1'}},{T:1,N:'w2:column',A:{id:'acif2',dataType:'string',name:'Account Information 2'}},{T:1,N:'w2:column',A:{id:'cucd',dataType:'string',name:'화폐단위'}},{T:1,N:'w2:column',A:{id:'frpc',dataType:'string',name:'Freight Type'}},{T:1,N:'w2:column',A:{id:'otpc',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'dvcr',dataType:'string',name:'운송신고가격'}},{T:1,N:'w2:column',A:{id:'dvct',dataType:'string',name:'세관신고가격'}},{T:1,N:'w2:column',A:{id:'insu',dataType:'string',name:'보험가격'}},{T:1,N:'w2:column',A:{id:'hdif1',dataType:'string',name:'Handing Information 1'}},{T:1,N:'w2:column',A:{id:'hdif2',dataType:'string',name:'Handing Information 2'}},{T:1,N:'w2:column',A:{id:'hdif3',dataType:'string',name:'Handing Information 3'}},{T:1,N:'w2:column',A:{id:'pfchg',dataType:'string',name:'PP-Freight Charge'}},{T:1,N:'w2:column',A:{id:'cfchg',dataType:'string',name:'CC-Freight Charge'}},{T:1,N:'w2:column',A:{id:'pvchg',dataType:'string',name:'PP-Valuation Charge'}},{T:1,N:'w2:column',A:{id:'cvchg',dataType:'string',name:'CC-Valuation Charge'}},{T:1,N:'w2:column',A:{id:'pachg',dataType:'string',name:'PP-Total Agent Charge'}},{T:1,N:'w2:column',A:{id:'cachg',dataType:'string',name:'CC-Total Agent Charge'}},{T:1,N:'w2:column',A:{id:'pcchg',dataType:'string',name:'PP-Total Carrier Charge'}},{T:1,N:'w2:column',A:{id:'ccchg',dataType:'string',name:'CC-Total Carrier Charge'}},{T:1,N:'w2:column',A:{id:'ptchg',dataType:'string',name:'PP-Total Charge'}},{T:1,N:'w2:column',A:{id:'ctchg',dataType:'string',name:'CC-Total Charge'}},{T:1,N:'w2:column',A:{id:'comm',dataType:'string',name:'Commision'}},{T:1,N:'w2:column',A:{id:'cchg',dataType:'string',name:'항공사 Commision'}},{T:1,N:'w2:column',A:{id:'cvat',dataType:'string',name:'항공사 Commision Vat'}},{T:1,N:'w2:column',A:{id:'disc',dataType:'string',name:'Discount'}},{T:1,N:'w2:column',A:{id:'dchg',dataType:'string',name:'Discount Amount'}},{T:1,N:'w2:column',A:{id:'nert',dataType:'string',name:'Nego 단가'}},{T:1,N:'w2:column',A:{id:'ascd',dataType:'string',name:'청구처 코드'}},{T:1,N:'w2:column',A:{id:'asnm',dataType:'string',name:'청구처명'}},{T:1,N:'w2:column',A:{id:'warecd',dataType:'string',name:'장치장코드'}},{T:1,N:'w2:column',A:{id:'warenm',dataType:'string',name:'장치장명'}},{T:1,N:'w2:column',A:{id:'itcd',dataType:'string',name:'품명코드'}},{T:1,N:'w2:column',A:{id:'itnm',dataType:'string',name:'품명'}},{T:1,N:'w2:column',A:{id:'arcd',dataType:'string',name:'Location Code'}},{T:1,N:'w2:column',A:{id:'arnm',dataType:'string',name:'Location Name'}},{T:1,N:'w2:column',A:{id:'ctcd',dataType:'string',name:'국가코드'}},{T:1,N:'w2:column',A:{id:'ctnm',dataType:'string',name:'국가명'}},{T:1,N:'w2:column',A:{id:'locd',dataType:'string',name:'영업사원코드'}},{T:1,N:'w2:column',A:{id:'lonm',dataType:'string',name:'영업사원명'}},{T:1,N:'w2:column',A:{id:'akggb',dataType:'string',name:'실중량단위'}},{T:1,N:'w2:column',A:{id:'kggb',dataType:'string',name:'중량단위'}},{T:1,N:'w2:column',A:{id:'cwht2',dataType:'string',name:'Chargeable Weight (LB)'}},{T:1,N:'w2:column',A:{id:'rqrt',dataType:'string',name:'실청구 단가'}},{T:1,N:'w2:column',A:{id:'rqchg',dataType:'string',name:'실청구 금액'}},{T:1,N:'w2:column',A:{id:'brcd',dataType:'string',name:'Branch Code'}},{T:1,N:'w2:column',A:{id:'brnm',dataType:'string',name:'Branch Name'}},{T:1,N:'w2:column',A:{id:'sgcd',dataType:'string',name:'Signature Code'}},{T:1,N:'w2:column',A:{id:'sgnm',dataType:'string',name:'Signature Name'}},{T:1,N:'w2:column',A:{id:'rider',dataType:'string',name:'Rider Type'}},{T:1,N:'w2:column',A:{id:'mftpkg',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'mftwht',dataType:'string',name:'Gross Weight'}},{T:1,N:'w2:column',A:{id:'tcwht',dataType:'string',name:'Chargeable Weight (KG)'}},{T:1,N:'w2:column',A:{id:'cbm',dataType:'string',name:'CBM'}},{T:1,N:'w2:column',A:{id:'dstn',dataType:'string',name:'최종목적지'}},{T:1,N:'w2:column',A:{id:'lcno',dataType:'string',name:'L/C No'}},{T:1,N:'w2:column',A:{id:'pono',dataType:'string',name:'P/O No'}},{T:1,N:'w2:column',A:{id:'indate',dataType:'string',name:'항공사지급일'}},{T:1,N:'w2:column',A:{id:'lrate',dataType:'string',name:'항공사단가'}},{T:1,N:'w2:column',A:{id:'lcharge',dataType:'string',name:'항공사 Air Freight 원화금액'}},{T:1,N:'w2:column',A:{id:'ulRate',dataType:'string',name:'항공사 외화단가'}},{T:1,N:'w2:column',A:{id:'unert',dataType:'string',name:'Nego 외화단가'}},{T:1,N:'w2:column',A:{id:'ulCharge',dataType:'string',name:'항공사 Air Freight 외화금액'}},{T:1,N:'w2:column',A:{id:'ucchg',dataType:'string',name:'항공사 Commision 외화'}},{T:1,N:'w2:column',A:{id:'ucvat',dataType:'string',name:'항공사 Commistion Vat'}},{T:1,N:'w2:column',A:{id:'udchg',dataType:'string',name:'Discount 외화금액'}},{T:1,N:'w2:column',A:{id:'endgb',dataType:'string',name:'마감여부'}},{T:1,N:'w2:column',A:{id:'attn',dataType:'string',name:'B/L 담당자 코드'}},{T:1,N:'w2:column',A:{id:'attnnm',dataType:'string',name:'B/L 담당자명'}},{T:1,N:'w2:column',A:{id:'invchk',dataType:'string',name:'매입인보이스 발행여부'}},{T:1,N:'w2:column',A:{id:'dept',dataType:'string',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{id:'innerPkg',dataType:'string',name:'Inner 수량'}},{T:1,N:'w2:column',A:{id:'exgb',dataType:'string',name:'적용환율'}},{T:1,N:'w2:column',A:{id:'commNo',dataType:'string',name:'항공사 Commision Invoice No'}},{T:1,N:'w2:column',A:{id:'cjdt',dataType:'string',name:'실적일자'}},{T:1,N:'w2:column',A:{id:'deptnm',dataType:'string',name:'귀속부서명'}},{T:1,N:'w2:column',A:{id:'mark',dataType:'string',name:'Marking'}},{T:1,N:'w2:column',A:{id:'descnm',dataType:'string',name:'Description'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'updid',dataType:'string',name:'Update Id'}},{T:1,N:'w2:column',A:{id:'lrgb',dataType:'string',name:'Master Agent  Lend/Rent'}},{T:1,N:'w2:column',A:{id:'inco',dataType:'string',name:'Incoterms'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'hodrNo',dataType:'string',name:'Direct House Order No'}},{T:1,N:'w2:column',A:{id:'cino',dataType:'string',name:'Commercial Invoice No'}},{T:1,N:'w2:column',A:{id:'ascdPic',dataType:'string',name:'ascdPic'}},{T:1,N:'w2:column',A:{id:'ascdPicnm',dataType:'string',name:'ascdPicnm'}},{T:1,N:'w2:column',A:{id:'shCtcd',dataType:'string',name:'shCtcd'}},{T:1,N:'w2:column',A:{id:'cnCtcd',dataType:'string',name:'cnCtcd'}},{T:1,N:'w2:column',A:{id:'masterExNo',dataType:'string',name:'masterExNo'}},{T:1,N:'w2:column',A:{id:'ediItem',dataType:'string',name:'ediItem'}},{T:1,N:'w2:column',A:{id:'invBillingDate',dataType:'string',name:'invBillingDate'}},{T:1,N:'w2:column',A:{id:'ptnBillingDate',dataType:'string',name:'ptnBillingDate'}},{T:1,N:'w2:column',A:{id:'txtDate',dataType:'string',name:'txtDate'}},{T:1,N:'w2:column',A:{id:'txtAmount',dataType:'string',name:'txtAmount'}},{T:1,N:'w2:column',A:{id:'mblgbDesc',name:'mblgbDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipgbDesc',name:'shipgbDesc',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HouseBillInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'shnm1',dataType:'string',name:'Shipper Name'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_authGroup'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'authGroup',dataType:'text',name:'authGroup'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_empNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',dataType:'string',name:'empNo'}},{T:1,N:'w2:key',A:{id:'admPrtCls',dataType:'string',name:'admPrtCls'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_blPrint'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'seaAirCls'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'mblHblCls'}},{T:1,N:'w2:column',A:{id:'issueYn',dataType:'string',name:'issueYn'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'inpdt',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'updid',dataType:'string',name:'Update Id'}},{T:1,N:'w2:column',A:{id:'upddt',dataType:'string',name:'Input Id'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_blPrint2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'seaAirCls'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'mblHblCls'}},{T:1,N:'w2:column',A:{id:'issueYn',dataType:'string',name:'issueYn'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'inpdt',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'updid',dataType:'string',name:'Update Id'}},{T:1,N:'w2:column',A:{id:'upddt',dataType:'string',name:'Input Id'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_MasterBookingInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'출발일'}},{T:1,N:'w2:column',A:{id:'ontime',dataType:'string',name:'ontime'}},{T:1,N:'w2:column',A:{id:'fltno',dataType:'string',name:'Flight No'}},{T:1,N:'w2:column',A:{id:'cocd',dataType:'string',name:'Consolidator Code'}},{T:1,N:'w2:column',A:{id:'conm',dataType:'string',name:'Consolidator Name'}},{T:1,N:'w2:column',A:{id:'dpcd',dataType:'string',name:'Departure Code'}},{T:1,N:'w2:column',A:{id:'dscd',dataType:'string',name:'dscd'}},{T:1,N:'w2:column',A:{id:'dpnm',dataType:'string',name:'Departure Name'}},{T:1,N:'w2:column',A:{id:'dsnm',dataType:'string',name:'dsnm'}},{T:1,N:'w2:column',A:{id:'ctn',dataType:'number',name:'ctn'}},{T:1,N:'w2:column',A:{id:'gwht',dataType:'number',name:'gwht'}},{T:1,N:'w2:column',A:{id:'avdt',dataType:'string',name:'도착일'}},{T:1,N:'w2:column',A:{id:'avtime',dataType:'string',name:'avtime'}},{T:1,N:'w2:column',A:{id:'srgb',dataType:'string',name:'srgb'}},{T:1,N:'w2:column',A:{id:'warecd',dataType:'string',name:'warecd'}},{T:1,N:'w2:column',A:{id:'mblgbDesc',dataType:'string',name:'mblgbDesc'}},{T:1,N:'w2:column',A:{id:'lenm',dataType:'string',name:'lenm'}},{T:1,N:'w2:column',A:{id:'nrate',dataType:'number',name:'nrate'}},{T:1,N:'w2:column',A:{id:'cacd',dataType:'string',name:'cacd'}},{T:1,N:'w2:column',A:{id:'bltypeDesc',dataType:'string',name:'bltypeDesc'}},{T:1,N:'w2:column',A:{id:'lrgb',dataType:'string',name:'lrgb'}},{T:1,N:'w2:column',A:{id:'mblno',dataType:'string',name:'mblno'}},{T:1,N:'w2:column',A:{id:'warenm',dataType:'string',name:'warenm'}},{T:1,N:'w2:column',A:{id:'shipgbDesc',dataType:'string',name:'shipgbDesc'}},{T:1,N:'w2:column',A:{id:'bltype',dataType:'string',name:'bltype'}},{T:1,N:'w2:column',A:{id:'lecd',dataType:'string',name:'lecd'}},{T:1,N:'w2:column',A:{id:'canm',dataType:'string',name:'canm'}},{T:1,N:'w2:column',A:{id:'iata',dataType:'string',name:'iata'}},{T:1,N:'w2:column',A:{id:'rowStatus',dataType:'string',name:'rowStatus'}},{T:1,N:'w2:column',A:{id:'mblgb',dataType:'string',name:'mblgb'}},{T:1,N:'w2:column',A:{id:'shipgb',dataType:'string',name:'shipgb'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_CustomerBookingCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shcd',dataType:'string',name:'Shipper Code'}},{T:1,N:'w2:column',A:{id:'ascd',dataType:'string',name:'청구처 코드'}},{T:1,N:'w2:column',A:{id:'sacd',dataType:'string',name:'sacd'}},{T:1,N:'w2:column',A:{id:'sanm',dataType:'string',name:'sanm'}},{T:1,N:'w2:column',A:{id:'itcd',dataType:'string',name:'품명코드'}},{T:1,N:'w2:column',A:{id:'itnm',dataType:'string',name:'품명'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_DeptChangeParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:key',A:{id:'modrNo',dataType:'string',name:'modrNo'}},{T:1,N:'w2:key',A:{id:'hodrNo',dataType:'string',name:'Direct House Order No'}},{T:1,N:'w2:key',A:{id:'dept',dataType:'string',name:'귀속부서코드'}},{T:1,N:'w2:key',A:{id:'deptnm',dataType:'string',name:'귀속부서명'}},{T:1,N:'w2:key',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:key',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_InvoiceCheckParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'string',name:'법인코드 No'}},{T:1,N:'w2:key',A:{id:'blNo',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:key',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:key',A:{id:'seaAirCls',dataType:'string',name:'seaAirCls'}},{T:1,N:'w2:key',A:{id:'mblHblCls',dataType:'string',name:'mblHblCls'}},{T:1,N:'w2:key',A:{id:'gbun',dataType:'string',name:'b/l 운임 구분 (\'B\',\'F\')'}},{T:1,N:'w2:key',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:key',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_InvoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_mmhno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'string',name:'code'}},{T:1,N:'w2:column',A:{id:'name',dataType:'string',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hdif'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'string',name:'code'}},{T:1,N:'w2:column',A:{id:'name',dataType:'string',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_departmentInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',dataType:'string',name:'CODE'}},{T:1,N:'w2:column',A:{id:'NAME',dataType:'string',name:'NAME'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_AirportInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',dataType:'string',name:'col1'}},{T:1,N:'w2:column',A:{id:'col2',dataType:'string',name:'col2'}},{T:1,N:'w2:column',A:{id:'col3',dataType:'string',name:'col3'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'string',name:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'string',name:'queryId'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'string',name:'param1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'string',name:'param2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoAirDeptChangeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_InvoiceCheckParam","key":"IN_DS1"},{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.airout.aobl.RetrieveAirExpMasterCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_MasterBillSearch","key":"IN_DS1"},{"id":"ds_MasterBillInfo","key":"OUT_DS1"},{"id":"ds_HouseBillInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_MasterBillInfo","key":"OUT_DS1"},{"id":"ds_HouseBillInfo","key":"OUT_DS2"}]',mediatype:'application/json','ev:submiterror':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.airout.aobl.SaveAirExpMasterCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_MasterBillInfo","key":"IN_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror','ev:submitdone':'scwin.sbm_Save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBookingList',action:'/il.airout.aobl.RetrieveAirExpMasterBookingListCMD.do',method:'post',mode:'synchronous',ref:'data:json,[{"id":"dma_MasterBillSearch","key":"IN_DS1"},{"id":"ds_MasterBookingInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_MasterBookingInfo","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'','ev:submitdone':'scwin.sbm_RetrieveBookingList_submitdone',processMsg:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCustomerBookingCheck',action:'/il.airout.aobl.RetrieveAirExpCustomerBookingCheckCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_MasterBillSearch","key":"IN_DS1"},{"id":"ds_CustomerBookingCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_CustomerBookingCheck","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'','ev:submitdone':'scwin.sbm_RetrieveCustomerBookingCheck_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveAuthGroup',action:'/il.airout.aobl.RetrieveAirBlPrintAuthGroupCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_empNo","key":"IN_DS1"},{"id":"ds_authGroup","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_authGroup","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveBlPrintAdmission',action:'/il.airout.aobl.SaveAirBlPrintAdmissionCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_blPrint2","key":"IN_DS1"}]',mediatype:'application/json','ev:submiterror':'','ev:submitdone':'scwin.sbm_SaveBlPrintAdmission_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBlPrintAdmission',action:'/il.airout.aobl.RetrieveAirBlPrintAdmissionCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_MasterBillSearch","key":"IN_DS1"},{"id":"ds_blPrint","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_blPrint","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'','ev:submitdone':'scwin.sbm_RetrieveBlPrintAdmission_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_loadMasterMhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'synchronous',ref:'data:json,[{"id":"dma_comCode","key":"IN_DS1"}]',target:'data:json,{"id":"ds_mmhno","key":"GAUCE"}',mediatype:'application/json','ev:submiterror':'',processMsg:'$blank'}},{T:1,N:'xf:submission',A:{id:'sbm_loadHdif',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_comCode","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_hdif","key":"GAUCE"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_loadDepartmentInfo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_comCode","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_departmentInfo","key":"GAUCE"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_loadAirportInfo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_comCode","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_AirportInfo","key":"GAUCE"}]',mediatype:'application/json'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ar_104_01_01b
// 이름     : Master Air Waybill (Export)
// 경로     : 해외물류
// 작 성 자 : 김용호
// 작 업 일 : 2026-01-19
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.userId = "";
scwin.airexgbim = "";
scwin.cvsslMgntNo = "";
scwin.empNo = "";
scwin.lobranCd = "";
scwin.p_blno = "";
scwin.p_clntNm = "";
scwin.p_clntNo = "";
scwin.p_kcomcd = "";
scwin.p_lobranCd = "";
scwin.p_lobranNm = "";
scwin.p_type = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "O";
scwin.hd_otpc = "";
scwin.hd_shipgb = "";
scwin.hd_endgb = "";
scwin.hd_hodrNo = "";

//--------------------------------------------------------------------------//
//							메세지 상수 선언									//
//--------------------------------------------------------------------------//
scwin.MSG_LO_WRN_001 = "%1 에 등록 되어 있어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_002 = "잘못된 Master Number 입니다";
scwin.MSG_LO_WRN_003 = "%1 자료를 생성하세요";
scwin.MSG_LO_WRN_004 = "해당 B/L 번호로 복사 하시겠습니까?";
scwin.MSG_LO_WRN_005 = "이미 인보이스  발행 되어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_010 = "1GG 부서 코드는 사용하실 수 없습니다. ";

//--------------------------------------------------------------------------//
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag
scwin.actionFlag = "";

//전역변수-페이지 링크로 들어 왔을때 해당 b/l, CONSOL 번호  조회 여부 체크
scwin.linkType = "New";
scwin.spRtn = ""; //인보이스 체크 결과
scwin.spMsg = ""; //인보이스 체크 메세지
scwin.freightYn = ""; //b/l 조회시 운임 발행 여부 값
scwin.empNo = "";
scwin.txt_shnm1 = "";
scwin.txt_shnm2 = "";
scwin.txt_shnm3 = "";
scwin.txt_shnm4 = "";
scwin.txt_shnm5 = "";
scwin.txt_cnnm1 = "";
scwin.txt_cnnm2 = "";
scwin.txt_cnnm3 = "";
scwin.txt_cnnm4 = "";
scwin.txt_cnnm5 = "";
scwin.txt_ntnm1 = "";
scwin.txt_ntnm2 = "";
scwin.txt_ntnm3 = "";
scwin.txt_ntnm4 = "";
scwin.txt_ntnm5 = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  scwin.p_lobranCd = $c.data.getMemInfo($p, "lobranCd") || " ";
  scwin.p_lobranNm = $c.data.getMemInfo($p, "lobranNm") || "";
  scwin.empNo = $c.data.getMemInfo($p, "userId") || "";
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") || "";
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.p_blno = $c.data.getParameter($p, "blno") || "";
  scwin.p_type = $c.data.getParameter($p, "type") || "";
  scwin.p_clntNo = $c.data.getMemInfo($p, "clntNo") || "";
  scwin.p_clntNm = $c.data.getMemInfo($p, "clntNm") || "";
  scwin.airexgbim = $c.data.getMemInfo($p, "airexgbim") || "";
  scwin.hd_kcomcd = scwin.p_kcomcd || "DBEX";
  scwin.hd_iogb = "O";
  scwin.hd_otpc = "";
  scwin.hd_shipgb = "";
  scwin.hd_endgb = "";
  scwin.hd_hodrNo = "";
  const codeOptions = [{
    grpCd: "IL005",
    compID: "lc_inco"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    lc_inco.setSelectedIndex(-1);
  });
  if (scwin.f_OnLoad) {
    await scwin.f_OnLoad();
  }
};
scwin.f_OnLoad = async function () {
  scwin.f_initSetTab();
};
scwin.onUdcCompleted = async function () {
  scwin.f_Set("INIT");
  await scwin.f_ds_hdif();
  scwin.processFlag = "None";
  await scwin.f_getParametrSetting(); // link처리, 조회

  ed_blno.focus();
  $c.gus.cfDisableObjects($p, [txt_updid]);
  $c.gus.cfDisableObjects($p, [txt_upddt]);
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = async function () {
  var kcomcd = scwin.p_kcomcd || scwin.hd_kcomcd;
  var blno = scwin.p_blno;
  var type = scwin.p_type;
  if (blno == 'null' || blno == '') {
    return false;
  }
  scwin.hd_kcomcd = kcomcd;
  ed_blno.setValue(blno);
  scwin.linkType = type;
  scwin.f_MhnoLoading();
  await scwin.f_Retrieve();
  if (scwin.linkType == "MawbCreate") {
    scwin.f_Create();
    if (scwin.actionFlag == "Create") {
      if (ed_blno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master Number"]); // 필수 입력 항목 입니다.
        return false;
      }
      //생성시 입력한 Bill 번호를 Booking 정보에서 유무 확인
      scwin.f_ProcessBinding(dma_MasterBillSearch, "MasterBillSearch");
      await $c.sbm.execute($p, sbm_RetrieveBookingList);
    }
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function (gubun) {
  switch (gubun) {
    case "Create":
      //default 동부국제물류
      ed_shcd.setValue(scwin.p_clntNo);
      if (ed_shcd.getValue() != "") {
        scwin.f_PopUp("Shipper", "T", "F", "F");
      }
      txa_mark.setValue("NO MARK");
      ed_dvcr.setValue("N.V.D");
      ed_insu.setValue("NIL");
      ed_acif1.setValue("FREIGHT PREPAID");
      ed_cucd.setValue("KRW");
      rd_frpc.setValue("PP");
      chb_otpc1.setValue("1");
      chb_otpc2.setValue("0");
      lc_mmhno.setValue("");
      ed_blno.focus();
      ta_hhs.setValue("");
      ta_hhc.setValue("");
      ta_hhn.setValue("");

      //추가
      ed_mftpkg.setValue("0");
      ed_mftwht.setValue("0");
      ed_tcwht.setValue("0");
      break;
    case "Copy":
      ed_blno.setValue("");
      lc_mmhno.setValue("");
      ed_srno.setValue("");
      break;
    default:
      break;
  }
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  //$c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
  scwin.f_selectTabMenu(0);
};

//-------------------------------------------------------------------------
// Retrieve
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_blno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L No"]);
    ed_blno.focus();
    return false;
  }
  ds_MasterBillInfo.removeAll();
  ds_HouseBillInfo.removeAll();
  totalRow.setValue(ds_HouseBillInfo.getTotalRow());
  scwin.f_ProcessBinding(dma_MasterBillSearch, "MasterBillSearch");
  let e = await $c.sbm.execute($p, sbm_Retrieve);
  // if (e.responseJSON.resultDataSet[0].Code < 0) {
  //     return
  // } else {
  //     await scwin.sbm_Retrieve_submitdone();
  // }
};

//-------------------------------------------------------------------------
// House b/l 바로 가기
//-------------------------------------------------------------------------
scwin.f_HouseLink = async function () {
  var row = ds_HouseBillInfo.getRowPosition();
  if (row >= 0) {
    var v_blno = ds_HouseBillInfo.getCellData(row, "blno");
    scwin._openMenu("Export House B/L", "/ui/il/airout/aobl/ar_104_01_01b.xml", "ar_104_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      blno: v_blno
    });
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056);
    return;
  }
};
//-------------------------------------------------------------------------
//조회 결과
//-------------------------------------------------------------------------
scwin.f_ProcessResult = async function (gubun) {
  switch (gubun) {
    case "None":
      if (scwin.linkType != "MawbCreate") {
        // 마스터 부킹에서 넘어와 마스터 조회 시 없으면 그 type none로 변경해서 create시켜 주기 위해
        scwin.f_Set("INIT");
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); // 해당 되는 자료가 없습니다.
        ed_blno.focus();
      }
      break;
    case "MasterInfo":
      if (scwin.linkType == "MawbCreate") {
        // 마스터 부킹에서 넘어와 마스터 조회 시 없으면 그 type none로 변경해서 create시켜 주기 위해
        scwin.linkType = "None";
      }
      scwin.f_OtherTypeGetting();
      scwin.f_TypeInfoSetting("MasterInfo", ds_MasterBillInfo);
      scwin.f_Set("RETRIEVE");
      await scwin.f_InvoiceCheck_All("B"); //운임 발생시 ITEM , Department 수정 못 하게 하기 위해 검색

      ed_blno.focus();
      break;
    case "NotExistBookingInfo":
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_003, ["Master Booking"]); // @ 자료를 생성하세요
      scwin.processFlag = "None";
      ed_srno.setValue("");
      break;
    case "ExistBookingInfo":
      scwin.processFlag = "ExistBookingInfo";
      scwin.f_BookingListBinding("Retrieve", ds_MasterBookingInfo, ds_MasterBillInfo);
      scwin.f_TypeInfoSetting("BookingInfo", ds_MasterBookingInfo);

      //lc_mmhno.focus();
      if (ed_shipgb.getValue() == "Direct") {
        $c.gus.cfEnableObjects($p, [ed_srno]);
        ed_shcd.focus();
      } else {
        $c.gus.cfDisableObjects($p, [ed_srno]);
        ed_shcd.focus();
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//Invoice Chedk
//-------------------------------------------------------------------------
scwin.f_InvoiceCheck_All = async function (gbun) {
  var ds = dma_InvoiceCheckParam;
  ds.undo();
  ds_MasterBillInfo.setRowPosition(0);
  ds.set("odrNo", ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "odrNo")); // Order No
  ds.set("mblHblCls", "M");
  ds.set("kcomcd", scwin.hd_kcomcd); // 법인코드
  ds.set("seaAirCls", "A"); // 해운/항공 구분
  ds.set("blNo", ed_blno.getValue()); // Master Bill No
  ds.set("mhno", lc_mmhno.getValue()); // Consol No
  if (gbun == "B") {
    ds.set("gbun", 'B'); // b/l 운임 구분 ('B','F')
  } else {
    ds.set("gbun", 'F'); // b/l 운임 구분 ('B','F')
  }
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  let e1 = await $c.sbm.execute($p, sbm_InvoiceCheck);
  if (e1.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  scwin.spMsg = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spMsg");
  scwin.spRtn = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spRtn");
  scwin.freightYn = scwin.spRtn;
  var shipgb = ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition() || 0, "shipgb");
  if (shipgb == "D" && scwin.spRtn == "0") {
    //Direct house order no 로 한번 더 체크 해줌
    ds.undo();
    ds.set("odrNo", ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition() || 0, "hodrNo")); // Order No
    ds.set("mblHblCls", "H");
    ds.set("kcomcd", scwin.hd_kcomcd); // 법인코드
    ds.set("seaAirCls", "A"); // 해운/항공 구분
    ds.set("blNo", ed_blno.getValue()); // Master Bill No
    ds.set("mhno", lc_mmhno.getValue()); // Consol No
    if (gbun == "B") {
      ds.set("gbun", 'B'); // b/l 운임 구분 ('B','F')
    } else {
      ds.set("gbun", 'F'); // b/l 운임 구분 ('B','F')
    }
    scwin.spMsg = "";
    scwin.spRtn = "-1";
    let e2 = await $c.sbm.execute($p, sbm_InvoiceCheck);
    if (e2.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

    scwin.spMsg = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spMsg");
    scwin.spRtn = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spRtn");
    scwin.freightYn = scwin.spRtn;
  }
};

//-------------------------------------------------------------------------
//조회조건 바인딩
//-------------------------------------------------------------------------
scwin.f_ProcessBinding = function (ds, gubun) {
  switch (gubun) {
    case "MasterBillSearch":
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("blno", ed_blno.getValue());
      ds.set("mhno", lc_mmhno.getValue());
      ds.set("iogb", scwin.hd_iogb);
      break;
    case "MasterBillSave":
      ds.setCellData(ds.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds.setCellData(ds.getRowPosition(), "iogb", scwin.hd_iogb);
      ds.setCellData(ds.getRowPosition(), "blno", ed_blno.getValue());
      break;
    case "CustomerBookingCheck":
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("srno", ed_srno.getValue());
      ds.set("iogb", scwin.hd_iogb);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// Create
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  ds_MasterBillInfo.removeAll();
  ds_MasterBillInfo.insertRow(0);
  ds_MasterBillInfo.setRowPosition(0);
  ds_HouseBillInfo.removeAll();
  totalRow.setValue(ds_HouseBillInfo.getTotalRow());
  scwin.f_Set("CREATE");
  scwin.actionFlag = "Create";
  ed_blno.focus();
  txt_ediItem.setValue("CONSOLIDATION");
  scwin._syncHiddenFromDs();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (scwin.actionFlag == "Create") {
    scwin.f_Set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_Set("RETRIEVE");
  }
  ;
  lc_inco.setValue("");
  ds_MasterBillInfo.undoAll();
};

//-------------------------------------------------------------------------
// Update
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set("UPDATE");
};

//-------------------------------------------------------------------------
// Save
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.f_TextareaSave();
  scwin._syncHiddenToDs();

  //if (scwin.actionFlag == "Create" || scwin.actionFlag == "Copy"){
  if (scwin.actionFlag == "Copy") {
    if (lc_mmhno.getValue() != "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, [ed_blno.getValue()]); //@은(는) 중복될 수 없습니다.
      ed_blno.focus();
      return false;
    }
    ds_MasterBillInfo.setRowPosition(0);
    ds_MasterBillInfo.setRowStatus(ds_MasterBillInfo.getRowPosition(), "C"); //Gauce jobType : Insert 로 변경
  }
  if (ed_shCtcd.getValue() == "") {
    await $c.win.alert($p, "Shipper Country code is mandatory.");
    return false;
  }
  if (ed_cnCtcd.getValue() == "") {
    await $c.win.alert($p, "Consignee Country code is mandatory.");
    return false;
  }
  if (txt_ediItem.getValue() == "") {
    await $c.win.alert($p, "EDI Item is mandatory.");
    return false;
  }
  scwin.f_ProcessBinding(ds_MasterBillInfo, "MasterBillSave");
  scwin.f_OtherTypeSetting();
  if (ds_MasterBillInfo.getModifiedIndex().length > 0) {
    scwin.f_selectTabMenu(0); // 저장 전 TAB FOCUS  이동
    if (await scwin.f_ReqFieldChk()) {
      scwin.actionFlag = "Save";
      await $c.sbm.execute($p, sbm_Save);
    } else {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Master Info"]); //@은(는) 변경된 사항이 없습니다.
    }
  }
};

//유효성검사
scwin.f_ReqFieldChk = async function () {
  if (ed_blno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L No"]);
    ed_blno.focus();
    return false;
  }
  if (ed_ondt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Onboard Date"]);
    ed_ondt.focus();
    return false;
  }
  if (ed_avdt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Arrival Date"]);
    ed_avdt.focus();
    return false;
  }
  if (scwin.hd_shipgb == "D" && ed_srno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]);
    ed_srno.focus();
    return false;
  }
  if (ed_dept.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department Info"]);
    ed_dept.focus();
    return false;
  }
  if (ed_locd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Salesman Info"]);
    ed_locd.focus();
    return false;
  }
  if (ed_itcd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Info"]);
    //scwin.f_selectTabMenu(1);
    ed_itcd.focus();
    return false;
  }
  if (ed_cjdt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Result Date Date"]);
    ed_cjdt.focus();
    return false;
  }
  if ($c.gus.cfIsAfterDate($p, ed_ondt.getValue(), ed_avdt.getValue()) == false) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_ondt.focus();
    return false;
  }
  if (ed_dept.getValue() == "1GG") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
    ed_dept.focus();
    return false;
  }
  if ((await $c.gus.cfValidate($p, [ed_blno, lc_mmhno, ed_srno])) == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------------
//  Copy
//	Master Booking 정보에 존재 유무를 확인
//	유 -> Booking 입력
//	무 -> Booking 정보를 가져 온다. (Bill Type, Carrier, Onboard Date, Arrival Date 등
//	필요한 기초 정보를 가져온다.
//-------------------------------------------------------------------------------
scwin.f_Copy = async function () {
  if (await $c.win.confirm($p, scwin.MSG_LO_WRN_004)) {
    //해당 B/L 번호로 복사 하시겠습니까?
    scwin.actionFlag = "Copy";
    scwin.f_DefaultValue("Copy");
    scwin.f_Set("CREATE");
    scwin._syncHiddenFromDs();
    ed_blno.focus();
  }
};

//-------------------------------------------------------------------------
// Delete
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_HouseBillInfo.getRowCount() > 0 && scwin.hd_shipgb != "D") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_001, ["House Information"]);
    ed_blno.focus();
    return false;
  }
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    //삭제하시겠습니까?

    await scwin.f_InvoiceCheck_All("F"); //운임 발행 여부 확인

    if (scwin.spRtn == "0") {
      scwin.actionFlag = "Delete";

      // ds_MasterBillInfo.DeleteMarked();
      var rowIdx = ds_MasterBillInfo.getRowPosition() || 0;
      if (ds_MasterBillInfo.getRowStatus(rowIdx) == "C") {
        ds_MasterBillInfo.removeRow(rowIdx);
      } else {
        ds_MasterBillInfo.deleteRow(rowIdx);
      }
      await $c.sbm.execute($p, sbm_Save);
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_005);
    }
  }
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, pu_Freight, pu_AmsEdi, pu_PlSheet, pu_Manifest, pu_Dimens, pu_Print, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, pu_Find, pu_Hawb, pu_Sr]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Sr, pu_Find, pu_Hawb, pu_Freight, pu_AmsEdi, pu_PlSheet, pu_Manifest, pu_Dimens, pu_Print, pu_departmentChange]);
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);

      //Default Setting
      scwin.f_DefaultValue("Create");
      scwin.freightYn = "";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Sr, pu_Find, pu_Hawb, pu_Freight, pu_AmsEdi, pu_PlSheet, pu_Manifest, pu_Dimens, pu_Print, pu_departmentChange]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
  }

  //$c.gus.cfDisableObjects([chb_endgb]);
  $c.gus.cfDisableObjects($p, [ed_lecd, txt_lenm, lc_lrgb, img_lecd]); //Master Agent 마스터 부킹에서 수정 해야 됨
  if (scwin.freightYn == "-1") {
    //운임이 발생 됨
    $c.gus.cfDisableObjects($p, [ed_dept, txt_deptnm, img_dept, ed_itcd, txt_itnm, img_itcd]); //운임 발행시 Item, Department Disable
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  // no-op: no matching date popups in this screen
  // $c.gus.cfEnableObjects([img_ondt,img_avdt, img_cjdt]); 캘린더 popup 버튼 > 사용X
  $c.gus.cfEnableObjects($p, [img_shcd, img_cncd, img_ntcd, img_cacd, img_lecd, img_dpcd, img_cucd]);
  $c.gus.cfEnableObjects($p, [img_dept, img_locd, img_sgcd, img_itcd, img_ctcd, img_shCtcd, img_cnCtcd, img_ascd, img_ascdpic]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  // no-op: no matching date popups in this screen
  // $c.gus.cfEnableObjects([img_ondt,img_avdt, img_cjdt]); 캘린더 popup 버튼 > 사용X
  $c.gus.cfDisableObjects($p, [img_shcd, img_cncd, img_ntcd, img_cacd, img_lecd, img_dpcd, img_cucd]);
  $c.gus.cfDisableObjects($p, [img_dept, img_locd, img_sgcd, img_itcd, img_ctcd, img_shCtcd, img_cnCtcd, img_ascd, img_ascdpic]);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  switch (idx) {
    case 0:
      //Header tab
      break;
    case 1:
      //Container tab
      break;
  }
  tab_Main.setSelectedTabIndex(idx);
};

//-------------------------------------------------------------------------
// Button/Udc event handlers
//-------------------------------------------------------------------------
scwin.f_SetDSHeader = function (ds, gubun) {};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------

scwin.f_FieldClear = function () {};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin._getCommonParam = function () {
  return {
    iogb: $c.str.trim($p, scwin.hd_iogb),
    blno: $c.str.trim($p, ed_blno.getValue()),
    mhno: $c.str.trim($p, lc_mmhno.getValue()),
    kcomcd: $c.str.trim($p, scwin.hd_kcomcd),
    srno: $c.str.trim($p, ed_srno.getValue())
  };
};
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};
scwin.f_openPgm_freight = function () {
  var commonParam = scwin._getCommonParam();
  params = {
    blno: commonParam.blno,
    kcomcd: commonParam.kcomcd,
    mhno: commonParam.mhno
  };
  menuInfo = {
    pgmNm: "Export Master B/L Freight"
  };
  $c.win.openMenu($p, "Master Air Waybill Freight", "/ui/il/airout/aobl/ar_103_01_04b.xml", "ar_103_01_04b.xml", params, menuInfo);
};
scwin.f_openPgm = function (name) {
  var commonParam = scwin._getCommonParam();
  switch (name) {
    case "Freight":
      scwin.f_openPgm_freight();
      break;
    case "AMS":
      scwin._openMenu(
      // "Master Air Waybill AMS EDI",
      "수출 AMS 신고", "/ui/il/aredi/aram/ed_112_01_01b.xml", "ed_112_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    case "Find":
      scwin._openMenu("Master B/L Search", "/ui/il/airout/aobl/ar_103_01_02b.xml", "ar_103_01_02b.xml", {
        iogb: "O"
      });
      break;
    case "Hawb":
      //결함2
      scwin._openMenu("Export House B/L", "/ui/il/airout/aobl/ar_104_01_01b.xml", "ar_104_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        mblno: commonParam.blno,
        type: "HawbCreate"
      });
      break;
    case "DIM":
      scwin._openMenu("Master Dimension 1", "/ui/il/airout/aobl/ar_103_01_03b.xml", "ar_103_01_03b.xml", {
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    case "MNF":
      scwin._openMenu("Cargo Manifest", "/ui/il/airout/aoth/ar_105_01_01b.xml", "ar_105_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    case "PL":
      scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        seaair: "A",
        // sea:S,air:A
        iogb: commonParam.iogb,
        // out:O,in:I
        blno: "",
        // house blno
        mblno: commonParam.blno,
        // master blno
        mhno: commonParam.mhno // mhno
      });
      break;
    case "Booking":
      scwin._openMenu("Export Customer Booking", "/ui/il/airout/aobk/ar_101_01_01b.xml", "ar_101_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        srno: commonParam.srno
      });
      break;
    case "Print":
      scwin._openMenu("Master B/L Print", "/ui/il/airout/aobl/ar_103_01_05b.xml", "ar_103_01_05b.xml", {
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//  Booking List Binding
//  Booking 정보에 있는 내용을 Master 기본 정보로 보여 준다.
//-------------------------------------------------------------------------
scwin.f_BookingListBinding = function (gubun, dsBooking, dsMaster) {
  var rowBooking = dsBooking.getRowPosition() || 0;
  var rowMaster = dsMaster.getRowPosition() || 0;
  switch (gubun) {
    case "Retrieve":
      dsMaster.setCellData(rowMaster, "mhno", dsBooking.getCellData(rowBooking, "mhno"));
      dsMaster.setCellData(rowMaster, "mblgb", dsBooking.getCellData(rowBooking, "mblgb"));
      dsMaster.setCellData(rowMaster, "ondt", dsBooking.getCellData(rowBooking, "ondt"));
      dsMaster.setCellData(rowMaster, "cjdt", dsBooking.getCellData(rowBooking, "ondt"));
      dsMaster.setCellData(rowMaster, "ontm", dsBooking.getCellData(rowBooking, "ontime"));
      dsMaster.setCellData(rowMaster, "cacd", dsBooking.getCellData(rowBooking, "cacd")); //check
      dsMaster.setCellData(rowMaster, "canm", dsBooking.getCellData(rowBooking, "canm"));
      dsMaster.setCellData(rowMaster, "fltno", dsBooking.getCellData(rowBooking, "fltno"));
      dsMaster.setCellData(rowMaster, "ptcd1", dsBooking.getCellData(rowBooking, "fltno").substring(0, 2));
      dsMaster.setCellData(rowMaster, "cocd", dsBooking.getCellData(rowBooking, "cocd"));
      dsMaster.setCellData(rowMaster, "conm", dsBooking.getCellData(rowBooking, "conm"));
      dsMaster.setCellData(rowMaster, "dpcd", dsBooking.getCellData(rowBooking, "dpcd"));
      dsMaster.setCellData(rowMaster, "dstn", dsBooking.getCellData(rowBooking, "dscd"));
      dsMaster.setCellData(rowMaster, "dpnm", dsBooking.getCellData(rowBooking, "dpnm"));
      dsMaster.setCellData(rowMaster, "dscd1", dsBooking.getCellData(rowBooking, "dscd"));
      dsMaster.setCellData(rowMaster, "dsnm1", dsBooking.getCellData(rowBooking, "dsnm"));
      dsMaster.setCellData(rowMaster, "warecd", dsBooking.getCellData(rowBooking, "warecd"));
      dsMaster.setCellData(rowMaster, "warenm", dsBooking.getCellData(rowBooking, "warenm"));
      dsMaster.setCellData(rowMaster, "bltype", dsBooking.getCellData(rowBooking, "bltype"));
      dsMaster.setCellData(rowMaster, "shipgb", dsBooking.getCellData(rowBooking, "shipgb"));
      dsMaster.setCellData(rowMaster, "mftpkg", dsBooking.getCellData(rowBooking, "ctn"));
      dsMaster.setCellData(rowMaster, "mftwht", dsBooking.getCellData(rowBooking, "gwht"));
      dsMaster.setCellData(rowMaster, "avdt", dsBooking.getCellData(rowBooking, "avdt"));
      dsMaster.setCellData(rowMaster, "avtm", dsBooking.getCellData(rowBooking, "avtime"));
      dsMaster.setCellData(rowMaster, "voidgb", dsBooking.getCellData(rowBooking, "voidgb"));
      dsMaster.setCellData(rowMaster, "lecd", dsBooking.getCellData(rowBooking, "lecd"));
      dsMaster.setCellData(rowMaster, "lenm", dsBooking.getCellData(rowBooking, "lenm"));

      //scwin.f_AirportDestination();
      scwin.f_DestinationCheck(); // 국가 코드 뿌려 주기 위해

      if (ed_ctcd.getValue().length > 0) {
        scwin.f_OpenCommonPopUp("Country", "T", "F", "F");
      }
      break;
    case "Copy":
      dsMaster.setCellData(rowMaster, "mhno", dsBooking.getCellData(rowBooking, "mhno"));
      dsMaster.setCellData(rowMaster, "mblgb", dsBooking.getCellData(rowBooking, "mblgb"));
      dsMaster.setCellData(rowMaster, "ondt", dsBooking.getCellData(rowBooking, "ondt"));
      dsMaster.setCellData(rowMaster, "avdt", dsBooking.getCellData(rowBooking, "avdt"));
      dsMaster.setCellData(rowMaster, "cacd", dsBooking.getCellData(rowBooking, "cacd"));
      dsMaster.setCellData(rowMaster, "canm", dsBooking.getCellData(rowBooking, "canm"));
      dsMaster.setCellData(rowMaster, "bltype", dsBooking.getCellData(rowBooking, "bltype"));
      dsMaster.setCellData(rowMaster, "shipgb", dsBooking.getCellData(rowBooking, "shipgb"));
      break;
    default:
      break;
  }
  scwin._syncHiddenFromDs();
};

//-------------------------------------------------------------------------
//Other Type Setting
//-------------------------------------------------------------------------
scwin.f_OtherTypeSetting = function () {
  var otpc_value = "";
  if (chb_otpc1.checked) {
    otpc_value = "PP";
  }
  if (chb_otpc2.checked) {
    otpc_value = "CC";
  }
  if (chb_otpc1.checked && chb_otpc2.checked) {
    otpc_value = "PC";
  }
  ds_MasterBillInfo.setRowPosition(0);
  ds_MasterBillInfo.setCellData(ds_MasterBillInfo.getRowPosition(), "otpc", otpc_value);
};

//-------------------------------------------------------------------------
//Other Type Getting
//-------------------------------------------------------------------------
scwin.f_OtherTypeGetting = function () {
  chb_otpc1.setValue("0");
  chb_otpc2.setValue("0");
  if (scwin.hd_otpc == "PP") {
    chb_otpc1.setValue("1");
  }
  if (scwin.hd_otpc == "CC") {
    chb_otpc2.setValue("1");
  }
  if (scwin.hd_otpc == "PC") {
    chb_otpc1.setValue("1");
    chb_otpc2.setValue("1");
  }
};

//-------------------------------------------------------------------------
//Other Type Getting
//-------------------------------------------------------------------------
scwin.f_TypeInfoSetting = function (gubun, ds) {
  ds.setRowPosition(0);
  switch (gubun) {
    case "MasterInfo":
      ed_mblgb.setValue(ds.getCellData(ds.getRowPosition(), "mblgbDesc"));
      ed_shipgb.setValue(ds.getCellData(ds.getRowPosition(), "shipgbDesc"));
      break;
    case "BookingInfo":
      ed_mblgb.setValue(ds.getCellData(ds.getRowPosition(), "mblgbDesc"));
      ed_shipgb.setValue(ds.getCellData(ds.getRowPosition(), "shipgbDesc"));
      break;
    default:
      ed_mblgb.setValue("");
      ed_shipgb.setValue("");
      break;
  }
};

//-------------------------------------------------------------------------
// ilpopupdefine 열기 (팝업)
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    //Booking No
    case "CustomerBookingInfo":
      if (ed_shipgb.getValue() != "Direct") {
        break;
      }
      if (ed_srno.getValue() == "") {
        udc_bookingNo.ilCommonPopUp(scwin.udc_bookingNo_callBackFun,
        // XML상의 SELECT ID	                                                   							
        ed_ondt.getValue(),
        // 화면에서의 ??? Code Element의	Value                                  
        '',
        // 화면에서의 ??? Name Element의	Value                                  
        pWinCloseTF,
        // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
        '4',
        // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Booking No, Onboard, Shipper,Remark,''",
        // Title순서	 										                                                       
        '100,80,200,250',
        // 보여주는 각 컬럼들의 폭	
        "5,6,7,8,9,10",
        // 컬럼중에서 숨기는	컬럼 지정	                                    
        null,
        // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        '500',
        // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        '500',
        // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        null,
        // 윈도우 위치 Y좌표	                                                   
        null,
        // 윈도우 위치 X좌표                                                       
        null,
        // 중복체크여부	("F")                                                      
        pAllSearchTF,
        // 전체검색허용여부	("F")                                                  
        "Booking No, Onboard, Shipper",
        // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
        pNoDataCloseTF);
      }
      break;

    // Shipper
    case "Shipper":
      //거래처 팝업(Search Shipper)
      udc_shcd.ilCommonPopUp(scwin.udc_shcd_callBackFun,
      // XML상의 SELECT ID	                                                   							
      ed_shcd.getValue(),
      // 화면에서의 ??? Code Element의	Value                                  
      scwin.txt_shnm1,
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '6',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Shipper',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      null,
      // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      pNoDataCloseTF);
      break;

    // Consignee
    case "Consignee":
      udc_cncd.ilCommonPopUp(scwin.udc_cncd_callBackFun, ed_cncd.getValue(), scwin.txt_cnnm1, pWinCloseTF, '6', 'Consignee', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;

    // Notify
    case "Notify":
      udc_ntcd.ilCommonPopUp(scwin.udc_ntcd_callBackFun, ed_ntcd.getValue(), scwin.txt_ntnm1, pWinCloseTF, '6', 'Notify', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;

    // Carrier
    case "Carrier":
      udc_cacd.ilCommonPopUp(scwin.udc_cacd_callBackFun, ed_cacd.getValue(), txt_canm.getValue(), pWinCloseTF, '2', 'Carrier', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;

    // Master Agent
    case "MasterAgt":
      udc_lecd.ilCommonPopUp(scwin.udc_lecd_callBackFun, ed_lecd.getValue(), txt_lenm.getValue(), pWinCloseTF, '2', 'Agent', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;

    // Departure
    case "Departure":
      udc_dpcd.ilCommonPopUp(scwin.udc_dpcd_callBackFun, ed_dpcd.getValue(), txt_dpnm.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);
      break;

    // Customer
    case "Customer":
      udc_ascd.ilCommonPopUp(scwin.udc_ascd_callBackFun, ed_ascd.getValue(), txt_asnm.getValue(), pWinCloseTF, '2', 'Customer', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;

    // PIC
    case "CustomerPic":
      let pParam = ed_ascd.getValue();
      udc_ascdpic.ilCommonPopUp(scwin.udc_ascdpic_callBackFun,
      // XML상의 SELECT ID	                                                   
      ed_ascdpic.getValue(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_ascdpicnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "Customer PIC",
      // Title순서	                                                           
      //'80,200,120,300',               // 보여주는 각 컬럼들의 폭	                                               
      '100,350',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      pParam,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "T",
      // 전체검색허용여부	("F")                                                  
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
      break;

    // Currency
    case "Currency":
      //Search Currency
      udc_cucd.ilCommonPopUp(scwin.udc_cucd_callBackFun, ed_cucd.getValue(), ed_cucd.getValue(), pWinCloseTF, '2', 'Currency', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    default:
      break;
  }
};

// Booking No
scwin.udc_bookingNo_callBackFun = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, ed_srno);
    }
  }
  ed_srno.focus();
};

// Shipper
scwin.udc_shcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_shcd, txt_shnm);
  scwin.txt_shnm1 = rtnList[1] || "";
  scwin.txt_shnm2 = rtnList[2] || "";
  scwin.txt_shnm3 = rtnList[3] || "";
  scwin.txt_shnm4 = rtnList[4] || "";
  scwin.txt_shnm5 = rtnList[5] || "";
  ta_hhs.setValue(scwin.txt_shnm1 + "\n" + scwin.txt_shnm2 + "\n" + scwin.txt_shnm3 + "\n" + scwin.txt_shnm4 + "\n" + scwin.txt_shnm5);

  //Customer Info Copy
  if (ed_ascd.getValue() == "") {
    // ed_ascd.Text = ed_shcd.Text;
    txt_asnm.setValue(scwin.txt_shnm1);
  }

  // scwin.ed_shcd_onblur 코드 옮김
  if (ed_ascd.getValue() == "") {
    ed_ascd.setValue(ed_shcd.getValue());
    txt_asnm.setValue(scwin.txt_shnm1);
  }
  if (ed_dept.getValue() == "") {
    scwin.f_departmentInfo();
  }
};

// Consignee
scwin.udc_cncd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cncd, txt_cnnm);
  scwin.txt_cnnm1 = rtnList[1] || "";
  scwin.txt_cnnm2 = rtnList[2] || "";
  scwin.txt_cnnm3 = rtnList[3] || "";
  scwin.txt_cnnm4 = rtnList[4] || "";
  scwin.txt_cnnm5 = rtnList[5] || "";
  ta_hhc.setValue(scwin.txt_cnnm1 + "\n" + scwin.txt_cnnm2 + "\n" + scwin.txt_cnnm3 + "\n" + scwin.txt_cnnm4 + "\n" + scwin.txt_cnnm5);
};

// Notify
scwin.udc_ntcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ntcd, txt_ntnm);
  scwin.txt_ntnm1 = rtnList[1] || "";
  scwin.txt_ntnm2 = rtnList[2] || "";
  scwin.txt_ntnm3 = rtnList[3] || "";
  scwin.txt_ntnm4 = rtnList[4] || "";
  scwin.txt_ntnm5 = rtnList[5] || "";
  ta_hhn.setValue(scwin.txt_ntnm1 + "\n" + scwin.txt_ntnm2 + "\n" + scwin.txt_ntnm3 + "\n" + scwin.txt_ntnm4 + "\n" + scwin.txt_cnnm5);
};

// Carrier
scwin.udc_cacd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cacd, txt_canm);
};

// Master Agent
scwin.udc_lecd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cacd, txt_canm);
};

// Departure
scwin.udc_dpcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dpcd, txt_dpnm);
};

// Customer
scwin.udc_ascd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ascd, txt_asnm);
};

// CustomerPic
scwin.udc_ascdpic_callBackFun = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_ascdpic, txt_ascdpicnm);
  }
};

// Currency
scwin.udc_cucd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cucd);
};

//-------------------------------------------------------------------------
// ilpopupdefine 열기 이벤트 코드 종료
//-------------------------------------------------------------------------

// hidden name fields sync (JSP display:none inputs)
scwin._setShipperNames = function (v1, v2, v3, v4, v5) {
  var row = ds_MasterBillInfo.getRowPosition();
  if (row < 0) {
    row = 0;
  }
  scwin.txt_shnm1 = v1 || "";
  scwin.txt_shnm2 = v2 || "";
  scwin.txt_shnm3 = v3 || "";
  scwin.txt_shnm4 = v4 || "";
  scwin.txt_shnm5 = v5 || "";
  if (ds_MasterBillInfo.getRowCount() > 0) {
    ds_MasterBillInfo.setCellData(row, "shnm1", scwin.txt_shnm1);
    ds_MasterBillInfo.setCellData(row, "shnm2", scwin.txt_shnm2);
    ds_MasterBillInfo.setCellData(row, "shnm3", scwin.txt_shnm3);
    ds_MasterBillInfo.setCellData(row, "shnm4", scwin.txt_shnm4);
    ds_MasterBillInfo.setCellData(row, "shnm5", scwin.txt_shnm5);
  }
};
scwin._setConsigneeNames = function (v1, v2, v3, v4, v5) {
  var row = ds_MasterBillInfo.getRowPosition();
  if (row < 0) {
    row = 0;
  }
  scwin.txt_cnnm1 = v1 || "";
  scwin.txt_cnnm2 = v2 || "";
  scwin.txt_cnnm3 = v3 || "";
  scwin.txt_cnnm4 = v4 || "";
  scwin.txt_cnnm5 = v5 || "";
  if (ds_MasterBillInfo.getRowCount() > 0) {
    ds_MasterBillInfo.setCellData(row, "cnnm1", scwin.txt_cnnm1);
    ds_MasterBillInfo.setCellData(row, "cnnm2", scwin.txt_cnnm2);
    ds_MasterBillInfo.setCellData(row, "cnnm3", scwin.txt_cnnm3);
    ds_MasterBillInfo.setCellData(row, "cnnm4", scwin.txt_cnnm4);
    ds_MasterBillInfo.setCellData(row, "cnnm5", scwin.txt_cnnm5);
  }
};
scwin._setNotifyNames = function (v1, v2, v3, v4, v5) {
  var row = ds_MasterBillInfo.getRowPosition();
  if (row < 0) {
    row = 0;
  }
  scwin.txt_ntnm1 = v1 || "";
  scwin.txt_ntnm2 = v2 || "";
  scwin.txt_ntnm3 = v3 || "";
  scwin.txt_ntnm4 = v4 || "";
  scwin.txt_ntnm5 = v5 || "";
  if (ds_MasterBillInfo.getRowCount() > 0) {
    ds_MasterBillInfo.setCellData(row, "ntnm1", scwin.txt_ntnm1);
    ds_MasterBillInfo.setCellData(row, "ntnm2", scwin.txt_ntnm2);
    ds_MasterBillInfo.setCellData(row, "ntnm3", scwin.txt_ntnm3);
    ds_MasterBillInfo.setCellData(row, "ntnm4", scwin.txt_ntnm4);
    ds_MasterBillInfo.setCellData(row, "ntnm5", scwin.txt_ntnm5);
  }
};
scwin._syncHiddenFromDs = function () {
  if (ds_MasterBillInfo.getRowCount() == 0) {
    scwin.txt_shnm1 = "";
    scwin.txt_shnm2 = "";
    scwin.txt_shnm3 = "";
    scwin.txt_shnm4 = "";
    scwin.txt_shnm5 = "";
    scwin.txt_cnnm1 = "";
    scwin.txt_cnnm2 = "";
    scwin.txt_cnnm3 = "";
    scwin.txt_cnnm4 = "";
    scwin.txt_cnnm5 = "";
    scwin.txt_ntnm1 = "";
    scwin.txt_ntnm2 = "";
    scwin.txt_ntnm3 = "";
    scwin.txt_ntnm4 = "";
    scwin.txt_ntnm5 = "";
    return;
  }
  var row = ds_MasterBillInfo.getRowPosition() || 0;
  scwin.txt_shnm1 = ds_MasterBillInfo.getCellData(row, "shnm1") || "";
  scwin.txt_shnm2 = ds_MasterBillInfo.getCellData(row, "shnm2") || "";
  scwin.txt_shnm3 = ds_MasterBillInfo.getCellData(row, "shnm3") || "";
  scwin.txt_shnm4 = ds_MasterBillInfo.getCellData(row, "shnm4") || "";
  scwin.txt_shnm5 = ds_MasterBillInfo.getCellData(row, "shnm5") || "";
  scwin.txt_cnnm1 = ds_MasterBillInfo.getCellData(row, "cnnm1") || "";
  scwin.txt_cnnm2 = ds_MasterBillInfo.getCellData(row, "cnnm2") || "";
  scwin.txt_cnnm3 = ds_MasterBillInfo.getCellData(row, "cnnm3") || "";
  scwin.txt_cnnm4 = ds_MasterBillInfo.getCellData(row, "cnnm4") || "";
  scwin.txt_cnnm5 = ds_MasterBillInfo.getCellData(row, "cnnm5") || "";
  scwin.txt_ntnm1 = ds_MasterBillInfo.getCellData(row, "ntnm1") || "";
  scwin.txt_ntnm2 = ds_MasterBillInfo.getCellData(row, "ntnm2") || "";
  scwin.txt_ntnm3 = ds_MasterBillInfo.getCellData(row, "ntnm3") || "";
  scwin.txt_ntnm4 = ds_MasterBillInfo.getCellData(row, "ntnm4") || "";
  scwin.txt_ntnm5 = ds_MasterBillInfo.getCellData(row, "ntnm5") || "";

  //히든컴포넌트 set
  scwin.hd_otpc = ds_MasterBillInfo.getCellData(row, "otpc");
  scwin.hd_shipgb = ds_MasterBillInfo.getCellData(row, "shipgb");
  scwin.hd_hodrNo = ds_MasterBillInfo.getCellData(row, "hodrNo");
};
scwin._syncHiddenToDs = function () {
  scwin._setShipperNames(scwin.txt_shnm1, scwin.txt_shnm2, scwin.txt_shnm3, scwin.txt_shnm4, scwin.txt_shnm5);
  scwin._setConsigneeNames(scwin.txt_cnnm1, scwin.txt_cnnm2, scwin.txt_cnnm3, scwin.txt_cnnm4, scwin.txt_cnnm5);
  scwin._setNotifyNames(scwin.txt_ntnm1, scwin.txt_ntnm2, scwin.txt_ntnm3, scwin.txt_ntnm4, scwin.txt_ntnm5);
};

//-------------------------------------------------------------------------
//공통팝업 열기
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Department":
      //Department
      udc_dept.ilCommonPopUp(scwin.udc_dept_callBackFun // XML상의 SELECT ID	
      , ed_dept.getValue() // 화면에서의 ??? Code Element의	Value
      , txt_deptnm.getValue() // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name" // Title순서	
      , '80,230' // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
      );
      break;
    case "Salesman":
      //Salesman
      udc_locd.ilCommonPopUp(scwin.udc_locd_callBackFun, ed_locd.getValue(), txt_lonm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
    case "Location":
      //Location
      udc_arcd.ilCommonPopUp(scwin.udc_arcd_callBackFun, ed_arcd.getValue(), txt_arnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Location,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      //Item
      udc_itcd.ilCommonPopUp(scwin.udc_itcd_callBackFun, ed_itcd.getValue(), txt_itnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "Signature":
      //Signature
      udc_sgcd.ilCommonPopUp(scwin.udc_sgcd_callBackFun, ed_sgcd.getValue(), txt_sgnm.getValue(), pWinCloseTF, '6', "Code, Name, , , , Name", '80,230,1,1,1,230', "2,3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Signature,Code,Name", pNoDataCloseTF);
      break;
    case "Country":
      //Country
      udc_ctcd.ilCommonPopUp(scwin.udc_ctcd_callBackFun, ed_ctcd.getValue(), txt_ctnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "ShipperCountry":
      //Country
      udc_shCtcd.ilCommonPopUp(scwin.udc_shCtcd_callBackFun, ed_shCtcd.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "ConsigneeCountry":
      //Country
      udc_cnCtcd.ilCommonPopUp(scwin.udc_cnCtcd_callBackFun, ed_cnCtcd.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};

// Department
scwin.udc_dept_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_deptnm);
};

// Salesman
scwin.udc_locd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_locd, txt_lonm);
};

// Location
scwin.udc_arcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arcd, txt_arnm);
};

// Item
scwin.udc_itcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_itcd, txt_itnm);
};

// Signature
scwin.udc_sgcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sgcd, txt_sgnm);
  txt_sgnm.setValue(rtnList[5]);
};

// Country
scwin.udc_ctcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ctcd, txt_ctnm);
};

// Country
scwin.udc_shCtcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_shCtcd, '');
};

// Country
scwin.udc_cnCtcd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnCtcd, '');
};

//-------------------------------------------------------------------------
// 공통팝업 열기 이벤트 종료
//-------------------------------------------------------------------------

//MHNNO 가져오기
scwin.f_MhnoLoading = function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue();
  if (strClntNo.length > 0) {
    dma_comCode.set("sysCd", "ilCommonEBC");
    dma_comCode.set("queryId", "retriveAirMasterMhnoListCombo");
    dma_comCode.set("param1", strClntNo);
    dma_comCode.set("param2", scwin.hd_iogb);
    $c.sbm.execute($p, sbm_loadMasterMhno);
  } else {
    lc_mmhno.setValue("");
  }
};
scwin.f_ds_hdif = async function () {
  dma_comCode.set("sysCd", "ilCommonEBC");
  dma_comCode.set("queryId", "retriveAirHousehdifListCombo");
  dma_comCode.set("param1", "");
  dma_comCode.set("param2", "");
  await $c.sbm.execute($p, sbm_loadHdif);
};

//Notify Handling
scwin.f_NotifyHandling = function (gubun) {
  switch (gubun) {
    case "Same":
      ed_ntcd.setValue("");
      // 				scwin.txt_ntnm1 = "SAME AS CONSIGNEE";
      // 			    scwin.txt_ntnm2 = "";
      // 			    scwin.txt_ntnm3 = "";
      // 			    scwin.txt_ntnm4 = "";
      // 			    scwin.txt_ntnm5 = "";
      ta_hhn.setValue("SAME AS CONSIGNEE");
      break;
    case "Copy":
      ed_ntcd.setValue(ed_cncd.getValue());
      // 			    scwin.txt_ntnm1 = scwin.txt_cnnm1;
      // 			    scwin.txt_ntnm2 = scwin.txt_cnnm2;
      // 			    scwin.txt_ntnm3 = scwin.txt_cnnm3;
      // 			    scwin.txt_ntnm4 = scwin.txt_cnnm4;
      // 			    scwin.txt_ntnm5 = scwin.txt_cnnm5;
      ta_hhn.setValue(ta_hhc.getValue());
      break;
  }
};

// Airport Destination 설정
scwin.f_AirportDestination = async function () {
  var strClntNo = "";
  var param1 = "";
  var param2 = "";
  if (ed_dscd1.getValue() != "") {
    strClntNo = ed_dscd1.getValue();
  }
  if (ed_dscd2.getValue() != "") {
    strClntNo = ed_dscd2.getValue();
  }
  if (ed_dscd3.getValue() != "") {
    strClntNo = ed_dscd3.getValue();
  }
  if (strClntNo.length > 0) {
    param1 = strClntNo;
    param2 = "";
    dma_comCode.set("sysCd", "ilCommonEBC");
    dma_comCode.set("queryId", "retrieveAirPortCode");
    dma_comCode.set("param1", param1);
    dma_comCode.set("param2", param2);
    await $c.sbm.execute($p, sbm_loadAirportInfo);
    if (ds_AirportInfo.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["Port"]);
    } else {
      ed_dsnm1.setValue(ds_AirportInfo.getCellData(0, "col2"));
    }
  } else {
    ed_dsnm1.setValue("");
  }
};

// 항공사 2 Code 에 따른 Flight 기본 정보 설정
scwin.f_AirLineCodeSet = function () {
  if (ed_fltno.getValue() == "") {
    if (ed_ptcd1.getValue() != "") {
      ed_fltno.setValue(ed_ptcd1.getValue());
    }
    if (ed_ptcd2.getValue() != "") {
      ed_fltno.setValue(ed_ptcd2.getValue());
    }
    if (ed_ptcd3.getValue() != "") {
      ed_fltno.setValue(ed_ptcd3.getValue());
    }
  }
};

// 도착지 변경시 Location, Country  변경 해줌
scwin.f_DestinationCheck = function () {
  var strClntNo = "";
  var rtnList = new Array();
  if (ed_dscd1.getValue() != "") {
    strClntNo = ed_dscd1.getValue();
  }
  if (ed_dscd2.getValue() != "") {
    strClntNo = ed_dscd2.getValue();
  }
  if (ed_dscd3.getValue() != "") {
    strClntNo = ed_dscd3.getValue();
  }
  if (strClntNo.length > 0) {
    udc_dscd.setSelectId("retrieveAirPortCode");
    udc_dscd.ilCommonPopUp(scwin.udc_dscd_callBackFun1, strClntNo, '', 'T', '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, 'F', 'Departure Search, Port Code, Port Name', 'F');
    if (ed_ctcd.getValue() != "") {
      udc_dscd.setSelectId("retrieveCountryEngCodeInfo");
      udc_dscd.ilCommonPopUp(scwin.udc_dscd_callBackFun2, ed_ctcd.getValue(), '', 'T', '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, 'F', "Country,Code,Name", 'F');
    }
  }
};
scwin.udc_dscd_callBackFun1 = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, null, null, [null, ed_ctcd]);
  ed_ctcd.setValue(rtnList[3]);
};
scwin.udc_dscd_callBackFun2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ctcd, txt_ctnm);
};

//------------------------------------------------------------------------------------

// Desc default 문구 삽입 해줌
scwin.f_DescDefault = function () {
  txa_descnm.setValue("CONSOLIDATION SHIPMENT AS " + "\r\n" + "PER ATTACED MANIFEST");
};

// Handling Information 문구 삽입 해줌
scwin.f_HandlingInfoDefault = function (gubun) {
  switch (gubun) {
    case "F1":
      txt_hdif1.setValue("ATTACHED COMMERCIAL INVOICE & PACKING LIST");
      txt_hdif2.setValue("");
      txt_hdif3.setValue("");
      break;
    case "F2":
      txt_hdif1.setValue("ATT:ENVLP");
      txt_hdif2.setValue("");
      txt_hdif3.setValue("");
      break;
    case "F3":
      txt_hdif1.setValue("ATT:INVOICE,P/LIST.");
      txt_hdif2.setValue("\"DANGEROUS GOODS AS PER ATTACHED SHIPPER S DECLARATION\"");
      txt_hdif3.setValue("");
      break;
    case "F4":
      txt_hdif1.setValue("ATT:INVOICE,P/LIST.");
      txt_hdif2.setValue("\"DANGEROUS GOODS AS PER ATTACHED DGD - CARGO AIRCRAFT ONLY\"");
      txt_hdif3.setValue("");
      break;
    case "F5":
      txt_hdif1.setValue("ATT:HAWB & MFST");
      txt_hdif2.setValue("");
      txt_hdif3.setValue("");
      break;
  }
};

//-------------------------------------------------------------------------
//Department  가져오기 참고로 param1 은 A :항공,C:CONTAINER,B:BULK임.
//-------------------------------------------------------------------------
scwin.f_departmentInfo = async function () {
  dma_comCode.set("sysCd", "ilCommonEBC");
  dma_comCode.set("queryId", "retriveDepartmentCodeList");
  dma_comCode.set("param1", "A");
  dma_comCode.set("param2", ed_ascd.getValue());
  await $c.sbm.execute($p, sbm_loadDepartmentInfo);
  if (ds_departmentInfo.getRowCount() == 0) {
    ed_dept.setValue("");
    txt_deptnm.setValue("");
  } else {
    ed_dept.setValue(ds_departmentInfo.getCellData(ds_departmentInfo.getRowPosition(), "CODE"));
    txt_deptnm.setValue(ds_departmentInfo.getCellData(ds_departmentInfo.getRowPosition(), "NAME"));
  }
};
//-------------------------------------------------------------------------
//부서  Change
//-------------------------------------------------------------------------
scwin.f_departmentChange = async function () {
  if (ed_dept.getValue() != "") {
    var opt = {
      id: "popDeptChange",
      title: "Department Change",
      popupName: "Department Change",
      width: 460,
      height: 280,
      modal: true
    };
    var data = {
      pdept: ed_dept.getValue(),
      pdeptnm: txt_deptnm.getValue()
    };
    var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml", opt, data);
    if (rtnList != null) {
      if (rtnList[0] == "N/A" && rtnList[1] != "" && rtnList[2] != "") {
        if (rtnList[1] == "1GG") {
          await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
          return false;
        }

        // 부서 변경  프로시저 호출 시작
        var ds = dma_DeptChangeParam;
        ds.undo();
        ds_MasterBillInfo.setRowPosition(0);
        ds.set("modrNo", ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "odrNo")); // Order No
        ds.set("hodrNo", ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "hodrNo")); // Order No
        ds.set("kcomcd", scwin.hd_kcomcd); // 법인코드
        ds.set("dept", rtnList[1]); // 변경할 부서 코드
        ds.set("deptnm", rtnList[2]); // 변경할 부서  명

        scwin.spMsg = "";
        scwin.spRtn = "-1";

        //$c.gus.cfAlertMsg(MSG_CM_ERR_049,["Selling Information"]); //  @이(가) 존재하지 않습니다.

        if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
          //저장하시겠습니까?

          await $c.sbm.execute($p, sbm_DeptChange);
          if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

          scwin.spMsg = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spMsg");
          scwin.spRtn = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spRtn");
          if (scwin.spRtn == "0") {
            //변경 성공

            txt_deptnm.setValue(rtnList[2]);
            ed_dept.setValue(rtnList[1]);
            await $c.gus.cfAlertMsg($p, MSG_LO_WRN_009);
          } else {
            await $c.gus.cfAlertMsg($p, MSG_LO_WRN_008);
          }
        }
        // 부서 변경  프로시저 호출 끝
      }
    }
  }
};

//-------------------------------------------------------------------------
// B/L 발행 여부 승인
//-------------------------------------------------------------------------
scwin.f_admitIssue = async function () {
  if (ed_blno.getValue() == "" || ed_blno.getValue() == null) {
    await $c.win.alert($p, "House B/L No is mandatory.");
    await scwin.f_retrieveBlPrintAdmission();
    return false;
  }

  // 접속자 아이디가 B/L 발행 승인 가능한 권한 그룹에 속해있는지 조회 (AR01)
  dma_empNo.set("empNo", scwin.empNo);
  dma_empNo.set("admPrtCls", "A");
  let e = await $c.sbm.execute($p, sbm_RetrieveAuthGroup);
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // 해당 B/L의 발행가능여부 저장
  if (ds_authGroup.getCellData(0, "authGroup") == "N") {
    await $c.win.alert($p, "해당 B/L의 발행 승인 권한이 없습니다. \n" + "IT전략팀에 권한을 요청하십시오.");
    await scwin.f_retrieveBlPrintAdmission();
    return false;
  } else if (ds_authGroup.getCellData(0, "authGroup") == "Y") {
    await scwin.f_saveBlPrintAdmission();
  }
};
scwin.f_saveBlPrintAdmission = async function () {
  var chk = 0;
  if (chk_issueYn.checked == true) {
    chk = 1;
  } else if (chk_issueYn.checked == false) {
    chk = 0;
  }
  ds_blPrint2.removeAll();
  ds_blPrint2.insertRow(ds_blPrint2.getRowCount());
  ds_blPrint2.setCellData(0, "kcomcd", scwin.hd_kcomcd);
  ds_blPrint2.setCellData(0, "blno", ed_blno.getValue());
  ds_blPrint2.setCellData(0, "mhno", lc_mmhno.getValue());
  ds_blPrint2.setCellData(0, "seaAirCls", "A");
  ds_blPrint2.setCellData(0, "mblHblCls", "M");
  ds_blPrint2.setCellData(0, "issueYn", chk);
  ds_blPrint2.setCellData(0, "inpid", scwin.empNo);
  ds_blPrint2.setCellData(0, "updid", scwin.empNo);
  await $c.sbm.execute($p, sbm_SaveBlPrintAdmission);
};
scwin.f_retrieveBlPrintAdmission = async function () {
  ds_blPrint.removeAll();
  ds_blPrint.insertRow(ds_blPrint.getRowCount());
  dma_MasterBillSearch.set("kcomcd", scwin.hd_kcomcd);
  dma_MasterBillSearch.set("blno", ed_blno.getValue());
  dma_MasterBillSearch.set("mhno", lc_mmhno.getValue());
  await $c.sbm.execute($p, sbm_RetrieveBlPrintAdmission);
};

//-------------------------------------------------------------------------
// TextArea 엔터기준으로 컬럼에 저장하기 위한 함수
//-------------------------------------------------------------------------
scwin.f_TextareaSave = function () {
  str1 = ta_hhs.getValue();
  var hhsSplit = str1.split("\n");
  str2 = ta_hhc.getValue();
  var hhcSplit = str2.split("\n");
  str3 = ta_hhn.getValue();
  var hhnSplit = str3.split("\n");
  for (var i = 0; i < 5; i++) {
    if (hhsSplit[i] == undefined) hhsSplit[i] = "";
    if (hhcSplit[i] == undefined) hhcSplit[i] = "";
    if (hhnSplit[i] == undefined) hhnSplit[i] = "";
  }
  ds_MasterBillInfo.setRowPosition(0);
  for (var i = 1; i < 6; i++) {
    ds_MasterBillInfo.setCellData(ds_MasterBillInfo.getRowPosition(), "shnm" + i, hhsSplit[i - 1]);
    ds_MasterBillInfo.setCellData(ds_MasterBillInfo.getRowPosition(), "cnnm" + i, hhcSplit[i - 1]);
    ds_MasterBillInfo.setCellData(ds_MasterBillInfo.getRowPosition(), "ntnm" + i, hhnSplit[i - 1]);

    // 전역변수에도 같이 세팅
    scwin["txt_shnm" + i] = hhsSplit[i - 1];
    scwin["txt_cnnm" + i] = hhcSplit[i - 1];
    scwin["txt_ntnm" + i] = hhnSplit[i - 1];
  }
};
scwin.f_TextareaCall = function () {
  ta_hhs.setValue(hhsSplit[0] + "\n" + hhsSplit[1] + "\n" + hhsSplit[2] + "\n" + hhsSplit[3] + "\n" + hhsSplit[4]);
  ta_hhc.setValue(hhcSplit[0] + "\n" + hhcSplit[1] + "\n" + hhcSplit[2] + "\n" + hhcSplit[3] + "\n" + hhcSplit[4]);
  ta_hhn.setValue(hhnSplit[0] + "\n" + hhnSplit[1] + "\n" + hhnSplit[2] + "\n" + hhnSplit[3] + "\n" + hhnSplit[4]);
};
scwin.udc_cacd_onclickEvent = function (e) {
  scwin.f_PopUp('Carrier', 'F', 'F', 'F');
};
scwin.udc_cacd_onblurCodeEvent = function (e) {
  scwin.ed_cacd_onblur(e);
};
scwin.udc_cacd_onblurNameEvent = function (e) {
  scwin.f_PopUp('Carrier', 'T', 'F', 'F');
};
scwin.udc_lecd_onclickEvent = function (e) {
  scwin.f_PopUp('MasterAgt', 'F', 'F', 'F');
};
scwin.udc_lecd_onblurCodeEvent = function (e) {
  scwin.ed_lecd_onblur(e);
};
scwin.udc_lecd_onblurNameEvent = function (e) {
  scwin.f_PopUp('MasterAgt', 'T', 'F', 'F');
};
scwin.udc_dpcd_onclickEvent = function (e) {
  scwin.f_PopUp('Departure', 'F', 'F');
};
scwin.udc_dpcd_onblurCodeEvent = function (e) {
  scwin.ed_dpcd_onblur(e);
};
scwin.udc_dpcd_onblurNameEvent = function (e) {
  scwin.f_PopUp('Departure', 'T', 'F');
};
scwin.udc_ascdpic_onclickEvent = function (e) {
  scwin.f_PopUp('CustomerPic', 'F');
};
scwin.udc_ascdpic_onblurCodeEvent = function (e) {
  scwin.ed_ascdpic_onblur(e);
};
scwin.udc_ascdpic_onblurNameEvent = function (e) {
  if (ed_ascdpic.getValue() == "") {
    scwin.f_PopUp('CustomerPic', 'F');
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Department', 'F', 'F', 'F');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.ed_dept_onblur(e);
};
scwin.udc_dept_onblurNameEvent = function (e) {
  scwin.f_OpenCommonPopUp('Department', 'T', 'F', 'F');
};
scwin.udc_locd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_locd_onblurCodeEvent = function (e) {
  scwin.ed_locd_onblur(e);
};
scwin.udc_locd_onblurNameEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
};
scwin.udc_arcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Location", "T", "F", "F");
};
scwin.udc_arcd_onblurCodeEvent = function (e) {
  scwin.ed_arcd_onblur(e);
};
scwin.udc_arcd_onblurNameEvent = function (e) {
  scwin.ed_arcd_onblur(e);
};

//DataSet Header Define
scwin.sbm_InvoiceCheck_submiterror = function (e) {
  $c.gus.cfShowError($p, tr_InvoiceCheck);
};
scwin.gr_HouseBillInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_HouseLink();
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  scwin._syncHiddenFromDs();
  if (ds_MasterBillInfo.getRowCount() == 0) {
    await scwin.f_ProcessResult("None");
    scwin.f_Set("INIT");
  } else {
    totalRow.setValue(ds_HouseBillInfo.getTotalRow());
    ds_MasterBillInfo.setRowPosition(0);

    //컴포넌트 setValue
    lc_inco.setValue(ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "inco"));
    lc_lrgb.setValue(ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "lrgb"));
    await scwin.f_ProcessResult("MasterInfo");
    await scwin.f_retrieveBlPrintAdmission();
  }
};
scwin.sbm_RetrieveBookingList_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_MasterBookingInfo.getRowCount() == 0) {
    await scwin.f_ProcessResult("NotExistBookingInfo");
  } else {
    await scwin.f_ProcessResult("ExistBookingInfo");
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (scwin.actionFlag == "Save") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_MhnoLoading(); // 저장 후 MHNO 검색
    await scwin.f_Retrieve();
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004); // 성공적으로 삭제하였습니다
    scwin.f_Set("DELETE");

    //삭제 후 Setting 작업
    ds_HouseBillInfo.removeAll();
    totalRow.setValue(ds_HouseBillInfo.getTotalRow());
    scwin.f_TypeInfoSetting("Delete");
    ed_blno.setValue("");
    lc_mmhno.setValue("");
    ta_hhs.setValue("");
    ta_hhn.setValue("");
    ta_hhc.setValue("");
    ed_blno.focus();
  }
};
scwin.sbm_Save_submiterror = function (e) {
  $c.gus.cfShowError($p, tr_Save);
  scwin.f_TextareaCall();
};
scwin.sbm_SaveBlPrintAdmission_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
  await scwin.f_retrieveBlPrintAdmission();
};
scwin.sbm_RetrieveBlPrintAdmission_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_blPrint.getCellData(0, "issueYn") == "1") {
    chk_issueYn.setValue("1");
  } else {
    chk_issueYn.setValue("0");
  }
  txt_updid.setValue(ds_blPrint.getCellData(0, "updid"));
  txt_upddt.setValue(ds_blPrint.getCellData(0, "upddt"));
};
scwin.ds_CustomerBookingCheck_ondataload = async function (e) {
  var rowcnt = ds_CustomerBookingCheck.getTotalRow();
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Booking Number"]); // @가 존재 하지 않습니다.
    ed_srno.setValue("");
    ed_blno.focus();
  } else {
    //부킹 정보 뿌려 줌 zoot
    var row = ds_CustomerBookingCheck.getRowPosition() || 0;
    ed_ascd.setValue("");
    txt_asnm.setValue("");
    ed_shcd.setValue("");
    scwin._setShipperNames("", "", "", "", "");
    ed_shcd.setValue(ds_CustomerBookingCheck.getCellData(row, "shcd"));
    if (ed_shcd.getValue() != "") {
      scwin.f_PopUp("Shipper", "T", "F", "F");
    }

    //ed_cncd.setValue(ds_CustomerBookingCheck.getCellData(row, "cncd");
    //if (ed_cncd.getValue()!="") {
    //	scwin.f_PopUp("Consignee","T","F","F");
    //}

    //ed_ntcd.setValue(ds_CustomerBookingCheck.getCellData(row, "ntcd");
    //if (ed_ntcd.getValue()!="") {
    //	scwin.f_PopUp("Notify","T","F","F");
    //}

    ed_ascd.setValue(ds_CustomerBookingCheck.getCellData(row, "ascd"));
    txt_asnm.setValue("");
    if (ed_ascd.getValue() != "") {
      scwin.f_PopUp("Customer", "T", "F", "F");
    }
    ed_locd.setValue(ds_CustomerBookingCheck.getCellData(row, "sacd"));
    txt_lonm.setValue(ds_CustomerBookingCheck.getCellData(row, "sanm"));
    ed_itcd.setValue(ds_CustomerBookingCheck.getCellData(row, "itcd"));
    txt_itnm.setValue(ds_CustomerBookingCheck.getCellData(row, "itnm"));
    if (ed_ascd.getValue() != "") {
      await scwin.f_departmentInfo();
    }
  }
};
scwin.ds_MasterBillInfo_ondataload = function (e) {
  if (ds_MasterBillInfo.getRowCount() > 0) {
    ds_MasterBillInfo.setRowPosition(0);
    ta_hhs.setValue(ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "shnm1").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "shnm2").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "shnm3").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "shnm4").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "shnm5").replace(/[\r\n]+/g, "") + "\n");
    ta_hhc.setValue(ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "cnnm1").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "cnnm2").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "cnnm3").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "cnnm4").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "cnnm5").replace(/[\r\n]+/g, "") + "\n");
    ta_hhn.setValue(ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "ntnm1").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "ntnm2").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "ntnm3").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "ntnm4").replace(/[\r\n]+/g, "") + "\n" + ds_MasterBillInfo.getCellData(ds_MasterBillInfo.getRowPosition(), "ntnm5").replace(/[\r\n]+/g, "") + "\n");
  }
};
scwin.ed_shcd_onblur = function (e) {
  var strClntNo = ed_shcd.getValue();
  if (strClntNo.length > 0) {
    scwin._setShipperNames("", "", "", "", "");
    scwin.f_PopUp("Shipper", "T", "F", "F");

    // callBackFun으로 코드 이동
    // if (ed_ascd.getValue() == "") {
    // 	ed_ascd.setValue(ed_shcd.getValue());
    // 	txt_asnm.setValue(scwin.txt_shnm1);
    // }
    // if (ed_dept.getValue() == "") {
    // 	scwin.f_departmentInfo();
    // }
  } else {
    scwin._setShipperNames("", "", "", "", "");
  }
};
scwin.ed_mftwht_onblur = function (e) {
  var strClntNo = ed_mftwht.getValue();

  //if (ed_ctcd.Modified ) {
  if (strClntNo.length > 0) {
    if (ed_tcwht.getValue() == 0 || ed_tcwht.getValue() == "") {
      //ed_tcwht.setValue(strClntNo
    }
  }
  //}
};
scwin.ed_ondt_onblur = function (e) {
  var strClntNo = ed_cjdt.getValue();
  if (strClntNo.length == 0) {
    ed_cjdt.setValue(ed_ondt.getValue());
  }
};
scwin.ed_cncd_onblur = function (e) {
  var strClntNo = ed_cncd.getValue();
  if (strClntNo.length > 0) {
    scwin._setConsigneeNames("", "", "", "", "");
    scwin.f_PopUp("Consignee", "T", "F", "F");
  } else {
    scwin._setConsigneeNames("", "", "", "", "");
  }
};
scwin.ed_ntcd_onblur = function (e) {
  var strClntNo = ed_ntcd.getValue();
  if (strClntNo.length > 0) {
    scwin._setNotifyNames("", "", "", "", "");
    scwin.f_PopUp("Notify", "T", "F", "F");
  } else {
    scwin._setNotifyNames("", "", "", "", "");
  }
};
scwin.ed_cacd_onblur = function (e) {
  var strClntNo = ed_cacd.getValue();
  if (strClntNo.length > 0) {
    txt_canm.setValue("");
    scwin.f_PopUp("Carrier", "T", "F", "F");
  } else {
    txt_canm.setValue("");
  }
};
scwin.ed_lecd_onblur = function (e) {
  var strClntNo = ed_lecd.getValue();
  if (strClntNo.length > 0) {
    txt_lenm.setValue("");
    scwin.f_PopUp("MasterAgt", "T", "F", "F");
  } else {
    txt_lenm.setValue("");
  }
};
scwin.ed_dpcd_onblur = function (e) {
  var strClntNo = ed_dpcd.getValue();
  if (strClntNo.length > 0) {
    txt_dpnm.setValue("");
    scwin.f_PopUp("Departure", "T", "F", "F");
  } else {
    txt_dpnm.setValue("");
  }
};
scwin.ed_ascd_onblur = function (e) {
  var strClntNo = ed_ascd.getValue();
  if (strClntNo.length > 0) {
    txt_asnm.setValue("");
    scwin.f_PopUp("Customer", "T", "F", "F");
    if (ed_dept.getValue() == "") {
      scwin.f_departmentInfo();
    }
  } else {
    txt_asnm.setValue("");
  }
};
scwin.ed_ascdpic_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_ascdpic.getValue();
  if (strClntNo.length > 0) {
    txt_ascdpicnm.setValue("");
    scwin.f_PopUp('CustomerPic', 'T');
  } else {
    txt_ascdpicnm.setValue("");
  }
};
scwin.ed_dept_onblur = function (e) {
  var strClntNo = ed_dept.getValue();
  if (strClntNo.length > 0) {
    txt_deptnm.setValue("");
    scwin.f_OpenCommonPopUp("Department", "T", "F", "F");
  } else {
    txt_deptnm.setValue("");
  }
};
scwin.ed_locd_onblur = function (e) {
  var strClntNo = ed_locd.getValue();
  if (strClntNo.length > 0) {
    txt_lonm.setValue("");
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  } else {
    txt_lonm.setValue("");
  }
};
scwin.ed_arcd_onblur = function (e) {
  var strClntNo = ed_arcd.getValue();
  if (strClntNo.length > 0) {
    txt_arnm.setValue("");
    scwin.f_OpenCommonPopUp("Location", "T", "F", "F");
  } else {
    txt_arnm.setValue("");
  }
};
scwin.ed_itcd_onblur = function (e) {
  var strClntNo = ed_itcd.getValue();
  if (strClntNo.length > 0) {
    txt_itnm.setValue("");
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  } else {
    txt_itnm.setValue("");
  }
};
scwin.ed_sgcd_onblur = function (e) {
  var strClntNo = ed_sgcd.getValue();
  if (strClntNo.length > 0) {
    txt_sgnm.setValue("");
    scwin.f_OpenCommonPopUp("Signature", "T", "F", "F");
  } else {
    txt_sgnm.setValue("");
  }
};
scwin.ed_ptcd1_onfocus = function (e) {
  var strClntNo = ed_ptcd1.getValue();
  if (strClntNo.length == 0) {
    ed_ptcd1.setValue(ed_fltno.getValue().substring(0, 2));
  }
};
scwin.ed_ctcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_ctcd.getValue());
  if (strClntNo.length > 0) {
    txt_ctnm.setValue("");
    scwin.f_OpenCommonPopUp("Country", "T", "F", "F");
  } else {
    txt_ctnm.setValue("");
  }
};
scwin.ed_shCtcd_onblur = function (e) {
  var strClntNo = ed_shCtcd.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ShipperCountry", "T", "F", "F");
  } else {
    //ed_shCtnm.setValue("");
  }
};
scwin.ed_cnCtcd_onblur = function (e) {
  var strClntNo = ed_cnCtcd.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ConsigneeCountry", "T", "F", "F");
  } else {
    ed_cnCtnm.setValue("");
  }
};
scwin.ed_blno_onblur = function (e) {
  $c.gus.cfEnableObjects($p, [ed_srno]);

  //if (ed_blno.Modified ) {
  scwin.f_MhnoLoading();
  //}

  if (scwin.actionFlag == "Create") {
    if (ed_blno.getValue() == "") {
      //$c.gus.cfAlertMsg(MSG_CM_ERR_002,["Master Number"]);  // 필수 입력 항목 입니다.
      //return false;
      return true;
    }
    //생성시 입력한 Bill 번호를 Booking 정보에서 유무 확인
    scwin.f_ProcessBinding(dma_MasterBillSearch, "MasterBillSearch");
    $c.sbm.execute($p, sbm_RetrieveBookingList);
  }
  if (scwin.actionFlag == "Copy") {
    if (ed_blno.getValue() == "") {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master Number"]); // 필수 입력 항목 입니다.
      return false;
    }
    //생성시 입력한 Bill 번호를 Booking 정보에서 유무 확인
    scwin.f_ProcessBinding(dma_MasterBillSearch, "MasterBillSearch");
    $c.sbm.execute($p, sbm_RetrieveBookingList);
    if (scwin.processFlag == "ExistBookingInfo") {
      scwin.f_BookingListBinding("Copy", ds_MasterBookingInfo, ds_MasterBillInfo);
    }
  }
};
scwin.ed_srno_onblur = async function (e) {
  if (scwin.hd_shipgb == "D") {
    if (ed_srno.getValue() == "") {
      //$c.gus.cfAlertMsg(MSG_CM_ERR_002,["Booking Number"]);  // 필수 입력 항목 입니다.
      return;
    }
    scwin.f_ProcessBinding(dma_MasterBillSearch, "CustomerBookingCheck");
    await $c.sbm.execute($p, sbm_RetrieveCustomerBookingCheck);
  }
};
scwin.ed_dscd1_onblur = async function (e) {
  await scwin.f_AirportDestination();
  scwin.f_DestinationCheck();
};
scwin.ed_dscd2_onblur = async function (e) {
  await scwin.f_AirportDestination();
  scwin.f_DestinationCheck();
};
scwin.ed_dscd3_onblur = async function (e) {
  await scwin.f_AirportDestination();
  scwin.f_DestinationCheck();
};
scwin.ed_ptcd3_onblur = function (e) {
  scwin.f_AirLineCodeSet();
};
scwin.rd_frpc_onchange = function (e) {
  if (rd_frpc.getValue() == "PP") {
    ed_acif1.setValue("FREIGHT PREPAID");
  }
  if (rd_frpc.getValue() == "CC") {
    ed_acif1.setValue("FREIGHT COLLECT");
  }
};
scwin.ta_hhs_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhs.getValue().toUpperCase();
  ta_hhs.setValue("");
  ta_hhs.setValue(upperTxt);
};
scwin.ta_hhc_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhc.getValue().toUpperCase();
  ta_hhc.setValue("");
  ta_hhc.setValue(upperTxt);
};
scwin.ta_hhn_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhn.getValue().toUpperCase();
  ta_hhn.setValue("");
  ta_hhn.setValue(upperTxt);
};
scwin.gr_HouseBillInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_HouseLink();
};

// Button Click Handlers
//-------------------------------------------------------------------------
scwin.btn_same_onclick = function (e) {
  scwin.f_NotifyHandling('Same');
};
scwin.btn_copy_onclick = function (e) {
  scwin.f_NotifyHandling('Copy');
};
scwin.img_shcd_onclick = function (e) {
  scwin.f_PopUp('Shipper', 'F', 'F', 'F');
};
scwin.img_cncd_onclick = function (e) {
  scwin.f_PopUp('Consignee', 'F', 'F', 'F');
};
scwin.img_ntcd_onclick = function (e) {
  scwin.f_PopUp('Notify', 'F', 'F', 'F');
};
scwin.img_cucd_onclick = function (e) {
  scwin.f_PopUp('Currency', 'F', 'F', 'F');
};
scwin.img_itcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
scwin.img_sgcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('Signature', 'F', 'F', 'F');
};
scwin.img_shCtcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ShipperCountry', 'F', 'F', 'F');
};
scwin.img_cnCtcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ConsigneeCountry', 'F', 'F', 'F');
};
scwin.img_ascd_onclick = function (e) {
  scwin.f_PopUp('Customer', 'F', 'F', 'F');
};
scwin.pu_Find_onclick = function (e) {
  scwin.f_openPgm("Find");
};
scwin.pu_Hawb_onclick = function (e) {
  scwin.f_openPgm("Hawb");
};
scwin.pu_Freight_onclick = function (e) {
  scwin.f_openPgm("Freight");
};
scwin.pu_AmsEdi_onclick = function (e) {
  scwin.f_openPgm("AMS");
};
scwin.pu_PlSheet_onclick = function (e) {
  scwin.f_openPgm("PL");
};
scwin.pu_Manifest_onclick = function (e) {
  scwin.f_openPgm("MNF");
};

// 26.03.25 버튼 사용 X
scwin.pu_Dimens_onclick = function (e) {
  scwin.f_openPgm("DIM");
};
scwin.pu_Print_onclick = function (e) {
  scwin.f_openPgm("Print");
};
scwin.btn_Copy_onclick = function (e) {
  scwin.f_Copy();
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.bookingNo_onclick = function () {
  scwin.f_PopUp('CustomerBookingInfo', 'F', 'T', 'F');
};
scwin.txt_asnm_onviewchange = function (info) {
  scwin.f_PopUp('Customer', 'T', 'F', 'F');
};
scwin.txt_sgnm_onviewchange = function (info) {
  scwin.f_OpenCommonPopUp('Signature', 'T', 'F', 'F');
};
scwin.udc_ctcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Country', 'F', 'F', 'F');
};
scwin.txt_ctnm_onviewchange = function (info) {
  scwin.f_OpenCommonPopUp('Country', 'T', 'F', 'F');
};
scwin.txt_itnm_onviewchange = function (info) {
  scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
};
scwin.defaultDisplay_onclick = function (e) {
  scwin.f_DescDefault();
};

// --------------------------------------------------------------------------
scwin.lc_inco_onviewchange = function (info) {
  if (lc_inco.getValue() != "") {
    ds_MasterBillInfo.setCellData(0, "inco", lc_inco.getValue());
  }
};
scwin.lc_lrgb_onviewchange = function (info) {
  if (lc_lrgb.getValue() != "") {
    ds_MasterBillInfo.setCellData(0, "lrgb", lc_lrgb.getValue());
  }
};
scwin.ed_masterExNo_oneditkeyup = function (info, e) {
  var uppperAlpha = info.newValue.toUpperCase();
  ed_masterExNo.setValue(uppperAlpha);
};
scwin.sbm_RetrieveCustomerBookingCheck_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail
  await scwin.ds_CustomerBookingCheck_ondataload();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:200px;','ev:onblur':'scwin.ed_blno_onblur',allowChar:'A-Z0-9',editFormat:'ZZZ-ZZZZZZZZZZZZZZZZZ',editPlaceholderChar:'_'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mmhno',search:'start',style:'width:150px;',submenuSize:'auto',itemSet:'data:ds_mmhno',labelColumn:'name',valueColumn:'code',searchColumn:'code',allOption:'',chooseOption:'',ref:'',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:anchor',A:{id:'bookingNo',outerDiv:'false',style:'','ev:onclick':'scwin.bookingNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Booking No'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srno',ref:'data:ds_MasterBillInfo.srno',placeholder:'',style:'width:150px;','ev:onblur':'scwin.ed_srno_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Sr',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'Booking\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Booking'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_udc_ilcomCode_onblurNameEvent',hideName:'true',id:'udc_bookingNo',nameId:'',popupID:'',selectID:'retrieveAirOutCustomerInfo',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tab_Main',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'Main',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center1',label:'Masks/Description',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shipper',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_shcd',nameId:'txt_shnm',popupID:'',selectID:'retrieveEngClntInfo',style:'',refDataCollection:'ds_MasterBillInfo',code:'shcd',id:'udc_shcd',btnId:'img_shcd',objTypeName:'data',objTypeCode:'data',hideName:'true','ev:onblurCodeEvent':'scwin.ed_shcd_onblur','ev:onclickEvent':'scwin.img_shcd_onclick',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Country',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_shCtcd',hideName:'true',nameId:'',popupID:'',selectID:'retrieveCountryEngCodeInfo',style:'',id:'udc_shCtcd',btnId:'img_shCtcd','ev:onblurCodeEvent':'scwin.ed_shCtcd_onblur','ev:onclickEvent':'scwin.img_shCtcd_onclick',refDataCollection:'ds_MasterBillInfo',code:'shCtcd',objTypeName:'data',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Country:no',validTitle:'Country'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ta_hhs',ref:'',style:'height:117px;','ev:onblur':'scwin.ta_hhs_onblur',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Consignee',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cncd',hideName:'true',nameId:'txt_cnnm',popupID:'',selectID:'retrieveEngClntInfo',style:'',id:'udc_cncd',btnId:'img_cncd','ev:onclickEvent':'scwin.img_cncd_onclick','ev:onblurCodeEvent':'scwin.ed_cncd_onblur',objTypeName:'data',objTypeCode:'data',code:'cncd',refDataCollection:'ds_MasterBillInfo',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Country',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cnCtcd',hideName:'true',nameId:'',popupID:'',selectID:'retrieveCountryEngCodeInfo',style:'',id:'udc_cnCtcd','ev:onblurCodeEvent':'scwin.ed_cnCtcd_onblur',code:'cnCtcd',refDataCollection:'ds_MasterBillInfo',objTypeName:'data',btnId:'img_cnCtcd',objTypeCode:'data','ev:onclickEvent':'scwin.img_cnCtcd_onclick',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',maxlengthCode:'5',UpperFlagCode:'1',validExpCode:'Country:no',validTitle:'Country'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ta_hhc',ref:'',style:'height:117px;','ev:onblur':'scwin.ta_hhc_onblur',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ntcd',hideName:'true',nameId:'txt_ntnm',popupID:'',selectID:'retrieveEngClntInfo',style:'',objTypeName:'data',objTypeCode:'data',refDataCollection:'ds_MasterBillInfo',id:'udc_ntcd','ev:onblurCodeEvent':'scwin.ed_ntcd_onblur',code:'ntcd',btnId:'img_ntcd','ev:onclickEvent':'scwin.img_ntcd_onclick',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_same',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_same_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Same'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ta_hhn',ref:'',style:'height:117px;','ev:onblur':'scwin.ta_hhn_onblur',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Carrier',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cacd',nameId:'txt_canm',popupID:'',selectID:'retrieveEngCarrInfo',style:'',validTitle:'Carrier',id:'udc_cacd',refDataCollection:'ds_MasterBillInfo',code:'cacd',name:'canm','ev:onclickEvent':'scwin.udc_cacd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cacd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_cacd_onblurNameEvent',objType:'data',btnId:'img_cacd',objTypeCode:'data',objTypeName:'data',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6',mandatoryName:'true',validExpName:'Carrier Name'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master Agent',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_lecd',selectID:'retrieveEngClntInfo',popupID:'',validTitle:'',nameId:'txt_lenm',style:'',id:'udc_lecd',refDataCollection:'ds_MasterBillInfo',code:'lecd',name:'lenm','ev:onclickEvent':'scwin.udc_lecd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lecd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_lecd_onblurNameEvent',objType:'data',btnId:'img_lecd',objTypeName:'data',objTypeCode:'data'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'lc_lrgb',ref:'',class:'',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'None','ev:onviewchange':'scwin.lc_lrgb_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Lend'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Rent'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Departure',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dpcd',nameId:'txt_dpnm',popupID:'',selectID:'retrieveAirPortCode',style:'',validTitle:'',id:'udc_dpcd',refDataCollection:'ds_MasterBillInfo',code:'dpcd',name:'dpnm','ev:onclickEvent':'scwin.udc_dpcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dpcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dpcd_onblurNameEvent',objType:'data',btnId:'img_dpcd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',mandatoryName:'true',validExpName:'Carrier Name:no',validExpCode:'Carrier:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'VIA/TO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dscd1',ref:'data:ds_MasterBillInfo.dscd1',placeholder:'',style:'width:70px;','ev:onblur':'scwin.ed_dscd1_onblur',objType:'data',maxlength:'3',allowChar:'A-Z0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dscd2',ref:'data:ds_MasterBillInfo.dscd2',placeholder:'',style:'width:70px;','ev:onblur':'scwin.ed_dscd2_onblur',objType:'data',maxlength:'3',allowChar:'A-Z0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dscd3',ref:'data:ds_MasterBillInfo.dscd3',placeholder:'',style:'width:70px;','ev:onblur':'scwin.ed_dscd3_onblur',objType:'data',maxlength:'3',allowChar:'A-Z0-9'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_udc_ilcomCode_onblurNameEvent',hideName:'true',nameId:'',popupID:'',selectID:'',style:'display:none',id:'udc_dscd'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'By(Carrier)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd1',ref:'data:ds_MasterBillInfo.ptcd1',placeholder:'',style:'width:70px;',objType:'data',maxlength:'2',allowChar:'A-Z0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd2',ref:'data:ds_MasterBillInfo.ptcd2',placeholder:'',style:'width:70px;',objType:'data',maxlength:'2',allowChar:'A-Z0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd3',ref:'data:ds_MasterBillInfo.ptcd3',placeholder:'',style:'width:70px;','ev:onblur':'scwin.ed_ptcd3_onblur',objType:'data',maxlength:'2',allowChar:'A-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Onboard Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Arrival Date',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_fltno',ref:'data:ds_MasterBillInfo.fltno',placeholder:'',style:'',objType:'data',allowChar:'A-Z0-9',maxlength:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ondt',objType:'data',pickerType:'dynamic',ref:'data:ds_MasterBillInfo.ondt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_avdt',objType:'data',pickerType:'dynamic',ref:'data:ds_MasterBillInfo.avdt',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Airport of Destination',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dsnm1',ref:'data:ds_MasterBillInfo.dsnm1',placeholder:'',style:'',objType:'data',maxlength:'25'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dsnm2',ref:'data:ds_MasterBillInfo.dsnm2',placeholder:'',style:'',objType:'data',maxlength:'25'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WT/VAL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Other',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cucd',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_MasterBillInfo',selectID:'retriveCurrencyCodeInfo',style:'',id:'udc_cucd',btnId:'img_cucd',code:'cucd','ev:onclickEvent':'scwin.img_cucd_onclick',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_frpc',ref:'data:ds_MasterBillInfo.frpc',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CC'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 tac'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_otpc1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_otpc2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Account Information',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_acif1',ref:'data:ds_MasterBillInfo.acif1',placeholder:'',style:'',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_acif2',ref:'data:ds_MasterBillInfo.acif2',placeholder:'',style:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'D.V Carriage',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'D.V Customs',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Insurance',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dvcr',ref:'data:ds_MasterBillInfo.dvcr',placeholder:'',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dvct',ref:'data:ds_MasterBillInfo.dvct',placeholder:'',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_insu',ref:'data:ds_MasterBillInfo.insu',placeholder:'',style:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C/I Number',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'L/C Number',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_cino',ref:'data:ds_MasterBillInfo.cino',placeholder:'',style:'',objType:'data',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_lcno',ref:'data:ds_MasterBillInfo.lcno',placeholder:'',style:'',objType:'data',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_inco',ref:'',search:'start',style:'',submenuSize:'auto',objType:'data',allOption:'',chooseOptionLabel:'',displayMode:'value',disableEdit:'true',chooseOption:'',validExp:'Incoterms:no',emptyItem:'true','ev:onviewchange':'scwin.lc_inco_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PKG',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mftpkg',ref:'data:ds_MasterBillInfo.mftpkg',placeholder:'',style:'',objType:'data',dataType:'number',maxlength:'10',displayFormat:'#,###',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'G/Weight',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mftwht',ref:'data:ds_MasterBillInfo.mftwht',placeholder:'',style:'',objType:'data',dataType:'float',displayFormat:'#,###.###',maxlength:'17.3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C/Weight',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_tcwht',ref:'data:ds_MasterBillInfo.tcwht',placeholder:'',style:'',objType:'data',dataType:'float',displayFormat:'#,###.###',maxlength:'17.3'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Salesman',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_locd',nameId:'txt_lonm',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'Salesman',id:'udc_locd',refDataCollection:'ds_MasterBillInfo',code:'locd',name:'lonm','ev:onclickEvent':'scwin.udc_locd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_locd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_locd_onblurNameEvent',objType:'data',btnId:'img_locd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'req',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_departmentChange',style:'',type:'button','ev:onclick':'scwin.f_departmentChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Department'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'txt_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'Department',id:'udc_dept',refDataCollection:'ds_MasterBillInfo',code:'dept',name:'deptnm','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dept_onblurNameEvent',objType:'data',btnId:'img_dept',objTypeName:'data',objTypeCode:'data',mandatoryName:'true',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display: none;'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Location',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_arcd',nameId:'txt_arnm',popupID:'',selectID:'retrieveDoorArea',style:'',validTitle:'',id:'udc_arcd',refDataCollection:'ds_MasterBillInfo',code:'arcd',name:'arnm','ev:onclickEvent':'scwin.udc_arcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_arcd_onblurNameEvent',btnId:'img_arcd',objTypeName:'data',objTypeCode:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Master B/L Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mblgb',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shipment Type ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_shipgb',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Customer ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ascd',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_MasterBillInfo',selectID:'retrieveEngClntInfo',style:'',id:'udc_ascd',btnId:'img_ascd',code:'ascd','ev:onblurCodeEvent':'scwin.ed_ascd_onblur','ev:onclickEvent':'scwin.img_ascd_onclick',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_asnm',ref:'data:ds_MasterBillInfo.asnm',placeholder:'',style:'',objType:'data','ev:onviewchange':'scwin.txt_asnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ascdpic',nameId:'txt_ascdpicnm',popupID:'',selectID:'retrieveClntPicInfo',style:'',validTitle:'',id:'udc_ascdpic',refDataCollection:'ds_MasterBillInfo',code:'ascdPic',name:'ascdPicnm','ev:onclickEvent':'scwin.udc_ascdpic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ascdpic_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_ascdpic_onblurNameEvent',objType:'data',btnId:'img_ascdpic',objTypeName:'data',objTypeCode:'data',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Signature',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_sgcd',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_MasterBillInfo',selectID:'retrieveEmpInfo',style:'',btnId:'img_sgcd',id:'udc_sgcd',code:'sgcd','ev:onblurCodeEvent':'scwin.ed_sgcd_onblur','ev:onclickEvent':'scwin.img_sgcd_onclick',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_sgnm',ref:'data:ds_MasterBillInfo.sgnm',placeholder:'',style:'',objType:'data','ev:onviewchange':'scwin.txt_sgnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Country',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ctcd',hideName:'true',nameId:'txt_ctnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_MasterBillInfo',selectID:'retrieveCountryEngCodeInfo',style:'','ev:onblurCodeEvent':'scwin.ed_ctcd_onblur',id:'udc_ctcd',btnId:'img_ctcd',code:'ctcd','ev:onclickEvent':'scwin.udc_ctcd_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_ctnm',ref:'data:ds_MasterBillInfo.ctnm',placeholder:'',style:'',objType:'data','ev:onviewchange':'scwin.txt_ctnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_itcd',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_MasterBillInfo',selectID:'retrieveCommGoodsInfo',style:'',id:'udc_itcd',btnId:'img_itcd',code:'itcd','ev:onblurCodeEvent':'scwin.ed_itcd_onblur','ev:onclickEvent':'scwin.img_itcd_onclick',UpperFlagCode:'1',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req',style:'width: 99%;'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_itnm',ref:'data:ds_MasterBillInfo.itnm',placeholder:'',class:'',objType:'data','ev:onviewchange':'scwin.txt_itnm_onviewchange',mandatory:'true',title:'Item'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'EDI Item',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_ediItem',ref:'data:ds_MasterBillInfo.ediItem',placeholder:'',style:'width:150px;',objType:'data',mandatory:'true',title:'Item Name'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Result Date ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_cjdt',ref:'data:ds_MasterBillInfo.cjdt',pickerType:'dynamic',style:'',objType:'data',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EPN<br/>(Master Single)',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_masterExNo',ref:'data:ds_MasterBillInfo.masterExNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.ed_masterExNo_oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group14',style:'height: 125px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_HouseBillInfo',id:'gr_HouseBillInfo',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_HouseBillInfo_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'House B/L',width:'120',name:'column7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Shipper',width:'120',name:'column19'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',textAlign:'left',width:'120',name:'Master B/L No',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shnm1',inputType:'text',textAlign:'left',width:'120',name:'Shipper Name',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8',id:'',style:'width: 60%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Shipping Mark',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_mark',ref:'data:ds_MasterBillInfo.mark',style:'height:150px;',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Nature of Q\'ty( Incl .Dims )',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'defaultDisplay',class:'right','ev:onclick':'scwin.defaultDisplay_onclick'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'txt_DescDefault',class:'bold','ev:onclick':'scwin.f_DescDefault'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Default Display'}]}]}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_descnm',ref:'data:ds_MasterBillInfo.descnm',style:'height:150px;',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Handling Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hdif1',ref:'data:ds_MasterBillInfo.hdif1',search:'start',style:'',submenuSize:'auto',itemSet:'data:ds_hdif',labelColumn:'name',valueColumn:'code',searchColumn:'code',allOption:'',chooseOption:'',visibleRowNum:'11',displayMode:'label',disableEdit:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hdif'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hdif2',ref:'data:ds_MasterBillInfo.hdif2',placeholder:'',style:'',objType:'data',maxlength:'90'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hdif3',ref:'data:ds_MasterBillInfo.hdif3',placeholder:'',style:'',objType:'data',maxByteLength:'90'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Account Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',ref:'data:ds_MasterBillInfo.odrNo',placeholder:'',style:'width:150px;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_updid',ref:'data:ds_MasterBillInfo.updid',placeholder:'',style:'width:150px;',objType:'data',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Billing Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arInv',ref:'data:ds_MasterBillInfo.invBillingDate',pickerType:'dynamic',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner Billing Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arHp',ref:'data:ds_MasterBillInfo.ptnBillingDate',pickerType:'dynamic',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tax Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arTax',ref:'data:ds_MasterBillInfo.txtDate',pickerType:'dynamic',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tax Amount',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_arTaxAmount',ref:'data:ds_MasterBillInfo.txtAmount',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chk_issueYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행승인'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_issue',type:'button',class:'btn sm white','ev:onclick':'scwin.f_admitIssue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_updid',placeholder:'',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_upddt',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Find',style:'',type:'button','ev:onclick':'scwin.pu_Find_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Hawb',style:'',type:'button','ev:onclick':'scwin.pu_Hawb_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Freight',style:'',type:'button','ev:onclick':'scwin.pu_Freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_AmsEdi',style:'',type:'button','ev:onclick':'scwin.pu_AmsEdi_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AMS'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_PlSheet',style:'',type:'button','ev:onclick':'scwin.pu_PlSheet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B.Sheet'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Manifest',style:'',type:'button','ev:onclick':'scwin.pu_Manifest_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M.N.F'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Dimens',style:'display: none;',type:'button','ev:onclick':'scwin.pu_Dimens_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DIMEN\'S'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Print',style:'',type:'button','ev:onclick':'scwin.pu_Print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Copy_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',userAuth:'R',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})