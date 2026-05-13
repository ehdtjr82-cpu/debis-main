/*amd /ui/il/seaout/sobl/se_105_01_05b_old.xml 568240 b783f50c088df61009cf95a6103a8af351f43b05982b6b806fb270cc9c8a1730 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieve_freight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'order no(13)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'tabIndex',name:'tab Index',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno2',name:'HOUSE NO (CND) (16) 하단 개별검색에 사용',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'파라메터5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'파라메터6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'파라메터7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'파라메터8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'파라메터9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'파라메터10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'파라메터11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'파라메터12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'파라메터13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'파라메터14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_houseblList','ev:ondataload':'scwin.ds_houseblList_ondataload','ev:oncelldatachange':'scwin.ds_houseblList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'BOOKING  NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'BOOKING SEQ (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhscd',name:'SHIPPER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'CLOSED (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'SHIPPER1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhs2',name:'SHIPPER2 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhs3',name:'SHIPPER3 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhs4',name:'SHIPPER4 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhs5',name:'SHIPPER5 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhccd',name:'CONSIGNEE (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'CONSIGNEE1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc2',name:'CONSIGNEE2 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc3',name:'CONSIGNEE3 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc4',name:'CONSIGNEE4 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc5',name:'CONSIGNEE5 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhncd',name:'NOTIFY (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhn1',name:'NOTIFY1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhn2',name:'NOTIFY2 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhn3',name:'NOTIFY3 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhn4',name:'NOTIFY4 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhn5',name:'NOTIFY5 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'VESSEL (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'VESSEL NAME (25)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'VOYAGE (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'LOADING (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'LOADING NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'DISCHARGE (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'DISCHARGE NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'FACKAGE (N10)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'UNIT (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhunit',name:'UNIT NAME (10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT (N13,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE (N11,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhondt',name:'ONBOARD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'ISSUED DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'RESULT (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'DANGEROUS (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'PP/CC (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'CARGO TYPE (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhisunm',name:'ISSUED AT (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpaynm',name:'PAYABLE AT (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'FREIGHT TERM (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhstype',name:'SERVICE TERM (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'INCOTERMS (10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'CONTAINER QUANTITY1 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'CONTAINER QUANTITY2 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'CONTAINER QUANTITY3 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'CONTAINER QUANTITY4 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'PARTNER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'PARTNER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'PARTNER PIC (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'PARTNER PIC NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'CUSTOMER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'CUSTOMER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'CUSTOMER PIC (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'CUSTOMER PIC NAME (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhsales',name:'SALESMAN (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'SALESMAN NAME (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'LINER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'LINER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'LINER PIC (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'LINER PIC NAME (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'DEPT (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'DEPT NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hharea',name:'AREA (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'AREA NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'TRIANGLE (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'NOMI (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'OLD B/L (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'CO-LOAD (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhsubpkg',name:'NUMBER OF CONTAINERS OR PACKAGES1 (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhunit2',name:'NUMBER OF CONTAINERS OR PACKAGES2 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhunit3',name:'NUMBER OF CONTAINERS OR PACKAGES2 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mark',name:'Mark and Numbers  Container No',dataType:'string'}},{T:1,N:'w2:column',A:{id:'descnm',name:'Kind of Packages,desciption of goods',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhp1',name:'SAID TO CONTAIN (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhp2',name:'SHIPPERS LOAD AND COUNT (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhp3',name:'CONTAINER PRINT (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhp4',name:'TERM PRINT (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhp5',name:'RECIPT DATE PRINT (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhp6',name:'ONBOARD DATE PRINT (1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhsay',name:'SAY (70)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'ITEM (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'ITEM NAME1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'ITEM NAME2 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'REMARK1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'REMARK2 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'REMARK3 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'REMARK4 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'REMARK5 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'SHIPMENT TYPE (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'PRE-VESSEL/VOYAGE (25)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'PLACE OF RECEIPT (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'PLACE OF RECEIPT NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'PLACE OF DELIVERY (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'PLACE OF DELIVERY NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'FINAL DESTINATION (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'FINAL DESTINATION NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpono',name:'PURCHASE ORDER NO (30)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'INVOICE VALUE (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'L/C NO (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mwarecd',name:'mwarecd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mwarenm',name:'mwarenm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mwareEngCd',name:'mwareEngCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ucrNo',name:'ucrNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'shipMgntNo',name:'shipMgntNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pathCd',name:'pathCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'printChk',name:'printChk',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pic',name:'pic',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hscode',name:'hscode',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurPar',name:'CURRENCY (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexgbPar',name:'CURRENCY NAME (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurdtPar',name:'EX DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexratePar',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhuexratePar',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcurBuy',name:'CURRENCY (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexgbBuy',name:'CURRENCY NAME (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurdtBuy',name:'EX DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexrateBuy',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhuexrateBuy',name:'EX RATE (N11.2)',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocContList','ev:onrowpositionchange':'scwin.ds_ocContList_onrowposchanged'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mchblno',name:'BL NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mccntno',name:'CONTAINER  (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mctype',name:'TYPE  (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'SEAL NO1 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'SEAL NO2 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'PKG (N10)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'UNIT (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'WEIGHT (N12,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'MEASURE (N11,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'part',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocElList','ev:onrowpositionchange':'scwin.ds_ocElList_onrowposchanged'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'BL NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'elno',name:'수출신고번호 (19)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE (N14)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unit',name:'UNIT (7)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'wgt',name:'WEIGHT (N14,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgb',name:'포장기호 (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mpkg',name:'PACKAGE (N14)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mut',name:'UNIT (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pgb',name:'분할 (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pseq',name:'분할선적차수 (N14)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_bookingNo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'dma_bookingContainer',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_bkseq'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno','ev:ondataload':'scwin.ds_hmhno_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno2','ev:ondataload':'scwin.ds_hmhno_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipTax'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE B/L',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'MHNO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'ORDER NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'CUSTOMER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'intendDt',name:'BILLING DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'TAX DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'SLIP NO',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocProfitList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',name:'usd',dataType:'number'}},{T:1,N:'w2:column',A:{id:'buying',name:'krw',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profit',name:'krw',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_carrierBkNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'carrierBkNo',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_clntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhactcust',name:'hhactcust',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_mgntYn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntYn',name:'mgntYn',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_tmp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mccntno',name:'CONTAINER  (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mctype',name:'TYPE  (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'SEAL NO1 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'SEAL NO2 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'PKG (N10)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'UNIT (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'WEIGHT (N12,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'MEASURE (N11,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'part',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieve_freight',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_houseblList_freight','ev:ondataload':'scwin.ds_houseblList_freight_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'LOADING (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'LOADING NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'DISCHARGE (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'DISCHARGE NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'PARTNER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'PARTNER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'CUSTOMER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'CUSTOMER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'LINER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'LINER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcur',name:'CURRENCY (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexgb',name:'CURRENCY NAME (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurdt',name:'EX DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexrate',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhuexrate',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'CONTAINER QUANTITY1 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'CONTAINER QUANTITY2 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'CONTAINER QUANTITY3 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'CONTAINER QUANTITY4 (N3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT (N12.3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE (N11.3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'ITEM (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'RESULT (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'PP/CC (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'DANGEROUS (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'order no(13)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurPar',name:'CURRENCY (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexgbPar',name:'CURRENCY NAME (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurdtPar',name:'EX DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexratePar',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhuexratePar',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcurBuy',name:'CURRENCY (3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexgbBuy',name:'CURRENCY NAME (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcurdtBuy',name:'EX DATE (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhexrateBuy',name:'EX RATE (N11.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhuexrateBuy',name:'EX RATE (N11.2)',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_selling_freight','ev:oncelldatachange':'scwin.ds_selling_freight_oncelldatachange','ev:ondataload':'scwin.ds_selling_freight_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운(S)/항공(A) 구분',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blNo',name:'비엘번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문 운임명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임UNIT',dataType:'string'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분 (P/C)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'CHARGEABLE WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'string'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'소급매출금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'Amount (W)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'Result Date',dataType:'string'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'string'}},{T:1,N:'w2:column',A:{id:'jobType',name:'type',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'//결과코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'//결과메시지',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_partner_freight','ev:oncelldatachange':'scwin.ds_partner_freight_oncelldatachange','ev:ondataload':'scwin.ds_partner_freight_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운(S)/항공(A) 구분',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blNo',name:'비엘번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문 운임명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임UNIT',dataType:'string'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분 (P/C)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'CHARGEABLE WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'string'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'소급매출금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'Amount (W)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'Result Date',dataType:'string'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'string'}},{T:1,N:'w2:column',A:{id:'jobType',name:'type',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'//결과코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'//결과메시지',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'화물운송실적대상코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'dcsnClsCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'regName',name:'등록 담당자 이름',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_buying_freight','ev:oncelldatachange':'scwin.ds_buying_freight_oncelldatachange','ev:ondataload':'scwin.ds_buying_freight_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번(5)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운(S)/항공(A) 구분(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명(70)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blNo',name:'비엘번호(16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호(16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문운임명(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드(3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임UNIT(2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분 (P/C)(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드(3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량(15)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT(15.1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'CHARGEABLE WEIGHT(15.3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호(18)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'매출부서코드(내부거래시)(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'매출부서명(내부거래시)(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pchsTyp',name:'운임 TYPE(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액외화(15.2)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액(13)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세(13)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'매입거래명세서번호(12)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'jobType',name:'type',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'//결과코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'//결과메시지',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'화물운송실적대상코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'dcsnClsCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'regName',name:'등록 담당자 이름',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieveTariff_freight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fgubn',name:'SELLING : 1 , BUYING : 2 , PARTNER : 3',dataType:'string'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'KCOMCD',dataType:'string'}},{T:1,N:'w2:key',A:{id:'apdt',name:'ETD, ETA',dataType:'string'}},{T:1,N:'w2:key',A:{id:'customer',name:'CUSTSOMER',dataType:'string'}},{T:1,N:'w2:key',A:{id:'partner',name:'PARTNER',dataType:'string'}},{T:1,N:'w2:key',A:{id:'liner',name:'LINER',dataType:'string'}},{T:1,N:'w2:key',A:{id:'loading',name:'LOADING',dataType:'string'}},{T:1,N:'w2:key',A:{id:'discharge',name:'DISCHARGE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'item',name:'ITEM',dataType:'string'}},{T:1,N:'w2:key',A:{id:'container1',name:'CONTAINER TYPE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'container2',name:'CONTAINER TYPE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'container3',name:'CONTAINER TYPE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'container4',name:'CONTAINER TYPE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'cbgubn',name:'CONTAINER OR BULK GUBN (C:B)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'incoterm',name:'INCOTERM (FIO, FIBT ,BTFO ,BTBT )',dataType:'string'}},{T:1,N:'w2:key',A:{id:'userid',name:'USER ID',dataType:'string'}},{T:1,N:'w2:key',A:{id:'dangerous',name:'DANGEROUS',dataType:'string'}},{T:1,N:'w2:key',A:{id:'commcustomer',name:'공통CUSTSOMER',dataType:'string'}},{T:1,N:'w2:key',A:{id:'fcode',name:'FCODE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'currency',name:'CURRENCY',dataType:'string'}},{T:1,N:'w2:key',A:{id:'funit',name:'FUNIT',dataType:'string'}},{T:1,N:'w2:key',A:{id:'flag',name:'tariff : 1, TariffRate : 2',dataType:'string'}},{T:1,N:'w2:key',A:{id:'transTariffYn',name:'TRANS TARIFF YN',dataType:'string'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BLNO',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'MHNO',dataType:'string'}},{T:1,N:'w2:key',A:{id:'spRtn',name:'//결과코드',dataType:'string'}},{T:1,N:'w2:key',A:{id:'spMsg',name:'//결과메시지',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_resultTariff_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'customer',name:'CUSTSOMER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'FCODE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'FUNIT',dataType:'string'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'CURRENCY',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blgb',name:'BLGB',dataType:'string'}},{T:1,N:'w2:column',A:{id:'amount',name:'AMOUNT(10.2)',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_linecode_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_frtMapping_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromCd',name:'fromCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'toCd',name:'toCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'description',name:'description',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dtlCd1',name:'dtlCd1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dtlCd2',name:'dtlCd2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dtlCd3',name:'dtlCd3',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_line_condition_freight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromCd',name:'fromCd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhliner',name:'hhliner',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieve_booking',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_containerBookingList_booking','ev:ondataload':'scwin.ds_containerBookingList_booking_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'CARRIER BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'reDt',name:'REQUEST DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'etRsltsDt',name:'RESULT DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'GROUP NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docCd',name:'SHIPPER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docCust',name:'SHIPPER NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docTel',name:'SHIPPER TEL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docSeq',name:'SHIPPER PIC',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docMan',name:'SHIPPER PIC NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custCd',name:'CUSTOMER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custNm',name:'CUSTOMER NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custTel',name:'CUSTOMER TEL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custSeq',name:'CUSTOMER PIC',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custMan',name:'CUSTOMER PIC NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'contractno',name:'CONTRACT NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'facCd',name:'FACTORY',dataType:'string'}},{T:1,N:'w2:column',A:{id:'facNm',name:'FACTORY NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'facTel',name:'FACTORY TEL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'facAttn',name:'FACTORY PIC',dataType:'string'}},{T:1,N:'w2:column',A:{id:'facMan',name:'FACTORY PIC NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'liner',name:'LINER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linernm',name:'LINER NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linerTel',name:'LINER TEL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linerattn',name:'LINER PIC',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linerattnnm',name:'LINER PIC NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'VESSEL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'VESSEL NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'voy',name:'VOYAGE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'SALESMAN',dataType:'string'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'SALESMAN NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'lodCd',name:'LOADMING',dataType:'string'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'LOADING NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'disCd',name:'DISCHARGE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'disNm',name:'DISCHARGE NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dlvCd',name:'DELIVERY',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dlvNm',name:'DELIVERY NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkArea',name:'AREA',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAreanm',name:'AREA NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dept',name:'Department',dataType:'string'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'Department NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'ETD',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'ETA',dataType:'string'}},{T:1,N:'w2:column',A:{id:'payTerm',name:'FREIGHT TERM',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cfs',name:'CARGO TYPE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'svcType',name:'SERVICE TERM',dataType:'string'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'ITEM',dataType:'string'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'ITEM NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mark',name:'MARK',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unit',name:'UNIT',dataType:'string'}},{T:1,N:'w2:column',A:{id:'unitnm',name:'UNIT NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'wgt',name:'WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msr',name:'MEASURE',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bkbltype',name:'Bltype',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'CONTAINER TYPE1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'CONTAINER TYPE2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'CONTAINER TYPE3',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'CONTAINER TYPE4',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'CONTAINER QTY1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'CONTAINER QTY2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'CONTAINER QTY3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'CONTAINER QTY4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'remark1',name:'REMARK1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'remark2',name:'REMARK2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'remark3',name:'REMARK3',dataType:'string'}},{T:1,N:'w2:column',A:{id:'remarkMaster',name:'REMARKMaster',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'등록자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'등록일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'iptYn',name:'iptYn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'refNo',name:'refNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'triYn',name:'triYn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'triItemType',name:'triItemType',dataType:'string'}},{T:1,N:'w2:column',A:{id:'triWrkDesc',name:'triWrkDesc',dataType:'string'}},{T:1,N:'w2:column',A:{id:'freeDay',name:'freeDay',dataType:'number'}},{T:1,N:'w2:column',A:{id:'custTeam',name:'custTeam',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cfsNm',name:'cfsNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'shrNm',name:'shrNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docClosingDt',name:'docClosingDt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docClosingTime',name:'docClosingTime',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docPic',name:'docPic',dataType:'string'}},{T:1,N:'w2:column',A:{id:'docPicNm',name:'docPicNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cargoClosingDt',name:'cargoClosingDt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cargoClosingTime',name:'cargoClosingTime',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cargoPic',name:'cargoPic',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cargoPicNm',name:'cargoPicNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1VsslCd',name:'ts1VsslCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1VsslNm',name:'ts1VsslNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1Voy',name:'ts1Voy',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1PortCd',name:'ts1PortCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1PortNm',name:'ts1PortNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1Eta',name:'ts1Eta',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts1Etd',name:'ts1Etd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2VsslCd',name:'ts2VsslCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2VsslNm',name:'ts2VsslNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2Voy',name:'ts2Voy',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2PortCd',name:'ts2PortCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2PortNm',name:'ts2PortNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2Eta',name:'ts2Eta',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ts2Etd',name:'ts2Etd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'refBuyingAmt',name:'refBuyingAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'refSellingAmt',name:'refSellingAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'wrkPlNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custTeamPic',name:'custTeamPic',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mgntYn',name:'mgntYn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkIncoterm',name:'bkIncoterm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAgent',name:'bkAgent',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAgentnm',name:'bkAgentnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkPicNm',name:'bkPicNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkPic',name:'bkPic',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerDoorOrder_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'GROUP NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'chk',name:'check (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'doordt',name:'ORDER DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'ORDER SEQ',dataType:'string'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'1:내부부서,2:거래처.',dataType:'string'}},{T:1,N:'w2:column',A:{id:'transcd',name:'운송사 CODE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'transnm',name:'운송사 NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fcity',name:'출발지 CODE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fcitynm',name:'출발지 NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'doorcd',name:'DOOR',dataType:'string'}},{T:1,N:'w2:column',A:{id:'doornm',name:'DOOR NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fdt',name:'출발지 도착일시',dataType:'string'}},{T:1,N:'w2:column',A:{id:'tcity',name:'도착지 CODE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'tcitynm',name:'도착지 NAME',dataType:'string'}},{T:1,N:'w2:column',A:{id:'tdt',name:'도착지 도착일시',dataType:'string'}},{T:1,N:'w2:column',A:{id:'closingdt',name:'CLOSE DATE mcomOdrNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'remark',name:'REMARK',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'SEND DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'REMARK',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'등록자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'등록일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'orderType',name:'Order Send : 1, Odrer Send del :2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'//결과코드',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'//결과메시지',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerDoorOrderQty_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'ORDER SEQ',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qtytype',name:'CONTAINER TYPE OR LCL',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inpid',name:'등록자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'등록일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'transCondCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'carCondCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'doorDate',name:'doorDate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vehclQty',name:'vehclQty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realQtytype',name:'realQtytype',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerBookingCont_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'DOOR ORDER SEQ',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntno',name:'CONTAINER NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype',name:'CONTAINER TYPE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntseal1',name:'CONTAINER NO1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntseal2',name:'CONTAINER NO2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntpkg',name:'CONTAINER PKG',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntwgt',name:'WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntmsrt',name:'MEASUREMENT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inpid',name:'등록자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'등록일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntrDate',name:'cntrDate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cfsInDate',name:'cfsInDate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cfsWrkDate',name:'cfsWrkDate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'realCntrNo',name:'realCntrNo',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_bookingHbl_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seq',name:'BOOKING SEQ',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'BOOKING GROUP NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'oblno',name:'B/L NO',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_houseblList_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'BOOKING  NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'BOOKING SEQ (2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'CONSIGNEE (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'FACKAGE (N10)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT (N13,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE (N11,3)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4 (4)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveCtrtClnt_booking',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_ctrtNo_booking','ev:ondataload':'scwin.ds_ctrtNo_booking_onLoad'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'string'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약시작일자',dataType:'string'}},{T:1,N:'w2:column',A:{id:'empNm',name:'계약담당자 사원명',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'string'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'계약등록점소',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerType_freight',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerType',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_currencyCode_freight',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ExRate',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieve_direct'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_createBlNo_direct'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_createMhno_direct'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',name:'DOC NO (CND) (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieve2_direct'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_checkMasterBl_direct'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocDirectMblno_direct'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'oblno',name:'MASTER B/L (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_partnerInfo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'agentCode',name:'agentCode',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blno',name:'blno',dataType:'string'}},{T:1,N:'w2:column',A:{id:'partnerAddr1',name:'partnerAddr1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'partnerAddr2',name:'partnerAddr2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'partnerAddr3',name:'partnerAddr3',dataType:'string'}},{T:1,N:'w2:column',A:{id:'partnerAddr4',name:'partnerAddr4',dataType:'string'}},{T:1,N:'w2:column',A:{id:'partnerAddr5',name:'partnerAddr5',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_bookingNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING  NO (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieve_freight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE (CND) (10)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID (8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'string'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'order no(13)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'tabIndex',name:'tab Index',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno2',name:'HOUSE NO (CND) (16) 하단 개별검색에 사용',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieve_booking'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING NO',dataType:'string'}},{T:1,N:'w2:key',A:{id:'seq',name:'BOOKING SEQ',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bkEtd',name:'ETD',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bkbltype',name:'Bltype',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'등록자',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'등록일',dataType:'string'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자',dataType:'string'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_retrieveCtrtClnt_booking'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'string'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'거래처',dataType:'string'}},{T:1,N:'w2:key',A:{id:'ctrtDtYn',name:'ctrtDtYn default :1',dataType:'number'}},{T:1,N:'w2:key',A:{id:'scDate',name:'ETD',dataType:'string'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'string'}},{T:1,N:'w2:key',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'string'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'impExpDomesticClsCd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'bizDivCntrYn',dataType:'number'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'bizDivBulkYn',dataType:'number'}},{T:1,N:'w2:key',A:{id:'bizDomInatYn',name:'국제 여부',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition_path'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhactcust',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'path',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'hhblno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'parhhblnoam1',name:'파라메터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_profit_freight',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'decimal'}},{T:1,N:'w2:column',A:{id:'pchsAmt',dataType:'decimal'}},{T:1,N:'w2:column',A:{id:'profit',dataType:'decimal'}},{T:1,N:'w2:column',A:{id:'profitRate',dataType:'decimal'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveNo_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bkNo',name:'bkNo',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_result_path',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pathCd',name:'pathCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pathNm',name:'pathNm',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_booking',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'docCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custCd',name:'custCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custNm',name:'custNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custSeq',name:'custSeq',dataType:'string'}},{T:1,N:'w2:column',A:{id:'custMan',name:'custMan',dataType:'string'}},{T:1,N:'w2:column',A:{id:'liner',name:'liner',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linernm',name:'linernm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linerattn',name:'linerattn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'linerattnnm',name:'linerattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'string'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'deptnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'vslCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'vslNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'voy',name:'voy',dataType:'string'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'salesCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'salesNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'lodCd',name:'lodCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'lodNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'disCd',name:'disCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'disNm',name:'disNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dlvCd',name:'dlvCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dlvNm',name:'dlvNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkArea',name:'bkArea',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAreanm',name:'bkAreanm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'bkEtd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'bkEta',dataType:'string'}},{T:1,N:'w2:column',A:{id:'etRsltsDt',name:'etRsltsDt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'payTerm',name:'payTerm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cfs',name:'cfs',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkIncoterm',name:'bkIncoterm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAgent',name:'bkAgent',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bkAgentnm',name:'bkAgentnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'svcType',name:'svcType',dataType:'string'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'itemCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'itemNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'pkg',name:'pkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unit',name:'unit',dataType:'string'}},{T:1,N:'w2:column',A:{id:'unitnm',name:'unitnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'wgt',name:'wgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msr',name:'msr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'cnttype1',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'cnttype2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'cnttype3',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'cnttype4',dataType:'string'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'cntqty1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'cntqty2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'cntqty3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'cntqty4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'carrierBkNo',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_invoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_autono'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'ORIGINAL'}]},{T:1,N:'name',E:[{T:4,cdata:'Original'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'SURRENDER'}]},{T:1,N:'name',E:[{T:4,cdata:'Surrender'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'DIRECT'}]},{T:1,N:'name',E:[{T:4,cdata:'Direct'}]}]}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_DeptChangeParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'modrNo',name:'modrNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hodrNo',name:'hodrNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bulkGb',name:'bulkGb',dataType:'string'}},{T:1,N:'w2:key',A:{id:'dept',name:'dept',dataType:'string'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'deptnm',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_HblNoChangeParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'odrNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'blNo',name:'blNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'newblNo',name:'newblNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'mhno',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HblNoChangeResult',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_bookingContainer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING  NO (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhbkgseq',name:'BOOKING SEQ (2)',dataType:'string'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_popup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_popup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_combo_onsubmitdone','ev:submiterror':'scwin.sbm_combo_onsubmiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobl.RetrieveSeaExportHouseBlNewCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_search", "key": "IN_DS1"}, {"id": "ds_houseblList", "key": "OUT_DS1"}, {"id": "ds_ocContList", "key": "OUT_DS2"}, {"id": "ds_ocElList", "key": "OUT_DS3"}, {"id": "ds_slipTax", "key": "OUT_DS4"}, {"id": "ds_ocProfitList", "key": "OUT_DS5"}, {"id": "ds_partnerInfo", "key": "OUT_DS6"}]',target:'data:json,[{"id": "ds_houseblList", "key": "OUT_DS1"}, {"id": "ds_ocContList", "key": "OUT_DS2"}, {"id": "ds_ocElList", "key": "OUT_DS3"}, {"id": "ds_slipTax", "key": "OUT_DS4"}, {"id": "ds_ocProfitList", "key": "OUT_DS5"}, {"id": "ds_partnerInfo", "key": "OUT_DS6"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_houseBlNo',action:'/il.seaout.sobl.RetrieveHouseBlNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_search", "key": "IN_DS1"}, {"id": "ds_retrieveNo", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_retrieveNo", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_houseBlNo_submitdone','ev:submiterror':'scwin.sbm_retrieve_houseBlNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBooking',action:'/il.seaout.sobl.RetrieveBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_bookingNo", "key": "IN_DS1"}, {"id": "ds_booking", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_booking", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBooking_submitdone','ev:submiterror':'scwin.sbm_retrieveBooking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainer',action:'/il.seaout.sobl.RetrieveBookingContainerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_bookingContainer", "key": "IN_DS1"}, {"id": "ds_ocContList", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_ocContList", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveContainer_submitdone','ev:submiterror':'scwin.sbm_retrieveContainer_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seaout.sobl.SaveBookingHouseBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_houseblList", "key": "IN_DS1"}, {"id": "ds_ocContList", "key": "IN_DS2"}, {"id": "ds_ocElList", "key": "IN_DS3"}, {"id": "ds_houseblList_freight", "key": "IN_DS4"}, {"id": "ds_selling_freight", "key": "IN_DS5"}, {"id": "ds_partner_freight", "key": "IN_DS6"}, {"id": "ds_buying_freight", "key": "IN_DS7"}, {"id": "ds_containerBookingList_booking", "key": "IN_DS8"}, {"id": "ds_containerDoorOrder_booking", "key": "IN_DS9"}, {"id": "ds_containerDoorOrderQty_booking", "key": "IN_DS10"}, {"id": "ds_containerBookingCont_booking", "key": "IN_DS11"}, {"id": "ds_ocDirectMblno_direct", "key": "IN_DS12"}, {"id": "ds_partnerInfo", "key": "IN_DS13"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seaout.sobl.DeleteBookingHouseBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_houseblList", "key": "IN_DS1"}, {"id": "ds_containerBookingList_booking", "key": "IN_DS5"}, {"id": "ds_selling_freight", "key": "IN_DS2"}, {"id": "ds_partner_freight", "key": "IN_DS3"}, {"id": "ds_buying_freight", "key": "IN_DS4"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_DeptChangeParam", "key": "IN_DS1"}, {"id": "ds_DeptChangeResult", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_DeptChangeResult", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_DeptChange_submitdone','ev:submiterror':'scwin.sbm_DeptChange_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCarrierBkNo',action:'/il.seaout.sobl.RetrieveSeaExportCarrierBkNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_bookingNo", "key": "IN_DS1"}, {"id": "ds_carrierBkNo", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_carrierBkNo", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCarrierBkNo_submitdone','ev:submiterror':'scwin.sbm_retrieveCarrierBkNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_path',action:'/il.seaout.sobl.RetrievePathCdByHblnoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition_path","key":"IN_DS1"},{"id":"ds_result_path","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result_path","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_path_submitdone','ev:submiterror':'scwin.sbm_retrieve_path_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMgntClnt',action:'/il.seaout.sobl.RetrieveSeaExportMgntClntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_clntNo", "key": "IN_DS1"}, {"id": "ds_mgntYn", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_mgntYn", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveMgntClnt_submitdone','ev:submiterror':'scwin.sbm_retrieveMgntClnt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_HblNoChange',action:'/il.comm.util.CoSeaHblNoChangeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_HblNoChangeParam", "key": "IN_DS1"}, {"id": "ds_HblNoChangeResult", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_HblNoChangeResult", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_HblNoChange_submitdone','ev:submiterror':'scwin.sbm_HblNoChange_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_freight',action:'/il.seaout.sobl.RetrieveSeaExportHouseBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_freight", "key": "IN_DS1"}, {"id": "ds_houseblList_freight", "key": "OUT_DS1"}, {"id": "ds_selling_freight", "key": "OUT_DS2"}, {"id": "ds_partner_freight", "key": "OUT_DS3"}, {"id": "ds_buying_freight", "key": "OUT_DS4"}]',target:'data:json,[{"id": "ds_houseblList_freight", "key": "OUT_DS1"}, {"id": "ds_selling_freight", "key": "OUT_DS2"}, {"id": "ds_partner_freight", "key": "OUT_DS3"}, {"id": "ds_buying_freight", "key": "OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_freight_submitdone','ev:submiterror':'scwin.sbm_retrieve_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save_freight',action:'/il.seaout.sobl.SaveHouseBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_houseblList_freight", "key": "IN_DS1"}, {"id": "ds_selling_freight", "key": "IN_DS2"}, {"id": "ds_partner_freight", "key": "IN_DS3"}, {"id": "ds_buying_freight", "key": "IN_DS4"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_freight_submitdone','ev:submiterror':'scwin.sbm_default_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete_freight',action:'/il.seaout.sobl.DeleteHouseBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_selling_freight", "key": "IN_DS1"}, {"id": "ds_partner_freight", "key": "IN_DS2"}, {"id": "ds_buying_freight", "key": "IN_DS3"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_freight_submitdone','ev:submiterror':'scwin.sbm_default_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTariff_freight',action:'/il.seaout.sobl.RetrieveSeaExportTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieveTariff_freight", "key": "IN_DS1"}, {"id": "ds_resultTariff_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_resultTariff_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveTariff_freight_submitdone','ev:submiterror':'scwin.sbm_retrieveTariff_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSelling_freight',action:'/il.seaout.sobl.RetrieveSeaExportHouseBlFreightSellingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_freight", "key": "IN_DS1"}, {"id": "ds_selling_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_selling_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSelling_freight_submitdone','ev:submiterror':'scwin.sbm_retrieveSelling_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePartner_freight',action:'/il.seaout.sobl.RetrieveSeaExportHouseBlFreightPartnerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_freight", "key": "IN_DS1"}, {"id": "ds_partner_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_partner_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePartner_freight_submitdone','ev:submiterror':'scwin.sbm_retrievePartner_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBuying_freight',action:'/il.seaout.sobl.RetrieveSeaExportHouseBlFreightBuyingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_freight", "key": "IN_DS1"}, {"id": "ds_buying_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_buying_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBuying_freight_submitdone','ev:submiterror':'scwin.sbm_retrieveBuying_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_linecode_freight',action:'/il.seaout.sobl.RetrieveDirectBlLinecodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_line_condition_freight", "key": "IN_DS1"}, {"id": "ds_linecode_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_linecode_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_linecode_freight_submitdone','ev:submiterror':'scwin.sbm_default_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_frtMapping_freight',action:'/il.seaout.sobl.RetrieveAPIFreightMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_line_condition_freight", "key": "IN_DS1"}, {"id": "ds_frtMapping_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_frtMapping_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_frtMapping_freight_submitdone','ev:submiterror':'scwin.sbm_retrieve_frtMapping_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveProfit_freight',action:'/il.seainb.sibl.RetrieveSeaHouseFreightProfitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_freight", "key": "IN_DS1"}, {"id": "ds_profit_freight", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_profit_freight", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveProfit_freight_submitdone','ev:submiterror':'scwin.sbm_RetrieveProfit_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_booking',action:'/il.seaout.sobk.RetrieveContainerBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_booking", "key": "IN_DS1"}, {"id": "ds_containerBookingList_booking", "key": "OUT_DS1"}, {"id": "ds_containerDoorOrder_booking", "key": "OUT_DS2"}, {"id": "ds_houseblList_booking", "key": "OUT_DS3"}]',target:'data:json,[{"id": "ds_containerBookingList_booking", "key": "OUT_DS1"}, {"id": "ds_containerDoorOrder_booking", "key": "OUT_DS2"}, {"id": "ds_houseblList_booking", "key": "OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_booking_submitdone','ev:submiterror':'scwin.sbm_retrieve_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOrder_booking',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_containerDoorOrderQty_booking", "key": "OUT_DS1"}, {"id": "ds_containerBookingCont_booking", "key": "OUT_DS2"}]',target:'data:json,[{"id": "ds_containerDoorOrderQty_booking", "key": "OUT_DS1"}, {"id": "ds_containerBookingCont_booking", "key": "OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOrder_booking_submitdone','ev:submiterror':'scwin.sbm_retrieveOrder_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrievebookingNo_booking',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_booking", "key": "IN_DS1"}, {"id": "ds_retrieveNo_booking", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_retrieveNo_booking", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievebookingNo_booking_submitdone','ev:submiterror':'scwin.sbm_retrievebookingNo_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrievebookingHbl_booking',action:'/il.seaout.sobk.RetrieveBookingHblCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_booking", "key": "IN_DS1"}, {"id": "ds_bookingHbl_booking", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_bookingHbl_booking", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievebookingHbl_booking_submitdone','ev:submiterror':'scwin.sbm_retrievebookingHbl_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save_booking',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_containerBookingList_booking", "key": "IN_DS1"}, {"id": "ds_containerDoorOrder_booking", "key": "IN_DS2"}, {"id": "ds_containerDoorOrderQty_booking", "key": "IN_DS3"}, {"id": "ds_containerBookingCont_booking", "key": "IN_DS4"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_booking_submitdone','ev:submiterror':'scwin.sbm_save_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete_booking',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_containerBookingList_booking", "key": "IN_DS1"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_booking_submitdone','ev:submiterror':'scwin.sbm_default_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt_booking',action:'/il.comm.code.RetrieveInternationalContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieveCtrtClnt_booking", "key": "IN_DS1"}, {"id": "ds_ctrtNo_booking", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_ctrtNo_booking", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_booking_submitdone','ev:submiterror':'scwin.sbm_retrieveCtrtClnt_booking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrderSend_booking',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_containerDoorOrder_booking", "key": "IN_DS1"}]',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrderSend_booking_submitdone','ev:submiterror':'scwin.sbm_default_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createMhno_direct',action:'/il.seaout.sobl.RetrieveMhnoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_direct", "key": "IN_DS1"}, {"id": "ds_createMhno_direct", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_createMhno_direct", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_createMhno_direct_submitdone','ev:submiterror':'scwin.sbm_createMhno_direct_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_checkMasterBl_direct',action:'/il.seaout.sobl.CheckDirectBlMasterBlCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve2_direct", "key": "IN_DS1"}, {"id": "ds_checkMasterBl_direct", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_checkMasterBl_direct", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_checkMasterBl_direct_submitdone','ev:submiterror':'scwin.sbm_checkMasterBl_direct_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_createHouseBlNo_direct',action:'/il.seaout.sobl.RetrieveHouseBlNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieve_direct", "key": "IN_DS1"}, {"id": "ds_createBlNo_direct", "key": "OUT_DS1"}]',target:'data:json,[{"id": "ds_createBlNo_direct", "key": "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'','ev:submit':'','ev:submitdone':'scwin.sbm_createHouseBlNo_direct_submitdone','ev:submiterror':'scwin.sbm_createHouseBlNo_direct_submiterror'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){1, 2, 3; //==
// id       : se_105_01_06b
// 이름     :
// 경로     :
// 사용계정 :
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     :
//
// 레포트   :
// 업로드   :
// 다운로드 :
// 호출     :
//==
//------------------------------------------------------------------------------
// JSP 전역 변수 → scwin 네임스페이스
//------------------------------------------------------------------------------
scwin.MSG_LO_WRN_007 = "Customer와 Dept가 일치하지 않습니다. \n거래처별 매출귀속 정의 화면에서 정보를 확인하세요.";
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.statusFlag = ""; // C/U/I
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.mhnoFlag = "0";
scwin.v_linkcheck = "0";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_carrierBkno = "";
scwin.p_no = "";
scwin.p_row_cnt = "";
scwin.p_data = "";
scwin.p_hblno = "";
scwin.p_docuno = "";
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.p_seaExgbEx = "";

// freight
scwin.exRate1 = "0";
scwin.exRate2 = "0";
scwin.crc = "";
scwin.tabNo = 0;
scwin.exRateCheck = "1";

// booking
scwin.v_contractno = "";
scwin.vLobranCd = "";
scwin.vLobranNm = "";

// GPT
scwin.popUpResult = null;
scwin.gptYn = false;

// JSP 의 DDate.getDate("") → 서버일자
scwin.strCurDate = "";
scwin.vUserId = "";

//Hidden
scwin.ed_hhactattn = "";
scwin.ed_hhactcust_freight = "";
scwin.ed_hhagent_freight = "";
scwin.ed_hhagentattn = "";
scwin.ed_hharea = "";
scwin.ed_hhdisccd_freight = "";
scwin.ed_hhetd_freight = "";
scwin.ed_hhliner_freight = "";
scwin.ed_hhlinerattn = "";
scwin.ed_hhlodcd_freight = "";
scwin.txt_addr1 = "";
scwin.txt_addr2 = "";
scwin.txt_addr3 = "";
scwin.txt_addr4 = "";
scwin.txt_addr5 = "";
scwin.txt_hhactattnnm = "";
scwin.txt_hhactcustnm_freight = "";
scwin.txt_hhagentattnnm = "";
scwin.txt_hhagentnm_freight = "";
scwin.txt_hhareanm = "";
scwin.txt_hhc1 = "";
scwin.txt_hhc2 = "";
scwin.txt_hhc3 = "";
scwin.txt_hhc4 = "";
scwin.txt_hhc5 = "";
scwin.txt_hhdiscnm_freight = "";
scwin.txt_hhlinerattnnm = "";
scwin.txt_hhlinernm_freight = "";
scwin.txt_hhlodnm_freight = "";
scwin.txt_hhn1 = "";
scwin.txt_hhn2 = "";
scwin.txt_hhn3 = "";
scwin.txt_hhn4 = "";
scwin.txt_hhn5 = "";
scwin.txt_hhrmk1 = "";
scwin.txt_hhrmk2 = "";
scwin.txt_hhrmk3 = "";
scwin.txt_hhrmk4 = "";
scwin.txt_hhrmk5 = "";
scwin.txt_hhs1 = "";
scwin.txt_hhs2 = "";
scwin.txt_hhs3 = "";
scwin.txt_hhs4 = "";
scwin.txt_hhs5 = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_hhio = "O";
scwin.txt_hhmitem1 = "";
scwin.ed_carrierBkNo = "";
scwin.hd_hhitem_freight = "";
scwin.hd_creadyDt_freight = "";
scwin.hd_hhpcgb_freight = "";
scwin.hd_hhdanggb_freight = "";
scwin.hd_commcustomer_freight = "999999";
scwin.ed_hhitem = "";
scwin.onpageload = function () {
  scwin.v_linkcheck = $c.data.getParameter($p, "linkcheck") || "0";
  scwin.v_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.v_blno = $c.data.getParameter($p, "blno") || "";
  scwin.v_mhno = $c.data.getParameter($p, "mhno") || "";
  scwin.v_bkno = $c.data.getParameter($p, "bkno") || "";
  scwin.v_carrierBkno = $c.data.getParameter($p, "carrierBkno") || "";
  scwin.p_no = $c.data.getParameter($p, "no") || "";
  scwin.p_row_cnt = $c.data.getParameter($p, "row_cnt") || "";
  scwin.p_data = $c.data.getParameter($p, "data") || "";
  scwin.p_hblno = $c.data.getParameter($p, "hblno") || "";
  scwin.p_docuno = $c.data.getParameter($p, "docuno") || "";
  scwin.p_clntNo = $c.data.getMemInfo($p, "clntNo");
  scwin.p_clntNm = $c.data.getMemInfo($p, "name1");
  scwin.p_seaExgbEx = $c.data.getMemInfo($p, "seaExgbEx");
  scwin.vLobranCd = $c.data.getMemInfo($p, "lobranCd") || "";
  scwin.vLobranNm = $c.data.getMemInfo($p, "lobranNm") || "";
  scwin.vUserId = $c.data.getMemInfo($p, "userId") || "";

  // JSP 의 DDate.getDate("") → 서버일자
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.f_OnLoad();
};

/**
* @type   : function
* @access : public
* @desc   : 컨테이너번호 유효성 체크.<br>
* <pre>사용예 :
*
* 1. $c.gus.cf_CheckCntrNo( 'CAXU2520345' );
* </pre>
* @sig    :
* @param  : 컨테이너번호
* @author : 최수빈
*/
scwin.f_checkCntrNo = function (parCntrNo) {
  var tempData = "1012131415161718192021232425262728293031323435363738";
  var cntrNo = parCntrNo.trim();
  if (cntrNo == "" || cntrNo.length != 11) {
    //$c.gus.cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
    return false;
  } else {
    var re = /[A-Z]{4}[0-9]{7}/;
    if (!re.test(cntrNo)) {
      //$c.gus.cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      return false;
    }
    var tempPos1 = tempData.substring((cntrNo.charCodeAt(0) - 65) * 2, (cntrNo.charCodeAt(0) - 65) * 2 + 2) * 1;
    var tempPos2 = tempData.substring((cntrNo.charCodeAt(1) - 65) * 2, (cntrNo.charCodeAt(1) - 65) * 2 + 2) * 2;
    var tempPos3 = tempData.substring((cntrNo.charCodeAt(2) - 65) * 2, (cntrNo.charCodeAt(2) - 65) * 2 + 2) * 4;
    var tempPos4 = tempData.substring((cntrNo.charCodeAt(3) - 65) * 2, (cntrNo.charCodeAt(3) - 65) * 2 + 2) * 8;
    var tempSum = tempPos1 + tempPos2 + tempPos3 + tempPos4 + cntrNo.substring(4, 5) * 16 + cntrNo.substring(5, 6) * 32 + cntrNo.substring(6, 7) * 64 + cntrNo.substring(7, 8) * 128 + cntrNo.substring(8, 9) * 256 + cntrNo.substring(9, 10) * 512;
    var tempMod = tempSum % 11 + "";
    if (cntrNo.substring(10, 11) != tempMod.charAt(tempMod.length - 1)) {
      // $c.gus.cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      return false;
    }
  }
  return true;
};

//---------------------------------------------------------
// 화면로딩시
//---------------------------------------------------------
scwin.f_OnLoad = function () {
  scwin.f_initSetTab(); //tab세팅
  scwin.f_DefaultValue();
  scwin.f_Check();
  scwin.f_ContainerTypeLoading(); // Container Type 정보
  scwin.f_getParametrSetting(scwin.v_linkcheck); // link처리
  scwin.f_header();
  scwin.f_ContainerTypeLoading_freight(); // Container Type 정보
  scwin.f_CurrencyLoading_freight();
  const codeOptions = [{
    grpCd: "IL005",
    compID: "lc_hhincoterm"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//필요엾음
scwin.f_header = function () {
  scwin.f_Set("INIT");
  cnd_ed_hhblno.focus();
};

//---------------------------------------------------------
// Parameter Setting
// 다른 화면에서 들어올때 각 화면별 조건을 받아서 조회한다.
//---------------------------------------------------------
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "1":
      // Booking에서 Search Grid
      scwin.mhnoFlag = "1";
      if (scwin.v_blno == 'null') {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.focus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      cnd_ed_hhblno.setValue(scwin.v_blno);
      if (ds_hmhno.getRowCount() == "0") {
        ds_hmhno.insertRow(0);
      }
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", scwin.v_mhno);
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", scwin.v_mhno);
      cnd_lc_mhno.focus();
      break;
    case "2":
      // House Search
      scwin.mhnoFlag = "1";
      if (scwin.v_blno == 'null') {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.focus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      cnd_ed_hhblno.setValue(scwin.v_blno);
      if (ds_hmhno.getRowCount() == "0") {
        ds_hmhno.insertRow(0);
      }
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", scwin.v_mhno);
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", scwin.v_mhno);
      cnd_lc_mhno.focus();
      break;
    case "4":
      // Booking 에서 h b/l버튼 (create)
      scwin.f_Create();
      ed_hhbkgno.setValue(v_bkno);
      cnd_ed_hhblno.focus(); //mhno를 보여주기위해서.
      tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      ed_hhbkgno.focus(); // 값 넣어주기 위해.
      ed_hhetd.focus(); // etd값 반영.
      lc_hhbkgseq.focus();

      //2020.03.02 국제영업3팀 개선사항 : 부킹에 등록된 ITEM 없을 경우 자동으로 30000000 (일반화물) 으로 기입 처리
      // 				if (scwin.ed_hhitem.getValue() == "") {
      if (scwin.txt_hhmitem1 == "") {
        //부킹정보에 아이템 코드없이 아이템 명으로 등록 된 경우가 있으므로 코드값이 아닌 명으로 체크
        scwin.ed_hhitem = "30000000";
        scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
      }
      txt_blpic.setValue("");
      //기본으로 등록자 ID 기입 처리
      if (ed_blpic.getValue() == "") {
        ed_blpic.setValue(scwin.vUserId);
        scwin.f_PopUp("B/L PIC", "T");
      }
      break;
  }
};

//---------------------------------------------------------
// Object Check
//---------------------------------------------------------
scwin.f_Check = function () {
  if (scwin.statusFlag == "I") {
    // 초기화시.
    cnd_lc_autono.Index = 1;
    cnd_lc_mhno.Index = 0;
    lc_hhbltype.Index = 0;
    lc_hhpcgb.Index = 0;
    lc_hhisunm.Index = 1;
    lc_hhstype.Index = 0;
    lc_hhcoload.Index = 0;
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("42RE");
    ed_hhcnt4type.setValue("45GP");
    ed_hhobl.setValue("3");
    chb_hhtriange.setValue(false);
    chb_hhnomi.setValue(false);
    chb_hhp1.setValue(true);
    chb_hhp2.setValue(false);
    chb_hhp3.setValue(false);
    chb_hhp4.setValue(true);
    chb_hhp5.setValue(false);
    chb_hhp6.setValue(true);
    rd_hhdanggb.setValue("N");
    scwin.rd_hhmnfgb = "E";
    ta_hhs.setValue("");
    ta_hhc.setValue("");
    ta_hhn.setValue("");
    txa_agentAdress.setValue("");
    ed_hhmt.setValue("");

    // 	    	booking
    chb_iptYn_booking.setValue(false);
    // 	    	booking
  } else if (scwin.statusFlag == "C") {
    // create시
    cnd_lc_autono.Index = 1;
    cnd_lc_mhno.Index = 0;
    lc_hhbltype.Index = 0;
    lc_hhpcgb.Index = 0;
    lc_hhisunm.Index = 1;
    lc_hhstype.Index = 0;
    lc_hhcoload.Index = 0;
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("42RE");
    ed_hhcnt4type.setValue("45GP");
    ed_hhobl.setValue("3");
    chb_hhtriange.setValue(false);
    chb_hhnomi.setValue(false);
    chb_hhp1.setValue(true);
    chb_hhp2.setValue(false);
    chb_hhp3.setValue(false);
    chb_hhp4.setValue(true);
    chb_hhp5.setValue(false);
    chb_hhp6.setValue(true);
    rd_hhdanggb.setValue("N");
    scwin.rd_hhmnfgb = "E";
    ta_hhs.setValue("");
    ta_hhc.setValue("");
    ta_hhn.setValue("");
    txa_agentAdress.setValue("");
    ed_hhmt.setValue("");
    chb_iptYn_booking.setValue(false);
    if (lc_hhbltype.getValue() != "B") {
      $c.gus.cfDisableObjects($p, [ed_hhmt]); //cargo type bulk일때만 M/T칸 활성화
    } else {
      $c.gus.cfEnableObjects($p, [ed_hhmt]);
      $c.gus.cfDisableObjects($p, [lc_hhbltype]); //처음 생성한 cargo type bulk일때는 cargo type 변경 못하게
    }
  }
};

//-------------------------------------------------------------------------
// 초기화
// B/L전화면은 조회조건은 항상 HEADER를 ADDROW상태로 ON LOAD되어있음.
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  cnd_ed_hhblno.focus();
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  $c.gus.cfEnableObjects($p, [tac_tabMain.tr_tab_center0, tac_tabMain.tr_tab_center1, tac_tabMain.tr_tab_center2]);
  tac_tabMain.setSelectedTabIndex(0);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  tac_tabMain.setSelectedTabIndex(idx);
  if (idx == 0) {
    //buttonTable.style.top  = 548 + "px";
    buttonTable1.visible(true);
    buttonTable2.visible(true);
  } else if (idx == 1) {
    buttonTable1.visible(true);
    buttonTable2.visible(true);
  } else {
    buttonTable1.visible(false);
    buttonTable2.visible(false);
  }
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p); // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Copy2, btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_FileDownload, btn_HNoChg, grpBtn1, grpBtn2, grpBtn3, grpBtn4, grpBtn5, btn_1, btn_2_freight1, btn_2_freight2, btn_2_freight3, pu_ResultdateChange1, pu_ResultdateChange2, pu_ResultdateChange3, btn_2, btn_4, btn_5_freight, btn_6_freight, btn_8, btn_10, btn_CntrReceive, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_9_freight]);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, cnd_lc_mhno, cnd_ed_hhmblno]); // 조회조건.
      cnd_lc_autono.setValue("");
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      //조회모드

      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_CntrReceive, grpBtn1, btn_AddCntr1, btn_AddCntr2, grpBtn1, grpBtn2, grpBtn3, grpBtn4, grpBtn5]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, btn_Copy2, btn_Create, btn_Delete, btn_FileDownload, btn_4, btn_5_freight, btn_6_freight, btn_8, btn_9_freight, btn_10, pu_departmentChange, btn_HNoChg]);

      // 그리드 수정 못하게 한다. (Editable -> setDisabled 치환)
      gr_ocContList.setDisabled("grid", true);
      gr_ocElList.setDisabled("grid", true);
      gr_selling_freight.setDisabled("grid", true);
      gr_partner_freight.setDisabled("grid", true);
      gr_buying_freight.setDisabled("grid", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, cnd_lc_mhno, cnd_ed_hhmblno]); // 조회조건.

      scwin.statusFlag = ""; // flag null
      //Direct BL 생성시 Master BL 자동으로 생성되는 기능 때문에 Direct BL을 바꾸거나, Direct BL로 변경 불가능하도록 수정
      if (cnd_lc_autono.getValue() == "DIRECT") {
        $c.gus.cfDisableObjects($p, [cnd_lc_autono]);
      } else {
        ds_autono.deleteRow(2);
        //cnd_lc_autono.DeleteData(2);
      }
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Copy2, btn_Create, btn_HNoChg, btn_Delete, btn_4, btn_5_freight, btn_6_freight, btn_8, btn_10, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2_freight1, btn_2_freight2, pu_ResultdateChange1, pu_ResultdateChange2, pu_ResultdateChange3, btn_2, btn_9_freight, btn_Update, btn_FileDownload, btn_CntrReceive, grpBtn1, grpBtn2, grpBtn3, grpBtn4, grpBtn5]);
      // 그리드 수정 가능 (Editable -> setDisabled 치환)
      gr_ocContList.setDisabled("grid", false);
      gr_ocElList.setDisabled("grid", false);
      gr_selling_freight.setDisabled("grid", false);
      gr_partner_freight.setDisabled("grid", false);
      gr_buying_freight.setDisabled("grid", false);
      $c.gus.cfDisableObjects($p, [ed_hhmt]); // 조회조건.
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, cnd_lc_mhno, cnd_ed_hhmblno]); // 조회조건.
      ds_autono.insertRow(2);
      ds_autono.setCellAllData(2, "code", "DIRECT");
      ds_autono.setCellAllData(2, "name", "Direct");

      //cnd_lc_autono.ResetData();
      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Copy2, btn_Update, btn_Create, btn_Delete, btn_4, btn_5_freight, btn_6_freight, btn_8, btn_10, btn_HNoChg, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload, grpBtn1, grpBtn2, grpBtn3, grpBtn4, grpBtn5, btn_1, btn_2_freight1, btn_2_freight2, btn_2_freight3, btn_2, btn_9_freight, pu_ResultdateChange1, pu_ResultdateChange2, pu_ResultdateChange3, btn_CntrReceive]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();

      // 그리드 수정 가능 (Editable -> setDisabled 치환)
      gr_ocContList.setDisabled("grid", false);
      gr_ocElList.setDisabled("grid", false);
      gr_selling_freight.setDisabled("grid", false);
      gr_partner_freight.setDisabled("grid", false);
      gr_buying_freight.setDisabled("grid", false);
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, cnd_lc_mhno, cnd_ed_hhmblno]); // 조회조건.
      scwin.statusFlag = "U";
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_FileDownload, btn_HNoChg]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [udc_hhvslcd, udc_hhlodcd, udc_hhdisccd, udc_hhdlvcd, udc_hhfdcd, udc_hhunitcd, udc_mwarecd, udc_blpic, udc_hhagent, udc_hhactcust, udc_hhsales, udc_hhliner, udc_hhrcvcd]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [udc_hhvslcd, udc_hhlodcd, udc_hhdisccd, udc_hhdlvcd, udc_hhfdcd, udc_hhunitcd, udc_mwarecd, udc_blpic, udc_hhagent, udc_hhactcust, udc_hhsales, udc_hhliner, udc_hhrcvcd]);
};

//---------------------------------------------------------
// function name : f_setDSHeader
// function desc : Grid Header정보 Settin//---------------------------------------------------------
scwin.f_setDSHeader = function (ds, gubun) {};

//---------------------------------------------------------
// 조회
//---------------------------------------------------------
scwin.f_Retrieve = function () {
  if (cnd_ed_hhblno.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House No"]); // @은(는) 필수 입력 항목입니다.
    return;
  }
  dma_search.set("hhblno", cnd_ed_hhblno.getValue());
  dma_search.set("autono", cnd_lc_autono.getValue());
  dma_search.set("mhno", cnd_lc_mhno.getValue());
  dma_search.set("hhmblno", cnd_ed_hhmblno.getValue());
  dma_search.set("kcomcd", scwin.hd_kcomcd);
  dma_search.set("hhio", scwin.hd_hhio);

  //Booking Seq 넣어 주기.
  ds_bkseq.removeAll();
  ds_bkseq.insertRow(0);

  //txa_agentAdress.setValue(" ");
  //ds_partnerInfo.removeAll();
  ed_hhmt.setValue("");
  $c.sbm.execute($p, sbm_retrieve);
};

//---------------------------------------------------------
// 조회 Callback (refactor + 안정화)
//  - DataList 0-base 기준 유지
//  - cf~ => $c.gus.cf~
//  - 합계 계산 유틸로 분리
//  - bkseq/콤보 세팅 로직 정리
//---------------------------------------------------------

/** DataList 컬럼 합계 */
scwin._sumCol = function (dl, colId) {
  var sum = 0;
  var rc = dl.getRowCount();
  for (var i = 0; i < rc; i++) {
    sum += scwin._n(dl.getCellData(i, colId));
  }
  return sum;
};

/** freight 조회용 DMA 세팅 */
scwin._setFreightRetrieveDma = function () {
  // 기존 코드 유지: scwin.hd_kcomcd, scwin.hd_hhio 를 그대로 사용
  dma_retrieve_freight.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve_freight.set("mhno", cnd_lc_mhno.getValue());
  dma_retrieve_freight.set("hhio", scwin.hd_hhio);
  dma_retrieve_freight.set("hhblno", cnd_ed_hhblno.getValue());
};

/** bkseq 코드 세팅 + 콤보 초기화(기존 로직 준수) */
scwin._syncBkSeq = function () {
  // ds_houseblList rowPosition은 위에서 0으로 맞춰두었음
  var hhbkgseq = ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhbkgseq");

  // ds_bkseq에 row가 없을 수도 있으니 안전 처리
  var r = ds_bkseq.getRowPosition();
  if (r < 0) {
    if (ds_bkseq.getRowCount() === 0 && ds_bkseq.insertRow) ds_bkseq.insertRow(0);
    ds_bkseq.setRowPosition(0);
    r = 0;
  }
  ds_bkseq.setCellData(r, "code", hhbkgseq);

  // 콤보 선택 초기화 (기존: Index = 0)
  if (lc_hhbkgseq.setSelectedIndex) lc_hhbkgseq.setSelectedIndex(0);else lc_hhbkgseq.Index = 0;
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.gptYn = false;

  // 조회 결과 없음
  if (ds_houseblList.getRowCount() === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    scwin.f_Set("INIT");
    scwin.f_Check(); // Object Check
    return;
  }

  // 대표 row 포지션 0으로
  ds_houseblList.setRowPosition(0);

  // 합계 계산
  var v_totPkg = scwin._sumCol(ds_ocContList, "mcpkg");
  var v_totWgt = scwin._sumCol(ds_ocContList, "mcwgt");
  var v_totMsr = scwin._sumCol(ds_ocContList, "mcmsr");
  var v_eltotPkg = scwin._sumCol(ds_ocElList, "pkg");
  var v_eltotWgt = scwin._sumCol(ds_ocElList, "wgt");

  // 결과 세팅
  ed_totpkg.setValue(v_totPkg);
  ed_totwgt.setValue(v_totWgt);
  ed_totmsr.setValue(v_totMsr);
  ed_eltotpkg.setValue(v_eltotPkg);
  ed_eltotwgt.setValue(v_eltotWgt);

  // 후속 처리
  scwin.f_invoiceCheck(); // invoice Check
  scwin.f_ContractInfo_booking();
  scwin.f_retrieveCarrierBkNo();
  scwin.f_Set("RETRIEVE");

  // Booking Seq 동기화
  scwin._syncBkSeq();

  // cmd enable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);

  // B/L PIC 처리
  if (ed_blpic.getValue() !== "") {
    txt_blpic.setValue("");
    scwin.f_PopUp("B/L PIC", "T");
  }

  // freight DMA 세팅 + 실행
  scwin._setFreightRetrieveDma();
  await $c.sbm.execute($p, sbm_retrieve_freight);
};
scwin.sbm_retrieve_freight_submitdone = function (e) {
  // -----------------------------
  // 1) 합계 계산부
  // -----------------------------
  if (ds_houseblList_freight.getRowCount() == 0) {
    // 필요 시:
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    // scwin.f_Set("INIT");
    // scwin.f_Check_freight();
  } else {
    scwin.f_SellingSum_freight();
    scwin.f_PartnerSum_freight();
    scwin.f_BuyingSum_freight();
  }

  // -----------------------------
  // 2) 링크 데이터 반영(scwin.v_linkcheck == 9)
  // -----------------------------
  if (scwin.v_linkcheck == 9) {
    var no = scwin.p_no;
    var row_cnt = Number(scwin.p_row_cnt) || 0;
    var data = scwin.p_data;
    if (!data) return false;

    // "$" 단위 레코드, "_" 단위 필드
    // rtnValues[t] = [fromCd, crcCd, pchsAmtFcrc, exRate, pchsAmt, chgWt, pchsUpr]
    var rows = data.split("$").filter(function (s) {
      return s != null && s != "";
    }).map(function (s) {
      return s.split("_");
    });
    if (!rows || rows.length == 0) return false;

    // 기존 buying row count
    var baseIndex = ds_buying_freight.getRowCount(); // (0-base 기준 count)
    // GAUCE의 k=CountRow 와 동일 의미

    // row 추가 + 값 세팅
    for (var r = 0; r < rows.length; r++) {
      // ? 행 추가 (프로젝트 표준 함수로 교체 가능)
      // 기존 GAUCE: f_addRow(3)
      // WebSquare에서 addRow를 직접 쓰거나 기존 공통함수(scwin.f_addRow_freight 등)로 통일
      // 여기서는 "buying 탭" 의미로 3을 유지한다고 가정
      scwin.f_addRow(3);

      // 현재 row 위치(0-base)
      var curRow = ds_buying_freight.getRowPosition();
      var prevRow = curRow - 1;

      // pchsSeq 자동 증가(이전행 + 1)
      if (prevRow >= 0) {
        var prevSeq = Number(ds_buying_freight.getCellData(prevRow, "pchsSeq")) || 0;
        ds_buying_freight.setCellData(curRow, "pchsSeq", prevSeq + 1);
      }

      // fromCd = rows[r][0]
      // 라인 조건 세팅 (DataList라면 row index 0)
      dma_line_condition_freight.set("hhliner", scwin.ed_hhliner_freight);
      dma_line_condition_freight.set("fromCd", rows[r][0]);

      // ? 매핑 조회 TR (비동기 안전 처리)
      $c.sbm.execute($p, sbm_retrieve_frtMapping_freight);

      // 매핑 결과(DataList 기준 row 0)
      ds_buying_freight.setCellData(curRow, "fareEngCd", ds_frtMapping_freight.getCellData(0, "toCd"));
      ds_buying_freight.setCellData(curRow, "fareEngNm", ds_frtMapping_freight.getCellData(0, "description"));
      ds_buying_freight.setCellData(curRow, "selpchItemCd", ds_frtMapping_freight.getCellData(0, "dtlCd1"));
      ds_buying_freight.setCellData(curRow, "fareGrpCd", ds_frtMapping_freight.getCellData(0, "dtlCd2"));
      ds_buying_freight.setCellData(curRow, "vatYn", ds_frtMapping_freight.getCellData(0, "dtlCd3"));

      // 원본 데이터 세팅
      ds_buying_freight.setCellData(curRow, "crcCd", rows[r][1] || "");
      ds_buying_freight.setCellData(curRow, "pchsAmtFcrc", rows[r][2] || "");
      ds_buying_freight.setCellData(curRow, "exRate", rows[r][3] || "");
      ds_buying_freight.setCellData(curRow, "pchsAmt", rows[r][4] || "");
      ds_buying_freight.setCellData(curRow, "chgWt", rows[r][5] || "");
      ds_buying_freight.setCellData(curRow, "pchsUpr", rows[r][6] || "");

      // USD면 usdAmt = pchsAmtFcrc
      if ((rows[r][1] || "") == "USD") {
        ds_buying_freight.setCellData(curRow, "usdAmt", rows[r][2] || "");
      }
    }
  }
  ds_profit_freight.removeAll();
  $c.sbm.execute($p, sbm_RetrieveProfit_freight);
};
scwin.sbm_RetrieveProfit_freight_submitdone = function (e) {
  cnd_ed_hhblno.focus();
  gr_buying_freight.setHeaderDisabled('chk', true);
  gr_partner_freight.setHeaderDisabled('chk', true);
  gr_selling_freight.setHeaderDisabled('chk', true);
};

//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_hhmblno, cnd_lc_autono, cnd_lc_mhno]);
  cnd_lc_autono.Index = 0; //입력 COMBO
  ds_hmhno.removeAll(); // DATASET COMBO
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  //==
  // 1) 필드 초기화
  //==
  scwin.f_FieldClear();

  //==
  // 2) DataList 초기화
  //==
  ds_hmhno.removeAll();
  ds_hmhno.insertRow(0);
  ds_houseblList.removeAll();
  ds_houseblList.insertRow(0);
  ds_ocContList.removeAll();
  ds_ocElList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();

  //==
  // 3) freight 초기화
  //==
  ds_houseblList_freight.removeAll();
  ds_houseblList_freight.insertRow(0);
  ds_selling_freight.removeAll();
  ds_partner_freight.removeAll();
  ds_buying_freight.removeAll();

  //==
  // 4) booking 초기화
  //==
  ds_retrieveNo_booking.removeAll();
  ds_retrieveNo_booking.insertRow(0);

  //dma_retrieveCtrtClnt_booking.removeAll();
  //dma_retrieveCtrtClnt_booking.insertRow(0);

  ds_ctrtNo_booking.removeAll();
  ds_ctrtNo_booking.insertRow(0);
  ds_partnerInfo.removeAll();
  ds_partnerInfo.insertRow(0);
  scwin.f_Create_booking();

  //==
  // 5) 조회조건 Enable
  //==
  cnd_ed_hhblno.setDisabled(false);
  cnd_lc_mhno.setDisabled(false);

  //==
  // 6) 상태 전환
  //==
  scwin.f_Set("CREATE");
  scwin.f_Check();

  //==
  // 7) ITEM 기본값 + 팝업
  //==
  scwin.ed_hhitem = "30000000";
  scwin.f_OpenCommonPopUp("Item", "T", "F", "F");

  //==
  // 8) BL PIC 기본 세팅
  //==
  txt_blpic.setValue("");
  if (txt_blpic.getValue().trim() == "") {
    ed_blpic.setValue(scwin.vUserId);
    scwin.f_PopUp("B/L PIC", "T");
  }

  //==
  // 9) Partner Address 자동 처리
  //==
  if (ed_hhagent.getValue().trim() != "" && ed_agent.getValue().trim() == "") {
    ed_agent.setValue(ed_hhagent.getValue());
    scwin.f_PopUp("Partner Address", "T");
  }

  //==
  // 10) BLNO / MHNO 기본값
  //==
  cnd_ed_hhblno.setValue("DBEX");
  ds_hmhno.setCellData(0, "code", "NONE");
  ds_hmhno.setCellData(0, "name", "NONE");

  //==
  // 11) MHNO 콤보 선택
  //==
  cnd_lc_mhno.setSelectedIndex(0);

  //==
  // 12) 포커스
  //==
  cnd_ed_hhblno.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  if (scwin.statusFlag != "C" && ed_hhetd.getValue() == "") {
    // 등록 화면에 필수인 ETD를 기준으로 잡았음.
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    return;
  } else {
    scwin.f_Set("UPDATE");

    // invoice check
    scwin.f_invoiceCheck(); // invoice Check
    $c.gus.cfDisableObjects($p, [ed_hhbuyer, txt_hhbuyernm, ed_agent]);
    if ("" != ed_hhagent.getValue().trim() && ed_agent.getValue().trim() == "") {
      ed_agent.setValue(ed_hhagent.getValue());
      scwin.f_PopUp("Partner Address", "T");
    }
    if (lc_selling_hhexgb_freight.getValue() == "") {
      lc_selling_hhexgb_freight.setValue(scwin.p_seaExgbEx);
      lc_partner_hhexgb_freight.setValue(scwin.p_seaExgbEx);
      lc_buying_hhexgb_freight.setValue(scwin.p_seaExgbEx);
    }
    if (ed_selling_hhcurdt_freight.getValue() == "") {
      ed_selling_hhcurdt_freight.setValue(ed_hhetd.getValue());
      ed_partner_hhcurdt_freight.setValue(ed_hhetd.getValue());
      ed_buying_hhcurdt_freight.setValue(ed_hhetd.getValue());
    }
  }
};

//-------------------------------------------------------------------------
// Save (WebSquare) - GAUCE -> DataList 리팩토링 반영본
// - IsUpdated => getModifiedIndex().length != 0
// - GAUCE 1-based loop => 0-based loop
// - modifyRowStatus 오타/인덱스 수정
// - 존재여부 체크(if(ds_xxx)) 제거(무조건 존재 가정)
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.f_TextareaSave();

  // 변경 여부 체크 (DataList 기준)
  function isModified(ds) {
    return ds.getModifiedIndex && ds.getModifiedIndex().length != 0;
  }
  if (isModified(ds_houseblList) || isModified(ds_ocContList) || isModified(ds_ocElList) || isModified(ds_selling_freight) || isModified(ds_partner_freight) || isModified(ds_buying_freight) || isModified(ds_partnerInfo)) {
    if ((await scwin.f_validate()) && scwin.f_Save_freight()) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        // 저장하시겠습니까?

        // GPT에서 가져온 B/L인데, 기존에 동일한 B/L이 존재할 경우
        if (scwin.popUpResult != null && scwin.popUpResult[2] == "Y" && cnd_ed_hhblno.getValue().trim() == scwin.popUpResult[0] && gptYn) {
          if (!(await $c.win.confirm($p, "기존에 동일한 이름의 B/L이 존재합니다. 새로운 내용으로 덮어 씌우시겠습니까?"))) {
            return;
          }
        }

        // DIRECT 입력
        if (cnd_lc_autono.getValue() == "DIRECT") {
          if (!scwin.f_Save_direct()) {
            return false;
          }
        }
        if (scwin.statusFlag == "C") {
          // booking부터 입력
          scwin.f_Save_booking();

          // DBEX: House B/L NO 자동 생성
          if (cnd_ed_hhblno.getValue().length == 4 && cnd_ed_hhblno.getValue() == "DBEX") {
            dma_search.set("hhetd", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "creadyDt"));
            $c.sbm.execute($p, sbm_retrieve_houseBlNo);
            cnd_ed_hhblno.setValue(ds_retrieveNo.getCellData(0, "hhblno"));
          }

          // hblno 자동생성 시 freight에 bl/mh 번호 입력
          for (var i = 0; i < ds_selling_freight.getRowCount(); i++) {
            ds_selling_freight.setCellData(i, "blNo", cnd_ed_hhblno.getValue());
            ds_selling_freight.setCellData(i, "mhno", cnd_lc_mhno.getValue());
          }
          for (var i = 0; i < ds_partner_freight.getRowCount(); i++) {
            ds_partner_freight.setCellData(i, "blNo", cnd_ed_hhblno.getValue());
            ds_partner_freight.setCellData(i, "mhno", cnd_lc_mhno.getValue());
          }
          for (var i = 0; i < ds_buying_freight.getRowCount(); i++) {
            ds_buying_freight.setCellData(i, "blNo", cnd_ed_hhblno.getValue());
            ds_buying_freight.setCellData(i, "mhno", cnd_lc_mhno.getValue());
          }

          // direct start: master b/l 확인용 데이터 구성
          if (cnd_lc_autono.getValue() == "DIRECT") {
            ds_ocDirectMblno_direct.removeAll();
            ds_ocDirectMblno_direct.insertRow(0);
            ds_ocDirectMblno_direct.setCellData(0, "kcomcd", scwin.hd_kcomcd);
            ds_ocDirectMblno_direct.setCellData(0, "hblno", cnd_ed_hhblno.getValue());
            ds_ocDirectMblno_direct.setCellData(0, "mhno", cnd_lc_mhno.getValue());
            ds_ocDirectMblno_direct.setCellData(0, "inpid", scwin.vUserId);
            ds_ocDirectMblno_direct.setCellData(0, "oblno", cnd_ed_hhmblno.getValue());
          }
          // direct end

          // HouseBL 저장 전 필수값 세팅
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhblno", cnd_ed_hhblno.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhbkgseq", lc_hhbkgseq.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "mhno", cnd_lc_mhno.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhisunm", lc_hhisunm.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhpaynm", lc_hhpaynm.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhio", scwin.hd_hhio);
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "inpid", scwin.vUserId);
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhmitem1", "일반화물");

          // Freight 헤더
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "hhblno", cnd_ed_hhblno.getValue());
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "mhno", cnd_lc_mhno.getValue());
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "hhio", scwin.hd_hhio);

          // Container List
          for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
            ds_ocContList.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_ocContList.setCellData(i, "mchblno", cnd_ed_hhblno.getValue());
            ds_ocContList.setCellData(i, "mhno", cnd_lc_mhno.getValue());
            ds_ocContList.setCellData(i, "inpid", scwin.vUserId);
            ds_ocContList.modifyRowStatus(i, "C");
          }

          // EL List
          for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
            ds_ocElList.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_ocElList.setCellData(i, "hhblno", cnd_ed_hhblno.getValue());
            ds_ocElList.setCellData(i, "mhno", cnd_lc_mhno.getValue());
            ds_ocElList.setCellData(i, "inpid", scwin.vUserId);
            ds_ocElList.modifyRowStatus(i, "C");
          }

          // PartnerInfo (0행)
          ds_partnerInfo.setCellData(0, "blno", cnd_ed_hhblno.getValue());
          ds_partnerInfo.setCellData(0, "inpid", scwin.vUserId);
        }

        // 길이 체크(EDI)
        if (scwin.txt_hhs1.length > 100) {
          await $c.win.alert($p, "Shipper명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + scwin.txt_hhs1.length);
          scwin.txt_hhs1.focus();
          return false;
        }
        if (scwin.txt_hhc1.length > 100) {
          await $c.win.alert($p, "Consignee명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + scwin.txt_hhc1.length);
          scwin.txt_hhc1.focus();
          return false;
        }
        if (scwin.txt_hhn1.length > 100) {
          await $c.win.alert($p, "Notify명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + scwin.txt_hhn1.length);
          scwin.txt_hhn1.focus();
          return false;
        }

        // 관리거래처 체크
        dma_clntNo.set("hhactcust", ed_hhactcust.getValue());
        $c.sbm.execute($p, sbm_retrieveMgntClnt);
        if (ds_mgntYn.getCellData(1, "mgntYn") == "Y") {
          await $c.win.alert($p, "해당 Customer는 관리거래처이므로 B/L 발급을 불허합니다.");
          return false;
        }

        // PIC값이 없을때 등록자 ID로 세팅
        if (ed_blpic.getValue() == "") {
          //txt_blpic.setValue("");
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "pic", scwin.vUserId);
        }

        // CURRENCY 미입력 시 기본값
        if (ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "hhcur") == "") {
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "hhcur", "KRW");
        }
        if (ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "hhcurdt") == "") {
          ds_houseblList_freight.setCellData(ds_houseblList_freight.getRowPosition(), "hhcurdt", ed_hhetd.getValue());
        }

        // Shipping Type 기본값
        if (scwin.rd_hhmnfgb == "") {
          scwin.rd_hhmnfgb = "E";
        }

        // 실행
        if (scwin.popUpResult != null && scwin.popUpResult[2] == "Y" && cnd_ed_hhblno.getValue().trim() == scwin.popUpResult[0] && gptYn) {
          $c.sbm.execute($p, sbm_ocrSave);
        } else {
          tr_save.Parameters = "autono=" + cnd_lc_autono.getValue();
          $c.sbm.execute($p, sbm_save);
        }
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["House B/L"]); // 변경된 사항 없음
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //cmd anable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  cnd_ed_hhblno.focus();
  if (scwin.statusFlag == "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    $c.data.undoRow($p, ds_houseblList, "Y");
    $c.data.undoRow($p, ds_partnerInfo, "Y");
    scwin.f_cancelRow(1);
    scwin.f_cancelRow(2);
  }
  scwin.f_Cancel_freight();
  scwin.f_Cancel_booking();
};
scwin.f_custBizChk = function (bilgClntNo) {
  // 변경 후 (params + setJSON + sbm_execute 방식)
  var params = {
    sysCd: "ilCommonEBC",
    queryId: "retrieveCustBiz",
    param1: bilgClntNo,
    param2: "",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: "",
    param11: "",
    param12: "",
    param13: "",
    param14: ""
  };
  ds_CustBizDataSet.removeAll();
  scwin._popTagetDs = ds_CustBizDataSet;
  dma_comCode.setJSON(params);
  $c.sbm.execute($p, sbm_popup);
  return ds_CustBizDataSet;
};

//-------------------------------------------------------------------------------
//  Copy
// 기존의 조회된 HOUSE HEADER정보만을 COPY한다. 저장시 HOUSE NO만 바뀌는 결과.
//-------------------------------------------------------------------------------
scwin.f_Copy = function () {
  // dataset초기화
  scwin.f_FieldClear();
  ds_hmhno.insertRow(0);

  //cmd anable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Set("CREATE");

  //scwin.f_Check();   // 2011.04.04scwin.statusFlag = C:Create 경우와 다른 Check 조건이므로 Block

  cnd_ed_hhblno.setValue("DBEX");
  cnd_ed_hhmblno.setValue("");
  ed_odrNo.setValue("");
  // 2011.04.04scwin.statusFlag = C:Create 경우와 다른 조건 부여
  cnd_lc_autono.Index = 1;
  ed_creadyDt.setValue(""); // 22.04.25 Result Date 공란처리
  txt_hhmitem2.setValue(""); // 22.11.29 EDI ITEM 공란처리

  ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
  ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
  cnd_lc_mhno.Index = 0;
  //-----------------------------------------------

  if (ds_houseblList.getRowCount() != "0") ds_houseblList.modifyRowStatus(ds_houseblList.getRowPosition(), 'C'); // insert 로 변경.

  ds_ocContList.removeAll();
  ds_ocElList.removeAll();
  //dma_retrieve_booking.removeAll();
  ds_retrieveNo_booking.removeAll();

  //scwin.f_setDSHeader( ds_ocContList, "3" );
  //scwin.f_setDSHeader( ds_ocElList, "4" );

  for (var i = 0; i < ds_selling_freight.getRowCount(); i++) {
    ds_selling_freight.setCellData(i, "blNo", "");
    ds_selling_freight.setCellData(i, "certiNo", "");
    ds_selling_freight.setCellData(i, "odrNo", "");
    ds_selling_freight.setCellData(i, "mhno", "NONE");
    ds_selling_freight.setCellData(i, "prtnGrpNo", "");
    ds_selling_freight.setCellData(i, "dcsnClsCd", "");
    ds_selling_freight.setCellData(i, "rsltsStdDt", scwin.strCurDate);
    ds_selling_freight.modifyRowStatus(i, 'C'); // insert 로 변경.
  }
  for (var i = 0; i < ds_partner_freight.getRowCount(); i++) {
    ds_partner_freight.setCellData(i, "blNo", "");
    ds_partner_freight.setCellData(i, "certiNo", "");
    ds_partner_freight.setCellData(i, "odrNo", "");
    ds_partner_freight.setCellData(i, "mhno", "NONE");
    ds_partner_freight.setCellData(i, "prtnGrpNo", "");
    ds_partner_freight.setCellData(i, "dcsnClsCd", "");
    ds_partner_freight.setCellData(i, "rsltsStdDt", scwin.strCurDate);
    ds_partner_freight.modifyRowStatus(i, 'C'); // insert 로 변경.
  }
  for (var i = 0; i < ds_buying_freight.getRowCount(); i++) {
    ds_buying_freight.setCellData(i, "blNo", "");
    ds_buying_freight.setCellData(i, "pchsCertiNo", "");
    ds_buying_freight.setCellData(i, "odrNo", "");
    ds_buying_freight.setCellData(i, "mhno", "NONE");
    ds_buying_freight.setCellData(i, "prtnGrpNo", "");
    ds_buying_freight.setCellData(i, "dcsnClsCd", "");
    ds_buying_freight.setCellData(i, "rsltsStdDt", scwin.strCurDate);
    ds_buying_freight.modifyRowStatus(i, 'C'); // insert 로 변경.
  }
  cnd_ed_hhblno.focus();

  //COPY Consignee -> Customer 복사 기능 추가
  if ("" != ed_hhccd.getValue().trim()) {
    ed_hhactcust.setValue(ed_hhccd.getValue().trim());
    txt_hhactcustnm.setValue(scwin.txt_hhc1.trim());
  } else if ("" != ed_hhncd.getValue().trim()) {
    ed_hhactcust.setValue(ed_hhncd.getValue().trim());
    txt_hhactcustnm.setValue(scwin.txt_hhn1.trim());
  }

  //Partner 코드가 입력되어있을 때, Agent Info를 자동으로 불러오기 위해 추가
  if ("" != ed_hhagent.getValue().trim() && ed_agent.getValue().trim() == "") {
    ed_agent.setValue(ed_hhagent.getValue());
    scwin.f_PopUp("Partner Address", "T");
  }

  //기본으로 등록자 ID 기입 처리
  if (ed_blpic.getValue() == "") {
    ed_blpic.setValue(scwin.vUserId);
    scwin.f_PopUp("B/L PIC", "T");
  }
};
scwin.f_Copy2 = function () {
  // dataset초기화
  scwin.f_FieldClear();
  ds_hmhno.insertRow(0);

  //cmd anable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Set("CREATE");

  //scwin.f_Check();   // 2011.04.04scwin.statusFlag = C:Create 경우와 다른 Check 조건이므로 Block

  cnd_ed_hhblno.setValue("DBEX");
  cnd_ed_hhmblno.setValue("");
  ed_odrNo.setValue("");
  // 2011.04.04scwin.statusFlag = C:Create 경우와 다른 조건 부여
  cnd_lc_autono.Index = 1;
  // 		cnd_lc_mhno.setValue("NONE");
  // 		$c.gus.cfEnableObj(cnd_lc_mhno, true);
  ed_creadyDt.setValue(""); // 22.04.25 Result Date 공란처리
  txt_hhmitem2.setValue(""); // 22.11.29 EDI ITEM 공란처리

  ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
  ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
  cnd_lc_mhno.Index = 0;
  //-----------------------------------------------

  if (ds_houseblList.getRowCount() != "0") ds_houseblList.modifyRowStatus(ds_houseblList.getRowPosition(), 'C'); // insert 로 변경.

  ds_ocContList.removeAll();
  ds_ocElList.removeAll();
  ds_selling_freight.removeAll();
  ds_partner_freight.removeAll();
  ds_buying_freight.removeAll();

  //dma_retrieve_booking.redo();
  ds_retrieveNo_booking.removeAll();
  if ("" != ed_hhscd.getValue().trim()) {
    ed_hhactcust.setValue(ed_hhscd.getValue().trim());
    // 	    	txt_hhactcustnm.setValue(scwin.txt_hhs1.trim());
    txt_hhactcustnm.setValue("");
    scwin.f_PopUp("Customer", "T");
  }

  //Partner 코드가 입력되어있을 때, Agent Info를 자동으로 불러오기 위해 추가
  if ("" != ed_hhagent.getValue().trim() && ed_agent.getValue().trim() == "") {
    ed_agent.setValue(ed_hhagent.getValue());
    scwin.f_PopUp("Partner Address", "T");
  }

  //기본으로 등록자 ID 기입 처리
  if (ed_blpic.getValue() == "") {
    ed_blpic.setValue(scwin.vUserId);
    scwin.f_PopUp("B/L PIC", "T");
  }
};

//---------------------------------------------------------
// 삭제
// 삭제는 저장의 역순으로 지워진다.
//---------------------------------------------------------
scwin.f_Delete = async function () {
  // invoice check
  scwin.f_invoiceCheck(); // invoice Check
  if (scwin.invoiceCheck == "1") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["Invoice No", "delete"]); // @은(는) @할 수 없습니다.
    return;
  }

  // Mhno 존재
  if (cnd_lc_mhno.getValue() != "NONE" && "DIRECT" != cnd_lc_autono.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, ["Document No"]); // 이미 존재하는 @입니다.
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    //삭제하시겠습니까?
    ds_houseblList.DeleteAll(); // 전체삭제.
    //booking
    ds_containerBookingList_booking.removeAll(); // 전체삭제.
    ds_partnerInfo.DeleteAll();
    //freight
    ds_selling_freight.DeleteAll(); // selling 전체삭제.
    ds_partner_freight.DeleteAll(); // partner 전체삭제.
    ds_buying_freight.DeleteAll(); // buying 전체삭제.
    tr_delete.Parameters = "autono=" + cnd_lc_autono.getValue();
    $c.sbm.execute($p, sbm_delete);
    cnd_ed_hhblno.setValue("");
    ds_houseblList.removeAll();
    ds_ocContList.removeAll();
    ds_ocElList.removeAll();
    ds_slipTax.removeAll();
    ds_ocProfitList.removeAll();
    ds_partnerInfo.removeAll();
    ta_hhs.setValue("");
    ta_hhn.setValue("");
    ta_hhc.setValue("");
    txa_agentAdress.setValue("");
    //booking
    ds_containerBookingList_booking.removeAll();
    ds_containerDoorOrder_booking.removeAll();
    ds_containerDoorOrderQty_booking.removeAll();
    ds_containerBookingCont_booking.removeAll();
    //freight
    // dataset초기화
    ds_selling_freight.removeAll();
    ds_partner_freight.removeAll();
    ds_buying_freight.removeAll();

    //cmd anable
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    cnd_ed_hhblno.focus();
    scwin.f_Set("INIT");
  }
};

//null값 체크
scwin.f_IsEmpty = function (value) {
  if (value == null || value.length == 0) {
    return parseFloat(0);
  } else {
    return parseFloat(value);
  }
};

//---------------------------------------------------------
//행추가
//---------------------------------------------------------
scwin.f_addCntr = function (gubun) {
  //   		tr_retrieveCntr.Post();
  var hhcnt1 = scwin.f_IsEmpty(ed_hhcnt1.getValue());
  var hhcnt2 = scwin.f_IsEmpty(ed_hhcnt2.getValue());
  var hhcnt3 = scwin.f_IsEmpty(ed_hhcnt3.getValue());
  var hhcnt4 = scwin.f_IsEmpty(ed_hhcnt4.getValue());
  var hhcnt = parseInt(hhcnt1) + parseInt(hhcnt2) + parseInt(hhcnt3) + parseInt(hhcnt4);
  var hhcnt1type = ed_hhcnt1type.getValue();
  var hhcnt2type = ed_hhcnt2type.getValue();
  var hhcnt3type = ed_hhcnt3type.getValue();
  var hhcnt4type = ed_hhcnt4type.getValue();
  var hhpkg = parseInt(scwin.f_IsEmpty(ed_hhpkg.getValue()) / hhcnt);
  var hhgwgt = (scwin.f_IsEmpty(ed_hhgwgt.getValue()) / hhcnt).toFixed(3);
  var hhmsr = (scwin.f_IsEmpty(ed_hhmsr.getValue()) / hhcnt).toFixed(3);
  var hhpkgSum = 0;
  var hhgwgtSum = 0;
  var hhmsrSum = 0;
  var cntSum = 1;

  //컨테이너 리스트 초기화
  ds_ocContList.removeAll();
  for (var i = 1; i <= hhcnt1; i++) {
    ds_ocContList.insertRow(0);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mchblno", cnd_ed_hhblno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "inpid", scwin.vUserId);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mctype", hhcnt1type);
    if (gubun == "2") {
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkg", hhpkg);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcwgt", hhgwgt);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcmsr", hhmsr);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkgcd", ed_hhunitcd.getValue());
      if (cntSum != hhcnt) {
        hhpkgSum = scwin.f_IsEmpty(hhpkgSum) + scwin.f_IsEmpty(hhpkg);
        hhgwgtSum = scwin.f_IsEmpty(hhgwgtSum) + scwin.f_IsEmpty(hhgwgt);
        hhmsrSum = scwin.f_IsEmpty(hhmsrSum) + scwin.f_IsEmpty(hhmsr);
      }
      cntSum++;
    }
  }
  for (var i = 1; i <= hhcnt2; i++) {
    ds_ocContList.insertRow(0);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mchblno", cnd_ed_hhblno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "inpid", scwin.vUserId);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mctype", hhcnt2type);
    if (gubun == "2") {
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkgcd", ed_hhunitcd.getValue());
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkg", hhpkg);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcwgt", hhgwgt);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcmsr", hhmsr);
      if (cntSum != hhcnt) {
        hhpkgSum = scwin.f_IsEmpty(hhpkgSum) + scwin.f_IsEmpty(hhpkg);
        hhgwgtSum = scwin.f_IsEmpty(hhgwgtSum) + scwin.f_IsEmpty(hhgwgt);
        hhmsrSum = scwin.f_IsEmpty(hhmsrSum) + scwin.f_IsEmpty(hhmsr);
      }
      cntSum++;
    }
  }
  for (var i = 1; i <= hhcnt3; i++) {
    ds_ocContList.insertRow(0);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mchblno", cnd_ed_hhblno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "inpid", scwin.vUserId);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mctype", hhcnt3type);
    if (gubun == "2") {
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkgcd", ed_hhunitcd.getValue());
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkg", hhpkg);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcwgt", hhgwgt);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcmsr", hhmsr);
      if (cntSum != hhcnt) {
        hhpkgSum = scwin.f_IsEmpty(hhpkgSum) + scwin.f_IsEmpty(hhpkg);
        hhgwgtSum = scwin.f_IsEmpty(hhgwgtSum) + scwin.f_IsEmpty(hhgwgt);
        hhmsrSum = scwin.f_IsEmpty(hhmsrSum) + scwin.f_IsEmpty(hhmsr);
      }
      cntSum++;
    }
  }
  for (var i = 1; i <= hhcnt4; i++) {
    ds_ocContList.insertRow(0);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mchblno", cnd_ed_hhblno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "inpid", scwin.vUserId);
    ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mctype", hhcnt4type);
    if (gubun == "2") {
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkgcd", ed_hhunitcd.getValue());
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpkg", hhpkg);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcwgt", hhgwgt);
      ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcmsr", hhmsr);
      if (cntSum != hhcnt) {
        hhpkgSum = scwin.f_IsEmpty(hhpkgSum) + scwin.f_IsEmpty(hhpkg);
        hhgwgtSum = scwin.f_IsEmpty(hhgwgtSum) + scwin.f_IsEmpty(hhgwgt);
        hhmsrSum = scwin.f_IsEmpty(hhmsrSum) + scwin.f_IsEmpty(hhmsr);
      }
      cntSum++;
    }
  }
  if (gubun == "2") {
    ds_ocContList.setCellData(ds_ocContList.getRowCount() - 1, "mcpkg", scwin.f_IsEmpty(ed_hhpkg.getValue()) - hhpkgSum);
    ds_ocContList.setCellData(ds_ocContList.getRowCount() - 1, "mcwgt", scwin.f_IsEmpty(ed_hhgwgt.getValue()) - hhgwgtSum);
    ds_ocContList.setCellData(ds_ocContList.getRowCount() - 1, "mcmsr", scwin.f_IsEmpty(ed_hhmsr.getValue()) - hhmsrSum);
  }
};

//---------------------------------------------------------
//행추가
//---------------------------------------------------------
scwin.f_addRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // Container
      if (cnd_ed_hhblno.getValue() == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
      } else {
        ds_ocContList.insertRow(0);
        ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
        ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mchblno", cnd_ed_hhblno.getValue()); //update일때.
        ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
        ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "inpid", scwin.vUserId);
        ds_ocContList.setCellData(ds_ocContList.getRowPosition(), "mcpart", "N");
        gr_ocContList.focus();
        gr_ocContList.setColumn("mccntno"); // forcus
      }
      break;
    case 2:
      // El
      if (cnd_ed_hhblno.getValue() == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
      } else {
        ds_ocElList.insertRow(0);
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "hhblno", cnd_ed_hhblno.getValue()); //update일때.
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "mhno", cnd_lc_mhno.getValue()); //update일때.
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "inpid", scwin.vUserId);
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "pgb", "N");
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "pkg", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhpkg"));
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "unit", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhunitcd"));
        ds_ocElList.setCellData(ds_ocElList.getRowPosition(), "wgt", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhgwgt"));
        gr_ocElList.focus();
        gr_ocElList.setColumn("elno"); // forcus
      }
      break;
    default:
      break;
  }
};

//---------------------------------------------------------
// 행삭제
//---------------------------------------------------------
scwin.f_deleteRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // Container
      ds_ocContList.deleteRow(ds_ocContList.getRowPosition());
      break;
    case 2:
      // El
      ds_ocElList.deleteRow(ds_ocElList.getRowPosition());
      break;
    default:
      break;
  }
};
//---------------------------------------------------------
// 행취소
//---------------------------------------------------------
scwin.f_cancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // Container
      ds_ocContList.undoAll();
      break;
    case 2:
      // El
      ds_ocElList.undoAll();
      break;
    default:
      break;
  }
};

//---------------------------------------------------------
// function name : f_validate
// function desc :
//---------------------------------------------------------
scwin.f_validate = async function () {
  // VALIDATE
  if (!$c.gus.cfValidate($p, [ed_hhetd, ed_hhondt, ed_hheta, ed_hhisudt, ed_creadyDt])) {
    //validExp 가 yes일때 check
    return false;
  }
  if (ed_hhetd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["ETD"]); //@는 필수입력항목입니다.
    // 	    	tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    scwin.f_selectTabMenu(0);
    ed_hhetd.focus();
    return false;
  }

  //22.04.25 Result Date 필수값으로 설정
  if (ed_creadyDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Result Date"]); //@는 필수입력항목입니다.
    scwin.f_selectTabMenu(0);
    ed_creadyDt.focus();
    return false;
  }

  // 날짜 범위 확인
  if (ed_hheta.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_hhetd.getValue(), ed_hheta.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, new Array("ETD", "ETA")); //@은(는) 보다 작아야 합니다.
      // 				tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      scwin.f_selectTabMenu(0);
      ed_hhetd.focus();
      return false;
    }
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_hhetd.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hhetd.focus();
    return false;
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_hheta.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hheta.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if ($c.gus.cfYearsBetween($p, ed_hhetd.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hhetd.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if ($c.gus.cfYearsBetween($p, ed_hheta.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hheta.focus();
    return false;
  }

  //ETA-ETD(transit time)가 150일을 초과할 수 없다.  *150일(총 운항DATE 수) : ETA날짜에서 ETD날짜를 빼고 +1 한 날짜
  if ($c.gus.cfDaysBetween($p, ed_hhetd.getValue(), ed_hheta.getValue()) > 149) {
    await $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    tac_tabMain.setSelectedTabIndex(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hhetd.focus();
    return false;
  }
  if (ed_hhactcust.getValue() == "" || ed_hhactcust.getValue() == "999908") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer"]); //@는 필수입력항목입니다.
    // 	    	tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    scwin.f_selectTabMenu(0);
    ed_hhactcust.focus();
    return false;
  }
  if (ed_hhbuyer.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Department"]); //@는 필수입력항목입니다.
    // 	    	tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    scwin.f_selectTabMenu(0);
    ed_hhbuyer.focus();
    return false;
  }
  if (txt_hhmitem2.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["EDI Item"]); //@는 필수입력항목입니다.
    //             $c.gus.cfViewTab(1);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    scwin.f_selectTabMenu(1);
    txt_hhmitem2.focus();
    return false;
  }

  // 신규시 DBEX가 아닌 DBEXxxxxx로 생성 못함.
  if (scwin.statusFlag == "C") {
    if (cnd_ed_hhblno.getValue().length != 4 && cnd_ed_hhblno.GetSelText(0, 4) == "DBEX") {
      // 				$c.gus.cfAlertMsg(MSG_CM_ERR_026, ["Auto Create","DBEX"]);   // @은(는) '@' 형식이어야 합니다.
      // 				cnd_ed_hhblno.focus();
      // 				return false;
    }
  }
  ds_customerInfo.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCustomerInfo&param1=" + ed_hhactcust.getValue().trim();
  ds_customerInfo.Reset();
  if (ds_customerInfo.getRowCount() > 0) {
    if (ed_hhbuyer.getValue() != ds_customerInfo.getCellData(ds_customerInfo.getRowPosition(), "col1")) {
      $c.gus.cfAlertMsg($p, MSG_LO_WRN_007);
      tac_tabMain.setSelectedTabIndex(0);
      ed_hhbuyer.focus();
      return false;
    }
  }

  // Container Type dual check
  if (!scwin.f_containerDualCheck()) return false;

  // Container Type value check
  if (ed_hhcnt1type.getValue() != "") {
    var STR = ds_containerType.getCellData(1, ed_hhcnt1type.getValue());
    if (STR == "0") {
      // 값이 없을때
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
      // 		    	 tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      scwin.f_selectTabMenu(0);
      ed_hhcnt1type.focus();
      return false;
    }
  }

  // Container Type value check
  if (ed_hhcnt2type.getValue() != "") {
    var STR = ds_containerType.getCellData(1, ed_hhcnt2type.getValue());
    if (STR == "0") {
      // 값이 없을때
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
      // 		    	 tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      scwin.f_selectTabMenu(0);
      ed_hhcnt2type.focus();
      return false;
    }
  }

  // Container Type value check
  if (ed_hhcnt3type.getValue() != "") {
    var STR = ds_containerType.getCellData(1, ed_hhcnt3type.getValue());
    if (STR == "0") {
      // 값이 없을때
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
      // 		    	 tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      scwin.f_selectTabMenu(0);
      ed_hhcnt3type.focus();
      return false;
    }
  }

  // Container Type value check
  if (ed_hhcnt4type.getValue() != "") {
    var STR = ds_containerType.getCellData(1, ed_hhcnt4type.getValue());
    if (STR == "0") {
      // 값이 없을때
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
      // 		    	 tac_tabMain.setSelectedTabIndex(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      scwin.f_selectTabMenu(0);
      ed_hhcnt4type.focus();
      return false;
    }
  }

  // Container
  var checked = 0;
  for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
    if (ds_ocContList.getCellData(i, "mccntno") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Container"]); //@는 필수입력항목입니다.
      gr_ocContList.focus();
      gr_ocContList.setColumn("mccntno"); // forcus
      return false;
    }
    checked++;
  }

  // Container Type
  var checked = 0;
  for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
    if (ds_ocContList.getCellData(i, "mctype") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Container Type"]); //@는 필수입력항목입니다.
      gr_ocContList.focus();
      gr_ocContList.setColumn("mctype"); // forcus
      return false;
    }
    checked++;
  }

  // 수출신고번호
  var checked = 0;
  v_elno = "";
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "elno") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수출신고번호"]); //@는 필수입력항목입니다.
      gr_ocElList.focus();
      gr_ocElList.setColumn("elno"); // forcus
      return false;
    }
    checked++;
  }

  // unit
  var checked = 0;
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "unit") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Unit"]); //@는 필수입력항목입니다.
      gr_ocElList.focus();
      gr_ocElList.setColumn("unit"); // forcus
      return false;
    }
    checked++;
  }

  // Package
  var checked = 0;
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "pkg") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Package"]); //@는 필수입력항목입니다.
      gr_ocElList.focus();
      gr_ocElList.setColumn("pkg"); // forcus
      return false;
    }
    checked++;
  }
  // Weight
  var checked = 0;
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "wgt") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Weight"]); //@는 필수입력항목입니다.
      gr_ocElList.focus();
      gr_ocElList.setColumn("wgt"); // forcus
      return false;
    }
    checked++;
  }

  // 포장기호
  var checked = 0;
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "mgb") != "") {
      if (ds_ocElList.getCellData(i, "mpkg") == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["package"]); //@는 필수입력항목입니다.
        gr_ocElList.focus();
        gr_ocElList.setColumn("mpkg"); // forcus
        return false;
      }
      if (ds_ocElList.getCellData(i, "mut") == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Unit"]); //@는 필수입력항목입니다.
        gr_ocElList.focus();
        gr_ocElList.setColumn("mut"); // forcus
        return false;
      }
    }
    checked++;
  }
  // 분할
  var checked = 0;
  for (var i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "pgb") == "Y") {
      if (ds_ocElList.getCellData(i, "pseq") == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["ISO"]); //@는 필수입력항목입니다.
        gr_ocElList.focus();
        gr_ocElList.setColumn("pseq"); // forcus
        return false;
      }
    }
    checked++;
  }

  // Cargo Type Check
  if (lc_hhbltype.getValue() == "B" && (ed_hhcnt1.getValue() != "0" || ed_hhcnt2.getValue() != "0" || ed_hhcnt3.getValue() != "0" || ed_hhcnt4.getValue() != "0")) {
    var msg = "Cargo Type이 Bulk 이면서 Container정보가 입력되었습니다.\n입력된 정보가 맞으시면 확인처리 해 주십시오.";
    if (!(await $c.win.confirm($p, msg))) {
      ed_hhcnt1.focus();
      return false;
    }
  }

  //EDI ITEM 글자수 및 특수문자 여부 CHECK
  if (!$c.gus.cf_ChkInputOnlyNumberAndAlphabet($p, txt_hhmitem2.getValue())) {
    await $c.win.alert($p, "EDI ITEM에 특수문자만 입력은 불가능합니다.");
    return false;
  }
  if ($c.gus.cfGetByteLength($p, txt_hhmitem2.getValue()) < 2) {
    await $c.win.alert($p, "EDI ITEM에 2글자 이상을 입력하셔야합니다.");
    return false;
  }
  if ($c.gus.cfGetByteLength($p, scwin.txt_addr1) >= 47 || $c.gus.cfGetByteLength($p, scwin.txt_addr2) >= 47 || $c.gus.cfGetByteLength($p, scwin.txt_addr3) >= 47 || $c.gus.cfGetByteLength($p, scwin.txt_addr4) >= 47 || $c.gus.cfGetByteLength($p, scwin.txt_addr5) >= 47) {
    await $c.win.alert($p, "Agent Info의 글자수가 너무 깁니다. \nBL 출력시 칸을 초과할 수 있습니다.");
    return false;
  }
  return true;
};
scwin._popTagetDs = null;
scwin.f_postDtChk = function (odrNo, sellSeq, kcomcd, seaAirCls, blNo, mhno) {
  var params = {
    sysCd: sysCd || "ilCommonEBC",
    queryId: "retrievePostDt",
    param1: odrNo,
    param2: sellSeq,
    param3: kcomcd,
    param4: seaAirCls,
    param5: blNo,
    param6: mhno,
    param7: "",
    param8: "",
    param9: "",
    param10: "",
    param11: "",
    param12: "",
    param13: "",
    param14: ""
  };
  ds_PostDtDataSet.removeAll();
  scwin._popTagetDs = ds_PostDtDataSet;
  dma_comCode.setJSON(params);
  $c.sbm.execute($p, sbm_popup);
  return ds_PostDtDataSet;
};
scwin.sbm_popup_submitdone = function (e) {
  if (scwin._popTagetDs != null) {
    dl.setJSON(e.responseJSON.GAUCE);
  }
};
scwin.f_FreightValidate = async function () {
  // 저장전 freight list 유효성 CHECK

  // 공통: 내부거래 확정 체크
  async function checkPosted(ds, seqCol, listName, rowIdx) {
    // 삭제 상태인 행만 체크
    if (ds.getRowStatus(rowIdx) == "D") {
      scwin.f_postDtChk(ds.getCellData(rowIdx, "odrNo"), ds.getCellData(rowIdx, seqCol), ds.getCellData(rowIdx, "kcomcd"), ds.getCellData(rowIdx, "seaAirCls"), ds.getCellData(rowIdx, "blNo"), ds.getCellData(rowIdx, "mhno"));

      // GAUCE: NameString(1,"col1") -> WebSquare: 0행
      var isPostDt = ds_PostDtDataSet.getCellData(0, "col1");
      if (String(isPostDt || "") != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \n" + listName + " " + (rowIdx + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
    return true;
  }

  // -------------------------
  // 1) Selling
  // -------------------------
  for (var i = ds_selling_freight.getRowCount() - 1; i >= 0; i--) {
    var fare = String(ds_selling_freight.getCellData(i, "fareEngCd") || "");
    var amt = Number(ds_selling_freight.getCellData(i, "sellAmt") || 0);

    // F/CODE 공란 + AMOUNT 0 => 삭제
    if (fare == "" && amt == 0) {
      ds_selling_freight.deleteRow(i);
      continue;
    }

    // F/CODE 있고 AMOUNT 0 => 경고
    if (fare != "" && amt == 0) {
      await $c.win.alert($p, "Selling List의 " + (i + 1) + "행의 AMOUNT(\\)값이 공란입니다.");
      return false;
    }

    // 삭제 상태 내부거래 체크
    if (!(await checkPosted(ds_selling_freight, "sellSeq", "Selling List", i))) return false;
  }

  // -------------------------
  // 2) Partner
  // -------------------------
  for (var i = ds_partner_freight.getRowCount() - 1; i >= 0; i--) {
    var fare = String(ds_partner_freight.getCellData(i, "fareEngCd") || "");
    var amt = Number(ds_partner_freight.getCellData(i, "sellAmt") || 0);

    // F/CODE 공란 + AMOUNT 0 => 삭제
    if (fare == "" && amt == 0) {
      ds_partner_freight.deleteRow(i);
      continue;
    }

    // F/CODE 있고 AMOUNT 0 => 경고
    if (fare != "" && amt == 0) {
      await $c.win.alert($p, "Partner List의 " + (i + 1) + "행의 AMOUNT(\\)값이 공란입니다.");
      return false;
    }

    // 삭제 상태 내부거래 체크
    if (!(await checkPosted(ds_partner_freight, "sellSeq", "Partner List", i))) return false;
  }

  // -------------------------
  // 3) Buying
  // -------------------------
  for (var i = ds_buying_freight.getRowCount() - 1; i >= 0; i--) {
    var fare = String(ds_buying_freight.getCellData(i, "fareEngCd") || "");
    var amt = Number(ds_buying_freight.getCellData(i, "pchsAmt") || 0);

    // F/CODE 공란 + AMOUNT 0 => 삭제
    if (fare == "" && amt == 0) {
      ds_buying_freight.deleteRow(i);
      continue;
    }

    // F/CODE 있고 AMOUNT 0 => 경고
    if (fare != "" && amt == 0) {
      await $c.win.alert($p, "Buying List의 " + (i + 1) + "행의 AMOUNT(\\)값이 공란입니다.");
      return false;
    }

    // 삭제 상태 내부거래 체크 (Buying은 seq 컬럼이 pchsSeq)
    if (!(await checkPosted(ds_buying_freight, "pchsSeq", "Buying List", i))) return false;
  }
  return true;
};

//---------------------------------------------------------
// 공통팝업 열기 (GAUCE f_OpenCommonPopUp + f_PopUp 통합 WebSquare 버전)
// udc_ilcomCode 기반, 콜백/타겟 덮어쓰기 방지 안정화 버전
//---------------------------------------------------------
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // -------------------------
  // util
  // -------------------------
  function getVal(comp) {
    if (!comp) return "";
    if (typeof comp.getValue === "function") return String(comp.getValue() || "").trim();
    // 일부 컴포넌트 fallback
    return String(comp.getValue() || "").trim();
  }
  function setVal(comp, v) {
    if (!comp) return;
    if (typeof comp.setValue === "function") comp.setValue(v);else comp.setValue(v);
  }

  // rtnList normalize: 단건/다건/객체형 대응
  function normalizeRtn(rtnList) {
    if (!rtnList || rtnList === "N/A") return null;

    // {list:[...]} 형태
    if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;

    // 다건 선택: [[...],[...]] -> 첫 행 사용(프로젝트 규칙에 맞게 변경 가능)
    if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) {
      return rtnList[0];
    }

    // 단건 배열: [...]
    if (Array.isArray(rtnList)) return rtnList;

    // 객체형 {code,name,...}
    var arr = [];
    if (rtnList.code != null) arr[0] = rtnList.code;
    if (rtnList.name != null) arr[1] = rtnList.name;
    return arr.length ? arr : null;
  }

  // 공통 팝업 호출 래퍼
  function openCommon(args) {
    // 콜백을 "호출마다" 새로 생성하여 targets 덮어쓰기 방지
    var onReturn = function (rtnList) {
      var r = normalizeRtn(rtnList);
      if (!r) {
        // 필요 시 “선택 취소/데이터 없음” 처리
        if (typeof args.onEmpty === "function") args.onEmpty();
        return;
      }

      // 기본 세팅
      setVal(args.codeComp, r[0] || "");
      if (args.nameComp) setVal(args.nameComp, r[1] || "");

      // extra 세팅 (Address 등)
      if (args.extraComps && args.extraComps.length) {
        for (var i = 0; i < args.extraComps.length; i++) {
          setVal(args.extraComps[i], r[2 + i] || "");
        }
      }
      if (typeof args.afterFn === "function") args.afterFn(r);
    };

    // selectId 세팅
    udc_ilcomCode.setSelectId(args.selectId);

    // 호출
    udc_ilcomCode.ilCommonPopUp(onReturn,
    // ★ 콜백 직접 전달(덮어쓰기 X)
    getVal(args.codeComp),
    // code
    args.nameComp ? getVal(args.nameComp) : "",
    // name
    args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || pNoDataCloseTF || "");
  }

  // -------------------------
  // 공통: ContainerType 1~4
  // -------------------------
  function openContainerType(codeComp) {
    openCommon({
      selectId: "retriveContainerTypeCodeInfo",
      codeComp: codeComp,
      nameComp: null,
      winCloseTF: pWinCloseTF,
      colCnt: "2",
      titles: "Code, Name",
      widths: "80,230",
      hideCols: "3,4,5,6,7,8,9,10",
      allTF: pAllSearchTF,
      winTitle: "Type,Code,Name",
      noDataTF: "F",
      onEmpty: function () {
        setVal(codeComp, "");
      }
    });
  }

  // -------------------------
  // switch by gubun
  // -------------------------
  switch (gubun1) {
    // -------------------------
    // f_OpenCommonPopUp 쪽 케이스
    // -------------------------
    case "Vessel":
      openCommon({
        selectId: "retrieveOrdVsslInfo",
        codeComp: ed_hhvslcd,
        nameComp: txt_hhvsl,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Vessel,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhvslcd, "");
          setVal(txt_hhvsl, "");
        }
      });
      break;
    case "Loading":
      openCommon({
        selectId: "retrievePortInfo",
        codeComp: ed_hhlodcd,
        nameComp: txt_hhlodnm,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Loading,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhlodcd, "");
          setVal(txt_hhlodnm, "");
        }
      });
      break;
    case "Discharge":
      openCommon({
        selectId: "retrievePortInfo",
        codeComp: ed_hhdisccd,
        nameComp: txt_hhdiscnm,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Discharge,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhdisccd, "");
          setVal(txt_hhdiscnm, "");
        }
      });
      break;
    case "Unit":
      openCommon({
        selectId: "retrieveCommCdInfo",
        codeComp: ed_hhunitcd,
        nameComp: txt_hhunit,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "IL002",
        allTF: pAllSearchTF,
        winTitle: "Unit,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhunitcd, "");
          setVal(txt_hhunit, "");
        }
      });
      break;
    case "Salesman":
      openCommon({
        selectId: "retrieveEmpInfo",
        codeComp: ed_hhsales,
        nameComp: txt_hhsalesnm,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Salesman,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhsales, "");
          setVal(txt_hhsalesnm, "");
        }
      });
      break;
    case "DEPT":
      openCommon({
        selectId: "retrieveOpDeptCdInfo",
        codeComp: ed_hhbuyer,
        nameComp: txt_hhbuyernm,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "DEPT,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhbuyer, "");
          setVal(txt_hhbuyernm, "");
        }
      });
      break;
    case "Receipt":
      openCommon({
        selectId: "retrievePortInfo",
        codeComp: ed_hhrcvcd,
        nameComp: txt_hhrcvnm,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Receipt,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhrcvcd, "");
          setVal(txt_hhrcvnm, "");
        }
      });
      break;
    case "Delivery":
      openCommon({
        selectId: "retrievePortInfo",
        codeComp: ed_hhdlvcd,
        nameComp: txt_hhdlvnm,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Delivery,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhdlvcd, "");
          setVal(txt_hhdlvnm, "");
        }
      });
      break;
    case "Destination":
      openCommon({
        selectId: "retrievePortInfo",
        codeComp: ed_hhfdcd,
        nameComp: txt_hhfdnm,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Destination,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_hhfdcd, "");
          setVal(txt_hhfdnm, "");
        }
      });
      break;
    case "Item":
      openCommon({
        selectId: "retrieveCommGoodsInfo",
        codeComp: scwin.ed_hhitem,
        nameComp: scwin.txt_hhmitem1,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Item,Code,Name",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(scwin.ed_hhitem, "");
          setVal(scwin.txt_hhmitem1, "");
        }
      });
      break;
    case "ContainerType1":
      openContainerType(ed_hhcnt1type);
      break;
    case "ContainerType2":
      openContainerType(ed_hhcnt2type);
      break;
    case "ContainerType3":
      openContainerType(ed_hhcnt3type);
      break;
    case "ContainerType4":
      openContainerType(ed_hhcnt4type);
      break;
    case "Mware":
      openCommon({
        selectId: "retrieveWareHouseInfo",
        codeComp: ed_mwarecd,
        nameComp: txt_mwarenm,
        winCloseTF: pWinCloseTF,
        colCnt: "3",
        titles: "CODE, NAME, ENG CODE",
        widths: "130,180,90",
        hideCols: "4,5,6,7,8,9,10",
        winW: "500",
        winH: "500",
        allTF: pAllSearchTF,
        winTitle: "WARE HOUSE INFO, CODE, NAME",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // r[0]=CODE, r[1]=NAME, r[2]=ENG CODE
          // (과거 ds_houseblList 세팅하던 로직을 WebSquare 방식으로 유지하려면 아래처럼 DataList에 set)
          if (typeof ds_houseblList !== "undefined" && ds_houseblList) {
            var rp = ds_houseblList.getRowPosition ? ds_houseblList.getRowPosition() : 0;
            if (rp < 0) rp = 0;
            ds_houseblList.setCellData(rp, "mwarecd", r[0] || "");
            ds_houseblList.setCellData(rp, "mwarenm", r[1] || "");
            ds_houseblList.setCellData(rp, "mwareEngCd", r[2] || "");
          }
        },
        onEmpty: function () {
          if (typeof ds_houseblList !== "undefined" && ds_houseblList) {
            var rp = ds_houseblList.getRowPosition ? ds_houseblList.getRowPosition() : 0;
            if (rp < 0) rp = 0;
            ds_houseblList.setCellData(rp, "mwarecd", "");
            ds_houseblList.setCellData(rp, "mwarenm", "");
            ds_houseblList.setCellData(rp, "mwareEngCd", "");
          }
        }
      });
      break;

    // -------------------------
    // f_PopUp 쪽 케이스 (Shipper/Consignee/Notify/Partner/...)
    // -------------------------
    case "Shipper":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhscd,
        nameComp: scwin.txt_hhs1,
        extraComps: [scwin.txt_hhs2, scwin.txt_hhs3, scwin.txt_hhs4, txt_hhs5],
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Shipper search,Shipper Code,Shipper Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // textarea 구성: ds 읽지 말고 r 배열 사용
          if (typeof ta_hhs !== "undefined" && ta_hhs) {
            ta_hhs.setValue((r[1] || "") + "\n" + (r[2] || "") + "\n" + (r[3] || "") + "\n" + (r[4] || "") + "\n" + (r[5] || ""));
          }
        }
      });
      break;
    case "Consignee":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhccd,
        nameComp: scwin.txt_hhc1,
        extraComps: [scwin.txt_hhc2, scwin.txt_hhc3, scwin.txt_hhc4, scwin.txt_hhc5],
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Consignee search,Consignee Code,Consignee Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          if (typeof ta_hhc !== "undefined" && ta_hhc) {
            ta_hhc.setValue((r[1] || "") + "\n" + (r[2] || "") + "\n" + (r[3] || "") + "\n" + (r[4] || "") + "\n" + (r[5] || ""));
          }
          if (typeof scwin.f_ContractInfo_booking === "function") scwin.f_ContractInfo_booking();
        }
      });
      break;
    case "Notify":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhncd,
        nameComp: scwin.txt_hhn1,
        extraComps: [scwin.txt_hhn2, scwin.txt_hhn3, scwin.txt_hhn4, scwin.txt_hhn5],
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Notify search,Notify Code,Notify Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          if (typeof ta_hhn !== "undefined" && ta_hhn) {
            ta_hhn.setValue((r[1] || "") + "\n" + (r[2] || "") + "\n" + (r[3] || "") + "\n" + (r[4] || "") + "\n" + (r[5] || ""));
          }
        }
      });
      break;
    case "Partner":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhagent,
        nameComp: txt_hhagentnm,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Partner search,Partner Code,Partner Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // attn 초기화
          scwin.ed_hhagentattn = "";
          scwin.txt_hhagentattnnm = "";

          // 주소 세팅(AS-IS: ed_agent + scwin.txt_addr1~5)
          if (getVal(ed_hhagent) !== "") {
            if (typeof ed_agent !== "undefined") ed_agent.setValue(r[0] || "");
            scwin.txt_addr1 = "";
            scwin.txt_addr2 = "";
            scwin.txt_addr3 = "";
            scwin.txt_addr4 = "";
            scwin.txt_addr5 = "";
            if (typeof txa_agentAdress !== "undefined" && txa_agentAdress) {
              txa_agentAdress.setValue((r[2] || "") + "\n" + (r[3] || "") + "\n" + (r[4] || "") + "\n" + (r[5] || "") + "\n" + (r[6] || ""));
            }
          }
        }
      });
      break;
    case "PartnerPic":
      openCommon({
        selectId: "retrieveClntPicInfo",
        codeComp: scwin.ed_hhagentattn,
        nameComp: scwin.txt_hhagentattnnm,
        winCloseTF: pWinCloseTF,
        colCnt: "4",
        titles: "Partner PIC",
        widths: "100,350",
        whereOpt: getVal(ed_hhagent),
        // pParam
        allTF: "T",
        winTitle: "",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // 필요 시 ed_hhagent 유지/검증
          // r[0]=code, r[1]=name 가정
        },
        onEmpty: function () {
          setVal(scwin.ed_hhagentattn, "");
          setVal(scwin.txt_hhagentattnnm, "");
        }
      });
      break;
    case "Customer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhactcust,
        nameComp: txt_hhactcustnm,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Customer search,Customer Code,Customer Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // Modified 체크는 WebSquare에선 보통 “이전값 비교”로 처리
          // 여기선 AS-IS 의 후속 처리만 안전하게 호출
          if (getVal(ed_hhactcust) !== "") {
            if (typeof scwin.f_customerInfo === "function") scwin.f_customerInfo(getVal(ed_hhactcust));
          }
          if (typeof scwin.f_ContractInfo_booking === "function") scwin.f_ContractInfo_booking();

          // attn 초기화
          scwin.ed_hhactattn = "";
          scwin.txt_hhactattnnm = "";
        },
        onEmpty: function () {
          setVal(ed_hhactcust, "");
          setVal(txt_hhactcustnm, "");
          scwin.ed_hhactattn = "";
          scwin.txt_hhactattnnm = "";
        }
      });
      break;
    case "CustomerPic":
      openCommon({
        selectId: "retrieveClntPicInfo",
        codeComp: scwin.ed_hhactattn,
        nameComp: scwin.txt_hhactattnnm,
        winCloseTF: pWinCloseTF,
        colCnt: "4",
        titles: "Customer PIC",
        widths: "100,350",
        whereOpt: getVal(ed_hhactcust),
        // pParam
        allTF: "T",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(scwin.ed_hhactattn, "");
          setVal(scwin.txt_hhactattnnm, "");
        }
      });
      break;
    case "Liner":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_hhliner,
        nameComp: txt_hhlinernm,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Liner search,Liner Code,Liner Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          // attn 초기화
          scwin.ed_hhlinerattn = "";
          scwin.txt_hhlinerattnnm = "";
        }
      });
      break;
    case "LinerPic":
      openCommon({
        selectId: "retrieveClntPicInfo",
        codeComp: scwin.ed_hhlinerattn,
        nameComp: scwin.txt_hhlinerattnnm,
        winCloseTF: pWinCloseTF,
        colCnt: "4",
        titles: "Liner PIC",
        widths: "100,350",
        whereOpt: getVal(ed_hhliner),
        allTF: "T",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(scwin.ed_hhlinerattn, "");
          setVal(scwin.txt_hhlinerattnnm, "");
        }
      });
      break;
    case "B/L PIC":
      openCommon({
        selectId: "retrieveEmpInfo",
        codeComp: ed_blpic,
        nameComp: txt_blpic,
        winCloseTF: "T",
        colCnt: "4",
        titles: "B/L PIC",
        widths: "100,350",
        allTF: "F",
        noDataTF: pNoDataCloseTF,
        onEmpty: function () {
          setVal(ed_blpic, "");
          setVal(txt_blpic, "");
        }
      });
      break;
    case "Partner Address":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeComp: ed_agent,
        nameComp: txt_hhagentnm,
        // AS-IS 구조 유지
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: "F",
        winTitle: "Partner search,Partner Code,Partner Name",
        noDataTF: pNoDataCloseTF,
        afterFn: function (r) {
          scwin.txt_addr1 = "";
          scwin.txt_addr2 = "";
          scwin.txt_addr3 = "";
          scwin.txt_addr4 = "";
          scwin.txt_addr5 = "";
          if (typeof txa_agentAdress !== "undefined" && txa_agentAdress) {
            txa_agentAdress.setValue((r[2] || "") + "\n" + (r[3] || "") + "\n" + (r[4] || "") + "\n" + (r[5] || "") + "\n" + (r[6] || ""));
          }
        }
      });
      break;
    default:
      // 알 수 없는 구분은 경고만
      if (typeof $c !== "undefined" && $c.win && $c.win.alert) {
        $c.win.alert($p, "지원하지 않는 공통팝업 구분: " + gubun1);
      }
      break;
  }
};

//---------------------------------------------------------
// 기존 GAUCE 함수명 호환용 alias
// (기존 코드에서 f_PopUp / f_OpenCommonPopUp 호출하던 걸 그대로 살림)
//---------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  // GAUCE의 chgGubun을 pWinCloseTF로 매핑(원본 의미: 결과1건 시 AutoClose)
  // 전체검색허용/NoDataClose는 원본에 따라 기본값 부여
  scwin.f_OpenCommonPopUp(disGubun, chgGubun, "F", "F");
};

//-------------------------------------------------------------------------
// 화면이동 (WebSquare) - 통합/리팩토링
//  - GAUCE: cfTabMenuUpdate + jsp querystring  → WebSquare: $c.win.openMenu
//  - 공통 파라미터(commonParam)로 중복 제거
//  - MasterBL / SR / Freight / HouseBLPrint 등 linkcheck 분기 포함
//  - 존재체크(if cnd_... ) 제거: 무조건 존재 가정
//-------------------------------------------------------------------------

// 메뉴 오픈 공통 헬퍼
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};

// 공통 파라미터(Partner/Invoice/Profit/PaymentINV에서 공통)
scwin._getCommonParam = function () {
  return {
    kcomcd: scwin.hd_kcomcd || "",
    seaair: "S",
    // sea:S, air:A
    iogb: scwin.hd_hhio,
    // out:O, in:I
    blno: cnd_ed_hhblno.getValue(),
    // house blno
    mblno: "",
    // master blno
    mhno: cnd_lc_mhno.getValue() // mhno
  };
};

//-------------------------------------------------------------------------
// 화면이동 1) f_openPgm (GAUCE 원본 변환 + 리팩토링)
//-------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  var commonParam = scwin._getCommonParam();
  if (name == "MasterBL") {
    // GAUCE: mhno == "NONE" 이면 linkcheck=5 + vslcd/vsl/vyg, 아니면 linkcheck=3 + blno/mhno
    var mhno = cnd_lc_mhno.getValue();
    if (mhno == "NONE") {
      scwin._openMenu("Export Master B/L", "/ui/il/seaout/sobl/se_106_01_04b.xml", "se_106_01_04b.xml", {
        linkcheck: "5",
        kcomcd: scwin.hd_kcomcd || "",
        vslcd: ed_hhvslcd.getValue(),
        vsl: txt_hhvsl.getValue(),
        vyg: txt_hhvyg.getValue()
      });
    } else {
      scwin._openMenu("Export Master B/L", "/ui/il/seaout/sobl/se_106_01_04b.xml", "se_106_01_04b.xml", {
        linkcheck: "3",
        kcomcd: scwin.hd_kcomcd || "",
        blno: cnd_ed_hhblno.getValue(),
        mhno: mhno
      });
    }
  } else if (name == "SR") {
    scwin._openMenu("Shipping Request", "/ui/il/seaout/sosr/se_116_01_01b.xml", "se_116_01_01b.xml", {
      linkcheck: "1",
      kcomcd: scwin.hd_kcomcd || "",
      blno: cnd_ed_hhblno.getValue()
    });
  } else if (name == "Partner") {
    scwin._openMenu("Partner Statement", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", commonParam);
  } else if (name == "Invoice") {
    scwin._openMenu("Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", commonParam);
  } else if (name == "Profit") {
    scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", commonParam);
  } else if (name == "Freight") {
    scwin._openMenu("Export House B/L Freight", "/ui/il/seaout/sobl/se_105_01_04b.xml", "se_105_01_04b.xml", {
      linkcheck: "5",
      kcomcd: scwin.hd_kcomcd || "",
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name == "HouseBLFind") {
    scwin._openMenu("House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.xml", {
      hhio: scwin.hd_hhio
    });
  } else if (name == "HouseBLPrint") {
    scwin._openMenu("House B/L Print", "/ui/il/seaout/sobl/se_105_01_03b.xml", "se_105_01_03b.xml", {
      linkcheck: "5",
      kcomcd: scwin.hd_kcomcd || "",
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  }
};

//-------------------------------------------------------------------------
// 화면이동 2) f_openPgm_freight (기존 변환본 + 리팩토링)
//-------------------------------------------------------------------------
scwin.f_openPgm_freight = function (name) {
  var commonParam = scwin._getCommonParam();
  if (name == "Partner") {
    scwin._openMenu("Partner Statement", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", commonParam);
  } else if (name == "Invoice") {
    scwin._openMenu("Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", commonParam);
  } else if (name == "Profit") {
    scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", commonParam);
  } else if (name == "HouseBLFind") {
    scwin._openMenu("House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.xml", {
      hhio: scwin.hd_hhio
    });
  } else if (name == "HouseBLHeader") {
    scwin._openMenu("Export House B/L", "/ui/il/seaout/sobl/se_105_01_01b.xml", "se_105_01_01b.xml", {
      linkcheck: "2",
      kcomcd: scwin.hd_kcomcd || "",
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name == "paymentINV") {
    scwin._openMenu("Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd || "",
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  }
};

//-------------------------------------------------------------------------
// 공통 팝업 오픈 유틸 (CodeBuilder _openPopup)
// - modal 미지원 환경 대응: _openPopup 사용
// - Promise 반환으로 await 지원
//-------------------------------------------------------------------------
scwin._popupId = function (url) {
  var base = String(url || "popup").split("?")[0].split("/").pop() || "popup";
  base = base.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9_]/g, "_");
  return "pop_" + base + "_" + Date.now();
};
scwin._openPopup = function (url, options, data, closeActionFunc) {
  options = options || {};
  data = data || {};
  var popId = options.id || options.popupId || scwin._popupId(url);
  var opts = {};
  for (var k in options) opts[k] = options[k];
  opts.id = popId;
  opts.popupName = options.popupName || popId;
  if (typeof closeActionFunc === "function") {
    if (typeof _openPopup === "function") {
      _openPopup(url, opts, data, closeActionFunc);
      return;
    }
    if ($c && $c.win && $c.win.openPopup) {
      $c.win.openPopup($p, popId, url, data, Object.assign({}, opts, {
        closeCallback: closeActionFunc
      }));
      return;
    }
    closeActionFunc(null);
    return;
  }
  return new Promise(function (resolve) {
    if (typeof _openPopup === "function") {
      _openPopup(url, opts, data, function (rtn) {
        resolve(rtn);
      });
      return;
    }
    if ($c && $c.win && $c.win.openPopup) {
      $c.win.openPopup($p, popId, url, data, Object.assign({}, opts, {
        closeCallback: function (rtn) {
          resolve(rtn);
        }
      }));
      return;
    }
    resolve(null);
  });
};

//-------------------------------------------------------------------------
// 공통 팝업 오픈 유틸 (WebSquare modal wrapper)
// - callback: function(rtn){...}
//-------------------------------------------------------------------------
scwin._openPopupModal = function (url, options, callback) {
  options = options || {};
  options.modal = true;
  scwin._openPopup(url, options, options.data || {}).then(function (rtn) {
    if (typeof callback == "function") callback(rtn);
  });
};

//-------------------------------------------------------------------------
// 파일 다운로드 팝업 (WebSquare)
//-------------------------------------------------------------------------
scwin.f_FileDownload = async function () {
  var width = 870;
  var height = 335;
  var houseNo = cnd_ed_hhblno.getValue ? cnd_ed_hhblno.getValue() : cnd_ed_hhblno.getValue();
  var url = "/ui/il/common/ilCommonFilePopup.xml?houseNo=" + encodeURIComponent(houseNo || "");
  await scwin._openPopup(url, {
    width: width,
    height: height,
    modal: true,
    resizable: true,
    status: true,
    scroll: true
  }, {});
};

//-------------------------------------------------------------------------
// House no Change (WebSquare)
//-------------------------------------------------------------------------
scwin.f_HawbNoChange = async function () {
  var blno = cnd_ed_hhblno.getValue ? cnd_ed_hhblno.getValue().trim() : (cnd_ed_hhblno.getValue() || "").trim();
  if (blno === "") return;
  var url = "/ui/il/common/ilCommonHawbNoChange.xml?pBlno=" + encodeURIComponent(blno);
  var rtnList = await scwin._openPopup(url, {
    width: 460,
    height: 280,
    modal: true
  }, {}); // rtnList[0]="N/A", rtnList[1]=ed_newBlno

  if (typeof rtnList !== "undefined" && rtnList && rtnList[0] === "N/A" && (rtnList[1] || "").trim() !== "") {
    // house no 변경 프로시저 호출 시작
    dma_HblNoChangeParam.set("odrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
    dma_HblNoChangeParam.set("kcomcd", scwin.hd_kcomcd.getValue ? scwin.hd_kcomcd : scwin.hd_kcomcd);
    dma_HblNoChangeParam.set("blNo", blno);
    dma_HblNoChangeParam.set("newblNo", (rtnList[1] || "").trim());
    dma_HblNoChangeParam.set("mhno", cnd_lc_mhno.getValue ? cnd_lc_mhno.getValue().trim() : (cnd_lc_mhno.getValue() || "").trim());
    if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001))) {
      await $c.sbm.execute($p, sbm_HblNoChange);
      var spMsg = ds_HblNoChangeResult.getCellData(ds_HblNoChangeResult.getRowPosition(), "spMsg");
      var spRtn = ds_HblNoChangeResult.getCellData(ds_HblNoChangeResult.getRowPosition(), "spRtn");
      if (spRtn === "0") {
        if (cnd_ed_hhblno.setValue) cnd_ed_hhblno.setValue((rtnList[1] || "").trim());else cnd_ed_hhblno.setValue((rtnList[1] || "").trim());
        if (cnd_lc_mhno.focus) cnd_lc_mhno.focus();
        await $c.win.alert($p, $c.data.getMessage($p, MSG_LO_WRN_007));
      } else if (spRtn === "-1") {
        await $c.win.alert($p, "Invoice가 존재합니다.");
      } else if (spRtn === "-2") {
        await $c.win.alert($p, spMsg);
      } else {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_LO_WRN_006));
      }
    }
    // house no 변경 프로시저 호출 끝
  }
};

// ==
// sbm_combo 전용: 직렬 실행 큐 + 결과를 원하는 DataList에 복사
// ==
scwin._comboQueue = scwin._comboQueue || Promise.resolve();
scwin._comboPending = scwin._comboPending || null;

// 내부: responseJSON에서 path로 값 꺼내기
scwin._pick = function (obj, path, fallback) {
  if (!path) return obj == undefined ? fallback : obj;
  var cur = obj;
  var parts = Array.isArray(path) ? path : String(path).split(".");
  for (var i = 0; i < parts.length; i++) {
    if (cur == null) return fallback;
    cur = cur[parts[i]];
  }
  return cur == undefined ? fallback : cur;
};

// 내부: DataList에 JSON 반영
scwin._applyToDataList = function (dl, data) {
  if (!dl) return;
  if (dl.setJSON) {
    dl.setJSON(data);
    return;
  }
  throw new Error("Target DataList has no setJSON()");
};

// ---------------------------------------------------------------------
// sbm_combo 실행 + 결과 복사 공통 함수
// params: dma_combo에 넣을 JSON
// options:
//  - target: (필수) 결과를 복사할 DataList
//  - responsePath: e.responseJSON에서 복사할 경로 (기본 "GAUCE")
//  - transform: (data, e) => data 가공 후 넣기
// ---------------------------------------------------------------------

// 큐가 끊기지 않게 흡수 체인 유지
scwin.execComboAndCopy = function (params, options) {
  options = options || {};
  var target = options.target;
  var responsePath = options.responsePath || "GAUCE";
  var transform = options.transform;
  if (!target) throw new Error("options.target(DataList) is required");

  // 직렬 실행: 이전 요청 끝난 뒤 다음 요청 수행
  scwin._comboQueue = scwin._comboQueue.then(function () {
    // dma_combo는 공유이므로 execute 직전에 세팅
    dma_comCode.setJSON(params);
    // 호출 단위 token
    var token = Symbol("comboCall");
    return new Promise(function (resolve, reject) {
      // 이번 호출의 target/설정 저장 (직렬이므로 1개만 있어도 안전)
      scwin._comboPending = {
        token: token,
        resolve: resolve,
        reject: reject,
        target: target,
        responsePath: responsePath,
        transform: transform
      };
      // 실행
      $c.sbm.execute($p, sbm_comCode).catch(function (err) {
        if (scwin._comboPending && scwin._comboPending.token == token) {
          scwin._comboPending = null;
        }
        reject(err);
      });
    });
  });
  scwin._comboQueue = scwin._comboQueue.catch(function () {});
  // 실행 Promise 반환 (await 가능)
  return scwin._comboQueue;
};

// ---------------------------------------------------------------------
// sbm_combo submitdone/error는 전역 1개만 두면 됨
// ---------------------------------------------------------------------
scwin.sbm_combo_onsubmitdone = function (e) {
  var p = scwin._comboPending;
  if (!p) return;
  scwin._comboPending = null;
  var json = e && e.responseJSON ? e.responseJSON : {};
  var data = scwin._pick(json, p.responsePath, null);
  if (p.transform) data = p.transform(data, e);

  // 핵심: 호출자가 넘긴 target DataList로만 복사
  scwin._applyToDataList(p.target, data);
  p.resolve(e);
};
scwin.sbm_combo_onsubmiterror = function (e) {
  var p = scwin._comboPending;
  if (!p) return;
  scwin._comboPending = null;
  p.reject(e);
};

// -------------------------------------------------------------------------
// 공통 코드조회 (sbm_combo 고정)
// - sysCd 생략 시 "ilCommonEBC" 기본
// - target DataList를 받아서 거기로 결과 복사
// -------------------------------------------------------------------------
scwin.f_commCode = async function (targetDl, sysCd, queryId, param1, param2, param3, param4) {
  // sysCd 생략 호출 허용: f_commCode(targetDl, "queryId", p1..)
  if (queryId == undefined) {
    queryId = sysCd;
    sysCd = "ilCommonEBC";
    param4 = param3;
    param3 = param2;
    param2 = param1;
    param1 = "";
  }
  var params = {
    sysCd: sysCd || "ilCommonEBC",
    queryId: queryId || "",
    param1: param1 == undefined ? "" : param1,
    param2: param2 == undefined ? "" : param2,
    param3: param3 == undefined ? "" : param3,
    param4: param4 == undefined ? "" : param4
  };

  // 실행 + 결과 복사 (기본: e.responseJSON.GAUCE)
  await scwin.execComboAndCopy(params, {
    target: targetDl,
    responsePath: "GAUCE"
  });
};

//-------------------------------------------------------------------------
// CONTAINER TYPE 로딩
//-------------------------------------------------------------------------
scwin.f_ContainerTypeLoading = function () {
  ds_containerType.removeAll();
  scwin.f_commCode(ds_containerType, "ilCommonEBC", "retriveContainerTypeList");
  //ds_containerType.setDataId("/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveContainerTypeList");
  //ds_containerType.removeAll();
  //ds_containerType.retrieve();  // 프로젝트 표준이 Reset이면 Reset으로 교체
};

//-------------------------------------------------------------------------
// MHNO 로딩 (House No TAB kill 등)
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = function () {
  var blno = cnd_ed_hhblno.getValue().trim();
  if (blno.length > 0) {
    //ds_hmhno.setDataId("/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + encodeURIComponent(blno));
    ds_hmhno.removeAll();
    scwin.f_commCode(ds_hmhno, "ilCommonEBC", "retriveSeaHouseMhnoListCombo", blno);
  } else {
    cnd_lc_mhno.setOptions(""); // CBData 대체: 프로젝트 컴포넌트 방식에 맞춰 교체
  }
};

//-------------------------------------------------------------------------
// MHNO 로딩2 (Freight 탭 검색용)
//-------------------------------------------------------------------------
scwin.f_MhnoLoading2 = function () {
  var blno = srch_ed_hhblno.getValue().trim();
  if (blno.length > 0) {
    //ds_hmhno2.setDataId("/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + encodeURIComponent(blno));
    ds_hmhno2.removeAll();
    scwin.f_commCode(ds_hmhno2, "ilCommonEBC", "retriveSeaHouseMhnoListCombo", blno);
  } else {
    cnd_lc_mhno2.setOptions("");
  }
};

//-------------------------------------------------------------------------
// Booking Seq 로딩
//-------------------------------------------------------------------------
scwin.f_BkSeqLoading = function () {
  var bkNo = ed_hhbkgno.getValue().trim();
  if (bkNo.length > 0) {
    var param1 = scwin.hd_kcomcd;
    var param2 = bkNo;
    //ds_bkseq.setDataId("/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC&queryId=retriveBookingSeqListCombo&param1=" +
    //                    encodeURIComponent(param1) + "&param2=" + encodeURIComponent(param2));
    ds_bkseq.removeAll();
    scwin.f_commCode(ds_bkseq, "SeaExportHouseEBC", "retriveBookingSeqListCombo", param1, param2);
  } else {
    lc_hhbkgseq.setOptions("");
  }
};

//-------------------------------------------------------------------------
// Booking 정보 가져오기
//-------------------------------------------------------------------------
scwin.f_BookingLoading = function () {
  // 파라미터 셋
  dma_bookingNo.set("kcomcd", scwin.hd_kcomcd);
  dma_bookingNo.set("bkNo", ed_hhbkgno.getValue());
  $c.sbm.execute($p, sbm_retrieveBooking);
  //tr_retrieveBooking.Post();

  if (ds_booking.getRowCount() == 0) {
    ds_bkseq.removeAll();
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  // Booking Door Seq
  scwin.f_BkSeqLoading();

  // shipper: booking docCd 있으면 docCd, 없으면 custCd
  var docCd = ds_booking.getCellData(ds_booking.getRowPosition(), "docCd");
  var custCd = ds_booking.getCellData(ds_booking.getRowPosition(), "custCd");
  ed_hhscd.setValue(docCd ? docCd : custCd);
  if (ed_hhscd.getValue() != "") {
    // 기존 GAUCE: f_PopUp('Shipper','T');
    // WebSquare에선 너가 만든 공통팝업(scwin.f_OpenCommonPopUp / f_PopUp 리팩토링본)으로 연결하면 됨
    scwin.f_PopUp("Shipper", "T");
  }
  ed_hhactcust.setValue(custCd);
  txt_hhactcustnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "custNm"));
  scwin.ed_hhactattn = ds_booking.getCellData(ds_booking.getRowPosition(), "custSeq");
  scwin.txt_hhactattnnm = ds_booking.getCellData(ds_booking.getRowPosition(), "custMan");
  ed_hhliner.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "liner"));
  txt_hhlinernm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "linernm"));
  scwin.ed_hhlinerattn = ds_booking.getCellData(ds_booking.getRowPosition(), "linerattn");
  scwin.txt_hhlinerattnnm = ds_booking.getCellData(ds_booking.getRowPosition(), "linerattnnm");
  ed_hhbuyer.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "dept"));
  txt_hhbuyernm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "deptnm"));
  ed_hhvslcd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "vslCd"));
  txt_hhvsl.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "vslNm"));
  txt_hhvyg.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "voy"));
  ed_hhsales.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "salesCd"));
  txt_hhsalesnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "salesNm"));
  ed_hhlodcd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "lodCd"));
  txt_hhlodnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "lodNm"));
  ed_hhdisccd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "disCd"));
  txt_hhdiscnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "disNm"));
  ed_hhdlvcd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "dlvCd"));
  txt_hhdlvnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "dlvNm"));
  scwin.ed_hharea = ds_booking.getCellData(ds_booking.getRowPosition(), "bkArea");
  scwin.txt_hhareanm = ds_booking.getCellData(ds_booking.getRowPosition(), "bkAreanm");
  ed_hhetd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "bkEtd"));
  ed_hheta.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "bkEta"));
  ed_creadyDt.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "etRsltsDt"));
  lc_hhpcgb.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "payTerm"));
  lc_hhbltype.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cfs"));
  lc_hhincoterm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "bkIncoterm"));
  ed_hhagent.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "bkAgent"));
  txt_hhagentnm.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "bkAgentnm"));

  // Bulk면 서비스텀 조정
  if (lc_hhbltype.getValue() == "B") {
    scwin.f_bulkTypeServiceTerm();
  }
  lc_hhstype.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "svcType"));
  scwin.ed_hhitem = ds_booking.getCellData(ds_booking.getRowPosition(), "itemCd");
  scwin.txt_hhmitem1 = ds_booking.getCellData(ds_booking.getRowPosition(), "itemNm");
  ed_hhpkg.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "pkg"));
  ed_hhunitcd.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "unit"));
  txt_hhunit.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "unitnm"));
  ed_hhgwgt.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "wgt"));
  ed_hhmsr.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "msr"));
  ed_hhcnt1type.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cnttype1"));
  ed_hhcnt2type.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cnttype2"));
  ed_hhcnt3type.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cnttype3"));
  ed_hhcnt4type.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cnttype4"));
  ed_hhcnt1.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cntqty1"));
  ed_hhcnt2.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cntqty2"));
  ed_hhcnt3.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cntqty3"));
  ed_hhcnt4.setValue(ds_booking.getCellData(ds_booking.getRowPosition(), "cntqty4"));
  scwin.ed_carrierBkNo = ds_booking.getCellData(ds_booking.getRowPosition(), "carrierBkNo");
  scwin.f_cargoControl();
};

//-------------------------------------------------------------------------
// Cargo Type 이 Bulk 인 경우에 Service Term을 Bulk에 맞춰서 셋팅
//-------------------------------------------------------------------------
scwin.f_bulkTypeServiceTerm = function () {
  if (lc_hhbltype.getValue() == "B") {
    // 콤보 데이터 초기화 (프로젝트 표준에 맞춰 reset/removeAll 등으로 교체)
    lc_hhstype.removeAll(); // 없으면 lc_hhstype.setOptions("") 같은 방식으로

    lc_hhstype.addItem("FIO", "FIO");
    lc_hhstype.addItem("FI/BT", "FI/BT");
    lc_hhstype.addItem("BT/BT", "BT/BT");
    lc_hhstype.addItem("BT/FO", "BT/FO");
    lc_hhstype.setSelectedIndex(0);

    // mt 활성화
    $c.gus.cfEnableObj($p, ed_hhmt, true);
  } else {
    lc_hhstype.initAutoComplete(); // 프로젝트 표준 함수명으로 변경
  }
};

/**
* GAUCE -> WebSquare 변환본
* 규칙:
*  - DataSet(1-base) -> DataList(0-base)
*  - NameValue/RowPosition/ValueOfIndex -> getCellData/setCellData/getRowPosition/getMatchedIndex 등
*  - tr_xxx.Post() -> await $c.sbm.execute(tr_xxx) (비동기 안전)
*  - cf~ 함수 -> $c.gus.cf~ 로 변환
*  - Text/Value/focus 혼용은 WebSquare 표준(getValue/setValue/focus)로 최대한 정리
*
* ※ 컴포넌트/데이터리스트 접근은 프로젝트 표준($p.getComponent 등)에 맞게 조정 가능
*/

// -------------------------------------------------------------------------
// Booking Container 정보 가져오기
// -------------------------------------------------------------------------
scwin.f_ContainerLoading = function () {
  dma_bookingContainer.set("kcomcd", scwin.hd_kcomcd);
  dma_bookingContainer.set("bkNo", ed_hhbkgno.getValue());
  dma_bookingContainer.set("hhbkgseq", lc_hhbkgseq.getValue());
  $c.sbm.execute($p, sbm_retrieveContainer);
};

// -------------------------------------------------------------------------
// Notify Copy (Consignee -> Notify)
// -------------------------------------------------------------------------
scwin.f_cCopy = function () {
  // ed_hhccd.Text = ed_hhncd.Text;
  var ncd = ed_hhncd.getValue ? ed_hhncd.getValue() : ed_hhncd.getValue() || ed_hhncd.text || ed_hhncd.Text || "";
  if (ed_hhccd.setValue) ed_hhccd.setValue(ncd);else ed_hhccd.setValue(ncd);

  // ta_hhc.Text = ta_hhn.Text;
  var notifyText = ta_hhn.getValue ? ta_hhn.getValue() : ta_hhn.getValue() || ta_hhn.text || ta_hhn.Text || "";
  if (ta_hhc.setValue) ta_hhc.setValue(notifyText);else ta_hhc.setValue(notifyText);
  if (ed_hhncd.focus) ed_hhncd.focus();
};

// -------------------------------------------------------------------------
// SAME AS CONSIGNEE (Notify)
// -------------------------------------------------------------------------
scwin.f_same = function () {
  var ccd = ed_hhccd.getValue ? ed_hhccd.getValue() : ed_hhccd.getValue() || ed_hhccd.text || ed_hhccd.Text || "";
  if (ed_hhncd.setValue) ed_hhncd.setValue(ccd);else ed_hhncd.setValue(ccd);

  // 기존 scwin.txt_hhn1~5 value 세팅은 textarea 기준으로 정리
  var same = "SAME AS CONSIGNEE";
  if (ta_hhn.setValue) ta_hhn.setValue(same);else ta_hhn.setValue(same);

  // legacy 텍스트필드가 실제로 살아있다면 같이 세팅(있을 때만)
  if (typeof scwin.txt_hhn1 !== "undefined") scwin.txt_hhn1 = same;
  if (typeof scwin.txt_hhn2 !== "undefined") scwin.txt_hhn2 = "";
  if (typeof scwin.txt_hhn3 !== "undefined") scwin.txt_hhn3 = "";
  if (typeof scwin.txt_hhn4 !== "undefined") scwin.txt_hhn4 = "";
  if (typeof scwin.txt_hhn5 !== "undefined") scwin.txt_hhn5 = "";
  if (typeof scwin.txt_hhn2 !== "undefined" && scwin.txt_hhn2.focus) scwin.txt_hhn2.focus();
};

// -------------------------------------------------------------------------
// Copy (Notify -> Consignee)
// -------------------------------------------------------------------------
scwin.f_nCopy = function () {
  var ccd = ed_hhccd.getValue ? ed_hhccd.getValue() : ed_hhccd.getValue() || ed_hhccd.text || ed_hhccd.Text || "";
  if (ed_hhncd.setValue) ed_hhncd.setValue(ccd);else ed_hhncd.setValue(ccd);
  var consigneeText = ta_hhc.getValue ? ta_hhc.getValue() : ta_hhc.getValue() || ta_hhc.text || ta_hhc.Text || "";
  if (ta_hhn.setValue) ta_hhn.setValue(consigneeText);else ta_hhn.setValue(consigneeText);
  if (ed_hhvslcd && ed_hhvslcd.focus) ed_hhvslcd.focus();
};

// -------------------------------------------------------------------------
// FCL Control - 숫자를 영문으로 변환하거나 포멧 처리
// -------------------------------------------------------------------------
scwin.f_cargoControl = function () {
  if (!(scwin.statusFlag == "C" || scwin.statusFlag == "U")) return;
  var blType = lc_hhbltype.getValue ? lc_hhbltype.getValue() : lc_hhbltype.BindColVal || lc_hhbltype.getValue() || "";
  if (blType === "F") {
    // 초기화
    txt_hhsubpkg.setValue("");
    txt_hhunit2.setValue("");
    txt_hhsay.setValue("");
    var result = "";
    var resultSay = "";
    var resultCnt = 0;

    // 컨테이너 타입 코드들
    var cnt1type = ed_hhcnt1type.getValue ? ed_hhcnt1type.getValue() : ed_hhcnt1type.getValue() || ed_hhcnt1type.text || ed_hhcnt1type.Text || "";
    var cnt2type = ed_hhcnt2type.getValue ? ed_hhcnt2type.getValue() : ed_hhcnt2type.getValue() || ed_hhcnt2type.text || ed_hhcnt2type.Text || "";
    var cnt3type = ed_hhcnt3type.getValue ? ed_hhcnt3type.getValue() : ed_hhcnt3type.getValue() || ed_hhcnt3type.text || ed_hhcnt3type.Text || "";
    var cnt4type = ed_hhcnt4type.getValue ? ed_hhcnt4type.getValue() : ed_hhcnt4type.getValue() || ed_hhcnt4type.text || ed_hhcnt4type.Text || "";

    // 수량
    var cnt1 = ed_hhcnt1.getValue ? ed_hhcnt1.getValue() : ed_hhcnt1.getValue() || ed_hhcnt1.text || ed_hhcnt1.Text || "0";
    var cnt2 = ed_hhcnt2.getValue ? ed_hhcnt2.getValue() : ed_hhcnt2.getValue() || ed_hhcnt2.text || ed_hhcnt2.Text || "0";
    var cnt3 = ed_hhcnt3.getValue ? ed_hhcnt3.getValue() : ed_hhcnt3.getValue() || ed_hhcnt3.text || ed_hhcnt3.Text || "0";
    var cnt4 = ed_hhcnt4.getValue ? ed_hhcnt4.getValue() : ed_hhcnt4.getValue() || ed_hhcnt4.text || ed_hhcnt4.Text || "0";

    // GAUCE: ds_containerType.getCellData(1, code)
    // WebSquare: getMatchedIndex("code", code) (없으면 -1)
    var i1 = ds_containerType.getMatchedIndex ? ds_containerType.getMatchedIndex("code", cnt1type) : -1;
    var i2 = ds_containerType.getMatchedIndex ? ds_containerType.getMatchedIndex("code", cnt2type) : -1;
    var i3 = ds_containerType.getMatchedIndex ? ds_containerType.getMatchedIndex("code", cnt3type) : -1;
    var i4 = ds_containerType.getMatchedIndex ? ds_containerType.getMatchedIndex("code", cnt4type) : -1;

    // build helper
    function appendContainer(idx, qty, isFirst, prevQtyZeroTextField) {
      if (idx < 0) return {
        result: "",
        say: "",
        qty: 0,
        appended: false
      };
      var q = Number(qty || 0);
      if (!q) return {
        result: "",
        say: "",
        qty: 0,
        appended: false
      };
      var name = ds_containerType.getCellData(idx, "name");
      var STRC = name + " X " + qty;
      var eng = $c.gus.cf_NumChangeEng($p, String(qty)); // cf_ -> $c.gus.cf_
      var seg = isFirst ? STRC : " & " + STRC;
      var segSay = isFirst ? eng + "(" + STRC + ")" : " & " + eng + "(" + STRC + ")";
      return {
        result: seg,
        say: segSay,
        qty: q,
        appended: true
      };
    }
    var first = true;
    var a1 = appendContainer(i1, cnt1, true);
    if (a1.appended) {
      result = a1.result;
      resultSay = a1.say;
      resultCnt = a1.qty;
      first = false;
    }
    var a2 = appendContainer(i2, cnt2, first);
    if (a2.appended) {
      result = result + a2.result;
      resultSay = resultSay + a2.say;
      resultCnt = resultCnt + a2.qty;
      first = false;
    }
    var a3 = appendContainer(i3, cnt3, first);
    if (a3.appended) {
      result = result + a3.result;
      resultSay = resultSay + a3.say;
      resultCnt = resultCnt + a3.qty;
      first = false;
    }
    var a4 = appendContainer(i4, cnt4, first);
    if (a4.appended) {
      result = result + a4.result;
      resultSay = resultSay + a4.say;
      resultCnt = resultCnt + a4.qty;
    }
    txt_hhsubpkg.setValue(result);

    // Number of Containers or Packages2
    var pkg = ed_hhpkg.getValue ? ed_hhpkg.getValue() : ed_hhpkg.getValue() || ed_hhpkg.text || ed_hhpkg.Text || "0";
    if (pkg !== "0" && pkg !== "") {
      txt_hhunit2.setValue(pkg + " " + (txt_hhunit.getValue() || ""));
    }

    // Say
    if (Number(resultCnt) === 1) txt_hhsay.setValue(resultSay + " CONTAINER ONLY");else txt_hhsay.setValue(resultSay + " CONTAINERS ONLY");

    // Print option (체크박스)
    if (typeof chb_hhp1 !== "undefined") chb_hhp1.setValue(true);
    if (typeof chb_hhp2 !== "undefined") chb_hhp2.setValue(true);
    if (typeof chb_hhp3 !== "undefined") chb_hhp3.setValue(true);
  } else if (blType === "L") {
    txt_hhsubpkg.setValue("");
    txt_hhunit2.setValue("");
    txt_hhsay.setValue("");
    var pkgL = ed_hhpkg.getValue ? ed_hhpkg.getValue() : ed_hhpkg.getValue() || ed_hhpkg.text || ed_hhpkg.Text || "0";
    if (pkgL !== "0" && pkgL !== "") {
      txt_hhsubpkg.setValue(pkgL + " " + (txt_hhunit.getValue() || ""));
      var engL = $c.gus.cf_NumChangeEng($p, String(pkgL));
      if (String(pkgL) == "1") txt_hhsay.setValue(engL + "(" + pkgL + ") " + (txt_hhunit.getValue() || "") + " ONLY");else txt_hhsay.setValue(engL + "(" + pkgL + ") " + (txt_hhunit.getValue() || "") + "'S ONLY");
    }
    if (typeof chb_hhp1 !== "undefined") chb_hhp1.setValue(false);
    if (typeof chb_hhp2 !== "undefined") chb_hhp2.setValue(true);
    if (typeof chb_hhp3 !== "undefined") chb_hhp3.setValue(false);
  }
};

// -------------------------------------------------------------------------
// Booking Search Popup
// - showModalDialog -> WebSquare popup.open (프로젝트 표준에 맞게 변경)
// - 반환은 callback/Promise 기반으로 받는 방식 권장
// -------------------------------------------------------------------------
scwin.f_bookingSearchPopup = async function () {
  var param = {};
  // IN/OUT 전달
  param.v_hhio = scwin.hd_hhio.getValue ? scwin.hd_hhio : scwin.hd_hhio;
  var url = "/ui/il/seaout/sobk/se_103_01_01p.xml?paramTitle=Booking%20Search";
  await scwin._openPopup(url, {
    width: 1000,
    height: 600,
    modal: true
  }, param);
  var bkNo = param.v_bkNo || "";
  if (ed_hhbkgno.setValue) ed_hhbkgno.setValue(bkNo);else ed_hhbkgno.setValue(bkNo);
  $c.gus.cfViewTab($p, 0); // 1번째 탭 이동

  if (bkNo !== "") {
    if (ed_hhbkgno.focus) ed_hhbkgno.focus();
    if (scwin.f_retrieveCarrierBkNo) scwin.f_retrieveCarrierBkNo();
  } else {
    if (lc_hhbkgseq && lc_hhbkgseq.focus) lc_hhbkgseq.focus();
  }
  return false;
};

// -------------------------------------------------------------------------
// Container Dual Check (컨테이너 타입 중복 체크)
// -------------------------------------------------------------------------
scwin.f_containerDualCheck = function () {
  var t1 = ed_hhcnt1type.getValue ? ed_hhcnt1type.getValue() : ed_hhcnt1type.getValue() || ed_hhcnt1type.text || ed_hhcnt1type.Text || "";
  var t2 = ed_hhcnt2type.getValue ? ed_hhcnt2type.getValue() : ed_hhcnt2type.getValue() || ed_hhcnt2type.text || ed_hhcnt2type.Text || "";
  var t3 = ed_hhcnt3type.getValue ? ed_hhcnt3type.getValue() : ed_hhcnt3type.getValue() || ed_hhcnt3type.text || ed_hhcnt3type.Text || "";
  var t4 = ed_hhcnt4type.getValue ? ed_hhcnt4type.getValue() : ed_hhcnt4type.getValue() || ed_hhcnt4type.text || ed_hhcnt4type.Text || "";
  var dup = false;
  if (t1 && t2 && t1 === t2) dup = true;
  if (t1 && t3 && t1 === t3) dup = true;
  if (t1 && t4 && t1 === t4) dup = true;
  if (t2 && t3 && t2 === t3) dup = true;
  if (t2 && t4 && t2 === t4) dup = true;
  if (t3 && t4 && t3 === t4) dup = true;
  if (dup) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["Container Type"]); // 중복 불가
    return false;
  }
  return true;
};

// -------------------------------------------------------------------------
// 수출신고번호 Check
// -------------------------------------------------------------------------
scwin.f_elnoExportCheck = function (elno) {
  var ChkCode = elno.charAt(14);
  var sum = 0;
  sum += Number(elno.charAt(0)) * 7 % 10;
  sum += Number(elno.charAt(1)) * 3 % 10;
  sum += Number(elno.charAt(2)) * 1 % 10;
  sum += Number(elno.charAt(3)) * 7 % 10;
  sum += Number(elno.charAt(4)) * 3 % 10;
  sum += Number(elno.charAt(5)) * 1 % 10;
  sum += Number(elno.charAt(6)) * 7 % 10;
  sum += Number(elno.charAt(7)) * 3 % 10;
  sum += Number(elno.charAt(8)) * 1 % 10;
  sum += Number(elno.charAt(9)) * 7 % 10;
  sum += Number(elno.charAt(10)) * 3 % 10;
  sum += Number(elno.charAt(11)) * 1 % 10;
  sum += Number(elno.charAt(12)) * 7 % 10;
  sum += Number(elno.charAt(13)) * 3 % 10;
  var result = sum % 10;
  if (result > 0) result = 10 - result;
  if (String(ChkCode) != String(result)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["수출신고번호"]); // 유효하지 않음
    return false;
  }
  return true;
};

// -------------------------------------------------------------------------
// 화물관리번호 Check
// -------------------------------------------------------------------------
scwin.f_elnoReshipmentCheck = function (elno) {
  var ChkCode = elno.charAt(10);
  var sum = 0;
  sum += elno.charCodeAt(0) * 3 % 10;
  sum += elno.charCodeAt(1) * 7 % 10;
  sum += elno.charCodeAt(2) * 9 % 10;
  sum += elno.charCodeAt(3) * 3 % 10;
  sum += elno.charCodeAt(4) * 7 % 10;
  sum += elno.charCodeAt(5) * 9 % 10;
  sum += elno.charCodeAt(6) * 3 % 10;
  sum += elno.charCodeAt(7) * 7 % 10;
  sum += elno.charCodeAt(8) * 9 % 10;
  sum += elno.charCodeAt(9) * 3 % 10;
  var result = sum % 10;
  if (String(ChkCode) != String(result)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["화물관리번호"]); // 유효하지 않음
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// INVOICE NO 유무 (WebSquare)
// ONLOAD 시 실행됨. INVOICE 존재하면 삭제/저장 제어용(invoiceCheck=1)
// - GAUCE: ed_odrNo.Text / ds.DataID / ds.Reset() / NameValue / RowPosition
// - WebSquare: comp.getValue() / submission execute / getCellData / getRowPosition
//-------------------------------------------------------------------------

scwin.f_invoiceCheck = function () {
  // House Invoice check
  var strClntNo = "";
  scwin.invoiceCheck = "0"; // 초기화

  strClntNo = (ed_odrNo.getValue() || "").trim();
  scwin.f_commCode(ds_invoiceCheck, "SeaExportHouseEBC", "retriveInvoiceCheckCombo", strClntNo);
  if (String(ds_invoiceCheck.getCellData(ds_invoiceCheck.getRowPosition(), "code") || "0") != "0") {
    scwin.invoiceCheck = "1";
  }
};

//freight start
//---------------------------------------------------------
// 저장 (WebSquare)
//---------------------------------------------------------
scwin.f_Save_freight = function () {
  var dirty = ds_houseblList_freight.getModifiedIndex().length != 0 || ds_selling_freight.getModifiedIndex().length != 0 || ds_partner_freight.getModifiedIndex().length != 0 || ds_buying_freight.getModifiedIndex().length != 0;
  if (dirty) {
    if (!scwin.f_validate_freight() || !scwin.f_FreightValidate() || !scwin.f_JobCloseYn()) {
      return false;
    }
  }
  return true;
};

//---------------------------------------------------------
// 취소 (WebSquare)
//---------------------------------------------------------
scwin.f_Cancel_freight = function () {
  // dataset 롤백(프로젝트 표준에 맞춰 적용)
  ds_houseblList_freight.undoAll();
  scwin.f_cancelRow_freight(1);
  scwin.f_cancelRow_freight(2);
  scwin.f_cancelRow_freight(3);
};

//-------------------------------------------------------------------------
// Freight Row Add 공통 (Selling/Partner/Buying)
//-------------------------------------------------------------------------
scwin._freight_getSpec = function (disGubun) {
  // disGubun: 1 Selling, 2 Partner, 3 Buying
  if (disGubun == 1) {
    return {
      ds: ds_selling_freight,
      grid: gr_selling_freight,
      copy: {
        rateCol: "sellUpr",
        amtFcrc: "sellAmtFcrc",
        amtW: "sellAmt",
        amtUsd: "usdAmt"
      },
      fixed: {
        locPtnCls: "1",
        mblHblCls: "H",
        seaAirCls: "S",
        drcrCls: "D"
      },
      // header fill
      fill: function (row) {
        var r0 = this.ds.getRowPosition();
        this.ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        this.ds.setCellData(row, "blNo", cnd_ed_hhblno.getValue());
        this.ds.setCellData(row, "mhno", cnd_lc_mhno.getValue()); // 필요시 code값이면 project 방식으로 교체
        this.ds.setCellData(row, "odrNo", ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "odrNo"));
        this.ds.setCellData(row, "locPtnCls", this.fixed.locPtnCls);
        this.ds.setCellData(row, "mblHblCls", this.fixed.mblHblCls);
        this.ds.setCellData(row, "seaAirCls", this.fixed.seaAirCls);
        this.ds.setCellData(row, "drcrCls", this.fixed.drcrCls);
        this.ds.setCellData(row, "ppccCls", scwin.hd_hhpcgb_freight);
        this.ds.setCellData(row, "inpid", scwin.vUserId || ""); // JSP <%=userId%> 대체 (프로젝트 전역 userId로 바꿔)
        this.ds.setCellData(row, "bilgClntNo", scwin.ed_hhactcust_freight);
        this.ds.setCellData(row, "bilgClntNm", scwin.txt_hhactcustnm_freight);
        this.ds.setCellData(row, "rsltsStdDt", ed_creadyDt.getValue());
        this.ds.setCellData(row, "exRateTyp", lc_selling_hhexgb_freight.getValue());
      },
      after: function (row) {
        scwin.f_sellingUnitLoading_freight();
        this.ds.setCellData(row, "fareUnit", ds_sellingUnit_freight.getCellData(1, "code"));
        scwin.f_packageRateSellingLoading_freight(row, "");
        this.grid.focus();
        this.grid.setFocusedCell(row, "fareEngCd");
      }
    };
  }
  if (disGubun == 2) {
    return {
      ds: ds_partner_freight,
      grid: gr_partner_freight,
      copy: {
        rateCol: "sellUpr",
        amtFcrc: "sellAmtFcrc",
        amtW: "sellAmt",
        amtUsd: "usdAmt"
      },
      fixed: {
        locPtnCls: "2",
        mblHblCls: "H",
        seaAirCls: "S",
        drcrCls: "D" // 원본: drCrCls / drcrCls 혼재 -> 프로젝트 컬럼명에 맞춰 조정
      },
      fill: function (row) {
        this.ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        this.ds.setCellData(row, "blNo", cnd_ed_hhblno.getValue());
        this.ds.setCellData(row, "mhno", cnd_lc_mhno.getValue());
        this.ds.setCellData(row, "odrNo", ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "odrNo"));
        this.ds.setCellData(row, "drCrCls", this.fixed.drcrCls); // Partner는 drCrCls 컬럼 사용
        this.ds.setCellData(row, "locPtnCls", this.fixed.locPtnCls);
        this.ds.setCellData(row, "mblHblCls", this.fixed.mblHblCls);
        this.ds.setCellData(row, "seaAirCls", this.fixed.seaAirCls);
        this.ds.setCellData(row, "ppccCls", scwin.hd_hhpcgb_freight);
        this.ds.setCellData(row, "inpid", scwin.vUserId || "");
        this.ds.setCellData(row, "bilgClntNo", scwin.ed_hhagent_freight);
        this.ds.setCellData(row, "bilgClntNm", scwin.txt_hhagentnm_freight);
        this.ds.setCellData(row, "rsltsStdDt", ed_creadyDt.getValue());
        this.ds.setCellData(row, "exRateTyp", lc_selling_hhexgb_freight.getValue());
      },
      after: function (row) {
        scwin.f_partnerUnitLoading_freight();
        this.ds.setCellData(row, "fareUnit", ds_partnerUnit_freight.getCellData(1, "code"));
        scwin.f_packageRatePartnerLoading_freight(row, "");
        this.grid.focus();
        this.grid.setFocusedCell(row, "fareEngCd");
      }
    };
  }

  // disGubun == 3 Buying
  return {
    ds: ds_buying_freight,
    grid: gr_buying_freight,
    copy: {
      rateCol: "pchsUpr",
      amtFcrc: "pchsAmtFcrc",
      amtW: "pchsAmt",
      amtUsd: "usdAmt"
    },
    fixed: {
      locPtnCls: "1",
      mblHblCls: "H",
      seaAirCls: "S",
      drcrCls: "C"
    },
    fill: function (row) {
      this.ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
      this.ds.setCellData(row, "blNo", cnd_ed_hhblno.getValue());
      this.ds.setCellData(row, "mhno", cnd_lc_mhno.getValue());
      this.ds.setCellData(row, "odrNo", ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "odrNo"));
      this.ds.setCellData(row, "locPtnCls", this.fixed.locPtnCls);
      this.ds.setCellData(row, "mblHblCls", this.fixed.mblHblCls);
      this.ds.setCellData(row, "seaAirCls", this.fixed.seaAirCls);
      this.ds.setCellData(row, "drcrCls", this.fixed.drcrCls);
      this.ds.setCellData(row, "ppccCls", scwin.hd_hhpcgb_freight);
      this.ds.setCellData(row, "inpid", scwin.vUserId || "");
      this.ds.setCellData(row, "pchsClntNo", scwin.ed_hhliner_freight);
      this.ds.setCellData(row, "pchsClntNm", scwin.txt_hhlinernm_freight);
      this.ds.setCellData(row, "rsltsStdDt", ed_creadyDt.getValue());
      this.ds.setCellData(row, "exRateTyp", lc_selling_hhexgb_freight.getValue());
      this.ds.setCellData(row, "pchsTyp", "1");
    },
    after: function (row) {
      scwin.f_buyingUnitLoading_freight();
      this.ds.setCellData(row, "fareUnit", ds_buyingUnit_freight.getCellData(1, "code"));
      scwin.f_packageRateBuyingLoading_freight(row, "");
      this.grid.focus();
      this.grid.setFocusedCell(row, "pchsTyp");
    }
  };
};

//-------------------------------------------------------------------------
// row 삽입(원본: addRow / insertRow) - WebSquare 버전
//  - 맨끝이면 addRow
//  - 아니면 현재row 다음에 insertRow
// 반환: 생성된 rowIndex
//-------------------------------------------------------------------------
scwin._freight_insertRow = function (ds) {
  var cnt = ds.getRowCount();
  var cur = ds.getRowPosition(); // 1-base인 경우/0-base인 경우 프로젝트에 맞춰 조정 필요

  if (cnt == 0 || cnt == cur) {
    ds.insertRow(0);
    return ds.getRowPosition();
  } else {
    ds.insertRow(cur + 1);
    return ds.getRowPosition();
  }
};

//-------------------------------------------------------------------------
// 직전행 값 복사(단가/환율/금액류)
//-------------------------------------------------------------------------
scwin._freight_copyPrevAmounts = function (spec, newRow) {
  var ds = spec.ds;
  var cur = ds.getRowPosition();
  var rate = ds.getCellData(cur, spec.copy.rateCol);
  var exRate = ds.getCellData(cur, "exRate");
  var a1 = ds.getCellData(cur, spec.copy.amtFcrc);
  var a2 = ds.getCellData(cur, spec.copy.amtW);
  var a3 = ds.getCellData(cur, spec.copy.amtUsd);
  ds.setCellData(newRow, spec.copy.rateCol, rate);
  ds.setCellData(newRow, "exRate", exRate);
  ds.setCellData(newRow, spec.copy.amtFcrc, a1);
  ds.setCellData(newRow, spec.copy.amtW, a2);
  ds.setCellData(newRow, spec.copy.amtUsd, a3);
};

//---------------------------------------------------------
// 행추가 (WebSquare)
//---------------------------------------------------------
scwin.f_addRow_freight = function (disGubun) {
  if (cnd_ed_hhblno.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  var spec = scwin._freight_getSpec(disGubun);
  var row = scwin._freight_insertRow(spec.ds);
  spec.fill(row);
  scwin._freight_copyPrevAmounts(spec, row);

  // unit / ratepack / focus
  spec.after(row);
};

//---------------------------------------------------------
// 다중 행추가 (WebSquare)
//---------------------------------------------------------
scwin.f_addRowMulti_freight = function (disGubun) {
  if (cnd_ed_hhblno.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  var makeCnt = 1;
  if (disGubun == 1) makeCnt = ed_rowMake_selling.getValue() == "" ? 1 : parseInt(ed_rowMake_selling.getValue().trim(), 10);
  if (disGubun == 2) makeCnt = ed_rowMake_partner.getValue() == "" ? 1 : parseInt(ed_rowMake_partner.getValue().trim(), 10);
  if (disGubun == 3) makeCnt = ed_rowMake_buying.getValue() == "" ? 1 : parseInt(ed_rowMake_buying.getValue().trim(), 10);
  var spec = scwin._freight_getSpec(disGubun);
  for (var i = 0; i < makeCnt; i++) {
    var row = scwin._freight_insertRow(spec.ds);
    spec.fill(row);
    scwin._freight_copyPrevAmounts(spec, row);
    spec.after(row);
  }
};

//---------------------------------------------------------
// 행삭제 (WebSquare)
//---------------------------------------------------------
scwin.f_deleteRow_freight = function (disGubun) {
  var ds = disGubun == 1 ? ds_selling_freight : disGubun == 2 ? ds_partner_freight : ds_buying_freight;
  var chkCol = "chk";
  var certCol = disGubun == 3 ? "pchsCertiNo" : "certiNo";
  for (var i = ds.getRowCount(); i >= 1; i--) {
    if (ds.getCellData(i, chkCol) != "T") continue;

    // Invoice 존재
    if (String(ds.getCellData(i, certCol) || "") != "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["Invoice No", "delete"]);
      return;
    }

    // 확정 체크(Partner/Buying만)
    if (disGubun != 1 && ds.getCellData(i, "dcsnClsCd") == "확정") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["확정", "delete"]);
      return;
    }
    ds.deleteRow(i);
  }
};

//---------------------------------------------------------
// 행취소 (WebSquare)
//---------------------------------------------------------
scwin.f_cancelRow_freight = function (disGubun) {
  if (disGubun == 1) {
    if (ds_selling_freight.getCellData(1, "tabIndex") == "0") {
      ds_selling_freight.removeAll();
    } else {
      ds_selling_freight.undoAll();
    }
    return;
  }
  if (disGubun == 2) {
    if (ds_partner_freight.getCellData(1, "tabIndex") == "1") {
      ds_partner_freight.removeAll();
    } else {
      ds_partner_freight.undoAll();
    }
    return;
  }

  // disGubun == 3
  if (ds_buying_freight.getCellData(1, "tabIndex") == "2") {
    ds_buying_freight.removeAll();
  } else {
    ds_buying_freight.undoAll();
  }
};

//-------------------------------------------------------------------------
// ds에서 code값이 존재하는지 체크 (code컬럼명/프로젝트 표준에 맞게 변경)
// - 성공: true
// - 실패: false
//-------------------------------------------------------------------------
scwin._existsCode = function (ds, codeCol, codeVal) {
  if (codeVal == "") return true;

  // 일반적으로 code 컬럼이 "code"일 가능성이 높음
  for (var i = 1; i <= ds.getRowCount(); i++) {
    if (String(ds.getCellData(i, codeCol)) == String(codeVal)) return true;
  }
  return false;
};

//---------------------------------------------------------
// validate (WebSquare)
//---------------------------------------------------------
scwin.f_validate_freight = function () {
  // 1) 기본 validate (프로젝트 공통 그대로 사용)
  if (!cfValidate([ed_selling_hhcurdt_freight, scwin.ed_hhetd_freight, gr_selling_freight, gr_partner_freight, gr_buying_freight])) {
    return false;
  }

  // 2) 필수값
  if (cnd_ed_hhblno.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House B/L"]);
    cnd_ed_hhblno.focus();
    return false;
  }
  if (scwin.ed_hhetd_freight == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["ETD"]);
    scwin.ed_hhetd_freight.focus();
    return false;
  }

  // 3) Container Type value check (원본 getCellData 대체)
  var c1 = ed_hhcnt1type_freight.getValue();
  var c2 = ed_hhcnt2type_freight.getValue();
  var c3 = ed_hhcnt3type_freight.getValue();
  var c4 = ed_hhcnt4type_freight.getValue();

  // ds_containerType_freight의 코드 컬럼명이 "code"가 아니라면 바꿔줘
  if (!scwin._existsCode(ds_containerType_freight, "code", c1)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
    ed_hhcnt1type_freight.focus();
    return false;
  }
  if (!scwin._existsCode(ds_containerType_freight, "code", c2)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
    ed_hhcnt2type_freight.focus();
    return false;
  }
  if (!scwin._existsCode(ds_containerType_freight, "code", c3)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
    ed_hhcnt3type_freight.focus();
    return false;
  }
  if (!scwin._existsCode(ds_containerType_freight, "code", c4)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
    ed_hhcnt4type_freight.focus();
    return false;
  }

  // 4) Selling 필수 컬럼
  for (var i = 1; i <= ds_selling_freight.getRowCount(); i++) {
    if (ds_selling_freight.getCellData(i, "bilgClntNm") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer Name"]);
      gr_selling_freight.focus();
      gr_selling_freight.setFocusedCell(i, "bilgClntNm");
      return false;
    }
    if (ds_selling_freight.getCellData(i, "bilgClntNo") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer"]);
      gr_selling_freight.focus();
      gr_selling_freight.setFocusedCell(i, "bilgClntNo");
      return false;
    }
    if (ds_selling_freight.getCellData(i, "fareEngCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["F/Code"]);
      gr_selling_freight.focus();
      gr_selling_freight.setFocusedCell(i, "fareEngCd");
      return false;
    }
    if (ds_selling_freight.getCellData(i, "crcCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Currency"]);
      gr_selling_freight.focus();
      gr_selling_freight.setFocusedCell(i, "crcCd");
      return false;
    }
    if (ds_selling_freight.getCellData(i, "fareUnit") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Unit"]);
      gr_selling_freight.focus();
      gr_selling_freight.setFocusedCell(i, "fareUnit");
      return false;
    }
  }

  // 5) Partner 필수 컬럼
  for (var j = 1; j <= ds_partner_freight.getRowCount(); j++) {
    if (ds_partner_freight.getCellData(j, "bilgClntNo") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "bilgClntNo");
      return false;
    }
    if (ds_partner_freight.getCellData(j, "bilgClntNm") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer Name"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "bilgClntNm");
      return false;
    }
    if (ds_partner_freight.getCellData(j, "fareEngCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["F/Code"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "fareEngCd");
      return false;
    }
    if (ds_partner_freight.getCellData(j, "drCrCls") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["D/C"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "drCrCls");
      return false;
    }
    if (ds_partner_freight.getCellData(j, "crcCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Currency"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "crcCd");
      return false;
    }
    if (ds_partner_freight.getCellData(j, "fareUnit") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Unit"]);
      gr_partner_freight.focus();
      gr_partner_freight.setFocusedCell(j, "fareUnit");
      return false;
    }
  }

  // 6) Buying 필수 컬럼
  for (var k = 1; k <= ds_buying_freight.getRowCount(); k++) {
    if (ds_buying_freight.getCellData(k, "pchsTyp") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Type"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "pchsTyp");
      return false;
    }
    if (ds_buying_freight.getCellData(k, "pchsClntNo") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "pchsClntNo");
      return false;
    }
    if (ds_buying_freight.getCellData(k, "pchsClntNm") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Customer Name"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "pchsClntNm");
      return false;
    }
    if (ds_buying_freight.getCellData(k, "fareEngCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["F/Code"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "fareEngCd");
      return false;
    }
    if (ds_buying_freight.getCellData(k, "crcCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Currency"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "crcCd");
      return false;
    }
    if (ds_buying_freight.getCellData(k, "fareUnit") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Unit"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "fareUnit");
      return false;
    }
    // Inner Dept (pchsTyp=3)
    if (ds_buying_freight.getCellData(k, "pchsTyp") == "3" && ds_buying_freight.getCellData(k, "sellDeptCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Inner Department"]);
      gr_buying_freight.focus();
      gr_buying_freight.setFocusedCell(k, "sellDeptCd");
      return false;
    }
  }

  // 7) VAT 체크 (Selling)
  for (var s = 1; s <= ds_selling_freight.getRowCount(); s++) {
    var vatYn = Number(ds_selling_freight.getCellData(s, "vatYn"));
    var vatAmt = Number(ds_selling_freight.getCellData(s, "vatAmt"));
    var sellAmt = Number(ds_selling_freight.getCellData(s, "sellAmt"));
    if (vatYn == 0) {
      if (vatAmt > 0) {
        $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nSelling List " + s + "번째 데이터를 확인하세요.");
        gr_selling_freight.focus();
        return false;
      }
    }
    if (vatYn == 1) {
      if (Math.abs(Math.round(sellAmt * 0.1) - vatAmt) > 1) {
        $c.win.alert($p, "VAT 금액은 Amount(W)금액의 10%입니다. \nSelling List " + s + "번째 VAT 금액을 확인하세요.");
        gr_selling_freight.focus();
        gr_selling_freight.setFocusedCell(s, "vatAmt");
        return false;
      }
    }
  }

  // 8) VAT 체크 (Buying) - 원본: vat 컬럼 사용
  for (var b = 1; b <= ds_buying_freight.getRowCount(); b++) {
    var vatYn2 = Number(ds_buying_freight.getCellData(b, "vatYn"));
    var vat2 = Number(ds_buying_freight.getCellData(b, "vat"));
    if (vatYn2 == 0 && vat2 > 0) {
      $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nBuying List " + b + "번째 데이터를 확인하세요.");
      gr_buying_freight.focus();
      return false;
    }
  }

  // 9) 공통 Freight Name Validation
  if (!cf_freightNameValidation(ds_selling_freight, ds_partner_freight, ds_buying_freight)) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// Freight 공통팝업(Partner/Customer/Liner + Port/ContainerType) - udc_ilcomCode 통일버전
//-------------------------------------------------------------------------
// 공통: 값 get/set
scwin._wsGetVal = function (comp) {
  if (!comp) return "";
  if (typeof comp.getValue == "function") return String(comp.getValue() || "").trim();
  return String(comp.getValue() || "").trim();
};
scwin._wsSetVal = function (comp, v) {
  if (!comp) return;
  if (typeof comp.setValue == "function") comp.setValue(v);else comp.setValue(v);
};

// 공통: rtnList normalize (단건/다건/객체형 대응)
scwin._normalizePopupRtn = function (rtn) {
  if (!rtn || rtn == "N/A") return null;

  // {list:[...]} 형태
  if (rtn.list && Array.isArray(rtn.list)) rtn = rtn.list;

  // 다건: [[...],[...]] -> 첫 행 사용
  if (Array.isArray(rtn) && rtn.length > 0 && Array.isArray(rtn[0])) return rtn[0];

  // 단건: [...]
  if (Array.isArray(rtn)) return rtn;

  // 객체: {code,name,...}
  var arr = [];
  if (rtn.code != null) arr[0] = rtn.code;
  if (rtn.name != null) arr[1] = rtn.name;
  return arr.length ? arr : null;
};

// 공통: 팝업 오픈 래퍼 (udc_ilcomCode 고정)
scwin._openUdcCommonPopup = function (args, pNoDataCloseTF) {
  // args: {selectId, codeComp, nameComp, extraComps, winCloseTF, colCnt, titles, widths, hideCols,
  //        whereOpt, winW, winH, posY, posX, dupTF, allTF, winTitle, noDataTF, afterFn}

  var onReturn = function (rtnList) {
    var r = scwin._normalizePopupRtn(rtnList);
    if (!r) return;

    // 기본 세팅
    scwin._wsSetVal(args.codeComp, (r[0] || "").trim());
    if (args.nameComp) scwin._wsSetVal(args.nameComp, (r[1] || "").trim());

    // 추가 세팅 (Address 등)
    if (args.extraComps && args.extraComps.length) {
      for (var i = 0; i < args.extraComps.length; i++) {
        scwin._wsSetVal(args.extraComps[i], (r[2 + i] || "").trim());
      }
    }
    if (typeof args.afterFn == "function") args.afterFn(r);
  };
  udc_ilcomCode.setSelectId(args.selectId);
  udc_ilcomCode.ilCommonPopUp(onReturn, scwin._wsGetVal(args.codeComp), args.nameComp ? scwin._wsGetVal(args.nameComp) : "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || pNoDataCloseTF || "");
};

//-------------------------------------------------------------------------
// 공통팝업 열기 (Freight - Partner/Customer/Liner)
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// function name : scwin.f_PopUpGrid
// function desc : Grid popup (GAUCE -> WebSquare, udc_ilcomCode 기반)
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, Row, pWinCloseTF, pAllSearchTF) {
  function normalizeRtn(rtnList) {
    if (!rtnList || rtnList == "N/A") return null;
    if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;
    if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) return rtnList[0];
    if (Array.isArray(rtnList)) return rtnList;
    var arr = [];
    if (rtnList.code != null) arr[0] = rtnList.code;
    if (rtnList.name != null) arr[1] = rtnList.name;
    return arr.length ? arr : null;
  }
  function setGridCode(ds, row, codeCol, r) {
    if (!ds || row == null) return;
    ds.setCellData(row, codeCol, r[0] || "");
  }
  function gv(ds, row, col) {
    return String(ds.getCellData(row, col) || "");
  }
  function openCommon(args) {
    var onReturn = function (rtnList) {
      var r = normalizeRtn(rtnList);
      if (!r) {
        if (typeof args.onEmpty == "function") args.onEmpty();
        return;
      }
      setGridCode(args.ds, args.row, args.codeCol, r);
      if (typeof args.afterFn == "function") args.afterFn(r);
    };
    udc_ilcomCode.setSelectId(args.selectId);
    udc_ilcomCode.ilCommonPopUp(onReturn, args.codeValue || "", args.nameValue || "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || "F");
  }
  switch (disGubun) {
    case "mctype":
      openCommon({
        selectId: "retriveContainerTypeCodeInfo",
        ds: ds_ocContList,
        row: Row,
        codeCol: "mctype",
        codeValue: gv(ds_ocContList, Row, "mctype"),
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Type,Code,Name",
        noDataTF: "F",
        onEmpty: function () {
          ds_ocContList.setCellData(Row, "mctype", "");
        }
      });
      break;
    case "mcpkgcd":
      openCommon({
        selectId: "retrieveCommCdInfo",
        ds: ds_ocContList,
        row: Row,
        codeCol: "mcpkgcd",
        codeValue: gv(ds_ocContList, Row, "mcpkgcd"),
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "IL002",
        allTF: pAllSearchTF,
        winTitle: "Unit,Code,Name",
        noDataTF: "F",
        onEmpty: function () {
          ds_ocContList.setCellData(Row, "mcpkgcd", "");
        }
      });
      break;
    case "unit":
      openCommon({
        selectId: "retrieveCommCdInfo",
        ds: ds_ocElList,
        row: Row,
        codeCol: "unit",
        codeValue: gv(ds_ocElList, Row, "unit"),
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "IL002",
        allTF: pAllSearchTF,
        winTitle: "Unit,Code,Name",
        noDataTF: "F",
        onEmpty: function () {
          ds_ocElList.setCellData(Row, "unit", "");
        }
      });
      break;
    case "mut":
      openCommon({
        selectId: "retrieveCommCdInfo",
        ds: ds_ocElList,
        row: Row,
        codeCol: "mut",
        codeValue: gv(ds_ocElList, Row, "mut"),
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "IL002",
        allTF: pAllSearchTF,
        winTitle: "Unit,Code,Name",
        noDataTF: "F",
        onEmpty: function () {
          ds_ocElList.setCellData(Row, "mut", "");
        }
      });
      break;
  }
};
scwin.f_PopUp_freight = function (disGubun, chgGubun) {
  function openClntPopup(codeObj, nameObj, titlePrefix) {
    scwin._openUdcCommonPopup({
      selectId: "retrieveEngClntInfo",
      codeComp: codeObj,
      nameComp: nameObj,
      winCloseTF: chgGubun,
      // GAUCE chgGubun = AutoClose
      colCnt: "10",
      titles: titlePrefix + " Code," + titlePrefix + " Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
      widths: "140,300,100,100,100,100,100,,,100",
      hideCols: "8,9",
      allTF: "F",
      winTitle: titlePrefix + " search," + titlePrefix + " Code," + titlePrefix + " Name"
    });
  }
  switch (disGubun) {
    case "Partner":
      openClntPopup(scwin.ed_hhagent_freight, scwin.txt_hhagentnm_freight, "Partner");
      break;
    case "Customer":
      openClntPopup(scwin.ed_hhactcust_freight, scwin.txt_hhactcustnm_freight, "Customer");
      break;
    case "Liner":
      openClntPopup(scwin.ed_hhliner_freight, scwin.txt_hhlinernm_freight, "Liner");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업 열기 (Freight - Port/ContainerType)
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp_freight = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // Port Popup 공통
  function openPortPopup(codeObj, nameObj, winTitle) {
    scwin._openUdcCommonPopup({
      selectId: "retrievePortInfo",
      codeComp: codeObj,
      nameComp: nameObj,
      winCloseTF: pWinCloseTF,
      colCnt: "6",
      titles: "Code, Name,,,, UNCODE",
      widths: "80,160,,,,80",
      hideCols: "3,4,5,7,8,9,10",
      allTF: pAllSearchTF,
      winTitle: winTitle + ",Code,Name",
      noDataTF: pNoDataCloseTF
    }, pNoDataCloseTF);
  }

  // ContainerType Popup 공통 (Code only)
  function openContainerTypePopup(codeObj) {
    scwin._openUdcCommonPopup({
      selectId: "retriveContainerTypeCodeInfo",
      codeComp: codeObj,
      nameComp: null,
      winCloseTF: pWinCloseTF,
      colCnt: "2",
      titles: "Code, Name",
      widths: "80,230",
      hideCols: "3,4,5,6,7,8,9,10",
      allTF: pAllSearchTF,
      winTitle: "Type,Code,Name",
      noDataTF: "F" // 0건이면 N/A 리턴
    }, pNoDataCloseTF);
  }
  switch (gubun1) {
    case "Loading":
      openPortPopup(scwin.ed_hhlodcd_freight, scwin.txt_hhlodnm_freight, "Loading");
      break;
    case "Discharge":
      openPortPopup(scwin.ed_hhdisccd_freight, scwin.txt_hhdiscnm_freight, "Discharge");
      break;
    case "ContainerType1":
      openContainerTypePopup(ed_hhcnt1type_freight);
      break;
    case "ContainerType2":
      openContainerTypePopup(ed_hhcnt2type_freight);
      break;
    case "ContainerType3":
      openContainerTypePopup(ed_hhcnt3type_freight);
      break;
    case "ContainerType4":
      openContainerTypePopup(ed_hhcnt4type_freight);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 메뉴 오픈 공통
//-------------------------------------------------------------------------
// title : 탭/메뉴 타이틀
// path  : 이동할 화면 경로
// menuId: 메뉴ID(없으면 path로 대체 가능)
// param : 전달 파라미터 객체
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};

//-------------------------------------------------------------------------
// Freight 화면이동 공통 파라미터
//-------------------------------------------------------------------------
// (기존 GAUCE: scwin.hd_kcomcd, scwin.hd_hhio, cnd_ed_hhblno.Text, cnd_lc_mhno.Text)
scwin._getCommonParam_freight = function () {
  return {
    kcomcd: scwin.hd_kcomcd || "",
    // 법인코드
    seaair: "S",
    // sea:S, air:A
    iogb: scwin.hd_hhio || "",
    // out:O, in:I
    blno: cnd_ed_hhblno.getValue() || "",
    // house blno
    mblno: "",
    // master blno(원본: "")
    mhno: cnd_lc_mhno.getValue() || "" // mhno
  };
};

//-------------------------------------------------------------------------
// 화면이동 (Freight) - GAUCE f_openPgm_freight 변환
//-------------------------------------------------------------------------
// ※ 원본은 URL querystring으로 붙였지만,
//   WebSquare는 openMenu + param 객체로 전달(서버단에서 param을 쿼리로 받도록 되어있다면 자동 매핑)
scwin.f_openPgm_freight = function (name) {
  var p = scwin._getCommonParam_freight();
  if (name == "Partner") {
    scwin._openMenu("Partner Statement", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", p);
  } else if (name == "Invoice") {
    scwin._openMenu("Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", p);
  } else if (name == "Profit") {
    scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", p);
  } else if (name == "HouseBLFind") {
    scwin._openMenu("House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.xml", {
      hhio: scwin.hd_hhio || ""
    });
  } else if (name == "HouseBLHeader") {
    scwin._openMenu("Export House B/L", "/ui/il/seaout/sobl/se_105_01_01b.xml", "se_105_01_01b.xml", {
      linkcheck: "2",
      kcomcd: p.kcomcd,
      blno: p.blno,
      mhno: p.mhno
    });
  } else if (name == "paymentINV") {
    // 원본: /il/acc/acpay/ac_106_01_01b.xml?kcomcd=...&seaair=S&iogb=...&blno=...&mhno=...
    // (mblno 없음)
    scwin._openMenu("Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
      kcomcd: p.kcomcd,
      seaair: p.seaair,
      iogb: p.iogb,
      blno: p.blno,
      mhno: p.mhno
    });
  }
};

//-------------------------------------------------------------------------
// Freight - 공통 유틸 (값/데이터셋 접근)
//-------------------------------------------------------------------------

// 컴포넌트 값 get/set (input / w2 컴포넌트 모두 대응)
scwin._getVal = function (comp) {
  if (!comp) return "";
  if (typeof comp.getValue == "function") return String(comp.getValue() || "").trim();
  if (comp.getValue() != null) return String(comp.getValue() || "").trim();
  if (comp.Text != null) return String(comp.Text || "").trim(); // (GAUCE 잔재 방어)
  return "";
};
scwin._setVal = function (comp, v) {
  if (!comp) return;
  if (typeof comp.setValue == "function") comp.setValue(v);else if (comp.getValue() != null) comp.setValue(v);else if (comp.Text != null) comp.Text = v; // (GAUCE 잔재 방어)
};

// dataset get/set (WebSquare DataList 기준)
scwin._dsGet = function (ds, row, col) {
  if (!ds) return "";
  if (typeof ds.getCellData == "function") return ds.getCellData(row, col);
  // 혹시 NameValue 형태 남아있으면 방어
  if (typeof ds.NameValue == "function") return ds.NameValue(row, col);
  return "";
};
scwin._dsSet = function (ds, row, col, val) {
  if (!ds) return;
  if (typeof ds.setCellData == "function") ds.setCellData(row, col, val);else if (typeof ds.NameValue == "function") ds.NameValue(row, col, val);
};

// DataID + reset 래퍼
scwin._loadByDataID = function (ds, url) {
  ds.setDataURL ? ds.setDataURL(url) : ds.DataID = url; // 프로젝트마다 DataID/setDataURL 다름
  if (typeof ds.reset == "function") ds.reset();else if (typeof ds.Reset == "function") ds.Reset();
};

// 행 포지션(프로젝트마다 0/1 base 혼재 방어)
scwin._rowPos = function (ds) {
  if (!ds) return 0;
  if (typeof ds.getRowPosition == "function") return ds.getRowPosition();
  if (ds.RowPosition != null) return ds.RowPosition;
  return 0;
};

// CountRow 방어
scwin._rowCount = function (ds) {
  if (!ds) return 0;
  if (typeof ds.getRowCount == "function") return ds.getRowCount();
  if (ds.CountRow != null) return Number(ds.CountRow) || 0;
  return 0;
};

/* ==
* 공통 유틸
* == */

// 마지막 행 추가 후 현재 rowPosition 반환
scwin._insertRowLast = function (ds) {
  ds.insert(ds.getRowCount());
  return ds.getRowPosition();
};

// trim getter (컴포넌트/인풋 혼용)
scwin._getTrim = function (comp) {
  if (!comp) return "";
  if (typeof comp.getValue == "function") return String(comp.getValue() || "").trim();
  if (comp.getValue() != null) return String(comp.getValue() || "").trim();
  if (comp.Text != null) return String(comp.Text || "").trim();
  return "";
};

// value setter
scwin._setVal = function (comp, v) {
  if (!comp) return;
  if (typeof comp.setValue == "function") comp.setValue(v);else if ("value" in comp) comp.setValue(v);else if ("Text" in comp) comp.Text = v;
};

/* ==
* 1) Combo Loading (DataID + reset -> WebSquare 방식)
*   - WebSquare에서는 DataList.setRequestURI(...) + load() 형태가 흔함
*   - 프로젝트 표준에 맞게 아래 2가지 중 하나로 쓰면 됨.
* == */

// (A) 가장 보수적: 기존 DataID/Reset 개념을 "requestURI + load"로 치환한 형태
scwin.f_ContainerTypeLoading_freight = function () {
  scwin.f_commCode(ds_containerType_freight, "ilCommonEBC", "retriveContainerTypeList");
};
scwin.f_CurrencyLoading_freight = function () {
  scwin.f_commCode(ds_currencyCode_freight, "ilCommonEBC", "retriveCurrencyCodeList");
};

/* ==
* 2) ExRate - House
* == */
scwin.f_ExRateHouseLoading_freight = async function () {
  var curRate = scwin._getTrim(ed_selling_hhexrate_freight);
  if (curRate == "" || curRate == "0") {
    var param1 = scwin._getTrim(ed_selling_hhcur_freight);
    var param2 = scwin._getTrim(ed_selling_hhcurdt_freight);
    var param3 = lc_selling_hhexgb_freight && lc_selling_hhexgb_freight.getValue ? lc_selling_hhexgb_freight.getValue() : lc_selling_hhexgb_freight.BindColVal || "";
    var params = {
      sysCd: "ilCommonEBC",
      queryId: "retrieveExRate",
      param1: param1,
      param2: param2,
      param3: param3,
      param4: ""
    };
    await scwin.execComboAndCopy(params, {
      target: ds_exHouseRate_freight,
      responsePath: "GAUCE"
    });

    // GAUCE: NameValue(1,"CODE"), NameValue(1,"NAME")
    var code = ds_exHouseRate_freight.getCellData(0, "CODE");
    var name = ds_exHouseRate_freight.getCellData(0, "NAME");
    scwin._setVal(ed_selling_hhexrate_freight, code);
    scwin._setVal(ed_selling_hhuexrate_freight, name);
    if ((code == "" || code == null) && param1 != "KRW") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]);
      exRateCheck = "1";
    } else {
      exRateCheck = "2";
      exRate1 = code;
      exRate2 = name;
      crc = param1;
    }
  }
};

/* ==
* 3) ExRate - Selling Grid
* == */
scwin.f_ExRateSellingGridLoading_freight = async function () {
  var r = ds_selling_freight.getRowPosition();
  var headerCur = scwin._getTrim(ed_selling_hhcur_freight);
  var rowCur = ds_selling_freight.getCellData(r, "crcCd");
  if (headerCur == rowCur) {
    ds_selling_freight.setCellData(r, "exRate", scwin._getTrim(ed_selling_hhexrate_freight));
    return;
  }
  var exRate = ds_selling_freight.getCellData(r, "exRate");
  if (exRate == "" || exRate == "0") {
    var param1 = rowCur;
    var param2 = scwin._getTrim(ed_selling_hhcurdt_freight);
    var param3 = lc_selling_hhexgb_freight && lc_selling_hhexgb_freight.getValue ? lc_selling_hhexgb_freight.getValue() : lc_selling_hhexgb_freight.BindColVal || "";
    var params = {
      sysCd: "ilCommonEBC",
      queryId: "retrieveExRate",
      param1: param1,
      param2: param2,
      param3: param3,
      param4: ""
    };
    await scwin.execComboAndCopy(params, {
      target: ds_exRateSellingGrid_freight,
      responsePath: "GAUCE"
    });
    var code = ds_exRateSellingGrid_freight.getCellData(0, "CODE");
    ds_selling_freight.setCellData(r, "exRate", code);
    if ((code == "" || code == null) && param1 != "KRW") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]);
    }
  }
};

/* ==
* 4) ExRate - Buying Grid
* == */
scwin.f_ExRateBuyingGridLoading_freight = function () {
  var r = ds_buying_freight.getRowPosition();
  var headerCur = scwin._getTrim(ed_selling_hhcur_freight);
  var rowCur = ds_buying_freight.getCellData(r, "crcCd");
  if (headerCur == rowCur) {
    ds_buying_freight.setCellData(r, "exRate", scwin._getTrim(ed_selling_hhexrate_freight));
    return;
  }
  var exRate = ds_buying_freight.getCellData(r, "exRate");
  if (exRate == "" || exRate == "0") {
    var param1 = rowCur;
    var param2 = scwin._getTrim(ed_selling_hhcurdt_freight);
    var param3 = lc_selling_hhexgb_freight && lc_selling_hhexgb_freight.getValue ? lc_selling_hhexgb_freight.getValue() : lc_selling_hhexgb_freight.BindColVal || "";
    var uri = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveExRate" + "&param1=" + encodeURIComponent(param1) + "&param2=" + encodeURIComponent(param2) + "&param3=" + encodeURIComponent(param3);
    if (typeof ds_exRateBuyingGrid_freight.setRequestURI == "function") {
      ds_exRateBuyingGrid_freight.setRequestURI(uri);
      ds_exRateBuyingGrid_freight.load();
    } else {
      ds_exRateBuyingGrid_freight.DataID = uri;
      ds_exRateBuyingGrid_freight.reset && ds_exRateBuyingGrid_freight.reset();
    }
    var code = ds_exRateBuyingGrid_freight.getCellData(0, "CODE");
    ds_buying_freight.setCellData(r, "exRate", code);
    if ((code == "" || code == null) && param1 != "KRW") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]);
    }
  }
};

/* ==
* 5) Unit Loading (Selling/Partner/Buying 공통)
* == */

scwin._getCntTypeParam4 = function () {
  var cnt1 = "0",
    cnt2 = "0",
    cnt3 = "0",
    cnt4 = "0";
  if (scwin._getTrim(ed_hhcnt1type_freight) != "" && scwin._getTrim(ed_hhcnt1_freight) != "0") cnt1 = scwin._getTrim(ed_hhcnt1type_freight);
  if (scwin._getTrim(ed_hhcnt2type_freight) != "" && scwin._getTrim(ed_hhcnt2_freight) != "0") cnt2 = scwin._getTrim(ed_hhcnt2type_freight);
  if (scwin._getTrim(ed_hhcnt3type_freight) != "" && scwin._getTrim(ed_hhcnt3_freight) != "0") cnt3 = scwin._getTrim(ed_hhcnt3type_freight);
  if (scwin._getTrim(ed_hhcnt4type_freight) != "" && scwin._getTrim(ed_hhcnt4_freight) != "0") cnt4 = scwin._getTrim(ed_hhcnt4type_freight);
  return {
    cnt1: cnt1,
    cnt2: cnt2,
    cnt3: cnt3,
    cnt4: cnt4
  };
};
scwin.f_sellingUnitLoading_freight = function () {
  var p = scwin._getCntTypeParam4();
  var uri = "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC&queryId=retriveUnitList" + "&param1=" + encodeURIComponent(p.cnt1) + "&param2=" + encodeURIComponent(p.cnt2) + "&param3=" + encodeURIComponent(p.cnt3) + "&param4=" + encodeURIComponent(p.cnt4);
  if (typeof ds_sellingUnit_freight.setRequestURI == "function") {
    ds_sellingUnit_freight.setRequestURI(uri);
    ds_sellingUnit_freight.load();
  } else {
    ds_sellingUnit_freight.DataID = uri;
    ds_sellingUnit_freight.reset && ds_sellingUnit_freight.reset();
  }
};
scwin.f_partnerUnitLoading_freight = function () {
  var p = scwin._getCntTypeParam4();
  var uri = "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC&queryId=retriveUnitList" + "&param1=" + encodeURIComponent(p.cnt1) + "&param2=" + encodeURIComponent(p.cnt2) + "&param3=" + encodeURIComponent(p.cnt3) + "&param4=" + encodeURIComponent(p.cnt4);
  if (typeof ds_partnerUnit_freight.setRequestURI == "function") {
    ds_partnerUnit_freight.setRequestURI(uri);
    ds_partnerUnit_freight.load();
  } else {
    ds_partnerUnit_freight.DataID = uri;
    ds_partnerUnit_freight.reset && ds_partnerUnit_freight.reset();
  }
};
scwin.f_buyingUnitLoading_freight = function () {
  var p = scwin._getCntTypeParam4();
  var uri = "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC&queryId=retriveUnitList" + "&param1=" + encodeURIComponent(p.cnt1) + "&param2=" + encodeURIComponent(p.cnt2) + "&param3=" + encodeURIComponent(p.cnt3) + "&param4=" + encodeURIComponent(p.cnt4);
  if (typeof ds_buyingUnit_freight.setRequestURI == "function") {
    ds_buyingUnit_freight.setRequestURI(uri);
    ds_buyingUnit_freight.load();
  } else {
    ds_buyingUnit_freight.DataID = uri;
    ds_buyingUnit_freight.reset && ds_buyingUnit_freight.reset();
  }
};

/* ==
* 6) TariffRate Loading (Selling/Partner/Buying)
*    - tr_retrieveTariff_freight.Post() -> $c.sbm.execute(sbm_retrieveTariff_freight)
* == */

scwin.f_sellingTariffRateLoading_freight = function () {
  dma_retrieveTariff_freight.redo();
  ds_resultTariff_freight.removeAll();
  var row = scwin._insertRowLast(dma_retrieveTariff_freight);
  dma_retrieveTariff_freight.set("fgubn", '1');
  dma_retrieveTariff_freight.set("kcomcd", scwin.hd_kcomcd || "");
  dma_retrieveTariff_freight.set("apdt", scwin._getTrim(scwin.ed_hhetd_freight));
  dma_retrieveTariff_freight.set("customer", scwin._getTrim(scwin.ed_hhactcust_freight));
  dma_retrieveTariff_freight.set("partner", "");
  dma_retrieveTariff_freight.set("liner", scwin._getTrim(scwin.ed_hhliner_freight));
  dma_retrieveTariff_freight.set("loading", scwin._getTrim(scwin.ed_hhlodcd_freight));
  dma_retrieveTariff_freight.set("discharge", scwin._getTrim(scwin.ed_hhdisccd_freight));
  dma_retrieveTariff_freight.set("item", scwin.hd_hhitem_freight || "");
  dma_retrieveTariff_freight.set("cbgubn", "C");
  dma_retrieveTariff_freight.set("incoterm", "");
  dma_retrieveTariff_freight.set("userid", scwin.vUserId);
  dma_retrieveTariff_freight.set("dangerous", scwin.hd_hhdanggb_freight || "");
  dma_retrieveTariff_freight.set("commcustomer", scwin.hd_commcustomer_freight || "");
  dma_retrieveTariff_freight.set("fcode", ds_selling_freight.getCellData(ds_selling_freight.getRowPosition(), "fareEngCd"));
  dma_retrieveTariff_freight.set("currency", ds_selling_freight.getCellData(ds_selling_freight.getRowPosition(), "crcCd"));
  dma_retrieveTariff_freight.set("funit", ds_selling_freight.getCellData(ds_selling_freight.getRowPosition(), "fareUnit"));
  dma_retrieveTariff_freight.set("flag", "2");
  dma_retrieveTariff_freight.set("transTariffYn", "Y");
  dma_retrieveTariff_freight.set("blNo", scwin._getTrim(cnd_ed_hhblno));
  dma_retrieveTariff_freight.set("mhno", scwin._getTrim(cnd_lc_mhno));
  $c.sbm.execute($p, sbm_retrieveTariff_freight);
  if (ds_resultTariff_freight.getRowCount() == 0) {
    cfAlertMsg(MSG_CM_WRN_002);
    return;
  }

  // GAUCE: ds_resultTariff_freight.NameValue(dma_retrieveTariff_freight.RowPosition,"amount")
  var amount = ds_resultTariff_freight.getCellData(row, "amount");
  ds_selling_freight.setCellData(ds_selling_freight.getRowPosition(), "sellUpr", amount);
};
scwin.f_partnerTariffRateLoading_freight = function () {
  dma_retrieveTariff_freight.redo();
  ds_resultTariff_freight.removeAll();
  var row = scwin._insertRowLast(dma_retrieveTariff_freight);
  dma_retrieveTariff_freight.set("fgubn", '3');
  dma_retrieveTariff_freight.set("kcomcd", scwin.hd_kcomcd || "");
  dma_retrieveTariff_freight.set("apdt", scwin._getTrim(scwin.ed_hhetd_freight));
  dma_retrieveTariff_freight.set("customer", "");
  dma_retrieveTariff_freight.set("partner", scwin._getTrim(scwin.ed_hhagent_freight));
  dma_retrieveTariff_freight.set("liner", "");
  dma_retrieveTariff_freight.set("loading", scwin._getTrim(scwin.ed_hhlodcd_freight));
  dma_retrieveTariff_freight.set("discharge", scwin._getTrim(scwin.ed_hhdisccd_freight));
  dma_retrieveTariff_freight.set("item", scwin.hd_hhitem_freight || "");
  dma_retrieveTariff_freight.set("cbgubn", "C");
  dma_retrieveTariff_freight.set("incoterm", "");
  dma_retrieveTariff_freight.set("userid", scwin.vUserId);
  dma_retrieveTariff_freight.set("dangerous", scwin.hd_hhdanggb_freight || "");
  dma_retrieveTariff_freight.set("commcustomer", scwin.hd_commcustomer_freight || "");
  dma_retrieveTariff_freight.set("fcode", ds_partner_freight.getCellData(ds_partner_freight.getRowPosition(), "fareEngCd"));
  dma_retrieveTariff_freight.set("currency", ds_partner_freight.getCellData(ds_partner_freight.getRowPosition(), "crcCd"));
  dma_retrieveTariff_freight.set("funit", ds_partner_freight.getCellData(ds_partner_freight.getRowPosition(), "fareUnit"));
  dma_retrieveTariff_freight.set("flag", "2");
  dma_retrieveTariff_freight.set("transTariffYn", "N");
  dma_retrieveTariff_freight.set("blNo", "");
  dma_retrieveTariff_freight.set("mhno", "");
  $c.sbm.execute($p, sbm_retrieveTariff_freight);
  if (ds_resultTariff_freight.getRowCount() == 0) {
    cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  var amount = ds_resultTariff_freight.getCellData(row, "amount");
  ds_partner_freight.setCellData(ds_partner_freight.getRowPosition(), "sellUpr", amount);
};
scwin.f_buyingTariffRateLoading_freight = function () {
  dma_retrieveTariff_freight.redo();
  ds_resultTariff_freight.removeAll();
  var row = scwin._insertRowLast(dma_retrieveTariff_freight);
  dma_retrieveTariff_freight.set("fgubn", '2');
  dma_retrieveTariff_freight.set("kcomcd", scwin.hd_kcomcd || "");
  dma_retrieveTariff_freight.set("apdt", scwin._getTrim(scwin.ed_hhetd_freight));
  dma_retrieveTariff_freight.set("customer", scwin._getTrim(scwin.ed_hhactcust_freight));
  dma_retrieveTariff_freight.set("partner", "");
  dma_retrieveTariff_freight.set("liner", scwin._getTrim(scwin.ed_hhliner_freight));
  dma_retrieveTariff_freight.set("loading", scwin._getTrim(scwin.ed_hhlodcd_freight));
  dma_retrieveTariff_freight.set("discharge", scwin._getTrim(scwin.ed_hhdisccd_freight));
  dma_retrieveTariff_freight.set("item", scwin.hd_hhitem_freight || "");
  dma_retrieveTariff_freight.set("cbgubn", "C");
  dma_retrieveTariff_freight.set("incoterm", "");
  dma_retrieveTariff_freight.set("userid", scwin.vUserId);
  dma_retrieveTariff_freight.set("dangerous", scwin.hd_hhdanggb_freight || "");
  dma_retrieveTariff_freight.set("commcustomer", scwin.hd_commcustomer_freight || "");
  dma_retrieveTariff_freight.set("fcode", ds_buying_freight.getCellData(ds_buying_freight.getRowPosition(), "fareEngCd"));
  dma_retrieveTariff_freight.set("currency", ds_buying_freight.getCellData(ds_buying_freight.getRowPosition(), "crcCd"));
  dma_retrieveTariff_freight.set("funit", ds_buying_freight.getCellData(ds_buying_freight.getRowPosition(), "fareUnit"));
  dma_retrieveTariff_freight.set("flag", "2");
  dma_retrieveTariff_freight.set("transTariffYn", "Y");
  dma_retrieveTariff_freight.set("blNo", scwin._getTrim(cnd_ed_hhblno));
  dma_retrieveTariff_freight.set("mhno", scwin._getTrim(cnd_lc_mhno));
  $c.sbm.execute($p, sbm_retrieveTariff_freight);
  if (ds_resultTariff_freight.getRowCount() == 0) {
    cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  var amount = ds_resultTariff_freight.getCellData(row, "amount");
  ds_buying_freight.setCellData(ds_buying_freight.getRowPosition(), "pchsUpr", amount);
};

/* ==
* 7) Tariff All (Selling/Partner/Buying)
* == */

scwin.f_tariffAllLoading_freight = async function (disGubun) {
  // container type param
  var p = scwin._getCntTypeParam4();
  dma_retrieveTariff_freight.redo();
  ds_resultTariff_freight.removeAll();
  var row = scwin._insertRowLast(dma_retrieveTariff_freight);

  // 공통
  dma_retrieveTariff_freight.set("kcomcd", scwin.hd_kcomcd || "");
  dma_retrieveTariff_freight.set("apdt", scwin._getTrim(scwin.ed_hhetd_freight));
  dma_retrieveTariff_freight.set("loading", scwin._getTrim(scwin.ed_hhlodcd_freight));
  dma_retrieveTariff_freight.set("discharge", scwin._getTrim(scwin.ed_hhdisccd_freight));
  dma_retrieveTariff_freight.set("item", scwin.hd_hhitem_freight || "");
  dma_retrieveTariff_freight.set("container1", p.cnt1);
  dma_retrieveTariff_freight.set("container2", p.cnt2);
  dma_retrieveTariff_freight.set("container3", p.cnt3);
  dma_retrieveTariff_freight.set("container4", p.cnt4);
  dma_retrieveTariff_freight.set("cbgubn", "C");
  dma_retrieveTariff_freight.set("incoterm", "");
  dma_retrieveTariff_freight.set("userid", scwin.vUserId);
  dma_retrieveTariff_freight.set("dangerous", scwin.hd_hhdanggb_freight || "");
  dma_retrieveTariff_freight.set("commcustomer", scwin.hd_commcustomer_freight || "");
  dma_retrieveTariff_freight.set("flag", "1");

  // disGubun 별 분기
  if (disGubun == "0") {
    // Selling
    if (ds_selling_freight.getRowCount() != 0) {
      cfAlertMsg(MSG_CM_WRN_011, ["Selling Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    dma_retrieveTariff_freight.set("fgubn", "1");
    dma_retrieveTariff_freight.set("customer", scwin._getTrim(scwin.ed_hhactcust_freight));
    dma_retrieveTariff_freight.set("partner", "");
    dma_retrieveTariff_freight.set("liner", scwin._getTrim(scwin.ed_hhliner_freight));
    dma_retrieveTariff_freight.set("transTariffYn", "Y");
    dma_retrieveTariff_freight.set("blNo", scwin._getTrim(cnd_ed_hhblno));
    dma_retrieveTariff_freight.set("mhno", scwin._getTrim(cnd_lc_mhno));
    $c.sbm.execute($p, sbm_retrieveTariff_freight);
    if (ds_resultTariff_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_WRN_002);
      return;
    }

    // 결과 반영
    for (var i = 1; i <= ds_resultTariff_freight.getRowCount(); i++) {
      f_addRow_freight(1); // 기존 함수(이미 WS로 변환된 것으로 가정)
      var r = ds_selling_freight.getRowPosition();
      ds_selling_freight.setCellData(r, "fareEngCd", ds_resultTariff_freight.getCellData(i, "fareEngCd"));
      scwin.f_PopUpGrid_freight("SellingFcode", r, "T", "F");
      ds_selling_freight.setCellData(r, "crcCd", ds_resultTariff_freight.getCellData(i, "crcCd"));
      ds_selling_freight.setCellData(r, "fareUnit", ds_resultTariff_freight.getCellData(i, "fareUnit"));
      f_packageRateSellingLoading_freight(r, "");
      ds_selling_freight.setCellData(r, "sellUpr", ds_resultTariff_freight.getCellData(i, "amount"));
      f_sellingAmtFcrc_freight(r, "", "");
      scwin.f_ExRateSellingGridLoading_freight();
      f_sellingAmt_freight(r, "", "");
      f_sellingVat_freight(r, "", "");
      f_sellingUsdAmt_freight(r, "", "");
    }

    // package 0 삭제 (역순)
    for (var d = ds_selling_freight.getRowCount(); d >= 1; d--) {
      if (ds_selling_freight.getCellData(d, "chgWt") == "0") {
        ds_selling_freight.deleteRow(d);
      }
    }
  } else if (disGubun == "1") {
    // Partner

    if (ds_partner_freight.getRowCount() != 0) {
      cfAlertMsg(MSG_CM_WRN_011, ["Partner Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    dma_retrieveTariff_freight.set("fgubn", "3");
    dma_retrieveTariff_freight.set("customer", "");
    dma_retrieveTariff_freight.set("partner", scwin._getTrim(scwin.ed_hhagent_freight));
    dma_retrieveTariff_freight.set("liner", "");
    dma_retrieveTariff_freight.set("transTariffYn", "N");
    dma_retrieveTariff_freight.set("blNo", "");
    dma_retrieveTariff_freight.set("mhno", "");
    $c.sbm.execute($p, sbm_retrieveTariff_freight);
    if (ds_resultTariff_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_WRN_002);
      return;
    }
    for (var i2 = 1; i2 <= ds_resultTariff_freight.getRowCount(); i2++) {
      f_addRow_freight(2);
      var r2 = ds_partner_freight.getRowPosition();
      ds_partner_freight.setCellData(r2, "fareEngCd", ds_resultTariff_freight.getCellData(i2, "fareEngCd"));
      ds_partner_freight.setCellData(r2, "drCrCls", "D");
      scwin.f_PopUpGrid_freight("PartnerFcode", r2, "T", "F");
      ds_partner_freight.setCellData(r2, "crcCd", ds_resultTariff_freight.getCellData(i2, "crcCd"));
      ds_partner_freight.setCellData(r2, "fareUnit", ds_resultTariff_freight.getCellData(i2, "fareUnit"));
      f_packageRatePartnerLoading_freight(r2, "");
      ds_partner_freight.setCellData(r2, "sellUpr", ds_resultTariff_freight.getCellData(i2, "amount"));
      f_partnerAmtFcrc_freight(r2, "", "");
      // 원본에 f_ExRatePartnerGridLoading_freight() 있었음 (네 프로젝트에 존재한다고 가정)
      if (typeof f_ExRatePartnerGridLoading_freight == "function") {
        f_ExRatePartnerGridLoading_freight();
      }
      f_partnerAmt_freight(r2, "", "");
      f_partnerUsdAmt_freight(r2, "", "");
    }
    for (var d2 = ds_partner_freight.getRowCount(); d2 >= 1; d2--) {
      if (ds_partner_freight.getCellData(d2, "chgWt") == "0") {
        ds_partner_freight.deleteRow(d2);
      }
    }
  } else if (disGubun == "2") {
    // Buying

    if (ds_buying_freight.getRowCount() != 0) {
      cfAlertMsg(MSG_CM_WRN_011, ["Buying Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    dma_retrieveTariff_freight.set("fgubn", "2");
    dma_retrieveTariff_freight.set("customer", scwin._getTrim(scwin.ed_hhactcust_freight));
    dma_retrieveTariff_freight.set("partner", "");
    dma_retrieveTariff_freight.set("liner", scwin._getTrim(scwin.ed_hhliner_freight));
    dma_retrieveTariff_freight.set("transTariffYn", "Y");
    dma_retrieveTariff_freight.set("blNo", scwin._getTrim(cnd_ed_hhblno));
    dma_retrieveTariff_freight.set("mhno", scwin._getTrim(cnd_lc_mhno));
    $c.sbm.execute($p, sbm_retrieveTariff_freight);
    if (ds_resultTariff_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_WRN_002);
      return;
    }
    for (var i3 = 1; i3 <= ds_resultTariff_freight.getRowCount(); i3++) {
      f_addRow_freight(3);
      var r3 = ds_buying_freight.getRowPosition();
      ds_buying_freight.setCellData(r3, "pchsTyp", "1");
      ds_buying_freight.setCellData(r3, "fareEngCd", ds_resultTariff_freight.getCellData(i3, "fareEngCd"));
      scwin.f_PopUpGrid_freight("BuyingFcode", r3, "T", "F");
      ds_buying_freight.setCellData(r3, "crcCd", ds_resultTariff_freight.getCellData(i3, "crcCd"));
      ds_buying_freight.setCellData(r3, "fareUnit", ds_resultTariff_freight.getCellData(i3, "fareUnit"));
      f_packageRateBuyingLoading_freight(r3, "");
      ds_buying_freight.setCellData(r3, "pchsUpr", ds_resultTariff_freight.getCellData(i3, "amount"));
      f_buyingAmtFcrc_freight(r3, "", "");
      scwin.f_ExRateBuyingGridLoading_freight();
      f_buyingAmt_freight(r3, "", "");
      f_buyingVat_freight(r3, "", "");
      f_buyingUsdAmt_freight(r3, "", "");
    }
    for (var d3 = ds_buying_freight.getRowCount(); d3 >= 1; d3--) {
      if (ds_buying_freight.getCellData(d3, "chgWt") == "0") {
        ds_buying_freight.deleteRow(d3);
      }
    }
  }
};

// ---------------------------
// DataList 공통 유틸
// ---------------------------
scwin._ds = scwin._ds || {};
scwin._ds.rowCount = function (ds) {
  return ds.getRowCount();
};
scwin._ds.pos = function (ds) {
  return ds.getRowPosition();
};

// GAUCE NameValue(row, col) getter/setter
scwin._ds.get = function (ds, r, c) {
  return ds.getCellData(r, c);
};
scwin._ds.set = function (ds, r, c, v) {
  ds.setCellData(r, c, v);
};

// GAUCE RowStatus(i) != "2" (삭제 제외) 대응
// WebSquare는 보통 "D" / "U" / "I" / "" 형태. 프로젝트에 맞게 필요 시 보완.
scwin._ds.isDeleted = function (ds, r) {
  var st = ds.getRowStatus(r);
  return st == "D" || st == "2"; // GAUCE "2"를 함께 허용
};

// 숫자 안전 변환
scwin._n = function (v) {
  if (v == null || v == undefined || v == "") return 0;
  var x = Number(v);
  return isNaN(x) ? 0 : x;
};

// Text 컴포넌트 값 getter (ed_xxx.Text → ed_xxx.getValue())
scwin._val = function (comp) {
  return comp.getValue();
};

// -------------------------------------------------------------------------
// Customer, Ex-rate Change 가져오기 (Selling/Partner/Buying 공통)
// disGubun: "0" Selling, "1" Partner, "2" Buying
// -------------------------------------------------------------------------
scwin.f_exRateChange_freight = async function (disGubun) {
  // 설정 테이블
  var cfgMap = {
    "0": {
      // Selling
      ds: ds_selling_freight,
      emptyMsg: ["Selling Information"],
      certiCol: "certiNo",
      curComp: ed_selling_hhcur_freight,
      exComp: ed_selling_hhexrate_freight,
      after: function (i) {
        scwin.f_sellingAmt_freight(i, "", "");
        scwin.f_sellingVat_freight(i, "", "");
        scwin.f_sellingUsdAmt_freight(i, "", "");
      }
    },
    "1": {
      // Partner
      ds: ds_partner_freight,
      emptyMsg: ["Partner Information"],
      certiCol: "certiNo",
      curComp: ed_partner_hhcur_freight,
      exComp: ed_partner_hhexrate_freight,
      after: function (i) {
        scwin.f_partnerAmt_freight(i, "", "");
        // scwin.f_partnerVat_freight(i,"",""); // 원본에서도 주석
        scwin.f_partnerUsdAmt_freight(i, "", "");
      }
    },
    "2": {
      // Buying
      ds: ds_buying_freight,
      emptyMsg: ["Buying Information"],
      certiCol: "pchsCertiNo",
      curComp: ed_buying_hhcur_freight,
      exComp: ed_buying_hhexrate_freight,
      after: function (i) {
        scwin.f_buyingAmt_freight(i, "", "");
        scwin.f_buyingVat_freight(i, "", "");
        scwin.f_buyingUsdAmt_freight(i, "", "");
      }
    }
  };
  var cfg = cfgMap[String(disGubun)];
  if (!cfg) return;
  var ds = cfg.ds;
  if (scwin._ds.rowCount(ds) == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, cfg.emptyMsg);
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  var cur = scwin._val(cfg.curComp);
  var ex = scwin._val(cfg.exComp);
  for (var i = 0; i < scwin._ds.rowCount(ds); i++) {
    var certi = (scwin._ds.get(ds, i, cfg.certiCol) || "").trim();
    if (certi != "") continue;
    var crcCd = scwin._ds.get(ds, i, "crcCd");
    if (crcCd == cur) {
      scwin._ds.set(ds, i, "exRate", ex);
      cfg.after(i);
    }
  }
};

// -------------------------------------------------------------------------
// Tariff 버튼: package/rate 계산 공통
// ds: ds_selling_freight / ds_partner_freight / ds_buying_freight
// -------------------------------------------------------------------------
scwin._calcPackageRate_freight = function (ds) {
  var pos = scwin._ds.pos(ds);
  var v_wgt = scwin._n(scwin._val(ed_hhgwgt_freight)) / 1000;
  var v_msr = scwin._n(scwin._val(ed_hhmsr_freight));
  var v_wgtR = Math.ceil(v_wgt);
  var v_msrR = Math.ceil(v_msr);
  var fareEngCd = scwin._ds.get(ds, pos, "fareEngCd");
  var fareUnit = scwin._ds.get(ds, pos, "fareUnit");
  var wgt = fareEngCd == "WFG" ? v_wgtR : v_wgt;
  var msr = fareEngCd == "WFG" ? v_msrR : v_msr;

  // WGT / M/T
  if (fareUnit == "WGT" || fareUnit == "M/T") {
    if (fareEngCd == "WFG") {
      scwin._ds.set(ds, pos, "chgWt", Math.ceil(scwin._n(scwin._val(ed_hhgwgt_freight)) / 1000));
    } else if (fareUnit == "M/T") {
      scwin._ds.set(ds, pos, "chgWt", scwin._n(scwin._val(ed_hhgwgt_freight)) / 1000);
    } else {
      scwin._ds.set(ds, pos, "chgWt", scwin._val(ed_hhgwgt_freight));
    }
    return;
  }

  // R/T
  if (fareUnit == "R/T") {
    var base = v_wgt > v_msr ? wgt : msr;
    scwin._ds.set(ds, pos, "chgWt", base < 1 ? 1 : base);
    return;
  }

  // CBM
  if (fareUnit == "CBM") {
    scwin._ds.set(ds, pos, "chgWt", msr < 1 ? 1 : msr);
    return;
  }

  // CASE
  if (fareUnit == "CASE") {
    scwin._ds.set(ds, pos, "chgWt", 1);
    return;
  }

  // 컨테이너 타입별 수량 매핑
  var c1t = scwin._val(ed_hhcnt1type_freight),
    c1q = scwin._val(ed_hhcnt1_freight);
  var c2t = scwin._val(ed_hhcnt2type_freight),
    c2q = scwin._val(ed_hhcnt2_freight);
  var c3t = scwin._val(ed_hhcnt3type_freight),
    c3q = scwin._val(ed_hhcnt3_freight);
  var c4t = scwin._val(ed_hhcnt4type_freight),
    c4q = scwin._val(ed_hhcnt4_freight);
  if (fareUnit == c1t) scwin._ds.set(ds, pos, "chgWt", c1q);else if (fareUnit == c2t) scwin._ds.set(ds, pos, "chgWt", c2q);else if (fareUnit == c3t) scwin._ds.set(ds, pos, "chgWt", c3q);else if (fareUnit == c4t) scwin._ds.set(ds, pos, "chgWt", c4q);
};

// 개별 호출 함수(기존 이름 유지)
scwin.f_packageRateSellingLoading_freight = function (row, colid) {
  scwin._calcPackageRate_freight(ds_selling_freight);
};
scwin.f_packageRatePartnerLoading_freight = function (row, colid) {
  scwin._calcPackageRate_freight(ds_partner_freight);
};
scwin.f_packageRateBuyingLoading_freight = function (row, colid) {
  scwin._calcPackageRate_freight(ds_buying_freight);
};

// Amount(외화)
scwin.f_sellingAmtFcrc_freight = function (row) {
  if (scwin._ds.get(ds_selling_freight, row, "crcCd") == "KRW") {
    scwin._ds.set(ds_selling_freight, row, "sellAmtFcrc", 0);
  } else {
    var v = scwin._n(scwin._ds.get(ds_selling_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_selling_freight, row, "sellUpr"));
    scwin._ds.set(ds_selling_freight, row, "sellAmtFcrc", Math.round(v * 100) / 100);
  }
};
scwin.f_partnerAmtFcrc_freight = function (row) {
  if (scwin._ds.get(ds_partner_freight, row, "crcCd") == "KRW") {
    scwin._ds.set(ds_partner_freight, row, "sellAmtFcrc", 0);
  } else {
    var v = scwin._n(scwin._ds.get(ds_partner_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_partner_freight, row, "sellUpr"));
    scwin._ds.set(ds_partner_freight, row, "sellAmtFcrc", Math.round(v * 100) / 100);
  }
};
scwin.f_buyingAmtFcrc_freight = function (row) {
  if (scwin._ds.get(ds_buying_freight, row, "crcCd") == "KRW") {
    scwin._ds.set(ds_buying_freight, row, "pchsAmtFcrc", 0);
  } else {
    var v = scwin._n(scwin._ds.get(ds_buying_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_buying_freight, row, "pchsUpr"));
    scwin._ds.set(ds_buying_freight, row, "pchsAmtFcrc", Math.round(v * 100) / 100);
  }
};

// 화폐 Unit
scwin.f_Currency_Unit_freight = function (curr) {
  return curr != "JPY" && curr != "ITL" && curr != "IDR" && curr != "ESP" ? 1 : 100;
};

// Amount(원화)
scwin.f_sellingAmt_freight = function (row) {
  if (scwin._ds.get(ds_selling_freight, row, "crcCd") == "KRW") {
    var w = scwin._n(scwin._ds.get(ds_selling_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_selling_freight, row, "sellUpr"));
    scwin._ds.set(ds_selling_freight, row, "sellAmt", Math.round(w));
  } else {
    var unit = scwin.f_Currency_Unit_freight(scwin._ds.get(ds_selling_freight, row, "crcCd"));
    var v = scwin._n(scwin._ds.get(ds_selling_freight, row, "sellAmtFcrc")) * scwin._n(scwin._ds.get(ds_selling_freight, row, "exRate"));
    scwin._ds.set(ds_selling_freight, row, "sellAmt", Math.round(v) / unit);
  }
};
scwin.f_partnerAmt_freight = function (row) {
  if (scwin._ds.get(ds_partner_freight, row, "crcCd") == "KRW") {
    var w = scwin._n(scwin._ds.get(ds_partner_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_partner_freight, row, "sellUpr"));
    scwin._ds.set(ds_partner_freight, row, "sellAmt", Math.round(w));
  } else {
    var unit = scwin.f_Currency_Unit_freight(scwin._ds.get(ds_partner_freight, row, "crcCd"));
    var v = scwin._n(scwin._ds.get(ds_partner_freight, row, "sellAmtFcrc")) * scwin._n(scwin._ds.get(ds_partner_freight, row, "exRate"));
    scwin._ds.set(ds_partner_freight, row, "sellAmt", Math.round(v) / unit);
  }
};
scwin.f_buyingAmt_freight = function (row) {
  if (scwin._ds.get(ds_buying_freight, row, "crcCd") == "KRW") {
    var w = scwin._n(scwin._ds.get(ds_buying_freight, row, "chgWt")) * scwin._n(scwin._ds.get(ds_buying_freight, row, "pchsUpr"));
    scwin._ds.set(ds_buying_freight, row, "pchsAmt", Math.round(w));
  } else {
    var v = scwin._n(scwin._ds.get(ds_buying_freight, row, "pchsAmtFcrc")) * scwin._n(scwin._ds.get(ds_buying_freight, row, "exRate"));
    scwin._ds.set(ds_buying_freight, row, "pchsAmt", Math.round(v));
  }
};

// Amount($)
scwin.f_sellingUsdAmt_freight = function (row) {
  var u = scwin._val(ed_selling_hhuexrate_freight);
  if (u != "0" && u != "") {
    var v = scwin._n(scwin._ds.get(ds_selling_freight, row, "sellAmt")) / scwin._n(u);
    scwin._ds.set(ds_selling_freight, row, "usdAmt", Math.round(v * 100) / 100);
  }
};
scwin.f_partnerUsdAmt_freight = function (row) {
  var u = scwin._val(ed_partner_hhuexrate_freight);
  if (u != "0" && u != "") {
    var v = scwin._n(scwin._ds.get(ds_partner_freight, row, "sellAmt")) / scwin._n(u);
    scwin._ds.set(ds_partner_freight, row, "usdAmt", Math.round(v * 100) / 100);
  }
};
scwin.f_buyingUsdAmt_freight = function (row) {
  var u = scwin._val(ed_buying_hhuexrate_freight);
  if (u != "0" && u != "") {
    var v = scwin._n(scwin._ds.get(ds_buying_freight, row, "pchsAmt")) / scwin._n(u);
    scwin._ds.set(ds_buying_freight, row, "usdAmt", Math.round(v * 100) / 100);
  }
};

// VAT
scwin.f_sellingVat_freight = function (row) {
  if (scwin._ds.get(ds_selling_freight, row, "vatYn") == "0") {
    scwin._ds.set(ds_selling_freight, row, "vatAmt", 0);
  } else {
    var v = scwin._n(scwin._ds.get(ds_selling_freight, row, "sellAmt")) * 0.1;
    scwin._ds.set(ds_selling_freight, row, "vatAmt", Math.round(v * 100) / 100);
  }
};
scwin.f_buyingVat_freight = function (row) {
  if (scwin._ds.get(ds_buying_freight, row, "vatYn") == "0") {
    scwin._ds.set(ds_buying_freight, row, "vat", 0);
  } else {
    var v = scwin._n(scwin._ds.get(ds_buying_freight, row, "pchsAmt")) * 0.1;
    scwin._ds.set(ds_buying_freight, row, "vat", Math.round(v * 100) / 100);
  }
};

// -------------------------------------------------------------------------
// INVOICE NO 유무 체크 (WebSquare)
// - ds_invoiceCheck가 OUT_DS1으로 내려온다고 가정
// - sbm_invoiceCheck submission을 하나 만들어 두는 방식 권장
// -------------------------------------------------------------------------
scwin.f_invoiceCheck_freight = async function () {
  var odrNo = scwin._ds.get(ds_houseblList_freight, ds_houseblList_freight.getRowPosition(), "odrNo");
  invoiceCheck = "0";

  // 예) queryId=retriveInvoiceCheckCombo
  await scwin.f_commCode(ds_invoiceCheck, "SeaExportHouseEBC", "retriveInvoiceCheckCombo", odrNo);

  // 결과 dataset(ds_invoiceCheck)에 code가 들어온다고 가정
  var code = scwin._ds.get(ds_invoiceCheck, ds_invoiceCheck.getRowPosition(), "code");
  if (String(code) != "0") invoiceCheck = "1";
};

//-------------------------------------------------------------------------
// Department 가져오기
//-------------------------------------------------------------------------
scwin.f_departmentChange = async function () {
  var rtnList = null;
  var buyer = ed_hhbuyer.getValue ? ed_hhbuyer.getValue().trim() : (ed_hhbuyer.getValue() || "").trim();
  var buyerNm = txt_hhbuyernm.getValue ? txt_hhbuyernm.getValue().trim() : (txt_hhbuyernm.getValue() || "").trim();
  if (buyer === "") return;
  var url = "/ui/il/common/ilCommonDeptChange.xml?pdept=" + encodeURIComponent(buyer) + "&pdeptnm=" + encodeURIComponent(buyerNm);
  rtnList = await scwin._openPopup(url, {
    width: 460,
    height: 280,
    modal: true
  }, {}); // rtnList[0]="N/A", rtnList[1]=ed_newdept, rtnList[2]=txt_newdeptnm

  if (typeof rtnList !== "undefined" && rtnList && rtnList[0] === "N/A") {
    if ((rtnList[1] || "").trim() === "" || (rtnList[2] || "").trim() === "") return;

    // 부서 변경 프로시저 호출 시작

    dma_DeptChangeParam.set("modrNo", "");
    dma_DeptChangeParam.set("hodrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
    dma_DeptChangeParam.set("kcomcd", scwin.hd_kcomcd.getValue ? scwin.hd_kcomcd : scwin.hd_kcomcd);
    dma_DeptChangeParam.set("bulkGb", "");
    dma_DeptChangeParam.set("dept", (rtnList[1] || "").trim());
    dma_DeptChangeParam.set("deptnm", (rtnList[2] || "").trim());
    if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001))) {
      await $c.sbm.execute($p, sbm_DeptChange);
      var spMsg = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spMsg");
      var spRtn = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spRtn");
      if (spRtn === "0") {
        if (txt_hhbuyernm.setValue) txt_hhbuyernm.setValue((rtnList[2] || "").trim());else txt_hhbuyernm.setValue((rtnList[2] || "").trim());
        if (ed_hhbuyer.setValue) ed_hhbuyer.setValue((rtnList[1] || "").trim());else ed_hhbuyer.setValue((rtnList[1] || "").trim());
        await $c.win.alert($p, $c.data.getMessage($p, MSG_LO_WRN_009));
      } else if (spRtn === "-2") {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_LO_WRN_007));
      } else {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_LO_WRN_008));
      }
    }
    // 부서 변경 프로시저 호출 끝
  }
};

//-------------------------------------------------------------------------
// Container Receive 가져오기
//-------------------------------------------------------------------------
scwin.f_cntrReceive = function () {
  // param1 = ed_hhbkgno.Text + lc_hhbkgseq.BindColVal
  var param1 = scwin._getVal(ed_hhbkgno) + String(lc_hhbkgseq.getValue ? lc_hhbkgseq.getValue() : "");
  var url = "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC" + "&queryId=retriveContainerHouseReceive" + "&param1=" + encodeURIComponent(param1);
  if (typeof sbm_containerReceive.setAction === "function") {
    sbm_containerReceive.setAction(url);
  }
  $c.sbm.execute($p, sbm_containerReceive);
  if (ds_containerReceive.getRowCount() == 0) return;
  if (ds_ocContList.getRowCount() != 0) return;

  // GAUCE: for i=1..CountRow, f_addRow(1) ...
  // WebSquare: 0-base 가정. 필요 시 f_addRow_ws로 교체
  for (var i = 0; i < ds_containerReceive.getRowCount(); i++) {
    // 기존 f_addRow(1) 대체: ds_ocContList에 행 추가만 필요하면 insert 사용
    if (typeof scwin.f_addRow === "function") scwin.f_addRow(1);else ds_ocContList.insert(ds_ocContList.getRowCount());
    var newRow = ds_ocContList.getRowCount() - 1;
    ds_ocContList.setCellData(newRow, "mccntno", ds_containerReceive.getCellData(i, "CODE") || "");
    ds_ocContList.setCellData(newRow, "mctype", ds_containerReceive.getCellData(i, "NAME") || "");
  }
};

//-------------------------------------------------------------------------
// 부서 Change (모달 -> WebSquare popup 권장. 여기서는 기존 showModalDialog 형태 유지/대체)
// INVOICE 있어도 변경 가능 요구로 버튼 활성화
//-------------------------------------------------------------------------
scwin.f_openContainerPopup = async function () {
  var param = {};
  param[0] = scwin.ed_carrierBkNo;
  var rtnList = await scwin._openPopup("/ui/il/seaout/sobl/se_107_01_01p.xml?paramTitle=ContainerListPopup", {
    width: 550,
    height: 410,
    modal: true
  }, param);
  var k = ds_ocContList.getRowCount();
  if (rtnList == null) {
    return false;
  }
  for (var i = k; i < rtnList.length + k; i++) {
    for (var t = 0; t < ds_ocContList.getRowCount(); t++) {
      if (ds_ocContList.getCellData(t, "mccntno") == rtnList[i - k][3]) {
        await $c.win.alert($p, "Container [" + rtnList[i - k][3] + "] already exists");
        return false;
      }
    }
    $c.data.insertRow($p, ds_ocContList);
    ds_ocContList.setCellData(i, "kcomcd", scwin.hd_kcomcd.getValue ? scwin.hd_kcomcd : scwin.hd_kcomcd);
    ds_ocContList.setCellData(i, "mchblno", cnd_ed_hhblno.getValue ? cnd_ed_hhblno.getValue() : cnd_ed_hhblno.getValue());
    ds_ocContList.setCellData(i, "mhno", cnd_lc_mhno.getValue ? cnd_lc_mhno.getValue() : cnd_lc_mhno.getValue());
    ds_ocContList.setCellData(i, "inpid", scwin.userId);
    ds_ocContList.setCellData(i, "mccntno", rtnList[i - k][3]);
    ds_ocContList.setCellData(i, "mctype", rtnList[i - k][7]);
    ds_ocContList.setCellData(i, "mcseal1", rtnList[i - k][6]);
  }
  return true;
};

//-------------------------------------------------------------------------
// vsl / vyg trim
//-------------------------------------------------------------------------
scwin.f_trimVsl = function () {
  var v = scwin._getVal(txt_hhvsl);
  scwin._setVal(txt_hhvsl, v);
};
scwin.f_trimVyg = function () {
  var v = scwin._getVal(txt_hhvyg);
  scwin._setVal(txt_hhvyg, v);
};

//-------------------------------------------------------------------------
// 엑셀저장 (그리드 -> 엑셀)
//-------------------------------------------------------------------------
scwin.f_runExcel1 = async function (varGrNm) {
  var totCnt = ds_ocContList.getRowCount();
  var sheetTitle = "Container List_" + scwin.strCurDate;
  if (totCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      scwin.f_ExportExcel("ds_ocContList", "gr_ocContList", sheetTitle);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_runExcel = async function (varGrNm) {
  var totCnt = ds_ocContList.getRowCount();
  var sheetTitle = "Container List_" + scwin.strCurDate;
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    scwin.f_ExportExcel("ds_ocContList", "gr_ocContList", sheetTitle);
  }
};
scwin.f_runExcel2 = async function (varGrNm) {
  var totCnt = ds_ocElList.getRowCount();
  var sheetTitle = "수출신고_" + scwin.strCurDate;
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      scwin.f_ExportExcel("ds_ocElList", "gr_ocElList", sheetTitle);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드 (WebSquare 변환본)
// - confirm => await $c.win.confirm()
// - GAUCE: grid.SetExcelTitle + cfGridToExcel  →  $c.data.downloadGridViewExcel
// - dataId.CountRow → dataId.getRowCount()
//-------------------------------------------------------------------------
scwin.f_ExportExcel = async function (dataId, gridId, sheetName) {
  // rowcount 체크
  var countA = dataId && typeof dataId.getRowCount == "function" ? dataId.getRowCount() : 0;
  if (!(countA > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }

  // gridId별 제목/파일명
  var sheetName = sheetName;
  var fileName = sheetName;

  // GridView 객체 얻기 (eval 대신 $p.getComponent 사용 권장)
  // 프로젝트에 따라 $p.top().getComponent / $p.getComponent 등 사용
  var gridView = $c.util.getComponent($p, gridId);
  if (!gridView) {
    await $c.win.alert($p, "그리드 객체를 찾을 수 없습니다 : " + gridId);
    return;
  }

  // 확인
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;

  // AS-IS SetExcelTitle 매핑
  // skiprow:1  → startRowIndex:2 (제목 1줄 + 헤더)
  var options = {
    fileName: fileName,
    // 확장자는 내부에서 처리되거나 필요시 ".xls" 추가
    sheetName: sheetName,
    type: "1",
    headerColor: "#eeeeee",
    startRowIndex: 2
  };

  // 제목(병합/스타일) - colSpan은 그리드 컬럼수에 맞춰 자동 계산(가능한 경우)
  var colSpan = 25;
  try {
    // GridView 컬럼수 추정(프로젝트 GridView API에 맞게 조정 가능)
    if (typeof gridView.getColumnCount == "function") {
      colSpan = gridView.getColumnCount();
    } else if (gridView.getGridColumns) {
      colSpan = gridView.getGridColumns().length;
    }
  } catch (e) {}
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpan,
    text: sheetName,
    // value:sheetName
    textAlign: "center",
    // align:center
    fontSize: "12px",
    // font-size:12pt
    fontName: "돋움체",
    // font-face:'돋움체'
    drawBorder: false // line-color/line-width:0pt
    // 배경/글자색은 기본값이 흰/검이라 생략(필요시 옵션 지원하면 추가)
  }];

  // 다운로드 실행
  $c.data.downloadGridViewExcel($p, gridView, options, infoArr);
};

//-------------------------------------------------------------------------
// carrier bk no 조회
//-------------------------------------------------------------------------
scwin.f_retrieveCarrierBkNo = function () {
  dma_bookingNo.set("kcomcd", scwin.hd_kcomcd || "");
  dma_bookingNo.set("bkNo", scwin._getVal(ed_hhbkgno));

  // GAUCE: tr_retrieveCarrierBkNo.Post()
  $c.sbm.execute($p, sbm_retrieveCarrierBkNo);

  // GAUCE: ds_carrierBkNo.namevalue(1,"carrierBkNo")
  var rr = ds_carrierBkNo.getRowPosition();
  scwin._setVal(scwin.ed_carrierBkNo, ds_carrierBkNo.getCellData(rr, "carrierBkNo") || "");
};

//---------------------------------------------------------
// 선사 트래킹 (ActiveX는 브라우저/보안상 불가 가능성 큼. 로직만 변환)
//---------------------------------------------------------
scwin.f_Tracking = function () {
  if (ds_houseblList.getRowCount() == 0) {
    alert("선사 Tracking 할 Direct B/L을 조회해 주세요.");
    return false;
  }
  var vjob = "blsearch";
  var r = ds_houseblList.getRowPosition();
  var vlinerCd = ds_houseblList.getCellData(r, "hhliner");
  var vparm = ds_houseblList.getCellData(r, "hhmblno");
  var vline = "";
  ds_liner.removeAll();

  // GAUCE: ds_liner.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=IL052&cd="+vlinerCd; ds_liner.Reset();
  var url = "/cm.zz.RetrieveCodeCMD.do?grpCd=IL052&cd=" + encodeURIComponent(vlinerCd || "");
  if (typeof sbm_liner.setAction === "function") {
    sbm_liner.setAction(url);
  }
  $c.sbm.execute($p, sbm_liner);
  if (ds_liner.getRowCount() > 0) {
    // GAUCE 1행 -> WebSquare 0행 가정
    var cdNm = ds_liner.getCellData(0, "cdNm");
    if (cdNm) vline = cdNm;
  }

  // ActiveX 실행은 WebSquare/브라우저 환경에서 대부분 차단됨.
  // 대안: 서버 호출/다운로드/외부프로그램 연동 URL 오픈 등으로 교체 권장
  try {
    var objWSH = new ActiveXObject("WScript.Shell");
    objWSH.Run("C:\\dbexp_scrap1\\upgrade.exe job=" + vjob + "&linecode=" + vline + "&no=" + vparm + "&", 1, true);
  } catch (e) {
    alert("Tracking 실행이 브라우저 보안 정책으로 차단될 수 있습니다.\n관리자/서버 연동 방식으로 변경이 필요합니다.");
    return false;
  }
  return true;
};

//---------------------------------------------------------
// 선사 트래킹 프로그램 다운로드
//---------------------------------------------------------
scwin.f_ProgramDownload = function () {
  var sURL = "ftp://172.21.1.42:7000/Home/Setup/Setup_CarrierAPI.exe";
  window.open(sURL);
};

//-------------------------------------------------------------------------
// DRM 업로드 (기존 공통 유지)
//-------------------------------------------------------------------------
scwin.drmFileSubmit = function () {
  //이 부분 수정 필요 
  var formObj = document.frm;
  cfDrmUploadFile(formObj, fileUploadGDS, "f_Upload_DrmAfter");
};

// DRM 업로드 후 콜백 (원본 f_Upload 이름 충돌 방지)
scwin.f_Upload = function () {
  //이 부분 수정 필요 

  // 그리드 redraw off
  if (gr_ocContList && typeof gr_ocContList.setRedraw === "function") gr_ocContList.setRedraw(false);
  ds_ocContList.removeAll();
  ds_ExcelInformation.removeAll();
  ds_tmp.removeAll();

  // 업로드 결과 filePath
  // GAUCE: fileUploadGDS.NameValue(0,"filePath")
  var filePath = fileUploadGDS.getCellData(0, "filePath");

  // DataId로 직접 읽는 패턴은 WebSquare에서 제한적일 수 있음(프로젝트 공통에 맞게 조정)
  // 여기서는 원본 유지: ds_ExcelInformation.DataId = filePath; Reset()
  if (typeof sbm_excelInformation.setAction === "function") {
    sbm_excelInformation.setAction(filePath); // 프로젝트에서 허용할 때
  }
  $c.sbm.execute($p, sbm_excelInformation);
  cfProgressWinOpen();
  if (typeof resetForm === "function") resetForm("frm");
  window.setTimeout(function () {
    if (typeof scwin.f_Import === "function") scwin.f_Import();
  }, 1000);
};

//-------------------------------------------------------------------------
// 파일 명 체크(CSV)
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = String(ext || "").toUpperCase();
  path = String(path || "").toUpperCase();
  return path.endsWith(ext);
};

//-------------------------------------------------------------------------
// textarea to upper
//-------------------------------------------------------------------------
scwin.f_txaToUpper = function (obj) {
  if (!obj) return;
  if (typeof obj.getValue === "function" && typeof obj.setValue === "function") {
    obj.setValue(String(obj.getValue() || "").toUpperCase());
  } else if ("value" in obj) {
    obj.setValue(String(obj.getValue() || "").toUpperCase());
  }
};
scwin.f_SellingSum_freight = function () {
  var sumF = 0,
    sumW = 0,
    sumVat = 0,
    sumUsd = 0;
  for (var i = 0; i < ds_selling_freight.getRowCount(); i++) {
    if (scwin._ds.isDeleted(ds_selling_freight, i)) continue;
    sumF += scwin._n(scwin._ds.get(ds_selling_freight, i, "sellAmtFcrc"));
    sumW += scwin._n(scwin._ds.get(ds_selling_freight, i, "sellAmt"));
    sumVat += scwin._n(scwin._ds.get(ds_selling_freight, i, "vatAmt"));
    //sumUsd += scwin._n(scwin._ds.get(ds_selling_freight, i, "usdAmt"));
  }
  ed_SellingSumAmount_freight.setValue(sumF);
  ed_SellingSumAmountW_freight.setValue(sumW);
  ed_SellingSumVat_freight.setValue(sumVat);
  //ed_SellingSumAmountUs_freight.setValue(sumUsd);

  var amountSum = sumW + sumVat;
  ed_SellingAmountSum_freight.setValue(amountSum);
};
scwin.f_PartnerSum_freight = function () {
  var sumF = 0,
    sumW = 0,
    sumUsd = 0;
  for (var i = 0; i < ds_partner_freight.getRowCount(); i++) {
    if (scwin._ds.isDeleted(ds_partner_freight, i)) continue;
    sumF += scwin._n(scwin._ds.get(ds_partner_freight, i, "sellAmtFcrc"));
    sumW += scwin._n(scwin._ds.get(ds_partner_freight, i, "sellAmt"));
    //sumUsd += scwin._n(scwin._ds.get(ds_partner_freight, i, "usdAmt"));
  }
  ed_PartnerSumAmount_freight.setValue(sumF);
  ed_PartnerSumAmountW_freight.setValue(sumW);
  //ed_PartnerSumAmountUs_freight.setValue(sumUsd);
};
scwin.f_BuyingSum_freight = function () {
  var sumF = 0,
    sumW = 0,
    sumVat = 0,
    sumUsd = 0;
  for (var i = 0; i < ds_buying_freight.getRowCount(); i++) {
    if (scwin._ds.isDeleted(ds_buying_freight, i)) continue;
    sumF += scwin._n(scwin._ds.get(ds_buying_freight, i, "pchsAmtFcrc"));
    sumW += scwin._n(scwin._ds.get(ds_buying_freight, i, "pchsAmt"));
    sumVat += scwin._n(scwin._ds.get(ds_buying_freight, i, "vat"));
    //sumUsd += scwin._n(scwin._ds.get(ds_buying_freight, i, "usdAmt"));
  }
  ed_BuyingSumAmount_freight.setValue(sumF);
  ed_BuyingSumAmountW_freight.setValue(sumW);
  ed_BuyingSumVat_freight.setValue(sumVat);
  //ed_BuyingSumAmountUs_freight.setValue(sumUsd);

  var amountSum = sumW + sumVat;
  ed_BuyingAmountSum_freight.setValue(amountSum);
};

// ---------------------------------------------------------
// freight 내역 복사를 위한 조회(하단) - WebSquare
// ---------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  // 상단을 조회하지 않았거나, 결과값이 없을 경우
  if (ds_houseblList.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ["Exchange Rate Information", "상단의 Search"]);
    return;
  }
  if ((srch_ed_hhblno.getValue() || "").trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House No"]);
    return;
  }

  // B/L No 빠져나올때 event처리
  cnd_lc_mhno2.focus();
  dma_retrieve_freight.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve_freight.set("mhno", cnd_lc_mhno2.getValue()); // ValueOfIndex 대신 getValue 사용(프로젝트 표준에 맞게)
  dma_retrieve_freight.set("hhio", scwin.hd_hhio);
  dma_retrieve_freight.set("hhblno2", srch_ed_hhblno.getValue());

  // 기존에 조회된 행이 있다면 재조회 안되도록 함
  if (ds_selling_freight.getRowCount() > 0) {
    $c.win.alert($p, "조회된 Selling데이터가 있습니다.\nSelling데이터가 0건일 경우 조회가능합니다.");
    // cmd enable
    $c.gus.cfEnableObj($p, srch_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno2, true);
  } else {
    $c.sbm.execute($p, sbm_retrieveSelling_freight); // tr_retrieveSelling_freight.Post() 대체
  }
};
scwin.sbm_retrieveSelling_freight_submitdone = function (e) {
  if (ds_partner_freight.getRowCount() > 0) {
    $c.win.alert($p, "조회된 Partner데이터가 있습니다.\nPartner데이터가 0건일 경우 조회가능합니다.");
    // cmd enable
    $c.gus.cfEnableObj($p, srch_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno2, true);
  } else {
    $c.sbm.execute($p, sbm_retrievePartner_freight);
  }
};
scwin.sbm_retrievePartner_freight_submitdone = function (e) {
  if (ds_buying_freight.getRowCount() > 0) {
    $c.win.alert($p, "조회된 Buying데이터가 있습니다.\nBuying데이터가 0건일 경우 조회가능합니다.");
    // cmd enable
    $c.gus.cfEnableObj($p, srch_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno2, true);
  } else {
    $c.sbm.execute($p, sbm_retrieveBuying_freight);
  }
};
scwin.sbm_retrieveBuying_freight_submitdone = function (e) {
  // cmd enable
  $c.gus.cfEnableObj($p, srch_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno2, true);
};

// -------------------------------------------------------------------------
// 콤보/코드 조회를 "호출 단위로 안전"하게 받기 위한 helper
// - sbm: submission
// - dma: 파라미터 넣는 DataMap
// - outDs: 결과 DataList (submission target으로 채워지는 ds)
// - return: 결과 rows를 깊은복사해서 반환 (동시호출 안전)
// -------------------------------------------------------------------------
scwin._execCodeQuery = async function (sbm, dma, outDs, params) {
  dma.setJSON(params);
  await $c.sbm.execute($p, sbm);

  // 결과를 호출 단위로 안전하게 쓰기 위해 복사본 생성
  var rows = [];
  for (var i = 0; i < outDs.getRowCount(); i++) {
    var obj = {};
    // 필요 컬럼만 쓰면 더 좋지만, 일단 통으로
    var cols = outDs.getColumnIDs ? outDs.getColumnIDs() : null;
    if (cols && cols.length) {
      for (var c = 0; c < cols.length; c++) {
        obj[cols[c]] = outDs.getCellData(i, cols[c]);
      }
    } else {
      // getColumnIDs가 없으면 필요한 칼럼만 직접 넣자
      obj.CODE = outDs.getCellData(i, "CODE");
      obj.code = outDs.getCellData(i, "code");
    }
    rows.push(obj);
  }
  return rows;
};

// -------------------------------------------------------------------------
// BuyingDept 가져오기 - WebSquare (submission 기반)
// -------------------------------------------------------------------------
scwin.f_BuyingDeptLoading_freight = async function (row) {
  var param1 = (cnd_ed_hhblno.getValue() || "").trim();
  var param2 = (cnd_lc_mhno.getValue() || "").trim();

  // retriveBuyingDeptListCombo 호출 (sbm_combo / dma_combo / ds_buying_freightDept 사용 가정)
  var rows = await scwin._execCodeQuery(sbm_combo,
  // 공통 submission
  dma_combo,
  // 파라미터 DataMap
  ds_buying_freightDept,
  // 결과 ds
  {
    sysCd: "SeaExportHouseEBC",
    queryId: "retriveBuyingDeptListCombo",
    param1: param1,
    param2: param2,
    param3: "",
    param4: ""
  });
  var v = rows[0] && (rows[0].CODE || rows[0].code) ? rows[0].CODE || rows[0].code : "";
  ds_buying_freight.setCellData(row, "sellDeptCd", v);

  // focus 이동 (WebSquare Grid API에 맞게)
  gr_buying_freight.setFocusedCell ? gr_buying_freight.setFocusedCell(row, "sellDeptCd") : gr_buying_freight.setCellFocus("sellDeptCd");
  gr_buying_freight.setFocusedCell ? gr_buying_freight.setFocusedCell(row, "crcCd") : gr_buying_freight.setCellFocus("crcCd");
};

// -------------------------------------------------------------------------
// tab List의 값을 ds_houseblList_freight의 컬럼으로 변경 (gubun, ds)
// 0: selling, 1: partner, 2: buying
// -------------------------------------------------------------------------
scwin.f_chgGridColumnToHouseBlDs_freight = function (gubun, ds) {
  var odrNo = ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "odrNo");
  for (var i = 0; i < ds.getRowCount(); i++) {
    ds.setCellData(i, "kcomcd", scwin.hd_kcomcd);
    ds.setCellData(i, "blNo", cnd_ed_hhblno.getValue());
    ds.setCellData(i, "mhno", cnd_lc_mhno.getValue());
    ds.setCellData(i, "odrNo", odrNo);
    ds.setCellData(i, "mblHblCls", "H");
    ds.setCellData(i, "seaAirCls", "S");
    ds.setCellData(i, "ppccCls", scwin.hd_hhpcgb_freight);
    ds.setCellData(i, "inpid", scwin.vUserId); // scwin.vUserId → scwin.vUserId

    if (gubun == "0") {
      ds.setCellData(i, "bilgClntNo", scwin.ed_hhactcust_freight);
      ds.setCellData(i, "bilgClntNm", scwin.txt_hhactcustnm_freight);
      scwin.f_sellingUnitLoading_freight();
      ds.setCellData(i, "locPtnCls", "1");
    } else if (gubun == "1") {
      ds.setCellData(i, "bilgClntNo", scwin.ed_hhagent_freight);
      ds.setCellData(i, "bilgClntNm", scwin.txt_hhagentnm_freight);
      scwin.f_partnerUnitLoading_freight();
      ds.setCellData(i, "locPtnCls", "2");
    } else if (gubun == "2") {
      scwin.f_buyingUnitLoading_freight();
      ds.setCellData(i, "locPtnCls", "1");
    }
    ds.setCellData(i, "rsltsStdDt", ed_creadyDt.getValue());
    ds.setCellData(i, "exRateTyp", lc_selling_hhexgb_freight.getValue()); // BindColVal → getValue (프로젝트 표준에 맞게)

    // GAUCE UserStatus(i)=1 (insert로 변경) 대응:
    // WebSquare는 보통 rowStatus를 직접 강제하지 않고 insertRow로 추가하면 "I"가 됨.
    // 필요시 프로젝트 함수로 강제 처리:
    if (ds.setRowStatus) ds.setRowStatus(i, "I");
  }

  // 합계 갱신
  if (gubun == "0") scwin.f_SellingSum_freight();else if (gubun == "1") scwin.f_PartnerSum_freight();else if (gubun == "2") scwin.f_BuyingSum_freight();
};
scwin._mapFareFromBuyingToSelling = function (code) {
  // J 케이스
  var mapJ = {
    "THCJ": {
      fareEngCd: "THC",
      sellItemCd: "0662",
      fareEngNm: "T.H.C"
    },
    "DOCJ": {
      fareEngCd: "DOC",
      sellItemCd: "0663",
      fareEngNm: "DOCUMENT FEE"
    },
    "WFGJ": {
      fareEngCd: "WFG",
      sellItemCd: "0672",
      fareEngNm: "WHARFAGE"
    },
    "OTHJ": {
      fareEngCd: "OTH",
      sellItemCd: "0652",
      fareEngNm: "OTHER CHARGE"
    },
    "SLCJ": {
      fareEngCd: "SLC",
      sellItemCd: "1024",
      fareEngNm: "SEAL CHARGE"
    },
    "AMDJ": {
      fareEngCd: "AMD",
      sellItemCd: "1237",
      fareEngNm: "AMEND FEE"
    },
    "HDCJ": {
      fareEngCd: "HDC",
      sellItemCd: "0664",
      fareEngNm: "HANDLING CHARGE"
    }
  };

  // K 케이스
  var mapK = {
    "THCK": {
      fareEngCd: "THCV",
      sellItemCd: "0516",
      fareEngNm: "TERMINAL HANDLING CHARGE"
    },
    "DOCK": {
      fareEngCd: "DOCV",
      sellItemCd: "0636",
      fareEngNm: "DOCUMENT FEE"
    },
    "OTHK": {
      fareEngCd: "OTHV",
      sellItemCd: "0632",
      fareEngNm: "OTHER CHARGE"
    },
    "SLCK": {
      fareEngCd: "SLCV",
      sellItemCd: "1026",
      fareEngNm: "SEAL CHARGE"
    },
    "AMDK": {
      fareEngCd: "AMDV",
      sellItemCd: "1243",
      fareEngNm: "AMDV"
    },
    "HDCK": {
      fareEngCd: "HDCV",
      sellItemCd: "0635",
      fareEngNm: "OTHER CHARGE"
    }
  };
  return mapJ[code] || mapK[code] || null;
};
scwin._copyBuyingRowToSellingRow = function (srcRow, dstRow) {
  // src: ds_buying_freight, dst: ds_selling_freight 가정

  ds_selling_freight.setCellData(dstRow, "sellSeq", ds_buying_freight.getCellData(srcRow, "pchsSeq"));
  ds_selling_freight.setCellData(dstRow, "fareGrpCd", ds_buying_freight.getCellData(srcRow, "fareGrpCd"));
  ds_selling_freight.setCellData(dstRow, "crcCd", ds_buying_freight.getCellData(srcRow, "crcCd"));
  ds_selling_freight.setCellData(dstRow, "fareUnit", ds_buying_freight.getCellData(srcRow, "fareUnit"));
  ds_selling_freight.setCellData(dstRow, "chgWt", ds_buying_freight.getCellData(srcRow, "chgWt"));
  ds_selling_freight.setCellData(dstRow, "sellUpr", ds_buying_freight.getCellData(srcRow, "pchsUpr"));
  ds_selling_freight.setCellData(dstRow, "sellAmtFcrc", ds_buying_freight.getCellData(srcRow, "pchsAmtFcrc"));
  ds_selling_freight.setCellData(dstRow, "exRate", ds_buying_freight.getCellData(srcRow, "exRate"));
  ds_selling_freight.setCellData(dstRow, "sellAmt", ds_buying_freight.getCellData(srcRow, "pchsAmt"));
  ds_selling_freight.setCellData(dstRow, "vatAmt", ds_buying_freight.getCellData(srcRow, "vat"));
  ds_selling_freight.setCellData(dstRow, "usdAmt", ds_buying_freight.getCellData(srcRow, "usdAmt"));
  ds_selling_freight.setCellData(dstRow, "trfUpr", ds_buying_freight.getCellData(srcRow, "trfUpr"));
  ds_selling_freight.setCellData(dstRow, "vatYn", ds_buying_freight.getCellData(srcRow, "vatYn"));
};

// -------------------------------------------------------------------------
// buying 데이터를 selling으로 copy (WebSquare + 리팩토링)
// -------------------------------------------------------------------------
scwin.f_copyFromBuyingToSelling_freight = function () {
  if (ds_buying_freight.getRowCount() == 0 || ds_selling_freight.getRowCount() > 0) {
    $c.win.alert($p, "buying 데이터가 없거나, selling 데이터가 이미 있는 경우는 해당 기능을 사용할 수 없습니다");
    return false;
  }
  for (var i = 0; i < ds_buying_freight.getRowCount(); i++) {
    var code = ds_buying_freight.getCellData(i, "fareEngCd");
    var nm = ds_buying_freight.getCellData(i, "fareEngNm") || "";

    // "전도금" 시작이면 제외
    if (nm.substring(0, 3) == "전도금") continue;

    // selling row 추가 (f_addRow_freight(1)이 insertRow 기반으로 동작한다고 가정)
    scwin.f_addRow_freight(1);
    var dst = ds_selling_freight.getRowPosition(); // 새로 추가된 row position
    scwin._copyBuyingRowToSellingRow(i, dst);

    // 특정 코드 변환 룰
    var mapped = scwin._mapFareFromBuyingToSelling(code);
    if (mapped) {
      ds_selling_freight.setCellData(dst, "fareEngCd", mapped.fareEngCd);
      ds_selling_freight.setCellData(dst, "sellItemCd", mapped.sellItemCd);
      ds_selling_freight.setCellData(dst, "fareEngNm", mapped.fareEngNm);
    } else {
      // 기본: 원본 값 그대로
      ds_selling_freight.setCellData(dst, "fareEngCd", code);
      ds_selling_freight.setCellData(dst, "fareEngNm", nm);
      ds_selling_freight.setCellData(dst, "sellItemCd", ds_buying_freight.getCellData(i, "selpchItemCd"));
    }
  }
  scwin.cfViewTab(0);
  return true;
};

// -------------------------------------------------------------------------
// buying 데이터를 selling으로 copy (code 조회 포함 버전)
// - code 끝이 J면 param1 = 앞부분
// - 끝이 K면 param1 = 앞부분 + "V"
// -------------------------------------------------------------------------
scwin.f_copyFromBuyingToSelling = async function () {
  if (ds_buying_freight.getRowCount() == 0 || ds_selling_freight.getRowCount() > 0) {
    await $c.win.alert($p, "buying 데이터가 없거나, selling 데이터가 이미 있는 경우는 해당 기능을 사용할 수 없습니다");
    return false;
  }
  for (var i = 0; i < ds_buying_freight.getRowCount(); i++) {
    var code = ds_buying_freight.getCellData(i, "fareEngCd") || "";
    var last = code.substring(code.length - 1);
    scwin.f_addRow_freight(1);
    var dst = ds_selling_freight.getRowPosition();
    scwin._copyBuyingRowToSellingRow(i, dst);
    if (last == "J" || last == "K") {
      var base = code.substring(0, code.length - 1);
      var param1 = last == "J" ? base : base + "V";

      // retriveFreightCodeInfo 조회 (sbm_combo / dma_combo / ds_SellingCode 사용 가정)
      var rows = await scwin._execCodeQuery(sbm_combo, dma_combo, ds_SellingCode, {
        sysCd: "ilCommonEBC",
        queryId: "retriveFreightCodeInfo",
        param1: param1,
        param2: "",
        param3: "",
        param4: ""
      });
      var r0 = rows[0] || {};
      // 원본: col1=fareEngCd, col2=fareEngNm, col4=sellItemCd
      ds_selling_freight.setCellData(dst, "fareEngCd", r0.col1 || "");
      ds_selling_freight.setCellData(dst, "fareEngNm", r0.col2 || "");
      ds_selling_freight.setCellData(dst, "sellItemCd", r0.col4 || "");
    } else {
      // 기본: 원본 그대로
      ds_selling_freight.setCellData(dst, "fareEngCd", code);
      ds_selling_freight.setCellData(dst, "fareEngNm", ds_buying_freight.getCellData(i, "fareEngNm"));
      ds_selling_freight.setCellData(dst, "sellItemCd", ds_buying_freight.getCellData(i, "selpchItemCd"));
    }
  }
  return true;
};

// -------------------------------------------------------------------------
// 환율정보가져오기 - WebSquare (submission 기반)
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// SumCheck
// -------------------------------------------------------------------------
scwin.f_sumCheck_freight = function (type, value) {
  var con1 = ed_hhcnt1type_freight.getValue();
  var con2 = ed_hhcnt2type_freight.getValue();
  var con3 = ed_hhcnt3type_freight.getValue();
  var con4 = ed_hhcnt4type_freight.getValue();
  var con1q = Number(ed_hhcnt1_freight.getValue() || 0);
  var con2q = Number(ed_hhcnt2_freight.getValue() || 0);
  var con3q = Number(ed_hhcnt3_freight.getValue() || 0);
  var con4q = Number(ed_hhcnt4_freight.getValue() || 0);
  var wgt = Number(ed_hhgwgt_freight.getValue() || 0);
  var msr = Number(ed_hhmsr_freight.getValue() || 0);
  var sellingList = [];
  var sellingqList = [];
  var partnerList = [];
  var partnerqList = [];
  var buyingList = [];
  var buyingqList = [];

  // Selling sum
  for (var i = 0; i < ds_selling_freight.getRowCount(); i++) {
    sellingList[i] = ds_selling_freight.getCellData(i, "fareUnit");
    sellingqList[i] = ds_selling_freight.getCellData(i, "chgWt");
  }

  // Partner sum
  for (var j = 0; j < ds_partner_freight.getRowCount(); j++) {
    partnerList[j] = ds_partner_freight.getCellData(j, "fareUnit");
    partnerqList[j] = ds_partner_freight.getCellData(j, "chgWt");
  }

  // Buying sum
  for (var k = 0; k < ds_buying_freight.getRowCount(); k++) {
    buyingList[k] = ds_buying_freight.getCellData(k, "fareUnit");
    buyingqList[k] = ds_buying_freight.getCellData(k, "chgWt");
  }
};
scwin.f_ExrateLoading = async function (param1, param2, param3) {
  if (param1 == "KRW") param1 = "USD";
  await scwin._execCodeQuery(sbm_combo, dma_combo, ds_ExRate, {
    sysCd: "ilCommonEBC",
    queryId: "retrieveExRate",
    param1: param1,
    param2: param2,
    param3: param3,
    param4: ""
  });
};

// -------------------------------------------------------------------------
// 엑셀 다운로드 - WebSquare
// dataId: DataList
// gridId: "gr_selling_freight" | "gr_partner_freight" | "gr_buying_freight"
// -------------------------------------------------------------------------
scwin.f_RunExcel_freight = async function (dataId, gridId) {
  var countA = dataId.getRowCount();
  if (!(countA > 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  var sheetName = "",
    fileName = "";
  if (gridId == "gr_selling_freight") {
    sheetName = "Selling List";
    fileName = "Selling List.xls";
  } else if (gridId == "gr_partner_freight") {
    sheetName = "Partner List";
    fileName = "Partner List.xls";
  } else if (gridId == "gr_buying_freight") {
    sheetName = "Buying List";
    fileName = "Buying List.xls";
  }
  scwin.f_ExportExcel(dataId, gridId, sheetName);
};

// -------------------------------------------------------------------------
// 환율 Grid Partner 가져오기 - WebSquare
// -------------------------------------------------------------------------
scwin.f_ExRatePartnerGridLoading_freight = async function () {
  var pos = ds_partner_freight.getRowPosition();
  var sellingCur = scwin._val(ed_selling_hhcur_freight);
  var partnerCur = ds_partner_freight.getCellData(pos, "crcCd");

  // selling 통화와 동일하면 selling 환율 사용
  if (sellingCur == partnerCur) {
    ds_partner_freight.setCellData(pos, "exRate", scwin._val(ed_selling_hhexrate_freight));
    return;
  }
  var exRate = ds_partner_freight.getCellData(pos, "exRate");
  if (exRate != "" && exRate != "0") return;
  var param1 = partnerCur;
  var param2 = (scwin._val(ed_selling_hhcurdt_freight) || "").trim();
  var param3 = lc_selling_hhexgb_freight.getValue(); // BindColVal → getValue

  var rows = await scwin._execCodeQuery(sbm_combo, dma_combo, ds_exRatePartnerGrid, {
    sysCd: "ilCommonEBC",
    queryId: "retrieveExRate",
    param1: param1,
    param2: param2,
    param3: param3,
    param4: ""
  });
  var code = rows[0] && (rows[0].CODE || rows[0].code) ? rows[0].CODE || rows[0].code : "";
  ds_partner_freight.setCellData(pos, "exRate", code);
  if (code == "" && param1 != "KRW") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]);
  }
};

//-------------------------------------------------------------------------
// function name : scwin.f_PopUpGrid_freight
// function desc : Grid popup (GAUCE -> WebSquare, udc_ilcomCode 기반)
//-------------------------------------------------------------------------
// 규칙
// - ds.NameValue(r,c)        -> ds.getCellData(r,c)
// - ds.NameValue(r,c)=v      -> ds.setCellData(r,c,v)
// - ilCommonPopUp            -> udc_ilcomCode.setSelectId + udc_ilcomCode.ilCommonPopUp(onReturn,...)
// - cfSetGridReturnValue     -> 아래 onReturn에서 직접 setCellData 처리(원하면 기존함수 호출로 바꿀 수 있음)
//-------------------------------------------------------------------------
scwin.f_PopUpGrid_freight = function (disGubun, Row, pWinCloseTF, pAllSearchTF) {
  // == rtn normalize (프로젝트 공통 버전 그대로 사용) ==
  function normalizeRtn(rtnList) {
    if (!rtnList || rtnList == "N/A") return null;
    if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;

    // 다건: [[...],[...]] -> 첫행
    if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) return rtnList[0];
    if (Array.isArray(rtnList)) return rtnList;
    var arr = [];
    if (rtnList.code != null) arr[0] = rtnList.code;
    if (rtnList.name != null) arr[1] = rtnList.name;
    return arr.length ? arr : null;
  }

  // == DS 공통 setter ==
  function setGridCodeName(ds, row, codeCol, nameCol, r) {
    if (!ds || row == null) return;
    ds.setCellData(row, codeCol, r[0] || "");
    if (nameCol) ds.setCellData(row, nameCol, r[1] || "");
  }

  // == 공통 팝업 호출 (Grid: code/name 인자를 DS에서 뽑아 넘김) ==
  function openCommon(args) {
    var onReturn = function (rtnList) {
      var r = normalizeRtn(rtnList);
      if (!r) return;

      // 기본: code/name 세팅
      if (args.ds && args.codeCol) {
        setGridCodeName(args.ds, args.row, args.codeCol, args.nameCol, r);
      }

      // 추가 후처리
      if (typeof args.afterFn == "function") args.afterFn(r);
    };
    udc_ilcomCode.setSelectId(args.selectId);
    udc_ilcomCode.ilCommonPopUp(onReturn, args.codeValue || "", args.nameValue || "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || "F");
  }

  // == DS별 현재 값 읽기 유틸 ==
  function gv(ds, row, col) {
    return String(ds.getCellData(row, col) || "");
  }

  // ---------------------------------------------------------
  // switch
  // ---------------------------------------------------------
  switch (disGubun) {
    // ==
    // Selling - Customer
    // ==
    case "SellingCustomer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        ds: ds_selling_freight,
        row: Row,
        codeCol: "bilgClntNo",
        nameCol: "bilgClntNm",
        codeValue: gv(ds_selling_freight, Row, "bilgClntNo"),
        nameValue: gv(ds_selling_freight, Row, "bilgClntNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: pAllSearchTF,
        winTitle: "Customer search,Customer Code,Customer Name",
        noDataTF: "F"
      });
      break;

    // ==
    // Selling - Fcode
    // ==
    case "SellingFcode":
      openCommon({
        selectId: "retriveFreightCodeInfo",
        ds: ds_selling_freight,
        row: Row,
        codeCol: "fareEngCd",
        nameCol: "fareEngNm",
        codeValue: gv(ds_selling_freight, Row, "fareEngCd"),
        nameValue: gv(ds_selling_freight, Row, "fareEngNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "S,1",
        allTF: pAllSearchTF,
        winTitle: "FCode,Code,Name",
        noDataTF: "F",
        afterFn: function (r) {
          // GAUCE 로직 그대로 이식 (r 배열 인덱스 사용)
          // undefined 방어는 normalizeRtn이 처리함

          ds_selling_freight.setCellData(Row, "sellItemCd", r[3] || "");
          ds_selling_freight.setCellData(Row, "fareGrpCd", r[5] || "");
          ds_selling_freight.setCellData(Row, "vatYn", r[7] || "");

          // 통화 결정
          if (String(r[9] || "") == "1") {
            ds_selling_freight.setCellData(Row, "crcCd", "KRW");
          } else {
            ds_selling_freight.setCellData(Row, "crcCd", typeof ed_selling_hhcur_freight.getValue == "function" ? ed_selling_hhcur_freight.getValue() : ed_selling_hhcur_freight.Text || "");
          }
          var fcode = gv(ds_selling_freight, Row, "fareEngCd");
          if (fcode == "OCF") {
            ds_selling_freight.setCellData(Row, "crcCd", "USD");
          }

          // 특정 코드면 UNIT/WT 고정
          if (fcode == "DOC" || fcode == "DOCV" || fcode == "DOF" || fcode == "DOFV" || fcode == "INSU" || fcode == "HDC" || fcode == "HDCV" || fcode == "CCFV" || fcode == "CCF") {
            ds_selling_freight.setCellData(Row, "fareUnit", "CASE");
            ds_selling_freight.setCellData(Row, "chgWt", "1");
          }
        }
      });
      break;

    // ==
    // Partner - Customer
    // ==
    case "PartnerCustomer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        ds: ds_partner_freight,
        row: Row,
        codeCol: "bilgClntNo",
        nameCol: "bilgClntNm",
        codeValue: gv(ds_partner_freight, Row, "bilgClntNo"),
        nameValue: gv(ds_partner_freight, Row, "bilgClntNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: pAllSearchTF,
        winTitle: "Customer search,Customer Code,Customer Name",
        noDataTF: "F"
      });
      break;

    // ==
    // Partner - Fcode (drCrCls 에 따라 whereOpt 변경)
    // ==
    case "PartnerFcode":
      (function () {
        var drcr = gv(ds_partner_freight, Row, "drCrCls");
        var whereOpt = drcr == "D" ? "S,0,1" : drcr == "C" ? "S,0,2" : "S,0,1";
        openCommon({
          selectId: "retriveFreightCodeInfo",
          ds: ds_partner_freight,
          row: Row,
          codeCol: "fareEngCd",
          nameCol: "fareEngNm",
          codeValue: gv(ds_partner_freight, Row, "fareEngCd"),
          nameValue: gv(ds_partner_freight, Row, "fareEngNm"),
          winCloseTF: pWinCloseTF,
          colCnt: "2",
          titles: "Code, Name",
          widths: "80,230",
          hideCols: "3,4,5,6,7,8,9,10",
          whereOpt: whereOpt,
          allTF: pAllSearchTF,
          winTitle: "FCode,Code,Name",
          noDataTF: "F",
          afterFn: function (r) {
            ds_partner_freight.setCellData(Row, "sellItemCd", r[3] || "");
            ds_partner_freight.setCellData(Row, "fareGrpCd", r[5] || "");
            ds_partner_freight.setCellData(Row, "vatYn", r[7] || "");
            ds_partner_freight.setCellData(Row, "vehclYn", r[8] || "");

            // Partner는 USD 고정
            ds_partner_freight.setCellData(Row, "crcCd", "USD");
            var fcode = gv(ds_partner_freight, Row, "fareEngCd");
            if (fcode == "DOC" || fcode == "DOCV" || fcode == "DOF" || fcode == "DOFV" || fcode == "INSU" || fcode == "HDC" || fcode == "HDCV" || fcode == "CCFV" || fcode == "CCF") {
              ds_partner_freight.setCellData(Row, "fareUnit", "CASE");
              ds_partner_freight.setCellData(Row, "chgWt", "1");
            }
          }
        });
      })();
      break;

    // ==
    // Buying - Customer
    // ==
    case "BuyingCustomer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        ds: ds_buying_freight,
        row: Row,
        codeCol: "pchsClntNo",
        nameCol: "pchsClntNm",
        codeValue: gv(ds_buying_freight, Row, "pchsClntNo"),
        nameValue: gv(ds_buying_freight, Row, "pchsClntNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: pAllSearchTF,
        winTitle: "Customer search,Customer Code,Customer Name",
        noDataTF: "F"
      });
      break;

    // ==
    // Buying - Fcode
    // ==
    case "BuyingFcode":
      openCommon({
        selectId: "retriveFreightCodeInfo",
        ds: ds_buying_freight,
        row: Row,
        codeCol: "fareEngCd",
        nameCol: "fareEngNm",
        codeValue: gv(ds_buying_freight, Row, "fareEngCd"),
        nameValue: gv(ds_buying_freight, Row, "fareEngNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "S,2",
        allTF: pAllSearchTF,
        winTitle: "FCode,Code,Name",
        noDataTF: "F",
        afterFn: function (r) {
          ds_buying_freight.setCellData(Row, "selpchItemCd", r[3] || "");
          ds_buying_freight.setCellData(Row, "fareGrpCd", r[5] || "");
          ds_buying_freight.setCellData(Row, "vatYn", r[7] || "");
          ds_buying_freight.setCellData(Row, "vehclYn", r[8] || "");

          // scwin.v_linkcheck != 9 조건 유지
          if (scwin.v_linkcheck != 9) {
            if (String(r[9] || "") == "1") {
              ds_buying_freight.setCellData(Row, "crcCd", "KRW");
            } else {
              ds_buying_freight.setCellData(Row, "crcCd", typeof ed_selling_hhcur_freight.getValue == "function" ? ed_selling_hhcur_freight.getValue() : ed_selling_hhcur_freight.Text || "");
            }
            var fcode = gv(ds_buying_freight, Row, "fareEngCd");
            if (fcode == "OCF") {
              ds_buying_freight.setCellData(Row, "crcCd", "USD");
            }
          }
          var fcode2 = gv(ds_buying_freight, Row, "fareEngCd");
          if (fcode2 == "DOC" || fcode2 == "DOCV" || fcode2 == "DOF" || fcode2 == "DOFV" || fcode2 == "INSU" || fcode2 == "HDC" || fcode2 == "HDCV" || fcode2 == "CCFV" || fcode2 == "CCF") {
            ds_buying_freight.setCellData(Row, "fareUnit", "CASE");
            ds_buying_freight.setCellData(Row, "chgWt", "1");
          }
        }
      });
      break;

    // ==
    // Buying - Dept
    // ==
    case "BuyingDept":
      openCommon({
        selectId: "retrieveOpDeptCdInfo",
        ds: ds_buying_freight,
        row: Row,
        codeCol: "sellDeptCd",
        nameCol: "sellDeptNm",
        codeValue: gv(ds_buying_freight, Row, "sellDeptCd"),
        nameValue: gv(ds_buying_freight, Row, "sellDeptNm"),
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Department,Code,Name",
        noDataTF: "F"
      });
      break;
    default:
      break;
  }
};

// ==
// [공통] 모달 팝업 호출 (showModalDialog 대체)
// - popupId는 페이지 내에서 유니크하게 생성
// - returnValue(=rtnList)는 프로젝트 팝업 규약에 맞춰 받아옴
// ==
scwin.openModal = function (url, opts) {
  opts = opts || {};
  var data = opts.data || {};
  return scwin._openPopup(url, {
    popupId: opts.popupId,
    width: opts.width || 460,
    height: opts.height || 280,
    modal: true
  }, data);
};

// ==
// [공통] Freight 그리드(DS) 일괄 변경 유틸
// - gbn: 0 Selling / 1 Partner / 2 Buying
// - certiField: 잠금 필드 (빈 값일 때만 변경)
// - matchField, setNoField, setNmField: 변경 대상
// ==
scwin.applyClientChangeToFreight = function (ds, options) {
  var rowCount = ds.getRowCount();
  if (rowCount == 0) return;
  var certiField = options.certiField;
  var matchField = options.matchField;
  var setNoField = options.setNoField;
  var setNmField = options.setNmField;
  var oldNo = options.oldNo;
  var newNo = options.newNo;
  var newNm = options.newNm;
  for (var i = 0; i < rowCount; i++) {
    var cert = (ds.getCellData(i, certiField) || "").trim();
    if (cert != "") continue;
    if ((ds.getCellData(i, matchField) || "") == oldNo) {
      ds.setCellData(i, setNoField, newNo);
      ds.setCellData(i, setNmField, newNm);
    }
  }
};
scwin.applyResultDateToFreight = function (ds, options) {
  var rowCount = ds.getRowCount();
  if (rowCount == 0) return;
  var certiField = options.certiField;
  var dateField = options.dateField;
  var newDate = options.newDate;
  for (var i = 0; i < rowCount; i++) {
    var cert = (ds.getCellData(i, certiField) || "").trim();
    if (cert != "") continue;
    ds.setCellData(i, dateField, newDate);
  }
};

//-------------------------------------------------------------------------
// Customer Change
//-------------------------------------------------------------------------
scwin.f_CustomerChange_freight = async function (gbn) {
  var rtnList = null;
  var param = {}; // TODO: 팝업 파라미터 규칙 확인(객체/배열)
  var opts = {
    width: 460,
    height: 280,
    modal: true
  };
  var url = "/ui/il/common/ilCommonCustomerChange.xml";
  rtnList = await scwin._openPopup(url, opts, param); // rtnList[0] = "N/A"

  if (typeof rtnList !== "undefined") {
    if (rtnList && rtnList[0] === "N/A") {
      scwin.f_GridCustomerChange(gbn, rtnList);
    }
  }
};
scwin.f_GridCustomerChange = async function (gbn, rtnList) {
  var oldNo = rtnList[1];
  var newNo = rtnList[3];
  var newNm = rtnList[4];
  if (gbn == "0") {
    // Selling
    if (ds_selling_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Selling Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyClientChangeToFreight(ds_selling_freight, {
      certiField: "certiNo",
      matchField: "bilgClntNo",
      setNoField: "bilgClntNo",
      setNmField: "bilgClntNm",
      oldNo: oldNo,
      newNo: newNo,
      newNm: newNm
    });
  } else if (gbn == "1") {
    // Partner
    if (ds_partner_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Partner Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyClientChangeToFreight(ds_partner_freight, {
      certiField: "certiNo",
      matchField: "bilgClntNo",
      setNoField: "bilgClntNo",
      setNmField: "bilgClntNm",
      oldNo: oldNo,
      newNo: newNo,
      newNm: newNm
    });
  } else if (gbn == "2") {
    // Buying
    if (ds_buying_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Buying Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyClientChangeToFreight(ds_buying_freight, {
      certiField: "pchsCertiNo",
      matchField: "pchsClntNo",
      setNoField: "pchsClntNo",
      setNmField: "pchsClntNm",
      oldNo: oldNo,
      newNo: newNo,
      newNm: newNm
    });
  }
};

//-------------------------------------------------------------------------
// Result date Change
//-------------------------------------------------------------------------
scwin.f_ResultdateChange_freight = async function (gbn) {
  var rtnList = null;
  var param = {}; // TODO: 팝업 파라미터 규칙 확인(객체/배열)
  var opts = {
    width: 460,
    height: 280,
    modal: true
  };
  var url = "/ui/il/common/ilCommonResultDateChange.xml";
  rtnList = await scwin._openPopup(url, opts, param); // rtnList[0] = "N/A", rtnList[1] = ed_resultdt.Text

  if (typeof rtnList !== "undefined") {
    if (rtnList && rtnList[0] === "N/A") {
      scwin.f_GridResultdateChange_freight(gbn, rtnList);
    }
  }
};
scwin.f_GridResultdateChange_freight = async function (gbn, rtnList) {
  var newDate = rtnList[1];
  if (gbn == "0") {
    // Selling
    if (ds_selling_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Selling Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyResultDateToFreight(ds_selling_freight, {
      certiField: "certiNo",
      dateField: "rsltsStdDt",
      newDate: newDate
    });
  } else if (gbn == "1") {
    // Partner
    if (ds_partner_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Partner Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyResultDateToFreight(ds_partner_freight, {
      certiField: "certiNo",
      dateField: "rsltsStdDt",
      newDate: newDate
    });
  } else if (gbn == "2") {
    // Buying
    if (ds_buying_freight.getRowCount() == 0) {
      cfAlertMsg(MSG_CM_ERR_049, ["Buying Information"]);
      return;
    }
    if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
    scwin.applyResultDateToFreight(ds_buying_freight, {
      certiField: "pchsCertiNo",
      dateField: "rsltsStdDt",
      newDate: newDate
    });
  }
};

// ==
// [공통] DataList Debug (GAUCE dataSetDebug 대체)
// ==
scwin.dataListDebug = function (dl, isDebug) {
  if (!isDebug) return;
  var rowCount = dl.getRowCount();
  var colCount = dl.getColumnCount ? dl.getColumnCount() : 0;
  var str = "[[[[" + (dl.id || "DataList") + "]]]]\n";
  for (var r = 0; r < rowCount; r++) {
    for (var c = 0; c < colCount; c++) {
      var colId = dl.getColumnID ? dl.getColumnID(c) : "col" + (c + 1);
      str += "[" + colId + "] " + (dl.getCellData(r, colId) ?? "") + ", ";
    }
    str += "\n\n";
  }
  $c.win.alert($p, str);
};

/*****************************************************************
* WebSquare 변환/리팩토링 - BOOKING / DIRECT / BULK / TEXTAREA
* - GAUCE: ds.NameValue(row,col) / ds.insertRow(0) / tr.Post()
* - WebSquare: dl.setValue(row,col,val) / dl.insertRow(0) / sbm.execute()
*****************************************************************/

scwin.booking = scwin.booking || {};
scwin.direct = scwin.direct || {};
scwin.util = scwin.util || {};

/** ==
* 공통 유틸
* == */

/** WebSquare DataList rowPosition helper (없으면 1로) */
scwin.util.rowPos = function (dl) {
  return dl && (dl.getRowPosition ? dl.getRowPosition() : dl.rowposition) || 1;
};

/** 값 세팅 helper */
scwin.util.set = function (dl, col, val, row) {
  if (!dl) return;
  var r = row || scwin.util.rowPos(dl);
  dl.setCellData(r, col, val);
};

/** 값 조회 helper */
scwin.util.get = function (dl, col, row) {
  if (!dl) return "";
  var r = row || scwin.util.rowPos(dl);
  dl.getCellData(r, col);
  return "";
};

/** rowCount helper */
scwin.util.rowCount = function (dl) {
  if (!dl) return 0;
  if (dl.getRowCount) return dl.getRowCount();
  if (dl.CountRow != undefined) return Number(dl.CountRow);
  return 0;
};

/** DataList clear/add helper */
scwin.util.clear = function (dl) {
  if (!dl) return;
  if (dl.removeAll) dl.removeAll();else if (dl.ClearData) dl.ClearData();
};
scwin.util.addRow = function (dl) {
  if (!dl) return 1;
  if (dl.addRow) return dl.insertRow(0);
  if (dl.AddRow) {
    dl.insertRow(0);
    return scwin.util.rowPos(dl);
  }
  return 1;
};

/** UI 값들(프로젝트마다 text/Text/value 차이가 있어서 안전 처리) */
scwin.util.uiText = function (comp) {
  if (!comp) return "";
  return comp.getValue && comp.getValue() || comp.getValue() || comp.text || comp.Text || "";
};

/** Combo bindColVal */
scwin.util.bindColVal = function (comp) {
  if (!comp) return "";
  return comp.getValue && comp.getValue() || comp.BindColVal || "";
};

/**
* 조회 (GAUCE: tr_retrieve_booking.Post())
* WebSquare: submission execute
*/
scwin.f_Retrieve_booking = function () {
  // dma_retrieve_booking: kcomcd, bkNo, bkbltype 세팅
  dma_retrieve_booking.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve_booking.set("bkNo", scwin.util.uiText(ed_hhbkgno));

  // 벌크/컨테이너 구분
  var blType = scwin.util.bindColVal(lc_hhbltype) == "B" ? "B" : "C";
  dma_retrieve_booking.set("bkbltype", blType);

  // 실행
  return $c.sbm.execute($p, sbm_retrieve_booking); // ← 프로젝트 submission id로 교체
};

/**
* 계약번호 조회
*/
scwin.f_ContractInfo_booking = function () {
  scwin.util.clear(ds_ctrtNo_booking);
  dma_retrieveCtrtClnt_booking.set("ctrtNo", scwin.v_contractno);
  dma_retrieveCtrtClnt_booking.set("ctrtClntNo", scwin.util.uiText(ed_hhactcust).trim());
  dma_retrieveCtrtClnt_booking.set("scDate", scwin.util.uiText(ed_hhetd).trim());
  dma_retrieveCtrtClnt_booking.set("ctrtDtYn", "1");
  dma_retrieveCtrtClnt_booking.set("ctrtDistrictCd", "ZZA");
  dma_retrieveCtrtClnt_booking.set("impExpDomesticClsCd", "O");

  // ETA가 없으면 현재일(서버 JSP 변수)
  if (!scwin.util.uiText(ed_hheta)) {
    dma_retrieveCtrtClnt_booking.set("scDate", scwin.strCurDate);
  }

  // container/bulk
  if (scwin.util.bindColVal(lc_hhbltype) != "B") {
    dma_retrieveCtrtClnt_booking.set("bizDivCntrYn", "1");
  } else {
    dma_retrieveCtrtClnt_booking.set("bizDivBulkYn", "1");
  }

  // 조회 실행
  $c.sbm.execute($p, sbm_retrieveCtrtClnt_booking) // ← submission id로 교체
  .then(function () {
    alert('xxxx3');
    // combo index 초기화
    if (lc_contractno_booking) lc_contractno_booking.setIndex ? lc_contractno_booking.setIndex(0) : lc_contractno_booking.Index = 0;

    // 결과 없으면 fallback 고객(999908)로 1번 더
    if (scwin.util.rowCount(ds_ctrtNo_booking) == 0) {
      dma_retrieveCtrtClnt_booking.set("ctrtClntNo", "999908");
      return $c.sbm.execute($p, sbm_retrieveCtrtClnt_booking).then(function () {
        lc_contractno_booking.setIndex(0);
      });
    }
  });
};

/**
* 취소
*/
scwin.f_Cancel_booking = function () {
  if (scwin.statusFlag == "C") return;
  if (ds_containerBookingList_booking && ds_containerBookingList_booking.undoAll) ds_containerBookingList_booking.undoAll();
  if (ds_ctrtNo_booking && ds_ctrtNo_booking.undoAll) ds_ctrtNo_booking.undoAll();
  scwin.f_cancelRow_booking(1);
  scwin.f_cancelRow_booking(2);
  scwin.f_cancelRow_booking(3);
  processFlag = "T";
};

/**
* 행취소 (1:DoorOrder, 2:DoorOrderQty, 3:Container)
*/
scwin.f_cancelRow_booking = function (disGubun) {
  switch (disGubun) {
    case 1:
      ds_containerDoorOrder_booking && ds_containerDoorOrder_booking.undoAll && ds_containerDoorOrder_booking.undoAll();
      ds_containerDoorOrderQty_booking && ds_containerDoorOrderQty_booking.undoAll && ds_containerDoorOrderQty_booking.undoAll();
      break;
    case 2:
      ds_containerDoorOrderQty_booking && ds_containerDoorOrderQty_booking.undoAll && ds_containerDoorOrderQty_booking.undoAll();
      break;
    case 3:
      ds_containerBookingCont_booking && ds_containerBookingCont_booking.undoAll && ds_containerBookingCont_booking.undoAll();
      break;
  }
};

/**
* 저장(Booking No 생성 → DoorOrder 자동 생성 → 데이터 세팅)
* - GAUCE: tr_retrievebookingNo_booking.Post()
* - WebSquare: sbm 실행
*/
scwin.f_Save_booking = function () {
  // Housebl의 bookingNo 초기화
  scwin.util.set(ds_houseblList, "hhbkgno", "", scwin.util.rowPos(ds_houseblList));

  // bookingNo 생성용 파라미터
  var rr = scwin.util.rowPos(dma_retrieve_booking);
  scwin.util.set(dma_retrieve_booking, "kcomcd", scwin.hd_kcomcd, rr);
  scwin.util.set(dma_retrieve_booking, "bkEtd", scwin.util.uiText(ed_hhetd), rr);

  // containerBookingList 기본값
  var br = scwin.util.rowPos(ds_containerBookingList_booking);
  scwin.util.set(ds_containerBookingList_booking, "etRsltsDt", scwin.util.uiText(ed_hhetd), br);
  scwin.util.set(ds_containerBookingList_booking, "bkPic", scwin.vUserId, br);
  scwin.util.set(ds_containerBookingList_booking, "bkPicNm", scwin.vUserNm, br);

  // bulk / container에 따라 다른 submission 호출(기존 action 분기 대체)
  var isBulk = scwin.util.bindColVal(lc_hhbltype) == "B";
  var action = isBulk ? "/il.seaout.sobk.RetrieveBookingNoCMD.do" : "/il.seaout.sobk.RetrieveContainerBookingNoCMD.do";
  if (sbm_retrievebookingNo_booking && sbm_retrievebookingNo_booking.setAction) {
    sbm_retrievebookingNo_booking.setAction(action);
  } else {
    sbm_retrievebookingNo_booking.action = action;
  }
  return $c.sbm.execute($p, sbm_retrievebookingNo_booking).then(function () {
    // 생성된 Booking No 반영
    var no = scwin.util.get(ds_retrieveNo_booking, "bkNo", scwin.util.rowPos(ds_retrieveNo_booking));
    if (ed_hhbkgno && ed_hhbkgno.setValue) ed_hhbkgno.setValue(no);else ed_hhbkgno.Text = no;

    // DoorOrder 자동 생성
    scwin.f_autoCreateDoorOrderInfo_booking();

    // bookingList 저장용 세팅
    br = scwin.util.rowPos(ds_containerBookingList_booking);
    scwin.util.set(ds_containerBookingList_booking, "bkNo", no, br);
    scwin.util.set(ds_containerBookingList_booking, "custCd", scwin.util.uiText(ed_hhactcust), br);
    scwin.util.set(ds_containerBookingList_booking, "custNm", txt_hhactcustnm && txt_hhactcustnm.getValue() || "", br);
    scwin.util.set(ds_containerBookingList_booking, "wgt", scwin.util.uiText(ed_hhgwgt), br);

    // BK SEQ
    scwin.util.clear(ds_bkseq);
    scwin.util.addRow(ds_bkseq);
    scwin.util.set(ds_bkseq, "code", "01", scwin.util.rowPos(ds_bkseq));
    if (lc_hhbkgseq) lc_hhbkgseq.setIndex ? lc_hhbkgseq.setIndex(0) : lc_hhbkgseq.Index = 0;
    scwin.util.set(ds_containerBookingList_booking, "kcomcd", scwin.hd_kcomcd, br);
    scwin.util.set(ds_containerBookingList_booking, "bkbltype", isBulk ? "B" : "C", br);
    scwin.util.set(ds_containerBookingList_booking, "bkEtd", scwin.util.uiText(ed_hhetd), br);
    scwin.util.set(ds_containerBookingList_booking, "inpid", scwin.vUserId, br);
  });
};

/**
* Door type Qty setting
*/
scwin.f_doorTypeQtyLoading_booking = function () {
  var wgt = Number(scwin.util.uiText(ed_hhgwgt)) / 1000;
  var msr = Number(scwin.util.uiText(ed_hhmsr));
  var r = scwin.util.rowPos(ds_containerDoorOrderQty_booking);
  var qtyType = scwin.util.get(ds_containerDoorOrderQty_booking, "qtytype", r);
  if (qtyType == "WGT" || qtyType == "M/T") {
    scwin.util.set(ds_containerDoorOrderQty_booking, "qty", scwin.util.uiText(ed_hhgwgt), r);
  } else if (qtyType == "R/T") {
    scwin.util.set(ds_containerDoorOrderQty_booking, "qty", wgt > msr ? wgt : msr, r);
  } else if (qtyType == "CBM") {
    scwin.util.set(ds_containerDoorOrderQty_booking, "qty", msr, r);
  } else {
    // 컨테이너 타입별 수량 연결
    var t1 = scwin.util.uiText(ed_hhcnt1type),
      q1 = scwin.util.uiText(ed_hhcnt1);
    var t2 = scwin.util.uiText(ed_hhcnt2type),
      q2 = scwin.util.uiText(ed_hhcnt2);
    var t3 = scwin.util.uiText(ed_hhcnt3type),
      q3 = scwin.util.uiText(ed_hhcnt3);
    var t4 = scwin.util.uiText(ed_hhcnt4type),
      q4 = scwin.util.uiText(ed_hhcnt4);
    if (qtyType == t1) scwin.util.set(ds_containerDoorOrderQty_booking, "qty", q1, r);else if (qtyType == t2) scwin.util.set(ds_containerDoorOrderQty_booking, "qty", q2, r);else if (qtyType == t3) scwin.util.set(ds_containerDoorOrderQty_booking, "qty", q3, r);else if (qtyType == t4) scwin.util.set(ds_containerDoorOrderQty_booking, "qty", q4, r);
  }
};

/**
* Door Order 자동 생성
*/
scwin.f_autoCreateDoorOrderInfo_booking = function () {
  scwin.util.clear(ds_containerBookingList_booking);
  scwin.util.clear(ds_containerDoorOrder_booking);
  scwin.util.clear(ds_containerDoorOrderQty_booking);
  scwin.util.addRow(ds_containerBookingList_booking);
  scwin.util.addRow(ds_containerDoorOrder_booking);
  scwin.util.addRow(ds_containerDoorOrderQty_booking);

  // door order 기본값
  var dr = scwin.util.rowPos(ds_containerDoorOrder_booking);
  scwin.util.set(ds_containerDoorOrder_booking, "kcomcd", scwin.hd_kcomcd, dr);
  scwin.util.set(ds_containerDoorOrder_booking, "bkNo", scwin.util.uiText(ed_hhbkgno), dr);
  scwin.util.set(ds_containerDoorOrder_booking, "doordt", scwin.strCurDate + scwin.currentTime, dr);
  scwin.util.set(ds_containerDoorOrder_booking, "bkdoorseq", "01", dr);
  scwin.util.set(ds_containerDoorOrder_booking, "internalTyp", "2", dr);
  scwin.util.set(ds_containerDoorOrder_booking, "transcd", "109856", dr);
  scwin.util.set(ds_containerDoorOrder_booking, "inpid", scwin.vUserId, dr);

  // door qty 기본값
  var qr = scwin.util.rowPos(ds_containerDoorOrderQty_booking);
  scwin.util.set(ds_containerDoorOrderQty_booking, "kcomcd", scwin.hd_kcomcd, qr);
  scwin.util.set(ds_containerDoorOrderQty_booking, "bkNo", scwin.util.uiText(ed_hhbkgno), qr);
  scwin.util.set(ds_containerDoorOrderQty_booking, "bkdoorseq", "01", qr);
  var blType = scwin.util.bindColVal(lc_hhbltype);
  if (blType == "F") {
    scwin.util.set(ds_containerDoorOrderQty_booking, "qtytype", "22GP", qr);
    scwin.util.set(ds_containerDoorOrderQty_booking, "realQtytype", "22GP", qr);
  } else if (blType == "L") {
    scwin.util.set(ds_containerDoorOrderQty_booking, "qtytype", "R/T", qr);
    scwin.util.set(ds_containerDoorOrderQty_booking, "realQtytype", "R/T", qr);
  }
  scwin.f_doorTypeQtyLoading_booking();
  scwin.util.set(ds_containerDoorOrderQty_booking, "inpid", scwin.vUserId, qr);
};

/**
* 신규
*/
scwin.f_Create_booking = function () {
  scwin.util.clear(ds_containerBookingList_booking);
  scwin.util.addRow(ds_containerBookingList_booking);
  scwin.util.clear(ds_containerDoorOrder_booking);
  scwin.util.clear(ds_containerDoorOrderQty_booking);
  scwin.util.clear(ds_containerBookingCont_booking);
  scwin.util.clear(ds_houseblList_booking);
  var r = scwin.util.rowPos(ds_containerBookingList_booking);
  scwin.util.set(ds_containerBookingList_booking, "reDt", scwin.strCurDate, r);
  scwin.util.set(ds_containerBookingList_booking, "bkPic", scwin.vUserId, r);
  scwin.util.set(ds_containerBookingList_booking, "bkPicNm", scwin.vUserNm, r);

  // dept 기본값
  if (!(scwin.vLobranCd == "null" || scwin.vLobranCd == null)) {
    scwin.util.set(ds_containerBookingList_booking, "dept", scwin.vLobranCd, r);
    scwin.util.set(ds_containerBookingList_booking, "deptnm", scwin.vLobranNm, r);
  }
};

/** ==
* DIRECT / BULK
* == */

scwin.f_Save_direct = function () {
  if (scwin.statusFlag != "C") return true;

  // DBEX 특수 케이스
  var hhbl = scwin.util.uiText(cnd_ed_hhblno);
  var isDBEX = hhbl && hhbl.length == 4 && hhbl == "DBEX";
  if (isDBEX) {
    dma_retrieve_direct.set("hhetd", scwin.util.uiText(ed_creadyDt));
    dma_retrieve_direct.set("autono", scwin.util.bindColVal(cnd_lc_autono));

    // MHNO 생성
    // GAUCE: tr_createMhno_direct.Post()
    // WS: execute
    return $c.sbm.execute($p, "sbm_createMhno_direct").then(function () {
      // mhno list 반영
      scwin.util.clear(ds_hmhno);
      scwin.util.addRow(ds_hmhno);
      var mhno = ds_createMhno_direct.get(0, "mhno");
      scwin.util.set(ds_hmhno, "code", mhno, scwin.util.rowPos(ds_hmhno));
      scwin.util.set(ds_hmhno, "name", mhno, scwin.util.rowPos(ds_hmhno));
      if (cnd_lc_mhno) cnd_lc_mhno.setIndex ? cnd_lc_mhno.setIndex(0) : cnd_lc_mhno.Index = 0;

      // House BL 생성
      dma_retrieve_direct.set("hhetd", scwin.util.uiText(ed_creadyDt));
      return $c.sbm.execute($p, sbm_createHouseBlNo_direct).then(function () {
        var newBl = ds_createBlNo_direct.getCellData(0, "hhblno");
        if (cnd_ed_hhblno && cnd_ed_hhblno.setValue) cnd_ed_hhblno.setValue(newBl);else cnd_ed_hhblno.Text = newBl;
        return scwin.direct._checkMasterBl();
      });
    });
  }

  // 일반 케이스
  dma_retrieve_direct.set("autono", scwin.util.bindColVal(cnd_lc_autono));
  dma_retrieve_direct.set("hhetd", scwin.util.uiText(ed_hhetd));
  return $c.sbm.execute($p, sbm_createMhno_direct).then(function () {
    scwin.util.clear(ds_hmhno);
    scwin.util.addRow(ds_hmhno);
    var mhno = ds_createMhno_direct.get(0, "mhno");
    scwin.util.set(ds_hmhno, "code", mhno);
    scwin.util.set(ds_hmhno, "name", mhno);
    if (cnd_lc_mhno) cnd_lc_mhno.setIndex ? cnd_lc_mhno.setIndex(0) : cnd_lc_mhno.Index = 0;
    return scwin.direct._checkMasterBl();
  });
};
scwin.direct._checkMasterBl = function () {
  // master b/l 확인
  var bl = scwin.util.uiText(cnd_ed_hhblno);
  if (cnd_ed_hhmblno && cnd_ed_hhmblno.setValue) cnd_ed_hhmblno.setValue(bl);else cnd_ed_hhmblno.Text = bl;

  // dma_retrieve2_direct: hhmblno 세팅 (GAUCE는 1 row)
  dma_retrieve2_direct.set("hhmblno", scwin.util.uiText(cnd_ed_hhmblno));

  // popup 조건 그대로 유지
  if (scwin.popUpResult != null && scwin.popUpResult[2] == "Y" && String(bl).trim() == scwin.popUpResult[0] && gptYn) {
    return true;
  }

  // 체크 실행
  return $c.sbm.execute($p, sbm_checkMasterBl_direct).then(function () {
    var chk = scwin.util.get(ds_checkMasterBl_direct, "chk", 1);
    if (chk == "F") {
      alert("Master B/L [" + scwin.util.uiText(cnd_ed_hhmblno) + "]에 해당하는 Direct B/L이 이미 존재합니다.");
      return false;
    }
    return true;
  });
};
scwin.f_Save_bulk = function () {
  return true;
};

/** ==
* TEXTAREA 저장/복원
* == */

scwin.f_TextareaSave = function () {
  var hhsSplit = String(scwin.util.uiText(ta_hhs) || "").split("\n");
  var hhcSplit = String(scwin.util.uiText(ta_hhc) || "").split("\n");
  var hhnSplit = String(scwin.util.uiText(ta_hhn) || "").split("\n");
  var hhaSplit = String(scwin.util.uiText(txa_agentAdress) || "").split("\n");

  // 5줄 보장
  for (var i = 0; i < 5; i++) {
    if (hhsSplit[i] == undefined) hhsSplit[i] = "";
    if (hhcSplit[i] == undefined) hhcSplit[i] = "";
    if (hhnSplit[i] == undefined) hhnSplit[i] = "";
    if (hhaSplit[i] == undefined) hhaSplit[i] = "";
  }
  var r1 = scwin.util.rowPos(ds_houseblList);
  var r2 = scwin.util.rowPos(ds_partnerInfo);
  for (var k = 1; k < 6; k++) {
    var s1 = (hhsSplit[k - 1] || "").replace(/\r/gi, "").replace(/\n/gi, "");
    var s2 = (hhnSplit[k - 1] || "").replace(/\r/gi, "").replace(/\n/gi, "");
    var s3 = (hhcSplit[k - 1] || "").replace(/\r/gi, "").replace(/\n/gi, "");
    var s4 = (hhaSplit[k - 1] || "").replace(/\r/gi, "").replace(/\n/gi, "");
    scwin.util.set(ds_houseblList, "hhs" + k, s1, r1);
    scwin.util.set(ds_houseblList, "hhn" + k, s2, r1);
    scwin.util.set(ds_houseblList, "hhc" + k, s3, r1);
    scwin.util.set(ds_partnerInfo, "partnerAddr" + k, s4, r2);
  }
};
scwin.f_TextareaCall = function () {
  var r1 = scwin.util.rowPos(ds_houseblList);
  var r2 = scwin.util.rowPos(ds_partnerInfo);
  var str1 = "",
    str2 = "",
    str3 = "",
    str4 = "";
  for (var i = 1; i < 6; i++) {
    str1 += scwin.util.get(ds_houseblList, "hhs" + i, r1) + "\n";
    str2 += scwin.util.get(ds_houseblList, "hhn" + i, r1) + "\n";
    str3 += scwin.util.get(ds_houseblList, "hhc" + i, r1) + "\n";
    str4 += scwin.util.get(ds_partnerInfo, "partnerAddr" + i, r2) + "\n";
  }

  // 필요 시 textarea에 바인딩
  if (ta_hhs && ta_hhs.setValue) ta_hhs.setValue(str1);
  if (ta_hhn && ta_hhn.setValue) ta_hhn.setValue(str2);
  if (ta_hhc && ta_hhc.setValue) ta_hhc.setValue(str3);
  if (txa_agentAdress && txa_agentAdress.setValue) txa_agentAdress.setValue(str4);
};

//-------------------------------------------------------------------------
// customerInfo 가져오기 (GAUCE DataID/Reset 제거 → sbm_combo 공통 사용)
//-------------------------------------------------------------------------
scwin.f_customerInfo = async function (param) {
  // ds_customerInfo <- e.responseJSON.GAUCE
  await scwin.f_commCode(ds_customerInfo, "ilCommonEBC", "retriveCustomerInfo", param);
  if (ds_customerInfo.getRowCount() == 0) return;

  // GAUCE의 col1~col4 그대로 사용 (0행 기준)
  var buyerCd = ds_customerInfo.getCellData(0, "col1");
  var buyerNm = ds_customerInfo.getCellData(0, "col2");
  var salesCd = ds_customerInfo.getCellData(0, "col3");
  var salesNm = ds_customerInfo.getCellData(0, "col4");
  if (ed_hhbuyer.getValue() == "") {
    ed_hhbuyer.setValue(buyerCd);
    txt_hhbuyernm.setValue ? txt_hhbuyernm.setValue(buyerNm) : txt_hhbuyernm.setValue(buyerNm);
  }
  ed_hhsales.setValue(salesCd);
  txt_hhsalesnm.setValue ? txt_hhsalesnm.setValue(salesNm) : txt_hhsalesnm.setValue(salesNm);
};

//-------------------------------------------------------------------------
// Result Date 회계마감 여부 체크 (월마감된 월로는 실적일자 입력 불가)
//-------------------------------------------------------------------------
scwin.f_JobCloseYn = function () {
  var preWrkNo = "FI01"; // 월 마감코드

  // 공통 검사 함수
  function checkOne(dl, label, certiField) {
    var rc = scwin._rc(dl);
    // 기준월: 현재일(YYYYMM)
    var minYm = scwin._ym(scwin.strCurDate); // scwin.strCurDate → scwin.strCurDate

    for (var i = 0; i < rc; i++) {
      // 신규 생성 행만 체크
      if (scwin._isInsertRow(dl, i)) {
        var ym = scwin._ym(dl.getCellData(i, "rsltsStdDt"));
        if (ym && ym < minYm) minYm = ym;
      }
    }
    var rsltsDt = minYm;
    var isCloseDepr = cfJobCloseYN("CUR", rsltsDt, "00", preWrkNo, "0", "", "", "000");
    if (isCloseDepr == "2" || isCloseDepr == "DNF") {
      cfAlertMsg("회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.\n" + label + " Result Date를 확인하세요.");
      return false;
    }
    return true;
  }

  // Selling / Partner / Buying 순서대로 검사
  if (!checkOne(ds_selling_freight, "Selling List", "certiNo")) return false;
  if (!checkOne(ds_partner_freight, "Partner List", "certiNo")) return false;
  if (!checkOne(ds_buying_freight, "Buying List", "pchsCertiNo")) return false;
  return true;
};

// DataList rowCount 안전 처리
scwin._rc = function (dl) {
  return dl ? dl.getRowCount() : 0;
};

// DataList month(YYYYMM) 추출
scwin._ym = function (yyyymmdd) {
  var s = (yyyymmdd || "").toString();
  return s.length >= 6 ? s.substring(0, 6) : "";
};

// DataList 신규행 여부(프로젝트 RowStatus 코드에 맞춰 조정 가능)
// - GAUCE: "1" 신규, "2" 삭제 등
// - WebSquare에서도 RowStatus 값을 동일하게 쓰는 경우가 많음
scwin._isInsertRow = function (dl, rowIdx) {
  // getRowStatus / getRowState 등 프로젝트별로 다를 수 있어 fallback 포함
  var st = dl.getRowStatus && dl.getRowStatus(rowIdx) || dl.getRowState && dl.getRowState(rowIdx) || dl.getRowStatusValue && dl.getRowStatusValue(rowIdx) || "";
  return st == "1";
};

// 체크된 행에 대해 특정 컬럼들을 일괄 변경 (Selling/Partner/Buying 공통 처리용)
scwin.applyCheckedChange = function (dl, chkCol, mapping) {
  var rc = scwin._rc(dl);
  for (var i = 0; i < rc; i++) {
    if ((dl.getCellData(i, chkCol) || "") == "T") {
      for (var k in mapping) dl.setCellData(i, k, mapping[k]);
    }
  }
};

// ilCommonPopUp이 그대로 존재한다면(동기/콜백 혼재 가능) Promise wrapper
scwin.openCommonPopup = function (args) {
  return new Promise(function (resolve) {
    // 기존 ilCommonPopUp을 그대로 호출 (리턴 방식이 동기면 즉시 resolve)
    var r = ilCommonPopUp.apply(null, args);
    if (r != undefined) return resolve(r);

    // 만약 콜백 방식이라면 프로젝트 규약에 맞춰 여기서 resolve하도록 수정 필요
    // (현재는 동기 리턴을 기본으로 가정)
    resolve(null);
  });
};

// ==
// GAUCE -> WebSquare converted handlers
// Source: se_105_01_06b_full_utf8.xml
// Generated: 2026-01-04T07:04:42.077Z
// ==
// [GAUCE] for=ed_cusCd event=onKillFocus
scwin.ed_cusCd_onblur = function (e) {
  if (ed_cusCd.getValue() == "") {
    txt_cusNm.setValue("");
    return;
  }
  scwin.f_chkCustomerCodeModifyPopUp();
};

// [GAUCE] for=ed_hhcnt2type event=onKillFocus
scwin.ed_hhcnt1type_onblur = function (e) {
  scwin.f_containerDualCheck(); // container Dual Check

  if (lc_hhbltype.getValue() != "B") {
    var val = ed_hhcnt1type.getValue();
    if (val != "") {
      var STR = ds_containerType && val ? ds_containerType.getMatchedData("code", val) : -1;
      if (STR == -1) {
        // 값이 없을때
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
      } else {
        scwin.f_cargoControl();
        return true;
      }
    }
  }
};

// [GAUCE] for=ed_hhcnt2type event=onKillFocus
scwin.ed_hhcnt2type_onblur = function (e) {
  scwin.f_containerDualCheck(); // container Dual Check

  if (lc_hhbltype.getValue() != "B") {
    var val = ed_hhcnt2type.getValue();
    if (val != "") {
      var STR = ds_containerType && val ? ds_containerType.getMatchedData("code", val) : -1;
      if (STR == -1) {
        // 값이 없을때
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
      } else {
        scwin.f_cargoControl();
        return true;
      }
    }
  }
};

// [GAUCE] for=ed_hhcnt3type event=onKillFocus
scwin.ed_hhcnt3type_onblur = function (e) {
  scwin.f_containerDualCheck(); // container Dual Check

  if (lc_hhbltype.getValue() != "B") {
    var val = ed_hhcnt3type.getValue();
    if (val != "") {
      var STR = ds_containerType && val ? ds_containerType.getMatchedData("code", val) : -1;
      if (STR == -1) {
        // 값이 없을때
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
      } else {
        scwin.f_cargoControl();
        return true;
      }
    }
  }
};

// [GAUCE] for=ed_hhcnt4type event=onKillFocus
scwin.ed_hhcnt4type_onblur = function (e) {
  scwin.f_containerDualCheck(); // container Dual Check

  if (lc_hhbltype.getValue() != "B") {
    var val = ed_hhcnt4type.getValue();
    if (val != "") {
      var STR = ds_containerType && val ? ds_containerType.getMatchedData("code", val) : -1;
      if (STR == -1) {
        // 값이 없을때
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
      } else {
        scwin.f_cargoControl();
        return true;
      }
    }
  }
};

// [GAUCE] for=ed_hhcnt1type event=onKillFocus
scwin.ed_hhcnt1type_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt1type.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
  }
};

// [GAUCE] for=ed_hhcnt2type event=onKillFocus
scwin.ed_hhcnt2type_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt2type.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
  }
};

// [GAUCE] for=ed_hhcnt3type event=onKillFocus
scwin.ed_hhcnt3type_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt3type.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
  }
};

// [GAUCE] for=ed_hhcnt4type event=onKillFocus
scwin.ed_hhcnt4type_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt4type.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
  }
};

// [GAUCE] for=ed_hhcnt1 event=onKillFocus
scwin.ed_hhcnt1_onblur = function (e) {
  if (ed_hhcnt1.getValue() != "0" || ed_hhcnt1.getValue() != "") {
    scwin.f_cargoControl();
  }
};

// [GAUCE] for=ed_hhcnt2 event=onKillFocus
scwin.ed_hhcnt2_onblur = function (e) {
  if (ed_hhcnt2.getValue() != "0" || ed_hhcnt2.getValue() != "") {
    scwin.f_cargoControl();
  }
};

// [GAUCE] for=ed_hhcnt3 event=onKillFocus
scwin.ed_hhcnt3_onblur = function (e) {
  if (ed_hhcnt3.getValue() != "0" || ed_hhcnt3.getValue() != "") {
    scwin.f_cargoControl();
  }
};

// [GAUCE] for=ed_hhcnt4 event=onKillFocus
scwin.ed_hhcnt4_onblur = function (e) {
  if (ed_hhcnt4.getValue() != "0" || ed_hhcnt4.getValue() != "") {
    scwin.f_cargoControl();
  }
};

// [GAUCE] for=ed_hhpkg event=onKillFocus
scwin.ed_hhpkg_onblur = function (e) {
  if (ed_hhpkg.getValue() != "0" || ed_hhpkg.getValue() != "") {
    scwin.f_cargoControl();
  }
};

// [GAUCE] for=cnd_ed_hhblno event=onKillFocus
scwin.cnd_ed_hhblno_onblur = function (e) {
  if (cnd_ed_hhblno.getValue() != "") {
    scwin.f_MhnoLoading();
  }
};

// [GAUCE] for=ds_hmhno event=OnLoadCompleted(rowcnt)
scwin.ds_hmhno_onLoad = function () {
  if (ds_hmhno.getRowCount() == 0) {
    if (scwin.statusFlag != "C") $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["House No"]); // @이(가) 존재하지 않습니다.
    ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
    ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.statusFlag == "C") {
    ds_hmhno.removeAll();
    ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
    ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.mhnoFlag == "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};

// [GAUCE] for=ed_hhbkgno event=onKillFocus
scwin.ed_hhbkgno_onblur = function (e) {
  //    if (scwin.statusFlag == "C"){
  // 		if (ed_hhbkgno.getValue() == "") {
  // 		scwin.f_bookingSearchPopup()));
  // 		} else {
  // 			scwin.f_BookingLoading();
  // 		}
  // 	}
};

// [GAUCE] for=lc_hhbkgseq event=OnSelChange
scwin.lc_hhbkgseq_onselchange = function (e) {
  //    if (scwin.statusFlag == "C"){
  // 		if (ed_hhbkgno.getValue() == "") {
  // 		    $c.gus.cfViewTab(0)));  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
  // 			lc_hhbkgseq.focus();
  // 		} else {
  // 			scwin.f_ContainerLoading();
  // 		}
  // 	}
};

// [GAUCE] for=lc_hhpcgb event=OnSelChange
scwin.lc_hhpcgb_onselchange = function (e) {
  if (scwin.statusFlag == "C") {
    if (lc_hhpcgb.getValue() == "P") {
      lc_hhpaynm.setValue(lc_hhisunm.getValue());
      lc_hhprenm.setSelectedIndex(0);
    } else {
      lc_hhpaynm.setSelectedIndex(3);
      lc_hhprenm.setSelectedIndex(1);
    }
  }
};

// [GAUCE] for=lc_hhbltype event=OnSelChange
scwin.lc_hhbltype_onselchange = function (e) {
  scwin.f_cargoControl();
  // 	2008.05.15 추가  Cargo Type이 Bulk인경우 Service Term 항목을 바꿈
  scwin.f_bulkTypeServiceTerm();
  if (lc_hhbltype.getValue() == "F") {
    lc_hhstype.setSelectedIndex(0);
  } else if (lc_hhbltype.getValue() == "L") {
    lc_hhstype.setSelectedIndex(4);
  }
};

// [GAUCE] for=ed_hhscd event=onKillFocus
scwin.ed_hhscd_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    var strClntNo = "";
    strClntNo = ed_hhscd.getValue().trim();
    if (strClntNo.length > 0) {
      scwin.txt_hhs1 = "";
      scwin.txt_hhs2 = "";
      scwin.txt_hhs3 = "";
      scwin.txt_hhs4 = "";
      txt_hhs5.setValue("");
      scwin.f_PopUp("Shipper", 'T');
    } else {
      scwin.txt_hhs1 = "";
      scwin.txt_hhs2 = "";
      scwin.txt_hhs3 = "";
      scwin.txt_hhs4 = "";
      txt_hhs5.setValue("");
    }
  } else if (scwin.statusFlag == "U") {
    var strClntNo = "";
    strClntNo = ed_hhscd.getValue().trim();
    if (scwin.txt_hhs1 == "") {
      if (strClntNo.length > 0) {
        scwin.txt_hhs1 = "";
        scwin.txt_hhs2 = "";
        scwin.txt_hhs3 = "";
        scwin.txt_hhs4 = "";
        txt_hhs5.setValue("");
        scwin.f_PopUp("Shipper", 'T');
      } else {
        scwin.txt_hhs1 = "";
        scwin.txt_hhs2 = "";
        scwin.txt_hhs3 = "";
        scwin.txt_hhs4 = "";
        txt_hhs5.setValue("");
      }
    }
  }
};

// [GAUCE] for=ed_hhccd event=onKillFocus
scwin.ed_hhccd_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    var strClntNo = "";
    strClntNo = ed_hhccd.getValue().trim();
    if (strClntNo.length > 0) {
      scwin.txt_hhc1 = "";
      scwin.txt_hhc2 = "";
      scwin.txt_hhc3 = "";
      scwin.txt_hhc4 = "";
      scwin.txt_hhc5 = "";
      scwin.f_PopUp("Consignee", 'T');
    } else {
      scwin.txt_hhc1 = "";
      scwin.txt_hhc2 = "";
      scwin.txt_hhc3 = "";
      scwin.txt_hhc4 = "";
      scwin.txt_hhc5 = "";
    }
  } else if (scwin.statusFlag == "U") {
    var strClntNo = "";
    strClntNo = ed_hhccd.getValue().trim();
    if (scwin.txt_hhc1 == "") {
      if (strClntNo.length > 0) {
        scwin.txt_hhc1 = "";
        scwin.txt_hhc2 = "";
        scwin.txt_hhc3 = "";
        scwin.txt_hhc4 = "";
        scwin.txt_hhc5 = "";
        scwin.f_PopUp("Consignee", 'T');
      } else {
        scwin.txt_hhc1 = "";
        scwin.txt_hhc2 = "";
        scwin.txt_hhc3 = "";
        scwin.txt_hhc4 = "";
        scwin.txt_hhc5 = "";
      }
    }
  }
};

// [GAUCE] for=ed_hhncd event=onKillFocus
scwin.ed_hhncd_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    var strClntNo = "";
    strClntNo = ed_hhncd.getValue().trim();
    if (strClntNo.length > 0) {
      scwin.txt_hhn1 = "";
      scwin.txt_hhn2 = "";
      scwin.txt_hhn3 = "";
      scwin.txt_hhn4 = "";
      scwin.txt_hhn5 = "";
      scwin.f_PopUp("Notify", 'T');
    } else {
      scwin.txt_hhn1 = "";
      scwin.txt_hhn2 = "";
      scwin.txt_hhn3 = "";
      scwin.txt_hhn4 = "";
      scwin.txt_hhn5 = "";
    }
  } else if (scwin.statusFlag == "U") {
    var strClntNo = "";
    strClntNo = ed_hhncd.getValue().trim();
    if (scwin.txt_hhn1 == "") {
      if (strClntNo.length > 0) {
        scwin.txt_hhn1 = "";
        scwin.txt_hhn2 = "";
        scwin.txt_hhn3 = "";
        scwin.txt_hhn4 = "";
        scwin.txt_hhn5 = "";
        scwin.f_PopUp("Notify", 'T');
      } else {
        scwin.txt_hhn1 = "";
        scwin.txt_hhn2 = "";
        scwin.txt_hhn3 = "";
        scwin.txt_hhn4 = "";
        scwin.txt_hhn5 = "";
      }
    }
  }
};

// [GAUCE] for=ed_hhvslcd event=onKillFocus
scwin.ed_hhvslcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhvslcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhvsl.setValue("");
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    txt_hhvsl.setValue("");
  }
};

// [GAUCE] for=ed_hhlodcd event=onKillFocus
scwin.ed_hhlodcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhlodcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    txt_hhlodnm.setValue("");
  }
};

// [GAUCE] for=ed_hhdisccd event=onKillFocus
scwin.ed_hhdisccd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhdisccd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhdiscnm.setValue("");
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    txt_hhdiscnm.setValue("");
  }
};

// [GAUCE] for=ed_hhunitcd event=onKillFocus
scwin.ed_hhunitcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhunitcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhunit.setValue("");
    scwin.f_OpenCommonPopUp("Unit", "T", "F", "F");
  } else {
    txt_hhunit.setValue("");
  }
};

// [GAUCE] for=ed_hhagent event=onKillFocus
scwin.ed_hhagent_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhagent.getValue().trim();
  {
    ed_agent.setValue("");
    txa_agentAdress.setValue("");
    ds_partnerInfo.setCellData(ds_partnerInfo.getRowPosition(), "partnerAddr1", "");
    ds_partnerInfo.setCellData(ds_partnerInfo.getRowPosition(), "partnerAddr2", "");
    ds_partnerInfo.setCellData(ds_partnerInfo.getRowPosition(), "partnerAddr3", "");
    ds_partnerInfo.setCellData(ds_partnerInfo.getRowPosition(), "partnerAddr4", "");
    ds_partnerInfo.setCellData(ds_partnerInfo.getRowPosition(), "partnerAddr5", "");
    if (strClntNo.length > 0) {
      txt_hhagentnm.setValue("");
      scwin.f_PopUp('Partner', 'T');
    } else {
      txt_hhagentnm.setValue("");
    }
  }
};

// [GAUCE] for=scwin.ed_hhagentattn event=onKillFocus
scwin.ed_hhagentattn_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hhagentattn.trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhactcust event=onKillFocus
scwin.ed_hhactcust_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhactcust.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=scwin.ed_hhactattn event=onKillFocus
scwin.ed_hhactattn_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hhactattn.trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhsales event=onKillFocus
scwin.ed_hhsales_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhsales.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhliner event=onKillFocus
scwin.ed_hhliner_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhliner.getValue().trim();
  if (strClntNo.length > 0) {}
};

/*
// [GAUCE] for=scwin.ed_hhlinerattn event=onKillFocus
scwin.ed_hhlinerattn_onblur = function(e){
var strClntNo = "";
strClntNo = scwin.ed_hhlinerattn.trim() ;

if (strClntNo.length > 0) {
}
};
*/

// [GAUCE] for=ed_hhbuyer event=onKillFocus
scwin.ed_hhbuyer_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhbuyer.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=scwin.ed_hharea event=onKillFocus
scwin.ed_hharea_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hharea.trim();
  if (strClntNo.length > 0) {}
};

/* 히든 처리되어 있음
// [GAUCE] for=scwin.ed_hhitem event=onKillFocus
scwin.scwin.ed_hhitem_onblur = function(e){
var strClntNo = "";
strClntNo = scwin.ed_hhitem.trim() ;

if (strClntNo.length > 0) {
}
};
*/

// [GAUCE] for=ediitem event=onExit
scwin.ediitem_onexit = function (e) {
  var strClntNo = "";
  strClntNo = txt_hhmitem2.getValue().trim();
  if (txt_hhmitem2.getValue() == "") {}
};

// [GAUCE] for=ed_hhrcvcd event=onKillFocus
scwin.ed_hhrcvcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhrcvcd.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhdlvcd event=onKillFocus
scwin.ed_hhdlvcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhdlvcd.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhfdcd event=onKillFocus
scwin.ed_hhfdcd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhfdcd.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_mwarecd event=onKillFocus
scwin.ed_mwarecd_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_mwarecd.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhetd event=onKillFocus
scwin.ed_hhetd_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    if (ed_creadyDt.getValue() == "") {
      ed_creadyDt.setValue(ed_hhetd.getValue());
    }
  }
  if (scwin.statusFlag == "C" || scwin.statusFlag == "U") {
    ed_hhondt.setValue(ed_hhetd.getValue());
    ed_hhisudt.setValue(ed_hhetd.getValue());
  }
};

// [GAUCE] for=ed_blpic event=onKillFocus
scwin.ed_blpic_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_blpic.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ta_hhs event=onKillFocus
scwin.ta_hhs_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhs.getValue().toUpperCase();
  ta_hhs.setValue("");
  ta_hhs.setValue(upperTxt);
};

// [GAUCE] for=ta_hhc event=onKillFocus
scwin.ta_hhc_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhc.getValue().toUpperCase();
  ta_hhc.setValue("");
  ta_hhc.setValue(upperTxt);
};

// [GAUCE] for=ta_hhn event=onKillFocus
scwin.ta_hhn_onblur = function (e) {
  var upperTxt = "";
  upperTxt = ta_hhn.getValue().toUpperCase();
  ta_hhn.setValue("");
  ta_hhn.setValue(upperTxt);
};

// [GAUCE] for=ed_hhmt event=onKillFocus
scwin.ed_hhmt_onblur = function (e) {
  if (ed_hhmt.getValue() > 0) {
    ed_hhgwgt.setValue(ed_hhmt.getValue() * 1000);
  }
};

// [GAUCE] for=ed_hhgwgt event=onKillFocus
scwin.ed_hhgwgt_onblur = function (e) {
  if (ed_hhgwgt.getValue() > 0) {
    ed_hhmt.setValue(ed_hhgwgt.getValue() / 1000);
  }
};

// [GAUCE] for=gr_selling_freight event=onKeyPress(keycode)
scwin.gr_selling_freight_oneditkeydown = function (e) {
  var keycode = e && (e.keyCode || e.keycode) || 0;
  if (keycode == 255 && gr_selling_freight.GetColumn() == "vatAmt") {
    scwin.f_addRow_freight(1);
  }
};

// [GAUCE] for=gr_partner_freight event=onKeyPress(keycode)
scwin.gr_partner_freight_oneditkeydown = function (e) {
  var keycode = e && (e.keyCode || e.keycode) || 0;
  if (keycode == 255 && gr_partner_freight.GetColumn() == "rsltsStdDt") {
    scwin.f_addRow_freight(2);
  }
};

// [GAUCE] for=gr_buying_freight event=onKeyPress(keycode)
scwin.gr_buying_freight_oneditkeydown = function (e) {
  var keycode = e && (e.keyCode || e.keycode) || 0;
  if (keycode == 255 && gr_buying_freight.GetColumn() == "vat") {
    scwin.f_addRow_freight(3);
  }
};

// [GAUCE] for=srch_ed_hhblno event=onKillFocus
scwin.srch_ed_hhblno_onblur = function (e) {
  if (srch_ed_hhblno.getValue() != "") {
    scwin.f_MhnoLoading2();
  }
};

// [WebSquare] sbm_retrieveOcr submiterror
scwin.sbm_retrieveOcr_submiterror = function (e) {
  scwin.sbm_default_submiterror(e);
  gptYn = false;
};

// [WebSquare] sbm_retrieveOcr submitdone
scwin.sbm_retrieveOcr_submitdone = function (e) {
  if (ds_houseblList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    scwin.f_Set("INIT");
    scwin.f_Check(); // Object Check
    return;
  }
  var ds_houseblList_export = ds_houseblList.ExportData(1, ds_houseblList.getRowCount(), true);
  var ds_ocContList_export = ds_ocContList.ExportData(1, ds_ocContList.getRowCount(), true);
  scwin.f_Create();
  lc_hhbkgseq.CBData = "";
  ds_houseblList.removeAll();
  ds_houseblList.ImportData(ds_houseblList_export);
  ds_ocContList.removeAll();
  ds_ocContList.ImportData(ds_ocContList_export);
  cnd_ed_hhblno.setValue(ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhblno") /* TODO: GAUCE->WS row base ?? */);
  cnd_lc_autono.setSelectedIndex(2);
  $c.gus.cfShowTotalRows($p, ed_totcnt, ds_ocContList.getRowCount()); // 조회된 건수를Grid 하단에 표시한다.
  $c.gus.cfShowTotalRows($p, ed_eltotcnt, ds_ocElList.getRowCount()); // 조회된 건수를Grid 하단에 표시한다.
  var v_totPkg = 0;
  var v_totWgt = 0;
  var v_totMsr = 0;
  var v_eltotPkg = 0;
  var v_eltotWgt = 0;
  for (i = 1; i <= ds_ocContList.getRowCount(); i++) {
    v_totPkg += ds_ocContList.getCellData(i - 1, "mcpkg");
    v_totWgt += ds_ocContList.getCellData(i - 1, "mcwgt");
    v_totMsr += ds_ocContList.getCellData(i - 1, "mcmsr");
  }
  for (i = 1; i <= ds_ocElList.getRowCount(); i++) {
    v_eltotPkg += ds_ocElList.getCellData(i - 1, "pkg");
    v_eltotWgt += ds_ocElList.getCellData(i - 1, "wgt");
  }
  ed_totpkg.setValue(v_totPkg);
  ed_totwgt.setValue(v_totWgt);
  ed_totmsr.setValue(v_totMsr);
  ed_eltotpkg.setValue(v_eltotPkg);
  ed_eltotwgt.setValue(v_eltotWgt);
  scwin.f_invoiceCheck(); // invoice Check
  scwin.f_ContractInfo_booking();
  scwin.f_retrieveCarrierBkNo();
  if (ds_houseblList.getRowCount() > 0) {
    ta_hhs.setValue(ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhs1") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhs2") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhs3") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhs4") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhs5") /* TODO: GAUCE->WS row base ?? */);
    ta_hhc.setValue(ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhc1") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhc2") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhc3") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhc4") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhc5") /* TODO: GAUCE->WS row base ?? */);
    ta_hhn.setValue(ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhn1") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhn2") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhn3") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhn4") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "hhn5") /* TODO: GAUCE->WS row base ?? */);
    if (lc_hhbltype.getValue() == "B") {
      if (ed_hhgwgt.getValue() > 0) {
        ed_hhmt.setValue(ed_hhgwgt.getValue() / 1000);
      }
    }
    scwin.f_Retrieve_booking();
  }
  if (ds_partnerInfo.getRowCount() > 0) {
    txa_agentAdress.setValue(ds_partnerInfo.getCellData(ds_partnerInfo.getRowPosition(), "partnerAddr1") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_partnerInfo.getCellData(ds_partnerInfo.getRowPosition(), "partnerAddr2") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_partnerInfo.getCellData(ds_partnerInfo.getRowPosition(), "partnerAddr3") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_partnerInfo.getCellData(ds_partnerInfo.getRowPosition(), "partnerAddr4") /* TODO: GAUCE->WS row base ?? */ + "\n" + ds_partnerInfo.getCellData(ds_partnerInfo.getRowPosition(), "partnerAddr5") /* TODO: GAUCE->WS row base ?? */);
  } else {
    ds_partnerInfo.removeAll();
    ds_partnerInfo.insertRow(0);
    ds_partnerInfo.setCellData(0, "blno", cnd_ed_hhblno.getValue());
  }

  // B/L
  ed_hhobl.setValue("3"); // O B/L
  lc_hhcoload.setSelectedIndex(0); // Co-Load
  rd_hhdanggb.CodeValue = "N"; // Dangerous
  lc_hhisunm.setSelectedIndex(1); // Issued At
  lc_hhprenm.setSelectedIndex(0); // Freight Term
  lc_hhstype.setSelectedIndex(0); // Service Term

  // Container
  chb_hhp1.setValue(true);
  chb_hhp2.setValue(false);
  chb_hhp3.setValue(false);
  chb_hhp4.setValue(true);
  chb_hhp5.setValue(false);
  chb_hhp6.setValue(true);
  txt_hhsay.setValue(" CONTAINER ONLY");
  gptYn = true;
};

// [WebSquare] sbm_retrieveOcrInvoice submitdone
scwin.sbm_retrieveOcrInvoice_submitdone = async function (e) {
  if (ds_buying_freight_temp.getRowCount() == 0) {
    await $c.win.alert($p, "해당 B/L에 조회된 Invoice가 존재하지 않습니다.");
    return;
  }

  // 조회 상태라면, Update 상태로 변경. 그 외는 그대로 둠
  if (scwin.statusFlag == "") {
    scwin.f_Update();
  }

  // Buying Freight
  var buying_temp_data = ds_buying_freight_temp.ExportData(1, ds_buying_freight_temp.getRowCount(), true);
  ds_buying_freight.ImportData(buying_temp_data);

  // Frieght 기본값 설정
  for (var i = 1; i <= ds_buying_freight.getRowCount(); i++) {
    ds_buying_freight.setCellData(i - 1, "mhno", cnd_lc_mhno.getValue()); // update일때.
    ds_buying_freight.setCellData(i - 1, "odrNo", ds_houseblList_freight.getCellData(ds_houseblList_freight.getRowPosition(), "odrNo"));
    ds_buying_freight.setCellData(i - 1, "ppccCls", scwin.hd_hhpcgb_freight); // pp/cc
    ds_buying_freight.setCellData(i - 1, "inpid", scwin.vUserId);
    // ds_buying_freight.setCellData((i) - 1, "rsltsStdDt", ed_creadyDt.getValue());  	 //실적일
    ds_buying_freight.setCellData(i - 1, "exRateTyp", lc_selling_hhexgb_freight.getValue()); // exgb
    ds_buying_freight.setCellData(i - 1, "pchsTyp", "1");

    //ds_buying_freight.getCellData((i) - 1, "pchsClntNo"));
    //ds_buying_freight.getCellData((i) - 1, "pchsClntNm"));   //Liner name
    //f_UnitLoading_freight
    //ds_buying_freight.getCellData((row) - 1, "fareUnit")- 1, "code"));
    //scwin.f_packageRateBuyingLoading_freight(row,'');
  }
  await $c.win.alert($p, "데이터를 성공적으로 불러왔습니다.");
};

// [GAUCE] for=gr_ocElList event=OnPopup(rowIndex, columnId, data)
scwin.gr_ocElList_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var col = gr_ocElList.getColumnID(columnIndex);
  var rtnList = new Array();
  switch (col) {
    case "unit":
      scwin.f_PopUpGrid("unit", rowIndex, "F");
      break;
    case "mut":
      scwin.f_PopUpGrid("mut", rowIndex, "F");
      break;
    default:
      break;
  }
};

// [GAUCE] for=gr_ocContList event=OnExit(rowIndex, columnId, olddata)
scwin.gr_ocContList_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_ocContList.getColumnID(columnIndex);
  var olddata = ds_ocContList.getCellData(row, col); // 필요시 사용

  // row 범위 체크 (0-based)
  if (row >= 0 && row < ds_ocContList.getRowCount()) {
    switch (col) {
      case "mctype":
        {
          var v = (ds_ocContList.getCellData(row, "mctype") || "").trim();

          // 코드값이 공백이 아닌 경우 팝업 호출
          if (v != "") {
            scwin.f_PopUpGrid("mctype", row, "T");
          } else {
            // 기존 GAUCE 로직상 "없으면 에러"를 띄우고 컬럼으로 이동
            $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]); // @이(가) 존재하지 않습니다.
            gr_ocContList.focus();
            gr_ocContList.setColumn("mctype");
            return;
          }
          break;
        }
      case "mcpkgcd":
        {
          var v = (ds_ocContList.getCellData(row, "mcpkgcd") || "").trim();
          if (v != "") {
            scwin.f_PopUpGrid("mcpkgcd", row, "T");
          } else {
            // 원본에 setCellData 주석 처리되어 있어 그대로 비움 처리만 유지
            // ds_ocContList.setCellData(row, "mcpkgcd", "");
          }
          break;
        }
      case "mccntno":
        {
          var v = (ds_ocContList.getCellData(row, "mccntno") || "").trim();
          if (v != "") {
            if (!scwin.f_checkCntrNo(v)) {
              $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); // 유효한 @가 아닙니다
              gr_ocContList.focus();
              gr_ocContList.setColumn("mccntno");
              return;
            }
          }
          break;
        }
      default:
        break;
    }
  }
};

// [GAUCE] for=gr_ocElList event=OnExit(rowIndex, columnId, olddata)
scwin.gr_ocElList_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_ocElList.getColumnID(columnIndex);
  var olddata = ds_ocElList.getCellData(row, col); // 필요시 사용

  // 수출신고번호 입력 시, '-' 기호 뺀 상태로 변경
  if (col == "elno") {
    var v = ds_ocElList.getCellData(row, "elno");
    ds_ocElList.setCellData(row, "elno", (v || "").replace(/[-\s]/g, ""));
  }

  // 수출신고번호 중복 check (elno)
  if (col == "elno") {
    var rc = ds_ocElList.getRowCount();
    for (var i = 0; i < rc - 1; i++) {
      var a = (ds_ocElList.getCellData(i, "elno") || "").trim();
      if (a == "") continue;
      for (var j = i + 1; j < rc; j++) {
        var b = (ds_ocElList.getCellData(j, "elno") || "").trim();
        if (a != "" && a == b) {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["elno"]); // @은(는) 중복될 수 없습니다.

          // 포커스/컬럼 이동 (프로젝트 Grid API에 맞게 필요시 조정)
          gr_ocElList.focus();
          gr_ocElList.setColumn("elno");
          return;
        }
      }
    }
  }

  // row 범위 체크 (0-based)
  if (row >= 0 && row < ds_ocElList.getRowCount()) {
    switch (col) {
      case "unit":
        {
          var unit = (ds_ocElList.getCellData(row, "unit") || "").trim();
          if (unit != "") {
            scwin.f_PopUpGrid("unit", row, "T");
          } else {
            ds_ocElList.setCellData(row, "unit", "");
          }
          break;
        }
      case "mut":
        {
          var mut = (ds_ocElList.getCellData(row, "mut") || "").trim();
          if (mut != "") {
            scwin.f_PopUpGrid("mut", row, "T");
          } else {
            ds_ocElList.setCellData(row, "mut", "");
          }
          break;
        }
      case "elno":
        {
          var v_elno = ds_ocElList.getCellData(row, "elno");

          // GAUCE: rd_hhmnfgb.CodeValue
          // WebSquare: 컴포넌트 값 참조는 getValue()로 통일
          var shipType = scwin.rd_hhmnfgb;
          if (shipType == "E") {// Shipment Type Export
            // scwin.f_elnoExportCheck(v_elno);
          } else if (shipType == "I") {// Shipment Type Reshipment
            // scwin.f_elnoReshipmentCheck(v_elno);
          }
          break;
        }
      default:
        break;
    }
  }
};

// [GAUCE] for=lc_hhstype event=OnKillFocus
scwin.lc_hhstype_onkillfocus = function (e) {
  ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhstype", lc_hhstype.getValue());
};

// [GAUCE] for=ed_selling_hhcurdt_freight event=onKillFocus
scwin.ed_selling_hhcurdt_freight_onblur = function (e) {
  if (ed_selling_hhcurdt_freight.getValue() != "") {
    scwin.f_ExRateHouseLoading_freight();
  }
  param1 = ed_selling_hhcur_freight.getValue();
  param2 = ed_selling_hhcurdt_freight.getValue().trim();
  param3 = lc_selling_hhexgb_freight.getValue();
  if (ed_selling_hhexrate_freight.getValue().trim() == "") {
    ed_selling_hhexrate_freight.setValue(0);
  }
  if (ed_selling_hhexrate_freight.getValue().trim() == "") {
    ed_selling_hhexrate_freight.setValue(0);
  }
  scwin.f_ExrateLoading(param1, param2, param3);
  if (ds_ExRate.getRowCount() > 0) {
    ed_selling_hhexrate_freight.setValue(ds_ExRate.getCellData(0, "code"));
    ed_selling_hhuexrate_freight.setValue(ds_ExRate.getCellData(0, "name"));
    exRateCheck = "2";
    exRate1 = ed_selling_hhexrate_freight.getValue();
    exRate2 = ed_selling_hhuexrate_freight.getValue();
    crc = lc_selling_hhexgb_freight.getValue();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다.

    exRateCheck = "1";
    ed_selling_hhexrate_freight.setValue(1);
    ed_selling_hhuexrate_freight.setValue(1);
  }
};

// [GAUCE] for=ed_partner_hhcurdt_freight event=onKillFocus
scwin.ed_partner_hhcurdt_freight_onblur = function (e) {
  if (ed_partner_hhcurdt_freight.getValue() != "") {
    scwin.f_ExRateHouseLoading_freight();
  }
};

// [GAUCE] for=ed_partner_hhcurdt_freight event=onKillFocus
scwin.ed_partner_hhcurdt_freight_onblur = function (e) {
  param1 = ed_partner_hhcur_freight.getValue();
  param2 = ed_partner_hhcurdt_freight.getValue().trim();
  param3 = lc_partner_hhexgb_freight.getValue();
  if (ed_partner_hhexrate_freight.getValue().trim() == "") {
    ed_partner_hhexrate_freight.setValue(0);
  }
  if (ed_partner_hhexrate_freight.getValue().trim() == "") {
    ed_partner_hhexrate_freight.setValue(0);
  }
  scwin.f_ExrateLoading(param1, param2, param3);
  if (ds_ExRate.getRowCount() > 0) {
    ed_partner_hhexrate_freight.setValue(ds_ExRate.getCellData(1 - 1, "code"));
    ed_partner_hhuexrate_freight.setValue(ds_ExRate.getCellData(1 - 1, "name"));
    exRateCheck = "2";
    exRate1 = ed_partner_hhexrate_freight.getValue();
    exRate2 = ed_partner_hhuexrate_freight.getValue();
    crc = lc_partner_hhexgb_freight.getValue();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다.

    exRateCheck = "1";
    ed_partner_hhexrate_freight.setValue(1);
    ed_partner_hhuexrate_freight.setValue(1);
  }
};

// [GAUCE] for=ed_buying_hhcurdt_freight event=onKillFocus
scwin.ed_buying_hhcurdt_freight_onblur = function (e) {
  if (ed_buying_hhcurdt_freight.getValue() != "") {
    scwin.f_ExRateHouseLoading_freight();
  }
};

// [GAUCE] for=ed_buying_hhcurdt_freight event=onKillFocus
scwin.ed_buying_hhcurdt_freight_onblur = function (e) {
  param1 = ed_buying_hhcur_freight.getValue();
  param2 = ed_buying_hhcurdt_freight.getValue().trim();
  param3 = lc_buying_hhexgb_freight.getValue();
  if (ed_buying_hhexrate_freight.getValue().trim() == "") {
    ed_buying_hhexrate_freight.setValue(0);
  }
  if (ed_buying_hhexrate_freight.getValue().trim() == "") {
    ed_buying_hhexrate_freight.setValue(0);
  }
  scwin.f_ExrateLoading(param1, param2, param3);
  if (ds_ExRate.getRowCount() > 0) {
    ed_buying_hhexrate_freight.setValue(ds_ExRate.getCellData(1 - 1, "code"));
    ed_buying_hhuexrate_freight.setValue(ds_ExRate.getCellData(1 - 1, "name"));
    exRateCheck = "2";
    exRate1 = ed_buying_hhexrate_freight.getValue();
    exRate2 = ed_buying_hhuexrate_freight.getValue();
    crc = lc_buying_hhexgb_freight.getValue();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다.

    exRateCheck = "1";
    ed_buying_hhexrate_freight.setValue(1);
    ed_buying_hhuexrate_freight.setValue(1);
  }
};
// ==
// Container Type 공통 체크 (freight)
// ==
scwin._checkContainerType_freight = function (inputComp) {
  var v = inputComp.getValue();
  if (v == "") return true;

  // GAUCE: ds_containerType_freight.getCellData(1, code)
  // WS: 코드 존재 여부 확인
  var matched = ds_containerType_freight ? ds_containerType_freight.getMatchedData("code", v) : -1;

  // 값이 없을 때 (-1 또는 "0" 방어)
  if (matched == -1 || matched == "0") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Container Type"]);
    return false;
  }
  return true;
};

// [GAUCE] for=ed_hhcnt1type_freight event=onKillFocus
scwin.ed_hhcnt1type_freight_onblur = function (e) {
  return scwin._checkContainerType_freight(ed_hhcnt1type_freight);
};

// [GAUCE] for=ed_hhcnt2type_freight event=onKillFocus
scwin.ed_hhcnt2type_freight_onblur = function (e) {
  return scwin._checkContainerType_freight(ed_hhcnt2type_freight);
};

// [GAUCE] for=ed_hhcnt3type_freight event=onKillFocus
scwin.ed_hhcnt3type_freight_onblur = function (e) {
  return scwin._checkContainerType_freight(ed_hhcnt3type_freight);
};

// [GAUCE] for=ed_hhcnt4type_freight event=onKillFocus
scwin.ed_hhcnt4type_freight_onblur = function (e) {
  return scwin._checkContainerType_freight(ed_hhcnt4type_freight);
};

// [GAUCE] for=ed_hhcnt1type_freight event=onKillFocus
scwin.ed_hhcnt1type_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt1type_freight.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhcnt2type_freight event=onKillFocus
scwin.ed_hhcnt2type_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt2type_freight.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhcnt3type_freight event=onKillFocus
scwin.ed_hhcnt3type_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt3type_freight.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ed_hhcnt4type_freight event=onKillFocus
scwin.ed_hhcnt4type_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhcnt4type_freight.getValue().trim();
  if (strClntNo.length > 0) {}
};

// [GAUCE] for=ds_houseblList_freight event=OnLoadCompleted(rowcnt)
scwin.ds_houseblList_freight_onLoad = function () {
  if (ds_houseblList_freight.getRowCount() == 0) return;
  var row = ds_houseblList_freight.getRowPosition();
  if (row < 0) row = 0;
  var hhexrate = ds_houseblList_freight.getCellData(row, "hhexrate");
  if (hhexrate != "0") {
    exRate1 = hhexrate;
    crc = ds_houseblList_freight.getCellData(row, "hhcur");
    exRateCheck = "3";
  }
  var hhuexrate = ds_houseblList_freight.getCellData(row, "hhuexrate");
  if (hhuexrate != "0") {
    exRate2 = hhuexrate;
  }
};

// [GAUCE] for=ds_selling_freight event=OnLoadCompleted(rowcnt)
scwin.ds_selling_freight_onLoad = function () {
  //행이 0보다 크고, 하단조회일 경우 실행
  if (ds_selling_freight.getRowCount() == 0) return;
  var row = ds_selling_freight.getRowPosition();
  if (row < 0) row = 0;
  if (ds_selling_freight.getCellData(row, "tabIndex") == "0") {
    //컬럼변경
    scwin.f_chgGridColumnToHouseBlDs_freight("0", ds_selling_freight);
  }
};

// [GAUCE] for=ds_partner_freight event=OnLoadCompleted(rowcnt)
scwin.ds_partner_freight_onLoad = function () {
  if (ds_partner_freight.getRowCount() == 0) return;
  var row = ds_partner_freight.getRowPosition();
  if (row < 0) row = 0;
  if (ds_partner_freight.getCellData(row, "tabIndex") == "1") {
    //컬럼변경
    scwin.f_chgGridColumnToHouseBlDs_freight("1", ds_partner_freight);
  }
};

// [GAUCE] for=ds_buying_freight event=OnLoadCompleted(rowcnt)
scwin.ds_buying_freight_onLoad = function () {
  if (ds_buying_freight.getRowCount() == 0) return;
  var row = ds_buying_freight.getRowPosition();
  if (row < 0) row = 0;
  if (ds_buying_freight.getCellData(row, "tabIndex") == "2") {
    //컬럼변경
    scwin.f_chgGridColumnToHouseBlDs_freight("2", ds_buying_freight);
  }
};

/*
// [GAUCE] for=scwin.ed_hhlodcd_freight event=onKillFocus
scwin.ed_hhlodcd_freight_onblur = function(e){
var strClntNo = "";
strClntNo = scwin.ed_hhlodcd_freight.trim() ;

if (strClntNo.length > 0) {
}
};
*/

// [GAUCE] for=scwin.ed_hhdisccd_freight event=onKillFocus
scwin.ed_hhdisccd_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hhdisccd_freight.trim();
  if (strClntNo.length > 0) {
    scwin.txt_hhdiscnm_freight = "";
    scwin.f_OpenCommOnPopup_freight("Discharge", "T", "F", "F");
  } else {
    scwin.txt_hhdiscnm_freight = "";
  }
};

// [GAUCE] for=scwin.ed_hhagent_freight event=onKillFocus
scwin.ed_hhagent_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hhagent_freight.trim();
  if (strClntNo.length > 0) {
    scwin.txt_hhagentnm_freight = "";
    scwin.f_PopUp_freight('Partner', 'T');
  } else {
    scwin.txt_hhagentnm_freight = "";
  }
};

// [GAUCE] for=scwin.ed_hhactcust_freight event=onKillFocus
scwin.ed_hhactcust_freight_onblur = function (e) {
  var strClntNo = "";
  strClntNo = scwin.ed_hhactcust_freight.trim();
  if (strClntNo.length > 0) {
    scwin.txt_hhactcustnm_freight = "";
    scwin.f_PopUp_freight('Customer', 'T');
  } else {
    scwin.txt_hhactcustnm_freight = "";
  }
};

/*
// [GAUCE] for=scwin.ed_hhliner_freight event=onKillFocus
scwin.ed_hhliner_freight_onblur = function(e){
var strClntNo = "";
strClntNo = scwin.ed_hhliner_freight.trim() ;

if (strClntNo.length > 0) {
}
};
*/

// [GAUCE] for=ed_selling_hhexrate_freight event=onKillFocus
scwin.ed_selling_hhexrate_freight_onblur = function (e) {
  if (exRateCheck == "1") {
    if (ed_selling_hhuexrate_freight.getValue() == "" || ed_selling_hhuexrate_freight.getValue() == "0") {
      ed_selling_hhuexrate_freight.setValue(ed_selling_hhexrate_freight.getValue());
    }
    exRate1 = ed_selling_hhexrate_freight.getValue();
    crc = ed_selling_hhcur_freight.getValue();
  }
};

// [GAUCE] for=ed_selling_hhuexrate_freight event=onKillFocus
scwin.ed_selling_hhuexrate_freight_onblur = function (e) {
  if (exRateCheck == "1") {
    exRate2 = ed_selling_hhuexrate_freight.getValue();
  }
};

// [GAUCE] for=gr_selling_freight event=OnClick(rowIndex, columnId)
scwin.gr_selling_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_selling_freight.getCellData(rowIndex, "certiNo") != "" || ds_selling_freight.getCellData(rowIndex, "dcsnClsCd") == "확정") {
    gr_selling_freight.setColumnDisableEdit("impDryYn", true); // was bilgClntNo
    gr_selling_freight.setColumnDisableEdit("fareEngCd", true);
    gr_selling_freight.setColumnDisableEdit("crcCd", true);
    gr_selling_freight.setColumnDisableEdit("fareUnit", true);
    gr_selling_freight.setColumnDisableEdit("chgWt", true);
    gr_selling_freight.setColumnDisableEdit("sellUpr", true);
    if (ds_selling_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_selling_freight.setColumnDisableEdit("exRate", true);
    gr_selling_freight.setColumnDisableEdit("sellAmt", true);
    gr_selling_freight.setColumnDisableEdit("vatAmt", true);
  } else {
    gr_selling_freight.setColumnDisableEdit("bilgClntNo", false); // was "Any"
    gr_selling_freight.setColumnDisableEdit("fareEngCd", false);
    gr_selling_freight.setColumnDisableEdit("crcCd", false);
    gr_selling_freight.setColumnDisableEdit("fareUnit", false);
    gr_selling_freight.setColumnDisableEdit("chgWt", false);
    gr_selling_freight.setColumnDisableEdit("sellUpr", false);
    if (ds_selling_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_selling_freight.setColumnDisableEdit("exRate", false);
    gr_selling_freight.setColumnDisableEdit("sellAmt", false);
    gr_selling_freight.setColumnDisableEdit("vatAmt", false);
  }
};

// [GAUCE] for=gr_partner_freight event=OnClick(rowIndex, columnId)
scwin.gr_partner_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  // certi/dcsn branch
  if (ds_partner_freight.getCellData(rowIndex, "certiNo") != "" || ds_partner_freight.getCellData(rowIndex, "dcsnClsCd") == "확정") {
    gr_partner_freight.setColumnDisableEdit("impDryYn", true); // was "None"
    gr_partner_freight.setColumnDisableEdit("fareEngCd", true);
    gr_partner_freight.setColumnDisableEdit("crcCd", true);
    gr_partner_freight.setColumnDisableEdit("fareUnit", true);
    gr_partner_freight.setColumnDisableEdit("chgWt", true);
    gr_partner_freight.setColumnDisableEdit("sellUpr", true);
    if (ds_partner_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_partner_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_partner_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_partner_freight.setColumnDisableEdit("exRate", true);
    gr_partner_freight.setColumnDisableEdit("sellAmt", true);
    gr_partner_freight.setColumnDisableEdit("drCrCls", true);
    gr_partner_freight.setColumnDisableEdit("rmk", true);
    if (ds_partner_freight.getCellData(rowIndex, "drcrCls") == "C") {
      gr_partner_freight.setColumnDisableEdit("vehclNo", false);
    } else {
      gr_partner_freight.setColumnDisableEdit("vehclNo", true);
    }
  } else {
    gr_partner_freight.setColumnDisableEdit("bilgClntNo", false); // was "Any"
    gr_partner_freight.setColumnDisableEdit("fareEngCd", false);
    gr_partner_freight.setColumnDisableEdit("crcCd", false);
    gr_partner_freight.setColumnDisableEdit("fareUnit", false);
    gr_partner_freight.setColumnDisableEdit("chgWt", false);
    gr_partner_freight.setColumnDisableEdit("sellUpr", false);
    if (ds_partner_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_partner_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_partner_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_partner_freight.setColumnDisableEdit("exRate", false);
    gr_partner_freight.setColumnDisableEdit("sellAmt", false);
    gr_partner_freight.setColumnDisableEdit("drcrCls", false);
    gr_partner_freight.setColumnDisableEdit("rmk", false);
    if (ds_partner_freight.getCellData(rowIndex, "drcrCls") == "C") {
      gr_partner_freight.setColumnDisableEdit("vehclNo", false);
    } else {
      gr_partner_freight.setColumnDisableEdit("vehclNo", true);
    }
  }
};

// [GAUCE] for=gr_buying_freight event=OnClick(rowIndex, columnId)
scwin.gr_buying_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_selling_freight.getCellData(rowIndex, "certiNo") != "" || ds_selling_freight.getCellData(rowIndex, "dcsnClsCd") == "확정") {
    gr_selling_freight.setColumnDisableEdit("impDryYn", true); // was bilgClntNo
    gr_selling_freight.setColumnDisableEdit("fareEngCd", true);
    gr_selling_freight.setColumnDisableEdit("crcCd", true);
    gr_selling_freight.setColumnDisableEdit("fareUnit", true);
    gr_selling_freight.setColumnDisableEdit("chgWt", true);
    gr_selling_freight.setColumnDisableEdit("sellUpr", true);
    if (ds_selling_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_selling_freight.setColumnDisableEdit("exRate", true);
    gr_selling_freight.setColumnDisableEdit("sellAmt", true);
    gr_selling_freight.setColumnDisableEdit("vatAmt", true);
  } else {
    gr_selling_freight.setColumnDisableEdit("bilgClntNo", false); // was "Any"
    gr_selling_freight.setColumnDisableEdit("fareEngCd", false);
    gr_selling_freight.setColumnDisableEdit("crcCd", false);
    gr_selling_freight.setColumnDisableEdit("fareUnit", false);
    gr_selling_freight.setColumnDisableEdit("chgWt", false);
    gr_selling_freight.setColumnDisableEdit("sellUpr", false);
    if (ds_selling_freight.getCellData(rowIndex, "crcCd") == "KRW") {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", true);
    } else {
      gr_selling_freight.setColumnDisableEdit("sellAmtFcrc", false);
    }
    gr_selling_freight.setColumnDisableEdit("exRate", false);
    gr_selling_freight.setColumnDisableEdit("sellAmt", false);
    gr_selling_freight.setColumnDisableEdit("vatAmt", false);
  }
};

// [GAUCE] for=gr_selling_freight event=OnPopup_freight(rowIndex, columnId, data)
scwin.gr_buying_freight_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var col = gr_selling_freight.getColumnID(columnIndex);
  var rtnList = new Array();
  switch (col) {
    case "bilgClntNo":
      scwin.f_PopUpGrid_freight("SellingCustomer", row, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid_freight("SellingFcode", row, "F", "F", "F");
      break;
    case "rsltsStdDt":
      $c.gus.cfOpenCalendar($p, gr_selling_freight, row, col);
      break;
    default:
      break;
  }
};

// [GAUCE] for=gr_selling_freight event=OnExit(rowIndex, columnId, olddata)
scwin.gr_selling_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_selling_freight.getColumnID(columnIndex);
  var olddata = ds_selling_freight.getCellData(row, col);

  // row 범위 체크 (0-based)
  if (row >= 0 && row < ds_selling_freight.getRowCount()) {
    switch (col) {
      case "bilgClntNo":
        {
          var v = (ds_selling_freight.getCellData(row, "bilgClntNo") || "").trim();
          if (v != "") {
            ds_selling_freight.setCellData(row, "bilgClntNm", "");
            scwin.f_PopUpGrid_freight("SellingCustomer", row, "T", "F", "F");
          } else {
            ds_selling_freight.setCellData(row, "bilgClntNo", "");
            ds_selling_freight.setCellData(row, "bilgClntNm", "");
          }
          break;
        }
      case "fareEngCd":
        {
          var v = (ds_selling_freight.getCellData(row, "fareEngCd") || "").trim();
          if (v != "") {
            ds_selling_freight.setCellData(row, "fareEngNm", "");
            scwin.f_PopUpGrid_freight("SellingFcode", row, "T", "F", "F");
          } else {
            ds_selling_freight.setCellData(row, "fareEngCd", "");
            ds_selling_freight.setCellData(row, "fareEngNm", "");
          }
          scwin.f_sellingAmtFcrc_freight(row, col, olddata);
          scwin.f_sellingAmt_freight(row, col, olddata);
          scwin.f_sellingVat_freight(row, col, olddata);
          scwin.f_sellingUsdAmt_freight(row, col, olddata);
          break;
        }
      case "crcCd":
      case "chgWt":
      case "sellUpr":
        {
          scwin.f_sellingAmtFcrc_freight(row, col, olddata);
          scwin.f_sellingAmt_freight(row, col, olddata);
          scwin.f_sellingVat_freight(row, col, olddata);
          scwin.f_sellingUsdAmt_freight(row, col, olddata);
          break;
        }
      case "exRate":
        {
          scwin.f_sellingAmt_freight(row, col, olddata);
          break;
        }
      case "sellAmt":
        {
          scwin.f_sellingVat_freight(row, col, olddata);
          break;
        }
      case "vatAmt":
        {
          scwin.f_sellingUsdAmt_freight(row, col, olddata);
          break;
        }
      default:
        break;
    }
  }
};

// [GAUCE] for=gr_selling_freight event=OnDropDown(rowIndex, columnId)
scwin.gr_selling_freight_onbeforeedit = function (rowIndex, columnIndex, value) {
  var col = gr_selling_freight.getColumnID(columnIndex);
  switch (col) {
    case "fareUnit":
      scwin.f_sellingUnitLoading_freight();
      break;
  }
};

// [GAUCE] for=gr_selling_freight event=OnCloseUp(rowIndex, columnId)
scwin.gr_selling_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_selling_freight.getColumnID(columnIndex);
  var olddata = ds_selling_freight.getCellData(row, col);
  switch (col) {
    case "fareUnit":
      scwin.f_packageRateSellingLoading_freight(rowIndex, columnId);
      scwin.f_sellingTariffRateLoading_freight();
      break;
  }
};

// [GAUCE] for=gr_selling_freight event=OnColumnPosChanged(rowIndex, columnId)
scwin.gr_selling_freight_onaftercolumnmove = function (e) {
  switch (col) {
    case "fareUnit":
      if (gr_selling_freight.setColumnDisableEdit("fareUnit", "Edit") == "true") {
        scwin.f_sellingTariffRateLoading_freight();
      }
      break;
  }
};

// [GAUCE] for=gr_partner_freight event=OnPopup_freight(rowIndex, columnId, data)
scwin.gr_partner_freight_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var col = gr_partner_freight.getColumnID(columnIndex);
  var rtnList = new Array();
  switch (col) {
    case "bilgClntNo":
      scwin.f_PopUpGrid_freight("PartnerCustomer", row, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid_freight("PartnerFcode", row, "F", "F", "F");
      break;
    case "rsltsStdDt":
      $c.gus.cfOpenCalendar($p, gr_partner_freight, row, col);
      break;
    default:
      break;
  }
};

// [GAUCE] for=gr_partner_freight event=OnExit(rowIndex, columnId, olddata)
scwin.gr_partner_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_partner_freight.getColumnID(columnIndex);
  var olddata = ds_partner_freight.getCellData(row, col);

  // row 범위 체크 (0-based)
  if (row >= 0 && row < ds_partner_freight.getRowCount()) {
    switch (col) {
      case "bilgClntNo":
        {
          var v = (ds_partner_freight.getCellData(row, "bilgClntNo") || "").trim();
          if (v != "") {
            ds_partner_freight.setCellData(row, "bilgClntNm", "");
            scwin.f_PopUpGrid_freight("PartnerCustomer", row, "T", "F", "F");
          } else {
            ds_partner_freight.setCellData(row, "bilgClntNo", "");
            ds_partner_freight.setCellData(row, "bilgClntNm", "");
          }
          break;
        }
      case "fareEngCd":
        {
          var v = (ds_partner_freight.getCellData(row, "fareEngCd") || "").trim();
          if (v != "") {
            ds_partner_freight.setCellData(row, "fareEngNm", "");
            scwin.f_PopUpGrid_freight("PartnerFcode", row, "T", "F", "F");
          } else {
            ds_partner_freight.setCellData(row, "fareEngCd", "");
            ds_partner_freight.setCellData(row, "fareEngNm", "");
          }
          scwin.f_partnerAmtFcrc_freight(row, col, olddata);
          scwin.f_partnerAmt_freight(row, col, olddata);
          scwin.f_partnerUsdAmt_freight(row, col, olddata);
          break;
        }
      case "crcCd":
      case "chgWt":
      case "sellUpr":
        {
          scwin.f_partnerAmtFcrc_freight(row, col, olddata);
          scwin.f_partnerAmt_freight(row, col, olddata);
          scwin.f_partnerUsdAmt_freight(row, col, olddata);
          break;
        }
      case "exRate":
        {
          scwin.f_partnerAmt_freight(row, col, olddata);
          break;
        }
      case "sellAmt":
        {
          scwin.f_partnerUsdAmt_freight(row, col, olddata);
          break;
        }
      default:
        break;
    }
  }
};

// [GAUCE] for=gr_partner_freight event=OnDropDown(rowIndex, columnId)
scwin.gr_partner_freight_onbeforeedit = function (rowIndex, columnIndex, value) {
  var col = gr_partner_freight.getColumnID(columnIndex);
  switch (col) {
    case "fareUnit":
      scwin.f_partnerUnitLoading_freight();
      break;
  }
};

// [GAUCE] for=gr_partner_freight event=OnCloseUp(rowIndex, columnId)
scwin.gr_partner_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_partner_freight.getColumnID(columnIndex);
  var olddata = ds_partner_freight.getCellData(row, col);
  switch (col) {
    case "fareUnit":
      scwin.f_packageRatePartnerLoading_freight(rowIndex, columnId);
      scwin.f_partnerTariffRateLoading_freight();
      break;
  }
};

// [GAUCE] for=gr_partner_freight event=OnColumnPosChanged(rowIndex, columnId)
scwin.gr_partner_freight_onaftercolumnmove = function (e) {
  switch (col) {
    case "fareUnit":
      if (gr_partner_freight.setColumnDisableEdit("fareUnit", "Edit") == "true") {
        scwin.f_partnerTariffRateLoading_freight();
      }
      break;
  }
};

// [GAUCE] for=gr_buying_freight event=OnPopup_freight(rowIndex, columnId, data)
scwin.gr_buying_freight_onpopup_freight = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var col = gr_buying_freight.getColumnID(columnIndex);
  var rtnList = new Array();
  switch (col) {
    case "pchsClntNo":
      scwin.f_PopUpGrid_freight("BuyingCustomer", row, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid_freight("BuyingFcode", row, "F", "F", "F");
      break;
    case "sellDeptCd":
      scwin.f_PopUpGrid_freight("BuyingDept", row, "F", "F", "F");
      break;
    case "rsltsStdDt":
      $c.gus.cfOpenCalendar($p, gr_buying_freight, row, col);
      break;
    default:
      break;
  }
};

// [GAUCE] for=gr_buying_freight event=OnExit(rowIndex, columnId, olddata)
scwin.gr_buying_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_buying_freight.getColumnID(columnIndex);
  var olddata = ds_buying_freight.getCellData(row, col);

  // row 범위 체크 (0-based)
  if (row >= 0 && row < ds_buying_freight.getRowCount()) {
    switch (col) {
      case "pchsClntNo":
        {
          var v = (ds_buying_freight.getCellData(row, "pchsClntNo") || "").trim();
          if (v != "") {
            ds_buying_freight.setCellData(row, "pchsClntNm", "");
            scwin.f_PopUpGrid_freight("BuyingCustomer", row, "T", "F", "F");
          } else {
            ds_buying_freight.setCellData(row, "pchsClntNo", "");
            ds_buying_freight.setCellData(row, "pchsClntNm", "");
          }
          break;
        }
      case "fareEngCd":
        {
          var v = (ds_buying_freight.getCellData(row, "fareEngCd") || "").trim();
          if (v != "") {
            ds_buying_freight.setCellData(row, "fareEngNm", "");
            scwin.f_PopUpGrid_freight("BuyingFcode", row, "T", "F", "F");
          } else {
            ds_buying_freight.setCellData(row, "fareEngCd", "");
            ds_buying_freight.setCellData(row, "fareEngNm", "");
          }

          // pchsTyp == "3" 이고 fareEngCd == "TRD"이면 부서 로딩
          if (ds_buying_freight.getCellData(row, "pchsTyp") == "3") {
            if (ds_buying_freight.getCellData(row, "fareEngCd") == "TRD") {
              scwin.f_BuyingDeptLoading_freight(row);
            }
          }

          // linkcheck 조건이 아니면 금액 계산
          if (scwin.v_linkcheck != 9) {
            scwin.f_buyingAmtFcrc_freight(row, col, olddata);
            scwin.f_buyingAmt_freight(row, col, olddata);
            scwin.f_buyingVat_freight(row, col, olddata);
            scwin.f_buyingUsdAmt_freight(row, col, olddata);
          }
          break;
        }
      case "sellDeptCd":
        {
          var v = (ds_buying_freight.getCellData(row, "sellDeptCd") || "").trim();
          if (v != "") {
            ds_buying_freight.setCellData(row, "sellDeptNm", "");
            scwin.f_PopUpGrid_freight("BuyingDept", row, "T", "F", "F");
          } else {
            ds_buying_freight.setCellData(row, "sellDeptCd", "");
            ds_buying_freight.setCellData(row, "sellDeptNm", "");
          }
          break;
        }
      case "crcCd":
      case "chgWt":
      case "pchsUpr":
        {
          scwin.f_buyingAmtFcrc_freight(row, col, olddata);
          scwin.f_buyingAmt_freight(row, col, olddata);
          scwin.f_buyingVat_freight(row, col, olddata);
          scwin.f_buyingUsdAmt_freight(row, col, olddata);
          break;
        }
      case "exRate":
        {
          scwin.f_buyingAmt_freight(row, col, olddata);
          break;
        }
      case "pchsAmt":
        {
          scwin.f_buyingVat_freight(row, col, olddata);
          break;
        }
      case "vat":
        {
          scwin.f_buyingUsdAmt_freight(row, col, olddata);
          break;
        }
      default:
        break;
    }
  }
};

// [GAUCE] for=gr_buying_freight event=OnDropDown(rowIndex, columnId)
scwin.gr_buying_freight_onbeforeedit = function (rowIndex, columnIndex, value) {
  var col = gr_buying_freight.getColumnID(columnIndex);
  switch (col) {
    case "fareUnit":
      scwin.f_buyingUnitLoading_freight();
      break;
  }
};

// [GAUCE] for=gr_buying_freight event=OnCloseUp(rowIndex, columnId)
scwin.gr_buying_freight_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var col = gr_buying_freight.getColumnID(columnIndex);
  var olddata = ds_buying_freight.getCellData(row, col);
  switch (col) {
    case "fareUnit":
      scwin.f_packageRateBuyingLoading_freight(rowIndex, columnId);
      scwin.f_buyingTariffRateLoading_freight();
      break;
    case "pchsTyp":
      if (ds_buying_freight.getCellData(ds_buying_freight.getRowPosition(), "pchsTyp") /* TODO: GAUCE->WS row base ?? */ == "3") {
        // 내부부서일때.
        ds_buying_freight.setCellData(ds_buying_freight.getRowPosition(), "pchsClntNo", scwin.p_clntNo);
        ds_buying_freight.setCellData(ds_buying_freight.getRowPosition(), "pchsClntNm", "");
        scwin.f_PopUpGrid_freight("BuyingCustomer", rowIndex, "T", "F", "F");
      } else {
        ds_buying_freight.setCellData(ds_buying_freight.getRowPosition(), "pchsClntNo", "");
        ds_buying_freight.setCellData(ds_buying_freight.getRowPosition(), "pchsClntNm", "");
      }
      break;
  }
};

// [GAUCE] for=gr_buying_freight event=OnColumnPosChanged(rowIndex, columnId)
scwin.gr_buying_freight_onaftercolumnmove = function (e) {
  switch (col) {
    case "fareUnit":
      if (gr_buying_freight.setColumnDisableEdit("fareUnit", "Edit") == "true") {
        scwin.f_buyingTariffRateLoading_freight();
      }
      break;
  }
};

// [WebSquare] sbm_save submitdone
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); //  성공적으로 저장하였습니다.

  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Retrieve();
  cnd_ed_hhblno.focus();
  scwin.f_Set("SAVE");
};

// [WebSquare] sbm_save submiterror
scwin.sbm_save_submiterror = function (e) {
  scwin.sbm_default_submiterror(e);
  scwin.f_TextareaCall();
};

// [WebSquare] sbm_ocrSave submitdone
scwin.sbm_ocrSave_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); //  성공적으로 저장하였습니다.
  //cmd anable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Retrieve();
  cnd_ed_hhblno.focus();
  scwin.f_Set("SAVE");
};

// [WebSquare] sbm_ocrSave submiterror
scwin.sbm_ocrSave_submiterror = function (e) {
  scwin.sbm_default_submiterror(e);
  scwin.f_TextareaCall();
};

// [WebSquare] sbm_delete submitdone
scwin.sbm_delete_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다.
};

// [WebSquare] sbm_DeptChange submitdone
scwin.sbm_DeptChange_submitdone = function (e) {};

// [WebSquare] sbm_* submitdone (no-op stubs)
scwin.sbm_retrieve_houseBlNo_submitdone = function (e) {};
scwin.sbm_retrieveBooking_submitdone = function (e) {};
scwin.sbm_retrieveContainer_submitdone = function (e) {};
scwin.sbm_retrieveCarrierBkNo_submitdone = function (e) {};
scwin.sbm_retrieve_path_submitdone = function (e) {};
scwin.sbm_retrieveMgntClnt_submitdone = function (e) {};
scwin.sbm_HblNoChange_submitdone = function (e) {};
scwin.sbm_retrieveTariff_freight_submitdone = function (e) {};
scwin.sbm_retrieve_frtMapping_freight_submitdone = function (e) {};
scwin.sbm_retrieve_booking_submitdone = function (e) {};
scwin.sbm_retrieveOrder_booking_submitdone = function (e) {};
scwin.sbm_retrievebookingNo_booking_submitdone = function (e) {};
scwin.sbm_retrievebookingHbl_booking_submitdone = function (e) {};
scwin.sbm_save_booking_submitdone = function (e) {};
scwin.sbm_retrieveCtrtClnt_booking_submitdone = function (e) {};
scwin.sbm_createMhno_direct_submitdone = function (e) {};
scwin.sbm_checkMasterBl_direct_submitdone = function (e) {};
scwin.sbm_createHouseBlNo_direct_submitdone = function (e) {};
scwin.sbm_save_freight_submitdone = function (e) {};
scwin.sbm_delete_freight_submitdone = function (e) {};
scwin.sbm_retrieve_linecode_freight_submitdone = function (e) {};
scwin.sbm_delete_booking_submitdone = function (e) {};
scwin.sbm_saveOrderSend_booking_submitdone = function (e) {};

// [WebSquare] sbm_* submiterror (no-op stubs)
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_delete_submiterror = function (e) {};
scwin.sbm_DeptChange_submiterror = function (e) {};
scwin.sbm_retrieve_freight_submiterror = function (e) {};
scwin.sbm_RetrieveProfit_freight_submiterror = function (e) {};
scwin.sbm_retrieveOcrInvoice_submiterror = function (e) {};
scwin.sbm_retrieve_houseBlNo_submiterror = function (e) {};
scwin.sbm_retrieveBooking_submiterror = function (e) {};
scwin.sbm_retrieveContainer_submiterror = function (e) {};
scwin.sbm_retrieveCarrierBkNo_submiterror = function (e) {};
scwin.sbm_retrieve_path_submiterror = function (e) {};
scwin.sbm_retrieveMgntClnt_submiterror = function (e) {};
scwin.sbm_HblNoChange_submiterror = function (e) {};
scwin.sbm_retrieveTariff_freight_submiterror = function (e) {};
scwin.sbm_retrieveSelling_freight_submiterror = function (e) {};
scwin.sbm_retrievePartner_freight_submiterror = function (e) {};
scwin.sbm_retrieveBuying_freight_submiterror = function (e) {};
scwin.sbm_retrieve_frtMapping_freight_submiterror = function (e) {};
scwin.sbm_retrieve_booking_submiterror = function (e) {};
scwin.sbm_retrieveOrder_booking_submiterror = function (e) {};
scwin.sbm_retrievebookingNo_booking_submiterror = function (e) {};
scwin.sbm_retrievebookingHbl_booking_submiterror = function (e) {};
scwin.sbm_save_booking_submiterror = function (e) {};
scwin.sbm_retrieveCtrtClnt_booking_submiterror = function (e) {};
scwin.sbm_createMhno_direct_submiterror = function (e) {};
scwin.sbm_checkMasterBl_direct_submiterror = function (e) {};
scwin.sbm_createHouseBlNo_direct_submiterror = function (e) {};
scwin.ds_ocContList_onrowposchanged = function (info) {
  var oldRowIndex = info.oldRowIndex;
  var newRowIndex = info.newRowIndex;
  //행추가인 경우만 입력 가능
  var row = newRowIndex != null ? newRowIndex : ds_ocContList.getRowPosition();
  var st = ds_ocContList.getRowStatus ? ds_ocContList.getRowStatus(row) : ds_ocContList.getSysStatus(row);
  if (st == "C" || st == "I" || st == 1) {
    gr_ocContList.setColumnDisableEdit("mccntno", true);
  } else {
    gr_ocContList.setColumnDisableEdit("mccntno", false);
  }
};

// [GAUCE] for=ds_ocElList event=onRowPosChanged(row)
scwin.ds_ocElList_onrowposchanged = function (info) {
  var oldRowIndex = info.oldRowIndex;
  var newRowIndex = info.newRowIndex;
  //행추가인 경우만 입력 가능
  var row = newRowIndex != null ? newRowIndex : ds_ocElList.getRowPosition();
  var st = ds_ocElList.getRowStatus ? ds_ocElList.getRowStatus(row) : ds_ocElList.getSysStatus(row);
  if (st == "C" || st == "I" || st == 1) {
    gr_ocElList.setColumnDisableEdit("elno", true);
  } else {
    gr_ocElList.setColumnDisableEdit("elno", false);
  }
};

// [GAUCE] for=lc_pathCd event=OnDropDown
scwin.lc_pathCd_onbeforeedit = function (e) {
  dma_condition_path.set("hhactcust", ed_hhactcust.getValue());
  dma_condition_path.set("path", "");
  dma_condition_path.set("hhblno", "");
  $c.sbm.execute($p, sbm_retrieve_path);
};

// [GAUCE] for=ds_houseblList event=OnLoadCompleted(rowcnt)
scwin.ds_houseblList_ondataload = function () {
  var row = ds_houseblList.getRowPosition();

  // path 조회
  if (ds_houseblList.getCellData(row, "pathCd") !== "") {
    dma_condition_path.set("hhactcust", ed_hhactcust.getValue());
    dma_condition_path.set("path", ds_houseblList.getCellData(row, "pathCd"));
    dma_condition_path.set("hhblno", "");
    $c.sbm.execute($p, sbm_retrieve_path);
  }

  // House B/L 정보 세팅
  if (ds_houseblList.getRowCount() > 0) {
    ta_hhs.setValue((ds_houseblList.getCellData(row, "hhs1") || "") + "\n" + (ds_houseblList.getCellData(row, "hhs2") || "") + "\n" + (ds_houseblList.getCellData(row, "hhs3") || "") + "\n" + (ds_houseblList.getCellData(row, "hhs4") || "") + "\n" + (ds_houseblList.getCellData(row, "hhs5") || ""));
    ta_hhc.setValue((ds_houseblList.getCellData(row, "hhc1") || "") + "\n" + (ds_houseblList.getCellData(row, "hhc2") || "") + "\n" + (ds_houseblList.getCellData(row, "hhc3") || "") + "\n" + (ds_houseblList.getCellData(row, "hhc4") || "") + "\n" + (ds_houseblList.getCellData(row, "hhc5") || ""));
    ta_hhn.setValue((ds_houseblList.getCellData(row, "hhn1") || "") + "\n" + (ds_houseblList.getCellData(row, "hhn2") || "") + "\n" + (ds_houseblList.getCellData(row, "hhn3") || "") + "\n" + (ds_houseblList.getCellData(row, "hhn4") || "") + "\n" + (ds_houseblList.getCellData(row, "hhn5") || ""));

    // B/L TYPE = B 인 경우 중량 계산
    if (lc_hhbltype.getValue() === "B") {
      var gwgt = Number(ed_hhgwgt.getValue() || 0);
      if (gwgt > 0) {
        ed_hhmt.setValue(gwgt / 1000);
      }
    }
    scwin.f_Retrieve_booking();
  }

  // 파트너 주소 세팅
  if (ds_partnerInfo.getRowCount() > 0) {
    var prow = ds_partnerInfo.getRowPosition();
    txa_agentAdress.setValue((ds_partnerInfo.getCellData(prow, "partnerAddr1") || "") + "\n" + (ds_partnerInfo.getCellData(prow, "partnerAddr2") || "") + "\n" + (ds_partnerInfo.getCellData(prow, "partnerAddr3") || "") + "\n" + (ds_partnerInfo.getCellData(prow, "partnerAddr4") || "") + "\n" + (ds_partnerInfo.getCellData(prow, "partnerAddr5") || ""));
  } else {
    ds_partnerInfo.removeAll();
    ds_partnerInfo.insertRow(0);
    ds_partnerInfo.setCellData(0, "blno", cnd_ed_hhblno.getValue());
  }
};

// [WebSquare] ds_houseblList oncelldatachange (component onblur 대체)
scwin.ds_houseblList_oncelldatachange = function (info) {
  var colid = info.colID;
  var tabIdx = tac_tabMain && tac_tabMain.getSelectedTabIndex ? tac_tabMain.getSelectedTabIndex() : null;
  var isFreightTab = tabIdx === 2;
  switch (colid) {
    case "hhscd":
      scwin.ed_hhscd_onblur();
      break;
    case "hhccd":
      scwin.ed_hhccd_onblur();
      break;
    case "hhncd":
      scwin.ed_hhncd_onblur();
      break;
    case "hhvslcd":
      scwin.ed_hhvslcd_onblur();
      break;
    case "hhlodcd":
      scwin.ed_hhlodcd_onblur();
      break;
    case "hhdisccd":
      scwin.ed_hhdisccd_onblur();
      break;
    case "hhunitcd":
      scwin.ed_hhunitcd_onblur();
      break;
    case "hhagent":
      scwin.ed_hhagent_onblur();
      break;
    case "hhactcust":
      scwin.ed_hhactcust_onblur();
      break;
    case "hhsales":
      scwin.ed_hhsales_onblur();
      break;
    case "hhliner":
      scwin.ed_hhliner_onblur();
      break;
    case "hhbuyer":
      scwin.ed_hhbuyer_onblur();
      break;
    case "pic":
      scwin.ed_blpic_onblur();
      break;
    case "hhrcvcd":
      scwin.ed_hhrcvcd_onblur();
      break;
    case "hhdlvcd":
      scwin.ed_hhdlvcd_onblur();
      break;
    case "hhfdcd":
      scwin.ed_hhfdcd_onblur();
      break;
    case "mwarecd":
      scwin.ed_mwarecd_onblur();
      break;
    case "hhetd":
      scwin.ed_hhetd_onblur();
      break;
    case "hhgwgt":
      scwin.ed_hhgwgt_onblur();
      break;
    case "hhpkg":
      scwin.ed_hhpkg_onblur();
      break;
    case "hhcnt1type":
      scwin.ed_hhcnt1type_onblur();
      if (isFreightTab && typeof scwin.ed_hhcnt1type_freight_onblur === "function") {
        scwin.ed_hhcnt1type_freight_onblur();
      }
      break;
    case "hhcnt2type":
      scwin.ed_hhcnt2type_onblur();
      if (isFreightTab && typeof scwin.ed_hhcnt2type_freight_onblur === "function") {
        scwin.ed_hhcnt2type_freight_onblur();
      }
      break;
    case "hhcnt3type":
      scwin.ed_hhcnt3type_onblur();
      if (isFreightTab && typeof scwin.ed_hhcnt3type_freight_onblur === "function") {
        scwin.ed_hhcnt3type_freight_onblur();
      }
      break;
    case "hhcnt4type":
      scwin.ed_hhcnt4type_onblur();
      if (isFreightTab && typeof scwin.ed_hhcnt4type_freight_onblur === "function") {
        scwin.ed_hhcnt4type_freight_onblur();
      }
      break;
    case "hhcnt1":
      scwin.ed_hhcnt1_onblur();
      break;
    case "hhcnt2":
      scwin.ed_hhcnt2_onblur();
      break;
    case "hhcnt3":
      scwin.ed_hhcnt3_onblur();
      break;
    case "hhcnt4":
      scwin.ed_hhcnt4_onblur();
      break;
    case "hhcurdt":
      if (isFreightTab) scwin.ed_selling_hhcurdt_freight_onblur();
      break;
    case "hhexrate":
      if (isFreightTab) scwin.ed_selling_hhexrate_freight_onblur();
      break;
    case "hhuexrate":
      if (isFreightTab) scwin.ed_selling_hhuexrate_freight_onblur();
      break;
    case "hhcurdtPar":
      if (isFreightTab) scwin.ed_partner_hhcurdt_freight_onblur();
      break;
    case "hhcurdtBuy":
      if (isFreightTab) scwin.ed_buying_hhcurdt_freight_onblur();
      break;
    default:
      break;
  }
};

// [GAUCE] for=lc_hhincoterm event=OnSelChange
scwin.lc_hhincoterm_onselchange = function (e) {
  var incoterm = lc_hhincoterm.getValue();
  switch (incoterm.substring(0, 1)) {
    case "E":
      lc_hhpcgb.setSelectedIndex(1); //CC
      break;
    case "F":
      lc_hhpcgb.setSelectedIndex(1); //CC
      break;
    case "C":
      lc_hhpcgb.setSelectedIndex(0); //PP
      break;
    case "D":
      lc_hhpcgb.setSelectedIndex(0); //PP
      break;
  }
};

// [GAUCE] for=ds_selling_freight event=onColumnChanged(row, colid)
scwin.ds_selling_freight_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colid = info.colID;
  // Currency event
  if (colid == "crcCd") {
    var row = ds_selling_freight.getRowPosition(); // (프로젝트 룰: 이미 0-based로 쓰는 케이스)
    var crcCd = ds_selling_freight.getCellData(row, "crcCd");
    if (crcCd != "") {
      var STR = ds_currencyCode_freight ? ds_currencyCode_freight.getMatchedData("code", crcCd) : -1;

      // 값이 없을 때: getMatchedData가 -1(또는 "0"으로 오던 레거시) 둘 다 방어
      if (STR == -1 || STR == "0") {
        ds_selling_freight.setCellData(row, "exRate", "");
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Currency Information"]); // @이(가) 존재하지 않습니다.
      } else {
        if (crcCd != "KRW") {
          scwin.f_ExRateSellingGridLoading_freight();
        }
      }
    } else {
      return;
    }
  }

  // sum값 call
  if (colid == "sellAmtFcrc" || colid == "sellAmt" || colid == "vatAmt") {
    scwin.f_SellingSum_freight();
  }
};

// [GAUCE] for=ds_partner_freight event=onColumnChanged(row, colid)
scwin.ds_partner_freight_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colid = info.colID;
  if (colid == "crcCd") {
    var row = ds_partner_freight.getRowPosition();
    var crcCd = ds_partner_freight.getCellData(row, "crcCd");
    if (crcCd != "") {
      // GAUCE: ds_currencyCode_freight.getCellData(1, code)
      // WebSquare: code 매칭 존재 여부 확인
      var STR = ds_currencyCode_freight ? ds_currencyCode_freight.getMatchedData("code", crcCd) : -1;

      // 값이 없을 때(레거시 "0" 또는 -1 방어)
      if (STR == -1 || STR == "0") {
        ds_partner_freight.setCellData(row, "exRate", "");
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Currency Information"]); // @이(가) 존재하지 않습니다.
      } else {
        if (crcCd != "KRW") {
          scwin.f_ExRatePartnerGridLoading_freight();
        }
      }
    } else {
      return;
    }
  }

  // sum값 call
  if (colid == "sellAmtFcrc" || colid == "sellAmt") {
    scwin.f_PartnerSum_freight();
  }
};

// [GAUCE] for=ds_buying_freight event=onColumnChanged(row, colid)
scwin.ds_buying_freight_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colid = info.colID;
  if (colid == "crcCd") {
    var row = ds_buying_freight.getRowPosition();
    var crcCd = ds_buying_freight.getCellData(row, "crcCd");
    if (crcCd != "") {
      // GAUCE: ds_currencyCode_freight.getCellData(1, code)
      // WebSquare: code 매칭 존재 여부 확인
      var STR = ds_currencyCode_freight ? ds_currencyCode_freight.getMatchedData("code", crcCd) : -1;

      // 값이 없을 때(레거시 "0" 또는 -1 방어)
      if (STR == -1 || STR == "0") {
        // ? ds_buying_freight.getCellData(...) = ""
        // ? ds_buying_freight.setCellData(...)
        ds_buying_freight.setCellData(row, "exRate", "");
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Currency Information"]); // @이(가) 존재하지 않습니다.
      } else {
        if (crcCd != "KRW") {
          scwin.f_ExRateBuyingGridLoading_freight();
        }
      }
    } else {
      return;
    }
  }

  // sum값 call
  if (colid == "pchsAmtFcrc" || colid == "pchsAmt" || colid == "vat") {
    scwin.f_BuyingSum_freight();
  }
};

// [GAUCE] for=gr_selling_freight event=OnClick(rowIndex, columnId)
scwin.gr_selling_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.statusFlag == "U") {
    if (columnId == "fareEngNm") {
      gr_selling_freight.setColumnDisableEdit("fareEngNm", false); // 편집 가능
    } else {
      gr_selling_freight.setColumnDisableEdit("fareEngNm", true); // 편집 불가
    }
  }
};

// [GAUCE] for=gr_partner_freight event=OnClick(rowIndex, columnId)
scwin.gr_partner_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.statusFlag == "U") {
    if (columnId == "fareEngNm") {
      gr_partner_freight.setColumnDisableEdit("fareEngNm", false); // 편집 가능
    } else {
      gr_partner_freight.setColumnDisableEdit("fareEngNm", true); // 편집 불가
    }
  }
};

// [GAUCE] for=gr_buying_freight event=OnClick(rowIndex, columnId)
scwin.gr_buying_freight_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.statusFlag == "U") {
    if (columnId == "fareEngNm") {
      gr_buying_freight.setColumnDisableEdit("fareEngNm", false); // 편집 가능
    } else {
      gr_buying_freight.setColumnDisableEdit("fareEngNm", true); // 편집 불가
    }
  }
};

// [GAUCE] for=ds_containerBookingList_booking event=OnLoadCompleted(rowcnt)
scwin.ds_containerBookingList_booking_onLoad = function () {
  if (ds_containerBookingList_booking.getRowCount() != 0) {
    var row = ds_containerBookingList_booking.getRowPosition();
    scwin.v_contractno = ds_containerBookingList_booking.getCellData(row, "contractno");
    if (scwin.v_contractno != "") {
      if (scwin.v_contractno == "NONE") {
        scwin.f_ContractInfo_booking(); // 이걸하니까 됨.

        // 데이터셋 초기화 + 1행 생성
        // (프로젝트 표준 API에 맞춰 조정 필요)
        ds_ctrtNo_booking.removeAll(); // TODO: 프로젝트에 ClearData()가 있으면 그걸 사용
        ds_ctrtNo_booking.insertRow(0); // TODO: AddRow()가 표준이면 AddRow() 사용

        var r2 = ds_ctrtNo_booking.getRowPosition();
        ds_ctrtNo_booking.setCellData(r2, "ctrtNo", "NONE");

        // 콤보/리스트 컴포넌트 선택 인덱스 0
        // TODO: WebSquare 표준: lc_contractno_booking.setSelectedIndex(0) 또는 setValue(...)
        lc_contractno_booking.setSelectedIndex(0);
      } else {
        scwin.f_ContractInfo_booking();
      }
    }
  }
};
scwin.ds_containerBookingList_booking_ondataload = function (e) {
  return scwin.ds_containerBookingList_booking_onLoad(e);
};

// [GAUCE] for=lc_contractno event=OnDropDown
scwin.lc_contractno_onbeforeedit = async function (e) {
  scwin.v_contractno = "";
  if (ed_hhetd.getValue() == "" || ed_hhetd.getValue() == null) {
    await $c.win.alert($p, "ETD is mandatory to retrieve Contract No");
    ds_ctrtNo_booking.removeAll();
    return false;
  } else {
    scwin.f_ContractInfo();
    if (scwin.statusFlag == "C" || scwin.statusFlag == "U") {
      if (ds_ctrtNo_booking.getRowCount() == 0) ds_ctrtNo_booking.insertRow(0);
    }
  }
};

// [GAUCE] for=ds_ctrtNo_booking event=OnLoadCompleted(rowcnt)
scwin.ds_ctrtNo_booking_onLoad = async function () {
  if (ds_ctrtNo_booking.getRowCount() == 0 && dma_retrieveCtrtClnt_booking.get("ctrtClntNo") != "999908") {
    dma_retrieveCtrtClnt_booking.redo();
    dma_retrieveCtrtClnt_booking.set("ctrtNo", "");
    dma_retrieveCtrtClnt_booking.set("ctrtClntNo", "999908"); // 국제공통
    dma_retrieveCtrtClnt_booking.set("scDate", scwin.strCurDate); // scwin.strCurDate
    dma_retrieveCtrtClnt_booking.set("ctrtDtYn", "1");
    dma_retrieveCtrtClnt_booking.set("ctrtDistrictCd", "ZZA"); // ZZA: 해운권역, ZZB: 항공권역
    dma_retrieveCtrtClnt_booking.set("impExpDomesticClsCd", "O"); // in/out
    dma_retrieveCtrtClnt_booking.set("bizDivCntrYn", "1"); // container (벌크/컨테이너 구분 필요)

    await $c.sbm.execute($p, sbm_retrieveCtrtClnt_booking);
  }
};

// [GAUCE] for=gr_selling_freight event=OnHeadCheckClick(Col, columnId, bCheck)
scwin.gr_selling_freight_onheaderclick = function (headerId) {
  var colId = headerId;
  var checked = gr_selling_freight.getHeaderValue(headerId);
  if (colId == "chk") {
    scwin._headCheckApply(ds_selling_freight, checked);
  }
};

// [GAUCE] for=gr_partner_freight event=OnHeadCheckClick(Col, columnId, bCheck)
scwin.gr_partner_freight_onheaderclick = function (headerId) {
  var colId = headerId;
  var checked = gr_partner_freight.getHeaderValue(headerId);
  if (colId == "chk") {
    scwin._headCheckApply(ds_partner_freight, checked);
  }
};

// [GAUCE] for=gr_buying_freight event=OnHeadCheckClick(Col, columnId, bCheck)
scwin.gr_buying_freight_onheaderclick = function (headerId) {
  var colId = headerId;
  var checked = gr_buying_freight.getHeaderValue(headerId);
  if (colId == "chk") {
    scwin._headCheckApply(ds_buying_freight, checked);
  }
};
scwin.img_PopUp6_freight_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};
scwin.img_PopUp7_freight_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};
scwin.img_PopUp8_freight_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};
scwin.img_PopUp9_freight_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};
scwin.img_PopUp1_onclick = function (e) {
  f_PopUp('Shipper', 'F');
};
scwin.img_PopUp2_onclick = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
scwin.img_PopUp3_onclick = function (e) {
  scwin.f_PopUp('Notify', 'F');
};
scwin.img_PopUp26_onclick = function (e) {
  scwin.f_PopUp('Partner Address', 'F');
};
scwin.udc_hhvslcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Vessel', 'F', 'F', 'F');
};
scwin.udc_hhagent_onclickEvent = function (e) {
  scwin.f_PopUp('Partner', 'F');
};
scwin.udc_hhlodcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
scwin.udc_hhactcust_onclickEvent = function (e) {
  scwin.f_PopUp('PartnerPic', 'F');
};
scwin.udc_hhdisccd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
scwin.udc_hhsales_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_hhdlvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
};
scwin.udc_hhliner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.udc_hhfdcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Destination', 'F', 'F', 'F');
};
scwin.udc_hhbuyer_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_hhunitcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Unit', 'F', 'F', 'F');
};
scwin.udc_mwarecd_onclickEvent = function (e) {
  f_OpenCommonPopUp('Mware', 'F', 'F', 'F');
};
scwin.udc_blpic_onclickEvent = function (e) {
  scwin.f_PopUp('B/L PIC', 'F');
};
scwin.udc_hhrcvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Receipt', 'F', 'F', 'F');
};
scwin.udc_cusCd_onclickEvent = function (e) {
  scwin.f_chkCustomerCodeModifyPopUp();
};
scwin.udc_hhccd_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
scwin.udc_hhncd_onclickEvent = function (e) {
  scwin.f_PopUp('Notify', 'F');
};
scwin.udc_hhscd_onclickEvent = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};
scwin.f_SellingGrid = function (e) {
  scwin.f_RunExcel_freight(ds_selling_freight, 'gr_selling_freight');
};
scwin.f_PartnerGrid = function (e) {
  scwin.f_RunExcel_freight(ds_partner_freight, 'gr_partner_freight');
};
scwin.f_BuyingGrid = function (e) {
  scwin.f_RunExcel_freight(ds_buying_freight, 'gr_buying_freight');
};
scwin._udcOnblurCode = function (codeId, e) {
  var fn = scwin[codeId + "_onblur"];
  if (typeof fn === "function") fn(e);
};
scwin._udcOnblurName = function (nameId, e) {
  var fn = scwin[nameId + "_onblur"];
  if (typeof fn === "function") fn(e);
};
scwin.udc_hhvslcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhvslcd", e);
};
scwin.udc_hhvslcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhvsl", e);
};
scwin.udc_hhagent_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhagent", e);
};
scwin.udc_hhagent_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhagentnm", e);
};
scwin.udc_hhlodcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhlodcd", e);
};
scwin.udc_hhlodcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhlodnm", e);
};
scwin.udc_hhactcust_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhactcust", e);
};
scwin.udc_hhactcust_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhactcustnm", e);
};
scwin.udc_hhdisccd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhdisccd", e);
};
scwin.udc_hhdisccd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhdiscnm", e);
};
scwin.udc_hhsales_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhsales", e);
};
scwin.udc_hhsales_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhsalesnm", e);
};
scwin.udc_hhscd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhscd", e);
};
scwin.udc_hhdlvcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhdlvcd", e);
};
scwin.udc_hhdlvcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhdlvnm", e);
};
scwin.udc_hhliner_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhliner", e);
};
scwin.udc_hhliner_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhlinernm", e);
};
scwin.udc_hhfdcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhfdcd", e);
};
scwin.udc_hhfdcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhfdnm", e);
};
scwin.udc_hhbuyer_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhbuyer", e);
};
scwin.udc_hhbuyer_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhbuyernm", e);
};
scwin.udc_hhunitcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhunitcd", e);
};
scwin.udc_hhunitcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhunit", e);
};
scwin.udc_hhccd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhccd", e);
};
scwin.udc_hhncd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhncd", e);
};
scwin.udc_mwarecd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_mwarecd", e);
};
scwin.udc_mwarecd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_mwarenm", e);
};
scwin.udc_blpic_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_blpic", e);
};
scwin.udc_blpic_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_blpic", e);
};
scwin.udc_hhrcvcd_onblurCodeEvent = function (e) {
  scwin._udcOnblurCode("ed_hhrcvcd", e);
};
scwin.udc_hhrcvcd_onblurNameEvent = function (e) {
  scwin._udcOnblurName("txt_hhrcvnm", e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'cnd_ed_hhblno',placeholder:'',class:' w200',ref:'data:ds_retrieve.hhblno','ev:onblur':'scwin.cnd_ed_hhblno_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{objType:'data',class:' w150',editType:'select',id:'cnd_lc_autono',search:'start',style:'width:150px;',submenuSize:'auto',ref:'',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_autono'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w200',id:'cnd_ed_hhmblno',placeholder:'',style:'width: 200px;',ref:'data:ds_houseblList.hhmblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'retrieveEngClntInfo',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',style:'',id:'tac_tabMain',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'Header'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'Marks/Description'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'Freight'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content1'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Carrier BK',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{objType:'data',style:'',id:'ed_carrierBkNo_booking',placeholder:'',class:' ',ref:'data:ds_containerBookingList_booking.carrierBkNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중요',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{objType:'data',ref:'data:ds_containerBookingList_booking.iptYn',appearance:'full',style:'',id:'chb_iptYn_booking',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'VSL/VOY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250 flex_no',id:'udc_hhvslcd',codeId:'ed_hhvslcd',nameId:'txt_hhvsl',name:'hhvsl',code:'hhvslcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhvslcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhvslcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhvslcd_onblurNameEvent'}},{T:1,N:'xf:input',A:{objType:'data',style:'max-width:150px;',id:'txt_hhvyg',placeholder:'',class:' ',ref:'data:ds_houseblList.hhvyg'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Partner',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhagent',codeId:'ed_hhagent',nameId:'txt_hhagentnm',name:'hhagentnm',code:'hhagent',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhagent_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhagent_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhagent_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Contract No',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_contractno_booking',class:' ',ref:'data:ds_containerBookingList_booking.contractno'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtNo_booking'},E:[{T:1,N:'w2:label',A:{ref:'ctrtNo'}},{T:1,N:'w2:value',A:{ref:'clntPicNm'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Loading',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhlodcd',codeId:'ed_hhlodcd',nameId:'txt_hhlodnm',name:'hhlodnm',code:'hhlodcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhlodcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhlodcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhlodcd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Customer',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhactcust',codeId:'ed_hhactcust',nameId:'txt_hhactcustnm',name:'hhactcustnm',code:'hhactcust',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhactcust_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhactcust_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhactcust_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Booking',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',style:'',id:'ed_hhbkgno',placeholder:'',class:' ',ref:'data:ds_houseblList.hhbkgno'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Seq',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 85px;',id:'lc_hhbkgseq',class:' ',ref:'data:ds_houseblList.hhbkgseq','ev:onchange':'scwin.lc_hhbkgseq_onselchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bkseq'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Discharge',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhdisccd',codeId:'ed_hhdisccd',nameId:'txt_hhdiscnm',name:'hhdiscnm',code:'hhdisccd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhdisccd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhdisccd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhdisccd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Salesman',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhsales',codeId:'ed_hhsales',nameId:'txt_hhsalesnm',name:'hhsalesnm',code:'hhsales',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhsales_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhsales_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhsales_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shipper',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_hhscd',codeId:'ed_hhscd',refDataCollection:'ds_houseblList',code:'hhscd','ev:onclickEvent':'scwin.udc_hhscd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhscd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선적',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',style:'',id:'ed_shipMgntNo',placeholder:'',class:' ',ref:'data:ds_houseblList.shipMgntNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Delivery',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhdlvcd',codeId:'ed_hhdlvcd',nameId:'txt_hhdlvnm',name:'hhdlvnm',code:'hhdlvcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhdlvcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhdlvcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhdlvcd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Carrier',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhliner',codeId:'ed_hhliner',nameId:'txt_hhlinernm',name:'hhlinernm',code:'hhliner',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhliner_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhliner_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhliner_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',style:'',id:'ta_hhs',class:' h-full'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Destination',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhfdcd',codeId:'ed_hhfdcd',nameId:'txt_hhfdnm',name:'hhfdnm',code:'hhfdcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhfdcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhfdcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhfdcd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'pu_departmentChange',type:'button',class:'btn sm link ','ev:onclick':'scwin.f_departmentChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhbuyer',codeId:'ed_hhbuyer',nameId:'txt_hhbuyernm',name:'hhbuyernm',code:'hhbuyer',refDataCollection:'ds_houseblList','ev:onblurCodeEvent':'scwin.udc_hhbuyer_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhbuyer_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Package',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width:50px;',id:'ed_hhpkg',placeholder:'',class:' w50',ref:'data:ds_houseblList.hhpkg'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Unit',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_hhunitcd',codeId:'ed_hhunitcd',nameId:'txt_hhunit',name:'hhunit',code:'hhunitcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhunitcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhunitcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhunitcd_onblurNameEvent'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'M/T',class:''}},{T:1,N:'xf:input',A:{objType:'data',style:'width:50px;',id:'ed_hhmt',placeholder:'',class:' w50','ev:onblur':'scwin.ed_hhmt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Order No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_odrNo',placeholder:'',class:' w150',ref:'data:ds_houseblList.odrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Weight',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',style:'width:120px; text-align: right;',id:'ed_hhgwgt',placeholder:'',class:' ',ref:'data:ds_houseblList.hhgwgt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Measure',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',style:'width:120px;text-align: right;',id:'ed_hhmsr',placeholder:'',class:' ',ref:'data:ds_houseblList.hhmsr'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'UCR',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{objType:'data',style:'width:150px;',id:'txt_ucrNo',placeholder:'',class:' w150',ref:'data:ds_houseblList.ucrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'ETD',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'text-align: center;',id:'ed_hhetd',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhetd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Onboard',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'text-align: right;',id:'ed_hhondt',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhondt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{objType:'data',ref:'data:ds_houseblList.hhtriange',appearance:'full',style:'',id:'chb_hhtriange',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Triangle'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{objType:'data',ref:'data:ds_houseblList.hhnomi',appearance:'full',style:'',id:'chb_hhnomi',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NOMI'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'ETA',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'text-align: center;',id:'ed_hheta',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hheta'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Issued Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'text-align: right;',id:'ed_hhisudt',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhisudt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col-gap-4'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'O B/L',class:''}},{T:1,N:'xf:input',A:{objType:'data',style:'width: 50px;text-align: right;',id:'ed_hhobl',placeholder:'',class:' w50',ref:'data:ds_houseblList.hhobl'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Co-Load',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 50px;',allOption:'false',id:'lc_hhcoload',class:' w50',direction:'auto',ref:'data:ds_houseblList.hhcoload'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Consignee',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_hhccd',codeId:'ed_hhccd',name:'hhccd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhccd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhccd_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_1',type:'button',class:'btn sm link ','ev:onclick':'scwin.f_cCopy()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Notify Copy'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Result Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'text-align: center;',id:'ed_creadyDt',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.creadyDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Dangerous',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{objType:'data',ref:'data:ds_houseblList.hhdanggb',appearance:'full',style:'',id:'rd_hhdanggb',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox h-full'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_slipTax',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_slipTax',class:'wq_gvw h-full',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'Customer',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'Billing Date',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'Tax Date',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'Slip No',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'intendDt',inputType:'calendar',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'spplyDt',inputType:'calendar',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipNo',inputType:'text',removeBorderStyle:'false',width:'70'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',style:'',id:'ta_hhc',class:' h-full','ev:onblur':'scwin.ta_hhc_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Incoterms',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width: 250px;',id:'lc_hhincoterm',class:' w250',ref:'data:ds_houseblList.hhincoterm','ev:onchange':'scwin.lc_hhincoterm_onselchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PP/CC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'lc_hhpcgb',class:' w100',ref:'data:ds_houseblList.hhpcgb','ev:onchange':'scwin.lc_hhpcgb_onselchange'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Cargo Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width:120px;',id:'lc_hhbltype',class:' w100',ref:'data:ds_houseblList.hhbltype','ev:onchange':'scwin.lc_hhbltype_onselchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Issued At',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width: 250px;',id:'lc_hhisunm',class:' w250',ref:'data:ds_houseblList.hhisunm'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUSAN, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INCHON, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUSAN, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INCHON, SOUTH KOREA'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Payable At',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width: 250px;',id:'lc_hhpaynm',class:' w250',ref:'data:ds_houseblList.hhpaynm'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUSAN, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INCHON, KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PUSAN, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SEOUL, SOUTH KOREA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, SOUTH KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INCHON, SOUTH KOREA'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Notify',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_hhncd',codeId:'ed_hhncd',refDataCollection:'ds_houseblList',code:'hhncd','ev:onclickEvent':'scwin.udc_hhncd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhncd_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_2',type:'button',class:'btn sm link ','ev:onclick':'scwin.f_same()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Same'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_3',type:'button',class:'btn sm link ','ev:onclick':'scwin.f_nCopy()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Freight Term',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width: 250px;',id:'lc_hhprenm',class:' w250',ref:'data:ds_houseblList.hhprenm'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PREPAID AS ARRANGED'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PREPAID AS ARRANGED'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COLLECT AS ARRANGED'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'COLLECT AS ARRANGED'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox h-full'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_ocProfitList',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_ocProfitList',class:'wq_gvw h-full',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'Selling',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'Buying',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'Profit',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selling',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'buying',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'profit',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',displayFormat:'#,###'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',style:'',id:'ta_hhn',class:' h-full','ev:onblur':'scwin.ta_hhn_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Service Term',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'width: 250px;',id:'lc_hhstype',class:' w250',ref:'data:ds_houseblList.hhstype'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/CY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/CY'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/CFS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/DOOR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/DOOR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/CY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/CY'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/CFS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/DOOR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/DOOR'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Container',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt1type',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt1type','ev:onblur':'scwin.ed_hhcnt1type_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt2type',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt2type','ev:onblur':'scwin.ed_hhcnt2type_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt3type',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt3type','ev:onblur':'scwin.ed_hhcnt3type_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt4type',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt4type','ev:onblur':'scwin.ed_hhcnt4type_onblur'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CNTR QTY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt1',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt1'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt2',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt2'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt3',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt3'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt4',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적재장소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250 flex_no',id:'udc_mwarecd',codeId:'ed_mwarecd',nameId:'txt_mwarenm',name:'txt_mwarenm',code:'ed_mwarecd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_mwarecd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mwarecd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mwarecd_onblurNameEvent'}},{T:1,N:'xf:input',A:{objType:'data',style:'max-width:150px;',id:'txt_mwareEngCd',placeholder:'',class:' ',ref:'data:ds_houseblList.mwareEngCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Place Of Receipt',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'B/L PIC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_blpic',codeId:'ed_blpic',nameId:'txt_blpic',name:'txt_blpic',code:'ed_blpic',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_blpic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_blpic_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_blpic_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',id:'udc_hhrcvcd',codeId:'ed_hhrcvcd',nameId:'txt_hhrcvnm',name:'txt_hhrcvnm',code:'ed_hhrcvcd',refDataCollection:'ds_houseblList','ev:onclickEvent':'scwin.udc_hhrcvcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhrcvcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_hhrcvcd_onblurNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_4',type:'button',class:'btn link ','ev:onclick':'scwin.f_openPgm(\'MasterBL\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_8',type:'button',class:'btn link ','ev:onclick':'scwin.f_openPgm(\'Freight\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_10',type:'button',class:'btn link ','ev:onclick':'scwin.f_openPgm(\'HouseBLPrint\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L Print'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_11',type:'button',class:'btn link ','ev:onclick':'scwin.f_openPgm(\'SR\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Shipping Request'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_12',type:'button',class:'btn link ','ev:onclick':'scwin.f_Tracking()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사 Tracking'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_13',type:'button',class:'btn link ','ev:onclick':'scwin.f_ProgramDownload()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Copy',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Copy'},E:[{T:1,N:'xf:label',E:[{T:3,text:'ALL Copy'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Copy2',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Copy2'},E:[{T:1,N:'xf:label',E:[{T:3,text:'B/L Copy'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Cancel',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Create',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Update',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_Delete',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_FileDownload',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_FileDownload'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Upload'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_HNoChg',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_HawbNoChange'},E:[{T:1,N:'xf:label',E:[{T:3,text:'H NO.CHG'}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Number of Containers or Packages',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Kind of Packages;description of goods',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'print Option',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Agent Info',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhsubpkg',placeholder:'',style:'',ref:'data:ds_houseblList.hhsubpkg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'11'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',class:' h-full',id:'txa_descnm',style:'',ref:'data:ds_houseblList.descnm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'8'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp1',ref:'data:ds_houseblList.hhp1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Said to Container '}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp2',ref:'data:ds_houseblList.hhp2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Shipper\'s Load &Count  '}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp3',ref:'data:ds_houseblList.hhp3',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' Container Print'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp4',ref:'data:ds_houseblList.hhp4',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Term Print'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp5',ref:'data:ds_houseblList.hhp5',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Recipt Date Print'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhp6',ref:'data:ds_houseblList.hhp6',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Onboard Date Print '}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_agent',codeId:'ed_agent',refDataCollection:'ds_partnerInfo',code:'agentCode'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhunit2',placeholder:'',style:'',ref:'data:ds_houseblList.hhunit2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'9'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',class:' h-full',id:'txa_agentAdress',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhunit3',placeholder:'',style:'',ref:'data:ds_houseblList.hhunit3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Marks And Numbers & Container No',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'7'}]}]},{T:1,N:'xf:textarea',A:{objType:'data',class:' h-full',id:'txa_mark',style:'',ref:'data:ds_houseblList.mark'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:28px;'}},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:28px;'}},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:28px;'}},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Say',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhsay',placeholder:'',style:'',ref:'data:ds_houseblList.hhsay'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th bg-req'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'EDI ITEM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhmitem2',placeholder:'',style:'',ref:'data:ds_houseblList.hhmitem2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSCODE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_hhhscode',placeholder:'',style:'',ref:'data:ds_houseblList.hscode'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' ',id:'txt_cino',placeholder:'',style:'',ref:'data:ds_houseblList.cino'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Container',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_AddCntr1',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Auto Container Info1'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_AddCntr2',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Auto Container Info2'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocContList',evenRowBackgroundColor:'#F8FFF8',id:'gr_ocContList',visibleRowNum:'5',autoFit:'allColumn',class:'wq_gvw','ev:oneditend':'scwin.gr_ocContList_oneditend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column2',value:'Container',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'Type',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'Seal No1',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'Seal No2',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column7',value:'PKG',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'Unit',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'Weight',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'Measure',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column17',value:'Part',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row_container'},E:[{T:1,N:'w2:column',A:{id:'mccntno',displayMode:'label',inputType:'text',width:'120',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{id:'mctype',displayMode:'label',inputType:'text',width:'80',textAlign:'center',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'mcseal1',displayMode:'label',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'mcseal2',displayMode:'label',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'mcpkg',displayMode:'label',inputType:'text',width:'90',textAlign:'right',maxLength:'.0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',displayMode:'label',inputType:'textImage',width:'70',textAlign:'center',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'mcwgt',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.3',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{id:'mcmsr',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.3',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{id:'mcpart',displayMode:'label',inputType:'autoComplete',width:'80',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'CNT',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'PKG',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_totpkg',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'WGT',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_totwgt',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'MSR',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_totmsr',placeholder:'',class:' amt'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn white',id:'btn_CntrReceive',style:'',type:'button','ev:onclick':'scwin.f_openContainerPopup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CNTR Receive'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn1'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수출신고',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_runExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocElList',evenRowBackgroundColor:'#F8FFF8',id:'gr_ocElList',visibleRowNum:'3',autoFit:'allColumn',class:'wq_gvw','ev:oneditend':'scwin.gr_ocElList_oneditend','ev:ontextimageclick':'scwin.gr_ocElList_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column2',class:'col-type1',value:'수출신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',class:'col-type1',value:'Package',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',class:'col-type1',value:'Unit',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',class:'col-type1',value:'Weight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',class:'col-type2',value:'포장기호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',class:'col-type2',value:'Package',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',class:'col-type2',value:'Unit',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',class:'col-type2',value:'분할',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',class:'col-type2',value:'분할선적차수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row_export'},E:[{T:1,N:'w2:column',A:{id:'elno',displayMode:'label',inputType:'text',width:'120',textAlign:'left',allowChar:'A-Z',sortable:'true'}},{T:1,N:'w2:column',A:{id:'pkg',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'unit',displayMode:'label',inputType:'textImage',width:'100',textAlign:'left',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'wgt',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.3',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{id:'mgb',displayMode:'label',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'mpkg',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'mut',displayMode:'label',inputType:'textImage',width:'80',textAlign:'left',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'pgb',displayMode:'label',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'pseq',displayMode:'label',inputType:'text',width:'120',textAlign:'right',maxLength:'.0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'CNT',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'PKG',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_eltotpkg',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'WGT',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_eltotwgt',placeholder:'',class:' amt'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn2'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_4_1',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'MasterBL\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_8_1',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'Freight\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_10_1',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'HouseBLPrint\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L Print'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_11_1',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'SR\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Shipping Request'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_12_1',style:'',type:'button','ev:onclick':'scwin.f_Tracking'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사 Tracking'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_13_1',style:'',type:'button','ev:onclick':'scwin.f_ProgramDownload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Copy_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Copy'},E:[{T:1,N:'xf:label',E:[{T:3,text:'ALL Copy'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Copy2_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Copy2'},E:[{T:1,N:'xf:label',E:[{T:3,text:'B/L Copy'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Cancel_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Create_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Update_!',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Save_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Delete_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_FileDownload_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_FileDownload'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Upload'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_HNoChg_1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_HawbNoChange'},E:[{T:1,N:'xf:label',E:[{T:3,text:'H NO.CHG'}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Container Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt1type_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt1type','ev:onblur':'scwin.ed_hhcnt1type_freight_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt2type_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt2type','ev:onblur':'scwin.ed_hhcnt2type_freight_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt3type_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt3type','ev:onblur':'scwin.ed_hhcnt3type_freight_onblur'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt4type_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt4type','ev:onblur':'scwin.ed_hhcnt4type_freight_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Weight',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w150',id:'ed_hhgwgt_freight',placeholder:'',style:'width:150px;text-align: right;',ref:'data:ds_houseblList.hhgwgt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'House No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'srch_ed_hhblno',placeholder:'',style:'width: 224px;',ref:'data:ds_retrieve.hhblno2','ev:onblur':'scwin.srch_ed_hhblno_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Container Quantity',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt1_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt1'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt2_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt2'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt3_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt3'}},{T:1,N:'xf:input',A:{objType:'data',style:'width:75px;',id:'ed_hhcnt4_freight',placeholder:'',class:' ',ref:'data:ds_houseblList.hhcnt4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Measure',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w150',id:'ed_hhmsr_freight',placeholder:'',style:'width:150px;text-align: right;',ref:'data:ds_houseblList.hhmsr'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DOC No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'cnd_lc_mhno2',search:'start',style:'width: 150px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno2'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',style:'',id:'btn_search',type:'button',class:'btn sch','ev:onclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'search'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Selling Exchange Rate Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 280px'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Currency',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group '},E:[{T:1,N:'xf:input',A:{objType:'data',style:'width: 50px;',id:'ed_selling_hhcur_freight',placeholder:'',class:' w50',ref:'data:ds_houseblList.hhcur'}},{T:1,N:'w2:autoComplete',A:{objType:'data',search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_selling_hhexgb_freight',class:' ',ref:'data:ds_houseblList.hhexgb'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'',id:'ed_selling_hhcurdt_freight',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhcurdt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_selling_hhexrate_freight',placeholder:'',style:'width:100px;text-align: right;',ref:'data:ds_houseblList.hhexrate'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'US Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_selling_hhuexrate_freight',placeholder:'',style:'width:100px;text-align: right;',ref:'data:ds_houseblList.hhuexrate'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-4'},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_CustomerChange1',style:'',type:'button','ev:onclick':'scwin.f_CustomerChange_freight(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'btn_2_freight1',style:'',type:'button','ev:onclick':'scwin.f_exRateChange_freight(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_ResultdateChange1',style:'',type:'button','ev:onclick':'scwin.f_ResultdateChange_freight(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ResultDate'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Selling List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownFn:'scwin.f_SellingGrid'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_selling_freight',evenRowBackgroundColor:'#F8FFF8',id:'gr_selling_freight',visibleRowNum:'3',autoFit:'allColumn',class:'wq_gvw','ev:oncellclick':'scwin.gr_selling_freight_oncellclick','ev:onheaderclick':'scwin.gr_selling_freight_onheaderclick','ev:ontextimageclick':'scwin.gr_selling_freight_ontextimageclick','ev:onbeforeedit':'scwin.gr_selling_freight_onbeforeedit','ev:oneditend':'scwin.gr_selling_freight_oneditend','ev:onaftercolumnmove':'scwin.gr_selling_freight_onaftercolumnmove'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column12',class:'no-sort',displayMode:'label',fixColumnWidth:'true',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'SEQ',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'SEQ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'Customer',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'F/Code',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'Init',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'CUR',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Unit',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',value:'Package',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column33',value:'Amount',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column31',value:'Ex-Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'Amount(W)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'VAT',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'Amount(US$)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column19',value:'Result',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'Invoice No',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'Tariff Rate',displayMode:'label',hidden:'true',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'내부매입구분',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row_sell'},E:[{T:1,N:'w2:column',A:{id:'chk',inputType:'checkbox',width:'17',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'currow',inputType:'text',width:'30',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'sellSeq',display:'none'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',inputType:'textImage',width:'60',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'fareEngCd',inputType:'textImage',width:'60',textAlign:'left',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'fareEngNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',display:'none'}},{T:1,N:'w2:column',A:{id:'sellItemCd',display:'none'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'text',width:'50',textAlign:'left',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'fareUnit',inputType:'autoComplete',width:'50',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'chgWt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.3'}},{T:1,N:'w2:column',A:{id:'sellUpr',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.3'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',inputType:'text',width:'80',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'exRate',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.3'}},{T:1,N:'w2:column',A:{id:'sellAmt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.0'}},{T:1,N:'w2:column',A:{id:'vatAmt',inputType:'text',width:'60',textAlign:'right',allowChar:'0-9',maxLength:'.0'}},{T:1,N:'w2:column',A:{id:'usdAmt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',inputType:'textImage',width:'80',textAlign:'center',allowChar:'0-9'}},{T:1,N:'w2:column',A:{id:'certiNo',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'trfUpr',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true',display:'none'}},{T:1,N:'w2:column',A:{id:'vatYn',display:'none'}},{T:1,N:'w2:column',A:{id:'exRateTyp',display:'none'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',display:'none'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount($)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_SellingSumAmount_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount(W)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_SellingSumAmountW_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'VAT',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',style:'text-align: right;',id:'ed_SellingSumVat_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'AMOUNT(W+VAT)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_SellingAmountSum_freight',placeholder:'',class:' amt'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:input',A:{objType:'data',class:' w50',id:'ed_rowMake_selling',placeholder:'',style:''}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn3'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Partner Exchange Rate Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 280px'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Currency',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{objType:'data',class:' w50',id:'ed_partner_hhcur_freight',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhcurPar'}},{T:1,N:'w2:autoComplete',A:{objType:'data',class:' ',editType:'select',id:'lc_partner_hhexgb_freight',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhexgbPar'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'',id:'ed_partner_hhcurdt_freight',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhcurdtPar'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_partner_hhexrate_freight',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.hhexratePar'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'US Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_partner_hhuexrate_freight',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.hhuexratePar'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-4',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_CustomerChange2',style:'',type:'button','ev:onclick':'scwin.f_CustomerChange_freight(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'btn_2_freight2',style:'',type:'button','ev:onclick':'scwin.f_exRateChange_freight(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_ResultdateChange2',style:'',type:'button','ev:onclick':'scwin.f_ResultdateChange_freight(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ResultDate'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Partner List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridDownFn:'scwin.f_PartnerGrid'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_partner_freight',evenRowBackgroundColor:'#F8FFF8',id:'gr_partner_freight',visibleRowNum:'3',autoFit:'allColumn',class:'wq_gvw',autoFitMinWidth:'1700','ev:oncellclick':'scwin.gr_partner_freight_oncellclick','ev:onheaderclick':'scwin.gr_partner_freight_onheaderclick','ev:onaftercolumnmove':'scwin.gr_partner_freight_onaftercolumnmove','ev:onbeforeedit':'scwin.gr_partner_freight_onbeforeedit','ev:oneditend':'scwin.gr_partner_freight_oneditend','ev:ontextimageclick':'scwin.gr_partner_freight_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column12',class:'no-sort',displayMode:'label',fixColumnWidth:'true',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'SEQ',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'SEQ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'Customer',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'71',inputType:'text',id:'column3',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'D(매출)/C(매입)',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'F/Code',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'Init',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'CUR',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Unit',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'Package',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'Amount',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'Ex-Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'Amount(W)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'Amount(US$)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column19',value:'Result',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'Invoice No',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'Tariff Rate',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column53',value:'Remark',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'Vehicle No',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'vehclYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'내부매입구분',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'업로드 담당자',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{id:'chk',inputType:'checkbox',width:'17',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'currow',inputType:'text',width:'30',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'sellSeq',display:'none'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',inputType:'textImage',width:'60',textAlign:'left',textImage:'true'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'drCrCls',inputType:'autoComplete',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'fareEngCd',inputType:'textImage',width:'60',textAlign:'left',allowChar:'A-Z',textImage:'true'}},{T:1,N:'w2:column',A:{id:'fareEngNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',display:'none'}},{T:1,N:'w2:column',A:{id:'sellItemCd',display:'none'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'text',width:'50',textAlign:'left',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'fareUnit',inputType:'text',width:'50',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'chgWt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.3'}},{T:1,N:'w2:column',A:{id:'sellUpr',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'exRate',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'sellAmt',inputType:'text',width:'80',textAlign:'right',allowChar:'0-9',maxLength:'.0'}},{T:1,N:'w2:column',A:{id:'usdAmt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',inputType:'text',width:'80',textAlign:'center',allowChar:'0-9',mask:'####/##/##',textImage:'true'}},{T:1,N:'w2:column',A:{id:'certiNo',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'trfUpr',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true',display:'none'}},{T:1,N:'w2:column',A:{id:'vatYn',display:'none'}},{T:1,N:'w2:column',A:{id:'rmk',display:'none',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'exRateTyp',display:'none'}},{T:1,N:'w2:column',A:{id:'vehclNo',display:'none',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'vehclYn',display:'none'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'regName',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount($)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_PartnerSumAmount_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount(W)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_PartnerSumAmountW_freight',placeholder:'',class:' amt'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:input',A:{objType:'data',class:' w50',id:'ed_rowMake_partner',placeholder:'',style:''}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn4'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Buying Exchange Rate Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:280px'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Currency',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{objType:'data',class:' w50',id:'ed_buying_hhcur_freight',placeholder:'',style:'',ref:'data:ds_houseblList.hhcurBuy'}},{T:1,N:'w2:autoComplete',A:{objType:'data',class:' ',editType:'select',id:'lc_buying_hhexgb_freight',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhexgbBuy'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{objType:'data',style:'',id:'ed_buying_hhcurdt_freight',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_houseblList.hhcurdtBuy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_buying_hhexrate_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_houseblList.hhexrateBuy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'US Ex-Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{objType:'data',class:' w100',id:'ed_buying_hhuexrate_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_houseblList.hhuexrateBuy'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-4',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_CustomerChange3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'btn_2_freight3',style:'',type:'button','ev:onclick':'scwin.f_exRateChange_freight(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link',id:'pu_ResultdateChange3',style:'',type:'button','ev:onclick':'scwin.f_ResultdateChange_freight(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ResultDate'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Buying list',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',gridDownFn:'scwin.f_BuyingGrid'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section5',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_buying_freight',evenRowBackgroundColor:'#F8FFF8',id:'gr_buying_freight',visibleRowNum:'3',class:'wq_gvw',autoFitMinWidth:'1700',autoFit:'allColumn','ev:oncellclick':'scwin.gr_buying_freight_oncellclick','ev:onheaderclick':'scwin.gr_buying_freight_onheaderclick','ev:ontextimageclick':'scwin.gr_buying_freight_ontextimageclick','ev:oneditend':'scwin.gr_buying_freight_oneditend','ev:onbeforeedit':'scwin.gr_buying_freight_onbeforeedit','ev:onaftercolumnmove':'scwin.gr_buying_freight_onaftercolumnmove'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column12',class:'no-sort',displayMode:'label',fixColumnWidth:'true',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'SEQ',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'Type',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'SEQ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'Customer',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'F/Code',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'Name',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'Init',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'CUR',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Unit',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'Package',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'Amount',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'Ex-Rate',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'Amount(W)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'VAT',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'Amount(US$)',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column19',value:'Result',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'Inner Dept',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'내부부서명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'Invoice No',class:'col-type2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'Tariff Rate',displayMode:'label',hidden:'true',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'Vehicle No',displayMode:'label',hidden:'true',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'vehclYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'내부매입구분',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'업로드 담당자',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{id:'chk',inputType:'checkbox',width:'17',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'currow',inputType:'text',width:'30',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'pchsTyp',inputType:'autoComplete',width:'60',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'pchsSeq',display:'none'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',inputType:'textImage',width:'60',textAlign:'left',textImage:'true'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'fareEngCd',inputType:'textImage',width:'60',textAlign:'left',allowChar:'A-Z',textImage:'true'}},{T:1,N:'w2:column',A:{id:'fareEngNm',inputType:'text',width:'60',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',display:'none'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',display:'none'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'text',width:'50',textAlign:'center',allowChar:'A-Z'}},{T:1,N:'w2:column',A:{id:'fareUnit',inputType:'text',width:'50',textAlign:'center'}},{T:1,N:'w2:column',A:{id:'chgWt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.3'}},{T:1,N:'w2:column',A:{id:'pchsUpr',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'exRate',inputType:'text',width:'60',textAlign:'right',dataType:'float',maxLength:'.2'}},{T:1,N:'w2:column',A:{id:'pchsAmt',inputType:'text',width:'80',textAlign:'right',allowChar:'0-9',maxLength:'.0'}},{T:1,N:'w2:column',A:{id:'vat',inputType:'text',width:'60',textAlign:'right',allowChar:'0-9',maxLength:'.0'}},{T:1,N:'w2:column',A:{id:'usdAmt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',inputType:'text',width:'80',textAlign:'center',allowChar:'0-9',mask:'####/##/##',textImage:'true'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',inputType:'text',width:'80',textAlign:'center',allowChar:'A-Z',textImage:'true'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',display:'none'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'trfUpr',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'.2',readOnly:'true',display:'none'}},{T:1,N:'w2:column',A:{id:'vatYn',display:'none'}},{T:1,N:'w2:column',A:{id:'exRateTyp',display:'none'}},{T:1,N:'w2:column',A:{id:'vehclNo',display:'none'}},{T:1,N:'w2:column',A:{id:'vehclYn',display:'none'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'regName',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount($)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_BuyingSumAmount_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'Amount(W)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_BuyingSumAmountW_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'VAT',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_BuyingSumVat_freight',placeholder:'',class:' amt'}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'AMOUNT(W+VAT)',class:''}},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',style:'text-align: right;',id:'ed_BuyingAmountSum_freight',placeholder:'',class:' amt'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:input',A:{objType:'data',class:' w50',id:'ed_rowMake_buying',placeholder:'',style:''}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn5'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',class:' w150 tar',id:'ed_selling_total_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_profit_freight.sellAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',class:' w150 tar',id:'ed_purchase_total_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_profit_freight.pchsAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'손익',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',class:' w150 tar',id:'ed_profit_total_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_profit_freight.profit'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마진율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{readOnly:'true',objType:'data',class:' w150 tar',id:'ed_profitRate_total_freight',placeholder:'',style:'text-align: right;',ref:'data:ds_profit_freight.profitRate'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_4_freight',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'Partner\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_5_freight',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'Invoice\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Invoice'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_6_freight',style:'',type:'button','ev:onclick':'scwin.f_openPgm(\'Profit\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_8_freight',style:'',type:'button','ev:onclick':'scwin.f_openPgm_freight(\'paymentINV\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn link ',id:'btn_9_freight',style:'',type:'button','ev:onclick':'scwin.f_copyFromBuyingToSelling'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'copy buy to sell'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Cancel_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Update_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Save_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{objType:'ctrlBtn',userAuth:'C',class:'btn',id:'btn_Delete_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]}]}]}]})