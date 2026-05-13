/*amd /ui/il/seainb/sibl/se_202_01_03b.xml 245988 275b5cb827c30386fe21dba95fad26cd70a12362aaa15c6a49c4b119b154a21f */
define({declaration:{A:{version:'1.0',encoding:'utf-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'ds_retrieve',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:key',A:{id:'hhblno',dataType:'string',name:'HOUSE NO (CND) (16)'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'string',name:'Doc NO (16)'}},{T:1,N:'w2:key',A:{id:'mhvslcd',dataType:'string',name:'Vessel CD (16)'}},{T:1,N:'w2:key',A:{id:'mhvsl',dataType:'string',name:'Vessel Name (16)'}},{T:1,N:'w2:key',A:{id:'mhvyg',dataType:'string',name:'Voyage (16)'}},{T:1,N:'w2:key',A:{id:'mhio',dataType:'string',name:'IN/OUT 구분 (1)'}},{T:1,N:'w2:key',A:{id:'mheta',dataType:'string',name:'출항일(8)'}},{T:1,N:'w2:key',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:key',A:{id:'inpid',dataType:'string',name:'입력자 ID (8)'}},{T:1,N:'w2:key',A:{id:'inpdt',dataType:'string',name:'입력일 DATE'}},{T:1,N:'w2:key',A:{id:'updid',dataType:'string',name:'수정자 ID (8)'}},{T:1,N:'w2:key',A:{id:'upddt',dataType:'string',name:'수정일 DATE'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocHblhList',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_ocHblhList_onrowpositionchange',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:column',A:{name:'check (1)',id:'chk',dataType:'string'}},{T:1,N:'w2:column',A:{name:'HOUSE NO (CND) (16)',id:'hhblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'B/L TYPE (CND) (10)',id:'autono',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DOCUMENT NO (CND) (16)',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MASTER B/L (CND) (16)',id:'hhmblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'IN/OUT 구분 (1)',id:'hhio',dataType:'string'}},{T:1,N:'w2:column',A:{name:'BOOKING  NO (16)',id:'hhbkgno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'BOOKING SEQ (2)',id:'hhbkgseq',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER (6)',id:'hhscd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CLOSED (1)',id:'hhclosing',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER1 (50)',id:'hhs1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER2 (35)',id:'hhs2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER3 (35)',id:'hhs3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER4 (35)',id:'hhs4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER5 (35)',id:'hhs5',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE (6)',id:'hhccd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE1 (50)',id:'hhc1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE2 (35)',id:'hhc2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE3 (35)',id:'hhc3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE4 (35)',id:'hhc4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE5 (35)',id:'hhc5',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY (6)',id:'hhncd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY1 (50)',id:'hhn1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY2 (35)',id:'hhn2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY3 (35)',id:'hhn3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY4 (35)',id:'hhn4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY5 (35)',id:'hhn5',dataType:'string'}},{T:1,N:'w2:column',A:{name:'VESSEL (4)',id:'hhvslcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'VESSEL NAME (25)',id:'hhvsl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'VOYAGE (11)',id:'hhvyg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOADING (5)',id:'hhlodcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOADING NAME (35)',id:'hhlodnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DISCHARGE (5)',id:'hhdisccd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DISCHARGE NAME (35)',id:'hhdiscnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FACKAGE (N10)',id:'hhpkg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'UNIT (2)',id:'hhunitcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'UNIT NAME (10)',id:'hhunit',dataType:'string'}},{T:1,N:'w2:column',A:{name:'WEIGHT (N13,3)',id:'hhgwgt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MEASURE (N11,3)',id:'hhmsr',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ETD (8)',id:'hhetd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ONBOARD (8)',id:'hhondt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ETA (8)',id:'hheta',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ISSUED DATE (8)',id:'hhisudt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'RESULT (8)',id:'creadyDt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DANGEROUS (1)',id:'hhdanggb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PP/CC (10)',id:'hhpcgb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CARGO TYPE (1)',id:'hhbltype',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ISSUED AT (35)',id:'hhisunm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PAYABLE AT (35)',id:'hhpaynm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FREIGHT TERM (35)',id:'hhprenm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SERVICE TERM (20)',id:'hhstype',dataType:'string'}},{T:1,N:'w2:column',A:{name:'INCOTERMS (10)',id:'hhincoterm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE1 (4)',id:'hhcnt1type',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE2 (4)',id:'hhcnt2type',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE3 (4)',id:'hhcnt3type',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE4 (4)',id:'hhcnt4type',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER QUANTITY1 (N3)',id:'hhcnt1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER QUANTITY2 (N3)',id:'hhcnt2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER QUANTITY3 (N3)',id:'hhcnt3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER QUANTITY4 (N3)',id:'hhcnt4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PARTNER (6)',id:'hhagent',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PARTNER NAME (50)',id:'hhagentnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PARTNER PIC (2)',id:'hhagentattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PARTNER PIC NAME (50)',id:'hhagentattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER (6)',id:'hhactcust',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER NAME (50)',id:'hhactcustnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER PIC (2)',id:'hhactattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER PIC NAME (20)',id:'hhactattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SALESMAN (8)',id:'hhsales',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SALESMAN NAME (20)',id:'hhsalesnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER (6)',id:'hhliner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER NAME (50)',id:'hhlinernm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER PIC (2)',id:'hhlinerattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER PIC NAME (20)',id:'hhlinerattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DEPT (4)',id:'hhbuyer',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DEPT NAME (50)',id:'hhbuyernm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'AREA (6)',id:'hharea',dataType:'string'}},{T:1,N:'w2:column',A:{name:'AREA NAME (50)',id:'hhareanm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'TRIANGLE (1)',id:'hhtriange',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOMI (1)',id:'hhnomi',dataType:'string'}},{T:1,N:'w2:column',A:{name:'OLD B/L (1)',id:'hhobl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CO-LOAD (1)',id:'hhcoload',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM (8)',id:'hhitem',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM NAME1 (50)',id:'hhmitem1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM NAME2 (50)',id:'hhmitem2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'REMARK1 (50)',id:'hhrmk1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'REMARK2 (50)',id:'hhrmk2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'REMARK3 (50)',id:'hhrmk3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'REMARK4 (50)',id:'hhrmk4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'REMARK5 (50)',id:'hhrmk5',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPMENT TYPE (1)',id:'hhmnfgb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PRE-VESSEL/VOYAGE (25)',id:'hhfvsl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PLACE OF RECEIPT (5)',id:'hhrcvcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PLACE OF RECEIPT NAME (35)',id:'hhrcvnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PLACE OF DELIVERY (5)',id:'hhdlvcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PLACE OF DELIVERY NAME (35)',id:'hhdlvnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FINAL DESTINATION (5)',id:'hhfdcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FINAL DESTINATION NAME (35)',id:'hhfdnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PURCHASE ORDER NO (30)',id:'hhpono',dataType:'string'}},{T:1,N:'w2:column',A:{name:'INVOICE VALUE (20)',id:'hhcustvalue',dataType:'string'}},{T:1,N:'w2:column',A:{name:'L/C NO (20)',id:'hhlcno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Order No',id:'odrNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력자 ID (8)',id:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력일 DATE',id:'inpdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정자 ID (8)',id:'updid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정일 DATE',id:'upddt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'status',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmsrrate',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarecd',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarenm',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tdt',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cready_dt',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col114',name:'name114',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocContList',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:column',A:{name:'BL NO (16)',id:'mchblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DOCUMENT NO (16)',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER  (11)',id:'mccntno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'TYPE  (4)',id:'mctype',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SEAL NO1 (20)',id:'mcseal1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SEAL NO2 (20)',id:'mcseal2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PKG (N10)',id:'mcpkg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'UNIT (2)',id:'mcpkgcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'WEIGHT (N12,3)',id:'mcwgt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MEASURE (N11,3)',id:'mcmsr',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ISO ((N4)',id:'mciso',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력자 ID (8)',id:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력일 DATE',id:'inpdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정자 ID (8)',id:'updid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정일 DATE',id:'upddt',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocMblhList',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:column',A:{name:'CONSOL NO(16)',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MASTER B/L NUMBER(16)',id:'mhmblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'IN/OUT 구분(1)',id:'mhio',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MRN NO (11)',id:'mhmrnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MSN NO    (4)',id:'mhmsnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사코드 (6)',id:'mhlinercd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사명 (50)',id:'mhlinernm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사담당자코드(2)',id:'mhlinerattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사담당자명 (20)',id:'mhlinerattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DEPT코드 (4)',id:'mhbuyer',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DEPT명 (50)',id:'mhbuyernm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER CODE(6)',id:'mhscd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SHIPPER NAME(50)',id:'mhsnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE CODE(6)',id:'mhccd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSIGNEE NAME(50)',id:'mhcnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY CODE(6)',id:'mhncd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'NOTIFY NAME(50)',id:'mhnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'이전 선명(25)',id:'mhfvsl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'이전 항차(11)',id:'mhfvyg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선명(25)',id:'mhvsl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'항차 (11)',id:'mhvyg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOADING PORT CODE(6)',id:'mhlodcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOADING PORT NAME(35)',id:'mhlodnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DISCHARGING PORT CODE (6)',id:'mhdisccd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DISCHARGING PORT NAME(35)',id:'mhdiscnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DELIVERY CODE (6)',id:'mhdlvcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DELIVERY NAME(35)',id:'mhdlvnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DESTINATION CODE(6)',id:'mhdescd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DESTINATION NAME(35)',id:'mhdesnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'출항일(8)',id:'mhetd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'도착일(8)',id:'mheta',dataType:'string'}},{T:1,N:'w2:column',A:{name:'실제도착일 (8)',id:'mhfeta',dataType:'string'}},{T:1,N:'w2:column',A:{name:'실적일자 (8)',id:'mhcrdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PACKAGE(N10)',id:'mhpkg',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'WEIGHT(N12.3)',id:'mhwgt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'MEASURE(N11.3)',id:'mhmsr',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'환율(N11.3)',id:'mhexrate',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'UNIT (11)',id:'mhunit',dataType:'string'}},{T:1,N:'w2:column',A:{name:'통화단위(3)',id:'mhcur',dataType:'string'}},{T:1,N:'w2:column',A:{name:'환율일자(8)',id:'mhcurdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ARRIVAL 일자 (8)',id:'mhandt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'담당자명(20)',id:'mhattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSOL CHECK(1)',id:'mhcschk',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PREPAID/COLLECT 구분 (1)',id:'mhpccd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'USD환율(15.3)',id:'mhusdrate',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'EDI 선사코드(4)',id:'mhediliner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'GROUP_NO(16)',id:'groupNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FCL/LCL/BULK/CHARTER 구분(1)',id:'mhflc',dataType:'string'}},{T:1,N:'w2:column',A:{name:'UNIT CD(2)',id:'mhunitcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'환율구분(2)',id:'mexgb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'B/L TYPE(1)',id:'mhbltype',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER CODE(6)',id:'mhlinecd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER NAME(50)',id:'mhlinenm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER 담당자(2)',id:'mhlineattn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER 담당자명(20)',id:'mhlineattnnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'국내도착일(ML)(8)',id:'mleta',dataType:'string'}},{T:1,N:'w2:column',A:{name:'국내출항일(MD)(8)',id:'mdetd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'비고(ML)(50)',id:'mlrmk1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'비고(MD1)(50)',id:'mdrmk1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'비고(MD2)(50)',id:'mdrmk2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOCATION코드(6)',id:'mharea',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOCATION명(50)',id:'mhareanm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'위험물구분(1)',id:'mhdanggb',dataType:'string',defaultValue:'N'}},{T:1,N:'w2:column',A:{name:'컨테이너 종류(4)',id:'mhcnt1type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{name:'컨테이너 종류(4)',id:'mhcnt2type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{name:'컨테이너 종류(4)',id:'mhcnt3type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{name:'컨테이너 종류(4)',id:'mhcnt4type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{name:'컨테이너 수량(N3)',id:'mhcnt1',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'컨테이너 수량(N3)',id:'mhcnt2',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'컨테이너 수량(N3)',id:'mhcnt3',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'컨테이너 수량(N3)',id:'mhcnt4',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'Order No',id:'odrNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM (8)',id:'mhitem',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM NAME1 (50)',id:'mhitemNm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력자 ID(8)',id:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'입력일(8)',id:'inpdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정자 ID(8)',id:'updid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수정일(8)',id:'upddt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수출:ETD / 수입:ETA(8)',id:'mhstdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'VESSEL CODE(4)',id:'mhvslcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER (6)',id:'mhactcust',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER NAME (50)',id:'mhactcustnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 코드',id:'custom',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 명',id:'customnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 과 코드',id:'depart',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 과 명',id:'departnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'장치장 코드',id:'mhwarecd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'장치장명',id:'mhwarenm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhondt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'status',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tdt',name:'name92',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_vessel',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:column',A:{name:'HOUSE NO (CND) (16)',id:'hhblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Doc NO (16)',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Vessel CD (16)',id:'hhvslcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Vessel Name (16)',id:'hhvsl',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Voyage (16)',id:'hhvyg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'IN/OUT 구분 (1)',id:'mhio',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveNo',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'DOC NO (CND) (16)'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'string',name:'Mhno code'}},{T:1,N:'w2:column',A:{name:'Mhno name',id:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_comCode',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'text',name:'시스템구분'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'text',name:'SQL ID'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'text',name:'파라메터1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'text',name:'파라메터2'}},{T:1,N:'w2:key',A:{id:'param3',dataType:'text',name:'파라메터3'}},{T:1,N:'w2:key',A:{id:'param4',dataType:'text',name:'파라메터4'}},{T:1,N:'w2:key',A:{id:'param5',dataType:'text',name:'파라메터5'}},{T:1,N:'w2:key',A:{id:'param6',dataType:'text',name:'파라메터6'}},{T:1,N:'w2:key',A:{id:'param7',dataType:'text',name:'파라메터7'}},{T:1,N:'w2:key',A:{id:'param8',dataType:'text',name:'파라메터8'}},{T:1,N:'w2:key',A:{id:'param9',dataType:'text',name:'파라메터9'}},{T:1,N:'w2:key',A:{id:'param10',dataType:'text',name:'파라메터10'}},{T:1,N:'w2:key',A:{id:'param11',dataType:'text',name:'파라메터11'}},{T:1,N:'w2:key',A:{id:'param12',dataType:'text',name:'파라메터12'}},{T:1,N:'w2:key',A:{id:'param13',dataType:'text',name:'파라메터13'}},{T:1,N:'w2:key',A:{id:'param14',dataType:'text',name:'파라메터14'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_gridHouseList',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표 거래처 코드 (6)'}},{T:1,N:'w2:column',A:{name:'check (1)',id:'chk',dataType:'string'}},{T:1,N:'w2:column',A:{name:'HOUSE NO (CND) (16)',id:'hhblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'IN/OUT 구분 (1)',id:'hhio',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DOCUMENT NO (CND) (16)',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FACKAGE (N10)',id:'hhpkg',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'WEIGHT (N13,3)',id:'hhgwgt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'MEASURE (N11,3)',id:'hhmsr',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'CARGO TYPE (1)',id:'hhbltype',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhwarecd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarenm',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipTax',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',dataType:'string',name:'IN/OUT'}},{T:1,N:'w2:column',A:{name:'HOUSE B/L',id:'hhblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MHNO',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ORDER NO',id:'odrNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTOMER',id:'clntNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'BILLING DATE',id:'intendDt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'TAX DATE',id:'spplyDt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'SLIP NO',id:'slipNo',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocProfitList',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',dataType:'string',name:'usd'}},{T:1,N:'w2:column',A:{name:'krw',id:'buying',dataType:'string'}},{T:1,N:'w2:column',A:{name:'krw',id:'profit',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_SeaCargoManifest',baseNode:'list',repeatNode:'map',saveRemovedData:'false','ev:ondataload':'scwin.ds_SeaCargoManifest_onload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표거래처 코드'}},{T:1,N:'w2:column',A:{name:'적하목록 신고 번호',id:'mrnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSOL NO',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Cehckdigit',id:'mrnseq',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사 세관 등록 코드',id:'ediliner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사 코드',id:'liner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선사 명',id:'linernm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'포워딩 세관 등록 코드',id:'fwdcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'포워딩 명',id:'fwdnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'선박 명',id:'vessel',dataType:'string'}},{T:1,N:'w2:column',A:{name:'항차',id:'voyage',dataType:'string'}},{T:1,N:'w2:column',A:{name:'양하항',id:'lodcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'양하항 명',id:'lodnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'출항일',id:'dt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 코드',id:'custom',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 명',id:'customnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 과 코드',id:'depart',dataType:'string'}},{T:1,N:'w2:column',A:{name:'세관 과 명',id:'departnm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'신고 결과',id:'status',dataType:'string'}},{T:1,N:'w2:column',A:{name:'전송일',id:'tdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'등록자ID',id:'userid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seq',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MASTER B/L NUMBER(16)',id:'mblno',dataType:'string'}},{T:1,N:'w2:column',A:{id:'iogb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'House B/L 총 개수',id:'hblCnt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Master B/L 총 개수',id:'mblCnt',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_Master',baseNode:'list',repeatNode:'map',saveRemovedData:'false','ev:ondataload':'scwin.ds_Master_onload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표거래처 코드'}},{T:1,N:'w2:column',A:{name:'적하항목관리 번호',id:'mrnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Master B/L 순번',id:'msnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Master B/L 번호',id:'mblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'중량',id:'wgt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'용적',id:'msr',dataType:'DECIMAL'}},{T:1,N:'w2:column',A:{name:'수량',id:'pkg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSOL NO',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'EDI 선사코드',id:'ediLiner',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_House',baseNode:'list',repeatNode:'map',saveRemovedData:'false','ev:ondataload':'scwin.ds_House_onload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표거래처 코드'}},{T:1,N:'w2:column',A:{name:'적하항목관리 번호',id:'mrnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'HSN NO',id:'hsnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Master B/L 순번',id:'mblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'House B/L 번호',id:'hblno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'중량',id:'wgt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'용적',id:'msr',dataType:'DECIMAL'}},{T:1,N:'w2:column',A:{name:'수량',id:'pkg',dataType:'string'}},{T:1,N:'w2:column',A:{name:'EDI 선사코드',id:'ediliner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSOL NO',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수입(I) 수출(E) 구분',id:'edigubun',dataType:'string'}},{T:1,N:'w2:column',A:{name:'EDI 선사코드',id:'hhmitem2',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_cntCnt',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntCnt',dataType:'string',name:'Container 총 개수'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_BLcheck',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblno',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hblno',dataType:'string'}},{T:1,N:'w2:column',A:{id:'descnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'userid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'flag',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_SendEDI',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'대표거래처 코드'}},{T:1,N:'w2:column',A:{name:'적하목록 신고 번호',id:'mrnno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'전송 화면 명',id:'gubun',dataType:'string'}},{T:1,N:'w2:column',A:{name:'EDI 선사코드',id:'ediliner',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ReportPrint',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',dataType:'string',name:'대표거래처 코드'}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_search',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'iogb',dataType:'string'}},{T:1,N:'w2:key',A:{id:'fromdt',dataType:'string'}},{T:1,N:'w2:key',A:{id:'todt',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mrnno',dataType:'string'}},{T:1,N:'w2:key',A:{id:'etd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'eta',dataType:'string'}},{T:1,N:'w2:key',A:{id:'vsl',dataType:'string'}},{T:1,N:'w2:key',A:{id:'voy',dataType:'string'}},{T:1,N:'w2:key',A:{id:'liner',dataType:'string'}},{T:1,N:'w2:key',A:{id:'ediliner',dataType:'string'}},{T:1,N:'w2:key',A:{id:'deptCd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mblno',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhstdt',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'string'}},{T:1,N:'w2:key',A:{id:'control',dataType:'string'}},{T:1,N:'w2:key',A:{id:'status',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_SeaCargoManifestCount',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_selling',baseNode:'list',repeatNode:'map','ev:oncelldatachange':'scwin.ds_selling_oncelldatachange',saveRemovedData:'false',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'오더번호'}},{T:1,N:'w2:column',A:{name:'check (1)',id:'chk',dataType:'string',defaultValue:'T'}},{T:1,N:'w2:column',A:{name:'매출순번',id:'sellSeq',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'법인코드',id:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'해운(S)/항공(A) 구분',id:'seaAirCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'청구처 코드',id:'bilgClntNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'청구처명',id:'bilgClntNm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'비엘번호',id:'blNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONSOL번호',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'매출입항목코드',id:'sellItemCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'영문운임코드',id:'fareEngCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'영문 운임명',id:'fareEngNm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'운임그룹코드',id:'fareGrpCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'운임UNIT',id:'fareUnit',dataType:'string'}},{T:1,N:'w2:column',A:{name:'국내해외매출구분(국내:1 해외:2)',id:'locPtnCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MASTER/HOUSE구분 (M/H)',id:'mblHblCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)',id:'drcrCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PREPAID/COLLECT구분 (P/C)',id:'ppccCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'통화코드',id:'crcCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'수량',id:'qty',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'GROSS WEIGHT',id:'grossWt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'CHARGEABLE WEIGHT',id:'chgWt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'TARIFF 단가',id:'trfUpr',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'단가',id:'sellUpr',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'US$ 금액',id:'usdAmt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'환율',id:'exRate',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'적용환율 TYPE',id:'exRateTyp',dataType:'string'}},{T:1,N:'w2:column',A:{name:'RATE CLASS',id:'rateCls',dataType:'string'}},{T:1,N:'w2:column',A:{name:'COMMODITY ITEM',id:'commItem',dataType:'string'}},{T:1,N:'w2:column',A:{name:'거래명세서 그룹번호',id:'prtnGrpNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'출력용 단가',id:'prtnUpr',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'출력용 금액',id:'prtnAmt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'소급매출금액외화',id:'sellAmtFcrc',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'Amount (W)',id:'sellAmt',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'VAT',id:'vatAmt',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'Result Date',id:'rsltsStdDt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'Invoice No',id:'certiNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'type',id:'jobType',dataType:'string'}},{T:1,N:'w2:column',A:{name:'삭제여부',id:'delYn',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{name:'부가세여부',id:'vatYn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'비고',id:'rmk',dataType:'string'}},{T:1,N:'w2:column',A:{name:'inpid',id:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'//결과코드',id:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'//결과메시지',id:'spMsg',dataType:'string'}},{T:1,N:'w2:column',A:{id:'distributeYn',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currow',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tabIndex',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmsrrate',name:'name50',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveTariff',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fgubn',dataType:'string',name:'SELLING : 1 , BUYING : 2 , PARTNER : 3'}},{T:1,N:'w2:column',A:{name:'KCOMCD',id:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ETD, ETA',id:'apdt',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CUSTSOMER',id:'customer',dataType:'string'}},{T:1,N:'w2:column',A:{name:'PARTNER',id:'partner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LINER',id:'liner',dataType:'string'}},{T:1,N:'w2:column',A:{name:'LOADING',id:'loading',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DISCHARGE',id:'discharge',dataType:'string'}},{T:1,N:'w2:column',A:{name:'ITEM',id:'item',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE',id:'container1',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE',id:'container2',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE',id:'container3',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER TYPE',id:'container4',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CONTAINER OR BULK GUBN (C:B)',id:'cbgubn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'INCOTERM (FIO, FIBT ,BTFO ,BTBT )',id:'incoterm',dataType:'string'}},{T:1,N:'w2:column',A:{name:'USER ID',id:'userid',dataType:'string'}},{T:1,N:'w2:column',A:{name:'DANGEROUS',id:'dangerous',dataType:'string'}},{T:1,N:'w2:column',A:{name:'공통CUSTSOMER',id:'commcustomer',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FCODE',id:'fcode',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CURRENCY',id:'currency',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FUNIT',id:'funit',dataType:'string'}},{T:1,N:'w2:column',A:{name:'tariff : 1, TariffRate : 2',id:'flag',dataType:'string'}},{T:1,N:'w2:column',A:{name:'TRANS TARIFF YN',id:'transTariffYn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'BLNO',id:'blNo',dataType:'string'}},{T:1,N:'w2:column',A:{name:'MHNO',id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{name:'//결과코드',id:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{name:'//결과메시지',id:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_resultTariff',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'customer',dataType:'string',name:'CUSTSOMER'}},{T:1,N:'w2:column',A:{name:'FCODE',id:'fareEngCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'FUNIT',id:'fareUnit',dataType:'string'}},{T:1,N:'w2:column',A:{name:'CURRENCY',id:'crcCd',dataType:'string'}},{T:1,N:'w2:column',A:{name:'BLGB',id:'blgb',dataType:'string'}},{T:1,N:'w2:column',A:{name:'AMOUNT(10.2)',id:'amount',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_sellingDistribute',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'sellSeq',dataType:'string',name:'매출순번'}},{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'해운(S)/항공(A) 구분'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',dataType:'string',name:'청구처 코드'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',dataType:'string',name:'청구처명'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'비엘번호'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'CONSOL번호'}},{T:1,N:'w2:column',A:{id:'sellItemCd',dataType:'string',name:'매출입항목코드'}},{T:1,N:'w2:column',A:{id:'fareEngCd',dataType:'string',name:'영문운임코드'}},{T:1,N:'w2:column',A:{id:'fareEngNm',dataType:'string',name:'영문 운임명'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',dataType:'string',name:'운임그룹코드'}},{T:1,N:'w2:column',A:{id:'fareUnit',dataType:'string',name:'운임UNIT'}},{T:1,N:'w2:column',A:{id:'locPtnCls',dataType:'string',name:'국내해외매출구분(국내:1 해외:2)'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'MASTER/HOUSE구분 (M/H)'}},{T:1,N:'w2:column',A:{id:'drcrCls',dataType:'string',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)'}},{T:1,N:'w2:column',A:{id:'ppccCls',dataType:'string',name:'PREPAID/COLLECT구분 (P/C)'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'string',name:'통화코드'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'grossWt',dataType:'string',name:'GROSS WEIGHT'}},{T:1,N:'w2:column',A:{id:'chgWt',dataType:'string',name:'CHARGEABLE WEIGHT'}},{T:1,N:'w2:column',A:{id:'trfUpr',dataType:'string',name:'TARIFF 단가'}},{T:1,N:'w2:column',A:{id:'sellUpr',dataType:'string',name:'단가'}},{T:1,N:'w2:column',A:{id:'usdAmt',dataType:'string',name:'US$ 금액'}},{T:1,N:'w2:column',A:{id:'exRate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exRateTyp',dataType:'string',name:'적용환율 TYPE'}},{T:1,N:'w2:column',A:{id:'rateCls',dataType:'string',name:'RATE CLASS'}},{T:1,N:'w2:column',A:{id:'commItem',dataType:'string',name:'COMMODITY ITEM'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',dataType:'string',name:'거래명세서 그룹번호'}},{T:1,N:'w2:column',A:{id:'prtnUpr',dataType:'string',name:'출력용 단가'}},{T:1,N:'w2:column',A:{id:'prtnAmt',dataType:'string',name:'출력용 금액'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',dataType:'string',name:'소급매출금액외화'}},{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'string',name:'Amount (W)'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'string',name:'VAT'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',dataType:'string',name:'Result Date'}},{T:1,N:'w2:column',A:{id:'certiNo',dataType:'string',name:'Invoice No'}},{T:1,N:'w2:column',A:{id:'jobType',dataType:'string',name:'type'}},{T:1,N:'w2:column',A:{id:'delYn',dataType:'string',name:'삭제여부'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'string',name:'부가세여부'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'string',name:'비고'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string',name:'inpid'}},{T:1,N:'w2:column',A:{id:'hhmsrrate',dataType:'string',name:'hhmsrrate'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'//결과코드'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'//결과메시지'}},{T:1,N:'w2:column',A:{id:'chk',name:'name45',dataType:'text',defaultValue:'T'}},{T:1,N:'w2:column',A:{id:'tabIndex',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distributeYn',name:'name49',dataType:'text',defaultValue:'N'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_invoiceCheck',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'name',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_masterHouseBlList',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'NAME',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_cndmhmblno',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'name',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeParam',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'modrNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hodrNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'dept',dataType:'string'}},{T:1,N:'w2:column',A:{id:'deptnm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bulkGb',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ExRate',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'name',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_sellingUnit',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'name',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_exRateSellingGrid',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'NAME',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_currencyCode',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'STRING'}},{T:1,N:'w2:column',A:{id:'name',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_customerInfo',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',dataType:'STRING'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_sellingDistributeTemp',baseNode:'list',repeatNode:'map',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'sellSeq',dataType:'string'}},{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellItemCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareEngNm',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'fareUnit',dataType:'string'}},{T:1,N:'w2:column',A:{id:'locPtnCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'drcrCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'ppccCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'string'}},{T:1,N:'w2:column',A:{id:'grossWt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'chgWt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'trfUpr',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellUpr',dataType:'string'}},{T:1,N:'w2:column',A:{id:'usdAmt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'exRate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'exRateTyp',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rateCls',dataType:'string'}},{T:1,N:'w2:column',A:{id:'commItem',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnUpr',dataType:'string'}},{T:1,N:'w2:column',A:{id:'prtnAmt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',dataType:'string'}},{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'certiNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'jobType',dataType:'string'}},{T:1,N:'w2:column',A:{id:'delYn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmsrrate',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string'}},{T:1,N:'w2:column',A:{id:'col45',name:'name45',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seainb.sibl.RetrieveSeaImportVesselCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_vessel","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_vessel","key":"OUT_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHouse',action:'/il.seainb.sibl.RetrieveSeaImportMasterBlCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_vessel","key":"IN_DS1"},{"id":"ds_ocHblhList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGridHouse',action:'/il.seainb.sibl.RetrieveSeaImportGridHouseCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_gridHouseList","key":"IN_DS1"},{"id":"ds_gridHouseList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_gridHouseList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror',processMsg:'$blank'}},{T:1,N:'xf:submission',A:{id:'sbm_createMhno',action:'/il.seainb.sibl.RetrieveMhnoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_retrieveNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveNo","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMhno',action:'/il.seainb.sibl.RetrieveSeaImportMasterBlMhnoPiCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"},{"id":"ds_selling","key":"OUT_DS6"},{"id":"ds_sellingDistribute","key":"OUT_DS7"},{"id":"ds_sellingDistributeTemp","key":"OUT_DS8"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"},{"id":"ds_selling","key":"OUT_DS6"},{"id":"ds_sellingDistribute","key":"OUT_DS7"},{"id":"ds_sellingDistributeTemp","key":"OUT_DS8"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seainb.sibl.SaveMasterBlCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"action":"modified","id":"ds_ocHblhList","key":"IN_DS1"},{"action":"modified","id":"ds_ocMblhList","key":"IN_DS2"},{"action":"modified","id":"ds_selling","key":"IN_DS3"},{"action":"modified","id":"ds_ocContList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ocContList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seainb.sibl.DeleteMasterBlPiCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"action":"modified","id":"ds_SeaCargoManifest","key":"IN_DS2"},{"action":"modified","id":"ds_Master","key":"IN_DS3"},{"action":"modified","id":"ds_House","key":"IN_DS4"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror','ev:submitdone':'scwin.sbm_delete_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSeaCargoManifest',action:'/il.seedi.seed.RetrieveSeaCargoManifestPiCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_SeaCargoManifest","key":"OUT_DS1"},{"id":"ds_Master","key":"OUT_DS2"},{"id":"ds_House","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_SeaCargoManifest","key":"OUT_DS1"},{"id":"ds_Master","key":"OUT_DS2"},{"id":"ds_House","key":"OUT_DS3"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveSeaCargoManifest',action:'/il.seedi.seed.SaveSeaCargoManifestCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_SeaCargoManifest","key":"IN_DS1"},{"action":"modified","id":"ds_Master","key":"IN_DS2"},{"action":"modified","id":"ds_House","key":"IN_DS3"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_saveSeaCargoManifest_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSeaCargoManifest',action:'/il.seedi.seed.SaveSeaCargoManifestCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_SeaCargoManifest","key":"IN_DS1"},{"action":"modified","id":"ds_Master","key":"IN_DS2"},{"action":"modified","id":"ds_House","key":"IN_DS3"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveSeaCargoManifest_print',action:'/il.seedi.seed.SaveSeaCargoManifestCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_SeaCargoManifest","key":"IN_DS1"},{"action":"modified","id":"ds_Master","key":"IN_DS2"},{"action":"modified","id":"ds_House","key":"IN_DS3"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_saveSeaCargoManifest_print_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSeaCargoManifestCnt',action:'/il.seedi.seed.RetrieveSeaCargoManifestCntCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_cntCnt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntCnt","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SendEDI',action:'/il.seedi.seed.SeaSendEDICMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_SendEDI","key":"IN_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_ReportPrint',action:'/il.seedi.seed.RetrieveSeaCargoManifestReportMhnoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_ReportPrint","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ReportPrint","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_BLcheck',action:'/il.seedi.seed.SeaCargoManifestCheckCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_House","key":"IN_DS1"},{"id":"ds_BLcheck","key":"IN_DS2"},{"id":"ds_BLcheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_BLcheck","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTariff',action:'/il.seainb.sibl.RetrieveSeaImportTariffCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_retrieveTariff","key":"IN_DS1"},{"id":"ds_resultTariff","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultTariff","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror',processMsg:'$blank'}},{T:1,N:'xf:submission',A:{id:'sbm_sellingDistribute',action:'/il.seainb.sibl.SaveSellingDistributeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_sellingDistribute","key":"IN_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_sellingDistribute_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSellingDistribute',action:'/il.seainb.sibl.SaveSellingDistributeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_selling","key":"IN_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_cancelSellingDistribute_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'synchronous',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',mediatype:'application/json','ev:submiterror':'scwin.sbm_default_submiterror',processMsg:'$blank','ev:submitdone':'scwin.sbm_comCode_submitdone'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : se_202_03_01b
// 이름     : Master B/L Regist
// 경로     : 해외물류
// 작 성 자 : 김용호
// 작 업 일 : 2026-01-26
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
console.log('====se_202_01_03b=============');
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";

// JSP parameter/session vars
scwin.userId = "";
scwin.p_lobranCd = "";
scwin.p_lobranNm = "";
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.strCurDate = "";
scwin.p_linkcheck = "";
scwin.p_kcomcd = "";
scwin.p_blno = "";
scwin.p_mhno = "";
scwin.p_bkno = "";
scwin.p_vslcd = "";
scwin.p_vsl = "";
scwin.p_vyg = "";

// screen vars
scwin.v_linkcheck = "";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_vslcd = "";
scwin.v_vsl = "";
scwin.v_vyg = "";

// hidden/display:none vars
scwin.hd_kcomcd = "DBEX";
scwin.hd_mhio = "I";
scwin.hd_hblCnt = "";
scwin.clntNo = "";
scwin.intendDt = "";
scwin.slipNo = "";
scwin.spplyDt = "";
scwin.invoiceCheck = "0";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  // session info
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  scwin.p_lobranCd = $c.data.getMemInfo($p, "lobranCd") || " ";
  scwin.p_lobranNm = $c.data.getMemInfo($p, "lobranNm") || "";
  const resData = $c.gus.dsCommonUtil($p, 'getCompanyInfoDTO', scwin.p_lobranCd)[0].value.split('\n');
  const commDTO = resData.reduce((acc, curr) => {
    const match = curr.match(/^\s*\w+\s+(\w+)\s+=\s+\[(.*)\]/);
    if (match) {
      const key = match[1];
      let value = match[2];
      if (value == 'null') value = null;
      acc[key] = value;
    }
    ;
    return acc;
  }, {});
  scwin.p_clntNo = commDTO.clntNo;
  scwin.p_clntNm = commDTO.name1;

  // parameters
  scwin.p_linkcheck = $c.data.getParameter($p, "linkcheck") || "";
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.p_blno = $c.data.getParameter($p, "blno") || "";
  scwin.p_mhno = $c.data.getParameter($p, "mhno") || "";
  scwin.p_bkno = $c.data.getParameter($p, "bkno") || "";
  scwin.p_vslcd = $c.data.getParameter($p, "vslcd") || "";
  scwin.p_vsl = $c.data.getParameter($p, "vsl") || "";
  scwin.p_vyg = $c.data.getParameter($p, "vyg") || "";

  // screen vars
  scwin.v_linkcheck = scwin.p_linkcheck;
  scwin.v_kcomcd = scwin.p_kcomcd;
  scwin.v_blno = scwin.p_blno;
  scwin.v_mhno = scwin.p_mhno;
  scwin.v_bkno = scwin.p_bkno;
  scwin.v_vslcd = scwin.p_vslcd;
  scwin.v_vsl = scwin.p_vsl;
  scwin.v_vyg = scwin.p_vyg;

  // date
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.f_OnLoad();

  // 컴포넌트 설정
  scwin.initComp();
};
scwin.initComp = function () {
  // UDC
  var udcObj = [ed_mhlodcd, ed_mhdisccd, ed_hhwarecd, ed_mhvslcd];
  for (var i = 0; i < udcObj.length; i++) {
    udcObj[i].unbind('onkeyup');
    udcObj[i].bind('onkeyup', scwin.upperCase);
  }

  // GRID
  gr_selling.getCellInfo('currow').options.expressionFunc = function (rowIndex) {
    txt_totSelling.setValue(rowIndex + 1);
    return rowIndex + 1;
  };
};

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  scwin.f_initSetTab();
  scwin.f_DefaultValue();
  scwin.f_getParametrSetting(scwin.v_linkcheck);
  scwin.f_CurrencyLoading();
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_shhcucd"
  } //열위치
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "3":
      // house Search
      scwin.mhnoFlag = "1";
      cnd_ed_hhblno.setValue(scwin.v_blno);
      scwin.hd_kcomcd = scwin.v_kcomcd;
      if (ds_hmhno.getRowCount() == 0) {
        scwin._insertRow(ds_hmhno);
      }
      var hmhnoRow = ds_hmhno.getRowPosition();
      ds_hmhno.setCellData(hmhnoRow, "code", scwin.v_mhno);
      ds_hmhno.setCellData(hmhnoRow, "name", scwin.v_mhno);
      cnd_lc_mhno.setSelectedIndex(0);
      scwin.f_Retrieve();
      break;
    case "5":
      // House B/L create
      scwin.f_Create();
      ed_mhvslcd.setValue(scwin.v_vslcd);
      txt_mhvsl.setValue(scwin.v_vsl);
      ed_mhvyg.setValue(scwin.v_vyg);
      scwin.f_RetrieveVessel();
      break;
  }
};
scwin.f_DefaultValue = function () {
  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay();
  rd_mhdanggb.setValue("N");
  cnd_ed_hhblno.focus();
};
scwin.f_disabledUdc = function (flag) {
  udc_mhlinercd.setDisabled(flag);
  udc_mhscd.setDisabled(flag);
  udc_mhccd.setDisabled(flag);
  udc_mhncd.setDisabled(flag);
  udc_mhlodcd.setDisabled(flag);
  udc_mhdisccd.setDisabled(flag);
  udc_hhwarecd.setDisabled(flag);
  udc_shhcust.setDisabled(flag);
  ed_mhbuyer.setDisabled(flag);
  img_PopUp3.setDisabled(flag);
  txt_mhbuyernm.setDisabled(flag);
  if (scwin.statusFlag == "" || scwin.statusFlag == "I") {
    udc_custom.setDisabled(flag);
    udc_depart.setDisabled(flag);
  }
  if (scwin.statusFlag == "U" || scwin.statusFlag == "C") {
    ed_custom.setDisabled(flag);
    img_PopUp17.setDisabled(flag);
    ed_depart.setDisabled(flag);
    img_PopUp18.setDisabled(flag);
  }
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      // init
      scwin.statusFlag = "I";
      $c.gus.cfDisableKeyData($p);
      scwin.f_disabledUdc(true);
      $c.gus.cfDisableBtnOnly($p, [pu_departmentChange, btn_cancel, btn_save, btn_del, btn_update, img_PopUp3, img_PopUp11, img_PopUp12, img_PopUp13, img_PopUp14, btn_21, btn_22, btn_23, btn_24, btn_25, btn_AddRow1, btn_CancelRow1, btn_FAddRow1, btn_FDelRow1, btn_FCancelRow1]);
      $c.gus.cfEnableBtnOnly($p, [btn_create]);
      scwin.f_DisablePopUpObj();
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", true);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      gr_ocHblhList.setColumnReadOnly("hhmsrrate", true);
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      gr_selling.setReadOnly("grid", true);
      gr_selling.setColumnReadOnly("chk", true);
      gr_selling.setColumnReadOnly("bilgClntNo", true);
      gr_selling.setColumnReadOnly("fareEngCd", true);
      gr_selling.setColumnReadOnly("crcCd", true);
      gr_selling.setColumnReadOnly("fareUnit", true);
      gr_selling.setColumnReadOnly("chgWt", true);
      gr_selling.setColumnReadOnly("sellUpr", true);
      gr_selling.setColumnReadOnly("sellAmtFcrc", true);
      gr_selling.setColumnReadOnly("exRate", true);
      gr_selling.setColumnReadOnly("sellAmt", true);
      gr_selling.setColumnReadOnly("vatAmt", true);
      gr_selling.setColumnReadOnly("rsltsStdDt", true);
      break;
    case "RETRIEVE":
      // retrieve
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      scwin.f_disabledUdc(true);
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel, btn_21, btn_22, btn_23, img_PopUp11, img_PopUp12, img_PopUp13, img_PopUp14, btn_AddRow1, btn_CancelRow1, btn_FAddRow1, btn_FDelRow1, btn_FCancelRow1]);
      $c.gus.cfEnableBtnOnly($p, [btn_create, btn_del, pu_departmentChange, btn_retrieve, btn_Clear, btn_24, btn_25]);
      udc_mhvslcd.setDisabled(true);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", true);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      gr_ocHblhList.setColumnReadOnly("hhmsrrate", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      }
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]);
      scwin.statusFlag = "";
      gr_selling.setReadOnly("grid", true);
      gr_selling.setColumnReadOnly("chk", false);
      gr_selling.setColumnReadOnly("bilgClntNo", true);
      gr_selling.setColumnReadOnly("fareEngCd", true);
      gr_selling.setColumnReadOnly("crcCd", true);
      gr_selling.setColumnReadOnly("fareUnit", true);
      gr_selling.setColumnReadOnly("chgWt", true);
      gr_selling.setColumnReadOnly("sellUpr", true);
      gr_selling.setColumnReadOnly("sellAmtFcrc", true);
      gr_selling.setColumnReadOnly("exRate", true);
      gr_selling.setColumnReadOnly("sellAmt", true);
      gr_selling.setColumnReadOnly("vatAmt", true);
      gr_selling.setColumnReadOnly("rsltsStdDt", true);
      break;
    case "CREATE":
      // create
      scwin.statusFlag = "C";
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      scwin.f_disabledUdc(false);
      $c.gus.cfDisableBtnOnly($p, [btn_create, btn_update, btn_del, btn_24, btn_25]);
      $c.gus.cfEnableBtnOnly($p, [btn_save, btn_cancel, btn_21, btn_22, btn_23, img_PopUp11, img_PopUp12, img_PopUp13, img_PopUp14, btn_AddRow1, btn_CancelRow1, btn_FAddRow1, btn_FDelRow1, btn_FCancelRow1]);
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", true);
      gr_ocHblhList.setColumnReadOnly("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", false);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      gr_ocHblhList.setColumnReadOnly("hhmsrrate", true);
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]);
      gr_selling.setReadOnly("grid", false);
      gr_selling.setColumnReadOnly("chk", false);
      gr_selling.setColumnReadOnly("bilgClntNo", false);
      gr_selling.setColumnReadOnly("fareEngCd", false);
      gr_selling.setColumnReadOnly("crcCd", false);
      gr_selling.setColumnReadOnly("fareUnit", false);
      gr_selling.setColumnReadOnly("chgWt", false);
      gr_selling.setColumnReadOnly("sellUpr", false);
      gr_selling.setColumnReadOnly("sellAmtFcrc", false);
      gr_selling.setColumnReadOnly("exRate", false);
      gr_selling.setColumnReadOnly("sellAmt", false);
      gr_selling.setColumnReadOnly("vatAmt", false);
      gr_selling.setColumnReadOnly("rsltsStdDt", false);
      break;
    case "UPDATE":
      scwin.statusFlag = "U";
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_create, btn_del, btn_retrieve, btn_Clear, btn_24, btn_25]);
      $c.gus.cfEnableBtnOnly($p, [btn_save, btn_cancel, btn_21, btn_22, btn_23, img_PopUp11, img_PopUp12, img_PopUp13, img_PopUp14, btn_AddRow1, btn_CancelRow1, btn_FAddRow1, btn_FDelRow1, btn_FCancelRow1]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      scwin.f_disabledUdc(false);
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", true);
      gr_ocHblhList.setColumnReadOnly("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", false);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      gr_ocHblhList.setColumnReadOnly("hhmsrrate", true);
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]);
      gr_selling.setReadOnly("grid", false);
      gr_selling.setColumnReadOnly("chk", false);
      gr_selling.setColumnReadOnly("bilgClntNo", false);
      gr_selling.setColumnReadOnly("fareEngCd", false);
      gr_selling.setColumnReadOnly("crcCd", false);
      gr_selling.setColumnReadOnly("fareUnit", false);
      gr_selling.setColumnReadOnly("chgWt", false);
      gr_selling.setColumnReadOnly("sellUpr", false);
      gr_selling.setColumnReadOnly("sellAmtFcrc", false);
      gr_selling.setColumnReadOnly("exRate", false);
      gr_selling.setColumnReadOnly("sellAmt", false);
      gr_selling.setColumnReadOnly("vatAmt", false);
      gr_selling.setColumnReadOnly("rsltsStdDt", false);
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_del, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_update, btn_create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// popup enable/disable
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {};
scwin.f_DisablePopUpObj = function () {};

//-------------------------------------------------------------------------
// contents display
//-------------------------------------------------------------------------
scwin.f_ContentsDisplay = function () {
  if (scwin.statusFlag == "I" || scwin.statusFlag == "") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    $c.gus.cfEnableObj($p, udc_mhvslcd, false);
    //$c.gus.cfEnableObj(txt_mhvsl, false);
    $c.gus.cfEnableObj($p, ed_mhvyg, false);
  } else if (scwin.statusFlag == "C") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, udc_mhvslcd, true);
    //$c.gus.cfEnableObj(txt_mhvsl, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
    $c.gus.cfEnableObj($p, rd_status, false);
  } else if (scwin.statusFlag == "U") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, udc_mhvslcd, true);
    //$c.gus.cfEnableObj(txt_mhvsl, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
    $c.gus.cfEnableObj($p, rd_status, false);
  }
};

//-------------------------------------------------------------------------
// retrieve
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if ($c.str.trim($p, cnd_lc_mhno.getValue()) == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_043, ["Document No"]); // 유효하지 않는 @ 입니다.\n다시 입력하여주십시요
    return;
  }
  ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
  ds_retrieve.set("hhblno", cnd_ed_hhblno.getValue());
  ds_retrieve.set("mhno", cnd_lc_mhno.getValue());
  ds_retrieve.set("mhio", scwin.hd_mhio);
  if (ds_ocHblhList.getCellData(ds_ocHblhList.getRowPosition() || 0, "hhblno")) {
    ds_retrieve.set("hhblno", ds_ocHblhList.getCellData(ds_ocHblhList.getRowPosition() || 0, "hhblno"));
  }
  var e = await $c.sbm.execute($p, sbm_retrieveMhno);
  scwin.sbm_retrieveMhno_submitdone(e);
  if (ds_ocMblhList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.f_dataSetClear();
    //$c.gus.cfInitObjects([tb_masterColumn]);
    scwin.f_Set("INIT");
  } else {
    ds_ocHblhList.setRowPosition(0);
    ds_ocMblhList.setRowPosition(0);
    scwin.f_invoiceCheck();
    await scwin.f_DetailInfoRetrieve();
    scwin.f_Set("RETRIEVE");
    scwin.f_MasterSum();
    scwin.f_SellingSum();
    scwin.f_masterHouseBlList();
    ed_fhhlodcd.setValue(ds_ocHblhList.getCellData(0, "hhlodcd"));
    ed_fhhdisccd.setValue(ds_ocHblhList.getCellData(0, "hhdisccd"));
  }
  await scwin.ds_ocHblhList_onload();
  scwin.ds_ocMblhList_onload();
  scwin.ds_ocContList_onload();
  scwin.f_sellingUnitLoading();
};
scwin.f_RetrieveVessel = async function () {
  if (scwin.statusFlag == "C") {
    if (ed_mhvslcd.getValue() == "" && txt_mhvsl.getValue() == "" && ed_mhvyg.getValue() == "") {
      ds_ocHblhList.removeAll();
      ds_ocContList.removeAll();
      ds_ocMblhList.removeAll();
      ds_SeaCargoManifest.removeAll();
      ds_Master.removeAll();
      ds_House.removeAll();
      return;
    }
    var vRow = ds_vessel.getRowPosition() || 0;
    ds_vessel.setCellData(vRow, "kcomcd", scwin.hd_kcomcd);
    ds_vessel.setCellData(vRow, "mhio", scwin.hd_mhio);
    ds_vessel.setCellData(vRow, "inpid", scwin.userId);
    var e = await $c.sbm.execute($p, sbm_retrieveHouse);
    await scwin.ds_ocHblhList_onload();
    gr_ocHblhList.setFocusedCell(0, 1);
    scwin.sbm_retrieveHouse_submitdone(e);
    if (ds_ocHblhList.getRowCount() == 0 && ds_vessel.getRowCount() != 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    }
    ed_mheta.focus();
    ed_mhvslcd.focus();
  }
};
//-------------------------------------------------------------------------
// reset helpers
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_mhmblno]);
  cnd_ed_hhblno.setValue("");
  cnd_ed_mhmblno.setValue("");
  ds_hmhno.removeAll();
};
scwin.f_dataSetClear = function () {
  ds_vessel.removeAll();
  ds_ocHblhList.removeAll();
  ds_ocContList.removeAll();
  ds_ocMblhList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
  ds_SeaCargoManifest.removeAll();
  ds_Master.removeAll();
  ds_House.removeAll();
  ds_sellingDistribute.removeAll();
  ds_sellingDistributeTemp.removeAll();
  ds_selling.removeAll();
};

//-------------------------------------------------------------------------
// create/update/save/cancel/delete
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_FieldClear();
  ed_mhvslcd.setValue("");
  txt_mhvsl.setValue("");
  ed_mhvyg.setValue("");
  scwin.f_dataSetClear();
  scwin._insertRow(ds_vessel);
  scwin._insertRow(ds_ocMblhList);
  scwin.f_Set("CREATE");
  scwin.f_ContentsDisplay();
  rd_mhdanggb.setValue("N");
  rd_status.setSelectedIndex(0);
  ed_mhvslcd.focus();
};
scwin.f_Update = async function () {
  if (ed_mheta.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
  } else if (cnd_lc_mhno.getValue() == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Master B/L Information"]);
  } else {
    scwin.f_Set("UPDATE");
    scwin.f_ContentsDisplay();
    scwin.f_invoiceCheck();
    if (scwin.invoiceCheck == "1") {
      $c.gus.cfDisableObjects($p, [ed_mhbuyer, txt_mhbuyernm, img_PopUp3]);
    } else {
      $c.gus.cfEnableObjects($p, [ed_mhbuyer, txt_mhbuyernm, img_PopUp3]);
    }
    ed_mhvslcd.focus();
  }
};
scwin.f_Save = async function () {
  if (ds_ocHblhList.getModifiedIndex().length > 0 || ds_ocMblhList.getModifiedIndex().length > 0) {
    if (await scwin.f_validate()) {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        if (scwin.statusFlag == "C") {
          var strClntNo = $c.str.trim($p, cnd_ed_mhmblno.getValue());
          var param1 = scwin.hd_kcomcd;
          var param2 = strClntNo;
          ds_retrieve.set("mheta", ed_mheta.getValue());
          ds_retrieve.set("hhblno", "");
          await $c.sbm.execute($p, sbm_createMhno);
          ds_hmhno.removeAll();
          scwin._insertRow(ds_hmhno);
          var hRow = ds_hmhno.getRowPosition();
          ds_hmhno.setCellData(hRow, "code", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
          ds_hmhno.setCellData(hRow, "name", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
          cnd_lc_mhno.setSelectedIndex(0);
          for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
            var vChkYn = ds_ocHblhList.getCellData(i, "chk");
            ds_ocHblhList.setCellData(i, "mhno", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
            ds_ocHblhList.setCellData(i, "hhmblno", cnd_ed_mhmblno.getValue());
            ds_ocHblhList.setCellData(i, "chk", vChkYn);
            ds_ocHblhList.setCellData(i, "inpid", scwin.userId);
            ds_ocHblhList.modifyRowStatus(i, "C");
            if (ds_ocMblhList.getCellData(0, "mhwarecd") != "") {
              ds_ocHblhList.setCellData(i, "hhwarecd", ds_ocMblhList.getCellData(0, "mhwarecd"));
              ds_ocHblhList.setCellData(i, "hhwarenm", ds_ocMblhList.getCellData(0, "mhwarenm"));
            }
            if (ds_ocMblhList.getCellData(0, "mhetd") != "") {
              ds_ocHblhList.setCellData(i, "hhetd", ds_ocMblhList.getCellData(0, "mhetd"));
            }
            if (ds_ocMblhList.getCellData(0, "mheta") != "") {
              ds_ocHblhList.setCellData(i, "hheta", ds_ocMblhList.getCellData(0, "mheta"));
            }
          }
          var mRow = ds_ocMblhList.getRowPosition() || 0;
          ds_ocMblhList.setCellData(mRow, "kcomcd", scwin.hd_kcomcd);
          ds_ocMblhList.setCellData(mRow, "mhio", scwin.hd_mhio);
          ds_ocMblhList.setCellData(mRow, "mhno", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
          ds_ocMblhList.setCellData(mRow, "inpid", scwin.userId);
          for (var j = 0; j < ds_selling.getRowCount(); j++) {
            ds_selling.setCellData(j, "mhno", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
            ds_selling.setCellData(j, "blno", ds_ocMblhList.getCellData(mRow, "mhmblno"));
          }
        } else if (scwin.statusFlag == "U") {
          for (var k = 0; k < ds_ocHblhList.getRowCount(); k++) {
            var vChkYnU = ds_ocHblhList.getCellData(k, "chk");
            ds_ocHblhList.setCellData(k, "mhno", cnd_lc_mhno.getValue());
            ds_ocHblhList.setCellData(k, "hhmblno", cnd_ed_mhmblno.getValue());
            ds_ocHblhList.setCellData(k, "chk", vChkYnU);
            ds_ocHblhList.setCellData(k, "inpid", scwin.userId);
            if (ds_ocMblhList.getCellData(0, "mhwarecd") != "") {
              ds_ocHblhList.setCellData(k, "hhwarecd", ds_ocMblhList.getCellData(0, "mhwarecd"));
              ds_ocHblhList.setCellData(k, "hhwarenm", ds_ocMblhList.getCellData(0, "mhwarenm"));
            }
            if (ds_ocMblhList.getCellData(0, "mhetd") != "") {
              ds_ocHblhList.setCellData(k, "hhetd", ds_ocMblhList.getCellData(0, "mhetd"));
            }
            if (ds_ocMblhList.getCellData(0, "mheta") != "") {
              ds_ocHblhList.setCellData(k, "hheta", ds_ocMblhList.getCellData(0, "mheta"));
            }
          }
          for (var m = 0; m < ds_selling.getRowCount(); m++) {
            ds_selling.setCellData(m, "mhno", cnd_lc_mhno.getValue());
            ds_selling.setCellData(m, "blno", cnd_ed_mhmblno.getValue());
          }
          var orgMhMrnNo = ds_ocMblhList.getOrgCellData ? ds_ocMblhList.getOrgCellData(0, "mhmrnno") : ds_ocMblhList.getCellData(0, "mhmrnno");
          var orgEdiLiner = ds_ocMblhList.getOrgCellData ? ds_ocMblhList.getOrgCellData(0, "mhediliner") : ds_ocMblhList.getCellData(0, "mhediliner");
          if (orgMhMrnNo != ds_ocMblhList.getCellData(0, "mhmrnno") || orgEdiLiner != ds_ocMblhList.getCellData(0, "mhediliner")) {
            ds_SeaCargoManifest.removeAll();
            ds_Master.removeAll();
            ds_House.removeAll();
            $c.sbm.execute($p, sbm_deleteSeaCargoManifest);
          }
        }
        scwin.f_chkDataLength();
        await $c.sbm.execute($p, sbm_save);
        await $c.gus.cfAlertMsg($p, "Data was saved successfully.");
        await scwin.f_Retrieve();
        scwin.f_Set("SAVE");
        scwin.f_ContentsDisplay();
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House B/L"]);
    return;
  }
};
scwin.f_Cancel = function () {
  if (scwin.statusFlag == "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    ds_vessel.undoAll();
    scwin.f_cancelRow(1);
    ds_ocContList.undoAll();
    ds_ocMblhList.undoAll();
  }
  scwin.f_ContentsDisplay();
  ed_shhcust.setValue("");
  txt_shhcustnm.setValue("");
  cnd_ed_hhblno.focus();
};
scwin.f_Delete = async function () {
  if (cnd_lc_mhno.getValue() == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  }
  scwin.f_invoiceCheck();
  if (scwin.invoiceCheck == "1") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
    return;
  }
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    ds_retrieve.set("odrNo", ds_ocMblhList.getCellData(0, "odrNo"));
    var hRow = ds_ocHblhList.getRowPosition() || 0;
    ds_ocHblhList.setCellData(hRow, "inpid", scwin.userId);
    ds_SeaCargoManifest.modifyAllStatus("D");
    ds_Master.modifyAllStatus("D");
    ds_House.modifyAllStatus("D");
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.f_chkOpenCommonPopUpGrid = async function (type, gubun, ds, row, codeCol, nameCol, pWinCloseTF, pAllSearchTF = 'F', pNoDataCloseTF = 'F') {
  var codeVal = codeCol ? ds.getCellData(row, codeCol).trim() : '';
  var nameVal = nameCol ? ds.getCellData(row, nameCol).trim() : '';
  if (codeCol) ds.setCellData(row, codeCol, '');
  if (nameCol) ds.setCellData(row, nameCol, '');
  if (type == 'CODE') {
    if (codeVal == '') return;
  } else if (type == 'NMAE') {
    if (nameVal == '') return;
  }
  return new Promise(function (resolve, reject) {
    if (type == 'CODE') {
      scwin.f_PopUpGrid(gubun, row, codeVal, '', pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    } else if (type == 'NAME') {
      scwin.f_PopUpGrid(gubun, row, '', nameVal, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    } else {
      scwin.f_PopUpGrid(gubun, row, codeVal, nameVal, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    }
  });
};
scwin.f_chkOpenCommonPopUp = async function (type, gubun, codeObj, nameObj, pWinCloseTF, pAllSearchTF = 'F', pNoDataCloseTF = 'F') {
  var codeVal = codeObj ? codeObj.getValue().trim() : '';
  var nameVal = nameObj ? nameObj.getValue().trim() : '';
  if (codeObj) codeObj.setValue("");
  if (nameObj) nameObj.setValue("");
  if (type == 'CODE') {
    if (codeVal == '') return;
  } else if (type == 'NMAE') {
    if (nameVal == '') return;
  }
  return new Promise(function (resolve, reject) {
    if (type == 'CODE') {
      scwin.f_OpenCommonPopUp(gubun, codeVal, '', pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    } else if (type == 'NAME') {
      scwin.f_OpenCommonPopUp(gubun, '', nameVal, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    } else {
      scwin.f_OpenCommonPopUp(gubun, codeVal, nameVal, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, {
        callback: resolve
      });
    }
  });
};
scwin.f_OpenCommonPopUp = function (gubun, pCode, pName, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, options) {
  function openCommon(args) {
    udc_ilcomCode.setSelectId(args.selectId);
    udc_ilcomCode.ilCommonPopUp(args.onReturn, args.codeValue || "", args.nameValue || "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || "F");
  }
  switch (gubun) {
    case "Liner":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,EDI,CRN",
        widths: "140,300,100,100,100,100,100,,100,100",
        hideCols: "8",
        winTitle: "Liner search,Liner Code,Liner Name",
        onReturn: function (rtnList, r) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhlinercd, txt_mhlinernm);
          if (rtnList && rtnList[6] != "N/A") {
            ed_mhediliner.setValue(rtnList[8] || "");
          }
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Shipper":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        winTitle: "Shipper search,Shipper Code,Shipper Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhscd, txt_mhsnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Consignee":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        winTitle: "Consignee search,Consignee Code,Consignee Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhccd, txt_mhcnm);
          if (ed_mhccd.getValue() != "" && scwin.statusFlag == "C") {
            ed_mhncd.setValue(ed_mhccd.getValue());
            txt_mhnnm.setValue(txt_mhcnm.getValue());
          }
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Notify":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        winTitle: "Notify search,Notify Code,Notify Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhncd, txt_mhnnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Customer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        winTitle: "Customer search,Customer Code,Customer Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_shhcust, txt_shhcustnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "CustomHouse":
      openCommon({
        selectId: "retrieveCustomInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "관할세관 Code, 관할세관 Name",
        widths: "130,300",
        hideCols: "3,4,5,6,7,8,9,10",
        winTitle: "관할세관 Search,관할세관 Code, 관할세관 Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_custom, ed_customnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "CustomHouseDept":
      openCommon({
        selectId: "retrieveCustomSectionInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "세관과 Code, 세관과 Name",
        widths: "130,300",
        hideCols: "3,4,5,6,7,8,9,10",
        winTitle: "세관과 Search,세관과 Code, 세관과 Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_depart, ed_departnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Vessel":
      openCommon({
        selectId: "retrieveOrdVsslInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Vessel,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhvslcd, txt_mhvsl);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "DEPT":
      openCommon({
        selectId: "retrieveOpDeptCdInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "DEPT,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhbuyer, txt_mhbuyernm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Loading":
      openCommon({
        selectId: "retrievePortInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Loading,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhlodcd, txt_mhlodnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Discharge":
      openCommon({
        selectId: "retrievePortInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Discharge,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhdisccd, txt_mhdiscnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Delivery":
      openCommon({
        selectId: "retrievePortInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Delivery,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhdlvcd, txt_mhdlvnm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Area":
      openCommon({
        selectId: "retrievePortInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "6",
        titles: "Code, Name,,,, UNCODE",
        widths: "80,160,,,,80",
        hideCols: "3,4,5,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Area,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mharea, txt_mhareanm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Item":
      openCommon({
        selectId: "retrieveCommGoodsInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Item,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhitem, txt_mhitemNm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "ContainerType1":
      openCommon({
        selectId: "retriveContainerTypeCodeInfo",
        codeValue: pCode,
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Type,Code,Name",
        noDataTF: "F",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt1type, "");
          $c.gus.cfSetReturnValue($p, rtnList, ed_fhhcnt1type, "");
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "ContainerType2":
      openCommon({
        selectId: "retriveContainerTypeCodeInfo",
        codeValue: pCode,
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Type,Code,Name",
        noDataTF: "F",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt2type, "");
          $c.gus.cfSetReturnValue($p, rtnList, ed_fhhcnt2type, "");
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "ContainerType3":
      openCommon({
        selectId: "retriveContainerTypeCodeInfo",
        codeValue: pCode,
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Type,Code,Name",
        noDataTF: "F",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt3type, "");
          $c.gus.cfSetReturnValue($p, rtnList, ed_fhhcnt3type, "");
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "ContainerType4":
      openCommon({
        selectId: "retriveContainerTypeCodeInfo",
        codeValue: pCode,
        nameValue: "",
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Type,Code,Name",
        noDataTF: "F",
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt4type, "");
          $c.gus.cfSetReturnValue($p, rtnList, ed_fhhcnt4type, "");
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "Warehouse":
      openCommon({
        selectId: "retrieveBondZoneRound",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Warehouse,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_hhwarecd, txt_hhwarenm);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
  }
};

//-------------------------------------------------------------------------
// grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, rowIndex, pCode, pName, pWinCloseTF, pAllSearchTF, options) {
  function openCommon(args) {
    udc_ilcomCode.setSelectId(args.selectId);
    udc_ilcomCode.ilCommonPopUp(args.onReturn, args.codeValue || "", args.nameValue || "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || "F", args.winTitle || "", args.noDataTF || "F");
  }
  switch (disGubun) {
    case "SellingCustomer":
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "10",
        titles: "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
        widths: "140,300,100,100,100,100,100,,,100",
        hideCols: "8,9",
        allTF: pAllSearchTF,
        winTitle: "Customer search,Customer Code,Customer Name",
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_selling, rowIndex, "bilgClntNo", "bilgClntNm");
          gr_selling.setFocusedCell(rowIndex, "fareEngCd", true);
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
    case "SellingFcode":
      openCommon({
        selectId: "retriveFreightCodeInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "S,1",
        allTF: pAllSearchTF,
        winTitle: "FCode,Code,Name",
        noDataTF: "F",
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_selling, rowIndex, "fareEngCd", "fareEngNm");
          if (rtnList) {
            ds_selling.setCellData(rowIndex, "sellItemCd", rtnList[3] || "");
            ds_selling.setCellData(rowIndex, "fareGrpCd", rtnList[5] || "");
            ds_selling.setCellData(rowIndex, "vatYn", rtnList[7] || "");
            if (rtnList[9] == "1") {
              ds_selling.setCellData(rowIndex, "crcCd", "KRW");
            } else {
              ds_selling.setCellData(rowIndex, "crcCd", lc_shhcucd.getValue());
            }
            if (ds_selling.getCellData(rowIndex, "fareEngCd") == "OCF") {
              ds_selling.setCellData(rowIndex, "crcCd", "USD");
            }
            var fareCd = ds_selling.getCellData(rowIndex, "fareEngCd");
            if (fareCd == "DOC" || fareCd == "DOCV" || fareCd == "DOF" || fareCd == "DOFV" || fareCd == "INSU" || fareCd == "HDC" || fareCd == "HDCV" || fareCd == "CCFV" || fareCd == "CCF") {
              ds_selling.setCellData(rowIndex, "fareUnit", "CASE");
              ds_selling.setCellData(rowIndex, "chgWt", "1");
            }
          }
          if (options && options.callback) options.callback(rtnList);
        }
      });
      break;
  }
};

//-------------------------------------------------------------------------
// print/EDI/util
//-------------------------------------------------------------------------
scwin.f_Print = async function () {
  if (!(await scwin.f_SendEDI_Before(1))) {
    return false;
  }
  ds_search.set("mrnno", ds_ocMblhList.getCellData(0, "mhmrnno"));
  ds_search.set("etd", ds_ocMblhList.getCellData(0, "mhetd"));
  ds_search.set("eta", ds_ocMblhList.getCellData(0, "mheta"));
  ds_search.set("vsl", ds_ocHblhList.getCellData(0, "hhvsl"));
  ds_search.set("voy", ds_ocHblhList.getCellData(0, "hhvyg"));
  ds_search.set("kcomcd", scwin.hd_kcomcd);
  ds_search.set("liner", ds_ocMblhList.getCellData(0, "mhlinercd"));
  ds_search.set("ediliner", ds_ocMblhList.getCellData(0, "mhediliner"));
  ds_search.set("mhstdt", ds_ocMblhList.getCellData(0, "mheta"));
  ds_search.set("mhno", ds_ocMblhList.getCellData(0, "mhno"));
  await $c.sbm.execute($p, sbm_ReportPrint);
  scwin.f_print2();
};
scwin.f_print2 = async function () {
  let data = {
    reportName: "/il/ediam/sc_ed_101_01_02.ozr",
    odiName: "sc_ed_101_01_01",
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      MRNNO: ds_ocMblhList.getCellData(0, "mhmrnno"),
      EDILINER: ds_ocMblhList.getCellData(0, "mhediliner"),
      MHNO: ds_ocMblhList.getCellData(0, "mhno"),
      USERID: scwin.userId
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,

      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode : "print" // 인쇄 옵션창 표시 없이 바로 출력 (모드 쓰지말 것!!)
    },
    formParam: {}
  };
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
scwin.f_seaCargoManifestCnt = function () {
  if (ds_SeaCargoManifestCount.getRowCount() == 0) {
    scwin._insertRow(ds_SeaCargoManifestCount);
  }
  var param1 = scwin.hd_kcomcd;
  var param2 = ds_ocMblhList.getCellData(0, "mhmrnno");
  var param3 = ds_ocMblhList.getCellData(0, "mhediliner");
  var param4 = ds_ocMblhList.getCellData(0, "mhno");
  scwin.comCode(ds_SeaCargoManifestCount, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaCargoManifestEBC&queryId=retrieveSeaCargoManifestYn&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4);
};
scwin.f_SendEDI_Before = async function (flag) {
  scwin.f_seaCargoManifestCnt();
  var seaCargoYn = ds_SeaCargoManifestCount.getCellData(0, "code");
  var status = 0;
  if (seaCargoYn != "0") {
    status = "U";
    scwin.f_seaCargoManifestSet("U");
  } else {
    status = "C";
    scwin.f_seaCargoManifestSet("C");
  }
  for (var i = 0; i < ds_House.getRowCount(); i++) {
    ds_House.modifyRowStatus(i, "C");
    ds_House.setCellData(i, "edigubun", "I");
  }
  await $c.sbm.execute($p, sbm_BLcheck);
  for (var j = 0; j < ds_House.getRowCount(); j++) {
    ds_House.modifyRowStatus(j, status);
    ds_House.setCellData(j, "edigubun", "S");
  }
  if (ds_BLcheck.getCellData(0, "flag") == -1) {
    var errMsg = "MBL NO (" + ds_BLcheck.getCellData(0, "mblno") + ") / HBL NO (" + ds_BLcheck.getCellData(0, "hblno") + ") / " + ds_BLcheck.getCellData(0, "descnm");
    await $c.gus.cfAlertMsg($p, "Please check " + errMsg + ".");
    return false;
  }
  if (ds_ocMblhList.getCellData(0, "mhmblno") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["MBL NO"]);
    return false;
  }
  if (ds_ocMblhList.getCellData(0, "mhmrnno") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["MRN No"]);
    return false;
  }
  if (ds_ocMblhList.getCellData(0, "mhmsnno") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["MSN No"]);
    return false;
  }
  if (ds_SeaCargoManifest.getCellData(0, "ediliner") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["Edi Liner"]);
    return false;
  }
  if (ds_SeaCargoManifest.getCellData(0, "custom") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["관할세관"]);
    return false;
  }
  if (ds_SeaCargoManifest.getCellData(0, "depart") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["세관과"]);
    return false;
  }
  if (flag == 0) {
    await $c.sbm.execute($p, sbm_saveSeaCargoManifest);
    await scwin.f_SendEDI();
  }
  if (flag == 1) {
    await $c.sbm.execute($p, sbm_saveSeaCargoManifest_print);
    await scwin.f_Retrieve();
  }
  return true;
};
scwin.f_SendEDI = async function () {
  scwin.comCode(ds_customerInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveMfcsCrn&param1=" + ds_ocMblhList.getCellData(0, "mhmrnno") + "&param2=" + ds_ocMblhList.getCellData(0, "mhno"));
  if (ds_customerInfo.getCellData(0, "COL1") > 0) {
    if (!(await $c.win.confirm($p, "Consignee 사업자번호가 공란상태입니다.\n이대로 전송하려면 \"확인\", \n보완 후 전송하려면 \"취소\"를 선택하세요."))) {
      return false;
    }
  }
  ds_SendEDI.removeAll();
  scwin._insertRow(ds_SendEDI);
  var eRow = ds_SendEDI.getRowPosition();
  ds_SendEDI.setCellData(eRow, "kcomcd", scwin.hd_kcomcd);
  ds_SendEDI.setCellData(eRow, "mrnno", ds_SeaCargoManifest.getCellData(0, "mrnno"));
  ds_SendEDI.setCellData(eRow, "ediliner", ds_SeaCargoManifest.getCellData(0, "ediliner"));
  ds_SendEDI.setCellData(eRow, "mhno", ds_SeaCargoManifest.getCellData(0, "mhno"));
  ds_SendEDI.setCellData(eRow, "gubun", "SeaCargoManifest");
  await $c.sbm.execute($p, sbm_SendEDI);
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_018);
  await scwin.f_Retrieve();
  scwin.f_Set("SAVE");
  scwin.f_ContentsDisplay();
};
scwin.f_ktNetOpen = function () {
  var sURL = "http://www.ctradeworld.com/ctwpass/userLoginChk.jsp?userid=FSDBEX0001&userpass=DBEX0001";
  window.open(sURL);
};
scwin.f_uLogisHubOpen = function () {
  var sURL = "https://www.ulogishub.com/gate_url.jsp?sid=FSDBEX0001&password=dbex1234!";
  window.open(sURL);
};
scwin.f_plismOpen = function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var fulldate = "" + yyyy + mm + dd;
  var checkNum = 0;
  for (var i = 0; i < fulldate.length; i++) {
    checkNum += parseInt(fulldate.substring(i, i + 1), 10);
  }
  checkNum = checkNum % 5;
  var certiKeyI = "UjBOeFdrUjZkbmt4VVhSTFJscE5NVlp3YmpGMksyVmhSMFp4TW1aUllqVk1ORFZFY0VoeVJEaDNORDA9";
  var certiKeyO = "V0ZvcmQwRnlLMlYzZDFkQ0sxY3dTbWRvVVZwcVZpdHlLMUZvSzFka2RUWlZUVzhyVW5GemRFdGxVVDA9";
  var sURL = "";
  if (ed_mhmrnno.getValue() != "") {
    sURL = "https://www.plism.com/webLinkCertService.do?serviceId=KMCS_0011&certifyKey=" + certiKeyI + "&userId=DBE123&mrn=" + ed_mhmrnno.getValue();
  } else {
    sURL = "https://www.plism.com/webLinkCertService.do?serviceId=KMCS_0011&certifyKey=" + certiKeyO + "&userId=DBE123&date=" + fulldate + "&checkNum=" + checkNum;
  }
  window.open(sURL);
};
scwin.f_seaCargoManifestSet = function (flag) {
  if (ds_SeaCargoManifest.getRowCount() == 0) {
    scwin._insertRow(ds_SeaCargoManifest);
  }

  // ds_SeaCargoManifest
  ds_SeaCargoManifest.setCellData(0, "kcomcd", scwin.hd_kcomcd);
  ds_SeaCargoManifest.setCellData(0, "mrnno", ds_ocMblhList.getCellData(0, "mhmrnno"));
  ds_SeaCargoManifest.setCellData(0, "mhno", ds_ocMblhList.getCellData(0, "mhno"));
  ds_SeaCargoManifest.setCellData(0, "mrnseq", "");
  ds_SeaCargoManifest.setCellData(0, "ediliner", ds_ocMblhList.getCellData(0, "mhediliner"));
  ds_SeaCargoManifest.setCellData(0, "liner", ds_ocMblhList.getCellData(0, "mhlinercd"));
  ds_SeaCargoManifest.setCellData(0, "linernm", ds_ocMblhList.getCellData(0, "mhlinernm"));
  ds_SeaCargoManifest.setCellData(0, "fwdcd", scwin.hd_kcomcd);
  ds_SeaCargoManifest.setCellData(0, "fwdnm", "");
  ds_SeaCargoManifest.setCellData(0, "vessel", ds_ocHblhList.getCellData(0, "hhvsl"));
  ds_SeaCargoManifest.setCellData(0, "voyage", ds_ocHblhList.getCellData(0, "hhvyg"));
  ds_SeaCargoManifest.setCellData(0, "lodcd", ds_ocMblhList.getCellData(0, "mhdisccd"));
  ds_SeaCargoManifest.setCellData(0, "lodnm", ds_ocMblhList.getCellData(0, "mhdiscnm"));
  ds_SeaCargoManifest.setCellData(0, "dt", ds_ocMblhList.getCellData(0, "mheta")); //eta
  ds_SeaCargoManifest.setCellData(0, "custom", ds_ocMblhList.getCellData(0, "custom")); //관할세관
  ds_SeaCargoManifest.setCellData(0, "customnm", ds_ocMblhList.getCellData(0, "customnm")); //관할세관명
  ds_SeaCargoManifest.setCellData(0, "depart", ds_ocMblhList.getCellData(0, "depart")); //세관과
  ds_SeaCargoManifest.setCellData(0, "departnm", ds_ocMblhList.getCellData(0, "departnm")); //세관과명
  ds_SeaCargoManifest.setCellData(0, "tdt", ""); //전송일
  ds_SeaCargoManifest.setCellData(0, "userid", scwin.userId);
  ds_SeaCargoManifest.setCellData(0, "userdt", "");
  ds_SeaCargoManifest.setCellData(0, "hblCnt", scwin.hd_hblCnt);
  ds_SeaCargoManifest.setCellData(0, "mblCnt", '1');
  ds_SeaCargoManifest.setCellData(0, "tWgt", ed_mhwgt.getValue());
  ds_SeaCargoManifest.setCellData(0, "tMsr", ed_mhmsr.getValue());
  ds_SeaCargoManifest.setCellData(0, "tPkg", ed_mhpkg.getValue());
  ds_SeaCargoManifest.setCellData(0, "iogb", scwin.hd_mhio);
  ds_SeaCargoManifest.modifyAllStatus(flag);

  //ds_Master
  ds_Master.setCellData(0, "kcomcd", scwin.hd_kcomcd);
  ds_Master.setCellData(0, "mrnno", ds_ocMblhList.getCellData(0, "mhmrnno"));
  ds_Master.setCellData(0, "msnno", ds_ocMblhList.getCellData(0, "mhmsnno"));
  ds_Master.setCellData(0, "mblno", ds_ocMblhList.getCellData(0, "mhmblno"));
  ds_Master.setCellData(0, "wgt", ds_ocMblhList.getCellData(0, "mhwgt"));
  ds_Master.setCellData(0, "msr", ds_ocMblhList.getCellData(0, "mhmsr"));
  ds_Master.setCellData(0, "pkg", ds_ocMblhList.getCellData(0, "mhpkg"));
  ds_Master.setCellData(0, "mhno", ds_ocMblhList.getCellData(0, "mhno"));
  ds_Master.setCellData(0, "ediLiner", ds_ocMblhList.getCellData(0, "mhediliner"));
  ds_Master.modifyAllStatus(flag);
  var hsncnt = 0;
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    if (ds_House.getRowCount() - 1 < i) {
      ds_House.insertRow();
    }
    ds_House.setCellData(hsncnt, "kcomcd", scwin.hd_kcomcd);
    ds_House.setCellData(hsncnt, "mrnno", ds_ocMblhList.getCellData(0, "mhmrnno"));
    ds_House.setCellData(hsncnt, "hsnno", ds_ocHblhList.getCellData(i, "hsnno"));
    ds_House.setCellData(hsncnt, "mblno", ds_ocMblhList.getCellData(0, "mhmblno"));
    ds_House.setCellData(hsncnt, "hblno", ds_ocHblhList.getCellData(i, "hhblno"));
    ds_House.setCellData(hsncnt, "wgt", ds_ocHblhList.getCellData(i, "hhgwgt"));
    ds_House.setCellData(hsncnt, "msr", ds_ocHblhList.getCellData(i, "hhmsr"));
    ds_House.setCellData(hsncnt, "pkg", ds_ocHblhList.getCellData(i, "hhpkg"));
    ds_House.setCellData(hsncnt, "ediliner", ds_ocMblhList.getCellData(0, "mhediliner"));
    ds_House.setCellData(hsncnt, "mhno", ds_ocMblhList.getCellData(0, "mhno"));
    ds_House.setCellData(hsncnt, "hhmitem2", ds_ocHblhList.getCellData(i, "hhmitem2"));
    ds_House.setCellData(hsncnt, "hsnno", hsncnt + 1);
    ds_House.modifyRowStatus(hsncnt, flag);
    hsncnt++;
  }
};
scwin.f_DetailInfoRetrieve = async function () {
  ds_search.set("mrnno", ds_ocMblhList.getCellData(0, "mhmrnno"));
  ds_search.set("etd", ds_ocMblhList.getCellData(0, "mhetd"));
  ds_search.set("eta", ds_ocMblhList.getCellData(0, "mheta"));
  ds_search.set("vsl", ds_ocHblhList.getCellData(0, "hhvsl"));
  ds_search.set("voy", ds_ocHblhList.getCellData(0, "hhvyg"));
  ds_search.set("kcomcd", scwin.hd_kcomcd);
  ds_search.set("liner", ds_ocMblhList.getCellData(0, "mhlinercd"));
  ds_search.set("ediliner", ds_ocMblhList.getCellData(0, "mhediliner"));
  ds_search.set("mhstdt", ds_ocMblhList.getCellData(0, "mheta"));
  ds_search.set("mhno", ds_ocMblhList.getCellData(0, "mhno"));
  ds_search.set("status", ds_ocMblhList.getCellData(0, "status"));
  ds_search.set("iogb", scwin.hd_mhio);
  await $c.sbm.execute($p, sbm_retrieveSeaCargoManifest);
  ed_tDt.setValue(ds_SeaCargoManifest.getCellData(0, "tdt"));
};
scwin._getCommonParam = function () {
  return {
    kcomcd: $c.str.trim($p, scwin.hd_kcomcd),
    iogb: $c.str.trim($p, scwin.hd_mhio),
    mhno: $c.str.trim($p, cnd_lc_mhno.getValue()),
    blno: $c.str.trim($p, cnd_ed_hhblno.getValue()),
    mblno: $c.str.trim($p, cnd_ed_mhmblno.getValue())
  };
};
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};
scwin.f_openPgm = function (name) {
  var commonParam = scwin._getCommonParam();
  switch (name) {
    case "Partner":
      scwin._openMenu("Partner Invoice", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        seaair: "S",
        iogb: commonParam.iogb,
        blno: "",
        mblno: commonParam.mblno,
        mhno: commonParam.mhno
      });
      break;
    case "Profit":
      scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        seaair: "S",
        iogb: commonParam.iogb,
        blno: commonParam.blno,
        mblno: "",
        mhno: commonParam.mhno
      });
      break;
    case "paymentINV":
      scwin._openMenu("Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        seaair: "S",
        iogb: commonParam.iogb,
        blno: "",
        mblno: commonParam.mblno,
        mhno: commonParam.mhno
      });
      break;
    case "MasterFreight":
      scwin._openMenu("Import Master B/L Freight", "/ui/il/seainb/sibl/se_202_01_02b.xml", "se_202_01_02b.xml", {
        linkcheck: "6",
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    case "HouseBLFind":
      scwin._openMenu("House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.xml", {
        hhio: commonParam.iogb
      });
      break;
    case "SRPrint":
      scwin._openMenu("Shipping Request", "/ui/il/seaout/soth/se_109_01_01b.xml", "se_109_01_01b.xml", {
        kcomcd: commonParam.kcomcd,
        blno: commonParam.blno,
        mhno: commonParam.mhno
      });
      break;
    case "MasterBLFind":
      scwin._openMenu("Master B/L Search", "/ui/il/seaout/sobl/se_106_01_02b.xml", "se_106_01_02b.xml", {
        mhio: commonParam.iogb
      });
      break;
  }
};
scwin.f_MhnoLoading = function () {
  var strClntNo = $c.str.trim($p, cnd_ed_hhblno.getValue());
  if (strClntNo.length > 0) {
    scwin.comCode(ds_hmhno, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + strClntNo);
    if (ds_hmhno.getRowCount() == 0) scwin.ds_hmhno_onload();
  } else {
    cnd_lc_mhno.setValue("");
  }
};
scwin.f_invoiceCheck = function () {
  scwin.invoiceCheck = "0";
  var strClntNo = $c.str.trim($p, ed_odrNo.getValue());
  if (strClntNo.length == 0) return;
  var param1 = strClntNo;
  scwin.comCode(ds_invoiceCheck, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportHouseEBC&queryId=retriveInvoiceCheckCombo&param1=" + param1);
  if (ds_invoiceCheck.getCellData(0, "code") != "0") {
    scwin.invoiceCheck = "1";
  }
};
scwin.f_CndMhmblnoLoading = function () {
  var strClntNo = $c.str.trim($p, cnd_ed_mhmblno.getValue());
  var param1 = scwin.hd_kcomcd;
  var param2 = strClntNo;
  scwin.comCode(ds_cndmhmblno, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportMasterEBC&queryId=retriveMasterBlListCombo&param1=" + param1 + "&param2=" + param2);
  if (ds_cndmhmblno.getRowCount() == 0) {
    ds_hmhno.removeAll();
    scwin._insertRow(ds_hmhno);
    ds_hmhno.setCellData(0, "code", "NONE");
    ds_hmhno.setCellData(0, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  } else {
    ds_hmhno.removeAll();
    for (var i = 0; i < ds_cndmhmblno.getRowCount(); i++) {
      scwin._insertRow(ds_hmhno);
      ds_hmhno.setCellData(i, "code", ds_cndmhmblno.getCellData(i, "code"));
      ds_hmhno.setCellData(i, "name", ds_cndmhmblno.getCellData(i, "name"));
    }
    cnd_lc_mhno.setSelectedIndex(0);
  }
};
scwin.f_departmentChange = async function () {
  if ($c.str.trim($p, ed_mhbuyer.getValue()) != "") {
    var opt = {
      width: "460",
      height: "280",
      id: "popDeptChange",
      modal: true
    };
    var data = {
      pdept: $c.str.trim($p, ed_mhbuyer.getValue()),
      pdeptnm: $c.str.trim($p, txt_mhbuyernm.getValue())
    };
    var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml", opt, data);
    if (rtnList && rtnList[1]) {
      ds_DeptChangeParam.setJSON([{
        modrNo: ds_ocMblhList.getCellData(0, "odrNo"),
        hodrNo: "",
        kcomcd: scwin.hd_kcomcd,
        bulkGb: "",
        dept: rtnList[1],
        // 변경할 부서코드
        deptnm: rtnList[2] // 변경할 부서 명
      }]);
      ds_DeptChangeParam.modifyAllStatus("C");
    }
    if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
      await $c.sbm.execute($p, sbm_DeptChange);
      var spMsg = ds_DeptChangeResult.getCellData(0, "spMsg");
      var spRtn = ds_DeptChangeResult.getCellData(0, "spRtn");
      //변경 성공
      if (spRtn == "0") {
        txt_mhbuyernm.setValue(rtnList[2].trim());
        ed_mhbuyer.setValue(rtnList[1].trim());
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_009);
      } else {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_008);
      }
    }
  }
};
scwin.f_trimVsl = function () {
  txt_mhvsl.setValue($c.str.trim($p, txt_mhvsl.getValue()));
};
scwin.f_divPlus = function (grid) {
  $c.gus.cfGrdHeiht($p, grid, 30);
};
scwin.f_divMinus = function (grid) {
  $c.gus.cfGrdHeiht($p, grid, -30);
};
scwin.f_initSetTab = function () {
  //$c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
  tab_main.setSelectedTabIndex(0);
};
scwin.f_selectTabMenu = function (idx) {
  switch (idx) {
    case 0:
      scwin.tab_gb = 0;
      break;
    case 1:
      scwin.tab_gb = 1;
      break;
  }
  tab_main.setSelectedTabIndex(idx);
};
scwin.f_ExrateLoading = function (param1, param2, param3) {
  if (param1.length > 0) {
    if (param1 == "KRW") param1 = "USD";
    scwin.comCode(ds_ExRate, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveExRate&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3);
  }
};
scwin.f_CurrencyLoading = function () {
  scwin.comCode(ds_currencyCode, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCurrencyCodeList");
};
scwin.f_RunExcel = async function (varGrNm) {
  var grid = $c.gus.object($p, varGrNm);
  if (!grid) return;
  var dataId = grid.getDataList();
  var dataSet = $c.gus.object($p, dataId);
  if (!dataSet) return;
  if (dataSet.getRowCount() == 0) return;
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    var sheetTitle = "Container List_" + cnd_ed_hhblno.getValue();
    $c.data.downloadGridViewExcel($p, grid, sheetTitle, sheetTitle + ".xls", {
      startRowIndex: 2
    });
  }
};
scwin.f_CustomerChange = async function (disGubun) {
  var opt = {
    popupName: "Customer Change",
    width: "460",
    height: "280",
    id: "popCustChange",
    modal: true
  };
  var data = {};
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonCustomerChange.xml", opt, data);
  if (!rtnList) return;
  if (rtnList[0] == "N/A") {
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        for (var i = 0; i < ds_selling.getRowCount(); i++) {
          if ($c.str.trim($p, ds_selling.getCellData(i, "certiNo")) == "") {
            if (ds_selling.getCellData(i, "bilgClntNo") == rtnList[1]) {
              ds_selling.setCellData(i, "bilgClntNo", rtnList[3]);
              ds_selling.setCellData(i, "bilgClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// selling/distribute/tariff/util
//-------------------------------------------------------------------------
scwin.f_addRow = async function (disGubun) {
  disGubun = 1;
  switch (disGubun) {
    case 1:
      // House B/L
      if (ds_vessel.getRowCount() != 0) {
        if (ds_vessel.getCellData(0, "hhvslcd") == "" && ds_vessel.getCellData(0, "hhvsl") == "" && ds_vessel.getCellData(0, "hhvyg") == "") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
          return;
        }
      }
      var row = scwin._insertRow(ds_ocHblhList);
      ds_ocHblhList.setCellData(row, "kcomcd", scwin.hd_kcomcd);
      ds_ocHblhList.setCellData(row, "hhio", scwin.hd_mhio);
      ds_ocHblhList.setCellData(row, "chk", "T");
      gr_ocHblhList.setCellReadOnly(row, "hhblno", false);
      break;
  }
};
scwin.f_cancelRow = async function (disGubun) {
  disGubun = 1;
  switch (disGubun) {
    case 1:
      // House B/L
      ds_ocHblhList.undoAll();
      for (var i = ds_ocHblhList.getRowCount() - 1; i > -1; i--) {
        if (ds_ocHblhList.getRowStatus(i) == 'C') {
          ds_ocHblhList.removeRow(i);
        }
      }
      scwin.f_MasterSum();
      scwin.f_masterHouseBlList();
      break;
  }
};
scwin.f_validate = async function () {
  if (!$c.gus.cfValidate($p, [ed_mhetd, ed_mheta, ed_mheta])) {
    return false;
  }
  if (ed_mheta.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA"]);
    ed_mheta.focus();
    return false;
  }
  if (ed_mhbuyer.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department"]);
    ed_mhbuyer.focus();
    return false;
  }
  if (ed_mhitem.getValue() == "") {
    ed_mhitem.setValue("30000000");
    txt_mhitemNm.setValue("일반화물");
  }
  if (ed_mhetd.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_mhetd.getValue(), ed_mheta.getValue())) {
      await $c.win.alert($p, "ETD must be smaller than ETA.");
      return false;
    }
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  today = new Date();
  const str = ed_mhetd.getValue();
  const year = str.substring(0, 4);
  const month = str.substring(4, 6);
  const day = str.substring(6, 8);
  const mhetd = new Date(year, month - 1, day);
  const str1 = ed_mheta.getValue();
  const year1 = str1.substring(0, 4);
  const month1 = str1.substring(4, 6);
  const day1 = str1.substring(6, 8);
  const mheta = new Date(year1, month1 - 1, day1);
  if ($c.gus.cfMonthsBetween($p, today, mhetd) > 3) {
    $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  if ($c.gus.cfMonthsBetween($p, today, mheta) > 3) {
    $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if ($c.gus.cfYearsBetween($p, mhetd, today) > 3) {
    $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if ($c.gus.cfYearsBetween($p, mheta, today) > 3) {
    $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }
  cfDaysBetween = function (fromDate, toDate) {
    if (!fromDate || !toDate) return 0;
    const d1 = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    const d2 = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
    const diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  //ETA-ETD(transit time)가 150일을 초과할 수 없다.  *150일(총 운항DATE 수) : ETA날짜에서 ETD날짜를 빼고 +1 한 날짜 
  if (cfDaysBetween(mhetd, mheta) > 149) {
    $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }
  for (var i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getRowStatus(i) == "D") {
      if ("Y" == ds_selling.getCellData(i, "distributeYn")) {
        $c.win.alert($p, "배포취소 후 삭제하세요. \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  return true;
};
scwin.f_MasterSum = function () {
  var hhpkg = 0;
  var hhgwgt = 0;
  var hhmsr = 0;
  var hblCnt = 0;
  var hhmsrAll = 0;
  var hhmsrRate = 0;
  var hhmsrRateSum = 0;
  var hhmsrRateAdj = 0;
  ed_mhpkg.setValue("");
  ed_mhwgt.setValue("");
  ed_mhmsr.setValue("");
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    var vChkYn = ds_ocHblhList.getCellData(i, "chk");
    if (vChkYn == "T") {
      hhpkg = ds_ocHblhList.getCellData(i, "hhpkg");
      hhgwgt = ds_ocHblhList.getCellData(i, "hhgwgt");
      hhmsr = ds_ocHblhList.getCellData(i, "hhmsr");
      ed_mhpkg.setValue(Number(ed_mhpkg.getValue()) + Number(hhpkg));
      ed_mhwgt.setValue(Number(ed_mhwgt.getValue()) + Number(hhgwgt));
      ed_mhmsr.setValue(Number(ed_mhmsr.getValue()) + Number(hhmsr));
      hblCnt++;
    }
  }
  hd_hblCnt.setValue(hblCnt);
  //freight weight, measure
  ed_fhhgwgt.setValue(ed_mhwgt.getValue());
  ed_fhhmsr.setValue(ed_mhmsr.getValue());
  hhmsrAll = ed_mhmsr.getValue();
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    var vChkYn = ds_ocHblhList.getCellData(i, "chk");
    if (vChkYn == "T") {
      hhmsr = ds_ocHblhList.getCellData(i, "hhmsr");
      // 				hhmsrRate = (hhmsr/hhmsrAll*100).toFixed(2);
      if (hhmsrAll != "0") {
        hhmsrRate = Math.round(hhmsr / hhmsrAll * 100);
      } else {
        hhmsrRate = 0;
      }
      ds_ocHblhList.setCellData(i, "hhmsrrate", hhmsrRate);
      hhmsrRateSum = Number(hhmsrRateSum) + Number(hhmsrRate);
    } else {
      ds_ocHblhList.setCellData(i, "hhmsrrate", 0);
    }
  }
  hhmsrRateAdj = (100 - hhmsrRateSum).toFixed(2);
  for (var i = ds_ocHblhList.getRowCount(); i > 0; i--) {
    var vChkYn = ds_ocHblhList.getCellData(i, "chk");
    if (vChkYn == "T") {
      hhmsrRate = ds_ocHblhList.getCellData(i, "hhmsrrate");
      if (Number(hhmsrRate) > 0 && Number(hhmsrRate) + Number(hhmsrRateAdj) > 0) {
        ds_ocHblhList.setCellData(i, "hhmsrrate", Number(hhmsrRate) + Number(hhmsrRateAdj));
        break;
      }
    }
  }
};
scwin.f_masterHouseBlList = function () {
  var v_hhblno = "";
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    var vChkYn = ds_ocHblhList.getCellData(i, "chk");
    if (vChkYn == "T") {
      v_hhblno = v_hhblno + ds_ocHblhList.getCellData(i, "hhblno") + "','";
    }
  }
  if (v_hhblno.length >= 3) {
    v_hhblno = v_hhblno.substring(0, v_hhblno.length - 3);
  }
  var param1 = scwin.hd_kcomcd;
  var param2 = v_hhblno;
  scwin.comCode(ds_masterHouseBlList, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportMasterEBC&queryId=retrivematerHouseBlList&param1=" + param1 + "&param2=" + param2);
};
scwin.f_sellingUnitLoading = function () {
  var cnt1 = "0";
  var cnt2 = "0";
  var cnt3 = "0";
  var cnt4 = "0";
  if (ed_fhhcnt1type.getValue() != "" && ed_fhhcnt1.getValue() != "0") cnt1 = ed_fhhcnt1type.getValue();
  if (ed_fhhcnt2type.getValue() != "" && ed_fhhcnt2.getValue() != "0") cnt2 = ed_fhhcnt2type.getValue();
  if (ed_fhhcnt3type.getValue() != "" && ed_fhhcnt3.getValue() != "0") cnt3 = ed_fhhcnt3type.getValue();
  if (ed_fhhcnt4type.getValue() != "" && ed_fhhcnt4.getValue() != "0") cnt4 = ed_fhhcnt4type.getValue();
  scwin.comCode(ds_sellingUnit, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportHouseEBC&queryId=retriveUnitList&param1=" + cnt1 + "&param2=" + cnt2 + "&param3=" + cnt3 + "&param4=" + cnt4);
};
scwin.f_packageRateSellingLoading = function (row, colid, value) {
  var v_wgt = Number(ed_fhhgwgt.getValue() || 0) / 1000;
  var v_msr = Number(ed_fhhmsr.getValue() || 0);
  var v_wgtR = Math.ceil(v_wgt);
  var v_msrR = Math.ceil(v_msr);
  var wgt = 0;
  var msr = 0;
  var fareUnit = ds_selling.getCellData(row, "fareUnit");
  if (ds_selling.getCellData(row, "fareEngCd") == "WFG") {
    wgt = v_wgtR;
    msr = v_msrR;
  } else {
    wgt = v_wgt;
    msr = v_msr;
  }
  if (fareUnit == "WGT") {
    if (ds_selling.getCellData(row, "fareEngCd") == "WFG") {
      ds_selling.setCellData(row, "chgWt", Math.ceil(Number(ed_fhhgwgt.getValue())));
    } else {
      ds_selling.setCellData(row, "chgWt", ed_fhhgwgt.getValue());
    }
  } else if (fareUnit == "R/T") {
    if (v_wgt > v_msr) {
      ds_selling.setCellData(row, "chgWt", wgt);
    } else {
      ds_selling.setCellData(row, "chgWt", msr);
    }
  } else if (fareUnit == "CBM") {
    ds_selling.setCellData(row, "chgWt", msr);
  } else if (fareUnit == "M/T") {
    ds_selling.setCellData(row, "chgWt", ed_fhhgwgt.getValue() / 1000);
  } else if (fareUnit == "CASE") {
    ds_selling.setCellData(row, "chgWt", "1");
  } else if (fareUnit == ed_fhhcnt1type.getValue()) {
    ds_selling.setCellData(row, "chgWt", ed_fhhcnt1.getValue());
  } else if (fareUnit == ed_fhhcnt2type.getValue()) {
    ds_selling.setCellData(row, "chgWt", ed_fhhcnt2.getValue());
  } else if (fareUnit == ed_fhhcnt3type.getValue()) {
    ds_selling.setCellData(row, "chgWt", ed_fhhcnt3.getValue());
  } else if (fareUnit == ed_fhhcnt4type.getValue()) {
    ds_selling.setCellData(row, "chgWt", ed_fhhcnt4.getValue());
  }
};
scwin.f_sellingAmtFcrc = function (row, colid) {
  if (ds_selling.getCellData(row, "crcCd") == "KRW") {
    ds_selling.setCellData(row, "sellAmtFcrc", "0");
  } else {
    ds_selling.setCellData(row, "sellAmtFcrc", Math.round(Number(ds_selling.getCellData(row, "chgWt") || 0) * Number(ds_selling.getCellData(row, "sellUpr") || 0) * 100) / 100);
  }
};
scwin.f_sellingAmt = function (row, colid) {
  // if (ds_selling.getCellData(row, "crcCd") == "KRW") {
  //     ds_selling.setCellData(row, "sellAmtFcrc", "0");
  // } else {
  //     ds_selling.setCellData(row, "sellAmtFcrc", Math.round((Number(ds_selling.getCellData(row, "chgWt") || 0) * Number(ds_selling.getCellData(row, "sellUpr") || 0)) * 100) / 100);
  // }
  if (ds_selling.getCellData(row, "crcCd") == "KRW") {
    ds_selling.setCellData(row, "sellAmt", +Math.round(ds_selling.getCellData(row, "chgWt") * +ds_selling.getCellData(row, "sellUpr")));
  } else if (ds_selling.getCellData(row, "crcCd") == "JPY" || ds_selling.getCellData(row, "crcCd") == "ITL" || ds_selling.getCellData(row, "crcCd") == "IDR" || ds_selling.getCellData(row, "crcCd") == "ESP") {
    ds_selling.setCellData(row, "sellAmt", Math.round(ds_selling.getCellData(row, "sellAmtFcrc") * ds_selling.getCellData(row, "exRate")) / 100);
  } else {
    ds_selling.setCellData(row, "sellAmt", Math.round(ds_selling.getCellData(row, "sellAmtFcrc") * ds_selling.getCellData(row, "exRate")));
  }
};
scwin.f_sellingUsdAmt = function (row, colid) {
  if (ed_shhuexrate.getValue() != "0" && ed_shhuexrate.getValue() != "") {
    // rtn :: 9070.92 
    // sellAmt :: 12397226  
    // rate :: 1366.7
    // ds_selling.setCellData(row, "usdAmt", Math.round((Number(ds_selling.getCellData(row, "sellAmt") || 0) / Number(ed_shhuexrate.getValue() || 1)) * 100) / 100);
    ds_selling.setCellData(row, "usdAmt", Math.round((Number(ds_selling.getCellData(row, "sellAmt") || 0) / Number(ed_shhuexrate.getValue() || 0) + Number.EPSILON) * 100) / 100);
  }
};
scwin.f_sellingVat = function (row, colid) {
  if (ds_selling.getCellData(row, "vatYn") == "0") {
    ds_selling.setCellData(row, "vatAmt", "0");
  } else {
    ds_selling.setCellData(row, "vatAmt", Math.round(Number(ds_selling.getCellData(row, "sellAmt") || 0) * 0.1 * 100) / 100);
  }
};
scwin.f_sellingTariffRateLoading = async function (row) {
  ds_retrieveTariff.removeAll();
  ds_resultTariff.removeAll();
  var tRow = scwin._insertRow(ds_retrieveTariff);
  ds_retrieveTariff.setCellData(tRow, "fgubn", "1");
  ds_retrieveTariff.setCellData(tRow, "apdt", ed_mheta.getValue());
  ds_retrieveTariff.setCellData(tRow, "partner", "");
  ds_retrieveTariff.setCellData(tRow, "liner", ed_mhlinercd.getValue());
  ds_retrieveTariff.setCellData(tRow, "fgubn", "1"); //selling , partner : 1, buying : 2	
  ds_retrieveTariff.setCellData(tRow, "kcomcd", scwin.hd_kcomcd); //KCOMCD
  ds_retrieveTariff.setCellData(tRow, "apdt", ed_mheta.getValue()); //ETA
  ds_retrieveTariff.setCellData(tRow, "partner", ""); //partner시만 사용			
  ds_retrieveTariff.setCellData(tRow, "liner", ed_mhlinercd.getValue()); //LINER
  ds_retrieveTariff.setCellData(tRow, "loading", ed_mhlodcd.getValue()); //LOADING		
  ds_retrieveTariff.setCellData(tRow, "discharge", ed_mhdisccd.getValue()); //DISCHARGE
  ds_retrieveTariff.setCellData(tRow, "cbgubn", "C"); //CONTAINER OR BULK		
  ds_retrieveTariff.setCellData(tRow, "incoterm", ""); //INCOTERM(bulk시 사용)
  ds_retrieveTariff.setCellData(tRow, "userid", scwin.userId); //user id
  ds_retrieveTariff.setCellData(tRow, "fcode", ds_selling.getCellData(ds_selling.getRowPosition() || 0, "fareEngCd")); //FCODE	
  ds_retrieveTariff.setCellData(tRow, "currency", ds_selling.getCellData(ds_selling.getRowPosition() || 0, "crcCd")); //CURR
  ds_retrieveTariff.setCellData(tRow, "funit", ds_selling.getCellData(ds_selling.getRowPosition() || 0, "fareUnit")); //TYPE - FUNIT											
  ds_retrieveTariff.setCellData(tRow, "flag", "2"); //tariff : 1, tariffRate:2		
  ds_retrieveTariff.setCellData(tRow, "transTariffYn", "Y"); //TRANS TARIFF YN
  ds_retrieveTariff.setCellData(tRow, "mhno", cnd_lc_mhno.getValue()); //MHNO	

  await $c.sbm.execute($p, sbm_retrieveTariff);
  if (ds_resultTariff.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
    return;
  }
  ds_selling.setCellData(row, "sellUpr", ds_resultTariff.getCellData(0, "amount")); //rate	
};
scwin.f_distribute = async function () {
  for (var i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getCellData(i, "chk") == "T") {
      if (ds_selling.getCellData(i, "distributeYn") == "Y") {
        $c.win.alert($p, "이미 배포 되었습니다. \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  ds_sellingDistribute.removeAll();
  ds_sellingDistributeTemp.removeAll();
  var cols = $c.gus.f_GetColumnNames($p, ds_selling);
  for (var h = 0; h < ds_ocHblhList.getRowCount(); h++) {
    for (var s = 0; s < ds_selling.getRowCount(); s++) {
      var dRow = scwin._insertRow(ds_sellingDistribute);
      for (var c = 0; c < cols.length; c++) {
        var colId = cols[c];
        if (!ds_sellingDistribute.getColumnInfo(colId)) continue;
        ds_sellingDistribute.setCellData(dRow, colId, ds_selling.getCellData(s, colId));
      }
      ds_sellingDistribute.setCellData(dRow, "blNo", ds_ocHblhList.getCellData(h, "hhblno"));
      ds_sellingDistribute.setCellData(dRow, "hhmsrrate", ds_ocHblhList.getCellData(h, "hhmsrrate"));
      ds_sellingDistribute.setCellData(dRow, "odrNo", ds_ocHblhList.getCellData(h, "odrNo"));
      var rate = Number(ds_sellingDistribute.getCellData(dRow, "hhmsrrate") || 0);
      var factor = rate / 100;
      ds_sellingDistribute.setCellData(dRow, "sellAmtFcrc", Number(ds_sellingDistribute.getCellData(dRow, "sellAmtFcrc") || 0) * factor);
      ds_sellingDistribute.setCellData(dRow, "sellAmt", Number(ds_sellingDistribute.getCellData(dRow, "sellAmt") || 0) * factor);
      ds_sellingDistribute.setCellData(dRow, "vatAmt", Number(ds_sellingDistribute.getCellData(dRow, "vatAmt") || 0) * factor);
      ds_sellingDistribute.setCellData(dRow, "usdAmt", Number(ds_sellingDistribute.getCellData(dRow, "usdAmt") || 0) * factor);
    }
  }
  await $c.sbm.execute($p, sbm_sellingDistribute);
};
scwin.f_cancelDistribute = async function () {
  for (var i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getCellData(i, "chk") == "T") {
      if (ds_selling.getCellData(i, "distributeYn") == "N") {
        $c.win.alert($p, "배포내역이 없습니다.  \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
      ds_selling.modifyRowStatus(i, "D");
    }
  }
  await $c.sbm.execute($p, sbm_cancelSellingDistribute);
};
scwin.f_SellingSum = function () {
  var v_SellingSumAmount = 0;
  var v_SellingSumAmountW = 0;
  var v_SellingSumVat = 0;
  var v_SellingSumAmountUs = 0;
  var v_SellingAmountSum = 0;
  for (var i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getRowStatus(i) != "2") {
      v_SellingSumAmount += Number(ds_selling.getCellData(i, "sellAmtFcrc") || 0);
      v_SellingSumAmountW += Number(ds_selling.getCellData(i, "sellAmt") || 0);
      v_SellingSumVat += Number(ds_selling.getCellData(i, "vatAmt") || 0);
      v_SellingSumAmountUs += Number(ds_selling.getCellData(i, "usdAmt") || 0);
    }
  }
  ed_SellingSumAmount.setValue(v_SellingSumAmount);
  ed_SellingSumAmountW.setValue(v_SellingSumAmountW);
  ed_SellingSumVat.setValue(v_SellingSumVat);
  v_SellingAmountSum = v_SellingSumAmountW + v_SellingSumVat;
  ed_SellingAmountSum.setValue(v_SellingAmountSum);
};
scwin.f_ExRateSellingGridLoading = async function () {
  if (lc_shhcucd.getValue() == ds_selling.getCellData(ds_selling.getRowPosition() || 0, "crcCd")) {
    ds_selling.setCellData(ds_selling.getRowPosition() || 0, "exRate", ed_shhexrate.getValue());
  } else {
    if (ds_selling.getCellData(ds_selling.getRowPosition() || 0, "exRate") == "" || ds_selling.getCellData(ds_selling.getRowPosition() || 0, "exRate") == "0") {
      var param1 = "";
      var param2 = "";
      var param3 = lc_shhexgb.getValue();
      scwin.comCode(ds_exRateSellingGrid, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveExRate&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3);
      ds_selling.setCellData(ds_selling.getRowPosition() || 0, "exRate", ds_exRateSellingGrid.getCellData(0, "CODE"));
      if (ds_selling.getCellData(ds_selling.getRowPosition() || 0, "exRate") == "" && param1 != "KRW") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]);
      }
    }
  }
};
scwin.f_tariffAllLoading = async function (disGubun) {
  var cnt1 = "0";
  var cnt2 = "0";
  var cnt3 = "0";
  var cnt4 = "0";
  if (ed_fhhcnt1type.getValue() != "" && ed_fhhcnt1.getValue() != "0") cnt1 = ed_fhhcnt1type.getValue();
  if (ed_fhhcnt2type.getValue() != "" && ed_fhhcnt2.getValue() != "0") cnt2 = ed_fhhcnt2type.getValue();
  if (ed_fhhcnt3type.getValue() != "" && ed_fhhcnt3.getValue() != "0") cnt3 = ed_fhhcnt3type.getValue();
  if (ed_fhhcnt4type.getValue() != "" && ed_fhhcnt4.getValue() != "0") cnt4 = ed_fhhcnt4type.getValue();
  ds_retrieveTariff.removeAll();
  ds_resultTariff.removeAll();
  var row = scwin._insertRow(ds_retrieveTariff);
  if (ds_selling.getRowCount() != 0) {
    // cfAlertMsg(E_MSG_CM_WRN_011, ["Selling Information"]); // 이미 존재하는 @입니다.	
    await $c.win.alert($p, "Selling Information alreay exists.");
  } else {
    if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
      //저장하시겠습니까?	

      ds_retrieveTariff.setCellData(row, "fgubn", '1'); //selling , partner : 1, buying : 2	
      ds_retrieveTariff.setCellData(row, "kcomcd", scwin.hd_kcomcd); //KCOMCD
      ds_retrieveTariff.setCellData(row, "apdt", ed_mheta.getValue()); //ETA
      ds_retrieveTariff.setCellData(row, "customer", ed_shhcust.getValue()); //selling,buying : customer, partner:partner
      ds_retrieveTariff.setCellData(row, "partner", ""); //partner시만 사용						
      ds_retrieveTariff.setCellData(row, "liner", ed_mhlinercd.getValue()); //LINER
      ds_retrieveTariff.setCellData(row, "loading", ed_mhlodcd.getValue()); //LOADING		
      ds_retrieveTariff.setCellData(row, "discharge", ed_mhdisccd.getValue()); //DISCHARGE
      ds_retrieveTariff.setCellData(row, "container1", cnt1); //container1
      ds_retrieveTariff.setCellData(row, "container2", cnt2); //container2
      ds_retrieveTariff.setCellData(row, "container3", cnt3); //container3
      ds_retrieveTariff.setCellData(row, "container4", cnt4); //container4
      ds_retrieveTariff.setCellData(row, "cbgubn", "C"); //CONTAINER OR BULK		
      ds_retrieveTariff.setCellData(row, "incoterm", ""); //INCOTERM(bulk시 사용)
      ds_retrieveTariff.setCellData(row, "userid", scwin.userId); //user id
      ds_retrieveTariff.setCellData(row, "flag", "1"); //tariff : 1, tariffRate:2		
      ds_retrieveTariff.setCellData(row, "transTariffYn", "Y"); //TRANS TARIFF YN
      ds_retrieveTariff.setCellData(row, "mhno", cnd_lc_mhno.getValue()); //MHNO										

      // tr_retrieveTariff.Post();
      await $c.sbm.execute($p, sbm_retrieveTariff);
      if (ds_resultTariff.getRowCount() == "0") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
        return;
      }
      for (var i = 0; i < ds_resultTariff.getRowCount(); i++) {
        scwin.f_FaddRow(1); //kcomcd,blno,mhno,orderno,locptncls,mblhblcls,seaaircls,ppcccls,customer,customer name,실적일,inpid
        ds_selling.setCellData(i, "fareEngCd", ds_resultTariff.getCellData(i, "fareEngCd")); // fareEngCd

        await scwin.f_chkOpenCommonPopUpGrid("COEE", "SellingFcode", ds_selling, i, "fareEngCd", "fareEngNm", "T", "F");
        ds_selling.setCellData(i, "crcCd", ds_resultTariff.getCellData(i, "crcCd")); //cur
        ds_selling.setCellData(i, "fareUnit", ds_resultTariff.getCellData(i, "fareUnit")); //unit

        scwin.f_packageRateSellingLoading(i, ""); //package,rate

        ds_selling.setCellData(i, "sellUpr", ds_resultTariff.getCellData(i, "amount")); //rate						

        scwin.f_sellingAmtFcrc(i, "", ""); //amount(외화)	
        await scwin.f_ExRateSellingGridLoading(); //ex-rate 
        scwin.f_sellingAmt(i, "", ""); //amount(원화)	
        scwin.f_sellingVat(i, "", ""); //vat							
        scwin.f_sellingUsdAmt(i, "", ""); //auount($) 
      }

      // package 0 인것 삭제.	
      for (var i = getRowCount() - 1; i > -1; i--) {
        if (Number(ds_selling.setCellData(i, "chgWt")) == 0) {
          ds_selling.removeRow(i);
        }
      }
    }
  }
};
scwin.f_exRateChange = async function () {
  if (ds_selling.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
  } else {
    if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
      for (var i = 0; i < ds_selling.getRowCount(); i++) {
        if ($c.str.trim($p, ds_selling.getCellData(i, "certiNo")) == "") {
          if (ds_selling.getCellData(i, "crcCd") == $c.str.trim($p, lc_shhcucd.getValue())) {
            ds_selling.setCellData(i, "exRate", ed_shhexrate.getValue());
            scwin.f_sellingAmt(i, "", "");
            scwin.f_sellingVat(i, "", "");
            scwin.f_sellingUsdAmt(i, "", "");
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// freight grid row helpers
//-------------------------------------------------------------------------
scwin.f_FaddRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      // Selling

      scwin.f_sellingUnitLoading();
      var row = 0;
      if (ds_selling.getRowCount() == 0 || ds_selling.getRowCount() - 1 == ds_selling.getRowPosition()) {
        row = scwin._insertRow(ds_selling);
      } else {
        row = scwin._insertRow(ds_selling, ds_selling.getRowPosition() + 1);
      }
      ds_selling.setCellData(row, "kcomcd", scwin.hd_kcomcd);
      ds_selling.setCellData(row, "blno", ds_ocMblhList.getCellData(0, "mhmblno"));
      ds_selling.setCellData(row, "mhno", cnd_lc_mhno.getValue()); //update일때.
      ds_selling.setCellData(row, "drcrCls", "D"); // DR/CR			
      ds_selling.setCellData(row, "locPtnCls", "1"); //국내 : 1, 해외 :2 
      ds_selling.setCellData(row, "mblHblCls", "H"); //house/master		
      ds_selling.setCellData(row, "seaAirCls", "S"); // sea/air					
      ds_selling.setCellData(row, "inpid", scwin.userId);
      ds_selling.setCellData(row, "bilgClntNo", ed_shhcust.getValue()); //CUSTOMER	
      ds_selling.setCellData(row, "bilgClntNm", txt_shhcustnm.getValue()); //CUSTOMER name		
      ds_selling.setCellData(row, "exRateTyp", lc_shhexgb.getValue); //exgb		
      ds_selling.setCellData(row, "fareUnit", ds_sellingUnit.getCellData(0, "code"));
      scwin.f_packageRateSellingLoading(row, "");
      gr_selling.setFocusedCell(row, "bilgClntNo", true);
      break;
    default:
      break;
  }
};
scwin.f_FaddRowMulti = function (disGubun) {
  var rowMake = ed_rowMake_selling.getValue() == '' ? 1 : Number(ed_rowMake_selling.getValue());
  switch (disGubun) {
    case 1:
      // Selling
      for (var i = 0; i < rowMake; i++) {
        scwin.f_FaddRow(1);
      }
      break;
    default:
      break;
  }
};
scwin.f_FdeleteRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      // Selling
      var row = ds_selling.getRowPosition();
      if (ds_selling.getCellData(row, "certiNo") == "") {
        if (ds_selling.getRowStatus(row) == "C") {
          ds_selling.removeRow(row);
        } else {
          ds_selling.deleteRow(row);
        }
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
        return;
      }
      break;
    default:
      break;
  }
};
scwin.f_FcancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // Selling
      if (tab_main.getSelectedTabIndex() == 0) {
        for (var i = ds_ocHblhList.getRowCount() - 1; i >= 0; i--) {
          if (ds_ocHblhList.getRowStatus(i) == "C") {
            ds_ocHblhList.removeRow(i);
          } else {
            ds_ocHblhList.undoRow(i);
          }
        }
      } else {
        ds_selling.undoAll();
        for (var i = ds_selling.getRowCount() - 1; i >= 0; i--) {
          if (ds_selling.getRowStatus(i) == "C") {
            ds_selling.removeRow(i);
          } else {
            ds_selling.undoRow(i);
          }
        }
      }
      break;
    default:
      break;
  }
};
scwin.f_hblCntrList = function () {
  if (ds_ocHblhList.getCellData(ds_ocHblhList.getRowPosition() || 0, "hhblno") != "") {
    var param1 = scwin.hd_kcomcd;
    var param2 = $c.str.trim($p, cnd_lc_mhno.getValue());
    var param3 = ds_ocHblhList.getCellData(ds_ocHblhList.getRowPosition() || 0, "hhblno");
    scwin.comCode(ds_ocContList, "/cm.zz.RetrieveComboCMD.do?sysCd=ImportCoLoadEBC&queryId=SeaImportHouseBlContPiDTOList&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3);
  }
};

//-------------------------------------------------------------------------
// Component Blur Event
//-------------------------------------------------------------------------
scwin.cnd_ed_hhblno_onblur = async function (e) {
  cnd_ed_hhblno.setValue($c.str.trim($p, cnd_ed_hhblno.getValue()));
  if (cnd_ed_hhblno.getValue() != "") {
    scwin.f_MhnoLoading();
    cnd_ed_mhmblno.setValue("");
  }
};
scwin.cnd_ed_mhmblno_onblur = function (e) {
  cnd_ed_mhmblno.setValue($c.str.trim($p, cnd_ed_mhmblno.getValue()));
  if (scwin.statusFlag != "C" && scwin.statusFlag != "U") {
    ds_hmhno.removeAll();
    if (cnd_ed_mhmblno.getValue() != "") {
      scwin.f_CndMhmblnoLoading();
      cnd_ed_hhblno.setValue("");
    }
  }
};
scwin.ed_mhvyg_onblur = function (e) {
  ed_mhvyg.setValue($c.str.trim($p, ed_mhvyg.getValue()));
  if (scwin.statusFlag == "C") {
    scwin.f_RetrieveVessel();
  }
};
scwin.ed_mhvslcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_mhvslcd.getValue());
  if (strClntNo.length > 0) {
    txt_mhvsl.setValue("");
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    txt_mhvsl.setValue("");
  }
};
scwin.ed_mheta_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    if (ed_mhcrdt.getValue() == "") ed_mhcrdt.setValue(ed_mheta.getValue());
  }
};
scwin.ed_shhcurdt_onblur = async function (e) {
  var param1 = $c.str.trim($p, lc_shhcucd.getValue());
  var param2 = $c.str.trim($p, ed_shhcurdt.getValue());
  var param3 = lc_shhexgb.getValue();
  if ($c.str.trim($p, ed_shhexrate.getValue()) == "") {
    ed_shhexrate.setValue("0");
  }
  if ($c.str.trim($p, ed_shhuexrate.getValue()) == "") {
    ed_shhuexrate.setValue("0");
  }
  scwin.f_ExrateLoading(param1, param2, param3);
  if (ds_ExRate.getRowCount() > 0) {
    ed_shhexrate.setValue(ds_ExRate.getCellData(0, "code"));
    ed_shhuexrate.setValue(ds_ExRate.getCellData(0, "name"));
    scwin.exRateCheck = "2";
    scwin.exRate1 = ed_shhexrate.getValue();
    scwin.exRate2 = ed_shhuexrate.getValue();
    scwin.crc = lc_shhcucd.getValue();
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]);
    scwin.exRateCheck = "1";
    ed_shhexrate.setValue("1");
    ed_shhuexrate.setValue("1");
  }
};

//----------------------------------------------------------------------------------
// Code Popup Event
//----------------------------------------------------------------------------------
// VSL/VOY
scwin.udc_mhvslcd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Vessel", ed_mhvslcd, txt_mhvsl, "T", "T", "T");
};
scwin.udc_mhvslcd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Vessel", ed_mhvslcd, txt_mhvsl, "T", "F", "F");
};
scwin.udc_mhvslcd_onblurNameEvent = function (e) {
  scwin.f_trimVsl();
};

// Container1
scwin.ed_mhcnt1type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType1", ed_mhcnt1type, null, "T", "F", "F");
};
scwin.img_PopUp11_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "ContainerType1", ed_mhcnt1type, null, "F", "F", "F");
};
scwin.ed_fhhcnt1type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType1", ed_fhhcnt1type, null, "T", "F", "F");
};
scwin.btn_trigger19_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType1", ed_fhhcnt1type, null, "F", "F", "F");
};

// Container2
scwin.ed_mhcnt2type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType2", ed_mhcnt2type, null, "T", "F", "F");
};
scwin.img_PopUp12_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "ContainerType1", ed_mhcnt1type, null, "F", "F", "F");
};
scwin.ed_fhhcnt2type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType2", ed_fhhcnt2type, null, "T", "F", "F");
};
scwin.btn_trigger20_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType2", ed_fhhcnt2type, null, "F", "F", "F");
};

// Container3
scwin.ed_mhcnt3type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType3", ed_mhcnt3type, null, "T", "F", "F");
};
scwin.img_PopUp13_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "ContainerType3", ed_mhcnt3type, null, "F", "F", "F");
};
scwin.ed_fhhcnt3type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType3", ed_fhhcnt3type, null, "T", "F", "F");
};
scwin.btn_trigger21_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType3", ed_fhhcnt3type, null, "F", "F", "F");
};

// Container4
scwin.ed_mhcnt4type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType4", ed_mhcnt4type, null, "T", "F", "F");
};
scwin.img_PopUp14_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "ContainerType4", ed_mhcnt4type, null, "F", "F", "F");
};
scwin.ed_fhhcnt4type_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType4", ed_fhhcnt4type, null, "T", "F", "F");
};
scwin.btn_trigger22_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("CODE", "ContainerType4", ed_fhhcnt4type, null, "F", "F", "F");
};

// Carrier
scwin.udc_mhlinercd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Liner", ed_mhlinercd, txt_mhlinernm, "T", "T", "T");
};
scwin.udc_mhlinercd_onviewchangeNameEvent = async function (info) {
  if (ed_mhlinercd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Liner", ed_mhlinercd, txt_mhlinernm, "T", "T", "T");
  }
};
scwin.udc_mhlinercd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Liner", ed_mhlinercd, txt_mhlinernm, "T", "F", "F");
};

// DEPT
scwin.ed_mhbuyer_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "DEPT", ed_mhbuyer, txt_mhbuyernm, "T", "F", "F");
};
scwin.img_PopUp3_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "DEPT", ed_mhbuyer, txt_mhbuyernm, "F", "F", "F");
};

// Shipper
scwin.udc_mhscd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Shipper", ed_mhscd, txt_mhsnm, "T", "F", "F");
};
scwin.udc_mhscd_onviewchangeNameEvent = async function (info) {
  if (ed_mhscd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Shipper", ed_mhscd, txt_mhsnm, "T", "F", "F");
  }
};
scwin.udc_mhscd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Shipper", ed_mhscd, txt_mhsnm, "F", "F", "F");
};

// Consignee
scwin.udc_mhccd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Consignee", ed_mhccd, txt_mhcnm, "T", "F", "F");
};
scwin.udc_mhccd_onviewchangeNameEvent = async function (info) {
  if (ed_mhscd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Consignee", ed_mhccd, txt_mhcnm, "T", "F", "F");
  }
};
scwin.udc_mhccd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Consignee", ed_mhccd, txt_mhcnm, "T", "F", "F");
};

// Notify
scwin.udc_mhncd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Notify", ed_mhncd, txt_mhnnm, "T", "F", "F");
};
scwin.udc_mhncd_onviewchangeNameEvent = async function (info) {
  if (ed_mhncd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Notify", ed_mhncd, txt_mhnnm, "T", "F", "F");
  }
};
scwin.udc_mhncd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Notify", ed_mhncd, txt_mhnnm, "F", "F", "F");
};

// Loading
scwin.udc_mhlodcd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Loading", ed_mhlodcd, txt_mhlodnm, "T", "F", "F");
};
scwin.udc_mhlodcd_onviewchangeNameEvent = async function (info) {
  if (ed_mhlodcd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Loading", ed_mhlodcd, txt_mhlodnm, "T", "F", "F");
  }
};
scwin.udc_mhlodcd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Loading", ed_mhlodcd, txt_mhlodnm, "F", "F", "F");
};

// Discharge
scwin.udc_mhdisccd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Discharge", ed_mhdisccd, txt_mhdiscnm, "T", "F", "F");
};
scwin.udc_mhdisccd_onviewchangeNameEvent = async function (info) {
  if (ed_mhdisccd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Discharge", ed_mhdisccd, txt_mhdiscnm, "T", "F", "F");
  }
};
scwin.udc_mhdisccd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Discharge", ed_mhdisccd, txt_mhdiscnm, "F", "F", "F");
};

// Warehouse
scwin.udc_hhwarecd_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Warehouse", ed_hhwarecd, txt_hhwarenm, "T", "F", "F");
};
scwin.udc_hhwarecd_onviewchangeNameEvent = async function (info) {
  if (ed_hhwarecd.getValue().trim() == '') {
    await scwin.f_chkOpenCommonPopUp("NAME", "Warehouse", ed_hhwarecd, txt_hhwarenm, "T", "F", "F");
  }
};
scwin.udc_hhwarecd_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Warehouse", ed_hhwarecd, txt_hhwarenm, "F", "F", "F");
};

// 관할세관
scwin.udc_custom_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "CustomHouse", ed_custom, ed_customnm, "T", "F", "F");
};
scwin.udc_custom_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "CustomHouse", ed_custom, ed_customnm, "F", "F", "F");
};

// 세관과
scwin.udc_depart_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "CustomHouseDept", ed_depart, ed_departnm, "T", "F", "F");
};
scwin.udc_depart_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "CustomHouseDept", ed_depart, ed_departnm, "F", "F", "F");
};

// Customer
scwin.udc_shhcust_onviewchangeCodeEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp("CODE", "Customer", ed_shhcust, txt_shhcustnm, "T", "F", "F");
};
scwin.udc_shhcust_onclickEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Customer", ed_shhcust, txt_shhcustnm, "F", "F", "F");
};

// Loading
scwin.ed_fhhlodcd_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("COEE", "Loading", ed_fhhlodcd, txt_fhhlodnm, "T", "F", "F");
};
scwin.btn_trigger23_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Loading", ed_fhhlodcd, txt_fhhlodnm, "F", "F", "F");
};

// Discharge
scwin.ed_fhhdisccd_onviewchange = async function (info) {
  await scwin.f_chkOpenCommonPopUp("COEE", "Discharge", ed_fhhdisccd, txt_fhhdiscnm, "T", "F", "F");
};
scwin.btn_trigger24_onclick = async function (e) {
  await scwin.f_chkOpenCommonPopUp("SEARCH", "Discharge", ed_fhhdisccd, txt_fhhdiscnm, "F", "F", "F");
};

//------------------------------------------------------------------------------------------------
// grid events
//------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------
// gr_ocHblhList Event
//-------------------------------------------------------------------------
scwin.gr_ocHblhList_oneditend = async function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var colId = gr_ocHblhList.getColumnID(columnIndex);
  var hhblno = value;
  if (colId == 'hhblno') {
    for (var i = 0; i < ds_ocHblhList.getRowCount() - 1; i++) {
      for (var j = i + 1; j < ds_ocHblhList.getRowCount(); j++) {
        if (ds_ocHblhList.getCellData(i, "hhblno") == ds_ocHblhList.getCellData(j, "hhblno")) {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["House B/L"]);
          gr_ocHblhList.setFocusedCell(i, "hhblno");
          return;
        }
      }
    }
  } else {
    hhblno = ds_ocHblhList.getCellData(row, 'hhblno');
  }
  ds_gridHouseList.removeAll();
  scwin._insertRow(ds_gridHouseList);
  ds_gridHouseList.setCellData(0, "kcomcd", scwin.hd_kcomcd);
  ds_gridHouseList.setCellData(0, "hhio", scwin.hd_mhio);
  ds_gridHouseList.setCellData(0, "hhblno", hhblno);
  await $c.sbm.execute($p, sbm_retrieveGridHouse);
  if (ds_gridHouseList.getRowCount() != 0) {
    ds_ocHblhList.setCellData(row, "hhpkg", ds_gridHouseList.getCellData(0, "hhpkg"));
    ds_ocHblhList.setCellData(row, "hhgwgt", ds_gridHouseList.getCellData(0, "hhgwgt"));
    ds_ocHblhList.setCellData(row, "hhmsr", ds_gridHouseList.getCellData(0, "hhmsr"));
    ds_ocHblhList.setCellData(row, "hhbltype", ds_gridHouseList.getCellData(0, "hhbltype"));
    ds_ocHblhList.setCellData(row, "hhwarecd", ds_gridHouseList.getCellData(0, "hhwarecd"));
    ds_ocHblhList.setCellData(row, "hhwarenm", ds_gridHouseList.getCellData(0, "hhwarenm"));
    ds_gridHouseList.removeAll();
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
    scwin.f_hblCntrList();
  }
};
scwin.gr_ocHblhList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.statusFlag == "") {
    scwin._openMenu("Import House B/L(NEW)", "/ui/il/seainb/sibl/se_201_01_03b.xml", "se_201_01_03b.xml", {
      linkcheck: "2",
      kcomcd: scwin.hd_kcomcd,
      blno: ds_ocHblhList.getCellData(rowIndex, "hhblno"),
      mhno: cnd_lc_mhno.getValue()
    });
  }
};
scwin.gr_ocHblhList_onheaderclick = async function (headerId) {
  if (headerId == "chk") {
    var headerChecked = gr_ocHblhList.getHeaderValue(headerId) == "1";
    for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
      ds_ocHblhList.setCellData(i, "chk", headerChecked ? "T" : "F");
    }
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
  }
};
scwin.gr_ocHblhList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
  }
};

//-------------------------------------------------------------------------
// gr_selling Event
//-------------------------------------------------------------------------
scwin.gr_selling_onheaderclick = function (headerId) {
  if (headerId == "chk") {
    var headerChecked = gr_selling.getHeaderValue(headerId) == "1";
    for (var i = 0; i < ds_selling.getRowCount(); i++) {
      ds_selling.setCellData(i, "chk", headerChecked ? "T" : "F");
    }
  }
};
scwin.gr_selling_ontextimageclick = async function (rowIndex, columnIndex) {
  var row = rowIndex;
  var colId = gr_selling.getColumnID(columnIndex);
  switch (colId) {
    case "bilgClntNo":
      await scwin.f_chkOpenCommonPopUpGrid('SEARCH', 'SellingCustomer', ds_selling, row, 'bilgClntNo', 'bilgClntNm', 'F', 'F');
      break;
    case "fareEngCd":
      await scwin.f_chkOpenCommonPopUpGrid('SEARCH', 'SellingFcode', ds_selling, row, 'fareEngCd', 'fareEngNm', 'F', 'F');
      break;
    default:
      break;
  }
};
scwin.gr_selling_onbeforeedit = function (rowIndex, columnIndex) {
  var colId = gr_selling.getColumnID(columnIndex);

  /*
  var certiNo = ['bilgClntNo', 'fareEngCd', 'crcCd', 'fareUnit', 'chgWt', 'sellUpr', 'sellAmtFcrc', 'exRate', 'sellAmt', 'vatAmt'];
    if (certiNo.includes(colId)) {
        var certiNoVal = ds_selling.getCellData(rowIndex, 'certiNo');
      if (certiNoVal != '') return false;
  };
    if (colId == 'sellAmtFcrc') {
      var crcCdVal = ds_selling.getCellData(rowIndex, 'crcCd');
        if (crcCdVal == 'KRW') return false;
  }
  */

  if (colId == "fareEngNm") {
    if (scwin.statusFlag == "U") {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
scwin.gr_selling_onafteredit = async function (rowIndex, columnIndex, value) {
  var colId = gr_selling.getColumnID(columnIndex);
  switch (colId) {
    case "fareEngCd":
      await scwin.f_chkOpenCommonPopUpGrid("CODE", "SellingFcode", ds_selling, rowIndex, "fareEngCd", "fareEngNm", "T", "F", "F");
      scwin.f_sellingAmtFcrc(rowIndex, colId);
      scwin.f_sellingAmt(rowIndex, colId);
      scwin.f_sellingVat(rowIndex, colId);
      scwin.f_sellingUsdAmt(rowIndex, colId);
      break;
    default:
      break;
  }
};
scwin.gr_selling_onviewchange = async function (info) {
  var rowIndex = info.rowIndex;
  var colId = info.colId;
  switch (colId) {
    case "fareUnit":
      scwin.f_packageRateSellingLoading(rowIndex, colId, info.newValue);
      await scwin.f_sellingTariffRateLoading(rowIndex);
      break;
    case "bilgClntNo":
      await scwin.f_chkOpenCommonPopUpGrid("CODE", "SellingCustomer", ds_selling, rowIndex, "bilgClntNo", "bilgClntNm", "T", "F", "F");
      break;
    case "crcCd":
    case "chgWt":
    case "sellUpr":
      scwin.f_sellingAmtFcrc(rowIndex, colId);
      scwin.f_sellingAmt(rowIndex, colId);
      scwin.f_sellingVat(rowIndex, colId);
      scwin.f_sellingUsdAmt(rowIndex, colId);
      break;
    case "exRate":
      scwin.f_sellingAmt(rowIndex, colId);
      break;
    case "sellAmt":
      scwin.f_sellingVat(rowIndex, colId);
      break;
    case "vatAmt":
      scwin.f_sellingUsdAmt(rowIndex, colId);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// datalist events
//-------------------------------------------------------------------------

//-------------------------------------------------------------
// ds_ocHblhList event
//-------------------------------------------------------------
scwin.ds_ocHblhList_onrowpositionchange = function (info) {
  var row = info.newRowIndex;
  var st = ds_ocHblhList.getRowStatus(row);
  if (st == "C") {
    gr_ocHblhList.setColumnReadOnly("hhblno", false);
  } else {
    gr_ocHblhList.setColumnReadOnly("hhblno", true);
  }
  gr_ocHblhList.setColumnReadOnly("hhpkg", true);
  gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
  gr_ocHblhList.setColumnReadOnly("hhmsr", true);
  gr_ocHblhList.setColumnReadOnly("hhbltype", true);
  scwin.f_hblCntrList();
};
scwin.ds_selling_oncelldatachange = async function (info) {
  var row = info.rowIndex;
  var colId = info.colID || info.colId;
  if (colId == "crcCd") {
    var code = $c.str.trim($p, ds_selling.getCellData(row, "crcCd"));
    if (code != "") {
      var found = false;
      for (var i = 0; i < ds_currencyCode.getRowCount(); i++) {
        if (ds_currencyCode.getCellData(i, "code") == code) {
          found = true;
          break;
        }
      }
      if (!found) {
        ds_selling.setCellData(row, "exRate", "0");
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Information"]);
      } else if (code != "KRW") {
        await scwin.f_ExRateSellingGridLoading();
      }
    }
  }
  if (colId == "sellAmtFcrc" || colId == "sellAmt" || colId == "vatAmt") {
    scwin.f_SellingSum();
  }
};
scwin.ds_hmhno_onload = async function () {
  if (ds_hmhno.getRowCount() == 0) {
    if (scwin.statusFlag != "C") await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]);
    scwin._insertRow(ds_hmhno);
    ds_hmhno.setCellData(0, "code", "NONE");
    ds_hmhno.setCellData(0, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.statusFlag == "C") {
    ds_hmhno.removeAll();
    scwin._insertRow(ds_hmhno);
    ds_hmhno.setCellData(0, "code", "NONE");
    ds_hmhno.setCellData(0, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.mhnoFlag == "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};
scwin.ds_ocHblhList_onload = async function () {
  ed_totCnt.setValue(ds_ocHblhList.getRowCount());
  if (scwin.statusFlag == "C") {
    if (ds_ocHblhList.getRowCount() != 0) {
      ds_ocHblhList.setRowPosition(0);
      ed_mhlinercd.setValue(ds_ocHblhList.getCellData(0, "hhliner"));
      if (ed_mhlinercd.getValue() != "") {
        await scwin.f_chkOpenCommonPopUp("CODE", "Liner", ed_mhlinercd, txt_mhlinernm, "T", "F", "F");
      }
      var hhbltypeValue = 0;
      for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
        if (ds_ocHblhList.getCellData(i, "hhbltype") == "F") hhbltypeValue++;
      }
      if (hhbltypeValue == 1) {
        rd_mhflc.setValue("F");
      } else if (hhbltypeValue >= 2) {
        rd_mhflc.setValue("C");
      } else {
        rd_mhflc.setValue(ds_ocHblhList.getCellData(0, "hhbltype"));
      }
      ed_mhbuyer.setValue(ds_ocHblhList.getCellData(0, "hhbuyer"));
      txt_mhbuyernm.setValue(ds_ocHblhList.getCellData(0, "hhbuyernm"));
      ed_mhscd.setValue(ds_ocHblhList.getCellData(0, "hhagent"));
      txt_mhsnm.setValue(ds_ocHblhList.getCellData(0, "hhagentnm"));
      ed_mhccd.setValue(scwin.p_clntNo);
      txt_mhcnm.setValue(scwin.p_clntNm);
      ed_mhncd.setValue(scwin.p_clntNo);
      txt_mhnnm.setValue(scwin.p_clntNm);
      ed_mhlodcd.setValue(ds_ocHblhList.getCellData(0, "hhlodcd"));
      txt_mhlodnm.setValue(ds_ocHblhList.getCellData(0, "hhlodnm"));
      ed_mhdisccd.setValue(ds_ocHblhList.getCellData(0, "hhdisccd"));
      txt_mhdiscnm.setValue(ds_ocHblhList.getCellData(0, "hhdiscnm"));
      ed_fhhlodcd.setValue(ds_ocHblhList.getCellData(0, "hhlodcd"));
      ed_fhhdisccd.setValue(ds_ocHblhList.getCellData(0, "hhdisccd"));
      ed_mhdlvcd.setValue(ds_ocHblhList.getCellData(0, "hhdlvcd"));
      txt_mhdlvnm.setValue(ds_ocHblhList.getCellData(0, "hhdlvnm"));
      ed_mharea.setValue(ds_ocHblhList.getCellData(0, "hharea"));
      txt_mhareanm.setValue(ds_ocHblhList.getCellData(0, "hhareanm"));
      txt_mhunit.setValue(ds_ocHblhList.getCellData(0, "hhunit"));
      ed_mhetd.setValue(ds_ocHblhList.getCellData(0, "hhetd"));
      ed_mheta.setValue(ds_ocHblhList.getCellData(0, "hheta"));
      ed_mhcrdt.setValue(ds_ocHblhList.getCellData(0, "cready_dt"));
      ed_mhondt.setValue(ds_ocHblhList.getCellData(0, "hhondt"));
      ed_mhitem.setValue(ds_ocHblhList.getCellData(0, "hhitem"));
      txt_mhitemNm.setValue(ds_ocHblhList.getCellData(0, "hhmitem1"));
      hd_mhvslcd.setValue(ds_ocHblhList.getCellData(0, "hhvslcd"));
      hd_mhvsl.setValue(ds_ocHblhList.getCellData(0, "hhvsl"));
      hd_mhvyg.setValue(ds_ocHblhList.getCellData(0, "hhvyg"));
      ed_mhactcust.setValue(ds_ocHblhList.getCellData(0, "hhactcust"));
      txt_mhactcustnm.setValue(ds_ocHblhList.getCellData(0, "hhactcustnm"));
      scwin.f_MasterSum();
      scwin.f_masterHouseBlList();
    }
  }
};
scwin.ds_ocMblhList_onload = function () {
  if (ds_ocMblhList.getRowCount() != 0) {
    ed_mhvslcd.setValue(hd_mhvslcd.getValue());
    txt_mhvsl.setValue(hd_mhvsl.getValue());
    ed_mhvyg.setValue(hd_mhvyg.getValue());
  }
};
scwin.ds_ocContList_onload = function () {};
scwin.ds_SeaCargoManifest_onload = function () {
  if (ds_SeaCargoManifest.getRowCount() == 0) {
    scwin._insertRow(ds_SeaCargoManifest);
  }
};
scwin.ds_Master_onload = function () {
  if (ds_Master.getRowCount() == 0) {
    scwin._insertRow(ds_Master);
  }
};
scwin.ds_House_onload = function () {
  if (ds_House.getRowCount() == 0) {
    scwin._insertRow(ds_House);
  }
};

//-------------------------------------------------------------------------
// submission handlers
//-------------------------------------------------------------------------
scwin.sbm_default_submiterror = function (e) {
  if ($c.gus && $c.gus.cfShowError) {
    $c.gus.cfShowError($p, e);
    return;
  }
  if (e && e.errorMsg) {
    $c.win.alert($p, e.errorMsg);
    return;
  }
  if (e && e.responseText) {
    $c.win.alert($p, e.responseText);
    return;
  }
  $c.win.alert($p, "Error");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_vessel.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.f_dataSetClear();
    //$c.gus.cfInitObjects([tb_masterColumn]);
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
  }
};
scwin.sbm_retrieveMhno_submitdone = function (e) {};
scwin.sbm_retrieveHouse_submitdone = function (e) {};
scwin.sbm_saveSeaCargoManifest_submiterror = function (e) {
  var msg = "";
  if (e && e.responseJSON && e.responseJSON.ErrorMsg) msg = e.responseJSON.ErrorMsg;
  if (!msg && e && e.errorMsg) msg = e.errorMsg;
  if (!msg && e && e.responseText) msg = e.responseText;
  if (String(msg).indexOf("ZZ-E0001") > -1) {
    $c.win.alert($p, "중복데이터가 존재합니다.");
    scwin.f_Retrieve();
    return;
  }
  scwin.sbm_default_submiterror(e);
};
scwin.sbm_saveSeaCargoManifest_print_submiterror = function (e) {
  var msg = "";
  if (e && e.responseJSON && e.responseJSON.ErrorMsg) msg = e.responseJSON.ErrorMsg;
  if (!msg && e && e.errorMsg) msg = e.errorMsg;
  if (!msg && e && e.responseText) msg = e.responseText;
  if (String(msg).indexOf("ZZ-E0001") > -1) {
    $c.win.alert($p, "중복데이터가 존재합니다.");
    scwin.f_Retrieve();
    return;
  }
  scwin.sbm_default_submiterror(e);
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  }
  scwin.f_FieldClear();
  ed_mhvslcd.setValue("");
  txt_mhvsl.setValue("");
  ed_mhvyg.setValue("");
  scwin.f_dataSetClear();
  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay();
  cnd_ed_hhblno.focus();
};

//-------------------------------------------------------------------------
// datalist load hooks (call in submitdone)
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// button click handlers
//-------------------------------------------------------------------------
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.pu_departmentChange_onclick = function (e) {
  scwin.f_departmentChange();
};
scwin.btn_tariff_onclick = function (e) {
  scwin.f_tariffAllLoading(0);
};
scwin.btn_cusChg_onclick = function (e) {
  scwin.f_CustomerChange(0);
};
scwin.btn_exRateChg_onclick = function (e) {
  scwin.f_exRateChange(0);
};
scwin.btn_distribute_onclick = function (e) {
  scwin.f_distribute();
};
scwin.btn_cancelDistribute_onclick = function (e) {
  scwin.f_cancelDistribute();
};
scwin.btn_ediSend_onclick = async function (e) {
  await scwin.f_SendEDI_Before(0);
};
scwin.btn_ktNet_onclick = function (e) {
  scwin.f_ktNetOpen();
};
scwin.btn_uLogisHub_onclick = function (e) {
  scwin.f_uLogisHubOpen();
};
scwin.btn_plism_onclick = function (e) {
  scwin.f_plismOpen();
};
scwin.f_cancelRowF = function (e) {
  scwin.f_FcancelRow(1);
};
scwin.f_addRowF = function (e) {
  scwin.f_FaddRowMulti(1);
};
scwin.f_deleteRowF = function (e) {
  scwin.f_FdeleteRow(1);
};
scwin.sbm_sellingDistribute_submitdone = async function (e) {
  await $c.win.alert($p, "Data was saved successfully.");
  // cfAlertMsg(E_MSG_CM_INF_001); //  성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_cancelSellingDistribute_submitdone = async function (e) {
  await $c.win.alert($p, "Data was saved successfully.");
  // cfAlertMsg(E_MSG_CM_INF_001); //  성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};

//------------------------------------------------------------------------------------------
// Common 
//------------------------------------------------------------------------------------------
scwin.comCode = function (ds, url) {
  var idx = String(url || "").indexOf("?");
  var param = {};
  if (idx != -1) {
    var info = url.substring(idx + 1);
    var parts = info.split("&");
    for (var i = 0; i < parts.length; i++) {
      if (!parts[i]) continue;
      var kv = parts[i].split("=");
      var key = decodeURIComponent(kv[0] || "");
      var val = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
      param[key] = val;
    }
  }
  var params = {
    sysCd: param.sysCd || "",
    queryId: param.queryId || "",
    param1: param.param1 || "",
    param2: param.param2 || "",
    param3: param.param3 || "",
    param4: param.param4 || "",
    param5: param.param5 || "",
    param6: param.param6 || "",
    param7: param.param7 || "",
    param8: param.param8 || "",
    param9: param.param9 || "",
    param10: param.param10 || "",
    param11: param.param11 || "",
    param12: param.param12 || "",
    param13: param.param13 || "",
    param14: param.param14 || ""
  };
  sbm_comCode.ds = ds.org_id;
  dma_comCode.setJSON(params);
  $p.executeSubmission(sbm_comCode);
};
scwin.sbm_comCode_submitdone = function (e) {
  var ds = $p.getComponentById(this.ds);
  if (e.responseJSON && e.responseJSON.GAUCE) {
    ds.setJSON(e.responseJSON.GAUCE);
    if (ds == ds_masterHouseBlList) {
      if (ds_masterHouseBlList.getRowCount() == 0) {
        ed_mhcnt1type.setValue("");
        ed_mhcnt2type.setValue("");
        ed_mhcnt3type.setValue("");
        ed_mhcnt4type.setValue("");
        ed_fhhcnt1type.setValue("");
        ed_fhhcnt2type.setValue("");
        ed_fhhcnt3type.setValue("");
        ed_fhhcnt4type.setValue("");
        ed_mhcnt1.setValue("0");
        ed_mhcnt2.setValue("0");
        ed_mhcnt3.setValue("0");
        ed_mhcnt4.setValue("0");
        ed_fhhcnt1.setValue("0");
        ed_fhhcnt2.setValue("0");
        ed_fhhcnt3.setValue("0");
        ed_fhhcnt4.setValue("0");
      } else {
        var v_result = e.responseJSON.GAUCE[0].name;
        var arry = v_result.split("|");
        ed_mhcnt1type.setValue(arry[0]);
        ed_mhcnt2type.setValue(arry[1]);
        ed_mhcnt3type.setValue(arry[2]);
        ed_mhcnt4type.setValue(arry[3]);
        ed_fhhcnt1type.setValue(arry[0]);
        ed_fhhcnt2type.setValue(arry[1]);
        ed_fhhcnt3type.setValue(arry[2]);
        ed_fhhcnt4type.setValue(arry[3]);
        ed_mhcnt1.setValue(arry[4]);
        ed_mhcnt2.setValue(arry[5]);
        ed_mhcnt3.setValue(arry[6]);
        ed_mhcnt4.setValue(arry[7]);
        ed_fhhcnt1.setValue(arry[4]);
        ed_fhhcnt2.setValue(arry[5]);
        ed_fhhcnt3.setValue(arry[6]);
        ed_fhhcnt4.setValue(arry[7]);
      }
    }
  }
};
scwin.upperCaseGrid = function (e) {
  if (e.target && e.target.id) {
    var obj = window[e.target.id];
    if (!obj.options) return;
    var grid = obj.parentControl.org_id;
    var colId = obj.options.col_id;
    var bFind = false;
    switch (grid) {
      case "gr_ocHblhList":
        if (colId == "hhblno") {
          bFind = true;
        }
        break;
      case "gr_ocContList":
        break;
      case "gr_selling":
        if (colId == 'fareEngCd' || colId == 'crcCd') {
          bFind = true;
        }
        break;
      default:
        break;
    }
    if (bFind) {
      var oldVal = obj._oldValue;
      var val = obj.getValue().toUpperCase();
      obj.setValue(val);
      obj._oldValue = oldVal;
    }
  }
};
scwin.upperCase = function (e) {
  var obj = window[e.target.id];
  if (obj && obj.getValue) {
    var oldVal = obj._oldValue;
    var val = obj.getValue().toUpperCase();
    obj.setValue(val);
    obj._oldValue = oldVal;
  }
};
scwin._insertRow = function (ds, pos) {
  if (!ds) {
    return;
  }
  if (pos != undefined) {
    idx = ds.insertRow(pos);
  } else {
    idx = ds.insertRow(ds.getRowCount());
  }
  ds.setRowPosition(idx);
  return idx;
};
scwin.f_chkDataLength = function () {
  var status = ds_ocMblhList.getRowStatus(0);
  var col = {
    'kcomcd': 6,
    // 대표 거래처 코드 (6)
    'mhno': 16,
    // CONSOL NO(16)
    'mhmblno': 20,
    // MASTER B/L NUMBER(16)
    'mhio': 1,
    // IN/OUT 구분(1)
    'mhmrnno': 11,
    // MRN NO (11)
    'mhmsnno': 4,
    // MSN NO    (4)
    'mhlinercd': 6,
    // 선사코드 (6)
    'mhlinernm': 50,
    // 선사명 (50)
    'mhlinerattn': 2,
    // 선사담당자코드(2)
    'mhlinerattnnm': 20,
    // 선사담당자명 (20)
    'mhbuyer': 4,
    // DEPT코드 (4)
    'mhbuyernm': 50,
    // DEPT명 (50)
    'mhscd': 6,
    // SHIPPER CODE(6)
    'mhsnm': 100,
    // SHIPPER NAME(50)
    'mhccd': 6,
    // CONSIGNEE CODE(6)
    'mhcnm': 100,
    // CONSIGNEE NAME(50)
    'mhncd': 6,
    // NOTIFY CODE(6)
    'mhnnm': 100,
    // NOTIFY NAME(50)
    'mhfvsl': 25,
    // 이전 선명(25)
    'mhfvyg': 11,
    // 이전 항차(11)
    'mhvsl': 25,
    // 선명(25)
    'mhvyg': 11,
    // 항차 (11)
    'mhlodcd': 6,
    // LOADING PORT CODE(6)
    'mhlodnm': 35,
    // LOADING PORT NAME(35)
    'mhdisccd': 6,
    // DISCHARGING PORT CODE (6)
    'mhdiscnm': 35,
    // DISCHARGING PORT NAME(35)
    'mhdlvcd': 6,
    // DELIVERY CODE (6)
    'mhdlvnm': 35,
    // DELIVERY NAME(35)
    'mhdescd': 6,
    // DESTINATION CODE(6)
    'mhdesnm': 35,
    // DESTINATION NAME(35)
    'mhetd': 8,
    // 출항일(8)
    'mheta': 8,
    // 도착일(8)
    'mhfeta': 8,
    // 실제도착일 (8)
    'mhcrdt': 8,
    // 실적일자 (8)
    'mhunit': 11,
    // UNIT (11)
    'mhcur': 3,
    // 통화단위(3)
    'mhcurdt': 8,
    // 환율일자(8)
    'mhandt': 8,
    // ARRIVAL 일자 (8)
    'mhattn': 20,
    // 담당자명(20)
    'mhcschk': 1,
    // CONSOL CHECK(1)
    'mhpccd': 1,
    // PREPAID/COLLECT 구분 (1)
    'mhediliner': 4,
    // EDI 선사코드(4)
    'groupNo': 16,
    // GROUP_NO(16)
    'mhflc': 1,
    // FCL/LCL/BULK/CHARTER 구분(1)
    'mhunitcd': 2,
    // UNIT CD(2)
    'mexgb': 2,
    // 환율구분(2)
    'mhbltype': 1,
    // B/L TYPE(1)
    'mhlinecd': 6,
    // LINER CODE(6)
    'mhlinenm': 50,
    // LINER NAME(50)
    'mhlineattn': 2,
    // LINER 담당자(2)
    'mhlineattnnm': 20,
    // LINER 담당자명(20)
    'mleta': 8,
    // 국내도착일(ML)(8)
    'mdetd': 8,
    // 국내출항일(MD)(8)
    'mlrmk1': 50,
    // 비고(ML)(50)
    'mdrmk1': 50,
    // 비고(MD1)(50)
    'mdrmk2': 50,
    // 비고(MD2)(50)
    'mharea': 6,
    // LOCATION코드(6)
    'mhareanm': 50,
    // LOCATION명(50)
    'mhdanggb': 1,
    // 위험물구분(1)
    'mhcnt1type': 4,
    // 컨테이너 종류(4)
    'mhcnt2type': 4,
    // 컨테이너 종류(4)
    'mhcnt3type': 4,
    // 컨테이너 종류(4)
    'mhcnt4type': 4,
    // 컨테이너 종류(4)
    'odrNo': 13,
    'mhitem': 8,
    // ITEM (8)
    'mhitemNm': 50,
    // ITEM NAME1 (50)
    'inpid': 8,
    // 입력자 ID(8)
    'inpdt': 8,
    // 입력일(8)
    'updid': 8,
    // 수정자 ID(8)
    'upddt': 8,
    // 수정일(8)
    'mhstdt': 8,
    // 수출'
    'mhvslcd': 4,
    // VESSEL CODE(4)
    'mhactcust': 6,
    // CUSTOMER (6)
    'mhactcustnm': 50,
    // CUSTOMER NAME (50)
    'custom': 3,
    // 세관 코드
    'customnm': 20,
    // 세관 명
    'depart': 2,
    // 세관 과 코드
    'departnm': 20,
    // 세관 과 명
    'mhwarecd': 8,
    // 장치장 코드
    'mhwarenm': 50,
    // 장치장명
    'mhondt': 50
  };
  for (var item in col) {
    var value = ds_ocMblhList.getCellData(0, item);
    value = truncateByByte(value, col[item]);
    ds_ocMblhList.setCellData(0, item, value);
  }
  ds_ocMblhList.modifyAllStatus(status);
  function truncateByByte(str, maxBytes) {
    let currentBytes = 0;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);

      // 한글 및 특수문자 (UTF-8 기준 대략적 계산)
      // 0x0800보다 크면 보통 3바이트, 그 외엔 1~2바이트
      const byte = char > 127 ? 2 : 1;
      if (currentBytes + byte <= maxBytes) {
        currentBytes += byte;
        result += str.charAt(i);
      } else {
        break;
      }
    }
    return result;
  }

  // 데이터 보완
  if (ds_ocMblhList.getCellData(0, 'mhcnt1') == '') ds_ocMblhList.setCellData(0, 'mhcnt1', '0');
  if (ds_ocMblhList.getCellData(0, 'mhcnt2') == '') ds_ocMblhList.setCellData(0, 'mhcnt2', '0');
  if (ds_ocMblhList.getCellData(0, 'mhcnt3') == '') ds_ocMblhList.setCellData(0, 'mhcnt3', '0');
  if (ds_ocMblhList.getCellData(0, 'mhcnt4') == '') ds_ocMblhList.setCellData(0, 'mhcnt4', '0');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhblno',placeholder:'',style:'width:200px;',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperCase',maxlength:'20','ev:onblur':'scwin.cnd_ed_hhblno_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mhmblno',placeholder:'',style:'width:200px;','ev:onblur':'scwin.cnd_ed_mhmblno_onblur',ref:'data:ds_ocMblhList.mhmblno',dataType:'string',textAlign:'left',validateOnInput:'true',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'retrieveEngClntInfo',style:'display:none','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_udc_ilcomCode_onblurNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tab_main',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Header',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Freight',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VSL/VOY',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_mhvslcd',codeId:'ed_mhvslcd',nameId:'txt_mhvsl',btnId:'img_PopUp1','ev:onclickEvent':'scwin.udc_mhvslcd_onclickEvent',ref:'data:ds_vessel.hhvslcd',refDataCollection:'ds_vessel',skipOnBlurCodeValueEmpty:'N',code:'hhvslcd',name:'hhvsl',maxlengthCode:'6',maxlengthName:'50',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onviewchangeCodeEvent':'scwin.udc_mhvslcd_onviewchangeCodeEvent','ev:onblurNameEvent':'scwin.udc_mhvslcd_onblurNameEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhvyg',placeholder:'',style:'width:150px;','ev:onblur':'scwin.ed_mhvyg_onblur',ref:'data:ds_vessel.hhvyg',dataType:'string',textAlign:'left',maxlength:'10',allowChar:'a-zA-Z0-9','ev:onkeydown':'scwin.upperCase'}},{T:1,N:'xf:input',A:{id:'hd_hblCnt',style:'width: 144px;height: 21px;display:none;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ocHblhList',id:'gr_ocHblhList',style:'',visibleRowNum:'4',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_ocHblhList_oncellclick','ev:oncelldblclick':'scwin.gr_ocHblhList_oncelldblclick','ev:onheaderclick':'scwin.gr_ocHblhList_onheaderclick',readOnly:'true',columnMove:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_ocHblhList_oneditend','ev:onkeyup':'scwin.upperCaseGrid'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'checkbox',width:'40',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',value:'House No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'Package',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',value:'Weight',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',value:'Measure',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',value:'F/L',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col7',value:'W/H CODE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'col8',value:'W/H',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col9',value:'%',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',hidden:'true',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhblno',inputType:'text',width:'100',textAlign:'left',allowChar:'a-zA-Z0-9',editType:'focus',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhpkg',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxLength:'10',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhgwgt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.###',maxLength:'13.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhmsr',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.###',maxLength:'11.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhbltype',inputType:'autoComplete',width:'80',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhwarecd',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhwarenm',inputType:'text',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhmsrrate',inputType:'text',width:'70',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',id:'grpBtn1',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'N',cancelFunction:'scwin.f_cancelRow',rowAddFunction:'scwin.f_addRow',gridID:'gr_ocHblhList',btnRowAddObj:'btn_AddRow1',btnCancelObj:'btn_CancelRow1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Container Information',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ocContList',gridUpYn:'N',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ocContList',id:'gr_ocContList',style:'',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col1',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',value:'Container',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'Type',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',value:'Seal No1',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',value:'Seal No2',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mchblno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mccntno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mctype',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcseal1',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcseal2',inputType:'text',width:'150',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt1type',placeholder:'',style:'width: 50px;',ref:'data:ds_ocMblhList.mhcnt1type',dataType:'string',textAlign:'left',objType:'data',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_mhcnt1type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp11',style:'',type:'button','ev:onclick':'scwin.img_PopUp11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt2type',placeholder:'',style:'width: 50px;',ref:'data:ds_ocMblhList.mhcnt2type',dataType:'string',textAlign:'left',objType:'data',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_mhcnt2type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp12',style:'',type:'button','ev:onclick':'scwin.img_PopUp12_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt3type',placeholder:'',style:'width: 50px;',ref:'data:ds_ocMblhList.mhcnt3type',dataType:'string',textAlign:'left',objType:'data',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_mhcnt3type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp13',style:'',type:'button','ev:onclick':'scwin.img_PopUp13_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt4type',placeholder:'',style:'width: 50px;',ref:'data:ds_ocMblhList.mhcnt4type',dataType:'string',textAlign:'left',objType:'data',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_mhcnt4type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp14',style:'',type:'button','ev:onclick':'scwin.img_PopUp14_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt1',placeholder:'',style:'width:75px;',ref:'data:ds_ocMblhList.mhcnt1',dataType:'string',textAlign:'right',objType:'data',maxlength:'3',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt2',placeholder:'',style:'width:75px;',ref:'data:ds_ocMblhList.mhcnt2',dataType:'string',textAlign:'right',objType:'data',maxlength:'3',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt3',placeholder:'',style:'width:75px;',ref:'data:ds_ocMblhList.mhcnt3',dataType:'string',textAlign:'right',objType:'data',maxlength:'3',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt4',placeholder:'',style:'width:75px;',ref:'data:ds_ocMblhList.mhcnt4',dataType:'string',textAlign:'right',objType:'data',maxlength:'3',allowChar:'0-9'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Performance Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ocProfitList',id:'gr_ocProfitList',style:'',visibleRowNum:'1',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',value:'Selling',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',value:'Buying',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'Profit',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selling',inputType:'text',textAlign:'right',width:'150',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buying',inputType:'text',textAlign:'right',width:'150',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'profit',inputType:'text',textAlign:'right',width:'150',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhpccd',ref:'data:ds_ocMblhList.mhpccd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PrePaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhflc',ref:'data:ds_ocMblhList.mhflc',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Consol'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_comCode',A:{refDataCollection:'ds_ocMblhList',popupID:'',hideName:'Y',btnId:'img_PopUp2','ev:onclickEvent':'scwin.udc_mhlinercd_onclickEvent',codeId:'ed_mhlinercd',ref:'data:ds_ocMblhList.mhlinercd',nameId:'txt_mhlinernm',style:'',id:'udc_mhlinercd',objType:'data',code:'mhlinercd',name:'mhlinernm',allowCharCode:'0-9',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_mhlinercd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhlinercd_onviewchangeNameEvent',readOnlyName:'true'}},{T:1,N:'xf:input',A:{ref:'data:ds_ocMblhList.mhediliner',textAlign:'left',dataType:'string',style:'width:70px;',allowChar:'a-zA-Z0-9',id:'ed_mhediliner',placeholder:'',class:'',objType:'data',maxlength:'8'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_departmentChange',style:'',type:'button','ev:onclick':'scwin.pu_departmentChange_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]},{T:1,N:'w2:textbox',A:{class:'req',escape:'false',id:'',label:' &nbsp;',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhbuyer',placeholder:'',style:'width: 50px;',ref:'data:ds_ocMblhList.mhbuyer',dataType:'string',textAlign:'left',objType:'data',maxlength:'8',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_mhbuyer_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp3',style:'',type:'button','ev:onclick':'scwin.img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_mhscd',codeId:'ed_mhscd',nameId:'txt_mhsnm',btnId:'img_PopUp4','ev:onclickEvent':'scwin.udc_mhscd_onclickEvent',ref:'data:ds_ocMblhList.mhscd',refDataCollection:'ds_ocMblhList',code:'mhscd',name:'mhsnm',objType:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onviewchangeCodeEvent':'scwin.udc_mhscd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhscd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mhbuyernm',placeholder:'',style:'width:100px;',ref:'data:ds_ocMblhList.mhbuyernm',objType:'data',dataType:'string',textAlign:'left'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'',style:'',id:'udc_mhccd',codeId:'ed_mhccd',nameId:'txt_mhcnm',btnId:'img_PopUp5','ev:onclickEvent':'scwin.udc_mhccd_onclickEvent',ref:'data:ds_ocMblhList.mhccd',refDataCollection:'ds_ocMblhList',code:'mhccd',name:'mhcnm',objType:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onviewchangeCodeEvent':'scwin.udc_mhccd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhccd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'',style:'',id:'udc_mhncd',codeId:'ed_mhncd',nameId:'txt_mhnnm',btnId:'img_PopUp6','ev:onclickEvent':'scwin.udc_mhncd_onclickEvent',ref:'data:ds_ocMblhList.mhncd',refDataCollection:'ds_ocMblhList',code:'mhncd',name:'mhnnm',objType:'data',allowCharCode:'0-9',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_mhncd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhncd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhlodcd',codeId:'ed_mhlodcd',nameId:'txt_mhlodnm',btnId:'img_PopUp7','ev:onclickEvent':'scwin.udc_mhlodcd_onclickEvent',ref:'data:ds_ocMblhList.mhlodcd',refDataCollection:'ds_ocMblhList',code:'mhlodcd',name:'mhlodnm',objType:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z',maxlengthCode:'5','ev:onviewchangeCodeEvent':'scwin.udc_mhlodcd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhlodcd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhdisccd',codeId:'ed_mhdisccd',nameId:'txt_mhdiscnm',btnId:'img_PopUp8','ev:onclickEvent':'scwin.udc_mhdisccd_onclickEvent',ref:'data:ds_ocMblhList.mhdisccd',refDataCollection:'ds_ocMblhList',code:'mhdisccd',name:'mhdiscnm',objType:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z',maxlengthCode:'5','ev:onviewchangeCodeEvent':'scwin.udc_mhdisccd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mhdisccd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmrnno',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.mhmrnno',dataType:'string',textAlign:'left',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'11','ev:onkeyup':'scwin.upperCase'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmsnno',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.mhmsnno',dataType:'string',textAlign:'left',objType:'data',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperCase',maxlength:'4'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Warehouse',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_hhwarecd',codeId:'ed_hhwarecd',nameId:'txt_hhwarenm',btnId:'img_PopUp16','ev:onclickEvent':'scwin.udc_hhwarecd_onclickEvent',ref:'data:ds_ocMblhList.mhwarecd',refDataCollection:'ds_ocMblhList',code:'mhwarecd',name:'mhwarenm',objType:'data',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onviewchangeCodeEvent':'scwin.udc_hhwarecd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_hhwarecd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhpkg',placeholder:'',style:'width:110px;text-align:right;',ref:'data:ds_ocMblhList.mhpkg',dataType:'number',textAlign:'right',objType:'data',displayFormat:'#,###',maxlength:'10',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Unit',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mhunit',placeholder:'',style:'width:110px;',ref:'data:ds_ocMblhList.mhunit',objType:'data',dataType:'string',textAlign:'left'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhwgt',placeholder:'',style:'width:110px;text-align:right;',ref:'data:ds_ocMblhList.mhwgt',textAlign:'right',objType:'data',displayFormat:'#,##0.###',maxlength:'13.3',dataType:'float'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmsr',placeholder:'',style:'width:110px;text-align:right;',ref:'data:ds_ocMblhList.mhmsr',dataType:'float',textAlign:'right',objType:'data',displayFormat:'#,##0.###',maxlength:'11.3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mheta',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',ref:'data:ds_ocMblhList.mheta',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ed_mheta_onblur','ev:onviewchange':'scwin.ed_mhcnt1type_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhetd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',ref:'data:ds_ocMblhList.mhetd',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhcrdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',ref:'data:ds_ocMblhList.mhcrdt',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Status ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_status',ref:'data:ds_ocMblhList.status',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관할세관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',id:'udc_custom',codeId:'ed_custom',nameId:'ed_customnm',btnId:'img_PopUp17','ev:onclickEvent':'scwin.udc_custom_onclickEvent',ref:'data:ds_ocMblhList.custom',refDataCollection:'ds_ocMblhList',code:'custom',name:'customnm',objType:'data',maxlengthCode:'50',allowCharCode:'a-zA-Z0-9','ev:onviewchangeCodeEvent':'scwin.udc_custom_onviewchangeCodeEvent',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세관과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_depart',codeId:'ed_depart',nameId:'ed_departnm',btnId:'img_PopUp18','ev:onclickEvent':'scwin.udc_depart_onclickEvent',ref:'data:ds_ocMblhList.depart',refDataCollection:'ds_ocMblhList',code:'depart',name:'departnm',objType:'data',maxlengthCode:'50',allowCharCode:'a-zA-Z0-9','ev:onviewchangeCodeEvent':'scwin.udc_depart_onviewchangeCodeEvent',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Send Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_tDt',placeholder:'',style:'width:204px;',ref:'data:ds_ocMblhList.tdt',textAlign:'left',displayFormat:'####/##/##/##:##',disabled:'true',dataType:'text'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Register ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_userid',placeholder:'',style:'width:250px;',ref:'data:ds_ocMblhList.inpid',dataType:'string',allowChar:'a-zA-Z',maxlength:'50',textAlign:'left',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Update Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_userdt',pickerType:'dynamic',style:'',ref:'data:ds_ocMblhList.upddt',displayFormat:'yyyy/MM/dd',disabled:'true'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhcnt1type',placeholder:'',style:'width: 50px;',editType:'select',allowChar:'a-zA-Z0-9',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt1type',dataType:'string',objType:'data',maxlength:'4','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_fhhcnt1type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp35',style:'',type:'button','ev:onclick':'scwin.btn_trigger19_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhcnt2type',placeholder:'',style:'width:50px;',editType:'select',allowChar:'a-zA-Z0-9',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt2type',dataType:'string',objType:'data','ev:onkeyup':'scwin.upperCase',maxlength:'4','ev:onviewchange':'scwin.ed_fhhcnt2type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp36',style:'',type:'button','ev:onclick':'scwin.btn_trigger20_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhcnt3type',placeholder:'',style:'width: 50px;',editType:'select',allowChar:'a-zA-Z0-9',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt3type',dataType:'string',objType:'data',maxlength:'4','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_fhhcnt3type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp8',style:'',type:'button','ev:onclick':'scwin.btn_trigger21_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhcnt4type',placeholder:'',style:'width: 50px;',editType:'select',allowChar:'a-zA-Z0-9',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt4type',dataType:'string',objType:'data','ev:onkeyup':'scwin.upperCase',maxlength:'4','ev:onviewchange':'scwin.ed_fhhcnt4type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp9',style:'',type:'button','ev:onclick':'scwin.btn_trigger22_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fhhgwgt',placeholder:'',style:'width:150px;text-align:right;',editType:'select',dataType:'float',textAlign:'right',ref:'data:ds_ocMblhList.mhwgt',decimalPlace:'3',objType:'data',displayFormat:'#,###.###',maxlength:'13.3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhlodcd',placeholder:'',style:'width:100px;',editType:'select',allowChar:'a-zA-Z',textAlign:'left',ref:'data:ds_ocMblhList.mhlodcd',dataType:'string',objType:'data',maxlength:'5','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_fhhlodcd_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp26',style:'',type:'button','ev:onclick':'scwin.btn_trigger23_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container Quantity',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_fhhcnt1',placeholder:'',style:'width:75px;',editType:'select',dataType:'string',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt1',objType:'data',maxlength:'3',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fhhcnt2',placeholder:'',style:'width:75px;',editType:'select',dataType:'string',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt2',objType:'data',allowChar:'0-9',maxlength:'3'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fhhcnt3',placeholder:'',style:'width:75px;',editType:'select',dataType:'string',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt3',objType:'data',allowChar:'0-9',maxlength:'3'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_fhhcnt4',placeholder:'',style:'width:75px;',editType:'select',dataType:'string',textAlign:'right',ref:'data:ds_ocMblhList.mhcnt4',objType:'data',allowChar:'0-9',maxlength:'3'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fhhmsr',placeholder:'',style:'width:150px;text-align:right;',editType:'select',dataType:'float',textAlign:'right',ref:'data:ds_ocMblhList.mhmsr',decimalPlace:'3',objType:'data',displayFormat:'#,###.###',maxlength:'11.3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fhhdisccd',placeholder:'',style:'width:100px;',editType:'select',allowChar:'a-zA-Z',textAlign:'left',ref:'data:ds_ocMblhList.mhdisccd',dataType:'string',maxlength:'5',objType:'data','ev:onkeyup':'scwin.upperCase','ev:onviewchange':'scwin.ed_fhhdisccd_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp2',style:'',type:'button','ev:onclick':'scwin.btn_trigger24_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Selling Exchange Rate Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:410px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Currency',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_shhcucd',search:'start',style:'width:90px;',submenuSize:'auto',ref:'data:ds_ocMblhList.mhcur',objType:'data',emptyItem:'true',emptyIndex:'-1'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_shhexgb',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_ocMblhList.mexgb',objType:'data',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_shhcurdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_ocMblhList.mhcurdt','ev:onblur':'scwin.ed_shhcurdt_onblur',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_shhexrate',placeholder:'',style:'width:100px;',editType:'select',dataType:'float',displayFormat:'#,###.####',textAlign:'right',ref:'data:ds_ocMblhList.mhexrate',decimalPlace:'4',objType:'data',maxlength:'11.4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'US Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_shhuexrate',placeholder:'',style:'width:100px;',editType:'select',dataType:'float',displayFormat:'#,###.####',textAlign:'right',ref:'data:ds_ocMblhList.mhusdrate',decimalPlace:'4',objType:'data',maxlength:'11.4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_21',style:'',type:'button','ev:onclick':'scwin.btn_tariff_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_22',style:'',type:'button','ev:onclick':'scwin.btn_cusChg_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cus Chg'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_exRateChg_onclick',style:'',id:'btn_23',type:'button',class:'btn link'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate Chg'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_24',style:'',type:'button','ev:onclick':'scwin.btn_distribute_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배포'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_25',style:'',type:'button','ev:onclick':'scwin.btn_cancelDistribute_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배포취소'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Selling List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Customer',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',hideName:'Y',id:'udc_shhcust',codeId:'ed_shhcust',nameId:'txt_shhcustnm','ev:onclickEvent':'scwin.udc_shhcust_onclickEvent',ref:'data:ds_selling.bilgClntNo',objType:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onviewchangeCodeEvent':'scwin.udc_shhcust_onviewchangeCodeEvent'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_selling',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:'grd_section3'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_selling',id:'gr_selling',style:'',visibleRowNum:'8',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_selling_ontextimageclick','ev:onbeforeedit':'scwin.gr_selling_onbeforeedit','ev:onheaderclick':'scwin.gr_selling_onheaderclick',readOnly:'true',rowStatusVisible:'true',validFeatures:'ignoreStatus=no',validExp:'rsltsStdDt:Result:yes:length=8&date=YYYYMMDD,bilgClntNo:Customer:yes:length=6',dataName:'Selling List','ev:onkeyup':'scwin.upperCaseGrid','ev:onafteredit':'scwin.gr_selling_onafteredit','ev:onviewchange':'scwin.gr_selling_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'checkbox',width:'40'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'col2',inputType:'text',value:'SEQ',width:'60'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'col3',inputType:'text',value:'Customer',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col4',inputType:'text',value:'Name',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'col5',inputType:'text',value:'F/Code',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col6',inputType:'text',value:'Name',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'col7',inputType:'text',value:'Init',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'col8',inputType:'text',value:'통합매출입코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'col9',inputType:'text',value:'CUR',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'col10',inputType:'text',value:'Unit',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col11',inputType:'text',value:'Pkg',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col12',inputType:'text',value:'Rate',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col13',inputType:'text',value:'Amount',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col14',inputType:'text',value:'Ex-Rate',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col15',inputType:'text',value:'Amount(W)',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col16',inputType:'text',value:'VAT',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col17',inputType:'text',value:'Amount(US$)',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col18',inputType:'text',value:'Result',width:'90'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col19',inputType:'text',value:'Invoice No',width:'90',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'col20',inputType:'text',value:'Tariff Rate',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'col21',inputType:'text',value:'vatYn',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'col22',inputType:'text',value:'exRateTyp',width:'90'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col23',value:'배포여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',textAlign:'center',width:'40',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currow',inputType:'expression',textAlign:'center',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'textImage',textAlign:'left',width:'90',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',textAlign:'left',width:'90',maxLength:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z',displayMode:'label',id:'fareEngCd',inputType:'textImage',textAlign:'left',width:'90',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',textAlign:'left',width:'90',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'fareGrpCd',inputType:'text',textAlign:'left',width:'90',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'sellItemCd',inputType:'text',textAlign:'left',width:'120',maxLength:'4'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z',displayMode:'label',id:'crcCd',inputType:'text',textAlign:'center',width:'70',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareUnit',inputType:'select',textAlign:'center',width:'70',valueNotInList:'keepValue',hideValueWhenNotInLis:'true',noResult:'useData',selectedData:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_sellingUnit'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{dataType:'float',displayMode:'label',id:'chgWt',inputType:'text',textAlign:'right',width:'90',displayFormat:'#,##0.###',maxLength:'12.3'}},{T:1,N:'w2:column',A:{dataType:'float',displayMode:'label',id:'sellUpr',inputType:'text',textAlign:'right',width:'70',displayFormat:'#,##0.##',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',textAlign:'right',width:'90',dataType:'float',displayFormat:'#,##0.##',maxLength:'13.2'}},{T:1,N:'w2:column',A:{dataType:'float',displayMode:'label',id:'exRate',inputType:'text',textAlign:'right',width:'90',displayFormat:'#,##0.##',maxLength:'13.2'}},{T:1,N:'w2:column',A:{allowChar:'0-9',dataType:'number',displayMode:'label',id:'sellAmt',inputType:'text',textAlign:'right',width:'120',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'label',id:'vatAmt',inputType:'text',textAlign:'right',width:'80',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'usdAmt',inputType:'text',textAlign:'right',width:'120',dataType:'float',displayFormat:'#,##0.##',readOnly:'true',maxLength:'13.2'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'label',id:'rsltsStdDt',inputType:'calendar',textAlign:'center',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'certiNo',inputType:'text',textAlign:'left',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{allowChar:'0-9',displayMode:'label',id:'trfUpr',inputType:'text',textAlign:'right',width:'90',dataType:'number',displayFormat:'#,##0.##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'vatYn',inputType:'text',textAlign:'center',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'exRateTyp',inputType:'text',textAlign:'center',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'distributeYn',inputType:'text',textAlign:'center',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'txt_totSelling',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount($)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_SellingSumAmount',placeholder:'',style:'width:100px; text-align:right;',readOnly:'true',maxlength:'13.2',objType:'data',dataType:'float',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount(W)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_SellingSumAmountW',placeholder:'',style:'width:100px; text-align:right;',readOnly:'true',maxlength:'12',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VAT',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_SellingSumVat',placeholder:'',style:'width:100px; text-align:right;',readOnly:'true',maxlength:'12',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'AMOUNT(W+VAT)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_SellingAmountSum',placeholder:'',style:'width:100px; text-align:right;',readOnly:'true',maxlength:'12',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake_selling',placeholder:'',style:'width:50px;',objType:'data',allowChar:'0-9',maxlength:'2',dataType:'number'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_addRowF',rowDelFunction:'scwin.f_deleteRowF',cancelFunction:'scwin.f_cancelRowF',id:'grpBtn2',btnDelYn:'N',btnRowAddObj:'btn_FAddRow1',btnRowDelObj:'btn_FDelRow1',btnCancelObj:'btn_FCancelRow1'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_portRate',style:'',type:'button','ev:onclick':'scwin.btn_ediSend_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ktNet',style:'',type:'button','ev:onclick':'scwin.btn_ktNet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KT Net 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ktNet1',style:'',type:'button','ev:onclick':'scwin.btn_uLogisHub_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'uLogisHub 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ktNet2',style:'',type:'button','ev:onclick':'scwin.btn_plism_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PLISM 3.0 접속'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'R',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_trigger25',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_del',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display:none;'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_mhlinerattn',ref:'data:ds_ocMblhList.mhlinerattn'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhlinerattnnm',ref:'data:ds_ocMblhList.mhlinerattnnm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhfvsl',ref:'data:ds_ocMblhList.mhfvsl'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhfvyg',ref:'data:ds_ocMblhList.mhfvyg'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhdlvcd',ref:'data:ds_ocMblhList.mhdlvcd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhdlvnm',ref:'data:ds_ocMblhList.mhdlvnm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhdescd',ref:'data:ds_ocMblhList.mhdescd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhdesnm',ref:'data:ds_ocMblhList.mhdesnm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhfeta',ref:'data:ds_ocMblhList.mhfeta'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhandt',ref:'data:ds_ocMblhList.mhandt'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhattn',ref:'data:ds_ocMblhList.mhattn'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhcschk',ref:'data:ds_ocMblhList.mhcschk'}},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_groupNo',ref:'data:ds_ocMblhList.mGroupNo'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhunitcd',ref:'data:ds_ocMblhList.mhunitcd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhbltype',ref:'data:ds_ocMblhList.mhbltype'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhlinecd',ref:'data:ds_ocMblhList.mhlinecd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhlinenm',ref:'data:ds_ocMblhList.mhlinenm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhlineattn',ref:'data:ds_ocMblhList.mhlineattn'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhlineattnnm',ref:'data:ds_ocMblhList.mhlineattnnm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mleta',ref:'data:ds_ocMblhList.mleta'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mdetd',ref:'data:ds_ocMblhList.mdetd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mlrmk1',ref:'data:ds_ocMblhList.mlrmk1'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mdrmk1',ref:'data:ds_ocMblhList.mdrmk1'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mdrmk2',ref:'data:ds_ocMblhList.mdrmk2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mharea',ref:'data:ds_ocMblhList.mharea'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhareanm',ref:'data:ds_ocMblhList.mhareanm'}},{T:1,N:'xf:input',A:{class:'',id:'rd_mhdanggb',ref:'data:ds_ocMblhList.mhdanggb'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhstdt',ref:'data:ds_ocMblhList.mhstdt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',ref:'data:ds_ocMblhList.odrNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhitem',ref:'data:ds_ocMblhList.mhitem'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhitemNm',ref:'data:ds_ocMblhList.mhitemNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhactcust',ref:'data:ds_ocMblhList.mhactcust'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhactcustnm',ref:'data:ds_ocMblhList.mhactcustnm'}},{T:1,N:'xf:input',A:{class:'',id:'hd_mhvslcd',ref:'data:ds_ocMblhList.mhvslcd'}},{T:1,N:'xf:input',A:{class:'',id:'hd_mhvsl',ref:'data:ds_ocMblhList.mhvsl'}},{T:1,N:'xf:input',A:{class:'',id:'hd_mhvyg',ref:'data:ds_ocMblhList.mhvyg'}},{T:1,N:'xf:input',A:{class:'',id:'txt_fhhlodnm',ref:'data:ds_ocMblhList.mhlodnm'}},{T:1,N:'xf:input',A:{class:'',id:'txt_fhhdiscnm',ref:'data:ds_ocMblhList.mhdiscnm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhondt',ref:'data:ds_ocMblhList.mhondt'}}]}]}]}]})