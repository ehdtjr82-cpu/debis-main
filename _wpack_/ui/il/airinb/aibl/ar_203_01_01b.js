/*amd /ui/il/airinb/aibl/ar_203_01_01b.xml 165052 7183ddf6330547db5532780607b4620ac23f8f0581427f7fc75e35cb697f0a38 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_SearchInfo',name:'HouseBillSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'text',name:'법인코드'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'text',name:'Consol No'}},{T:1,N:'w2:key',A:{id:'blno',dataType:'text',name:'House B/L No'}},{T:1,N:'w2:key',A:{id:'iogb',dataType:'text',name:'Bound Type'}},{T:1,N:'w2:key',A:{id:'srno',dataType:'text',name:'srno'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HouseBillInfo',name:'HouseBillInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'House B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'mblno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'iogb',dataType:'string',name:'Bound Type'}},{T:1,N:'w2:column',A:{id:'shcd',dataType:'string',name:'Shipper Code'}},{T:1,N:'w2:column',A:{id:'shnm1',dataType:'string',name:'Shipper Name'}},{T:1,N:'w2:column',A:{id:'shnm2',dataType:'string',name:'Shipper Address 1'}},{T:1,N:'w2:column',A:{id:'shnm3',dataType:'string',name:'Shipper Address 2'}},{T:1,N:'w2:column',A:{id:'shnm4',dataType:'string',name:'Shipper Address 3'}},{T:1,N:'w2:column',A:{id:'shnm5',dataType:'string',name:'Shipper Address 4'}},{T:1,N:'w2:column',A:{id:'cncd',dataType:'string',name:'Consignee Code'}},{T:1,N:'w2:column',A:{id:'bankgb',dataType:'number',name:'Consignee Bank 여부'}},{T:1,N:'w2:column',A:{id:'cnnm1',dataType:'string',name:'Consignee Name'}},{T:1,N:'w2:column',A:{id:'cnnm2',dataType:'string',name:'Consignee Address 1'}},{T:1,N:'w2:column',A:{id:'cnnm3',dataType:'string',name:'Consignee Address 2'}},{T:1,N:'w2:column',A:{id:'cnnm4',dataType:'string',name:'Consignee Address 3'}},{T:1,N:'w2:column',A:{id:'cnnm5',dataType:'string',name:'Consignee Address 4'}},{T:1,N:'w2:column',A:{id:'rggb',dataType:'string',name:'사업자 (C)/ 개인구분 (P)'}},{T:1,N:'w2:column',A:{id:'rgno',dataType:'string',name:'사업자등록번호'}},{T:1,N:'w2:column',A:{id:'ntcd',dataType:'string',name:'Notify  Code'}},{T:1,N:'w2:column',A:{id:'ntnm1',dataType:'string',name:'Notify Name'}},{T:1,N:'w2:column',A:{id:'ntnm2',dataType:'string',name:'Notify Address 1'}},{T:1,N:'w2:column',A:{id:'ntnm3',dataType:'string',name:'Notify Address 2'}},{T:1,N:'w2:column',A:{id:'ntnm4',dataType:'string',name:'Notify Address 3'}},{T:1,N:'w2:column',A:{id:'ntnm5',dataType:'string',name:'Notify Address 4'}},{T:1,N:'w2:column',A:{id:'sacgb',dataType:'number',name:'Same As Consignee 여부'}},{T:1,N:'w2:column',A:{id:'agcd',dataType:'string',name:'Agent Code'}},{T:1,N:'w2:column',A:{id:'agnm',dataType:'string',name:'Agent Name'}},{T:1,N:'w2:column',A:{id:'dpcd',dataType:'string',name:'Departure Code'}},{T:1,N:'w2:column',A:{id:'dpnm',dataType:'string',name:'Departure Name'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'Onboard Date'}},{T:1,N:'w2:column',A:{id:'fltno',dataType:'string',name:'Flight No'}},{T:1,N:'w2:column',A:{id:'dscd1',dataType:'string',name:'Destination Code'}},{T:1,N:'w2:column',A:{id:'dsnm1',dataType:'string',name:'Destination Name'}},{T:1,N:'w2:column',A:{id:'avdt',dataType:'string',name:'Arrival Date'}},{T:1,N:'w2:column',A:{id:'mftpkg',dataType:'number',name:'Package'}},{T:1,N:'w2:column',A:{id:'cbm',dataType:'number',name:'CBM'}},{T:1,N:'w2:column',A:{id:'mftwht',dataType:'number',name:'Gross Weight (KG)'}},{T:1,N:'w2:column',A:{id:'rqrt',dataType:'number',name:'Gross Weight (LB)'}},{T:1,N:'w2:column',A:{id:'kggb',dataType:'string',name:'Weight Unit'}},{T:1,N:'w2:column',A:{id:'tcwht',dataType:'number',name:'Chargeable Weight (KG)'}},{T:1,N:'w2:column',A:{id:'cwht2',dataType:'number',name:'Chargeable Weight (LB)'}},{T:1,N:'w2:column',A:{id:'warecd',dataType:'string',name:'Warehouse Code'}},{T:1,N:'w2:column',A:{id:'warenm',dataType:'string',name:'Warehouse Name'}},{T:1,N:'w2:column',A:{id:'itcd',dataType:'string',name:'Item Code'}},{T:1,N:'w2:column',A:{id:'itnm',dataType:'string',name:'Item Name'}},{T:1,N:'w2:column',A:{id:'cgtype',dataType:'string',name:'Cargo Type'}},{T:1,N:'w2:column',A:{id:'indate',dataType:'string',name:'Pickup Date'}},{T:1,N:'w2:column',A:{id:'dvct',dataType:'string',name:'세관신고가격'}},{T:1,N:'w2:column',A:{id:'pono',dataType:'string',name:'P/O No'}},{T:1,N:'w2:column',A:{id:'lcno',dataType:'string',name:'L/C No'}},{T:1,N:'w2:column',A:{id:'cino',dataType:'string',name:'Commercial Invoice No'}},{T:1,N:'w2:column',A:{id:'invCucd',dataType:'string',name:'Invoice Currency Type'}},{T:1,N:'w2:column',A:{id:'invAmt',dataType:'number',name:'Invoice Amount'}},{T:1,N:'w2:column',A:{id:'sacd',dataType:'string',name:'Sales Code'}},{T:1,N:'w2:column',A:{id:'sanm',dataType:'string',name:'Sales Name'}},{T:1,N:'w2:column',A:{id:'dept',dataType:'string',name:'Department Code'}},{T:1,N:'w2:column',A:{id:'deptnm',dataType:'string',name:'Department Name'}},{T:1,N:'w2:column',A:{id:'ergb',dataType:'string',name:'Import / Reshipment 구분'}},{T:1,N:'w2:column',A:{id:'endgb',dataType:'number',name:'마감 구분'}},{T:1,N:'w2:column',A:{id:'ascd',dataType:'string',name:'Customer Code'}},{T:1,N:'w2:column',A:{id:'asnm',dataType:'string',name:'Customer Name'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'hdif1',dataType:'string',name:'Handling Information 1'}},{T:1,N:'w2:column',A:{id:'hdif2',dataType:'string',name:'Handling Information 2'}},{T:1,N:'w2:column',A:{id:'hdif3',dataType:'string',name:'Handling Information 3'}},{T:1,N:'w2:column',A:{id:'cjdt',dataType:'string',name:'실적일자'}},{T:1,N:'w2:column',A:{id:'ctcd',dataType:'string',name:'Country Code'}},{T:1,N:'w2:column',A:{id:'ctnm',dataType:'string',name:'Country Name'}},{T:1,N:'w2:column',A:{id:'arcd',dataType:'string',name:'Location Code'}},{T:1,N:'w2:column',A:{id:'arnm',dataType:'string',name:'Location Name'}},{T:1,N:'w2:column',A:{id:'pncd',dataType:'string',name:'Partner Code'}},{T:1,N:'w2:column',A:{id:'pnnm',dataType:'string',name:'Partner Name'}},{T:1,N:'w2:column',A:{id:'sccd',dataType:'string',name:'Special Cargo 여부'}},{T:1,N:'w2:column',A:{id:'hscd',dataType:'string',name:'hscd'}},{T:1,N:'w2:column',A:{id:'inpid',dataType:'string',name:'Input Id'}},{T:1,N:'w2:column',A:{id:'updid',dataType:'string',name:'Update Id'}},{T:1,N:'w2:column',A:{id:'itgb',dataType:'string',name:'itgb'}},{T:1,N:'w2:column',A:{id:'srno',dataType:'string',name:'srno'}},{T:1,N:'w2:column',A:{id:'oldmhno',dataType:'string',name:'oldmhno'}},{T:1,N:'w2:column',A:{id:'cucd',dataType:'string',name:'통화'}},{T:1,N:'w2:column',A:{id:'exdt',dataType:'string',name:'환율 일'}},{T:1,N:'w2:column',A:{id:'rate',dataType:'number',name:'rate'}},{T:1,N:'w2:column',A:{id:'ngnm1',dataType:'string',name:'Edi Item'}},{T:1,N:'w2:column',A:{id:'exrate',dataType:'number',name:'us_rate'}},{T:1,N:'w2:column',A:{id:'shipgb',dataType:'string',name:'shipgb'}},{T:1,N:'w2:column',A:{id:'ascdPic',dataType:'string',name:'ascdPic'}},{T:1,N:'w2:column',A:{id:'ascdPicnm',dataType:'string',name:'ascdPicnm'}},{T:1,N:'w2:column',A:{id:'pncdPic',dataType:'string',name:'pncdPic'}},{T:1,N:'w2:column',A:{id:'pncdPicnm',dataType:'string',name:'pncdPicnm'}},{T:1,N:'w2:column',A:{id:'frpc',dataType:'string',name:'Freight Type'}},{T:1,N:'w2:column',A:{id:'otpc',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'mwarecd',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'mwarenm',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'mwareClsCd',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'ucrNo',dataType:'string',name:'Other Type'}},{T:1,N:'w2:column',A:{id:'shCtcd',dataType:'string',name:'shCtcd'}},{T:1,N:'w2:column',A:{id:'cnCtcd',dataType:'string',name:'cnCtcd'}},{T:1,N:'w2:column',A:{id:'wareKndCd',dataType:'string',name:'wareKndCd'}},{T:1,N:'w2:column',A:{id:'pic',dataType:'string',name:'pic'}},{T:1,N:'w2:column',A:{id:'invBillingDate',name:'invBillingDate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ptnBillingDate',name:'ptnBillingDate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txtDate',name:'txtDate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txtAmount',name:'txtAmount',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hitekContents',name:'hitekContents'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'zfblno',dataType:'string',name:'zfblno'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ArrivalInfo',name:'ArrivalInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'anno',dataType:'string',name:'SEQ'}},{T:1,N:'w2:column',A:{id:'andt',dataType:'string',name:'Arrival Date'}},{T:1,N:'w2:column',A:{id:'annm',dataType:'string',name:'PIC'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeliveryInfo',name:'DeliveryInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dvdt',dataType:'string',name:'B/L Delivery Date'}},{T:1,N:'w2:column',A:{id:'cattn',dataType:'string',name:'Consignee 담당자명'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_CustomerBookingInfo',name:'CustomerBookingInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'srno',dataType:'string',name:'Booking No'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'Onboard Date'}},{T:1,N:'w2:column',A:{id:'dscd',dataType:'string',name:'Destination Code'}},{T:1,N:'w2:column',A:{id:'ascd',dataType:'string',name:'Customer Code'}},{T:1,N:'w2:column',A:{id:'fltno',dataType:'string',name:'Flight No'}},{T:1,N:'w2:column',A:{id:'whcd',dataType:'string',name:'Warehouse Code'}},{T:1,N:'w2:column',A:{id:'whnm',dataType:'string',name:'Warehouse Name'}},{T:1,N:'w2:column',A:{id:'itcd',dataType:'string',name:'Item Code'}},{T:1,N:'w2:column',A:{id:'itnm',dataType:'string',name:'Item Name'}},{T:1,N:'w2:column',A:{id:'sacd',dataType:'string',name:'Sales Code'}},{T:1,N:'w2:column',A:{id:'sanm',dataType:'string',name:'Sales Name'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_MasterInfo',name:'MasterInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shcd',dataType:'string',name:'Shipper Code'}},{T:1,N:'w2:column',A:{id:'shnm1',dataType:'string',name:'Shipper Name'}},{T:1,N:'w2:column',A:{id:'exdt',dataType:'string',name:'환율 일'}},{T:1,N:'w2:column',A:{id:'rate',dataType:'string',name:'rate'}},{T:1,N:'w2:column',A:{id:'exrate',dataType:'string',name:'us_rate'}},{T:1,N:'w2:column',A:{id:'cucd',dataType:'string',name:'통화'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'Onboard Date'}},{T:1,N:'w2:column',A:{id:'fltno',dataType:'string',name:'Flight No'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HouseBillCheck',name:'HouseBillCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'House B/L No'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_comCode',name:'comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'text',name:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'text',name:'queryId'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'text',name:'param1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'text',name:'param2'}},{T:1,N:'w2:key',A:{id:'param3',dataType:'text',name:'param3'}},{T:1,N:'w2:key',A:{id:'param4',dataType:'text',name:'param4'}},{T:1,N:'w2:key',A:{id:'param5',dataType:'text',name:'param5'}},{T:1,N:'w2:key',A:{id:'param6',dataType:'text',name:'param6'}},{T:1,N:'w2:key',A:{id:'param7',dataType:'text',name:'param7'}},{T:1,N:'w2:key',A:{id:'param8',dataType:'text',name:'param8'}},{T:1,N:'w2:key',A:{id:'param9',dataType:'text',name:'param9'}},{T:1,N:'w2:key',A:{id:'param10',dataType:'text',name:'param10'}},{T:1,N:'w2:key',A:{id:'param11',dataType:'text',name:'param11'}},{T:1,N:'w2:key',A:{id:'param12',dataType:'text',name:'param12'}},{T:1,N:'w2:key',A:{id:'param13',dataType:'text',name:'param13'}},{T:1,N:'w2:key',A:{id:'param14',dataType:'text',name:'param14'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeParam',name:'DeptChangeParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'modrNo',dataType:'string',name:'modrNo'}},{T:1,N:'w2:column',A:{id:'hodrNo',dataType:'string',name:'hodrNo'}},{T:1,N:'w2:column',A:{id:'dept',dataType:'string',name:'Department Code'}},{T:1,N:'w2:column',A:{id:'deptnm',dataType:'string',name:'Department Name'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',name:'DeptChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HblNoChangeParam',name:'HblNoChangeParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'blNo'}},{T:1,N:'w2:column',A:{id:'newblNo',dataType:'string',name:'newblNo'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HblNoChangeResult',name:'HblNoChangeResult'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_InvoiceCheckParam',name:'InvoiceCheckParam'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'blNo'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'seaAirCls'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'mblHblCls'}},{T:1,N:'w2:column',A:{id:'gbun',dataType:'string',name:'b/l 운임 구분 (\'B\',\'F\')'}},{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_InvoiceCheck',name:'InvoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',dataType:'string',name:'spRtn'}},{T:1,N:'w2:column',A:{id:'spMsg',dataType:'string',name:'spMsg'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_departmentInfo',name:'departmentInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',dataType:'string',name:'CODE'}},{T:1,N:'w2:column',A:{id:'NAME',dataType:'string',name:'NAME'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_customerInfo',name:'customerInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',dataType:'string',name:'col1'}},{T:1,N:'w2:column',A:{id:'col2',dataType:'string',name:'col2'}},{T:1,N:'w2:column',A:{id:'col3',dataType:'string',name:'col3'}},{T:1,N:'w2:column',A:{id:'col4',dataType:'string',name:'col4'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',name:'hmhno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'string',name:'code'}},{T:1,N:'w2:column',A:{id:'name',dataType:'string',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoAirDeptChangeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_DeptChangeParam","key":"IN_DS1"},{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_HblNoChange',action:'/il.comm.util.CoAirHblNoChangeCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_HblNoChangeParam","key":"IN_DS1"},{"id":"ds_HblNoChangeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_HblNoChangeResult","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_InvoiceCheckParam","key":"IN_DS1"},{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.airinb.aibl.RetrieveAirImpHouseCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_HouseBillInfo","key":"OUT_DS1"},{"id":"ds_ArrivalInfo","key":"OUT_DS2"},{"id":"ds_DeliveryInfo","key":"OUT_DS3"},{"id":"ds_hitekContents","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_HouseBillInfo","key":"OUT_DS1"},{"id":"ds_ArrivalInfo","key":"OUT_DS2"},{"id":"ds_DeliveryInfo","key":"OUT_DS3"},{"id":"ds_hitekContents","key":"OUT_DS4"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.airinb.aibl.SaveAirImpHouseCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"ds_HouseBillInfo","key":"IN_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBooking',action:'/il.airinb.aibl.RetrieveAirImpHouseBookingInfoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_CustomerBookingInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_CustomerBookingInfo","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveMaster',action:'/il.airinb.aibl.RetrieveAirImpHouseMasterInfoCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_MasterInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_MasterInfo","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveHouseBillCheck',action:'/il.airinb.aibl.RetrieveAirImpHblnoCheckCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_HouseBillCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_HouseBillCheck","key":"OUT_DS1"}]',mediatype:'application/json','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mode:'synchronous',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',mediatype:'application/json','ev:submiterror':'',target:'data:json,GAUCE',processMsg:'$blank'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// 경로     : 해외물류
// 작 성 자 : 김용호
// 작 업 일 : 2026-01-19
// 사용계정 : 내부
// 비고     : House Air Waybill(Import)
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
//--------------------------------------------------------------------------
//							메세지 상수 선언
//--------------------------------------------------------------------------
scwin.MSG_LO_WRN_001 = "@ 에 등록 되어 있어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_002 = "해당 B/L 번호로 복사 하시겠습니까?";
scwin.MSG_LO_WRN_005 = "이미 인보이스  발행 되어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_006 = "이미 운임이  발행 되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_007 = "House B/L No 가 변경 되었습니다.";
scwin.MSG_LO_WRN_008 = "이미 전표가 발행  되어 변경 불가능 합니다.";
scwin.MSG_LO_WRN_009 = "Department 가 변경 되었습니다.";
scwin.MSG_LO_WRN_010 = "1GG 부서 코드는 사용하실 수 없습니다. ";
scwin.MSG_LO_WRN_013 = "Customer와 Dept가 일치하지 않습니다. \nCustomer Code 화면에서 정보를 확인하세요.";

//--------------------------------------------------------------------------
// 전역 변수
//--------------------------------------------------------------------------
scwin.cvsslMgntNo = "";
scwin.p_kcomcd = "";
scwin.p_blno = "";
scwin.p_mblno = "";
scwin.p_type = "";
scwin.p_dpcd = "";
scwin.p_dpnm = "";
scwin.userId = "";
scwin.strCurDate = "";
scwin.vLobranCd = "";
scwin.vLobranNm = "";
scwin.processFlag = "";
scwin.actionFlag = "";
scwin.linkType = 0;
scwin.spRtn = "";
scwin.spMsg = "";
scwin.freightYn = "";

// hidden/display:none -> 화면 변수
scwin.hd_iogb = "I";
scwin.hd_kcomcd = "DBEX";
scwin.hd_oldmhno = "";
scwin.hd_otpc = "";
scwin._comboQueue = Promise.resolve();
scwin._pick = function (obj, path, defVal) {
  if (!path) return obj;
  var cur = obj;
  var parts = String(path).split(".");
  for (var i = 0; i < parts.length; i++) {
    if (cur == null) return defVal;
    cur = cur[parts[i]];
  }
  return cur == null ? defVal : cur;
};
scwin._applyToDataList = function (ds, data) {
  if (!ds) return;
  var list = data;
  if (list && list.list && Array.isArray(list.list)) list = list.list;
  if (list && list.GAUCE && Array.isArray(list.GAUCE)) list = list.GAUCE;
  if (!Array.isArray(list)) list = list ? [list] : [];
  if (ds.removeAll) ds.removeAll();
  if (typeof ds.setJSON === "function") {
    ds.setJSON(list);
    return;
  }
  for (var i = 0; i < list.length; i++) {
    ds.insertRow(ds.getRowCount());
    var row = ds.getRowPosition();
    var obj = list[i] || {};
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        ds.setCellData(row, k, obj[k]);
      }
    }
  }
};
scwin.execComboAndCopy = function (params, options) {
  options = options || {};
  var target = options.target;
  var responsePath = options.responsePath || "GAUCE";
  var transform = options.transform;
  if (!target) throw new Error("options.target(DataList) is required");
  scwin._comboQueue = scwin._comboQueue.then(function () {
    dma_comCode.setJSON(params);
    return $c.sbm.execute($p, sbm_comCode).then(function (e) {
      var json = e && e.responseJSON ? e.responseJSON : {};
      var data = scwin._pick(json, responsePath, null);
      if (transform) data = transform(data, e);
      scwin._applyToDataList(target, data);
      return e;
    });
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
    var val = decodeURIComponent((kv[1] || "").replace(/\\+/g, " "));
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
scwin._resetHiddenFields = function () {
  scwin.hd_oldmhno = "";
  scwin.hd_otpc = "";
};
scwin._syncHiddenFromHouseInfo = function () {
  var row = ds_HouseBillInfo.getRowPosition();
  if (row < 0) row = 0;
  scwin.hd_oldmhno = ds_HouseBillInfo.getCellData(row, "oldmhno") || "";
  scwin.hd_otpc = ds_HouseBillInfo.getCellData(row, "otpc") || "";
  scwin.hd_kcomcd = ds_HouseBillInfo.getCellData(row, "kcomcd") || scwin.hd_kcomcd;
  scwin.hd_iogb = ds_HouseBillInfo.getCellData(row, "iogb") || scwin.hd_iogb;
};
scwin._syncHiddenToHouseInfo = function () {
  var row = ds_HouseBillInfo.getRowPosition();
  if (row < 0) row = 0;
  ds_HouseBillInfo.setCellData(row, "oldmhno", scwin.hd_oldmhno);
  ds_HouseBillInfo.setCellData(row, "otpc", scwin.hd_otpc);
};
scwin.onpageload = function () {
  // 세션/사용자
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  scwin.vLobranCd = $c.data.getMemInfo($p, "lobranCd") || "";
  scwin.vLobranNm = $c.data.getMemInfo($p, "lobranNm") || "";

  // 파라미터
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") || "";
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.p_blno = $c.data.getParameter($p, "blno") || "";
  scwin.p_mblno = $c.data.getParameter($p, "mblno") || "";
  scwin.p_type = $c.data.getParameter($p, "type") || "";
  scwin.p_dpcd = $c.data.getParameter($p, "dpcd") || "";
  scwin.p_dpnm = $c.data.getParameter($p, "dpnm") || "";

  // 날짜
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  scwin.f_initSetTab();
  const codeOptions = [{
    grpCd: "IL006",
    compID: "rd_itgb"
  }, {
    grpCd: "IL011",
    compID: "lc_mwareClsCd"
  }, {
    grpCd: "IL055",
    compID: "lc_wareKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callbackCommonCode);
};
scwin.onUdcCompleted = async function () {
  scwin.f_Set("INIT");
  scwin.f_getParametrSetting(); // link처리	
  ed_blno.focus();
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = function () {
  var kcomcd = scwin.p_kcomcd || "";
  var blno = scwin.p_blno || "";
  var type = scwin.p_type || "";
  var mblno = scwin.p_mblno || "";
  var dpcd = scwin.p_dpcd || "";
  var dpnm = scwin.p_dpnm || "";
  if (blno == "null" || blno == "" || type == "HawbCreate") {
    if (type == "HawbCreate") {
      scwin.f_Create();
      ed_mblno.setValue(mblno);
      ed_dpcd.setValue(dpcd);
      // txt_dpnm.setValue(dpnm);
      // 출발지 이벤트 발생 시켜서 국가 가져 오기 위함
      if ($c.str.trim($p, ed_dpcd.getValue()) != "") {
        scwin.f_PopUp("Departure", "T", "F", "F");
      }
    }
    return false;
  }
  scwin.hd_kcomcd = kcomcd;
  ed_blno.setValue(blno);
  scwin.linkType = 1;
  scwin.f_MhnoLoading();
  scwin.f_Retrieve();
};

//--------------------------------------------------------------------------//
// 화면 기본값
//--------------------------------------------------------------------------//
scwin.f_DefaultValue = function (gubun) {
  switch (gubun) {
    case "Create":
      lc_kggb.setSelectedIndex(0);
      lc_ergb.setSelectedIndex(0);
      rd_itgb.setSelectedIndex(0);
      rd_sccd.setValue("N");
      rd_rggb.setValue("1");
      ed_blno.setValue("");
      lc_hmhno.setValue("");
      ed_blno.focus();
      rd_frpc.setValue("CC");
      chb_otpc1.setValue("0");
      chb_otpc2.setValue("0");
      scwin._resetHiddenFields();

      //추가
      ed_mftpkg.setValue("0");
      ed_cbm.setValue("0");
      ed_mftwht.setValue("0");
      ed_rqrt.setValue("0");
      ed_tcwht.setValue("0");
      ed_cwht2.setValue("0");
      ed_invAmt.setValue("0");
      break;
    case "Copy":
      lc_hmhno.setValue("");
      ed_srno.setValue("");
      ed_mblno.setValue("");
      scwin.hd_oldmhno = "";
      ed_cjdt.setValue("");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------//
// 화면세팅
//-------------------------------------------------------------------------//
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete, btn_Cancel, btn_FileDownload]);
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, pu_Freight, pu_Plsheet, pu_Master, pu_ArrivalNotice, pu_HawbNoChange, pu_departmentChange, pu_Print]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, pu_Find]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Find, pu_Freight, pu_Plsheet, pu_Master, pu_ArrivalNotice, pu_HawbNoChange, pu_departmentChange, pu_Print]);
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload]);
      scwin.f_DefaultValue("Create");
      scwin.freightYn = "";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Copy, pu_Find, pu_Freight, pu_Plsheet, pu_Master, pu_HawbNoChange, pu_Print]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
  }
  if (scwin.freightYn == "-1") {
    //운임이 발생 됨
    $c.gus.cfDisableObjects($p, [ed_dept, txt_deptnm, img_dept, ed_itcd, txt_itnm, img_itcd]); //운임 발행시 Item, Department Disable
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성/비활성
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [img_shcd, img_cncd, img_ntcd, img_agcd, img_dpcd, img_dscd1, img_warecd, img_mwarecd, img_shCtcd, img_cnCtcd, img_PopUp]);
  $c.gus.cfEnableObjects($p, [img_itcd, img_sacd, img_ascd, img_ctcd, img_pncd, img_dept, img_ascdpic, img_pncdpic]);
};
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [img_shcd, img_cncd, img_ntcd, img_agcd, img_dpcd, img_dscd1, img_warecd, img_mwarecd, img_shCtcd, img_cnCtcd]);
  $c.gus.cfDisableObjects($p, [img_itcd, img_sacd, img_ascd, img_ctcd, img_pncd, img_dept, img_ascdpic, img_pncdpic]);
};

//-------------------------------------------------------------------------//
// Retrieve
//-------------------------------------------------------------------------//
scwin.f_Retrieve = async function () {
  if ($c.str.trim($p, ed_blno.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.focus();
    return false;
  }
  var v_blno = $c.str.trim($p, ed_blno.getValue());
  scwin.f_ProcessBinding(dma_SearchInfo, "HouseBillSearch");
  ds_HouseBillInfo.removeAll();
  ds_ArrivalInfo.removeAll();
  ds_DeliveryInfo.removeAll();
  ds_hitekContents.removeAll();
  var e = await $c.sbm.execute($p, sbm_Retrieve);
  scwin.sbm_Retrieve_submitdone(e);
  ed_blno.setValue(v_blno);
  txt_blpic.setValue("");
  if ($c.str.trim($p, ed_blpic.getValue()) != "") {
    scwin.f_PopUp("B/L PIC", "T");
  }
};

//-------------------------------------------------------------------------//
// Retrieve Booking
//-------------------------------------------------------------------------//
scwin.f_RetrieveBooking = async function () {
  if ($c.str.trim($p, ed_srno.getValue()) == "") {
    return false;
  }
  scwin.f_ProcessBinding(dma_SearchInfo, "RetrieveBookingInfo");
  var e = await $c.sbm.execute($p, sbm_RetrieveBooking);
  await scwin.sbm_RetrieveBooking_submitdone(e);
};

//-------------------------------------------------------------------------//
// Retrieve Master Consol No
//-------------------------------------------------------------------------//
scwin.f_RetrieveMasterConsolNo = async function () {
  if ($c.str.trim($p, ed_mblno.getValue()) != "") {
    scwin.f_ProcessBinding(dma_SearchInfo, "RetrieveMasterConsolNo");
    await $c.sbm.execute($p, sbm_RetrieveMasterConsolNo);
  }
};

//-------------------------------------------------------------------------//
// Retrieve Master Info
//-------------------------------------------------------------------------//
scwin.f_RetrieveMasterInfo = async function () {
  if ($c.str.trim($p, ed_mblno.getValue()) != "") {
    scwin.f_ProcessBinding(dma_SearchInfo, "RetrieveMasterInfo");
    var e = await $c.sbm.execute($p, sbm_RetrieveMaster);
    scwin.sbm_RetrieveMaster_submitdone(e);
  }
};

//-------------------------------------------------------------------------//
// Other Type Setting
//-------------------------------------------------------------------------//
scwin.f_OtherTypeSetting = function () {
  var otpc_value = "";
  if (chb_otpc1.getValue() == "1") {
    otpc_value = "PP";
  }
  if (chb_otpc2.getValue() == "1") {
    otpc_value = "CC";
  }
  if (chb_otpc1.getValue() == "1" && chb_otpc2.getValue() == "1") {
    otpc_value = "PC";
  }
  var row = ds_HouseBillInfo.getRowPosition();
  if (row < 0) row = 0;
  ds_HouseBillInfo.setCellData(row, "otpc", otpc_value);
};

//-------------------------------------------------------------------------//
// Other Type Getting
//-------------------------------------------------------------------------//
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

//-------------------------------------------------------------------------//
// Invoice Check
//-------------------------------------------------------------------------//
scwin.f_InvoiceCheck_All = async function (gbun) {
  var ds = ds_InvoiceCheckParam;
  ds.removeAll();
  ds.insertRow(ds.getRowCount());
  var row = ds.getRowPosition();
  if (row < 0) row = 0;
  var infoRow = ds_HouseBillInfo.getRowPosition();
  if (infoRow < 0) infoRow = 0;
  ds.setCellData(row, "odrNo", ds_HouseBillInfo.getCellData(infoRow, "odrNo"));
  ds.setCellData(row, "mblHblCls", "H");
  ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds.setCellData(row, "seaAirCls", "A");
  ds.setCellData(row, "blNo", $c.str.trim($p, ed_blno.getValue()));
  ds.setCellData(row, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
  ds.setCellData(row, "gbun", gbun == "B" ? "B" : "F");
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  var e = await $c.sbm.execute($p, sbm_InvoiceCheck);
  scwin.sbm_InvoiceCheck_submitdone(e);
  var resRow = ds_InvoiceCheck.getRowPosition();
  if (resRow < 0) resRow = 0;
  scwin.spMsg = ds_InvoiceCheck.getCellData(resRow, "spMsg") || "";
  scwin.spRtn = ds_InvoiceCheck.getCellData(resRow, "spRtn") || "";
  scwin.freightYn = scwin.spRtn;
};

//-------------------------------------------------------------------------//
// Process Binding
//-------------------------------------------------------------------------//
scwin.f_ProcessBinding = function (ds, gubun) {
  switch (gubun) {
    case "HouseBillSearch":
      ds.undo();
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("iogb", scwin.hd_iogb);
      ds.set("blno", ed_blno.getValue() || "");
      ds.set("mhno", lc_hmhno.getValue() || "");
      break;
    case "HouseBillSave":
      ds.setCellData(ds.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds.setCellData(ds.getRowPosition(), "iogb", scwin.hd_iogb);
      ds.setCellData(ds.getRowPosition(), "blno", ed_blno.getValue() || "");
      ds.setCellData(ds.getRowPosition(), "mhno", lc_hmhno.getValue() || "");
      break;
    case "RetrieveBookingInfo":
      ds.undo();
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("iogb", scwin.hd_iogb);
      ds.set("srno", ed_srno.getValue() || "");
      break;
    case "RetrieveMasterInfo":
      ds.undo();
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("iogb", scwin.hd_iogb);
      ds.set("blno", ed_blno.getValue() || "");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------//
// Process Result
//-------------------------------------------------------------------------//
scwin.f_ProcessResult = async function (gubun) {
  switch (gubun) {
    case "NotExistHouseInfo":
      scwin.f_Set("INIT");
      ds_ArrivalInfo.removeAll();
      ds_DeliveryInfo.removeAll();
      ds_hitekContents.removeAll();
      scwin._resetHiddenFields();
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, [ed_blno.getValue()]); //@이(가) 존재하지 않습니다.
      ed_blno.focus();
      break;
    case "ExistHouseInfo":
      scwin._syncHiddenFromHouseInfo();
      scwin.f_OtherTypeGetting();
      scwin.f_Set("RETRIEVE");
      scwin.f_MhnoLoading();
      scwin.f_InvoiceCheck_All("B"); //운임 발생시 ITEM , Department 수정 못 하게 하기 위해 검색
      ed_blno.focus();
      break;
    case "DeleteAction":
      if (ds_ArrivalInfo.getRowCount() == 0) {
        ds_ArrivalInfo.removeAll();
      }
      if (ds_DeliveryInfo.getRowCount() == 0) {
        ds_DeliveryInfo.removeAll();
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------//
// Create
//-------------------------------------------------------------------------//
scwin.f_Create = function () {
  var strClntNo = "";
  var flg = "";
  strClntNo = $c.str.trim($p, ed_blno.getValue());
  if ($c.str.trim($p, lc_hmhno.getValue()) == "") {
    flg = "CREATE";
  }
  ds_HouseBillInfo.removeAll();
  ds_HouseBillInfo.insertRow(0);
  ds_HouseBillInfo.setRowPosition(0);
  ds_ArrivalInfo.removeAll();
  ds_DeliveryInfo.removeAll();
  ds_hitekContents.removeAll();
  scwin._resetHiddenFields();
  scwin.f_Set("CREATE");
  if (flg == "CREATE") {
    ed_blno.setValue(strClntNo);
    ed_cnCtcd.setValue("KR");
  }
  scwin.actionFlag = "Create";
  ed_blno.focus();
  ed_itcd.setValue("30000000");
  txt_itnm.setValue("일반화물");

  //기본으로 등록자 ID 기입 처리
  txt_blpic.setValue("");
  if ($c.str.trim($p, ed_blpic.getValue()) == "") {
    ed_blpic.setValue(scwin.userId.replace(/[^0-9]/g, ""));
    scwin.f_PopUp("B/L PIC", "T");
  }
};

//-------------------------------------------------------------------------//
// Update
//-------------------------------------------------------------------------//
scwin.f_Update = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set("UPDATE");
  $c.gus.cfDisableObjects($p, [ed_dept, txt_deptnm, img_dept]);
};

//-------------------------------------------------------------------------//
// Save
//-------------------------------------------------------------------------//
scwin.f_Save = async function () {
  var row = ds_HouseBillInfo.getRowPosition();
  if (row < 0) row = 0;
  var customer = ds_HouseBillInfo.getCellData(row, "ascd");
  // scwin._syncHiddenToHouseInfo();

  //동부 하이텍 인터페이스의 경우 수정에는 에러메세지만 뿌림
  if (scwin.actionFlag == "Update" && ds_hitekContents.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, ed_blno.getValue() + " : " + "동부하이텍 인터페이스");
  }
  if (scwin.actionFlag == "Create" || scwin.actionFlag == "Copy") {
    scwin.f_ProcessBinding(dma_SearchInfo, "HouseBillSearch");
    var e = await $c.sbm.execute($p, sbm_RetrieveHouseBillCheck);
    scwin.sbm_RetrieveHouseBillCheck_submitdone(e);
    if (scwin.processFlag == "Exist") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_011, ["House B/L No"]); // 이미 존재하는 @ 입니다.
      ed_blno.focus();
      return false;
    }
    ds_HouseBillInfo.modifyRowStatus(row, "C");

    // 등록일 때 동부하이텍 인터페이스 필수입력항목 체크 함.
    if (customer == "125305" || customer == "125283") {
      if (!(await scwin.f_HiDataCheck())) return;
    }
  }
  scwin.f_OtherTypeSetting();
  var isChanged = ds_HouseBillInfo.getModifiedIndex().length > 0;
  if (isChanged) {
    scwin.f_ProcessBinding(ds_HouseBillInfo, "HouseBillSave");
    scwin.f_selectTabMenu(0);
    if (await scwin.f_ReqFieldChk()) {
      scwin.actionFlag = "Save";
      if ($c.str.trim($p, ed_agcd.getValue()) == "") {
        ds_HouseBillInfo.setCellData(row, "shipgb", "C");
      } else {
        ds_HouseBillInfo.setCellData(row, "shipgb", "L");
      }
      if ($c.str.trim($p, ed_warecd.getValue()) == "") {
        await $c.win.alert($p, "Warehouse는 필수 입력항목입니다.");
        ed_warecd.focus();
        return false;
      }
      if ($c.str.trim($p, ed_mwarecd.getValue()) == "") {
        await $c.win.alert($p, "하기장소는 필수 입력항목입니다.");
        ed_mwarecd.focus();
        return false;
      }

      // B/L PIC값이 없을때 등록자 아이디로 입력(PIC값이 null되는걸 방지)
      if ($c.str.trim($p, ed_blpic.getValue()) == "") {
        txt_blpic.setValue("");
        ds_HouseBillInfo.setCellData(row, "pic", scwin.userId);
      }
      var e = await $c.sbm.execute($p, sbm_Save);
      await scwin.sbm_Save_submitdone(e);
      scwin.f_Set("SAVE");
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House Info"]); //@은(는) 변경된 사항이 없습니다.
  }
};

//-------------------------------------------------------------------------
// HiData Check
//-------------------------------------------------------------------------
scwin.f_HiDataCheck = async function () {
  if ($c.str.trim($p, ed_avdt.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek :Arrival Date"]); // @은(는) 필수 입력 항목입니다.
    ed_avdt.focus();
    return false;
  }
  if ($c.str.trim($p, ed_ondt.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : On borad Date"]);
    ed_ondt.focus();
    return false;
  }
  if ($c.str.trim($p, ed_indate.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : PICKUP DATE"]);
    ed_indate.focus();
    return false;
  }
  if ($c.str.trim($p, txt_pono.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : P/O NO "]);
    txt_pono.focus();
    return false;
  }
  if ($c.str.trim($p, ed_fltno.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek :  Flight No "]);
    ed_fltno.focus();
    return false;
  }
  if ($c.str.trim($p, ed_dpcd.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : Departure Code "]);
    ed_dpcd.focus();
    return false;
  }
  if ($c.str.trim($p, ed_dscd1.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : Destination Code "]);
    ed_dscd1.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// File Download
//-------------------------------------------------------------------------
scwin.f_FileDownload = async function () {
  var opts = {
    width: 870,
    height: 400
  };
  var data = {
    houseNo: ed_blno.getValue()
  };
  var returnValue = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonFilePopup.xml", opts, data);
};

//-------------------------------------------------------------------------//
// Required Field Check
// 유효성검사
//-------------------------------------------------------------------------//
scwin.f_ReqFieldChk = async function () {
  if ($c.str.trim($p, ed_blno.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]); // @은(는) 필수 입력 항목 입니다.
    ed_blno.focus();
    return false;
  }
  if ($c.str.trim($p, ed_srno.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]);
    ed_srno.focus();
    return false;
  }
  if ($c.str.trim($p, ed_shCtcd.getValue()) == "") {
    await $c.win.alert($p, "Shipper Country code is mandatory.");
    return false;
  }
  if ($c.str.trim($p, ed_cnCtcd.getValue()) == "") {
    await $c.win.alert($p, "Consignee Country code is mandatory.");
    return false;
  }
  if ($c.str.trim($p, ed_ondt.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Onboard Date"]);
    ed_ondt.focus();
    return false;
  }
  if ($c.str.trim($p, ed_avdt.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Arrival Date"]);
    ed_avdt.focus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_ondt.getValue(), ed_avdt.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["Onboard Date", "Arrival Date"]); //@은(는) 보다 작아야 합니다.
    ed_ondt.focus();
    return false;
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_ondt.getValue().toDate()) > 3) {
    await $c.win.alert($p, "Onboard Date가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    tac_tabControl1.setSelectedTabIndex(0);
    ed_ondt.focus();
    return false;
  }
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_avdt.getValue().toDate()) > 3) {
    await $c.win.alert($p, "Arrival Date가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    tac_tabControl1.setSelectedTabIndex(0);
    ed_avdt.focus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_ondt.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "Onboard Date가 3년 이상의 과거 일 수 없습니다.");
    tac_tabControl1.setSelectedTabIndex(0);
    ed_ondt.focus();
    return false;
  }
  if ($c.gus.cfYearsBetween($p, ed_avdt.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "Arrival Date가 3년 이상의 과거 일 수 없습니다.");
    tac_tabControl1.setSelectedTabIndex(0);
    ed_avdt.focus();
    return false;
  }

  //ETA-ETD(transit time)가 150일을 초과할 수 없다.  *150일(총 운항DATE 수) : ETA날짜에서 ETD날짜를 빼고 +1 한 날짜 
  if ($c.date.diffDate($p, ed_ondt.getValue().toDate(), ed_avdt.getValue().toDate()) > 149) {
    await $c.win.alert($p, "Onboard Date-Arrival Date(transit time)가 150일을 초과할 수 없습니다.");
    tac_tabControl1.setSelectedTabIndex(0);
    ed_ondt.focus();
    return false;
  }
  if (ed_cjdt.getValue() == "" || !$c.date.isDate($p, ed_cjdt.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Result Date Date"]);
    ed_cjdt.focus();
    return false;
  }
  if (ed_mblno.getValue() != "" && lc_hmhno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, ["Master No"]); // 존재하지 않는 @ 입니다.
    ed_mblno.focus();
    return false;
  }
  if (ed_dept.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department Info"]);
    ed_dept.focus();
    return false;
  }
  if (ed_sacd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Salesman Info"]);
    ed_sacd.focus();
    return false;
  }
  if (ed_itcd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Info"]);
    ed_itcd.focus();
    return false;
  }
  if (txt_ngnm1.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["EDI Item Info"]);
    txt_ngnm1.focus();
    return false;
  }
  if (ed_dept.getValue() == "1GG") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
    ed_dept.focus();
    return false;
  }
  scwin._execDataId(ds_customerInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCustomerInfo&param1=" + ed_ascd.getValue());
  if (ds_customerInfo.getTotalRow() > 0) {
    if (ed_dept.getValue() != ds_customerInfo.getCellData(0, "col1")) {
      await $c.win.alert($p, "Customer와  Dept가 일치하지 않습니다. \nCustomer Code 화면에서 정보를 확인하세요.");
      ed_dept.focus();
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------//
// Delete
//-------------------------------------------------------------------------//
scwin.f_Delete = async function () {
  if ($c.str.trim($p, ed_blno.getValue()) == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.focus();
    return false;
  }
  if (ds_hitekContents.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, ed_blno.getValue() + " : " + "동부하이텍 인터페이스");
  }
  if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_004))) {
    scwin.f_InvoiceCheck_All("F");
    if (scwin.spRtn == "0") {
      var delRow = ds_HouseBillInfo.getRowPosition();
      if (delRow >= 0) {
        ds_HouseBillInfo.deleteRow(delRow);
      }
      scwin.actionFlag = "Delete";
      var e = await $c.sbm.execute($p, sbm_Save);
      scwin.sbm_Save_submitdone(e);
      ed_blno.setValue("");
      lc_hmhno.setValue("");
      ed_blno.focus();
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_005);
    }
  }
};

//-------------------------------------------------------------------------//
// Cancel
//-------------------------------------------------------------------------//
scwin.f_Cancel = function () {
  if (scwin.actionFlag == "Create") {
    scwin.f_Set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_Set("RETRIEVE");
  }
  ds_HouseBillInfo.undoAll();
};

//-------------------------------------------------------------------------
// Copy
//-------------------------------------------------------------------------
scwin.f_Copy = async function () {
  if (await $c.win.confirm($p, scwin.MSG_LO_WRN_002)) {
    scwin.actionFlag = "Copy";
    scwin.f_DefaultValue("Copy");
    scwin.f_Set("CREATE");
    if ($c.str.trim($p, ed_cncd.getValue()) != "") {
      ed_ascd.setValue($c.str.trim($p, ed_cncd.getValue()));
      txt_asnm.setValue($c.str.trim($p, txt_cnnm1.getValue()));
    } else if ($c.str.trim($p, ed_ntcd.getValue()) != "") {
      ed_ascd.setValue($c.str.trim($p, ed_ntcd.getValue()));
      txt_asnm.setValue($c.str.trim($p, txt_ntnm1.getValue()));
    }
    ed_cjdt.setValue("");
    txt_ngnm1.setValue("");
    if ($c.str.trim($p, ed_blpic.getValue()) == "") {
      txt_blpic.setValue("");
      ed_blpic.setValue(scwin.userId.replace(/[^0-9]/g, ""));
      scwin.f_PopUp("B/L PIC", "T");
    }
    ed_blno.focus();
  }
};

//-------------------------------------------------------------------------
// Mhno Loading
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = function () {
  var strClntNo = $c.str.trim($p, ed_blno.getValue());
  if (strClntNo.length > 0) {
    var param1 = strClntNo;
    scwin._execDataId(ds_hmhno, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1 + "&param2=" + scwin.hd_iogb);
  } else {
    ds_hmhno.removeAll();
  }
};

//-------------------------------------------------------------------------//
// Master Consol No Loading
//-------------------------------------------------------------------------//
scwin.f_MasterConsolNoLoading = function () {
  var strClntNo = $c.str.trim($p, ed_mblno.getValue());
  if (strClntNo.length > 0) {
    var param1 = strClntNo;
    scwin._execDataId(ds_hmhno, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1 + "&param2=" + scwin.hd_iogb);
  } else {
    lc_hmhno.setValue("");
  }
};

//-------------------------------------------------------------------------
// Notify Handling
//-------------------------------------------------------------------------
scwin.f_NotifyHandling = function (gubun) {
  switch (gubun) {
    case "Same":
      if ($c.str.trim($p, chb_sacgb.getValue()) != "") {
        ed_ntcd.setValue("");
        txt_ntnm1.setValue("SAME AS CONSIGNEE");
        txt_ntnm2.setValue("...");
        txt_ntnm3.setValue("");
        txt_ntnm4.setValue("");
        txt_ntnm5.setValue("");
      } else {
        ed_ntcd.setValue("");
        txt_ntnm1.setValue("");
        txt_ntnm2.setValue("");
        txt_ntnm3.setValue("");
        txt_ntnm4.setValue("");
        txt_ntnm5.setValue("");
      }
      break;
    case "Copy":
      ed_ntcd.setValue(ed_cncd.getValue());
      txt_ntnm1.setValue(txt_cnnm1.getValue());
      txt_ntnm2.setValue(txt_cnnm2.getValue());
      txt_ntnm3.setValue(txt_cnnm3.getValue());
      txt_ntnm4.setValue(txt_cnnm4.getValue());
      txt_ntnm5.setValue(txt_cnnm5.getValue());
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// Master/Booking Info 바인딩
//-------------------------------------------------------------------------
scwin.f_MasterInfoBinding = function () {
  var mRow = ds_MasterInfo.getRowPosition();
  if (mRow < 0) mRow = 0;
  var hRow = ds_HouseBillInfo.getRowPosition();
  if (hRow < 0) hRow = 0;
  ds_HouseBillInfo.setCellData(hRow, "pncd", ds_MasterInfo.getCellData(mRow, "shcd"));
  ds_HouseBillInfo.setCellData(hRow, "pnnm", ds_MasterInfo.getCellData(mRow, "shnm1"));
  ds_HouseBillInfo.setCellData(hRow, "exdt", ds_MasterInfo.getCellData(mRow, "exdt"));
  ds_HouseBillInfo.setCellData(hRow, "rate", ds_MasterInfo.getCellData(mRow, "rate"));
  ds_HouseBillInfo.setCellData(hRow, "exrate", ds_MasterInfo.getCellData(mRow, "exrate"));
  ds_HouseBillInfo.setCellData(hRow, "cucd", ds_MasterInfo.getCellData(mRow, "cucd"));
  ds_HouseBillInfo.setCellData(hRow, "ondt", ds_MasterInfo.getCellData(mRow, "ondt"));
  ds_HouseBillInfo.setCellData(hRow, "fltno", ds_MasterInfo.getCellData(mRow, "fltno"));
};

// Customer Booking 정보 House 화면에 Binding
scwin.f_CustomerBookingInfoBinding = function () {
  var bRow = ds_CustomerBookingInfo.getRowPosition() || 0;
  var hRow = ds_HouseBillInfo.getRowPosition() || 0;
  ds_HouseBillInfo.setRowPosition(hRow);
  ds_HouseBillInfo.setCellData(hRow, "srno", ds_CustomerBookingInfo.getCellData(bRow, "srno"));
  ds_HouseBillInfo.setCellData(hRow, "avdt", ds_CustomerBookingInfo.getCellData(bRow, "ondt"));
  ds_HouseBillInfo.setCellData(hRow, "cjdt", ds_CustomerBookingInfo.getCellData(bRow, "ondt"));
  if ($c.str.trim($p, ds_HouseBillInfo.getCellData(hRow, "dpcd")) == "") {
    ds_HouseBillInfo.setCellData(hRow, "dpcd", ds_CustomerBookingInfo.getCellData(bRow, "dscd"));
  }
  ds_HouseBillInfo.setCellData(hRow, "cncd", ds_CustomerBookingInfo.getCellData(bRow, "ascd"));
  ds_HouseBillInfo.setCellData(hRow, "ascd", ds_CustomerBookingInfo.getCellData(bRow, "ascd"));
  ds_HouseBillInfo.setCellData(hRow, "fltno", ds_CustomerBookingInfo.getCellData(bRow, "fltno"));
  ds_HouseBillInfo.setCellData(hRow, "warecd", ds_CustomerBookingInfo.getCellData(bRow, "whcd"));
  ds_HouseBillInfo.setCellData(hRow, "warenm", ds_CustomerBookingInfo.getCellData(bRow, "whnm"));
  ds_HouseBillInfo.setCellData(hRow, "itcd", ds_CustomerBookingInfo.getCellData(bRow, "itcd"));
  ds_HouseBillInfo.setCellData(hRow, "itnm", ds_CustomerBookingInfo.getCellData(bRow, "itnm"));
  ds_HouseBillInfo.setCellData(hRow, "sacd", ds_CustomerBookingInfo.getCellData(bRow, "sacd"));
  ds_HouseBillInfo.setCellData(hRow, "sanm", ds_CustomerBookingInfo.getCellData(bRow, "sanm"));
  if ($c.str.trim($p, ds_HouseBillInfo.getCellData(hRow, "cncd")) != "") {
    scwin.f_PopUp("Consignee", "T", "F", "F");
  }
  if ($c.str.trim($p, ds_HouseBillInfo.getCellData(hRow, "ascd")) != "") {
    scwin.f_PopUp("Customer", "T", "F", "F");
  }
  if ($c.str.trim($p, ds_HouseBillInfo.getCellData(hRow, "dpcd")) != "") {
    scwin.f_PopUp("Departure", "T", "F", "F");
  }
  if ($c.str.trim($p, ds_HouseBillInfo.getCellData(hRow, "ctcd")) != "") {
    scwin.f_OpenCommonPopUp("Country", "T", "F", "F");
  }
  if ($c.str.trim($p, ed_ascd.getValue()) != "") {
    scwin.f_departmentInfo();
  }
};
scwin.callBackF = function (rtnList) {
  txt_shnm1.setValue("");
  txt_shnm2.setValue("");
  txt_shnm3.setValue("");
  txt_shnm4.setValue("");
  txt_shnm5.setValue("");
  $c.gus.cfSetReturnValue($p, rtnList, ed_shcd, txt_shnm1, [txt_shnm2, txt_shnm3, txt_shnm4, txt_shnm5]);
  //Customer Info Copy
  if (ed_ascd.getValue() == "") {
    ed_ascd.setValue(ed_shcd.getValue());
    txt_asnm.setValue(txt_shnm1.getValue());
  }
};

//-------------------------------------------------------------------------//
// 공통 팝업
//-------------------------------------------------------------------------//
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pParam = "";
  switch (disGubun) {
    case "CustomerBookingInfo":
      //거래처 팝업(Search Shipper)
      pParam = ed_blno.getValue();
      if (ed_srno.getValue() == "") {
        udc_bookingNo.ilCommonPopUp(function (rtnList) {
          if (rtnList != "undefined") {
            if (rtnList[0] != "N/A") {
              $c.gus.cfSetReturnValue($p, rtnList, ed_srno);
              ed_srno.focus();
            }
          }
        },
        // XML상의 SELECT ID
        ed_avdt.getValue(),
        // 화면에서의 ??? Code Element의	Value
        '',
        // 화면에서의 ??? Name Element의	Value
        pWinCloseTF,
        // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        '3',
        // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Booking No, Arrival, Consignee,''",
        // Title순서
        '100,80,250',
        // 보여주는 각 컬럼들의 폭
        "4,5,6,7,8,9,10",
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
        pAllSearchTF,
        // 전체검색허용여부	("F")
        "Booking No, Arrival, Consignee",
        // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        pNoDataCloseTF);
      }
      break;
    case "Shipper":
      //거래처 팝업(Search Shipper)
      udc_shcd.ilCommonPopUp(scwin.callBackF,
      // XML상의 SELECT ID
      ed_shcd.getValue(),
      // 화면에서의 ??? Code Element의	Value
      txt_shnm1.getValue(),
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
    case "Consignee":
      //Search Consignee
      udc_cncd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_cncd, txt_cnnm1, [txt_cnnm2, txt_cnnm3, txt_cnnm4, txt_cnnm5, null, null, null, ed_rgno]);
        $c.gus.cfSetReturnValue($p, rtnList, ed_ascd, txt_asnm);
      }, ed_cncd.getValue(), txt_cnnm1.getValue(), pWinCloseTF, '6', 'Consignee', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "Notify":
      //Search Notify
      udc_ntcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_ntcd, txt_ntnm1, [txt_ntnm2, txt_ntnm3, txt_ntnm4, txt_ntnm5]);
        if (ed_cncd.getValue() == "") {
          $c.gus.cfSetReturnValue($p, rtnList, ed_ascd, txt_asnm);
        }
      }, ed_ntcd.getValue(), txt_ntnm1.getValue(), pWinCloseTF, '6', 'Notify', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "ColoadAgent":
      //Search Co-load Agent
      udc_agcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_agcd, txt_agnm);
      }, ed_agcd.getValue(), txt_agnm.getValue(), pWinCloseTF, '2', 'Agent', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "Partner":
      //Search Partner
      udc_pncd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_pncd, txt_pnnm);
      }, ed_pncd.getValue(), txt_pnnm.getValue(), pWinCloseTF, '2', 'Partner', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "PartnerPic":
      pParam = ed_pncd.getValue();
      udc_pncdpic.ilCommonPopUp(function (rtnList) {
        if (rtnList != "undefined") {
          $c.gus.cfSetReturnValue($p, rtnList, ed_pncdpic, txt_pncdpicnm, null);
        }
      },
      // XML상의 SELECT ID
      ed_pncdpic.getValue(),
      // 화면에서의 ??? Code Element의	Value
      txt_pncdpicnm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "Partner PIC",
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
    case "Departure":
      //Search Departure
      udc_dpcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_dpcd, txt_dpnm, [null, ed_ctcd]);
      }, ed_dpcd.getValue(), txt_dpnm.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Destination":
      //Search Destination
      udc_dscd1.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_dscd1, txt_dsnm1);
      }, ed_dscd1.getValue(), txt_dsnm1.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Destination Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Customer":
      //Search Customer
      udc_ascd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_ascd, txt_asnm);
        //2020.05.14 최우성 대리 요청 사항 : 거래처 (CUSTOMER) 에 해당하는 부서 및 영업사원 자동 지정
        if (ed_ascd.getValue() != "") {
          if (ed_dept.getValue() == "") {
            scwin.f_customerInfo(ed_ascd.getValue());
          }
        }
      }, ed_ascd.getValue(), txt_asnm.getValue(), pWinCloseTF, '2', 'Customer', '140,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "CustomerPic":
      pParam = ed_ascd.getValue();
      udc_ascdpic.ilCommonPopUp(function (rtnList) {
        if (rtnList != "undefined") {
          $c.gus.cfSetReturnValue($p, rtnList, ed_ascdpic, txt_ascdpicnm, null);
        }
      },
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
    case "B/L PIC":
      pParam = ed_blpic.getValue();
      udc_blpic.ilCommonPopUp(function (rtnList) {
        if (rtnList != "undefined") {
          $c.gus.cfSetReturnValue($p, rtnList, ed_blpic, txt_blpic, null);
        }
      },
      // XML상의 SELECT ID
      ed_blpic.getValue(),
      // 화면에서의 ??? Code Element의	Value
      txt_blpic.getValue(),
      // 화면에서의 ??? Name Element의	Value
      "T",
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "B/L PIC",
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
      "F",
      // 전체검색허용여부	("F")
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------//
// 공통팝업 열기
//-------------------------------------------------------------------------//
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Department":
      //Department
      udc_dept.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_deptnm);
      } // XML상의 SELECT ID
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
      udc_sacd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_sacd, txt_sanm);
      }, ed_sacd.getValue(), txt_sanm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;

    /*
    case "Location" :  //Location
        udc_sacd.ilCommonPopUp('retrieveDoorArea'
                                ,ed_arcd.Text.trim()
                                ,txt_arnm.value
                                ,pWinCloseTF
                                ,'2'
                                ,"Code, Name"
                                ,'80,230'
                                ,"3,4,5,6,7,8,9,10"
                                ,null ,null ,null ,null ,null ,null
                                ,pAllSearchTF
                                ,"Location,Code,Name"
                                ,pNoDataCloseTF
                                );
             cfSetReturnValue(rtnList, ed_arcd, txt_arnm);
        break;
        */

    case "Item":
      //Item
      udc_itcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_itcd, txt_itnm);
      }, ed_itcd.getValue(), txt_itnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "Country":
      //Country
      udc_ctcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_ctcd, txt_ctnm);
      }, ed_ctcd.getValue(), txt_ctnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "Warehouse":
      //Warehouse
      udc_warecd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_warecd, txt_warenm);
      }, ed_warecd.getValue(), txt_warenm.getValue(), pWinCloseTF, '4', "Code, Name,'',Eng", '80,200,0,60', "3,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Warehouse,Code,Name", pNoDataCloseTF);
      break;
    case "Mwarehouse":
      //Warehouse
      udc_mwarecd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_mwarecd, txt_mwarenm);
      }, ed_mwarecd.getValue(), txt_mwarenm.getValue(), pWinCloseTF, '4', "Code, Name,'',Eng", '80,200,0,60', "3,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Warehouse,Code,Name", pNoDataCloseTF);
      break;
    case "ShipperCountry":
      //Country
      udc_shCtcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_shCtcd, '');
      }, ed_shCtcd.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    case "ConsigneeCountry":
      //Country
      udc_cnCtcd.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_cnCtcd, '');
      }, ed_cnCtcd.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Country,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------//
// 조회 조건 지우기
//-------------------------------------------------------------------------//
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_blno, lc_hmhno, ed_srno, ed_mblno]);
  ds_hmhno.removeAll();
  ed_blno.focus();
};

//-------------------------------------------------------------------------//
// 화면 이동
//-------------------------------------------------------------------------//
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};
scwin.f_openPgm = function (name) {
  var param = {
    kcomcd: scwin.hd_kcomcd,
    blno: $c.str.trim($p, ed_blno.getValue()),
    mblno: $c.str.trim($p, ed_mblno.getValue()),
    mhno: $c.str.trim($p, lc_hmhno.getValue()),
    iogb: scwin.hd_iogb,
    eta: $c.str.trim($p, ed_avdt.getValue())
  };
  switch (name) {
    case "Find":
      scwin._openMenu("House B/L Search", "/ui/il/airout/aobl/ar_104_01_02b.xml", "ar_104_01_02b.xml", {
        iogb: "I"
      });
      break;
    case "Booking":
      scwin._openMenu("Import Customer Booking", "/ui/il/airinb/aibk/ar_201_01_01b.xml", "ar_201_01_01b.xml", {
        kcomcd: param.kcomcd,
        srno: $c.str.trim($p, ed_srno.getValue())
      });
      break;
    case "Freight":
      scwin._openMenu("House Air Waybill Freight", "/ui/il/airinb/aibl/ar_203_01_02b.xml", "ar_203_01_02b.xml", {
        kcomcd: param.kcomcd,
        blno: param.blno,
        mblno: param.mblno,
        iogb: param.iogb
      });
      break;
    case "PL":
      scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
        kcomcd: param.kcomcd,
        seaair: "A",
        iogb: param.iogb,
        blno: "",
        mblno: param.mblno,
        mhno: param.mhno
      });
      break;
    case "AN":
      scwin._openMenu("Arrival Notice", "/ui/il/seainb/sith/se_204_01_01b.xml", "se_204_01_01b.xml", {
        kcomcd: param.kcomcd,
        blno: param.blno,
        mhno: param.mhno,
        eta: param.eta,
        seaair: "A"
      });
      break;
    case "Mawb":
      scwin._openMenu("Import Master B/L", "/ui/il/airinb/aibl/ar_202_01_01b.xml", "ar_202_01_01b.xml", {
        kcomcd: param.kcomcd,
        blno: param.mblno
      });
      break;
    case "Import_MNF":
      scwin._openMenu("수입 적하목록 신고", "/ui/il/aredi/immf/ed_107_01_01b.xml", "ed_107_01_01b.xml", {
        curDate: $c.str.trim($p, ed_ondt.getValue()),
        preDate: $c.str.trim($p, ed_ondt.getValue()),
        blno: param.mblno
      });
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// Department Info
// Department  가져오기 참고로 param1 은 A :항공,C:CONTAINER,B:BULK임.
//-------------------------------------------------------------------------
scwin.f_departmentInfo = function () {
  var param = $c.str.trim($p, ed_ascd.getValue());
  scwin._execDataId(ds_departmentInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveDepartmentCodeList&param1=A&param2=" + param);
  if (ds_departmentInfo.getRowCount() == 0) {
    ed_dept.setValue("");
    txt_deptnm.setValue("");
  } else {
    var row = ds_departmentInfo.getRowPosition();
    if (row < 0) row = 0;
    ed_dept.setValue(ds_departmentInfo.getCellData(row, "CODE"));
    txt_deptnm.setValue(ds_departmentInfo.getCellData(row, "NAME"));
  }
};

//-------------------------------------------------------------------------//
// House B/L No Change
//-------------------------------------------------------------------------//
scwin.f_HawbNoChange = async function () {
  if ($c.str.trim($p, ed_blno.getValue()) == "") {
    return;
  }
  var opt = {};
  var data = {};
  opt.width = "460";
  opt.height = "280";
  opt.id = "ilCommonHawbNoChange";
  opt.popupName = "House B/L No Change";
  opt.title = "House B/L No Change";
  data.pBlno = $c.str.trim($p, ed_blno.getValue());
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonHawbNoChange.xml", opt, data);
  if (rtnList != "undefined") {
    if (rtnList[0] == "N/A" && rtnList[1] != "") {
      var ds = ds_HblNoChangeParam;
      ds.removeAll();
      ds.insertRow(ds.getRowCount());
      var row = ds.getRowPosition();
      var infoRow = ds_HouseBillInfo.getRowPosition();
      if (infoRow < 0) infoRow = 0;
      ds.setCellData(row, "odrNo", ds_HouseBillInfo.getCellData(infoRow, "odrNo"));
      ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
      ds.setCellData(row, "blNo", $c.str.trim($p, ed_blno.getValue()));
      ds.setCellData(row, "newblNo", $c.str.trim($p, rtnList[1]));
      ds.setCellData(row, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
      scwin.spMsg = "";
      scwin.spRtn = "-1";
      if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001))) {
        //저장하시겠습니까?
        let e = await $c.sbm.execute($p, sbm_HblNoChange);
        if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail
        if (e.responseJSON.OUT_DS1.length > 0) {
          var resRow = ds_HblNoChangeResult.getRowPosition();
          if (resRow < 0) resRow = 0;
          scwin.spMsg = ds_HblNoChangeResult.getCellData(resRow, "spMsg") || "";
          scwin.spRtn = ds_HblNoChangeResult.getCellData(resRow, "spRtn") || "";
          if (scwin.spRtn == "0") {
            ed_blno.setValue($c.str.trim($p, rtnList[1]));
            lc_hmhno.focus();
            $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_007);
          } else if (scwin.spRtn == "-2") {
            $c.gus.cfAlertMsg($p, scwin.spMsg);
          } else {
            $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_006);
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// Tab 초기화/선택
//-------------------------------------------------------------------------
scwin.f_initSetTab = function () {
  if (typeof tac_tabControl1 !== "undefined") {
    tac_tabControl1.setSelectedTabIndex(0);
  }
};
scwin.f_selectTabMenu = function (idx) {
  if (typeof tac_tabControl1 !== "undefined") {
    tac_tabControl1.setSelectedTabIndex(idx);
  }
};

//-------------------------------------------------------------------------
// Customer Info
//-------------------------------------------------------------------------
scwin.f_customerInfo = function (param) {
  scwin._execDataId(ds_customerInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCustomerInfo&param1=" + param);
  if (ds_customerInfo.getRowCount() == 0) {
    return;
  }
  var row = ds_customerInfo.getRowPosition();
  if (row < 0) row = 0;
  ed_dept.setValue(ds_customerInfo.getCellData(row, "col1"));
  txt_deptnm.setValue(ds_customerInfo.getCellData(row, "col2"));
  ed_sacd.setValue(ds_customerInfo.getCellData(row, "col3"));
  txt_sanm.setValue(ds_customerInfo.getCellData(row, "col4"));
};

//-------------------------------------------------------------------------
// Dept Change
//-------------------------------------------------------------------------
scwin.f_departmentChange = async function () {
  if ($c.str.trim($p, ed_dept.getValue()) == "") return;
  var opt = {};
  var data = {};
  opt.width = "460";
  opt.height = "280";
  opt.id = "ilCommonDeptChange";
  opt.popupName = "Department Change";
  data.pdept = $c.str.trim($p, ed_dept.getValue());
  data.pdeptnm = $c.str.trim($p, txt_deptnm.getValue());
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml", opt, data);
  if (typeof rtnList == "undefined") return;
  if (rtnList[0] != "N/A" || $c.str.trim($p, rtnList[1] || "") == "" || $c.str.trim($p, rtnList[2] || "") == "") return;
  if ($c.str.trim($p, rtnList[1]) == "1GG") {
    $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_010, ["Department Info"]);
    return false;
  }
  ds_DeptChangeParam.removeAll();
  ds_DeptChangeParam.insertRow(ds_DeptChangeParam.getRowCount());
  var row = ds_DeptChangeParam.getRowPosition();
  if (row < 0) row = 0;
  var infoRow = ds_HouseBillInfo.getRowPosition();
  if (infoRow < 0) infoRow = 0;
  ds_DeptChangeParam.setCellData(row, "modrNo", "");
  ds_DeptChangeParam.setCellData(row, "hodrNo", ds_HouseBillInfo.getCellData(infoRow, "odrNo"));
  ds_DeptChangeParam.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_DeptChangeParam.setCellData(row, "dept", rtnList[1]);
  ds_DeptChangeParam.setCellData(row, "deptnm", rtnList[2]);
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  if (await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001))) {
    await $c.sbm.execute($p, sbm_DeptChange);
    if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail
    var resRow = ds_DeptChangeResult.getRowPosition();
    if (resRow < 0) resRow = 0;
    scwin.spMsg = ds_DeptChangeResult.getCellData(resRow, "spMsg");
    scwin.spRtn = ds_DeptChangeResult.getCellData(resRow, "spRtn");
    if (scwin.spRtn == "0") {
      txt_deptnm.setValue($c.str.trim($p, rtnList[2] || ""));
      ed_dept.setValue($c.str.trim($p, rtnList[1] || ""));
      $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_009);
    } else if (scwin.spRtn == "-2") {
      $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_013);
    } else {
      $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_008);
    }
  }
};

//-------------------------------------------------------------------------
// Print
//-------------------------------------------------------------------------
scwin.f_Print = function () {
  var as_arranged = "Y";
  var as_agreed = "Y";
  var blType = "3";
  let data = {
    odiName: "ar_204_01_02",
    reportName: "/il/airinb/ar_204_01_02.ozr",
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      BLNO: ed_blno.getValue(),
      MHNO: lc_hmhno.getValue(),
      AS_AGREED: as_agreed,
      AS: as_arranged,
      PRINT_TYPE: blType
    },
    viewerParam: {
      zoom: 100,
      // 배율 설정
      useprogressbar: false,
      mode: "print"
    },
    formParam: {}
  };
  scwin.openPopup(data);

  // viewerParam.add("export.filename", ed_blno.getValue());
  // viewerParam.add("export.format", "pdf");
  // viewerParam.add("export.path", "C:\\OZExport");
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 800,
    height: 900,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------//
// helpers
//-------------------------------------------------------------------------//
scwin._isModified = function (comp) {
  if (!comp) return true;
  if (typeof comp.isModified === "function") return comp.isModified();
  if (typeof comp.getModified === "function") return comp.getModified();
  if (typeof comp.modified !== "undefined") return !!comp.modified;
  return true;
};
scwin._toNum = function (v) {
  var n = parseFloat(String(v || "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

//-------------------------------------------------------------------------//
// input events (xml onKillFocus/onSetFocus)
//-------------------------------------------------------------------------//
scwin.ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading();
};
scwin.ed_blno_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_blno);
};
scwin.ed_srno_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_srno);
};
scwin.ed_mblno_onblur = function (e) {
  if ($c.str.trim($p, ed_mblno.getValue()) != "") {
    scwin.f_MasterConsolNoLoading();
    if (scwin.actionFlag == "Create") {
      scwin.f_RetrieveMasterInfo();
    }
  }
};
scwin.ed_mblno_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_mblno);
};
scwin.ed_srno_onblur = async function (e) {
  if (scwin.actionFlag == "Create") {
    if ($c.str.trim($p, ed_srno.getValue()) != "") {
      await scwin.f_RetrieveBooking();
    }
  }
};
scwin.ed_ascdpic_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_ascdpic.getValue());
  if (scwin._isModified(ed_ascdpic)) {
    if (strClntNo.length > 0) {
      txt_ascdpicnm.setValue("");
      scwin.f_PopUp("CustomerPic", "T");
    } else {
      txt_ascdpicnm.setValue("");
    }
  }
};
scwin.ed_pncdpic_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_pncdpic.getValue());
  if (scwin._isModified(ed_pncdpic)) {
    if (strClntNo.length > 0) {
      txt_pncdpicnm.setValue("");
      scwin.f_PopUp("PartnerPic", "T");
    } else {
      txt_pncdpicnm.setValue("");
    }
  }
};
scwin.ed_shcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_shcd.getValue());
  if (scwin._isModified(ed_shcd)) {
    if (strClntNo.length > 0) {
      txt_shnm1.setValue("");
      txt_shnm2.setValue("");
      txt_shnm3.setValue("");
      txt_shnm4.setValue("");
      txt_shnm5.setValue("");
      scwin.f_PopUp("Shipper", "T", "F", "F");
    } else {
      txt_shnm1.setValue("");
      txt_shnm2.setValue("");
      txt_shnm3.setValue("");
      txt_shnm4.setValue("");
      txt_shnm5.setValue("");
    }
  }
};
scwin.ed_cncd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_cncd.getValue());
  if (scwin._isModified(ed_cncd)) {
    if (strClntNo.length > 0) {
      txt_cnnm1.setValue("");
      txt_cnnm2.setValue("");
      txt_cnnm3.setValue("");
      txt_cnnm4.setValue("");
      txt_cnnm5.setValue("");
      scwin.f_PopUp("Consignee", "T", "F", "F");
    } else {
      txt_cnnm1.setValue("");
      txt_cnnm2.setValue("");
      txt_cnnm3.setValue("");
      txt_cnnm4.setValue("");
      txt_cnnm5.setValue("");
    }
  }
  if ($c.str.trim($p, ed_ascd.getValue()) == "") {
    ed_ascd.setValue($c.str.trim($p, ed_cncd.getValue()));
    scwin.f_PopUp("Customer", "T", "F", "F");
  }
  if ($c.str.trim($p, ed_dept.getValue()) == "") {
    if (scwin.f_departmentInfo) {
      scwin.f_departmentInfo();
    }
  }
};
scwin.ed_ntcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_ntcd.getValue());
  if (scwin._isModified(ed_ntcd)) {
    if (strClntNo.length > 0) {
      txt_ntnm1.setValue("");
      txt_ntnm2.setValue("");
      txt_ntnm3.setValue("");
      txt_ntnm4.setValue("");
      txt_ntnm5.setValue("");
      scwin.f_PopUp("Notify", "T", "F", "F");
    } else {
      txt_ntnm1.setValue("");
      txt_ntnm2.setValue("");
      txt_ntnm3.setValue("");
      txt_ntnm4.setValue("");
      txt_ntnm5.setValue("");
    }
  }
};
scwin.ed_avdt_onblur = function (e) {
  if ($c.str.trim($p, ed_cjdt.getValue()) == "") {
    ed_cjdt.setValue(ed_avdt.getValue());
  }
};
scwin.ed_agcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_agcd.getValue());
  if (scwin._isModified(ed_agcd)) {
    if (strClntNo.length > 0) {
      txt_agnm.setValue("");
      scwin.f_PopUp("ColoadAgent", "T", "F", "F");
    } else {
      txt_agnm.setValue("");
    }
  }
};
scwin.ed_dpcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_dpcd.getValue());
  if (strClntNo.length > 0) {
    txt_dpnm.setValue("");
    scwin.f_PopUp("Departure", "T", "F", "F");
  } else {
    txt_dpnm.setValue("");
  }
};
scwin.ed_dscd1_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_dscd1.getValue());
  if (scwin._isModified(ed_dscd1)) {
    if (strClntNo.length > 0) {
      txt_dsnm1.setValue("");
      scwin.f_PopUp("Destination", "T", "F", "F");
    } else {
      txt_dsnm1.setValue("");
    }
  }
};
scwin.ed_dscd1_onfocus = function (e) {
  if ($c.str.trim($p, ed_dscd1.getValue()) == "") {
    ed_dscd1.setValue("ICN");
  }
};
scwin.ed_ascd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_ascd.getValue());
  if (scwin._isModified(ed_ascd)) {
    if (strClntNo.length > 0) {
      txt_asnm.setValue("");
      scwin.f_PopUp("Customer", "T", "F", "F");
    } else {
      txt_asnm.setValue("");
    }
  }
};
scwin.ed_pncd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_pncd.getValue());
  if (scwin._isModified(ed_pncd)) {
    if (strClntNo.length > 0) {
      txt_pnnm.setValue("");
      scwin.f_PopUp("Partner", "T", "F", "F");
    } else {
      txt_pnnm.setValue("");
    }
  }
};
scwin.ed_dept_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_dept.getValue());
  if (scwin._isModified(ed_dept)) {
    if (strClntNo.length > 0) {
      txt_deptnm.setValue("");
      scwin.f_OpenCommonPopUp("Department", "T", "F", "F");
    } else {
      txt_deptnm.setValue("");
    }
  }
};
scwin.ed_sacd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_sacd.getValue());
  if (scwin._isModified(ed_sacd)) {
    if (strClntNo.length > 0) {
      txt_sanm.setValue("");
      scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
    } else {
      txt_sanm.setValue("");
    }
  }
};
scwin.ed_arcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_arcd.getValue());
  if (strClntNo.length > 0) {
    txt_arnm.setValue("");
    scwin.f_OpenCommonPopUp("Location", "T", "F", "F");
  } else {
    txt_arnm.setValue("");
  }
};
scwin.ed_itcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_itcd.getValue());
  if (scwin._isModified(ed_itcd)) {
    if (strClntNo.length > 0) {
      txt_itnm.setValue("");
      scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
    } else {
      txt_itnm.setValue("");
    }
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
scwin.ed_mftwht_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_mftwht.getValue());
  if (strClntNo.length > 0) {
    if (scwin._toNum(ed_rqrt.getValue()) == 0) {
      ed_rqrt.setValue(scwin._toNum(strClntNo) / 0.45359);
    }
    if (scwin._toNum(ed_tcwht.getValue()) == 0) {
      ed_tcwht.setValue(scwin._toNum(strClntNo));
    }
  }
};
scwin.ed_tcwht_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_tcwht.getValue());
  if (strClntNo.length > 0) {
    if (scwin._toNum(ed_cwht2.getValue()) == 0) {
      var data1 = $c.num.floor($p, scwin._toNum(strClntNo) / 0.45359, 3);
      ed_cwht2.setValue(data1);
    }
    if (scwin._toNum(ed_cbm.getValue()) == 0) {
      var data2 = $c.num.floor($p, scwin._toNum(strClntNo) / 166.66, 3);
      ed_cbm.setValue(data2);
    }
  }
};
scwin.ed_warecd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_warecd.getValue());
  if (scwin._isModified(ed_warecd)) {
    if (strClntNo.length > 0) {
      txt_warenm.setValue("");
      scwin.f_OpenCommonPopUp("Warehouse", "T", "F", "F");
    } else {
      txt_warenm.setValue("");
    }
  }
};
scwin.ed_mwarecd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_mwarecd.getValue());
  if (scwin._isModified(ed_mwarecd)) {
    if (strClntNo.length > 0) {
      txt_mwarenm.setValue("");
      scwin.f_OpenCommonPopUp("Mwarehouse", "T", "F", "F");
    } else {
      txt_mwarenm.setValue("");
    }
  }
};
scwin.ed_shCtcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_shCtcd.getValue());
  if (scwin._isModified(ed_shCtcd)) {
    if (strClntNo.length > 0) {
      scwin.f_OpenCommonPopUp("ShipperCountry", "T", "F", "F");
    } else {
      ed_shCtcd.setValue("");
    }
  }
};
scwin.ed_cnCtcd_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_cnCtcd.getValue());
  if (scwin._isModified(ed_cnCtcd)) {
    if (strClntNo.length > 0) {
      scwin.f_OpenCommonPopUp("ConsigneeCountry", "T", "F", "F");
    } else {
      ed_cnCtcd.setValue("");
    }
  }
};
scwin.ed_blpic_onblur = function (e) {
  var strClntNo = $c.str.trim($p, ed_blpic.getValue());
  if (scwin._isModified(ed_blpic)) {
    if (strClntNo.length > 0) {
      txt_blpic.setValue("");
      scwin.f_PopUp("B/L PIC", "T");
    } else {
      txt_blpic.setValue("");
    }
  }
};
scwin.pu_Find_onclick = function (e) {
  scwin.f_openPgm("Booking");
};
scwin.img_shcd_onclick = function (e) {
  scwin.f_PopUp('Shipper', 'F', 'F', 'F');
};
scwin.img_shCtcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ShipperCountry', 'F', 'F', 'F');
};
scwin.img_cncd_onclick = function (e) {
  scwin.f_PopUp("Consignee", "F", "F", "F");
};
scwin.img_cnCtcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp("ConsigneeCountry", "F", "F", "F");
};
scwin.img_ntcd_onclick = function (e) {
  scwin.f_PopUp('Notify', 'F', 'F', 'F');
};
scwin.chb_sacgb_onchange = function (info) {
  if (chb_sacgb.getValue() == "1") {
    scwin.f_NotifyHandling("Same");
  }
};
scwin.btn_trigger7_onclick = function (e) {
  scwin.f_NotifyHandling("Copy");
};
scwin.img_ascd_onclick = function (e) {
  scwin.f_PopUp("Customer", "F", "F", "F");
};
scwin.txt_asnm_onviewchange = function (info) {
  scwin.f_PopUp('Customer', 'T', 'F', 'F');
};
scwin.img_pncd_onclick = function (e) {
  scwin.f_PopUp("Partner", "F", "F", "F");
};
scwin.txt_pnnm_onviewchange = function (info) {
  scwin.f_PopUp('Partner', 'T', 'F', 'F');
};
scwin.img_ctcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp("Country", "F", "F", "F");
};
scwin.txt_ctnm_onviewchange = function (info) {
  scwin.f_OpenCommonPopUp('Country', 'T', 'F', 'F');
};
scwin.pu_FindBottom_onclick = function (e) {
  scwin.f_openPgm("Import_MNF");
};
scwin.pu_Freight_onclick = function (e) {
  scwin.f_openPgm("Freight");
};
scwin.pu_Plsheet_onclick = function (e) {
  scwin.f_openPgm("PL");
};
scwin.pu_Master_onclick = function (e) {
  scwin.f_openPgm("Mawb");
};
scwin.pu_ArrivalNotice_onclick = function (e) {
  scwin.f_openPgm("AN");
};
scwin.udc_agcd_onblurCodeEvent = function (e) {
  scwin.ed_agcd_onblur();
};
scwin.udc_agcd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('ColoadAgent', 'T', 'F', 'F');
};
scwin.udc_agcd_onclickEvent = function (e) {
  scwin.f_PopUp('ColoadAgent', 'F', 'F', 'F');
};
scwin.udc_dpcd_onblurCodeEvent = function (e) {
  scwin.ed_dpcd_onblur();
};
scwin.udc_dpcd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Departure', 'T', 'F', 'F');
};
scwin.udc_dpcd_onclickEvent = function (e) {
  scwin.f_PopUp("Departure", "F", "F", "F");
};
scwin.udc_dscd1_onblurCodeEvent = function (e) {
  scwin.ed_dscd1_onblur();
};
scwin.udc_dscd1_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Destination', 'T', 'F', 'F');
};
scwin.udc_dscd1_onclickEvent = function (e) {
  scwin.f_PopUp("Destination", "F", "F", "F");
};
scwin.udc_warecd_onblurCodeEvent = function (e) {
  scwin.ed_warecd_onblur();
};
scwin.udc_warecd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Warehouse', 'T', 'F', 'F');
};
scwin.udc_warecd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Warehouse", "F", "F", "F");
};
scwin.udc_mwarecd_onblurCodeEvent = function (e) {
  scwin.ed_mwarecd_onblur();
};
scwin.udc_mwarecd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Mwarehouse', 'T', 'F', 'F');
};
scwin.udc_mwarecd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Mwarehouse", "F", "F", "F");
};
scwin.udc_itcd_onblurCodeEvent = function (e) {
  scwin.ed_itcd_onblur();
};
scwin.udc_itcd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
};
scwin.udc_itcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
scwin.udc_sacd_onblurCodeEvent = function (e) {
  scwin.ed_sacd_onblur();
};
scwin.udc_sacd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
};
scwin.udc_sacd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Salesman", "F", "F", "F");
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.ed_dept_onblur();
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Department', 'T', 'F', 'F');
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Department", "F", "F", "F");
};
scwin.udc_ascdpic_onblurCodeEvent = function (e) {
  scwin.ed_ascdpic_onblur();
};
scwin.udc_ascdpic_onviewchangeNameEvent = function (info) {
  if (ed_ascdpic.getValue() == "") {
    scwin.f_PopUp('CustomerPic', 'F');
  }
};
scwin.udc_ascdpic_onclickEvent = function (e) {
  scwin.f_PopUp('CustomerPic', 'F');
};
scwin.udc_pncdpic_onblurCodeEvent = function (e) {
  scwin.ed_pncdpic_onblur();
};
scwin.udc_pncdpic_onviewchangeNameEvent = function (info) {
  if (ed_pncdpic.getValue() == "") {
    scwin.f_PopUp('PartnerPic', 'F');
  }
};
scwin.udc_pncdpic_onclickEvent = function (e) {
  scwin.f_PopUp("PartnerPic", "F");
};
scwin.udc_blpic_onblurCodeEvent = function (e) {
  scwin.ed_blpic_onblur();
};
scwin.udc_blpic_onviewchangeNameEvent = function (info) {
  if (ed_blpic.getValue() == "") {
    scwin.f_PopUp('B/L PIC', 'F');
  }
};
scwin.udc_blpic_onclickEvent = function (e) {
  scwin.f_PopUp("B/L PIC", "F");
};

//-------------------------------------------------------------------------//
// submission events
//-------------------------------------------------------------------------//
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_HouseBillInfo.getRowCount() == 0) {
    scwin.f_ProcessResult("NotExistHouseInfo");
  } else {
    ds_HouseBillInfo.setRowPosition(0);
    ds_ArrivalInfo.setRowPosition(0);
    ds_hitekContents.setRowPosition(0);
    ds_DeliveryInfo.setRowPosition(0);
    scwin.f_ProcessResult("ExistHouseInfo");
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (scwin.actionFlag == "Save") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_MhnoLoading();
    scwin.f_Retrieve();
  }
  if (scwin.actionFlag == "Delete") {
    scwin.f_ProcessResult("DeleteAction");
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  }
  scwin.processFlag = "None";
};
scwin.sbm_RetrieveBooking_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_CustomerBookingInfo.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, [ed_srno.getValue()]); //@이(가) 존재하지 않습니다.
    ed_srno.focus();
  } else {
    scwin.f_CustomerBookingInfoBinding();
  }
};
scwin.sbm_RetrieveMaster_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_MasterInfo.getRowCount() == 0) {
    return;
  }
  scwin.f_MasterInfoBinding();
};
scwin.sbm_RetrieveHouseBillCheck_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  if (ds_HouseBillCheck.getRowCount() == 0) {
    scwin.processFlag = "None";
  } else {
    scwin.processFlag = "Exist";
  }
};
scwin.sbm_InvoiceCheck_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail
};

// Booking No text클릭
scwin.btn_anchor1_onclick = function () {
  scwin.f_PopUp('CustomerBookingInfo', 'F', 'T', 'F');
};
scwin.ed_dvct_oneditkeyup = function (info, e) {
  var changeVal = info.newValue.toUpperCase();
  ed_dvct.setValue(changeVal);
};
scwin.ed_invCucd_oneditkeyup = function (info, e) {
  var changeVal = info.newValue.toUpperCase();
  ed_invCucd.setValue(changeVal);
};
scwin.ed_hscd_oneditkeyup = function (info, e) {
  var changeVal = info.newValue.toUpperCase();
  ed_hscd.setValue(changeVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'',id:'ed_blno',style:'width:200px;',editType:'select','ev:onblur':'scwin.ed_blno_onblur',class:'',mandatory:'true',allowChar:'a-zA-Z0-9',maxlength:'20','ev:onkeyup':'scwin.ed_blno_onkeyup'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_hmhno',ref:'',class:'',allOption:'',chooseOption:'',disableEdit:'true',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_anchor1',style:'width:100px; height:23px; ','ev:onclick':'scwin.btn_anchor1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Booking No'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.srno',allowChar:'a-zA-Z0-9',id:'ed_srno',style:'width:150px;',editType:'select','ev:onblur':'scwin.ed_srno_onblur',class:'','ev:onkeyup':'scwin.ed_srno_onkeyup',maxlength:'12'}},{T:1,N:'xf:trigger',A:{style:'',id:'pu_Find_booking',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.pu_Find_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Booking'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.mblno',allowChar:'a-zA-Z0-9',id:'ed_mblno',style:'width:200px;',editType:'select','ev:onblur':'scwin.ed_mblno_onblur',class:'',maxlength:'21',dataType:'text',editFormat:'XXX-XXXXXXXXXXXXXXXXX','ev:onkeyup':'scwin.ed_mblno_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_udc_ilcomCode_onblurNameEvent',hideName:'true',id:'udc_bookingNo',nameId:'',popupID:'',selectID:'retrieveAirInCustomerInfo',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Main',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Other',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox col3 wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shipper',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'img_shcd',code:'shcd',codeId:'ed_shcd','ev:onblurCodeEvent':'scwin.ed_shcd_onblur','ev:onclickEvent':'scwin.img_shcd_onclick',hideName:'true',id:'udc_shcd',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveEngClntInfo',style:'',validExpCode:'Shipper:no',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Country',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_shCtcd',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveCountryEngCodeInfo',style:'',id:'udc_shCtcd','ev:onblurCodeEvent':'scwin.ed_shCtcd_onblur','ev:onclickEvent':'scwin.img_shCtcd_onclick',btnId:'img_shCtcd',code:'shCtcd',mandatoryCode:'true',validExpCode:'Country:no',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox no-border'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'NAME',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_shnm1',ref:'data:ds_HouseBillInfo.shnm1',placeholder:'',class:' ',objType:'data',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STREET',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_shnm2',ref:'data:ds_HouseBillInfo.shnm2',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PLACE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_shnm3',ref:'data:ds_HouseBillInfo.shnm3',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STATE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_shnm4',ref:'data:ds_HouseBillInfo.shnm4',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'ZIP',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_shnm5',ref:'data:ds_HouseBillInfo.shnm5',placeholder:'',class:' ',objType:'data',maxlength:'35'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Consignee',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cncd','ev:onblurCodeEvent':'scwin.ed_cncd_onblur','ev:onclickEvent':'scwin.img_cncd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveEngClntInfo',style:'',id:'udc_cncd',code:'cncd',btnId:'img_cncd',validExpCode:'Consignee:no',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}},{T:1,N:'xf:select',A:{ref:'data:ds_HouseBillInfo.bankgb',appearance:'full',style:'',id:'chb_bankgb',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BANK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Country',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cnCtcd','ev:onblurCodeEvent':'scwin.ed_cnCtcd_onblur','ev:onclickEvent':'scwin.img_cnCtcd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveCountryEngCodeInfo',style:'',btnId:'img_cnCtcd',id:'udc_cnCtcd',mandatoryCode:'true',code:'cnCtcd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Country:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox no-border'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'NAME',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm1',ref:'data:ds_HouseBillInfo.cnnm1',placeholder:'',class:' ',objType:'data',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STREET',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm2',ref:'data:ds_HouseBillInfo.cnnm2',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PLACE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm3',ref:'data:ds_HouseBillInfo.cnnm3',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STATE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm4',ref:'data:ds_HouseBillInfo.cnnm4',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'ZIP',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm5',ref:'data:ds_HouseBillInfo.cnnm5',placeholder:'',class:' ',objType:'data',maxlength:'35'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_HouseBillInfo.rggb',appearance:'full',style:'',id:'rd_rggb',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1',validExp:'Customer/Person:no',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Person'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.rgno',allowChar:'A-Z0-9',id:'ed_rgno',style:'',editType:'select',class:' ',objType:'data',validExp:'Customer/Person No:no'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Notify',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ntcd','ev:onblurCodeEvent':'scwin.ed_ntcd_onblur','ev:onclickEvent':'scwin.img_ntcd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveEngClntInfo',style:'',id:'udc_ntcd',code:'ntcd',btnId:'img_ntcd',validExpCode:'Notify:no',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}},{T:1,N:'xf:select',A:{ref:'data:ds_HouseBillInfo.sacgb',appearance:'full',style:'',id:'chb_sacgb',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'','ev:onclick':'scwin.chb_sacgb_onclick',objType:'data',falseValue:'0',validExp:'SAME AS CONSIGNEE Check:no','ev:onchange':'scwin.chb_sacgb_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SAME'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger7',type:'button',class:'btn','ev:onclick':'scwin.btn_trigger7_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox no-border'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'NAME',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_ntnm1',ref:'data:ds_HouseBillInfo.ntnm1',placeholder:'',class:' ',objType:'data',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STREET',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_ntnm2',ref:'data:ds_HouseBillInfo.ntnm2',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PLACE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_ntnm3',ref:'data:ds_HouseBillInfo.ntnm3',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'STATE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_ntnm4',ref:'data:ds_HouseBillInfo.ntnm4',placeholder:'',class:' ',objType:'data',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'ZIP',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_ntnm5',ref:'data:ds_HouseBillInfo.ntnm5',placeholder:'',class:' ',objType:'data',maxlength:'35'}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Co-Load Agent ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_agcd',codeId:'ed_agcd',nameId:'txt_agnm',btnId:'img_agcd','ev:onblurCodeEvent':'scwin.udc_agcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_agcd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'agcd',ref:'data:ds_HouseBillInfo.agcd',name:'agnm',selectID:'retrieveEngClntInfo',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_agcd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Departure ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_dpcd',codeId:'ed_dpcd',nameId:'txt_dpnm',btnId:'img_dpcd','ev:onblurCodeEvent':'scwin.udc_dpcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dpcd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'dpcd',ref:'data:ds_HouseBillInfo.dpcd',name:'dpnm',selectID:'retrieveAirPortCode',objTypeName:'data',objTypeCode:'data',validExpCode:'Departure:no',validExpName:'Departure Name:no','ev:onviewchangeNameEvent':'scwin.udc_dpcd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Onboard Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_HouseBillInfo.ondt',id:'ed_ondt',style:'text-align: left;',editType:'select',class:' cal',calendarValueType:'yearMonthDate',objType:'data',validExp:'Onboard Date:no',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Flight No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.fltno',allowChar:'A-Z0-9',id:'ed_fltno',style:'',editType:'select',class:' w70',objType:'data',validExp:'Flight No:no',maxlength:'6'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Destination',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_dscd1',codeId:'ed_dscd1',nameId:'txt_dsnm1',btnId:'img_dscd1','ev:onblurCodeEvent':'scwin.udc_dscd1_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dscd1_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'dscd1',ref:'data:ds_HouseBillInfo.dscd1',name:'dsnm1',selectID:'retrieveAirPortCode',objTypeName:'data',objTypeCode:'data',validExpCode:'Destination:no',validExpName:'Destination Name:no','ev:onviewchangeNameEvent':'scwin.udc_dscd1_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Arrival Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_HouseBillInfo.avdt',id:'ed_avdt',style:'text-align: left;',editType:'select','ev:onblur':'scwin.ed_avdt_onblur',class:' cal',calendarValueType:'yearMonthDate',objType:'data',validExp:'Arrival Date:no',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PKG',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.mftpkg',id:'ed_mftpkg',style:'text-align: right;',displayFormat:'#,###',editType:'select',dataType:'float',adjustMaxLength:'true',class:' w100',maxlength:'15',objType:'data',validExp:'PKG:no',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CBM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.cbm',id:'ed_cbm',style:'text-align: right;',displayFormat:'#,###.###',editType:'select',adjustMaxLength:'true',class:' w100',maxlength:'15.3',validExp:'CBM:no',objType:'data',dataType:'float',applyFormat:'all'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'G/Weight',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.mftwht',dataType:'number',id:'ed_mftwht',style:'text-align: right;',displayFormat:'#,###.###',editType:'select','ev:onblur':'scwin.ed_mftwht_onblur',adjustMaxLength:'true',class:' w100',maxlength:'15',objType:'data',validExp:'G/Weight:no',applyFormat:'all'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(Kg)',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.rqrt',id:'ed_rqrt',style:'text-align: right;',displayFormat:'#,###.##',editType:'select',dataType:'number',adjustMaxLength:'true',class:' w100',maxlength:'15',objType:'data',validExp:'G/Weight Kg:no',maxByteLength:'15',applyFormat:'all'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(Lb)',class:''}}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_kggb',class:' w70',allOption:'',objType:'data',chooseOption:'',ref:'data:ds_HouseBillInfo.kggb',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KG'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LB'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'C/Weight',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.tcwht',dataType:'number',id:'ed_tcwht',style:'text-align: right;',displayFormat:'#,###.###',editType:'select','ev:onblur':'scwin.ed_tcwht_onblur',adjustMaxLength:'true',class:' w100',maxlength:'15',objType:'data',validExp:'C/Weight Kg:no',applyFormat:'all'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(Kg)',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.cwht2',id:'ed_cwht2',style:'text-align: right;',displayFormat:'#,###.###',editType:'select',dataType:'number',adjustMaxLength:'true',class:' w100',maxlength:'15',objType:'data',validExp:'C/Weight Lb:no',maxByteLength:'15',applyFormat:'all'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(Lb)',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Warehouse',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_warecd',codeId:'ed_warecd',nameId:'txt_warenm',btnId:'img_warecd','ev:onblurCodeEvent':'scwin.udc_warecd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_warecd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'warecd',ref:'data:ds_HouseBillInfo.warecd',name:'warenm',selectID:'retrieveAirBoneZoneCode',mandatoryCode:'true',objTypeCode:'data',validExpCode:'Wharehouse:no',objTypeName:'data',validExpName:'Wharehouse Name:no','ev:onviewchangeNameEvent':'scwin.udc_warecd_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',objType:'data',editType:'select',style:'',id:'lc_wareKndCd',ref:'data:ds_HouseBillInfo.wareKndCd',class:' w150',disableEdit:'true',displayMode:'value',emptyIndex:'-1',emptyItem:'true',validExp:'Type:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하기장소',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_mwarecd',codeId:'ed_mwarecd',nameId:'txt_mwarenm',btnId:'img_mwarecd','ev:onblurCodeEvent':'scwin.udc_mwarecd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mwarecd_onblurNameEvent','ev:onclickEvent':'scwin.udc_mwarecd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'mwarecd',ref:'data:ds_HouseBillInfo.mwarecd',name:'mwarenm',selectID:'retrieveAirBoneZoneCode',objTypeCode:'data',mandatoryCode:'true',validExpCode:'하기장소:no',objTypeName:'data',validExpName:'하기장소명:no','ev:onviewchangeNameEvent':'scwin.udc_mwarecd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',objType:'data',style:'',id:'lc_mwareClsCd',ref:'data:ds_HouseBillInfo.mwareClsCd',class:' w150',disableEdit:'true',displayMode:'value',emptyIndex:'-1',emptyItem:'true',validExp:'Type:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Item',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_itcd',codeId:'ed_itcd',nameId:'txt_itnm',btnId:'img_itcd','ev:onblurCodeEvent':'scwin.udc_itcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_itcd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'itcd',ref:'data:ds_HouseBillInfo.itcd',name:'itnm',selectID:'retrieveCommGoodsInfo',objTypeName:'data',objTypeCode:'data',validExpCode:'Item:no',validExpName:'Item Name:no','ev:onviewchangeNameEvent':'scwin.udc_itcd_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'EDI Item',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_ngnm1',ref:'data:ds_HouseBillInfo.ngnm1',placeholder:'',class:' ',objType:'data',validExp:'Edi Item Name:no',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PickUp Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_HouseBillInfo.indate',id:'ed_indate',style:'text-align: left;',editType:'select',class:' cal',calendarValueType:'yearMonthDate',objType:'data',validExp:'PickUp Date:no',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'D.V Customer',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.dvct',allowChar:'a-zA-Z0-9',id:'ed_dvct',style:'',editType:'select',class:' w120',objType:'data',validExp:'D.V Customer:no:maxLength=20',maxlength:'20','ev:oneditkeyup':'scwin.ed_dvct_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'P/O No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_pono',ref:'data:ds_HouseBillInfo.pono',placeholder:'',class:' w120',objType:'data',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'L/C Number',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Invoice Number',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Invoice Value',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_lcno',ref:'data:ds_HouseBillInfo.lcno',placeholder:'',class:' ',objType:'data',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_cino',ref:'data:ds_HouseBillInfo.cino',placeholder:'',class:' ',objType:'data',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.invCucd',id:'ed_invCucd',style:'',editType:'select',class:' w50',objType:'data',validExp:'Customer Code:no',allowChar:'a-zA-Z0-9',maxlength:'3','ev:oneditkeyup':'scwin.ed_invCucd_oneditkeyup'}},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.invAmt',id:'ed_invAmt',style:'text-align: right;',displayFormat:'#,###',editType:'select',dataType:'number',adjustMaxLength:'true',class:' ',maxlength:'15',objType:'data',validExp:'Invoice Value:no'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Salesman',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_sacd',codeId:'ed_sacd',nameId:'txt_sanm',btnId:'img_sacd','ev:onblurCodeEvent':'scwin.udc_sacd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sacd_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'sacd',ref:'data:ds_HouseBillInfo.sacd',name:'sanm',selectID:'retrieveEmpInfo',objTypeName:'data',objTypeCode:'data',validExpCode:'Salesman:no',validExpName:'Salesman Name:no',mandatoryName:'true','ev:onviewchangeNameEvent':'scwin.udc_sacd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'pu_departmentChange',type:'button',class:'btn link','ev:onclick':'scwin.f_departmentChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Department'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_dept',codeId:'ed_dept',nameId:'txt_deptnm',btnId:'img_dept','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'dept',ref:'data:ds_HouseBillInfo.dept',name:'deptnm',selectID:'retrieveOpDeptCdInfo',objTypeCode:'data',objTypeName:'data',validExpCode:'Department:no',validExpName:'Department Name:no',mandatoryName:'true','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 350px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Cargo Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',objType:'data',editType:'select',style:'',id:'rd_itgb',ref:'data:ds_HouseBillInfo.itgb',class:' w150',disableEdit:'true',validExp:'Type:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'B/L Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_ergb',class:' w150',allOption:'',chooseOption:'',objType:'data',ref:'data:ds_HouseBillInfo.ergb',displayMode:'value delim label',validExp:'B/L Type:no'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Transhipment'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Custome',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ascd','ev:onblurCodeEvent':'scwin.ed_ascd_onblur','ev:onclickEvent':'scwin.img_ascd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveEngClntInfo',style:'',id:'udc_ascd',code:'ascd',allowCharCode:'a-zA-Z0-9',btnId:'img_ascd',UpperFlagCode:'1',validExpCode:'Customer:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_asnm',ref:'data:ds_HouseBillInfo.asnm',placeholder:'',class:' ',objType:'data','ev:onviewchange':'scwin.txt_asnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PIC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',id:'udc_ascdpic',codeId:'ed_ascdpic',nameId:'txt_ascdpicnm',btnId:'img_ascdpic','ev:onblurCodeEvent':'scwin.udc_ascdpic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ascdpic_onclickEvent',name:'ascdPicnm',code:'ascdPic',refDataCollection:'ds_HouseBillInfo',objTypeCode:'data',objTypeName:'data',selectID:'retrieveClntPicInfo',validExpCode:'Customer PIC:no',validExpName:'Customer PIC Name:no','ev:onviewchangeNameEvent':'scwin.udc_ascdpic_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'2',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Partner',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_pncd','ev:onblurCodeEvent':'scwin.ed_pncd_onblur','ev:onclickEvent':'scwin.img_pncd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveEngClntInfo',style:'',id:'udc_pncd',code:'pncd',allowCharCode:'a-zA-Z0-9',btnId:'img_pncd',validExpCode:'Partner Code:no',UpperFlagCode:'1'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_pnnm',ref:'data:ds_HouseBillInfo.pnnm',placeholder:'',class:' ',objType:'data','ev:onviewchange':'scwin.txt_pnnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PIC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',id:'udc_pncdpic',codeId:'ed_pncdpic',nameId:'txt_pncdpicnm',btnId:'img_pncdpic','ev:onblurCodeEvent':'scwin.udc_pncdpic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_pncdpic_onclickEvent',selectID:'retrieveClntPicInfo',refDataCollection:'ds_HouseBillInfo',code:'pncdPic',name:'pncdPicnm',objTypeCode:'data',objTypeName:'data',validExpCode:'Partner PIC:no',validExpName:'Partner PIC Name:no','ev:onviewchangeNameEvent':'scwin.udc_pncdpic_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'2',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Country',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ctcd','ev:onblurCodeEvent':'scwin.ed_ctcd_onblur','ev:onclickEvent':'scwin.img_ctcd_onclick','ev:onviewchangeCodeEvent':'',hideName:'true',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_HouseBillInfo',selectID:'retrieveCountryEngCodeInfo',style:'',btnId:'img_ctcd',id:'udc_ctcd',code:'ctcd',allowCharCode:'a-zA-Z0-9',validExpCode:'Country:no',UpperFlagCode:'1'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_ctnm',ref:'data:ds_HouseBillInfo.ctnm',placeholder:'',class:' ',objType:'data','ev:onviewchange':'scwin.txt_ctnm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Result Date',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_HouseBillInfo.cjdt',id:'ed_cjdt',style:'text-align: left;',editType:'select',class:' cal',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Order No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_HouseBillInfo.odrNo',allowChar:'A-Z',id:'ed_odrNo',style:'',editType:'select',class:' w100',objType:'data',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Account Information',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'INV Billing Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{editType:'select',id:'ed_arInv',style:'text-align: left;',class:' cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_HouseBillInfo.invBillingDate',readOnly:'true',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'PTN Billing Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{editType:'select',id:'ed_arHp',style:'text-align: left;',class:' cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_HouseBillInfo.ptnBillingDate',readOnly:'true',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Tax Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{editType:'select',id:'ed_arTax',style:'text-align: left;',class:' cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_HouseBillInfo.txtDate',readOnly:'true',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Tax Amount',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{editType:'select',id:'ed_arTaxAmount',style:'text-align: right;',dataType:'number',adjustMaxLength:'true',displayFormat:'#,###',class:' w100 tar',maxlength:'15',objType:'data',ref:'data:ds_HouseBillInfo.txtAmount',readOnly:'true',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'UCR',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_ucrNo',ref:'data:ds_HouseBillInfo.ucrNo',placeholder:'',class:' w100',objType:'data'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Handling Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_hdif1',ref:'data:ds_HouseBillInfo.hdif1',placeholder:'',class:' ',objType:'data',maxlength:'90'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_hdif2',ref:'data:ds_HouseBillInfo.hdif2',placeholder:'',class:' ',objType:'data',maxlength:'90'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_hdif3',ref:'data:ds_HouseBillInfo.hdif3',placeholder:'',class:' ',objType:'data',maxlength:'90'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'width: 500px;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Arrival Notice',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group9',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ArrivalInfo',style:'',autoFit:'allColumn',id:'gr_freight',visibleRowNum:'2',class:'wq_gvw',fixedColumn:'1',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col2',value:'Arrival Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'col3',value:'PIC',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'anno',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'andt',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'annm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'More Information',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Special Cargo',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{ref:'data:ds_HouseBillInfo.sccd',appearance:'full',style:'',id:'rd_sccd',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'HS Code',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'',allowChar:'a-zA-Z0-9',id:'ed_hscd',style:'',editType:'select',class:' w150',objType:'data',maxlength:'10','ev:oneditkeyup':'scwin.ed_hscd_oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'WT/VAL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_HouseBillInfo.frpc',appearance:'full',style:'',id:'rd_frpc',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CC'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'OTHER',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group11',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_otpc1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_otpc2',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CC'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'B/L PIC',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',class:'w250',id:'udc_blpic',codeId:'ed_blpic',nameId:'txt_blpic',btnId:'img_PopUp','ev:onblurCodeEvent':'scwin.udc_blpic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_blpic_onclickEvent',refDataCollection:'ds_HouseBillInfo',code:'pic',ref:'data:ds_HouseBillInfo.pic',selectID:'retrieveEmpInfo',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_blpic_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'10',UpperFlagCode:'1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'width: 500px;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'B/L Delivery Information ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Date',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_DeliveryInfo.dvdt',id:'ed_dvdt',style:'text-align: left;',editType:'select',class:' cal',calendarValueType:'yearMonthDate',objType:'data',readOnly:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Undertaker',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_DeliveryInfo.cattn',allowChar:'a-z',id:'ed_cattn',style:'',editType:'select',class:' ',objType:'data',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Find',label:'저장',style:'',type:'button','ev:onclick':'scwin.pu_FindBottom_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Freight',label:'저장',style:'',type:'button','ev:onclick':'scwin.pu_Freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Plsheet',label:'저장',style:'',type:'button','ev:onclick':'scwin.pu_Plsheet_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'B.Sheet'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Master',label:'저장',style:'',type:'button','ev:onclick':'scwin.pu_Master_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Master B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ArrivalNotice',label:'저장',style:'',type:'button','ev:onclick':'scwin.pu_ArrivalNotice_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Arrival Notice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_HawbNoChange',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_HawbNoChange'},E:[{T:1,N:'xf:label',E:[{T:3,text:'H No.CHG'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Copy',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'bCancel',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_FileDownload',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_FileDownload',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Upload'}]}]}]}]}]}]}]}]}]})