/*amd /AI/se_107_01_01b.xml 188118 4220d7e6a02d13d0d02372ee8df166daded15011c4c8f70a0bd85adfd3b4c37e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'MASTER B/L',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bookingNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bookingContainer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbkgseq',name:'BOOKING SEQ',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_createBlNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_createMhno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mhno',name:'DOC NO',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_carrierBkNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'carrierBkNo',name:'carrier booking no',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition_path'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hblNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactcust',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'path',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_line_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhliner',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_clntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhactcust',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_copyCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'copy1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copy2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseblList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'BOOKING SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhscd',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'CLOSED',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'SHIPPER1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs2',name:'SHIPPER2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs3',name:'SHIPPER3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs4',name:'SHIPPER4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs5',name:'SHIPPER5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhccd',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'CONSIGNEE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc2',name:'CONSIGNEE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc3',name:'CONSIGNEE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc4',name:'CONSIGNEE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc5',name:'CONSIGNEE5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhncd',name:'NOTIFY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn1',name:'NOTIFY1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn2',name:'NOTIFY2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn3',name:'NOTIFY3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn4',name:'NOTIFY4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn5',name:'NOTIFY5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'VESSEL NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'VOYAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'LOADING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'LOADING NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'DISCHARGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'DISCHARGE NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'PACKAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunit',name:'UNIT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhondt',name:'ONBOARD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'ISSUED DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'RESULT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'DANGEROUS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'CARGO TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisunm',name:'ISSUED AT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpaynm',name:'PAYABLE AT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'FREIGHT TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhstype',name:'SERVICE TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'INCOTERMS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'CONTAINER QTY1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'CONTAINER QTY2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'CONTAINER QTY3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'CONTAINER QTY4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'PARTNER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'PARTNER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'PARTNER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'PARTNER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'CUSTOMER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'CUSTOMER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'CUSTOMER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsales',name:'SALESMAN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'SALESMAN NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'LINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'LINER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'LINER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'LINER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'DEPT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'DEPT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hharea',name:'AREA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'AREA NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'TRIANGLE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'NOMI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'O B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'CO-LOAD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsubpkg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunit2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsay',name:'SAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'ITEM NAME1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'ITEM NAME2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'REMARK1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'REMARK2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'REMARK3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'REMARK4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'REMARK5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'SHIPMENT TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'PRE-VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'RECEIPT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'RECEIPT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'DELIVERY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'DELIVERY NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'DESTINATION',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'DESTINATION NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpono',name:'PO NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'INVOICE VALUE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'L/C NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustnoseq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcontInfo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNoM',name:'Order No M',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcur',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhexgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcurdt',name:'EX DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhexrate',name:'EX RATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhuexrate',name:'US EX RATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcur',name:'M CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mexgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcurdt',name:'M EX DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhexrate',name:'M EX RATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhusdrate',name:'M USD RATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipMgntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pathCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'CINO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ocContList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchblno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mccntno',name:'CONTAINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mctype',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'SEAL NO1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'SEAL NO2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'MEASURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mciso',name:'ISO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ocDirectMblno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oblno',name:'MASTER B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buying',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTyp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipTax',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intendDt',name:'Billing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'Tax Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ocProfitList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',name:'Selling',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buying',name:'Buying',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profit',name:'Profit',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fgubn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partner',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loading',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discharge',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'item',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbgubn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'incoterm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerous',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commcustomer',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcode',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'funit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTariffYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'customer',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amount',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result_path'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pathCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pathNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_linecode'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_frtMapping'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'description',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd3',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_checkMasterBl'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntYn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DeptChangeParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hodrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkGb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DeptChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_profit'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bkseq'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno3'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custMan',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linernm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattnnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voy',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkArea',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAreanm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etRsltsDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTerm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfs',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcType',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkIncoterm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAgent',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAgentnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingUnit'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buyingUnit'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exHouseRate'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exMasterRate'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exRateSellingGrid'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exRateBuyingGrid'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerType'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_currencyCode'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_departmentInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndmblno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndhblno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buyingDept'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerReceive'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_liner'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copyCondition'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'copy1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copy2',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobl.RetrieveSeaExportDirectBlCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_houseblList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_selling","key":"OUT_DS3"},{"id":"ds_buying","key":"OUT_DS4"},{"id":"ds_ocDirectMblno","key":"OUT_DS5"},{"id":"ds_slipTax","key":"OUT_DS6"},{"id":"ds_ocProfitList","key":"OUT_DS7"}]',target:'data:json,[{"id":"ds_houseblList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_selling","key":"OUT_DS3"},{"id":"ds_buying","key":"OUT_DS4"},{"id":"ds_ocDirectMblno","key":"OUT_DS5"},{"id":"ds_slipTax","key":"OUT_DS6"},{"id":"ds_ocProfitList","key":"OUT_DS7"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_createHouseBlNo',action:'/il.seaout.sobl.RetrieveHouseBlNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"dma_createBlNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_createBlNo","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_createHouseBlNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBooking',action:'/il.seaout.sobl.RetrieveBookingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_bookingNo","key":"IN_DS1"},{"id":"ds_booking","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_booking","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveBooking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainer',action:'/il.seaout.sobl.RetrieveBookingContainerCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_bookingContainer","key":"IN_DS1"},{"id":"ds_ocContList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ocContList","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveContainer_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seaout.sobl.SaveDirectBlCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_houseblList","key":"IN_DS1"},{"id":"ds_ocContList","key":"IN_DS2"},{"id":"ds_selling","key":"IN_DS3"},{"id":"ds_buying","key":"IN_DS4"},{"id":"ds_ocDirectMblno","key":"IN_DS5"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seaout.sobl.DeleteDirectBlCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_houseblList","key":"IN_DS1"},{"id":"ds_selling","key":"IN_DS2"},{"id":"ds_buying","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_createMhno',action:'/il.seaout.sobl.RetrieveMhnoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"dma_createMhno","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_createMhno","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_createMhno_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTariff',action:'/il.seaout.sobl.RetrieveSeaExportTariffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_retrieveTariff","key":"IN_DS1"},{"id":"ds_resultTariff","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultTariff","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_retrieveTariff_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_DeptChange_submitdone','ev:submiterror':'scwin.sbm_DeptChange_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSelling',action:'/il.seaout.sobl.RetrieveSeaExportDirectBlSellingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_selling","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_selling","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSelling_submitdone','ev:submiterror':'scwin.sbm_retrieveSelling_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBuying',action:'/il.seaout.sobl.RetrieveSeaExportDirectBlBuyingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_buying","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_buying","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveBuying_submitdone','ev:submiterror':'scwin.sbm_retrieveBuying_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCarrierBkNo',action:'/il.seaout.sobl.RetrieveSeaExportCarrierBkNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_bookingNo","key":"IN_DS1"},{"id":"dma_carrierBkNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_carrierBkNo","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_path',action:'/il.seaout.sobl.RetrievePathCdByHblnoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition_path","key":"IN_DS1"},{"id":"ds_result_path","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result_path","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_linecode',action:'/il.seaout.sobl.RetrieveDirectBlLinecodeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_line_condition","key":"IN_DS1"},{"id":"ds_linecode","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_linecode","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_frtMapping',action:'/il.seaout.sobl.RetrieveAPIFreightMappingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_line_condition","key":"IN_DS1"},{"id":"ds_frtMapping","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_frtMapping","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_checkMasterBl',action:'/il.seaout.sobl.CheckDirectBlMasterBlCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_checkMasterBl","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_checkMasterBl","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMgntClnt',action:'/il.seaout.sobl.RetrieveSeaExportMgntClntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_clntNo","key":"IN_DS1"},{"id":"ds_mgntYn","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_mgntYn","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveProfit',action:'/il.seainb.sibl.RetrieveSeaHouseFreightProfitCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_profit","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_profit","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_RetrieveProfit_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_WRN_007 = "Customer와 Dept가 일치하지 않습니다. \n거래처별 매출귀속 정의 화면에서 정보를 확인하세요.";
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.statusFlag = "";
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.tabNo = 0;
scwin.mhnoFlag = "0";
scwin.exRateCheck = "1";
scwin.sellBuyCheck = 0;
scwin.hd_kcomcd = "DBEX";
scwin.hd_hhio = "O";
scwin.hd_commcustomer = "999999";
scwin.ed_carrierBkNo = "";
scwin.v_linkcheck = "";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_carrierBkno = "";
scwin.p_seaExgbEx = "";
scwin.p_clntNo = "";
scwin.strCurDate = "";
scwin.userId = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.userId = $c.ses.getUserId();
  scwin.p_seaExgbEx = scwin.params ? scwin.params["seaExgbEx"] || "" : "";
  scwin.p_clntNo = scwin.params ? scwin.params["clntNo"] || "" : "";
  scwin.strCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.v_linkcheck = scwin.params ? scwin.params["linkcheck"] || "0" : "0";
  scwin.v_kcomcd = scwin.params ? scwin.params["kcomcd"] || "" : "";
  scwin.v_blno = scwin.params ? scwin.params["blno"] || "" : "";
  scwin.v_mhno = scwin.params ? scwin.params["mhno"] || "" : "";
  scwin.v_bkno = scwin.params ? scwin.params["bkno"] || "" : "";
  scwin.v_carrierBkno = scwin.params ? scwin.params["carrierBkno"] || "" : "";
  scwin.f_Set("INIT");
  cnd_ed_hhblno.setFocus();
};
scwin.onUdcCompleted = function () {
  scwin.f_getParametrSetting(scwin.v_linkcheck);
};
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "1":
    case "2":
    case "3":
      if (scwin.v_blno == "null") {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.setFocus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      cnd_ed_hhblno.setValue(scwin.v_blno);
      if (ds_hmhno.getRowCount() == 0) {
        ds_hmhno.insertRow();
      }
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", scwin.v_mhno);
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", scwin.v_mhno);
      scwin.mhnoFlag = "1";
      break;
    case "4":
      scwin.f_Create();
      ed_hhbkgno.setValue(scwin.v_bkno);
      cnd_ed_hhblno.setFocus();
      ed_hhbkgno.setFocus();
      cnd_ed_hhmblno.setFocus();
      break;
    case "9":
      cnd_ed_hhmblno.setValue(scwin.params ? scwin.params["no"] || "" : "");
      scwin.mhnoFlag = "1";
      cnd_ed_hhblno.setFocus();
      break;
  }
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_1, btn_2, btn_3, btn_4, btn_6, btn_8, btn_9, btn_10, btn_CntrReceive, btn_FileDownload, pu_departmentChange, btn_result1, btn_result2, pu_customerChange, pu_exRateChange, pu_customerChange1, pu_exRateChange1]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, btn_Create]);
      $c.gus.cfDisableObjects($p, [gr_selling, gr_buying, gr_ocContList, gr_ocDirectMblno]);
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_3, btn_4, btn_6, btn_CntrReceive, btn_result1, btn_result2, pu_customerChange, pu_exRateChange, pu_customerChange1, pu_exRateChange1]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, btn_Create, btn_Delete, btn_8, btn_9, btn_10, pu_departmentChange, btn_FileDownload]);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocDirectMblno.setReadOnly("grid", true);
      gr_selling.setReadOnly("grid", true);
      gr_buying.setReadOnly("grid", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      scwin.statusFlag = "";
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_8, btn_9, btn_10, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_3, btn_4, btn_6, btn_FileDownload, btn_CntrReceive, btn_result1, btn_result2, pu_customerChange, pu_exRateChange, pu_customerChange1, pu_exRateChange1]);
      gr_ocContList.setReadOnly("grid", false);
      gr_ocDirectMblno.setReadOnly("grid", false);
      gr_selling.setReadOnly("grid", false);
      gr_buying.setReadOnly("grid", false);
      cnd_ed_hhblno.setDisabled(false);
      cnd_ed_hhmblno.setDisabled(false);
      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete, btn_8, btn_9, btn_10]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_3, btn_4, btn_6, btn_FileDownload, btn_CntrReceive, pu_departmentChange, btn_result1, btn_result2, pu_customerChange, pu_exRateChange, pu_customerChange1, pu_exRateChange1]);
      $c.gus.cfDisableKey($p);
      gr_ocContList.setReadOnly("grid", false);
      gr_ocDirectMblno.setReadOnly("grid", false);
      gr_selling.setReadOnly("grid", false);
      gr_buying.setReadOnly("grid", false);
      cnd_ed_hhmblno.setDisabled(false);
      scwin.statusFlag = "U";
      if (ds_houseblList.getCellData(0, "printChk") == "Y") {
        ed_hhactcust.setDisabled(true);
        txt_hhactcustnm.setDisabled(true);
      } else {
        ed_hhactcust.setDisabled(false);
        txt_hhactcustnm.setDisabled(false);
      }
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};
scwin.f_Check = function () {
  if (scwin.statusFlag == "I" || scwin.statusFlag == "C") {
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("45GP");
    ed_hhobl.setValue("3");
    rd_hhdanggb.setValue("N");
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  scwin.sellBuyCheck = 0;
  if (cnd_ed_hhblno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]);
    return;
  }
  dma_retrieve.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve.set("hhio", scwin.hd_hhio);
  ds_bkseq.removeAll();
  ds_bkseq.insertRow();
  await $c.sbm.execute($p, sbm_retrieve);
  ds_profit.removeAll();
  await $c.sbm.execute($p, sbm_RetrieveProfit);
  cnd_ed_hhblno.setFocus();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_houseblList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    scwin.f_Set("INIT");
    scwin.f_Check();
  } else {
    scwin.f_invoiceCheck();
    scwin.f_Set("RETRIEVE");
    scwin.f_SellingSum();
    scwin.f_BuyingSum();
    scwin.f_retrieveCarrierBkNo();
    if (scwin.v_linkcheck == "9") {
      scwin.f_Set("UPDATE");
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_retrieve2_onclick = function (e) {
  scwin.f_Retrieve2();
};
scwin.f_Retrieve2 = async function () {
  scwin.sellBuyCheck = 1;
  if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
    return;
  }
  if (srch_ed_hhblno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]);
    return;
  }
  dma_retrieve2.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve2.set("hhio", scwin.hd_hhio);
  dma_retrieve2.set("hhblno", srch_ed_hhblno.getValue());
  ds_bkseq.removeAll();
  ds_bkseq.insertRow();
  await $c.sbm.execute($p, sbm_retrieveSelling);
  srch_ed_hhblno.setFocus();
};
scwin.sbm_retrieveSelling_submitdone = function (e) {
  if (ds_selling.getRowCount() > 0 && scwin.sellBuyCheck == 1) {
    scwin.f_chgGridColumnToHouseBlDs("0", ds_selling);
  }
};
scwin.sbm_retrieveSelling_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_retrieve3_onclick = function (e) {
  scwin.f_Retrieve3();
};
scwin.f_Retrieve3 = async function () {
  scwin.sellBuyCheck = 2;
  if (cnd_ed_hhmblno.getValue().trim().length == 0 || cnd_ed_hhmblno.getValue() == "") {
    await $c.win.alert($p, "Buying을 복사하기 위해서는 Master B/L값은 필수 입력 항목입니다.");
    return;
  }
  if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
    return;
  }
  if (srch_ed_hhblno2.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]);
    return;
  }
  dma_retrieve2.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve2.set("hhio", scwin.hd_hhio);
  dma_retrieve2.set("hhblno", srch_ed_hhblno2.getValue());
  ds_bkseq.removeAll();
  ds_bkseq.insertRow();
  await $c.sbm.execute($p, sbm_retrieveBuying);
  srch_ed_hhblno2.setFocus();
};
scwin.sbm_retrieveBuying_submitdone = function (e) {
  if (ds_buying.getRowCount() > 0 && scwin.sellBuyCheck == 2) {
    scwin.f_chgGridColumnToHouseBlDs("1", ds_buying);
    for (let i = 0; i < ds_buying.getRowCount(); i++) {
      ds_buying.setCellData(i, "chk", "T");
    }
  }
};
scwin.sbm_retrieveBuying_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveProfit_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.f_Create = function () {
  scwin.f_FieldClear();
  ds_hmhno.insertRow();
  ds_houseblList.removeAll();
  ds_houseblList.insertRow();
  ds_ocContList.removeAll();
  ds_ocDirectMblno.removeAll();
  ds_selling.removeAll();
  ds_buying.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
  cnd_ed_hhblno.setDisabled(false);
  scwin.f_Set("CREATE");
  scwin.f_Check();
  cnd_ed_hhblno.setValue("DE");
  if (lc_hhexgb.getValue() == "") {
    lc_hhexgb.setValue(scwin.p_seaExgbEx);
  }
  if (lc_mexgb.getValue() == "") {
    lc_mexgb.setValue(scwin.p_seaExgbEx);
  }
  ed_hhcur.setValue("USD");
  ed_mhcur.setValue("USD");
  cnd_ed_hhblno.setFocus();
};
scwin.btn_Update_onclick = async function (e) {
  scwin.f_Update();
};
scwin.f_Update = async function () {
  if (ed_hhetd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  }
  scwin.f_Set("UPDATE");
  scwin.f_invoiceCheck();
  if (scwin.invoiceCheck == "1") {
    ed_hhbuyer.setDisabled(true);
    txt_hhbuyernm.setDisabled(true);
  } else {
    ed_hhbuyer.setDisabled(false);
    txt_hhbuyernm.setDisabled(false);
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (ds_houseblList.isUpdated() || ds_ocContList.isUpdated() || ds_ocDirectMblno.isUpdated() || ds_selling.isUpdated() || ds_buying.isUpdated()) {
    if (await scwin.f_validate()) {
      let STR = "저장하시겠습니까?";
      let count = 0;
      let tmp = "Amount에 0인 값이 있습니다. 이대로 저장하시겠습니까?";
      if (ds_selling.isUpdated()) {
        for (let i = 0; i < ds_selling.getRowCount(); i++) {
          if (ds_selling.getRowStatus(i) == "C" || ds_selling.getRowStatus(i) == "U") {
            if (ds_selling.getCellData(i, "crcCd") == "KRW") {
              if (ds_selling.getCellData(i, "sellAmt") == 0) count++;
            } else {
              if (ds_selling.getCellData(i, "sellAmtFcrc") == 0 || ds_selling.getCellData(i, "sellAmt") == 0 || ds_selling.getCellData(i, "usdAmt") == 0) count++;
            }
          }
        }
      }
      if (ds_buying.isUpdated()) {
        for (let i = 0; i < ds_buying.getRowCount(); i++) {
          if (ds_buying.getCellData(i, "chk") == "T") {
            ds_buying.setCellData(i, "chk", "F");
          }
          if (ds_buying.getCellData(i, "crcCd") == "KRW") {
            if (ds_buying.getCellData(i, "pchsAmt") == 0) count++;
          } else {
            if (ds_buying.getRowStatus(i) == "C" || ds_buying.getRowStatus(i) == "U") {
              if (ds_buying.getCellData(i, "pchsAmtFcrc") == 0 || ds_buying.getCellData(i, "pchsAmt") == 0 || ds_buying.getCellData(i, "usdAmt") == 0) count++;
            }
          }
        }
      }
      if (count > 0) STR = tmp;
      let chk = await $c.win.confirm($p, STR);
      if (chk) {
        if (scwin.statusFlag == "C") {
          if (cnd_ed_hhmblno.getValue() != "") {
            dma_retrieve2.set("hhmblno", cnd_ed_hhmblno.getValue());
            await $c.sbm.execute($p, sbm_checkMasterBl);
            if (ds_checkMasterBl.getCellData(0, "chk") == "F") {
              await $c.win.alert($p, "Master B/L [" + cnd_ed_hhmblno.getValue() + "]에 해당하는 Direct B/L이 이미 존재합니다.");
              return false;
            }
          }
          if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
            dma_retrieve.set("hhetd", ed_creadyDt.getValue());
            await $c.sbm.execute($p, sbm_createMhno);
            ds_hmhno.removeAll();
            ds_hmhno.insertRow();
            ds_hmhno.setCellData(0, "code", dma_createMhno.get("mhno"));
            ds_hmhno.setCellData(0, "name", dma_createMhno.get("mhno"));
            dma_retrieve.set("hhetd", ed_creadyDt.getValue());
            await $c.sbm.execute($p, sbm_createHouseBlNo);
            cnd_ed_hhblno.setValue(dma_createBlNo.get("hhblno"));
          } else {
            dma_retrieve.set("autono", lc_autono.getValue());
            dma_retrieve.set("hhetd", ed_hhetd.getValue());
            await $c.sbm.execute($p, sbm_createMhno);
            ds_hmhno.removeAll();
            ds_hmhno.insertRow();
            ds_hmhno.setCellData(0, "code", dma_createMhno.get("mhno"));
            ds_hmhno.setCellData(0, "name", dma_createMhno.get("mhno"));
          }
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhblno", cnd_ed_hhblno.getValue());
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "hhio", scwin.hd_hhio);
          ds_houseblList.setCellData(ds_houseblList.getRowPosition(), "inpid", scwin.userId);
          for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
            ds_ocContList.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_ocContList.setCellData(i, "mchblno", cnd_ed_hhblno.getValue());
            ds_ocContList.setCellData(i, "inpid", scwin.userId);
            ds_ocContList.setRowStatus(i, "C");
          }
        }
        if (cnd_ed_hhmblno.getValue() != "") {
          for (let i = 0; i < ds_buying.getRowCount(); i++) {
            ds_buying.setCellData(i, "blNo", cnd_ed_hhmblno.getValue());
          }
        }
        dma_clntNo.set("hhactcust", ed_hhactcust.getValue());
        await $c.sbm.execute($p, sbm_retrieveMgntClnt);
        if (ds_mgntYn.getCellData(0, "mgntYn") == "Y") {
          await $c.win.alert($p, "해당 Customer는 관리거래처이므로 B/L 발급을 불허합니다.");
        }
        scwin.v_linkcheck = "";
        await $c.sbm.execute($p, sbm_save);
        cnd_ed_hhblno.setDisabled(false);
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House B/L"]);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  scwin.f_Retrieve();
  scwin.f_Set("SAVE");
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.f_Cancel = function () {
  cnd_ed_hhblno.setDisabled(false);
  if (scwin.statusFlag == "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    ds_houseblList.undoAll();
    scwin.f_cancelRow(1);
    scwin.f_cancelRow(2);
    scwin.f_cancelRow(3);
    scwin.f_cancelRow(4);
  }
};
scwin.btn_Copy_onclick = function (e) {
  scwin.f_Copy();
};
scwin.f_Copy = function () {
  scwin.f_FieldClear();
  ds_hmhno.insertRow();
  cnd_ed_hhblno.setDisabled(false);
  scwin.f_Set("CREATE");
  scwin.f_Check();
  cnd_ed_hhblno.setValue("DE");
  if (ds_houseblList.getRowCount() != 0) {
    ds_houseblList.setRowStatus(ds_houseblList.getRowPosition(), "C");
  }
  ds_ocContList.removeAll();
  cnd_ed_hhblno.setFocus();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.f_Delete = async function () {
  scwin.f_invoiceCheck();
  if (scwin.invoiceCheck == "1") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
    return;
  }
  let chk = await $c.win.confirm($p, E_MSG_CM_CRM_004);
  if (chk) {
    for (let i = ds_houseblList.getRowCount() - 1; i >= 0; i--) ds_houseblList.removeRow(i);
    for (let i = ds_selling.getRowCount() - 1; i >= 0; i--) ds_selling.removeRow(i);
    for (let i = ds_buying.getRowCount() - 1; i >= 0; i--) ds_buying.removeRow(i);
    await $c.sbm.execute($p, sbm_delete);
    scwin.f_FieldClear();
    ds_houseblList.removeAll();
    ds_ocContList.removeAll();
    ds_ocDirectMblno.removeAll();
    ds_selling.removeAll();
    ds_buying.removeAll();
    ds_slipTax.removeAll();
    ds_ocProfitList.removeAll();
    cnd_ed_hhblno.setDisabled(false);
    cnd_ed_hhblno.setFocus();
    scwin.f_Set("INIT");
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_createMhno_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_createHouseBlNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveBooking_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveTariff_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveContainer_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_DeptChange_submitdone = function (e) {};
scwin.sbm_DeptChange_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_hhmblno]);
  ds_hmhno.removeAll();
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Clear2_onclick = function (e) {
  scwin.f_FieldClear2("0");
};
scwin.btn_Clear3_onclick = function (e) {
  scwin.f_FieldClear2("1");
};
scwin.f_FieldClear2 = function (flag) {
  switch (flag) {
    case "0":
      $c.gus.cfInitObjects($p, [srch_ed_hhblno]);
      ds_hmhno2.removeAll();
      break;
    case "1":
      $c.gus.cfInitObjects($p, [srch_ed_hhblno2]);
      ds_hmhno3.removeAll();
      break;
  }
};
scwin.f_validate = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_hhetd, ed_hhondt, ed_hheta, ed_hhisudt, ed_creadyDt, gr_selling, gr_buying]);
  if (!chk) return false;
  if (ed_hhcur.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]);
    ed_hhcur.setFocus();
    return false;
  }
  if (ed_mhcur.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]);
    ed_mhcur.setFocus();
    return false;
  }
  if (ed_hhbkgno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]);
    ed_hhbkgno.setFocus();
    return false;
  }
  if (ed_hhetd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD"]);
    ed_hhetd.setFocus();
    return false;
  }
  if (ed_creadyDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Result Date"]);
    ed_creadyDt.setFocus();
    return false;
  }
  if (ed_hheta.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_hhetd.getValue(), ed_hheta.getValue())) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETD", "ETA"]);
      ed_hhetd.setFocus();
      return false;
    }
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate, ed_hhetd.getValue()) > 3) {
    await $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_hhetd.setFocus();
    return false;
  }
  if (ed_hheta.getValue() != "" && $c.gus.cfMonthsBetween($p, scwin.strCurDate, ed_hheta.getValue()) > 3) {
    await $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_hheta.setFocus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_hhetd.getValue(), scwin.strCurDate) > 3) {
    await $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    ed_hhetd.setFocus();
    return false;
  }
  if (ed_hheta.getValue() != "" && $c.gus.cfYearsBetween($p, ed_hheta.getValue(), scwin.strCurDate) > 3) {
    await $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    ed_hheta.setFocus();
    return false;
  }
  if (ed_hheta.getValue() != "" && $c.date.diffDate($p, ed_hhetd.getValue(), ed_hheta.getValue()) > 149) {
    await $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    ed_hhetd.setFocus();
    return false;
  }
  if (ed_hhactcust.getValue() == "" || ed_hhactcust.getValue() == "999908") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer"]);
    ed_hhactcust.setFocus();
    return false;
  }
  if (ed_hhbuyer.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department"]);
    ed_hhbuyer.setFocus();
    return false;
  }
  if (ed_hhitem.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]);
    ed_hhitem.setFocus();
    return false;
  }
  if (txt_hhmitem1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Name"]);
    txt_hhmitem1.setFocus();
    return false;
  }
  if (scwin.statusFlag == "C") {
    if (cnd_ed_hhblno.getValue().length != 2 && cnd_ed_hhblno.getValue().substring(0, 2) == "DE") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_026, ["Auto Create", "DE"]);
      cnd_ed_hhblno.setFocus();
      return false;
    }
  }
  if (!(await scwin.f_containerDualCheck())) return false;
  for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
    if (ds_ocContList.getCellData(i, "mccntno") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Container"]);
      return false;
    }
  }
  for (let i = 0; i < ds_ocDirectMblno.getRowCount(); i++) {
    if (ds_ocDirectMblno.getCellData(i, "oblno") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L"]);
      return false;
    }
  }
  for (let i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getCellData(i, "bilgClntNo") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer"]);
      return false;
    }
    if (ds_selling.getCellData(i, "bilgClntNm") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer Name"]);
      return false;
    }
    if (ds_selling.getCellData(i, "fareEngCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["F/Code"]);
      return false;
    }
    if (ds_selling.getCellData(i, "crcCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]);
      return false;
    }
    if (ds_selling.getCellData(i, "fareUnit") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]);
      return false;
    }
  }
  for (let i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getCellData(i, "pchsTyp") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Type"]);
      return false;
    }
    if (ds_buying.getCellData(i, "pchsClntNo") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer"]);
      return false;
    }
    if (ds_buying.getCellData(i, "pchsClntNm") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer Name"]);
      return false;
    }
    if (ds_buying.getCellData(i, "fareEngCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["F/Code"]);
      return false;
    }
    if (ds_buying.getCellData(i, "crcCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]);
      return false;
    }
    if (ds_buying.getCellData(i, "fareUnit") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]);
      return false;
    }
    if (ds_buying.getCellData(i, "pchsTyp") == "3" && ds_buying.getCellData(i, "sellDeptCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Inner Department"]);
      return false;
    }
  }
  if (!(await scwin.f_JobCloseYn())) return false;
  return true;
};
scwin.f_containerDualCheck = async function () {
  let v = "0";
  let t1 = ed_hhcnt1type.getValue(),
    t2 = ed_hhcnt2type.getValue(),
    t3 = ed_hhcnt3type.getValue(),
    t4 = ed_hhcnt4type.getValue();
  if (t1 != "" && t2 != "" && t1 == t2) v = "1";
  if (t1 != "" && t3 != "" && t1 == t3) v = "1";
  if (t1 != "" && t4 != "" && t1 == t4) v = "1";
  if (t2 != "" && t3 != "" && t2 == t3) v = "1";
  if (t2 != "" && t4 != "" && t2 == t4) v = "1";
  if (t3 != "" && t4 != "" && t3 == t4) v = "1";
  if (v == "1") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["Container Type"]);
    return false;
  }
  return true;
};
scwin.f_invoiceCheck = function () {
  scwin.invoiceCheck = "0";
};
scwin.f_JobCloseYn = async function () {
  let preWrkNo = "FI01";
  let minRsltsDt = scwin.strCurDate.substr(0, 6);
  for (let i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getRowStatus(i) == "C") {
      if (ds_selling.getCellData(i, "rsltsStdDt").substr(0, 6) < minRsltsDt) {
        minRsltsDt = ds_selling.getCellData(i, "rsltsStdDt").substr(0, 6);
      }
    }
  }
  let isCloseDepr = $c.gus.cfJobCloseYN($p, "CUR", minRsltsDt, "00", preWrkNo, "0", "", "", "000");
  if (isCloseDepr == "2" || isCloseDepr == "DNF") {
    await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nSelling List Result Date를 확인하세요.");
    return false;
  }
  let minRsltsDt2 = scwin.strCurDate.substr(0, 6);
  for (let i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getRowStatus(i) == "C") {
      if (ds_buying.getCellData(i, "rsltsStdDt").substr(0, 6) < minRsltsDt2) {
        minRsltsDt2 = ds_buying.getCellData(i, "rsltsStdDt").substr(0, 6);
      }
    }
  }
  let isCloseDepr2 = $c.gus.cfJobCloseYN($p, "CUR", minRsltsDt2, "00", preWrkNo, "0", "", "", "000");
  if (isCloseDepr2 == "2" || isCloseDepr2 == "DNF") {
    await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nBuying List Result Date를 확인하세요.");
    return false;
  }
  return true;
};
scwin.f_addRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
      } else {
        ds_ocContList.insertRow();
        let pos = ds_ocContList.getRowPosition();
        ds_ocContList.setCellData(pos, "kcomcd", scwin.hd_kcomcd);
        ds_ocContList.setCellData(pos, "mchblno", cnd_ed_hhblno.getValue());
        ds_ocContList.setCellData(pos, "inpid", scwin.userId);
      }
      break;
    case 2:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
      } else {
        ds_selling.insertRow();
        let pos = ds_selling.getRowPosition();
        ds_selling.setCellData(pos, "kcomcd", scwin.hd_kcomcd);
        ds_selling.setCellData(pos, "blNo", cnd_ed_hhblno.getValue());
        ds_selling.setCellData(pos, "odrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
        ds_selling.setCellData(pos, "locPtnCls", "1");
        ds_selling.setCellData(pos, "mblHblCls", "H");
        ds_selling.setCellData(pos, "seaAirCls", "S");
        ds_selling.setCellData(pos, "drcrCls", "D");
        ds_selling.setCellData(pos, "ppccCls", lc_hhpcgb.getValue());
        ds_selling.setCellData(pos, "inpid", scwin.userId);
        ds_selling.setCellData(pos, "bilgClntNo", ed_hhactcust.getValue());
        ds_selling.setCellData(pos, "bilgClntNm", txt_hhactcustnm.getValue());
        ds_selling.setCellData(pos, "rsltsStdDt", ed_creadyDt.getValue());
        ds_selling.setCellData(pos, "exRateTyp", lc_hhexgb.getValue());
      }
      break;
    case 3:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
      } else {
        ds_buying.insertRow();
        let pos = ds_buying.getRowPosition();
        ds_buying.setCellData(pos, "kcomcd", scwin.hd_kcomcd);
        ds_buying.setCellData(pos, "blNo", cnd_ed_hhmblno.getValue());
        ds_buying.setCellData(pos, "odrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNoM"));
        ds_buying.setCellData(pos, "locPtnCls", "1");
        ds_buying.setCellData(pos, "mblHblCls", "M");
        ds_buying.setCellData(pos, "seaAirCls", "S");
        ds_buying.setCellData(pos, "drcrCls", "C");
        ds_buying.setCellData(pos, "ppccCls", lc_hhpcgb.getValue());
        ds_buying.setCellData(pos, "inpid", scwin.userId);
        ds_buying.setCellData(pos, "pchsClntNo", ed_hhliner.getValue());
        ds_buying.setCellData(pos, "pchsClntNm", txt_hhlinernm.getValue());
        ds_buying.setCellData(pos, "rsltsStdDt", ed_creadyDt.getValue());
        ds_buying.setCellData(pos, "exRateTyp", lc_mexgb.getValue());
        ds_buying.setCellData(pos, "pchsTyp", "1");
      }
      break;
    case 4:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else if (cnd_ed_hhblno.getValue().length == 2 && cnd_ed_hhblno.getValue() == "DE") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
      } else {
        ds_ocDirectMblno.insertRow();
        let pos = ds_ocDirectMblno.getRowPosition();
        ds_ocDirectMblno.setCellData(pos, "kcomcd", scwin.hd_kcomcd);
        ds_ocDirectMblno.setCellData(pos, "hblno", cnd_ed_hhblno.getValue());
        ds_ocDirectMblno.setCellData(pos, "inpid", scwin.userId);
      }
      break;
  }
};
scwin.f_deleteRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      ds_ocContList.removeRow(ds_ocContList.getRowPosition());
      break;
    case 2:
      let tmpPosS = ds_selling.getRowPosition();
      for (let i = 0; i < ds_selling.getRowCount(); i++) {
        if (ds_selling.getCellData(i, "chk") == "T" || i == tmpPosS) {
          if (ds_selling.getCellData(i, "certiNo") == "") {
            ds_selling.removeRow(i);
            i--;
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      break;
    case 3:
      let tmpPosB = ds_buying.getRowPosition();
      for (let i = 0; i < ds_buying.getRowCount(); i++) {
        if (ds_buying.getCellData(i, "chk") == "T" || i == tmpPosB) {
          if (ds_buying.getCellData(i, "pchsCertiNo") == "") {
            if (ds_buying.getCellData(i, "dcsnClsCd") == "확정") {
              await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["확정", "delete"]);
              return;
            } else {
              ds_buying.removeRow(i);
              i--;
            }
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      break;
    case 4:
      ds_ocDirectMblno.removeRow(ds_ocDirectMblno.getRowPosition());
      break;
  }
};
scwin.f_deleteAllRow = async function (disGubun) {
  let ds = null;
  switch (disGubun) {
    case 2:
      if (ds_selling.getCellData(ds_selling.getRowPosition(), "certiNo") == "") {
        ds = ds_selling;
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
        return;
      }
      break;
    case 3:
      if (ds_buying.getCellData(ds_buying.getRowPosition(), "pchsCertiNo") == "") {
        ds = ds_buying;
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
        return;
      }
      break;
  }
  if (ds) {
    for (let i = ds.getRowCount() - 1; i >= 0; i--) {
      await scwin.f_deleteRow(disGubun);
    }
  }
};
scwin.f_cancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      ds_ocContList.undoAll();
      break;
    case 2:
      ds_selling.undoAll();
      break;
    case 3:
      ds_buying.undoAll();
      break;
    case 4:
      ds_ocDirectMblno.undoAll();
      break;
  }
};
scwin.f_chgGridColumnToHouseBlDs = function (gubun, ds) {
  for (let i = 0; i < ds.getRowCount(); i++) {
    ds.setCellData(i, "kcomcd", scwin.hd_kcomcd);
    ds.setCellData(i, "locPtnCls", "1");
    ds.setCellData(i, "seaAirCls", "S");
    ds.setCellData(i, "ppccCls", lc_hhpcgb.getValue());
    ds.setCellData(i, "inpid", scwin.userId);
    if (gubun == "0") {
      ds.setCellData(i, "blNo", cnd_ed_hhblno.getValue());
      ds.setCellData(i, "odrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
      ds.setCellData(i, "mblHblCls", "H");
      ds.setCellData(i, "bilgClntNo", ed_hhactcust.getValue());
      ds.setCellData(i, "bilgClntNm", txt_hhactcustnm.getValue());
    } else if (gubun == "1") {
      ds.setCellData(i, "blNo", cnd_ed_hhmblno.getValue());
      ds.setCellData(i, "odrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNoM"));
      ds.setCellData(i, "mblHblCls", "M");
      ds.setCellData(i, "pchsClntNo", ed_hhliner.getValue());
      ds.setCellData(i, "pchsClntNm", txt_hhlinernm.getValue());
      ds.setCellData(i, "pchsTyp", "1");
    }
    ds.setCellData(i, "rsltsStdDt", ed_creadyDt.getValue());
    ds.setCellData(i, "exRateTyp", lc_hhexgb.getValue());
    ds.setRowStatus(i, "C");
  }
};
scwin.f_sellingAmtFcrc = function (row) {
  if (ds_selling.getCellData(row, "crcCd") == "KRW") {
    ds_selling.setCellData(row, "sellAmtFcrc", "0");
  } else {
    ds_selling.setCellData(row, "sellAmtFcrc", Math.round(ds_selling.getCellData(row, "chgWt") * ds_selling.getCellData(row, "sellUpr") * 100) / 100);
  }
};
scwin.f_buyingAmtFcrc = function (row) {
  if (ds_buying.getCellData(row, "crcCd") == "KRW") {
    ds_buying.setCellData(row, "pchsAmtFcrc", "0");
  } else {
    ds_buying.setCellData(row, "pchsAmtFcrc", Math.round(ds_buying.getCellData(row, "chgWt") * ds_buying.getCellData(row, "pchsUpr") * 100) / 100);
  }
};
scwin.f_Currency_Unit = function (Curr) {
  let Check_Unit = 1;
  if (Curr == "JPY" || Curr == "ITL" || Curr == "IDR" || Curr == "ESP") {
    Check_Unit = 100;
  }
  return Check_Unit;
};
scwin.f_sellingAmt = function (row) {
  if (ds_selling.getCellData(row, "crcCd") == "KRW") {
    ds_selling.setCellData(row, "sellAmt", Math.round(ds_selling.getCellData(row, "chgWt") * ds_selling.getCellData(row, "sellUpr")));
  } else {
    let nUnit = scwin.f_Currency_Unit(ds_selling.getCellData(row, "crcCd"));
    ds_selling.setCellData(row, "sellAmt", Math.round(ds_selling.getCellData(row, "sellAmtFcrc") * ds_selling.getCellData(row, "exRate")) / nUnit);
  }
};
scwin.f_buyingAmt = function (row) {
  if (ds_buying.getCellData(row, "crcCd") == "KRW") {
    ds_buying.setCellData(row, "pchsAmt", Math.round(ds_buying.getCellData(row, "chgWt") * ds_buying.getCellData(row, "pchsUpr")));
  } else {
    let nUnit = scwin.f_Currency_Unit(ds_buying.getCellData(row, "crcCd"));
    ds_buying.setCellData(row, "pchsAmt", Math.round(ds_buying.getCellData(row, "pchsAmtFcrc") * ds_buying.getCellData(row, "exRate")) / nUnit);
  }
};
scwin.f_sellingUsdAmt = function (row) {
  if (ed_hhuexrate.getValue() != "0" && ed_hhuexrate.getValue() != "") {
    ds_selling.setCellData(row, "usdAmt", Math.round(ds_selling.getCellData(row, "sellAmt") / ed_hhuexrate.getValue() * 100) / 100);
  }
};
scwin.f_buyingUsdAmt = function (row) {
  if (ed_mhusdrate.getValue() != "0" && ed_mhusdrate.getValue() != "") {
    ds_buying.setCellData(row, "usdAmt", Math.round(ds_buying.getCellData(row, "pchsAmt") / ed_mhusdrate.getValue() * 100) / 100);
  }
};
scwin.f_sellingVat = function (row) {
  if (ds_selling.getCellData(row, "vatYn") == "0") {
    ds_selling.setCellData(row, "vatAmt", "0");
  } else {
    ds_selling.setCellData(row, "vatAmt", Math.round(ds_selling.getCellData(row, "sellAmt") * 0.1 * 100) / 100);
  }
};
scwin.f_buyingVat = function (row) {
  if (ds_buying.getCellData(row, "vatYn") == "0") {
    ds_buying.setCellData(row, "vat", "0");
  } else {
    ds_buying.setCellData(row, "vat", Math.round(ds_buying.getCellData(row, "pchsAmt") * 0.1 * 100) / 100);
  }
};
scwin.f_SellingSum = function () {
  let v_SellingSumAmount = 0,
    v_SellingSumAmountW = 0,
    v_SellingSumVat = 0;
  for (let i = 0; i < ds_selling.getRowCount(); i++) {
    if (ds_selling.getRowStatus(i) != "D") {
      v_SellingSumAmount += Number(ds_selling.getCellData(i, "sellAmtFcrc"));
      v_SellingSumAmountW += Number(ds_selling.getCellData(i, "sellAmt"));
      v_SellingSumVat += Number(ds_selling.getCellData(i, "vatAmt"));
    }
  }
  ed_SellingSumAmount.setValue(v_SellingSumAmount);
  ed_SellingSumAmountW.setValue(v_SellingSumAmountW);
  ed_SellingSumVat.setValue(v_SellingSumVat);
  ed_SellingAmountSum.setValue(v_SellingSumAmountW + v_SellingSumVat);
};
scwin.f_BuyingSum = function () {
  let v_BuyingSumAmount = 0,
    v_BuyingSumAmountW = 0,
    v_BuyingSumVat = 0;
  for (let i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getRowStatus(i) != "D") {
      v_BuyingSumAmount += Number(ds_buying.getCellData(i, "pchsAmtFcrc"));
      v_BuyingSumAmountW += Number(ds_buying.getCellData(i, "pchsAmt"));
      v_BuyingSumVat += Number(ds_buying.getCellData(i, "vat"));
    }
  }
  ed_BuyingSumAmount.setValue(v_BuyingSumAmount);
  ed_BuyingSumAmountW.setValue(v_BuyingSumAmountW);
  ed_BuyingSumVat.setValue(v_BuyingSumVat);
  ed_BuyingAmountSum.setValue(v_BuyingSumAmountW + v_BuyingSumVat);
};
scwin.f_retrieveCarrierBkNo = async function () {
  dma_bookingNo.set("kcomcd", scwin.hd_kcomcd);
  dma_bookingNo.set("bkNo", ed_hhbkgno.getValue());
  await $c.sbm.execute($p, sbm_retrieveCarrierBkNo);
  scwin.ed_carrierBkNo = dma_carrierBkNo.get("carrierBkNo");
};
scwin.f_BookingLoading = async function () {
  dma_bookingNo.set("kcomcd", scwin.hd_kcomcd);
  dma_bookingNo.set("bkNo", ed_hhbkgno.getValue());
  await $c.sbm.execute($p, sbm_retrieveBooking);
  if (ds_booking.getRowCount() == 0) {
    ds_bkseq.removeAll();
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
  } else {
    let pos = ds_booking.getRowPosition();
    if (ds_booking.getCellData(pos, "docCd") != "") {
      ed_hhscd.setValue(ds_booking.getCellData(pos, "docCd"));
    } else {
      ed_hhscd.setValue(ds_booking.getCellData(pos, "custCd"));
    }
    ed_hhactcust.setValue(ds_booking.getCellData(pos, "custCd"));
    txt_hhactcustnm.setValue(ds_booking.getCellData(pos, "custNm"));
    ed_hhactattn.setValue(ds_booking.getCellData(pos, "custSeq"));
    txt_hhactattnnm.setValue(ds_booking.getCellData(pos, "custMan"));
    ed_hhliner.setValue(ds_booking.getCellData(pos, "liner"));
    txt_hhlinernm.setValue(ds_booking.getCellData(pos, "linernm"));
    ed_hhlinerattn.setValue(ds_booking.getCellData(pos, "linerattn"));
    txt_hhlinerattnnm.setValue(ds_booking.getCellData(pos, "linerattnnm"));
    ed_hhbuyer.setValue(ds_booking.getCellData(pos, "dept"));
    txt_hhbuyernm.setValue(ds_booking.getCellData(pos, "deptnm"));
    ed_hhvslcd.setValue(ds_booking.getCellData(pos, "vslCd"));
    txt_hhvsl.setValue(ds_booking.getCellData(pos, "vslNm"));
    txt_hhvyg.setValue(ds_booking.getCellData(pos, "voy"));
    ed_hhsales.setValue(ds_booking.getCellData(pos, "salesCd"));
    txt_hhsalesnm.setValue(ds_booking.getCellData(pos, "salesNm"));
    ed_hhlodcd.setValue(ds_booking.getCellData(pos, "lodCd"));
    txt_hhlodnm.setValue(ds_booking.getCellData(pos, "lodNm"));
    ed_hhdisccd.setValue(ds_booking.getCellData(pos, "disCd"));
    txt_hhdiscnm.setValue(ds_booking.getCellData(pos, "disNm"));
    ed_hhdlvcd.setValue(ds_booking.getCellData(pos, "dlvCd"));
    txt_hhdlvnm.setValue(ds_booking.getCellData(pos, "dlvNm"));
    ed_hhetd.setValue(ds_booking.getCellData(pos, "bkEtd"));
    ed_hheta.setValue(ds_booking.getCellData(pos, "bkEta"));
    ed_creadyDt.setValue(ds_booking.getCellData(pos, "etRsltsDt"));
    lc_hhpcgb.setValue(ds_booking.getCellData(pos, "payTerm"));
    lc_hhbltype.setValue(ds_booking.getCellData(pos, "cfs"));
    lc_hhstype.setValue(ds_booking.getCellData(pos, "svcType"));
    lc_hhincoterm.setValue(ds_booking.getCellData(pos, "bkIncoterm"));
    ed_hhagent.setValue(ds_booking.getCellData(pos, "bkAgent"));
    txt_hhagentnm.setValue(ds_booking.getCellData(pos, "bkAgentnm"));
    ed_hhitem.setValue(ds_booking.getCellData(pos, "itemCd"));
    txt_hhmitem1.setValue(ds_booking.getCellData(pos, "itemNm"));
    ed_hhpkg.setValue(ds_booking.getCellData(pos, "pkg"));
    ed_hhunitcd.setValue(ds_booking.getCellData(pos, "unit"));
    txt_hhunit.setValue(ds_booking.getCellData(pos, "unitnm"));
    ed_hhgwgt.setValue(ds_booking.getCellData(pos, "wgt"));
    ed_hhmsr.setValue(ds_booking.getCellData(pos, "msr"));
    ed_hhcnt1type.setValue(ds_booking.getCellData(pos, "cnttype1"));
    ed_hhcnt2type.setValue(ds_booking.getCellData(pos, "cnttype2"));
    ed_hhcnt3type.setValue(ds_booking.getCellData(pos, "cnttype3"));
    ed_hhcnt4type.setValue(ds_booking.getCellData(pos, "cnttype4"));
    ed_hhcnt1.setValue(ds_booking.getCellData(pos, "cntqty1"));
    ed_hhcnt2.setValue(ds_booking.getCellData(pos, "cntqty2"));
    ed_hhcnt3.setValue(ds_booking.getCellData(pos, "cntqty3"));
    ed_hhcnt4.setValue(ds_booking.getCellData(pos, "cntqty4"));
    scwin.ed_carrierBkNo = ds_booking.getCellData(pos, "carrierBkNo");
  }
};
scwin.f_ContainerLoading = async function () {
  dma_bookingContainer.set("kcomcd", scwin.hd_kcomcd);
  dma_bookingContainer.set("bkNo", ed_hhbkgno.getValue());
  dma_bookingContainer.set("hhbkgseq", lc_hhbkgseq.getValue());
  await $c.sbm.execute($p, sbm_retrieveContainer);
};
scwin.f_cCopy = function () {
  ed_hhccd.setValue(ed_hhncd.getValue());
  txt_hhc1.setValue(txt_hhn1.getValue());
  txt_hhc2.setValue(txt_hhn2.getValue());
  txt_hhc3.setValue(txt_hhn3.getValue());
  txt_hhc4.setValue(txt_hhn4.getValue());
  txt_hhc5.setValue(txt_hhn5.getValue());
  ed_hhncd.setFocus();
};
scwin.f_same = function () {
  ed_hhncd.setValue(ed_hhccd.getValue());
  txt_hhn1.setValue("SAME AS CONSIGNEE");
  txt_hhn2.setValue("");
  txt_hhn3.setValue("");
  txt_hhn4.setValue("");
  txt_hhn5.setValue("");
  txt_hhn2.setFocus();
};
scwin.f_nCopy = function () {
  ed_hhncd.setValue(ed_hhccd.getValue());
  txt_hhn1.setValue(txt_hhc1.getValue());
  txt_hhn2.setValue(txt_hhc2.getValue());
  txt_hhn3.setValue(txt_hhc3.getValue());
  txt_hhn4.setValue(txt_hhc4.getValue());
  txt_hhn5.setValue(txt_hhc5.getValue());
  ed_hhvslcd.setFocus();
};
scwin.btn_1_onclick = function (e) {
  scwin.f_cCopy();
};
scwin.btn_2_onclick = function (e) {
  scwin.f_same();
};
scwin.btn_3_onclick = function (e) {
  scwin.f_nCopy();
};
scwin.btn_img_PopUp1_onclick = function (e) {
  scwin.f_PopUp("Shipper", "F");
};
scwin.btn_img_PopUp2_onclick = function (e) {
  scwin.f_PopUp("Consignee", "F");
};
scwin.btn_img_PopUp3_onclick = function (e) {
  scwin.f_PopUp("Notify", "F");
};
scwin.btn_img_PopUp21_onclick = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType1", "F", "F", "F");
};
scwin.btn_img_PopUp22_onclick = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType2", "F", "F", "F");
};
scwin.btn_img_PopUp23_onclick = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType3", "F", "F", "F");
};
scwin.btn_img_PopUp24_onclick = function (e) {
  scwin.f_OpenCommonPopUp("ContainerType4", "F", "F", "F");
};
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Shipper":
      udc_hhvsl.ilCommonPopUp(scwin.callbackShipper, ed_hhscd.getValue().trim(), txt_hhs1.getValue(), chgGubun, "10", "Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Shipper search,Shipper Code,Shipper Name");
      break;
    case "Consignee":
      udc_hhvsl.ilCommonPopUp(scwin.callbackConsignee, ed_hhccd.getValue().trim(), txt_hhc1.getValue(), chgGubun, "10", "Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Consignee search,Consignee Code,Consignee Name");
      break;
    case "Notify":
      udc_hhvsl.ilCommonPopUp(scwin.callbackNotify, ed_hhncd.getValue().trim(), txt_hhn1.getValue(), chgGubun, "10", "Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Notify search,Notify Code,Notify Name");
      break;
    case "Partner":
      udc_hhagent.ilCommonPopUp(scwin.callbackPartner, ed_hhagent.getValue().trim(), txt_hhagentnm.getValue(), chgGubun, "10", "Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Partner search,Partner Code,Partner Name");
      break;
    case "Customer":
      udc_hhactcust.ilCommonPopUp(scwin.callbackCustomer, ed_hhactcust.getValue().trim(), txt_hhactcustnm.getValue(), chgGubun, "10", "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Customer search,Customer Code,Customer Name");
      break;
    case "Liner":
      udc_hhliner.ilCommonPopUp(scwin.callbackLiner, ed_hhliner.getValue().trim(), txt_hhlinernm.getValue(), chgGubun, "10", "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Liner search,Liner Code,Liner Name");
      break;
  }
};
scwin.callbackShipper = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhscd, txt_hhs1, [txt_hhs2, txt_hhs3, txt_hhs4, txt_hhs5]);
};
scwin.callbackConsignee = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhccd, txt_hhc1, [txt_hhc2, txt_hhc3, txt_hhc4, txt_hhc5]);
};
scwin.callbackNotify = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhncd, txt_hhn1, [txt_hhn2, txt_hhn3, txt_hhn4, txt_hhn5]);
};
scwin.callbackPartner = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhagent, txt_hhagentnm);
};
scwin.callbackCustomer = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhactcust, txt_hhactcustnm);
};
scwin.callbackLiner = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_hhliner, txt_hhlinernm);
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: Implement common popup calls via udc.ilCommonPopUp pattern for each gubun1
};
scwin.f_openPgm = function (name) {
  if (name == "Profit") {
    $c.win.openMenu($p, "Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: "",
      mhno: ""
    });
  } else if (name == "paymentINV") {
    $c.win.openMenu($p, "Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: "",
      mhno: ""
    });
  } else if (name == "Invoice") {
    $c.win.openMenu($p, "Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: "",
      mhno: ""
    });
  }
};
scwin.btn_8_onclick = function (e) {
  scwin.f_openPgm("Profit");
};
scwin.btn_9_onclick = function (e) {
  scwin.f_copyFromBuyingToSelling();
};
scwin.btn_10_onclick = function (e) {
  scwin.f_openPgm("Invoice");
};
scwin.btn_6_onclick = function (e) {
  scwin.f_HouseTariffAllLoading();
};
scwin.btn_4_onclick = function (e) {
  scwin.f_MasterTariffAllLoading();
};
scwin.pu_departmentChange_onclick = function (e) {
  scwin.f_departmentChange();
};
scwin.pu_customerChange_onclick = function (e) {
  scwin.f_customerChange("0");
};
scwin.pu_customerChange1_onclick = function (e) {
  scwin.f_customerChange("1");
};
scwin.pu_exRateChange_onclick = function (e) {
  scwin.f_exRateChange("0");
};
scwin.pu_exRateChange1_onclick = function (e) {
  scwin.f_exRateChange("1");
};
scwin.btn_result1_onclick = function (e) {
  scwin.f_ResultdateChange("0");
};
scwin.btn_result2_onclick = function (e) {
  scwin.f_ResultdateChange("1");
};
scwin.btn_CntrReceive_onclick = function (e) {
  scwin.f_openContainerPopup();
};
scwin.btn_FileDownload_onclick = function (e) {
  scwin.f_FileDownload();
};
scwin.btn_GetFreight_onclick = function (e) {
  scwin.f_openApi();
};
scwin.btn_Tracking_onclick = function (e) {
  scwin.f_Tracking();
};
scwin.btn_ApiSetup_onclick = function (e) {
  scwin.f_ProgramDownload();
};
scwin.btn_DelAll2_onclick = function (e) {
  scwin.f_deleteAllRow(2);
};
scwin.btn_DelAll3_onclick = function (e) {
  scwin.f_deleteAllRow(3);
};
scwin.f_HouseTariffAllLoading = async function () {
  if (ds_selling.getRowCount() != 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_011, ["Selling"]);
  } else {
    let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
    if (chk) {
      ds_retrieveTariff.removeAll();
      ds_resultTariff.removeAll();
      ds_retrieveTariff.insertRow();
      ds_retrieveTariff.setCellData(0, "fgubn", "1");
      ds_retrieveTariff.setCellData(0, "kcomcd", scwin.hd_kcomcd);
      ds_retrieveTariff.setCellData(0, "apdt", ed_hhetd.getValue());
      ds_retrieveTariff.setCellData(0, "customer", ed_hhactcust.getValue());
      ds_retrieveTariff.setCellData(0, "liner", ed_hhliner.getValue());
      ds_retrieveTariff.setCellData(0, "loading", ed_hhlodcd.getValue());
      ds_retrieveTariff.setCellData(0, "discharge", ed_hhdisccd.getValue());
      ds_retrieveTariff.setCellData(0, "item", ed_hhitem.getValue());
      ds_retrieveTariff.setCellData(0, "cbgubn", "C");
      ds_retrieveTariff.setCellData(0, "userid", scwin.userId);
      ds_retrieveTariff.setCellData(0, "dangerous", rd_hhdanggb.getValue());
      ds_retrieveTariff.setCellData(0, "commcustomer", scwin.hd_commcustomer);
      ds_retrieveTariff.setCellData(0, "flag", "1");
      ds_retrieveTariff.setCellData(0, "transTariffYn", "Y");
      ds_retrieveTariff.setCellData(0, "blNo", cnd_ed_hhblno.getValue());
      await $c.sbm.execute($p, sbm_retrieveTariff);
      if (ds_resultTariff.getRowCount() == 0) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
        return;
      }
      for (let i = 0; i < ds_resultTariff.getRowCount(); i++) {
        await scwin.f_addRow(2);
        ds_selling.setCellData(i, "fareEngCd", ds_resultTariff.getCellData(i, "fareEngCd"));
        ds_selling.setCellData(i, "crcCd", ds_resultTariff.getCellData(i, "crcCd"));
        ds_selling.setCellData(i, "fareUnit", ds_resultTariff.getCellData(i, "fareUnit"));
        ds_selling.setCellData(i, "sellUpr", ds_resultTariff.getCellData(i, "amount"));
        scwin.f_sellingAmtFcrc(i);
        scwin.f_sellingAmt(i);
        scwin.f_sellingVat(i);
        scwin.f_sellingUsdAmt(i);
      }
    }
  }
};
scwin.f_MasterTariffAllLoading = async function () {
  if (ds_buying.getRowCount() != 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_011, ["Buying"]);
  } else {
    let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
    if (chk) {
      ds_retrieveTariff.removeAll();
      ds_resultTariff.removeAll();
      ds_retrieveTariff.insertRow();
      ds_retrieveTariff.setCellData(0, "fgubn", "2");
      ds_retrieveTariff.setCellData(0, "kcomcd", scwin.hd_kcomcd);
      ds_retrieveTariff.setCellData(0, "apdt", ed_hhetd.getValue());
      ds_retrieveTariff.setCellData(0, "customer", ed_hhactcust.getValue());
      ds_retrieveTariff.setCellData(0, "liner", ed_hhliner.getValue());
      ds_retrieveTariff.setCellData(0, "loading", ed_hhlodcd.getValue());
      ds_retrieveTariff.setCellData(0, "discharge", ed_hhdisccd.getValue());
      ds_retrieveTariff.setCellData(0, "item", ed_hhitem.getValue());
      ds_retrieveTariff.setCellData(0, "cbgubn", "C");
      ds_retrieveTariff.setCellData(0, "userid", scwin.userId);
      ds_retrieveTariff.setCellData(0, "dangerous", rd_hhdanggb.getValue());
      ds_retrieveTariff.setCellData(0, "commcustomer", scwin.hd_commcustomer);
      ds_retrieveTariff.setCellData(0, "flag", "1");
      ds_retrieveTariff.setCellData(0, "transTariffYn", "N");
      await $c.sbm.execute($p, sbm_retrieveTariff);
      if (ds_resultTariff.getRowCount() == 0) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
        return;
      }
      for (let i = 0; i < ds_resultTariff.getRowCount(); i++) {
        await scwin.f_addRow(3);
        ds_buying.setCellData(i, "pchsTyp", "1");
        ds_buying.setCellData(i, "fareEngCd", ds_resultTariff.getCellData(i, "fareEngCd"));
        ds_buying.setCellData(i, "crcCd", ds_resultTariff.getCellData(i, "crcCd"));
        ds_buying.setCellData(i, "fareUnit", ds_resultTariff.getCellData(i, "fareUnit"));
        ds_buying.setCellData(i, "pchsUpr", ds_resultTariff.getCellData(i, "amount"));
        scwin.f_buyingAmtFcrc(i);
        scwin.f_buyingAmt(i);
        scwin.f_buyingVat(i);
        scwin.f_buyingUsdAmt(i);
      }
    }
  }
};
scwin.f_departmentChange = async function () {
  if (ed_hhbuyer.getValue().trim() != "") {
    let rtnList = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonDeptChange.xml", {
      width: 460,
      height: 280,
      modal: true,
      data: {
        pdept: ed_hhbuyer.getValue().trim(),
        pdeptnm: txt_hhbuyernm.getValue().trim()
      }
    });
    if (typeof rtnList != "undefined" && rtnList != null) {
      if (rtnList[0] == "N/A" && rtnList[1].trim() != "" && rtnList[2].trim() != "") {
        ds_DeptChangeParam.removeAll();
        ds_DeptChangeParam.insertRow();
        ds_DeptChangeParam.setCellData(0, "modrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNoM"));
        ds_DeptChangeParam.setCellData(0, "hodrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
        ds_DeptChangeParam.setCellData(0, "kcomcd", scwin.hd_kcomcd);
        ds_DeptChangeParam.setCellData(0, "bulkGb", "");
        ds_DeptChangeParam.setCellData(0, "dept", rtnList[1]);
        ds_DeptChangeParam.setCellData(0, "deptnm", rtnList[2]);
        let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
        if (chk) {
          await $c.sbm.execute($p, sbm_DeptChange);
          let spRtn = ds_DeptChangeResult.getCellData(0, "spRtn");
          if (spRtn == "0") {
            txt_hhbuyernm.setValue(rtnList[2].trim());
            ed_hhbuyer.setValue(rtnList[1].trim());
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_009);
          } else if (spRtn == "-2") {
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_007);
          } else {
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_008);
          }
        }
      }
    }
  }
};
scwin.f_ResultdateChange = async function (gbn) {
  let rtnList = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonResultDateChange.xml", {
    width: 460,
    height: 280,
    modal: true
  });
  if (typeof rtnList != "undefined" && rtnList != null) {
    if (rtnList[0] == "N/A") {
      await scwin.f_GridResultdateChange(gbn, rtnList);
    }
  }
};
scwin.f_GridResultdateChange = async function (gbn, rtnList) {
  if (gbn == "0") {
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_selling.getRowCount(); i++) {
          if (ds_selling.getCellData(i, "certiNo").trim() == "") {
            ds_selling.setCellData(i, "rsltsStdDt", rtnList[1]);
          }
        }
      }
    }
  } else if (gbn == "1") {
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_buying.getRowCount(); i++) {
          if (ds_buying.getCellData(i, "pchsCertiNo").trim() == "") {
            ds_buying.setCellData(i, "rsltsStdDt", rtnList[1]);
          }
        }
      }
    }
  }
};
scwin.f_customerChange = async function (gbn) {
  let rtnList = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonCustomerChange.xml", {
    width: 460,
    height: 280,
    modal: true
  });
  if (typeof rtnList != "undefined" && rtnList != null) {
    if (rtnList[0] == "N/A") {
      await scwin.f_GridCustomerChange(gbn, rtnList);
    }
  }
};
scwin.f_GridCustomerChange = async function (gbn, rtnList) {
  if (gbn == "0") {
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_selling.getRowCount(); i++) {
          if (ds_selling.getCellData(i, "certiNo").trim() == "") {
            if (ds_selling.getCellData(i, "bilgClntNo") == rtnList[1]) {
              ds_selling.setCellData(i, "bilgClntNo", rtnList[3]);
              ds_selling.setCellData(i, "bilgClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  } else if (gbn == "1") {
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_buying.getRowCount(); i++) {
          if (ds_buying.getCellData(i, "pchsCertiNo").trim() == "") {
            if (ds_buying.getCellData(i, "pchsClntNo") == rtnList[1]) {
              ds_buying.setCellData(i, "pchsClntNo", rtnList[3]);
              ds_buying.setCellData(i, "pchsClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  }
};
scwin.f_exRateChange = async function (disGubun) {
  if (disGubun == "0") {
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_selling.getRowCount(); i++) {
          if (ds_selling.getCellData(i, "certiNo").trim() == "") {
            if (ds_selling.getCellData(i, "crcCd") == ed_hhcur.getValue()) {
              ds_selling.setCellData(i, "exRate", ed_hhexrate.getValue());
              scwin.f_sellingAmt(i);
              scwin.f_sellingVat(i);
              scwin.f_sellingUsdAmt(i);
            }
          }
        }
      }
    }
  } else if (disGubun == "1") {
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
    } else {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        for (let i = 0; i < ds_buying.getRowCount(); i++) {
          if (ds_buying.getCellData(i, "pchsCertiNo").trim() == "") {
            if (ds_buying.getCellData(i, "crcCd") == ed_mhcur.getValue()) {
              ds_buying.setCellData(i, "exRate", ed_mhexrate.getValue());
              scwin.f_buyingAmt(i);
              scwin.f_buyingVat(i);
              scwin.f_buyingUsdAmt(i);
            }
          }
        }
      }
    }
  }
};
scwin.f_copyFromBuyingToSelling = async function () {
  if (ds_buying.getRowCount() == 0 || ds_selling.getRowCount() > 0) {
    await $c.win.alert($p, "buying 데이터가 없거나, selling 데이터가 이미 있는 경우는 해당 기능을 사용할 수 없습니다");
    return false;
  }
  if (chb_copy1.getValue() == "" && chb_copy2.getValue() == "") {
    await $c.win.alert($p, "항목 또는 항목&요율을 선택 후 copy 할 수 있습니다.");
    return false;
  }
  let cnt = 0;
  for (let i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getCellData(i, "chk") == "T") cnt++;
  }
  if (cnt < 1) {
    await $c.win.alert($p, "copy 할 buying 데이터를 선택해 주세요.");
    return false;
  }
  for (let i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getCellData(i, "chk") == "T") {
      let fCode = ds_buying.getCellData(i, "fareEngCd");
      let fName = ds_buying.getCellData(i, "fareEngNm");
      if (fName.substring(0, 3) != "전도금") {
        await scwin.f_addRow(2);
        let pos = ds_selling.getRowPosition();
        ds_selling.setCellData(pos, "sellSeq", ds_buying.getCellData(i, "pchsSeq"));
        ds_selling.setCellData(pos, "fareEngCd", fCode);
        ds_selling.setCellData(pos, "fareEngNm", fName);
        ds_selling.setCellData(pos, "fareGrpCd", ds_buying.getCellData(i, "fareGrpCd"));
        ds_selling.setCellData(pos, "sellItemCd", ds_buying.getCellData(i, "selpchItemCd"));
        ds_selling.setCellData(pos, "crcCd", ds_buying.getCellData(i, "crcCd"));
        ds_selling.setCellData(pos, "fareUnit", ds_buying.getCellData(i, "fareUnit"));
        ds_selling.setCellData(pos, "chgWt", ds_buying.getCellData(i, "chgWt"));
        if (chb_copy1.getValue() != "" && chb_copy2.getValue() != "") {
          ds_selling.setCellData(pos, "sellUpr", ds_buying.getCellData(i, "pchsUpr"));
          ds_selling.setCellData(pos, "sellAmtFcrc", ds_buying.getCellData(i, "pchsAmtFcrc"));
          ds_selling.setCellData(pos, "exRate", ds_buying.getCellData(i, "exRate"));
          ds_selling.setCellData(pos, "sellAmt", ds_buying.getCellData(i, "pchsAmt"));
          ds_selling.setCellData(pos, "vatAmt", ds_buying.getCellData(i, "vat"));
          ds_selling.setCellData(pos, "usdAmt", ds_buying.getCellData(i, "usdAmt"));
          ds_selling.setCellData(pos, "trfUpr", ds_buying.getCellData(i, "trfUpr"));
          ds_selling.setCellData(pos, "vatYn", ds_buying.getCellData(i, "vatYn"));
        }
      }
    }
  }
  chb_copy1.setValue("");
  chb_copy2.setValue("");
};
scwin.f_openContainerPopup = async function () {
  let rtnList = await $c.win.openPopup($p, "/ui/il/seaout/sobl/se_107_01_01p.xml", {
    width: 550,
    height: 410,
    modal: true,
    data: {
      carrierBkNo: scwin.ed_carrierBkNo
    }
  });
  if (rtnList == null) return false;
  for (let i = 0; i < rtnList.length; i++) {
    for (let t = 0; t < ds_ocContList.getRowCount(); t++) {
      if (ds_ocContList.getCellData(t, "mccntno") == rtnList[i][3]) {
        await $c.win.alert($p, "Container [" + rtnList[i][3] + "] already exists");
        return false;
      }
    }
    ds_ocContList.insertRow();
    let pos = ds_ocContList.getRowPosition();
    ds_ocContList.setCellData(pos, "kcomcd", scwin.hd_kcomcd);
    ds_ocContList.setCellData(pos, "mchblno", cnd_ed_hhblno.getValue());
    ds_ocContList.setCellData(pos, "inpid", scwin.userId);
    ds_ocContList.setCellData(pos, "mccntno", rtnList[i][3]);
    ds_ocContList.setCellData(pos, "mctype", rtnList[i][7]);
    ds_ocContList.setCellData(pos, "mcseal1", rtnList[i][6]);
  }
};
scwin.f_RunExcel = async function (value) {
  let countA = ds_selling.getRowCount();
  if (!(countA > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_selling, {
      fileName: "Selling List.xlsx",
      sheetName: "Selling List"
    });
  }
};
scwin.f_RunExcel2 = async function (value) {
  let countA = ds_buying.getRowCount();
  if (!(countA > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_buying, {
      fileName: "Buying List.xlsx",
      sheetName: "Buying List"
    });
  }
};
scwin.f_FileDownload = async function () {
  await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonFilePopup.xml", {
    width: 870,
    height: 335,
    modal: true,
    data: {
      houseNo: cnd_ed_hhblno.getValue()
    }
  });
};
scwin.f_openApi = function () {/* TODO: ActiveX WScript.Shell not supported in WebSquare */};
scwin.f_Tracking = async function () {
  if (ds_houseblList.getRowCount() == 0) {
    await $c.win.alert($p, "선사 Tracking 할 Direct B/L을 조회해 주세요.");
    return false;
  } /* TODO: ActiveX WScript.Shell not supported in WebSquare */
};
scwin.f_ProgramDownload = function () {/* TODO: FTP download not supported in WebSquare */};
scwin.f_bookingSearchPopup = async function () {
  let v_paramObject = {
    v_hhio: scwin.hd_hhio
  };
  let result = await $c.win.openPopup($p, "/ui/il/seaout/sobk/se_103_01_01p.xml", {
    width: 1000,
    height: 600,
    modal: true,
    data: v_paramObject
  });
  if (result && result.v_bkNo) {
    ed_hhbkgno.setValue(result.v_bkNo);
    if (ed_hhbkgno.getValue() != "") {
      ed_hhbkgno.setFocus();
      scwin.f_retrieveCarrierBkNo();
    }
  }
  return false;
};
scwin.f_packageRateSellingLoading = function (row) {
  let v_wgt = Number(ed_hhgwgt.getValue()) / 1000;
  let v_msr = Number(ed_hhmsr.getValue());
  let v_wgtR = Math.ceil(v_wgt);
  let v_msrR = Math.ceil(v_msr);
  let wgt = v_wgt,
    msr = v_msr;
  if (ds_selling.getCellData(row, "fareEngCd") == "WFG") {
    wgt = v_wgtR;
    msr = v_msrR;
  }
  let unit = ds_selling.getCellData(row, "fareUnit");
  if (unit == "WGT" || unit == "M/T") {
    if (ds_selling.getCellData(row, "fareEngCd") == "WFG") {
      ds_selling.setCellData(row, "chgWt", Math.ceil(Number(ed_hhgwgt.getValue())));
    } else {
      ds_selling.setCellData(row, "chgWt", ed_hhgwgt.getValue());
    }
  } else if (unit == "R/T") {
    ds_selling.setCellData(row, "chgWt", v_wgt > v_msr ? wgt : msr);
  } else if (unit == "CBM") {
    ds_selling.setCellData(row, "chgWt", msr);
  } else if (unit == "CASE") {
    ds_selling.setCellData(row, "chgWt", "1");
  } else {
    if (unit == ed_hhcnt1type.getValue()) ds_selling.setCellData(row, "chgWt", ed_hhcnt1.getValue());else if (unit == ed_hhcnt2type.getValue()) ds_selling.setCellData(row, "chgWt", ed_hhcnt2.getValue());else if (unit == ed_hhcnt3type.getValue()) ds_selling.setCellData(row, "chgWt", ed_hhcnt3.getValue());else if (unit == ed_hhcnt4type.getValue()) ds_selling.setCellData(row, "chgWt", ed_hhcnt4.getValue());
  }
};
scwin.f_packageRateBuyingLoading = function (row) {
  let v_wgt = Number(ed_hhgwgt.getValue()) / 1000;
  let v_msr = Number(ed_hhmsr.getValue());
  let v_wgtR = Math.ceil(v_wgt);
  let v_msrR = Math.ceil(v_msr);
  let wgt = v_wgt,
    msr = v_msr;
  if (ds_buying.getCellData(row, "fareEngCd") == "WFG") {
    wgt = v_wgtR;
    msr = v_msrR;
  }
  let unit = ds_buying.getCellData(row, "fareUnit");
  if (unit == "WGT" || unit == "M/T") {
    if (ds_buying.getCellData(row, "fareEngCd") == "WFG") {
      ds_buying.setCellData(row, "chgWt", Math.ceil(Number(ed_hhgwgt.getValue())));
    } else {
      ds_buying.setCellData(row, "chgWt", ed_hhgwgt.getValue());
    }
  } else if (unit == "R/T") {
    ds_buying.setCellData(row, "chgWt", v_wgt > v_msr ? wgt : msr);
  } else if (unit == "CBM") {
    ds_buying.setCellData(row, "chgWt", msr);
  } else if (unit == "CASE") {
    ds_buying.setCellData(row, "chgWt", "1");
  } else {
    if (unit == ed_hhcnt1type.getValue()) ds_buying.setCellData(row, "chgWt", ed_hhcnt1.getValue());else if (unit == ed_hhcnt2type.getValue()) ds_buying.setCellData(row, "chgWt", ed_hhcnt2.getValue());else if (unit == ed_hhcnt3type.getValue()) ds_buying.setCellData(row, "chgWt", ed_hhcnt3.getValue());else if (unit == ed_hhcnt4type.getValue()) ds_buying.setCellData(row, "chgWt", ed_hhcnt4.getValue());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/il/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhblno',placeholder:'',style:'width:150px;',ref:'data:ds_retrieve.hhblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhmblno',placeholder:'',style:'width:150px;',ref:'data:ds_houseblList.hhmblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_autono',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.autono'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhpcgb',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.hhpcgb'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Header',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Other',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'height:40px',id:'tabs3',label:'Freight'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Booking',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhbkgno',placeholder:'',style:'width:150px;',ref:'data:ds_houseblList.hhbkgno',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Seq',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhbltype',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.hhbltype'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhscd',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhscd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp1',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선적',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_shipMgntNo',placeholder:'',style:'width:150px;',ref:'data:ds_houseblList.shipMgntNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_hhs1',placeholder:'',class:'',ref:'data:ds_houseblList.hhs1'}},{T:1,N:'xf:input',A:{style:'',id:'txt_hhs2',placeholder:'',class:'',ref:'data:ds_houseblList.hhs2'}},{T:1,N:'xf:input',A:{style:'',id:'txt_hhs3',placeholder:'',class:'',ref:'data:ds_houseblList.hhs3'}},{T:1,N:'xf:input',A:{style:'',id:'txt_hhs4',placeholder:'',class:'',ref:'data:ds_houseblList.hhs4'}},{T:1,N:'xf:input',A:{style:'',id:'txt_hhs5',placeholder:'',class:'',ref:'data:ds_houseblList.hhs5'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhccd',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhccd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp2',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_1',style:'',type:'button','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Notify Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_hhc1',placeholder:'',style:'',ref:'data:ds_houseblList.hhc1'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc2',placeholder:'',style:'',ref:'data:ds_houseblList.hhc2'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc3',placeholder:'',style:'',ref:'data:ds_houseblList.hhc3'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc4',placeholder:'',style:'',ref:'data:ds_houseblList.hhc4'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc5',placeholder:'',style:'',ref:'data:ds_houseblList.hhc5'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhncd',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhncd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp3',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_2',style:'',type:'button','ev:onclick':'scwin.btn_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Same'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_3',style:'',type:'button','ev:onclick':'scwin.btn_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_hhn1',placeholder:'',style:'',ref:'data:ds_houseblList.hhn1'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn2',placeholder:'',style:'',ref:'data:ds_houseblList.hhn2'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn3',placeholder:'',style:'',ref:'data:ds_houseblList.hhn3'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn4',placeholder:'',style:'',ref:'data:ds_houseblList.hhn4'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn5',placeholder:'',style:'',ref:'data:ds_houseblList.hhn5'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'VSL/VOY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhvslcd',selectID:'',popupID:'',validTitle:'',nameId:'txt_hhvsl',style:'',id:'udc_hhvsl'}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_hhvyg',placeholder:'',class:'',ref:'data:ds_houseblList.hhvyg'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhlodcd',nameId:'txt_hhlodnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhlod'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhdisccd',nameId:'txt_hhdiscnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhdisc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhdlvcd',nameId:'txt_hhdlvnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhdlv'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Destination',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhfdcd',nameId:'txt_hhfdnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhfd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhunitcd',nameId:'txt_hhunit',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhunit'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhgwgt',placeholder:'',style:'width:150px;',ref:'data:ds_houseblList.hhgwgt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhmsr',placeholder:'',style:'width:150px;',ref:'data:ds_houseblList.hhmsr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhetd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.hhetd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhondt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.hhondt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hheta',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.hheta'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Issued Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhisudt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.hhisudt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Result Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_creadyDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.creadyDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Dangerous',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhdanggb',ref:'data:ds_houseblList.hhdanggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PP/CC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhisunm',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.hhisunm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Cargo Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhpaynm',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.hhpaynm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Issued At',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhprenm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhprenm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Payable At',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhstype',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhstype'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Term',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhincoterm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhincoterm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Service Term',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_pathCd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.pathCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhexgb',search:'start',style:'',submenuSize:'auto',ref:'data:ds_houseblList.hhexgb'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt1type',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhcnt1type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp21',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp21_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt2type',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhcnt2type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp22',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp22_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt3type',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhcnt3type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp23',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp23_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt4type',placeholder:'',style:'width: 50px;',ref:'data:ds_houseblList.hhcnt4type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_img_PopUp24',style:'',type:'button','ev:onclick':'scwin.btn_img_PopUp24_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt1',placeholder:'',style:'width:75px;',ref:'data:ds_houseblList.hhcnt1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt2',placeholder:'',style:'width:75px;',ref:'data:ds_houseblList.hhcnt2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt3',placeholder:'',style:'width:75px;',ref:'data:ds_houseblList.hhcnt3'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt4',placeholder:'',style:'width:75px;',ref:'data:ds_houseblList.hhcnt4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_cino',placeholder:'',style:'',ref:'data:ds_houseblList.cino'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Partner',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhagent',nameId:'txt_hhagentnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhagent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhagentattn',nameId:'txt_hhagentattnnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhagentattn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhactcust',nameId:'txt_hhactcustnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhactcust'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhactattn',nameId:'txt_hhactattnnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhactattn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhsales',nameId:'txt_hhsalesnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhsales'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhliner',nameId:'txt_hhlinernm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhliner'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhlinerattn',nameId:'txt_hhlinerattnnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhlinerattn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_departmentChange',style:'',type:'button','ev:onclick':'scwin.pu_departmentChange_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' &nbsp;',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhbuyer',nameId:'txt_hhbuyernm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhbuyer'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No(H)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No(M)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNoM',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Path',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mexgb',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_houseblList.mexgb'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_houseblList.hhtriange',appearance:'full',style:'',id:'chb_hhtriange',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Triangle'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_houseblList.hhnomi',appearance:'full',style:'',id:'chb_hhnomi',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NOMI O B/L'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:input',A:{style:'width:40px;',id:'ed_hhobl',placeholder:'',class:'',ref:'data:ds_houseblList.hhobl'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_slipTax',id:'gr_slipTax',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'Customer',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intendDt',inputType:'text',value:'Billing Date',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',value:'Tax Date',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',value:'Slip No',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intendDt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_ocProfitList',id:'gr_ocProfitList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selling',inputType:'text',value:'Selling',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buying',inputType:'text',value:'Buying',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'profit',inputType:'text',value:'Profit',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selling',inputType:'text',width:'80',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buying',inputType:'text',width:'80',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'profit',inputType:'text',width:'80',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 70%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group6',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'50',visibleRowNumFix:'true',dataList:'ds_ocContList',readOnly:'true',rowNumHeaderValue:'No',style:'',autoFit:'allColumn',id:'gr_ocContList',visibleRowNum:'17',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mccntno',value:'Container',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mctype',value:'Type',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',value:'Seal No1',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',value:'Seal No2',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcpkg',value:'Package',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mcpkgcd',value:'Unit',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mccntno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mctype',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcpkg',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mcpkgcd',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totcnt',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'CNT PKG',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_totpkg',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_CntrReceive',type:'button',class:'btn','ev:onclick':'scwin.btn_CntrReceive_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CNTR Receive'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',EngYn:'Y',btnDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Customer Invoice No',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_hhcustno',placeholder:'',class:'',ref:'data:ds_houseblList.hhcustno'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'txt_hhcustnoseq',placeholder:'',class:'',ref:'data:ds_houseblList.hhcustnoseq'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'L/C No',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhlcno',placeholder:'',style:'',ref:'data:ds_houseblList.hhlcno'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Purchase Order No',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhpono',placeholder:'',style:'',ref:'data:ds_houseblList.hhpono'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container Information',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhcontInfo',placeholder:'',style:'',ref:'data:ds_houseblList.hhcontInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Place of Receipt',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhrcvcd',nameId:'txt_hhrcvnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhrcv'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Item',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_hhitem',nameId:'txt_hhmitem1',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhitem'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhmitem2',placeholder:'',style:'',ref:'data:ds_houseblList.hhmitem2'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'ds_ocDirectMblno',id:'gr_ocDirectMblno',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'oblno',inputType:'text',width:'80',value:'SEQ',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',width:'120',value:'Master B/L',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'oblno',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oblno',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Selling Exchange Rate Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcur',placeholder:'',style:'width:30px;',ref:'data:ds_houseblList.hhcur'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhexgb',search:'start',style:'width:80px;',submenuSize:'auto',ref:'data:ds_houseblList.hhexgb'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhcurdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.hhcurdt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhexrate',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.hhexrate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'US Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhuexrate',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.hhuexrate'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'width: 350px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_6',type:'button',class:'btn link','ev:onclick':'scwin.btn_6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_customerChange',type:'button',class:'btn link','ev:onclick':'scwin.pu_customerChange_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_result1',type:'button',class:'btn link','ev:onclick':'scwin.btn_result1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Result Date'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_exRateChange',type:'button',class:'btn link','ev:onclick':'scwin.pu_exRateChange_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Buying Exchange Rate Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcur',placeholder:'',style:'width:30px;',ref:'data:ds_houseblList.mhcur'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mexgb',search:'start',style:'width:80px;',submenuSize:'auto',ref:'data:ds_houseblList.mexgb'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhcurdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_houseblList.mhcurdt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhexrate',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.mhexrate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'US Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhusdrate',placeholder:'',style:'width:100px;',ref:'data:ds_houseblList.mhusdrate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width: 350px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_4',style:'',type:'button','ev:onclick':'scwin.btn_4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_customerChange1',style:'',type:'button','ev:onclick':'scwin.pu_customerChange1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_result2',style:'',type:'button','ev:onclick':'scwin.btn_result2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Result Date'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_exRateChange1',style:'',type:'button','ev:onclick':'scwin.pu_exRateChange1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Selling',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'House No',class:'req'}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'srch_ed_hhblno',placeholder:'',class:'',mandatory:'true'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'DOC No',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:80px;',id:'cnd_lc_mhno2',class:''}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear2',style:'',type:'button','ev:onclick':'scwin.btn_Clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴지통'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve2',style:'',type:'button','ev:onclick':'scwin.btn_retrieve2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group7',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'ds_selling',id:'gr_selling',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',width:'80',value:'SEQ',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',value:'SEQ',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',value:'Customer',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'80',value:'Name',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',width:'80',value:'F/Code',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'80',value:'Name',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',width:'80',value:'Init',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'140',value:'통합매출입코드',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareUnit',inputType:'text',width:'80',value:'CUR',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chgWt',displayMode:'label',value:'Unit',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellUpr',displayMode:'label',value:'Package',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmtFcrc',displayMode:'label',value:'Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exRate',displayMode:'label',value:'Amount',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmt',displayMode:'label',value:'Ex-Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatAmt',displayMode:'label',value:'Amount(W)',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'usdAmt',displayMode:'label',value:'VAT',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',displayMode:'label',value:'Amount(US$)',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'certiNo',displayMode:'label',value:'Result',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfUpr',displayMode:'label',value:'Invoice No',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatYn',displayMode:'label',value:'Tariff Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRateTyp',displayMode:'label',value:'vatYn',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcsnClsCd',displayMode:'label',value:'exRateTyp',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column21',displayMode:'label',value:'내부매입구분',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'textImage',width:'80',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareUnit',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chgWt',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'code:name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_sellingUnit'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellUpr',displayMode:'label',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmtFcrc',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exRate',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmt',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatAmt',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'usdAmt',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'certiNo',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfUpr',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatYn',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRateTyp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcsnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dcsnClsCd',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Amount($)',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_SellingSumAmount',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Amount(W)',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_SellingSumAmountW',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'VAT',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_SellingSumVat',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'AMOUNT(W+VaT)',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_SellingAmountSum',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake_selling',placeholder:'',style:'width:50px;',disabled:'true'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DelAll2',style:'',type:'button','ev:onclick':'scwin.btn_DelAll2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'A/Del'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Buying',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_copyCondition.copy1',appearance:'full',style:'',id:'chb_copy1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_copyCondition.copy2',appearance:'full',style:'',id:'chb_copy2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_9',type:'button',class:'btn link','ev:onclick':'scwin.btn_9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy buy to sell'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}},{T:1,N:'xf:input',A:{class:'',id:'srch_ed_hhblno2',placeholder:'',style:'width:80px;',mandatory:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno3',search:'start',style:'width:80px;',submenuSize:'auto'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear3',style:'',type:'button','ev:onclick':'scwin.btn_Clear3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴지통'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve3',style:'',type:'button','ev:onclick':'scwin.btn_retrieve3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'N',gridUpYn:'N',grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group10',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'ds_buying',id:'gr_buying',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'text',width:'80',value:'SEQ',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSeq',inputType:'text',width:'80',value:'Type',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'80',value:'SEQ',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80',value:'odrNo',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'100',value:'Customer',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'80',value:'Name',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',width:'80',value:'F/Code',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'80',value:'Name',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'80',value:'Init',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'crcCd',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fareUnit',value:'CUR',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chgWt',value:'Unit',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsUpr',value:'Package',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsAmtFcrc',value:'Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRate',value:'Amount',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsAmt',value:'Ex-Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vat',value:'Amount(W)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'usdAmt',value:'VAT',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',value:'Amount(US$)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellDeptCd',value:'Result',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellDeptNm',value:'Inner Dept',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsCertiNo',value:'내부부서명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfUpr',value:'Invoice No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',value:'Tariff Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'exRateTyp',value:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclYn',value:'Vehicle No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dcsnClsCd',value:'vehclYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',value:'내부매입구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSeq',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'textImage',width:'80',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fareUnit',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chgWt',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'code:name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_buyingUnit'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsUpr',displayMode:'label',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRate',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsAmt',displayMode:'label',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vat',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'usdAmt',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'sellDeptCd',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'sellDeptNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsCertiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfUpr',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'exRateTyp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dcsnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'select',id:'dcsnClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'미확정'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount($)',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_BuyingSumAmount',placeholder:'',style:'width:80px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount(W)',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_BuyingSumAmountW',placeholder:'',style:'width:80px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VAT',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_BuyingSumVat',placeholder:'',style:'width:80px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'AMOUNT(W+VaT)',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_BuyingAmountSum',placeholder:'',style:'width:80px;'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',disabled:'true',id:'ed_rowMake_buying',placeholder:'',style:'width:50px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DelAll3',style:'',type:'button','ev:onclick':'scwin.btn_DelAll3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'A/Del'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_selling_total',placeholder:'',style:'width:150px;',ref:'data:ds_profit.sellAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_purchase_total',placeholder:'',style:'width:150px;',ref:'data:ds_profit.pchsAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'손익',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_profit_total',placeholder:'',style:'width:150px;',ref:'data:ds_profit.profit'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마진율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_profitRate_total',placeholder:'',style:'width:150px;',ref:'data:ds_profit.profitRate'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_8',type:'button',class:'btn link','ev:onclick':'scwin.btn_8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_9',style:'',type:'button','ev:onclick':'scwin.btn_9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_10',style:'',type:'button','ev:onclick':'scwin.btn_10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Invoice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_GetFreight',style:'',type:'button','ev:onclick':'scwin.btn_GetFreight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Get Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_Tracking',style:'',type:'button','ev:onclick':'scwin.btn_Tracking_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사 Tracking'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ApiSetup',style:'',type:'button','ev:onclick':'scwin.btn_ApiSetup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_FileDownload',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_FileDownload_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})