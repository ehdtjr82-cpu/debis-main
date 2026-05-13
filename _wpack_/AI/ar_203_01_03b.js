/*amd /AI/ar_203_01_03b.xml 217460 4a59aa119e1a3a907c14fa0135db0da7c183521bbfb047d6c1e0df797ccb2039 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_HouseBillSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srno',name:'Booking No',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_MasterBillSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchInfo_freight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'Master/House구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HouseBillInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'Hsn No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'Msn No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Bound Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voidgb',name:'Void Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ergb',name:'Shipment Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'출발/도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontime',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtime',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bldt',name:'정산일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isdt',name:'B/L발행일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shcd',name:'Shipper Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm2',name:'Shipper Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm3',name:'Shipper Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm4',name:'Shipper Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm5',name:'Shipper Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'Consignee Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'Consignee Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm2',name:'Consignee Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm3',name:'Consignee Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm4',name:'Consignee Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm5',name:'Consignee Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rggb',name:'사업자/개인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgno',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nttg',name:'Notify출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcd',name:'Notify Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'Notify Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm2',name:'Notify Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm3',name:'Notify Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm4',name:'Notify Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm5',name:'Notify Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agcd',name:'Agent Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agnm',name:'Agent Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cocd',name:'Consolidator Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conm',name:'Consolidator Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'Departure Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'Departure Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'Flight No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd1',name:'첫번째도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd1',name:'첫번째항공사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd2',name:'두번째도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd2',name:'두번째항공사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd3',name:'세번째도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd3',name:'세번째항공사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'최종도착지명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm2',name:'최종도착지명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acif1',name:'Account Information1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acif2',name:'Account Information2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cucd',name:'Currency Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frpc',name:'Freight PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otpc',name:'Other PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvcr',name:'운송신고가격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvct',name:'세관신고가격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insu',name:'보험신고가격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif1',name:'Handling Info1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif2',name:'Handling Info2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif3',name:'Handling Info3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'Item Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'Item Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arcd',name:'Location Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arnm',name:'Location Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctcd',name:'Country Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctnm',name:'Country Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'영업사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'영업사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpacd',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'Chargeable Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'Cbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nomiYn',name:'Nomi여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sgcd',name:'Signature Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sgnm',name:'Signature Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rider',name:'Rider여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'품명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm2',name:'품명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm3',name:'품명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm4',name:'품명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'최종목적지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lcno',name:'L/C No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pono',name:'P/O No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediwht',name:'Edi Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attn',name:'B/L담당자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attnnm',name:'B/L담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endgb',name:'마감구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'submgb',name:'Sub Master여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'C/I No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'innerPkg',name:'Inner Package',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invCucd',name:'Invoice Currency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invAmt',name:'Invoice Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exgb',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cjdt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hscd',name:'Hs Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sccd',name:'Special Cargo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'Input Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'Update Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncd',name:'Partner Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pnnm',name:'Partner Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankgb',name:'Consignee Bank여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplgb',name:'삼국간여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrgb',name:'Co-Load여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inco',name:'Incoterms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cgtype',name:'Cargo Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mark',name:'Marking',dataType:'text'}},{T:1,N:'w2:column',A:{id:'descnm',name:'Description',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'Customer Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asnm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldmhno',name:'Old Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipgb',name:'B/L Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascdPic',name:'Customer PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascdPicnm',name:'Customer PIC Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncdPic',name:'Partner PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncdPicnm',name:'Partner PIC Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarecd',name:'하기장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarenm',name:'하기장소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'장치장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'장치장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ucrNo',name:'UCR No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shCtcd',name:'Shipper Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnCtcd',name:'Consignee Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cacd',name:'Carrier Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'canm',name:'Carrier Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'B/L PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpnm',name:'Registrant Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invBillingDate',name:'INV Billing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptnBillingDate',name:'PTN Billing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txtDate',name:'Tax Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txtAmount',name:'Tax Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indate',name:'입항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exrate',name:'USD환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CustomerBookingInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blgb',name:'B/L Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'C/I No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'Consignee Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asnm',name:'Consignee Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipcd',name:'PIC Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipnm',name:'PIC Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iptl',name:'PIC Tel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipfx',name:'PIC Fax',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'Departure Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'Departure Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'Flight No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'Item Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'Item Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'Salesman Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'Salesman Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whcd',name:'Warehouse Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whnm',name:'Warehouse Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'Remark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'Input Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'Update Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Bound Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shcd',name:'Shipper Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'Consignee Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncd',name:'Partner Code',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MasterInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dpcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CNCD',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HouseBillCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MasterBookingInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cocd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srgb',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ArrivalInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'anno',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'andt',name:'Arrival Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annm',name:'PIC',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DeliveryInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hitekContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'zfblno',name:'bl no',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultHblnoMsg'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Hblno',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HouseFreightInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cucd',name:'화폐단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exdt',name:'환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exrate',name:'USD환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exgb',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pfchg',name:'PP Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfchg',name:'CC Freight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfuchg',name:'CC Freight Foreign',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pvchg',name:'PP Valuation',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvchg',name:'CC Valuation',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvuchg',name:'CC Valuation Foreign',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pachg',name:'PP Agent',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cachg',name:'CC Agent',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cauchg',name:'CC Agent Foreign',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcchg',name:'PP Carrier',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccchg',name:'CC Carrier',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccuchg',name:'CC Carrier Foreign',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptchg',name:'PP Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctchg',name:'CC Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctuchg',name:'CC Total Foreign',dataType:'text'}},{T:1,N:'w2:column',A:{id:'innerPkg',name:'Inner Package',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'Chargeable Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cjdt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Onboard Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'Departure',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'Destination',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrier',name:'Carrier',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agcd',name:'Agent Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'Customer Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrgb',name:'Co-Load',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SellingFreightInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임Unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'Master/House구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출매입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'Chargeable Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'Tariff단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'USD금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'Rate Class',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'Commodity Item',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT유무',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_PartnerFreightInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임Unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'Master/House구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출매입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'Chargeable Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'Tariff단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'USD금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'Rate Class',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'Commodity Item',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regName',name:'등록담당자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BuyingFreightInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임Unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'Master/House구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출매입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PP/CC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'Chargeable Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'Tariff단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'USD금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'Rate Class',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'Commodity Item',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTyp',name:'운임Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'매입거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regName',name:'등록담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CustomerBookingInfo_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lcsp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lngb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkgs',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wght',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partialgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CargoPickupInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqtime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDistrictNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeTime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drv',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTel',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderType',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MasterBookingList_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtime',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cacd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'canm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bltype',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MasterBL_master'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voidgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exrate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ontm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nttg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm5',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cacd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'canm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cocd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptcd3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acif1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acif2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cucd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frpc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otpc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvcr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insu',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdif3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pfchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pvchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pachg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cachg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lonm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqrt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqchg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sgcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sgnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rider',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwht2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'akggb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kggb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lcno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pono',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attnnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invchk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cjdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'innerPkg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mark',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'descnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrgb',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inco',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exCucd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascdPic',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascdPicnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncdPic',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncdPicnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shCtcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnCtcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediItem',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_profit_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profit',name:'손익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'마진율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceCheckParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceCheckParam_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceCheck_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HblStockNoInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DeptChangeParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hodrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DeptChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HblNoChangeParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newblNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HblNoChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_departmentInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_authGroup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blPrint',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blPrint2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirportInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL4',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ExRate_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirFreightTariff_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rank',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asgb',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirOtherTariff_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fcode',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amount',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirTruckingTariff_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transRate',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirCustBookingCargoPickupList_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwht',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtBreak',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_FcodeInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirportInfo_freight',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL4',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo_booking'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmpCnd_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrvTypCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_frt_condition_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_frtMapping_freight'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'description',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlCd3',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoAirDeptChangeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_DeptChange_submitdone','ev:submiterror':'scwin.sbm_DeptChange_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_HblNoChange',action:'/il.comm.util.CoAirHblNoChangeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_HblNoChangeParam","key":"IN_DS1"},{"id":"ds_HblNoChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_HblNoChangeResult","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_HblNoChange_submitdone','ev:submiterror':'scwin.sbm_HblNoChange_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_InvoiceCheckParam","key":"IN_DS1"},{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_InvoiceCheck_submitdone','ev:submiterror':'scwin.sbm_InvoiceCheck_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.airinb.aibl.RetrieveAirImpHouseAllCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_HouseBillSearch","key":"IN_DS1"},{"id":"ds_HouseBillInfo","key":"OUT_DS1"},{"id":"ds_ArrivalInfo","key":"OUT_DS2"},{"id":"ds_DeliveryInfo","key":"OUT_DS3"},{"id":"ds_hitekContents","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_HouseBillInfo","key":"OUT_DS1"},{"id":"ds_ArrivalInfo","key":"OUT_DS2"},{"id":"ds_DeliveryInfo","key":"OUT_DS3"},{"id":"ds_hitekContents","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBookigInfo',action:'/il.airout.aobl.RetrieveAirImpCustomerBookingInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_HouseBillSearch","key":"IN_DS1"},{"id":"ds_CustomerBookingInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_CustomerBookingInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveBookigInfo_submitdone','ev:submiterror':'scwin.sbm_RetrieveBookigInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveMaster',action:'/il.airout.aobl.RetrieveAirMasterBlListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_HouseBillSearch","key":"IN_DS1"},{"id":"ds_MasterInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_MasterInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveMaster_submitdone','ev:submiterror':'scwin.sbm_RetrieveMaster_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveHouseBillCheck',action:'/il.airinb.aibl.RetrieveAirImpHblnoCheckCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_HouseBillSearch","key":"IN_DS1"},{"id":"ds_HouseBillCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_HouseBillCheck","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveHouseBillCheck_submitdone','ev:submiterror':'scwin.sbm_RetrieveHouseBillCheck_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.airinb.aibl.SaveAirImpHouseAllCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_HouseBillInfo","key":"IN_DS1"},{"id":"ds_HouseFreightInfo_freight","key":"IN_DS2"},{"id":"ds_SellingFreightInfo_freight","key":"IN_DS3"},{"id":"ds_PartnerFreightInfo_freight","key":"IN_DS4"},{"id":"ds_BuyingFreightInfo_freight","key":"IN_DS5"},{"id":"ds_CustomerBookingInfo_booking","key":"IN_DS6"},{"id":"ds_CargoPickupInfo","key":"IN_DS7"},{"id":"ds_MasterBL_master","key":"IN_DS8"},{"id":"ds_resultHblnoMsg","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultHblnoMsg","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'scwin.sbm_Save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/il.airinb.aibl.DeleteAirImpHouseAllCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_HouseBillInfo","key":"IN_DS1"},{"id":"ds_HouseFreightInfo_freight","key":"IN_DS2"},{"id":"ds_SellingFreightInfo_freight","key":"IN_DS3"},{"id":"ds_PartnerFreightInfo_freight","key":"IN_DS4"},{"id":"ds_BuyingFreightInfo_freight","key":"IN_DS5"},{"id":"ds_CustomerBookingInfo_booking","key":"IN_DS6"},{"id":"ds_CargoPickupInfo","key":"IN_DS7"},{"id":"ds_MasterBL_master","key":"IN_DS8"},{"id":"ds_resultHblnoMsg","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultHblnoMsg","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_Delete_submitdone','ev:submiterror':'scwin.sbm_Delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveMasterBooking',action:'/il.airout.aobl.RetrieveAirImpMasterBookingListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_MasterBillSearch","key":"IN_DS1"},{"id":"ds_MasterBookingInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_MasterBookingInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveMasterBooking_submitdone','ev:submiterror':'scwin.sbm_RetrieveMasterBooking_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck_freight',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_InvoiceCheckParam_freight","key":"IN_DS1"},{"id":"ds_InvoiceCheck_freight","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_InvoiceCheck_freight","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_InvoiceCheck_freight_submitdone','ev:submiterror':'scwin.sbm_InvoiceCheck_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve_freight',action:'/il.airinb.aibl.RetrieveAirImpHouseFreightAllCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_SearchInfo_freight","key":"IN_DS1"},{"id":"ds_HouseFreightInfo_freight","key":"OUT_DS1"},{"id":"ds_SellingFreightInfo_freight","key":"OUT_DS2"},{"id":"ds_PartnerFreightInfo_freight","key":"OUT_DS3"},{"id":"ds_BuyingFreightInfo_freight","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_HouseFreightInfo_freight","key":"OUT_DS1"},{"id":"ds_SellingFreightInfo_freight","key":"OUT_DS2"},{"id":"ds_PartnerFreightInfo_freight","key":"OUT_DS3"},{"id":"ds_BuyingFreightInfo_freight","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_Retrieve_freight_submitdone','ev:submiterror':'scwin.sbm_Retrieve_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTmp_freight',action:'/il.airinb.aibl.RetrieveAirPreHouseBLFreightCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_tmpCnd_freight","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_RetrieveTmp_freight_submitdone','ev:submiterror':'scwin.sbm_RetrieveTmp_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveProfit_freight',action:'/il.airinb.aibl.RetrieveAirHouseFreightProfitCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_SearchInfo_freight","key":"IN_DS1"},{"id":"ds_profit_freight","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_profit_freight","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveProfit_freight_submitdone','ev:submiterror':'scwin.sbm_RetrieveProfit_freight_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_frtMapping_freight',action:'/il.seaout.sobl.RetrieveAPIFreightMappingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_frt_condition_freight","key":"IN_DS1"},{"id":"ds_frtMapping_freight","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_frtMapping_freight","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_frtMapping_freight_submitdone','ev:submiterror':'scwin.sbm_retrieve_frtMapping_freight_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_WRN_001 = "해당 B/L 번호로 복사 하시겠습니까?";
scwin.MSG_LO_WRN_002 = "마감된 자료 입니다. 수정 할 수 없습니다.";
scwin.MSG_LO_WRN_003 = "이미 존재하는 House B/L No : @ 가 있습니다.";
scwin.MSG_LO_WRN_005 = "이미 인보이스  발행 되어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_006 = "이미 운임이  발행 되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_007 = "House B/L No 가 변경 되었습니다.";
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.MSG_LO_WRN_010 = "1GG 부서 코드는 사용하실 수 없습니다. ";
scwin.MSG_LO_WRN_011 = "@ 에 등록 되어 있어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_012 = "이미 인보이스가 발행 되어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_013 = "Customer와 Dept가 일치하지 않습니다. \n거래처별 매출귀속 정의 화면에서 정보를 확인하세요.";
scwin.processFlag = "";
scwin.actionFlag = "";
scwin.linkType = "New";
scwin.spRtn = "";
scwin.spMsg = "";
scwin.freightYn = "";
scwin.empNo = "";
scwin.vLobranCd = "";
scwin.vLobranNm = "";
scwin.TabIndex = 0;
scwin.exRateCheck = "1";
scwin.exRate1 = "0";
scwin.exRate2 = "0";
scwin.crc = "";
scwin.v_linkcheck = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "I";
scwin.hd_frpc = "";
scwin.hd_otpc = "";
scwin.hd_shipgb = "";
scwin.hd_oldmhno = "";
scwin.hd_temp = "";
scwin.hd_seaAirCls = "A";
scwin.hd_mblHblCls = "H";
scwin.strCurDate = "";
scwin.userId = "";
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.p_lobranCd = "";
scwin.p_lobranNm = "";
scwin.airexgbim = "4";
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
scwin.ed_srno = "";
scwin.onpageload = function () {
  scwin.strCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.userId = $c.ses.getUserId();
  scwin.empNo = scwin.userId;
  scwin.vLobranCd = $c.ses.getLobranCd();
  scwin.vLobranNm = $c.ses.getLobranNm();
  scwin.p_lobranCd = scwin.vLobranCd;
  scwin.p_lobranNm = scwin.vLobranNm;
  scwin.params = $c.data.getParameter($p);
  if (scwin.params) {
    scwin.v_linkcheck = scwin.params["linkcheck"] || "";
    scwin.p_clntNo = scwin.params["clntNo"] || "";
    scwin.p_clntNm = scwin.params["clntNm"] || "";
    scwin.airexgbim = scwin.params["airexgbim"] || "4";
  }
  scwin.f_Set("INIT");
  scwin.f_getParametrSetting();
  scwin.f_OnLoad_freight();
};
scwin.f_dataset_exist_choice_freight = async function (dataset, message) {
  let T_count = 0;
  for (let i = 0; i < dataset.getRowCount(); i++) {
    if (dataset.getCellData(i, "choice") == "T") {
      T_count++;
    }
  }
  if (T_count == 0) {
    await $c.win.alert($p, message);
    return false;
  }
  return true;
};
scwin.f_getParametrSetting = async function () {
  let kcomcd = scwin.params ? scwin.params["kcomcd"] || "" : "";
  let blno = scwin.params ? scwin.params["blno"] || "" : "";
  let type = scwin.params ? scwin.params["type"] || "" : "";
  let mblno = scwin.params ? scwin.params["mblno"] || "" : "";
  scwin.linkType = type;
  if (scwin.linkType.trim() == "HawbCreate") {
    if (mblno == "null" || mblno == "") {
      return false;
    }
    scwin.f_Create();
    scwin.hd_kcomcd = kcomcd;
    ed_mblno.setValue(mblno);
    scwin.f_MasterConsolNoLoading();
    if (scwin.actionFlag == "Create") {
      scwin.f_RetrieveMasterInfo();
    }
    ed_blno.setFocus();
  } else if (scwin.linkType.trim() == "ColoadHawbCreate") {
    if (mblno == "null" || mblno == "") {
      return false;
    }
    scwin.f_Create();
    scwin.hd_kcomcd = kcomcd;
    ed_mblno.setValue(mblno);
    scwin.f_MasterConsolNoLoading();
    if (scwin.actionFlag == "Create") {
      scwin.f_RetrieveMasterBookinInfo();
    }
    ed_blno.setFocus();
  } else if (scwin.linkType.trim() == "HawbRetrieve") {
    if (blno == "null" || blno == "") {
      return false;
    }
    scwin.hd_kcomcd = kcomcd;
    ed_blno.setValue(blno);
    scwin.f_MhnoLoading();
    scwin.f_Retrieve();
  } else {
    if (blno == "null" || blno == "") {
      return false;
    }
    scwin.hd_kcomcd = kcomcd;
    ed_blno.setValue(blno);
    scwin.f_MhnoLoading();
    scwin.f_Retrieve();
  }
};
scwin.f_Retrieve = async function () {
  if (ed_blno.getValue() != "") {
    ds_HouseBillInfo.removeAll();
    scwin.f_ProcessBinding(dma_HouseBillSearch, "HouseBillSearch");
    await $c.sbm.execute($p, sbm_Retrieve);
    if (ed_blpic.getValue() != "") {
      scwin.txt_blpic = "";
      scwin.f_PopUp("B/L PIC", "T", "F", "F");
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.setFocus();
  }
};
scwin.f_RetrieveMasterInfo = async function () {
  if (ed_mblno.getValue().trim() != "") {
    scwin.f_ProcessBinding(dma_HouseBillSearch, "RetrieveMasterInfo");
    await $c.sbm.execute($p, sbm_RetrieveMaster);
  }
};
scwin.f_RetrieveMasterBookinInfo = async function () {
  if (ed_mblno.getValue().trim() != "") {
    scwin.f_ProcessBinding(dma_MasterBillSearch, "MasterBillSearch");
    await $c.sbm.execute($p, sbm_RetrieveMasterBooking);
  }
};
scwin.f_RetrieveBookingInfo = async function () {
  if (scwin.ed_srno.trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]);
  } else {
    scwin.f_ProcessBinding(dma_HouseBillSearch, "CustomerBookingSearch");
    await $c.sbm.execute($p, sbm_RetrieveBookigInfo);
  }
};
scwin.f_ProcessBinding = function (ds, gubun) {
  switch (gubun) {
    case "HouseBillSearch":
      dma_HouseBillSearch.set("kcomcd", scwin.hd_kcomcd);
      dma_HouseBillSearch.set("blno", ed_blno.getValue().trim());
      dma_HouseBillSearch.set("mhno", lc_hmhno ? lc_hmhno.getValue() : "");
      dma_HouseBillSearch.set("iogb", scwin.hd_iogb);
      break;
    case "HouseBillSave":
      ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "iogb", scwin.hd_iogb);
      ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "blno", ed_blno.getValue().trim());
      ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "mhno", lc_hmhno ? lc_hmhno.getValue() : "");
      break;
    case "CustomerBookingSearch":
      dma_HouseBillSearch.set("kcomcd", scwin.hd_kcomcd);
      dma_HouseBillSearch.set("srno", scwin.ed_srno.trim());
      dma_HouseBillSearch.set("iogb", scwin.hd_iogb);
      break;
    case "HouseBillCheck":
      dma_HouseBillSearch.set("kcomcd", scwin.hd_kcomcd);
      dma_HouseBillSearch.set("blno", ed_blno.getValue().trim());
      dma_HouseBillSearch.set("iogb", scwin.hd_iogb);
      break;
    case "RetrieveMasterInfo":
      dma_HouseBillSearch.set("kcomcd", scwin.hd_kcomcd);
      dma_HouseBillSearch.set("iogb", scwin.hd_iogb);
      dma_HouseBillSearch.set("blno", ed_mblno.getValue().trim());
      break;
    case "MasterBillSearch":
      dma_MasterBillSearch.set("kcomcd", scwin.hd_kcomcd);
      dma_MasterBillSearch.set("blno", ed_mblno.getValue().trim());
      dma_MasterBillSearch.set("mhno", lc_hmhno ? lc_hmhno.getValue() : "");
      dma_MasterBillSearch.set("iogb", scwin.hd_iogb);
      break;
    case "HouseFreightSave":
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "iogb", scwin.hd_iogb);
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "blno", ed_blno.getValue().trim());
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "mhno", lc_hmhno ? lc_hmhno.getValue() : "");
      break;
    default:
      break;
  }
};
scwin.f_ProcessBinding_freight = function (ds, gubun) {
  switch (gubun) {
    case "FreightSearch":
      dma_SearchInfo_freight.set("kcomcd", scwin.hd_kcomcd);
      dma_SearchInfo_freight.set("blno", ed_blno.getValue().trim());
      dma_SearchInfo_freight.set("mhno", lc_hmhno ? lc_hmhno.getValue().trim() : "");
      dma_SearchInfo_freight.set("iogb", scwin.hd_iogb);
      dma_SearchInfo_freight.set("mblHblCls", "H");
      break;
    case "FreightSave":
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "blno", ed_blno.getValue().trim());
      break;
    default:
      break;
  }
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete, btn_Cancel, btn_FileDownload]);
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, pu_PlSheet, pu_Dimens, pu_Print, pu_MasterBill, pu_HawbNoChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, pu_Find_main]);
      ed_blno.setFocus();
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Find_main, pu_PlSheet, pu_Dimens, pu_Print, pu_MasterBill, pu_HawbNoChange]);
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload]);
      scwin.f_DefaultValue("Create");
      scwin.freightYn = "";
      scwin.f_CustomerBookingInfo_booking();
      scwin.f_MasterBookingList_booking();
      scwin.f_MasterBL_master();
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Find_main, pu_PlSheet, pu_Dimens, pu_Print, pu_MasterBill, pu_HawbNoChange, btn_FileDownload]);
      $c.gus.cfDisableKey($p);
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
  if (scwin.freightYn == "-1") {
    $c.gus.cfDisableObjects($p, [ed_dept, txt_deptnm, ed_itcd, txt_itnm]);
  }
};
scwin.f_DefaultValue = function (gubun) {
  switch (gubun) {
    case "Create":
      rd_sccd.setValue("N");
      ed_acif1.setValue("FREIGHT PREPAID");
      ed_dvcr.setValue("N.V.D");
      ed_dvct.setValue("AS PER INV");
      ed_insu.setValue("NIL");
      rd_ergb.setValue("I");
      ed_blno.setValue("");
      ed_blno.setFocus();
      break;
    case "Copy":
      ed_blno.setValue("");
      scwin.ed_srno = "";
      ed_mblno.setValue("");
      scwin.hd_oldmhno = "";
      ed_blno.setFocus();
      break;
    default:
      break;
  }
};
scwin.f_Create = function () {
  ds_HouseBillInfo.removeAll();
  ds_HouseBillInfo.insertRow();
  scwin.actionFlag = "Create";
  scwin.f_Set("CREATE");
  scwin.f_Create_freight();
  scwin.txt_blpic = "";
  ta_shnm.setValue("");
  ta_cnnm.setValue("");
  ta_ntnm.setValue("");
  if (ed_blpic.getValue() == "") {
    ed_blpic.setValue(scwin.userId);
    scwin.txt_blpic = "";
    scwin.f_PopUp("B/L PIC", "T", "F", "F");
  }
  ed_itcd.setValue("30000000");
  txt_itnm.setValue("일반화물");
};
scwin.f_Update = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set("UPDATE");
  if (ed_agcd.getValue().trim() == "") {
    $c.gus.cfDisableObjects($p, [lc_lrgb]);
  } else {
    $c.gus.cfEnableObjects($p, [lc_lrgb]);
  }
  scwin.f_Update_freight();
  $c.gus.cfDisableObjects($p, [ed_dept, txt_deptnm]);
};
scwin.f_Cancel = function () {
  if (scwin.actionFlag == "Create") {
    scwin.f_Set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_Set("RETRIEVE");
  }
  ds_HouseBillInfo.undoAll();
};
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
      if (scwin.actionFlag == "Create" || scwin.actionFlag == "Copy") {
        if (lc_shipGb.getSelectedIndex() == 0) {
          ed_mblno.setValue(ed_blno.getValue());
        }
        scwin.f_ProcessBinding(dma_HouseBillSearch, "HouseBillCheck");
        await $c.sbm.execute($p, sbm_RetrieveHouseBillCheck);
        if (scwin.processFlag == "Exist") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_011, ["House B/L No"]);
          ed_blno.setFocus();
          return false;
        }
        ds_HouseBillInfo.setRowStatus(ds_HouseBillInfo.getRowPosition(), "C");
        if (lc_cucd_freight.getValue() == "") {
          lc_cucd_freight.setValue("KRW");
        }
        if (lc_cucd_freight.getValue() != "") {
          ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "cucd", lc_cucd_freight.getValue());
          ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "cucd", lc_cucd_freight.getValue());
        }
      }
      scwin.f_TextareaSave();
      scwin.f_FreightTypeSetting();
      if (ds_HouseBillInfo.getUpdatedIndex().length > 0 || ds_HouseFreightInfo_freight.getUpdatedIndex().length > 0 || ds_SellingFreightInfo_freight.getUpdatedIndex().length > 0 || ds_PartnerFreightInfo_freight.getUpdatedIndex().length > 0 || ds_BuyingFreightInfo_freight.getUpdatedIndex().length > 0) {
        scwin.f_ProcessBinding(ds_HouseBillInfo, "HouseBillSave");
        scwin.f_ProcessBinding_freight(ds_HouseFreightInfo_freight, "FreightSave");
        if ((await scwin.f_ReqFieldChk_freight()) && (await scwin.f_JobCloseYn())) {
          scwin.actionFlag = "Save";
          scwin.f_HblNoStockPram();
          ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "status", "U");
          ds_HouseFreightInfo_freight.setCellData(ds_HouseFreightInfo_freight.getRowPosition(), "status", "U");
          if (ed_shCtcd.getValue() == "") {
            await $c.win.alert($p, "Shipper Country code is mandatory.");
            return false;
          }
          if (ed_cnCtcd.getValue() == "") {
            await $c.win.alert($p, "Consignee Country code is mandatory.");
            return false;
          }
          if (ed_blpic.getValue() == "") {
            scwin.txt_blpic = "";
            ds_HouseBillInfo.setCellData(ds_HouseBillInfo.getRowPosition(), "pic", scwin.userId);
          }
          scwin.f_BookingSetting();
          if (lc_hmhno.getValue() == "") {
            scwin.f_MasterBlSetting();
          }
          await $c.sbm.execute($p, sbm_Save);
        }
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House Info222"]);
      }
    }
  }
};
scwin.f_Delete = async function () {
  await scwin.f_Delete_freight();
  if (scwin.spRtn == "0") {
    await scwin.f_InvoiceCheck_All("F");
    if (scwin.spRtn == "0") {
      ds_HouseBillInfo.removeRow(ds_HouseBillInfo.getRowPosition());
      ds_CustomerBookingInfo_booking.removeRow(ds_CustomerBookingInfo_booking.getRowPosition());
      if ("D" == ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "shipgb")) {
        ds_MasterBL_master.removeRow(ds_MasterBL_master.getRowPosition());
      }
      scwin.actionFlag = "Delete";
      await $c.sbm.execute($p, sbm_Delete);
      ed_blno.setValue("");
      ed_blno.setFocus();
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_005);
    }
  }
};
scwin.f_ReqFieldChk = async function () {
  if (ed_blno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.setFocus();
    return false;
  }
  if (ed_mblno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L No"]);
    ed_mblno.setFocus();
    return false;
  }
  if (ed_ondt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Onboard Date"]);
    ed_ondt.setFocus();
    return false;
  }
  if (ed_avdt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Arrival Date"]);
    ed_avdt.setFocus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_ondt.getValue(), ed_avdt.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["Onboard Date", "Arrival Date"]);
    ed_ondt.setFocus();
    return false;
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate, ed_ondt.getValue()) > 3) {
    await $c.win.alert($p, "Onboard Date가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_ondt.setFocus();
    return false;
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate, ed_avdt.getValue()) > 3) {
    await $c.win.alert($p, "Arrival Date가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_avdt.setFocus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_ondt.getValue(), scwin.strCurDate) > 3) {
    await $c.win.alert($p, "Onboard Date가 3년 이상의 과거 일 수 없습니다.");
    ed_ondt.setFocus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_avdt.getValue(), scwin.strCurDate) > 3) {
    await $c.win.alert($p, "Arrival Date가 3년 이상의 과거 일 수 없습니다.");
    ed_avdt.setFocus();
    return false;
  }
  if ($c.date.diffDate($p, ed_ondt.getValue(), ed_avdt.getValue()) > 149) {
    await $c.win.alert($p, "Onboard Date-Arrival Date(transit time)가 150일을 초과할 수 없습니다.");
    ed_ondt.setFocus();
    return false;
  }
  if (ed_dept.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department Info"]);
    ed_dept.setFocus();
    return false;
  }
  if (ed_sacd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Salesman Info"]);
    ed_sacd.setFocus();
    return false;
  }
  if (ed_itcd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Info"]);
    ed_itcd.setFocus();
    return false;
  }
  if (txt_ngnm1.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["EDI Item Info"]);
    txt_ngnm1.setFocus();
    return false;
  }
  if (ed_cjdt.getValue().trim() == "" || !$c.gus.cfValidateValue($p, ed_cjdt.getValue().trim(), "date=YYYYMMDD")) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Result Date Date"]);
    ed_cjdt.setFocus();
    return false;
  }
  if (ed_dept.getValue().trim() == "1GG") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
    ed_dept.setFocus();
    return false;
  }
  if (lc_contractNo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Contract No"]);
    lc_contractNo.setFocus();
    return false;
  }
  if (ds_customerInfo.getRowCount() > 0) {
    if (ed_dept.getValue() != ds_customerInfo.getCellData(ds_customerInfo.getRowPosition(), "col1")) {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_013);
      ed_dept.setFocus();
      return false;
    }
  }
  let chk = await $c.gus.cfValidate($p, [tbl_HouseBillInfo]);
  if (!chk) {
    return false;
  }
  return true;
};
scwin.f_ProcessResult = async function (gubun) {
  switch (gubun) {
    case "None":
      scwin.f_Set("INIT");
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      ed_blno.setFocus();
      break;
    case "HouseInfo":
      scwin.f_Set("RETRIEVE");
      scwin.f_SettingValue();
      scwin.f_MhnoLoading();
      await scwin.f_InvoiceCheck_All("B");
      break;
    case "NotExistMasterBookingInfo":
      scwin.processFlag = "None";
      ed_mblno.setValue("");
      break;
    case "ExistMasterBookingInfo":
      scwin.processFlag = "ExistMasterBookingInfo";
      scwin.f_MasterBookingListBinding("Retrieve", ds_MasterBookingInfo, ds_HouseBillInfo);
      break;
    default:
      break;
  }
};
scwin.f_SettingValue = function () {
  if (scwin.ed_srno == "") {
    $c.gus.cfEnableObjects($p, [ed_srno]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_srno]);
  }
  if (ed_mblno.getValue() == "") {
    $c.gus.cfEnableObjects($p, [ed_mblno]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_mblno]);
  }
  scwin.f_FreightTypeGetting();
};
scwin.f_FreightTypeGetting = function () {
  chb_frpc1.setValue("F");
  chb_frpc2.setValue("F");
  chb_otpc1.setValue("F");
  chb_otpc2.setValue("F");
  if (scwin.hd_frpc == "PP") {
    chb_frpc1.setValue("T");
  }
  if (scwin.hd_frpc == "CC") {
    chb_frpc2.setValue("T");
  }
  if (scwin.hd_frpc == "PC") {
    chb_frpc1.setValue("T");
    chb_frpc2.setValue("T");
  }
  if (scwin.hd_otpc == "PP") {
    chb_otpc1.setValue("T");
  }
  if (scwin.hd_otpc == "CC") {
    chb_otpc2.setValue("T");
  }
  if (scwin.hd_otpc == "PC") {
    chb_otpc1.setValue("T");
    chb_otpc2.setValue("T");
  }
};
scwin.f_FreightTypeSetting = function () {
  scwin.hd_frpc = "";
  scwin.hd_otpc = "";
  if (chb_frpc1.getValue() == "T") {
    scwin.hd_frpc = "PP";
  }
  if (chb_frpc2.getValue() == "T") {
    scwin.hd_frpc = "CC";
  }
  if (chb_frpc1.getValue() == "T" && chb_frpc2.getValue() == "T") {
    scwin.hd_frpc = "PC";
  }
  if (chb_otpc1.getValue() == "T") {
    scwin.hd_otpc = "PP";
  }
  if (chb_otpc2.getValue() == "T") {
    scwin.hd_otpc = "CC";
  }
  if (chb_otpc1.getValue() == "T" && chb_otpc2.getValue() == "T") {
    scwin.hd_otpc = "PC";
  }
};
scwin.f_InvoiceCheck_All = async function (gbun) {
  ds_InvoiceCheckParam.removeAll();
  ds_InvoiceCheckParam.insertRow();
  let row = ds_InvoiceCheckParam.getRowPosition();
  ds_InvoiceCheckParam.setCellData(row, "odrNo", ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "odrNo"));
  ds_InvoiceCheckParam.setCellData(row, "mblHblCls", "H");
  ds_InvoiceCheckParam.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_InvoiceCheckParam.setCellData(row, "seaAirCls", "A");
  ds_InvoiceCheckParam.setCellData(row, "blNo", ed_blno.getValue().trim());
  ds_InvoiceCheckParam.setCellData(row, "mhno", lc_hmhno ? lc_hmhno.getValue().trim() : "");
  ds_InvoiceCheckParam.setCellData(row, "gbun", gbun == "B" ? "B" : "F");
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  await $c.sbm.execute($p, sbm_InvoiceCheck);
  scwin.spMsg = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition(), "spMsg");
  scwin.spRtn = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition(), "spRtn");
  scwin.freightYn = scwin.spRtn;
};
scwin.f_HblNoStockPram = function () {
  ds_HblStockNoInfo.removeAll();
  ds_HblStockNoInfo.insertRow();
  let row = ds_HblStockNoInfo.getRowPosition();
  ds_HblStockNoInfo.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_HblStockNoInfo.setCellData(row, "dept", "1GG");
};
scwin.f_TextareaSave = function () {
  let str1 = ta_shnm.getValue();
  let shnmSplit = str1.split("\n");
  let str2 = ta_cnnm.getValue();
  let cnnmSplit = str2.split("\n");
  let str3 = ta_ntnm.getValue();
  let ntnmSplit = str3.split("\n");
  for (let i = 0; i < 5; i++) {
    if (shnmSplit[i] == undefined) shnmSplit[i] = "";
    if (cnnmSplit[i] == undefined) cnnmSplit[i] = "";
    if (ntnmSplit[i] == undefined) ntnmSplit[i] = "";
  }
  let row = ds_HouseBillInfo.getRowPosition();
  for (let i = 1; i < 6; i++) {
    ds_HouseBillInfo.setCellData(row, "shnm" + i, shnmSplit[i - 1] == undefined ? "" : shnmSplit[i - 1].replace(/\r/gi, "").replace(/\n/gi, ""));
    ds_HouseBillInfo.setCellData(row, "cnnm" + i, cnnmSplit[i - 1] == undefined ? "" : cnnmSplit[i - 1].replace(/\r/gi, "").replace(/\n/gi, ""));
    ds_HouseBillInfo.setCellData(row, "ntnm" + i, ntnmSplit[i - 1] == undefined ? "" : ntnmSplit[i - 1].replace(/\r/gi, "").replace(/\n/gi, ""));
  }
};
scwin.f_TextareaCall = function () {
  let row = ds_HouseBillInfo.getRowPosition();
  ta_shnm.setValue(ds_HouseBillInfo.getCellData(row, "shnm1") + "\n" + ds_HouseBillInfo.getCellData(row, "shnm2") + "\n" + ds_HouseBillInfo.getCellData(row, "shnm3") + "\n" + ds_HouseBillInfo.getCellData(row, "shnm4") + "\n" + ds_HouseBillInfo.getCellData(row, "shnm5"));
  ta_cnnm.setValue(ds_HouseBillInfo.getCellData(row, "cnnm1") + "\n" + ds_HouseBillInfo.getCellData(row, "cnnm2") + "\n" + ds_HouseBillInfo.getCellData(row, "cnnm3") + "\n" + ds_HouseBillInfo.getCellData(row, "cnnm4") + "\n" + ds_HouseBillInfo.getCellData(row, "cnnm5"));
  ta_ntnm.setValue(ds_HouseBillInfo.getCellData(row, "ntnm1") + "\n" + ds_HouseBillInfo.getCellData(row, "ntnm2") + "\n" + ds_HouseBillInfo.getCellData(row, "ntnm3") + "\n" + ds_HouseBillInfo.getCellData(row, "ntnm4") + "\n" + ds_HouseBillInfo.getCellData(row, "ntnm5"));
};
scwin.f_MhnoLoading = function () {
  let strClntNo = ed_blno.getValue().trim();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    ds_hmhno.removeAll();
    // TODO: combo data loading via $c.sbm or $c.data API for retriveAirHouseMhnoListCombo
  }
};
scwin.f_MasterConsolNoLoading = function () {
  let strClntNo = ed_mblno.getValue().trim();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    ds_hmhno.removeAll();
    // TODO: combo data loading via $c.sbm or $c.data API for retriveAirMasterMhnoListCombo
  }
};
scwin.f_NotifyHandling = function (gubun) {
  let row = ds_HouseBillInfo.getRowPosition();
  switch (gubun) {
    case "Same":
      ed_ntcd.setValue("");
      ds_HouseBillInfo.setCellData(row, "ntnm1", "SAME AS CONSIGNEE");
      ds_HouseBillInfo.setCellData(row, "ntnm2", "");
      ds_HouseBillInfo.setCellData(row, "ntnm3", "");
      ds_HouseBillInfo.setCellData(row, "ntnm4", "");
      ds_HouseBillInfo.setCellData(row, "ntnm5", "");
      break;
    case "Copy":
      ed_ntcd.setValue(ed_cncd.getValue());
      ds_HouseBillInfo.setCellData(row, "ntnm1", ds_HouseBillInfo.getCellData(row, "cnnm1"));
      ds_HouseBillInfo.setCellData(row, "ntnm2", ds_HouseBillInfo.getCellData(row, "cnnm2"));
      ds_HouseBillInfo.setCellData(row, "ntnm3", ds_HouseBillInfo.getCellData(row, "cnnm3"));
      ds_HouseBillInfo.setCellData(row, "ntnm4", ds_HouseBillInfo.getCellData(row, "cnnm4"));
      ds_HouseBillInfo.setCellData(row, "ntnm5", ds_HouseBillInfo.getCellData(row, "cnnm5"));
      break;
  }
  scwin.f_TextareaCall();
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: Convert all ilCommonPopUp calls to udc.ilCommonPopUp with callbacks - each case from original JSP
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: Convert all ilCommonPopUp calls to udc.ilCommonPopUp with callbacks - each case from original JSP
};
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: Convert grid popup calls - each case from original JSP
};
scwin.f_PopUpGrid_freight = function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: Convert freight grid popup calls - each case from original JSP
};
scwin.f_openPgm = function (name) {
  switch (name) {
    case "Freight":
      $c.win.openMenu($p, "House Air Waybill Freight", "/ui/il/airinb/aibl/ar_203_01_02b.xml", "ar_203_01_02b.xml", {
        blno: ed_blno.getValue(),
        mblno: ed_mblno.getValue(),
        kcomcd: scwin.hd_kcomcd,
        mhno: lc_hmhno ? lc_hmhno.getValue() : "",
        iogb: scwin.hd_iogb
      });
      break;
    case "PL":
      $c.win.openMenu($p, "Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
        kcomcd: scwin.hd_kcomcd,
        seaair: "A",
        iogb: scwin.hd_iogb,
        blno: "",
        mblno: ed_mblno.getValue(),
        mhno: lc_hmhno ? lc_hmhno.getValue() : ""
      });
      break;
    case "Booking":
      $c.win.openMenu($p, "Import Customer Booking", "/ui/il/airinb/aibk/ar_201_01_01b.xml", "ar_201_01_01b.xml", {
        kcomcd: scwin.hd_kcomcd,
        srno: scwin.ed_srno
      });
      break;
    case "Find":
      $c.win.openMenu($p, "House B/L Search", "/ui/il/airout/aobl/ar_104_01_02b.xml", "ar_104_01_02b.xml", {
        iogb: "I"
      });
      break;
    case "Mawb":
      $c.win.openMenu($p, "Import Master B/L", "/ui/il/airinb/aibl/ar_202_01_01b.xml", "ar_202_01_01b.xml", {
        kcomcd: scwin.hd_kcomcd,
        blno: ed_mblno.getValue()
      });
      break;
    case "AN":
      $c.win.openMenu($p, "Arrival Notice", "/ui/il/seainb/sith/se_204_01_01b.xml", "se_204_01_01b.xml", {
        kcomcd: scwin.hd_kcomcd,
        blno: ed_blno.getValue(),
        mhno: lc_hmhno ? lc_hmhno.getValue() : "",
        eta: ed_avdt.getValue(),
        seaair: "A"
      });
      break;
    default:
      break;
  }
};
scwin.f_openPgm_freight = function (name) {
  if (name == "Main") {
    $c.win.openMenu($p, "Export House B/L", "/ui/il/airout/aobl/ar_104_01_01b.xml", "ar_104_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      blno: ed_blno.getValue(),
      mhno: lc_hmhno ? lc_hmhno.getValue() : ""
    });
  } else if (name == "Inv") {
    $c.win.openMenu($p, "Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: scwin.hd_seaAirCls,
      iogb: scwin.hd_iogb,
      blno: ed_blno.getValue(),
      mblno: "",
      mhno: lc_hmhno ? lc_hmhno.getValue() : ""
    });
  } else if (name == "PayInv") {
    $c.win.openMenu($p, "Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: scwin.hd_seaAirCls,
      iogb: scwin.hd_iogb,
      blno: ed_blno.getValue(),
      mblno: "",
      mhno: lc_hmhno ? lc_hmhno.getValue() : ""
    });
  } else if (name == "PartnerInv") {
    $c.win.openMenu($p, "Partner Invoice", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: scwin.hd_seaAirCls,
      iogb: scwin.hd_iogb,
      blno: ed_blno.getValue(),
      mblno: "",
      mhno: lc_hmhno ? lc_hmhno.getValue() : ""
    });
  } else if (name == "PL") {
    $c.win.openMenu($p, "Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "A",
      iogb: scwin.hd_iogb,
      blno: "",
      mblno: ed_mblno.getValue(),
      mhno: lc_hmhno ? lc_hmhno.getValue() : ""
    });
  }
};
scwin.f_OnLoad_freight = function () {
  scwin.f_Set_freight("INIT");
};
scwin.f_Set_freight = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Update_freight, btn_Save_freight, btn_Delete_freight, btn_Cancel_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create_freight]);
      scwin.f_GridSet_freight("Init");
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Save_freight, btn_Cancel_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create_freight, btn_Update_freight, btn_Delete_freight]);
      scwin.f_GridSet_freight("Retrieve");
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Create_freight, btn_Update_freight, btn_Delete_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save_freight, btn_Cancel_freight]);
      scwin.f_DefaultValue_freight();
      scwin.f_GridSet_freight("Create");
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update_freight, btn_Create_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save_freight, btn_Delete_freight, btn_Cancel_freight]);
      $c.gus.cfEnableBtnOnly($p, [pu_Tariff_freight, pu_exRateChange_freight, pu_CustomerChange_freight, pu_ResultdateChange_freight]);
      $c.gus.cfDisableKey($p);
      scwin.f_GridSet_freight("Update");
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save_freight, btn_Cancel_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update_freight, btn_Create_freight, btn_Delete_freight]);
      scwin.f_Set_freight("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save_freight, btn_Cancel_freight]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create_freight, btn_Update_freight, btn_Delete_freight]);
      scwin.f_Set_freight("RETRIEVE");
      break;
  }
};
scwin.f_GridSet_freight = function (gubun) {
  switch (gubun) {
    case "Init":
    case "Retrieve":
      gr_BuyingFreightInfo_freight.setReadOnly("grid", true);
      gr_SellingFreightInfo_freight.setReadOnly("grid", true);
      gr_PartnerFreightInfo_freight.setReadOnly("grid", true);
      break;
    case "Create":
    case "Update":
      gr_BuyingFreightInfo_freight.setReadOnly("grid", false);
      gr_SellingFreightInfo_freight.setReadOnly("grid", false);
      gr_PartnerFreightInfo_freight.setReadOnly("grid", false);
      break;
  }
};
scwin.f_DefaultValue_freight = function () {
  lc_exgb_freight.setValue(scwin.airexgbim);
};
scwin.f_Create_freight = function () {
  ds_HouseFreightInfo_freight.removeAll();
  ds_HouseFreightInfo_freight.insertRow();
  ds_SellingFreightInfo_freight.removeAll();
  ds_BuyingFreightInfo_freight.removeAll();
  ds_PartnerFreightInfo_freight.removeAll();
  ds_profit_freight.removeAll();
  scwin.actionFlag = "Create";
  scwin.f_Set_freight("CREATE");
  ed_blno.setFocus();
};
scwin.f_Update_freight = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set_freight("UPDATE");
};
scwin.f_Cancel_freight = function () {
  if (scwin.actionFlag == "Create") {
    scwin.f_Set_freight("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_Set_freight("RETRIEVE");
  }
  ds_HouseFreightInfo_freight.undoAll();
  ds_BuyingFreightInfo_freight.undoAll();
  ds_SellingFreightInfo_freight.undoAll();
  ds_PartnerFreightInfo_freight.undoAll();
};
scwin.f_Retrieve_freight = async function () {
  scwin.actionFlag = "Retrieve";
  if (ed_blno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.setFocus();
    return false;
  }
  scwin.f_ProcessBinding_freight(dma_SearchInfo_freight, "FreightSearch");
  ds_HouseFreightInfo_freight.removeAll();
  ds_SellingFreightInfo_freight.removeAll();
  ds_PartnerFreightInfo_freight.removeAll();
  ds_BuyingFreightInfo_freight.removeAll();
  await $c.sbm.execute($p, sbm_Retrieve_freight);
  ds_profit_freight.removeAll();
  await $c.sbm.execute($p, sbm_RetrieveProfit_freight);
};
scwin.f_ReqFieldChk_freight = async function () {
  for (let i = 0; i < ds_BuyingFreightInfo_freight.getRowCount(); i++) {
    if (ds_BuyingFreightInfo_freight.getCellData(i, "pchsTyp") == "3") {
      if (ds_BuyingFreightInfo_freight.getCellData(i, "sellDeptCd") == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Inner Department"]);
        gr_BuyingFreightInfo_freight.setFocusedCell(i, "sellDeptCd");
        return false;
      }
    }
  }
  for (let i = 0; i < ds_SellingFreightInfo_freight.getRowCount(); i++) {
    if (ds_SellingFreightInfo_freight.getCellData(i, "vatYn") == 0) {
      if (ds_SellingFreightInfo_freight.getCellData(i, "vatAmt") > 0) {
        await $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
    if (ds_SellingFreightInfo_freight.getCellData(i, "vatYn") == 1) {
      if (Math.abs(Math.round(ds_SellingFreightInfo_freight.getCellData(i, "sellAmt") * 0.1) - ds_SellingFreightInfo_freight.getCellData(i, "vatAmt")) > 1) {
        await $c.win.alert($p, "VAT 금액은 Amount(W)금액의 10%입니다.\nSelling List " + (i + 1) + "번째 금액을 확인하세요.");
        return false;
      }
    }
    if (ds_SellingFreightInfo_freight.getCellData(i, "sellAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
      return false;
    }
  }
  for (let i = 0; i < ds_PartnerFreightInfo_freight.getRowCount(); i++) {
    if (ds_PartnerFreightInfo_freight.getCellData(i, "sellAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nPartner List " + (i + 1) + "번째 데이터를 확인하세요.");
      return false;
    }
  }
  for (let i = 0; i < ds_BuyingFreightInfo_freight.getRowCount(); i++) {
    if (ds_BuyingFreightInfo_freight.getCellData(i, "vatYn") == 0) {
      if (ds_BuyingFreightInfo_freight.getCellData(i, "vat") > 0) {
        await $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nBuying List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
    if (ds_BuyingFreightInfo_freight.getCellData(i, "pchsAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nBuying List " + (i + 1) + "번째 데이터를 확인하세요.");
      return false;
    }
  }
  let chk = await $c.gus.cfValidate($p, [gr_BuyingFreightInfo_freight, gr_SellingFreightInfo_freight, gr_PartnerFreightInfo_freight]);
  if (!chk) {
    return false;
  }
  return true;
};
scwin.f_Delete_freight = async function () {
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    scwin.actionFlag = "Delete";
    await scwin.f_InvoiceCheck_freight_All_freight();
    if (scwin.spRtn == "0") {
      ds_HouseFreightInfo_freight.removeRow(ds_HouseFreightInfo_freight.getRowPosition());
      for (let i = ds_BuyingFreightInfo_freight.getRowCount() - 1; i >= 0; i--) {
        ds_BuyingFreightInfo_freight.removeRow(i);
      }
      for (let i = ds_SellingFreightInfo_freight.getRowCount() - 1; i >= 0; i--) {
        ds_SellingFreightInfo_freight.removeRow(i);
      }
      for (let i = ds_PartnerFreightInfo_freight.getRowCount() - 1; i >= 0; i--) {
        ds_PartnerFreightInfo_freight.removeRow(i);
      }
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_012);
    }
  }
};
scwin.f_InvoiceCheck_freight_All_freight = async function () {
  ds_InvoiceCheckParam_freight.removeAll();
  ds_InvoiceCheckParam_freight.insertRow();
  let row = ds_InvoiceCheckParam_freight.getRowPosition();
  ds_InvoiceCheckParam_freight.setCellData(row, "odrNo", ds_HouseFreightInfo_freight.getCellData(ds_HouseFreightInfo_freight.getRowPosition(), "odrNo"));
  ds_InvoiceCheckParam_freight.setCellData(row, "mblHblCls", "H");
  ds_InvoiceCheckParam_freight.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_InvoiceCheckParam_freight.setCellData(row, "seaAirCls", "A");
  ds_InvoiceCheckParam_freight.setCellData(row, "blNo", ed_blno.getValue().trim());
  ds_InvoiceCheckParam_freight.setCellData(row, "mhno", lc_hmhno ? lc_hmhno.getValue().trim() : "");
  ds_InvoiceCheckParam_freight.setCellData(row, "gbun", "F");
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  await $c.sbm.execute($p, sbm_InvoiceCheck_freight);
  scwin.spMsg = ds_InvoiceCheck_freight.getCellData(ds_InvoiceCheck_freight.getRowPosition(), "spMsg");
  scwin.spRtn = ds_InvoiceCheck_freight.getCellData(ds_InvoiceCheck_freight.getRowPosition(), "spRtn");
};
scwin.f_MasterBookingListBinding = function (gubun, dsBooking, dsHouse) {
  if (gubun == "Retrieve") {
    let bRow = dsBooking.getRowPosition();
    let hRow = dsHouse.getRowPosition();
    dsHouse.setCellData(hRow, "mhno", dsBooking.getCellData(bRow, "mhno"));
    dsHouse.setCellData(hRow, "ondt", dsBooking.getCellData(bRow, "ondt"));
    dsHouse.setCellData(hRow, "cjdt", dsBooking.getCellData(bRow, "ondt"));
    dsHouse.setCellData(hRow, "ontime", dsBooking.getCellData(bRow, "ontime"));
    dsHouse.setCellData(hRow, "fltno", dsBooking.getCellData(bRow, "fltno"));
    dsHouse.setCellData(hRow, "ptcd1", dsBooking.getCellData(bRow, "fltno").substring(0, 2));
    dsHouse.setCellData(hRow, "agcd", dsBooking.getCellData(bRow, "cocd"));
    dsHouse.setCellData(hRow, "agnm", dsBooking.getCellData(bRow, "conm"));
    dsHouse.setCellData(hRow, "dpcd", dsBooking.getCellData(bRow, "dpcd"));
    dsHouse.setCellData(hRow, "dstn", dsBooking.getCellData(bRow, "dscd"));
    dsHouse.setCellData(hRow, "dpnm", dsBooking.getCellData(bRow, "dpnm"));
    dsHouse.setCellData(hRow, "dscd1", dsBooking.getCellData(bRow, "dscd"));
    dsHouse.setCellData(hRow, "dsnm1", dsBooking.getCellData(bRow, "dsnm"));
    dsHouse.setCellData(hRow, "mftpkg", dsBooking.getCellData(bRow, "ctn"));
    dsHouse.setCellData(hRow, "mftwht", dsBooking.getCellData(bRow, "gwht"));
    dsHouse.setCellData(hRow, "avdt", dsBooking.getCellData(bRow, "avdt"));
    dsHouse.setCellData(hRow, "avtime", dsBooking.getCellData(bRow, "avtime"));
    dsHouse.setCellData(hRow, "lrgb", dsBooking.getCellData(bRow, "srgb"));
    scwin.f_DestinationCheck();
    if (ed_ctcd.getValue().trim().length > 0) {
      scwin.f_OpenCommonPopUp("Country", "T", "F", "F");
    }
  }
};
scwin.f_MasterBlSetting = function () {
  // TODO: Full MasterBL setting logic - copies all fields from ds_HouseBillInfo to ds_MasterBL_master
};
scwin.f_BookingSetting = function () {
  // TODO: Full Booking setting logic - copies fields to ds_CustomerBookingInfo_booking and ds_MasterBookingList_booking
};
scwin.f_DestinationCheck = function () {
  // TODO: Destination check with popup
};
scwin.f_AirportDestination = function () {
  // TODO: Airport destination lookup
};
scwin.f_AirLineCodeSet = function () {
  if (ed_fltno.getValue().trim() == "") {
    if (ed_ptcd1.getValue().trim() != "") {
      ed_fltno.setValue(ed_ptcd1.getValue().trim());
    }
    if (ed_ptcd2.getValue().trim() != "") {
      ed_fltno.setValue(ed_ptcd2.getValue().trim());
    }
    if (ed_ptcd3.getValue().trim() != "") {
      ed_fltno.setValue(ed_ptcd3.getValue().trim());
    }
  }
};
scwin.f_departmentInfo = function () {
  // TODO: Department info lookup via submission
};
scwin.f_customerInfo = function (param) {
  // TODO: Customer info lookup via submission
};
scwin.f_CustomerBookingInfo_booking = function () {
  // TODO: Customer booking info loading
};
scwin.f_ctrtNo_booking = function () {
  // TODO: Contract number loading
};
scwin.f_MasterBookingList_booking = function () {
  // TODO: Master booking list loading
};
scwin.f_MasterBL_master = function () {
  // TODO: Master BL loading
};
scwin.f_Copy = async function () {
  if (await $c.win.confirm($p, scwin.MSG_LO_WRN_001)) {
    scwin.actionFlag = "Copy";
    scwin.f_DefaultValue("Copy");
    scwin.f_Set("CREATE");
    scwin.f_Create_freight();
    ed_odrNo.setValue("");
    ed_cjdt.setValue("");
    txt_ngnm1.setValue("");
    if (ed_cncd.getValue().trim() != "") {
      ed_ascd.setValue(ed_cncd.getValue().trim());
      txt_asnm.setValue(ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "cnnm1").trim());
    } else if (ed_ntcd.getValue().trim() != "") {
      ed_ascd.setValue(ed_ntcd.getValue().trim());
      txt_asnm.setValue(ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "ntnm1").trim());
    }
    if (ed_blpic.getValue() == "") {
      ed_blpic.setValue(scwin.userId);
      scwin.f_PopUp("B/L PIC", "T", "F", "F");
    }
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  ds_hmhno.removeAll();
  ed_blno.setFocus();
};
scwin.f_HawbNoChange = async function () {
  if (ed_blno.getValue().trim() != "") {
    let rtnValue = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonHawbNoChange.xml", {
      width: 460,
      height: 280,
      modal: true,
      data: {
        pBlno: ed_blno.getValue().trim()
      }
    });
    if (typeof rtnValue != "undefined" && rtnValue != null) {
      if (rtnValue[0] == "N/A" && rtnValue[1].trim() != "") {
        ds_HblNoChangeParam.removeAll();
        ds_HblNoChangeParam.insertRow();
        let row = ds_HblNoChangeParam.getRowPosition();
        ds_HblNoChangeParam.setCellData(row, "odrNo", ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "odrNo"));
        ds_HblNoChangeParam.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        ds_HblNoChangeParam.setCellData(row, "blNo", ed_blno.getValue().trim());
        ds_HblNoChangeParam.setCellData(row, "newblNo", rtnValue[1].trim());
        ds_HblNoChangeParam.setCellData(row, "mhno", lc_hmhno ? lc_hmhno.getValue().trim() : "");
        scwin.spMsg = "";
        scwin.spRtn = "-1";
        if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
          await $c.sbm.execute($p, sbm_HblNoChange);
          scwin.spMsg = ds_HblNoChangeResult.getCellData(ds_HblNoChangeResult.getRowPosition(), "spMsg");
          scwin.spRtn = ds_HblNoChangeResult.getCellData(ds_HblNoChangeResult.getRowPosition(), "spRtn");
          if (scwin.spRtn == "0") {
            ed_blno.setValue(rtnValue[1].trim());
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_007);
          } else if (scwin.spRtn == "-2") {
            await $c.gus.cfAlertMsg($p, scwin.spMsg);
          } else {
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_006);
          }
        }
      }
    }
  }
};
scwin.f_departmentChange = async function () {
  if (ed_dept.getValue().trim() != "") {
    let rtnValue = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonDeptChange.xml", {
      width: 460,
      height: 280,
      modal: true,
      data: {
        pdept: ed_dept.getValue().trim(),
        pdeptnm: txt_deptnm.getValue().trim()
      }
    });
    if (typeof rtnValue != "undefined" && rtnValue != null) {
      if (rtnValue[0] == "N/A" && rtnValue[1].trim() != "" && rtnValue[2].trim() != "") {
        if (rtnValue[1].trim() == "1GG") {
          await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
          return false;
        }
        ds_DeptChangeParam.removeAll();
        ds_DeptChangeParam.insertRow();
        let row = ds_DeptChangeParam.getRowPosition();
        ds_DeptChangeParam.setCellData(row, "modrNo", "");
        ds_DeptChangeParam.setCellData(row, "hodrNo", ds_HouseBillInfo.getCellData(ds_HouseBillInfo.getRowPosition(), "odrNo"));
        ds_DeptChangeParam.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        ds_DeptChangeParam.setCellData(row, "dept", rtnValue[1]);
        ds_DeptChangeParam.setCellData(row, "deptnm", rtnValue[2]);
        scwin.spMsg = "";
        scwin.spRtn = "-1";
        if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
          await $c.sbm.execute($p, sbm_DeptChange);
          scwin.spMsg = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spMsg");
          scwin.spRtn = ds_DeptChangeResult.getCellData(ds_DeptChangeResult.getRowPosition(), "spRtn");
          if (scwin.spRtn == "0") {
            txt_deptnm.setValue(rtnValue[2].trim());
            ed_dept.setValue(rtnValue[1].trim());
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_009);
          } else if (scwin.spRtn == "-2") {
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_013);
          } else {
            await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_008);
          }
        }
      }
    }
  }
};
scwin.f_FileDownload = async function () {
  await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonFilePopup.xml", {
    width: 870,
    height: 335,
    modal: true,
    data: {
      houseNo: ed_blno.getValue()
    }
  });
};
scwin.f_JobCloseYn = async function () {
  let preWrkNo = "FI01";
  let minRsltsDt = scwin.strCurDate.substr(0, 6);
  for (let i = 0; i < ds_SellingFreightInfo_freight.getRowCount(); i++) {
    if (ds_SellingFreightInfo_freight.getRowStatus(i) == "C") {
      if (ds_SellingFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6) < minRsltsDt) {
        minRsltsDt = ds_SellingFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6);
      }
      let rsltsDt = minRsltsDt;
      let isCloseDepr = $c.gus.cfJobCloseYN($p, "CUR", rsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isCloseDepr == "2" || isCloseDepr == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nSelling List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  minRsltsDt = scwin.strCurDate.substr(0, 6);
  for (let i = 0; i < ds_PartnerFreightInfo_freight.getRowCount(); i++) {
    if (ds_PartnerFreightInfo_freight.getRowStatus(i) == "C") {
      if (ds_PartnerFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6) < minRsltsDt) {
        minRsltsDt = ds_PartnerFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6);
      }
      let rsltsDt = minRsltsDt;
      let isCloseDepr = $c.gus.cfJobCloseYN($p, "CUR", rsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isCloseDepr == "2" || isCloseDepr == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nPartner List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  minRsltsDt = scwin.strCurDate.substr(0, 6);
  for (let i = 0; i < ds_BuyingFreightInfo_freight.getRowCount(); i++) {
    if (ds_BuyingFreightInfo_freight.getRowStatus(i) == "C") {
      if (ds_BuyingFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6) < minRsltsDt) {
        minRsltsDt = ds_BuyingFreightInfo_freight.getCellData(i, "rsltsStdDt").substr(0, 6);
      }
      let rsltsDt = minRsltsDt;
      let isCloseDepr = $c.gus.cfJobCloseYN($p, "CUR", rsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isCloseDepr == "2" || isCloseDepr == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nBuying List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  return true;
};
scwin.f_Currency_Unit_freight = function (Curr) {
  let Check_Unit = 1;
  if (Curr == "JPY" || Curr == "ITL" || Curr == "IDR" || Curr == "ESP") {
    Check_Unit = 100;
  }
  return Check_Unit;
};
scwin.f_TotalCac_freight = function (gubun) {
  switch (gubun) {
    case "Selling":
      let Selling_utotal = 0,
        Selling_total = 0,
        Selling_totalVat = 0;
      for (let i = 0; i < ds_SellingFreightInfo_freight.getRowCount(); i++) {
        if (ds_SellingFreightInfo_freight.getRowStatus(i) != "D") {
          Selling_utotal += Number(ds_SellingFreightInfo_freight.getCellData(i, "sellAmtFcrc"));
          Selling_total += Number(ds_SellingFreightInfo_freight.getCellData(i, "sellAmt"));
          Selling_totalVat += Number(ds_SellingFreightInfo_freight.getCellData(i, "vatAmt"));
        }
      }
      ed_Selling_utotal.setValue(Selling_utotal);
      ed_Selling_total_freight.setValue(Selling_total);
      ed_Selling_total_freightVat.setValue(Selling_totalVat);
      break;
    case "Partner":
      let Partner_utotal = 0,
        Partner_total = 0,
        Partner_totalVat = 0;
      for (let i = 0; i < ds_PartnerFreightInfo_freight.getRowCount(); i++) {
        if (ds_PartnerFreightInfo_freight.getRowStatus(i) != "D") {
          Partner_utotal += Number(ds_PartnerFreightInfo_freight.getCellData(i, "sellAmtFcrc"));
          Partner_total += Number(ds_PartnerFreightInfo_freight.getCellData(i, "sellAmt"));
          Partner_totalVat += Number(ds_PartnerFreightInfo_freight.getCellData(i, "vatAmt"));
        }
      }
      ed_Partner_utotal.setValue(Partner_utotal);
      ed_Partner_total.setValue(Partner_total);
      ed_Partner_totalVat.setValue(Partner_totalVat);
      break;
    case "Buying":
      let Buying_utotal = 0,
        Buying_total = 0,
        Buying_totalVat = 0,
        Buying_totalVatSum = 0;
      for (let i = 0; i < ds_BuyingFreightInfo_freight.getRowCount(); i++) {
        if (ds_BuyingFreightInfo_freight.getRowStatus(i) != "D") {
          Buying_utotal += Number(ds_BuyingFreightInfo_freight.getCellData(i, "pchsAmtFcrc"));
          Buying_total += Number(ds_BuyingFreightInfo_freight.getCellData(i, "pchsAmt"));
          Buying_totalVat += Number(ds_BuyingFreightInfo_freight.getCellData(i, "vat"));
        }
      }
      Buying_totalVatSum = Buying_total + Buying_totalVat;
      ed_Buying_utotal.setValue(Buying_utotal);
      ed_Buying_total_freight.setValue(Buying_total);
      ed_Buying_totalVat.setValue(Buying_totalVat);
      ed_Buying_totalVatSum.setValue(Buying_totalVatSum);
      break;
  }
};
scwin.f_pcSummery_freight = function () {
  // TODO: Prepaid/Collect summary calculation - full logic from original JSP
};
scwin.f_RateAmount_freight = function (row, colid, gubun, olddata) {
  // TODO: Rate amount calculation logic - full logic from original JSP
};
scwin.f_PkgWegihtSetting_freight = function (row, colid, gubun) {
  // TODO: Package weight setting logic - full logic from original JSP
};
scwin.f_CurrRateSetting_freight = function (row, colid, disGubun) {
  // TODO: Currency rate setting logic - full logic from original JSP
};
scwin.f_ExrateLoading_freight = function (param1, param2, param3) {
  // TODO: Exchange rate loading
};
scwin.f_AddRow_freight = function (gubun) {
  // TODO: Add row logic for Selling/Partner/Buying grids - full logic from original JSP
};
scwin.f_AddRowMulti_freight = function (gubun) {
  // TODO: Multi row add logic - full logic from original JSP
};
scwin.f_DeleteRow_freight = async function (gubun) {
  let tmp, tmpRowPosition;
  switch (gubun) {
    case "Selling":
      tmp = ds_SellingFreightInfo_freight;
      tmpRowPosition = tmp.getRowPosition();
      for (let i = 0; i < tmp.getRowCount(); i++) {
        if (tmp.getCellData(i, "chk") == "T" || i == tmpRowPosition) {
          if (tmp.getCellData(i, "certiNo").trim() == "") {
            tmp.removeRow(i);
            i--;
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      break;
    case "Partner":
      tmp = ds_PartnerFreightInfo_freight;
      tmpRowPosition = tmp.getRowPosition();
      for (let i = 0; i < tmp.getRowCount(); i++) {
        if (tmp.getCellData(i, "chk") == "T" || i == tmpRowPosition) {
          if (tmp.getCellData(i, "certiNo").trim() == "") {
            tmp.removeRow(i);
            i--;
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      break;
    case "Buying":
      tmp = ds_BuyingFreightInfo_freight;
      tmpRowPosition = tmp.getRowPosition();
      for (let i = 0; i < tmp.getRowCount(); i++) {
        if (tmp.getCellData(i, "chk") == "T" || i == tmpRowPosition) {
          if (tmp.getCellData(i, "pchsCertiNo").trim() == "") {
            tmp.removeRow(i);
            i--;
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      break;
    default:
      break;
  }
};
scwin.f_DeleteAllRow_freight = function (gubun) {
  let ds = "";
  switch (gubun) {
    case "Selling":
      ds = ds_SellingFreightInfo_freight;
      break;
    case "Partner":
      ds = ds_PartnerFreightInfo_freight;
      break;
    case "Buying":
      ds = ds_BuyingFreightInfo_freight;
      break;
    default:
      return;
  }
  for (let i = ds.getRowCount() - 1; i >= 0; i--) {
    scwin.f_DeleteRow_freight(gubun);
  }
};
scwin.f_UndoRow_freight = function (gubun) {
  switch (gubun) {
    case "Selling":
      ds_SellingFreightInfo_freight.undoAll();
      break;
    case "Partner":
      ds_PartnerFreightInfo_freight.undoAll();
      break;
    case "Buying":
      ds_BuyingFreightInfo_freight.undoAll();
      break;
  }
};
scwin.f_TruncAmount_freight = function (gubun, Amount) {
  let TruncAmount = 0;
  switch (gubun) {
    case "1":
      return Math.round(Amount);
    case "2":
      return Math.round(Amount - 0.5);
    case "3":
      return parseInt(Math.round(Amount / 10) * 10);
    case "4":
      return Math.round((Amount - 5) / 10) * 10;
    case "5":
      return Math.round(Math.round(Amount) / 10) * 10;
    case "6":
      return Math.round((Math.round(Amount) - 5) / 10) * 10;
    default:
      return Math.round(Amount);
  }
};
scwin.f_GridChangeValidate_freight = function (dsSet, row, colid) {
  switch (colid) {
    case "chgWt":
      dsSet.setCellData(row, "chgWt", Math.round(dsSet.getCellData(row, "chgWt") * 10) / 10);
      break;
    case "prtnAmt":
      dsSet.setCellData(row, "prtnAmt", Math.round(dsSet.getCellData(row, "prtnAmt")));
      break;
  }
};
scwin.f_ResultdateChange_freight = async function () {
  let rtnValue = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonResultDateChange.xml", {
    width: 460,
    height: 280,
    modal: true
  });
  if (typeof rtnValue != "undefined" && rtnValue != null) {
    if (rtnValue[0] == "N/A") {
      await scwin.f_GridResultdateChange_freight(rtnValue);
    }
  }
};
scwin.f_GridResultdateChange_freight = async function (rtnList) {
  let ds_selling = ds_SellingFreightInfo_freight;
  if (ds_selling.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
  } else {
    if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
      for (let i = 0; i < ds_selling.getRowCount(); i++) {
        if (ds_selling.getCellData(i, "certiNo").trim() == "") {
          ds_selling.setCellData(i, "rsltsStdDt", rtnList[1]);
        }
      }
    }
  }
  let ds_partner = ds_PartnerFreightInfo_freight;
  if (ds_partner.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Partner Information"]);
  } else {
    if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
      for (let i = 0; i < ds_partner.getRowCount(); i++) {
        if (ds_partner.getCellData(i, "certiNo").trim() == "") {
          ds_partner.setCellData(i, "rsltsStdDt", rtnList[1]);
        }
      }
    }
  }
  let ds_buying = ds_BuyingFreightInfo_freight;
  if (ds_buying.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
  } else {
    if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
      for (let i = 0; i < ds_buying.getRowCount(); i++) {
        if (ds_buying.getCellData(i, "pchsCertiNo").trim() == "") {
          ds_buying.setCellData(i, "rsltsStdDt", rtnList[1]);
        }
      }
    }
  }
};
scwin.f_CustomerChange_freight = async function () {
  let rtnValue = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonCustomerChange.xml", {
    width: 460,
    height: 280,
    modal: true
  });
  if (typeof rtnValue != "undefined" && rtnValue != null) {
    if (rtnValue[0] == "N/A") {
      await scwin.f_GridCustomerChange_freight(rtnValue);
    }
  }
};
scwin.f_GridCustomerChange_freight = async function (rtnList) {
  if (scwin.TabIndex == 0) {
    let ds_selling = ds_SellingFreightInfo_freight;
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
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
  } else if (scwin.TabIndex == 1) {
    let ds_partner = ds_PartnerFreightInfo_freight;
    if (ds_partner.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Partner Information"]);
    } else {
      if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
        for (let i = 0; i < ds_partner.getRowCount(); i++) {
          if (ds_partner.getCellData(i, "certiNo").trim() == "") {
            if (ds_partner.getCellData(i, "bilgClntNo") == rtnList[1]) {
              ds_partner.setCellData(i, "bilgClntNo", rtnList[3]);
              ds_partner.setCellData(i, "bilgClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  } else if (scwin.TabIndex == 2) {
    let ds_buying = ds_BuyingFreightInfo_freight;
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
    } else {
      if (await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001)) {
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
scwin.f_exRateChange_freight2 = async function () {
  let nUnit = scwin.f_Currency_Unit_freight(lc_cucd_freight.getValue().trim());
  let dataset, invoiceCol;
  if (scwin.TabIndex == 0) {
    dataset = ds_SellingFreightInfo_freight;
    invoiceCol = "certiNo";
  } else if (scwin.TabIndex == 1) {
    dataset = ds_PartnerFreightInfo_freight;
    invoiceCol = "certiNo";
  } else if (scwin.TabIndex == 2) {
    dataset = ds_BuyingFreightInfo_freight;
    invoiceCol = "pchsCertiNo";
  } else {
    return;
  }
  let tabName = scwin.TabIndex == 0 ? "Selling" : scwin.TabIndex == 1 ? "Partner" : "Buying";
  if (dataset.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, [tabName + " Information"]);
    return;
  }
  if (!(await scwin.f_dataset_exist_choice_freight(dataset, "There is no " + tabName + " Information Choice"))) {
    return;
  }
  if (!(await $c.gus.cfConfirmMsg($p, E_MSG_CM_CRM_001))) {
    return;
  }
  let USD_COUNT = 0;
  let DS_COUNT = dataset.getRowCount();
  for (let j = 0; j < DS_COUNT; j++) {
    if (dataset.getCellData(j, "crcCd") == "USD") {
      USD_COUNT++;
    }
  }
  let amtCol = scwin.TabIndex == 2 ? "pchsAmt" : "sellAmt";
  let amtFcrcCol = scwin.TabIndex == 2 ? "pchsAmtFcrc" : "sellAmtFcrc";
  let vatCol = scwin.TabIndex == 2 ? "vat" : "vatAmt";
  for (let i = 0; i < DS_COUNT; i++) {
    if (dataset.getCellData(i, "choice") == "T") {
      if (dataset.getCellData(i, invoiceCol).trim() == "") {
        if (USD_COUNT == DS_COUNT) {
          dataset.setCellData(i, "exRate", ed_rate_freight.getValue());
        } else {
          if (dataset.getCellData(i, "crcCd") == "USD") {
            dataset.setCellData(i, "exRate", ed_exrate_freight.getValue());
          } else {
            dataset.setCellData(i, "exRate", ed_rate_freight.getValue());
          }
        }
        if (dataset.getCellData(i, "crcCd") != "KRW") {
          dataset.setCellData(i, amtCol, Math.round(dataset.getCellData(i, amtFcrcCol) * dataset.getCellData(i, "exRate") / nUnit));
        }
        if (dataset.getCellData(i, "vatYn") == "0") {
          dataset.setCellData(i, vatCol, "0");
        } else {
          dataset.setCellData(i, vatCol, Math.round(dataset.getCellData(i, amtCol) * 0.1 * 100) / 100);
        }
      }
    }
  }
};
scwin.f_RetrieveTmp_freight = async function () {
  ds_tmpCnd_freight.removeAll();
  ds_tmpCnd_freight.insertRow();
  if (ed_blnoTmp_freight.getValue() == "") {
    await $c.win.alert($p, "선조회할 BL번호가 없습니다");
    return false;
  }
  ds_tmpCnd_freight.setCellData(0, "blno", ed_blnoTmp_freight.getValue());
  if (scwin.TabIndex == 0) {
    ds_tmpCnd_freight.setCellData(0, "rtrvTypCd", "SELLING");
    if (ds_SellingFreightInfo_freight.getRowCount() > 0) {
      await $c.win.alert($p, "이미 매출이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_freight);
  } else if (scwin.TabIndex == 1) {
    ds_tmpCnd_freight.setCellData(0, "rtrvTypCd", "PARTNER");
    if (ds_PartnerFreightInfo_freight.getRowCount() > 0) {
      await $c.win.alert($p, "이미 PARTNER 실적이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_freight);
  } else if (scwin.TabIndex == 2) {
    ds_tmpCnd_freight.setCellData(0, "rtrvTypCd", "BUYING");
    if (ds_BuyingFreightInfo_freight.getRowCount() > 0) {
      await $c.win.alert($p, "이미 매입이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_freight);
  }
};
scwin.f_MhnoLoading_freight = function () {
  let strClntNo = ed_blno.getValue().trim();
  if (strClntNo.length > 0) {
    ds_hmhno.removeAll();
    // TODO: combo data loading via $c.sbm or $c.data API for retriveAirHouseMhnoListCombo
  }
};
scwin.f_Tariff_freight = function () {
  // TODO: Tariff calculation logic - full logic from original JSP
};
scwin.f_FreightCodeInfo_freight = function (Fcode, Fname) {
  // TODO: Freight code info lookup
};
scwin.f_AirFreightTariff_freight = function (Gubun) {
  // TODO: Air freight tariff lookup
};
scwin.f_AirFreightTariffCalc_freight = function (dsGubun) {
  // TODO: Air freight tariff calculation
  return [0, 0, 0, "", ""];
};
scwin.f_AirOtherTariff_freight = function (Gubun) {
  // TODO: Air other tariff lookup
};
scwin.f_AirOtherTariffCalc_freight = function (Gubun) {
  // TODO: Air other tariff calculation
};
scwin.f_AirTruckingTariff_freight = function (Rows, Gubun) {
  // TODO: Air trucking tariff lookup
};
scwin.f_AirTruckingTariffCalc_freight = function (Rows, Gubun) {
  // TODO: Air trucking tariff calculation
};
scwin.f_RetrieveCustomerBookingResult = async function (gubun) {
  switch (gubun) {
    case "None":
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      scwin.ed_srno = "";
      break;
    case "BookingInfo":
      let ds = ds_CustomerBookingInfo;
      let row = ds.getRowPosition();
      if (ds.getCellData(row, "blno") != "") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_003, [ds.getCellData(row, "blno")]);
        scwin.ed_srno = "";
        return false;
      }
      scwin.ed_srno = ds.getCellData(row, "srno");
      ed_shcd.setValue(ds.getCellData(row, "shcd"));
      if (ed_shcd.getValue().trim() != "") {
        scwin.f_PopUp("Shipper", "T", "F", "F");
      }
      ed_cncd.setValue(ds.getCellData(row, "cncd"));
      if (ed_cncd.getValue().trim() != "") {
        scwin.f_PopUp("Consignee", "T", "F", "F");
      }
      ed_nocd.setValue(ds.getCellData(row, "pncd"));
      txt_nonm.setValue("");
      if (ed_nocd.getValue().trim() != "") {
        scwin.f_PopUp("Partner", "T", "F", "F");
      }
      ed_ascd.setValue(ds.getCellData(row, "ascd"));
      txt_asnm.setValue("");
      if (ed_ascd.getValue().trim() != "") {
        scwin.f_PopUp("Customer", "T", "F", "F");
      }
      ed_sacd.setValue(ds.getCellData(row, "sacd"));
      txt_sanm.setValue(ds.getCellData(row, "sanm"));
      ed_itcd.setValue(ds.getCellData(row, "itcd"));
      txt_itnm.setValue(ds.getCellData(row, "itnm"));
      if (txt_itnm.getValue() == "") {
        ed_itcd.setValue("30000000");
        txt_itnm.setValue("일반화물");
      }
      if (ed_ascd.getValue().trim() != "") {
        scwin.f_departmentInfo();
      }
      if (scwin.processFlag == "Copy") {
        ds_HouseBillInfo.setRowStatus(ds_HouseBillInfo.getRowPosition(), "C");
        scwin.f_Save();
        scwin.processFlag = "None";
      }
      break;
    default:
      break;
  }
};
scwin.f_MasterInfoBinding = function () {
  let ds_Master = ds_MasterInfo;
  let ds_House = ds_HouseBillInfo;
  let mRow = 0;
  let hRow = ds_House.getRowPosition();
  ds_House.setCellData(hRow, "dpcd", ds_Master.getCellData(mRow, "dpcd"));
  ds_House.setCellData(hRow, "dpnm", ds_Master.getCellData(mRow, "dpnm"));
  ds_House.setCellData(hRow, "dscd1", ds_Master.getCellData(mRow, "dstn"));
  ds_House.setCellData(hRow, "dstn", ds_Master.getCellData(mRow, "dstn"));
  ds_House.setCellData(hRow, "dsnm1", ds_Master.getCellData(mRow, "dsnm1"));
  ds_House.setCellData(hRow, "fltno", ds_Master.getCellData(mRow, "fltno"));
  ds_House.setCellData(hRow, "ptcd1", ds_Master.getCellData(mRow, "fltno").substring(0, 2));
  ds_House.setCellData(hRow, "ondt", ds_Master.getCellData(mRow, "ondt"));
  ds_House.setCellData(hRow, "cjdt", ds_Master.getCellData(mRow, "ondt"));
  ds_House.setCellData(hRow, "ontime", ds_Master.getCellData(mRow, "ontm"));
  ds_House.setCellData(hRow, "avdt", ds_Master.getCellData(mRow, "avdt"));
  ds_House.setCellData(hRow, "avtime", ds_Master.getCellData(mRow, "avtm"));
  if (ed_nocd.getValue().trim() == "") {
    ed_nocd.setValue(ds_Master.getCellData(mRow, "CNCD"));
    if (ed_nocd.getValue().trim() != "") {
      scwin.f_PopUp("Partner", "T", "F", "F");
    }
  }
  scwin.f_DestinationCheck();
  if (ed_ctcd.getValue().trim().length > 0) {
    scwin.f_OpenCommonPopUp("Country", "T", "F", "F");
  }
};
scwin.f_InvoiceCheck_freight = function (disGubun, row) {
  switch (disGubun) {
    case "Selling":
      if (ds_SellingFreightInfo_freight.getCellData(row, "certiNo").trim() == "") {
        gr_SellingFreightInfo_freight.setReadOnly("grid", false);
      } else {
        gr_SellingFreightInfo_freight.setReadOnly("grid", true);
      }
      break;
    case "Partner":
      if (ds_PartnerFreightInfo_freight.getCellData(row, "certiNo").trim() == "") {
        gr_PartnerFreightInfo_freight.setReadOnly("grid", false);
      } else {
        gr_PartnerFreightInfo_freight.setReadOnly("grid", true);
      }
      break;
    case "Buying":
      if (ds_BuyingFreightInfo_freight.getCellData(row, "pchsCertiNo").trim() == "") {
        gr_BuyingFreightInfo_freight.setReadOnly("grid", false);
      } else {
        gr_BuyingFreightInfo_freight.setReadOnly("grid", true);
      }
      break;
  }
};
scwin.f_ProcessResult_freight = async function (gubun) {
  switch (gubun) {
    case "None":
      scwin.f_Set_freight("INIT");
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      ed_blno.setFocus();
      break;
    case "FreightInfo":
      scwin.f_Set_freight("RETRIEVE");
      if (lc_cucd_freight.getValue().trim() == "") {
        lc_cucd_freight.setValue(ds_HouseFreightInfo_freight.getCellData(ds_HouseFreightInfo_freight.getRowPosition(), "cucd"));
      }
      if (ed_exdt_freight.getValue().trim() == "") {
        ed_exdt_freight.setValue(ds_HouseFreightInfo_freight.getCellData(ds_HouseFreightInfo_freight.getRowPosition(), "ondt"));
      }
      scwin.f_TotalCac_freight("Selling");
      scwin.f_TotalCac_freight("Partner");
      scwin.f_TotalCac_freight("Buying");
      scwin.f_MhnoLoading_freight();
      break;
  }
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (ds_HouseBillInfo.getRowCount() == 0) {
    await scwin.f_ProcessResult("None");
  } else {
    await scwin.f_ProcessResult("HouseInfo");
    scwin.f_TextareaCall();
    scwin.f_Retrieve_freight();
    scwin.f_CustomerBookingInfo_booking();
    scwin.f_MasterBL_master();
  }
};
scwin.sbm_Retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveMaster_submitdone = async function (e) {
  if (ds_MasterInfo.getRowCount() == 0) {
    scwin.f_RetrieveMasterBookinInfo();
  } else {
    scwin.f_MasterInfoBinding();
  }
};
scwin.sbm_RetrieveMaster_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveBookigInfo_submitdone = async function (e) {
  if (ds_CustomerBookingInfo.getRowCount() == 0) {
    await scwin.f_RetrieveCustomerBookingResult("None");
  } else {
    await scwin.f_RetrieveCustomerBookingResult("BookingInfo");
  }
};
scwin.sbm_RetrieveBookigInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveHouseBillCheck_submitdone = function (e) {
  if (ds_HouseBillCheck.getRowCount() == 0) {
    scwin.processFlag = "NotExist";
  } else {
    scwin.processFlag = "Exist";
  }
};
scwin.sbm_RetrieveHouseBillCheck_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_Save_submitdone = async function (e) {
  if (scwin.actionFlag == "Save") {
    if (ds_resultHblnoMsg.getCellData(0, "Hblno").trim() != "") {
      ed_blno.setValue(ds_resultHblnoMsg.getCellData(0, "Hblno"));
    }
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
    scwin.f_MhnoLoading();
    scwin.f_Retrieve();
    scwin.f_Set("SAVE");
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
    scwin.f_Set("INIT");
  }
  scwin.processFlag = "None";
};
scwin.sbm_Save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_Delete_submitdone = async function (e) {
  ta_shnm.setValue("");
  ta_cnnm.setValue("");
  ta_ntnm.setValue("");
  ds_profit_freight.removeAll();
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  scwin.processFlag = "None";
};
scwin.sbm_Delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveMasterBooking_submitdone = async function (e) {
  if (ds_MasterBookingInfo.getRowCount() > 0) {
    await scwin.f_ProcessResult("ExistMasterBookingInfo");
  }
};
scwin.sbm_RetrieveMasterBooking_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_InvoiceCheck_submitdone = function (e) {};
scwin.sbm_InvoiceCheck_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_InvoiceCheck_freight_submitdone = function (e) {};
scwin.sbm_InvoiceCheck_freight_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_Retrieve_freight_submitdone = async function (e) {
  if (ds_HouseFreightInfo_freight.getRowCount() == 0) {
    await scwin.f_ProcessResult_freight("None");
  } else {
    await scwin.f_ProcessResult_freight("FreightInfo");
  }
};
scwin.sbm_Retrieve_freight_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveProfit_freight_submitdone = function (e) {};
scwin.sbm_RetrieveProfit_freight_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveTmp_freight_submitdone = function (e) {};
scwin.sbm_RetrieveTmp_freight_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_DeptChange_submitdone = function (e) {};
scwin.sbm_DeptChange_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_HblNoChange_submitdone = function (e) {};
scwin.sbm_HblNoChange_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_frtMapping_freight_submitdone = function (e) {};
scwin.sbm_retrieve_frtMapping_freight_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_Retrieve_onclick = function (e) {
  scwin.f_Retrieve();
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
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_Copy_onclick = function (e) {
  scwin.f_Copy();
};
scwin.btn_FileDownload_onclick = function (e) {
  scwin.f_FileDownload();
};
scwin.btn_Create_freight_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Update_freight_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_Save_freight_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Delete_freight_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_Cancel_freight_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_AddRowSelling_freight_onclick = function (e) {
  scwin.f_AddRowMulti_freight("Selling");
};
scwin.btn_Delete_freightRowSelling_freight_onclick = function (e) {
  scwin.f_DeleteRow_freight("Selling");
};
scwin.btn_Delete_freightAllRowSelling_freight_onclick = function (e) {
  scwin.f_DeleteAllRow_freight("Selling");
};
scwin.btn_UndoRowSelling_freight_onclick = function (e) {
  scwin.f_UndoRow_freight("Selling");
};
scwin.btn_AddRowPartner_freight_onclick = function (e) {
  scwin.f_AddRowMulti_freight("Partner");
};
scwin.btn_Delete_freightRowPartner_freight_onclick = function (e) {
  scwin.f_DeleteRow_freight("Partner");
};
scwin.btn_Delete_freightAllRowPartner_freight_onclick = function (e) {
  scwin.f_DeleteAllRow_freight("Partner");
};
scwin.btn_UndoRowPartner_freight_onclick = function (e) {
  scwin.f_UndoRow_freight("Partner");
};
scwin.btn_AddRowBuying_freight_onclick = function (e) {
  scwin.f_AddRowMulti_freight("Buying");
};
scwin.btn_Delete_freightRowBuying_freight_onclick = function (e) {
  scwin.f_DeleteRow_freight("Buying");
};
scwin.btn_Delete_freightAllRowBuying_freight_onclick = function (e) {
  scwin.f_DeleteAllRow_freight("Buying");
};
scwin.btn_UndoRowBuying_freight_onclick = function (e) {
  scwin.f_UndoRow_freight("Buying");
};
scwin.btn_RetrieveTmp_freight_onclick = function (e) {
  scwin.f_RetrieveTmp_freight();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:200px;',id:'ed_blno',placeholder:'',class:'',ref:'data:ds_HouseFreightInfo_freight.blno',mandatory:'true'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_shipGb',class:'',ref:'data:ds_HouseBillInfo.shipgb'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L TYPE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lrgb',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',placeholder:'',style:'width:200px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.btn_Retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Main',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Other',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'Freight',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:121px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 15%;'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_shcd',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_shcd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Country',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_shCtcd',placeholder:'',style:'width: 85px;',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_shCtcd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Departure',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_dp',codeId:'ed_dpcd',nameId:'txt_dpnm'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_ergb',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Reshipment'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'R'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'ta_shnm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VIA/TO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dscd1',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_dscd2',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_dscd3',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ascd',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_ascd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'By(Carrier)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd1',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd2',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_ptcd3',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Carrier',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cacd',placeholder:'',style:'width: 85px;',ref:'data:ds_HouseBillInfo.cacd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_canm',placeholder:'',style:'',ref:'data:ds_HouseBillInfo.canm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Airport of Destination',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_dsnm1',placeholder:'',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_nocd',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_nocd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Onboard Date ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ondt',pickerType:'dynamic',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_ontime',style:'width: 50px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'FLT No.(FULL)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fltno',placeholder:'',style:'width: 85px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_nonm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cncd',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cncd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bankgb',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BANK'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Country ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnCtcd',placeholder:'',style:'width: 85px;',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cnCtcd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Arrival Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_avdt',pickerType:'dynamic',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_avtime',style:'width: 50px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_itcd',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_itcd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'ta_cnnm',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Account Information',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_acif1',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_inco',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_itnm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WT/VAL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_frpc1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_frpc2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Other',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_otpc1',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_otpc2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'EDI Item',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_ngnm1',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'D.V Carriage',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'D.V Customs',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Insurance',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td bl1',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_insu',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_dvct',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_insu',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac bl1',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'P/O Number',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'L/C Number',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C/I Number',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl1'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_pono',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_lcno',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_cino',placeholder:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Result Date ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_cjdt',pickerType:'dynamic',style:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rgno',placeholder:'',style:'width:200px;',ref:'data:ds_HouseBillInfo.rgno'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'INV Billing Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arInv',pickerType:'dynamic',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'ed_ntcd',placeholder:'',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_ntcd',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_NotifySame',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Same'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_NotifyCopy',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PTN Billing Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arHp',pickerType:'dynamic',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'ta_ntnm',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tax Date ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arTax',pickerType:'dynamic',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:18%;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:18%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PKG',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mftpac',codeId:'ed_mftpacd',nameId:'txt_unit'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'G/WGT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mftwht',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C/WGT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tcwht',placeholder:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tax Amount ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_arTaxAmount',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_sa',codeId:'ed_sacd',nameId:'txt_sanm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_blpic',codeId:'ed_blpic',nameId:'txt_blpic'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'UCR',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_ucrNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_dept',type:'button',class:'btn link'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Department'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',id:'udc_dept',codeId:'ed_dept',nameId:'txt_deptnm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Warehouse',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_ware',codeId:'ed_warecd',nameId:'txt_warenm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Issue Agent',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',hideName:'Y',id:'udc_ag',codeId:'ed_agcd',nameId:'txt_agnm'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'lc_contractNo',class:'',ref:'data:ds_HouseBillInfo.contractNo',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Contract No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cucd_freight',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_HouseFreightInfo_freight.cucd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하기장소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_mware',codeId:'ed_mwarecd',nameId:'txt_mwarenm'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Handling Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' ',id:'txt_hdif1',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_hdif2',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_hdif3',placeholder:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Arrival Notice',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_ArrivalInfo',id:'gr_freight',style:'',visibleRowNum:'2',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'anno',inputType:'text',style:'',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'andt',inputType:'text',style:'',value:'Arrival Date',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'annm',inputType:'text',style:'',value:'PIC',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'anno',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'andt',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'annm',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'More Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Special Cargo',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_sccd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HS Code',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_hscd',placeholder:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'B/L Delivery Information ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_dvdt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Undertaker',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_cattn',placeholder:'',style:''}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Currency',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:70px;',id:'lc_exgb_freight',class:'',ref:'data:ds_HouseFreightInfo_freight.exgb'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 150px;',id:'lc_exgb_freight',class:'',ref:'data:ds_HouseFreightInfo_freight.exgb'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_exdt_freight',pickerType:'dynamic',style:'',ref:'data:ds_HouseFreightInfo_freight.exdt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rate_freight',placeholder:'',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.rate',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'US Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_exrate_freight',placeholder:'',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.exrate',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Tariff_freight',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_CustomerChange_freight',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Customer Change'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_exRateChange_freight',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Ex-Rate Change'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ResultdateChange_freight',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Result Date Change'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Selling List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_SellingFreightInfo_freight',style:'',autoFit:'allColumn',id:'gr_SellingFreightInfo_freight',visibleRowNum:'3',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgClntNo',value:'SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',value:'Customer',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareEngCd',value:'Cust Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareEngNm',value:'F/Code',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareGrpCd',value:'F/Name',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellItemCd',value:'Initial',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crcCd',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',value:'CURR',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRate',value:'CURR',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',value:'Ex-Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'Unit',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'grossWt',value:'QTY',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rateCls',value:'G/Weight',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commItem',value:'R/C',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgWt',value:'C/Item',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',value:'C/Weight',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmt',value:'Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',value:'Amount(W)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmtFcrc',value:'VAT',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',value:'Amount',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',value:'Result Date',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',value:'INV/No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'vatYn',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'bilgClntNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareEngCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'fareEngNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareGrpCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellItemCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'exRate',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'qty',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CASE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'G/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rateCls',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commItem',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgWt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'certiNo',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatYn',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_SbilgClntNm_freight',placeholder:'',class:'tar',ref:'data:ds_SellingFreightInfo_freight.bilgClntNm'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_SfareEngNm_freight',placeholder:'',class:'tar',ref:'data:ds_SellingFreightInfo_freight.fareEngNm'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_Selling_utotal',placeholder:'',class:'tar'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_Selling_total_freight',placeholder:'',class:'tar'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_Selling_total_freightVat',placeholder:'',class:'tar'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_rowMake_selling',placeholder:'',class:'tar'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnDelYn:'Y',EngYn:'Y'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete_freightAllRowSelling_freight',style:'',type:'button','ev:onclick':'scwin.btn_Delete_freightAllRowSelling_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Partner List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_PartnerFreightInfo_freight',id:'gr_PartnerFreightInfo_freight',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',value:'Customer',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrCls',inputType:'text',value:'Cust Name',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',value:'D/C',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',value:'F/Code',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',value:'F/Name',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',value:'Initial',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',value:'통합매출입코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',value:'CURR',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',value:'Ex-Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qty',value:'Unit',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',value:'QTY',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',value:'C/Weight',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmtFcrc',value:'Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',value:'Amount',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',value:'Amount(W)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',value:'Result Date',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',value:'INV/No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',value:'Remark',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclNo',value:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclYn',value:'Vehicle No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',value:'vehclYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'업로드 담당자',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrCls',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'qty',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CASE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'G/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'certiNo',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclNo',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regName',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_PbilgClntNm_freight',placeholder:'',style:'width:150px;',ref:'data:ds_PartnerFreightInfo_freight.bilgClntNm'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_PfareEngNm_freight',placeholder:'',style:'width:150px;',ref:'data:ds_PartnerFreightInfo_freight.fareEngNm'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_Partner_utotal',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Partner_total',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Partner_totalVat',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_rowMake_partner',placeholder:'',style:'width:50px;'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete_freightAllRowPartner_freight',style:'',type:'button','ev:onclick':'scwin.btn_Delete_freightAllRowPartner_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Buying List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_BuyingFreightInfo_freight',id:'gr_BuyingFreightInfo_freight',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',value:'Type',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',value:'Customer',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',value:'Cust Name',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',value:'F/Code',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'100',value:'F/Name'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'100',value:'Initial',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'120',value:'통합매출입코드',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',value:'CURR',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRate',displayMode:'label',value:'CURR',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',displayMode:'label',value:'Ex-Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',value:'Unit',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',value:'QTY',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsUpr',displayMode:'label',value:'C/Weight',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmt',displayMode:'label',value:'Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',value:'Amount(W)',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',value:'VAT',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',value:'Amount',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellDeptCd',displayMode:'label',value:'Result Date',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellDeptNm',displayMode:'label',value:'inner Dept',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',displayMode:'label',value:'Dept Name',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',value:'INV/No'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclNo',displayMode:'label',value:'vatYn',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclYn',displayMode:'label',value:'Vehicle No',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',displayMode:'label',value:'vehclYn',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label',value:'업로드 담당자',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Agent'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'100',class:'',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'textImage',width:'100',class:'',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'100',class:'',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'100',class:'',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'120',class:'',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'exRate',displayMode:'label',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'qty',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CASE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'G/WT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'sellDeptCd',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'sellDeptNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regName',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_BpchsClntNm_freight',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo_freight.pchsClntNm'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_BfareEngNm_freight',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo_freight.fareEngNm'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_BsellDeptNm_freight',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo_freight.sellDeptNm'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_utotal',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_total_freight',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_totalVat',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_totalVatSum',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_rowMake_buying',placeholder:'',style:'width:50px;'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'N',btnDelYn:'Y',style:''}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete_freightAllRowBuying_freight',style:'',type:'button','ev:onclick':'scwin.btn_Delete_freightAllRowBuying_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Prepaid(CUR) / Collect(CUR / KRW)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pfchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.pfchg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Charge ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cfuchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cfuchg'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cfchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cfchg'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pvchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.pvchg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C.C Fee',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cvuchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cvuchg'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cvchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cvchg'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pachg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.pachg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Handling Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cauchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cauchg'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cachg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.cachg'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ptchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.ptchg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctuchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.ctuchg'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctchg_freight',style:'width:150px;',ref:'data:ds_HouseFreightInfo_freight.ctchg'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_selling_total_freight',style:'width:150px;',ref:'data:ds_profit_freight.sellAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_purchase_total_freight',style:'width:150px;',ref:'data:ds_profit_freight.pchsAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'손익',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_profit_total_freight',style:'width:150px;',ref:'data:ds_profit_freight.profit'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마진율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_profitRate_total_freight',style:'width:150px;',ref:'data:ds_profit_freight.profitRate'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'이전 실적 조회',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_blnoTmp_freight',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_RetrieveTmp_freight',style:'',type:'button','ev:onclick':'scwin.btn_RetrieveTmp_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Find',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_HouseLink_freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_CustInv_freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cust INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_PartnerInv_freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_PaymentInv_freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Plsheet_freight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B.Sheet'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_GetFreight',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Get Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_APISetup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Create_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete_freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_MNF',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MNF'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Find_main',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_PlSheet',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B.Sheet'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Dimens',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DIMEN\'S'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_MasterBill',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Master B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Print',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_HawbNoChange',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H No.CHG'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_CustInv_main',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cust INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_PartnerInv_main',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_PaymentInv_main',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_FileDownload',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_FileDownload_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Upload'}]}]}]}]}]}]}]}]}]})