/*amd /ui/il/seainb/sibl/se_202_01_01b.xml 139800 6ee719fb2008f0d5e8d7121cfc7d9cdf0fb2d3e8b62662ea46a2c998bda17d55 */
define({declaration:{A:{version:'1.0',encoding:'utf-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Doc NO (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mheta',name:'출항일(8)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order No',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_vessel'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'mhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'inpid',name:'inpid',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhvslcd',name:'Vessel CD (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhvsl',name:'Vessel Name (16)',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hhvyg',name:'Voyage (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_gridHouseList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT 구분 (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'FACKAGE (N10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT (N13,3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE (N11,3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'CARGO TYPE (1)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'dma_retrieveMhno',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveNo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',name:'DOC NO (CND) (16)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocHblhList',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_ocHblhList_onrowpositionchange','ev:ondataload':'scwin.ds_ocHblhList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'FACKAGE (N10)',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT (N13,3)',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE (N11,3)',dataType:'string',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'CARGO TYPE (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'DEPT (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'DEPT NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'PARTNER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'PARTNER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'LOADING (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'LOADING NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'DISCHARGE (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'DISCHARGE NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'PLACE OF DELIVERY (5)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'PLACE OF DELIVERY NAME (35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hharea',name:'AREA (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'AREA NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhunit',name:'UNIT NAME (10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'cready_dt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhondt',name:'ONBOARD (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'ITEM (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'ITEM NAME1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'VESSEL (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'VESSEL NAME (25)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'VOYAGE (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'CUSTOMER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'CUSTOMER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'LINER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L (CND) (16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'hhc3',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc4',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarecd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc5',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs3',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs4',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs5',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhio',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc2',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs2',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpaynm',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarenm',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpono',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmsrrate',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisunm',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsales',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autono',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhncd',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhstype',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn1',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn2',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn3',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn4',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn5',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhccd',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhscd',name:'name145',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'name146',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocContList',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_ocContList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mccntno',name:'CONTAINER  (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mctype',name:'TYPE  (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'SEAL NO1 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'SEAL NO2 (20)',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocMblhList',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_ocMblhList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhmblno',name:'MASTER B/L NUMBER(16)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhmrnno',name:'MRN NO (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhmsnno',name:'MSN NO    (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinercd',name:'선사코드 (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinernm',name:'선사명 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinerattn',name:'선사담당자코드(2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinerattnnm',name:'선사담당자명 (20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhediliner',name:'EDI 선사코드(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhbuyer',name:'DEPT코드 (4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhbuyernm',name:'DEPT명 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhscd',name:'SHIPPER CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhsnm',name:'SHIPPER NAME(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhccd',name:'CONSIGNEE CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnm',name:'CONSIGNEE NAME(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhncd',name:'NOTIFY CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhnnm',name:'NOTIFY NAME(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhfvsl',name:'이전 선명(25)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhfvyg',name:'이전 항차(11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlodcd',name:'LOADING PORT CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlodnm',name:'LOADING PORT NAME(35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdisccd',name:'DISCHARGING PORT CODE (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdiscnm',name:'DISCHARGING PORT NAME(35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdlvcd',name:'DELIVERY CODE (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdlvnm',name:'DELIVERY NAME(35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdescd',name:'DESTINATION CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdesnm',name:'DESTINATION NAME(35)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhetd',name:'출항일(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mheta',name:'도착일(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhfeta',name:'실제도착일 (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcrdt',name:'실적일자 (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhunit',name:'UNIT (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhpkg',name:'PACKAGE(N10)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhwgt',name:'WEIGHT(N12.3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhmsr',name:'MEASURE(N11.3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhexrate',name:'환율(N11.3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcur',name:'통화단위(3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcurdt',name:'환율일자(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhandt',name:'ARRIVAL 일자 (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhattn',name:'담당자명(20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcschk',name:'CONSOL CHECK(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhpccd',name:'PREPAID/COLLECT 구분 (1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhusdrate',name:'USD환율(15.3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mGroupNo',name:'mGroupNo',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhflc',name:'FCL/LCL/BULK/CHARTER 구분(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhunitcd',name:'UNIT CD(2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mexgb',name:'환율구분(2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhbltype',name:'B/L TYPE(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinecd',name:'LINER CODE(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlinenm',name:'LINER NAME(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlineattn',name:'LINER 담당자(2)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhlineattnnm',name:'LINER 담당자명(20)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mleta',name:'국내도착일(ML)(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mdetd',name:'국내출항일(MD)(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mlrmk1',name:'비고(ML)(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mdrmk1',name:'비고(MD1)(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mdrmk2',name:'비고(MD2)(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mharea',name:'LOCATION코드(6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhareanm',name:'LOCATION명(50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhdanggb',name:'위험물구분(1)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt1type',name:'컨테이너 종류(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt2type',name:'컨테이너 종류(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt3type',name:'컨테이너 종류(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt4type',name:'컨테이너 종류(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt1',name:'컨테이너 수량(N3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt2',name:'컨테이너 수량(N3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt3',name:'컨테이너 수량(N3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhcnt4',name:'컨테이너 수량(N3)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhstdt',name:'수출:ETD / 수입:ETA(8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhitem',name:'ITEM (8)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhitemNm',name:'ITEM NAME1 (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhactcust',name:'CUSTOMER (6)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhactcustnm',name:'CUSTOMER NAME (50)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhvslcd',name:'VESSEL CODE(4)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhvsl',name:'선명(25)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhvyg',name:'항차 (11)',dataType:'string'}},{T:1,N:'w2:column',A:{id:'mhondt',name:'mhondt',dataType:'string'}},{T:1,N:'w2:column',A:{id:'updid',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhio',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'name144',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_invoiceCheck',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipTax',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_slipTax_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'CUSTOMER',dataType:'string'}},{T:1,N:'w2:column',A:{id:'intendDt',name:'BILLING DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'TAX DATE',dataType:'string'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'SLIP NO',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_masterHouseBlList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocProfitList',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_ocProfitList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',name:'usd',dataType:'string'}},{T:1,N:'w2:column',A:{id:'buying',name:'krw',dataType:'string'}},{T:1,N:'w2:column',A:{id:'profit',name:'krw',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_cndmhmblno',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_DeptChangeParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'string'}},{T:1,N:'w2:key',A:{id:'modrNo',name:'modrNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'hodrNo',name:'hodrNo',dataType:'string'}},{T:1,N:'w2:key',A:{id:'dept',name:'dept',dataType:'string'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'deptnm',dataType:'string'}},{T:1,N:'w2:key',A:{id:'bulkGb',name:'bulkGb',dataType:'string'}},{T:1,N:'w2:key',A:{id:'spRtn',name:'spRtn',dataType:'string'}},{T:1,N:'w2:key',A:{id:'spMsg',name:'spMsg',dataType:'string'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',baseNode:'list',repeatNode:'map','ev:onload':'scwin.ds_hmhno_onload','ev:ondataload':'scwin.ds_hmhno_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'Mhno code',dataType:'string'}},{T:1,N:'w2:column',A:{id:'name',name:'Mhno name',dataType:'string'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'파라메터5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'파라메터6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'파라메터7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'파라메터8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'파라메터9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'파라메터10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'파라메터11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'파라메터12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'파라메터13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'파라메터14',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seainb.sibl.RetrieveSeaImportVesselCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"dma_vessel","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_vessel","key":"OUT_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHouse',action:'/il.seainb.sibl.RetrieveSeaImportMasterBlCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_vessel","key":"IN_DS1"},{"id":"ds_ocHblhList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_retrieveHouse_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGridHouse',action:'/il.seainb.sibl.RetrieveSeaImportGridHouseCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_gridHouseList","key":"IN_DS1"},{"id":"ds_gridHouseList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_gridHouseList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_retrieveGridHouse_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_createMhno',action:'/il.seainb.sibl.RetrieveMhnoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_retrieveNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveNo","key":"OUT_DS1"}]',mediatype:'application/json'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMhno',action:'/il.seainb.sibl.RetrieveSeaImportMasterBlMhnoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_retrieveMhno_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seainb.sibl.SaveMasterBlCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_ocHblhList","key":"IN_DS1"},{"id":"ds_ocMblhList","key":"IN_DS2"},{"id":"ds_ocContList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ocContList","key":"OUT_DS1"}]',mediatype:'application/json','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seainb.sibl.DeleteMasterBlCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"}]',target:'data:json,[]',mediatype:'application/json','ev:submitdone':'scwin.sbm_delete_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',mediatype:'application/json'}},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'asynchronous',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',mediatype:'application/json'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : se_202_01_01b
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

//--------------------------------------------------------------------------
// 메세지 상수 선언
//--------------------------------------------------------------------------
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.statusFlag = ""; // 수정/등록 Flag(C:Regist, U:Update,I:Init)
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.mhnoFlag = "0"; // 1일때 mhno onloadComplete후 조회.

// JSP 파라미터/세션 변수
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

// 화면용 변수
scwin.v_linkcheck = "";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_vslcd = "";
scwin.v_vsl = "";
scwin.v_vyg = "";

// hidden/display:none 대응 변수
scwin.ed_mharea = "";
scwin.txt_mhareanm = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_mhio = "I";
scwin.hd_mhvslcd = "";
scwin.hd_mhvsl = "";
scwin.hd_mhvyg = "";
scwin.currow = 0;
scwin.onpageload = function () {
  // 세션/회원정보
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  scwin.p_lobranCd = $c.data.getMemInfo($p, "lobranCd") || " ";
  scwin.p_lobranNm = $c.data.getMemInfo($p, "lobranNm") || "";

  // 파라미터
  scwin.p_linkcheck = $c.data.getParameter($p, "linkcheck") || "";
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.p_blno = $c.data.getParameter($p, "blno") || "";
  scwin.p_mhno = $c.data.getParameter($p, "mhno") || "";
  scwin.p_bkno = $c.data.getParameter($p, "bkno") || "";
  scwin.p_vslcd = $c.data.getParameter($p, "vslcd") || "";
  scwin.p_vsl = $c.data.getParameter($p, "vsl") || "";
  scwin.p_vyg = $c.data.getParameter($p, "vyg") || "";

  // 화면용 변수 세팅
  scwin.v_linkcheck = scwin.p_linkcheck;
  scwin.v_kcomcd = scwin.p_kcomcd;
  scwin.v_blno = scwin.p_blno;
  scwin.v_mhno = scwin.p_mhno;
  scwin.v_bkno = scwin.p_bkno;
  scwin.v_vslcd = scwin.p_vslcd;
  scwin.v_vsl = scwin.p_vsl;
  scwin.v_vyg = scwin.p_vyg;
  // 날짜
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
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

  //  default 동부국제물류
  scwin.p_clntNo = commDTO.clntNo;
  scwin.p_clntNm = commDTO.name1;
};
//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_DefaultValue();
  scwin.f_getParametrSetting(scwin.v_linkcheck);
};

// sbm_comCode 실행 + 결과 복사
scwin._comboQueue = scwin._comboQueue || Promise.resolve();
scwin._pick = function (obj, path, fallback) {
  var cur = obj;
  var parts = String(path || "").split(".");
  for (var i = 0; i < parts.length; i++) {
    var key = parts[i];
    if (!key) continue;
    if (cur && Object.prototype.hasOwnProperty.call(cur, key)) {
      cur = cur[key];
    } else {
      return fallback;
    }
  }
  return cur == null ? fallback : cur;
};
scwin._applyToDataList = function (dl, data) {
  if (!dl || !data) return;
  if (dl.setJSON) {
    dl.setJSON(data);
    return;
  }
  if (dl.removeAll) dl.removeAll();
  if (dl.setJSON) {
    dl.setJSON(data);
    return;
  }
};
scwin.execComboAndCopy = function (params, options) {
  options = options || {};
  var target = options.target;
  var responsePath = options.responsePath || "GAUCE";
  var transform = options.transform;
  if (!target) throw new Error("options.target(DataList) is required");
  scwin._comboQueue = scwin._comboQueue.then(function () {
    dma_comCode.set("sysCd", params.sysCd || "");
    dma_comCode.set("queryId", params.queryId || "");
    dma_comCode.set("param1", params.param1 || "");
    dma_comCode.set("param2", params.param2 || "");
    dma_comCode.set("param3", params.param3 || "");
    dma_comCode.set("param4", params.param4 || "");
    dma_comCode.set("param5", params.param5 || "");
    dma_comCode.set("param6", params.param6 || "");
    dma_comCode.set("param7", params.param7 || "");
    dma_comCode.set("param8", params.param8 || "");
    dma_comCode.set("param9", params.param9 || "");
    dma_comCode.set("param10", params.param10 || "");
    dma_comCode.set("param11", params.param11 || "");
    dma_comCode.set("param12", params.param12 || "");
    dma_comCode.set("param13", params.param13 || "");
    dma_comCode.set("param14", params.param14 || "");
    return async function () {
      return await $c.sbm.execute($p, sbm_comCode).then(function (e) {
        var json = e && e.responseJSON ? e.responseJSON : {};
        var data = scwin._pick(json, responsePath, null);
        if (transform) data = transform(data, e);
        scwin._applyToDataList(target, data);
        return e;
      });
    }();
  });
  scwin._comboQueue = scwin._comboQueue.catch(function () {});
  return scwin._comboQueue;
};
scwin._parseQuery = function (url) {
  var idx = String(url || "").indexOf("?");
  if (idx < 0) return {};
  var q = url.substring(idx + 1);
  var obj = {};
  var parts = q.split("&");
  for (var i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    var kv = parts[i].split("=");
    var key = decodeURIComponent(kv[0] || "");
    var val = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
    obj[key] = val;
  }
  return obj;
};
scwin._execDataId = function (ds, url) {
  var q = scwin._parseQuery(url);
  var params = {
    sysCd: q.sysCd || "",
    queryId: q.queryId || "",
    param1: q.param1 || "",
    param2: q.param2 || "",
    param3: q.param3 || "",
    param4: q.param4 || "",
    param5: q.param5 || "",
    param6: q.param6 || "",
    param7: q.param7 || "",
    param8: q.param8 || "",
    param9: q.param9 || "",
    param10: q.param10 || "",
    param11: q.param11 || "",
    param12: q.param12 || "",
    param13: q.param13 || "",
    param14: q.param14 || ""
  };
  if (ds && ds.removeAll) ds.removeAll();
  return scwin.execComboAndCopy(params, {
    target: ds
  });
};
scwin._insertRow = function (ds) {
  if (!ds || !ds.insertRow) return;
  ds.insertRow(ds.getRowCount());
  ds.setRowPosition(ds.getRowCount() - 1);
};

// Parameter Setting
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "3":
      // house Search에서 옴.
      scwin.mhnoFlag = "1";
      cnd_ed_hhblno.setValue(scwin.v_blno);
      scwin.hd_kcomcd = scwin.v_kcomcd;
      if (ds_hmhno.getRowCount() == 0) {
        scwin._insertRow(ds_hmhno);
      }
      var row = ds_hmhno.getRowPosition();
      ds_hmhno.setCellData(row, "code", scwin.v_mhno);
      ds_hmhno.setCellData(row, "name", scwin.v_mhno);
      cnd_lc_mhno.setSelectedIndex(0);
      scwin.f_Retrieve();
      break;
    case "5":
      // House B/L에서 보냄.(create)
      scwin.f_Create();
      ed_mhvslcd.setValue(scwin.v_vslcd);
      txt_mhvsl.setValue(scwin.v_vsl);
      ed_mhvyg.setValue(scwin.v_vyg);
      scwin.f_RetrieveVessel();
      break;
  }
};

// 초기화
scwin.f_DefaultValue = function () {
  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay();
  rd_mhdanggb.setValue("N");
  // cnd_ed_hhblno.focus();
};

// 화면세팅
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      ed_mhactcust.setDisabled(true); //tobe : 위에 함수로 disable되지 않아서 추가.
      $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_1, btn_3, btn_4, btn_6, btn_8, btn_AddRow1, btn_CancelRow1, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_5, btn_7]);
      scwin.f_DisablePopUpObj();
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", false);
      gr_ocHblhList.setColumnReadOnly("chk", true);
      gr_ocHblhList.setColumnReadOnly("hhblno", true);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      //조회모드
      $c.gus.cfDisableKeyData($p);
      ed_mhactcust.setDisabled(true); //tobe : 위에 함수로 disable되지 않아서 추가.
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_AddRow1, btn_CancelRow1]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Delete, btn_1, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, pu_departmentChange]);
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", false);
      gr_ocHblhList.setColumnReadOnly("chk", true);
      gr_ocHblhList.setColumnReadOnly("hhblno", true);
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      scwin.statusFlag = "";
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      ed_mhactcust.setDisabled(false); //tobe : 위에 함수로 enable되지 않아서 추가.
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_1, btn_3, btn_4, btn_6, btn_8, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_5, btn_7, btn_AddRow1, btn_CancelRow1]);
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", true);
      gr_ocHblhList.setColumnReadOnly("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", false); // TODO: uppercase enforcement if needed
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]);
      scwin.statusFlag = "C";

      // 추가
      ed_mhcnt1.setValue(0);
      ed_mhcnt2.setValue(0);
      ed_mhcnt3.setValue(0);
      ed_mhcnt4.setValue(0);
      ed_mhpkg.setValue(0);
      ed_mhwgt.setValue(0);
      ed_mhmsr.setValue(0);
      txt_mhlinernm.setDisabled(true);
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete, btn_1, btn_3, btn_4, btn_6, btn_8]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_5, btn_7, btn_AddRow1, btn_CancelRow1, pu_departmentChange]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      gr_ocHblhList.setReadOnly("grid", false);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocHblhList.setColumnVisible("chk", true);
      gr_ocHblhList.setColumnReadOnly("chk", false);
      gr_ocHblhList.setColumnReadOnly("hhblno", false); // TODO: uppercase enforcement if needed
      gr_ocHblhList.setColumnReadOnly("hhpkg", true);
      gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
      gr_ocHblhList.setColumnReadOnly("hhmsr", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      $c.gus.cfDisableObjects($p, [cnd_ed_hhblno, cnd_lc_mhno, cnd_ed_mhmblno]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]);
      scwin.statusFlag = "U";
      txt_mhlinernm.setDisabled(true);
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

// PopUp 이미지를 활성화 시킨다.
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [udc_mhvslcd, udc_mhlinercd, img_PopUp3, udc_mhscd, udc_mhccd, udc_mhncd, udc_mhlodcd, udc_mhdisccd, udc_mhdlvcd, udc_mhitem,
  //udc_mhactcust, 
  //img_PopUp11, // tobe : asis는 같은 id로 된 컨포넌트가 2개여서 충돌나서 활성화도 비활성화도 안됨.
  img_PopUp12, img_PopUp13, img_PopUp14]);
};

// PopUp 이미지를 비활성화 시킨다.
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [udc_mhvslcd, udc_mhlinercd, img_PopUp3, udc_mhscd, udc_mhccd, udc_mhncd, udc_mhlodcd, udc_mhdisccd, udc_mhdlvcd, udc_mhitem,
  //udc_mhactcust,  
  //img_PopUp11, // tobe : asis는 같은 id로 된 컨포넌트가 2개여서 충돌나서 활성화도 비활성화도 안됨.
  img_PopUp12, img_PopUp13, img_PopUp14]);
};

// 항목 Disable
scwin.f_ContentsDisplay = function () {
  if (scwin.statusFlag == "I" || scwin.statusFlag == "") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    $c.gus.cfEnableObj($p, udc_mhvslcd, false);
    $c.gus.cfEnableObj($p, ed_mhvyg, false);
  } else if (scwin.statusFlag == "C") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, udc_mhvslcd, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
  } else if (scwin.statusFlag == "U") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, udc_mhvslcd, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
  }
};

// dataset 초기
scwin.f_dataSetClear = function () {
  dma_vessel.setEmptyValue();
  ds_ocHblhList.removeAll();
  ds_ocContList.removeAll();
  ds_ocMblhList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
};

// 행추가
scwin.f_addRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // House B/L
      var vslcd = dma_vessel.get("hhvslcd") || "";
      var vsl = dma_vessel.get("hhvsl") || "";
      var vyg = dma_vessel.get("hhvyg") || "";
      if (vslcd == "" && vsl == "" && vyg == "") {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else {
        scwin._insertRow(ds_ocHblhList);
        var r = ds_ocHblhList.getRowPosition();
        ds_ocHblhList.setCellData(r, "kcomcd", scwin.hd_kcomcd);
        ds_ocHblhList.setCellData(r, "hhio", scwin.hd_mhio);
        ds_ocHblhList.setCellData(r, "chk", "T");

        // 총건수
        total1.setValue(r + 1);
      }
      break;
  }
};

// 행취소
scwin.f_cancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // House B/L
      var rowStatusC = ds_ocHblhList.getRowIndexByStatus("C");
      if (rowStatusC.length > 0) {
        ds_ocHblhList.removeRows(rowStatusC);
        ds_ocHblhList.setRowPosition(0);
      } else {
        ds_ocHblhList.undoRow(ds_ocHblhList.getRowPosition());
      }
      scwin.f_MasterSum();
      scwin.f_masterHouseBlList();

      // 총건수
      total1.setValue(ds_ocHblhList.getRowCount());
      break;
  }
};

// 검증
scwin.f_validate = async function () {
  // var ret = await $c.gus.cfValidate([ed_mhetd, ed_mheta]);
  // if (!ret) {
  //     return false;
  // }

  if (ed_mheta.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["ETA"]); //await $c.gus.cfAlertMsg(E_MSG_CM_ERR_002, ["ETA"]);
    return false;
  }
  if (ed_mhbuyer.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department"]);
    ed_mhbuyer.focus();
    return false;
  }
  if (ed_mhitem.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]);
    ed_mhitem.focus();
    return false;
  }
  if (ed_mhetd.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_mhetd.getValue(), ed_mheta.getValue())) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETD", "ETA"]);
      ed_mheta.focus();
      return false;
    }
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_mhetd.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_mheta.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_mhetd.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_mheta.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }
  if ($c.date.diffDate($p, ed_mhetd.getValue(), ed_mheta.getValue()) > 149) {
    await $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }
  return true;
};

// 조회
scwin.f_Retrieve = async function () {
  if ($c.str.trim($p, cnd_lc_mhno.getValue()) == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_043, ["Document No"]);
    return;
  }
  cnd_lc_mhno.focus();
  dma_retrieve.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve.set("hhblno", cnd_ed_hhblno.getValue());
  dma_retrieve.set("mhno", cnd_lc_mhno.getValue());
  dma_retrieve.set("mhio", scwin.hd_mhio);
  $c.sbm.execute($p, sbm_retrieveMhno);
};

// Create 시 조회 (Vessel 로 조회)
scwin.f_RetrieveVessel = async function () {
  if (scwin.statusFlag == "C") {
    if (ed_mhvslcd.getValue() == "" && txt_mhvsl.getValue() == "" && ed_mhvyg.getValue() == "") {
      ds_ocHblhList.removeAll();
      ds_ocContList.removeAll();
      ds_ocMblhList.removeAll();
      return;
    }
    dma_vessel.set("kcomcd", scwin.hd_kcomcd);
    dma_vessel.set("mhio", scwin.hd_mhio);
    dma_vessel.set("inpid", scwin.userId);
    await $c.sbm.execute($p, sbm_retrieveHouse);
    ed_mheta.focus();
    ed_mhvslcd.focus();
  } else if (scwin.statusFlag == "U") {}
};

// 조회 조건 지우기
scwin.f_FieldClear = function () {
  if (!cnd_ed_hhblno.getDisabled()) {
    $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_mhmblno]);
    ds_hmhno.removeAll();
  }
};

// 신규
scwin.f_Create = function () {
  scwin.f_FieldClear();
  ed_mhvslcd.setValue("");
  txt_mhvsl.setValue("");
  ed_mhvyg.setValue("");
  scwin.f_dataSetClear();

  //dma_vessel.AddRow();		//tobe삭제: map형태라 불필요
  ds_ocMblhList.insertRow();
  ds_ocMblhList.setRowPosition(0);
  scwin.f_Set("CREATE");
  scwin.f_ContentsDisplay();
  rd_mhdanggb.setValue("N");
  ed_mhvslcd.focus();
};

// 수정
scwin.f_Update = async function () {
  if (ed_mheta.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  } else if ($c.str.trim($p, cnd_lc_mhno.getValue()) == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Master B/L Information"]);
    return;
  } else {
    scwin.f_Set("UPDATE");
    scwin.f_ContentsDisplay();
    await scwin.f_invoiceCheck();
    if (scwin.invoiceCheck == "1") {
      $c.gus.cfDisableObjects($p, [ed_mhbuyer, txt_mhbuyernm, img_PopUp3]);
    } else {
      $c.gus.cfEnableObjects($p, [ed_mhbuyer, txt_mhbuyernm, img_PopUp3]);
    }
    ed_mhvslcd.focus();
  }
};

// 저장
scwin.f_Save = async function () {
  if (ds_ocHblhList.getModifiedIndex().length > 0 || ds_ocMblhList.getModifiedIndex().length > 0) {
    if (await scwin.f_validate()) {
      if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001))) {
        //저장하시겠습니까?		
        if (scwin.statusFlag == "C") {
          // MHNO NO 를 생성및 가져온다. 
          dma_retrieve.set("mheta", ed_mheta.getValue());
          dma_retrieve.set("hhblno", "");
          await $c.sbm.execute($p, sbm_createMhno);

          //mhno 넣어 주기.	
          ds_hmhno.removeAll();
          var json = {
            "code": ds_retrieveNo.getCellData(0, "mhno"),
            //ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition(), "mhno"),
            "name": ds_retrieveNo.getCellData(0, "mhno") //ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition(), "mhno")
          };
          ds_hmhno.setRowJSON(0, json); //ds_hmhno.setRowJSON(ds_hmhno.getRowPosition(), json);

          cnd_lc_mhno.setSelectedIndex(0);
          //House B/L 정보 
          for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
            var vChkYn = ds_ocHblhList.getCellData(i, "chk");
            ds_ocHblhList.setCellData(i, "mhno", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
            ds_ocHblhList.setCellData(i, "hhmblno", cnd_ed_mhmblno.getValue());
            ds_ocHblhList.setCellData(i, "chk", vChkYn);
            ds_ocHblhList.setCellData(i, "inpid", scwin.userId);
            ds_ocHblhList.modifyRowStatus(i, "C");
          }
          var rowMbl = ds_ocMblhList.getRowPosition() || 0;
          ds_ocMblhList.setCellData(rowMbl, "kcomcd", scwin.hd_kcomcd);
          ds_ocMblhList.setCellData(rowMbl, "mhio", scwin.hd_mhio);
          ds_ocMblhList.setCellData(rowMbl, "mhno", ds_retrieveNo.getCellData(ds_retrieveNo.getRowPosition() || 0, "mhno"));
        } else if (scwin.statusFlag == "U") {
          for (var j = 0; j < ds_ocHblhList.getRowCount(); j++) {
            var vChkYnU = ds_ocHblhList.getCellData(j, "chk");
            ds_ocHblhList.setCellData(j, "mhno", cnd_lc_mhno.getValue());
            ds_ocHblhList.setCellData(j, "hhmblno", cnd_ed_mhmblno.getValue());
            ds_ocHblhList.setCellData(j, "chk", vChkYnU);
            ds_ocHblhList.setCellData(j, "inpid", scwin.userId);
          }
        }

        // 실행 	 											        		    	   	    
        $c.sbm.execute($p, sbm_save);

        //tobe변경 : sbm_save_submitdone으로 이동
        // scwin.f_Retrieve();
        // scwin.f_Set("SAVE");
        // scwin.f_ContentsDisplay();// 조건 display			    					       	      				 	 	
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House B/L"]); // @은(는) 변경된 사항이 없습니다.
  }
};

// 취소
scwin.f_Cancel = function () {
  if (scwin.statusFlag == "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    dma_vessel.undo();
    scwin.f_cancelRow(1);
    ds_ocContList.undoAll();
    ds_ocMblhList.undoAll();
  }
  scwin.f_ContentsDisplay();
  cnd_ed_hhblno.focus();
};

// 삭제
scwin.f_Delete = async function () {
  if ($c.str.trim($p, cnd_lc_mhno.getValue()) == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  }
  await scwin.f_invoiceCheck();
  if (scwin.invoiceCheck == "1") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
    return;
  }
  if ($c.str.trim($p, ed_mhmrnno.getValue()) != "") {
    await $c.win.alert($p, "MRN Information alreay exists.\nFirst Delete MRN Information.");
    return;
  }
  var retValue = await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_004));
  if (retValue) {
    dma_retrieve.set("odrNo", ds_ocMblhList.getCellData(ds_ocMblhList.getRowPosition(), "odrNo"));
    ds_ocHblhList.setCellData(ds_ocHblhList.getRowPosition(), "inpid", scwin.userId);
    $c.sbm.execute($p, sbm_delete);
  }
};

// 팝업 호출
scwin.f_PopUp = function (disGubun, chgGubun) {
  /* function normalizeRtn(rtnList) {
      if (!rtnList || rtnList == "N/A") return null;
      if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;
      if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) return rtnList[0];
      if (Array.isArray(rtnList)) return rtnList;
      var arr = [];
      if (rtnList.code != null) arr[0] = rtnList.code;
      if (rtnList.name != null) arr[1] = rtnList.name;
      return arr.length ? arr : null;
  }
   function getVal(comp) {
      if (!comp) return "";
      if (typeof comp.getValue === "function") return String(comp.getValue() || "").trim();
      return String(comp || "").trim();
  }
   function setVal(comp, v) {
      if (!comp) return;
      if (typeof comp.setValue === "function") comp.setValue(v);
  }
   function openCommon(args) {
      var onReturn = function (rtnList) {
          var r = normalizeRtn(rtnList);
          if (!r) {
              if (typeof args.onEmpty === "function") args.onEmpty();
              return;
          }
          if (typeof args.onReturn === "function") args.onReturn(rtnList, r);
      };
       udc_ilcomCode.setSelectId(args.selectId);
      udc_ilcomCode.ilCommonPopUp(
          onReturn,
          getVal(args.codeComp),
          args.nameComp ? getVal(args.nameComp) : "",
          args.winCloseTF,
          args.colCnt,
          args.titles,
          args.widths,
          args.hideCols,
          args.whereOpt || "",
          args.winW || "500",
          args.winH || "500",
          args.posY || "",
          args.posX || "",
          args.dupTF || "",
          args.allTF || "F",
          args.winTitle || "",
          args.noDataTF || ""
      );
  } */

  switch (disGubun) {
    case "Liner":
      udc_mhlinercd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhlinercd, txt_mhlinernm);
        if (rtnList[6].trim() != "N/A") {
          ed_mhediliner.setValue(rtnList[8]);
        }
      }, ed_mhlinercd.getValue().trim(), txt_mhlinernm.getValue(), chgGubun, "10", "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Liner search,Liner Code,Liner Name");
      break;
    case "Shipper":
      udc_mhscd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhscd, txt_mhsnm);
      },
      // XML상의 SELECT ID	                                                   							
      ed_mhscd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_mhsnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
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
      "F",
      // 전체검색허용여부	("F")                                                  
      'Shipper search,Shipper Code,Shipper Name');
      break;
    case "Consignee":
      udc_mhccd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhccd, txt_mhcnm);
        if (ed_mhccd.getValue() != "") {
          if (scwin.statusFlag == "C") {
            ed_mhncd.setValue(ed_mhccd.getValue());
            txt_mhnnm.setValue(txt_mhcnm.getValue());
          }
        }
      },
      // XML상의 SELECT ID	                                                   							
      ed_mhccd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_mhcnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
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
      "F",
      // 전체검색허용여부	("F")                                                  
      'Consignee search,Consignee Code,Consignee Name');
      break;
    case "Notify":
      udc_mhncd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhncd, txt_mhnnm);
      },
      // XML상의 SELECT ID	                                                   							
      ed_mhncd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_mhnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
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
      "F",
      // 전체검색허용여부	("F")                                                  
      'Notify search,Notify Code,Notify Name');
      break;
    case "Customer":
      udc_mhactcust.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhactcust, txt_mhactcustnm);
      },
      // XML상의 SELECT ID	                                                   							
      ed_mhactcust.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_mhactcustnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
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
      "F",
      // 전체검색허용여부	("F")                                                  
      'Customer search,Customer Code,Customer Name');
      break;
  }
};

// 공통팝업 열기
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  /* function normalizeRtn(rtnList) {
      if (!rtnList || rtnList == "N/A") return null;
      if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;
      if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) return rtnList[0];
      if (Array.isArray(rtnList)) return rtnList;
      var arr = [];
      if (rtnList.code != null) arr[0] = rtnList.code;
      if (rtnList.name != null) arr[1] = rtnList.name;
      return arr.length ? arr : null;
  }
   function getVal(comp) {
      if (!comp) return "";
      if (typeof comp.getValue === "function") return String(comp.getValue() || "").trim();
      return String(comp || "").trim();
  }
   function setVal(comp, v) {
      if (!comp) return;
      if (typeof comp.setValue === "function") comp.setValue(v);
  }
   function openCommon(args) {
      var onReturn = function (rtnList) {
          var r = normalizeRtn(rtnList);
          if (!r) {
              if (typeof args.onEmpty === "function") args.onEmpty();
              return;
          }
          if (typeof args.onReturn === "function") args.onReturn(rtnList, r);
      };
       udc_ilcomCode.setSelectId(args.selectId);
      udc_ilcomCode.ilCommonPopUp(
          onReturn,
          getVal(args.codeComp),
          args.nameComp ? getVal(args.nameComp) : "",
          args.winCloseTF,
          args.colCnt,
          args.titles,
          args.widths,
          args.hideCols,
          args.whereOpt || "",
          args.winW || "500",
          args.winH || "500",
          args.posY || "",
          args.posX || "",
          args.dupTF || "",
          args.allTF || "F",
          args.winTitle || "",
          args.noDataTF || ""
      );
  } */

  switch (gubun1) {
    case "Vessel":
      udc_mhvslcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhvslcd, txt_mhvsl);
      }, ed_mhvslcd.getValue().trim(), txt_mhvsl.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
      break;
    case "DEPT":
      udc_mhbuyer.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhbuyer, txt_mhbuyernm);
      }, ed_mhbuyer.getValue().trim(), txt_mhbuyernm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "Loading":
      udc_mhlodcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhlodcd, txt_mhlodnm);
      }, ed_mhlodcd.getValue().trim(), txt_mhlodnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "Discharge":
      udc_mhdisccd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhdisccd, txt_mhdiscnm);
      }, ed_mhdisccd.getValue().trim(), txt_mhdiscnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "Delivery":
      udc_mhdlvcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhdlvcd, txt_mhdlvnm);
      }, ed_mhdlvcd.getValue().trim(), txt_mhdlvnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Delivery,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      udc_mhitem.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhitem, txt_mhitemNm);
      }, ed_mhitem.getValue().trim(), txt_mhitemNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "ContainerType1":
      udc_mhcnt1type.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt1type, "");
      }, ed_mhcnt1type.getValue().trim() //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType2":
      udc_mhcnt2type.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt2type, "");
      }, ed_mhcnt2type.getValue().trim() //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType3":
      udc_mhcnt3type.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt3type, "");
      }, ed_mhcnt3type.getValue().trim() //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType4":
      udc_mhcnt4type.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mhcnt4type, "");
      }, ed_mhcnt4type.getValue().trim() //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
  }
};

// onblur 핸들러
scwin.cnd_ed_hhblno_onblur = function (e) {
  cnd_ed_hhblno.setValue($c.str.trim($p, cnd_ed_hhblno.getValue()));
  if (cnd_ed_hhblno.getValue() != "") {
    scwin.f_MhnoLoading();
    cnd_ed_mhmblno.setValue("");
  }
};
scwin.cnd_ed_mhmblno_onblur = function (e) {
  cnd_ed_mhmblno.setValue($c.str.trim($p, cnd_ed_mhmblno.getValue()));
  if (scwin.statusFlag != "C" && scwin.statusFlag != "U") {
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
  if (ed_mhvslcd.originalValue == ed_mhvslcd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhvslcd.getValue());
  if (strClntNo.length > 0) {
    txt_mhvsl.setValue("");
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    txt_mhvsl.setValue("");
  }
};
scwin.ed_mhlinercd_onblur = function (e) {
  if (ed_mhlinercd.originalValue == ed_mhlinercd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhlinercd.getValue());
  if (strClntNo.length > 0) {
    txt_mhlinernm.setValue("");
    scwin.f_PopUp("Liner", "T");
  } else {
    txt_mhlinernm.setValue("");
  }
};
scwin.udc_mhbuyer_onblurCodeEvent = function (e) {
  if (ed_mhbuyer.originalValue == ed_mhbuyer.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhbuyer.getValue());
  if (strClntNo.length > 0) {
    txt_mhbuyernm.setValue("");
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    txt_mhbuyernm.setValue("");
  }
};
scwin.ed_mhscd_onblur = function (e) {
  if (ed_mhscd.originalValue == ed_mhscd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhscd.getValue());
  if (strClntNo.length > 0) {
    txt_mhsnm.setValue("");
    scwin.f_PopUp("Shipper", "T");
  } else {
    txt_mhsnm.setValue("");
  }
};
scwin.ed_mhccd_onblur = function (e) {
  if (ed_mhccd.originalValue == ed_mhccd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhccd.getValue());
  if (strClntNo.length > 0) {
    txt_mhcnm.setValue("");
    scwin.f_PopUp("Consignee", "T");
  } else {
    txt_mhcnm.setValue("");
  }
};
scwin.ed_mhncd_onblur = function (e) {
  if (ed_mhncd.originalValue == ed_mhncd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhncd.getValue());
  if (strClntNo.length > 0) {
    txt_mhnnm.setValue("");
    scwin.f_PopUp("Notify", "T");
  } else {
    txt_mhnnm.setValue("");
  }
};
scwin.ed_mhlodcd_onblur = function (e) {
  if (ed_mhlodcd.originalValue == ed_mhlodcd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhlodcd.getValue());
  if (strClntNo.length > 0) {
    txt_mhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    txt_mhlodnm.setValue("");
  }
};
scwin.ed_mhdisccd_onblur = function (e) {
  if (ed_mhdisccd.originalValue == ed_mhdisccd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhdisccd.getValue());
  if (strClntNo.length > 0) {
    txt_mhdiscnm.setValue("");
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    txt_mhdiscnm.setValue("");
  }
};
scwin.ed_mhdlvcd_onblur = function (e) {
  if (ed_mhdlvcd.originalValue == ed_mhdlvcd.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhdlvcd.getValue());
  if (strClntNo.length > 0) {
    txt_mhdlvnm.setValue("");
    scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
  } else {
    txt_mhdlvnm.setValue("");
  }
};
scwin.ed_mharea_onblur = function (e) {
  var strClntNo = $c.str.trim($p, scwin.ed_mharea);
  if (strClntNo.length > 0) {
    scwin.txt_mhareanm = "";
    scwin.f_OpenCommonPopUp("Area", "T", "F", "F");
  } else {
    scwin.txt_mhareanm = "";
  }
};
scwin.ed_mhitem_onblur = function (e) {
  if (ed_mhitem.originalValue == ed_mhitem.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhitem.getValue());
  if (strClntNo.length > 0) {
    txt_mhitemNm.setValue("");
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  } else {
    txt_mhitemNm.setValue("");
  }
};
scwin.ed_mhactcust_onblur = function (e) {
  if (ed_mhactcust.originalValue == ed_mhactcust.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhactcust.getValue());
  if (strClntNo.length > 0) {
    txt_mhactcustnm.setValue("");
    scwin.f_PopUp("Customer", "T");
  } else {
    txt_mhactcustnm.setValue("");
  }
};
scwin.ed_mheta_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    if (ed_mhcrdt.getValue() == "") {
      ed_mhcrdt.setValue(ed_mheta.getValue());
    }
  }
};
scwin.udc_mhcnt1type_onblurCodeEvent = function (e) {
  if (ed_mhcnt1type.originalValue == ed_mhcnt1type.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhcnt1type.getValue());
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
  }
};
scwin.udc_mhcnt2type_onblurCodeEvent = function (e) {
  if (ed_mhcnt2type.originalValue == ed_mhcnt2type.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhcnt2type.getValue());
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
  }
};
scwin.udc_mhcnt3type_onblurCodeEvent = function (e) {
  if (ed_mhcnt3type.originalValue == ed_mhcnt3type.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhcnt3type.getValue());
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
  }
};
scwin.udc_mhcnt4type_onblurCodeEvent = function (e) {
  if (ed_mhcnt4type.originalValue == ed_mhcnt4type.getValue()) return;
  var strClntNo = $c.str.trim($p, ed_mhcnt4type.getValue());
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
  }
};

// UDC 이벤트
scwin.udc_mhvslcd_onblurCodeEvent = function (info) {
  if (ed_mhvslcd.originalValue == ed_mhvslcd.getValue()) return;
  scwin.ed_mhvslcd_onblur();
};
scwin.udc_mhvslcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Vessel", "F", "F", "F");
};
scwin.udc_mhlinercd_onblurCodeEvent = function (e) {
  if (ed_mhlinercd.originalValue == ed_mhlinercd.getValue()) return;
  scwin.ed_mhlinercd_onblur();
};
scwin.udc_mhlinercd_onclickEvent = function (e) {
  scwin.f_PopUp("Liner", "F");
};
scwin.udc_mhscd_onblurCodeEvent = function (e) {
  if (ed_mhscd.originalValue == ed_mhscd.getValue()) return;
  scwin.ed_mhscd_onblur();
};
scwin.udc_mhscd_onclickEvent = function (e) {
  scwin.f_PopUp("Shipper", "F");
};
scwin.udc_mhccd_onblurCodeEvent = function (e) {
  if (ed_mhccd.originalValue == ed_mhccd.getValue()) return;
  scwin.ed_mhccd_onblur();
};
scwin.udc_mhccd_onclickEvent = function (e) {
  scwin.f_PopUp("Consignee", "F");
};
scwin.udc_mhncd_onblurCodeEvent = function (e) {
  if (ed_mhncd.originalValue == ed_mhncd.getValue()) return;
  scwin.ed_mhncd_onblur();
};
scwin.udc_mhncd_onclickEvent = function (e) {
  scwin.f_PopUp("Notify", "F");
};
scwin.udc_mhlodcd_onblurCodeEvent = function (e) {
  if (ed_mhlodcd.originalValue == ed_mhlodcd.getValue()) return;
  scwin.ed_mhlodcd_onblur();
};
scwin.udc_mhlodcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Loading", "F", "F", "F");
};
scwin.udc_mhdisccd_onblurCodeEvent = function (e) {
  if (ed_mhdisccd.originalValue == ed_mhdisccd.getValue()) return;
  scwin.ed_mhdisccd_onblur();
};
scwin.udc_mhdisccd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Discharge", "F", "F", "F");
};
scwin.udc_mhdlvcd_onblurCodeEvent = function (e) {
  if (ed_mhdlvcd.originalValue == ed_mhdlvcd.getValue()) return;
  scwin.ed_mhdlvcd_onblur();
};
scwin.udc_mhdlvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Delivery", "F", "F", "F");
};
scwin.udc_mhactcust_onblurCodeEvent = function (info) {
  if (ed_mhactcust.originalValue == ed_mhactcust.getValue()) return;
  scwin.ed_mhactcust_onblur();
};
scwin.udc_mhactcust_onclickEvent = function (e) {
  scwin.f_PopUp("Customer", "F");
};
scwin.udc_mhitem_onblurCodeEvent = function (e) {
  if (ed_mhitem.originalValue == ed_mhitem.getValue()) return;
  scwin.ed_mhitem_onblur();
};
scwin.udc_mhitem_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
};

//-------------------------------------------------------------------------
// 조회용 MHNO 콤보 로딩
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = function () {
  var param1 = $c.str.trim($p, cnd_ed_hhblno.getValue());
  if (param1.length > 0) {
    scwin._execDataId(ds_hmhno, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1);
  } else {
    cnd_lc_mhno.setValue("");
  }
};

//-------------------------------------------------------------------------
// Master Sum
//-------------------------------------------------------------------------
scwin.f_MasterSum = function () {
  var hhpkg = 0;
  var hhgwgt = 0;
  var hhmsr = 0;
  ed_mhpkg.setValue("");
  ed_mhwgt.setValue("");
  ed_mhmsr.setValue("");
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    if (ds_ocHblhList.getCellData(i, "chk") == "T") {
      hhpkg = Number(ds_ocHblhList.getCellData(i, "hhpkg")) || 0;
      hhgwgt = Number(ds_ocHblhList.getCellData(i, "hhgwgt")) || 0;
      hhmsr = Number(ds_ocHblhList.getCellData(i, "hhmsr")) || 0;
      ed_mhpkg.setValue(Number(ed_mhpkg.getValue()) + hhpkg);
      ed_mhwgt.setValue(Number(ed_mhwgt.getValue()) + hhgwgt);
      ed_mhmsr.setValue(Number(ed_mhmsr.getValue()) + hhmsr);
    }
  }
};

//-------------------------------------------------------------------------
// Master House B/L List
//-------------------------------------------------------------------------
scwin.f_masterHouseBlList = function () {
  var checked = 0;
  var v_hhblno = "";
  var checkRow = gr_ocHblhList.getCheckedIndex("chk");
  for (var i = 0; i < checkRow.length; i++) {
    v_hhblno = v_hhblno + ds_ocHblhList.getCellData(checkRow[i], "hhblno") + "','";
  }
  v_hhblno = v_hhblno.substring(0, v_hhblno.length - 3);
  scwin._execDataId(ds_masterHouseBlList, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportMasterEBC&queryId=retrivematerHouseBlList&param1=" + scwin.hd_kcomcd + "&param2=" + v_hhblno).then(function () {
    var row = ds_masterHouseBlList.getRowPosition() || 0;
    var v_result = ds_masterHouseBlList.getCellData(row, "name") || "";

    // v_result = ds_masterHouseBlList.NameValue(ds_masterHouseBlList.RowPosition, "NAME");

    arry = v_result.split("|");
    if (ds_masterHouseBlList.getRowCount() == 0) {
      ed_mhcnt1type.setValue("");
      ed_mhcnt2type.setValue("");
      ed_mhcnt3type.setValue("");
      ed_mhcnt4type.setValue("");
      ed_mhcnt1.setValue(0);
      ed_mhcnt2.setValue(0);
      ed_mhcnt3.setValue(0);
      ed_mhcnt4.setValue(0);
    } else {
      ed_mhcnt1type.setValue(arry[0]);
      ed_mhcnt2type.setValue(arry[1]);
      ed_mhcnt3type.setValue(arry[2]);
      ed_mhcnt4type.setValue(arry[3]);
      ed_mhcnt1.setValue(arry[4]);
      ed_mhcnt2.setValue(arry[5]);
      ed_mhcnt3.setValue(arry[6]);
      ed_mhcnt4.setValue(arry[7]);
    }
  });
};

//-------------------------------------------------------------------------
// Invoice Check
//-------------------------------------------------------------------------
scwin.f_invoiceCheck = async function () {
  scwin.invoiceCheck = "0";
  var param1 = $c.str.trim($p, ed_odrNo.getValue());
  if (param1 == "") {
    return;
  }
  await scwin._execDataId(ds_invoiceCheck, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportHouseEBC&queryId=retriveInvoiceCheckCombo&param1=" + param1);
  if (ds_invoiceCheck.getRowCount() > 0) {
    var row = ds_invoiceCheck.getRowPosition() || 0;
    if (ds_invoiceCheck.getCellData(row, "code") != "0") {
      scwin.invoiceCheck = "1";
    }
  }
};

//-------------------------------------------------------------------------
// CND MBL List Combo
//-------------------------------------------------------------------------
scwin.f_CndMhmblnoLoading = function () {
  var strClntNo = $c.str.trim($p, cnd_ed_mhmblno.getValue());
  scwin._execDataId(ds_cndmhmblno, "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportMasterEBC&queryId=retriveMasterBlListCombo&param1=" + scwin.hd_kcomcd + "&param2=" + strClntNo).then(function () {
    ds_hmhno.removeAll();
    if (ds_cndmhmblno.getRowCount() == 0) {
      scwin._insertRow(ds_hmhno);
      var row = ds_hmhno.getRowPosition();
      ds_hmhno.setCellData(row, "code", "NONE");
      ds_hmhno.setCellData(row, "name", "NONE");
      cnd_lc_mhno.setSelectedIndex(0);
      return;
    }
    for (var i = 0; i < ds_cndmhmblno.getRowCount(); i++) {
      scwin._insertRow(ds_hmhno);
      var rowH = ds_hmhno.getRowPosition();
      ds_hmhno.setCellData(rowH, "code", ds_cndmhmblno.getCellData(i, "code"));
      ds_hmhno.setCellData(rowH, "name", ds_cndmhmblno.getCellData(i, "name"));
    }
    cnd_lc_mhno.setSelectedIndex(0);
  });
};

//-------------------------------------------------------------------------
// Department Change Popup
//-------------------------------------------------------------------------
scwin.f_departmentChange = async function () {
  var opt = {
    width: "460",
    height: "280",
    id: "popDeptChange",
    title: "Department Change",
    popupName: "Department Change",
    modal: true
  };
  var data = {
    pdept: ed_mhbuyer.getValue(),
    pdeptnm: txt_mhbuyernm.getValue()
  };
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml", opt, data);
  if (!rtnList || rtnList == "N/A") {
    return;
  }
  if (rtnList[0] == "N/A" && $c.str.trim($p, rtnList[1]) != "" && $c.str.trim($p, rtnList[2])) {
    dma_DeptChangeParam.setEmptyValue();
    dma_DeptChangeParam.set("modrNo", ds_ocMblhList.getCellData(ds_ocMblhList.getRowPosition(), "odrNo"));
    dma_DeptChangeParam.set("hodrNo", "");
    dma_DeptChangeParam.set("kcomcd", scwin.hd_kcomcd);
    dma_DeptChangeParam.set("bulkGb", "");
    dma_DeptChangeParam.set("dept", rtnList[1]);
    dma_DeptChangeParam.set("deptnm", rtnList[2]);
    var retValue = await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001));
    if (retValue) {
      await $c.sbm.execute($p, sbm_DeptChange);
      var row = ds_DeptChangeResult.getRowPosition() || 0;
      var spRtn = ds_DeptChangeResult.getCellData(row, "spRtn");
      if (spRtn == "0") {
        txt_mhbuyernm.setValue($c.str.trim($p, rtnList[2]));
        ed_mhbuyer.setValue($c.str.trim($p, rtnList[1]));
        $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_009);
      } else {
        $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_008);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 일반 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.btn_AddRow1_onclick = function (e) {
  scwin.f_addRow(1);
};
scwin.btn_CancelRow1_onclick = function (e) {
  scwin.f_cancelRow(1);
};
scwin.udc_mhcnt1type_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType1", "F", "F", "F");
};
scwin.udc_mhcnt2type_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType2", "F", "F", "F");
};
scwin.udc_mhcnt3type_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType3", "F", "F", "F");
};
scwin.udc_mhcnt4type_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType4", "F", "F", "F");
};
scwin.udc_mhbuyer_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("DEPT", "F", "F", "F");
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
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
  $c.win.openMenu($p, title, path, menuId, param || {}, {
    openAction: "exist"
  });
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
scwin.btn_1_onclick = function (e) {
  scwin.f_openPgm("Partner");
};
scwin.btn_3_onclick = function (e) {
  scwin.f_openPgm("Profit");
};
scwin.btn_4_onclick = function (e) {
  scwin.f_openPgm("paymentINV");
};
scwin.btn_8_onclick = function (e) {
  scwin.f_openPgm("MasterFreight");
};
scwin.btn_5_onclick = function (e) {
  scwin.f_openPgm("HouseBLFind");
};
scwin.btn_6_onclick = function (e) {
  scwin.f_openPgm("SRPrint");
};
scwin.btn_7_onclick = function (e) {
  scwin.f_openPgm("MasterBLFind");
};

// TR 이벤트
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (!(dma_vessel.get("hhvslcd") || dma_vessel.get("hhvsl") || dma_vessel.get("hhvyg"))) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      scwin.f_dataSetClear();
      $c.gus.cfInitObjects($p, [tb_masterColumn]); // TODO: 컴포넌트 존재 확인
      scwin.f_Set("INIT");
    } else {
      scwin.f_Set("RETRIEVE");
    }
  }
};
scwin.sbm_retrieveMhno_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (ds_ocMblhList.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      scwin.f_dataSetClear();
      $c.gus.cfInitObjects($p, [tb_masterColumn]); // TODO: 컴포넌트 존재 확인
      scwin.f_Set("INIT");
    } else {
      await scwin.f_invoiceCheck();
      scwin.f_Set("RETRIEVE");
      gr_ocHblhList.setFocusedCell(0, "hhblno");
      gr_ocContList.setFocusedCell(0, "mccntno");
      gr_ocProfitList.setFocusedCell(0, "selling");
      gr_ocExpHList.setFocusedCell(0, "clntNo");
    }
  }
};
scwin.sbm_retrieveHouse_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (ds_ocHblhList.getRowCount() == 0 && (dma_vessel.get("hhvslcd") || dma_vessel.get("hhvsl") || dma_vessel.get("hhvyg"))) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  }
  scwin.f_Retrieve();
  scwin.f_Set("SAVE");
  scwin.f_ContentsDisplay();
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004); // 성공적으로 저장하였습니다
  }
  scwin.f_FieldClear();
  ed_mhvslcd.setValue("");
  txt_mhvsl.setValue("");
  ed_mhvyg.setValue("");
  scwin.f_dataSetClear();
  $c.gus.cfInitObjects($p, [tb_masterColumn]); // TODO: 컴포넌트 존재 확인

  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay();
  cnd_ed_hhblno.focus();
};

// DataList 이벤트
scwin.ds_ocHblhList_onrowpositionchange = function (info) {
  var row = info && info.newRowIndex != null ? info.newRowIndex : ds_ocHblhList.getRowPosition();
  var st = ds_ocHblhList.getRowStatus(row);
  var canEdit = st == "C" || st == "I" || st == 1;
  gr_ocHblhList.setColumnReadOnly("hhblno", !canEdit);
  gr_ocHblhList.setColumnReadOnly("hhpkg", true);
  gr_ocHblhList.setColumnReadOnly("hhgwgt", true);
  gr_ocHblhList.setColumnReadOnly("hhmsr", true);
  gr_ocHblhList.setColumnReadOnly("hhbltype", true);
};
scwin.ds_hmhno_ondataload = async function (e) {
  if (ds_hmhno.getRowCount() == 0) {
    if (scwin.statusFlag != "C") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]);
    }
    scwin._insertRow(ds_hmhno);
    var row = ds_hmhno.getRowPosition();
    ds_hmhno.setCellData(row, "code", "NONE");
    ds_hmhno.setCellData(row, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.statusFlag == "C") {
    ds_hmhno.removeAll();
    scwin._insertRow(ds_hmhno);
    var rowC = ds_hmhno.getRowPosition();
    ds_hmhno.setCellData(rowC, "code", "NONE");
    ds_hmhno.setCellData(rowC, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.mhnoFlag == "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};
scwin.ds_ocHblhList_ondataload = function (e) {
  total1.setValue(ds_ocHblhList.getRowCount());
  if (ds_ocHblhList.getRowCount() > 0) {
    ds_ocHblhList.setRowPosition(0);
  }
  if (scwin.statusFlag != "C") {
    return;
  }
  if (ds_ocHblhList.getRowCount() == 0) {
    return;
  }
  var rowJson = ds_ocHblhList.getRowJSON(0);
  ed_mhlinercd.setValue(rowJson.hhliner);
  if (ed_mhlinercd.getValue() != "") {
    scwin.f_PopUp("Liner", "T");
  }

  // FCL/LCL/BULK/CONSOL SETTING
  var hhbltypeValue = 0;
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    if (ds_ocHblhList.getCellData(i, "hhbltype") == "F") {
      hhbltypeValue++;
    }
  }
  if (hhbltypeValue == 1) {
    rd_mhflc.setValue("F");
  } else if (hhbltypeValue >= 2) {
    rd_mhflc.setValue("C");
  } else {
    rd_mhflc.setValue(rowJson.hhbltype);
  }
  ed_mhbuyer.setValue(rowJson.hhbuyer);
  txt_mhbuyernm.setValue(rowJson.hhbuyernm);
  ed_mhscd.setValue(rowJson.hhagent);
  txt_mhsnm.setValue(rowJson.hhagentnm);
  ed_mhccd.setValue(scwin.p_clntNo);
  txt_mhcnm.setValue(scwin.p_clntNm || "null");
  ed_mhncd.setValue(scwin.p_clntNo);
  txt_mhnnm.setValue(scwin.p_clntNm || "null");
  ed_mhlodcd.setValue(rowJson.hhlodcd);
  txt_mhlodnm.setValue(rowJson.hhlodnm);
  ed_mhdisccd.setValue(rowJson.hhdisccd);
  txt_mhdiscnm.setValue(rowJson.hhdiscnm);
  ed_mhdlvcd.setValue(rowJson.hhdlvcd);
  txt_mhdlvnm.setValue(rowJson.hhdlvnm);
  scwin.ed_mharea = rowJson.hharea;
  scwin.txt_mhareanm = rowJson.hhareanm;
  txt_mhunit.setValue(rowJson.hhunit);
  ed_mhetd.setValue(rowJson.hhetd);
  ed_mheta.setValue(rowJson.hheta);
  ed_mhcrdt.setValue(rowJson.creadyDt);
  ed_mhondt.setValue(rowJson.hhondt);
  ed_mhitem.setValue(rowJson.hhitem);
  txt_mhitemNm.setValue(rowJson.hhmitem1);
  scwin.hd_mhvslcd = rowJson.hhvslcd;
  scwin.hd_mhvsl = rowJson.hhvsl;
  scwin.hd_mhvyg = rowJson.hhvyg;
  ed_mhactcust.setValue(rowJson.hhactcust);
  txt_mhactcustnm.setValue(rowJson.hhactcustnm);
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};
scwin.ds_ocMblhList_ondataload = function (e) {
  if (ds_ocMblhList.getRowCount() != 0) {
    // 추가 - 히든컴포넌트가 없어서 바인딩 할수없음
    scwin.hd_mhvslcd = ds_ocMblhList.getCellData(0, "mhvslcd");
    scwin.hd_mhvsl = ds_ocMblhList.getCellData(0, "mhvsl");
    scwin.hd_mhvyg = ds_ocMblhList.getCellData(0, "mhvyg");
    ed_mhvslcd.setValue(scwin.hd_mhvslcd);
    txt_mhvsl.setValue(scwin.hd_mhvsl);
    ed_mhvyg.setValue(scwin.hd_mhvyg);

    // 추가
    ds_ocMblhList.setRowPosition(0);
  }
};

// Grid 이벤트
scwin.gr_ocHblhList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
  }
};
scwin.gr_ocHblhList_onafteredit = async function (rowIndex, columnIndex, value) {
  var colId = gr_ocHblhList.getColumnID(columnIndex);
  if (colId != "hhblno") {
    return;
  }
  for (var i = 0; i < ds_ocHblhList.getRowCount() - 1; i++) {
    for (var j = i + 1; j < ds_ocHblhList.getRowCount(); j++) {
      if (ds_ocHblhList.getCellData(i, "hhblno") == ds_ocHblhList.getCellData(j, "hhblno")) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["House B/L"]);
        gr_ocHblhList.setFocusedCell(rowIndex, colId);
        return;
      }
    }
  }
  await scwin._insertRow(ds_gridHouseList);
  var row = ds_gridHouseList.getRowPosition();
  ds_gridHouseList.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_gridHouseList.setCellData(row, "hhio", scwin.hd_mhio);
  ds_gridHouseList.setCellData(row, "hhblno", ds_ocHblhList.getCellData(rowIndex, "hhblno"));
  scwin.currow = rowIndex;
  $c.sbm.execute($p, sbm_retrieveGridHouse);
};
scwin.gr_ocHblhList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.statusFlag != "") {
    return;
  }
  var param = {
    linkcheck: "2",
    kcomcd: scwin.hd_kcomcd,
    blno: ds_ocHblhList.getCellData(rowIndex, "hhblno"),
    mhno: cnd_lc_mhno.getValue()
  };
  $c.win.openMenu($p, "Import House B/L", "/ui/il/seainb/sibl/se_201_01_01b.xml", "se_201_01_01b.xml", param);
};
scwin.gr_ocHblhList_onheaderclick = function (headerId) {
  if (headerId != "col1") {
    return;
  }
  var isChecked = gr_ocHblhList.getHeaderValue(headerId);
  var chkVal = isChecked == true || isChecked == "1" ? "T" : "F";
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    ds_ocHblhList.setCellData(i, "chk", chkVal);
  }
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};
scwin.ds_ocProfitList_ondataload = function () {
  if (ds_ocProfitList.getRowCount() > 0) {
    ds_ocProfitList.setRowPosition(0);
  }
  total3.setValue(ds_ocProfitList.getRowCount());
};
scwin.ds_slipTax_ondataload = function () {
  total4.setValue(ds_slipTax.getRowCount());
};
scwin.ds_ocContList_ondataload = function () {
  total2.setValue(ds_ocContList.getRowCount());
};
scwin.customFormatter = function (data) {
  var value = "";
  if (data == "L") {
    value = "LCL";
  } else if (data == "F") {
    value = "FCL";
  } else if (data == "B") {
    value = "Bulk";
  }
  return value;
};
scwin.cnd_ed_hhblno_onkeyup = function (e) {
  $c.gus.cfToUpper($p, cnd_ed_hhblno);
};
scwin.sbm_retrieveGridHouse_submitdone = function (e) {
  if (ds_gridHouseList.getRowCount() == 0) {
    return;
  }
  var rowHouse = ds_gridHouseList.getRowPosition() || 0;
  ds_ocHblhList.setCellData(scwin.currow, "hhpkg", ds_gridHouseList.getCellData(rowHouse, "hhpkg"));
  ds_ocHblhList.setCellData(scwin.currow, "hhgwgt", ds_gridHouseList.getCellData(rowHouse, "hhgwgt"));
  ds_ocHblhList.setCellData(scwin.currow, "hhmsr", ds_gridHouseList.getCellData(rowHouse, "hhmsr"));
  ds_ocHblhList.setCellData(scwin.currow, "hhbltype", ds_gridHouseList.getCellData(rowHouse, "hhbltype"));
  ds_gridHouseList.removeAll();
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};
scwin.udc_mhscd_onblurNameEvent = function (e) {
  if (txt_mhsnm.originalValue == txt_mhsnm.getValue()) return;
  if (ed_mhscd.getValue() == "") {
    scwin.f_PopUp("Shipper", "F");
  }
};
scwin.udc_mhccd_onblurNameEvent = function (e) {
  if (txt_mhcnm.originalValue == txt_mhcnm.getValue()) return;
  if (ed_mhccd.getValue() == "") {
    scwin.f_PopUp("Consignee", "F");
  }
};
scwin.udc_mhncd_onblurNameEvent = function (e) {
  if (txt_mhnnm.originalValue == txt_mhnnm.getValue()) return;
  if (ed_mhncd.getValue() == "") {
    scwin.f_PopUp("Notify", "F");
  }
};
scwin.udc_mhlodcd_onblurNameEvent = function (e) {
  if (txt_mhlodnm.originalValue == txt_mhlodnm.getValue()) return;
  if (ed_mhlodcd.getValue() == "") {
    scwin.f_OpenCommonPopUp("Loading", "F", "F", "F");
  }
};
scwin.udc_mhdisccd_onblurNameEvent = function (e) {
  if (txt_mhdiscnm.originalValue == txt_mhdiscnm.getValue()) return;
  if (ed_mhdisccd.getValue() == "") {
    scwin.f_OpenCommonPopUp("Discharge", "F", "F", "F");
  }
};
scwin.udc_mhdlvcd_onblurNameEvent = function (e) {
  if (txt_mhdlvnm.originalValue == txt_mhdlvnm.getValue()) return;
  if (ed_mhdlvcd.getValue() == "") {
    scwin.f_OpenCommonPopUp("Delivery", "F", "F", "F");
  }
};
scwin.udc_mhactcust_onblurNameEvent = function (e) {
  if (txt_mhactcustnm.originalValue == txt_mhactcustnm.getValue()) return;
  if (ed_mhactcust.getValue() == "") {
    scwin.f_PopUp("Customer", "F");
  }
};
scwin.udc_mhitem_onblurNameEvent = function (e) {
  if (txt_mhitemNm.originalValue == txt_mhitemNm.getValue()) return;
  if (ed_mhitem.getValue() == "") {
    scwin.f_OpenCommonPopUp("Item", "F", "F", "F");
  }
};
scwin.cnd_ed_mhmblno_onkeyup = function (e) {
  $c.gus.cfToUpper($p, cnd_ed_mhmblno);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhblno',placeholder:'',style:'width:150px;','ev:onblur':'scwin.cnd_ed_hhblno_onblur',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.cnd_ed_hhblno_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mhmblno',placeholder:'',style:'width:150px;','ev:onblur':'scwin.cnd_ed_mhmblno_onblur',ref:'data:ds_ocMblhList.mhmblno','ev:onkeyup':'scwin.cnd_ed_mhmblno_onkeyup',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'retrieveEngClntInfo',style:'display:none','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'VSL/VOY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',hideName:'Y',id:'udc_mhvslcd',codeId:'ed_mhvslcd',nameId:'txt_mhvsl','ev:onclickEvent':'scwin.udc_mhvslcd_onclickEvent',refDataCollection:'dma_vessel',ref:'data:dma_vessel.hhvslcd',code:'hhvslcd',name:'hhvsl',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',selectID:'retrieveOrdVsslInfo','ev:onblurCodeEvent':'scwin.udc_mhvslcd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_mhvyg',placeholder:'',class:'','ev:onblur':'scwin.ed_mhvyg_onblur',ref:'data:dma_vessel.hhvyg',objType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocHblhList',style:'',autoFit:'allColumn',id:'gr_ocHblhList',visibleRowNum:'5',class:'wq_gvw','ev:oncelldblclick':'scwin.gr_ocHblhList_oncelldblclick','ev:onheaderclick':'scwin.gr_ocHblhList_onheaderclick','ev:oncellclick':'scwin.gr_ocHblhList_oncellclick',syncRowPositionOption:'style',rowStatusVisible:'true',columnMove:'false','ev:onafteredit':'scwin.gr_ocHblhList_onafteredit',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2',value:'House No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3',value:'Package',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col4',value:'Weight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col5',value:'Measure',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'col6',value:'F/L',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chk',displayMode:'input',defaultValue:'F',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhblno',displayMode:'label',textAlign:'left',allowChar:'a-zA-Z0-9',maxLength:'20',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhpkg',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhgwgt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhmsr',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'hhbltype',displayMode:'label',textAlign:'center',customFormatter:'scwin.customFormatter'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_AddRow1',type:'button',class:'btn','ev:onclick':'scwin.btn_AddRow1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Addition'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_CancelRow1',type:'button',class:'btn','ev:onclick':'scwin.btn_CancelRow1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Container Information',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownYn:'N',btnUser:'N',btnPlusYn:'Y',templateYn:'N',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocContList',style:'',autoFit:'allColumn',id:'gr_ocContList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col1',value:'Container',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'col2',value:'Type',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col3',value:'Seal No1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col4',value:'Seal No2',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mccntno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mctype',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Container',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'border-right: none;',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{style:'display:none',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_mhcnt1type',placeholder:'',class:'','ev:onblur':'scwin.ed_mhcnt1type_onblur',ref:'data:ds_ocMblhList.mhcnt1type',objType:'data',allowChar:'A-Za-z0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp11',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'display:none',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_mhcnt2type',placeholder:'',class:'','ev:onblur':'scwin.ed_mhcnt2type_onblur',ref:'data:ds_ocMblhList.mhcnt2type',objType:'data',allowChar:'A-Za-z0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp12',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp12_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'display:none',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_mhcnt3type',placeholder:'',class:'','ev:onblur':'scwin.ed_mhcnt3type_onblur',ref:'data:ds_ocMblhList.mhcnt3type',objType:'data',allowChar:'A-Za-z0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp13',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp13_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'display:none',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_mhcnt4type',placeholder:'',class:'','ev:onblur':'scwin.ed_mhcnt4type_onblur',ref:'data:ds_ocMblhList.mhcnt4type',objType:'data',allowChar:'A-Za-z0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp14',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp14_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp11',code:'mhcnt1type',codeId:'ed_mhcnt1type','ev:onblurCodeEvent':'scwin.udc_mhcnt1type_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mhcnt1type_onclickEvent',hideName:'true',id:'udc_mhcnt1type',maxlengthCode:'4',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_ocMblhList',selectID:'retriveContainerTypeCodeInfo',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'border-left: none;border-right: none;',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp12',code:'mhcnt2type',codeId:'ed_mhcnt2type','ev:onblurCodeEvent':'scwin.udc_mhcnt2type_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mhcnt2type_onclickEvent',hideName:'true',id:'udc_mhcnt2type',maxlengthCode:'4',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_ocMblhList',selectID:'retriveContainerTypeCodeInfo',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'border-left: none;border-right: none;',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp13',code:'mhcnt3type',codeId:'ed_mhcnt3type','ev:onblurCodeEvent':'scwin.udc_mhcnt3type_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mhcnt3type_onclickEvent',hideName:'true',id:'udc_mhcnt3type',maxlengthCode:'4',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_ocMblhList',selectID:'retriveContainerTypeCodeInfo',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'border-left: none;',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp14',code:'mhcnt4type',codeId:'ed_mhcnt4type','ev:onblurCodeEvent':'scwin.udc_mhcnt4type_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mhcnt4type_onclickEvent',hideName:'true',id:'udc_mhcnt4type',maxlengthCode:'4',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_ocMblhList',selectID:'retriveContainerTypeCodeInfo',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'CNTR QTY ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'border-right: none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'ed_mhcnt1',placeholder:'',class:'tar',ref:'data:ds_ocMblhList.mhcnt1',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'border-right: none;border-left: none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt2',objType:'data',placeholder:'',ref:'data:ds_ocMblhList.mhcnt2',style:'width:85px;'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'border-right: none;border-left: none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt3',objType:'data',placeholder:'',ref:'data:ds_ocMblhList.mhcnt3',style:'width:85px;'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'border-left: none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt4',objType:'data',placeholder:'',ref:'data:ds_ocMblhList.mhcnt4',style:'width:85px;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Performance Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocProfitList',style:'',autoFit:'allColumn',id:'gr_ocProfitList',visibleRowNum:'2',class:'wq_gvw',readOnly:'true',syncRowPositionOption:'style'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'col1',value:'Selling',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'col2',value:'Buying',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'col3',value:'Profit',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'selling',displayMode:'label',textAlign:'right',displayFormat:'#,###.##',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'buying',displayMode:'label',textAlign:'right',displayFormat:'#,###.##',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'profit',displayMode:'label',textAlign:'right',displayFormat:'#,###.##',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'tb_masterColumn',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhpccd',ref:'data:ds_ocMblhList.mhpccd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PrePaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhflc',ref:'data:ds_ocMblhList.mhflc',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Consol'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Carrier',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{refDataCollection:'ds_ocMblhList',popupID:'',code:'mhlinercd',hideName:'Y',btnId:'img_PopUp2','ev:onclickEvent':'scwin.udc_mhlinercd_onclickEvent',codeId:'ed_mhlinercd',ref:'data:ds_ocMblhList.mhlinercd',name:'mhlinernm',nameId:'txt_mhlinernm',style:'',id:'udc_mhlinercd',maxlengthCode:'6',selectID:'retrieveEngClntInfo','ev:onblurCodeEvent':'scwin.udc_mhlinercd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_mhediliner',placeholder:'',class:'',ref:'data:ds_ocMblhList.mhediliner',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_departmentChange',style:'',type:'button','ev:onclick':'scwin.f_departmentChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' &nbsp;',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhbuyer',placeholder:'',style:'width: 50px; display:none;','ev:onblur':'scwin.ed_mhbuyer_onblur',ref:'data:ds_ocMblhList.mhbuyer',objType:'data',maxlength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp3',style:'width: 50px; display:none;',type:'button','ev:onclick':'scwin.img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp3',code:'mhbuyer',codeId:'ed_mhbuyer',hideName:'true',id:'udc_mhbuyer',maxlengthCode:'8',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_ocMblhList',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_mhbuyer_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mhbuyer_onclickEvent'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhscd',codeId:'ed_mhscd',nameId:'txt_mhsnm',btnId:'img_PopUp4','ev:onclickEvent':'scwin.udc_mhscd_onclickEvent',name:'mhsnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhscd',code:'mhscd',maxlengthCode:'6',selectID:'retrieveEngClntInfo','ev:onblurCodeEvent':'scwin.udc_mhscd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhscd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mhbuyernm',placeholder:'',style:'width:100px;',ref:'data:ds_ocMblhList.mhbuyernm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhccd',codeId:'ed_mhccd',nameId:'txt_mhcnm',btnId:'img_PopUp5','ev:onclickEvent':'scwin.udc_mhccd_onclickEvent',name:'mhcnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhccd',code:'mhccd',maxlengthCode:'6',selectID:'retrieveEngClntInfo','ev:onblurCodeEvent':'scwin.udc_mhccd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhccd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhncd',codeId:'ed_mhncd',nameId:'txt_mhnnm',btnId:'img_PopUp6','ev:onclickEvent':'scwin.udc_mhncd_onclickEvent',name:'mhnnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhncd',code:'mhncd',maxlengthCode:'6',selectID:'retrieveEngClntInfo','ev:onblurCodeEvent':'scwin.udc_mhncd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhncd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhlodcd',codeId:'ed_mhlodcd',nameId:'txt_mhlodnm',btnId:'img_PopUp7','ev:onclickEvent':'scwin.udc_mhlodcd_onclickEvent',name:'mhlodnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhlodcd',code:'mhlodcd',allowCharCode:'A-Za-z',UpperFlagCode:'1',maxlengthCode:'5',selectID:'retrievePortInfo','ev:onblurCodeEvent':'scwin.udc_mhlodcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhlodcd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'img_PopUp8',style:'',id:'udc_mhdisccd',codeId:'ed_mhdisccd',nameId:'txt_mhdiscnm','ev:onclickEvent':'scwin.udc_mhdisccd_onclickEvent',name:'mhdiscnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhdisccd',code:'mhdisccd',allowCharCode:'A-Za-z',UpperFlagCode:'1',maxlengthCode:'5',selectID:'retrievePortInfo','ev:onblurCodeEvent':'scwin.udc_mhdisccd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhdisccd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhdlvcd',codeId:'ed_mhdlvcd',nameId:'txt_mhdlvnm',btnId:'img_PopUp9','ev:onclickEvent':'scwin.udc_mhdlvcd_onclickEvent',name:'mhdlvnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhdlvcd',code:'mhdlvcd',allowCharCode:'A-Za-z',UpperFlagCode:'1',maxlengthCode:'5',selectID:'retrievePortInfo','ev:onblurCodeEvent':'scwin.udc_mhdlvcd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhdlvcd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmrnno',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.mhmrnno',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmsnno',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.mhmsnno',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhactcust',codeId:'ed_mhactcust',nameId:'txt_mhactcustnm',btnId:'img_PopUp111','ev:onclickEvent':'scwin.udc_mhactcust_onclickEvent',name:'mhactcustnm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhactcust',code:'mhactcust',objTypeCode:'data',objTypeName:'data',readOnlyName:'true',allowCharCode:'0-9',maxlengthCode:'6',selectID:'retrieveEngClntInfo','ev:onblurCodeEvent':'scwin.udc_mhactcust_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhactcust_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Dangerous',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhdanggb',ref:'data:ds_ocMblhList.mhdanggb',renderType:'radiogroup',rows:'',selectedIndex:'1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.odrNo',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhpkg',placeholder:'',style:'width:110px;',ref:'data:ds_ocMblhList.mhpkg',objType:'data',dataType:'float',displayFormat:'#,###.###',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Unit',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mhunit',placeholder:'',style:'width:110px;',ref:'data:ds_ocMblhList.mhunit',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhwgt',placeholder:'',style:'width:110px;',ref:'data:ds_ocMblhList.mhwgt',objType:'data',dataType:'float',displayFormat:'#,##0.###',maxlength:'13.3',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhmsr',placeholder:'',style:'width:110px;',ref:'data:ds_ocMblhList.mhmsr',objType:'data',dataType:'float',displayFormat:'#,##0.###',maxlength:'13.3',applyFormat:'all'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mheta',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'','ev:onblur':'scwin.ed_mheta_onblur',ref:'data:ds_ocMblhList.mheta',objType:'data',displayFormat:'yyyy/MM/dd',validExp:'ETA:yes:date=YYYYMMDD&length=8',title:'ETA'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhetd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_ocMblhList.mhetd',objType:'data',displayFormat:'yyyy/MM/dd',validExp:'ETD:no:date=YYYYMMDD&length=8',title:'ETD'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhcrdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_ocMblhList.mhcrdt',objType:'data',displayFormat:'yyyy/MM/dd',validExp:'Result:no:date=YYYYMMDD&length=8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Item',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mhitem',codeId:'ed_mhitem',nameId:'txt_mhitemNm',btnId:'img_PopUp10','ev:onclickEvent':'scwin.udc_mhitem_onclickEvent',name:'mhitemNm',refDataCollection:'ds_ocMblhList',ref:'data:ds_ocMblhList.mhitem',code:'mhitem',validTitle:'Item',maxlengthCode:'8',selectID:'retrieveCommGoodsInfo','ev:onblurCodeEvent':'scwin.udc_mhitem_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mhitem_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhondt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_ocMblhList.mhondt',objType:'data',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_slipTax',id:'gr_ocExpHList',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',value:'Customer',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',value:'Billing Date',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'Tax Date',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',value:'Slip No',width:'120',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intendDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_1',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_3',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_4',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_8',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_5',style:'',type:'button','ev:onclick':'scwin.btn_5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HBL Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_6',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'S/R Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_7',style:'',type:'button','ev:onclick':'scwin.btn_7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MBL Find'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Cancel',objType:'bCancel',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Update',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Delete',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})