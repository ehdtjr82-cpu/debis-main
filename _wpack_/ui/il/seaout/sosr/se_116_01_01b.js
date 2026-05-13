/*amd /ui/il/seaout/sosr/se_116_01_01b.xml 184840 4c92b1d0b910ff7fe178e27aca55e6790bef0c81004a31a4335d07a9c0c53c1e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srno',name:'S/R NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srList',saveRemovedData:'true','ev:ondataload':'scwin.ds_srList_ondataload','ev:onrowpositionchange':'scwin.ds_srList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'S/R NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'BOOKING SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhscd',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'CLOSED',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'SHIPPER1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs2',name:'SHIPPER2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs3',name:'SHIPPER3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs4',name:'SHIPPER4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs5',name:'SHIPPER5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhccd',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'CONSIGNEE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc2',name:'CONSIGNEE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc3',name:'CONSIGNEE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc4',name:'CONSIGNEE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc5',name:'CONSIGNEE5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhncd',name:'NOTIFY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn1',name:'NOTIFY1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn2',name:'NOTIFY2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn3',name:'NOTIFY3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn4',name:'NOTIFY4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn5',name:'NOTIFY5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'VESSEL NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'VOYAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'LOADING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'LOADING NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'DISCHARGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'DISCHARGE NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'PACKAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunit',name:'UNIT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhondt',name:'ONBOARD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'ISSUED DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'RESULT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'DANGEROUS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'CARGO TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisunm',name:'ISSUED AT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpaynm',name:'PAYABLE AT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'FREIGHT TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhstype',name:'SERVICE TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'INCOTERMS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'CONTAINER QTY1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'CONTAINER QTY2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'CONTAINER QTY3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'CONTAINER QTY4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'PARTNER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'PARTNER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'PARTNER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'PARTNER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'CUSTOMER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'CUSTOMER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'CUSTOMER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsales',name:'SALESMAN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'SALESMAN NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'LINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'LINER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'LINER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'LINER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'DEPT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'DEPT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hharea',name:'AREA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'AREA NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'TRIANGLE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'NOMI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'OLD B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'CO-LOAD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsubpkg',name:'PACKAGES1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunit2',name:'PACKAGES2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mark',name:'Mark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'descnm',name:'Description',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp1',name:'SAID TO CONTAIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp2',name:'SHIPPERS LOAD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp3',name:'CONTAINER PRINT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp4',name:'TERM PRINT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp5',name:'RECIPT DATE PRINT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhp6',name:'ONBOARD DATE PRINT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsay',name:'SAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'ITEM NAME1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'ITEM NAME2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'REMARK1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'REMARK2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'REMARK3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'REMARK4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'REMARK5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'SHIPMENT TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'PRE-VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'RECEIPT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'RECEIPT NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'DELIVERY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'DELIVERY NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'DESTINATION',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'DESTINATION NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpono',name:'PO NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'INVOICE VALUE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'L/C NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarecd',name:'적재장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarenm',name:'적재장소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwareEngCd',name:'적재장소영문',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ucrNo',name:'UCR No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipMgntNo',name:'SHIP MGNT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'선복',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declaredValue',name:'신고화물가격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner1',name:'LINER1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner2',name:'LINER2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner3',name:'LINER3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner4',name:'LINER4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner5',name:'LINER5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSurCd',name:'부가정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSurCont',name:'내용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSur1',name:'설명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSur2',name:'설명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSur3',name:'설명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSur4',name:'설명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siSur5',name:'설명5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtBillCd',name:'운송증권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtBillStatus',name:'문서상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcCd',name:'운송서비스',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scacCd',name:'SCAC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lloydsCd',name:'Lloyds',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhhscode',name:'HS CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediVersion',name:'EDI Version',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtCrrgCond',name:'계약운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shCtCd',name:'Shipper Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnCtCd',name:'Consignee Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntCtCd',name:'Notify Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lnCtCd',name:'Liner Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhshrgno',name:'Shipper CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnrgno',name:'Consignee CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhntrgno',name:'Notify CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlnrgno',name:'Liner CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsKId',name:'Shipper KId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcKId',name:'Consignee KId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhnKId',name:'Notify KId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerKId',name:'Liner KId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ocContList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchblno',name:'BL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'S/R NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mccntno',name:'CONTAINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mctype',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'SEAL NO1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'SEAL NO2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'MEASURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'PART',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ocElList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'BL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'S/R NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elno',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgb',name:'포장기호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpkg',name:'PACKAGE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mut',name:'UNIT2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgb',name:'분할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pseq',name:'분할선적차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'srno',name:'S/R NO',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_hhblno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'DOCUMENT NO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerType'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerType_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dummy',name:'dummy',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'파라메터1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sosr.RetrieveSeaExportSrCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_srList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocElList","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_srList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocElList","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSrno',action:'/il.seaout.sosr.RetrieveSrnoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_retrieveNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveNo","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHbl',action:'/il.seaout.sosr.RetrieveSeaExportHblCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_hhblno","key":"IN_DS1"},{"id":"ds_srList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocElList","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_srList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocElList","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveHbl_submitdone','ev:submiterror':'scwin.sbm_retrieveHbl_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seaout.sosr.SaveSeaExportSrCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_srList","key":"IN_DS1"},{"id":"ds_ocContList","key":"IN_DS2"},{"id":"ds_ocElList","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_send',action:'/il.seaout.sosr.SendSrEdiCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_srList","key":"IN_DS1"},{"id":"ds_ocContList","key":"IN_DS2"},{"id":"ds_ocElList","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seaout.sosr.DeleteSeaExportSrCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_srList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_containerType',action:'/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveContainerTypeList',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_containerType","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_containerType","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_containerType_submitdone','ev:submiterror':'scwin.sbm_containerType_submiterror'}},{T:1,N:'xf:submission',A:{id:'ds_containerType_freight',action:'/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveContainerTypeList',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_containerType","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_containerType_freight","key":"GAUCE"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_mhnoLoading',action:'/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_combo","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_hmhno","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_mhnoLoading_submitdone','ev:submiterror':'scwin.sbm_mhnoLoading_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.MSG_LO_WRN_010 = "변경된 내역을 저장 후 EDI Send를 할 수 있습니다.";
scwin.MSG_LO_WRN_011 = "Shipping Request를 전송하시겠습니까?";
scwin.statusFlag = "";
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.mhnoFlag = "0";
scwin.v_linkcheck = "";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_carrierBkno = "";
scwin.v_srno = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_hhio = "O";
scwin.hd_mwarecd = "";
scwin.hd_mwarenm = "";
scwin.hd_mwareEngCd = "";
scwin.txt_hhlinernm = "";
scwin.userId = "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  if (scwin.params != null) {
    scwin.v_linkcheck = scwin.params["linkcheck"] || "0";
    scwin.v_kcomcd = scwin.params["kcomcd"] || "";
    scwin.v_blno = scwin.params["blno"] || "";
    scwin.v_mhno = scwin.params["mhno"] || "";
    scwin.v_bkno = scwin.params["bkno"] || "";
    scwin.v_carrierBkno = scwin.params["carrierBkno"] || "";
    scwin.v_srno = scwin.params["srno"] || "";
  }
  const codeOptions = [{
    grpCd: "IL028",
    compID: "lc_ctrtCrrgCond"
  }, {
    grpCd: "IL024",
    compID: "lc_siSurCont"
  }, {
    grpCd: "IL025",
    compID: "lc_frtBillCd"
  }, {
    grpCd: "IL026",
    compID: "lc_frtBillStatus"
  }, {
    grpCd: "IL027",
    compID: "lc_tcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const gauceUtillOption = [{
    method: "getCodeList",
    param1: "IL023",
    param2: 1,
    param3: "I",
    compID: "lc_siSurCd"
  }];
  $c.data.setGauceUtil($p, gauceUtillOption);
  scwin.f_DefaultValue();
  scwin.f_Check();
  scwin.f_ContainerTypeLoading();
  scwin.f_getParametrSetting(scwin.v_linkcheck);
};
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "1":
      // Booking에서 Search Grid
      scwin.mhnoFlag = "1";
      if (scwin.v_blno == "null" || scwin.v_blno == "") {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.focus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      ed_hhblno.setValue(scwin.v_blno);
      ed_hhblno.focus();
      if (ds_hmhno.getRowCount() == 0) {
        ds_hmhno.insertRow();
      }
      ds_hmhno.setRowPosition(0);
      ds_hmhno.setCellData(0, "code", scwin.v_mhno);
      ds_hmhno.setCellData(0, "name", scwin.v_mhno);
      cnd_lc_mhno.focus();
      break;
    case "2":
      //House Search
      scwin.mhnoFlag = "1";
      if (scwin.v_blno == "null" || scwin.v_blno == "") {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.focus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      cnd_ed_hhblno.setValue(scwin.v_blno);
      if (ds_hmhno.getRowCount() == 0) {
        ds_hmhno.insertRow();
      }
      ds_hmhno.setRowPosition(0);
      ds_hmhno.setCellData(0, "code", scwin.v_mhno);
      ds_hmhno.setCellData(0, "name", scwin.v_mhno);
      cnd_lc_mhno.focus();
      break;
    case "3":
      scwin.mhnoFlag = "1";
      cnd_ed_srno.setValue(scwin.v_srno);
      scwin.f_Retrieve();
      break;
    case "4":
      scwin.f_Create();
      cnd_ed_hhblno.focus();
      ed_hhetd.focus();
      break;
  }
};
scwin.f_Check = function () {
  if (scwin.statusFlag == "I") {
    cnd_lc_autono.setSelectedIndex(1);
    cnd_lc_mhno.setSelectedIndex(0);
    lc_hhbltype.setSelectedIndex(0);
    lc_hhpcgb.setSelectedIndex(0);
    lc_hhisunm.setSelectedIndex(1);
    lc_hhstype.setSelectedIndex(0);
    lc_hhcoload.setSelectedIndex(0);
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("45GP");
    ed_hhobl.setValue("3");
    chb_hhtriange.setValue(false);
    chb_hhnomi.setValue(false);
    chb_hhp1.setValue("1");
    chb_hhp2.setValue("");
    chb_hhp3.setValue("");
    chb_hhp4.setValue("1");
    chb_hhp5.setValue("");
    chb_hhp6.setValue("1");
    rd_hhdanggb.setValue("N");
    rd_hhmnfgb.setValue("E");
  } else if (scwin.statusFlag == "C") {
    cnd_lc_autono.setSelectedIndex(1);
    cnd_lc_mhno.setSelectedIndex(0);
    lc_hhbltype.setSelectedIndex(0);
    lc_hhpcgb.setSelectedIndex(0);
    lc_hhisunm.setSelectedIndex(1);
    lc_hhstype.setSelectedIndex(0);
    lc_hhcoload.setSelectedIndex(0);
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("45GP");
    ed_hhobl.setValue("3");
    chb_hhtriange.setValue(false);
    chb_hhnomi.setValue(false);
    chb_hhp1.setValue("1");
    chb_hhp2.setValue("");
    chb_hhp3.setValue("");
    chb_hhp4.setValue("1");
    chb_hhp5.setValue("");
    chb_hhp6.setValue("1");
    rd_hhdanggb.setValue("N");
    rd_hhmnfgb.setValue("E");
  }
};
scwin.f_DefaultValue = function () {
  scwin.f_Set("INIT");
  cnd_ed_hhblno.focus();
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_1, btn_3, btn_4, btn_CntrReceive, grpBtn_ocContList, grpBtn_ocElList]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create]);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableObjects($p, [tbl_Search]);
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_CntrReceive, grpBtn_ocContList, grpBtn_ocElList]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Delete, btn_4]);
      gr_ocContList.setReadOnly("grid", true);
      gr_ocElList.setReadOnly("grid", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      $c.gus.cfEnableObjects($p, [tbl_Search]);
      scwin.statusFlag = "";
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_4]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_3, btn_CntrReceive, grpBtn_ocContList, grpBtn_ocElList]);
      gr_ocContList.setReadOnly("grid", false);
      gr_ocElList.setReadOnly("grid", false);
      $c.gus.cfDisableObjects($p, [tbl_Search]);
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, cnd_ed_srno]);
      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete, btn_4]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_3, btn_CntrReceive, grpBtn_ocContList, grpBtn_ocElList]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      gr_ocContList.setReadOnly("grid", false);
      gr_ocElList.setReadOnly("grid", false);
      $c.gus.cfDisableObjects($p, [tbl_Search]);
      scwin.statusFlag = "U";
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};
scwin.f_EnablePopUpObj = function () {
  //$c.gus.cfEnableObjects([img_Date2, img_Date3, img_Date4, img_Date5]);
  $c.gus.cfEnableObjects($p, [img_PopUp1, img_PopUp2, img_PopUp3, img_PopUp4, img_PopUp5, img_PopUp6, img_PopUp7, img_shCtcd, img_PopUp13, img_PopUp17, img_PopUp18, img_PopUp19, img_PopUp20, img_PopUp21, img_PopUp22, img_PopUp23, img_PopUp24, img_cnCtcd, img_ntCtcd, img_lnCtcd, img_PopUp14]);
};
scwin.f_DisablePopUpObj = function () {
  //$c.gus.cfDisableObjects(img_Date2, img_Date3, img_Date4, img_Date5]);
  $c.gus.cfDisableObjects($p, [img_PopUp1, img_PopUp2, img_PopUp3, img_PopUp4, img_PopUp5, img_PopUp6, img_PopUp7, img_shCtcd, img_PopUp13, img_PopUp17, img_PopUp18, img_PopUp19, img_PopUp20, img_PopUp21, img_PopUp22, img_PopUp23, img_PopUp24, img_cnCtcd, img_ntCtcd, img_lnCtcd, img_PopUp14]);
};
scwin.f_Retrieve = async function () {
  if (cnd_ed_hhblno.getValue().trim() == "" && cnd_ed_srno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No or S/R No"]);
    return;
  }
  dma_retrieve.set("kcomcd", scwin.hd_kcomcd);
  dma_retrieve.set("hhblno", cnd_ed_hhblno.getValue());
  dma_retrieve.set("mhno", cnd_lc_mhno.getValue());
  dma_retrieve.set("hhio", scwin.hd_hhio);
  dma_retrieve.set("srno", cnd_ed_srno.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_srno]);
  cnd_lc_autono.setSelectedIndex(1);
  ds_hmhno.removeAll();
};
scwin.f_Create = function () {
  scwin.f_FieldClear();
  ds_hmhno.insertRow();
  ds_srList.removeAll();
  ds_srList.insertRow();
  ds_ocContList.removeAll();
  ds_ocElList.removeAll();
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  $c.gus.cfEnableObj($p, cnd_ed_srno, true);
  scwin.f_Set("CREATE");
  scwin.f_Check();
  cnd_ed_srno.setValue("");
  cnd_ed_srno.focus();
};
scwin.f_Update = async function () {
  if (ed_hhetd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  } else {
    scwin.f_Set("UPDATE");
  }
};
scwin.f_Save = async function () {
  if (ds_srList.getModifiedIndex().length > 0 || ds_ocContList.getModifiedIndex().length > 0 || ds_ocElList.getModifiedIndex().length > 0 || ds_ocContList.getDeletedIndex().length > 0 || ds_ocElList.getDeletedIndex().length > 0) {
    let validResult = await scwin.f_validate();
    if (validResult) {
      let chk = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (chk) {
        if (scwin.statusFlag == "C") {
          dma_retrieve.set("hhetd", ds_srList.getCellData(0, "hhetd"));
          await $c.sbm.execute($p, sbm_retrieveSrno);
          cnd_ed_srno.setValue(ds_retrieveNo.getCellData(0, "srno"));
          let row = 0;
          ds_srList.setCellData(row, "kcomcd", scwin.hd_kcomcd);
          ds_srList.setCellData(row, "hhblno", ed_hhblno.getValue());
          ds_srList.setCellData(row, "srno", cnd_ed_srno.getValue());
          ds_srList.setCellData(row, "mhno", cnd_lc_mhno.getValue());
          ds_srList.setCellData(row, "hhisunm", lc_hhisunm.getValue());
          ds_srList.setCellData(row, "hhpaynm", lc_hhpaynm.getValue());
          ds_srList.setCellData(row, "hhio", scwin.hd_hhio);
          ds_srList.setCellData(row, "inpid", scwin.userId);
          for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
            ds_ocContList.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_ocContList.setCellData(i, "mchblno", ed_hhblno.getValue());
            ds_ocContList.setCellData(i, "inpid", scwin.userId);
            ds_ocContList.setCellData(i, "srno", cnd_ed_srno.getValue());
            ds_ocContList.modifyRowStatus(i, "C");
          }
          for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
            ds_ocElList.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_ocElList.setCellData(i, "hhblno", ed_hhblno.getValue());
            ds_ocElList.setCellData(i, "inpid", scwin.userId);
            ds_ocElList.setCellData(i, "srno", cnd_ed_srno.getValue());
            ds_ocElList.modifyRowStatus(i, "C");
          }
          ds_srList.modifyRowStatus(0, "C");
        }
        let hhs1Val = ds_srList.getCellData(0, "hhs1");
        if (hhs1Val != null && hhs1Val.length > 100) {
          await $c.win.alert($p, "Shipper명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + hhs1Val.length);
          return false;
        }
        let hhc1Val = ds_srList.getCellData(0, "hhc1");
        if (hhc1Val != null && hhc1Val.length > 100) {
          await $c.win.alert($p, "Consignee명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + hhc1Val.length);
          return false;
        }
        let hhn1Val = ds_srList.getCellData(0, "hhn1");
        if (hhn1Val != null && hhn1Val.length > 100) {
          await $c.win.alert($p, "Notify명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + hhn1Val.length);
          return false;
        }
        await $c.sbm.execute($p, sbm_save).then(function (e) {
          $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
          scwin.f_Retrieve();
        });
        $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
        $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
        cnd_ed_hhblno.focus();
        scwin.f_Set("SAVE");
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["S/R"]);
  }
};
scwin.cf_freightNameValidation = async function (ds1, ds2, ds3) {
  // Selling, Partner, Buying (체크안할경우 null)
  const LIMIT = 45;
  const getByte = function (str) {
    if (!str) return 0;
    return new Blob([str], {
      type: "text/plain;charset=UTF-8"
    }).size;
  };
  const check = async function (ds, listName, certiCol) {
    if (!ds) return true;
    const rc = ds.getRowCount();
    for (let i = 0; i < rc; i++) {
      const certiNo = String(ds.getCellData(i, certiCol) || "").trim();
      const fareEngNm = String(ds.getCellData(i, "fareEngNm") || "");
      const bytes = getByte(fareEngNm);
      if (certiNo === "" && bytes > LIMIT) {
        await $c.win.alert($p, "Freight Name은 45바이트 초과로 입력할 수 없습니다.\n" + listName + " List를 확인하세요.\n" + (i + 1) + "번째 행 입력 바이트 수: " + bytes);
        return false;
      }
    }
    return true;
  };

  // ds.isUpdated 대체: 변경건 존재 여부로 체크(없으면 전체검사)
  if (!(await check(ds1, "Selling", "certiNo"))) return false;
  if (!(await check(ds2, "Partner", "certiNo"))) return false;
  if (!(await check(ds3, "Buying", "pchsCertiNo"))) return false;
  return true;
};
scwin.f_Send = async function () {
  if (ds_srList.getModifiedIndex().length > 0 || ds_ocContList.getModifiedIndex().length > 0 || ds_ocElList.getModifiedIndex().length > 0 || ds_ocContList.getDeletedIndex().length > 0 || ds_ocElList.getDeletedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010);
  } else {
    let chkcontent1 = await $c.gus.cfValidate($p, [tb_master]);
    if (!chkcontent1) return false;
    if (ed_hhlinerKId.getValue() == "") {
      $c.win.alert($p, "Carrier's Ktnet Id는 필수 입력 항목입니다.");
      return false;
    }
    let chkTb1 = await $c.gus.cfValidate($p, [gr_ocContList]);
    if (!chkTb1) return false;
    for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
      if (ds_ocContList.getCellData(i, "mcpkg") == "" || ds_ocContList.getCellData(i, "mcpkg") == "0") {
        await $c.win.alert($p, "S/R의 컨테이너 정보에서 컨테이너 [" + ds_ocContList.getCellData(i, "mccntno") + "]의 PKG는 0보다 커야 합니다.");
        scwin.f_Update();
        return false;
      }
      if (ds_ocContList.getCellData(i, "mcwgt") == "" || ds_ocContList.getCellData(i, "mcwgt") == "0") {
        await $c.win.alert($p, "S/R의 컨테이너 정보에서 컨테이너 [" + ds_ocContList.getCellData(i, "mccntno") + "]의 Weight은 0보다 커야 합니다.");
        scwin.f_Update();
        return false;
      }
      if (ds_ocContList.getCellData(i, "mcmsr") == "" || ds_ocContList.getCellData(i, "mcmsr") == "0") {
        await $c.win.alert($p, "S/R의 컨테이너 정보에서 컨테이너 [" + ds_ocContList.getCellData(i, "mccntno") + "]의 Measure는 0보다 커야 합니다.");
        scwin.f_Update();
        return false;
      }
    }
    let chkSend = await $c.win.confirm($p, scwin.MSG_LO_WRN_011);
    if (chkSend) {
      if (cnd_ed_srno.getValue().trim() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["S/R No"]);
        return;
      }
      ds_srList.modifyRowStatus(0, "C");
      for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
        ds_ocContList.modifyRowStatus(i, "C");
      }
      for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
        ds_ocElList.modifyRowStatus(i, "C");
      }
      await $c.sbm.execute($p, sbm_send).then(function (e) {
        if (e.responseJSON.resultDataSet[0].Code < 0) return;
        $c.win.alert($p, "S/R이 성공적으로 전송되었습니다.");
      });
    }
  }
};
scwin.f_Cancel = function () {
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  cnd_ed_hhblno.focus();
  if (scwin.statusFlag == "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    $c.data.undoAll($p, ds_srList);
    scwin.f_cancelRow(1);
    scwin.f_cancelRow(2);
  }
};
scwin.f_Delete = async function () {
  let chk = await $c.win.confirm($p, E_MSG_CM_CRM_004);
  if (chk) {
    $c.data.deleteRow($p, ds_srList);
    await $c.sbm.execute($p, sbm_delete).then(function (e) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
    });
    cnd_ed_hhblno.setValue("");
    ds_srList.removeAll();
    ds_ocContList.removeAll();
    ds_ocElList.removeAll();
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    cnd_ed_hhblno.focus();
    scwin.f_Set("INIT");
  }
};
scwin.f_addRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else {
        if (cnd_ed_hhblno.getValue().length == 4 && cnd_ed_hhblno.getValue() == "DBEX") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
          return;
        } else {
          let newRow = ds_ocContList.insertRow();
          ds_ocContList.setCellData(newRow, "kcomcd", scwin.hd_kcomcd);
          ds_ocContList.setCellData(newRow, "mchblno", cnd_ed_hhblno.getValue());
          ds_ocContList.setCellData(newRow, "srno", cnd_ed_srno.getValue());
          ds_ocContList.setCellData(newRow, "inpid", scwin.userId);
          ds_ocContList.setCellData(newRow, "mcpart", "N");
          ds_ocContList.setCellData(newRow, "mcpkg", 0);
          ds_ocContList.setCellData(newRow, "mcwgt", 0);
          ds_ocContList.setCellData(newRow, "mcmsr", 0);
          gr_ocContList.setCellReadOnly(newRow, "mccntno", false);
          gr_ocContList.setFocusedCell(newRow, "mccntno");
        }
      }
      break;
    case 2:
      if (cnd_ed_hhblno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      } else {
        if (cnd_ed_hhblno.getValue().length == 4 && cnd_ed_hhblno.getValue() == "DBEX") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["HEADER"]);
          return;
        } else {
          let newRow = ds_ocElList.insertRow();
          ds_ocElList.setCellData(newRow, "kcomcd", scwin.hd_kcomcd);
          ds_ocElList.setCellData(newRow, "hhblno", cnd_ed_hhblno.getValue());
          ds_ocElList.setCellData(newRow, "srno", cnd_ed_srno.getValue());
          ds_ocElList.setCellData(newRow, "inpid", scwin.userId);
          ds_ocElList.setCellData(newRow, "pgb", "N");
          gr_ocElList.setCellReadOnly(newRow, "elno", false);
          gr_ocElList.setCellReadOnly(newRow, "mpkg", true);
          gr_ocElList.setCellReadOnly(newRow, "mut", true);
          gr_ocElList.setCellReadOnly(newRow, "pseq", true);
          gr_ocElList.setFocusedCell(newRow, "elno");
        }
      }
      break;
    default:
      break;
  }
};
scwin.f_deleteRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      //ds_ocContList.deleteRow(ds_ocContList.getRowPosition());
      $c.data.deleteRow($p, ds_ocContList);
      break;
    case 2:
      //ds_ocElList.deleteRow(ds_ocElList.getRowPosition());
      $c.data.deleteRow($p, ds_ocElList);
      break;
    default:
      break;
  }
};
scwin.f_cancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      $c.data.undoAll($p, ds_ocContList);
      break;
    case 2:
      $c.data.undoAll($p, ds_ocElList);
      break;
    default:
      break;
  }
};
scwin.f_validate = async function () {
  let chkValid = await $c.gus.cfValidate($p, [ed_hhblno, ed_carrierBkNo, ed_hhetd]);
  if (!chkValid) return false;
  if (ed_hhetd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD"]);
    ed_hhetd.focus();
    return false;
  }
  if (ed_hheta.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_hhetd.getValue(), ed_hheta.getValue())) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETD", "ETA"]);
      ed_hhetd.focus();
      return false;
    }
  }
  if (lc_hhpaynm.getValue() == "DESTINATION") {
    if (ds_srList.getCellData(0, "hhfdcd") == "") {
      await $c.win.alert($p, "지불장소의 Destination 이 지정되지 않았습니다.");
      return false;
    }
  }
  if (ds_srList.getCellData(0, "hhitem") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]);
    return false;
  }
  if (ds_srList.getCellData(0, "hhmitem1") == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Name"]);
    return false;
  }
  if (scwin.statusFlag == "C") {
    if (cnd_ed_hhblno.getValue().length != 4 && cnd_ed_hhblno.getValue().substring(0, 4) == "DBEX") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_026, ["Auto Create", "DBEX"]);
      cnd_ed_hhblno.focus();
      return false;
    }
  }
  let cntType1 = ds_srList.getCellData(0, "hhcnt1type");
  if (cntType1 != "") {
    let found = scwin.f_findContainerType(cntType1);
    if (!found) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      return false;
    }
  }
  let cntType2 = ds_srList.getCellData(0, "hhcnt2type");
  if (cntType2 != "") {
    let found = scwin.f_findContainerType(cntType2);
    if (!found) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      return false;
    }
  }
  let cntType3 = ds_srList.getCellData(0, "hhcnt3type");
  if (cntType3 != "") {
    let found = scwin.f_findContainerType(cntType3);
    if (!found) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      return false;
    }
  }
  let cntType4 = ds_srList.getCellData(0, "hhcnt4type");
  if (cntType4 != "") {
    let found = scwin.f_findContainerType(cntType4);
    if (!found) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      return false;
    }
  }
  for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
    if (ds_ocContList.getCellData(i, "mccntno") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Container"]);
      gr_ocContList.setFocusedCell(i, "mccntno");
      return false;
    }
  }
  for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
    if (ds_ocContList.getCellData(i, "mctype") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Type"]);
      gr_ocContList.setFocusedCell(i, "mctype");
      return false;
    }
  }
  let v_elno = "";
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "elno") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["수출신고번호"]);
      gr_ocElList.setFocusedCell(i, "elno");
      return false;
    } else {
      v_elno = ds_ocElList.getCellData(i, "elno");
      if (rd_hhmnfgb.getValue() == "E") {
        if (ds_ocElList.getCellData(i, "elno").length != 15) {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["수출신고번호"]);
          return false;
        }
        if (!scwin.f_elnoExportCheck(v_elno)) {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["수출신고번호"]);
          return false;
        }
      } else if (rd_hhmnfgb.getValue() == "I") {
        if (ds_ocElList.getCellData(i, "elno").length != 18) {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["화물관리번호"]);
          return false;
        }
        if (!scwin.f_elnoReshipmentCheck(v_elno)) {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["화물관리번호"]);
          return false;
        }
      }
    }
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "unit") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]);
      gr_ocElList.setFocusedCell(i, "unit");
      return false;
    }
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "pkg") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Package"]);
      gr_ocElList.setFocusedCell(i, "pkg");
      return false;
    }
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "wgt") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Weight"]);
      gr_ocElList.setFocusedCell(i, "wgt");
      return false;
    }
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "mgb") != "") {
      if (ds_ocElList.getCellData(i, "mpkg") == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["package"]);
        gr_ocElList.setFocusedCell(i, "mpkg");
        return false;
      }
      if (ds_ocElList.getCellData(i, "mut") == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]);
        gr_ocElList.setFocusedCell(i, "mut");
        return false;
      }
    }
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    if (ds_ocElList.getCellData(i, "pgb") == "Y") {
      if (ds_ocElList.getCellData(i, "pseq") == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ISO"]);
        gr_ocElList.setFocusedCell(i, "pseq");
        return false;
      }
    }
  }
  if (lc_hhbltype.getValue() == "B" && (ds_srList.getCellData(0, "hhcnt1") != "0" || ds_srList.getCellData(0, "hhcnt2") != "0" || ds_srList.getCellData(0, "hhcnt3") != "0" || ds_srList.getCellData(0, "hhcnt4") != "0")) {
    let msg = "Cargo Type이 Bulk 이면서 Container정보가 입력되었습니다.\n입력된 정보가 맞으시면 확인처리 해 주십시오.";
    let chk = await $c.win.confirm($p, msg);
    if (!chk) {
      return false;
    }
  }
  return true;
};
scwin.f_findContainerType = function (typeCode) {
  for (let i = 0; i < ds_containerType.getRowCount(); i++) {
    if (ds_containerType.getCellData(i, "code") == typeCode) {
      return true;
    }
  }
  return false;
};
scwin.f_getContainerTypeName = function (typeCode) {
  for (let i = 0; i < ds_containerType.getRowCount(); i++) {
    if (ds_containerType.getCellData(i, "code") == typeCode) {
      return ds_containerType.getCellData(i, "name");
    }
  }
  return "";
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Vessel":
      udc_comCode_Grid.setSelectId("retrieveOrdVsslInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhvslcd, txt_hhvsl);
      }, ds_srList.getCellData(0, "hhvslcd"), ds_srList.getCellData(0, "hhvsl"), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
      break;
    case "Loading":
      udc_comCode_Grid.setSelectId("retrievePortInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhlodcd, txt_hhlodnm);
      }, ds_srList.getCellData(0, "hhlodcd"), ds_srList.getCellData(0, "hhlodnm"), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "Discharge":
      udc_comCode_Grid.setSelectId("retrievePortInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhdisccd, txt_hhdiscnm);
      }, ds_srList.getCellData(0, "hhdisccd"), ds_srList.getCellData(0, "hhdiscnm"), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "Unit":
      udc_comCode_Grid.setSelectId("retrieveCommCdInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhunitcd, txt_hhunit);
      }, ds_srList.getCellData(0, "hhunitcd"), ds_srList.getCellData(0, "hhunit"), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", pNoDataCloseTF);
      break;
    case "Salesman":
      udc_comCode_Grid.setSelectId("retrieveEmpInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhsales, txt_hhsalesnm);
      }, ds_srList.getCellData(0, "hhsales"), ds_srList.getCellData(0, "hhsalesnm"), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
    case "DEPT":
      udc_comCode_Grid.setSelectId("retrieveOpDeptCdInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhbuyer, txt_hhbuyernm);
      }, ds_srList.getCellData(0, "hhbuyer"), ds_srList.getCellData(0, "hhbuyernm"), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "Receipt":
      udc_comCode_Grid.setSelectId("retrievePortInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhrcvcd, txt_hhrcvnm);
      }, ds_srList.getCellData(0, "hhrcvcd"), ds_srList.getCellData(0, "hhrcvnm"), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Receipt,Code,Name", pNoDataCloseTF);
      break;
    case "Delivery":
      udc_comCode_Grid.setSelectId("retrievePortInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhdlvcd, txt_hhdlvnm);
      }, ds_srList.getCellData(0, "hhdlvcd"), ds_srList.getCellData(0, "hhdlvnm"), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Delivery,Code,Name", pNoDataCloseTF);
      break;
    case "Destination":
      udc_comCode_Grid.setSelectId("retrievePortInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhfdcd, txt_hhfdnm);
      }, ds_srList.getCellData(0, "hhfdcd"), ds_srList.getCellData(0, "hhfdnm"), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Destination,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      udc_comCode_Grid.setSelectId("retrieveCommGoodsInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhitem, txt_hhmitem1);
      }, ds_srList.getCellData(0, "hhitem"), ds_srList.getCellData(0, "hhmitem1"), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "ContainerType1":
      udc_comCode_Grid.setSelectId("retriveContainerTypeCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhcnt1type, "");
      }, ed_hhcnt1type.getValue().trim(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
      break;
    case "ContainerType2":
      udc_comCode_Grid.setSelectId("retriveContainerTypeCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhcnt2type, "");
      }, ed_hhcnt2type.getValue().trim(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
      break;
    case "ContainerType3":
      udc_comCode_Grid.setSelectId("retriveContainerTypeCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhcnt3type, "");
      }, ed_hhcnt3type.getValue().trim(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
      break;
    case "ContainerType4":
      udc_comCode_Grid.setSelectId("retriveContainerTypeCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_hhcnt4type, "");
      }, ed_input40.getValue().trim(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
      break;
    case "Mware":
      udc_comCode_Grid.setSelectId("retrieveWareHouseInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          ds_srList.setCellData(0, "mwarecd", rtnList[0]);
          ds_srList.setCellData(0, "mwarenm", rtnList[1]);
          ds_srList.setCellData(0, "mwareEngCd", rtnList[2]);
        } else {
          ds_srList.setCellData(0, "mwarecd", "");
          ds_srList.setCellData(0, "mwarenm", "");
          ds_srList.setCellData(0, "mwareEngCd", "");
        }
      }, scwin.hd_mwarecd, scwin.hd_mwarenm, pWinCloseTF, '3', "CODE, NAME, ENG CODE", '130,180,90', "4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "WARE HOUSE INFO, CODE, NAME", pNoDataCloseTF);
      break;
    case "ShipperCountry":
      udc_comCode_Grid.setSelectId("retrieveCountryEngCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_shCtcd, "");
      }, ds_srList.getCellData(0, "shCtCd"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "ConsigneeCountry":
      udc_comCode_Grid.setSelectId("retrieveCountryEngCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_cnCtcd, "");
      }, ds_srList.getCellData(0, "cnCtCd"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "NotifyCountry":
      udc_comCode_Grid.setSelectId("retrieveCountryEngCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_ntCtcd, "");
      }, ds_srList.getCellData(0, "ntCtCd"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "LinerCountry":
      udc_comCode_Grid.setSelectId("retrieveCountryEngCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_lnCtcd, "");
      }, ds_srList.getCellData(0, "lnCtCd"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
  }
};
scwin.f_openPgm = function (name) {
  if (name == "MasterBL") {
    if (cnd_lc_mhno.getValue() == "NONE" || cnd_lc_mhno.getValue() == "") {
      let param = {
        linkcheck: "5",
        kcomcd: scwin.hd_kcomcd,
        vslcd: ds_srList.getCellData(0, "hhvslcd"),
        vsl: ds_srList.getCellData(0, "hhvsl"),
        vyg: ds_srList.getCellData(0, "hhvyg")
      };
      $c.win.openMenu($p, "Export Master B/L", "/ui/il/seaout/sobl/se_106_01_01b.xml", "se_106_01_01b.xml", param);
    } else {
      let param = {
        linkcheck: "3",
        kcomcd: scwin.hd_kcomcd,
        blno: ed_hhblno.getValue(),
        mhno: cnd_lc_mhno.getValue()
      };
      $c.win.openMenu($p, "Export Master B/L", "/ui/il/seaout/sobl/se_106_01_01b.xml", "se_106_01_01b.xml", param);
    }
  }
  D_sd_402_01_03b;
};
scwin.f_ContainerTypeLoading = async function () {
  await $c.sbm.execute($p, sbm_containerType);
};
scwin.f_CurrencyLoading_freight = async function () {
  await $c.sbm.execute($p, f_CurrencyLoading_freight);
};
scwin.f_MhnoLoading = async function () {
  let strClntNo = cnd_ed_hhblno.getValue().trim();
  if (strClntNo.length > 0) {
    dma_combo.set("param1", strClntNo);
    await $c.sbm.execute($p, sbm_mhnoLoading);
  } else {
    ds_hmhno.removeAll();
  }
};
scwin.f_HblLoading = async function () {
  dma_hhblno.set("kcomcd", scwin.hd_kcomcd);
  dma_hhblno.set("hhblno", ed_hhblno.getValue());
  await $c.sbm.execute($p, sbm_retrieveHbl);
};
scwin.f_PopUp = async function (disGubun, chgGubun) {
  if (ds_srList.getRowPosition() == null) ds_srList.setRowPosition(0);
  const fieldMappings = {
    "Shipper": {
      codeField: "hhscd",
      dataFields: ["hhscd", "hhs1", "hhs2", "hhs3", "hhs4", "hhs5", "hhsKId", "hhshrgno"]
    },
    "Consignee": {
      codeField: "hhccd",
      dataFields: ["hhccd", "hhc1", "hhc2", "hhc3", "hhc4", "hhc5", "hhcKId", "hhcnrgno"]
    },
    "Notify": {
      codeField: "hhncd",
      dataFields: ["hhncd", "hhn1", "hhn2", "hhn3", "hhn4", "hhn5", "hhnKId", "hhntrgno"]
    },
    "Liner": {
      codeField: "hhliner",
      dataFields: ["hhliner", "hhliner1", "hhliner2", "hhliner3", "hhliner4", "hhliner5", "hhlinerKId", "hhlnrgno", "hhlinerattn", "hhlinerattnnm", null, null, null, null, "ediVersion", "scacCd", "lloydsCd"]
    }
  };
  const opts = {
    id: "se_116_01_01p",
    popupName: "S/R Customer List Popup",
    modal: true,
    type: "browserPopup",
    width: 1530,
    height: 700,
    title: "S/R Customer List Popup"
  };
  let targetRowIndex = 0;
  switch (disGubun) {
    case "Shipper":
    case "Consignee":
    case "Notify":
    case "Liner":
      let mapping = fieldMappings[disGubun]; // 매핑된 필드 정보 가져오기
      let data = {
        "clntNo": ds_srList.getCellData(targetRowIndex, mapping.codeField)
      }; // 팝업에 전달할 데이터 준비
      let rtnData = await $c.win.openPopup($p, "/ui/il/seaout/sosr/se_116_01_01p.xml", opts, data);
      if (rtnData != null && rtnData.length > 0) {
        //데이터 설정
        mapping.dataFields.forEach((field, index) => {
          if (field != null) {
            ds_srList.setCellData(targetRowIndex, field, rtnData[index]);
          }
        });
      }
      break;
    case "LinerPic":
      let pParam = ds_srList.getCellData(targetRowIndex, "hhliner");
      udc_comCode_Grid.setSelectId("retrieveClntPicInfo");
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackLinerPic, ds_srList.getCellData(0, "hhlinerattn"), ds_srList.getCellData(0, "hhlinerattnnm"), chgGubun, '4', "Liner PIC", '100,350', null, pParam, '500', '500', null, null, null, "T", null);
      break;
  }
};
scwin.callbackLinerPic = function (rtnList) {
  let row = 0;
  if (rtnList != null && rtnList.length >= 2) {
    ds_srList.setCellData(row, "hhlinerattn", rtnList[0]);
    ds_srList.setCellData(row, "hhlinerattnnm", rtnList[1]);
  }
};
scwin.f_PopUpGrid = function (disGubun, Row, pWinCloseTF, pAllSearchTF) {
  switch (disGubun) {
    case "mctype":
      udc_comCode_Grid.setSelectId("retriveContainerTypeCodeInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_ocContList, Row, "mctype", "");
      }, ds_ocContList.getCellData(Row, "mctype"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
      break;
    case "mcpkgcd":
      udc_comCode_Grid.setSelectId("retrieveCommCdInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_ocContList, Row, "mcpkgcd", "");
      }, ds_ocContList.getCellData(Row, "mcpkgcd"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", 'F');
      break;
    case "unit":
      udc_comCode_Grid.setSelectId("retrieveCommCdInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_ocElList, Row, "unit", "");
      }, ds_ocElList.getCellData(Row, "unit"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", 'F');
      break;
    case "mut":
      udc_comCode_Grid.setSelectId("retrieveCommCdInfo");
      udc_comCode_Grid.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_ocElList, Row, "mut", "");
      }, ds_ocElList.getCellData(Row, "mut"), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", 'F');
      break;
  }
};
scwin.f_openContainerPopup = async function () {
  let arg = new Array();
  arg.push(ed_carrierBkNo.getValue());
  let rtnList = await $c.win.openPopup($p, "/ui/il/seaout/sobl/se_107_01_01p.xml", {
    width: 550,
    height: 600,
    modal: true,
    data: {
      paramTitle: "ContainerListPopup",
      carrierBkNo: ed_carrierBkNo.getValue()
    }
  }, {
    data: arg
  });
  let k = ds_ocContList.getRowCount();
  if (rtnList == null) {
    return false;
  } else {
    for (let i = 0; i < rtnList.length; i++) {
      for (let t = 0; t < ds_ocContList.getRowCount(); t++) {
        if (ds_ocContList.getCellData(t, "mccntno") == rtnList[i][3]) {
          await $c.win.alert($p, "Container [" + rtnList[i][3] + "] already exists");
          return false;
        }
      }
      let newRow = ds_ocContList.insertRow();
      ds_ocContList.setCellData(newRow, "kcomcd", scwin.hd_kcomcd);
      ds_ocContList.setCellData(newRow, "mchblno", cnd_ed_hhblno.getValue());
      ds_ocContList.setCellData(newRow, "mhno", cnd_lc_mhno.getValue());
      ds_ocContList.setCellData(newRow, "srno", cnd_ed_srno.getValue());
      ds_ocContList.setCellData(newRow, "inpid", scwin.userId);
      ds_ocContList.setCellData(newRow, "mccntno", rtnList[i][3]);
      ds_ocContList.setCellData(newRow, "mctype", rtnList[i][7]);
      ds_ocContList.setCellData(newRow, "mcseal1", rtnList[i][6]);
      ds_ocContList.setCellData(newRow, "mcpkg", 0);
      ds_ocContList.setCellData(newRow, "mcwgt", 0);
      ds_ocContList.setCellData(newRow, "mcmsr", 0);
      gr_ocContList.setCellReadOnly(newRow, "mccntno", false);
      gr_ocContList.setFocusedCell(newRow, "mccntno");
    }
  }
};
scwin.f_cCopy = function () {
  let row = 0;
  ds_srList.setCellData(row, "hhccd", ds_srList.getCellData(row, "hhncd"));
  ds_srList.setCellData(row, "hhc1", ds_srList.getCellData(row, "hhn1"));
  ds_srList.setCellData(row, "hhc2", ds_srList.getCellData(row, "hhn2"));
  ds_srList.setCellData(row, "hhc3", ds_srList.getCellData(row, "hhn3"));
  ds_srList.setCellData(row, "hhc4", ds_srList.getCellData(row, "hhn4"));
  ds_srList.setCellData(row, "hhc5", ds_srList.getCellData(row, "hhn5"));
};
scwin.f_nCopy = function () {
  let row = 0;
  ds_srList.setCellData(row, "hhncd", ds_srList.getCellData(row, "hhccd"));
  ds_srList.setCellData(row, "hhn1", ds_srList.getCellData(row, "hhc1"));
  ds_srList.setCellData(row, "hhn2", ds_srList.getCellData(row, "hhc2"));
  ds_srList.setCellData(row, "hhn3", ds_srList.getCellData(row, "hhc3"));
  ds_srList.setCellData(row, "hhn4", ds_srList.getCellData(row, "hhc4"));
  ds_srList.setCellData(row, "hhn5", ds_srList.getCellData(row, "hhc5"));
};
scwin.f_cargoControl = function () {
  if (scwin.statusFlag == "C" || scwin.statusFlag == "U") {
    let cargoType = lc_hhbltype.getValue();
    let row = 0;
    if (cargoType == "F") {
      ds_srList.setCellData(row, "hhsubpkg", "");
      ds_srList.setCellData(row, "hhunit2", "");
      ds_srList.setCellData(row, "hhsay", "");
      let result = "";
      let resultSay = "";
      let resultCnt = 0;
      let cnt1type = ds_srList.getCellData(row, "hhcnt1type");
      let cnt2type = ds_srList.getCellData(row, "hhcnt2type");
      let cnt3type = ds_srList.getCellData(row, "hhcnt3type");
      let cnt4type = ds_srList.getCellData(row, "hhcnt4type");
      let cnt1 = ds_srList.getCellData(row, "hhcnt1");
      let cnt2 = ds_srList.getCellData(row, "hhcnt2");
      let cnt3 = ds_srList.getCellData(row, "hhcnt3");
      let cnt4 = ds_srList.getCellData(row, "hhcnt4");
      let name1 = scwin.f_getContainerTypeName(cnt1type);
      let name2 = scwin.f_getContainerTypeName(cnt2type);
      let name3 = scwin.f_getContainerTypeName(cnt3type);
      let name4 = scwin.f_getContainerTypeName(cnt4type);
      if (name1 != "" && cnt1 != "0" && cnt1 != "") {
        let STRC1 = name1 + " X " + cnt1;
        result = STRC1;
        let v1 = cnt1;
        resultSay = v1 + "(" + STRC1 + ")";
        resultCnt = parseInt(cnt1) || 0;
      }
      if (name2 != "" && cnt2 != "0" && cnt2 != "") {
        let STRC2 = name2 + " X " + cnt2;
        if (cnt1 == "0" || cnt1 == "") {
          result = result + "" + STRC2;
        } else {
          result = result + " & " + STRC2;
        }
        let v2 = cnt2;
        if (cnt1 == "0" || cnt1 == "") {
          resultSay = resultSay + "" + v2 + "(" + STRC2 + ")";
        } else {
          resultSay = resultSay + " & " + v2 + "(" + STRC2 + ")";
        }
        resultCnt = resultCnt + (parseInt(cnt2) || 0);
      }
      if (name3 != "" && cnt3 != "0" && cnt3 != "") {
        let STRC3 = name3 + " X " + cnt3;
        if (cnt2 == "0" || cnt2 == "") {
          result = result + "" + STRC3;
        } else {
          result = result + " & " + STRC3;
        }
        let v3 = cnt3;
        if (cnt2 == "0" || cnt2 == "") {
          resultSay = resultSay + "" + v3 + "(" + STRC3 + ")";
        } else {
          resultSay = resultSay + " & " + v3 + "(" + STRC3 + ")";
        }
        resultCnt = resultCnt + (parseInt(cnt3) || 0);
      }
      if (name4 != "" && cnt4 != "0" && cnt4 != "") {
        let STRC4 = name4 + " X " + cnt4;
        if (cnt3 == "0" || cnt3 == "") {
          result = result + "" + STRC4;
        } else {
          result = result + " & " + STRC4;
        }
        let v4 = cnt4;
        if (cnt3 == "0" || cnt3 == "") {
          resultSay = resultSay + "" + v4 + "(" + STRC4 + ")";
        } else {
          resultSay = resultSay + " & " + v4 + "(" + STRC4 + ")";
        }
        resultCnt = resultCnt + (parseInt(cnt4) || 0);
      }
      ds_srList.setCellData(row, "hhsubpkg", result);
      let hhpkg = ds_srList.getCellData(row, "hhpkg");
      let hhunit = ds_srList.getCellData(row, "hhunit");
      if (hhpkg != "0" && hhpkg != "") {
        ds_srList.setCellData(row, "hhunit2", hhpkg + " " + hhunit);
      }
      if (resultCnt == 1) {
        ds_srList.setCellData(row, "hhsay", resultSay + " CONTAINER ONLY");
      } else {
        ds_srList.setCellData(row, "hhsay", resultSay + " CONTAINERS ONLY");
      }
      chb_hhp1.setValue("1");
      chb_hhp2.setValue("1");
      chb_hhp3.setValue("1");
    } else if (cargoType == "L") {
      ds_srList.setCellData(row, "hhsubpkg", "");
      ds_srList.setCellData(row, "hhunit2", "");
      ds_srList.setCellData(row, "hhsay", "");
      let hhpkg = ds_srList.getCellData(row, "hhpkg");
      let hhunit = ds_srList.getCellData(row, "hhunit");
      if (hhpkg != "0" && hhpkg != "") {
        ds_srList.setCellData(row, "hhsubpkg", hhpkg + " " + hhunit);
      }
      if (hhpkg != "0" && hhpkg != "") {
        let v1 = hhpkg;
        if (parseInt(hhpkg) == 1) {
          ds_srList.setCellData(row, "hhsay", v1 + "(" + hhpkg + ") " + hhunit + " ONLY");
        } else {
          ds_srList.setCellData(row, "hhsay", v1 + "(" + hhpkg + ") " + hhunit + "'S ONLY");
        }
      }
      chb_hhp1.setValue("");
      chb_hhp2.setValue("1");
      chb_hhp3.setValue("");
    } else {
      return;
    }
  }
};
scwin.f_elnoExportCheck = function (elno) {
  let result = 0;
  let ChkCode = elno.charAt(14);
  result = elno.charAt(0) * 7 % 10;
  result += elno.charAt(1) * 3 % 10;
  result += elno.charAt(2) * 1 % 10;
  result += elno.charAt(3) * 7 % 10;
  result += elno.charAt(4) * 3 % 10;
  result += elno.charAt(5) * 1 % 10;
  result += elno.charAt(6) * 7 % 10;
  result += elno.charAt(7) * 3 % 10;
  result += elno.charAt(8) * 1 % 10;
  result += elno.charAt(9) * 7 % 10;
  result += elno.charAt(10) * 3 % 10;
  result += elno.charAt(11) * 1 % 10;
  result += elno.charAt(12) * 7 % 10;
  result += elno.charAt(13) * 3 % 10;
  result = result % 10;
  if (result > 0) {
    result = 10 - result;
  }
  if (ChkCode != result) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["수출신고번호"]); // 유효한 @가 아닙니다.
    return false;
  } else {
    return true;
  }
};
scwin.f_elnoReshipmentCheck = function (elno) {
  let result = 0;
  let ChkCode = elno.charAt(10);
  result = elno.charCodeAt(0) * 3 % 10;
  result += elno.charCodeAt(1) * 7 % 10;
  result += elno.charCodeAt(2) * 9 % 10;
  result += elno.charCodeAt(3) * 3 % 10;
  result += elno.charCodeAt(4) * 7 % 10;
  result += elno.charCodeAt(5) * 9 % 10;
  result += elno.charCodeAt(6) * 3 % 10;
  result += elno.charCodeAt(7) * 7 % 10;
  result += elno.charCodeAt(8) * 9 % 10;
  result += elno.charCodeAt(9) * 3 % 10;
  result = result % 10;
  if (ChkCode != result) {
    return false;
  } else {
    return true;
  }
};
scwin.f_bulkTypeServiceTerm = function () {
  if (lc_hhbltype.getValue() == "B") {
    lc_hhstype.removeAll();
    lc_hhstype.addItem("FIO", "FIO");
    lc_hhstype.addItem("FI/BT", "FI/BT");
    lc_hhstype.addItem("BT/BT", "BT/BT");
    lc_hhstype.addItem("BT/FO", "BT/FO");
  } else {
    lc_hhstype.resetData();
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
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
scwin.btn_Send_onclick = function (e) {
  scwin.f_Send();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_CntrReceive_onclick = function (e) {
  scwin.f_openContainerPopup();
};
scwin.btn_AddRow1_onclick = function (e) {
  scwin.f_addRow(1);
};
scwin.btn_DelRow1_onclick = function (e) {
  scwin.f_deleteRow(1);
};
scwin.btn_CancelRow1_onclick = function (e) {
  scwin.f_cancelRow(1);
};
scwin.btn_AddRow2_onclick = function (e) {
  scwin.f_addRow(2);
};
scwin.btn_DelRow2_onclick = function (e) {
  scwin.f_deleteRow(2);
};
scwin.btn_CancelRow2_onclick = function (e) {
  scwin.f_cancelRow(2);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_srList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    scwin.f_Set("INIT");
    scwin.f_Check();
  } else {
    ds_srList.setRowPosition(0, false);
    ed_totcnt.setValue(ds_ocContList.getRowCount());
    let v_totPkg = 0;
    let v_totWgt = 0;
    let v_totMsr = 0;
    for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
      v_totPkg += parseFloat(ds_ocContList.getCellData(i, "mcpkg")) || 0;
      v_totWgt += parseFloat(ds_ocContList.getCellData(i, "mcwgt")) || 0;
      v_totMsr += parseFloat(ds_ocContList.getCellData(i, "mcmsr")) || 0;
    }
    ed_totpkg.setValue(v_totPkg);
    ed_totwgt.setValue(v_totWgt);
    ed_totmsr.setValue(v_totMsr);
    cnd_ed_hhblno.setValue(ds_srList.getCellData(0, "hhblno"));
    scwin.f_Set("RETRIEVE");
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveHbl_submitdone = function (e) {
  if (ds_srList.getRowCount() == 0) {
    scwin.f_Set("INIT");
    scwin.f_Check();
  } else {
    ds_srList.setRowPosition(0, false);
    let v_totPkg = 0;
    let v_totWgt = 0;
    let v_totMsr = 0;
    for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
      v_totPkg += parseFloat(ds_ocContList.getCellData(i, "mcpkg")) || 0;
      v_totWgt += parseFloat(ds_ocContList.getCellData(i, "mcwgt")) || 0;
      v_totMsr += parseFloat(ds_ocContList.getCellData(i, "mcmsr")) || 0;
    }
    ed_totpkg.setValue(v_totPkg);
    ed_totwgt.setValue(v_totWgt);
    ed_totmsr.setValue(v_totMsr);
    if (cnd_ed_srno.getValue() == "") {
      scwin.f_Set("CREATE");
    } else {
      scwin.f_Set("UPDATE");
    }
  }
};
scwin.sbm_retrieveHbl_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  cnd_ed_srno.setValue("");
};
scwin.sbm_send_submitdone = async function (e) {
  await $c.win.alert($p, "S/R이 성공적으로 전송되었습니다.");
};
scwin.sbm_send_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_containerType_submitdone = function (e) {};
scwin.sbm_containerType_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_mhnoLoading_submitdone = async function (e) {
  if (ds_hmhno.getRowCount() == 0) {
    if (scwin.statusFlag != "C") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]);
    }
    ds_hmhno.insertRow();
    ds_hmhno.setCellData(0, "code", "NONE");
    ds_hmhno.setCellData(0, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  } else {
    if (scwin.statusFlag == "C") {
      ds_hmhno.removeAll();
      ds_hmhno.insertRow();
      ds_hmhno.setCellData(0, "code", "NONE");
      ds_hmhno.setCellData(0, "name", "NONE");
      cnd_lc_mhno.setSelectedIndex(0);
    }
  }
  if (scwin.mhnoFlag == "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};
scwin.sbm_mhnoLoading_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_ocContList_onviewchange = async function (info) {
  let columnId = info.colId;
  let rowIndex = info.rowIndex;
  let newValue = info.newValue;
  if (["mctype", "mcpkgcd"].includes(columnId)) {
    if (newValue != "") {
      scwin.f_PopUpGrid(columnId, rowIndex, "T");
    } else {
      ds_ocContList.setCellData(newValue, columnId, "");
    }
    return;
  }
  for (let i = 0; i < ds_ocContList.getRowCount(); i++) {
    for (let j = i + 1; j < ds_ocContList.getRowCount(); j++) {
      if (ds_ocContList.getCellData(i, "mccntno") == ds_ocContList.getCellData(j, "mccntno") && ds_ocContList.getCellData(i, "mccntno") != "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["Container"]);
        gr_ocContList.setFocusedCell(j, "mccntno");
        return;
      }
    }
  }
  if (columnId == "mctype" && ds_ocContList.getCellData(rowIndex, "mctype") != "") {
    let found = scwin.f_findContainerType(ds_ocContList.getCellData(rowIndex, "mctype"));
    if (!found) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      gr_ocContList.setFocusedCell(rowIndex, "mctype");
    }
  }
};
scwin.gr_ocElList_onviewchange = async function (info) {
  let columnId = info.colId;
  let rowIndex = info.rowIndex;
  let newValue = info.newValue;
  if (["unit", "mut"].includes(columnId)) {
    if (newValue != "") {
      scwin.f_PopUpGrid(columnId, rowIndex, "T");
    } else {
      ds_ocContList.setCellData(newValue, columnId, "");
    }
    return;
  } else if (columnId == "elno") {
    if (rd_hhmnfgb.getValue() == "E") {
      //Shipment Type Export
      scwin.f_elnoExportCheck(newValue);
    } else if (rd_hhmnfgb.getValue() == "I") {
      // Shipment Type Reshipment
      scwin.f_elnoReshipmentCheck(newValue);
    }
    return;
  } else if (columnId == "mgb") {
    let bRead = newValue == '' ? true : false; //포장기호가 값이 있을 있을 경우만 package, unit 수정가능. 
    gr_ocElList.setCellReadOnly(rowIndex, "mpkg", bRead);
    gr_ocElList.setCellReadOnly(rowIndex, "mut", bRead);
    if (bRead) {
      ds_ocElList.setCellData(rowIndex, "mpkg", "");
      ds_ocElList.setCellData(rowIndex, "mut", "");
    }
  } else if (columnId == "pgb") {
    let bRead = newValue == 'N' ? true : false; //분할이 Yes일 경우만 분할선적차수 수정가능.
    gr_ocElList.setCellReadOnly(rowIndex, "pseq", bRead);
    if (bRead) ds_ocElList.setCellData(rowIndex, "pseq", "");
  }
  for (let i = 0; i < ds_ocElList.getRowCount(); i++) {
    for (let j = i + 1; j < ds_ocElList.getRowCount(); j++) {
      if (ds_ocElList.getCellData(i, "elno") == ds_ocElList.getCellData(j, "elno") && ds_ocElList.getCellData(i, "elno") != "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["elno"]);
        gr_ocElList.setFocusedCell(j, "elno");
        return;
      }
    }
  }

  // if (columnId == "elno") {
  //     let v_elno = ds_ocElList.getCellData(rowIndex, "elno");
  //     if (v_elno != "") {
  //         if (rd_hhmnfgb.getValue() == "E") {
  //             scwin.f_elnoExportCheck(v_elno);
  //         } else if (rd_hhmnfgb.getValue() == "I") {
  //             scwin.f_elnoReshipmentCheck(v_elno);
  //         }
  //     }
  // }
};
scwin.gr_ocContList_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_ocContList.getColumnID(columnIndex);
  switch (columnId) {
    case "mctype":
      scwin.f_PopUpGrid("mctype", rowIndex, "F");
      break;
    case "mcpkgcd":
      scwin.f_PopUpGrid("mcpkgcd", rowIndex, "F");
      break;
    default:
      break;
  }
};
scwin.gr_ocElList_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_ocElList.getColumnID(columnIndex);
  switch (columnId) {
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
scwin.ed_hhetd_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    if (ed_creadyDt.getValue() == "") ed_creadyDt.setValue(ed_hhetd.getValue());
    if (ds_srList.getCellData(0, "creadyDt") == "") {
      ds_srList.setCellData(0, "creadyDt", ed_hhetd.getValue());
    }
    if (ds_srList.getCellData(0, "hhisudt") == "") {
      ds_srList.setCellData(0, "hhisudt", ed_hhetd.getValue());
    }
  }
};
scwin.lc_hhbltype_onviewchange = function (info) {
  scwin.f_cargoControl();
  scwin.f_bulkTypeServiceTerm();
};
scwin.cnd_lc_mhno_onviewchange = function (info) {
  if (scwin.statusFlag == "C") {
    if (cnd_lc_mhno.getValue() == "P") {
      lc_hhpaynm.setValue(lc_hhisunm.getValue());
      lc_hhpcgb.setSelectedIndex(0);
    } else {
      lc_hhpaynm.setSelectedIndex(3);
      lc_hhpcgb.setSelectedIndex(1);
    }
  }
};
scwin.cnd_ed_hhblno_onblur = function (e) {
  let val = cnd_ed_hhblno.getValue().trim();
  cnd_ed_hhblno.setValue(val);
  if (val != "") {
    scwin.f_MhnoLoading();
  }
};
scwin.cnd_ed_hhblno_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ds_ocContList_onrowpositionchange = function (rowIndex, oldRow) {
  if (rowIndex >= 0 && rowIndex < ds_ocContList.getRowCount()) {
    if (ds_ocContList.getRowStatus(rowIndex) == "C") {
      gr_ocContList.setColumnProperty("mccntno", "readOnly", false);
    } else {
      gr_ocContList.setColumnProperty("mccntno", "readOnly", true);
    }
  }
};
scwin.ds_ocElList_onrowpositionchange = function (rowIndex, oldRow) {
  if (rowIndex >= 0 && rowIndex < ds_ocElList.getRowCount()) {
    if (ds_ocElList.getRowStatus(rowIndex) == "C") {
      gr_ocElList.setColumnProperty("elno", "readOnly", false);
    } else {
      gr_ocElList.setColumnProperty("elno", "readOnly", true);
    }
  }
};
scwin.ds_srList_oncelldatachange = function (info) {
  if (info.colId == "ediVersion") {
    // TODO: dynamically change acb_siSurCd choices based on ediVersion
  }
};
scwin.btn_Mbl_onclick = function (e) {
  scwin.f_openPgm('MasterBL');
};
scwin.img_PopUp1_onclick = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};
scwin.img_shCtcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ShipperCountry', 'F', 'F', 'F');
};
scwin.img_PopUp3_onclick = function (e) {
  scwin.f_PopUp('Notify', 'F');
};
scwin.btn_3_onclick = function (e) {
  scwin.f_nCopy();
};
scwin.udc_hhlodcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
scwin.udc_hhlodcd_onviewchangeCodeEvent = function (info) {};
scwin.udc_hhlodnm_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
scwin.udc_hhlodnm_onviewchangeCodeEvent = function (info) {};
scwin.udc_hhdiscnm_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
};
scwin.udc_hhdlvnm_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Destination', 'F', 'F', 'F');
};
scwin.udc_hhfdnm_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Unit', 'F', 'F', 'F');
};
scwin.img_PopUp21_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};
scwin.img_PopUp22_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};
scwin.img_PopUp23_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};
scwin.img_PopUp24_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};
scwin.ed_hhblno_onblur = function (e) {
  ed_hhblno.setValue(ed_hhblno.getValue().trim());
  if (ed_hhblno.getValue() != "") {
    scwin.f_HblLoading();
  }
};
scwin.img_PopUp2_onclick = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
scwin.btn_1_onclick = function (e) {
  scwin.f_cCopy();
};
scwin.udc_hhunit_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('ConsigneeCountry', 'F', 'F', 'F');
};
scwin.ed_hhcnt1type_onblur = function (e) {
  scwin.f_set_hhcnttype(this);
};
scwin.ed_hhblno_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ed_carrierBkNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ed_hhcnt2type_onblur = function (e) {
  scwin.f_set_hhcnttype(this);
};
scwin.ed_hhcnt3type_onblur = function (e) {
  scwin.f_set_hhcnttype(this);
};
scwin.ed_hhcnt4type_onblur = function (e) {
  scwin.f_set_hhcnttype(this);
};
scwin.f_set_hhcnttype = function (hhcntObj) {
  if (hhcntObj.getValue() != "") {
    var STR = ds_containerType.getMatchedIndex("code", hhcntObj.getValue()).length;
    if (STR == 0) {
      // 값이 없을때
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
    } else {
      scwin.f_cargoControl();
      return true;
    }
  }
};
scwin.udc_hhunit_onblurCodeEvent = function (e) {
  if (ed_cnCtcd.getValue().trim().length > 0) {
    scwin.f_OpenCommonPopUp("ConsigneeCountry", "T", "F", "F");
  } else {
    ed_cnCtcd.setValue("");
  }
};
scwin.fn_ed_hhcnt_onblur = function (hhcntObj) {
  if (hhcntObj.getValue() != "0" || hhcntObj.getValue() != "") {
    scwin.f_cargoControl();
  }
};
scwin.ed_hhcnt1_onblur = function (e) {
  scwin.fn_ed_hhcnt_onblur(this);
};
scwin.ed_hhcnt2_onblur = function (e) {
  scwin.fn_ed_hhcnt_onblur(this);
};
scwin.ed_hhcnt3_onblur = function (e) {
  scwin.fn_ed_hhcnt_onblur(this);
};
scwin.ed_hhcnt4_onblur = function (e) {
  scwin.fn_ed_hhcnt_onblur(this);
};
scwin.ed_hhpkg_onblur = function (e) {
  scwin.fn_ed_hhcnt_onblur(this);
};
scwin.lc_hhpcgb_onchange = function (info) {
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
scwin.lc_siSurCd_onchange = function (info) {
  let siSurCd = lc_siSurCd.getValue();
  let gauceUtillOption = [{
    method: "getCodeList",
    param1: "IL024",
    param2: "CCI",
    compID: "lc_siSurCont"
  }];
  if (siSurCd == "CCI") {
    gauceUtillOption[0].param2 = "CCI";
  } else if (siSurCd == "DOC") {
    gauceUtillOption[0].param2 = "DOC";
  } else {
    gauceUtillOption[0].param2 = "BLC";
  }
  $c.data.setGauceUtil($p, gauceUtillOption);
};

//as-is ed_hhscd" event="onKillFocus()
scwin.ed_hhscd_onviewchange = function (info) {
  let strClntNo = ed_hhscd.getValue().trim();
  if (scwin.statusFlag == "C") {
    if (strClntNo.length > 0) {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
      scwin.f_PopUp("Shipper", 'T');
    } else {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
    }
  } else if (scwin.statusFlag == "U") {
    if (txt_hhs1.getValue() == "") {
      if (strClntNo.length > 0) {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
        scwin.f_PopUp("Shipper", 'T');
      } else {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
      }
    }
  }
};
scwin.ed_hhccd_onviewchange = function (info) {
  let strClntNo = ed_hhccd.getValue().trim();
  if (scwin.statusFlag == "C") {
    if (strClntNo.length > 0) {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
      scwin.f_PopUp("Consignee", 'T');
    } else {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
    }
  } else if (scwin.statusFlag == "U") {
    if (txt_hhs1.getValue() == "") {
      if (strClntNo.length > 0) {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
        scwin.f_PopUp("Consignee", 'T');
      } else {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
      }
    }
  }
};
scwin.ed_hhncd_onviewchange = function (info) {
  let strClntNo = ed_hhncd.getValue().trim();
  if (scwin.statusFlag == "C") {
    if (strClntNo.length > 0) {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
      scwin.f_PopUp("Notify", 'T');
    } else {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      ed_shCtcd.setValue("");
      ed_hhsKId.setValue("");
      txt_hhshrgno.setValue("");
    }
  } else if (scwin.statusFlag == "U") {
    if (txt_hhs1.getValue() == "") {
      if (strClntNo.length > 0) {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
        scwin.f_PopUp("Notify", 'T');
      } else {
        txt_hhs1.setValue("");
        txt_hhs2.setValue("");
        txt_hhs3.setValue("");
        txt_hhs4.setValue("");
        txt_hhs5.setValue("");
        ed_shCtcd.setValue("");
        ed_hhsKId.setValue("");
        txt_hhshrgno.setValue("");
      }
    }
  }
};
scwin.udc_hhvslcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhvslcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhvsl.setValue("");
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    txt_hhvsl.setValue("");
  }
};
scwin.udc_hhlodcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhlodcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    txt_hhlodnm.setValue("");
  }
};
scwin.udc_hhvslcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Vessel', 'F', 'F', 'F');
};
scwin.udc_hhlodnm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhdisccd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhdiscnm.setValue("");
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    txt_hhdiscnm.setValue("");
  }
};
scwin.udc_hhfdnm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhunitcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhunit.setValue("");
    scwin.f_OpenCommonPopUp("Unit", "T", "F", "F");
  } else {
    txt_hhunit.setValue("");
  }
};
scwin.udc_hhliner_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhliner.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhlinernm.setValue("");
    scwin.f_PopUp('Liner', 'T');
  } else {
    ed_ediVersion.setValue("");
    ed_lnCtcd.setValue("");
    ed_hhlinerKId.setValue("");
    ed_scacCd.setValue("");
    ed_lloydsCd.setValue("");
    txt_hhliner1.setValue("");
    txt_hhliner2.setValue("");
    txt_hhliner3.setValue("");
    txt_hhliner4.setValue("");
    txt_hhliner5.setValue("");
    txt_hhlnrgno.setValue("");
  }
};
scwin.udc_hhlinernm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhlinerattn.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhlinerattnnm.setValue("");
    scwin.f_PopUp('LinerPic', 'T');
  } else {
    txt_hhlinerattnnm.setValue("");
  }
};
scwin.udc_hhrcvnm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhitem.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhmitem1.setValue("");
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  } else {
    txt_hhmitem1.setValue("");
  }
};
scwin.udc_hhrcvcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhrcvcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhrcvnm.setValue("");
    scwin.f_OpenCommonPopUp("Receipt", "T", "F", "F");
  } else {
    txt_hhrcvnm.setValue("");
  }
};
scwin.udc_hhdiscnm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhdlvcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhdlvnm.setValue("");
    scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
  } else {
    txt_hhdlvnm.setValue("");
  }
};
scwin.udc_hhdlvnm_onblurCodeEvent = function (e) {
  let strClntNo = ed_hhfdcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_hhfdnm.setValue("");
    scwin.f_OpenCommonPopUp("Destination", "T", "F", "F");
  } else {
    txt_hhfdnm.setValue("");
  }
};
scwin.lc_hhstype_onblur = function (e) {
  ds_srList.setCellData(0, "hhstype", lc_hhstype.getValue());
};
scwin.ed_shCtcd_onblur = function (e) {
  let strClntNo = ed_shCtcd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ShipperCountry", "T", "F", "F");
  } else {
    ed_shCtcd.setValue("");
  }
};
scwin.udc_ntCtcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_ntCtcd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("NotifyCountry", "T", "F", "F");
  } else {
    ed_ntCtcd.setValue("");
  }
};
scwin.udc_lnCtcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_lnCtcd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("LinerCountry", "T", "F", "F");
  } else {
    ed_lnCtcd.setValue("");
  }
};
scwin.udc_ntCtcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('NotifyCountry', 'F', 'F', 'F');
};
scwin.udc_hhliner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.udc_lnCtcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('LinerCountry', 'F', 'F', 'F');
};
scwin.udc_hhlinernm_onclickEvent = function (e) {
  scwin.f_PopUp('LinerPic', 'F');
};
scwin.udc_hhrcvnm_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
};
scwin.udc_hhrcvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Receipt', 'F', 'F', 'F');
};
scwin.udc_hhrcvcd_onviewchangeNameEvent = function (info) {
  if (ed_hhrcvcd.getValue == '') {
    scwin.f_OpenCommonPopUp('Receipt', 'F', 'F', 'F');
  }
};
scwin.f_RunExcel1 = async function () {
  let totCnt = ds_ocContList.getRowCount();
  let sheetTitle = "Container List_" + $c.date.getServerDateTime($p, "yyyyMMdd");
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        type: "4 + 8 + 16"
      };
      $c.data.downloadGridViewExcel($p, gr_ocContList, options, []);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_RunExcel2 = async function () {
  let totCnt = ds_ocElList.getRowCount();
  let sheetTitle = "수출신고 List_" + $c.date.getServerDateTime($p, "yyyyMMdd");
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        type: "4 + 8 + 16"
      };
      $c.data.downloadGridViewExcel($p, gr_ocElList, options, []);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.ds_srList_onrowpositionchange = function (info) {};
scwin.ed_shCtcd_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',id:''},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tbl_Search',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhblno',placeholder:'',style:'width:150px;',maxByteLength:'20',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_hhblno_oneditkeyup','ev:onblur':'scwin.cnd_ed_hhblno_onblur',mandatory:'true',title:'House No'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_autono',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_srList.autono',allOption:'',chooseOption:'',title:'B/L Type',objType:'data',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Original'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ORIGINAL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Surrende'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SURRENDER'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Direct'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DIRECT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',ref:'',allOption:'',chooseOption:'',title:'Document No',disableEdit:'true','ev:onviewchange':'scwin.cnd_lc_mhno_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'S/R No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_srno',placeholder:'',style:'width:150px;',title:'S/R No',objType:'data',mandatory:'true',ref:'data:ds_srList.srno'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Header',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Marks/Description',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'height:40px',id:'tabs3',label:'Other'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_master',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House BL',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhblno',placeholder:'',style:'width:150px;',maxByteLength:'20',title:'House B/L No',mandatory:'true',ref:'data:ds_srList.hhblno','ev:onblur':'scwin.ed_hhblno_onblur','ev:oneditkeyup':'scwin.ed_hhblno_oneditkeyup',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선복',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_carrierBkNo',placeholder:'',style:'width:150px;',ref:'data:ds_srList.carrierBkNo',mandatory:'true',title:'선복',maxByteLength:'20','ev:oneditkeyup':'scwin.ed_carrierBkNo_oneditkeyup',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'VSL/VOY',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhvslcd',popupID:'',style:'',codeId:'ed_hhvslcd',nameId:'txt_hhvsl',btnId:'img_PopUp4',code:'hhvslcd',refDataCollection:'ds_srList',name:'hhvsl',hideName:'false','ev:onclickEvent':'scwin.udc_hhvslcd_onclickEvent',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',maxlengthName:'50','ev:onblurCodeEvent':'scwin.udc_hhvslcd_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhvslcd_onviewchangeCodeEvent',mandatoryCode:'true',validTitle:'Vessel Name'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_hhvyg',placeholder:'',class:'',title:'Voyage',mandatory:'true',objType:'data',maxByteLength:'11',ref:'data:ds_srList.hhvyg'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Carrier',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhliner',hideName:'true',popupID:'',style:'width: 110px;',codeId:'ed_hhliner',nameId:'txt_hhlinernm',btnId:'img_PopUp13',UpperFlagCode:'1',validExpCode:'Carrier',validExpName:'Carrier Name',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9',refDataCollection:'ds_srList',code:'hhliner',name:'hhlinernm','ev:onblurCodeEvent':'scwin.udc_hhliner_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhliner_onclickEvent'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_ediVersion',placeholder:'',class:'',title:'EDI Version',mandatory:'true',objType:'data',maxByteLength:'15',ref:'data:ds_srList.ediVersion',allowChar:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhscd',placeholder:'',style:'width: 50px;',maxByteLength:'6',title:'Shipper',objType:'data',ref:'data:ds_srList.hhscd','ev:onviewchange':'scwin.ed_hhscd_onviewchange',allowChar:'0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp1',style:'',type:'button','ev:onclick':'scwin.img_PopUp1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_shCtcd',placeholder:'',style:'width: 40px;',title:'Country',objType:'data',maxByteLength:'2',ref:'data:ds_srList.shCtCd','ev:onblur':'scwin.ed_shCtcd_onblur',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.ed_shCtcd_oneditkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_shCtcd',style:'',type:'button','ev:onclick':'scwin.img_shCtcd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_hhsKId',placeholder:'',style:'',title:'Shipper\'s Ktnet Id',objType:'data',maxByteLength:'15',ref:'data:ds_srList.hhsKId'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhlodcd',popupID:'',style:'',codeId:'ed_hhlodcd',nameId:'txt_hhlodnm',maxlengthCode:'5',maxlengthName:'35',allowCharCode:'a-zA-Z',btnId:'img_PopUp5','ev:onclickEvent':'scwin.udc_hhlodcd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhlodcd_onviewchangeCodeEvent',UpperFlagCode:'1',refDataCollection:'ds_srList',code:'hhlodcd',name:'hhlodnm','ev:onblurCodeEvent':'scwin.udc_hhlodcd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'국가/KTNET',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_lnCtcd',popupID:'',style:'',objTypeCode:'data',objTypeName:'data',validExpCode:'Carrier\'s Country',validExpName:'Carrier\'s Ktnet Id',mandatoryName:'true',maxlengthCode:'4',maxlengthName:'15',UpperFlagCode:'1',btnId:'img_lnCtcd',nameId:'ed_hhlinerKId',codeId:'ed_lnCtcd',refDataCollection:'ds_srList',code:'lnCtCd',name:'hhlinerKId','ev:onblurCodeEvent':'scwin.udc_lnCtcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lnCtcd_onclickEvent',validTitle:'Carrier\'s Ktnet Id',title:'Carrier\'s Ktnet Id'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'NAME',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhs1',placeholder:'',style:'',maxByteLength:'100',title:'Shipper1',objType:'data',ref:'data:ds_srList.hhs1'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STREET',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhs2',placeholder:'',style:'',maxByteLength:'50',title:'Shipper2',objType:'data',ref:'data:ds_srList.hhs2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PLACE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhs3',placeholder:'',style:'',maxByteLength:'50',title:'Shipper3',objType:'data',ref:'data:ds_srList.hhs3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STATE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhs4',placeholder:'',style:'',maxByteLength:'50',title:'Shipper4',objType:'data',ref:'data:ds_srList.hhs4'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ZIP',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhs5',placeholder:'',style:'width:150px;',maxByteLength:'50',title:'Shipper5',objType:'data',ref:'data:ds_srList.hhs5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhshrgno',placeholder:'',style:'width:150px;',maxByteLength:'34',title:'Shipper Crn',objType:'data',ref:'data:ds_srList.hhshrgno'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhlodnm',popupID:'',style:'',codeId:'ed_hhdisccd',nameId:'txt_hhdiscnm',btnId:'img_PopUp6',maxlengthCode:'5',validTitle:'Discharge',objType:'data','ev:onclickEvent':'scwin.udc_hhlodnm_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhlodnm_onviewchangeCodeEvent',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',maxlengthName:'35',refDataCollection:'ds_srList',code:'hhdisccd',name:'hhdiscnm','ev:onblurCodeEvent':'scwin.udc_hhlodnm_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'SCAC/Lloyd\'s',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_scacCd',placeholder:'',style:'',title:'SCAC 코드',mandatory:'true',objType:'data',maxByteLength:'17',allowChar:'a-zA-Z0-9',ref:'data:ds_srList.scacCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lloydsCd',placeholder:'',style:'',title:'Lloyd\'s code',objType:'data',maxByteLength:'9',allowChar:'a-zA-Z0-9',ref:'data:ds_srList.lloydsCd'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhdiscnm',popupID:'',style:'',codeId:'ed_hhdlvcd',nameId:'txt_hhdlvnm',btnId:'img_PopUp19',validTitle:'Place of Delivery',objType:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z','ev:onclickEvent':'scwin.udc_hhdiscnm_onclickEvent',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',maxlengthName:'35',refDataCollection:'ds_srList',code:'hhdlvcd',name:'hhdlvnm','ev:onblurCodeEvent':'scwin.udc_hhdiscnm_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'NAME',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhliner1',placeholder:'',style:'',title:'Carrier\'s Name',objType:'data',ref:'data:ds_srList.hhliner1',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STREET',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhliner2',placeholder:'',style:'',title:'Carrier2',objType:'data',maxByteLength:'34',ref:'data:ds_srList.hhliner2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PLACE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhliner3',placeholder:'',style:'',title:'Carrier3',objType:'data',maxByteLength:'34',ref:'data:ds_srList.hhliner3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STATE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhliner4',placeholder:'',style:'',title:'Carrier4',objType:'data',maxByteLength:'34',ref:'data:ds_srList.hhliner4'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ZIP',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhliner5',placeholder:'',style:'width:150px;',title:'Carrier5',objType:'data',maxByteLength:'34',ref:'data:ds_srList.hhliner5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhlnrgno',placeholder:'',style:'width:150px;',title:'Carrier CRN',objType:'data',maxByteLength:'34',ref:'data:ds_srList.hhlnrgno'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Destination',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhdlvnm',popupID:'',style:'',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',allowCharCode:'a-zA-Z',codeId:'ed_hhfdcd',nameId:'txt_hhfdnm',btnId:'img_PopUp20',maxlengthCode:'5',maxlengthName:'35','ev:onclickEvent':'scwin.udc_hhdlvnm_onclickEvent',refDataCollection:'ds_srList',code:'hhfdcd',name:'hhfdnm','ev:onblurCodeEvent':'scwin.udc_hhdlvnm_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:80px;text-align: right;',id:'ed_hhpkg',placeholder:'',class:'',maxByteLength:'10',title:'Fackage',objType:'data',ref:'data:ds_srList.hhpkg','ev:onblur':'scwin.ed_hhpkg_onblur'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Unit',class:''}},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhfdnm',popupID:'',style:'',codeId:'ed_hhunitcd',nameId:'txt_hhunit',btnId:'img_PopUp7',maxlengthCode:'2','ev:onclickEvent':'scwin.udc_hhfdnm_onclickEvent',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',refDataCollection:'ds_srList',code:'hhunitcd',name:'hhunit','ev:onblurCodeEvent':'scwin.udc_hhfdnm_onblurCodeEvent'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhgwgt',placeholder:'',style:'width:150px; text-align: right;',objType:'data',maxByteLength:'13',allowChar:'0-9',displayFormat:'#,###.###',dataType:'float',ref:'data:ds_srList.hhgwgt'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhmsr',placeholder:'',style:'width:150px;text-align:right;',objType:'data',title:'Measure',maxByteLength:'11',dataType:'float',displayFormat:'#,###.###',allowChar:'0-9',ref:'data:ds_srList.hhmsr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhccd',placeholder:'',style:'width: 50px;',title:'Consignee',objType:'data',maxByteLength:'6',allowChar:'0-9',ref:'data:ds_srList.hhccd','ev:onviewchange':'scwin.ed_hhccd_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp2',style:'',type:'button','ev:onclick':'scwin.img_PopUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_1',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Notify Copy'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고화물가격',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_declaredValue',placeholder:'',style:'width:150px;text-align:right;',title:'신고화물가격',objType:'data',maxByteLength:'12',displayFormat:'#,###.###',allowChar:'0-9',ref:'data:ds_srList.declaredValue'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HS CODE',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhhscode',placeholder:'',style:'width:150px;',title:'HS CODE',objType:'data',maxByteLength:'10',ref:'data:ds_srList.hhhscode'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhunit',popupID:'',style:'',codeId:'ed_cnCtcd',nameId:'ed_hhcKId',btnId:'img_cnCtcd',objType:'data',validTitle:'Country',maxlengthCode:'5',maxlengthName:'15',allowCharCode:'a-zA-Z0-9',allowCharName:'a-zA-Z0-9',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_srList',code:'cnCtCd',name:'hhcKId',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_hhunit_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hhunit_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhetd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_srList.hhetd',mandatory:'true',objType:'data','ev:onblur':'scwin.ed_hhetd_onblur',title:'ETD'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhondt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',objType:'data',style:'',ref:'data:ds_srList.hhondt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhlinernm',popupID:'',style:'',codeId:'ed_hhlinerattn',nameId:'txt_hhlinerattnnm',btnId:'img_PopUp14',validExpCode:'Carrier PIC',validExpName:'Carrier PIC Name',objTypeCode:'data',objTypeName:'data',maxlengthCode:'2',allowCharCode:'0-9',refDataCollection:'ds_srList',code:'hhlinerattn',name:'hhlinerattnnm','ev:onblurCodeEvent':'scwin.udc_hhlinernm_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhlinernm_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'NAME',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc1',placeholder:'',style:'',maxByteLength:'100',title:'Consignee1',objType:'data',ref:'data:ds_srList.hhc1'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STREET',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc2',placeholder:'',style:'',maxByteLength:'50',title:'Consignee2',objType:'data',ref:'data:ds_srList.hhc2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PLACE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc3',placeholder:'',style:'',maxByteLength:'50',title:'Consignee3',objType:'data',ref:'data:ds_srList.hhc3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STATE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc4',placeholder:'',style:'',maxByteLength:'50',title:'Consignee4',objType:'data',ref:'data:ds_srList.hhc4'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ZIP',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhc5',placeholder:'',style:'width:150px;',maxByteLength:'50',title:'Consignee5',objType:'data',ref:'data:ds_srList.hhc5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhcnrgno',placeholder:'',style:'width:150px;',maxByteLength:'34',title:'Consignee Crn',objType:'data',ref:'data:ds_srList.hhcnrgno'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hheta',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',objType:'data',style:'',ref:'data:ds_srList.hheta'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Issued Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_hhisudt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',title:'Issued Date',ref:'data:ds_srList.hhisudt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가정보',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_siSurCd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.siSurCd',title:'부가정보',objType:'data','ev:onchange':'scwin.lc_siSurCd_onchange',disableEdit:'true',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_creadyDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',ref:'data:ds_srList.creadyDt'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Dangerous',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhdanggb',ref:'data:ds_srList.hhdanggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'Dangerous',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_siSurCont',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.siSurCont',title:'내용코드',objType:'data',disableEdit:'true',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PP/CC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhpcgb',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_srList.hhpcgb',mandatory:'true',title:'PP/CC',allOption:'',chooseOption:'','ev:onchange':'scwin.lc_hhpcgb_onchange',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Cargo Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhbltype',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_srList.hhbltype',allOption:'',chooseOption:'',disableEdit:'true','ev:onviewchange':'scwin.lc_hhbltype_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설명1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_siSur1',placeholder:'',style:'',title:'상세참조설명1',maxByteLength:'34',objType:'data',ref:'data:ds_srList.siSur1'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설명2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_siSur2',placeholder:'',style:'',title:'상세참조설명2',maxByteLength:'34',objType:'data',ref:'data:ds_srList.siSur2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설명3',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_siSur3',placeholder:'',style:'',title:'상세참조설명3',maxByteLength:'34',objType:'data',ref:'data:ds_srList.siSur3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설명4',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_siSur4',placeholder:'',style:'',title:'상세참조설명4',maxByteLength:'34',objType:'data',ref:'data:ds_srList.siSur4'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설명5',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_siSur5',placeholder:'',style:'',title:'상세참조설명5',maxByteLength:'34',objType:'data',ref:'data:ds_srList.siSur5'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Issued At',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhisunm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.hhisunm',objType:'data',allOption:'',chooseOption:'',title:'Issued At',mandatory:'true',emptyItem:'true',disableEdit:'true',validExp:' Issued At:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRPUS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRSEL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRINC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DALIAN, CHINA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CNDLC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHANGHAI, CHINA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CNSHA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CHENNAI, INDIA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INMAA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HOCHIIMINH, VIETNAM'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VNSGN'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Payable At',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhpaynm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.hhpaynm',title:'Payable At',mandatory:'true',objType:'data',allOption:'',chooseOption:'',emptyItem:'true',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PUSAN, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRPUS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SEOUL, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRSEL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'INCHON, KOREA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRINC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DESTINATION'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DESTINATION'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhncd',placeholder:'',style:'width: 50px;',title:'Notify',objType:'data',maxByteLength:'6',allowChar:'0-9',ref:'data:ds_srList.hhncd','ev:onviewchange':'scwin.ed_hhncd_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp3',style:'',type:'button','ev:onclick':'scwin.img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_3',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Term',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhprenm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.hhprenm',mandatory:'true',title:'Freight Term',objType:'data',allOption:'',chooseOption:'',disableEdit:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PREPAID AS ARRANGED'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PREPAID AS ARRANGED'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COLLECT AS ARRANGED'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'COLLECT AS ARRANGED'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_ntCtcd',popupID:'',style:'',codeId:'ed_ntCtcd',nameId:'ed_hhnKId',btnId:'img_ntCtcd',objType:'data',validTitle:'Country',maxlengthCode:'5',maxlengthName:'15','ev:onblurCodeEvent':'scwin.udc_ntCtcd_onblurCodeEvent',code:'ntCtCd',refDataCollection:'ds_srList',name:'hhnKId','ev:onclickEvent':'scwin.udc_ntCtcd_onclickEvent',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Service Term',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhstype',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.hhstype',objType:'data',title:'Service Term',allOption:'',chooseOption:'',disableEdit:'true','ev:onblur':'scwin.lc_hhstype_onblur'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/CY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/CY'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/CFS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY/DOOR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CY/DOOR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/CY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/CY'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/CFS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS/DOOR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFS/DOOR'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:group',A:{class:'tbbox no-border',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'NAME',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn1',placeholder:'',style:'',objType:'data',maxlength:'100',title:'Notify1',ref:'data:ds_srList.hhn1'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STREET',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn2',placeholder:'',style:'',objType:'data',maxlength:'50',title:'Notify2',ref:'data:ds_srList.hhn2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PLACE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn3',placeholder:'',style:'',objType:'data',maxlength:'50',title:'Notify3',ref:'data:ds_srList.hhn3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'STATE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn4',placeholder:'',style:'',objType:'data',maxlength:'50',title:'Notify4',ref:'data:ds_srList.hhn4'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ZIP',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhn5',placeholder:'',style:'width:150px;',objType:'data',maxlength:'50',title:'Notify5',ref:'data:ds_srList.hhn5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhntrgno',placeholder:'',style:'width:150px;',objType:'data',maxlength:'34',title:'Notify CRN',ref:'data:ds_srList.hhntrgno'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_hhincoterm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.hhincoterm',title:'Incoterms',objType:'data',allOption:'',chooseOption:'',disableEdit:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'EXW'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EXW'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FCA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FAS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FAS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FOB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FOB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CFR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CIF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CIF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CPT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CPT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CIP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CIP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DAF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DAF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DES'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DEQ'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DEQ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DDU'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DDU'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DDP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DDP'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송증권',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_frtBillCd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.frtBillCd',title:'내용코드',objType:'data',disableEdit:'true',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약/운송조건',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtCrrgCond',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.ctrtCrrgCond',title:'계약및운송조건',mandatory:'true',objType:'data',disableEdit:'true',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문서상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_frtBillStatus',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.frtBillStatus',title:'내용코드',objType:'data',disableEdit:'true',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt1type',placeholder:'',style:'width: 50px;',title:'Container Type1',maxByteLength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_srList.hhcnt1type','ev:onblur':'scwin.ed_hhcnt1type_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp21',style:'',type:'button','ev:onclick':'scwin.img_PopUp21_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt2type',placeholder:'',style:'width: 50px;',title:'Container Type2',objType:'data',maxByteLength:'4',allowChar:'a-zA-Z0-9',ref:'data:ds_srList.hhcnt2type','ev:onblur':'scwin.ed_hhcnt2type_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp22',style:'',type:'button','ev:onclick':'scwin.img_PopUp22_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt3type',placeholder:'',style:'width: 50px;',title:'Container Type3',objType:'data',maxByteLength:'4',allowChar:'a-zA-Z0-9',ref:'data:ds_srList.hhcnt3type','ev:onblur':'scwin.ed_hhcnt3type_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp23',style:'',type:'button','ev:onclick':'scwin.img_PopUp23_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt4type',placeholder:'',style:'width: 50px;',title:'Container Type4',objType:'data',maxByteLength:'4',allowChar:'a-zA-Z0-9',ref:'data:ds_srList.hhcnt4type','ev:onblur':'scwin.ed_hhcnt4type_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp24',style:'',type:'button','ev:onclick':'scwin.img_PopUp24_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송서비스',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_tcCd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_srList.tcCd',objType:'data',disableEdit:'true',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt1',placeholder:'',style:'width:75px; text-align: right;',title:'Container Quantity1',objType:'data',maxByteLength:'3',allowChar:'0-9',ref:'data:ds_srList.hhcnt1','ev:onblur':'scwin.ed_hhcnt1_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt2',placeholder:'',style:'width:75px;text-align:right;',title:'Container Quantity2',objType:'data',maxByteLength:'3',allowChar:'0-9',ref:'data:ds_srList.hhcnt2','ev:onblur':'scwin.ed_hhcnt2_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt3',placeholder:'',style:'width:75px;text-align:right;',title:'Container Quantity3',objType:'data',maxByteLength:'3',allowChar:'0-9',ref:'data:ds_srList.hhcnt3','ev:onblur':'scwin.ed_hhcnt3_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhcnt4',placeholder:'',style:'width:75px;text-align:right;',title:'Container Quantity4',objType:'data',maxByteLength:'3',allowChar:'0-9',ref:'data:ds_srList.hhcnt4','ev:onblur':'scwin.ed_hhcnt4_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhtriange',appearance:'full',style:'',id:'chb_hhtriange',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',title:'Triangle',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Triangle'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhnomi',appearance:'full',style:'',id:'chb_hhnomi',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',title:'NOMI',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NOMI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'O B/L',class:'req'}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_hhobl',placeholder:'',class:'',title:'Old B/L',objType:'data',mandatory:'true',ref:'data:ds_srList.hhobl'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Co-Load',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:50px;',id:'lc_hhcoload',class:'',title:'Co-Load',objType:'data',allOption:'',chooseOption:'',ref:'data:ds_srList.hhcoload',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'R'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Number of Containers or Packages',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' Kind of Packages;description of goods',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Print Option',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_hhsubpkg',placeholder:'',style:'',title:'Number of Containers or Packages1',maxByteLength:'35',objType:'data',ref:'data:ds_srList.hhsubpkg'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhunit2',placeholder:'',style:'',maxByteLength:'20',title:'Number of Containers or Packages2',objType:'data',ref:'data:ds_srList.hhunit2'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'6'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txa_descnm',style:'',objType:'data',title:'Kind of Packages,desciption of goods',ref:'data:ds_srList.descnm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:group',A:{id:'',class:'flex justify-evenly',style:'height: 140px;'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp1',appearance:'full',style:'',id:'chb_hhp1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Said To Contain'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Said to Container'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp2',appearance:'full',style:'',id:'chb_hhp2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Shipper\'s Load &Count'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Shipper\'s Load & Count'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp3',appearance:'full',style:'',id:'chb_hhp3',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Container Print'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Container Print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp4',appearance:'full',style:'',id:'chb_hhp4',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Term Print'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Term Print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp5',appearance:'full',style:'',id:'chb_hhp5',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Recipt Date Print'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Recipt Date Print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_srList.hhp6',appearance:'full',style:'',id:'chb_hhp6',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',title:'Onboard Date Print'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Onboard Date Print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Marks And Numbers & Container No',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txa_mark',style:'',title:'Mark and Numbers  & Container No',objType:'data',ref:'data:ds_srList.mark'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Say',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhsay',placeholder:'',style:'width:150px;',maxByteLength:'70',objType:'data',ref:'data:ds_srList.hhsay'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_hhrcvnm',popupID:'',style:'',codeId:'ed_hhitem',nameId:'txt_hhmitem1',btnId:'img_PopUp17',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',maxlengthCode:'8',refDataCollection:'ds_srList',code:'hhitem',name:'hhmitem1','ev:onblurCodeEvent':'scwin.udc_hhrcvnm_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhrcvnm_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th bg-req'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EDI ITEM',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhmitem2',placeholder:'',style:'width:150px;',objType:'data',title:'hhmitem2',ref:'data:ds_srList.hhmitem2'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Container',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group2',style:'',btnPlusYn:'Y',gridUpYn:'N',btnUser:'Y',gridDownFn:'scwin.f_RunExcel1',gridID:'gr_ocContList',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocContList',style:'',autoFit:'allColumn',id:'gr_ocContList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true','ev:oneditend':'scwin.gr_ocContList_oneditend','ev:ontextimageclick':'scwin.gr_ocContList_ontextimageclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_ocContList_onviewchange',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mccntno',value:'Container',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mctype',value:'Type',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',value:'Seal No1',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',value:'Seal No2',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'mcpkg',value:'PKG',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mcpkgcd',value:'Unit',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcwgt',value:'Weight',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcmsr',value:'Measure',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mcpart',value:'Part',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mccntno',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'mctype',displayMode:'label',textAlign:'center',maxByteLength:'4'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',displayMode:'label',textAlign:'left',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',displayMode:'label',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'mcpkg',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',maxByteLength:'10'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'mcpkgcd',displayMode:'label',textAlign:'center',maxByteLength:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcwgt',displayMode:'label',dataType:'float',maxLength:'13.3',displayFormat:'#,##0.###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcmsr',displayMode:'label',dataType:'float',maxLength:'13.3',displayFormat:'#,##0.###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'mcpart',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'CNT 총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totcnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'PKG',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;text-align: right;',id:'ed_totpkg',placeholder:'',class:'',objType:'data',maxByteLength:'12',dataType:'float',displayFormat:'#,###.##',readOnly:'true'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WGT',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_totwgt',placeholder:'',style:'width:80px;text-align: right;',objType:'data',maxByteLength:'13',dataType:'float',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSR',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_totmsr',placeholder:'',style:'width:80px;text-align: right;',objType:'data',maxByteLength:'12',dataType:'float',displayFormat:'#,###.##'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_CntrReceive',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.btn_CntrReceive_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CNTR Receive'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_AddRow1',btnRowDelObj:'btn_DelRow1',btnCancelObj:'btn_CancelRow1',id:'grpBtn_ocContList',gridID:'gr_ocContList',rowAddFunction:'scwin.btn_AddRow1_onclick',rowDelFunction:'scwin.btn_DelRow1_onclick',rowAddObjType:'ctrlBtn',cancelFunction:'scwin.btn_CancelRow1_onclick'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Remark',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_hhrmk1',placeholder:'',style:'',maxByteLength:'50',objType:'data',ref:'data:ds_srList.hhrmk1'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhrmk2',placeholder:'',style:'',maxByteLength:'50',objType:'data',ref:'data:ds_srList.hhrmk2'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhrmk3',placeholder:'',style:'',maxByteLength:'50',objType:'data',ref:'data:ds_srList.hhrmk3'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhrmk4',placeholder:'',style:'',maxByteLength:'50',objType:'data',ref:'data:ds_srList.hhrmk4'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhrmk5',placeholder:'',style:'',maxByteLength:'50',objType:'data',ref:'data:ds_srList.hhrmk5'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Pre-Vessel/Voyage',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhfvsl',placeholder:'',style:'',maxByteLength:'25',objType:'data',title:'Pre-Vessel/Voyage',ref:'data:ds_srList.hhfvsl'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Place of Receipt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',objType:'data',codeId:'ed_hhrcvcd',id:'udc_hhrcvcd',nameId:'txt_hhrcvnm',btnId:'img_PopUp18',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',maxlengthCode:'5',allowCharCode:'a-zA-Z',validExpCode:'Place of Receipt',validExpName:'Place of Receipt Name',refDataCollection:'ds_srList',code:'hhrcvcd',name:'hhrcvnm','ev:onblurCodeEvent':'scwin.udc_hhrcvcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhrcvcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhrcvcd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Purchase Order No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhpono',placeholder:'',style:'',title:'Purchase Order No',maxByteLength:'30',objType:'data',ref:'data:ds_srList.hhpono'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Value',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhcustvalue',placeholder:'',style:'',maxByteLength:'30',objType:'data',title:'Invoice Value',ref:'data:ds_srList.hhcustvalue'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipment Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhmnfgb',ref:'data:ds_srList.hhmnfgb',renderType:'radiogroup',rows:'',selectedIndex:'',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Reshipment'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'R'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'L/C No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhlcno',placeholder:'',style:'',maxByteLength:'20',title:'L/C No',objType:'data',ref:'data:ds_srList.hhlcno'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수출신고',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grp_group3',style:'',btnUser:'Y',btnPlusYn:'Y',gridID:'gr_ocElList',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocElList',style:'',autoFit:'allColumn',id:'gr_ocElList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true','ev:ontextimageclick':'scwin.gr_ocElList_ontextimageclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_ocElList_onviewchange',focusMode:'row',keyMoveEditMode:'true',ignoreNonEditableCell:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'수출신고번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'Package',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'Unit',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'Weight',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'포장기호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'package',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'Unit',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'분할',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'분할선적차수',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'elno',displayMode:'label',textAlign:'left',maxByteLength:'19',readOnly:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pkg',displayMode:'label',dataType:'number',textAlign:'right',maxLength:'14',ignoreChar:',',displayFormat:'#,###',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'unit',displayMode:'label',textAlign:'left',maxByteLength:'7'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wgt',displayMode:'label',textAlign:'right',dataType:'float',ignoreChar:',',displayFormat:'#,###.###',maxLength:'13.3'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'mgb',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'A'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'B'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'D'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'E'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'F'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'G'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'H'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'I'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'J'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'K'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'L'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'M'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'O'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'P'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Q'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'R'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'U'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'V'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'V'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'W'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'X'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'X'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Z'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Z'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mpkg',displayMode:'label',textAlign:'right',dataType:'number',maxLength:'14',ignoreChar:',',displayFormat:'#,###',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'mut',displayMode:'label',textAlign:'left',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'pgb',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pseq',displayMode:'label',textAlign:'right',dataType:'number',maxLength:'14'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_AddRow2',btnRowDelObj:'btn_DelRow2',btnCancelObj:'btn_CancelRow2',id:'grpBtn_ocElList',gridID:'gr_ocElList',rowAddFunction:'scwin.btn_AddRow2_onclick',rowDelFunction:'scwin.btn_DelRow2_onclick',cancelFunction:'scwin.btn_CancelRow2_onclick'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_4',type:'button',class:'btn link','ev:onclick':'scwin.btn_Mbl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'',id:'udc_comCode_Grid',maxlengthCode:'5',maxlengthName:'15',nameId:'',objType:'data',popupID:'',style:'display: none;',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'',style:'',type:'button',userAuth:'R',objType:'bCancel','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Send',label:'',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_Send_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})